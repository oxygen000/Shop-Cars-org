#!/bin/bash
set -e

# Build both apps
npx nx build shop
npx nx build admin

# Create dist directory structure
mkdir -p dist/shop
mkdir -p dist/admin

# Copy built assets
cp -r apps/shop/dist/* dist/shop/
cp -r apps/admin/dist/* dist/admin/

echo "Build completed successfully" 