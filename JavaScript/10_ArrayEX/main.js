// 配列


// 出力準備
let output = document.getElementById('output')


// ・二次元配列（多次元配列）
let arr01 = [[]]
let arr02 = [['0-0','0-1','0-2'],['1-0','1-1','1-2']]

output.innerHTML += arr02[0] + '<br>'
output.innerHTML += arr02[1] + '<br>'
output.innerHTML += arr02[1][1] + '<br>'


// ・オブジェクト
let classRoom = {
    ClassNumber:201,
    teachers:['木内','有田','林'],
    students:['藤井','前村','三田','森','森藤','山崎']
}

output.innerHTML += classRoom.ClassNumber + '<br>'
output.innerHTML += classRoom.students[4]  + '<br>'
