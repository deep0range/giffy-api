"use strict";
$(document).ready(function(){
var topics = ["european","american muscle","american classic","hot rods"];
topics.map(function(topic){
var button = $("<button class = 'btn btn-default'> "+ topic +"</button>");
$(".container").prepend(button);
})
$('.btn').on('click',function(){
	var carSearch = ($(this).text());
	$(".gif").html("");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ carSearch +" &limit=10&api_key=dc6zaTOxFJmzC"   
	$.ajax({ url: queryURL, method: "GET" }).done(function(response) {
            console.log(response.data)
    for(var i=0; i<response.data.length; i++){
    	var image = response.data[i].images.fixed_height_still.url
    	console.log(image)
    	var rating = (response.data[i].rating)
    	var img = $("<img src = "+ image +"><p>"+ rating +"</p>");
    	
		$(".gif").append(img);

    }


            

          });
})




});

