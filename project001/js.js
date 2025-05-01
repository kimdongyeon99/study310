$(document).ready(function(){

    $( ".datepicker" ).datepicker({

        // dateFormat: "yy년 mm월 dd일",      // 연결은 , 마무리는 :
        prevText: "＜",
        nextText: "＞",
        onSelect:function(dateText,inst){

            let year = inst.selectedYear;
            let month = inst.selectedMonth +1;
            let day = inst.selectedDay;

            console.log(dateText)
            $('.re_date2 span').text(': '+year+'년 '+ month +'월 '+ day + '일');

            setTimeout(function () {
                $(".ui-datepicker-today").removeClass("ui-datepicker-current-day");
              }, 10);

        },

    });
    $('.re_btn').click(function(){

        alert ("예약이 완료되었습니다")


    })


    let img = 0;
    $('.imgBox002').children('.right').click(function(){

        if(img < 3) img++;
        console.log(img)

        $('.imgBox002').children('.img_con').children('ul').stop().animate({'left':-365 * img + 'px'},800)
    })

    $('.imgBox002').children('.left').click(function(){

        if(img > 0) img--;
        console.log(img)

        $('.imgBox002').children('.img_con').children('ul').stop().animate({'left':-365 * img + 'px'},800)
    })

    $('.titlebox li').click(function(){
        let ii= $(this).index()
        
        $('.titlebox li').removeClass('on')

        $(this).addClass('on')
        $('.content>div').removeClass('on')

        $('.content>div').eq(ii).addClass('on')


    })

    $('.friendly-place li').click(function(){


        let iii = $(this).index()

        $('.friendly-place li').removeClass('on')

        $(this).addClass('on')

        $('.petfriendly>div').removeClass('on')

        $('.petfriendly>div').eq(iii).addClass('on')



    })

    $('.list li').click(function(){

        let iiii = $(this).index()

        $('.list li').removeClass('on')
        
        $(this).addClass('on')

        $('.imgBox>div').removeClass('on')
        $('.imgBox>div').eq(iiii).addClass('on')

        $('.imgBox li').css({'top': '0px'});
        
    });

    $('.btn001 li').eq(1).click(function(){

        $('.imgBox li').stop().animate({'top':-260 + 'px'})

    })

    $('.btn001 li').eq(0).click(function(){

        $('.imgBox li').stop().animate({'top':0 + 'px'})

    });

    $('.btn002 li').click(function(){

        const ind = $(this).index();
        const moveX = -820 * ind;

        $('.vid_inner .content ul').stop().animate({left: moveX + 'px'},800);

        $('.btn002 li').removeClass('on')
        $('.this').addClass('on');


    })

    $('.btn002 li').eq(0).click(function(){

        $('.btn002 li').removeClass('on')
        $('.btn002 li').eq(0).addClass('on')

    });
    $('.btn002 li').eq(1).click(function(){

        $('.btn002 li').removeClass('on')
        $('.btn002 li').eq(1).addClass('on')

    });
    $('.btn002 li').eq(2).click(function(){

        $('.btn002 li').removeClass('on')
        $('.btn002 li').eq(2).addClass('on')

    });

    // $('.faq_inner li').eq(0).click(function(){

    //     $('.txt1').removeClass('on')
    //     $('.txt2').removeClass('on')
    //     $('.txt3').removeClass('on')
    //     $('.more1').removeClass('on')
        

    //     $('.txt1').addClass('on')
    //     $('.faq_inner li').eq(0).find('.more1').addClass('on');


    // });

    // $('.faq_inner li').eq(1).click(function(){

    //     $('.txt1').removeClass('on')
    //     $('.txt2').removeClass('on')
    //     $('.txt3').removeClass('on')
    //     $('.more1').removeClass('on')

    //     $('.txt2').addClass('on')
    //     $('.faq_inner li').eq(1).find('.more1').addClass('on');

    // });

    // $('.faq_inner li').eq(2).click(function(){

    //     $('.txt1').removeClass('on')
    //     $('.txt2').removeClass('on')
    //     $('.txt3').removeClass('on')
    //     $('.more1').removeClass('on')

    //     $('.txt3').addClass('on')
    //     $('.faq_inner li').eq(2).find('.more1').addClass('on');

    // });


    let tog1 = 0

    $('.faq_inner li').eq(0).find('.more1').click(function(){

        tog1++;


        if(tog1 == 2) tog1 = 0 
        
        console.log(tog1)

        if(tog1 == 1){
            $('.txt1').removeClass('on')
            $('.txt2').removeClass('on')
            $('.txt3').removeClass('on')
            $('.more1').removeClass('on')
            $('.txt1').addClass('on')
            $(this).addClass('on')
            
        } else {
            $('.txt1').removeClass('on')
            $(this).removeClass('on')
            
        }

    });

    let tog2 = 0

    $('.faq_inner li').eq(1).find('.more1').click(function(){

        tog2++;


        if(tog2 == 2) tog2 = 0 
        
        console.log(tog2)

        if(tog2 == 1){
            $('.txt1').removeClass('on')
            $('.txt2').removeClass('on')
            $('.txt3').removeClass('on')
            $('.more1').removeClass('on')
            $('.txt2').addClass('on')
            $(this).addClass('on')
        } else {
            $('.txt2').removeClass('on')
            $(this).removeClass('on')
            
        }
        


    })

    let tog3 = 0

    $('.faq_inner li').eq(2).find('.more1').click(function(){

        tog3++;

        if(tog3 == 2) tog3 = 0 

        console.log(tog3)

        if(tog3 == 1){
            $('.txt1').removeClass('on')
            $('.txt2').removeClass('on')
            $('.txt3').removeClass('on')
            $('.more1').removeClass('on')
            $('.txt3').addClass('on')
            $(this).addClass('on')
            
        } else {
            $('.txt3').removeClass('on')
            $(this).removeClass('on')
            

        }

    })

    
    let more1 = 0;

$('.faq_inner li').eq(0).find('.more1').click(function() {
    more1++;

    if (more1 === 2) more1 = 0;

    console.log(more1);

    let txt = $('.faq_inner li').eq(0).find('.txt1');  // 클릭된 .more1의 형제 요소로 .txt1 찾기

    if (more1 === 1) {
        $('.txt1').addClass('on');
        $('.faq_inner li').eq(0).find('.more1').addClass('on');
    } else {
        $('.txt1').removeClass('on');
        $('.faq_inner li').eq(0).find('.more1').removeClass('on');
    }
});

let more2 = 0;

$('.faq_inner li').eq(1).find('.more1').click(function() {
    more2++;

    if (more2 === 2) more2 = 0;

    console.log(more2);

    let txt = $('.faq_inner li').eq(1).find('.txt2');  // 클릭된 .more1의 형제 요소로 .txt2 찾기

    if (more2 === 1) {
        $('.txt2').addClass('on');
        $('.faq_inner li').eq(1).find('.more1').addClass('on');
    } else {
        $('.txt2').removeClass('on');
        $('.faq_inner li').eq(1).find('.more1').removeClass('on');
    }
});

let more3 = 0;

$('.faq_inner li').eq(2).find('.more1').click(function() {
    more3++;

    if (more3 === 2) more3 = 0;

    console.log(more3);

    let txt = $('.faq_inner li').eq(2).find('.txt3');  // 클릭된 .more1의 형제 요소로 .txt3 찾기

    if (more3 === 1) {
        $('.txt3').addClass('on');
        $('.faq_inner li').eq(2).find('.more1').addClass('on');
    } else {
        $('.txt3').removeClass('on');
        $('.faq_inner li').eq(2).find('.more1').removeClass('on');
    }
});



    



});  // 제이쿼리 끝