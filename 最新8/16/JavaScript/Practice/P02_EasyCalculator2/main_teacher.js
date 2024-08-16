let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")

// プログラムの可動性のために定数を利用している
const PLUS = '+'
const MINUS = '-'
const MULTI = '*'
const DIVIDE = '/'
const MODULO = '%'

// OPは仮引数
function calc(op) {
   let num1n = Number(num1.value)
   let num2n = Number(num2.value)
   let resultNum = 0
   switch (op) {
      case PLUS:
         resultNum = num1n + num2n
         break;
      case MINUS:
         resultNum = num1n - num2n
         break;
      case MULTI:
         resultNum = num1n * num2n
         break;
      case DIVIDE:
         resultNum = num1n / num2n
         break;
      case MODULO:
         resultNum = num1n % num2n
         break;
   
      default:
         break;
   }

   // 表示処理
   let msg = `${num1n} ${op} ${num2n} = ${resultNum}`
   result.textContent = msg
}
