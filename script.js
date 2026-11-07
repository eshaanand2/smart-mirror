/* 
1: initialize dashboard
- Identify the clock element.
- Identify the date element.
- Identify the calendar widget.
- Identify the reminder widget.
- Prepare any data or variables needed by the other sections. 
*/

const clock = document.getElementById("clock")
const date = document.getElementById("date")
const calendar = document.querySelectorAll(".calendar-widget")
const reminder = document.querySelectorAll(".todo-widget")


/*
2: clock & date
- Get the current time from the computer.
- Format it into hours and minutes.
- Format the date into a readable format.
- Update the HTML elements.
- Refresh every second.
*/
function updateClock() {
    clock.textContent = new Date().toLocaleTimeString();
}
updateClock(); 
setInterval(updateClock, 1000);

function updateDate() {
    date.textContent = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}
updateDate();
setInterval(updateDate, 60000);


/*
3: calendar events
- Receive calendar event data.
- Sort events chronologically.
- Display event names and times.
- Show an appropriate message if there are no events.
- Refresh the displayed events when new data arrives.
*/

/*
4: reminder
- Receive a list of reminders.
- Display each reminder with a checkbox.
- Detect when a checkbox is clicked.
- Update the task's completion status.
- Visually distinguish completed tasks.
*/

/*
5: widget rearranging
- Detect when a widget is selected.
- Track its position.
- Move it to a new location.
- Release it when the gesture ends.
- Save its new position so the layout persists.
*/

/*
6: camera communication
- Receive hand coordinates from Python.
- Receive gesture information, such as a pinch.
- Translate those coordinates into screen positions.
- Move widgets when the appropriate gesture is detected.
*/
