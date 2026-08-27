const fs = require('fs');
const https = require('https');
const path = require('path');

const destinations = [
  { name: 'ooty', article: 'Ooty' },
  { name: 'chikmagalur', article: 'Chikmagalur' },
  { name: 'wayanad', article: 'Wayanad_district' },
  { name: 'hampi', article: 'Hampi' },
  { name: 'gokarna', article: 'Gokarna,_Karnataka' }
];

const destDir = path.join(__dirname, 'public', 'images', 'destinations');
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function downloadImages() {
  for (const dest of destinations) {
    try {
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${dest.article}`;
      
      const response = await new Promise((resolve, reject) => {
        https.get(apiUrl, { headers: { 'User-Agent': userAgent } }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
          res.on('error', reject);
        });
      });

      const pages = response.query.pages;
      const pageId = Object.keys(pages)[0];
      const page = pages[pageId];

      if (page && page.original && page.original.source) {
        let imgUrl = page.original.source;
        const filePath = path.join(destDir, `${dest.name}.jpg`);
        
        await new Promise((resolve, reject) => {
          https.get(imgUrl, { headers: { 'User-Agent': userAgent } }, (res) => {
            if (res.statusCode === 200) {
              const fileStream = fs.createWriteStream(filePath);
              res.pipe(fileStream);
              fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded ${dest.name}.jpg (Size: ${fs.statSync(filePath).size} bytes)`);
                resolve();
              });
            } else {
              console.log(`Failed to download ${dest.name}: HTTP ${res.statusCode}`);
              resolve();
            }
          }).on('error', reject);
        });
      } else {
        console.log(`No image found for ${dest.name}`);
      }
      
      // Delay 3 seconds
      await new Promise(r => setTimeout(r, 3000));
    } catch (err) {
      console.error(`Error for ${dest.name}:`, err.message);
    }
  }
}

downloadImages();
