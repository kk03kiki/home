let emplist = document.getElementById('emplist')



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
            // foreach（employee 配列の要素（配列全体のこと）,
            // index 現在の要素の添え字index番号（配列の中の何番目かを定数indexとして表している））、
            // ここで初めて変数を決める
            data.members.forEach(function (employee,index) {
                // テンプレートリテラル→``で囲むと文字列となる。``の中で式（式の答えが出てくる）を出すときに&{}使用
                let outHtml = `
            <table onclick="window.location.href = 'detail.html?index=${index}'">

            <tr>
                <td> ${employee.name} </td>
                <td> <img src="../img/${employee.img}" > </td>
                <td></td>
                
            </tr>
            </table>
            `
                emplist.innerHTML += outHtml


            })

        })
}
