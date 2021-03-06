var tasks = {};
//WHEN I open the planner THEN the current day is displayed at the top of the calendar (moment.js)
var currentTime = document.querySelector("#currentDay");
currentTime.textContent = moment().format("dddd, MMMM Do YYYY");
//WHEN I scroll down THEN I am presented with time blocks for standard business hours (on our html)

//WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future

//WHEN I click into a time block THEN I can enter an event
var createTask = function (taskText, taskList) {
  //create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");
  var taskP = $("<p>").addClass("taskInput").text(taskText);

  //append p element to parent li
  taskLi.append(taskP);

  //append to ul list on page
  $("#task-list" + taskList).append(taskLi);
};

//WHEN I click the save button for that time block THEN the text for that event is saved in local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$("#task-list").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
}):

//WHEN I refresh the page THEN the saved events persist (localstorage)
