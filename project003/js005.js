$(document).ready(function(){

    $('.wrap>div').eq(0).addClass('on')

    // 일정시간이 흐른 후 3번이 addClass on을 받아라
    setTimeout(function(){

        $('.wrap>div').eq(2).addClass('on')

    },800)

    setTimeout(function(){

        $('.wrap>div').eq(1).addClass('on')

    },1600)

    setTimeout(function(){

        $('.btn').addClass('on')

    },2000)


    $('.btn').click(function(){

        $('.wrap>div').removeClass('on')

        setTimeout(function(){

            $('.imgtxt').fadeOut()

        }, 500);

        setTimeout(function(){

            $('.wrap2').stop().animate({'top': 0}, 1200, function(){

                $('.inner').stop().animate({'opacity':1},500, function(){

                    $('nav').stop().animate({'top':'0'},1500)  // function이 뒤에 나올 수 있는 것은 animate밖에 없음
                });
            });

        }, 800)




    })

    $('nav li').eq(1).click(function(){

        $('.wrap3').addClass('on')

    });

    // nav li의 첫번째 클릭했을 때 다시 wrap3이 들어가라
 
    $('nav li').eq(0).click(function(){

        $('.wrap3').removeClass('on')
    })


}); // 제이쿼리 끝