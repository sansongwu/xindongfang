// require('./css/index.css')
require('./index.css')
const pageSize = require('./js/pageSize')
const move = require('./js/touchMove')

const winH = pageSize.winH
const winW = pageSize.winW

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded事件')
    document.getElementById('page1').style.height = winH + 'px'
    document.getElementById('page2').style.height = winH + 'px'
    document.getElementById('page3').style.height = winH + 'px'
    document.getElementById('page4').style.height = winH + 'px'

})



/*document.addEventListener("touchmove", function(e){
    e.preventDefault();
} , false);

var curPage = 1;
var PageL = $('.page_box .page').length;
var canTouch = false;
canTouch = true;

var startY , endY , diff;
document.body.addEventListener("touchstart", touchStart, false);
document.body.addEventListener("touchmove", touchMove, false);
document.body.addEventListener("touchend", touchEnd, false);
function touchStart(e){
    var touch = e.touches[0];
    startY = touch.pageY;
}
function touchMove(e){
    //e.preventDefault();
    var touch = e.touches[0];
    endY = touch.pageY;
    diff = endY - startY;
}
function touchEnd(e){
    if(Math.abs(diff) > 150 && canTouch){
        if(diff > 0){
            if(curPage <= 1){
                return;
            }

            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('outDown');
            curPage--;
            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('inDown');

        }else{
            if(curPage >= PageL){
                return;
            }

            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('outTop');
            curPage++;
            $('.page' + curPage).removeClass('inTop outTop inDown outDown hide').addClass('inTop');

            if(curPage >= PageL){
                $('.arrow').hide();
            }else{
                $('.arrow').show();
            }
        }
        canTouch = false;
        setTimeout(function(){
            canTouch = true;
            diff = 0;
            $('.page' + (curPage - 1) + ', .page' + (curPage + 1)).addClass('hide');
        },1000);
    }
}*/
