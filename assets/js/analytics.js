// add goatcounter integration json with goatcounter.com

(function() {
  var goatcounterScript = document.createElement('script');
  goatcounterScript.setAttribute('data-goatcounter', 'https://{{ site.goatcounter.id }}.goatcounter.com/count');
  goatcounterScript.setAttribute('async', '');
  goatcounterScript.src = '//gc.zgo.at/count.js';
  document.head.appendChild(goatcounterScript);

  var r = new XMLHttpRequest();
  r.addEventListener('load', function() {
    document.getElementById('visits').innerText = JSON.parse(this.responseText).count;
  });
  r.open('GET', 'https://{{ site.goatcounter.id }}.goatcounter.com/counter/' + encodeURIComponent(location.pathname) + '.json');
  r.send();
})();

// <script src="analytics.js?timestamp={{ "now" | date: "%s" }}"></script>
