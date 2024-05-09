// JavaScript Document
/*加入收藏夹*/ 
function addfavorite(title){ 
	var url = "http://"+window.location.host;
    try{ 
		window.external.addfavorite(url,title); 
     }catch (e){ 
       try{ 
           window.sidebar.addPanel(title, url, ""); 
       }catch (e){ 
            alert("加入收藏失败，请使用ctrl+d进行添加"); 
       } 
    } 
} 

/*分享网站*/
function shareSite(url){
	CopyText(url);
	alert("嘿，你不是想要做网站吗？这家公司不错，你看看去。 www.10000idc.net\n\n以上文字已复制到剪切板，发送给您的朋友吧");
	return false;
}

/* 设为首页 */
function setHome(obj){
	var vrl = window.location;
	try{
			obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
	}
	catch(e){
		if(window.netscape) {
			try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}
			catch (e) {
					alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入\"about:config\"并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',vrl);
		 }
	}
}


function checkSearchForm(){
	if(document.searchform.keywords.value==""){
		alert("请输入关键字!");
		return false;
	}else{
		return true;
	}
}

isTel = function ( tel )
{
  var reg = /^[\d|\-|\s|\_]+$/; //只允许使用数字-空格等

  return reg.test( tel );
}

function isMobile(value)
{

	if(/^13\d{9}$/g.test(value)||(/^15[0-35-9]\d{8}$/g.test(value))|| (/^18[05-9]\d{8}$/g.test(value))){
		return true;
	}
	else
	{ 
		return false;
	}

}


function checkData(o){
	o=o.elements;
	var err="";
	if(o["uname"].value=="")err+="请填写姓名!\n";
	if(o["content"].value=="")err+="请填写留言内容!\n";
	if(o["tel"].value=="" || o["tel"].value=="0755-89810545"){
		err+="请填写电话!\n";o["tel"].value = "";
	}
	if(o["email"].value=="" || o["email"].value=="service@10000idc.net"){
	
		err+="请填写邮箱!\n";o["email"].value="" ;
	}
	if(o["tel"].value!="" && !isTel(o["tel"].value)) err+="电话号码格式有误!\n"
	if(o["email"].value!=""){
		if(!/^\S{1,20}\@\S{1,30}\.\S{1,5}$/.test(o["email"].value))err+="邮箱输入有误!\n"
	}
	
	
	
	if(o["validate"].value=="")err+="请填写验证码!\n";
 
	if(err){
		alert(err);
		return false;
	}
	return true;
}


function checkSumit(o){
	o=o.elements;
	var err="";
	if(o["siteurl"].value=="") 
		err+="请填写您的网址!\n";
		
	if(o["linkman"].value=="") 
		err+="请填写联系人!\n";
	
	if(o["tel"].value=="" || o["tel"].value=="0755-89810545" || !isTel(o["tel"].value))
		err+="联系电话为空或号码格式有误!\n";
	
	
	if(o["mobile"].value=="" || !isMobile(o["mobile"].value) ){
		err+="手机号码为空，或手机号码格式有误!\n";
	}
	
	if(o["im"].value=="") err+="请填写联系QQ!\n";
	
	if(o["type"].value==0) err+="请请选择您要解决的问题类型!\n";
	
	if(o["email"].value=="" || o["email"].value=="service@10000idc.net"){
	
		err+="请填写邮箱!\n";o["email"].value="" ;
	}	
	if(o["email"].value!=""){
		 if(!/^\S{1,20}\@\S{1,30}\.\S{1,5}$/.test(o["email"].value) )  err+="邮箱输入有误!\n"
	}	
	if(o["content"].value=="") err+="请填写维护内容!\n";
	
	if(o["validate"].value=="")err+="请填写验证码!\n";
 
	if(err){
		alert(err);
		return false;
	}
	return true;
}



