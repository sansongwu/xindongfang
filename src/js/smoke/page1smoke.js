/**
 * Created by wayne on 2018/10/20.
 */

/*
* smokemachine（ctx，[r，g，b]）
 //[r，g，b] - （可选）我们想要的烟的颜色

 party.start（）//开始动画！

 party.stop（）//停止动画

 party.addsmoke（X，Y，numberofparticles）

 x，y - 应在画布中创建烟雾的坐标 ,   数量多 - 更多的烟雾

 party.step（毫秒）//重新点燃烟雾

 作者：Ysang丶沙宣
 链接：https://www.jianshu.com/p/f5eaa28b79fc
 來源：简书
 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
*
*
*
*  API
 该烟雾特效插件可用的API有：
 o smokemachine(context, [r,g,b])：返回一个烟雾实例。
 o context —— 绘制烟雾的画布。
 o [r,g,b] —— （可选）烟雾的颜色。
 var party = smokemachine(context, [1,5,253])

 o party.start()：开始烟雾动画。
 o party.stop()：结束烟雾动画。
 o party.addsmoke(x,y,numberofparticles)：
 o x,y — 在canvas中创建的烟雾的坐标。
 o numberofparticles — 创建更多的烟雾。
 o party.step(milliseconds)：在多少毫秒之后重新绘制烟雾。
 */

const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');


console.log('page1-smoke')
let page1Smoke = document.getElementById('smokes').children
let currentTarget
/* 初始化状态 */
for (let i = 0; i < page1Smoke.length; i ++) {
  initElement(page1Smoke[i])
}


/* 元素初始化 */
function initElement(el) {
  el.isSmoking = false
  el.style.opacity = '1'
}

/* 制造一个烟雾 */
function createSmoke(target) {
  /* 开始创造烟雾 isSmoking 状态设置为true */
  target.isSmoking = true


  let ctx = target.getContext('2d')

//设置画布宽高
  target.width = innerWidth;
  target.height = innerHeight/2;

  /* 设置画布位置 */
  /*target.style.position = 'absolute'
  target.style.top = '50%'*/


// let party = smokemachine(ctx, [54, 16.8, 18.2])

  // console.log('创建了一个烟雾')
  let party = smokemachine(ctx, [256, 256, 256])
  party.start()
  party.addsmoke(innerWidth/10*9, innerHeight*1.1, 6, 3000)
  setTimeout(() => {
    /* 先修改opacity 再销毁 */
    Velocity(target, {
      opacity: 0
    }, {
      duration: 2500,
      easing: "swing",
      complete() {
        party.stop()
        // console.log('销毁')
        /* 销毁之后  isSmoking 状态 改为false */
        initElement(target)
      }
    });

  }, 2200)
}





let page1Timer = setInterval(() => {
  /* 轮询是否有合适的canvas */
  for (let i = 0; i < page1Smoke.length; i ++) {
    if (page1Smoke[i].isSmoking === false) {
      currentTarget = page1Smoke[i]
      // console.log('当前数字是' + i)
      break
    }
  }
  createSmoke(currentTarget)
}, 1000)

