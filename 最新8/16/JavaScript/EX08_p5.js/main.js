// p5.js

// 出力先の要素を習得
let output = document.getElementById('output')

window.setup = function(){
    let canvasElement = createCanvas(500,500)
    canvasElement.parent(output)
    // 背景色
    background('#32cd32')
    // 60秒に１回更新されている
    frameRate(60)
}

// let size = 0
// window.draw = function(){
//     // 塗りつぶし
//     fill('#ffff00')
//     // ふち
//     strokeWeight(0)
//     // ？、？、横幅、縦幅
//     ellipse(250, 250, 300, 300)

//     // ふち
//     strokeWeight(50)
//     stroke('#ffffff')
//     // 斜め線？
//     line(0,0,500,500)

//     fill('#0000ff')
//     size++
//     circle(250,250,100)

// }

let size = 0
let f = false
window.draw = function(){
    fill('#ffff00')
    strokeWeight(0)
    ellipse(250, 250, 300, 300)
    strokeWeight(50)
    stroke('#ffffff')
    line(0,0,500,500)
    fill('#0000ff')
    if(f){
        size++
    }else{
        size--
    }
    if(size == 500){
        f = false
    }else if(size == -500){
        f = true
    }

    circle(250,250,size)
}