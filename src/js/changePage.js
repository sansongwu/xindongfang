const pageSize = require('./pageSize')
const winH = pageSize.winH

const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
export let currentPage = 0
export const minPage = 0
export const maxPage = 2


export let goDown = function () {
    if (currentPage >= maxPage) {
        return
    }
    currentPage++
    let contents = document.getElementById('contents')
    Velocity(contents, {
        top: (-currentPage * winH)
    }, {
        duration: 200,
        easing: "swing"
    });

}

export let goUp = function () {
    if (currentPage <= minPage) {
      console.log('return')
        return
    }
    currentPage--
    let contents = document.getElementById('contents')
    Velocity(contents, {
        top: (-currentPage * winH)
    }, {
        duration: 200,
        easing: "swing"
    });

}
