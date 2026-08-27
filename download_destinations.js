const fs = require('fs');
const https = require('https');
const path = require('path');

const destinations = [
  { name: 'ooty', article: 'Ooty' },
  { name: 'chikmagalur', article: 'Chikmagalur' },
  { name: 'wayanad', article: 'Wayanad_district' },
  { name: 'tirupati', article: 'Tirupati' },
  { name: 'hampi', article: 'Hampi' },
  { name: 'gokarna', article: 'Gokarna,_Karnataka' }
];

const destDir = path.join(__dirname, 'public', 'images', 'destinations');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

async function downloadImages() {
  for (const dest of destinations) {
    try {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${dest.article}`;
      
      const response = await new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'NodeJS/14.0 (contact@gnrcabs.com)' } }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
          res.on('error', reject);
        });
      });

      if (response && response.originalimage && response.originalimage.source) {
        const imgUrl = response.originalimage.source;
        const filePath = path.join(destDir, `${dest.name}.jpg`);
        
        await new Promise((resolve, reject) => {
          https.get(imgUrl, (res) => {
            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
              fileStream.close();
              console.log(`Downloaded ${dest.name}.jpg`);
              resolve();
            });
          }).on('error', reject);
        });
      } else {
        console.log(`No image found for ${dest.name}`);
      }
    } catch (err) {
      console.error(`Failed to download for ${dest.name}:`, err.message);
    }
  }
}

downloadImages();
