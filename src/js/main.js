// меню бургер
(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);

  // слайдер
  $('.slider-center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // maskinput

  $(function(){
    $(".phone_mask").mask("8(999) 999-9999");
  });

  // плавный якорь

  $(document).ready(function(){
    $("main").on("click",".arr-down", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

function replace() {
  document.querySelector(".right").style.display="block";
  document.querySelector(".right2").style.display="none";
  document.querySelector(".right3").style.display="none";
}
function replace2() {
  document.querySelector(".right").style.display="none";
  document.querySelector(".right2").style.display="block";
  document.querySelector(".right3").style.display="none";
}
function replace3() {
  document.querySelector(".right").style.display="none";
  document.querySelector(".right2").style.display="none";
  document.querySelector(".right3").style.display="block";
}