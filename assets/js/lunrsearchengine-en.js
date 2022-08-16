
var documents = [{
    "id": 0,
    "url": "/haade.fr/en/blog/box-domotique-rail-din",
    "title": "Domotical Box Rail Din Home-assistant and Raspberrypi",
    "description": "2021/10/05 - ",
    "tags": ""
    
    }, {
    "id": 1,
    "url": "/haade.fr/en/blog/home-assistant-amber-vs-jeedom-atlas",
    "title": "Home-Assistant Amber VS Jeedom Atlas",
    "description": "2021/10/01 - ",
    "tags": ""
    
    }, {
    "id": 2,
    "url": "/haade.fr/en/blog/zoneminder-home-assistant-et-machinelearning",
    "title": "Zoneminder, home assistant and Machinelearning",
    "description": "2021/09/25 - ",
    "tags": ""
    
    }, {
    "id": 3,
    "url": "/haade.fr/en/blog/test-capteur-porte-zigbee-3-0-sonoff-snzb-04",
    "title": "Sonoff SNZB-04 Zigbee 3.0 Door Sensor Test",
    "description": "2021/09/20 - ",
    "tags": ""
    
    }, {
    "id": 4,
    "url": "/haade.fr/en/blog/changer-licone-dun-capteur-binaire-dans-home-assistant",
    "title": "home assistant icon tip",
    "description": "2021/09/15 - Change the icon of a binary sensor in home assistant",
    "tags": ""
    
    }, {
    "id": 5,
    "url": "/haade.fr/en/blog/test-capteur-temperature-et-humidite-sonoff-snzb-02",
    "title": "Sonoff SNZB-02 temperature and humidity sensor test",
    "description": "2021/09/10 - SONOFF SNZB-02 temperature sensor test and integration in homeassistant",
    "tags": "Test - Zigbee - Homeassistant"
    
    }, {
    "id": 6,
    "url": "/haade.fr/en/blog/z-wave-face-a-matter",
    "title": "Z-wave VS Matter",
    "description": "2021/09/05 - ",
    "tags": ""
    
    }, {
    "id": 7,
    "url": "/haade.fr/en/blog/nas-opensource-pour-raspberry-pi-cm4-le-futur",
    "title": "Open source NAS for Raspberry pi CM4 the future!",
    "description": "2021/09/01 - ",
    "tags": ""
    
    }, {
    "id": 8,
    "url": "/haade.fr/en/blog/kobol-helios-64-cest-termine",
    "title": "Kobol helios 64 is done!",
    "description": "2021/08/26 - ",
    "tags": ""
    
    }, {
    "id": 9,
    "url": "/haade.fr/en/blog/test-et-install-thermostat-zigbee-moes-bht-002",
    "title": "[TEST] and [INSTALL] Zigbee Thermostat Moes BHT-002",
    "description": "2021/08/12 - ",
    "tags": ""
    
    }, {
    "id": 10,
    "url": "/haade.fr/en/blog/integrer-son-compteur-electrique-teleinfo-dans-home-assistant",
    "title": "Integrate your electricity meter (teleinfo) in Home Assistant",
    "description": "2021/08/03 - ",
    "tags": ""
    
    }, {
    "id": 11,
    "url": "/haade.fr/en/blog/domotiser-sa-porte-de-garage-pour-5e",
    "title": "Automate your garage door for 5€",
    "description": "2021/05/19 - a simple way to automate your garage door at a lower cost",
    "tags": ""
    
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title', { boost: 10 });
    this.field('description', { boost: 15 });
    this.field('tags', { boost: 5 });

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var description = documents[ref]['description'];
                var tags = documents[ref]['tags'];
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='description'>"+ description +"</span><span class='tags'>"+ tags +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );

    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var description = documents[ref]['description'];
                var tags = documents[ref]['tags'];
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='description'>"+ description +"</span><span class='tags'>"+ tags +"</span><small><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close and try another search!</li>";
        }
    }
    return false;
}

$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
    });
});
