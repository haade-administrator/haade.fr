---
layout: null
sitemap: false
---

{% assign counter = 0 %}
var documents = [  {%- assign searchml_posts = site.posts
  | where: 'layout', 'post'
  | where: 'locale', 'fr_FR'
  | where: 'published', true %}
  {%- for searchml_post in searchml_posts %}{
    "id": {{ counter }},
    "url": "{{ site.baseurl }}{{ searchml_post.url }}",
    "title": "{{ searchml_post.title }}",
    "description": "{{ searchml_post.date | date: "%d/%m/%Y" }} - {{ searchml_post.description }}",
    "tags": "{{ searchml_post.tags | join: ' - ' }}"
    {% assign counter = counter | plus: 1 %}
    }{% if forloop.last %}{% else %}, {% endif %}{% endfor %}];

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
        document.getElementById('lunrsearchresults').innerHTML = "<p>Résultats pour '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
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
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Aucun résultat trouvé...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );

    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Fermer</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Résultats pour '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
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
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Désolé, aucun résultat trouvé. Fermez et essayez une autre recherche !</li>";
        }
    }
    return false;
}

$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
    });
});
