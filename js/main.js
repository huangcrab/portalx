$(".header-content-about").hide();
$("#about").click(function(){
    $(".header-content").hide();
    $(".header-content-about").fadeIn();
});

$("#home").click(function(){
    $(".header-content-about").hide();
    $(".header-content").fadeIn();
    
});

$("#projects").click(function(){
    $(".v-header").hide("slide",{direction:"left"},500);
    $(".project-header").show("slide",{direction:"right"},500);
});
