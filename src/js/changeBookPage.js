
const changePage = require('./changePage')
const {page3, book, mark_ul, audio_page, story_button} = require('./getElement')
const pageSize = require('./pageSize')
const velocity = require('velocity-animate')
require('velocity-animate/velocity.ui');
const changeBookPage = require('./animate/changeBookPage')
const globalAnimate = require('./globalAnimate')
const {bookHeight} = require('./bookPosition')
const state= require('./state')
const init = require('./init')


/* 当前页 */
let currentPage = 0

/* 点击换页 */
const list = mark_ul.children
for (let i = 0; i < list.length; i ++) {
  list[i].addEventListener('touchstart', function (e) {
    /* 如果是当前也 不执行操作 */
    if (i == currentPage) {
      return
    }
    currentPage = i

    /* 换button图的src */
    changeImgSrc(currentPage)

    $("#flipbook").turn("page", (i+1))

    setMark(currentPage)
    setText(currentPage)

    /* 翻书声音 */
    audio_page.play()
  })
}






/* 是否可以翻页 */
let canChangePage = true
/* 设置可翻页间隔 */
const stateTime = 200
/* 下一页 */
export let goPage = function () {
  if (currentPage >= mark_ul.children.length-1) {
    return
  }
  if (!canChangePage) {
    return
  }

  currentPage++
  console.log('当前是第 '+currentPage+' 页')

  /* 换button图的src */
  changeImgSrc(currentPage)

  /* 翻书声音 */
  audio_page.play()
  /* 设置标签样式 */
  setMark(currentPage)
  /* 设置文本为空 */
  setTextNull()
  /* 翻页动效 */
  changeBookPage.nextPage()
  /* 修改重新设置状态 */
  setChangePageState()
  /* 重置文本 */
  setTimeout(() => {
    setText(currentPage)
  }, stateTime)


}

/* 上一页 */
export let backPage = function () {
  if (currentPage <= 0) {
    return
  }
  if (!canChangePage) {
    return
  }

  currentPage--
  console.log('当前是第 '+currentPage+' 页')

  /* 换button图的src */
  changeImgSrc(currentPage)

  /* 翻书声音 */
  audio_page.play()
  /* 设置标签样式 */
  setMark(currentPage)
  /* 设置文本为空 */
  setTextNull()
  /* 翻页动效 */
  changeBookPage.backPage()
  /* 修改重新设置状态 */
  setChangePageState()
  /* 重置文本 */
  setTimeout(() => {
    setText(currentPage)
  }, stateTime)

}
/* 修改可翻页状态 */
function setChangePageState() {
  canChangePage = false
  setTimeout(() => {
    canChangePage = true
  }, stateTime)
}


/* 设置书签样式 */
function setMark(pageNum) {
  let markList = mark_ul.children
  /* 所有的全变非点击状态 */
  for(let i = 0; i < markList.length - 1; i ++) {
    markList[i].children[0].src = 'static/img/page3/mark/m'+(i)+'.png'
  }
  /* 当前点击的变图 */
  if (pageNum != (markList.length - 1)) {
    /* 如果点的不是最后一个 即more 则换对应的图  并且 more 的高度恢复 */
    markList[pageNum].children[0].src = 'static/img/page3/mark/m'+pageNum+''+pageNum+'.png'
    markList[markList.length-1].style.top = '-0.5rem'
  } else {
    /* 如果点的是more */
    markList[markList.length-1].style.top = '-1.2rem'
  }
}

/* 设置书相关信息 高度 等 */
book.style.height = bookHeight + 'px'

