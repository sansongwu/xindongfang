export let dark = function (id) {
  $('#'+id+'').animate({
    opacity: 1
  }, 800, function () {
    light(id)
  })
}

export let light = function (id) {
  $('#'+id+'').animate({
    opacity: 0
  }, 800, function () {
    dark(id)
  })
}
