const {mark_ul} = require('./getElement')

const list = mark_ul.children
for (let i = 0; i < list.length; i ++) {
  list[i].addEventListener('click', function () {
    $("#flipbook").turn("page", (i+1))
  })
}
