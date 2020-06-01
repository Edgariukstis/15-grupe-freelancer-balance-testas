"use strict"

import account from './data.js'
let sumIncome = 0;
let sumExpense = 0;
let balansas = 0;

for (let i = 0; i < account.length; i++) {
    if (isFinite(account[i].income)) {
        sumIncome += account[i].income;
    } else {
        sumIncome += 0;
    }
    if (isFinite(account[i].expense)) {
        sumExpense += account[i].expense;
    } else {
        sumExpense += 0;
    }
          
}

balansas = sumIncome - sumExpense;

var vietaIplaukos = document.querySelector('.iplaukos');
    console.log(vietaIplaukos);
    vietaIplaukos.innerText = sumIncome + ' Eur';
var vietaIslaidos = document.querySelector('.islaidos');
    vietaIslaidos.innerText = sumExpense + ' Eur';
var vietaBalansas =document.querySelector('.balansas');
    vietaBalansas.innerText = balansas + ' Eur';