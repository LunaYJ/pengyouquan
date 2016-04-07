var weixinRand =  Math.floor(Math.random()*20);
var commentRand1 =  Math.floor(Math.random()*10);
var commentRand2 =  Math.floor(Math.random()*10);
var commentRand3 =  Math.floor(Math.random()*10);

var falseDatas = {
    star:[
        {nickname:"吴亦凡",content:"如果真的有天使，我想你就是其中一个~",headimgurl:"images/star/1.jpg"},
        {nickname:"鹿晗",content:"好美~<img src='images/icon/kx.png' class='emoji'><img src='images/icon/kx.png' class='emoji'>",headimgurl:"images/star/2.jpg"},
        {nickname:"张艺兴",content:"很漂亮~",headimgurl:"images/star/3.jpg"},
        {nickname:"井柏然",content:"好美~我都忍不住来赞一个了",headimgurl:"images/star/4.jpg"},
        {nickname:"杨洋",content:"拍照角度跟我很像啊，好评~",headimgurl:"images/star/5.jpg"},
        {nickname:"陈学冬",content:"为你手动点赞哦<img src='images/icon/hx2.png' class='emoji'>",headimgurl:"images/star/6.jpg"},
        {nickname:"陈晓",content:"赞一个赞一个~",headimgurl:"images/star/7.jpg"},
        {nickname:"吴磊",content:"真好看",headimgurl:"images/star/8.jpg"},
        {nickname:"王俊凯",content:"圆脸真的比较好看",headimgurl:"images/star/9.jpg"},
        {nickname:"李易峰",content:"又见美女，心情好好，啦啦啦啦~",headimgurl:"images/star/10.jpg"},
        {nickname:"胡歌",content:"哈哈~又捉到一个美女",headimgurl:"images/star/11.jpg"},
        {nickname:"张翰",content:"嗯~这条美人鱼，可以养在我的鱼塘里<img src='images/icon/kx.png' class='emoji'>",headimgurl:"images/star/12.jpg"},
        {nickname:"黄子韬",content:"照片上的给我上个几打！",headimgurl:"images/star/13.jpg"},
        {nickname:"郑凯",content:"美女，约吗？<img src='images/icon/yx.png' class='emoji'>",headimgurl:"images/star/14.jpg"},
        {nickname:"马天宇",content:"<img src='images/icon/qq.png' class='emoji'><img src='images/icon/qq.png' class='emoji'>更美了呢",headimgurl:"images/star/15.jpg"},
        {nickname:"陈翔",content:"蛮好玩的样子，照片也是美美的",headimgurl:"images/star/16.jpg"},
        {nickname:"王凯",content:"我的靖王妃在这儿呢~<img src='images/icon/zui.png' class='emoji'>",headimgurl:"images/star/17.jpg"},
        {nickname:"陈伟霆",content:"嘘，让我静静地欣赏",headimgurl:"images/star/18.jpg"},
        {nickname:"王源",content:"天冷了，美美的同时注意保暖哦",headimgurl:"images/star/19.jpg"},
        {nickname:"杜天皓",content:"嗯~不错不错",headimgurl:"images/star/20.jpg"}
    ],
    friend:[
        {nickname:"<img src='images/icon/gui.png' class='emoji'><img src='images/icon/gui.png' class='emoji'>陈",content:"小样儿，是我的菜！<img src='images/icon/kx.png' class='emoji'><img src='images/icon/kx.png' class='emoji'>",headimgurl:"images/friend/1.jpg"},
        {nickname:"PZ瑶是个麻烦<img src='images/icon/zui.png' class='emoji'>",content:"照片好美~ <img src='images/icon/mg.png' class='emoji'>",headimgurl:"images/friend/2.jpg"},
        {nickname:"°小仙道＊",content:"<img src='images/icon/zui.png' class='emoji'><img src='images/icon/zui.png' class='emoji'>",headimgurl:"images/friend/3.jpg"},
        {nickname:"捧着篮球的酸奶女侠",content:"哇塞！<img src='images/icon/bang.png' class='emoji'>",headimgurl:"images/friend/4.jpg"},
        {nickname:"ba.n",content:"<img src='images/icon/mg.png' class='emoji'><img src='images/icon/mg.png' class='emoji'>",headimgurl:"images/friend/5.jpg"},
        {nickname:"Lincy",content:"怎么投放的啊？快教我<img src='images/icon/kl.png' class='emoji'><img src='images/icon/kl.png' class='emoji'>",headimgurl:"images/friend/6.jpg"},
        {nickname:"zzj",content:"几日不见当刮目相看啊~",headimgurl:"images/friend/7.jpg"},
        {nickname:"未来有多近。",content:"<img src='images/icon/zui.png' class='emoji'><img src='images/icon/zui.png' class='emoji'>",headimgurl:"images/friend/8.jpg"},
        {nickname:"卡萨布兰卡",content:"照片很赞<img src='images/icon/bang.png' class='emoji'>",headimgurl:"images/friend/9.jpg"},
        {nickname:"初晴",content:"漂亮哦~",headimgurl:"images/friend/10.jpg"},
        {nickname:"cheng long",content:"不错啊，妞",headimgurl:"images/friend/11.jpg"},
        {nickname:"<img src='images/icon/ma.png' class='emoji'><img src='images/icon/ma.png' class='emoji'>娜娜",content:"我也要去投放<img src='images/icon/keai.png' class='emoji'><img src='images/icon/keai.png' class='emoji'>",headimgurl:"images/friend/12.jpg"},
        {nickname:"Aydar",content:"<img src='images/icon/love.png' class='emoji'><img src='images/icon/love.png' class='emoji'>",headimgurl:"images/friend/13.jpg"},
        //{nickname:"",content:"",headimgurl:"images/friend/14.jpg"},
        {nickname:"Mizi危禄",content:"照片上的给我来一打！",headimgurl:"images/friend/15.jpg"},
        {nickname:"A",content:"美极了~<img src='images/icon/love.png' class='emoji'>",headimgurl:"images/friend/16.jpg"},
        {nickname:"勇敢狂奔的狗",content:"不错不错",headimgurl:"images/friend/17.jpg"},
        {nickname:"大圈圈",content:"怎么投的呀？<img src='images/icon/bc.png' class='emoji'>",headimgurl:"images/friend/18.jpg"},
        {nickname:"小宇",content:"很久没见又美咯<img src='images/icon/love.png' class='emoji'>",headimgurl:"images/friend/19.jpg"},
        {nickname:"Anno",content:"好美~我也要投",headimgurl:"images/friend/20.jpg"},
        {nickname:"一半4A纸",content:"哈哈哈~<img src='images/icon/kx.png' class='emoji'><img src='images/icon/kx.png' class='emoji'><img src='images/icon/kx.png' class='emoji'>",headimgurl:"images/friend/21.jpg"},
        {nickname:"切克闹",content:"手动点赞<img src='images/icon/bang.png' class='emoji'><img src='images/icon/bang.png' class='emoji'>",headimgurl:"images/friend/22.jpg"},
        {nickname:"彪",content:"妹子，快到我碗里来<img src='images/icon/kx.png' class='emoji'>",headimgurl:"images/friend/23.jpg"},
        {nickname:"DEMI德米",content:"我也去投一个，哈哈~",headimgurl:"images/friend/24.jpg"},
        {nickname:"天堂里的影子",content:"今天朋友圈一派好气象，<img src='images/icon/mg.png' class='emoji'>",headimgurl:"images/friend/25.jpg"},
        {nickname:"Mila.L",content:"照片好漂亮啊，羡慕~",headimgurl:"images/friend/26.jpg"},
        {nickname:"MaJunNan",content:"让我身为朋友都倍儿有面子！<img src='images/icon/kx.png' class='emoji'><img src='images/icon/kx.png' class='emoji'>",headimgurl:"images/friend/27.jpg"},
        {nickname:"简单爱",content:"哈哈哈，你也投放了啊<img src='images/icon/tx.png' class='emoji'><img src='images/icon/tx.png' class='emoji'>",headimgurl:"images/friend/28.jpg"},
        {nickname:"贝爷贝爷嘎嘣脆",content:"美的！",headimgurl:"images/friend/29.jpg"},
        {nickname:"where did u go",content:"亲爱的，好久不见越来越美了哟~",headimgurl:"images/friend/30.jpg"}
    ]
};
var falseComments = [
    '爱夜宵，吃不胖。<br/>爱高级餐厅，也爱夜排档。<br/>我是吃货小公举，我有底气你行吗！',
    '上得了厅堂，下得了厨房，开得起豪车，买得起好房。<br/>男朋友快来，我有底气做你的“长期饭票”~',
    '从来不爱乱喝“心灵鸡汤”，<br/>我有底气，<br/>干了那一大碗的“砒霜”！',
    '可萝莉，可御姐，斗小三，打流氓。<br/>我有底气做男票的百变女王！ ',
    '晒自拍，秀恩爱。<br/>颜值是我的底气，不服来战呀！',
    '冷了会帮我添衣，饿了会为我做饭。<br/>从无怨言，也毫不保留。<br/>父母的爱就是我最大的底气。',
    '何必变成TA喜欢的样子，<br/>我只想成为独一无二的自己。',
    '你们靠气质，我靠颜值。',
    '即使我变胖，<br/>脾气不好，<br/>爱我的人依然不会嫌弃我。',
    '攒足底气就去网天王，<br/>小伙伴们，<br/>来赞我！'
];

