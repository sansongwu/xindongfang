const changePage = require('./changePage')
const {page3, book, page3_title, page3_info, page3_logo, mark_ul} = require('./getElement')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');

let imgFinish = false

export let pullUp = function () {
    /* 只有当图片被放大  文案出来过后 才是翻页 */
    if (imgFinish) {
        changePage.goDown()
    } else {
        enlargeImg()
        imgFinish = true
    }

}

export let pullDown = function () {
    changePage.goUp()
}
/* 把书拉上来 */
export let enlargeImg = function () {
  /* 让logo彻底不显示  否则会在第二页显示 */
  page3.children[0].style.overflow = 'hidden'

  /* 书往上拉效果 */
  Velocity(book, {
    top: '0'
  }, {
    duration: 200,
    easing: "swing"
  });

  /* 修改标题 3行字 位置 */
  Velocity(page3_logo, {
    top: '-50px'
  }, {
    duration: 200,
    easing: "swing",
    complete() {

    }
  });

  Velocity(page3_title, {
    top: '8%'
  }, {
    duration: 200,
    easing: "swing"
  });

  Velocity(page3_info, {
    top: '14%'
  }, {
    duration: 200,
    easing: "swing"
  });
}

/* 翻书方法 */
export let pullLeft = function () {
  goPage()
}
export let pullRight = function () {
  backPage()
}

let currentPage = 0
function goPage() {
  if (currentPage >= mark_ul.children.length-1) {
    return
  }
  currentPage++
  console.log('当前是第 '+currentPage+' 页')

  setMark(currentPage)
}
function backPage() {
  if (currentPage <= 0) {
    return
  }
  currentPage--
  console.log('当前是第 '+currentPage+' 页')

  setMark(currentPage)
}
/* 设置书签样式 */
function setMark(pageNum) {
  let target = mark_ul.children[pageNum].children[0]

  /* 如果到最后一个了 就是 more  不是规律的画图 */
  if (pageNum == mark_ul.children.length-1) {
    target.src = 'static/img/page3/mark/more.png'

    /* 修改前一个图 */
    let frontTarget = mark_ul.children[pageNum-1].children[0]
    frontTarget.src = 'static/img/page3/mark/m'+(pageNum-1)+'.png'
  } else {
    target.src = 'static/img/page3/mark/m'+pageNum+''+pageNum+'.png'

    if (pageNum > 0) {
      /* 大于0 则前面的需要改成默认的 */
      let frontTarget = mark_ul.children[pageNum-1].children[0]
      frontTarget.src = 'static/img/page3/mark/m'+(pageNum-1)+'.png'
    }

    if (pageNum < mark_ul.children.length-2) {
      /* 小于总数-1  (因为more)  则后面的需要改成默认的 */
      let backTarget = mark_ul.children[pageNum+1].children[0]
      backTarget.src = 'static/img/page3/mark/m'+(pageNum+1)+'.png'
    }
  }


}
