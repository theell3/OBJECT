
// ---------- header ----------


$(document).ready(function(){
    $('.menu').hide();
    $(".fa-bars").click(function(){
        $(".menu").toggle();
    })
});

$(document).ready(function() {
    $('.menu>li>a').click(function (e) { 
        e.preventDefault();
        //點選到的.menu>li>a顯示裡面的.inmenu 
        $(this).siblings('.inmenu').slideDown().parent().siblings().find('.inmenu').slideUp();
        //點選到的.menu>li>a 顯示動態active
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
});

