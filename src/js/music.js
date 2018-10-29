/**
 * Created by wayne on 2018/10/21.
 */
const {audio, music_button, audio_page} = require('./getElement')
/*audio.addEventListener('pause', function(){
  audio.play()
})*/
/* 暂停音乐 */
music_button.addEventListener('touchstart', function () {
  playPause()
})



audio.addEventListener('pause', function () {
  music_button.children[0].src = './static/img/musicStop.png'
  music_button.className = 'music-button-base'
})


function playPause() {
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
  music_button.children[0].src = './static/img/musicPlay.png'
  music_button.className = 'music-button-base music-button'
}

/* 关闭BGM */
export let closeBGM = function () {
  audio.pause();
  music_button.children[0].src = './static/img/musicStop.png'
  music_button.className = 'music-button-base'
}
/* 翻书音效 */
/*export function audioPage() {
  audio_page.play()
}*/


/*window.onload = function() {
  let music = document.getElementById('t-rex-roar')
  music.volume = 0.1;
  /!*music.play()*!/
}*/

/* 微信自动播放音乐 */
/*function  audioAutoPlay(id){
  var audio = document.getElementById(id);

  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      audio.play();
    }, false);
  } else {
    document.addEventListener("WeixinJSBridgeReady", function () {
      WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        audio.play();
      });
    }, false);
  }
  audio.play();

  return false;
}*/
// audioAutoPlay('audio2')


/*if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //在微信中打开
  autoPlayAudio('video');
}else {
  $('#video').get(0).play();
  $('#audio').get(0).play();
}*/

