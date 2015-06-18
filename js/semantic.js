function semantic() {
    var navi = '<ul><li class="nav-section-0"><a href="#top">Top</a></li>';
    var currSection = 0;
    $("main section").each(function() {
        currSection++;
        var currArticle = 0;
        var section = this;
        var sectionName = $("h2", this).first().html();
        console.log("section: " + currSection)
        console.log(sectionName);

        var sectionId = 'section-' + currSection;
        $(this).prepend('<a id="' + sectionId + '"></a>');

        navi = navi + '<li id="nav-' + sectionId + '"><a href="#' + sectionId + '">' + sectionName + '</a>';

        if ($("article", this).length) {
            navi = navi + '<ul>';
            $("article", this).each(function() {
                currArticle++;
                var article = this;
                var articleName = $("h3", this).first().html();
                console.log("article: " + currArticle)
                console.log(articleName);

                var articleId = sectionId + '-article-' + currArticle;
                $(this).prepend('<a id="' + articleId + '"></a>');

                navi = navi + '<li id="nav-' + articleId + '"><a href="#' + articleId + '">' + articleName + '</a></li>';

            });
            navi = navi + '</ul>';
        }

    });
    navi = navi + '</ul>';
    console.log(navi);
    return navi;
}

$(document).ready(function() {
    var navigation = semantic();
    $(".semantic").prepend(navigation);
});