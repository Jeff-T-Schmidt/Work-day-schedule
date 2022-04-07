//This is the current hour of the day
// var currentTime = moment();
// $('#hour').text(currentTime).format('h')
var hours_Day = 24;
var now = moment().text(currentTime).format('h')

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var saveBtnEl = $('.saveBtn')

function saveSched() {
    var toDo = $(this).siblings("input").val()
    var hour = $(this).siblings("div").text()

    localStorage.setItem(hour, toDo)
}









console.log(moment().format('HH a'))
saveBtnEl.click(saveSched)

function timeBlock() {
    var hours_Day = 24;
    let hours_Start = 9;
    let hours_End = 17;
    var now = moment().text(currentTime).format('h')
    var div = document.createElement("div");
    for (let i = 0; i < hours_Day; i++) {
        console.log(now)
        if (i >= hours_Start && i <= hours_End) {

            // Past-Tense
            if (now() > i) {
                div.setAttribute("class", "past row time-block");
            }
            // Present-Tense
            else if (now() == i) {
                div.setAttribute("class", "present row time-block");
            }
            // Future-Tense
            else {
                div.setAttribute("class", "future row time-block");
            }
        }
    }
}
timeBlock()