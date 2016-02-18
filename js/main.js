
$(document).ready(function(){
    $('.nav-button').click(function(){
        $(this).toggleClass('open');
        $('.navigation ul').slideToggle();
    })
});