$(document).ready(function(){
  
  const RandomNumber=function(max){
    return Math.floor(Math.random()*Math.floor(max))
  };

  $('#new-quote').click(function(evt){
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://type.fit/api/quotes",
      "method": "GET"
    }

    $.ajax(settings).done(function (response) {
      const data = JSON.parse(response);
      
      var max=data.length-1;
      var quote=data[RandomNumber(max)].text;
      var author=data[RandomNumber(max)].author
      
      
      if(data[RandomNumber(max)].author==null){
            $("#author").text("Unknown");
      } else{
        $("#author").
      text(data[RandomNumber(max)].author);
      }
      
      var quoteTweet = quote + " - " + author;
      console.log(quoteTweet);
      $("#text").text(quote);
      $("#tweet-quote").attr('href'
      ,"https://twitter.com/intent/tweet?text="+quoteTweet);

    });
    

    

    
  });
    
});