const fs = require('fs');

fetch('https://api.countapi.xyz/get/{{ countapi.namespace }}/{{ page.url | replace: '/', '-' | slice: 1, 64 }}')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        const copy = JSON.stringify ({data}, null, 4);

            // write JSON string to a file
    fs.writeFile('./_data/' + featuredpost + ".json", copy, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON copy is saved.");
    });
    })