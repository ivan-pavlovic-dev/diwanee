
$(document).ready(function(){
    $('.mobile-nav span').click(function(){
        $('.mobile-nav').toggleClass('open');
        $('.mobile-nav-list').toggleClass('isOpen');
        $('.mobile-nav-list li a').click(function(){
            $('.mobile-nav').toggleClass('open');
            $('.mobile-nav-list').toggleClass('isOpen');
        });
    })
});