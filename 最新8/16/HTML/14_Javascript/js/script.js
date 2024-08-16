//***************************\\
// ハンバーガーボタン、メニュー \\
//***************************\\
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

let hamburgerAction = function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
}

// ハンバーガーメニューのボタンとナビにクリックアクションを追加
//***修正ポイント***//
nav.addEventListener('click', hamburgerAction);
// nav.addEventListener('click', hamburgerAction);
ham.addEventListener('click', hamburgerAction);
// ham.addEventListener('click', hamburgerAction);

//***********\\
// スクロール \\
//***********\\
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  //上から200pxスクロールしたら表示されるように修正
  //スクロールの量によってトップへ移動するボタンが表示される
  //***修正ポイント***//
  if (scroll >= 20){
    //#page-topについているRightMoveというクラス名を除く
    $('#page-top').removeClass('RightMove');
    //#page-topについているLeftMoveというクラス名を付与
    $('#page-top').addClass('LeftMove');
  }else{
    //すでに#page-topにLeftMoveというクラス名がついていたら
    if($('#page-top').hasClass('LeftMove')){
      //LeftMoveというクラス名を除き
      $('#page-top').removeClass('LeftMove');
      //RightMoveというクラス名を#page-topに付与
      $('#page-top').addClass('RightMove');
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  // スクロールした際の動きの関数を呼ぶ
  //***修正ポイント***//
  // PageTopAnime();
  PageTopAnime()
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  // スクロールした際の動きの関数を呼ぶ
  //***修正ポイント***//
  // PageTopAnime();
  PageTopAnime()
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate(
  {
        //ページトップまでスクロール
        scrollTop: 0
    },
  // ページトップスクロールの速さ。数字が大きいほど遅くなる
  // どのくらいの時間をかけてアニメーションを実行するか？
  // ちょうど良い速度に調整してください。
  //***調整ポイント***//
  150
);
//リンク自体の無効化
  return false;
});
//*******\\
// slick \\
//*******\\
$('.slider').slick({
  //左右の矢印はなし
  arrows: false,
  //自動的に動き出すか。初期値はfalse。
  autoplay: true,
  //***調整ポイント***//
  //自動的に動き出す待ち時間。
  // ちょうど良い速度に調整してください。
  autoplaySpeed: 1,
  //***調整ポイント***//
  // ちょうど良い速度に調整してください。
  //スライドのスピード。
  speed: 1000,
//スライドをループさせるかどうか。初期値はtrue。
  infinite: true,
//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnHover: false,
//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,
  //***調整ポイント***//
  //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  // 好きなモードを選んでください
  // cssEase: 'ease-in',
  // cssEase: 'ease',
  cssEase: 'linear',
  //スライドを画面に3枚見せる
  slidesToShow: 4,
  //1回のスライドで動かす要素数
  slidesToScroll: 1,
});
