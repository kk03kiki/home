// 配列


// 出力準備
let output = document.getElementById('output')

function capture(){
    output.alt = "画像取得中"
    // データの取得（非同期通信）
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        output.src = json.message
        output.alt = "画像取得完了"
    })
    


}
