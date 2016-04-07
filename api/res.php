<?php
function getDir($dir) {
    $dirArray[]=NULL;
    if (false != ($handle = opendir ( $dir ))) {
        $i=0;
        while ( false !== ($file = readdir ( $handle )) ) {
            if ($file != "." && $file != ".." && !strpos($file,".")) {
                $dirArray[$i]=$file;
                $i++;
            }
        }
        closedir ( $handle );
    }
    return $dirArray;
}
function getFile($dir,$prefix = '') {
    $exts = array('jpg','png','gif');
    $fileArray[]=NULL;
    if (false != ($handle = opendir ( $dir ))) {
        $i=0;
        while ( false !== ($file = readdir ( $handle )) ) {
            if ($file != "." && $file != ".." && strpos($file,".") && in_array(substr($file,-3), $exts)) {
                $fileArray[$i] = $prefix.$file;
                if($i==100){
                    break;
                }
                $i++;
            }
        }
        closedir ( $handle );
    }
    return $fileArray;
}

$dir = "../img";
$dirList = getDir($dir);
$fileList = getFile($dir);
foreach ($dirList as $key => $val) {
    if($val){
        $fileSubList = getFile($dir.'/'.$val,$val.'/');
        $fileList = array_merge($fileList,$fileSubList);
    }
}

echo json_encode($fileList);