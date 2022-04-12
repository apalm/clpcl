#!/bin/bash

# https://github.com/lerna/lerna/issues/1647#issuecomment-869314522
yarn lerna exec -- touch .lerna-changed-buster-$RANDOM
