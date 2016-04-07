if (/MicroMessenger/i.test(navigator.userAgent)) {
    $.getScript("http://res.wx.qq.com/open/js/jweixin-1.0.0.js", function callback() {
        $.ajax({
            type: "post",
            url: "api/jssdk.php",
            dataType: 'json',
            data: {
                url: window.location.href
            },
            success: function (data) {
                wx.config({
                    debug: false,
                    appId: data.appid,
                    timestamp: data.timestamp,
                    nonceStr: data.noncestr,
                    signature: data.signature,
                    jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'hideMenuItems',
                            'chooseImage'
                        ]
                })
                
                wx.ready(function () {
                    
                    wx.onMenuShareTimeline(shareData);
                    wx.onMenuShareAppMessage(shareDatafff);
                    wx.hideMenuItems({
                        menuList: [
                            'menuItem:share:qq',
                            'menuItem:share:weiboApp',
                            'menuItem:favorite',
                            'menuItem:share:facebook',
                            'menuItem:copyUrl',
                            'menuItem:readMode',
                            'menuItem:openWithQQBrowser',
                            'menuItem:openWithSafari'
                        ]
                    });
                })
                wx.error(function (res) {
                    // alert(res)
                })
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // alert("Http status: " + xhr.status + " " + xhr.statusText + "\najaxOptions: " + ajaxOptions + "\nthrownError:" + thrownError + "\n" + xhr.responseText);
            }
        })
    })
}