let img_url = [
  './static/img/page3/book-content/person1.jpg',
  './static/img/page3/book-content/person2.jpg',
  './static/img/page3/book-content/person3.jpg',
  './static/img/page3/book-content/person4.jpg'
]
export let loading = function (fn) {
  let numbers = 0;
  let length = img_url.length;

  for (let i = 0; i < length; i++) {
    let img = new Image();
    img.src = img_url[i];
    img.onerror = function () {
      numbers += (1 / length) * 100;
    }
    img.onload = function () {
      numbers += (1 / length) * 100;
      $('.number').html(parseInt(numbers) + "%");
      console.log(numbers);
      if (Math.round(numbers) == 100) {

        //预加载图片
        $(function progressbar() {
          //拼接图片
          $('.shade').hide();
          let tagHtml = "";
          for (let i = 1; i <= 41; i++) {
            tagHtml += '<div style="background:url(\'./static/img/page3/book-content/person1.jpg\') center top no-repeat;background-size:100%"></div>'
          }
          $(".book-content").append(tagHtml);
        });
        fn()
      }
    }
  }
}
