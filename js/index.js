$(function(){
    // 모바일 네비 호출
    $('.btn-nav').on({
        'click':function(){
            $('.nav').slideToggle(100);
        },
    });

    $('.main-nav>li').on({
        'click':function(){
            $('.main-nav>li').not(this).children('ul').slideUp();
            $(this).children('.sub-nav').slideToggle(100);
        }
    })
    
    $(window).on({
        'resize':closeMoblieNav,
    })

    function closeMoblieNav(){
        $('.nav').slideUp(100);
    }
                
    // swiper
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 가맹문의 팝업 호출 
    $('.m-floating').on({
        'click':function(){
            $('.pop-up').css('transform','translate(0,0)')
        }
    });

    $('.d-floating').on({
        'click':function(){
            $('.pop-up').css('transform','translate(0,0')
        }
    })

    // 가맹문의 팝업 닫기 - 모바일
    $('.btn-close').on({
        'click':function(){
            $('.pop-up').css('transform','translate(0,-100%)')
        }
    })

})