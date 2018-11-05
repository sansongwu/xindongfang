const state = require('../state')
const {screen_across} = require('../getElement')
let ua = state.ua
let isIOS = state.isIOS
/* 微信中  安卓不能横屏浏览  所以只做iOS的就可以了 */
if (isIOS) {
  console.log('是iOS')
  window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
    /* 播放视频的时候 是允许横屏的 就不要弹出提示层 */
    if (!state.iOSShouldAcross) {
      if (window.orientation === 180 || window.orientation === 0) {
        // alert('竖屏状态！');
        screen_across.style.display = 'none'
      }
      if (window.orientation === 90 || window.orientation === -90) {
        // alert('横屏状态！');
        screen_across.style.display = 'flex'
      }
    }

  }, false);

}
