$(function(){

    $('.model_list li:first-child').mouseenter(function(){
        $('.model_list li:first-child img').attr('src','images/img_yt_on.jpg');
    });
    $('.model_list li:first-child').mouseleave(function(){
        $('.model_list li:first-child img').attr('src','images/img_yt_off.jpg');
    });
    $('.model_list li:nth-child(2)').mouseenter(function(){
        $('.model_list li:nth-child(2) img').attr('src','images/img_mn_on.jpg');
    });
    $('.model_list li:nth-child(2)').mouseleave(function(){
        $('.model_list li:nth-child(2) img').attr('src','images/img_mn_off.jpg');
    });
    $('.model_list li:nth-child(3)').mouseenter(function(){
        $('.model_list li:nth-child(3) img').attr('src','images/img_ws_on.jpg');
    });
    $('.model_list li:nth-child(3)').mouseleave(function(){
        $('.model_list li:nth-child(3) img').attr('src','images/img_ws_off.jpg');
    });
    $('.model_list li:nth-child(4)').mouseenter(function(){
        $('.model_list li:nth-child(4) img').attr('src','images/img_yj_on.jpg');
    });
    $('.model_list li:nth-child(4)').mouseleave(function(){
        $('.model_list li:nth-child(4) img').attr('src','images/img_yj_off.jpg');
    });
    $('.model_list li:nth-child(5)').mouseenter(function(){
        $('.model_list li:nth-child(5) img').attr('src','images/img_cy_on.jpg');
    });
    $('.model_list li:nth-child(5)').mouseleave(function(){
        $('.model_list li:nth-child(5) img').attr('src','images/img_cy_off.jpg');
    });
    $('.model_list li:nth-child(6)').mouseenter(function(){
        $('.model_list li:nth-child(6) img').attr('src','images/img_sm_on.jpg');
    });
    $('.model_list li:nth-child(6)').mouseleave(function(){
        $('.model_list li:nth-child(6) img').attr('src','images/img_sm_off.jpg');
    });
    $('.model_list li:nth-child(7)').mouseenter(function(){
        $('.model_list li:nth-child(7) img').attr('src','images/img_sh_on.jpg');
    });
    $('.model_list li:nth-child(7)').mouseleave(function(){
        $('.model_list li:nth-child(7) img').attr('src','images/img_sh_off.jpg');
    });
    $('.model_list li:last-child').mouseenter(function(){
        $('.model_list li:last-child img').attr('src','images/img_sj_on.jpg');
    });
    $('.model_list li:last-child').mouseleave(function(){
        $('.model_list li:last-child img').attr('src','images/img_sj_off.jpg');
    });

    $('.m_btn').click(function(){
        $('.blackout').fadeIn();
        $('.m_menu_wrap').animate({'left':0},500);
        $('body,html').css('overflow','hidden');
    });
    $('.blackout').click(function(){
        $('.blackout').fadeOut();
        $('.m_menu_wrap').animate({'left':'-100%'},500);
        $('body,html').css('overflow','auto');
    });

    $('.visual').slick({
        autoplay: true,
        dots:true
    });

    $('.notice_slide').slick({
        autoplay: true,
        arrows:false,
        dots:true
    });

    //윈도우 브라우저 사이즈 조절했을 떄 이벤트
    $(window).resize(function(){
        let num = $(this).width();
        console.log(num);

        if(num <= 750){
            $('.slick-prev, .slick-next').hide();
            $('.slick-dots').show();
        }else{
            $('.slick-prev, .slick-next').show();
            $('.slick-dots').hide();
        }
        //메인 visual 이미지 교체 되는 프로그램
        if(num <= 750){
            //모바일 이미지
            $('.visual_01 img').attr('src','images/visual01_m.jpg');
            $('.visual_02 img').attr('src','images/visual02_m.jpg');
            $('.visual_03 img').attr('src','images/visual03_m.jpg');
            $('.visual_04 img').attr('src','images/visual04_m.jpg');

            $('.box_01 a img').attr('src','images/img_story01_m.jpg');
            $('.box_02 a img').attr('src','images/img_story02_m.jpg');
            $('.box_03 a img').attr('src','images/img_story03_m.jpg');

            $('.notice_01 img').attr('src','images/img_blogevent160816_m.jpg');
            $('.notice_02 img').attr('src','images/img_facebookevent160816_m.jpg');
            $('.notice_03 img').attr('src','images/img_renewalevent1_m.jpg');
            $('.notice_04 img').attr('src','images/img_renewalevent2_m.jpg');
        }else{
            //PC버전 이미지
            $('.visual_01 img').attr('src','images/visual01.jpg');
            $('.visual_02 img').attr('src','images/visual02.jpg');
            $('.visual_03 img').attr('src','images/visual03.jpg');
            $('.visual_04 img').attr('src','images/visual04.jpg');

            $('.box_01 a img').attr('src','images/img_story01.jpg');
            $('.box_02 a img').attr('src','images/img_story02.jpg');
            $('.box_03 a img').attr('src','images/img_story03.jpg');

            $('.notice_01 img').attr('src','images/img_blogevent160816.jpg');
            $('.notice_02 img').attr('src','images/img_facebookevent160816.jpg');
            $('.notice_03 img').attr('src','images/img_renewalevent1.jpg');
            $('.notice_04 img').attr('src','images/img_renewalevent2.jpg');
        }
    });

    //브라우저 가로사이즈 크기 조절 상관없이 
    let num = $(window).width();
    console.log('가로사이즈',num);
    if(num <=750){
        //모바일 이미지
        $('.visual_01 img').attr('src','images/visual01_m.jpg');
        $('.visual_02 img').attr('src','images/visual02_m.jpg');
        $('.visual_03 img').attr('src','images/visual03_m.jpg');
        $('.visual_04 img').attr('src','images/visual04_m.jpg');

        $('.box_01 a img').attr('src','images/img_story01_m.jpg');
        $('.box_02 a img').attr('src','images/img_story02_m.jpg');
        $('.box_03 a img').attr('src','images/img_story03_m.jpg');

        $('.notice_01 img').attr('src','images/img_blogevent160816_m.jpg');
        $('.notice_02 img').attr('src','images/img_facebookevent160816_m.jpg');
        $('.notice_03 img').attr('src','images/img_renewalevent1_m.jpg');
        $('.notice_04 img').attr('src','images/img_renewalevent2_m.jpg');
    }else{
        //PC버전 이미지
        $('.visual_01 img').attr('src','images/visual01.jpg');
        $('.visual_02 img').attr('src','images/visual02.jpg');
        $('.visual_03 img').attr('src','images/visual03.jpg');
        $('.visual_04 img').attr('src','images/visual04.jpg');

        $('.box_01 a img').attr('src','images/img_story01.jpg');
        $('.box_02 a img').attr('src','images/img_story02.jpg');
        $('.box_03 a img').attr('src','images/img_story03.jpg');

        $('.notice_01 img').attr('src','images/img_blogevent160816.jpg');
        $('.notice_02 img').attr('src','images/img_facebookevent160816.jpg');
        $('.notice_03 img').attr('src','images/img_renewalevent1.jpg');
        $('.notice_04 img').attr('src','images/img_renewalevent2.jpg');
    }


























});