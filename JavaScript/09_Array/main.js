// 配列


// 出力準備
let output = document.getElementById('output')

// ・配列の生成方法
let arr01 = []
let arr02 = ["木内", "浦","傘木"]

// ・配列の取得方法
// 配列の数え方は左から0123...と数える。０だとおなすがでてくる
output.innerHTML += arr02[0] + "<br>"
output.innerHTML += arr02[1] + "<br>"
output.innerHTML += arr02[2] + "<br>"

// ・配列の上書き
arr02[0] = "木内和也"
output.innerHTML += arr02[0] + "<br>"



// ・配列への要素の追加
arr02[3] = '金' 
output.innerHTML += arr02 + "<br>"

// レングスは要素を追加するという意味→金さんの次に追加される、＝4番目、木村＝４（。。。金、木村になる）
// arr01の長さ（レングスlength）木村さんを代入＝追加される
arr02[arr02.length] = '木村'
output.innerHTML += arr02 + "<br>"

arr02.push('豊岡')
output.innerHTML += arr02 + '<br>'

// 先頭に追加される
// 木内和也,浦,傘木,金,木村,豊岡　　→　　中島,木内和也,浦,傘木,金,木村,豊岡
arr02.unshift('中島')
output.innerHTML += arr02 + '<br>'



// ・削除（取り出す）
// 現在　中島　木内　浦　傘木　金　木村　豊岡　なので、一番『最後』の豊岡のみ取り出す
// →豊岡
output.innerHTML += arr02.pop() + '<br>'
// 今現在の並び→　中島　木内　浦　傘木　金　木村
output.innerHTML += arr02 + '<br>'

// 現在　中島　木内　浦　傘木　金　木村　なので、一番『最初』の「中島」要素を取り出す
// →中島
output.innerHTML += arr02.shift() + '<br>'
// 今現在の並び→　　木内　浦　傘木　金　木村
output.innerHTML += arr02 + '<br>'




// ・連想配列（オブジェクト）
// （公式にはjsには存在しない、テキストには載っている）

// 連想配列（オブジェクト）の生成方法
// 左側をキー（講師）：右をvalues（木内）  keyに日本語はあまりつかわない
let map01 ={}
let map02 ={
    '講師' : '木内',
    '生徒1' : '中村',
    '生徒2' : '西'
}

// ・連想配列の取得方法
// 存在しないkeyを入れるとundefinedと表示される（生徒３のこと）
output.innerHTML += map02['講師'] + '<br>'
output.innerHTML += map02['生徒1'] + '<br>'
output.innerHTML += map02['生徒2'] + '<br>'
output.innerHTML += map02['生徒3'] + '<br>'

// ・連想配列の上書き
map02['講師'] = '木内和也'
output.innerHTML += map02['講師'] + '<br>'

// 連想配列への要素の追加
arr02['生徒3'] = '羽者家'
output.innerHTML += Object.keys(map02) + '<br>'
output.innerHTML += Object.values(map02) + '<br>'
// Objectは一覧を出す




// 連想配列(オブジェクト)の生成方法
let map03 = {
    '講師':'木内',
    '生徒1':'中村',
    '生徒2':'西'
}

// 連想配列の取得方法
output.innerHTML += map03.講師 + '<br>'
output.innerHTML += map03.生徒1 + '<br>'
output.innerHTML += map03.生徒2 + '<br>'

// 連想配列の上書き
map02.講師 = '木内和也'
output.innerHTML += map03.講師 + '<br>'

// 連想配列への要素の追加
map02.生徒3= '羽者家'
output.innerHTML += Object.keys(map03) + '<br>'
output.innerHTML += Object.values(map03) + '<br>'

