// 제이쿼리 기본설정
$(document).ready(function(){
            
    // 실행문

    $('.util ul li').eq(1).find('.num').hide();
    
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

    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        console.log(sc)

        let infoTop = $('.info').offset().top

        if(sc>= infoTop) {
            $('.header').addClass('fixed');

        } else {
            $('.header').removeClass('fixed')
        };

    })



    $('.img_box a').click(function(e){

        e.preventDefault()

        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(1).addClass('on')


        $(window).scrollTop(0);


    })

// 상품의 "구매하기" 버튼(.buy) 클릭
$('.container li .buy').click(function() {

    
    let text = $(this).closest('li').find('.text001').text().trim();
    let img = $(this).closest('li').find('.smallimgcon img').attr('src');
    let price = $(this).closest('li').find('.pric001 span').text().replace(',', '');

    let exists = false;
    // 장바구니에 같은 상품 있는지 확인
    $('.cartList ul li').each(function() {
        if ($(this).find('.cart-text').text() === text) {
            // 있으면 수량만 증가
            let quantitySpan = $(this).find('.quantity');
            let quantity = parseInt(quantitySpan.text());
            quantitySpan.text(quantity + 1);
            exists = true;
        }
    });

    // 없으면 새로 추가
    if (!exists) {
        $('<li class="cart-item">' +
            '<div class="cart-img"><img src="' + img + '" alt=""></div>' +
            '<div class="cart-text">' + text + '</div>' +
            '<div class="cart-price" data-price="'+price+'">' + parseInt(price).toLocaleString() + '원</div>' +
            '<div class="cart-quantity">' +
                '<button class="minus"><i class="fa-solid fa-minus"></i></button>' +
                '<span class="quantity">1</span>' +
                '<button class="plus"><i class="fa-solid fa-plus"></i></button>' +
            '</div>' +
            '<div class="cart-remove"><span class="remove"><i class="fa-solid fa-trash"></i></span></div>' +
        '</li>').appendTo('.cartList ul');
    }

    updateCartSummary(); // 👉 장바구니 요약 정보 업데이트
});

$('.remove').click(function(){

    $(this).closest('li').remove();
    updateCartSummary();
    
})

// (삭제) 버튼 클릭
// $(document).on('click', '.cart-remove .remove', function() {
//     $(this).closest('li').remove();
//     updateCartSummary(); // 장바구니 요약 정보 업데이트
// });

$('.plus').click(function(){

       let quantitySpan = $(this).siblings('.quantity');
            let quantity = parseInt(quantitySpan.text());
            quantitySpan.text(quantity + 1);
            updateCartSummary();
        
})

$('.minus').click(function(){

    let quantitySpan = $(this).siblings('.quantity');
    let quantity = parseInt(quantitySpan.text());
    if (quantity > 1) {
        quantitySpan.text(quantity - 1);
        updateCartSummary(); //  장바구니 요약 정보 업데이트
    }
})

// (수량 증가) 버튼 클릭
// $(document).on('click', '.cart-quantity .plus', function() {
//     let quantitySpan = $(this).siblings('.quantity');
//     let quantity = parseInt(quantitySpan.text());
//     quantitySpan.text(quantity + 1);
//     updateCartSummary(); //  장바구니 요약 정보 업데이트
// });

// (수량 감소) 버튼 클릭
// $(document).on('click', '.cart-quantity .minus', function() {
//     let quantitySpan = $(this).siblings('.quantity');
//     let quantity = parseInt(quantitySpan.text());
//     if (quantity > 1) {
//         quantitySpan.text(quantity - 1);
//         updateCartSummary(); //  장바구니 요약 정보 업데이트
//     }
// });

// ✨ 장바구니 요약 업데이트 함수
function updateCartSummary() {
    let totalCount = 0; // 총 상품 수량
    let totalPrice = 0; // 총 상품 금액

    $('.cartList ul li').each(function() {
        let quantity = parseInt($(this).find('.quantity').text());
        let price = parseInt($(this).find('.cart-price').attr('data-price'));

        totalCount += quantity;
        totalPrice += quantity * price;
    });

    // 총 상품 개수, 총 금액 업데이트
    $('.pri002').text(totalCount);
    $('.pri004').text(totalPrice.toLocaleString());

    // 배송비 설정
    let deliveryFee = 0;
    if (totalPrice === 0) {
        deliveryFee = 0;
    } else if (totalPrice >= 50000) {
        deliveryFee = 0;
    } else {
        deliveryFee = 3000;
    }
    $('.del003').text(deliveryFee.toLocaleString());


    // 할인 금액 가져오기
    let sale = parseInt($('.sale003').text().replace(',', '')) || 0;

    // 최종 합계 계산
    let finalTotal = totalPrice - sale + deliveryFee;
    $('.total003').text(finalTotal.toLocaleString());

    // 상단 util > 장바구니 숫자 업데이트
    let numElement = $('.util ul li').eq(1).find('.num');
    numElement.text(totalCount);

    // 수량 0이면 숨기기, 1개 이상이면 보이기
    if (totalCount === 0) {
        numElement.hide();
    } else {
        numElement.show();
    }
}



