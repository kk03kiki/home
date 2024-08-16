import ShoppingBag from "./Cart.js"

// 出力先取得
let output = document.getElementById('output')


//GETパ ラメータの取得する処理
let url = new URL(window.location.href)
let params = url.searchParams
let index = params.get('index')

// ウィンドウを読み込んだら実行される処理
window.onload = function () {
    // データの取得
    let sb = new ShoppingBag()
    let items = sb.itemList
    let itemDetails = document.getElementById('output')
    items.forEach((item, index) => {
        let outHtml = `
        <table onclick="window.location.href = 'detail.html?index=${index}' ">
            <tr>
                <td>${item.name}</td>
                <td>${item.price}円</td>
                <td><img src="../img/${item.img}" class = "sizeChange" class = "sizeChange"></td>
            </tr>
        </table>
        `
        itemDetails.innerHTML += outHtml


    })
}

