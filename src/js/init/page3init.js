/**
 * Created by wayne on 2018/10/28.
 */
const {page2_background} = require('../getElement')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');

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

export let page3_bgc_animate = function () {
  turnBig()
  /*setInterval(() => {
    if (isBig) {
      turnSmall()
    }
  }, 300)*/
}


/* 书上星星动画效果 */
let decoration_target = document.getElementById('decoration_target')
let width,height,opacity,delay,top,left
decorationAnimateStart()
function decorationAnimateStart() {
  width = randomNum(80, 120) + '%'
  height = randomNum(80, 120) + '%'
  opacity = randomNum(2, 10)/10
  delay = randomNum(4000, 5000)
  top = randomNum(40, 60) + '%'
  left = randomNum(40, 60) + '%'

  $('#decoration_target').animate({
    width: width,
    height: height,
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

