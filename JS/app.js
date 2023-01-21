'use strict'
const deg = 6;
const hours = document.querySelector('#hours')
const minuts = document.querySelector('#minuts')
const sekonts = document.querySelector('#sekunt')

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let minut = day.getMinutes() * deg;
    let sekunt = day.getSeconds() * deg;

    hours.style.transform = `rotateZ(${(hour) + (minut / 12)}deg)`
    minuts.style.transform = `rotateZ(${(minut)}deg)`
    sekonts.style.transform = `rotateZ(${(sekunt)}deg)`
})
