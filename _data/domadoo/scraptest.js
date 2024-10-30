const puppeteer = require('puppeteer');

(async () => {
    // Lancez le navigateur en mode non headless
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Naviguez vers l'URL de la page que vous voulez tester
    await page.goto('https://www.domadoo.fr/fr/peripheriques/5375-sonoff-micromodule-commutateur-connecte-zigbee-6920075776133.html'); // Remplacez par l'URL que vous voulez tester

    // Attendez que l'élément soit visible
    await page.waitForSelector('h1'); // Remplacez par un sélecteur qui existe sur la page

    // Récupérez le texte de l'élément
    const title = await page.evaluate(() => {
        const element = document.querySelector('h1'); // Remplacez par un sélecteur qui existe sur la page
        return element ? element.textContent : null; // Renvoie null si l'élément n'existe pas
    });

    // Affichez le texte récupéré
    console.log('Titre de la page:', title);

    // Ajoutez un délai avant de fermer le navigateur (par exemple, 10 secondes)
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Fermez le navigateur
    await browser.close();
})();