import ShoppingBag from "./Cart.js"

let output = document.getElementById('output')

//GETパ ラメータの取得する処理
let url = new URL(window.location.href)
let params = url.searchParams
let index = params.get ('index')

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


            })

        
}



document.getElementById('addToShoppingBag')
.addEventListener('click',() => ShoppingBag.addItem(data.items[index]))


