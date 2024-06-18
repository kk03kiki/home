// 扇風機クラス
// アクセサ2
export default class Fan {
    // プロパティ
    
    // クラスプロパティ
    // 台数
    static #number = 0

    // 全体の状態出力先
    static statisticsOutput
    
    // クラス定数
    // windPowerの日本語名称の統一用定数
    static POWER_STATUS = {OFF:'切', P1:'弱',P2:'中',P3:'強'}
    
    // プライベートプロパティ
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
    // ゲッター(blades)
    get blades(){
        return this.#blades
    }

    // セッター
    // セッター(blades)
    // 入力されたくない値を弾く機能を追加(バリデーション)
    set blades(blades){
        if(blades >= 0){
            this.#blades = blades
        }
    }

    // ゲッター(windPower)
    get windPower(){
        return this.#windPower
    }

    // セッター(windPower)
    set windPower(windPower){
        this.#windPower = windPower
    }

    // ゲッター(power)
    get power(){
        return this.#power
    }

    // セッター(power)
    set power(power){
        this.#power = power
    }

    // ゲッター(swing)
    get swing(){
        return this.#swing
    }

    // セッター(swing)
    set swing(swing){
        this.#swing = swing
    }

    // クラスメソッド
    // 扇風機の統計情報の表示
    static infoFans(){
        if(Fan.statisticsOutput == undefined){
            Fan.statisticsOutput = document.getElementById('output')
        }
        Fan.statisticsOutput.innerHTML += `扇風機の台数は全部で${Fan.#number}台です。`
    }

    // コンストラクタ(メソッド)の宣言
    constructor(output,blades=5) {
        // 扇風機の台数に一台追加        
        Fan.#number++

        // 各値を初期化
        this.output = output
        this.#blades = blades
        this.#windPower = Fan.POWER_STATUS.OFF
        this.power = false
        this.#swing = false
    }

    // メソッド(関数)

    // パワーボタングループ押下
    pressPowerButton(btnName){
        console.log(`パワーボタン『${btnName}』が押されました。`)
        switch (btnName) {
            case Fan.POWER_STATUS.OFF:
                // 風力0
                this.#windPower = 0
                // 電源OFF
                this.#power = false
                break;

            case Fan.POWER_STATUS.P1:
                // 風力1
                this.#windPower = 1
                // 電源ON
                this.#power = true
                
                break;

            case Fan.POWER_STATUS.P2:
                // 風力2
                this.#windPower = 2
                // 電源ON
                this.#power = true
                
                break;

            case Fan.POWER_STATUS.P3:
                // 風力3
                this.#windPower = 3
                // 電源ON
                this.#power = true
                
                break;
        
            default:
                break;
        }
    }

    // 首振りボタン押下
    pressSwingButton(){
        console.log('首振りボタンが押されました。')
        // 現在の状態を反転させる処理
        this.#swing = !this.#swing
        this.infoView()
    }

    // 状態確認
    infoView(){
        // →　thisは、『プライベートプロパティ』の『情報の出力先』からきている
        this.output.innerHTML = `
羽根の枚数：${this.#blades}<br>
風力：${this.#windPower}<br>
電源：${this.#power}<br>
首振り：${this.#swing}<br>
Timestop:${new Date()}<br>
        `
    }

}