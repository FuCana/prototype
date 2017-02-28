//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    obj: {
      // tab切换  
      currentTab: 0,
      // 页面配置     
      winWidth: 0,
      winHeight: 0,
    },
    P_Messages: null,
    Messages: [
      {
        photo: '/images/photo/u2020.png',
        name: '青青子衿',
        Type: {
          t1: '精选',
          t2: '认证专家'
        },
        time: '1小时',
        text: '引起抑郁症的原因多种多样，2013年11月《lancet》研究显示，2010年精神障碍导致全球23.2万人死亡，是导致非致命性疾病的首要原因。再精神障碍导致伤残调整生命年排前三位的是抑郁（40.5%）、焦虑（14.6%）以及药物成瘾导致的精神障碍，其中自杀是抑郁症最严重的结果。试问一下，如果你的患者治疗效果不好，排除抑郁的因素了吗？',
        zan: 15,
        reply: 3,
        comments: [
          { name: '兔小花', content: '抑郁症是否可以治愈？主要治疗方法有哪些？', typ: '' },
          { name: '兔小花', content: '请问抑郁症患者出现幻觉如何处理？', typ: '' },
          { name: '兔小花', content: '抑郁症是否可以治愈？主要治疗方法有哪些？', typ: '' }
        ]
      },
      {
        photo: '/images/photo/u2022.png',
        name: '陆逍遥',
        Type: {
          t1: '公告',
          t2: '管理员'
        },
        time: '2小时',
        text: '【本月病例征集，送金币！】活动详情：时间2月1日至2月14日，病例发送至联系人',
        zan: 0,
        reply: 0,
        comments: []
      },
      {
        photo: '/images/photo/u2024.png',
        name: '哒哒豆豆',
        Type: {
          t1: '',
          t2: ''
        },
        time: '3小时',
        text: '84岁男性，不爱说话，性格孤僻。总认为自己不得活，不想吃饭。肝功、血糖、心脏检查都没有问题。能吃抗抑郁的药吗？',
        zan: '15',
        reply: 0,
        comments: []
      },
      {
        photo: '/images/photo/u2030.png',
        name: '陆小雅',
        Type: {
          t1: '精选',
          t2: '管理员'
        },
        time: '3小时',
        text: '读书：弗洛伊德《梦的解析》',
        zan: 15,
        reply: 0,
        comments: []
      }
    ]
  },
  processContent: function () {
    var P_Messages = [];
    for (var idx in this.data.Messages) {
      var Message = this.data.Messages[idx];
      var text = Message.text
      if (text.length > 60) {
        var _text = text.substring(0, 60) + "..."
        var text_ = text
        var zhanheng = true;   //控制‘全文’是否显示
        var zhan = true;    //控制全文显示
      } else {
        var _text = text
        var zhanheng = false;
      }
      var temp = {
        text: {
          text_:text_,
          _text:_text,
          zhanheng:zhanheng,
          zhan:zhan
        },
        photo: Message.photo,
        name: Message.name,
        Type: Message.Type,
        time: Message.time,
        zan: Message.zan,
        reply: Message.reply,
        comments: Message.comments,
        index:idx
      }
      P_Messages.push(temp)
    }
    this.setData({
      P_Messages:P_Messages
    })
  },
  quanwen: function (event) {
    var index = event.currentTarget.dataset.index;
    var texts = this.data.P_Messages[index];
    texts.text.zhan =!texts.text.zhan;
    this.setData({
      'P_Messages' : this.data.P_Messages
    })
  },
  onLoad: function () {
    //Login
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo)
      // app.globalData.userInfo = userInfo 登录函数已经赋值过了
      app.globalData.Login = true
    });
    //get page info
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res)
        that.setData({
          'obj.winWidth': res.windowWidth,
          'obj.winHeight': res.windowHeight
        });
        app.globalData.windowsize = that.data.obj
      }

    });

    this.processContent();
  },
  bindChange: function (event) {

    var that = this;
    that.setData({ 'obj.currentTab': event.detail.current });

  },

  //  点击tab切换 

  swichNav: function (event) {

    var that = this;
    if (this.data.obj.currentTab === event.target.dataset.current) {
      return false;
    } else {
      that.setData({
        'obj.currentTab': event.target.dataset.current
      })
    }
  },

    // publish
  publishtab: function () {
    wx.navigateTo({
      url: '../publish/publish',
    })
  }

})


