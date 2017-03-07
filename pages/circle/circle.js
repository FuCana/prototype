// pages/circle/circle.js
Page({
  data: {

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onTeamTap: function () {
    wx.navigateTo({
      url: "team/team",
    })
  },
  onMemberTap: function () {
    wx.navigateTo({
      url: "member/member",
    })
  },
  onSuperTap: function () {
    wx.navigateTo({
      url: "SuperM/SuperM",
    })
  },
  onScoreTap: function () {
    wx.navigateTo({
      url: "score/score",
    })
  }
})