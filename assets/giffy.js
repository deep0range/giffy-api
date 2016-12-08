"use strict";
function createButton(newBTN){
	var button = $("<button class = 'active btn btn-default'> "+ newBTN +"</button>");
$(".buttons").prepend(button);
}
$(document).ready(function(){
var topics = ["european","american muscle","american classic","hot rods"];
topics.map(function(topic){
createButton(topic);
})
$('.go').on('click',function(){
var input = $(".input").val();
createButton(input)
});
$('.container').on('click',".active",function(){
	var carSearch = ($(this).text());
	$(".gif").html("");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ carSearch +" &limit=10&api_key=dc6zaTOxFJmzC"   
	var results = [];
    $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
            console.log(response.data)
            results.push(response);
    for(var i=0; i<response.data.length; i++){
    	var image = response.data[i].images.fixed_height_still.url
    	console.log(image)
    	var rating = (response.data[i].rating)
    	var img = $("<img class = 'video' src = "+ image +"><p>"+ rating +"</p>");
    	img.attr("data-motion","still")
        img.attr("data-id",i)
		$(".gif").append(img);

    }
          

          });
    $(".container").on('click',".video",function()
{
var attr = ($(this).attr("data-motion"));
if (attr === "still") {
    $(this).attr("data-motion","moving");
    console.log(results[0].data);
    $(this).attr("src",results[0].data[$(this).attr("data-id")].images.fixed_height.url);
} else {
    
    $(this).attr("src",results[0].data[$(this).attr("data-id")].images.fixed_height_still.url);
    $(this).attr("data-motion","still");    
}
})
})




});

