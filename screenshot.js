const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:8000/problems.html', { waitUntil: 'networkidle0' });
  
  // Wait for problems to load
  await page.waitForSelector('.chip');
  
  // Take screenshot of main page to see the new chips
  await page.screenshot({ path: 'screenshot_main.png' });
  
  // Click first problem to open drawer
  await page.click('.solve-btn');
  await page.waitForTimeout(1000); // Wait for drawer animation
  
  // Take screenshot of drawer
  await page.screenshot({ path: 'screenshot_drawer.png' });

  await browser.close();
  console.log('Screenshots saved.');
})();
