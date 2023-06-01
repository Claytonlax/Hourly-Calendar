// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(".btn").on("click", function () {
    var textFill = $(this).siblings(".description").val();
    var localID = $(this).parent().attr("id");
    localStorage.setItem(localID, textFill);
  });
  //

  function hourColorDenotion() {
    var currentTime = dayjs().hour();
    console.log(currentTime);
    $(".time-block").each(function () {
      var getID = $(this).attr("id");
      console.log(getID);
      var IDnum = getID.split("-");
      IDnum[1];
      var desiredBox = parseInt(IDnum[1]);
      console.log(IDnum);
      console.log(desiredBox);
      if (currentTime == desiredBox) {
        $(this).addClass("present");
      } else if (currentTime > desiredBox) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  }
  hourColorDenotion();

  function retrieveFromLocalStorage() {
    var hour1 = localStorage.getItem("hour-9");
    $("#hour-9 .description").val(hour1);
    console.log(hour1);

    var hour2 = localStorage.getItem("hour-10");
    $("#hour-10 .description").val(hour2);
    console.log(hour2);

    var hour3 = localStorage.getItem("hour-11");
    $("#hour-11 .description").val(hour3);
    console.log(hour3);

    var hour4 = localStorage.getItem("hour-12");
    $("#hour-12 .description").val(hour4);
    console.log(hour4);

    var hour5 = localStorage.getItem("hour-13");
    $("#hour-13 .description").val(hour5);
    console.log(hour5);

    var hour6 = localStorage.getItem("hour-14");
    $("#hour-14 .description").val(hour6);
    console.log(hour6);

    var hour7 = localStorage.getItem("hour-15");
    $("#hour-15 .description").val(hour7);
    console.log(hour7);

    var hour8 = localStorage.getItem("hour-16");
    $("#hour-16 .description").val(hour8);
    console.log(hour8);

    var hour9 = localStorage.getItem("hour-17");
    $("#hour-17 .description").val(hour9);
    console.log(hour9);
  }

    retrieveFromLocalStorage();

    
   

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
