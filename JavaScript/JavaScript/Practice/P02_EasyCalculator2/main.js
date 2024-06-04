let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let result = document.getElementById('result')

const PLUS = 1
const MINUS = 2
const MULTI = 3
const DIVISION = 4
const REMAINDER = 5




function calcs(mode) {
switch (mode) {
   case PLUS:
      result.textContent =`${Number(num1.value)} + ${Number(num2.value)} =
      ${Number(num1.value) + Number(num2.value)}`

      break;

   case MINUS:
      result.textContent =`${Number(num1.value)} - ${Number(num2.value)} =
      ${Number(num1.value) - Number(num2.value)}`
      break;

    case MULTI:
      result.textContent =`${Number(num1.value)} * ${Number(num2.value)} =
      ${Number(num1.value) * Number(num2.value)}`
      break;

   case DIVISION:
      result.textContent =`${Number(num1.value)} / ${Number(num2.value)} =
       ${Number(num1.value) / Number(num2.value)}`
      break;

   case REMAINDERS:
      result.textContent =`${Number(num1.value)} % ${Number(num2.value)} =
       ${Number(num1.value) % Number(num2.value)}`
      break;

   default:
      break;
}

}
