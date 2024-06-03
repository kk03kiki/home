// 変数
// 変数の定義
// var let
// 基本はletを使う（使い分けるのは難しいため。letは変数）

// 変数の定義と初期化
// ＝は代入という意味。イコールの右を左に代入することを初期化という。数学のイコールではない（文字列型
let name = 'おなす'
// let name = 'おなす'の処理を２行に分解
let name2
name2 = 'おなす２'

// 変数名の付け方
// 意味のある名前を付けてください。
// ２単語以上の場合
let personalName

// 命名規則について
// キャメルケース（camelCase）
 // ローワーキャメルケース（lowerCamelCase）
 // アッパーキャメルケース（UpperCamelCase）
// スネークケース（snake_case）（SNAKE_CASE）
// 変数は基本的にローワーキャメルケースを利用する

// 変数の代入について
// ＝を利用して右辺の値を左辺に代入する
// 値左辺に値が入っていた場合は上書きされる

// 変数の取得について
// 変数名を書くだけ

// JavaScriptでHTMLに出力する処理
let output = document.getElementById('output')
// ドキュメント　の(.)　output(定数)をoutputへ代入する

// 入力する文字を定義
// msgはメッセージの略
let msg = 'あいうえお'
// 文字を出力する
output.textContent = msg
// outputのテキストドキュメントにmsgを代入する

// ()ついていないと変数、ついていると定数


// 変数の型について
// 大きく分類すると基本型と参照型に分けられる（変数の上にカーソルを合わせると型がでてくる）

// 基本型
// 文字列型や数値型のことで、その値がそのまま変数に格納されている。
// 一覧：
// 数値型
// 文字列型
// 真偽型
// numll
// undefined
// シンボル

// 参照型
// 配列やオブジェクト、関数の事でその値が格納されているアドレスを格納している。
// 一覧：
// 配列
// オブジェクト
// 関数

// 数値型としての変数
let num1 = 100
// 文字列型としての変数
let str1 = '100'

// innnerHTMLを使うとHTMLのタグが使用できる
output.innerHTML += '<br>'
output.innerHTML += num1
output.innerHTML += '<br>'
output.innerHTML += str1

// 動的型付けについて
// 計算結果の型が違っても、代入することができる。(自動的に型が変化する)
// 数値型＋数値型　：数値型になる
let num2 = num1 + num1
output.innerHTML += '<br>'
output.innerHTML += num2

// 数値型+数値型　：文字列型になる
let str2 = str1 + str1
output.innerHTML += '<br>'
output.innerHTML += str2

// 数値型+文字列型　：文字列型になる
let mix1 = num1 + str1
output.innerHTML += '<br>'
output.innerHTML += mix1