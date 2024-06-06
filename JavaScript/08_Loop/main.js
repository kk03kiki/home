// 反復構文

// 出力準備
let output = document.getElementById('output')

// for文
// indexに０を入れて初期化式処理、；条件処理indexは10より小さい；、おｋだったら処理される
// 初期化式：for文に初めて訪れた時実行される。
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
// 増分式：ブロック実行後に実行され、後に条件式で判定を行う。
for (let index = 0; index < 10; index++) { 
    output.innerHTML += index   
}

// 改行のため入力
output.innerHTML += '<br>'

// while文
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
// letは自分で書く。while文に初期化を書くところがないから外に書く。
let index = 0
while (index < 10) {
    output.innerHTML += index
    index++
}

output.innerHTML += '<br>'

// do-while文
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
// letは自分で書く。do-while文に初期化を書くところがないから外に書く。
// フォルスの場合でも1回は実行される。
index = 0
do {
    output.innerHTML += index
    index++
} while (index < 10);


output.innerHTML += '<br>'


// break文
// ブロックの処理を強制中断する。ifブロックは影響受けない
let runnerA = 0
let runnerB = 100

while (runnerA < runnerB) {
    runnerA += 3
    runnerB += 2
    output.innerHTML += `A${runnerA}:B${runnerB}<br>`
    // ゴール
    if (runnerB >= 200) {
        output.innerHTML += 'ゴール<br>'
        break   
    }
    
}

// 豆知識
// コンディションの中をtrue、｛｝をindex++にすると無限ループになる。
// 使用例としてはダウンロード中で、100%になるまでループさせる
// while (condition) {
    
// }

// 途中で止めるならば、breakを入れる
// while (index < 100000) {
//     index++
//     console.log(index)
// }
// output.innerHTML += 'ゴール！<br>'

// これは時間
// output.innerHTML += new Date()
// output.innerHTML += '<br>'
// while (index < 100000) {
//     index++
//     console.log(index)
// }
// output.innerHTML += new Date()
// output.innerHTML += '<br>'
// output.innerHTML += 'ゴール！<br>'



// continue文
// 現在のブロックの処理を中断し、再度反復処理の判定を行う。偶数のみ出す
for (let index = 0; index <= 10; index++) {
    if (index % 2 == 1) {
            continue
        
    }
    output.innerHTML += index + ' '

}