 # 技术交流 
- 开发交流，技术分享，问题答疑，功能建议收集，版本更新通知！！

 ![输入图片说明](https://gitee.com/minzonetech/CCSmartPhoto/raw/master/cc.png)


# 项目介绍  


- 本小程序包括校庆公告，校史大事记，校庆指南，活动安排，校友捐赠，返校信息，校友登记，校庆头像等八大功能模块！
- 让同学们与校友们不在学校也能参与到校庆活动之中。动动手指，你也一样可以亲身参加校庆活动！为亲爱的母校应援！ 

# 功能说明
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125746_99c192dd_9240987.png "func导图1 (2).png")


# 技术运用

- 项目使用微信小程序平台进行开发。
- 使用腾讯云开发技术，免费资源配额，无需域名和服务器即可搭建。
- 小程序本身的即用即走，适合小工具的使用场景，也适合程序的开发。

# 项目效果截图
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125815_8cbc1286_9240987.png "首页.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125833_1b84903b_9240987.png "校庆头像.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125841_f0985c39_9240987.png "个人中心.png")

![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125850_46bfa19c_9240987.png "校友名录.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125859_07e6d7a5_9240987.png "校庆活动.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125921_6d4b7229_9240987.png "校庆公告.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125932_338e6096_9240987.png "校友登记.png")

# 项目后台截图
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/125953_27db85a2_9240987.png "后台首页.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/130007_7b599b2b_9240987.png "后台用户管理.png")
 

# 部署教程：
### 0. 了解小程序云开发的基础知识
-  参考微信小程序官方文档：
- https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html
- https://developers.weixin.qq.com/miniprogram/dev/wxcloud/quick-start/miniprogram.html


### 1 源码导入微信开发者工具
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/130015_656fb0c4_9240987.png "导入.png")
  

 

### 2 开通云开发环境
 -  参考微信官方文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html
- 在使用云开发能力之前，需要先开通云开发。 
- 在开发者工具的工具栏左侧，点击 “云开发” 按钮即可打开云控制台，根据提示开通云开发，并且创建一个新的云开发环境。
![输入图片说明](https://images.gitee.com/uploads/images/2021/0811/232537_8a27b61c_9240987.png "云开发开通环境.png")
- 每个环境相互隔离，拥有唯一的环境 ID(拷贝此ID，后面配置用到)，包含独立的数据库实例、存储空间、云函数配置等资源；
 

#### 3 云函数及配置
- 本项目使用到了一个云函数cel_cloud
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/130041_829c6420_9240987.png "云函数内终端打开0.png")

  
 

- 打开cloudfunctions/sport_cloud/comm/ccmini_config.js文件，配置后台管理员账号和密码

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0911/150146_a9af88e5_9240987.png "设置管理员账号.png")


 


#### 4  客户端配置
- 打开miniprogram/app.js文件，配置环境ID

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0811/232832_6053aae0_9240987.png "客户端配置.png")



#### 5  上传云函数&指定云环境ID
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/130234_f65b4004_9240987.png "上传到云.png")


#### 6  云函数配置
- 在微信开发者工具-》云开发-》云函数-》对指定的函数添加环境变量 
- [服务端时间时区TZ] =>Asia/Shanghai
- [函数内存] =>128M   
- [函数超时时间] => 20秒
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0813/130402_055813b9_9240987.png "函数配置.png")

 
 
### 至此完全部署配置完毕。

### 在线演示：
 

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0811/233918_96b29222_9240987.jpeg "Free版-QR.jpg")


### 如有疑问，欢迎骚扰联系我鸭： 
### 俺的微信:  cclinux0730


