// 買い物カゴClass
export default class ShoppingBag{

    // クラスプロパティ
    // ゲットはClass目線（テキスト）
    // 商品リスト(配列)
    static #itemList = []


    // 
    constructor(itemList= []){
      this.#itemList = itemList
    }




    // ここからソッド
    // 商品追加メソッド
    // →　index.htmlの「商品追加ボタン」を押したら、「商品追加メソッド」動く。商品購入画面で表示する
    // プロパティからデータを読み取る時は、getを付ける。
    // プロパティに値を追加する場合は、setは、プロパティ

    get itemList(){
      
    }









}



// メソッド:商品一覧取得
// メソッド:商品購入