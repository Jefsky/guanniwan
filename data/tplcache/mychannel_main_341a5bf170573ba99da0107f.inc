<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>内容模型管理</title>

<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/base.css">
<script language="javascript" src="js/jquery.min.js" type="text/javascript"></script>	
<script type="text/javascript" src="js/admin.jquery.configuration.js"></script>

<script language="javascript" src="js/global.js"></script>
<script language="javascript" src="../include/js/dedeajax2.js"></script>

</head>
<body>
<div id="body-wrapper"> <!-- Wrapper for the radial gradient background -->
<?php include(DEDEADMIN.'/templets/menu.htm'); ?>
<script language="javascript">
$("#channel").addClass("current");$("#mychannel_main").addClass("current");</script>				

	<div class="content-box"><!-- Start Content Box -->
				
				<div class="content-box-header">
					
					<h3>内容模型管理</h3>
					
					<ul class="content-box-tabs">
    	  <a href="mychannel_add.php" class='np coolbg'>增加新模型</a>
    	  <a href="mychannel_edit.php?dopost=exportin" class='np coolbg'>导入模型</a>
    	  <a href="stepselect_main.php" class='np coolbg'>联动类别管理</a>
					</ul>
					
					<div class="clear"></div>
					
				</div> <!-- End .content-box-header -->
				
				<div class="content-box-content">
					
<div class="tab-content  default-tab" id="tab1">				
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#D6D6D6">

  <tr align="center" bgcolor="#FBFCE2" height="28"> 
      <td width="6%">id号</td>
      <td width="16%">频道名称</td>
      <td width="12%">识别id</td>
      <td width="20%">附加表</td>
      <td width="12%">状态</td>
      <td width="8%">模型</td>
      <td>管理</td>
   </tr>
   <?php
$atts = array();
$atts['tagname'] = 'datalist';
$blockValue = $this->refObj->GetArcList($atts,$this->refObj,$fields); 
if(is_array($blockValue)){
foreach( $blockValue as $key=>$fields )
{
?>
    <tr align="center" bgcolor="#FFFFFF" height="24" 
    	onMouseMove="javascript:this.bgColor='#FCFDEE';" onMouseOut="javascript:this.bgColor='#FFFFFF';"> 
        <td><?php echo $fields['id']; ?></td>
        <td>
        	<a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=edit'><u><?php echo $fields['typename']; ?></u></a>
        </td>
        <td><?php echo $fields['nid']; ?></td>
        <td><?php echo str_replace('#@__',$cfg_dbprefix,$fields['addtable']); ?></td>
        <td><?php echo GetSta($fields['isshow'],$fields['id']); ?></td>
        <td><?php echo IsSystem($fields['issystem']); ?></td>
        <td>
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=copystart'><img src='images/gtk-copy.png' title='复制' alt='复制' /></a> 
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=gettemplets'><img src='images/gtk-tmp.png' title='模板' alt='模板' /></a> 
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=export'><img src='images/gtk-ex.png' title='导出' alt='导出' /></a>  
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=edit'><img src='images/gtk-edit.png' alt='更改' title='更改' /></a>  
         <a href='mychannel_edit.php?mid=<?php echo $fields['id']; ?>&dopost=modifysearch'><img src='images/gtk-search.png' alt='自定义搜索' title='自定义搜索' /></a> 
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=delete'><img src='images/gtk-del.png' alt='删除' title='删除' /></a>
		    </td>
     </tr>
		<?php
}
}?>
     <tr align="center" bgcolor="#F9FCEF" height="28"> 
      <td colspan="7">
      	<?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['listsize'] = '5';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>

      </td>
     </tr>
     <tr align="center" bgcolor="#ffffff" height="32"> 
      <td colspan="7">
      	图标说明：
      	<img src='images/gtk-copy.png' title='复制' alt='复制' /> 复制
        <img src='images/gtk-tmp.png' title='模板' alt='模板' /> 模板
        <img src='images/gtk-ex.png' title='导出' alt='导出' /> 导出
        <img src='images/gtk-edit.png' alt='更改' title='更改' /> 修改
        <img src='images/gtk-search.png' alt='自定义搜索' title='自定义搜索' /> 自定义搜索
        <img src='images/gtk-del.png' alt='删除' title='删除' /> 删除
      </td>
     </tr>
   </table>
   </td>
</tr>
</table>
							<div class="clear"></div><!-- End .clear -->
							
						
						
					</div> <!-- End #tab1 -->

					
				</div> <!-- End .content-box-content -->
				
			</div> <!-- End .content-box -->
			
			<div class="clear"></div>
			
           <?php include(DEDEADMIN.'/templets/footer.htm'); ?>
			
		</div> <!-- End #main-content -->	
	</div>
</body>
</html>