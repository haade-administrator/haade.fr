const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');
const links = require('./data');
const url = require('url');

let invalidLinkCount = 0;

async function scrapeAliexpress() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Ajouter les cookies nécessaires si nécessaire
    await page.setCookie({
        name: 'aep_usuc_f',
        value: 'site=fra&province=907200100001000000&city=907200100001135000&c_tp=EUR&x_alimid=2299046143&isfb=y&ups_d=1|1|1|1&isb=y&ups_u_t=1675349909049&region=FR&b_locale=fr_FR&ae_u_p_s=2',
        domain: '.aliexpress.com',
        path: '/',
        httpOnly: true,
        secure: true
    });

    for (const link of links) {
        if(!(/^https?:\/\//.test(`https://fr.aliexpress.com/item/${link}.html`))) {
            console.log(`Invalid link: ${link}`);
            invalidLinkCount++;
            continue;
        }
        try {
            await page.goto(`https://fr.aliexpress.com/item/${link}.html`, {timeout: 30000});
            // do some scraping or other actions here
        } catch (error) {
            console.log(`Error navigating to https://fr.aliexpress.com/item/${link}.html: ${error}`);
            invalidLinkCount++;
            continue;
        }

    console.log(`Total invalid links: ${invalidLinkCount}`);

    await page.waitForSelector('body');

    // Récupérer le contenu HTML de la page
    const html = await page.content();

    const $ = cheerio.load(html);


        // Récupérer les votes
        const votes = $('.overview-rating-average').text();
        const review = $('.product-reviewer-reviews').text();
        const price = $('.product-price-current').text();
        const specialprice = $('.uniform-banner-box-price').text();
        const finalPrice = price || specialprice || 'price not found';
        const pricedel = $('.product-price-del').text();
        const specialpricedel = $('.uniform-banner-box-discounts span:first-child').text();
        const finalPricedel = pricedel || specialpricedel || 'price not found';


        const title = $('.product-title').text();
        const description = $('.detail-desc-decorate-richtext').text();
        const reference = $('.sku-title-value').text();
        const quantity = $('div.product-quantity-tip').text();
        const image = await page.evaluate(() => document.querySelector('.image-view-magnifier-wrap img').src);
        const storeLink = $('.store-name a').attr('href');
        const store = {
            name: $('.store-name').text(),
            link: url.resolve('https://fr.aliexpress.com', storeLink),
            feedback: $('.h-store-info i').eq(0).text(),
            followers: $('.h-store-info i').eq(1).text(),
        };



        // Enregistrer les données dans un objet
        const data = {
            title,
            description,
            reference,
            finalPrice,
            finalPricedel,
            quantity,
            image,
            votes,
            review,
            store: {
                name: store.name,
                link: store.link,
                feedback: store.feedback,
                followers: store.followers,
            },
        };

    // write results to file
    fs.writeFileSync('../../_data/aliextest/scrapers/' + link + ".json", JSON.stringify(data, null, 2));
    console.log(`Product data saved to file product ${link}.json.`);
    }
    await browser.close();
}

scrapeAliexpress();