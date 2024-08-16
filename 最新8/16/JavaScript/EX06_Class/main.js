import Fan from "./Fan.js"

// 出力先の要素を習得
let output = document.getElementById('output')

// インスタンス化
let fan01 = new Fan(output)

let p0btn = document.getElementById('p0')
let p1btn = document.getElementById('p1')
let p2btn = document.getElementById('p2')
let p3btn = document.getElementById('p3')
let swingbtn = document.getElementById('swing')

// 間違いの例
// HTMLで定義していた『onClick』は押されたら実行するプログラムを入れておく
// 今回は、押されたら実行する関数を入れるのが正しい
// →　『onClick』は複数の関数を同じイベントに割り当てることができない。
// →　addEventListenerは同一のイベントに複数のリスナーを追加することが可能
// p0btn.addEventListener('click',fan01.pressPowerButton(Fan.POWER_STATUS.OFF))
// 正しくは以下の通りに書く
// コールバック関数の定義
function pressPowerButtonOFF(){
    fan01.pressPowerButton(Fan.POWER_STATUS.OFF)
}

// ボタンのイベントとコールバック関数の関連付け（イベントハンドラー）
// イベントと関数を関連付けることをバインドと言う
// →　addEventListenerは、〇〇？追加することができる。ここではclickが追加
p0btn.addEventListener('click',pressPowerButtonOFF)

// 無名関数を利用すると、コールバック関数を用意しなくても実装できる。
// →　上記の短縮して書いたコード
p1btn.addEventListener('click',function (){fan01.pressPowerButton(Fan.POWER_STATUS.P1)})

p2btn.addEventListener('click',function (){fan01.pressPowerButton(Fan.POWER_STATUS.P2)})

p3btn.addEventListener('click',function (){fan01.pressPowerButton(Fan.POWER_STATUS.P3)})

swingbtn.addEventListener('click',fan01.pressSwingButton)


fan01.infoView()