//网站建设 展开 收起
//展开
function openpanel(obj,id){
		var showobj = obj.parent().parent().next("div");
		var hideobj = obj.parent().parent();
		hideobj.slideUp("slow"); 
		showobj.slideDown("slow");
		showobj.attr("status","open");
		hideobj.attr("status","close");		
		//一次横向滚动一个
		
		if(id==1 && openid!=34 && showobj.attr("opened")!="1"){
		showobj.attr("opened","1");
			var pnum2 = $("#caselist1").children("li").length;
			  $("#caselist1").width(pnum2*252);
			  var scroll_cnt2=new Marquee("scroll_cnt1");	
			  scroll_cnt2.Direction="left";
			  scroll_cnt2.Step=1;
			  scroll_cnt2.Width=862;
			  scroll_cnt2.Height=170;
			  scroll_cnt2.Timer=20;
			  scroll_cnt2.ScrollStep=1;				//若为-1则禁止鼠标控制实例
			  scroll_cnt2.Start();
			  scroll_cnt2.BakStep=scroll_cnt2.Step;
			  $(".al1").click(function(){scroll_cnt2.Direction=2;});
			  $(".ar1").click(function(){scroll_cnt2.Direction=3;});
		} 

	if(id==2  && openid!=35 && showobj.attr("opened")!="1" ){	
		showobj.attr("opened","1");	
		var pnum2 = $("#caselist2").children("li").length;
			  $("#caselist2").width(pnum2*252);
			  var scroll_cnt2=new Marquee("scroll_cnt2");	
			  scroll_cnt2.Direction="left";
			  scroll_cnt2.Step=1;
			  scroll_cnt2.Width=862;
			  scroll_cnt2.Height=170;
			  scroll_cnt2.Timer=20;
			  scroll_cnt2.ScrollStep=1;				//若为-1则禁止鼠标控制实例
			  scroll_cnt2.Start();
			  scroll_cnt2.BakStep=scroll_cnt2.Step;
			  $(".al2").click(function(){scroll_cnt2.Direction=2;});
			  $(".ar2").click(function(){scroll_cnt2.Direction=3;});
		}
if(id==3  && openid!=36 && showobj.attr("opened")!="1" ){
showobj.attr("opened","1");		
		var pnum3 = $("#caselist3").children("li").length;
			  $("#caselist3").width(pnum3*252);
			  var scroll_cnt3=new Marquee("scroll_cnt3");	
			  scroll_cnt3.Direction="left";
			  scroll_cnt3.Step=1;
			  scroll_cnt3.Width=862;
			  scroll_cnt3.Height=170;
			  scroll_cnt3.Timer=20;
			  scroll_cnt3.ScrollStep=1;				//若为-1则禁止鼠标控制实例
			  scroll_cnt3.Start();
			  scroll_cnt3.BakStep=scroll_cnt3.Step;
			  $(".al3").click(function(){scroll_cnt3.Direction=2;});
			  $(".ar3").click(function(){scroll_cnt3.Direction=3;});
		}
	if(id==4  && openid!=37 && showobj.attr("opened")!="1" ){	
	showobj.attr("opened","1");
		 var pnum4 = $("#caselist4").children("li").length;
			  $("#caselist4").width(pnum4*252);
			  var scroll_cnt4=new Marquee("scroll_cnt4");	
			  scroll_cnt4.Direction="left";
			  scroll_cnt4.Step=1;
			  scroll_cnt4.Width=862;
			  scroll_cnt4.Height=170;
			  scroll_cnt4.Timer=20;
			  scroll_cnt4.ScrollStep=1;				//若为-1则禁止鼠标控制实例
			  scroll_cnt4.Start();
			  scroll_cnt4.BakStep=scroll_cnt4.Step;
			  $(".al4").click(function(){scroll_cnt4.Direction=2;});
			  $(".ar4").click(function(){scroll_cnt4.Direction=3;});
	}
}
//收起
function closepanel(obj){
	var showobj = obj.parent().parent().prev("div");
	var hideobj = obj.parent().parent();
	hideobj.slideUp("slow"); 
	showobj.slideDown("slow");
	showobj.attr("status","open");
	hideobj.attr("status","close");
}

function popup(popupName){
	var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
	_windowHeight = $(window).height(),//获取当前窗口高度
	_windowWidth = $(window).width(),//获取当前窗口宽度
	_popupHeight = popupName.height(),//获取弹出层高度
	_popupWeight = popupName.width();//获取弹出层宽度
	_posiTop = (_windowHeight - _popupHeight)/2 + _scrollHeight;
	_posiLeft = (_windowWidth - _popupWeight)/2;
	popupName.css({"left": _posiLeft + "px","top":_posiTop + "px","display":"block"});//设置position
}



//切换图片
function changePic(obj){
	$("#bigpic > img").attr("src",obj.src);
}

