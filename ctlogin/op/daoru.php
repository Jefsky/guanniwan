
<?php 
header('Content-Type: text/plain; charset=utf-8');
include("../../mycheck/connect.php");
echo "请稍等，正在插入！\r\n";
?>
<?php 
		$con = mysql_connect($con_server,$con_name,$con_password);
		mysql_select_db($database_name, $con);
		mysql_set_charset('utf8',$con);
		
		$files=$_FILES['files'];
		$tmp = $files['tmp_name']; 

		
		if ((($_FILES["files"]["type"] == "text/plain"))&&($_FILES["files"]["size"] < 2*1024*1024))
		  {
			  if ($_FILES["files"]["error"] > 0)
				{
					echo "Return Code: " . $_FILES["files"]["error"];
				}
			  else
				{
					 
					//获取txt文档内容存储到$arr数组里面
					$str = file_get_contents($tmp);//获得txt文本内容
					$arr = explode("\n",$str);//分行存入数组
														
					$sql="INSERT INTO xuleihao(`pid`)  VALUES ";
					
					$i=0; 
					$cout=1000;//每次存取的条数
					$zz=0;
					foreach($arr as $a){			
						if(trim($a)==''){
							continue;
						}	
						
						if($i!=$cout){
							$sql.="('$a'),";
							$zz++;
						}else{
							$sql.="('".$a."');";
							$result=mysql_query($sql);
								if($result){
								}else{
									echo "数据添加错误！";
									exit();
								}
							$sql="INSERT INTO xuleihao(`pid`)  VALUES ";
							$i=0;
							$zz++;
							continue;
						}
						$i++;	
						
					}					
					
					if($i!=0){
						$sql=substr($sql,0,-1);
						$result=mysql_query($sql);
						if($result){
							$msg="\r\n导入已经完成！总共有".$zz."条数据。\r\n";
							}else{
								$msg="数据库出错~~";	
							}
					}

					echo $msg;					
					
				}
		  }
		else
	  {
	  	echo "仅支持txt文本导入且文本不大于2M。";
		echo $_FILES["files"]["size"];
		
	  }
		
?>

