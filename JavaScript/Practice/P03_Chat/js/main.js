// 変数
let chatbx = document.getElementById('chatbx')
let result = document.getElementById('result')

// 定数
const ppA = 1
const ppB = 2
// const ppC = ""
// resetは一つしか指定していないので、定数を宣言しなくてよい

function msg(mode) {

    let chat = chatbx.value

    if (chat) {
        switch (mode) {
            case ppA:
                chat = `<li class="Asan">${chat}</li>`
                break;
        // chatbxに入力されて、Aさん（ppA)を押したら、chatbx　＋　改行される
    
            case ppB:
                chat =`<li class="Bsan">${chat}</li>`
                break;
        }
        result.innerHTML += chat
        
    }


}

function reset() {
    result.innerHTML = ""
    chatbx.value = ""
    // reset()の()は指定しなくてよい。１つしか関数がないから。上記if文のような
    // 複数ある場合に必要

}