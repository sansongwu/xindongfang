const changePage = require('./changePage')
const {page1, poetry, audio2, video} = require('./getElement')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');

export let pullUp = function () {
  // audio2.play()
  video.play()
  changePage.goDown()
}

setTimeout(() => {
  Velocity(page1, {
    backgroundSize: "120%"
  }, {
    duration: 8000,
  });
}, 1000)

/*let list = poetry.children
let delay
let evenNum = 0
for (let i = 0; i < list.length; i ++) {
  /!* 如果是偶数  且 不是第0个 *!/
  if (i%2 ==  0 && i != 0) {
    evenNum ++
  }
  delay = 800*i + evenNum*500
  setTimeout(() => {
    Velocity(list[i].children[0], {
      opacity: "1"
    }, {
      duration: 900,
    });
  }, delay)
}*/

let list = poetry.children
for (let i = 0; i < list.length; i ++) {

  setTimeout(() => {
    Velocity(list[i].children[0], {
      opacity: "1"
    }, {
      duration: 500,
    });
  }, 800*i)
}