let strArr = [
  ['我在做新东方的过程中，从没有放弃阅读，','从大学毕业到现在，每年阅读一百多本书，','认真反复读的书达到十几本到二十本。','我家里的纸质书籍有一万多本，每个月还在以30—50本的速度增加，',
    '每年购买新书的数量是500多本，再加上出版社寄给我的就更多了。','&nbsp;','认准一件事，就坚持做下去。','&nbsp','其实这个世界上任何的成功都是需要反复努力才能达成的。',
    '爱情需要努力，学习需要努力，未来的事业更需要努力，','人生一辈子想要有所得，必须不断努力。','&nbsp','人的每一天都是很琐碎的，','把每天做的事情比喻成每天捡一块砖头的话，',
    '大部分人一辈子到最后只是捡了一堆砖头。','对于有些人来说他的琐碎是为了给自己的人生添砖加瓦，','他们的每一块砖都会变成自己理想的铺垫，从而盖起自己的理想大厦。'],
  ['你不去飞翔的话不知道天空有多么的远大，不出去看的话，不知道大地有多么的美丽，','&nbsp;','周成刚带着自己的相机，足迹遍及南极、非洲、美洲、大洋洲、亚洲，印象最深的就是在非洲，成千上万的角马在过马拉河，寻找更好的生活。不论遇到什么困难，都要走下去，这就是生生不息。',
    '&nbsp;','我们走向世界，其实也是一次迁徙，就是为了寻找更好的生活。','&nbsp;','工作生活的另一面，他用镜头聚焦人文，横跨17个国家，探索102所世界名校，点亮更多学生心中的航标灯。',
    '&nbsp;','著名的哲学家康德说过，世界上有两件东西能震撼人们的心灵：一件是我们心中崇高的道德标准；另一件是我们头顶上灿烂的星空。',
    '&nbsp;','当我们走了之后，看了之后，会有不同的文化、不同的语言、不同的人种、不同的价值观，就会让你变得更加宽容、更加多元化，思考一个问题的时候会从不同的角度去思考。'
  ],
  [
    '种一棵树最好的时间是十年前，其次是现在。我们每个人从小都懂的道理，但大多数人到老也做不到。但这里面，不包括68岁的谭奶奶。',
    '&nbsp;','退休之后，为了照顾生活在国外的外孙，谭奶奶变回了一张白纸，像听天书一样，坐到了英语学习的课堂上。精力、体力、记忆里，这些现实的理由，都没有让谭奶奶退缩，谭奶奶在这里一学就是8年。',
    '&nbsp;','在8年的学习生活中，谭奶奶觉得自己就像孩子一样，对未知的东西充满渴望，而她的内心，也好想回到了孩子般年轻的快乐。如今，谭奶奶随时可以踏上去旅途，去想去的国家。',
    '&nbsp;','年龄，从来不是谭奶奶的借口，也不是让生活失去可能性的理由。',
    '&nbsp;','不让梦想退休，心就不会衰老。'
  ],
  [
    '当一个学校，成为了两代人的选择，',
    '一切的努力都是值得的。',
    '&nbsp;','1995年，还是大三学生的陈晔，第一次遇见了同样年轻的新东方。21岁的她，正在中国人民大学读金融，看到了宿舍楼下张贴的小广告——新东方托福培训。「这到底靠不靠谱啊？」原本抱着试一试的心态听课，却给陈晔留下了不解的情缘。',
    '&nbsp;','在她的脑海里，印象最深的还是年轻的俞敏洪老师。他笑中带泪地讲述从北大辞职，每天提个小桶夜里去刷小广告，让陈晔第一次知道创业这么难，第一次知道天之骄子还要这么拼，感觉自己也应该加倍努力了。',
    '&nbsp;','这段学习生涯，帮助陈晔打开了英语的大门，也开启了之后二十多年外企的工作生涯。如今，陈晔的女儿准备申请美高，她毫不犹豫为女儿选择了新东方。虽然俞老师如今只能在电视上看到了，但她能感到，在年轻老师的身上，那股精神，一直没丢。',
    '&nbsp;','在多年以前，陈晔找到了自己人生的道路，而如今，陈晔也在为女儿指引方向，然后走上属于她自己的人生。这份信赖，还在继续。',
  ],
  [
    '纽约州立大学石溪分校，',
    '计算机科学博士学位，全额奖学金。',
    '&nbsp;','对于一个优秀的学生来说，这是一份令人满意的Offer 。但只有莫天池知道，这份Offer上面，写着多少汗水与泪水。1990年出生的莫天池因意外成了脑瘫患者，不能独自站立、自主行走，甚至连书写、语言、吞咽等都有障碍，不能正常地握笔写字，书写速度不及常人的三分之一，就连打字也只能靠两根手指。',
    '&nbsp;','莫天池以常人难以想象的毅力与努力，完成了重点高中，重点大学的学习。而在这之后，他完成了更不可能完成的挑战，在听力接收信息比常人慢的情况下，高分通过TOFEL与GRE。',
    '&nbsp;','莫天池手中的Offer，来之不易。对于他来说，美好而又光明的未来，刚刚开始。',
  ],
  [
    '老师、作家、演说家、辩手，拥有不同身份的艾力，最喜欢的称呼，是做一个influencer。',
    '&nbsp;','他自掏腰包发起“微博21天早起打卡”，在最忙的时候，艾力写下了两本书，鼓励大家时间，去做自己想做的事。他还在全年发起健身团、读书团、早起团，等等。在他心里，不同的身份只不过是换一种形式，通过不同的形式影响更多的人。',
    '&nbsp;','很多人说艾力书里都是心灵鸡汤，艾力觉得自己的书是心灵大盘鸡，大盘鸡吃起来特别辣，特别爽，让你有做事的欲望。可以帮你去提升。',
    '&nbsp;','去年艾力曾经碰到一个读者，他坐着轮椅来参加读书会，握着艾力的手致谢，说他的人生因为艾力而有了好的改变，他曾经一度觉得自己是家里的累赘，因为看了艾力的书而试着变成一个乐观积极的人，现在他也每天写文章鼓励别人。',
    '&nbsp;','「他的这句谢谢，让我终身难忘。我真的觉得，要是有人或事情因为我，哪怕有一点点美好的改变，我就心满意足了。」虽然只有一己之力，却依然可以让这个世界，有一些些不同。',
  ],
  [
    '1996年冬的深夜，清华大学物理系男生宿舍。上铺的小张冲下面大喊：「老刘，醒醒，别说梦话了，还说上英文了。」刘鸿光半梦半醒，说了句：「发音标准吗？」',
    '&nbsp;','回想起年轻时学英语的往事，至今刘鸿光仍然历历在目。「能够早点把四六级考过了」抱着这样朴素的愿望，刘鸿光的英语学习热情一发不可收拾。那时候的新东方没有高楼大厦，没有课桌，刘鸿光跟着几百号人坐在下面听俞敏洪老师讲课。没有高科技设备，揣着红宝书硬着头皮背单词。对着音质可怜的收音机听VOA、CNN、BBC，省吃俭用买英文原版书，踩着二八自行车去看原版电影。',
    '&nbsp;','没人管，发音不标准也没人纠正。学习很艰苦，生活更艰苦，但是刘鸿光和同学没有一个打退堂鼓，因为每个人，都想要为自己今后的人生负责。',
    '&nbsp;',' 那一段学习英语的岁月，见证了刘鸿光一步一步的成长，「在人生的起步阶段，我们往往需要靠外在的权威证明自己，但随着自我的成长，别人的认证和评论已经不再那么重要，而自己的知识和能力，才是证明自己最权威的方式。」',
    '&nbsp;','让每一天的自己，都能超越昨天的自己，直到有一天，成长为参天大树。'
  ],
  [
    '从初出茅庐的老师，到苏州新东方的校长，张戈自嘲自己从满头秀发的小伙子，变成了一个发量越来越少的中年大叔，但他从没有后悔过自己的选择。',
    '&nbsp;','2008年，汶川大地震后，张戈曾作为志愿队队长在当地待了一个月。许多孩子在灾难中失去了亲人朋友，在大灾难面前最能看的出来人的本性和本质，教育到底赋予人生怎样的意义呢？张戈心中反复思考着这个问题。',
    '&nbsp;','不论做老师，还是做教育机构，一切都应回归到教育的本质——教书和育人。「教育不仅仅是教授知识，更多的是引导一个人成为完整意义上的社会人。」',
    '&nbsp;','他曾带着老师到少管所做了三年多的志愿者，发现少管所的孩子们缺乏家庭、学校和社会的教育，并不是生来就会犯罪。从家长到老师，从家庭到学校，从个人到社会，我们更多的把教育侧重于教书，而很少深入思考育人。于是，他报考了武大法学院，重点学习青少年犯罪预防。',
    '&nbsp;','“育人”不是把自己的意识强加在孩子身上，想要引导孩子成为你想让他成为、你认为他应该成为或者你觉得最好的人。“育人”最先要解决的问题是如何帮助孩子认识自己的想法，帮助他把个人选择和学习知识连接起来以达到自然的学习状态。',
    '&nbsp;','回归教育本质，回归最原始的状态；做内心中最想做的自己，实现内心中最渴望的梦想。',
  ],
  [
    '「你讲这些有什么用？考试能提分吗？」',
    '&nbsp;','当董仲蠡在课堂上讲到林语堂先生和许渊冲先生精彩的英文翻译，忘情地手舞足蹈的时候，他的学生这样问他。',
    '&nbsp;','「是的，没用，不能提分。但是，刚刚，我没有在教你考试，我是在做教育。」',
    '&nbsp;','作为一个英语老师，董仲蠡曾经对研究考试技巧乐此不疲，学生奉他为“考神”、“偶像”。直到学生问他，老师，我毕业应该找什么工作？我是不是该考个研？我是不是该出国？他才发现，教了十几年书，学生最终不知道要做什么。',
    '&nbsp;','「我们之所以不知道我们要做什么，是因为我们根本不了解自己。我们只学“有用”的、“提分”的，却很少能接触到真正文化的起源。」所以，董仲蠡的每节课都会多讲5分钟，多讲5分钟的林语堂，多讲5分钟许渊冲，多讲5分钟的王佐良，5分钟虽短，但他都要去做他心中的教育。',
  ],
  [
    '张苗苗，“梦想之旅”宁夏师范专场年龄最小的学员，13岁的年纪，已经照顾瘫痪在床的父亲6年，当听到“梦想之旅”来到宁夏，她翻越3座大山去参加讲座。对于学习，她饱含憧憬，对于未来，她的梦想质朴而踏实。',
    '&nbsp;','王尚虎，家境贫寒的他，为了供弟弟妹妹上学，曾经辍学。但最终通过勤工俭学，在24岁考上了大学。因此能和同学一起听一场“梦想之旅”，他很开心。',
    '&nbsp;','孙连忠，曾经的贫困生，也是曾经的中国大学生自强之星。毕业后，他毅然为三千多名贫困生助学圆梦，带着这份鼓舞，他也成为了一名梦想之旅的志愿者。',
    '&nbsp;','他们是“梦想之旅”237万听众中的一员，新东方“梦想之旅”走进全国340个城市，932场讲座，就是为了教育资源稀缺城市地区的孩子，带去先进的教育理念和梦想火种，为他们种下梦想的种子。',
    '&nbsp;','我们从不低估梦想的价值，因为也许某一个梦想绽放的那天，就会改变这个世界。',
  ],
]

