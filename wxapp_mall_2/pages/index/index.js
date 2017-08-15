var util = require('../../utils/util.js');
Page({
  data: {
    slider: [
      'http://95fa85.2.magic2008.cn/ufile/38013/redon/b1.jpg',
      'http://95fa85.2.magic2008.cn/ufile/38013/redon/b2.jpg',
      'http://95fa85.2.magic2008.cn/ufile/38013/redon/b3.jpg'
    ],
    color: '16',
    colorValue: '#e64340',
    toBottom: false
  },
  onLoad: function (options) {

  },
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/index'
    })
  }
})