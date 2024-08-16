import Fan from "./Fan.js"

// 新規ボタン
// →　「document.getElementById('new')」の戻り値が「addEventListener('click',() => new Fan())」
// →　アロー関数の書き方？
document.getElementById('new')
.addEventListener('click',() => new Fan())

// 全電源ON
document.getElementById('allPowerOn')
.addEventListener('click',() => Fan.changePower(Fan.CHANGE_POWER_MODE.ON))

// 全電源OFF
document.getElementById('allPowerOff')
.addEventListener('click',() => Fan.changePower(Fan.CHANGE_POWER_MODE.OFF))
