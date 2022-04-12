const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const globby = require("globby");

if (require.main === module) {
  try {
    console.log("Processing CSS...");
    main();
  } catch (e) {
    console.error("Error: " + e.message);
    process.exit(1);
  }
}

function main() {
  const destDir = path.join(__dirname, "../../clpc");

  const sortArrByCondition = (arr, func) =>
    arr.sort((oA, oB) => (func(oA, oB) ? 1 : func(oB, oA) ? -1 : 0));

  // Copy CSS from `packages/components/src/foo` to `packages/components/foo`.
  // Inline if it's .src.css.
  let cssPaths = globby.sync("**/styles*.css", {
    cwd: path.join(__dirname, "../packages/components/src"),
    ignore: [],
    absolute: true,
    onlyFiles: true,
  });
  if (cssPaths.length === 0) {
    throw new Error("Found 0 paths.");
  }
  // These need to come last, because the styles have dependencies on other styles.
  cssPaths = sortArrByCondition(
    cssPaths,
    (x) =>
      x.includes("/alert-dialog") ||
      x.includes("/combobox") ||
      x.includes("/flash-message")
  );

  for (let p of cssPaths) {
    const packageName = path.basename(path.dirname(p));
    const _filename = path.basename(p);
    const isSrc = _filename.includes(".src");
    const filename = isSrc ? _filename.replace(".src", "") : _filename;
    const dest = path.join(
      __dirname,
      `../packages/components/${packageName}/${filename}`
    );
    fs.copyFileSync(p, dest);

    if (isSrc) {
      inlineCss(dest);
    }
  }

  // Copy everything except `src` to clpc/.
  const filePaths = globby.sync("*", {
    cwd: path.join(__dirname, "../packages/components"),
    absolute: true,
    onlyFiles: true,
  });
  for (let p of filePaths) {
    const filename = path.basename(p);
    const dest = path.join(destDir, filename);
    fse.copyFileSync(p, dest);
  }

  const packagePaths = globby.sync("*", {
    cwd: path.join(__dirname, "../packages/components"),
    ignore: ["node_modules", "src"],
    absolute: false,
    onlyDirectories: true,
  });
  for (let p of packagePaths) {
    const dest = path.join(destDir, p);
    fse.copySync(path.join(__dirname, "../packages/components", p), dest);
  }
}

function inlineCss(p) {
  // Very crude inlining of CSS @import
  const code = fs.readFileSync(p, { encoding: "utf8" });
  const re = /(?:@import)\s(?:url\()?\s?["\'](.*?)["\']\s?\)?(?:[^;]*);?/gi;
  const importMatches = code.match(re);
  if (importMatches?.length > 0) {
    let newCode = code;
    for (let importMatch of importMatches) {
      const importPath = importMatch.slice(13, -3);
      const codeToInlinePath = path.resolve(p, importPath);
      const codeToInline = fs.readFileSync(codeToInlinePath, {
        encoding: "utf8",
      });
      newCode = newCode.replace(
        importMatch,
        codeToInline + `\n/* End inline */\n`
      );
    }
    fs.writeFileSync(p, newCode);
  }
}

module.exports = main;
