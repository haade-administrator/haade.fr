const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');
const links = require('./data');

let invalidLinkCount = 0;

async function scrapeDomadoo() {
    const browser = await puppeteer.launch({
        headless: 'new',
        // `headless: true` (default) enables old Headless;
        // `headless: 'new'` enables new Headless;
        // `headless: false` enables "headful" mode.
      });
    const page = await browser.newPage();
    for (const link of links) {
        if (!(/^https?:\/\//.test(`https://www.domadoo.fr/fr/${link}.html`))) {
            console.log(`Invalid link: ${link}`);
            invalidLinkCount++;
            continue;
        }
        try {
            await page.goto(`https://www.domadoo.fr/fr/${link}.html`, { timeout: 30000 });
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
        const linkId = link;
        const title = $('h1').text().trim().replace(/\n|\r/g, '');
        const reference = $('.product-reference').filter(':first').text().trim().replace(/\n|\r/g, '');
        const productNew = $('.product-flag.new').first().text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
        const originalPrice = $('.regular-price').first().text().trim().replace(/\n|\r/g, '').replace(",", ".").replace(/\s+/g, ' ').replace(/ €/, '');
        const globalprice = $('.current-price-value').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ').replace(",", ".").replace("€", "EUR");
        const priceArr = globalprice.split(" ");
        const salePrice = priceArr[0];
        const currency = priceArr[1];
        const rating = {
            averageStar: $('.netreviewsProductWidgetNewRate .ratingValue').text(),
            totalStar: $('.netreviewsProductWidgetNewRate .bestRating').text(),
            totalStarCount: $('a.netreviewsProductWidgetNewLink span').text(),
        };
        const discount = $('.discount-percentage').first().text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ').replace("Économisez ", "-");
        const availabilityValue = $('td.details-stock-units').text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
        const availability = availabilityValue !== '' ? availabilityValue : 'Hors stock';

        let availability_date = $('.product-availability-date').first().text().trim().replace(/\n|\r/g, '').replace(/\s+/g, ' ');
        const dateRegex = /\d{2}-\d{2}-\d{4}/g;
        const date = dateRegex.exec(availability_date);       
        availability_date = (date) ? date[0] : null;

        const description = $('*[id^="product-description-short-"]').text().trim().replace(/\n|\r/g, '');
        const specifications = $('#specifications').text().trim().replace(/\n|\r/g, '');
        const image = [];
        $('.images-container.js-images-container img').each((i, el) => {
            const imageSrc = $(el).attr('src');
            const modifiedSrc = imageSrc.replace('-small_', '-medium_');
            if (!image.includes(modifiedSrc)) {
                image.push(modifiedSrc);
            }
        });
        if (!image) {
            console.log("Image not found, continuing...");
            continue;
        }
      
/*         const picture = await page.evaluate(() => document.querySelector('.js-qv-product-cover.img-fluid').src);
        if (!image) {
            console.log("Image not found, continuing...");
            continue;
        } */
        // Enregistrer les données dans un objet
        const data = {
            product: {
                linkId,
                productId: reference,
                title,
                description,
                productNew,
                minsalePrice: salePrice,
                maxsalePrice: originalPrice || "0",
                discount,
                currency,
                originalPrice,
                quantity: availability,
                supply_date: availability_date,
                image,

                ratings: {
                    totalStar: rating.totalStar || "5",
                    averageStar: rating.averageStar || "0",
                    totalStarCount: rating.totalStarCount || "0",
                },
            },
        };

        // write results to file
        fs.writeFileSync('./_data/domadoo/scrapers/' + reference + ".json", JSON.stringify(data, null, 4));
        console.log(`Product data saved to file product ${reference}.json.`);
    }
    await browser.close();
}

scrapeDomadoo();