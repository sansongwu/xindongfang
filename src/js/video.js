/**
 * Created by wayne on 2018/10/21.
 */
const pageSize = require('./pageSize')

/*let video = document.getElementById('video1')
video.style.width = pageSize.winW*/

let target = document.getElementById('videoID2')
let ua = window.navigator.userAgent
console.log(ua)
/*if (ua.indexOf('MicroMessenger') > 0) {
  //在微信中打开
  autoPlayAudio('videoID2');
  audioAutoPlay('audio2')
} else {
  // alert('不在微信中')
   $('#videoID2').get(0).play();
   $('#audio2').get(0).play();
}*/

/*document.addEventListener('touchstart', function () {
  target.play()

})*/

export let runVideo = function (id) {
  let video = document.getElementById(id);//video标签id=media
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


}


/* 视频 自动播放 */
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



target.style.width = window.innerWidth + "px";
target.style.height = window.innerHeight + "px";
window.onresize = function () {
  target.style.width = window.innerWidth + "px";
  target.style.height = window.innerHeight + "px";
}







/*videoMethod(video);

function videoMethod(video) {
  video.addEventListener('touchstart', function () {
    video.play();
  });
  setTimeout(function () { video.play(); }, 1000);
  document.addEventListener("WeixinJSBridgeReady", function (){
    video.play();
    video.pause();
  }, false);
  video.addEventListener('ended', function (e) {
    video.play();
  })
  //进入全屏
  video.addEventListener("x5videoenterfullscreen", function(){

    window.onresize = function(){
      video.style.width = window.innerWidth + "px";
      video.style.height = window.innerHeight + "px";
    }
  })
  //退出全屏
  video.addEventListener("x5videoexitfullscreen", function(){
    /!*window.onresize = function(){
      video.style.width = 原尺寸;
      video.style.height = 原尺寸;
    }*!/

  })
}*/

// require('iphone-inline-video')


/* 微信自动播放视频  */
/*function autoPlayAudio(id) {
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
}*/

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


