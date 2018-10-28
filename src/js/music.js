/**
 * Created by wayne on 2018/10/21.
 */
const {audio, music_button, audio_page} = require('./getElement')
/*audio.addEventListener('pause', function(){
  audio.play()
})*/
/* 暂停音乐 */
music_button.addEventListener('click', function () {
  playPause()
})




function playPause() {
  var music = audio
  if (music.paused) {
    music.play();
    music_button.children[0].src = './static/img/page1/logo.png'
    music_button.className = 'music-button-base music-button'
  } else {
    music.pause();
    music_button.children[0].src = ''
    music_button.className = 'music-button-base'
  }
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

