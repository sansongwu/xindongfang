const pageSize = require('./pageSize')
const {page3, book_bgc} = require('./getElement')
const {contentHeight} = require('./bookPosition')
import  BScroll from 'better-scroll'
const state= require('./state')

/* 滚动 */
export let scroll = new BScroll('#text_wrap', {
  // stopPropagation: true,
  preventDefault: true
})

scroll.on('scrollStart', function () {
  state.touchFromPage = false
  console.log('bs-start')
})

/* 初始化第三页 位置 */
page3.style.top = pageSize.winH + 'px'

/* 初始化 诗词 的 top */




/* 懒加载  把src 数组 赋值给img的 src*/
let srcArr = [
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/L.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/V.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/Y.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/T.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/O.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/I.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/A.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/C.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/E.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/D.jpg',
  'https://static.aotuer.com/h5/2018/xdf25/static/img/page3/book-content/more.jpg',
]

function imgTimeLazyLoad(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].children[0].src = srcArr[i]
  }
}
setTimeout(() => {
  book_bgc.src = book_bgc.getAttribute('data-src')
}, 6000)


let p = new Promise((resolve, reject) => {
  setTimeout(function () {
    let target = document.getElementById('flipbook').children
    imgTimeLazyLoad(target)
    resolve()
  }, 7000)
}).then(() => {
  $("#flipbook").turn({
    width: pageSize.winW,
    height: contentHeight,
    autoCenter: true,
    display: 'single',  // 显示书的一页 还是 两页（double）
    // turnCorners: "bl,tr",  // 渐变方向 一般在翻页之前设置
    elevation: 50,  // 设置过渡期间页面的高程  会产生折角
    acceleration: true, //设置硬件加速模式，对于触摸设备这个值必须是真的
    gradients: true,  //在转换过程中显示渐变和阴影。
    when:{
      /*turned: function (e, page, view) {
       console.log(page);
       }*/
    }
  });
})

