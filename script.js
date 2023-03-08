$(function () {
  $(".saveBtn").on("click", function (event) {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // Function to add presnt, future, past class to each div
  function changeColor() {
    var currentTime = dayjs().hour();
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      if (blockTime < currentTime) {
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  changeColor();

  // Adding current date to top of page
  $("#currentDay").text(dayjs().format("YYYY-MM-DD"));
});
