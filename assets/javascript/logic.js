$(document).ready(function(){

    setInterval(function(){
         $(".jumbotron").toggle()}, 3000);

    if ($(window).width() >= 760) {
        $(".wrappingContainer").addClass("container");
    } 


}); 
