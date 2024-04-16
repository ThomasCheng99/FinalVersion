Component({
  data: {
    color: "#515151",
    selectedColor: "#DAA520",
    backgroundColor: "#ffffff",
    list: [
			{
				pagePath: "cel/pages/user/user_index",
				text: "组织",
				iconPath: "/cel/images/tabbar/organization.png",
				selectedIconPath: "/cel/images/tabbar/organization-active.png"
      },
      {
				pagePath: "cel/pages/face/face_index",
				text: "服务",
				iconPath: "/cel/images/tabbar/serve.png",
				selectedIconPath: "/cel/images/tabbar/serve-active.png"
			},
      {
				pagePath: "cel/pages/index/index_home",
        bulge:true,
				iconPath: "/cel/images/tabbar/post.png",
				selectedIconPath: "/cel/images/tabbar/post-select.png"
			},
			{
				pagePath: "cel/pages/news/news_board",
				text: "活动",
				iconPath: "/cel/images/tabbar/activity.png",
				selectedIconPath: "/cel/images/tabbar/activity-active.png"
			},
			{
				pagePath: "cel/pages/my/index/my_index",
				text: "我的",
				iconPath: "/cel/images/tabbar/my.png",
				selectedIconPath: "/cel/images/tabbar/my-active.png"
			}
		]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})