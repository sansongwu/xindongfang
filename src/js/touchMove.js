const page1Fun = require('./page1Fun')
const page2Fun = require('./page2Fun')
const page3Fun = require('./page3Fun')
const {cover} = require('./getElement')
// const page4Fun = require('./page4Fun')

let moveStartY, moveEndY, diffY, moveStartX, moveEndX, diffX
/* 滑动的有效距离 */
const effectiveY = 160
const effectiveX = 60
const effectiveDiff = effectiveY - effectiveX

const currentPageNum = 0

function touchStart(e) {
    let touch = e.touches[0]
    moveStartY = touch.pageY
    moveStartX = touch.pageX
    /* end必须初始和 start 一样 否则 end没值  单机也会触发滚动 */
    moveEndY = moveStartY
    moveEndX = moveStartX
  e.preventDefault()
}

function touchMove(e) {
    let touch = e.touches[0]
    moveEndY = touch.pageY
    moveEndX = touch.pageX
  console.log('move')
}

/* 计算差值 在end事件中先执行 */
function end() {
    diffY = moveStartY - moveEndY
    diffX = moveStartX - moveEndX
}


function move() {
    document.addEventListener("touchstart", touchStart, false);
    document.addEventListener("touchmove", touchMove, false);

    //document.body.addEventListener("touchend", touchEnd, false);
}

/* 各种情况的滑动触发 */
let strategies = {
    /* 向 上 滑动 */
    pullUp(fn) {
        if (Math.abs(diffY) >= effectiveY  && diffY > 0) {
            fn()
            return true
        } else {
            return false
        }
    },

    /* 向 下 滑动 */
    pullDown(fn) {
        if (Math.abs(diffY) >= effectiveY  && diffY < 0) {
            fn()
            return true
        } else {
            return false
        }
    },

    /* 向 左 滑动 */
    pullLeft(fn) {
        if (Math.abs(diffX) >= effectiveX && diffX > 0) {
            fn()
            return true
        } else {
            return false
        }
    },

    /* 向 右 滑动 */
    pullRight(fn) {
        if (Math.abs(diffX) >= effectiveX && diffX < 0) {
            fn()
            return true
        } else {
            return false
        }
    },

    /* 上下滑动 */
    upDown(up, down) {
        this.pullUp(up)
        this.pullDown(down)
    },
    /* 左右滑动 */
    leftRight(left, right) {
        this.pullLeft(left)
        this.pullRight(right)
    },
    /* 上下左右都判定 */
    allDirection(up, down, left, right) {
        if (Math.abs(diffY) >= Math.abs(diffX)) {
            this.upDown(up, down)
        } else {
            this.leftRight(left, right)
        }
    }
}

let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let page3 = document.getElementById('page3')
let page4 = document.getElementById('page4')

/* 增加监听滑动事件 */
move()

page1.addEventListener('touchend', function () {
    end()
    strategies.pullDown(pullDown)
    strategies.pullUp(page1Fun.pullUp)
})

page2.addEventListener('touchend', function () {
    end()
    // strategies.allDirection(pullUp, pullDown, pullLeft, pullRight)
    strategies.pullUp(page2Fun.pullUp)
    strategies.pullDown(page2Fun.pullDown)
})
page3.addEventListener('touchend', function (e) {
    end()
    console.log('page3 end')
    strategies.allDirection(page3Fun.pullUp, page3Fun.pullDown, page3Fun.pullLeft, page3Fun.pullRight)
    /*strategies.pullUp(page3Fun.pullUp)
    strategies.pullDown(page3Fun.pullDown)*/
})
page3.addEventListener('touchcancel', function (e) {
  end()
  console.log('page3 end')
  strategies.allDirection(page3Fun.pullUp, page3Fun.pullDown, page3Fun.pullLeft, page3Fun.pullRight)
  /*strategies.pullUp(page3Fun.pullUp)
   strategies.pullDown(page3Fun.pullDown)*/
})
// page4.addEventListener('touchend', function () {
//     end()
//     strategies.pullDown(page4Fun.pullDown)
// })

function pullUp() {
    console.log('向上滑动的方法')
}
function pullDown() {
    console.log('向下滑动的方法')
}
function pullLeft() {
    console.log('向左滑动')
}
function pullRight() {
    console.log('向右滑动')
}
