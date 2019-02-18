//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mainBgUrl: "../resources/images/bg.png",
    
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    routers: [
      {
          name: 'T1',
          url: '*',
        icon:'../resources/images/add.png',
      },
      {
          name: 'T2',
          url: '*',
       icon:'../resources/images/add.png',
      },
      {
          name: 'T3',
          url: '*',
        icon:'../resources/images/add.png',
      },
      {
          name: 'T4',
          url: '*',
        icon:'../resources/images/add.png',
      },
      {
          name: 'T5',
          url: '*',
        icon:'../resources/images/add.png',
      },
      {
          name: 'T6',
          url: '*',
        icon:'../resources/images/add.png',
      },
      {
          name: 'T7',
          url: '*',
        icon:'../resources/images/add.png',
      },
      {
          name: 'T8',
          url: '*',
        icon:'../resources/images/add.png',
      },
      {
          name: 'T9',
          url: '*',
        icon:'../resources/images/add.png',
      }
  ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    


  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

