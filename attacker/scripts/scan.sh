#!/bin/bash
set -e
TARGET="${1:-client-b}"
echo "Escaneando $TARGET ..."
nmap -p 1-1000 "$TARGET"