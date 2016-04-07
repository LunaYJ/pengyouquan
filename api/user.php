<?php
include '../inc/conn.php';

$act = isset($_GET['act']) ? $_GET['act'] : '';
switch ($act) {
    case 'info':
        $u_id = isset($_POST['uid']) ? intval($_POST['uid']) : 0;

        $user = execute("select u_id as uid,u_openid as openid,u_nickname as nickname,u_headimgurl as headimgurl,u_content as content,u_picurl as picurl,u_date as date from app_user where u_id=$u_id");
        if($user){
            $praise = array();
            $result = mysql_query("select up_id as pid,up_openid as openid,up_nickname as nickname,up_date as date from app_user_praise where u_id=$u_id");
            $rows = mysql_num_rows($result);
            if($rows > 0){
                $i = 0;
                while($rs = mysql_fetch_assoc($result)){
                    array_push($praise, $rs);
                }
            }

            $comment = array();
            $result = mysql_query("select uc_id as cid,uc_openid as openid,uc_nickname as nickname,uc_headimgurl as headimgurl,uc_content as content,uc_date as date from app_user_comment where u_id=$u_id");
            $rows = mysql_num_rows($result);
            if($rows > 0){
                $i = 0;
                while($rs = mysql_fetch_assoc($result)){
                    array_push($comment, $rs);
                }
            }

            echo json_encode(array('code' => 1, 'msg' => '获取成功', 'user' => $user, 'praise' => $praise, 'comment' => $comment));
        }else{
            echo json_encode(array('code' => -1, 'msg' => '获取失败'));
        }
        break;
    case 'form':
        $u_openid = isset($_COOKIE['openid']) ? addslashes($_COOKIE['openid']) : 0;
        $u_nickname = isset($_COOKIE['nickname']) ? addslashes($_COOKIE['nickname']) : '';
        $u_headimgurl = isset($_COOKIE['headimgurl']) ? addslashes($_COOKIE['headimgurl']) : '';
        $u_content = isset($_POST['content']) ? addslashes($_POST['content']) : '';
        $u_picurl = isset($_POST['picurl']) ? addslashes($_POST['picurl']) : '';
        $u_date = date('Y-m-d H:i:s');

        if(!$u_openid){
            echo json_encode(array('code' => -2, 'msg' => '错误的openid')); exit;
        }else if(!$u_content){
            echo json_encode(array('code' => -2, 'msg' => '请输入内容')); exit;
        }else if(!$u_picurl){
            echo json_encode(array('code' => -2, 'msg' => '请上传图片')); exit;
        }

        $u_picurl = uploadImg($u_picurl);

        $result = mysql_query("insert into app_user (u_openid,u_nickname,u_headimgurl,u_content,u_picurl,u_date)
            values ('$u_openid','$u_nickname','$u_headimgurl','$u_content','$u_picurl','$u_date')");
        if($result){
            $u_id = mysql_insert_id();
            echo json_encode(array('code' => 1, 'msg' => '提交成功', 'uid' => $u_id));
        }else{
            echo json_encode(array('code' => -1, 'msg' => '提交失败'));
        }
        break;
    case 'praise':
        $u_id = isset($_POST['uid']) ? intval($_POST['uid']) : 0;
        $up_openid = isset($_COOKIE['openid']) ? addslashes($_COOKIE['openid']) : 0;
        $up_nickname = isset($_COOKIE['nickname']) ? addslashes($_COOKIE['nickname']) : '';
        $up_date = date('Y-m-d H:i:s');

        if(!$up_openid){
            echo json_encode(array('code' => -2, 'msg' => '错误的openid')); exit;
        }else if(execute("select count(0) from app_user_praise where up_openid='$up_openid' and u_id=$u_id") > 0){
            echo json_encode(array('code' => -3, 'msg' => '您已经点过赞了')); exit;
        }

        $result = mysql_query("insert into app_user_praise (u_id,up_openid,up_nickname,up_date) values ('$u_id','$up_openid','$up_nickname','$up_date')");
        if($result){
            echo json_encode(array('code' => 1, 'msg' => '点赞成功'));
        }else{
            echo json_encode(array('code' => -1, 'msg' => '点赞失败'));
        }
        break;
    case 'comment':
        $u_id = isset($_POST['uid']) ? intval($_POST['uid']) : 0;
        $uc_content = isset($_POST['content']) ? addslashes($_POST['content']) : 0;
        $uc_openid = isset($_COOKIE['openid']) ? addslashes($_COOKIE['openid']) : 0;
        $uc_nickname = isset($_COOKIE['nickname']) ? addslashes($_COOKIE['nickname']) : '';
        $uc_headimgurl = isset($_COOKIE['headimgurl']) ? addslashes($_COOKIE['headimgurl']) : '';
        $uc_date = date('Y-m-d H:i:s');

        if(!$uc_openid){
            echo json_encode(array('code' => -2, 'msg' => '错误的openid')); exit;
        }

        $result = mysql_query("insert into app_user_comment (u_id,uc_openid,uc_nickname,uc_headimgurl,uc_content,uc_date)
            values ('$u_id','$uc_openid','$uc_nickname','$uc_headimgurl','$uc_content','$uc_date')");
        if($result){
            echo json_encode(array('code' => 1, 'msg' => '评论成功'));
        }else{
            echo json_encode(array('code' => -1, 'msg' => '评论失败'));
        }
        break;
}