const {index_logo, index_title, page2_background, page3, page3_title, page3_info, video_start, page2_more} = require('./getElement')
const state = require('./state')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const pageSize = require('./pageSize')
const page3init = require('./init/page3init')
const videojs = require('./video')
const audiojs = require('./music')

/* 隐藏logo  title */
let hideIndexLogo = function () {

  /*Velocity(index_logo, {
    marginTop: '0%',
    // opacity: '0'
  }, {
    duration: 300,

  })*/


}

/* 隐藏more箭头  第三页开始就不显示了 */
export let hideMoreArrow = function () {
  page2_more.style.display = 'none'
}
export let showMoreArrow = function () {
  page2_more.style.display = 'block'
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
    // page3_info.style.display = 'block'

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
  // page3_info.style.display = 'none'
  $('#index_title').animate({
    marginTop: '15%',
    opacity: '1'
  }, 300)
}

function showLogoTitle() {
  showIndexLogo()
  showIndexTitle()
}

/* 跳转第三页 */
export let autoVideoFinish = function () {

  /* 如果安卓正在播放 主视频 不能跳转 */
  if (state.androidBigVideo) {
    return
  }

  /* 触发翻页音效 */
  // $('#music_play').click()
  /* 隐藏播放键 */
  videojs.hideVideoIcon()

  /* 隐藏more箭头 */
  hideMoreArrow()

  /* 让视频循环播放 */
  videojs.addLoop()
  /* 设置 logo title 位置 */
  hideLogoTitle()
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
      /* 初始化第三页 */
      if (!state.page3showed) {
        page3init.init()

      } else {
        /* 播放音乐 显示icon */
        if (state.isMusicPlay) {

        }
        audiojs.openBGM()
        music_button.style.display = 'block'
      }
      /* 修改第三页已经进入过了的状态  阻止重复初始化 */
      state.page3showed = true

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
  /* 显示播放键 */
  videojs.showVideoIcon()

  /* 显示more箭头 */
  showMoreArrow()

  /* 继续播放视频 */
  videojs.runVideo('videoID2')

  /* 关闭音乐 以及icon */
  audiojs.closeBGM(true)
  music_button.style.display = 'none'

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

