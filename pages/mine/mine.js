// pages/mine/mine.js
var app = getApp()
Page({
  data:{
    userInfo: null,
    windowsize: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //写入数据
    this.setData({
        userInfo:app.globalData.userInfo,
        windowsize:app.globalData.windowsize
    })
    
  }
  

})