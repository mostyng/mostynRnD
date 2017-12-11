$(document).ready(function(){


let lazy = lazyload();

    $("img.lazyload").lazyload();


    $(".04").click(function(){
        $(".content-04").toggle();
    });

    $(".03").click(function(){
        $(".content-03").toggle();
    });

    $(".02").click(function(){
        $(".content-02").toggle();
    });

    $(".01").click(function(){
        $(".content-01").toggle();
    });

});
