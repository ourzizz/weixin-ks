Page({
  data: {
  },
  clickMe: function () {
    var that = this
    wx.request({
      url: 'https://www.alemao.club/json/first.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫list的这个数组中
        that.setData({
          list: res.data,
          //res代表success函数的事件对，data是固定的，list是数组
        })
      }
    })
 
 
  }
})
