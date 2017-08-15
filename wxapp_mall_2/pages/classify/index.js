// product.js
Page({
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: "小清新",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '小清新',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p1.jpg"
          },
          {
            child_id: 2,
            name: '小清新',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p1.jpg"
          },
          {
            child_id: 3,
            name: '小清新',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p1.jpg"
          },
          {
            child_id: 4,
            name: '小清新',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p1.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "时尚风",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          },
          {
            child_id: 2,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          },
          {
            child_id: 3,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          },
          {
            child_id: 4,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          },
          {
            child_id: 5,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          },
          {
            child_id: 6,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          },
          {
            child_id: 7,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          },
          {
            child_id: 8,
            name: '时尚风',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p2.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "潮流",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '潮流',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p3.jpg"
          },
          {
            child_id: 2,
            name: '潮流',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p3.jpg"
          },
          {
            child_id: 3,
            name: '潮流',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p3.jpg"
          },
          {
            child_id: 4,
            name: '潮流',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p3.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "日系",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '日系',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p4.jpg"
          },
          {
            child_id: 2,
            name: '日系',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p4.jpg"
          },
          {
            child_id: 3,
            name: '日系',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p4.jpg"
          },
          {
            child_id: 4,
            name: '日系',
            image: "http://95fa85.2.magic2008.cn/ufile/38013/redon/p4.jpg"
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "晚餐",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  onLoad: function () {
    /* 设置标题 */
    wx.setNavigationBarTitle({
      title: '产品分类'
    })
  },
  switchRightTab: function (e) {
    // 获取 item 项的 id 和数组的下标值
    let id = e.currentTarget.dataset.id;
    let index = parseInt(e.currentTarget.dataset.index);
    // 把点击到的某一项，设为当前 index
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})