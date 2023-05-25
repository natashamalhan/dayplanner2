// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY, h:mm'));
$(".saveBtn").on("click", function(){
  localStorage.setItem(this.id, $(this).siblings("textarea").val());
})
$(".time-block").each(function () {
  var hour = parseInt($(this).attr("id").split("-")[1]);
  var currentHour = dayjs().hour();
  if (hour < currentHour) {
    $(this).attr("class", "row time-block past");}
    else if (hour === currentHour) {
      $(this).attr("class", "row time-block present");}
      else {
        $(this).attr("class", "row time-block future");}
        $(this).sibing("textarea").val(localStorage.getItem(this.id));

})


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
