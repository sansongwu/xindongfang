const pageSize = require('./pageSize')

const bgImgWidth = 640
const bgImgHeight = 868

const contentImgWidth = 640
const contentImgHeight = 824

  /* 计算书背景   内容  的高度  宽度就是 视口宽度 */
export let bookHeight = pageSize.winW/bgImgWidth*bgImgHeight
export let contentHeight = pageSize.winW/contentImgWidth*contentImgHeight

document.getElementById('book_content_wrap').style.height = contentHeight + 'px'
