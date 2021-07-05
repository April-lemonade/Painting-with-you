// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    minscore: 0,
    maxscore:101,
    currentSelectType: 'ed',
    indexSelect: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    topics: [{
      id: 0,
      title: "自动评画"
    }, {
      id: 1,
      title: "课程"
    }, {
      id: 2,
      title: "图库"
    }, {
      id: 3,
      title: "找画室"
    }],
    contentImgSrcs: [{
      title: '基础学习 | 单体几何',
      src: 'cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/works/1.jpg',
      score: 85
    }, {
      title: '基础学习 | 组合几何',
      src: 'cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/works/2.jpg',
      score: 70
    }, {
      title: '基础学习 | 单体几何',
      src: 'cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/works/3.jpg',
      score: 85
    }, {
      title: '基础学习 | 组合几何',
      src: 'cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/works/4.jpg',
      score: 85
    }, {
      title: '基础学习 | 组合几何',
      src: 'cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/works/5.jpg',
      score: 0
    }, {
      title: '基础学习 | 组合几何',
      src: 'cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/works/6.jpg',
      score: 0
    }],
  },
  selectedAll: function (e) {
    this.setData({
      currentSelectType: e.currentTarget.dataset.id,
      minscore: -1,
      maxscore:101
    })
  },
  selectedEd: function (e) {
    this.setData({
      currentSelectType: e.currentTarget.dataset.id,
      minscore: 1,
      maxscore:100
    })
  },
  selectedYx: function (e) {
    this.setData({
      currentSelectType: e.currentTarget.dataset.id,
      minscore: 80,
      maxscore:100
    })
  },
  selectedLh: function (e) {
    this.setData({
      currentSelectType: e.currentTarget.dataset.id,
      minscore: 70,
      maxscore:80
    })
  },
  selectedJg: function (e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      currentSelectType: e.currentTarget.dataset.id,
      minscore: 60,
      maxscore:70
    })
  },
  detail:function(e){
    wx.navigateTo({
      url: "/pages/comment/comment?src="+e.currentTarget.dataset.src+"&score="+e.currentTarget.dataset.score
  })

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight - 80;
        that.setData({
          height: buffer
        });
      },
    })

  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    console.log(id)
    //把index换成id，let得到的id是默认给的index值0,1，2
    this.setData({
      indexSelect: id
    });
    if(id == 1){
      wx.switchTab({
        url: '/pages/course/course',
      })
    }
  }
})