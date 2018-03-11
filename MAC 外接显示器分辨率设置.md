# MAC 外接显示器分辨率设置

日常开发可能经常需要外接显示器, 我入手的是 25寸的 2k Dell U2518D, 用 DP 或者 HDMI 外接显示器后默认的分辨率是 2560 1440, 这种情况是没有用 [HiDPI](https://wiki.archlinux.org/index.php/HiDPI)渲染的, 看视频很好, 但是看文字、文档什么的字体很小而且发虚, 通过 `RDM` 和 设置 `HiDPI` 最终设置 1600 900, 显示效果不及 retina, 但是也非常不错了

## 设置步骤

1. 安装 [RDM](https://github.com/avibrazil/RDM)
2. 关闭 SIP, 参考 [disable System Integrity Protection](http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/)
3. 参考 [Display-Override-PropertyList-File-Parser-and-Generator-with-HiDPI-Support-For-Scaled-Resolutions](https://github.com/comsysto/Display-Override-PropertyList-File-Parser-and-Generator-with-HiDPI-Support-For-Scaled-Resolutions), 一步一步做
4. 重启,在 RDM 中设置分辨率 1600 900
5. 开启 SIP

## 参考

1. [有关retina和HiDPI那点事](https://www.jianshu.com/p/0ba2777f38fc)




