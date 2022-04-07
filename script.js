var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var saveBtnEl = $('.saveBtn')

function saveSched(){
    var toDo = $(this).siblings("input").val()
    var hour = $(this).siblings("div").text()

    localStorage.setItem(hour, toDo)
}
console.log(moment().format('HH a'))
saveBtnEl.click(saveSched)