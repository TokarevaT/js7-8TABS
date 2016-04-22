
$(document).ready(function () {
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        console.log('event', event)
        $(this).parent().addClass("current");
        console.log('this')
        $(this).parent().siblings().removeClass("current");
        console.log('this', this)
        var tab = $(this).attr("href");
        console.log('tab', tab)
        $(".tab-content").not(tab).css("display", "none");      
        $(tab).fadeIn();
       
    });
});

