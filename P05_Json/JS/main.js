let emplist = document.getElementById('output')

// 従業員一覧
let emp01 = {
    name: '従業員A',
    img: "A.jpg"

}

let emp02 = {
    name: '従業員B',
    img: "B.jpg"
}


let emp03 = {
    name: '従業員C',
    img: "C.jpg"
}


let emp04 = {
    name: '従業員D',
    img: "D.jpg"

}

// 従業員配列のリスト生成
let employees = [emp01, emp02, emp03, emp04]

// ウィンドウを読み込んだら実行される処理
window.onload = function (emploee) {
    employees.forEach(function (employee) {
        let outHtml = `
            < table >
            <tr>
                <td>
                    `${emploee.name} ${'<br>'} ${emploee.img}`

                </td>
            </tr>
            </table >
            `
        emplist.innerHTML += outHtml
    })

