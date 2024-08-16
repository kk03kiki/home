// 扇風機クラス
// 初期出力
// →　defaultは初期値。何も選ばれなければ、選ばれること（※export defaultではない）
export default class Fan {

// export class Fan {
    // プロパティ
    
    //  クラスプロパティ
    // （扇風機の）台数
    // →スタティクス静的
    static number = 0

    // 全体の状態出力先
    // Class変数
    static statisticsOutput


    // クラス定義
    // windPowerの日本語名称の統一用定数
    // →　jsの使用によりconst(定数)が認識されないので代わりにstaticを使用
    static POWER_STATUS = {OFF:'切', P1:'弱',P2:'中',P3:'強'}

    // 羽根の枚数
    blades
    // 風力
    windPower
    // 電源
    power
    // 首振り
    swing
    // 状態の出力先
    output

    // クラスメソッド
    // 扇風機の統計情報の表示
    // →　扇風機全体の台数を表示
    static infoFans(){
        if (Fan.statisticsOutput == undefined) {
            Fan.statisticsOutput = document.getElementById('output')
        }
        Fan.statisticsOutput.innerHTML += `扇風機の台数は全部で${Fan.number}台です。`
    }

    // コンストラクタ(メソッド)の宣言
    constructor(output,blades=5) {
  
        // 扇風機の台数に一台追加 
        Fan.number++
        
        // 各値を初期化
        this.output = output
        this.blades = blades
        this.windPower = Fan.POWER_STATUS.OFF
        this.power = false
        this.swing = false
    }

    // メソッド(関数)
    // 首振りボタン押下
    pressSwingButton(){
        // コンソール出力に処理の切り替え
        console.log('首振りボタンが押されました。' + '<br>')
        // 現在の状態を反転させる処理
        // →　trueの前に『！』を付けると反対の意味＝false
        this.swing = true
    }

}