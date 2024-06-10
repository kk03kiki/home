// 出力準備
let output = document.getElementById('output')

// GETパラメータの取得する処理
// 2行は定型文（let urlとlet params）
let url = new URL(window.location.href)
let params = url.searchParams
let msg = params.get ('msg')

output.innerHTML = msg