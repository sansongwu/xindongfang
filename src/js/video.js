/**
 * Created by wayne on 2018/10/21.
 */
const pageSize = require('./pageSize')
const state = require('./state')
/*let video = document.getElementById('video1')
video.style.width = pageSize.winW*/
const {video, audio, page3, big_video} = require('./getElement')
let ua = state.ua
let isIOS = state.isIOS
console.log(ua)
if (isIOS) {
  // alert('ios')
  if (false) {
    video_start.style.display = 'block'
    /* 点击开始播放 */
    document.getElementById('video_start').addEventListener('touchstart', function () {
      /* 点击播放 需要组织第二页 自动跳转第三页 */
      /*state.page3showed = true
      // runVideo('videoID2')

      if (big_video.paused) {
        closeBgVideo()
        big_video.play()

      } else {
        big_video.pause();
        openBgVideo()
      }*/
    })
  }

  /* 给大视频增加监听 当不播放的时候 执行开始播放背景视频方法 */
  big_video.addEventListener('pause', function () {
    openBgVideo()
    // alert('监听主视频暂停')
  })

} else {
  // alert('android')
}
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





/* 背景视频方法 */
/* 开始播放主视频 关闭背景视频*/
function closeBgVideo() {
  video.style.display = 'none'
  video.pause()
}

function androidClose() {
  video.src = './static/video/bigvideoTest.mp4'
  video.play()
}

/* 结束播放主视频 打开背景视频*/
function openBgVideo() {
  video.style.display = 'inline'
  video.play()
}




/* 视频是否正在播放  如果是  */
function isVideoPlaying() {
  if (paused) {

  }
}

/* 开始播放方法 */
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

/* 给视频增加自动播放loop */
export let addLoop = () => {
  video.loop = 'loop'
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



video.style.width = window.innerWidth + "px";
video.style.height = window.innerHeight + "px";


/*window.onresize = function () {
  video.style.width = window.innerWidth + "px";
  video.style.height = window.innerHeight + "px";

  document.getElementById('page1').style.height = window.innerHeight + "px";
  document.getElementById('page2').style.height = window.innerHeight + "px";
  document.getElementById('page3').style.height = window.innerHeight + "px";
  page3.style.top = window.innerHeight + "px";
}*/

export let windowResize = function () {
  video.style.width = window.innerWidth + "px";
  video.style.height = window.innerHeight + "px";

  document.getElementById('page1').style.height = window.innerHeight + "px";
  document.getElementById('page2').style.height = window.innerHeight + "px";
  document.getElementById('page3').style.height = window.innerHeight + "px";
  page3.style.top = window.innerHeight + "px";
}
window.addEventListener('resize', windowResize)






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


