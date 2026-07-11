const https = require('https');

https.get('https://sa.zain.com/ar', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const urls = data.match(/href="([^"]+\.css[^"]*)"/g) || [];
    console.log(urls.join('\n'));
  });
});
