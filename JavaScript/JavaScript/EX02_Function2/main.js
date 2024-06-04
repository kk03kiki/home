// 値が変化する、取得する要素を予め変数に格納しておく
let output = document.getElementById('output')

// 値が変化しない変数
// 可読性を上げるために定数を利用。
const PLUS = 1
const MMINUS = 2
const RESRT = -1

// 数字を初期化（０ゼロ）にするため
let counter = 0

// 出力文字列の生成(テンプレートリテラル)
output.textContent = `カウンター：${counter}`

// modeはとりあえず置いている定数が入った変数。たとえばindex内のbtn(plus)が押されたら、modeがplusにかわる。
function btn(mode) {
    switch (mode) {
        case PLUS:
            counter++
            break;
        case MINUS:
            counter--
            break;
        case RESET:
            counter = 0
            break;
        default:
            break;
    }

    // 出力文字列の生成(テンプレートリテラル)
    let msg = `カウンター${counter}`
    output.textContent = msg

}
