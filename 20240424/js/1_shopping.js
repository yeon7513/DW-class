"use strict";

const today = new Date();

const year = today.getFullYear();

const month = (today.getMonth() + 1).toString().padStart(2, '0');

const day = today.getDate().toString().padStart(2, '0');

const date = `${year}.${month}.${day}`;

console.log(date);


document.getElementById("date").textContent = date;