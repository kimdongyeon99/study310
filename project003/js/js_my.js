$(document).ready(function(){

    let wht = $(window).height()
    $('.box4').height(wht)


    setTimeout(function(){

        $('.inner1>div').eq(1).addClass('on')

    },600)

    setTimeout(function(){

        $('.inner1>div').eq(2).addClass('on')

    },1000)

    setTimeout(function(){

        $('.inner1>div').eq(3).addClass('on')

    },1400)

    setTimeout(function(){

        $('.inner1>div').eq(4).addClass('on')

    },1800)

    setTimeout(function(){

        $('.inner1>div').eq(5).addClass('on')

    },2200)

    setTimeout(function(){

        $('nav').addClass('on')
    },2600)


    $(window).scroll(function(){

        let sc = $(this).scrollTop()
        let ht = $(window).height()
        console.log(sc)

        for(let a = 0; a < 6; a++){

            if(sc >= (ht*a)-200 && sc < (ht*(a+1)-200)){
                $('nav li').removeClass('on')
                $('nav li').eq(a).addClass('on')
            }
        }


    })

    // 회면의 높이값을 구해라
    
    // nav li에 클릭했을 때, 나 자신에게 addClass 해라
    $('nav li').click(function(){

        $('nav li').removeClass('on')
        $(this).addClass('on');

        // 클릭할때 마다 나 자신의 순번을 구하고 
        // 그 순번에 맞는 box에 높이를 찾아라
        let i = $(this).index()
        let divHt = $('#wrap>div').eq(i).height();



        // box마다 화면 상단에서부터 떨어져 있는 거리를 찾아라
        let divot = $('#wrap>div').eq(i).offset().top;

        console.log('박스'+ i +'의 거리는'+ divot);

        $('html, body').stop().animate({'scrollTop':divot},800)
    });







    function switchEmotion(index) {
            // 모든 섹션에서 'on' 클래스 제거
            $('.main, .sub1, .sub2, .sub3, .sub4, .sub5').removeClass('on');
            // 해당 인덱스의 sub 섹션에 'on' 추가
            $('.sub' + (index + 1)).addClass('on');
        }
    
        // maininner 이미지 클릭 시 해당 감정으로 이동
        $('.maininner img').each(function (index) {
            $(this).click(function () {
                $('.main').removeClass('on'); // 메인 화면 비활성화
                switchEmotion(index);
            });
        });
    
        // subinner 이미지 클릭 시 해당 감정으로 이동 (동적 바인딩 사용)
        $(document).on('click', '.subinner img', function () {
            let index = $(this).index(); // 클릭한 이미지의 인덱스 가져오기
            switchEmotion(index);
        });
    
  
        $('nav li').eq(2).click(function(){

            $('.sub1').removeClass('on')
            $('.sub2').removeClass('on')
            $('.sub3').removeClass('on')
            $('.sub4').removeClass('on')
            $('.sub5').removeClass('on')
            $('.main').addClass('on')

        })
    


        $('nav li').eq(3).click(function(){

            $('.vid').removeClass('on')
            $('.vid').addClass('on')


        });


        $('.ball1').mouseenter(function(){

            
            $('.txt1').addClass('on')

            $('.pic1').addClass('on')
        })

        
        $('.ball1').mouseleave(function(){

            
            $('.txt1').removeClass('on')

            $('.pic1').removeClass('on')
        });

        $('.ball2').mouseenter(function(){

            
            $('.txt2').addClass('on')

            $('.pic2').addClass('on')
        })

        
        $('.ball2').mouseleave(function(){

            
            $('.txt2').removeClass('on')

            $('.pic2').removeClass('on')
        });

        $('.ball3').mouseenter(function(){

            
            $('.txt3').addClass('on')

            $('.pic3').addClass('on')
        })

        
        $('.ball3').mouseleave(function(){

            
            $('.txt3').removeClass('on')

            $('.pic3').removeClass('on')
        });

        $('.ball4').mouseenter(function(){

            
            $('.txt4').addClass('on')

            $('.pic4').addClass('on')
        })

        
        $('.ball4').mouseleave(function(){

            
            $('.txt4').removeClass('on')

            $('.pic4').removeClass('on')
        });

        $('.ball5').mouseenter(function(){

            
            $('.txt5').addClass('on')

            $('.pic5').addClass('on')
        })

        
        $('.ball5').mouseleave(function(){

            
            $('.txt5').removeClass('on')

            $('.pic5').removeClass('on')
        });

        $('.ball6').mouseenter(function(){

            
            $('.txt6').addClass('on')

            $('.pic6').addClass('on')
        })

        
        $('.ball6').mouseleave(function(){

            
            $('.txt6').removeClass('on')

            $('.pic6').removeClass('on')
        });






        


}) // 제이쿼리 끝