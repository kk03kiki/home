// クラスについて
// クラスプロパティ編

// 出力先の要素を習得
let output = document.getElementById('output')

// クラスの宣言
class Fan {
    // プロパティ
    
    //  クラスプロパティ(クラス変数)
    // （扇風機の）台数
    // →スタティクス静的
    static number = 0

    // クラスプロパティ(クラス変数(変数))の定義
    // windPowerの日本語名称の統一用定数
    // →jsの使用によりconst(定数)が認識されないので代わりにstaticを使用
    static POWER_STATUS = {OFF:'切', P1:'弱',P2:'中',P3:'強'}



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

    // コンストラクタ(メソッド)の宣言
    // 汎用性をもたせる。(デフォルト引数(関数やメソッド、サブルーチンを呼び出す際に渡す値)を利用)
    constructor(output,blades=5) {
        // 各値を初期化

        // →何代目なのかを書く?
        // クラスプロパティ(クラス変数)のアクセス

        // 全体の定数
        Fan.number++

        // thisは個人(pysonではselfと書く)
        this.output = output
        this.blades = blades

        // クラスプロパティ(クラス定数(変数))のアクセス
        this.windPower = Fan.POWER_STATUS.OFF
        this.power = false
        this.swing = false
    }

    // メソッド(関数)
    // 首振りボタン押下
    pressSwingButton(){
        output.innerHTML += '首振りボタンが押されました。' + '<br>'
        this.swing = true
    }

}

// インスタンス化
// 羽根の枚数を指定なし
let fan01 = new Fan(output)
// 羽根の枚数を指定あり
let fan02 = new Fan(output,7)

output.innerHTML += fan01.swing + '<br>'
// fan01のメソッドの呼び出し
fan01.pressSwingButton() + '<br>'
output.innerHTML += fan01.swing + '<br>'
output.innerHTML += fan01.blades + '<br>'

output.innerHTML += fan02.swing + '<br>'
// fan02のメソッドの呼び出し
fan02.pressSwingButton() + '<br>'
output.innerHTML += fan02.swing + '<br>'
output.innerHTML += fan02.blades + '<br>'

// クラスプロパティ(クラス変数)のアクセス
// →　「let fan01 = new Fan(output)」と「let fan02 = new Fan(output,7)」の計２台のこと
// →　プロパティ　Fanが２回呼び出されている
output.innerHTML += `扇風機の台数は全部で${Fan.number}台です。`
