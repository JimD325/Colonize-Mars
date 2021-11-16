'use strict'

let test ="my test variable"

function makeGreeting(){
    let userName = getUserName();
    let greeting = hourOfDay();
    let weighing = bodyweight();
    document.write(greeting + "," + userName.toUpperCase() + ", your weight on the red planet is " + weighing + " lbs");
}

function getUserName () {
    let userName = prompt("What is your name?");
    if(userName.toLowerCase() === "jim"){
        alert("Welcome Back Commander");
    } else{
        alert("Welcome Back to Space Command");
    }
    return userName;
}

function hourOfDay(){
    let currentHour = prompt("What is the current hour of the day (1-24)");
    let greeting =""
if(currentHour >= 17 && currentHour <= 24){
    greeting = "Good evening";
} else if(currentHour >= 12 && currentHour <= 16){
    greeting = "Good afternoon";
}else {
    greeting = "Good morning";
}    

return greeting; 

}
function bodyweight(){
    let bodyweight = prompt("what is your current weight (in pounds)?")
    bodyweight = bodyweight / 3
    return bodyweight;
}

