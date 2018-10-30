/**
 * Created by wayne on 2018/10/28.
 */
const {page2_background, music_button, audio} = require('../getElement')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const animatejs = require('../animate/button')
const page3fun = require('../page3Fun')
/* 背景图变化 */
let isBig = false

function turnBig() {
  $('#page2_background').animate({
    width: '120%',
    height: '120%'
  }, 10000, function () {
    isBig = true
    setTimeout(() => {
      turnSmall()
    }, 20)
  })
}

function turnSmall() {
  $('#page2_background').animate({
    width: '100%',
    height: '100%'
  }, 10000, function () {
    isBig = true
    setTimeout(() => {
      turnBig()
    }, 20)
  })
}




/* 书上星星动画效果 */
let decoration_target = document.getElementById('decoration_target')
let width,opacity,delay,top,left
function decorationAnimateStart() {
  width = randomNum(80, 120) + '%'
  opacity = randomNum(2, 10)/10
  delay = randomNum(4000, 5000)
  top = randomNum(40, 60) + '%'
  left = randomNum(40, 60) + '%'

  $('#decoration_target').animate({
    width: width,
    height: width,
    top: top,
    left: left,
  }, delay, function () {
    decorationAnimateStart()
  })
}
function randomNum(minNum,maxNum){
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1,10);
      break;
    case 2:
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
      break;
    default:
      return 0;
      break;
  }
}

/* 音乐自动播放 */
function autoPlayAudio() {
  let ua = window.navigator.userAgent
  if (ua.indexOf('MicroMessenger') > 0) {
    //在微信中打开
    /* 自动播放音乐 并且init*/
    autoPlayAudioInWX(audio)
  } else {
    /* 不在微信中 */
    audio.play();
  }
}
/* 微信自动播放方法 */
function autoPlayAudioInWX(id) {
  var video = id

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
export let init = function () {
  /* 显示旋转的播放音乐按钮 */
  music_button.style.display = 'block'
  /* 书上的动效 */
  decorationAnimateStart()
  /* 进入第三页自动播放音乐 */
  autoPlayAudio()
  /* 背景动效 */
  turnBig()
  /* 按钮动效 */
  animatejs.light('story_button')

  /* 给拉书按钮绑定事件 */
  document.getElementById('story_button').addEventListener('touchstart', function () {
    page3fun.pullUp()
  })
}
