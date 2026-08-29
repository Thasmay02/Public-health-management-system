const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('request', request => {
    if (request.url().includes('/api/auth/reset-password')) {
      console.log('Intercepted request:', request.url(), request.method(), request.postData());
    }
  });

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('http://localhost:3001/patient-portal.html', { waitUntil: 'networkidle2' });
  
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    const btn = links.find(el => el.textContent === 'Forgot Password?');
    btn.click();
  });
  
  await page.waitForSelector('#reset_email', { visible: true });
  await page.type('#reset_email', 'thasmay02@gmail.com');
  
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    btns.find(el => el.textContent.trim() === 'Send Verification Code').click();
  });
  
  await page.waitForSelector('#reset_code', { visible: true });
  const code = await page.evaluate(() => tempResetState.code);
  await page.type('#reset_code', code);
  
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    btns.find(el => el.textContent.trim() === 'Verify Code').click();
  });
  
  await page.waitForSelector('#new_reset_pwd', { visible: true });
  await page.type('#new_reset_pwd', 'thash1234567');
  await page.type('#new_reset_pwd2', 'thash1234567');
  
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    btns.find(el => el.textContent.trim() === 'Reset Password').click();
  });
  
  await new Promise(r => setTimeout(r, 2000));
  
  await browser.close();
  console.log("Done patient");
})();
