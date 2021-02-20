let count = 0;
$(function () {
  $("#sidebar_button").on("click", function () {
    count++;
    if (count % 2 == 1) {
      $(this).text("CLOSE");
    } else {
      $(this).text("OPEN");
    }
    $(this).toggleClass("open-button");
    $(".aside").toggleClass("open-aside");
  });
});

