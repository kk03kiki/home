// 遅延実行

// 出力先の要素を習得
let output = document.getElementById('output')

// テキストp179

// setTimeout(関数,時間)
function greeting(){
    output.innerHTML += 'こんにちは！' + '<br>'
}

// setTimeoutは、〇秒後に時間を表示するメソッド
setTimeout(greeting,3000)


// setInterval(関数,時間)
// new Dateは時間を取得する
function sayTime(){
    output.innerHTML += new Date()  + '<br>'
}
// setIntervalは、
let sayTimeID = setInterval(sayTime,1000)

function stopSaytime() {
    clearInterval(sayTimeID)
}

setTimeout(stopSayTime,10000)
// 10秒たったらポップが出てくる（10000/1000）　１ミリ→1,000秒　1,000で割る