$(document).ready(function(){

    setInterval(function(){
         $(".jumbotron").toggle()}, 3000);

if ($(window).width() >= 760) {                     // on load (not responsive), if width is ipad or wider, entire body gets a container
        $(".wrappingContainer").addClass("container");
    } 


}); 