// 장바구니 버튼 클릭 시
$('.cart002 p').click(function() {
    let productName = $('.product .infoBox h2').text().trim();
    let productPrice = parseInt($('.product .won span').text().replace(',', ''));
    let productImg = $('.product .bigImg img.on').attr('src');
    let quantityToAdd = parseInt($('.num001 span').eq(1).text());

    if (quantityToAdd <= 0) return;

    let exists = false;

    // 같은 상품이 장바구니에 있는지 확인
    $('.cartList ul li').each(function() {
        if ($(this).find('.cart-text').text() === productName) {
            let quantitySpan = $(this).find('.quantity');
            let quantity = parseInt(quantitySpan.text());
            quantitySpan.text(quantity + quantityToAdd);
            exists = true;
        }
    });

    // 없다면 새로 추가
    if (!exists) {
        $('<li class="cart-item">' +
            '<div class="cart-img"><img src="' + productImg + '" alt=""></div>' +
            '<div class="cart-text">' + productName + '</div>' +
            '<div class="cart-price" data-price="' + productPrice + '">' + productPrice.toLocaleString() + '원</div>' +
            '<div class="cart-quantity">' +
                '<button class="minus">-</button>' +
                '<span class="quantity">' + quantityToAdd + '</span>' +
                '<button class="plus">+</button>' +
            '</div>' +
            '<div class="remov">' +
                '<div class="remove"><i class="fa-solid fa-trash"></i></div>' +
            '</div>' +
        '</li>').appendTo('.cartList ul');
    }

    updateCartSummary();
});


// 수량 증가
$(document).on('click', '.plus', function() {
    let quantitySpan = $(this).siblings('.quantity');
    let quantity = parseInt(quantitySpan.text());
    quantitySpan.text(quantity + 1);
    updateCartSummary();
});

// 수량 감소
$(document).on('click', '.minus', function() {
    let quantitySpan = $(this).siblings('.quantity');
    let quantity = parseInt(quantitySpan.text());
    if (quantity > 1) {
        quantitySpan.text(quantity - 1);
        updateCartSummary();
    }
});

// 삭제 (쓰레기통 아이콘 클릭 시)
$(document).on('click', '.remove', function() {
    $(this).closest('li').remove();
    updateCartSummary();
});

// 장바구니 요약 업데이트
function updateCartSummary() {
    let totalCount = 0;
    let totalPrice = 0;

    $('.cartList ul li').each(function() {
        let quantity = parseInt($(this).find('.quantity').text());
        let price = parseInt($(this).find('.cart-price').attr('data-price'));

        totalCount += quantity;
        totalPrice += quantity * price;
    });

    $('.pri002').text(totalCount);
    $('.pri004').text(totalPrice.toLocaleString());

    let deliveryFee = totalPrice >= 50000 || totalPrice === 0 ? 0 : 3000;
    $('.del003').text(deliveryFee.toLocaleString());

    let finalTotal = totalPrice + deliveryFee;
    $('.total003').text(finalTotal.toLocaleString());

    // 헤더 장바구니 숫자 아이콘
    let numElement = $('.util ul li').eq(1).find('.num');
    numElement.text(totalCount);

    if (totalCount === 0) {
        numElement.hide();
    } else {
        numElement.show();
    }
}


    // 장바구니에서 결제하기를 누르면 로그인창이 열린다
    $('.cart>div').eq(2).click(function(){

        $('.contents').addClass('loginBig')
        $('.loginOverlay').fadeIn();  // 반투명 배경 띄우기
        $('.login').fadeIn();

    })



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



    // product 페이지에서 cart001에 두번째 p를 누르면 로그인 페이지가 나온다

    $('.product').find('.cart003').click(function(){

        $('.contents').addClass('loginBig')
        $('.loginOverlay').fadeIn();  // 반투명 배경 띄우기
        $('.login').fadeIn();


    })




    // logo를 클릭했을 때 메인페이지에 on이 붙어라

    $('.logo').click(function(e){

        e.preventDefault()

        $('.contents').removeClass('loginBig')

        $('.contents>div').removeClass('on')

        $('.contents>div').eq(0).addClass('on')


        $(window).scrollTop(0);


    });


    // 열기
$('.util li').eq(0).click(function (e) {
    e.preventDefault();

    $('.contents').addClass('loginBig');
    $('.loginOverlay').fadeIn();
    $('.login').fadeIn();
});

// 닫기
$('.close i').click(function () {
    $('.loginOverlay').fadeOut();
    $('.login').fadeOut();
    $('.contents').removeClass('loginBig');
});

    
    


    // login창에서 logo를 누르면 메인페이지에 on이 되어라

    $('.login h2').click(function(){

        $('.loginOverlay').fadeOut();
    $('.login').fadeOut();
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
            $('.cartOverlay').addClass('on')

        } else{
            $('.cart').removeClass('on')
            $('.cartOverlay').removeClass('on')
        }

    });

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