require('./css/page1.css')
require('./css/index.css')

require('./css/page2.css')
require('./css/page3.css')
require('./css/arrow.css')
// require('./css/video.css')

// require('./css.css')
// require('./js/smoke/page1smoke')





document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded')



  const pageSize = require('./js/pageSize')
  const winH = pageSize.winH
  const winW = pageSize.winW


    document.getElementById('page1').style.height = winH + 'px'
    document.getElementById('page2').style.height = winH + 'px'
    document.getElementById('page3').style.height = winH + 'px'

})

window.onload = function () {
  console.log('window.onload')
  document.getElementById('loading_div').style.display = 'none'
  require('./js/init')

  const music = require('./js/music')
  const video = require('./js/video')


  const move = require('./js/touchMove')

  /* 图片预加载 */
  /*window.onload = function () {
    const preLoading = require('./js/imgPreloading')
    preLoading.loading(() => {
      const changePage = require('./js/animate/changeBookPage')
      const move = require('./js/touchMove')
    })
  }*/

}
/*$("#flipbook").turn({
  width: pageSize.winW,
  height: 300,
  autoCenter: true,
  display: 'single',  // 显示书的一页 还是 两页（double）
  turnCorners: "bl,tr",  // 渐变方向 一般在翻页之前设置
  elevation: 50,  // 设置过渡期间页面的高程  会产生折角
  acceleration: true, //设置硬件加速模式，对于触摸设备这个值必须是真的
  gradients: true,  //在转换过程中显示渐变和阴影。
  when:{
    turned: function (e, page, view) {
      console.log(page);
    }
  }
});*/




/*document.addEventListener("touchmove", function(e){
    e.preventDefault();
} , false);

var curPage = 1;
var PageL = $('.page_box .page').length;
var canTouch = false;
canTouch = true;

var startY , endY , diff;
document.body.addEventListener("touchstart", touchStart, false);
document.body.addEventListener("touchmove", touchMove, false);
document.body.addEventListener("touchend", touchEnd, false);
function touchStart(e){
    var touch = e.touches[0];
    startY = touch.pageY;
}
function touchMove(e){
    //e.preventDefault();
    var touch = e.touches[0];
    endY = touch.pageY;
    diff = endY - startY;
}
function touchEnd(e){
    if(Math.abs(diff) > 150 && canTouch){
        if(diff > 0){
            if(curPage <= 1){
                return;
            }

            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('outDown');
            curPage--;
            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('inDown');

        }else{
            if(curPage >= PageL){
                return;
            }

            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('outTop');
            curPage++;
            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('inTop');

            if(curPage >= PageL){
                $('.arrow').hide();
            }else{
                $('.arrow').show();
            }
        }
        canTouch = false;
        setTimeout(function(){
            canTouch = true;
            diff = 0;
            $('.page' + (curPage - 1) + ', .page' + (curPage + 1)).addClass('hide');
        },1000);
    }
}*/
