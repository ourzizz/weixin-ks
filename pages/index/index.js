Page({
  data: {
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.alemao.club/json/first.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫list的这个数组中
        that.setData({
          content: res.data[0],
          //res代表success函数的事件对，data是固定的，list是数组
        })
      }
    })
  },


  goBaidu: function () {
    wx.navigateTo({
      url: '../out/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }

})
