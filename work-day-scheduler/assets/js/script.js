let textInput = $("#textInput");

let now = new Date($.now());
let currentTime = moment(now).format("dddd MMM Do");
$('#currentDay').html(currentTime);

let currentHour = new Date(now).getHours()
console.log(currentHour);

$(document).ready(function() {
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