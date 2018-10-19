const changePage = require('./changePage')


export let pullUp = function () {
    changePage.goDown()
}

export let pullDown = function () {
    changePage.goUp()
}