let text = document.getElementById('text')
let text_wrap = document.getElementById('text_wrap')
let link = document.getElementById('link')
/* 设置文本框内容 */
let setText = function (num) {
  let arr = strArr[num] || []
  let str = ''

  /* 如果是最后一页了 即more  文本框 隐藏掉  否则文本框出来
  *  如果是最后一页 热区出现  否则隐藏*/
  if (num === 10) {
    text_wrap.style.display = 'none'
    link.style.display = 'block'
  } else {
    text_wrap.style.display = 'block'
    link.style.display = 'none'
  }



  for (let i = 0; i < arr.length; i ++) {
    str += '<p>'+arr[i]+'</p>'
  }
  text.innerHTML = str
  init.scroll.refresh()
  setTimeout(function () {

  },20)

}
function setTextNull() {
  text.innerHTML = ' '
}
/* 初始化设置文字 第一页的 */
setText(currentPage)
/* 热区绑定事件 */
let start = 0
let end = 0

/* 翻书到最后一页的时候 他的故事图 换 成 点击图片 */
function changeImgSrc(pageNum) {
  console.log(pageNum)
  if (pageNum == (mark_ul.children.length - 1)) {
    /* 最后一页 换图 */
    story_button.children[0].src = './static/img/page3/clickImg.png'
  } else {
    story_button.children[0].src = './static/img/page3/hisStoryButton.png'
  }
}

link.addEventListener('touchstart', function (e) {
  // wx.miniProgram.navigateTo({url: 'www.baidu.com'})
  end = 0
  e.stopPropagation()
  e.preventDefault()
  start = e.touches[0].pageX
  return false
})
link.addEventListener('touchmove', function (e) {
  // wx.miniProgram.navigateTo({url: 'www.baidu.com'})
  e.stopPropagation()
  e.preventDefault()
  end = e.touches[0].pageX
  console.log(end)
  return false
})

link.addEventListener('touchend', function (e) {
  // wx.miniProgram.navigateTo({url: 'www.baidu.com'})
  console.log(`end是${end}`)
  console.log(`start是${start}`)
  console.log((Math.abs(end - start) < 10 || end == 0))
  e.stopPropagation()
  e.preventDefault()
  if (Math.abs(end - start) < 10 || end == 0) {

    window.location.href="https://www.baidu.com"
  }

  return false
})
