// 買い物カゴClass
export default class ShoppingBag{

    // クラスプロパティ
    // 商品リスト(配列) 空っぽのかいものかご？
    #itemList = []


    // コンストラクタ(メソッド)の宣言
    constructor(){
      let itemList = JSON.parse(sessionStorage.getItem("cart"))
      if(itemList){
        itemList = Object.values(itemList)
        console.log(itemList)
        this.#itemList = itemList
      }

    }



    // ここからソッド
    // プロパティからデータを読み取る時は、getを付ける。
    // プロパティに値を追加する場合は、setは、プロパティ
    //  メソッド:商品一覧取得
    get itemList() {
      return this.#itemList
    }

    // 商品追加メソッド
    // →　1⃣index.htmlの「商品追加ボタン」を押したら、「商品追加メソッド」動く。
    // →　2⃣商品購入画面で表示する
    // p102 黄色の本
    // 仮引数(item)は現状わからないものを入れる→itemlistにitemを追加すること（現状不明）
    addItem(item){
     this.#itemList.push(item)
     sessionStorage.setItem("cart",JSON.stringify(this.itemList));
     console.log(this.itemList)
   }

// メソッド:商品購入
// 1⃣index「購入手続き」を押す
// 2⃣カート一覧をだす（confirm画面）
// ⓷購入を押すと、カートがゼロになる。（conplete画面）

purchase(){
  this.#itemList = []
  
}


}



