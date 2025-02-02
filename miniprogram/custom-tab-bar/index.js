Component({
    data: {
        select: 0,
        list: [
            {
               iconPath: "/images/index.png",
               pagePath: "/pages/index/index",
               selectedIconPath: "/images/index_fill.png",
               text: "首页",
               type: 0
            },
            {
               iconPath: "/images/classify.png",
               pagePath: "/pages/classify/classify",
               selectedIconPath: "/images/classify_fill.png",
               text: "分类",
               type: 0
           },
           {
               type: 1,
               pagePath: "/pages/publish/publish",
           },
          
           {
              iconPath: "/images/me.png",
              pagePath: "/pages/me/me",
              selectedIconPath: "/images/me_fill.png",
              text: "我的",
              type: 0
           }
        ]
    },

    methods: {
        selectPage(e) {
            const { index, page, type } = e.currentTarget.dataset;
            if (index !== this.data.select && type === 0) {
                wx.switchTab({
                  url: page,
                })
            } else {
                if (wx.getStorageSync('login')) {
                    wx.navigateTo({
                        url: page,
                    })
                } else {
                    wx.showToast({
                      title: '请去个人中心登录!',
                      icon: 'none'
                    })
                }
            }
        }
    }
})