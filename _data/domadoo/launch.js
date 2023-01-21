const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');
const links = require('./data');

let invalidLinkCount = 0;

async function scrapeDomadoo() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    for (const link of links) {
        if(!(/^https?:\/\//.test(`https://www.domadoo.fr/fr/${link}.html`))) {
            console.log(`Invalid link: ${link}`);
            invalidLinkCount++;
            continue;
        }
        try {
            await page.goto(`https://www.domadoo.fr/fr/${link}.html`, {timeout: 30000});
            // do some scraping or other actions here
        } catch (error) {
            console.log(`Error navigating to https://www.domadoo.fr/fr/${link}.html: ${error}`);
            invalidLinkCount++;
            continue;
        }

    console.log(`Total invalid links: ${invalidLinkCount}`);

    const html = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(html);
    $('.label').remove();
    $('.material-icons').remove();
    const product = {};
    product.title = $('h1').text().trim().replace(/\n|\r/g, '');
    product.reference = $('.product-reference').filter(':first').text().trim().replace(/\n|\r/g, '');
    product.new = $('.product-flag.new').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
    product.price = $('.regular-price').first().text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ').replace(/ €/, '€');
    product.currentprice = $('.current-price-value').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ').replace(/ €/, '€');
    product.discountpercentage = $('.discount-percentage').first().text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
    product.available = $('#item-stock-date-availability').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
    product.description = $('*[id^="product-description-short-"]').text().trim().replace(/\n|\r/g, '');
    product.specifications = $('#specifications').text().trim().replace(/\n|\r/g, '');
    product.image = await page.evaluate(() => document.querySelector('.js-qv-product-cover.img-fluid').src);

    // write results to file
    fs.writeFileSync('./_data/domadoo/scrapers/' + product.reference + ".json", JSON.stringify(product, null, 4));
    console.log(`Product data saved to file product ${product.reference}.json.`);
    }
    await browser.close();
}

scrapeDomadoo();