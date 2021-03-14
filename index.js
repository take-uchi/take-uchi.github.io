$(function () {
  // メインロゴ
  setTimeout(function () {
    $(".main-logo").addClass("main-logo-open");
  }, 500);

  // サイドバー部分
  $(".lines").on("click", function () {
    $("aside").toggleClass("open-aside");
    $(this).toggleClass("open");
  });

  $(".menu2").on("click", function () {
    $(".sub-menu").slideToggle();
  });


  $(".menu1").on("click", function () {
    $.when($(".main-logo").removeClass("main-logo-open")).done(
      setTimeout(function () {
        $(".main-logo").addClass("main-logo-open");
      }, 500)
    );
  });

  // タブバー部分
  // const $menuA = $(".menu").find("a");
  // $($menuA).on("click", function () {
  //   $(this).attr("href");
  //   let $href = $(this).attr("href");

  //   if ("#menu2" === $href) {
  //     return false;
  //   } else {
  //     $(".tab").removeClass("is-show");
  //     $($href).addClass("is-show");
  //   }
  // });

  const $menuA = $(".menu").find("a");
  $($menuA).on("click", function (event) {
    event.preventDefault()
    $(this).attr("href");
    let $href = $(this).attr("href");
    // console.log($(".tab").is(":visible"));
    // console.log($($href).is(":visible"));
    if ($($href).is(":visible")) {
      return false;
    } else if ( "#menu2" === $href) {
      return false
    } else {
      $($(".tab")).fadeOut();
      $($($href)).fadeIn();
    }
  });

  // モーダルウィンドウ部分
  $(".pilot1").on("click" , function(){
    $(".A").addClass("modal-open");
  });

  $(".pilot2").on("click" , function(){
    $(".C").addClass("modal-open");
  });


  $(".close-btn > a").on("click" ,function(){
    $(".modal-window").removeClass("modal-open");
  });

  $(".modal-window").click(function(){
    $(".modal-window").removeClass("modal-open");
  })
});
