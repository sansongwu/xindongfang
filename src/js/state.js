let userAgent = window.navigator.userAgent
module.exports = {
  /* 是否测试 */
  isTest :false,
  page1Ready: false,
  /* page3展示过了 */
  page3showed: false,
  /* 是来自page的滑动  而不是 滚动文章的 */
  touchFromPage: true,
  /* 视频是否正在播放 */

  /* 是不是能翻书  因为最后一页的分享也是通过touchstart实现的click */
  canChangeBookPage:true,

  /* 书是不是放大了 */
  isBookBig: false,

  /* 设备信息 */
  ua: window.navigator.userAgent,
  isIOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
