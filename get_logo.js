const https = require('https');

https.get('https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783750769/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5g_%D8%A7%D8%AE%D8%B1_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB_gcjlva.png', (res) => {
  // We can't really parse PNG in plain node easily without a lib.
  // But wait! We can just fetch the CSS of https://sa.zain.com/ar and look for CSS variables.
});
