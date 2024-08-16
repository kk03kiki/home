
// クラスについて
// メソッド編

// 出力先の要素を習得
let output = document.getElementById('output')

// クラスの宣言
class Fan {
    // プロパティ
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

    // メソッド(関数)
    // →プロパティと同じような感じ

    // 首振りボタンが押された時
    // 引数、戻り値無しのメソッド
    // 関数とは違いfunctionは書かなくて良い
    // thisは自分自身(オブジェクト(インスタンス))を示す。
    // →オブジェクトされているけど何かわからないからthisとしておいている
    // →　（Class内でオブジェクトとして使用する場合にthisを使用）
    pressSwingButton(){
        output.innerHTML += '首振りボタンが押されました。' + '<br>'
        this.swing = true

    }

}
// インスタンス化
let fan01 = new Fan()
let fan02 = new Fan()

// 扇風機が数台並んでいて、１代だけ首振りOnしてもすべてがオンになるわけではないため、
// すべての動作を書く

// 初期化した状態（fan01の場合）
output.innerHTML += fan01.swing + '<br>'
// fan01のメソッドの呼び出し
fan01.pressSwingButton() + '<br>'
// 首振りボタンを押されたため、首を振っている状態
output.innerHTML += fan01.swing + '<br>'


output.innerHTML += fan02.swing + '<br>'
// fan02のメソッドの呼び出し
fan02.pressSwingButton() + '<br>'
output.innerHTML += fan02.swing + '<br>'

