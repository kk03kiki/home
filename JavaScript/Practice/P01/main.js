let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let result = document.getElementById('result')

function calcs1() {
    result.textContent = Number(num1.value) + Number(num2.value)
 }
 
 function calcs2() {
    result.textContent = Number(num1.value) - Number(num2.value)
 }
 
 function calcs3() {
    result.textContent = Number(num1.value) * Number(num2.value)
 }

 function calcs4() {
    result.textContent = Number(num1.value) / Number(num2.value)
 }
 function calcs5() {
    result.textContent = Number(num1.value) % Number(num2.value)
 }

