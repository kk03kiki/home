// 関数について

// 出力先の要素を習得
let output = document.getElementById('output')

// Mathオブジェクト　→　計算を行うオブジェクト
// randは乱数の略 random
// Math.floorは小数点以下切り捨て

// maxを使用の場合
function rand(min,max){
    max++
    return Math.floor(Math.random() * max)
}

output.innerHTML += `${rand(0,100)} <br> `



// minを使用の場合
function rand(min,max){
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

output.innerHTML += `${rand(0,100)}  <br> `


// Dateクラス
output.innerHTML += '日付型' + '<br>'

// 現在時刻の取得
// 月は０が１月になる。０から数える！！
// 曜日も０から数える
// ｐ161

// toLocaleStringは、時計を出す　（曜日　月　日　の順番）
let today = new Date()
output.innerHTML += today + '<br>'

// 日本でよく使われる形式に変換
output.innerHTML += today.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
let day1 = new Date('2024/06/14')
output.innerHTML += day1.toLocaleString('ja-JP') + '<br>'

// 日付と時刻を指定した日時を取得
let day2 = new Date('2024/06/14 18:30')
output.innerHTML += day2.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得(月は0から始まるので、-1を指定する。)
let day3 = new Date(2024,5,14)
output.innerHTML += day3.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
let day4 = new Date(2024,5,14,18,30)
output.innerHTML += day4.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
let day5 = new Date(1718290800000)
output.innerHTML += day5.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
// ＋９時間になっているのは日本のタイムゾーンがプラス九時間だから
let day6 = new Date(0)
output.innerHTML += day6.toLocaleString('ja-JP') + '<br>'



// JavaScriptには日付フォーマットを行う標準クラスは無い
// なので、自作する。
function dateFormat(inputDate){
    let yyyy = inputDate.getFullYear().toString().padStart(4,'0')
    let MM = (inputDate.getMonth() + 1).toString().padStart(2,'0')
    let dd = inputDate.getDate().toString().padStart(2,'0')
    let hh = inputDate.getHours().toString().padStart(2,'0')
    let mm = inputDate.getMinutes().toString().padStart(2,'0')
    let ss = inputDate.getSeconds().toString().padStart(2,'0')

    // .padStart(4,'0') は4桁で0埋めする処理
    const elements = ['日','月','火','水','木','金','土']
    let EE = elements[inputDate.getDay()] 

    return `${yyyy}/${MM}/${dd} (${EE}) ${hh}:${mm}:${ss}<br>`
}

// getFullYear → 2024がでてくる（getYearだと24のみ出てくる）
// toString → 文字に変換
// padStart → paddingのパッド。埋めるの意味



output.innerHTML += dateFormat(day1)

output.innerHTML += day2 - day1 + '<br>'
let day7 = new Date(day2 - day1 + 1000)
let hh = Math.floor(day7 / 1000 / 60 / 60).toString().padStart(2,'0')
let mm = Math.floor(day7 / 1000 / 60 % 60).toString().padStart(2,'0')
let ss = Math.floor(day7 / 1000 % 60 ).toString().padStart(2,'0')
output.innerHTML += `${hh}:${mm}:${ss}`
