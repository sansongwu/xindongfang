/**
 * Created by wayne on 2018/10/21.
 */


/*function playPause() {
  var music = document.getElementById('music2');
  var music_btn = document.getElementById('music_btn2');
  if (music.paused) {
    music.play();
    music_btn.src = 'play.gif';
  } else {
    music.pause();
    music_btn.src = 'pause.gif';
  }
}
window.onload = function() {
  let music = document.getElementById('t-rex-roar')
  music.volume = 0.1;
  /!*music.play()*!/
}*/

/* 微信自动播放音乐 */
function  audioAutoPlay(id){
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
}
audioAutoPlay('audio2')

/*if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //在微信中打开
  autoPlayAudio('video');
}else {
  $('#video').get(0).play();
  $('#audio').get(0).play();
}*/

