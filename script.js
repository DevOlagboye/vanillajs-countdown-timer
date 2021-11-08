// For the Vanilla Javascript part
// We Need
// (i) The Ending Date
// (ii) The Current Date
// (iii) We need to subtract and that way we can calculate the amount of days, hours, minutes left

const newYears = "1 Jan 2022";
let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minsElement = document.getElementById("mins");
let secondsElement = document.getElementById("seconds");

let countdown = () => {
    //Our CurrentDate
    const currentDate = new Date();
    //NewYears date
    const newYearsDate = new Date(newYears);
    //After running this in the console what we have is a miliseconds
    //If miliseconds is divided by 1000 we have a seconds
    //console.log(newYearsDate - currentDate);
    //Now we need to convert this results to days, hours, minutes and seconds
    //If miliseconds is divided by 1000 we have a seconds
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    //Let's calculate the days
    //Which will be seconds divided by 3600 which has hours then divided by 24
    //Math.floor to make it a whole number
    const days = Math.floor(totalSeconds / 3600 / 24);
    //Let's have the hours
    const hours = Math.floor(totalSeconds / 3600) % 24;
    //Let's have the minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;
    //Let's have the seconds
    const seconds = Math.floor(totalSeconds) % 60;
    // console.log(days, hours, minutes, seconds);

    //Calculation done let's fill them into the dom
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
};
countdown();
//Set interval to make this run every seconds
setInterval(countdown, 1000);