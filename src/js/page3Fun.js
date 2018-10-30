const changePage = require('./changePage')
const {book, page3_title, page3_info, audio_page} = require('./getElement')
const pageSize = require('./pageSize')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const globalAnimate = require('./globalAnimate')
const state= require('./state')
const changeBookPage = require('./changeBookPage')



/* 书是否放大了  用来做上下拉是否翻页的标识 */
let imgBigFinish = false

export let pullUp = function () {
    /* 放大图片 只放大一次 */
    if (!imgBigFinish) {
      audio_page.play()
      audio_page.pause()
      enlargeImg()
      imgBigFinish = true
    } else {
      return
    }

}

export let pullDown = function () {
  /* 如果图片已经放大了 那么缩小 */
    if (imgBigFinish) {
      reduceImg()
      imgBigFinish = false
    } else {
      // changePage.goUp()
      /* 返回视频页 */
      globalAnimate.backToPage2()
    }

}

/* 翻书方法 */
export let pullLeft = function () {
  changeBookPage.goPage()
}
export let pullRight = function () {
  changeBookPage.backPage()
}

/* 拉书带动的3个图变化 */
function up() {
  $('#index_logo').animate({
    marginTop: '0%',
    opacity: '0'
  }, 300)

  $('#page3_title').animate({
    top: '5%',
    width: '45%'
  }, 300)

  $('#page3_info').animate({
    top: '10%',
    width: '50%'
  }, 300)
}
function down() {
  $('#index_logo').animate({
    marginTop: '10%',
    opacity: '1'
  }, 300)

  $('#page3_title').animate({
    top: '50%',
    width: '55%'
  }, 300)

  $('#page3_info').animate({
    top: '65%',
    width: '65%'
  }, 300)
}


/* 把书拉上来 */
export let enlargeImg = function () {
  /* 让logo彻底不显示  否则会在第二页显示 */
  // page3.children[0].style.overflow = 'hidden'
  /* 隐藏提示上拉的按钮 */
  document.getElementById('story_button').style.display = 'none'

  up()
  /* 书往上拉效果 */
  Velocity(book, {
    bottom: '0'
  }, {
    duration: 300,
    easing: "swing"
  });

  /* 修改标题 3行字 位置 */



  /*Velocity(page3_logo, {
    top: '-50px'
  }, {
    duration: 200,
    easing: "swing",
    complete() {

    }
  });*/

  /*Velocity(page3_title, {
    top: '8%',
    width: '45%'
  }, {
    duration: 200,
    easing: "swing"
  });

  Velocity(page3_info, {
    top: '14%'
  }, {
    duration: 200,
    easing: "swing"
  });*/
}
/* 把书推回去 */
export let reduceImg = function () {
  /* 隐藏提示上拉的按钮 */
  document.getElementById('story_button').style.display = 'block'

  /* 书往下推效果 */
  down()
  /* page3.css 里 .page3 .page3-bottom .book  的 top 值 */
  Velocity(book, {
    bottom: '-32%'
  }, {
    duration: 300,
    // easing: "swing"
  });
}








/*book_content.children[0].children[0].onload = function () {
  let time = new Date()
  console.log(`图片1加载完成 ${time.getTime()}`)
}
book_content.children[3].children[0].onload = function () {
  let time = new Date()
  console.log(`图片4加载完成 ${time.getTime()}`)
}*/
