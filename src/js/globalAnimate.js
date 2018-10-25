const {index_logo, index_title, page2_background, page3, page3_title, page3_info} = require('./getElement')
const state = require('./state')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const pageSize = require('./pageSize')
/* 隐藏logo  title */
let hideIndexLogo = function () {

  /*Velocity(index_logo, {
    marginTop: '0%',
    // opacity: '0'
  }, {
    duration: 300,

  })*/


}

let hideIndexTitle = function () {
  /*Velocity(index_title, {
    marginTop: '10%',
    // opacity: '0'
  }, {
    duration: 300,

  })*/

  $('#index_title').animate({
    marginTop: '10%',
    opacity: '0'
  }, 300, function () {
    page3_title.style.display = 'block'
    page3_info.style.display = 'block'

  })
}

function hideLogoTitle() {
  hideIndexLogo()
  hideIndexTitle()
}

/* 显示logo title */
let showIndexLogo = function () {
  /*Velocity(index_logo, {
    marginTop: '20%',
    // opacity: '1'
  }, {
    duration: 300,
  })*/
  $('#index_logo').animate({
    marginTop: '10%'
  }, 300)
}
let showIndexTitle = function () {
  /*Velocity(index_title, {
    marginTop: '20%',
    // opacity: '1'
  }, {
    duration: 300,
  })*/
  page3_title.style.display = 'none'
  page3_info.style.display = 'none'
  $('#index_title').animate({
    marginTop: '20%',
    opacity: '1'
  }, 300)
}

function showLogoTitle() {
  showIndexLogo()
  showIndexTitle()
}


export let autoVideoFinish = function () {
  /* 设置 logo title 位置 */
  hideLogoTitle()
  /* 修改第三页已经进入过了的状态  阻止第二页的自动跳转 */
  state.page3showed = true
  /* 展示最后一针的图 */
  page2_background.style.opacity = '1'
  /* 滚动到第二页上面 */
  Velocity(page3, {
    top: "0",
    easing: "swing"
  }, {
    duration: 300,
    progress() {

    },
    complete() {

    }
  });

  /*Velocity(page2_background,{
    width: '120%'
  },{
    duration: 300,
    complete() {
      page2_background.style.width = '120%'
    }
  })*/
}

export let backToPage2 = function () {
  /* 恢复logo  title */
  showLogoTitle()
  /* 滚动到第二页上面 */
  Velocity(page3, {
    top: pageSize.winH,
    easing: "swing"
  }, {
    duration: 300,
    progress() {
      /* 关闭最后一针的图 */
      page2_background.style.opacity = '0'
    },
    complete() {

    }
  });
  /*console.log(page2_background.style.width)
  Velocity(page2_background,{
    width: '100%'
  },{
    duration: 200,
    complete() {
      page2_background.style.width = '100%'
      page2_background.style.display = 'none'
    }
  })*/

}

