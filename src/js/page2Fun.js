const changePage = require('./changePage')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const {page1, page2, page3, poetry, audio2, video, page2_background} = require('./getElement')
const pageSize = require('./pageSize')
const state = require('./state')
const globalAnimate = require('./globalAnimate')


export let pullUp = function () {
    // changePage.goDown()
  globalAnimate.autoVideoFinish()
}

export let pullDown = function () {
    changePage.goUp()
}


