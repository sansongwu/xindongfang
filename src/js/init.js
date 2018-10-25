const pageSize = require('./pageSize')
const {page3, book_bgc} = require('./getElement')
const {contentHeight} = require('./bookPosition')

/* 初始化第三页 位置 */
page3.style.top = pageSize.winH + 'px'

/* 初始化 诗词 的 top */




/* 懒加载 */
function imgTimeLazyLoad(arr) {
  for (let i = 0; i < arr.length; i++) {

  }
}
setTimeout(() => {
  book_bgc.src = book_bgc.getAttribute('data-src')
}, 4000)


let p = new Promise((resolve, reject) => {
  setTimeout(function () {
    /*let str = '<div style="background:url(\'static/img/page3/book-content/storyTest.jpg\') center no-repeat;background-size:100%"></div>'+
      '<div style="background:url(\'static/img/page3/book-content/person2.jpg\') center no-repeat;background-size:100%"></div>'+
      '<div style="background:url(\'static/img/page3/book-content/person3.jpg\') center no-repeat;background-size:100%"></div>'+
      '<div style="background:url(\'static/img/page3/book-content/person4.jpg\') center no-repeat;background-size:100%"></div>'
    $('#flipbook').html(str)*/
    resolve()
  }, 1000)
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

