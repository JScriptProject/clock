
function setDate()
{
const now = new Date();
console.log(now);
const second_now = now.getSeconds();
const minutes_now =  now.getMinutes();
const hours_now = now.getHours();

const second = document.querySelector('.second-hand');
const minute = document.querySelector('.minute-hand');
const hour = document.querySelector('.hour-hand');
console.log(second_now);
second.style.transform = `rotate(${((second_now/60)*360)+90}deg)`;
minute.style.transform = `rotate(${((minutes_now/60)*360)+90}deg)`;
hour.style.transform = `rotate(${((hours_now/12)*360)+90}deg)`;
}

setInterval(setDate, 1000);