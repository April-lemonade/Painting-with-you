// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        index: 0,
title: "第一课·素描工具",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/1.jpg",
        vedios:[{
          url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/394cefd5-f9b1-4fa8-a955-41ca75805391/1..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T025733Z&X-Amz-Expires=86400&X-Amz-Signature=2d70b74516741cc34a195947fb80b73587d48bdb0b30f12b74854bfd5d03e703&X-Amz-SignedHeaders=host",
          subtitle:"1.掌握铅笔的型号和用法"
        },
        {
          url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/93268ddc-1d19-4ec0-8224-ea70414e35a6/2..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T052658Z&X-Amz-Expires=86400&X-Amz-Signature=c6c7ab5130c6f906a361b1d4e9f5eb14adbc544a94c2668bc3531dcae91dfdbc&X-Amz-SignedHeaders=host",
          subtitle:"2.使用纸笔的技巧"
        },
        {
          url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/12647b96-2daa-430c-95c2-cad3b8ea90d9/3..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T025146Z&X-Amz-Expires=86400&X-Amz-Signature=e1d566c1165be802a69faf38c9ed1e01e687ae86082f201c6c606b64d9723b37&X-Amz-SignedHeaders=host",
          subtitle:"3.使用橡皮的技巧"}
       ],
        count: 23
      },
      {
        index: 1,
        title: "第二课·排线练习",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/2.png",
         vedios:[{
           url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/558b8dfd-bcb1-4b50-807f-53dcc75585fc/2.5.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T085814Z&X-Amz-Expires=86400&X-Amz-Signature=b078da97431fb2adbb74f105bf9355f8fbfb740f19e56136651e5bdc34e42cd7&X-Amz-SignedHeaders=host",
           subtitle:"1.如何纠正错误的线条"
         },
           {
           url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d4f6a2b9-26b0-4b72-a9fa-717cf3fe7287/2.6.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T085513Z&X-Amz-Expires=86400&X-Amz-Signature=99e2abb557570a10b46d0014815a4b969e972ee370d34a7789616702f03fdaf4&X-Amz-SignedHeaders=host",
           subtitle:"2.明暗素描中的线条"
         },{
          url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9acd4742-6b64-44ff-be0d-d40acb804b22/2.7.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T082019Z&X-Amz-Expires=86400&X-Amz-Signature=9d185ba67d57807110925d4a11a6d683ba5ca3a58e04ff39a28f771ddc78197f&X-Amz-SignedHeaders=host",
          subtitle:"3.结构素描中的线条"
        },
        {
          url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/806dc53e-f34e-41c2-881f-8c9d0be4cc10/2.81.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T085558Z&X-Amz-Expires=86400&X-Amz-Signature=839a7e7e808cb9e10843478b51942c0f2e799e1a86b3946cc8178ee69f370f41&X-Amz-SignedHeaders=host",
          subtitle:"4.练习画线条"}],
        count: 67
      },
      {
        index: 2,
        title: "第三课·透视关系",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/3.png",
        vedios:[{
          url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b441975-3252-4c96-841a-34a358569d09/1..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T032506Z&X-Amz-Expires=86400&X-Amz-Signature=98d2690fd6f924b47639aef29ac310dd2be004c5516593436432b326ae0ec934&X-Amz-SignedHeaders=host",
          subtitle:"1.立方体如何打形"
        },
        {
          url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/889eda98-e2f1-4382-b62f-e1737e9a5995/2..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T032506Z&X-Amz-Expires=86400&X-Amz-Signature=e4bc1fd64edbbeb5faf8a6b51d9585ece9b33b3954c1c091a170b790d0b992e3&X-Amz-SignedHeaders=host",
          subtitle:"2.如何理解立方体的透视"},
          {
            url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0d5ed640-74e1-40dc-aba8-bd34cf2baa4d/3..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T090022Z&X-Amz-Expires=86400&X-Amz-Signature=7d2cdf05884906c4c08d1a1203b547171a3b5b7a007e3a50c766cfafe87a7fbc&X-Amz-SignedHeaders=host",
            subtitle:"3.如何画立方体的边线"
          },
          {
            url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ddb085b2-2579-480e-a765-9b24ce4e75ef/4..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T085549Z&X-Amz-Expires=86400&X-Amz-Signature=7ee0ca5199f14d37e3b8d7d46073801a4a3671c4a3bf5da1f058b78032543cad&X-Amz-SignedHeaders=host",
            subtitle:"4.如何画立方体的暗面"
          },
          {
            url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1c7f4c9-0c3d-4d09-917e-65da7a8f06d0/5..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T055037Z&X-Amz-Expires=86400&X-Amz-Signature=73bb042d150f9352e6e657e1547d52c0efa25db0d93caf3e9598b4e36f97e603&X-Amz-SignedHeaders=host",
            subtitle:"5.如何画立方体的投影"
          },
          {
            url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bb00e60-4a07-43c5-b2d8-e891e54734a3/6..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210705T085643Z&X-Amz-Expires=86400&X-Amz-Signature=647983499cd811de246f967f130d18823d2d2e07a51703f4993928223cdeb2e6&X-Amz-SignedHeaders=host",
            subtitle:"6.如何画立方体的背景"
          }],
        count: 50
      },
      {
        index: 3,
        title: "第四课·透视关系",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/4.png",
        count: 49
      },
      {
        index: 4,
        title: "第五课·三大面五大调子",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/5.jpg",
        count: 51
      },
      {
        index: 5,
        title: "第六课·三大面五大调子",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/6.png",
        count: 55
      },
      {
        index: 6,
        title: "第七课·素描构图",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/7.jpg",
        count: 42
      },
      {
        index: 7,
        title: "第八课·素描构图",
        src:"cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/basicImg/8.jpg",
        count: 39
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  detail:function(e){
    var vedios = JSON.stringify(e.currentTarget.dataset.vedios);
    var obj = JSON.stringify(e.currentTarget.dataset.obj);
    wx.navigateTo({
      // url: "/pages/course1/course1?title="+e.currentTarget.dataset.title+"&vedios="+vedios
      url: "/pages/course1/course1?obj="+encodeURIComponent(obj)
  })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})