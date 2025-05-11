const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Ensure the out directory has the .nojekyll file
const outDir = path.join(__dirname, '../out');
const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

// Copy custom domain file if it exists
const cnamePath = path.join(__dirname, '../public/CNAME');
if (fs.existsSync(cnamePath)) {
  const outCnamePath = path.join(outDir, 'CNAME');
  fs.copyFileSync(cnamePath, outCnamePath);
}

// Deploy to GitHub Pages
ghpages.publish(outDir, {
  branch: 'gh-pages',
  message: 'Auto-generated deployment to GitHub Pages',
}, (err) => {
  if (err) {
    console.error('Deployment error:', err);
    return;
  }
  console.log('Deployment complete!');
}); 