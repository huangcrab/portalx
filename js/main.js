

$(window).load(function(){
    $('.loading').delay(1000).fadeOut();
});

$(document).ready(function(){
    onload();
    
    $("#home").click(function(){
        $(".header-content-about").hide();
        $(".header-content").fadeIn();
        
    });
    
    $("#projects").click(function(){
        $(".header-overlay").fadeOut();
        $(".header-content").hide("slide",{direction:"left"},1500);
        $(".header-content-about").hide("slide",{direction:"left"},1500);
        $(".fullscreen-video-wrap video").fadeOut();
        $(".fullscreen-video-wrap video").attr("src","assets/project2.mov");
        $(".fullscreen-video-wrap video").fadeIn(3000);
        $(".projects").delay(1500);
        $(".projects").fadeIn(3000);
    });

    $("#close").click(function(){
        $(".projects").fadeOut(500);
        $(".header-content").delay(500);
        $(".projects").hide();
        $(".header-content").show("slide",{direction:"right"},1500);
    })

    $("#next").click(function(){
        $("#project-one").hide("slide",{direction:"left"},1500);
        $("#project-one").removeClass("active");
        $("#project-two").addClass("active");
    })

});
var projects = document.querySelectorAll(".project");
var array=[];
//console.log(projects);
moveDown();
function moveDown(){
    var nextKey;
    var num = $(".active").attr("id");
    $.each(projects, function(key, value){
        if(num == value.id){
            nextKey = key + 1;
            if(nextKey >= projects.length){
                nextKey = 0;
            }
        }  
    })
    var next = "\"#"+projects[nextKey].id+"\"";
    var current = "\"#"+num+"\"";
    console.log(current);
    console.log(next);

}


function onload(){
    $(".projects").hide();
    $(".header-content-about").hide();
    $("#about").click(function(){
        $(".header-content").hide();
        $(".header-content-about").fadeIn();
    });
}