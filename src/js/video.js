/**
 * Created by wayne on 2018/10/21.
 */
const pageSize = require('./pageSize')

let video = document.getElementById('video')
video.style.width = pageSize.winW



/* 微信自动播放视频  */
function autoPlayAudio(id) {
  var video = document.getElementById(id);//video标签id=media

  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      video.play();
    }, false);
  } else {
    document.addEventListener("WeixinJSBridgeReady", function () {
      WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        video.play();
      });
    }, false);
  }
  video.play();

  return false;
}

/* 全屏代码 */
/*console.log('----')
console.log(window.innerWidth)
document.getElementById('video').style.width = window.innerWidth + "px";
document.getElementById('video').style.height = window.innerHeight + "px";
window.onresize = function(){

}*/


/*if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //在微信中打开
  autoPlayAudio('video');
}else {
  $('#video').get(0).play();
}*/


