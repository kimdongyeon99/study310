$(document).ready(function(){

    // 회면의 높이값을 구해라
    let ht = $(window).height()
    console.log(ht);

    $('#wrap>div').eq(2).height(ht + 300)

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

    



























}) // 제이쿼리 끝