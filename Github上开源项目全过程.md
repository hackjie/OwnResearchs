# Github 上开源项目全过程

一直从 GitHub 上拿(“借鉴”)其他人开源的代码，最近有时间想开源一个自己的小项目，源于对公司现有手势密码和 GitHub 上 swift 版本的实现“不太满意”，滑动消耗内存过高、代码耦合性严重难以扩展等，主要谈谈开源这一过程吧

## 流程

1. GitHub 上建项目拉到本地
2. 添加源码，即库的功能以及 demo
3. touch .podspec
4. pod lib lint
5. readme 主页英文，给上中文链接
6. LICENSE
7. 图标亮点参考[这里](https://juejin.im/entry/5907fa59570c3500582d326c)，或者直接 GitHub 上找 star 数多的项目参考
8. travis-ci 每次提交代码或者发布新版本之前通过都会邮件提醒
9. 注意测试好在发布到 CocoaPods，因为版本发布上去是不能删除重新发的
10. 打 tag 推送到远程或者 GitHub 上发布 `release`
11. 利用 `Trunk` 将 podspec 推送到 CocoaPods
12. pod trunk register <your email>，成功会收到邮件通知
13. pod trunk push **.spec
14. wait...直到出现成功出现一段文字几个图标（🍺）
15. 再不懂可以参考[这里](http://swift.gg/2016/12/15/cocoapods-making-guide/)

## 几点注意

1. logo 简洁大方，易记
2. 开源库一定要做到简单、高效、易用，做好一件事
3. readme 好好写，最好参考 star 数多的
4. 宣传...让更多人知道，这是件很累的事...

