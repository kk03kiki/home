// 九九

const output1 = document.getElementById('output1')
const output2 = document.getElementById('output2')
const output3 = document.getElementById('output3')


// Q1
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        output1.innerHTML += `${i * j}`
    }
    output1.innerHTML += "<br>"
}




// Q2
for (let i = 1; i <= 9; i++) {
    let s = '';
    for (let j = 1; j <= 9; j++) {
        output2.innerHTML += `${i}*${j} = ${i * j} <br>`

    }
}


// Q3
let tableHTML = '<table border="1">'

for (let i = 1; i <= 9; i++) {
    tableHTML += "<tr>"
    for (let j = 1; j <= 9; j++) {

        tableHTML += `<td>${i * j}</td>`
    }
    tableHTML += "</tr>"
}
tableHTML += '</table>'

// console.log(tableHTML)
// 一つでも間違えているとVSコードで表示されないため、↑を入力してクロームでF12を押して、間違えてても表示することができる。
output3.innerHTML += tableHTML