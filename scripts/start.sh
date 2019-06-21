#!/bin/sh

if [[ $EUID -ne 0 ]]; then
   echo "Permission denied\nThis script must be run as root" 
   exit 1
fi

npm run build
node built/server/index.js