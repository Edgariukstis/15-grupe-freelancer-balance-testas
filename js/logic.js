"use strict"

import account from './data.js'
let sumIncome = 0;
let sumExpense = 0;
let balansas = [];
let balansasSum = 0;
let minMenInc = 0;
let maxIncome = -Infinity;
let minIncome = Infinity;
let maxExpense = -Infinity;
let minExpense = Infinity;



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

balansasSum = sumIncome - sumExpense;

var vietaIplaukos = document.querySelector('.iplaukos');
    vietaIplaukos.innerText = sumIncome + ' Eur';
var vietaIslaidos = document.querySelector('.islaidos');
    vietaIslaidos.innerText = sumExpense + ' Eur';
var vietaBalansas =document.querySelector('.balansas');
    vietaBalansas.innerText = balansasSum + ' Eur';
    

    const placeForTable = document.querySelector('.table-content');
    let HTML = '';
    var menPav = '';
    var sortedAccount=[];
    
    sortedAccount = account.sort(function(a,b) {
        return a.month - b.month;
    });
       
        for (let i = 0; i < sortedAccount.length; i++) {
            var raktas = sortedAccount[i].month;
                         
            switch (raktas) {
                case 1: menPav = 'Sausis'; 
                    break;
                case 2: menPav = 'Vasaris'; 
                    break;
                case 3: menPav = 'Kovas'; 
                    break;
                case 4: menPav = 'Balandis'; 
                    break;
                case 5: menPav = 'Gegužė'; 
                    break;
                case 6: menPav = 'Birželis'; 
                    break;
                case 7: menPav = 'Liepa'; 
                    break;
                case 8: menPav = 'Rugpjūtis'; 
                    break;
                case 9: menPav = 'Rugsėjis'; 
                    break;
                case 10: menPav = 'Spalis'; 
                    break;
                case 11: menPav = 'Lapkritis'; 
                    break;
                case 12: menPav = 'Gruodis'; 
                    break;
                default:
                    break;
            }
            if (!isFinite(sortedAccount[i].income)) {
                sortedAccount[i].income = '-';
                
            }    
            if (!isFinite(sortedAccount[i].expense)) {
                sortedAccount[i].expense = '-';
                 
            } 

            if ((isFinite(sortedAccount[i].income)) && 
                (isFinite(sortedAccount[i].expense))) {
                balansas[i] = sortedAccount[i].income - sortedAccount[i].expense
            } else {
                if ((isFinite(sortedAccount[i].income)) &&
                    (!isFinite(sortedAccount[i].expense))) {
                        balansas[i] = sortedAccount[i].income; 
                } else {
                    if ((!isFinite(sortedAccount[i].income)) &&
                        (isFinite(sortedAccount[i].expense))) {
                        balansas[i] = 0 - sortedAccount[i].expense;
                    }
                        }
                    }
            HTML += `
            <div class="table-row">
                        <div class="cell">${i+1}</div>
                        <div class="cell">${menPav}</div>
                        <div class="cell">${sortedAccount[i].income} Eur</div>
                        <div class="cell">${sortedAccount[i].expense} Eur</div>
                        <div class="cell">${balansas[i]} Eur</div>
            </div>`;           
    }
            placeForTable.innerHTML = HTML;

//  let maxIncome = -Infinity;
//  let minIncome = Infinity;
//  let maxExpense = -Infinity;
//  let minExpense = Infinity;
var keyMaxIncome,
    keyMaxExpense,
    keyMinIncome,
    keyMinExpense;


sortedAccount.forEach(function(v, k) {
    if (maxIncome < +v.income) {
        maxIncome = +v.income;
        keyMaxIncome = k;
    }
    if (maxExpense < +v.expense) {
        maxExpense = +v.expense;
        keyMaxExpense = k;
    }
    if ((minIncome > +v.income) && 
        (+v.income > 0)) {
        minIncome = +v.income;
        keyMinIncome = k;
    }
    if ((minExpense > +v.expense) && 
        (+v.expense > 0)) {
        minExpense = +v.expense;
        keyMinExpense = k;
    }
        
});


var menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis',
    'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis']


var vietaMaxIncome = document.getElementById('maxIncome');
vietaMaxIncome.innerHTML = menesiai[keyMaxIncome];

var vietaMaxExpense = document.getElementById('maxExpense');
vietaMaxExpense.innerHTML = menesiai[keyMaxExpense];

var vietaMinIncome = document.getElementById('minIncome');
vietaMinIncome.innerHTML = menesiai[keyMinIncome];

var vietaMinExpense = document.getElementById('MinExpense');
vietaMinExpense.innerHTML = menesiai[keyMinExpense];




