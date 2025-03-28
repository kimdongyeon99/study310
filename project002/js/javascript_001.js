// 제이쿼리 기본설정
$(document).ready(function(){
            
    // 실행문
    
    // pro_list의 왼쪽 오른쪽을 한번씩 클릭할 때
    
    // container의 왼쪽 , 오른쪽이 바뀌어라

    // 왼쪽 오른쪽을 눌렀을 때 변수가 변해라

    let num = 0;
    $('.pro_list').children('.right').children('i').click(function(){

        if(num < 5) num ++;

        console.log(num);

        if(num == 5){
            alert('마지막 페이지입니다.')
        }

        $('.container').find('li').stop().animate({'left':-707 * num + 'px'}, 800)

    });

    $('.pro_list').children('.left').children('i').click(function(){

        if(num > 0) num --;

        console.log(num);

           
        $('.container').find('li').stop().animate({'left':-707 * num + 'px'}, 800)

    });



    // container li의 buy를 클릭했을 때 
    // img를 불러오고
    // p의 text를 불러와라

    $('.container li').find('.buy').click(function(){

        let text = $('.')


    })










    // container li를 클릭했을 때 장바구니 옆에 숫자가 늘어나라
    
    $('.container li').find('.buy').click(function(){

        let cou = $('.cartList li').length;

        cou ++

        $('.util').find('.num').text(cou+1)


    })








    // let cart = 0;

    // $('.container li').eq(2).click(function(){

    //     let count = $('.cartList ul li').length;


    //     $('.util').find('.num').text(count+1);

    //     $('.pri001>span').eq(0).find('span').text(count+1)



    // });


    // 장바구니를 클릭 시 장바구니가 나타난다

    let aa = 0;

    $('.util').children('li').children('num').click(function(){

        aa ++;

        if(aa == 2) aa = 0
        if(aa == 1){

            $('.cart').addClass('on')
        } else{

            $('.cart').removeClass('on')
        }


    });

    // product 페이지에서 thumb의 li를 클릭했을 때 bigImg 두번째 img에 addClass on을 해라

    $('.thumb li').eq(0).click(function(){

        $('.bigImg img').removeClass('on')

        $('.bigImg img').eq(0).addClass('on')

    })

    $('.thumb li').eq(1).click(function(){

        
        $('.bigImg img').removeClass('on')

        $('.bigImg img').eq(1).addClass('on')
        
    })

    $('.thumb li').eq(2).click(function(){

        
        $('.bigImg img').removeClass('on')

        $('.bigImg img').eq(2).addClass('on')
        
    });

    // num001의 span중 세번째를 클릭하면 숫자가 올라가고
    // num001의 span중 첫번째를 클릭하면 숫자가 내려가라

    let i = 0;

    $('.num001 span').eq(2).click(function(){

        i ++;

        $('.num001 span').eq(1).text(i)

        console.log(i)

    });


    $('.num001 span').eq(0).click(function(){

        if (i > 0) {
            i--;
        }

        $('.num001 span').eq(1).text(i)

        console.log(i)

    });




    // product페이지에서 cart001에 첫번째 p를 누르면 장바구니에 항목이 추가된다

    let cart01 = 0;

    $('.product').find('.cart001 p').eq(0).click(function(){

        cart01++

        let add = $('.cartList ul li').length;


            $('.util').find('.num').text(add+1);
            $('.prod001').children('.pri').find('.pri001 span').text(add+1)


    })






    // cart001의 첫번째 p를 클릭했을 때,
    // img를 불러오고
    // p의 txt도 불러와라

    $('.product').find('.cart001 p').eq(0).click(function(){

        let txt = $('.cartBox').find('.infoBox h2').text();

        console.log(txt);

        let img = $('.imgBox').children('.thumb ul li').find('img').attr('scr')

        console.log(img)

        $('<li><div><img src="'+img+'" alt=""></div><p>'+text+'</p><span>X</span></li>').appendTo('.cartList ul')

        // cartList의 span을 클릭했을 때 li가 사라져라
        $('.cartList span').click(function(){

            $(this).closest('li').remove()

            let add = $('.cartList ul li').length;

            $('.util').find('.num').text(add);
            $('.prod001').children('.pri').find('.pri001 span').text(add)


        })

        
    })






    // product 페이지에서 cart001에 두번째 p를 누르면 로그인 페이지가 나온다

    $('.product').find('.cart001 p').eq(1).click(function(){

        $('.contents').addClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(2).addClass('on')


        $(window).scrollTop(0);


    })


    // gnb 두번째 li를 클릭했을 때, product에 on을 붙여라

    $('.gnb li').eq(1).click(function(e){

        e.preventDefault()

        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(1).addClass('on')




        $(window).scrollTop(0);


    });

    // logo를 클릭했을 때 메인페이지에 on이 붙어라

    $('.logo').click(function(e){

        e.preventDefault()

        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(0).addClass('on')


        $(window).scrollTop(0);


    });


    // util 첫번째 li를 클릭했을 때, login에 on이 붙어라

    $('.util li').eq(0).click(function(e){

        e.preventDefault()

        $('.contents').addClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(2).addClass('on')



        $(window).scrollTop(0);

    })



    // login창에서 logo를 누르면 메인페이지에 on이 되어라

    $('.login h2').click(function(){

        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(0).addClass('on')

        $(window).scrollTop(0);

    });


    // util 두번째 li를 클릭했을 때, cart가 열렸다가 한번 더 클릭했을 때 닫혀라

    let aaaa = 0

    $('.util li').eq(1).click(function(e){

        e.preventDefault()

        aaaa ++;

        console.log(aaaa)

        if(aaaa == 2) aaaa = 0

        if(aaaa == 1){
            $('.cart').addClass('on')

        } else{
            $('.cart').removeClass('on')
        }

    });

    // pro의 li들을 클릭했을 때, product에 on이 붙어라

    // $('.pro_list li').click(function(){

    //     $('.contents').removeClass('loginBig')

    //     $('.contents>div').removeClass('on')

    //     $('.contents>div').eq(1).addClass('on')


    // });


    // recommend의 left , right를 클릭했을 때, 
    // contain이 왼쪽 , 오른쪽으로 이미지 위치가 바뀌어라
    // 왼쪽 오른쪽을 눌렀을 때 변수가 변해라

    let re = 0;
    
    $('.recommend').children('.right002').click(function(){

        if(re < 6) re ++;
        console.log(re);

        if(re == 6) {
            alert('마지막 페이지입니다.')
        }

        $('.recommend').children('.contain').children('ul').stop().animate({'left':-420 * re + 'px'},800)

    });

    $('.recommend').children('.left002').click(function(){

        if(re > 0) re --;
        console.log(re);

        $('.recommend').children('.contain').children('ul').stop().animate({'left':-420 * re + 'px'},800)

    });




});  // 제이쿼리 끝.







































