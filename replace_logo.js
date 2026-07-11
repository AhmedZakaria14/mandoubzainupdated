const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (['node_modules', '.next', 'dist', '.git'].includes(file)) continue;
    
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replaceInDir(filePath);
    } else if (stat.isFile()) {
      let content = fs.readFileSync(filePath, 'utf8');
      let newContent = content
        .replace(/https:\/\/res\.cloudinary\.com\/dxvjqrb9l\/image\/upload\/v1777279051\/logo_qeuexm\.png/g, 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783750769/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5g_%D8%A7%D8%AE%D8%B1_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB_gcjlva.png');
        
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

replaceInDir(__dirname);
console.log('Done.');
