var shareParam = {
  title: "这本单词故事书，你读过了吗？", // 待修改
  desc: "25岁的新东方，在苏州诚品书店搞了件大事", // 待修改
  pyq: "这本单词故事书，你读过了吗？", // 待修改
  link: window.location.href,
  logo: "https://static.aotuer.com/h5/2018/xdf25/static/img/icon.png" // 待修改：分享卡片显示的缩略图URL
};

wx.ready(function () {
  
  iniShare(shareParam);
})

wx.error(function (res) {
  console.log(res)
});

function iniShare(data) {
  var shareData = {
    title: data.title,
    desc: data.desc,
    link: data.link,
    imgUrl: data.logo,
    success: function (res) {}
  };
  wx.onMenuShareAppMessage(shareData);
  var shareData = {
    title: data.pyq,
    link: data.link,
    imgUrl: data.logo,
    success: function (res) {}
  };
  wx.onMenuShareTimeline(shareData);
}

iniShare(shareParam);
