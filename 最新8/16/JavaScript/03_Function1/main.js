// 関数
// プログラム（処理）の塊のことです。

// functionは関数。関数の後ろは自分で名前を付ける
function click1() {
    document.getElementById('p1').textContent = '実行ボタンが押されました。'
    
}

function click2() {
    document.getElementById('p2').textContent = '実行ボタンが押されました。'
    
}

function reset() {
    document.getElementById('p1').textContent = '1つ目の内容'
    document.getElementById('p2').textContent = '2つ目の内容'
    
}
