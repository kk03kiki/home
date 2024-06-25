import ShoppingBag from "./Cart.js"

let output = document.getElementById('output')

//GETパ ラメータの取得する処理
let url = new URL(window.location.href)
let params = url.searchParams
let index = params.get ('index')

// 商品化後に入れた一覧（配列）
let addItems

// ウィンドウを読み込んだら実行される処理
window.onload = function () {
    // データの取得（非同期通信）
    fetch('../data/data.json')
        // 取得したデータをjson形式に変換
        .then(response => response.json())
        // 変換されたデータを表示
        .then(data => {
            // data.jasonファイルを「data」とする。data.jasonファイルの「items」を指定
            // itemsのデータそれぞれを出す（foreachで）
            // 「item」は、とりあえず「items」個々のデータを定義する
                let outHtml = `
               <table>
            <tr>
                <td> ${data.items[index].name} </td>
                <td> ${data.items[index].price} </td>
                <td> <img src="../img/${data.items[index].img}" class = "sizeChange"> </td>
                <td> ${data.items[index].detail} </td>
            </tr>
            </table>
            `
                output.innerHTML += outHtml

addItems = data.items[index]
console.log(addItems)



            })       
}

document.getElementById('addToShoppingBag')
.addEventListener('click',() => {
    let sb = new ShoppingBag()
    sb.addItem(addItems)
    window.location.href = 'index.html'
})
// かごに追加られたデータを保存。※データを保存しないと、htmlが切り替えられた時に
// データが移行されず、コードを書き直さないといけなくなるため。
// keyは自分で決める。””か’’で囲む


