// 扇風機クラス
// 標準モジュール出力
export default class Fan {
    // プロパティ
    
    // クラスプロパティ
    // 台数
    static number = 0

    // 全体の状態出力先
    static statisticsOutput
    
    // クラス定数
    // #windPowerの日本語名称の統一用定数
    static POWER_STATUS = {OFF:'切', P1:'弱',P2:'中',P3:'強'}
    
    // プライベートプロパティ
    // 同じオブジェクト内で、アクセスを受け付ける
    // 羽根の枚数
    #blades
    // 風力
    #windPower
    // 電源
    #power
    // 首振り
    #swing
    // 状態の出力先
    output


    // ゲッター
    // オブジェクトのプロパティを取得する。
     // ゲッター(blades)
     getBlades(){
        return this.#blades
    }

    // セッター
    setBlades(blades){
        this.#blades = blades
    }
    

    // ゲッター(windPower)
    getWindPower(){
        return this.#windPower
    }

    // ゲッター(power)
    getPower(){
        return this.#power
    }

    // ゲッター(swing)
    getSwing(){
        return this.#swing
        
    }





    // クラスメソッド
    // 扇風機の統計情報の表示
    static infoFans(){
        if(Fan.statisticsOutput == undefined){
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
        this.#blades = blades
        this.#windPower = Fan.POWER_STATUS.OFF
        this.power = false
        this.#swing = false
    }

    // メソッド(関数)
    // 首振りボタン押下
    pressSwingButton(){
        console.log('首振りボタンが押されました。' + '<br>')
        // 現在の状態を反転させる処理
        this.#swing = !this.#swing
    }

}