// クラスについて
// プロパティ編

// 出力先の要素を習得
let output = document.getElementById('output')

// クラスの宣言
class Fan {
    // プロパティ(状態)
    // そのオブジェクトが持つ状態(変数)の事

    // 羽根の枚数
    blades

    // 風力
    windPower

    // 電源
    power

    // 首振り
    swing

    // 状態の出力先
    output   

}

// インスタンス化
let fan01 = new Fan()

// プロパティへのアクセス方法

// 代入
// fan01の羽根の枚数が7枚である事を示す。
fan01.blades = 7
// fan01の風力を1(弱)にする。
fan01.windPower = 1

// 取得
output.innerHTML += fan01.blades + '<br>'
output.innerHTML += fan01.windPower + '<br>'

