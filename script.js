

var timeDisplay = $(".timeDisplay");

setInterval(function () {
    var time = moment();
    timeDisplay.text(time.format("dddd, MMMM Do"));
}, 1000);

var buttonTracker = document.querySelector(".btn-track");
buttonTracker.addEventListener("click", function(event){
    if(event.target.classList[0] === "btn"){
    console.log(event.target.parentElement.previousElementSibling.children[0].value)   
    }


});

function mySave9() {
    var myContent9 = document.getElementById("textArea9").value;
    localStorage.setItem("myContent9", myContent9);
}


function mySave10() {
    var myContent10 = document.getElementById("textArea10").value;
    localStorage.setItem("myContent10", myContent10);
}




function mySave11() {
    var myContent11 = document.getElementById("textArea11").value;
    localStorage.setItem("myContent11", myContent11);
}



function mySave12() {
    var myContent12 = document.getElementById("textArea12").value;
    localStorage.setItem("myContent12", myContent12);
}



function mySave13() {
    var myContent13 = document.getElementById("textArea13").value;
    localStorage.setItem("myContent13", myContent13);
}



function mySave14() {
    var myContent14 = document.getElementById("textArea14").value;
    localStorage.setItem("myContent14", myContent14);
}




function mySave15() {
    var myContent15 = document.getElementById("textArea15").value;
    localStorage.setItem("myContent15", myContent15);
}




function mySave16() {
    var myContent16 = document.getElementById("textArea16").value;
    localStorage.setItem("myContent16", myContent16);
}



function mySave17() {
    var myContent17 = document.getElementById("textArea17").value;
    localStorage.setItem("myContent17", myContent17);
}


myLoad();

function myLoad() {
    var myContent9 = localStorage.getItem("myContent9");
    document.getElementById("textArea9").value = myContent9;
    var myContent10 = localStorage.getItem("myContent10");
    document.getElementById("textArea10").value = myContent10;
    var myContent11 = localStorage.getItem("myContent11");
    document.getElementById("textArea11").value = myContent11;
    var myContent12 = localStorage.getItem("myContent12");
    document.getElementById("textArea12").value = myContent12;
    var myContent13 = localStorage.getItem("myContent13");
    document.getElementById("textArea13").value = myContent13;
    var myContent14 = localStorage.getItem("myContent14");
    document.getElementById("textArea14").value = myContent14;
    var myContent15 = localStorage.getItem("myContent15");
    document.getElementById("textArea15").value = myContent15;
    var myContent16 = localStorage.getItem("myContent16");
    document.getElementById("textArea16").value = myContent16;
    var myContent17 = localStorage.getItem("myContent17");
    document.getElementById("textArea17").value = myContent17;
}



var present = new Date().getHours();

for (i = 9; i < 18; i ++ ){
if (present > i) {
    $("#textArea"+ i).addClass("past");
}

else if (present == i) {
    $("#textArea" + i).addClass("present");
}

else if (present < i) {
    $("#textArea" + i).addClass("future");
} } ;