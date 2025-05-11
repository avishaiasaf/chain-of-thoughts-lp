#!/bin/bash
# Simple script to deploy to GitHub Pages

echo "🚀 Building the project..."
npm run build

echo "📦 Preparing for deployment..."
touch out/.nojekyll

# Check if CNAME exists and is not commented out
if [ -f "public/CNAME" ] && grep -q "^[^#]" public/CNAME; then
  echo "🔗 Copying CNAME file..."
  cp public/CNAME out/
fi

echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d out -m "Deploy: $(date)"

echo "✅ Deployment complete!" 