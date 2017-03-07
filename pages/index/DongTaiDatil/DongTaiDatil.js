// pages/index/DongTaiDatil/DongTaiDatil.js
var app = getApp()
Page({
  data: {
    user_info: {
      photo: '/images/photo/u2020.png',
      name: '青青子衿',
      Type: {
        t1: '精选',
        t2: '认证专家'
      },
      time: '1小时'
    },
    text: '引起抑郁症的原因多种多样，2013年11月《lancet》研究显示，2010年精神障碍导致全球23.2万人死亡，是导致非致命性疾病的首要原因。再精神障碍导致伤残调整生命年排前三位的是抑郁（40.5%）、焦虑（14.6%）以及药物成瘾导致的精神障碍，其中自杀是抑郁症最严重的结果。试问一下，如果你的患者治疗效果不好，排除抑郁的因素了吗？',
    zan: 15,
    reply: 3,
    comments: [
      { name: '兔小花',time:'一小时',photo:'/images/photo/u2020.png', content: '抑郁症是否可以治愈？主要治疗方法有哪些？', typ: '' },
      { name: '兔小花', time:'一小时',photo:'/images/photo/u2020.png',content: '请问抑郁症患者出现幻觉如何处理？', typ: '' },
      { name: '兔小花', time:'一小时',photo:'/images/photo/u2020.png',content: '抑郁症是否可以治愈？主要治疗方法有哪些？', typ: '' }
    ],
    WindowSizae:{}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // var category = options.category;
    // this.setData({
    //   navigateTitle: category
    // });

    // var dataUrl = "";
    // switch (category) {
    //   case "正在热映":
    //     dataUrl = app.globalData.doubanBase +
    //       "/v2/movie/in_theaters"
    //     break;
    //   case "即将上映":
    //     dataUrl = app.globalData.doubanBase +
    //       "/v2/movie/coming_soon"
    //     break;
    //   case "豆瓣Top250":
    //     dataUrl = app.globalData.doubanBase +
    //       "/v2/movie/top250"
    //     break;
    // }
    // wx.showNavigationBarLoading();
    // util.http(dataUrl, this.processDoubanData);
    // this.data.requestUrl = dataUrl; //保存跳转连接

    this.setData({
      WindowSize:app.globalData.windowsize
    })
  },



})