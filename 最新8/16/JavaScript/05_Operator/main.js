// 演算子

// 出力準備
let output = document.getElementById('output')

// 代入演算子『=』
// 右辺の値を左辺の変数に格納する。
let str1 = 'おなす'

// 算術演算子
let result = ''

let num1 = 3
let num2 = 5

// 四則演算
// 加算
result = num1 + num2
output.innerHTML += result
output.innerHTML += '<br>'

// 減算
result = num1 - num2
output.innerHTML += result
output.innerHTML += '<br>'

// 乗算
result = num1 * num2
output.innerHTML += result
output.innerHTML += '<br>'

// 除算
result = num1 / num2
output.innerHTML += result
output.innerHTML += '<br>'

// 剰余算
result = num1 % num2
output.innerHTML += result
output.innerHTML += '<br>'

// インクリメント、デクリメント
output.innerHTML += '- インクリメント、デクリメント -'
output.innerHTML += '<br>'

let num3 = 5
// インクリメント
num3++
output.innerHTML += num3
output.innerHTML += '<br>'

// デクリメント
num3--
output.innerHTML += num3
output.innerHTML += '<br>'

// 前置加算
output.innerHTML += ++num3
output.innerHTML += num3
output.innerHTML += '<br>'
// 後置加算
output.innerHTML += num3++
output.innerHTML += num3
output.innerHTML += '<br>'

// 前置減算
output.innerHTML += --num3
output.innerHTML += num3
output.innerHTML += '<br>'
// 後置減算
output.innerHTML += num3--
output.innerHTML += num3
output.innerHTML += '<br>'

// 代入演算子
output.innerHTML += '- 代入演算子 -'
output.innerHTML += '<br>'

let num4 = 5

// 加算代入
num4 += 2
output.innerHTML += num4
output.innerHTML += '<br>'

// 減算代入
num4 -= 2
output.innerHTML += num4
output.innerHTML += '<br>'

// 乗算代入
num4 *= 2
output.innerHTML += num4
output.innerHTML += '<br>'

// 除算代入
num4 /= 2
output.innerHTML += num4
output.innerHTML += '<br>'

// 剰余算代入
num4 %= 2
output.innerHTML += num4
output.innerHTML += '<br>'


// 比較演算子
// 結果がtrueかfalse
output.innerHTML += '- 比較演算子 -'
output.innerHTML += '<br>'

num5 = 5
num6 = 5
num7 = 6
// 等価
result = num5 == num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 == num7
output.innerHTML += result
output.innerHTML += '<br>'

// 否定
result = num5 != num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 != num7
output.innerHTML += result
output.innerHTML += '<br>'

// 厳密等価
result = num5 === num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 === num7
output.innerHTML += result
output.innerHTML += '<br>'

// 厳密否定
result = num5 !== num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 !== num7
output.innerHTML += result
output.innerHTML += '<br>'

// 小なり
result = num5 < num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 < num7
output.innerHTML += result
output.innerHTML += '<br>'

// 大なり
result = num5 > num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 > num7
output.innerHTML += result
output.innerHTML += '<br>'

// 以下
result = num5 <= num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 <= num7
output.innerHTML += result
output.innerHTML += '<br>'

// 以上
result = num5 >= num6
output.innerHTML += result
output.innerHTML += '<br>'
result = num5 >= num7
output.innerHTML += result
output.innerHTML += '<br>'


// 論理演算子
output.innerHTML += '- 論理演算子 -'
output.innerHTML += '<br>'

// かつ
let bool1 = true
let bool2 = true
let bool3 = false
result = bool1 && bool2
output.innerHTML += result
output.innerHTML += '<br>'
result = bool1 && bool3
output.innerHTML += result
output.innerHTML += '<br>'

// または
result = bool1 || bool2
output.innerHTML += result
output.innerHTML += '<br>'
result = bool1 || bool3
output.innerHTML += result
output.innerHTML += '<br>'

// 否定
result = !bool1
output.innerHTML += result
output.innerHTML += '<br>'
result = !bool3
output.innerHTML += result
output.innerHTML += '<br>'
// 文字連結
output.innerHTML += '- 文字連結 -'
output.innerHTML += '<br>'

let str4 = '木内'
let str5 = '和也'
result = str4 + str5
output.innerHTML += result
output.innerHTML += '<br>'
let str6 = '100'
let str7 = '200'
result = str6 + str7
output.innerHTML += result
output.innerHTML += '<br>'


// 使い方の具体例
output.innerHTML += '- 比較演算子＋論理演算子の使い方の具体例 -'
output.innerHTML += '<br>'
// 値6 ～ 12の時true
// 6以上　かつ　12以下　と言い換えられる
num7 = 8
num8 = 14

result = 6 <= num7 && num7 <= 12
output.innerHTML += result
output.innerHTML += '<br>'
result = 6 <= num8 && num8 <= 12
output.innerHTML += result
output.innerHTML += '<br>'
// 計算の優先順位をあげるのは（）を付ける


output.innerHTML += '- 厳密等価の使い方の具体例 -'
output.innerHTML += '<br>'
let str2 = 1
let str3 = '1'

result = str2 == str3
output.innerHTML += result
output.innerHTML += '<br>'

result = str2 === str3
output.innerHTML += result
output.innerHTML += '<br>'

