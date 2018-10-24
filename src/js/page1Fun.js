const changePage = require('./changePage')
const {page1, page2, page3, poetry, audio2} = require('./getElement')
const state = require('./state')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const globalAnimate = require('./globalAnimate')
const videoFun = require('./video')

export let pullUp = function () {
  // audio2.play()
  // video.play()
  // changePage.goDown()
  if (state.page1Ready) {
    page1ToPage2()
    videoFun.runVideo('videoID2')
  }

}
/* 背景变化 */
let page1_background = document.getElementById('page1_background')
setTimeout(() => {
  Velocity(page1_background, {
    width: "120%",
    height: "120%"
  }, {
    duration: 8000,
  });
}, 1000)

/* 诗词一句一句出来 */
let list = poetry.children
for (let i = 0; i < list.length; i ++) {

  setTimeout(() => {
    /* 当最后一行出来之后 page1 淡出 page2淡入 */
    if (i == list.length-1) {
    // if (i == 0) {
    //   page1ToPage2()
      /* 修改page1 state */
      state.page1Ready = true
      /* 显示箭头 */
      setTimeout(() => {
        document.getElementById('page1_arrow').style.display = 'block'
      }, 800)

    }

    /* 诗词一行一行显示 */
    Velocity(list[i].children[0], {
      opacity: "1"
    }, {
      duration: 500,
    });
  }, 800*i)
}


function page1ToPage2() {
  /* 淡出page1 */
  Velocity(page1, {
    opacity: "0"
  }, {
    duration: 1000,
    complete() {
      /* 开始播放背景视频 */
      // video.play()
      /* 关闭page1 */
      page1.style.display = 'none'

    }
  });

  /* 淡入page2 */
  Velocity(page2, {
    opacity: "1"
  }, {
    duration: 1000,
    complete() {
      /* 视频播放完执行 */
      setTimeout(() => {
        if (!state.page3showed) {
          globalAnimate.autoVideoFinish()
        }
      }, 9000)
    }
  });
}

/*let list = poetry.children
let delay
let evenNum = 0
for (let i = 0; i < list.length; i ++) {
  /!* 如果是偶数  且 不是第0个 *!/
  if (i%2 ==  0 && i != 0) {
    evenNum ++
  }
  delay = 800*i + evenNum*500
  setTimeout(() => {
    Velocity(list[i].children[0], {
      opacity: "1"
    }, {
      duration: 900,
    });
  }, delay)
}*/

