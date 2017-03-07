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
    
  },
  go_community:function(){
    wx.navigateTo({
      url: "community/community",
    })  
  },
  go_personal:function(){
    wx.navigateTo({
      url: "personal/personal",
    })
  },
  go_score:function(){
    wx.navigateTo({
      url: "score/score",
    })
  },
  go_location:function(){
    wx.navigateTo({
      url: "location/location",
    })
  },
  go_msg:function(){
    wx.navigateTo({
      url: "messages/messages",
    })
  }
  

})