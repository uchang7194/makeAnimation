$(document).ready(function(){

    $(".button").on("click", function(){

        $(this).addClass("success");
    });

    $(".button").hover(function(){}, function(){
        $(this).removeClass("success");
    });
});