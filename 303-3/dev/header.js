/*
pv糊的独白:
Hello!
我是meowcat studio的前端主程序员，擅长JavaScript
我参与制作多款mcpe的icmod
我是h5游戏cvmH5的主程序员
我是olpak作者之一
我的个人网站pvhu.meowcat.org
我是pv糊，北方四线城市一个普普通通的高中生
我相信
Go on and catch your dream，心若在，梦就在！
欢迎关注我的新浪微博 小喵-pv糊，定期发送作品资讯!



我的贴吧id@水瓶gh666 
本mod由我和hunter移植自pc版的咖啡工坊mod
感谢pc版作者-丸政和梨木大大的支持
感谢我的朋友hunter、jacky对我的支持
感谢小喵工作室meowcat.org的支持
我的个人网站pvhu.meowcat.org正在装修中，预计10月底即可开放，欢迎访问
*/
//IMPORT("directionBlock");
var GUI_BAR_STANDART_SCALE = 3.2;
function print(msg,color) {
	var ctx=Packages.zhekasmirnov.launcher.utils.UIUtils.getContext();
	ctx.runOnUiThread(function(){
		android.widget.Toast.makeText(ctx, new android.text.Html.fromHtml((color==null?"":"<font color=\""+color+"\"> ")+msg), 0).show();
	});
}

