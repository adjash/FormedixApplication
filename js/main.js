//I am leaving in some console.log and alerts to show how I work through this.
var images = [];
function loadFlickr(){
    //JSON, $.getJSON()
    var flickerApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //?jsoncallback=? = taking JSONP instead of JSON
    var search = document.getElementById("searchTerm").value;
    //taking the input from the search bar, using the input as a variable to search in the tags of images from flickr api
    console.log(search);
    $.getJSON(flickerApiUrl, {
        //options...
        tags: search,
        tagmode: "any",
        format: "json"
    }).done(function(data){
        //alert("success")
        //console.log(data);
        
        $.each(data.items, function(index, item){
            //for each item in the search result from API
            
           //console.log(item);
            //$("<aside width=33.33%>").appendTo("#flickr")
            //items.appendTo(images);
            //^^stuff I was trying 
            
            $("<div id='flickr'></div>").appendTo("#test");
            $("<h1 border-top:5px;>").text(item.title).appendTo("#flickr");
            $("<img onclick='moreInfo(this)'>").attr("src", item.media.m).appendTo("#flickr");
            images.push(item.media.m);
            $("<p>").text(item.description).appendTo("#flickr");
            //alert(item.description);
            //console.log(images);
        });
       
    }).fail(function(){
        //failure or can't find
        alert("ajaxcall failure");
    });
 
};
function moreInfo(address){
    popup = window.open();
    //popup.document.write(address.src);
    var img = document.createElement("IMG");
    img.setAttribute("src", address.src);
    //img.src = address.src;
    popup.document.body.appendChild(img);
    //Reached 4 Hours. Didn't want to go over the time that was outlined in the document, took a bit longer that I fist assumed it would have.
};








