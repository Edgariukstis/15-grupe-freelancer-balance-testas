"use strict"

import account from './data.js'
let sumIncome = 0;
let sumExpense = 0;
let balansas = [];
let balansasSum = 0;
let minMenInc = 0;

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
                console.log('Elementas:'+ i);
                console.log(sortedAccount[i].income);
            }    
            if (!isFinite(sortedAccount[i].expense)) {
                sortedAccount[i].expense = '-';
                console.log('Elementas:'+ i);
                console.log(sortedAccount[i].expense);  
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

