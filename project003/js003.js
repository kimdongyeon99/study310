$(document).ready(function(){

    // nav li 를 클릭했을 때, 나 자신에게 addClass on을 입혀라

    $('nav li').click(function(){

        $('nav li').removeClass('on')
        $(this).addClass('on')

        // 나 자신의 순번을 찾고, 해당 div의 위치를 바꿔라

        let i = $(this).index()

        $('#wrap>div').removeClass('on')
        
        $('#wrap>div').eq(i).addClass('on')

    })













}); // 제이쿼리 끝