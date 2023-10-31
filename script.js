document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const addressBar = document.getElementById('addressBar');
    const goButton = document.getElementById('goButton');
    const backButton = document.getElementById('backButton');
    const forwardButton = document.getElementById('forwardButton');
    const refreshButton = document.getElementById('refreshButton');
    const browserFrame = document.getElementById('browserFrame');

    // Event listeners
    goButton.addEventListener('click', loadPage);
    addressBar.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            loadPage();
        }
    });
    backButton.addEventListener('click', function () {
        if (browserFrame.contentWindow) {
            browserFrame.contentWindow.history.back();
        }
    });
    forwardButton.addEventListener('click', function () {
        if (browserFrame.contentWindow) {
            browserFrame.contentWindow.history.forward();
        }
    });
    refreshButton.addEventListener('click', function () {
        browserFrame.contentWindow.location.reload();
    });

    // Function to load a webpage
    function loadPage() {
        const url = addressBar.value;
        if (url) {
            browserFrame.src = url;
        }
    }

    // Initial load (you can set a default homepage)
    loadPage();
});

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to a web page
  await page.goto('https://example.com');

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