var openid = $.cookie('openid');
var nickname = $.cookie('nickname') || "xxx";
var headimgurl = $.cookie('headimgurl');
if(!openid){
    //window.location.href = 'api/auth.php?redirect=' + encodeURIComponent(window.location.href);
}
var getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}
var UID= getUrlParam("uid");

var getUrl = function() {
    var curWwwPath = window.document.location.href;
    var pathName = window.document.location.pathname;
    if(pathName.length == 1) return window.document.location.origin;
    var pos = curWwwPath.indexOf(pathName);
    var localhostPaht = curWwwPath.substring(0, pos);
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);  
    var rootPath = localhostPaht + projectName;
    return rootPath;
}
var getMHDM = function(begintime){
    var hddm = (new Date()).getTime() - (new Date(begintime)).getTime();

    var days = Math.floor(hddm/(24*3600*1000));
    if(days) {
        return days + "天前";
    }
    var hours = Math.floor(hddm/(3600*1000));
    if(hours) {
        return hours + "小时前";
    }
    var minutes = Math.floor(hddm/(60*1000));
    if(minutes) {
        return minutes + "分钟前";
    }
};
function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}

var titles = [
    '我就是你们口中的“壕”！','再不留下些什么，2015就过去了！','朋友圈广告，你投得起么？','朋友圈能向个人开放投广告了？','“'+nickname+'”刚刚砸巨资在朋友圈投放了个广告'
];
var shareTitle = titles[Math.floor(Math.random()*5)];
var shareData = {
    desc: shareTitle,
    title: shareTitle,
    link: getUrl() + "/result.html?uid="+UID,
    imgUrl: getUrl() + '/images/share.jpg',
    success: function () {
    },
    cancel: function () { 
    }
};
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
                    wx.onMenuShareAppMessage(shareData);
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
