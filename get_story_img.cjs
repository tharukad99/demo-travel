const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://wildceylonlk.com/our-trips/', {waitUntil: 'networkidle2'});
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .map(el => window.getComputedStyle(el).backgroundImage)
      .filter(bg => bg !== 'none' && bg.includes('url'))
      .map(bg => bg.match(/url\(['"]?(.*?)['"]?\)/)[1]);
  });
  fs.writeFileSync('images.txt', [...new Set(images)].join('\n'));
  await browser.close();
})();
