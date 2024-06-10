let output = document.getElementById('output')

// GETパラメータの取得する処理
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
            // data.jasonファイルを「data」とする。data.jasonファイルの「members」を指定
            // membersのデータそれぞれを出す（foreachで）
            // 「employee」は、とりあえず「members」個々のデータを定義する
                let outHtml = `
               <table>
            <tr>
                <td> ${data.members[index].detail} </td>
            </tr>
            </table>
            `
                output.innerHTML += outHtml


            })

        
}
