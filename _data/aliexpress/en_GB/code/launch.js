const scrape = require('./../index.js');

const data = require('./../../data.js');

const fs = require('fs');


function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedLog(item) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    const product = await scrape(item,2,{headless:false});
    console.log({product});
    const copy = JSON.stringify ({product});

    // write JSON string to a file
    fs.writeFile('./_data/aliexpress/en_GB/scrapers/' + item + ".json", copy, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON copy is saved.");
    });
}
async function processArray(array) {
    for (const item of array) {
        await delayedLog(item);
    }
    console.log('Done!');
}

processArray(data).then(r => {
    console.log({r});
    // convert JSON object to string
});
//  Promise.all(data.map(async (data, i) => {
//   const product = await scrape(data,2);
//      console.log({product});
//   return product;
//
// const copy = JSON.stringify ({product}, null, 4);
// }))
