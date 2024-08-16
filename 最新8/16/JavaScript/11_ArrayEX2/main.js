// 配列


// 出力準備
let output = document.getElementById('output')

// 配列の生成
let member = ['いかA','いかB','いかC','いかD','いかE','いかF','いかG','いかH',]

output.innerHTML += member + '<br>'

// 一人ずつ出力する(for文)
for (let index = 0; index < member.length; index++) {
    output.innerHTML += member[index] + '<br>'
    
}

// 一人ずつ出力する。(for-each文)
// fanctionは無名の関数。配列の生成で作成した配列が1つずつ出力される
member.forEach(function (element){
    output.innerHTML += element + '<br>'
})



// 従業員生成
let emp01 ={
    name:'従業員A',
    age:33,
    gender:0
}
let emp02 ={
    name:'従業員B',
    age:42,
    gender:1
}
let emp03 ={
    name:'従業員C',
    age:25,
    gender:0
}
let emp04 ={
    name:'従業員D',
    age:33,
    gender:3
}
let emp05 ={
    name:'従業員E',
    age:31,
    gender:1
}

// 従業員配列の生成（リストとよばれる）
let employees = [emp01,emp02,emp03,emp04,emp05]

employees.forEach(function (employee){
    let outHtml = `
<dl>
    <dt>名前</dt>
    <dd>${employee.name}</dd>
    <dt>年齢</dt>
    <dd>${employee.age}</dd>
    <dt>性別</dt>
    
// 参考演算子（ifの代わり）

    <dd>${employee.gender == 0 ? '男' :
         employee.gender == 1 ? '女' : '!?' }</dd>

    }</dd>
</dl>
 `
output.innerHTML += outHtml

})