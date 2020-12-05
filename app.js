//Countdown timer
const date = "7 Dec 2021";
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


const countDown = () => {
    const tripDate = new Date(date);
    const todayDate = new Date();

    const distance = tripDate - todayDate;
    
    const count_seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const count_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const count_hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const count_days = Math.floor(distance / (1000 * 60 * 60 * 24)); 

    days.innerHTML = count_days;
    hours.innerHTML = count_hours;
    minutes.innerHTML = count_minutes;
    seconds.innerHTML = count_seconds;

}
setInterval(countDown, 1000);