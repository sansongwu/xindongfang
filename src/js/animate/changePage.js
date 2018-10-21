/**
 * Created by wayne on 2018/10/21.
 */
$('#book_content').turn({
  // Width
  width: '500px',
  // Height
  height: '500px',
  // Elevation
  elevation: 50,
  display: 'single',
  // Enable gradients
  gradients: true,
  // Auto center this flipbook
  autoCenter: true,
  /*when: {
    turning: function (e, page, view) {
      if (page == 1) {
        $(".btnImg").css("display", "none");
        $(".mark").css("display", "block");
      } else {
        $(".btnImg").css("display", "block");
        $(".mark").css("display", "none");
      }
      if (page == 41) {
        $(".nextPage").css("display", "none");
      } else {
        $(".nextPage").css("display", "block");
      }
    },
    turned: function (e, page, view) {
      console.log(page);
      var total = $(".flipbook").turn("pages");//总页数
      if (page == 1) {
        $(".return").css("display", "none");
        $(".btnImg").css("display", "none");
      } else {
        $(".return").css("display", "block");
        $(".btnImg").css("display", "block");
      }
      if (page == 2) {
        $(".catalog").css("display", "block");
      } else {
        $(".catalog").css("display", "none");
      }
    }
  }*/
})
