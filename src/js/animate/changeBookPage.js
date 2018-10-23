/**
 * Created by wayne on 2018/10/21.
 */
/*$(".book_content").turn({
  width: 200,
  height: 300,
  autoCenter: true,
  display: 'single',  // 显示书的一页 还是 两页（double）
  turnCorners: "bl,tr",  // 渐变方向 一般在翻页之前设置
  elevation: 50,  // 设置过渡期间页面的高程  会产生折角
  acceleration: true, //设置硬件加速模式，对于触摸设备这个值必须是真的
  gradients: true,  //在转换过程中显示渐变和阴影。
  when:{
    /!*turned: function (e, page, view) {
      console.log(page);
    }*!/
  }
});*/

export let nextPage = function () {
  $(".book-content").turn("next")
}

export let backPage = function () {
  $(".book-content").turn("previous")
}
