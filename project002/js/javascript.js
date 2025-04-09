// 제이쿼리 기본설정

$(document).ready(function () {

    // 실행문
    // hero 오른쪽에서 왼쪽으로 이동하는 자동슬라이드

    // btn을 클릭했을때 이동하는 구조로변경

    $('.btn li').click(function(){

        let i = $(this).index();
        $('.btn li').removeClass('on')
        $(this).addClass('on');

        $('.mainImg li').eq(i - 1).css({ 'left': '0' }).stop().animate({ 'left': '-100%' }, 800)
        $('.mainImg li').eq(i).css({ 'left': '100%' }).stop().animate({ 'left': '0' }, 800)

    });

    // 일정시간마다 버튼이 자동으로 클릭이 되게 만들자

    let a = 0;

    let slide = setInterval(function () {
        a++;
        if (a == 3) a = 0;


        $('.btn li').eq(a).trigger('click')


    }, 3000);

    //  hero 에 마우스가 들어갔을때 화면이 멈추어라 
    // 화면이 멈추는게 아니라 setinterval을 지우는것

    $('.hero').mouseenter(function () {

        clearInterval(slide)
    })
    // hero에서 마우스가 떠났을때 다시  setInterval이 되어라 
    $('.hero').mouseleave(function () {

        slide = setInterval(function () {
            a++;
            if (a == 3) a = 0;


            $('.btn li').eq(a).trigger('click')


        }, 3000);
    });



    // pro_list 의 왼쪽 오른쪽을 클릭할때마다
    // 이미지의 위치가 바뀌어라
    // 왼쪽 오른쪽을 눌렀을때 변수가 변해라

    let num = 0;
    $('.pro_list').children('.left').click(function () {

        if (num < 4) num++;
        console.log(num);
        if (num == 4) {
            alert('마지막페이지입니다')
        }

        $('.pro_list').children('.container').children('ul').stop().animate({ 'left': -220 * num + 'px' }, 800)



    });

    $('.pro_list').children('.right').click(function () {

        if (num > 0) num--;
        console.log(num)
        $('.pro_list').children('.container').children('ul').stop().animate({ 'left': -220 * num + 'px' }, 800)

    });


    // 스크롤의 위치값을 찾기

    $(window).scroll(function () {

        let sc = $(this).scrollTop();
        console.log(sc);
        let infoTop = $('.info').offset().top

        if (sc >= infoTop) {
            $('.header').addClass('fixed');

          

        } else {
            $('.header').removeClass('fixed')
        };

        if(sc>=infoTop && sc<=infoTop + 800 ){
            $('.info .list').addClass('on')
            $('.info .list2').addClass('on')
        }else{
            $('.info .list').removeClass('on')
            $('.info .list2').removeClass('on')
        }


        if (sc >= infoTop - 300) {
            $('.info').addClass('on')
        }
    });


    // list의 li를 클릭했을때 장바구니 옆의 숫자가 늘어나라

    let cart = 0;

    $('.list li').click(function(){

        let count = $('.cartList ul li').length;

            $('.util').find('.num').text(count+1);
            $('.total>div').eq(0).find('span').text(count+1)

    });


    // 장바구니를 클릭시 장바구니가 나타난다.

    let aa=0
    
    $('.cart').children('h2').click(function(){

        aa++;
        if(aa==2)aa=0;
        if(aa==1){
        $('.cart').addClass('on')
    } else{
        $('.cart').removeClass('on')
    }  
    });

    // info list를 클릭했을 때, 
    // li를 클릭했을 때 img를 불러오고
    // p의 text를 불러와라

    $('.list li').click(function(){

        let text = $(this).find('.text').text();

        console.log(text);

        // $('.cartList').find('p').text(text);

        // attr()은 속성값을 불러오거나 작성하는 메서드다

        let img = $(this).find('img').attr('src');

        console.log(img);

        // $('.cartList').find('img').attr({'src':img});


        $('<li><div><img src="'+img+'" alt=""></div><p>'+text+'</p><span>X</span></li>').appendTo('.cartList ul')

        // cartList의 span을 클릭했을 때 li가 사라져라

        $('.cartList span').click(function(){

            $(this).closest('li').remove();

            // cart --;

            let count = $('.cartList ul li').length;

            $('.util').find('.num').text(count);
            $('.total>div').eq(0).find('span').text(count)

        })

    });

    // gnb 두번째 li를 클릭했을 때, product에 on을 붙여라

    $('.gnb li').eq(1).click(function(e){

        e.preventDefault()

        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(1).addClass('on')



    });




    // logo를 클릭했을 때 메인페이지에 on이 붙어라

    $('.logo').click(function(e){

        e.preventDefault()

        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(0).addClass('on')



    });

    // util 첫번째 li를 클릭했을 때, login에 on이 붙어라

    $('.util li').eq(0).click(function(e){

        e.preventDefault()

        $('.contents').addClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(2).addClass('on')



    });

    // logo를 누르면 메인페이지에 on이 되어라

    $('.login h2').click(function(){
        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(0).addClass('on')


    });



    // util 두번째 li를 클릭했을 때, cart에 on이 붙어라

    $('.util li').eq(1).click(function(e){

        e.preventDefault()

        $('.cart').addClass('on')

    });


    // pro의 li들을 클릭했을 때, product에 on이 붙어라

    $('.pro_list li').click(function(){
        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(1).addClass('on')
        


    })





}) //제이쿼리 끝.