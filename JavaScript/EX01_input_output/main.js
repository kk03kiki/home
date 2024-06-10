let inName = document.getElementById('inName')
let outName = document.getElementById('outName')
let msg = document.getElementById('msg')

function introduction() {
    outName.textContent = inName.value
    msg.textContent = '私の名前は' + inName.value + 'です。'
}