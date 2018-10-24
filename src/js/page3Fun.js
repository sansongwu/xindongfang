const changePage = require('./changePage')
const {page3, book, book_content,page3_title, page3_info, page3_logo, mark_ul, page2_background} = require('./getElement')
const pageSize = require('./pageSize')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const changeBookPage = require('./animate/changeBookPage')
const globalAnimate = require('./globalAnimate')
import  BScroll from 'better-scroll'

let imgBigFinish = false

export let pullUp = function () {
    /* 放大图片 只放大一次 */
    if (!imgBigFinish) {
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
/* 拉书带动的3个图变化 */
function up() {
  $('#index_logo').animate({
    marginTop: '0%',
    opacity: '0'
  }, 300)

  $('#page3_title').animate({
    top: '20%',
    width: '45%'
  }, 300)

  $('#page3_info').animate({
    top: '35%',
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
  up()
  /* 书往上拉效果 */
  Velocity(book, {
    top: '0'
  }, {
    duration: 200,
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
  /* 书往下推效果 */
  down()
  /* page3.css 里 .page3 .page3-bottom .book  的 top 值 */
  Velocity(book, {
    top: '38%'
  }, {
    duration: 200,
    // easing: "swing"
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
  // changeBookPage.nextPage()

}
function backPage() {
  if (currentPage <= 0) {
    return
  }
  currentPage--
  console.log('当前是第 '+currentPage+' 页')

  setMark(currentPage)
  // changeBookPage.backPage()
}
/* 设置书签样式 */
function setMark(pageNum) {
  let target = mark_ul.children[pageNum].children[0]

  /* 如果到最后一个了 就是 more  不是规律的画图 */
  if (pageNum == mark_ul.children.length-1) {
    target.src = 'static/img/page3/mark/more.png'
    mark_ul.children[mark_ul.children.length-1].style.top = '-0.8rem'
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
    mark_ul.children[mark_ul.children.length-1].style.top = '-0.5rem'
  }


}

let strArr = [
  ['我在做新东方的过程中，从没有放弃阅读，','从大学毕业到现在，每年阅读一百多本书，','认真反复读的书达到十几本到二十本。','我家里的纸质书籍有一万多本，每个月还在以30—50本的速度增加，',
    '每年购买新书的数量是500多本，再加上出版社寄给我的就更多了。','&nbsp;','认准一件事，就坚持做下去。','&nbsp','其实这个世界上任何的成功都是需要反复努力才能达成的。',
    '爱情需要努力，学习需要努力，未来的事业更需要努力，','人生一辈子想要有所得，必须不断努力。','&nbsp','人的每一天都是很琐碎的，','把每天做的事情比喻成每天捡一块砖头的话，',
    '大部分人一辈子到最后只是捡了一堆砖头。','对于有些人来说他的琐碎是为了给自己的人生添砖加瓦，','他们的每一块砖都会变成自己理想的铺垫，从而盖起自己的理想大厦。'],
  ['我在做新东方的过程中，从没有放弃阅读，','从大学毕业到现在，每年阅读一百多本书，','认真反复读的书达到十几本到二十本。','我家里的纸质书籍有一万多本，每个月还在以30—50本的速度增加，',
    '每年购买新书的数量是500多本，再加上出版社寄给我的就更多了。',' ','认准一件事，就坚持做下去。',' ','其实这个世界上任何的成功都是需要反复努力才能达成的。',
    '爱情需要努力，学习需要努力，未来的事业更需要努力，','人生一辈子想要有所得，必须不断努力。',' ','人的每一天都是很琐碎的，','把每天做的事情比喻成每天捡一块砖头的话，',
    '大部分人一辈子到最后只是捡了一堆砖头。','对于有些人来说他的琐碎是为了给自己的人生添砖加瓦，','他们的每一块砖都会变成自己理想的铺垫，从而盖起自己的理想大厦。']
]

let text = document.getElementById('text')
/* 设置文本框内容 */
function setText(num) {
  let arr = strArr[num]
  let str = ''
  for (let i = 0; i < arr.length; i ++) {
    str += '<p>'+arr[i]+'</p>'
  }
  text.innerHTML = str
}

setText(0)

let scroll = new BScroll('#text_wrap', {
  stopPropagation: true,
  preventDefault: true
})

/*book_content.children[0].children[0].onload = function () {
  let time = new Date()
  console.log(`图片1加载完成 ${time.getTime()}`)
}
book_content.children[3].children[0].onload = function () {
  let time = new Date()
  console.log(`图片4加载完成 ${time.getTime()}`)
}*/
