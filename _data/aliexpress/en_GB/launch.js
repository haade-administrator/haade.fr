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
    value: 'site=usa&c_tp=USD&region=US&b_locale=en_US',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  await page.setCookie({
    name: 'xman_t',
    value: 'xS98E5WRTlqFxuILPSdG1PtzUzLdGXe9MN/CyKMUwQk9vpEpr8oNEwhjN0cxmfEbJLiKpbLFnLrNwa60cnAdEXhqnbbCR+bO30eRHl1i76mCgLD5zE8wJJ9BqopDDiovUMuygNV6VDelfGSMdoCUqVcp7sS27oLL+qI/zCzcpC8SV/knGdzWikQfzfjzVQMjVp6aaReBepq+zRGL6IGiXYFHrevX1eBACZkQMBJD5fh17UgWpykHK8NKbGcDRYNJyoNzQUxcu+8Ayj9ollB0uKYqpcFFNxSOhw6mwzM0lEJUwKfL7h9Q4JdwnQLN6/LuTHd5D6G0nAYtDbrRLJdg2Bs1nY6GrRp4bTJYFWaE1djc8PiyELclHjGM7Ei40OxcQs51Xg4AnIrOB+wmGsATq1msPrVqqb8Z2GA88EnHIRMmmNTmDhZmhWfNLBMZsnlCrRL7JMvY6O01ro7hnD/PPcHhZEinuMTVkb3z/ShXunU2liI5qlvzp/BBuqA3qiM2vcjOuBKQYUqJnQHZKzAs9ng3Q54N0PmRo+PFgb8o3AY89hZ+O/3w97REjm13n/WOEZVdHXGmzRXkO2QPPPMJSb0Ck+rBpbXnKnrzlUPuFaZVF4EfF53b0OQh/cVtCuAj4DzoanxJsRVhEpJqrdVdiZ0MfBFpIHUy',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  await page.setCookie({
    name: 'xman_us_f',
    value: 'x_locale=en_US&x_l=0&x_user=FR|rodriguez|nicolas|ifm|169543615&x_lid=fr1049920001&x_c_chg=1&x_as_i=%7B%22aeuCID%22%3A%22%22%2C%22cookieCacheEffectTime%22%3A1675261261973%2C%22isCookieCache%22%3A%22Y%22%2C%22ms%22%3A%220%22%7D&acs_rt=142dc33103ae41cb9de1dcc52fe04020',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  await page.setCookie({
    name: 'xman_us_t',
    value: 'x_lid=fr1049920001&sign=y&rmb_pp=nico@haade.fr&x_user=4ibYjGMtefDUH1/49dQehXYq0nsG2ssee2Jca8UzrlQ=&ctoken=hvtfvgasruqf&l_source=aliexpress',
    domain: '.aliexpress.com',
    path: '/',
    httpOnly: true,
    secure: true
  });

  for (const link of links) {

    if (!(/^https?:\/\//.test(`https://www.aliexpress.com/item/${link}.html`))) {
      console.log(`Invalid link: ${link}`);
      invalidLinkCount++;
      continue;
    }
    try {
      await page.goto(`https://www.aliexpress.com/item/${link}.html`, { timeout: 30000 });
      // do some scraping or other actions here
    } catch (error) {
      console.log(`Error navigating to https://www.aliexpress.com/item/${link}.html: ${error}`);
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
    votes = $('.overview-rating-average').text() || 0;
    // Récupérer les votes
    const stars = {
      reviews: null,
    };
    try {
      stars.reviews = $('.product-reviewer-reviews').text().match(/\d+/)[0];
    } catch (error) {
      console.log(`Error the product ${link} has not been rated`);
    };
    // récupérer le prix et la devise
    const globalprice = $('.product-price-current').text().replace("US", "USD").replace(",", ".").replace("$", "");
    const priceArr = globalprice.split(" ");
    const pricecurrency = priceArr[0];
    const price = priceArr[1];
    // récupérer le prix special et la devise
    const globalsprice = $('.uniform-banner-box-price').text().replace("US", "USD").replace(",", ".").replace("$", "");
    const spriceArr = globalsprice.split(" ");
    const pricescurrency = spriceArr[0];
    const specialprice = spriceArr[1];
    // passer du prix au prix special automatiquement
    const salePrice = price || specialprice || 'price not found';
    const currency = pricecurrency || pricescurrency || 'currency not found';
    // récupérer le prix barré
    const globalpricedel = $('.product-price-del').text().replace("US", "USD").replace("$", "").replace(",", ".");
    const pricedelArr = globalpricedel.split(" ");
    const pricedel = pricedelArr[1];
    // récupérer le prix spécial barré
    const globalspricedel = $('.uniform-banner-box-discounts span:nth-of-type(1)').text().replace("US", "USD").replace("$", "").replace(",", ".");
    const discount = $('.uniform-banner-box-discounts span:nth-of-type(2)').text();
    const pricesdelArr = globalspricedel.split(" ");
    const specialpricedel = pricesdelArr[1];
    // passer du prix barré au prix special barré automatiquement
    const originalPrice = pricedel || specialpricedel || null;


    const title = $('.product-title').text();
    const description = $('.detail-desc-decorate-richtext').text();
    const reference = $('.sku-title-value').text();
    const sale = {
      quantity: null,
    };
    try {
      sale.quantity = $('div.product-quantity-tip').text().match(/\d+/)[0];
    } catch (error) {
      console.log(`Error the product ${link} has not quantity`);
    };
    const image = await page.evaluate(() => document.querySelector('.image-view-magnifier-wrap img').src);
    const storeLink = $('.store-name a').attr('href');
    const store = {
      name: $('.store-name').text(),
      url: url.resolve('https://www.aliexpress.com', storeLink),
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
        quantity: sale.quantity,
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
          averageStar: votes,
          totalStartCount: stars.reviews,
        },
      },
    };

    // write results to file
    fs.writeFileSync('./_data/aliexpress/en_GB/scrapers/' + link + ".json", JSON.stringify(data, null, 2));
    console.log(`Product data saved to file product ${link}.json.`);
  }
  await browser.close();
}

scrapeAliexpress();