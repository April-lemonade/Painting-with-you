// pages/course1/course1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    obj: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var self = this
    console.log(options.obj)
    // console.log(options.obj.vedios)
    // console.log(options.vedios[0].subtitle)
    var obj = JSON.parse(decodeURIComponent(options.obj))
    console.log(obj)
    // var obj = JSON.parse(options.obj);
    this.setData({
      // title: options.title,
      // vedios:  vedios
      obj: obj
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})