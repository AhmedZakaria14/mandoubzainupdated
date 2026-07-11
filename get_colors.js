const https = require('https');

https.get('https://sa.zain.com/ar', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const hexes = data.match(/#[0-9a-fA-F]{6}/g) || [];
    const counts = {};
    hexes.forEach(h => counts[h] = (counts[h] || 0) + 1);
    console.log(Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 10));
  });
});