function  reSizeImage(ImgObj, reWidth, reHeight){
	reWidth = reWidth || 600; reHeight=reHeight || 400;
	var image=new  Image(); image.src=ImgObj.src;
	if(image.width>0 && image.height>0){
		if(image.width / image.height >=  reWidth / reHeight){
			if(image.width > reWidth){
				ImgObj.width  = reWidth;
				ImgObj.height = (image.height * reWidth) / image.width;
			}else{
				 ImgObj.width = image.width;
				 ImgObj.height= image.height;
			}
		}else{
			if(image.height > reHeight){
				ImgObj.height =reHeight;
				ImgObj.width  =(image.width*reHeight) / image.height;
				}else{
					ImgObj.width  =image.width;
					ImgObj.height =image.height;
			}
		}
	}
}


function CopyText(text2copy) { 
   if (window.clipboardData) {   
      window.clipboardData.setData("Text",text2copy);   
   } else {   
      var flashcopier = 'flashcopier';
      if(!document.getElementById(flashcopier)) {
		  var divholder = document.createElement('div');
		  divholder.id = flashcopier;
		  document.body.appendChild(divholder);
      }
     document.getElementById(flashcopier).innerHTML = '';
     var divinfo = '<embed src="/skins/js/ZeroClipboard.swf" FlashVars="clipboard='+text2copy+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';//这里是关键
   	 document.getElementById(flashcopier).innerHTML = divinfo;
   }
}

function copyToClipboard(meintext){
     if (window.clipboardData){
       alert("ie");
       // the IE-manier
       window.clipboardData.setData("Text", meintext);
       
       // waarschijnlijk niet de beste manier om Moz/NS te detecteren;
       // het is mij echter onbekend vanaf welke versie dit precies werkt:
       }
       else if (window.netscape) 
       { 
       
       // dit is belangrijk maar staat nergens duidelijk vermeld:
       // you have to sign the code to enable this, or see notes below 
       netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
       
       // maak een interface naar het clipboard
       var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
       if (!clip) return;
       alert("mozilla");
       // maak een transferable
       var trans = Components.classes['@mozilla.org/widget/transferable;1']
                      .createInstance(Components.interfaces.nsITransferable);
       if (!trans) return;
       
       // specificeer wat voor soort data we op willen halen; text in dit geval
       trans.addDataFlavor('text/unicode');
       
       // om de data uit de transferable te halen hebben we 2 nieuwe objecten 
       // nodig om het in op te slaan
       var str = new Object();
       var len = new Object();
       
       var str = Components.classes["@mozilla.org/supports-string;1"]
                    .createInstance(Components.interfaces.nsISupportsString);
       
       var copytext=meintext;
       
       str.data=copytext;
       
       trans.setTransferData("text/unicode",str,copytext.length*2);
       
       var clipid=Components.interfaces.nsIClipboard;
       
       if (!clip) return false;
       
       clip.setData(trans,null,clipid.kGlobalClipboard);
       
       }
       alert("Following info was copied to your clipboard:\n\n" + meintext);
       return false;
}


//首页border改变
$(document).ready(function(){
	$("#Map area").hover(function(){
		
			for(m=1;m<4;m++){
				$(".index_bg0"+m).css("border","1px solid #FFFFFF");
			}
			var pid = $(this).attr("pid");
			if(pid==1){
				$(".index_bg01").css("border","1px solid #639d2b");
			}else if(pid==2){
				$(".index_bg02").css("border","1px solid #ce7913");
				$(".baidu").css({"border":"1px solid #FFFFFF", "border-bottom":"1px solid #d8d8d8"});
			}else if(pid==3){
				$(".index_bg03").css("border","1px solid #0073ac");
				$(".ec").css({"border":"1px solid #FFFFFF", "border-bottom":"1px solid #d8d8d8"});
			}
	
	
	},function(){


			$(".index_bg01").css("border","1px solid #FFFFFF");
			$(".index_bg02").css("border","1px solid #FFFFFF");
			$(".index_bg03").css("border","1px solid #FFFFFF");
			$(".baidu").css({"border":"1px solid #d8d8d8"});
			$(".ec").css({"border":"1px solid #d8d8d8"});
	
	});
	
	
	/* 下拉 */
	$("#nav ul li").hover(function(){
		$(this).children(".drop").slideDown(100);
		if($(this).children("a").attr("id")!="nav_select")
		$(this).children("a").attr("id","nav_sel");
		$(this).children(".drop").css("z-index",$(".lmenu").css("z-index")+600);
	},function(){
		$(this).children(".drop").hide();
		if($(this).children("a").attr("id")!="nav_select")
		$(this).children("a").removeAttr("id");
	});	
	
});	

