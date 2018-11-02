const state = require('../state')
let ua = state.ua
let isIOS = state.isIOS
if (isIOS) {
  window.addEventListener("onorientationchange", function() {
    if (window.orientation === 180 || window.orientation === 0) {
      alert('竖屏状态！');
    }
    if (window.orientation === 90 || window.orientation === -90 ){
      alert('横屏状态！');
    }
  }, false);
}
