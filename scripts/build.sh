#!/bin/sh

# stop user if they're not using root
if [[ $EUID -ne 0 ]]; then
   echo "Permission denied\nThis script must be run as root" 
   exit 1
fi

# if built directory doesn't exist, create one
if [ ! -d "built" ]; then
    mkdir built
fi

# remove all files already in built
rm -rf built/*

# copy all source files into built
cp -r src/** built

# remove all TypeScript files
rm -rf built/**/*.ts*

# compile server TypeScript files and put into built
tsc src/server/**.ts* --outDir built/server --removeComments false --strict true --resolveJsonModule true --jsx react

# compile all client files
parcel build src/client/index.html -d built/client --no-source-maps

# output our success
echo
echo Build successful.
echo