const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');
const links = require('./../data');
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

    const product = {};
    const productId = JSON.parse(link);

        // Récupérer les votes
        const rating = {
            votes: $('.overview-rating-average').text(),
            reviews: null,
          };
          
          try {
            rating.reviews = $('.product-reviewer-reviews').text().match(/\d+/)[0];
          } catch (error) {
            console.log(`Error the product has not been rated`);
            continue;
          };
        // récupérer le prix et la devise
        const globalprice = $('.product-price-current').text().replace(",", ".").replace("€", "EUR");
        const priceArr = globalprice.split(" ");
        const pricecurrency = priceArr[0];
        const price = priceArr[1];
        // récupérer le prix special et la devise
        const globalsprice = $('.uniform-banner-box-price').text().replace(",", ".").replace("€", "EUR");
        const spriceArr = globalsprice.split(" ");
        const pricescurrency = spriceArr[0];
        const specialprice = spriceArr[1];
        // passer du prix au prix special automatiquement
        const salePrice = price || specialprice || 'price not found';
        const currency = pricecurrency || pricescurrency || 'currency not found';
        // récupérer le prix barré
        const globalpricedel = $('.product-price-del').text().replace(",", ".");
        const pricedelArr = globalpricedel.split(" ");
        const pricedel = pricedelArr[1];
       // récupérer le prix spécial barré
        const globalspricedel = $('.uniform-banner-box-discounts span:nth-of-type(1)').text().replace(",", ".");
        const discount = $('.uniform-banner-box-discounts span:nth-of-type(2)').text();
        const pricesdelArr = globalspricedel.split(" ");
        const specialpricedel = pricesdelArr[1];
        // passer du prix barré au prix special barré automatiquement
        const originalPrice = pricedel || specialpricedel || 'price not found';


        const title = $('.product-title').text();
        const description = $('.detail-desc-decorate-richtext').text();
        const reference = $('.sku-title-value').text();
        const quantity = $('div.product-quantity-tip').text().match(/\d+/)[0];
        const image = await page.evaluate(() => document.querySelector('.image-view-magnifier-wrap img').src);
        const storeLink = $('.store-name a').attr('href');
        const store = {
            name: $('.store-name').text(),
            url: url.resolve('https://fr.aliexpress.com', storeLink),
            number: storeLink.match(/\d+/)[0],
            feedback: $('.h-store-info i').eq(0).text(),
            followers: $('.h-store-info i').eq(1).text(),
        };



        // Enregistrer les données dans un objet
        const data = {
            product: {
            productId,
            title,
            description,
            reference,
            salePrice,
            discount,
            currency,
            originalPrice,
            quantity,
            image,
            storeInfo: {
                name: store.name,
                url: store.url,
                storeNumber: store.number,
                rating: store.feedback,
                followers: store.followers,
            },
            ratings: {
                totalStar: 5,
                averageStar: rating.votes,
                totalStarCount: rating.reviews,
            },
        },
        };

    // write results to file
    fs.writeFileSync('./_data/aliextest/fr_FR/scrapers/' + link + ".json", JSON.stringify(data, null, 2));
    console.log(`Product data saved to file product ${link}.json.`);
    }
    await browser.close();
}

scrapeAliexpress();