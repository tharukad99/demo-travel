const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://wildceylonlk.com/wp-content/uploads/2025/05/Untitled-2-copy.png";
const dest = path.join(__dirname, 'public', 'wildlife', 'Untitled-2-copy.png');
const file = fs.createWriteStream(dest);

https.get(url, (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Downloaded image.");
  });
});
