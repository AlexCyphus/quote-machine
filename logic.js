var colors = ["#255fdb","#4285f4","#91bfff","#c4e1ff","#f5f5f5"]

function quote() {
  $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        data = data[0];
        $('#author').text(" - " + data.title);
        $('#content').html(data.content);
        var random = Math.floor(Math.random() * 4)
        $("body").css("background-color", colors[random]);
      },
      cache: false
    });

}

quote();

$('#click').on('click', function() {quote();});

$("#tweet").on('click', function(){
  var base = "https://twitter.com/intent/tweet?text=";
  var content = $('#content').text();
  var author = $('#author').text();
  var url;

  // checks quote will fit
  if (content.length > (280 - author.length)) {
    var space = 280 - author.length - 3;
    url = base + content.slice(0, space) + "..." + author;
  }

  else {url = base + content + author;}

  // opens tweet window
  window.open(url,'_blank');

});
