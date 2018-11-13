let userAgent = window.navigator.userAgent
module.exports = {
  /* 是否测试 */
  isTest :true,
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
  isIOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

  /* 安卓是不是正在播放 主视频  如果是  那么禁止滑动到第三页  安卓返回正常的返回
  * 如果不是  可以滑动到第三页  安卓返回 一次返回*/
  androidBigVideo: false,
  /* iOS 允许横屏 */
  iOSShouldAcross: false,
  /* 是否正在播放音乐 */
  isMusicPlay: true
}
