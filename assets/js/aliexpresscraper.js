const scrape = require('../../node_modules/aliexpress-product-scraper/index.js');
const item = '1005002125918926'
const product = scrape (item);
const writer = '../../_data/scrapers/' + item + ".json"
const fs = require('fs');


product.then(res => {
  console.log('The JSON: ', res);
// convert JSON object to string
const data = JSON.stringify (res);

// write JSON string to a file
fs.writeFile(writer, data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
});
