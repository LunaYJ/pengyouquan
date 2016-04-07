<?php
if (strpos($_SERVER['HTTP_HOST'],'shk.xmiao.cn') !== false){
	include "config.official.php";
}else{
	include "config.debug.php";
}