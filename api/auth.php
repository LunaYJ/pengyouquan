<?php
include '../inc/conn.php';
include '../inc/wechatauth.php';

$redirect = isset($_GET['redirect']) ? htmlspecialchars_decode($_GET['redirect']) : '';
if(!$redirect) die('获取redirect失败');
if(strpos($redirect,'?') == 0) $redirect .= '?ok=1';

$code = isset($_GET['code']) ? $_GET['code'] : '';
if($code){
    $wechat = new WechatAuth($appid,$secret);
    $access = $wechat->getAccessToken('code',$code);
    $result = $wechat->getUserInfo($access);
    if($result['openid']){
        setcookie('openid',$result['openid'],time()+3600*24,'/');
        setcookie('nickname',$result['nickname'],time()+3600*24,'/');
        setcookie('headimgurl',$result['headimgurl'],time()+3600*24,'/');
        header('Location: '.$redirect); exit;
    }else{
        die('获取用户信息失败');
    }
}else{
    if(is_weixin()){
        $wechat = new WechatAuth($appid,$secret);
        $url = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"].'?redirect='.urlencode($redirect);
        $apiUrl = $wechat->getRequestCodeURL($url);
        header('Location: '.$apiUrl); exit;
    }else{
        // die('请在微信客户端内访问');
        setcookie('openid','nouser',time()+3600*24,'/');
        setcookie('nickname','测试用户',time()+3600*24,'/');
        setcookie('headimgurl','http://wx.qlogo.cn/mmopen/Q3auHgzwzM66AoyH8nJMiayyicpyvQrMCBPfAqKXxVtVDoW3ibesNh26pHiaocicPOwuBvEhk6IPbViay8E9M9LfVQfg/0',time()+3600*24,'/');
        header('Location: '.$redirect); exit;
    }
}

function is_weixin(){
    if (strpos($_SERVER['HTTP_HOST'],'192.168') !== false) return false;
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false){
        return true;
    }   
    return false;
}