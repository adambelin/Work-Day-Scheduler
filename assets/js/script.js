$(document).ready(function () {

let textInput = $("#textInput");

let now = new Date($.now());
let currentTime = moment(now).format("dddd MMM Do");
$('#currentDay').html(currentTime);

let currentHour = new Date(now).getHours()

    for (let i=0; i < 9; i++){
        let id="#hour_" + i;
        let hour = 9 + i;

        if (hour < currentHour){
            $(id).addClass("past");
        }
        else if(hour === currentHour){
            $(id).addClass("present");
        }
        else {
            $(id).addClass("future");
        }
    }
});

$(".saveBtn").click(function (){
    let value = $(this)
        .siblings(".textarea")
        .val();

    let time = $(this)
        .parent()
        .attr("id");

    localStorage.setItem(time, value);
    console.log(value);
});

$('#hour0 .textarea').val(localStorage.getItem("hour0"))
$('#hour1 .textarea').val(localStorage.getItem("hour1"))
$('#hour2 .textarea').val(localStorage.getItem("hour2"))
$('#hour3 .textarea').val(localStorage.getItem("hour3"))
$('#hour4 .textarea').val(localStorage.getItem("hour4"))
$('#hour5 .textarea').val(localStorage.getItem("hour5"))
$('#hour6 .textarea').val(localStorage.getItem("hour6"))
$('#hour7 .textarea').val(localStorage.getItem("hour7"))