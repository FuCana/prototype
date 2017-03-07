// pages/circle/team/team.js
Page({
  data: {
    team: [
      {
        team_aver: '/images/qun/u1058.png',
        team_name: '脑外科手术群',
        team_manager: 'Candy'
      },
      {
        team_aver: '/images/qun/u1060.png',
        team_name: '脑外科手术群',
        team_manager: 'Candy'
      },
      {
        team_aver: '/images/qun/u1062.png',
        team_name: '脑外科手术群',
        team_manager: 'Candy'
      },
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onIntroduce: function (){
    wx.navigateTo({
      url: '../team_introduce/team_introduce',
    })
  }
})