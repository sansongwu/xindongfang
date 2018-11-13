/**
 * Created by wayne on 2018/10/21.
 */
const {audio, music_button, audio_page} = require('./getElement')
const state = require('./state')
/*audio.addEventListener('pause', function(){
  audio.play()
})*/
/* 暂停音乐 */
music_button.addEventListener('touchstart', function () {
  playPause()
})



/*audio.addEventListener('pause', function () {
  music_button.children[0].src = 'https://static.aotuer.com/h5/2018/xdf25/static/img/musicStop.png'
  music_button.className = 'music-button-base'
})*/


export let playPause = function () {
  var music = audio
  if (music.paused) {
    openBGM()
  } else {
    closeBGM()
  }
}

/* 开启BGM */
export let openBGM = function () {
  audio.play();
  state.isMusicPlay = true
  music_button.children[0].src = 'https://static.aotuer.com/h5/2018/xdf25/static/img/musicPlay.png'
  // music_button.className = 'music-button-base music-button'
}

/* 关闭BGM */
export let closeBGM = function (withoutState) {
  audio.pause();
  if (withoutState) {
    state.isMusicPlay = false
  }
  music_button.children[0].src = 'https://static.aotuer.com/h5/2018/xdf25/static/img/musicStop.png'
  // music_button.className = 'music-button-base'
}
/* 翻书音效 */
/*export function audioPage() {
  audio_page.play()
}*/


/* 微信自动播放音乐 */
/* 自动播放翻书声音 背景音乐  播放后马上停止 这样到page3能马上播*/
function  audioAutoPlay(targetEl){
  var audio = targetEl

  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      audio.play();
      audio.pause()
    }, false);
  } else {
    document.addEventListener("WeixinJSBridgeReady", function () {
      WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        audio.play();
        audio.pause()
      });
    }, false);
  }
  audio.play();
  audio.pause()

  return false;
}
audioAutoPlay(audio_page)
audioAutoPlay(audio)


/*window.onload = function() {
  let music = document.getElementById('t-rex-roar')
  music.volume = 0.1;
  /!*music.play()*!/
}*/




/*if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //在微信中打开
  autoPlayAudio('video');
}else {
  $('#video').get(0).play();
  $('#audio').get(0).play();
}*/

