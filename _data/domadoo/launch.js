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
    const productId = link;
    const title = $('h1').text().trim().replace(/\n|\r/g, '');
    const reference = $('.product-reference').filter(':first').text().trim().replace(/\n|\r/g, '');
    const productNew = $('.product-flag.new').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
    const originalPrice = $('.regular-price').first().text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ').replace(/ €/, '');
    const globalprice = $('.current-price-value').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ').replace(",", ".").replace("€", "EUR");
    const priceArr = globalprice.split(" ");
    const currency = priceArr[1];
    const salePrice = priceArr[0];
    const rating = {
        averageStar: $('.netreviewsProductWidgetNewRate .ratingValue').text(),
        totalStar: $('.netreviewsProductWidgetNewRate .bestValue').text(),
        totalStarCount: $('netreviewsProductWidgetNewLink span').text(),
   };
    const discount = $('.discount-percentage').first().text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ').replace("Économisez ", "-");
    const available = $('#item-stock-date-availability').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
    const description = $('*[id^="product-description-short-"]').text().trim().replace(/\n|\r/g, '');
    const specifications = $('#specifications').text().trim().replace(/\n|\r/g, '');
    const image = await page.evaluate(() => document.querySelector('.js-qv-product-cover.img-fluid').src);
    if (!image) {
    console.log("Image not found, continuing...");
    continue;
    }
            // Enregistrer les données dans un objet
            const data = {
                product: {
                productId,
                title,
                description,
                reference,
                productNew,
                salePrice,
                discount,
                currency,
                originalPrice,
                available,
                image,
            },
            ratings: {
                totalStar: rating.totalStar,
                averageStar: rating.averageStar,
                totalStarCount: rating.totalStarCount,
            },
            };

    // write results to file
    fs.writeFileSync('./_data/domadoo/scrapers/' + reference + ".json", JSON.stringify(data, null, 4));
    console.log(`Product data saved to file product ${reference}.json.`);
    }
    await browser.close();
}

scrapeDomadoo();