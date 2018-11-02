require('./css/page1.css')
require('./css/index.css')

require('./css/page2.css')
require('./css/page3.css')
require('./css/page3Text.css')
require('./css/arrow.css')
const {video, audio, audio_page, music_button} = require('./js/getElement')
const state = require('./js/state')
// require('./css/video.css')


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
  init()




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
    /*flag = true
    timer = null*/
    console.log('init')


    /* 关闭遮罩 */
    document.getElementById('loading_div').style.display = 'none'
    require('./js/init')
    require('./css/changebookpage.css')

    const page1init = require('./js/init/page1init')
    const musicjs = require('./js/music')
    const videojs = require('./js/video')


    const move = require('./js/touchMove')
    require('./js/changeBookPage')
    require('./js/wxShare')
    require('./js/init/iOSresize')
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
