#!/bin/bash
PREVIOUS_VERSION=$(node -p -e "require('./tmp/before.json').version")
PROPOSED_VERSION=$(node -p -e "require('./package.json').version")
echo "change-version.js $PREVIOUS_VERSION $PROPOSED_VERSION"
./build/change-version.js $PREVIOUS_VERSION $PROPOSED_VERSION