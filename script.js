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
    var hour1 = localStorage.getItem("hour-10");
    $("#hour-10 .description").val(hour1);
  
    console.log(hour1);
    }
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });

