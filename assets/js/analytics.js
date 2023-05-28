// add goatcounter integration json with goatcounter.com

(function() {
    var goatcounterScript = document.createElement('script');
    goatcounterScript.setAttribute('data-goatcounter', 'https://{{ goatcounter.id }}.goatcounter.com/count');
    goatcounterScript.setAttribute('async', '');
    goatcounterScript.src = '//gc.zgo.at/count.js';
    document.head.appendChild(goatcounterScript);
  
    var r = new XMLHttpRequest();
    r.addEventListener('load', function() {
      document.getElementById('visits').innerText = JSON.parse(this.responseText).count;
    });
    r.open('GET', 'https://haade.goatcounter.com/counter/' + encodeURIComponent(location.pathname) + '.json');
    r.send();
  })();