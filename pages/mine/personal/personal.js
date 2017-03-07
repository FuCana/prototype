// pages/mine/personal/personal.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  go_iphone: function () {
    wx.navigateTo({
      url: '../revamp/revamp',
    })
  },
  go_revamp:function(event){
    var category = event.currentTarget.dataset.category
    wx.navigateTo({
      url: "../revamp/revamp?category=" + category,
    })
  },
})