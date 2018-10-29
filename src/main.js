require('./css/page1.css')
require('./css/index.css')

require('./css/page2.css')
require('./css/page3.css')
require('./css/page3Text.css')
require('./css/arrow.css')
const {video, audio, audio_page, music_button} = require('./js/getElement')
const state = require('./js/state')
// require('./css/video.css')

// require('./css.css')
// require('./js/smoke/page1smoke')

if (state.isTest) {
  const vconsole = require('vconsole')
  let vc = new vconsole()
}



document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded')



  const pageSize = require('./js/pageSize')
  const winH = pageSize.winH
  const winW = pageSize.winW


    document.getElementById('page1').style.height = winH + 'px'
    document.getElementById('page2').style.height = winH + 'px'
    document.getElementById('page3').style.height = winH + 'px'

})

window.onload = function () {
  console.log('window.onload')


  let ua = window.navigator.userAgent
  if (ua.indexOf('MicroMessenger') > 0) {
    //在微信中打开
    /* 自动播放音乐 并且init*/
    autoPlayAudio(audio)
  } else {
    /* 不在微信中 */
    audio.play();
    init()
  }

  function autoPlayAudio(id) {
    var video = id

    if (window.WeixinJSBridge) {
      WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        video.play();
        init()
      }, false);
    } else {
      document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
          video.play();
          init()
        });
      }, false);
    }
    video.play();

    return false;
  }


  /*let flag = false
  let timer = setInterval(function () {
    if (!flag) {
      if (audio.readyState === 4) {
        init()
        console.log('toptop')
      } else {
        audio.addEventListener('canplay', function () {
          init()
        })
      }
    }

  }, 200)*/



  function init() {
    /* 显示旋转的播放音乐按钮 */
    music_button.style.display = 'block'
    /*flag = true
    timer = null*/
    audio.play()
    console.log('init')

    /* 触发翻书声音 */
    $('#music_play').on('click', function () {
      audio_page.play()
    })

    document.getElementById('loading_div').style.display = 'none'
    require('./js/init')
    require('./css/changebookpage.css')

    const musicjs = require('./js/music')
    const videojs = require('./js/video')


    const move = require('./js/touchMove')
    require('./js/changeBookPage')

  }
}
/* 音频预加载 */
/*var audio = document.createElement("audio");
audio.src = "490141.m4a";
audio.addEventListener("canplaythrough",
  function() {
    $(".yinyu").show();
    audio.play();
  },
  false);*/
