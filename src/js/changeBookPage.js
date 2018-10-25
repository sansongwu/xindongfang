
const changePage = require('./changePage')
const {page3, book, mark_ul} = require('./getElement')
const pageSize = require('./pageSize')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const changeBookPage = require('./animate/changeBookPage')
const globalAnimate = require('./globalAnimate')
const {bookHeight} = require('./bookPosition')
const state= require('./state')
const init = require('./init')


/* 当前页 */
let currentPage = 0

/* 点击换页 */
const list = mark_ul.children
for (let i = 0; i < list.length; i ++) {
  list[i].addEventListener('click', function () {
    $("#flipbook").turn("page", (i+1))
    currentPage = i
    setMark(currentPage)
    setText(currentPage)
  })
}




/* 是否可以翻页 */
let canChangePage = true
/* 设置可翻页间隔 */
const stateTime = 200
/* 下一页 */
export let goPage = function () {
  if (currentPage >= mark_ul.children.length-1) {
    return
  }
  if (!canChangePage) {
    return
  }

  currentPage++
  console.log('当前是第 '+currentPage+' 页')

  /* 设置标签样式 */
  setMark(currentPage)
  /* 设置文本为空 */
  setTextNull()
  /* 翻页动效 */
  changeBookPage.nextPage()
  /* 修改重新设置状态 */
  setChangePageState()
  /* 重置文本 */
  setTimeout(() => {
    setText(currentPage)
  }, stateTime)

}

/* 上一页 */
export let backPage = function () {
  if (currentPage <= 0) {
    return
  }
  if (!canChangePage) {
    return
  }

  currentPage--
  console.log('当前是第 '+currentPage+' 页')


  /* 设置标签样式 */
  setMark(currentPage)
  /* 设置文本为空 */
  setTextNull()
  /* 翻页动效 */
  changeBookPage.backPage()
  /* 修改重新设置状态 */
  setChangePageState()
  /* 重置文本 */
  setTimeout(() => {
    setText(currentPage)
  }, stateTime)

}
/* 修改可翻页状态 */
function setChangePageState() {
  canChangePage = false
  setTimeout(() => {
    canChangePage = true
  }, stateTime)
}


/* 设置书签样式 */
function setMark(pageNum) {
  let markList = mark_ul.children
  /* 所有的全变非点击状态 */
  for(let i = 0; i < markList.length - 1; i ++) {
    markList[i].children[0].src = 'static/img/page3/mark/m'+(i)+'.png'
  }
  /* 当前点击的变图 */
  if (pageNum != (markList.length - 1)) {
    /* 如果点的不是最后一个 即more 则换对应的图  并且 more 的高度恢复 */
    markList[pageNum].children[0].src = 'static/img/page3/mark/m'+pageNum+''+pageNum+'.png'
    markList[markList.length-1].style.top = '-0.5rem'
  } else {
    /* 如果点的是more */
    markList[markList.length-1].style.top = '-1.2rem'
  }
}

/* 设置书相关信息 高度 等 */
book.style.height = bookHeight + 'px'

let strArr = [
  ['我在做新东方的过程中，从没有放弃阅读，','从大学毕业到现在，每年阅读一百多本书，','认真反复读的书达到十几本到二十本。','我家里的纸质书籍有一万多本，每个月还在以30—50本的速度增加，',
    '每年购买新书的数量是500多本，再加上出版社寄给我的就更多了。','&nbsp;','认准一件事，就坚持做下去。','&nbsp','其实这个世界上任何的成功都是需要反复努力才能达成的。',
    '爱情需要努力，学习需要努力，未来的事业更需要努力，','人生一辈子想要有所得，必须不断努力。','&nbsp','人的每一天都是很琐碎的，','把每天做的事情比喻成每天捡一块砖头的话，',
    '大部分人一辈子到最后只是捡了一堆砖头。','对于有些人来说他的琐碎是为了给自己的人生添砖加瓦，','他们的每一块砖都会变成自己理想的铺垫，从而盖起自己的理想大厦。'],
  [['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容'], ['测试内容']],
  ['第3页'],
  ['第4页'],
  ['第5页'],
  ['第6页'],
  ['第7页'],
  ['第8页'],
  ['第9页'],
  ['第10页'],
]

let text = document.getElementById('text')
let text_wrap = document.getElementById('text_wrap')
let link = document.getElementById('link')
/* 设置文本框内容 */
let setText = function (num) {
  let arr = strArr[num] || []
  let str = ''

  /* 如果是最后一页了 即more  文本框 隐藏掉  否则文本框出来
  *  如果是最后一页 热区出现  否则隐藏*/
  if (num === 10) {
    text_wrap.style.display = 'none'
    link.style.display = 'block'
  } else {
    text_wrap.style.display = 'block'
    link.style.display = 'none'
  }



  for (let i = 0; i < arr.length; i ++) {
    str += '<p>'+arr[i]+'</p>'
  }
  text.innerHTML = str
  init.scroll.refresh()
  setTimeout(function () {

  },20)

}
function setTextNull() {
  text.innerHTML = ' '
}
/* 初始化设置文字 第一页的 */
setText(currentPage)
/* 热区绑定事件 */
link.addEventListener('click', function () {
  // wx.miniProgram.navigateTo({url: 'www.baidu.com'})
  window.location.href="https://www.baidu.com"
})
