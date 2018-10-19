const changePage = require('./changePage')

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

export let enlargeImg = function () {
    console.log('放大图片')
}