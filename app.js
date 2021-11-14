
let test ="my test variable"

let userName = prompt("What is your name?");
let currentHour = prompt("What is the current hour of the day (1-24)");
let bodyweight = prompt("what is your current weight (in pounds)?")


if(currentHour >= 17 && currentHour <= 24){
    greeting = "Good evening";
} else if(currentHour >= 12 && currentHour <= 16){
    greeting = "Good afternoon";
}else if(currentHour > 0) {
    greeting = "Good morning";
}else {
    greeting = "You are not welcome"
}

bodyweight = bodyweight / 3



if(userName.toLowerCase() === "jim"){
    alert("Welcome Back Commander");
} else{
    alert("Welcome Back to Space Command");
}

document.write(greeting + "," + userName.toUpperCase() + ", your weight on the red planet is " + bodyweight + " lbs")