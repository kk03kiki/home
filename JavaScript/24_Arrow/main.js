// アロー関数について

// 出力先の要素を習得
let output = document.getElementById('output')

// 通常の関数の作り方
function func01(){
    console.log("Hello")
}
func01()

// 無名関数を生成してfun02に代入
// →　（書き換えると↓）
const func02 = function(){
    console.log("Hello")
}
func02()


// アロー関数
// 通常のアロー関数
const func03 = () => {
    console.log("Hello")
}
func03()

// {}を省略したアロー関数
const func04 = () => console.log("Hello")
func04()

// {}とreturnを省略したアロー関数
const func05 = () => "Hello"
console.log(func05())
