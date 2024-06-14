// 遅延実行

// 出力先の要素を習得
let output = document.getElementById('output')

// テキストp179

// setTimeout(関数,時間)
function greeting(){
    output.innerHTML += 'こんにちは！' + '<br>'
}

setTimeout(greeting,3000)


// setInterval(関数,時間)
function sayTime(){
    output.innerHTML += new Date()  + '<br>'
}

let sayTimeID = setInterval(sayTime,1000)

function stopSaytime() {
    clearInterval(sayTimeID)
}

setTimeout(stopSayTime,10000)
