const scrape = require('./../index.js');

const data  = [
  '1005002125918926',
  '1005002941131619',
  '32982628286'
]

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
    const copy = JSON.stringify ({product}, null, 4);

    // write JSON string to a file
    fs.writeFile('./_data/aliexpress/scrapers/' + item + ".json", copy, (err) => {
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
