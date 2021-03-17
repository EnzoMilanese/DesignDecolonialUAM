function showFooter(){
    var bigFooter = $('#big-footer');
    var smallFooter = $('#small-footer');

    if(window.innerWidth > 900){
        bigFooter.removeClass("disabled");
        smallFooter.addClass("disabled")
        return;
    }
    
    smallFooter.removeClass("disabled");
    bigFooter.addClass("disabled");
}

window.onresize = function(event) {       
    showFooter();
};

jQuery(document).ready(function ($) {
    showFooter();
});
