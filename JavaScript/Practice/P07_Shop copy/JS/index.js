

// jsonデータより出力
let itemDetail = document.getElementById('itemDetails')


window.onload = function () {
    // データの取得（非同期通信
    fetch('../data/data.json')
        // 取得したデータをjson形式に変換
        .then(response => response.json())
        // 変換されたデータを表示
        .then(data => {
            // data.jasonファイルを「data」とする。data.jasonファイルの「items」を指定
            // itemsのデータそれぞれを出す（foreachで）
            // 「item」は、とりあえず「items」個々のデータを定義する
            // foreach（item 配列の要素（配列全体のこと）,
            // index 現在の要素の添え字index番号（配列の中の何番目かを定数indexとして表している））、
            // ここで初めて変数を決める
            data.items.forEach((item, index) =>{
                let outHtml = `
                <table onclick="window.location.href = 'detail.html?index=${index}'">
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.price}円</td>
                        <td><img src="../img/${item.img}" class = "sizeChange"></td>
                    </tr>
                </table>
                `
                itemDetails.innerHTML += outHtml


            })
        })
}

