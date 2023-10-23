$(document).ready(function(){

  // PC 내비게이션
  let screenWidth = $(window).width();

  $('#gnb > ul > li').hover(function(){
    $('.header_inner').css('height','380px')
  },function(){
    if(screenWidth < 1200){
      // 태블릿, 모바일 헤더 높이
      $('.header_inner').css('height','60px')
    }else{
      $('.header_inner').css('height','70px')
    }
  })

  // 다국어 버튼
  $('.lang button').click(function(){
    $(".lang ul li").stop().slideToggle(300).css('top','0');
  });

  // 퀵메뉴 top버튼
  $('.top').on('click',function(){
    $('html, body').animate({
      scrollTop : 0
    },400)
    return false;
    });

  // 퀵메뉴 추가버튼
  $('#aside li.plus').click(function(){
    if($(this).hasClass('close')==true) {

      $(this).attr('class','plus');
      $('#aside li.plus i').text('add');
      $('#aside').css('height','110px');
      $('.quick_btn').hide();
    }else{

      $(this).addClass('close');
      $('#aside li.plus i').text('close');
      $('#aside').css('height','250px');
      $('.quick_btn').show();
    }
  });

  // 배너 슬라이드
  var $slider = $('.swiper1');
  $slider.find('.swiper-container').each(function(i){
    $(this).find(".swiper-pagination").addClass("type"+i);
    $(this).siblings("[class*='swiper-button']").addClass("type"+i);
    var slider  = new Swiper($(this), {
      slidesPerView: 1,
      loop: true,
      loopAdditionalSlides : 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: $slider.find('.swiper-pagination.type'+i),
        type: 'progressbar'
      },
      navigation: {
        nextEl: $slider.find('.swiper-button-next.type'+i),
        prevEl: $slider.find('.swiper-button-prev.type'+i)
      }
    });
  });

  // 메뉴 리스트
  const list_main = $('#list_main');
  const list_set = $('#list_set');
  const list_side = $('#list_side');

  list_main.click(function(){
    $('#main_m').show(400);
    $('#set_m, #side_m').hide();
    $('#list_main').css("fontWeight","bold");
    $('#list_set, #list_side').css("fontWeight","normal");
  });

  list_set.click(function(){
    $('#set_m').show(400);
    $('#main_m, #side_m').hide();
    $('#list_set').css("fontWeight","bold");
    $('#list_main, #list_side').css("fontWeight","normal");
  });

  list_side.click(function(){
    $('#side_m').show(400);
    $('#main_m, #set_m').hide();
    $('#list_side').css("fontWeight","bold");
    $('#list_main, #list_set').css("fontWeight","normal");
  });

  // 메뉴 슬라이드
  var $slider = $('.swiper2');
		$slider.find('.swiper-container').each(function(i){
			$(this).find(".swiper-pagination").addClass("type"+i);
			$(this).siblings("[class*='swiper-button']").addClass("type"+i);
			var slider  = new Swiper($(this), {
				slidesPerView: 2,
        spaceBetween: 0,
        observer: true,
				observeParents: true,
				loop: true,
        loopAdditionalSlides : 1,
				autoplay: {
					delay: 4000,
					disableOnInteraction: false
				},
				navigation: {
					nextEl: $slider.find('.swiper-button-prev.type'+i)
				},
        breakpoints:{
          0:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          540:{
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1100:{
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200:{
            slidesPerView: 2,
            spaceBetween: 0,
          }
        }
			});
    });

  // 뉴스&이벤트 슬라이드
  var $slider = $('.swiper3');
    $slider.find('.swiper-container').each(function(i){
      $(this).find(".swiper-pagination").addClass("type"+i);
      $(this).siblings("[class*='swiper-button']").addClass("type"+i);
      var slider  = new Swiper($(this), {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: $slider.find('.swiper-button-next.type'+i),
          prevEl: $slider.find('.swiper-button-prev.type'+i)
        },
        breakpoints:{
          0:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          910:{
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      });
    });

  // 매장찾기 원형 이미지
  let n = 1;

  function imgChange(){
    if(n >= 3){
      n = 1;
    }else{
      n++;
    }
    $('.circle4 img').attr({src:`./images/search_${n}.jpg`})
  }

  let Timer = setInterval(imgChange, 3000);

  // 커뮤니티 슬라이드
  var $slider = $('.swiper4');
    $slider.find('.swiper-container').each(function(i){
      $(this).find(".swiper-pagination").addClass("type"+i);
      var slider  = new Swiper($(this), {
        slidesPerView: 2.7,
        spaceBetween: 0,
        pagination: {
          el: $slider.find('.swiper-pagination.type'+i),
          type: 'bullets',
          clickable: 'true',
        },
        breakpoints:{
          0:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400:{
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          600:{
            slidesPerView: 2,
            spaceBetween: 20,
          },
          780:{
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          880:{
            slidesPerView: 2.7,
            spaceBetween: 20,
          },
          1000:{
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200:{
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1440:{
            slidesPerView: 2.7,
            spaceBetween: 20,
          },
        }
      });
    });

});