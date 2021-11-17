'use strict'

let test ="my test variable";
let answer = "";

while (answer !=3){
    answer =prompt ("gravity is how many times weaker on mars")
    if(answer === '3'){
    alert ("Correct")
    }
    else {
        alert ("Incorrect. Hint: You are three times lighter on Mars than on Earth.")
    }
}

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

function displayArnolds(){
    let number = prompt("how many wheezing arnolds do you give this site?");
    for (let arnold = 1; arnold <= number; arnold++){
        document.write('<img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/total-recall-eyes-bugging-out-scene.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5"/>');
    }
}