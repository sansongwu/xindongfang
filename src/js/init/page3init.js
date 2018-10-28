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
