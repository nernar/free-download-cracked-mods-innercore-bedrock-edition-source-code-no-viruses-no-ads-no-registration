var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), Button = android.widget.Button, LinearLayout = android.widget.LinearLayout, RelativeLayout = android.widget.RelativeLayout, PopupWindow = android.widget.PopupWindow, InputType = android.text.InputType,ScrollView = android.widget.ScrollView, KeyEvent = android.view.KeyEvent,TextView = android.widget.TextView, CheckBox = android.widget.CheckBox, LayoutParams = android.view.ViewGroup.LayoutParams, Typeface = android.graphics.Typeface, Array_Java = java.lang.reflect.Array, Float_Java = java.lang.Float, Integer_Java = java.lang.Integer, Switch = android.widget.Switch, BufferedReader=java.io.BufferedReader,InputStreamReader=java.io.InputStreamReader,Toast = android.widget.Toast, Runnable = java.lang.Runnable, URL=java.net.URL,nanoTime = java.lang.System.nanoTime(), Html = android.text.Html,ClipboardManager = android.content.ClipboardManager, SystemClock = android.os.SystemClock, AlarmManager = android.app.AlarmManager, AudioManager = android.media.AudioManager, ToneGenerator = android.media.ToneGenerator, Handler = android.os.Handler, Looper = android.os.Looper, System = java.lang.System, DownloadManager = android.app.DownloadManager, Dialog = android.app.Dialog, ConnectivityManager = android.net.ConnectivityManager, Notification = android.app.Notification, PendingIntent = android.app.PendingIntent, View = android.view.View, ColorDrawable = android.graphics.drawable.ColorDrawable, Color = android.graphics.Color, Gravity = android.view.Gravity, PorterDuff = android.graphics.PorterDuff, Intent = android.content.Intent, DialogInterface = android.content.DialogInterface, DataOutputStream = java.io.DataOutputStream, BufferedReader = java.io.BufferedReader, Thread = java.lang.Thread, TypedValue = android.util.TypedValue, Byte = java.lang.Byte, Context = android.content.Context, Handler = android.os.Handler, TextWatcher = android.text.TextWatcher, FileWriter = java.io.FileWriter, InputStreamReader = java.io.InputStreamReader, SpannableStringBuilder = android.text.SpannableStringBuilder, ImageSpan = android.text.style.ImageSpan, Spannable = android.text.Spannable, StringBuffer = java.lang.StringBuffer, Calendar = java.util.Calendar, Html = android.text.Html, ZipFile = java.util.zip.ZipFile, ByteBuffer = java.nio.ByteBuffer, MediaPlayer = android.media.MediaPlayer, String = java.lang.String, StringBuilder = java.lang.StringBuilder, printWriter = java.io.printWriter,Uri = android.net.Uri, activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), TranslateAnimation = android.view.animation.TranslateAnimation, Animation = android.view.animation.Animation, RotateAnimation = android.view.animation.RotateAnimation, DecelerateInterpolator = android.view.animation.DecelerateInterpolator, LinearInterpolator = android.view.animation.LinearInterpolator, Environment = android.os.Environment, FileInputStream = java.io.FileInputStream, SharedPreferences = android.content.SharedPreferences, numbers = android.text.InputType.TYPE_CLASS_NUMBER, number = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED, ImageView = android.widget.ImageView, EditText = android.widget.EditText, CompoundButton = android.widget.CompoundButton, SeekBar = android.widget.SeekBar, Build = android.os.Build, ProgressBar = android.widget.ProgressBar, ToggleButton = android.widget.ToggleButton, FrameLayout = android.widget.FrameLayout, BitmapFactory = android.graphics.BitmapFactory, ViewGroup = android.view.ViewGroup, GradientDrawable = android.graphics.drawable.GradientDrawable, Bitmap = android.graphics.Bitmap, Canvas = android.graphics.Canvas, Paint = android.graphics.Paint, Path = android.graphics.Path, LinearGradient = android.graphics.LinearGradient, Shader = android.graphics.Shader, MotionEvent = android.view.MotionEvent, BitmapDrawable = android.graphics.drawable.BitmapDrawable, StateListDrawable = android.graphics.drawable.StateListDrawable, ViewTreeObserver = android.view.ViewTreeObserver, ClipDrawable = android.graphics.drawable.ClipDrawable, LightingColorFilter = android.graphics.LightingColorFilter, WindowManager = android.view.WindowManager, DisplayMetrics = android.util.DisplayMetrics, ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager, File = java.io.File, FileOutputStream = java.io.FileOutputStream, Base64 = android.util.Base64,
	survivalview,pvpview,potionview,movementview,exploitview,
	survivalTab = [
		{name:"32k Enchant",id:1,view:"return survivalview",style:"white",menu:false,type:"button",setting:"Protection:32767;Fire Protection:32767;Feather Falling:32767;Blast Protection:32767;Projectile Prot:32767;Thorns:32767;Respiration:32767;Aqua Affinity:32767;Depth Strider:32767;Sharpness:32767;Smite:32767;Bane of Anthropods:32767;Knockback:32767;Fire Aspect:32767;Looting:32767;Efficiency:32767;Silk Touch:32767;Unbreaking:32767;Fortune:32767;Power:32767;Punch:32767;Flame:32767;Infinity:32767;Luck of the Sea:32767;Lure:32767;",call:"Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, survivalTab[0].setting.split(';')[0].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, survivalTab[0].setting.split(';')[1].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, survivalTab[0].setting.split(';')[2].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, survivalTab[0].setting.split(';')[3].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, survivalTab[0].setting.split(';')[4].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, survivalTab[0].setting.split(';')[5].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, survivalTab[0].setting.split(';')[6].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, survivalTab[0].setting.split(';')[7].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, survivalTab[0].setting.split(';')[8].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, survivalTab[0].setting.split(';')[9].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, survivalTab[0].setting.split(';')[10].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, survivalTab[0].setting.split(';')[11].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, survivalTab[0].setting.split(';')[12].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, survivalTab[0].setting.split(';')[13].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, survivalTab[0].setting.split(';')[14].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, survivalTab[0].setting.split(';')[15].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, survivalTab[0].setting.split(';')[16].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, survivalTab[0].setting.split(';')[17].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, survivalTab[0].setting.split(';')[18].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, survivalTab[0].setting.split(';')[19].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, survivalTab[0].setting.split(';')[20].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, survivalTab[0].setting.split(';')[21].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, survivalTab[0].setting.split(';')[22].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, survivalTab[0].setting.split(';')[23].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, survivalTab[0].setting.split(';')[24].split(':')[1]); "},
		{name:"Optifine",type:"button",state:false,keystate:false,call:"survivalTab[1].state?ModPE.setFov(20):ModPE.resetFov()"},
		{name:"Coordinates",rp:"tick",type:"button",state:false,call:"if(survivalTab[2].state){if(!dataWin){displayData()}}else if(!survivalTab[2].state&&!pvpTab[9].state && !exploitTab[19].state){dataView.dismiss();dataWin=false;}var tempCoordtxt = ' X:' + Math.floor(Player.getX()) + '  Y:' + Math.floor(Player.getY() - 1) + '  Z:' + Math.floor(Player.getZ()); ctx.runOnUiThread( new java.lang.Runnable({ run: function() { try { coordsView.setText(tempCoordtxt);if(!survivalTab[2].state&&dataWin){coordsView.setText('');} } catch (err) {clientMessage(err);} } }));"}, 		
		{name:"Nether Coordinates",rp:"tick",type:"switch",state:false,call:"Player.getDimension()==1?(ModPE.showTipMessage(ChatColor.RED +'In NetherL '+ChatColor.YELLOW+'Overworld Location - '+ChatColor.WHITE + 'X:' + Math.floor(Player.getX())*8 +'  Y:' + Math.floor(Player.getY() - 2) +'  Z:' + Math.floor(Player.getZ())*8)):(ModPE.showTipMessage(ChatColor.RED +'Not in Nether: '+ChatColor.YELLOW+'Overworld Coords: '+ChatColor.WHITE + 'X:' + Math.floor(Player.getX()) + '  Y:' + Math.floor(Player.getY() - 1) + '  Z:' + Math.floor(Player.getZ())));"},
		{name:"Clear Weather",rp:"tick",type:"switch",state:false,call:"Level.setRainLevel(0);Level.setLightningLevel(0);"},
		{name:"Always Day",rp:"tick",type:"switch",state:false,call:"Level.setTime(1200);"},
		{name:"Always Night",rp:"tick",type:"switch",state:false,call:"Level.setTime(17000);"},
		{name:"Rename Item",style:"white",type:"button",state:false,setting:"name: ;",call:"tempString='';openSetting(parseInt(7),survivalTab);"},
		{name:"Light Trail",keystate:false,type:"switch",setting:"Light Level (1-15):15;",rp:"tick",state:false,call:"var lightmeta = parseInt(survivalTab[8].setting.split(';')[0].split(':')[1]);if(lightmeta<=15&&lightmeta>=1){setTile(getPlayerX(),getPlayerY(),getPlayerZ(),-215,lightmeta);}else{clientMessage('Light Level too high or too low');}"},
		{name:"Xray Top",state:false,type:"button",call:"if(survivalTab[9].state){Block.setShape(1, null,null,null, 1,.005,1);Block.setShape(13, null,null,null, 1,.005,1);Block.setShape(3, null,null,null, 1,.005,1);Block.setShape(87, null,null,null, 1,.005,1);Block.setShape(121, null,null,null, 1,.005,1);Block.setShape(1, null,.95,null, 1,1,1);Block.setShape(13, null,.95,null, 1,1,1);Block.setShape(3, null,.95,null, 1,1,1);Block.setShape(2, null,.95,null, 1,1,1);Block.setShape(87, null,.95,null, 1,1,1);Block.setShape(121, null,.95,null, 1,1,1);Block.setRenderLayer(2, 1);Block.setRenderLayer(1, 1);Block.setLightLevel(16, 15);Block.setLightLevel(15, 15);Block.setLightLevel(56, 15);Block.setLightLevel(21, 15);Block.setLightLevel(73, 15);Block.setLightLevel(129, 15);Block.setLightLevel(153, 15);Block.setLightLevel(16, 15);Block.setRenderLayer(16, 0);Block.setShape(16, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(15, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(56, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(21, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(73, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(129, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(153, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);}else{	Block.setShape(1, 0, 0, 0, 1, 1, 1);Block.setShape(13, 0, 0, 0, 1, 1, 1);Block.setShape(3, 0, 0, 0, 1, 1, 1);Block.setShape(2, 0, 0, 0, 1, 1, 1);Block.setShape(87, 0, 0, 0, 1, 1, 1);Block.setShape(121, 0, 0, 0, 1, 1, 1);}"},
		{name:"Xray Bottom",state:false,type:"button",call:"if(survivalTab[10].state){	Block.setShape(1, null,null,null, 1,.005,1);	Block.setShape(13, null,null,null, 1,.005,1);	Block.setShape(3, null,null,null, 1,.005,1);	Block.setShape(87, null,null,null, 1,.005,1);	Block.setShape(121, null,null,null, 1,.005,1);	Block.setShape(1, null,null,null, 1,.00005,1);Block.setShape(13, null,null,null, 1,.00005,1);Block.setShape(3, null,null,null, 1,.00005,1);Block.setShape(87, null,null,null, 1,.00005,1);Block.setShape(121, null,null,null, 1,.00005,1);Block.setRenderLayer(2, 1);Block.setRenderLayer(1, 1);Block.setLightLevel(16, 15);Block.setLightLevel(15, 15);Block.setLightLevel(56, 15);Block.setLightLevel(21, 15);Block.setLightLevel(73, 15);Block.setLightLevel(129, 15);Block.setLightLevel(153, 15);Block.setLightLevel(16, 15);Block.setRenderLayer(16, 0);Block.setShape(16, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(15, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(56, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(21, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(73, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(129, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);Block.setShape(153, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);}else{	Block.setShape(1, 0, 0, 0, 1, 1, 1);Block.setShape(13, 0, 0, 0, 1, 1, 1);Block.setShape(3, 0, 0, 0, 1, 1, 1);Block.setShape(2, 0, 0, 0, 1, 1, 1);Block.setShape(87, 0, 0, 0, 1, 1, 1);Block.setShape(121, 0, 0, 0, 1, 1, 1);}"}
	],
	pvpTab = [
		{name:"Aimbot",id:2,rp:"tick",type:"switch",state:false,keystate:false,view:"return pvpview",menu:false,setting:"range:17;",call:"aimEnt(getNearEnt(pvpTab[0].setting.split(';')[0].split(':')[1],true))"},
		{name:"Hitbox",rp:"tick",type:"button",state:false,keystate:false,setting:"width:10;height:10;range:17;",call:"function resetBoxes(){var playerArrayName = []; for(var i = 0; i < Server.getAllPlayers().length; i++){ playerArrayName.push([Server.getAllPlayerNames()[i]]); }playerArrayName.forEach(function(entry, index){ Entity.setCollisionSize(Server.getAllPlayers()[playerArrayName.indexOf(entry)], 0.6, 1.8); });}pvpTab[1].state?(Entity.setCollisionSize(getNearEnt(pvpTab[1].setting.split(';')[2].split(':')[1],true), pvpTab[1].setting.split(';')[0].split(':')[1], pvpTab[1].setting.split(';')[1].split(':')[1])):(resetBoxes())"},
		{name:"Auto Totem",rp:"t10",type:"switch",state:false,call:"if(Entity.getOffhandSlotCount(getPlayerEnt())!==450){Entity.setOffhandSlot(getPlayerEnt(), 450, 1, 0);}"},
		{name:"FOV",type:"button",setting:"fovSeek:130;",state:false,call:"pvpTab[3].state?ModPE.setFov(parseInt(pvpTab[3].setting.split(';')[0].split(':')[1])):ModPE.resetFov();"},
		{name:"Name Stats",rp:"tick",type:"switch",state:false,call:"var players = Server.getAllPlayers(); players.forEach(function (entry){ if(Entity.getNameTag(entry)!==null){ if(Entity.getNameTag(entry).includes(',')){ if(Entity.getNameTag(entry).split(',')[0]==''&getTile(Entity.getX(entry), Entity.getY(entry) - 2, Entity.getZ(entry))!=0){ setTile(Entity.getX(entry),Entity.getY(entry)-2,Entity.getZ(entry),35,2); } var entityOriName = Entity.getNameTag(entry).split(',')[0]; Entity.setNameTag(entry, entityOriName+','+newLine()+Entity.getHealth(entry)+'/'+Entity.getMaxHealth(entry)+newLine()+Item.getName(Entity.getCarriedItem(entry), Entity.getCarriedItemData(entry), false)+':'+Entity.getCarriedItemData(entry)); }else{  Entity.setNameTag(entry, Entity.getNameTag(entry)+','+newLine()+Entity.getHealth(entry)+'/'+Entity.getMaxHealth(entry)+newLine()+Item.getName(Entity.getCarriedItem(entry), Entity.getCarriedItemData(entry), false)+':'+Entity.getCarriedItemData(entry)); }} })"},
		{name:"ESP",type:"switch",setting:"red:255;green:0;blue:0;Enable Rainbow (true/false):true;",state:false,call:"ESP2.Render.init();"},
		{name:"Blast Aura",type:"switch",rp:"atthook",keystate:false,state:false,call:"var hit = getYaw() + 90; var hitY = getPitch() - 180; x = Math.cos(hit * (Math.PI / 180)); y = Math.sin(hitY * (Math.PI / 180)); z = Math.sin(hit * (Math.PI / 180)); setVelX(Player.getEntity(), x * 2); setVelY(Player.getEntity(), y * 0.6); setVelZ(Player.getEntity(), z * 2); "},
		{name:"Crosshair",type:"button",setting:"size:25;",state:false,call:"function showCrosshair() { ctx.runOnUiThread(new Runnable({ run: function() { try { var layout = new LinearLayout(ctx); GUIcc = new PopupWindow(layout, dip2px(pvpTab[7].setting.split(';')[0].split(':')[1]), dip2px(pvpTab[7].setting.split(';')[0].split(':')[1])); GUIcc.setTouchable(false); GUIcc.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(crosshairicon, 0), 0, android.util.Base64.decode(crosshairicon, 0).length))); GUIcc.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0); GUIcc.setTouchable(false); } catch (e) { } } })); };if(pvpTab[7].state){showCrosshair()}else{GUIcc.dismiss()}"},
		{name:"Hover Aura",rp:"threaded",type:"switch",keystate:false,setting:"height:0.905;",state:false,call:"var ent = getNearEnt(4,true); if (ent != null && Player.getName(ent) != '' && Player.getName(ent) != ' ' && Player.getName(ent)) { Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + parseFloat(pvpTab[8].setting.split(';')[0].split(':')[1]), getPlayerZ()); var playerDir = [0, 0, 0]; toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1); setVelX(getPlayerEnt(), 0.3 * playerDir[0]); setVelZ(getPlayerEnt(), 0.3 * playerDir[2]); if (Entity.getVelY(getPlayerEnt()) < -0.5){ setVelY(Player.getEntity(), 0.00000); }} var ent = getNearEnt(6); if (ent != null) {aimEnt(ent)}; "},
		{name:"Locator",type:"button",rp:"tick",state:false,call:"if(pvpTab[9].state){if(!dataWin){displayData()}}else if(!pvpTab[9].state&&!survivalTab[2].state && !exploitTab[19].state){dataView.dismiss();dataWin=false;}var ent = getNearEnt(300), tempLocatetxt; if (Player.getName(ent) != 'Steve'&&Player.getName(ent) != 'Not a player'&&Entity.getY(ent)!==0&&Entity.getX(ent)!==0&&Entity.getZ(ent)!==0){ tempLocatetxt = 'Player Found: '+Player.getName(ent).substring(0, 30)+newLine()+' @ '+Math.floor(Entity.getX(ent))+', '+Math.floor(Entity.getY(ent))+', '+Math.floor(Entity.getZ(ent))+newLine()+' ['+Math.floor(getDist(ent))+' Blocks]'}else {tempLocatetxt = 'No Players Near'; }		 ctx.runOnUiThread( new java.lang.Runnable({ run: function() { try { locateView.setText(tempLocatetxt);if(!pvpTab[9].state&&dataWin){locateView.setText('');} } catch (err) {clientMessage(err);} } }));"}, 		
		{name:"Hit Aim",type:"switch",rp:"attusehook",keystate:false,state:false,call:"if(vic!=0){aimEnt(vic);}else{var ent = getNearEnt(10);if(ent!=null){aimEnt(ent);}}"},
		{name:"Tracers",type:"switch",setting:"red:255;green:0;blue:0;Enable Rainbow (true/false):true;",state:false,call:"ESP2.Render.init();"},
		{name:"Behind",rp:"tick",type:"switch",setting:"range:10;gap:2;",keystate:false,state:false,call:"var target=getNearEnt(pvpTab[12].setting.split(';')[0].split(':')[1],true);var dirV = cueCoord(Entity.getYaw(target)+180, 0); if(Entity.getX(target)!=0&&Entity.getZ(target)!=0){ if (getPlayerX() + (dirV.x * 3) - Entity.getX(getPlayerEnt()) > 0.5 || getPlayerX() + (dirV.x * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getX(getPlayerEnt()) < -0.5 || getPlayerY() + (dirV.y * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt()) > 0.5 || getPlayerY() + (dirV.y * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt()) < -0.5 || getPlayerZ() + (dirV.z * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt()) > 0.5 || getPlayerZ() + (dirV.z * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt()) < -0.5) { Entity.setVelX(getPlayerEnt(), (Entity.getX(target) + (dirV.x * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getX(getPlayerEnt())) / 5); if(!movementTab[13].state){Entity.setVelY(getPlayerEnt(), (Entity.getY(target) + (dirV.y * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt())) / 5);} Entity.setVelZ(getPlayerEnt(), (Entity.getZ(target) + (dirV.z * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt())) / 5); } else { Entity.setVelX(getPlayerEnt(), 0); Entity.setVelY(getPlayerEnt(), 0); Entity.setVelZ(getPlayerEnt(), 0);}}"},
		{name:"No Knockback",rp:"tick",defHealth:20,tickDelay:20,type:"switch",state:false,call:"pvpTab[13].tickDelay--; if(pvpTab[13].tickDelay==0){ pvpTab[13].tickDelay=20; pvpTab[13].defHealth=Entity.getHealth(getPlayerEnt()); } if(pvpTab[13].defHealth>Entity.getHealth(getPlayerEnt())){ setVelY(Player.getEntity(), 0); setVelX(Player.getEntity(), 0); setVelZ(Player.getEntity(), 0); pvpTab[13].defHealth=Entity.getHealth(getPlayerEnt());}"},
		{name:"Key Aimbot",rp:"threaded",display:"hidden",type:"switch",state:false,keystate:false,call:"aimEnt(getNearEnt(17,true),true,true);"},
		{name:"Circle",rp:"tick",fakeYaw:0,type:"switch",setting:"range:10;gap:7;",keystate:false,state:false,call:"var target = getNearEnt(pvpTab[15].setting.split(';')[0].split(':')[1], true);var fakeYaw = pvpTab[15].fakeYaw;if(inRange(fakeYaw, -180, 180)){fakeYaw=fakeYaw+18}if(fakeYaw>180){fakeYaw=-168}pvpTab[15].fakeYaw=fakeYaw;var dirV = cueCoord(fakeYaw, 0);if (Entity.getX(target) != 0 && Entity.getZ(target) != 0) {    if (getPlayerX() + (dirV.x * 3) - Entity.getX(getPlayerEnt()) > 0.5 || getPlayerX() + (dirV.x * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getX(getPlayerEnt()) < -0.5 || getPlayerY() + (dirV.y * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt()) > 0.5 || getPlayerY() + (dirV.y * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt()) < -0.5 || getPlayerZ() + (dirV.z * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt()) > 0.5 || getPlayerZ() + (dirV.z * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt()) < -0.5) {        Entity.setVelX(getPlayerEnt(), (Entity.getX(target) + (dirV.x * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getX(getPlayerEnt())) / 5);        if (!movementTab[12].state) {            Entity.setVelY(getPlayerEnt(), (Entity.getY(target) + (dirV.y * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt())) / 5);        }        Entity.setVelZ(getPlayerEnt(), (Entity.getZ(target) + (dirV.z * pvpTab[15].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt())) / 5);    } else {        Entity.setVelX(getPlayerEnt(), 0);        Entity.setVelY(getPlayerEnt(), 0);        Entity.setVelZ(getPlayerEnt(), 0);    }}"},
		{name:"Tracers Crosshair",type:"switch",setting:"red:255;green:0;blue:0;Enable Rainbow (true/false):true;",state:false,call:"ESP.Render.init();"},
		{name:"Trigger Bot",optionSensitive:true,type:"switch",keystate:false,setting:"CPS:35;",delayedStart:true,state:false,rp:"delayedthread",call:"if(!needR&&blInForeground()){if(Entity.getEntityTypeId(Player.getPointedEntity()) !== 0)inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q);}"},
		{name:"Bow Zoom",state:false,rp:"tick",setting:"zoom:20;",type:"switch",call:"if(getCarriedItem() == 261||getCarriedItem() == 471){ModPE.setFov(parseInt(pvpTab[18].setting.split(';')[0].split(':')[1]))}else{if(pvpTab[3].state){ModPE.setFov(parseInt(pvpTab[3].setting.split(';')[0].split(':')[1]))}else{ModPE.resetFov();}}"},
		{name:"Inside Aura",state:false,rp:"tick",setting:"height:-0.5;range:10;",keystate:false,type:"switch",call:"var target=getNearEnt(pvpTab[19].setting.split(';')[1].split(':')[1],true);if(Entity.getY(target)!==0){Entity.setPosition(getPlayerEnt(),Entity.getX(target),Entity.getY(target)+parseInt(pvpTab[19].setting.split(';')[0].split(':')[1]),Entity.getZ(target))}"},
		{name:"Auto Sword",state:false,rp:"tick",setting:"range:10;",keystate:false,type:"switch",swordDamage:0,call:"var target=getNearEnt(pvpTab[20].setting.split(';')[0].split(':')[1],true);if(Entity.getY(target)!==0){	pvpTab[20].swordDamage = 0;	for (var i=0;i<10;i++) {		if(itemDamage(Player.getInventorySlot(i))>pvpTab[20].swordDamage){			pvpTab[20].swordDamage = itemDamage(Player.getInventorySlot(i));			Player.setSelectedSlotId(i);		}	}}"}
	],
	potionTab = [
		{name:"Night Vision",id:3,effect:MobEffect.nightVision,type:"button",state:false,view:"return potionview",menu:false,setting:"amp:255;duration:999999;",call:"effect(0)"},
		{name:"Haste",effect:MobEffect.digSpeed,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(1)"},
		{name:"Mining Fatigue",effect:MobEffect.digSlowdown,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(2)"},
		{name:"Levitation",effect:MobEffect.levitation,type:"button",state:false,setting:"amp:3;duration:999999;",call:"effect(3)"},
		{name:"Jump Boost",effect:MobEffect.jump,type:"button",state:false,setting:"amp:4;duration:999999;",call:"effect(4)"},
		{name:"Nausea",effect:MobEffect.confusion,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(5)"},
		{name:"Blindness",effect:MobEffect.blindness,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(6)"},
		{name:"Invisibility",effect:MobEffect.invisibility,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(7)"},
		{name:"Absorption",effect:MobEffect.absorption,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(8)"},
		{name:"Health Boost",effect:MobEffect.healthBoost,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(9)"},
		{name:"Wither",effect:MobEffect.wither,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(10)"},
		{name:"Poison",effect:MobEffect.poison,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(11)"},
		{name:"Weakness",effect:MobEffect.weakness,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(12)"},
		{name:"Hunger",effect:MobEffect.hunger,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(13)"},
		{name:"Water Breathing",effect:MobEffect.waterBreathing,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(14)"},
		{name:"Fire Resistance",effect:MobEffect.fireResistance,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(15)"},
		{name:"Resistance",effect:MobEffect.damageResistance,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(16)"},
		{name:"Strength",effect:MobEffect.damageBoost,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(17)"},
		{name:"Slowness",effect:MobEffect.movementSlowdown,type:"button",state:false,setting:"amp:255;duration:999999;",call:"effect(18)"},
		{name:"Swiftness",effect:MobEffect.movementSpeed,type:"button",state:false,setting:"amp:20;duration:999999;",call:"effect(19)"},
		{name:"Heal",style:"white",effect:MobEffect.heal,type:"button",call:"Entity.addEffect(Player.getEntity(), MobEffect.heal, 999999, 2000, false, false);"},
		{name:"Experience",style:"white",setting:"experience:100000000;",type:"button",call:"Player.addExp(parseInt(potionTab[21].setting.split(';')[0].split(':')[1]))"},
		{name:"Remove All",style:"white",type:"button",call:"effect(19,true)"}
	],
	movementTab = [
		{name:"Fly",id:4,type:"button",state:false,view:"return movementview",menu:false,call:"movementTab[0].state?Player.setCanFly(1):Player.setCanFly(0)"},
		{name:"No Fall Damage",rp:"t10",type:"switch",state:false,keystate:false,setting:"sensitivity:-0.5;",call:"Entity.getVelY(getPlayerEnt())<parseFloat(movementTab[1].setting.split(';')[0].split(':')[1])?setVelY(Player.getEntity(), 0.00000):''"},
		{name:"NoClip",rp:"t10",type:"button",state:false,delayedStart:true,keystate:false,setting:"speed:0.12;",call:"if(movementTab[2].state){var speed = parseFloat(movementTab[2].setting.split(';')[0].split(':')[1]);Entity.setCollisionSize(getPlayerEnt(), 0, 0);setVelY(getPlayerEnt(), 0.00000000000001);toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);var player = getPlayerEnt();setPosition(getPlayerEnt(), Player.getX() + (speed * playerDir[0]), Player.getY() + (speed * playerDir[1]), Player.getZ() + (speed * playerDir[2]))}else{ Entity.setCollisionSize(getPlayerEnt(), 0.6, 1.8);}"},
		{name:"Glide",rp:"tick",type:"switch",state:false,keystate:false,call:"var serverip = Server.getAddress(); if(serverip==null){serverip='offline';}if(serverip.indexOf('amazo') >= 0||serverip=='offline'){if (Entity.getVelY(getPlayerEnt()) < -0.1 && !Player.isFlying()) { setVelY(Player.getEntity(), -1);} if (Entity.getVelY(getPlayerEnt()) < -0.1) { setVelY(Player.getEntity(), 0.0001); }}else{setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 0.1899, getPlayerZ()); setVelY(getPlayerEnt(), -0.2); } "},
		{name:"Magic Carpet",rp:"tick",type:"button",state:false,keystate:false,call:"if(movementTab[4].state){blocksToReplaceX = []; blocksToReplaceY = []; blocksToReplaceZ = [];  playerX = getPlayerX(); playerY = getPlayerY(); playerZ = getPlayerZ(); for(x = -2;x<=2;x++){ for(z = -2;z<=2;z++){ if(!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)){ var tile = Level.getTile(Math.round(x+playerX),Math.round(playerY-3),Math.round(z+playerZ)); if((tile == 0||tile == 241)){ blocksToReplaceX.push(Math.round(x+playerX)); blocksToReplaceY.push(Math.round(playerY-3)); blocksToReplaceZ.push(Math.round(z+playerZ)); } } } } if(blocksReplacedX!=null){ blocksToSkip = [];  for(m = 0;m < blocksReplacedX.length;m++){ for(j = 0;j < blocksToReplaceX.length;j++){ if(blocksReplacedX[m] == blocksToReplaceX[j] && blocksReplacedY[m] == blocksToReplaceY[j] && blocksReplacedZ[m] == blocksToReplaceZ[j]){ blocksToSkip.push(m); } } }   var currentTile; for(m = 0;m < blocksReplacedX.length;m++){ if(blocksToSkip.indexOf(m)<0){ currentTile = getTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m]); if(currentTile == 241){ if(Level.getData(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m])==10){ setTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m],0); }} } } }  blocksReplacedX = []; blocksReplacedY = []; blocksReplacedZ = [];  for(m = 0;m < blocksToReplaceX.length;m++){	 setTile(blocksToReplaceX[m],blocksToReplaceY[m],blocksToReplaceZ[m],241,10); }  for(m = 0;m < blocksToReplaceX.length;m++){ blocksReplacedX.push(blocksToReplaceX[m]); blocksReplacedY.push(blocksToReplaceY[m]); blocksReplacedZ.push(blocksToReplaceZ[m]); }}else{blocksToReplaceX = []; blocksToReplaceY = []; blocksToReplaceZ = [];  playerX = getPlayerX(); playerY = getPlayerY(); playerZ = getPlayerZ(); for(x = -2;x<=2;x++){ for(z = -2;z<=2;z++){ if(!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)){ var tile = Level.getTile(Math.round(x+playerX),Math.round(playerY-3),Math.round(z+playerZ)); } } } if(blocksReplacedX!=null){ blocksToSkip = [];  for(m = 0;m < blocksReplacedX.length;m++){ for(j = 0;j < blocksToReplaceX.length;j++){ if(blocksReplacedX[m] == blocksToReplaceX[j] && blocksReplacedY[m] == blocksToReplaceY[j] && blocksReplacedZ[m] == blocksToReplaceZ[j]){ blocksToSkip.push(m); } } }   var currentTile; for(m = 0;m < blocksReplacedX.length;m++){ if(blocksToSkip.indexOf(m)<0){ currentTile = getTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m]); if(currentTile == 241){ if(Level.getData(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m])==10){ setTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m],0); }} } } }  blocksReplacedX = []; blocksReplacedY = []; blocksReplacedZ = [];    for(m = 0;m < blocksToReplaceX.length;m++){ blocksReplacedX.push(blocksToReplaceX[m]); blocksReplacedY.push(blocksToReplaceY[m]); blocksReplacedZ.push(blocksToReplaceZ[m]); }}"},
		{name:"No Void",rp:"tick",type:"switch",state:false,call:"if ((Math.floor(Player.getY() - 1))<3){ var serverip = Server.getAddress(); if(serverip==null){serverip='offline';} if(serverip.indexOf('amazo') >= 0||serverip=='offline'){ Entity.setPosition(Player.getEntity(), Player.getX()+1, 20, Player.getZ()); var px = Player.getX(); var pz = Player.getZ(); for(var i = 256.0;i>0.0;i--) { if(Level.getTile(px, i, pz) != 0) { Entity.setPosition(Player.getEntity(), px, i + 3, pz); break; } } }else{ setVelY(Player.getEntity(), 0.1); } }"},
		{name:"Ice Speed",type:"button",state:false,call:"function speedBypass(){ for(var i = 0; i < 406; i++){ Block.setFriction(i, 0.3); } };function resetSpeed() { for(var i = 0; i < 406; i++){ Block.setFriction(i, 0.6000000238418579); } Block.setFriction(79, .4); Block.setFriction(174, .4); Block.setFriction(207, .4); Block.setFriction(266, .4); };movementTab[6].state?(speedBypass()):(resetSpeed())"},
		{name:"Gamespeed",type:"button",setting:"gamespeed:50;",state:false,call:"movementTab[7].state?(ModPE.setGameSpeed(movementTab[7].setting.split(';')[0].split(':')[1])):(ModPE.setGameSpeed(20))"},
		{name:"Teleport",type:"button",style:"white",setting:"x:0;y:60;z:10;",call:"function arr(){return movementTab};openSetting(8,arr(),'teleport')"},
		{name:"Tap TP",rp:"usehook",keystate:false,type:"switch",state:false,call:"if(Player.getPointedBlockY()+3!=0)setPosition(getPlayerEnt(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())"},
		{name:"Jump",keystate:false,rp:"kb",style:"white",type:"button",setting:"intensity:0.50;",call:"setVelY(getPlayerEnt(), movementTab[10].setting.split(';')[0].split(':')[1]);"},
		{name:"Boost",style:"white",keystate:false,rp:"kb",type:"button",setting:"intensity:12;",call:"toDirectionalVector(playerDir, (getYaw()+90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1); setVelX(getPlayerEnt(), movementTab[11].setting.split(';')[0].split(':')[1] * playerDir[0]); setVelZ(getPlayerEnt(), movementTab[11].setting.split(';')[0].split(':')[1] * playerDir[2]); setVelY(getPlayerEnt(), 1 * playerDir[1]);"},
		{name:"No Down Glide",rp:"tick",keystate:false,type:"switch",state:false,call:"setVelY(getPlayerEnt(), 0);"},
		{name:"Elevator",disablerp:false,rp:"kb",style:"white",keystate:false,type:"button",call:"Entity.setPositionRelative(getPlayerEnt(), 0, +2, 0);setVelY(Player.getEntity(), 0);"},
		{name:"Elevator Down",disablerp:false,rp:"kb",display:"hidden",keystate:false,type:"button",call:"Entity.setPositionRelative(getPlayerEnt(), 0, -1, 0);setVelY(Player.getEntity(), 0);"},
		{name:"Long Jump",rp:"tick",keystate:false,state:false,setting:"intensity:1.09;",type:"switch",call:"setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * movementTab[15].setting.split(';')[0].split(':')[1]); setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * movementTab[15].setting.split(';')[0].split(':')[1]);"},
		{name:"Auto Jump",optionSensitive:true,type:"switch",keystate:false,delayedStart:true,state:false,rp:"threaded",call:"inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_SPACE);"},		
		{name:"TP to Nearest",keystate:false,rp:"kb",style:"white",type:"button",call:"var ent = getNearEnt(300);if (Player.getName(ent) !== 'Steve' && Player.getName(ent) !== 'Not a player') {Entity.setPosition(getPlayerEnt(), Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent));} else {print('No Players Near');}"}
	],
	exploitTab = [
		{name:"Dupe",id:5,style:"white",type:"button",view:"return exploitview",menu:false,call:"if(Server.getAddress()!=null){ if(Player.getItemCustomName(Player.getCarriedItem())==null){ Player.setItemCustomName(Player.getSelectedSlotId(),Item.getName(Player.getCarriedItem(),Player.getCarriedItemData()) + '' + Math.floor(Math.random() * 1000)); }else{ Player.setItemCustomName(Player.getSelectedSlotId(),Item.getName(Player.getCarriedItem(),Player.getCarriedItemData())+ '' +Math.floor(Math.random() * 1000)); } clientMessage('Move item to the inventory crafting section.'); }else{Player.addItemInventory(Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());}"},
		{name:"Foil",type:"button",state:false,call:"function enableFoil(){for(var i = 255; i < 406; i++){ if(i!=326&i!=327&i!=343&i!=382&i!=282){ Item.setProperties(i, { 'foil': true, 'hover_text_color': 'light_purple', }); }};}function disableFoil(){for(var i = 255; i < 406; i++){ if(i!=326&i!=327&i!=343&i!=382&i!=282){ Item.setProperties(i, { 'foil': false, 'hover_text_color': 'light_purple', }); }}}exploitTab[1].state?enableFoil():disableFoil()"},
		{name:"Break Bedrock",type:"button",state:false,call:"exploitTab[2].state?(Block.setDestroyTime(7, 0.01), Block.setDestroyTime(137, 0.01), Block.setDestroyTime(188, 0.01), Block.setDestroyTime(189, 0.01), Block.setDestroyTime(209, 0.01), Block.setDestroyTime(90, 0.01), Block.setDestroyTime(119, 0.01),Block.setDestroyTime(120, 0.01), Block.setDestroyTime(-161, 0.01)):(Block.setDestroyTime(7, -10), Block.setDestroyTime(137, -10), Block.setDestroyTime(188, -10), Block.setDestroyTime(189, -10), Block.setDestroyTime(209, -10), Block.setDestroyTime(90, -10), Block.setDestroyTime(119, -10), Block.setDestroyTime(120, -10), Block.setDestroyTime(-161, -10))"},
		{name:"Fast Eat",type:"button",state:false,call:"exploitTab[3].state?(Item.setProperties(260, { 'use_duration': 1, 'food': { 'nutrition': 4, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(322, { 'stack_by_data': true, 'use_duration': 1, 'foil': false, 'food': { 'nutrition': 4, 'saturation_modifier': 'supernatural', 'is_meat': false, 'effects': [{ 'name': 'regeneration', 'chance': 1.0, 'duration': 5, 'amplifier': 1 }, { 'name': 'absorption', 'chance': 1.0, 'duration': 120, 'amplifier': 0 }], 'enchanted_effects': [{ 'name': 'regeneration', 'chance': 0.66, 'duration': 30, 'amplifier': 4 }, { 'name': 'absorption', 'chance': 0.66, 'duration': 120, 'amplifier': 0 }, { 'name': 'resistance', 'chance': 0.66, 'duration': 300, 'amplifier': 0 }, { 'name': 'fire_resistance', 'chance': 0.66, 'duration': 300, 'amplifier': 0 }] } }),Item.setProperties(260, { 'use_duration': 1, 'max_stack_size': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': false, 'using_converts_to': 'bowl' } }),Item.setProperties(297, { 'use_duration': 1, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(319, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(320, { 'use_duration': 1, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(349, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(460, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(461, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(462, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'poison', 'duration': 60, 'amplifier': 3 }, { 'name': 'nausea', 'duration': 15, 'amplifier': 1 }, { 'name': 'hunger', 'duration': 15, 'amplifier': 2 }] } }),Item.setProperties(350, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'eat_sound': 'random.burp', 'is_meat': true } }),Item.setProperties(463, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(360, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': false } }),Item.setProperties(357, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(363, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(364, { 'use_duration': 1, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(365, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.3, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(366, { 'use_duration': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(423, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(424, { 'use_duration': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(367, { 'use_duration': 1, 'food': { 'nutrition': 4, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.8, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(375, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'good', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 1.0, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(391, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'normal', 'is_meat': false }, 'seed': { 'crop_result': 'carrots', 'plant_at': 'farmland' } }),Item.setProperties(392, { 'use_duration': 1, 'food': { 'nutrition': 1, 'saturation_modifier': 'low', 'is_meat': false }, 'seed': { 'crop_result': 'potatoes', 'plant_at': 'farmland' } }),Item.setProperties(393, { 'use_duration': 1, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(394, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 0.6, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(396, { 'use_duration': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'supernatural', 'is_meat': false } }),Item.setProperties(400, { 'use_duration': 1, 'food': { 'nutrition': 8, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(411, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(412, { 'use_duration': 1, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(413, { 'use_duration': 1, 'max_stack_size': 1, 'food': { 'nutrition': 10, 'saturation_modifier': 'normal', 'using_converts_to': 'bowl', 'is_meat': true } }),Item.setProperties(459, { 'use_duration': 1, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(457, { 'use_duration': 1, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': false } })):(Item.setProperties(260, { 'use_duration': 32, 'food': { 'nutrition': 4, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(260, { 'use_duration': 32, 'max_stack_size': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': false, 'using_converts_to': 'bowl' } }),Item.setProperties(297, { 'use_duration': 32, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(319, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(320, { 'use_duration': 32, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(349, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(460, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(461, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(462, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'poison', 'duration': 60, 'amplifier': 3 }, { 'name': 'nausea', 'duration': 15, 'amplifier': 1 }, { 'name': 'hunger', 'duration': 15, 'amplifier': 2 }] } }),Item.setProperties(350, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'eat_sound': 'random.burp', 'is_meat': true } }),Item.setProperties(463, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(360, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': false } }),Item.setProperties(357, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(363, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(364, { 'use_duration': 32, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(365, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.3, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(366, { 'use_duration': 32, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(423, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(424, { 'use_duration': 32, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(367, { 'use_duration': 32, 'food': { 'nutrition': 4, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.8, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(375, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'good', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 1.0, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(391, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'normal', 'is_meat': false }, 'seed': { 'crop_result': 'carrots', 'plant_at': 'farmland' } }),Item.setProperties(392, { 'use_duration': 32, 'food': { 'nutrition': 1, 'saturation_modifier': 'low', 'is_meat': false }, 'seed': { 'crop_result': 'potatoes', 'plant_at': 'farmland' } }),Item.setProperties(393, { 'use_duration': 32, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(394, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 0.6, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(396, { 'use_duration': 32, 'food': { 'nutrition': 6, 'saturation_modifier': 'supernatural', 'is_meat': false } }),Item.setProperties(400, { 'use_duration': 32, 'food': { 'nutrition': 8, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(411, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(457, { 'use_duration': 32, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(412, { 'use_duration': 32, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(413, { 'use_duration': 32, 'max_stack_size': 1, 'food': { 'nutrition': 10, 'saturation_modifier': 'normal', 'using_converts_to': 'bowl', 'is_meat': true } }),Item.setProperties(459, { 'use_duration': 32, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': false } }))"},
		{name:"Set Offhand",style:"white",type:"button",setting:"id:3;meta:0;amount:64;",call:"function arr(){return exploitTab};openSetting(4,arr(),'offhand')"},
		{name:"Repeat Last Offhand",rp:"tick",type:"switch",sparetick:20,state:false,call:" if (exploitTab[5].sparetick > 0) { exploitTab[5].sparetick--; } if (exploitTab[5].sparetick < 1) { var id = exploitTab[4].setting.split(';')[0].split(':')[1], meta = exploitTab[4].setting.split(';')[1].split(':')[1], amount = exploitTab[4].setting.split(';')[2].split(':')[1]; Entity.setOffhandSlot(getPlayerEnt(), parseInt(id), parseInt(amount), parseInt(meta)); exploitTab[5].sparetick = 20; } "},
		{name:"Offhand Keybind",keystate:false,style:"white",rp:"kb",type:"button",call:"var id = exploitTab[4].setting.split(';')[0].split(':')[1], meta = exploitTab[4].setting.split(';')[1].split(':')[1], amount = exploitTab[4].setting.split(';')[2].split(':')[1];Entity.setOffhandSlot(getPlayerEnt(), parseInt(id), parseInt(amount), parseInt(meta));"},
		{name:"Elytra",rp:"tick",type:"switch",state:false,call:"Player.setArmorSlot(1, 444, 0);"},
		{name:"AFK",rp:"tick",type:"switch",state:false,tick:"10",call:"setVelX(Player.getEntity(), 0); exploitTab[8].tick--; if(exploitTab[8].tick<0){ exploitTab[8].tick=10; } if(exploitTab[8].tick==6){ setVelX(Player.getEntity(), -0.3); }if(exploitTab[8].tick==4){ setVelX(Player.getEntity(), 0); }if(exploitTab[8].tick==2){ setVelX(Player.getEntity(), 0.3); }if(exploitTab[8].tick==0){ setVelX(Player.getEntity(), 0); }"},
		{name:"Undead",rp:"tick",type:"button",state:false,call:"if(exploitTab[9].state){Player.setHealth(20);}else{Player.setHealth(0)}"},
		{name:"Stackable Items",style:"white",type:"switch",state:false,call:"print('Unstackable items can now be stacked, such as armor and swords, even totems');for(var i = 255; i < 406; i++){ if(i!=210&i!=211&i!=212&i!=217&i!=230&i!=241&i!=242&i!=248&i!=249&i!=250&i!=326&i!=327&i!=343){ Item.setProperties(i, { 'stack_by_data': true, }); Item.setAllowOffhand(i, true); Item.setHandEquipped(i, true); } }  Item.setProperties(444, {'stack_by_data': true,}); Item.setAllowOffhand(444, true); Item.setHandEquipped(444, true);  Item.setProperties(450, {'stack_by_data': true,}); Item.setAllowOffhand(450, true); Item.setHandEquipped(450, true);  Item.setProperties(441, {'stack_by_data': true,}); Item.setAllowOffhand(441, true); Item.setHandEquipped(441, true);  Item.setProperties(438, {'stack_by_data': true,}); Item.setAllowOffhand(438, true); Item.setHandEquipped(438, true);"},
		{name:"Spam",rp:"tick",setting:"message:instinctmods.com;speed:0;",type:"switch",state:false,call:"if(reservedSpam!==0){reservedSpam--}if(reservedSpam==0){Server.sendChat('['+Math.floor(Math.random() * 1000)+'] '+exploitTab[11].setting.split(';')[0].split(':')[1]);reservedSpam=parseInt(exploitTab[11].setting.split(';')[1].split(':')[1])}"},
		{name:"RGB",rp:"t10",rgbtick:"1",setting:"speed:0;",state:true,type:"switch",call:"if (exploitTab[12].rgbtick == 0) {	exploitTab[12].rgbtick = exploitTab[12].setting.split(';')[0].split(':')[1];	try {		rt0 = rt0 - 0.5;		rt1 = rt1 - 0.5;		rt2 = rt2 - 0.5;		rt3 = rt3 - 0.5;		rt4 = rt4 - 0.5;		if (rt0 < 0) {			rt0 = 360		}		if (rt1 < 0) {			rt1 = 360		}		if (rt2 < 0) {			rt2 = 360		}		if (rt3 < 0) {			rt3 = 360		}		if (rt4 < 0) {			rt4 = 360		}		if (!exploitTab[20].state) {			openMenu.setTextColor(Color.HSVToColor([rt3, 0.8, 1.0]));		}		modstyle.setStroke(dip2px(2), Color.HSVToColor([rt3, 0.8, 1.0]));		for (var i = 0; i < listar.length; i++) {			if (listar[i] != undefined && menuOpen) {				ctx.runOnUiThread(new java.lang.Runnable({					run: function() {						try {							var colorStateList = android.content.res.ColorStateList.valueOf(Color.HSVToColor([rt3, 0.8, 1.0]));							searchb.setBackgroundTintList(colorStateList);							try {								let menutitlegrad = Array_Java.newInstance(Integer_Java.TYPE, 2);								menutitlegrad[0] = Color.TRANSPARENT;								menutitlegrad[1] = Color.HSVToColor([rt3, 0.8, 1.0]);								menuTitle.setBackgroundDrawable(new GradientDrawable(GradientDrawable.Orientation.LEFT_RIGHT, menutitlegrad));								let gradient_colors = Array_Java.newInstance(Integer_Java.TYPE, 6);								gradient_colors[0] = Color.HSVToColor([rt0, 0.8, 1.0]);								gradient_colors[1] = Color.HSVToColor([rt1, 0.8, 1.0]);								gradient_colors[2] = Color.HSVToColor([rt2, 0.8, 1.0]);								gradient_colors[3] = Color.HSVToColor([rt3, 0.8, 1.0]);								gradient_colors[4] = Color.HSVToColor([rt4, 0.8, 1.0]);								gradient_colors[5] = Color.HSVToColor([rt0, 0.8, 1.0]);								var textShader = new LinearGradient(0, 0, dip2px(70), dip2px(30), gradient_colors, null, android.graphics.Shader.TileMode.REPEAT);								var current_tab_hold = current_tab;								if (current_tab_hold == null || listar[i] !== current_tab_hold) {									listar[i].setTextColor(Color.HSVToColor([rt3, 0.8, 1.0]));									listar[i].getBackground().setColor(tab_back);									listar[i].getBackground().setAlpha(255);									listar[i].getBackground().setStroke(dip2px(0), Color.GRAY);								}								if (current_tab_hold !== null && listar[i] === current_tab_hold) {									listar[i].setTextColor(Color.WHITE);									listar[i].getBackground().setColor(Color.HSVToColor([rt3, 0.8, 1.0]));									listar[i].getBackground().setAlpha(195);									listar[i].getBackground().setStroke(dip2px(1), Color.WHITE);								}								closemenu.getPaint().setShader(textShader);								closemenu.invalidate();							} catch (e) {								clientMessage(e)							}						} catch (e) {							clientMessage(e)						}					}				}));			}		}	} catch (e) {		clientMessage(e)	}} else {	exploitTab[12].rgbtick--;}"},
		{name:"Instant Break",type:"button",state:false,call:"if(exploitTab[13].state){for(var i = -255; i < 406; i++){ Block.setDestroyTime(i, 0.01); }}else{ for(var i = -255; i < 406; i++){ Block.setDestroyTime(i, defaultDestroy[i]); }  }"},
		{name:"Toggle Statusbar",display:"hidden",type:"button",state:false,call:"try{if(!exploitTab[14].state){ctx.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);}else{ctx.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);}}catch(e){clientMessage(e)}"},
		{name:"Auto Click",optionSensitive:true,type:"switch",keystate:false,setting:"CPS:35;",delayedStart:true,state:false,rp:"delayedthread",call:"if(!needR&&blInForeground()){inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q);}"},
		{name:"F5",optionSensitive:true,type:"button",disablerp:false,rp:"kb",style:"white",keystate:false,call:"keyevent('f5')"},
		{name:"Twerk",optionSensitive:true,type:"switch",keystate:false,delayedStart:true,state:false,rp:"threaded",call:"if(blInForeground()){inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_SHIFT_LEFT);}"},
		{name:"Server IP+Port",style:"white",type:"button",call:"clientMessage('§fServer IP: §e'+Server.getAddress()+'§f, Port:§e '+Server.getPort())"},
		{name:"Hud",type:"button",state:false,rp:"tick",call:"if (exploitTab[19].state) {if (!dataWin) {displayData();}} else if (!survivalTab[2].state && !pvpTab[9].state && !exploitTab[19].state) {dataView.dismiss();dataWin = false;}var tempDataTxt = ' Held Item ID: ' + Player.getCarriedItem() + newLine() + ' Held Item Meta: ' + Player.getCarriedItemData() + newLine() + ' Held Item Amount: ' + Player.getCarriedItemCount() + newLine() + ' Pitch: ' + getPitch(Player.getEntity()) + newLine() + ' Yaw: ' + getYaw(Player.getEntity());ctx.runOnUiThread(new java.lang.Runnable({run: function() {try {hudView.setText(tempDataTxt);if (!exploitTab[19].state && dataWin) {hudView.setText('');}} catch (err) {clientMessage(err);}}}));"},
		{name:"Invisible Buttons",type:"button",state:false,rp:"tick",call:"if(!exploitTab[21].state&&exploitTab[20].state){	clientMessage('§eSneak§b and tap §efirst§b inventory slot to display menu & keybinds');exploitTab[21].state=true;}else if(!exploitTab[20].state){	exploitTab[21].state=false;}"},
		{name:"Invis Btns Chck",type:"button",display:"hidden",state:false,rp:"tick",call:"if(Entity.isSneaking(getPlayerEnt())&&Player.getSelectedSlotId() == 0&&!menuOpen){	seeList();	menuOpen=true;}"},
		{name:"Drop Item",type:"button",disablerp:false,rp:"kb",style:"white",keystate:false,call:"if(needR){keyevent('R')}else{keyevent('Z')}"},
		{name:"Dev Mode",type:"button",state:false,call:"developerMode=!developerMode;print('Toggled More Settings')"}
	],
	friendTab = [
		{name:"Add Friend",setting:"Name: ;",id:6,style:"white",type:"button",view:"return friendview",menu:false,call:"function arr(){return friendTab};openSetting(0,arr(),'Add Friend');closeMenu();"},
		{name:"Add Pointed",setting:"Name: ;",style:"white",type:"button",call:" if(Entity.getNameTag(Player.getPointedEntity())!=null){ print('Added '+Entity.getNameTag(Player.getPointedEntity())); friendTab[objectLength(friendTab)]={name:Entity.getNameTag(Player.getPointedEntity()),state:true};ctx.runOnUiThread(new Runnable({ run: function() { try{ friendview.removeAllViews(); for(var i=0;i<friendTab.length;i++){ 	 friendview.addView(createItem(i,friendTab)); } }catch(e){clientMessage(e+'@'+e.lineNumber)} }})); }else{ print('Not pointed at a player, or not close enough') }; "}
	],	
	waypointTab = [
		{name:"Add Waypoint",setting:"name: ;X: ;Y: ;Z: ;",id:7,style:"white",type:"button",view:"return waypointview",menu:false,call:"function arr(){return waypointTab};openSetting(0,arr(),'add waypoint');"}
	],
	favoriteTab = [
		{name:"Add/Edit Favorite",display:"hidden",id:8,style:"white",type:"button",open:false,view:"return favoriteview",menu:false,call:"try{favoriteTab[0].open = true;openBrowser.dismiss();openTrans.dismiss();openInfo.dismiss();openDrag.dismiss();runKeybinds(true);favoriteTab[0].menu = false;buttonview.removeAllViews();survivalview.removeAllViews();pvpview.removeAllViews();potionview.removeAllViews();movementview.removeAllViews();exploitview.removeAllViews();friendview.removeAllViews();favoriteview.removeAllViews();waypointview.removeAllViews();if (!horizontalmenu && jelly_classic && sidemodsparent.getParent() !== null) {	sidemodsparent.removeAllViews();	sidemodsparent.addView(favoritehost);	sidemodsparent.addView(survivalhost);	sidemodsparent.addView(pvphost);	sidemodsparent.addView(potionhost);	sidemodsparent.addView(movementhost);	sidemodsparent.addView(exploithost);	sidemodsparent.addView(friendhost);	sidemodsparent.addView(waypointhost);}for (var i = 0; i < survivalTab.length; i++) {	if (favoriteTab.find(e => e.name == survivalTab[i].name) !== undefined) {		survivalview.addView(createItem(i, survivalTab, false, 'on'));	} else {		survivalview.addView(createItem(i, survivalTab, false, 'off'));	}}for (var i = 0; i < pvpTab.length; i++) {	if (favoriteTab.find(e => e.name == pvpTab[i].name) !== undefined) {		pvpview.addView(createItem(i, pvpTab, false, 'on'));	} else {		pvpview.addView(createItem(i, pvpTab, false, 'off'));	}}for (var i = 0; i < potionTab.length; i++) {	if (favoriteTab.find(e => e.name == potionTab[i].name) !== undefined) {		potionview.addView(createItem(i, potionTab, false, 'on'));	} else {		potionview.addView(createItem(i, potionTab, false, 'off'));	}}for (var i = 0; i < movementTab.length; i++) {	if (favoriteTab.find(e => e.name == movementTab[i].name) !== undefined) {		movementview.addView(createItem(i, movementTab, false, 'on'));	} else {		movementview.addView(createItem(i, movementTab, false, 'off'));	}}for (var i = 0; i < exploitTab.length; i++) {	if (favoriteTab.find(e => e.name == exploitTab[i].name) !== undefined) {		exploitview.addView(createItem(i, exploitTab, false, 'on'));	} else {		exploitview.addView(createItem(i, exploitTab, false, 'off'));	}}listar[0].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));listar[1].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));listar[2].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));listar[8].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));listar[3].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));listar[4].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));listar[6].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));closemenu.setText(langstring[11]);listar[7].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));}catch(e){clientMessage(e)}"} 		
	],
	ESP = {
	        File: {getTextFromFile: function (file) {let readed = (new java.io.BufferedReader(new java.io.FileReader(file)));let data = new java.lang.StringBuilder();let string;while((string = readed.readLine()) != null)data.append(string + "\n");return data.toString();}},		
			Render: {getFloatBuffer: function (fArray) {let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4); bBuffer.order(java.nio.ByteOrder.nativeOrder());  let fBuffer = bBuffer.asFloatBuffer(); fBuffer.put(fArray); fBuffer.position(0); return fBuffer; 			},
			getShortBuffer: function (sArray) {let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2); bBuffer.order(java.nio.ByteOrder.nativeOrder());  let sBuffer = bBuffer.asShortBuffer(); sBuffer.put(sArray); sBuffer.position(1); return sBuffer;},renderer: null,glSurface: null,fov: 90,color: Color.argb(180, 0, 0, 255),initted: false,
			init: function () {if(ESP.Render.initted){return;}let options = ESP.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt")); 
				options = options.split("\n");options.forEach(function (entry) {let suboption = entry.split(":");if(suboption[0] == "gfx_field_of_view") {ESP.Render.fov = suboption[1];}});
				this.renderer = new android.opengl.GLSurfaceView.Renderer({
					onSurfaceCreated: function (gl, config) {let GL10 = javax.microedition.khronos.opengles.GL10; gl.glClearColor(0, 0, 0, 0); gl.glShadeModel(GL10.GL_SMOOTH); gl.glClearDepthf(1.0); gl.glDisable(GL10.GL_DITHER);gl.glDepthFunc(GL10.GL_LEQUAL); gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST); 					},
					onSurfaceChanged: function (gl, width, height) {sw=width;sh=height;let GL10 = javax.microedition.khronos.opengles.GL10; gl.glMatrixMode(GL10.GL_PROJECTION); gl.glLoadIdentity(); android.opengl.GLU.gluPerspective(gl, ESP.Render.fov, width / height, -0.99, 99.9); gl.glMatrixMode(GL10.GL_MODELVIEW); gl.glLoadIdentity(); 					},
					onDrawFrame: function (gl) {let GL10 = javax.microedition.khronos.opengles.GL10; gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT); gl.glLoadIdentity();
						if(confirmScreenSafe()&&getPlayerEnt()!=-1) {
							if(pvpTab[16].state){
							try {gl.glDisable(GL10.GL_LIGHTING);let yaw = getYaw() % 360; let pitch = getPitch() % 360; let eyeX = getPlayerX(); let eyeY = getPlayerY() +1; let eyeZ = getPlayerZ();
								let dCenterX = Math.sin(yaw / 180 * Math.PI);let dCenterZ = Math.cos(yaw / 180 * Math.PI);let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);let centerX = eyeX - dCenterX; let centerZ = eyeZ + dCenterZ; let centerY = eyeY - dCenterY; 
								android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1, 0);
								let mobs = Entity.getAll();
								let players = Server.getAllPlayers();
								var oX=getPlayerX(),oY=getPlayerY()+1,oZ=getPlayerZ();
								mobs.forEach(function (entry) {
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) <= 63) {
										if(pvpTab[16].state&&Entity.getX(entry)!==0&&Entity.getZ(entry)!==0){ESP.Render.drawLine(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, oX, oY, oZ);}
									}});
								players.forEach(function (entry) {
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) <= 63) {
										if(pvpTab[16].state&&Entity.getX(entry)!==0&&Entity.getZ(entry)!==0){ESP.Render.drawLine(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, oX, oY, oZ);}
										
									}});} catch(e) {clientMessage(e)}}} else {}}});
				ctx.runOnUiThread(new java.lang.Runnable({run: function () {ESP.Render.glSurface = new android.opengl.GLSurfaceView(ctx); ESP.Render.glSurface.setZOrderOnTop(true);   ESP.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0); ESP.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT); ESP.Render.glSurface.setRenderer(ESP.Render.renderer);   ctx.getWindow().getDecorView().addView(ESP.Render.glSurface);  ESP.Render.initted = true;}}));},
			drawLine: function (gl, x, y, z, x2, y2, z2) {
				let GL10 = javax.microedition.khronos.opengles.GL10;
				let size = new Array(x2, y2, z2);
				let vertices = [0, 0, 0,x2 - x, y2 - y, z2 - z];
				let vertexBuffer = ESP.Render.getFloatBuffer(vertices);
				let indices = [0, 1];
				let indexBuffer = ESP.Render.getShortBuffer(indices);
				gl.glTranslatef(x, y, z);
				gl.glEnable(GL10.GL_BLEND);
				gl.glDepthMask(false);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(5);
				if(pvpTab[16].setting.split(';')[3].split(':')[1]=="true"){
					var hsv_array = HSVtoRGB(rt0/360,1,1);
					gl.glColor4f(hsv_array.r/255, hsv_array.g/255, hsv_array.b/255, 0.7);
				}else{
				gl.glColor4f(pvpTab[16].setting.split(';')[0].split(':')[1]/255, pvpTab[16].setting.split(';')[1].split(':')[1]/255, pvpTab[16].setting.split(';')[2].split(':')[1]/255, 0.7);}
				gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
				gl.glTranslatef(-x, -y, -z);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
		}}},
	ESP2 = {
		File: {getTextFromFile: function (file) {let readed = (new java.io.BufferedReader(new java.io.FileReader(file)));let data = new java.lang.StringBuilder();let string;while((string = readed.readLine()) != null)data.append(string + "\n");return data.toString();}},		
		Render: {getFloatBuffer: function (fArray) {let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4); bBuffer.order(java.nio.ByteOrder.nativeOrder());  let fBuffer = bBuffer.asFloatBuffer(); fBuffer.put(fArray); fBuffer.position(0); return fBuffer; 			},
		getShortBuffer: function (sArray) {let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2); bBuffer.order(java.nio.ByteOrder.nativeOrder());  let sBuffer = bBuffer.asShortBuffer(); sBuffer.put(sArray); sBuffer.position(0); return sBuffer;},renderer: null,glSurface: null,fov: 90,color: Color.argb(180, 0, 0, 255),initted: false,
		init: function () {if(ESP2.Render.initted){return;}let options = ESP2.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt")); 
			options = options.split("\n");options.forEach(function (entry) {let suboption = entry.split(":");if(suboption[0] == "gfx_field_of_view") {ESP2.Render.fov = suboption[1];}});
			this.renderer = new android.opengl.GLSurfaceView.Renderer({
				onSurfaceCreated: function (gl, config) {let GL10 = javax.microedition.khronos.opengles.GL10; gl.glClearColor(0, 0, 0, 0); gl.glShadeModel(GL10.GL_SMOOTH); gl.glClearDepthf(1.0); gl.glDisable(GL10.GL_DITHER); gl.glEnable(GL10.GL_DEPTH_TEST); gl.glDepthFunc(GL10.GL_LEQUAL); gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST); 					},
				onSurfaceChanged: function (gl, width, height) {let GL10 = javax.microedition.khronos.opengles.GL10; gl.glMatrixMode(GL10.GL_PROJECTION); gl.glLoadIdentity(); android.opengl.GLU.gluPerspective(gl, ESP2.Render.fov, width / height, 0.1, 100); gl.glMatrixMode(GL10.GL_MODELVIEW); gl.glLoadIdentity(); 					},
				onDrawFrame: function (gl) {let GL10 = javax.microedition.khronos.opengles.GL10; gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT); gl.glLoadIdentity();
					if(confirmScreenSafe()&&getPlayerEnt()!=-1) {
						if(pvpTab[5].state||pvpTab[11].state){
							try {gl.glDisable(GL10.GL_LIGHTING);let yaw = getYaw() % 360; let pitch = getPitch() % 360; let eyeX = getPlayerX(); let eyeY = getPlayerY() + 1; let eyeZ = getPlayerZ();
								let dCenterX = Math.sin(yaw / 180 * Math.PI);let dCenterZ = Math.cos(yaw / 180 * Math.PI);let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);let centerX = eyeX - dCenterX; let centerZ = eyeZ + dCenterZ; let centerY = eyeY - dCenterY; 
								android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);
								let mobs = Entity.getAll();
								let players = Server.getAllPlayers();
								mobs.forEach(function (entry) {
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) <= 63) {
										if(pvpTab[5].state&&Entity.getX(entry)!==0&&Entity.getZ(entry)!==0){ESP2.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);}
										if(pvpTab[11].state&&Entity.getX(entry)!==0&&Entity.getZ(entry)!==0){ESP2.Render.drawLine(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, getPlayerX(), getPlayerY()-100, getPlayerZ());}
									}});
								players.forEach(function (entry) {
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) <= 63) {
										if(pvpTab[5].state&&Entity.getX(entry)!==0&&Entity.getZ(entry)!==0){ESP2.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);}
										if(pvpTab[11].state&&Entity.getX(entry)!==0&&Entity.getZ(entry)!==0){ESP2.Render.drawLine(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, getPlayerX(), getPlayerY()-100, getPlayerZ());}
									}});} catch(e){clientMessage(e+'@'+e.lineNumber)}}} else {}}});
			ctx.runOnUiThread(new java.lang.Runnable({run: function () {ESP2.Render.glSurface = new android.opengl.GLSurfaceView(ctx); ESP2.Render.glSurface.setZOrderOnTop(true);   ESP2.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0); ESP2.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT); ESP2.Render.glSurface.setRenderer(ESP2.Render.renderer);   ctx.getWindow().getDecorView().addView(ESP2.Render.glSurface);  ESP2.Render.initted = true;}}));},
		drawBox: function (gl, x, y, z, xsize, ysize, zsize) {
			let GL10 = javax.microedition.khronos.opengles.GL10;
			let size = new Array(xsize, ysize, zsize);
			let vertices = [0, 0, 0, size[0], 0, 0, 0, 0, size[2], size[0], 0, size[2],  0, size[1], 0, size[0], size[1], 0, 0, size[1], size[2], size[0], size[1], size[2]];
			let vertexBuffer = ESP2.Render.getFloatBuffer(vertices);
			let lineIndices = [0, 1, 0, 2, 0, 4,  3, 1, 3, 2, 3, 7,  5, 4, 5, 7, 5, 1,  6, 4, 6, 7, 6, 2];
			let polyIndices = [0, 1, 4, 1, 4, 5,  2, 3, 6, 7, 6, 3,  1, 3, 7, 7, 1, 5,  0, 2, 6, 6, 0, 4,  0, 1, 2, 3, 1, 2,  4, 5, 6, 7, 5, 6];
			let lineBuffer = ESP2.Render.getShortBuffer(lineIndices);
			let polyBuffer = ESP2.Render.getShortBuffer(polyIndices);
			gl.glTranslatef(x, y, z);
			gl.glFrontFace(GL10.GL_CCW);
			gl.glEnable(GL10.GL_BLEND);
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			/*border*/
			gl.glLineWidth(0);
			var hsv_array = HSVtoRGB(rt0/360,1,1);
			if(pvpTab[5].setting.split(';')[3].split(':')[1]=="true"){
				gl.glColor4f(hsv_array.r/255, hsv_array.g/255, hsv_array.b/255, 0.5);
			}else{
			gl.glColor4f(pvpTab[5].setting.split(';')[0].split(':')[1]/255, pvpTab[5].setting.split(';')[1].split(':')[1]/255, pvpTab[5].setting.split(';')[2].split(':')[1]/255, 0.5);}
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
			/*box*/
			if(pvpTab[5].setting.split(';')[3].split(':')[1]=="true"){
				gl.glColor4f(hsv_array.r/255, hsv_array.g/255, hsv_array.b/255, 0.38);
			}else{
			gl.glColor4f(pvpTab[5].setting.split(';')[0].split(':')[1]/255, pvpTab[5].setting.split(';')[1].split(':')[1]/255, pvpTab[5].setting.split(';')[2].split(':')[1]/255, 0.38);}
			gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
			gl.glDisable(GL10.GL_LINE_SMOOTH);
			gl.glTranslatef(-x, -y, -z);
		},
		drawLine: function (gl, x, y, z, x2, y2, z2) {
			let GL10 = javax.microedition.khronos.opengles.GL10;
			let size = new Array(x2, y2, z2);
			let vertices = [0, 0, 0,x2 - x, y2 - y, z2 - z];
			let vertexBuffer = ESP2.Render.getFloatBuffer(vertices);
			let indices = [0, 1];
			let indexBuffer = ESP2.Render.getShortBuffer(indices);
			gl.glTranslatef(x, y, z);
			gl.glEnable(GL10.GL_BLEND);
			gl.glDepthMask(false);
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			gl.glLineWidth(5);
			if(pvpTab[11].setting.split(';')[3].split(':')[1]=="true"){
				var hsv_array = HSVtoRGB(rt0/360,1,1);
				gl.glColor4f(hsv_array.r/255, hsv_array.g/255, hsv_array.b/255, 0.7);
			}else{
			gl.glColor4f(pvpTab[11].setting.split(';')[0].split(':')[1]/255, pvpTab[11].setting.split(';')[1].split(':')[1]/255, pvpTab[11].setting.split(';')[2].split(':')[1]/255, 0.7);}
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
			gl.glTranslatef(-x, -y, -z);
			gl.glDepthMask(true);
			gl.glDisable(GL10.GL_LINE_SMOOTH);
		}}},
/*{name:"Name",type:"button",state:false,call:""}*/
	menuOpen=false,l_,sAN,sAI,dragLoc,hostThread,globalSearch = '',webhost = new LinearLayout(ctx),fullwidthtoggles=false,content,Done=true,sw,sh,needR=false,ca,lang,p_,y_,tV,lightReplace=new Array(2),menuRed=0,menuGreen=255,menuBlue=0,defB=Color.parseColor("#000000"),defC=Color.parseColor("#ffffff"),player_=getPlayerEnt(),openMenu,hosthostlay,pT,pT = java.util.concurrent.Executors.newScheduledThreadPool(2),inst = new android.app.Instrumentation(),buttonview,displayed=false,freshload=true,coordsView,locateView,dataWin=false,playerDir = [0, 0, 0], wF=false,THREAD_PRIORITY_NULL=android.os.Process.THREAD_PRIORITY_BACKGROUND,fF=false,bottommenu=false,horizontalmenu=false,updateText="",MS=java.util.concurrent.TimeUnit.MILLISECONDS,NS=java.util.concurrent.TimeUnit.NANOSECONDS,DEG_TO_RAD = Math.PI / 180,hasloaded=false,extended=false,tempString,blocksToReplaceX = [], defaultDestroy=[],blocksToReplaceY = [];pT.setKeepAliveTime(1, MS);pT.allowCoreThreadTimeOut(false);var blocksToReplaceZ = [], blocksReplacedX = [], blocksReplacedY = [], blocksReplacedZ = [], blocksToSkip = [],freshState=true,currentScreen="",reservedSpam=20,prfx=".",vic=0,att,usedBlockId=0,
	b64prefix = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADG2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BUNTVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMWgx9DJcMqhgeM0oxRjPMYnzIZMjUwXWLWYG5kvstiwzKPlZk1m/UqmxPbJnYV9pkcAhydnKyczVzMXG3c3NwTeaR4lvIa8x7iC+Z7xl8tICSwWtBN8JFQo7Ci8GGRdFFe0a1iceKc4lslUiSFJY9KVUjrSj+RmSMbKicod1a+R8FHkVfxgtIU5SgVJZXXqlvVGtX9N",
	b64prefix2 = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA",
	crosshairicon = "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAclBMVEUAAAAex/r/KAAAAAAPZX8ZqNMFJS4XmcAcwPESgKEMUGUbuOgIN0YdwvQbteQEIioDGB8Zq9YNWXAGKzcBDA8cve4Vk7kJQFAHMT4artoYos0Rd5YPaYUOYXsKSVwUh6kQcI0MU2kDFBkXncYVjbEUiq08MseMAAAAAXRSTlMAQObYZgAABCxJREFUeNrs3etu2kAQQGGmawrEGBts7pB73v8VuzZWK4QLmVaI2fU5v6JcmNlPCZdEgQEREREREdG/JR0NCCywrgSWIrAUgaUILEVgKQJLEVj3rQtBj9UTSrDAagJLEViKwFIEliKwFIGlCKz7Jrf7f6yOgnyoBBZYp8BSBJYisBSBpQgsRWApAsv3KARLWN8NLLDAAgsssMACCyywwBJ51B8swAILLLDAAgsssMACC6zuFZgR+UHAMjYjmoOAZWxGNAcBy9iMaA4ClrEZ0RwELGMzojkIWMZmRHMQsIzNiOYgYBmbEc1BwDI2I5qD3HGG/C7wg3zzRFYvGiywwHr4RYMFFlgPv2iwwALLzvrRTAt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8/XtOu/9TW/7o6Prc619r4GxggQUWWGCBBRZYYIH1cCx9eqzHX4r5wAKrCSxFYCkCSxFYisBSBJYisIiIiIiIKIbkZrG+/NX1wOoxVuJ8P4dyo/GTG4F1CyupP3YDa/gz6QfWdYYW62pgtYF1VovVqKzWVXFMxbdd5K54XmXp1NVN0xPayE22i6Ja76Ruud+4av05nrimXmG9l67ubexRCne6KrvA2lTOV85FZLZ2TaM+Yrnycynz6fuHZIv3l0yy3XH+58ewxaoOM1km7lX8J7nnuWTzZNTHH8O8UZm4L/+ufCdNF1gT8Q3zReaFpjOp6+l1lkjrsXf5YVRTdGPNpk9j/3Yr1HesbJ875/IX6cZKa6yJf7up71i+2epYVKu/YPGddY7le3EHkSTvxvJCa66zvEf69pV6kqSmeXWHTOQSq7k13J5uDbdluesFVvvY8Bxr6prqb52PormfdYkl8/azRt6tJ/ezurBkmJTObfZL8a02rnhbdmDJ8nXjqudVJpIeC1f2AEsRv6I5CyxjmxIREREREfFPAwOwOgJLEViKwFIEliKwFIGlCCxFYPHEPTzLEVhggQUWWGCBBRZYcWEF/nT2vNLAwP60wNcHy+y0wNcHy+y0wNcHy+y0wNcHy+y0wNcHy+y0wNf/1d4d4yAMRDEUhPtfmgKJEsUCKV5r3gHi/OloAqzatcNfH1bt2uGvD6t27fDXh1W79vxa/et/3YAFCxYsWLBufzQsWLBuf/Qe1v2HnLgxcwisso2ZQ2CVbcwcAqtsY+YQWGUbM4fAKtuYOQRW2cbMIbDKNmYOgVW2MXMIrLKNmUNuwPr98/jBIeFTCj6PDwsWLFiwYMGCBQvWgVjn/P0VLFiwYMGCBQsWLFh7WFdrwnq0BwvWO1hBsIJgBcEKghUEKwhWbf/BmuGABetCsIJgBcEKghUEKwhWEKzeBn+yfIIVBCsIVhCsIFhBsIJgBcEKgiVJkiSpuBfSYXR+g2QEUQAAAABJRU5ErkJggg==",
	upicon = b64prefix2 + "L9JREFUaN7t00EKgkAYhuGfDhB0Fhd2szZC07IjRXeSWrV8W2Rgk5IzxvRL3wMuRBjeT9FMRERERETk3wANUH/hnBpoSscfeLgC2xnnVEDbnXUsFR94lTUiin8KqeesMjbcovu1mZ1SRgCVmZ3NbBM/yuhJB+x4N+lLjLx5gH2R+Dkj3MTnjHAXnzLCbfyUEe7jeyPCQOSlu2Lh171jI4a+hO83nzjCd/yHEcuIHxmxrPjeiOD2hxURERERkcW7A5//DCeoBxYoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTIyVDEwOjMyOjEyKzAwOjAw088V8wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0yMlQxMDozMjoxMiswMDowMKKSrU8AAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stVEFDMlVwcUHXtbkrAAAAAElFTkSuQmCC",
	downicon = b64prefix2 + "LVJREFUaN7t0TEKwkAURdE/7kgN6gbEJaU0pVuzcSeKVpbPRmEYiIkZk/yBeyBFIAz3ZcwAAAAAYASSGkmnuTty4j/KGpHElzWiJb6MER3xvke0xN/fT6qZu7dv/E7SWtLV7U18id9G36xcjugT73bEL/HuRgyJdzMiJ36MEYsBG57J+8PMDiGEc98DQggXM9ub2a3j7HFIqqM/v8k4ZxndxHGS+GRE9YdzKkn1pPEAAAAA4MEL3XsQmdLdZMIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMjJUMTA6MzE6MzMrMDA6MDDcqqI5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTIyVDEwOjMxOjMzKzAwOjAwrfcahQAAACh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vdG1wL21hZ2ljay02YTVVZGZEaMwQeCwAAAAASUVORK5CYII=",
	rotateicon = b64prefix2 + "xNJREFUaN7tmb1rFEEYh9+NH/EDBAkG4scZBPWSINgYYiMarSyiATWp/EKJf4LYKFZ2avQviFUI2ohgIySSxEAigkYimnh+gFELwS4aco/FrTjMzezN3O7ecZK3Obib/c3zzOzN7s6KLFfpArZVmyEWPDBbbY5Y8ADVZokFX3MCOnxNCZjga0bABp+mQJAkvIgMi8gOS5NFEfkpIp9E5I2IjIrI4yAIcmnJecEDc/hXHhgHeoEVtSig1gxwpNoSszElAAaAdZUAXuM5E+uBncAB4CowGZ5CppoAGtKEbw5BT7tKWHKywJBF5HUqEsB2IBd2sgSccZEokdmuZKr1zDTTceAzhtGNknC+lQAagCcGibtpjDweEnMuAmH71cCIIf9wEvDvia4l4KxNwqOvTYaBmqbc60QE/DDwy1XCs88Owx/7VJLwg8BKoMtVooy+72u5o74BmSh4pd0xi8S5mAKt2izkgWbXg21X1SEVXml/FFjQ2uaBSzElnmuZfa4jb7qaDprgleOOA7+TnAngupZ3LxV4B4nzZQp0allTqcErOd1JSQC7tZzvtoYNFviHPvBKXo8hawno9czZoGUs6G3qws8fIvLIkNEuIlnPTleJSI/hp88iMuE5Fu5PjEAA3DGM3Feg1RWe4vUbCiua9+6c8ynkKNFSSfgwU/8TT7rORL8BZN4mkQZ8mKsvowOuBwbAbQPQN6DNAP/A0DaH65XTzvFCy7zoc7BNYh7Ilhj5d8DWmPBtFN9KZHxDbBJfgD1pwYd967P6tNwgm8RiivD7Kb6dPhEnMABuEV1JwTcCH7Tsl0Bd3OAoiaTgTY+UeeBQ3Gy1kxtaB2+BLQnk2h7q+xODDzsKgJsJw3cYThuAMaA+UQFF4rIJHmj0yGkJVzLTxtY0ae7OWYD6Qpgx4ApwEGgC6ilsLe4Kv7sGTGHfWhyvBvwFCrfMcWsAWFtp+O6I0XStV0BnRcEVgYDC7sSI5yzkgVHgJGWu84m9YlJkNotIl4jsE5G9ItIkIhul8PD09xXTjPx7xfSxKqO+XMv1n9QfnhKxTPCOvdoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMjJUMTA6Mjk6MzYrMDA6MDBcyxKqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTIyVDEwOjI5OjM2KzAwOjAwLZaqFgAAACh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vdG1wL21hZ2ljay1iVE5MdlRTbUMk2ecAAAAASUVORK5CYII=",
	expandicon ="iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAHBJREFUSMdjYBgFgwn8h2KqmsNEa1ePDAsa8Mh1kGIZtkhuYMAf8f+xWIIzsaBLNDAQTlkw+Q485mCVQDacWNyBzQJccfCdlLAlVg+618pJCKJ6UoMI3RJ8FtQTYQ5eiQY8FjSQYM5oWTRAFoyCgQcAsXhA09Mm9wAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMjJUMTA6MjM6MjIrMDA6MDBzDKbuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTIyVDEwOjIzOjIyKzAwOjAwAlEeUgAAACh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vdG1wL21hZ2ljay1reDhiTmsyag/WUzsAAAAASUVORK5CYII=",
	infoicon = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAaxJREFUeNrs1TFoFUEQBuDvgoioiIXapDBgCNikCIJCFHu1MArGJo21WIoQEYuHlQYCdtpZBG1UxM4UgQgWimJaRYUQsQiKISjm4drMhWW99wiSIIILA7vz38w/u/wzV6WUbOTqscHr3yfYBFVVNWG7MIYV3OwQfzmKvI2FEkwpqVJKJUEPLuAQlvACW9GH3ajwBW+D/AB68QxXwrdKoFDRZjyIah7hKRaROtgnTEfMIl5jTzeC0xG41CVpJ6sLaXUjePIHiUtbiCf9jaB/HZLXNlIT5DI9sY7qPNbUB0cbPpzBWVxEu8CuBjbdEHc4BLP6RFvwvrjmR+zIgloZdivzb8N8wzPtz59oCHuLKt7ha3aey/az2X45eqJcg/kNzjdU8AOj8fF2PM+wV9gZ2El8b4gfz1V0LQPaYfX5XiQsE8zhbuFbyfYTOcGdgmAKE/i5Rlk+xiQ+Z76pnGAQbzJwHpdCbtfxMrq7HaTf8CFucA5nYhbV8cs4UjbaPtwvKpvJpm5viOEgBkI9cKOImcVwp1FRa7iFhzi1hqYajsImcbxxXP//Zf5Vgl8DAEZoC+ipzwjqAAAAAElFTkSuQmCC",
	gearicon = b64prefix2 + "uFJREFUaN7tmc9LFVEUx7+npB/Q8yVYBi4LW4YtVCLqtaqoIKi/wV07IUhdJNFOEFpHq0qSloELF7ZpoxDUJs0WopUaFFaQBfppMfOghnlzZ+7M8ym8Lzx4vHPne77fmTvn3nue1EQTTRQGYAo3phqts5b4YynEV9FRVN49BXo4Uaex22bgeJ3GNg2kRUOmkBNABfgIjAMXAIvEy8AQsJ7hJV4PrylHuCzMMR7mrOQVvw+YiySfB24DR4ArwKcMwqNYBW4Ah4F+4G0kvgDsz2NgICH5nxzCs3ANJGm0BPFHJc1LKqux+CHppJl9jgsmvcT3d4B4SSpJGqkVjH0CQLekWRVbpfJgS1Kfmc1EA7UEju0g8VWdY0QqYKwB4LKkczmSrUkaktQt6VD4OS1pOIz54oyki85RQB+w4VlNngGlBO4SMOHJvQH0prIK9ACLHuItBbd5mFgEejI9L6AdmEyZYDXpzsdwtwJrKbkngXavSQfsAe4Cm44kgx7cww7OzTB3/mICLDuSnfLg7HZwLqfhcc7ZMNkvSQcShpTM7GdGAyVJ3xOGbJjZQRdP2sdDETci4zVbaUjSGvjqiPscUFzXfMttAGgBRiV1Oniuehi45oh3AqNAiwe3BHQA03Uqo2XgS0ruabJ2MQhW46WUCaqYIP1C9jwj9xLQl0W871ZiAmh13Pms4quI3UrEza82Sb7HuJuSzgMPJL1QcCCSpC4F78ktSX6raqCpLfpjrfPAS+XbkdYDrySdNbP/SnrSgWZG0t5Gqw6xJanXzGajgdgyamavJT1qtOp/8DBOvLR7DvVdZrYSF6y5kJnZmqR7CcS/CxSZxDVSS7wTBI2td5FyNkfQ2GoHLhF00HyxAlwPy2s/8CYSf0+exlZookJwInoafo+2FluBQbK3Fu8QWb0JFrlKmGuRvK3FjEafZDDwuKi8RbZOFuo0dtsMfKjT2KaBtGjIFCoU7Oa/WZtoYpfiL3+PmqZqhmK4AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTIyVDEyOjEwOjQwKzAwOjAwMHXWCQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0yMlQxMjoxMDo0MCswMDowMEEobrUAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stbHVwb2UyOUxa+BZkAAAAAElFTkSuQmCC",
	webIcon = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAVpJREFUSMfdlM1Kw0AUhT9SUhAU36OCD+EPKC4sVdtnUBCXbnWp9Qlcl76IW934G6luFJduGqF1Y1zkBIeYzEyy0wPDTO69c87MvbkD/x1NoAcMgQj40Ihk6yqmFraAZyBxjCegU4W4AZx5ECfAjbHuA4GPgC/5iwh3gYlspz5p8SVfM/YtAVP52raCunJuw55iRpQUvudxchsC4FpxO6Yxw6aD4MLh/wLObVyPUh9WOHUeLe2JipyxnPPAYU2BGe2Ji5xjOWf1fYS9HkUpm5NvbEtRy7C5RPJYyKfILPKV5uWcwHGFFK1qvixydqV+y++W97lBA7iXfbtIoEn6cCWkTWPi1SLyBmwAB/w0Wlh2xY6CJsCKYV93iLwDn1q7+om+AqfAfi5drk4/8SlUQPoqZpvudP1FD3Kv5zpDW/l0nXrkk5YyhKQP1wB4IO3QWOsB6d8S1iX/G/gGoe3CLfR38gQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMDVUMDM6MTI6NTUrMDA6MDC3+n+9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAzLTA1VDAzOjEyOjU1KzAwOjAwxqfHAQAAACh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vdG1wL21hZ2ljay1FN1hLNkpjaqHorFEAAAAASUVORK5CYII=",
	transicon = "iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABAElEQVR4AaXPAUQEQRSH8cFgEQ6LAAtYBDgsDgOEcAghBAgHAIAQAkCAEAYHgMUihAAhwAEWixAWhzB4fVg8md2Z9OcHg888M82igdNQIXsFekiER/YcZMYRxf9Dad94iIWOaOFxgKBFNeMaAbUOdSjBjAUz+4zzejgYh0+scI53jNgjQLDFDe5SoScYdU6H50kHiYqE7lEiQHCFCidw0Od5XMz9qAUzLWQSUGGnzjvDYem0gAYr7PCIBladO+AD66WQYMQtSlis8QpRvlAnQlk8BtSx0OaPoUv0KH6HLN4gGV5g2GnsR6l5CAYdUMERGyS3hWBEr6k3i+QKuAUFzA8N9pQ43BPA1wAAAABJRU5ErkJggg==",
	favoriteiconon = "iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAApElEQVR4AdXTERDCYBiA4UE4CIIwHMw5D3IOg3BOQRAEQc6DQX6DQRDkN78wGAyevLX67yb1+P/eff93X/R/kGIyPMQR2dDIGA/UGA0JrQGwGBK6AaAIeRDjgDMq1Gh1NahRosC2MzIS1MJdMY3ewRSV7wrEIWMW+p2CN4iNfssoFHL99uEh7oAGGXZoAZfQSALIMXu5uRIt4pDQ/NM/YIU0+nlPAZ+Cgrte3bAAAAAASUVORK5CYII=",
	favoriteiconoff = "iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA7ElEQVR4Ab3RAQTCQBiG4QAhBAgAIQwhQIgQQoAQQggBQoAQAkAIIYQQQggQQggBYBhCgOEwDNeLD6OZ09LxMPv/XqcV/nastV14vwidsc4bqcFyIpTzhFYwik2/jZQQKnaC7/KjFgaYYI4tLrqJhw6sghvtjNFHMxkaINZyiEChVWJnh4tmoXYN2p+3UgS1rNtr7wkv6yv5MGjpddrN76hk/18sIMAtZfZSpOT6xQyWeq6jqucDHq6ROjh2iDViRFhgplnZJTSBvogCCsJo1nUJ7bV8RjXxvoGbZkuX0BW9jPkIR5dQMcdO/vMGQWyHaM8WA8QAAAAASUVORK5CYII=",
	menu_favorite_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAE7SURBVHjanJK9K4VxGIYvp+MzORsGFoNCMRgsZzUoBmRi8RcodjGaDDIo5WtkMFhMBkkGHymFoxgQRSJSvi7De1Ln5H2P436m391zDff9exCxxDbLrfbSMF07Y0IkWN9VL6xy0ChtGQuA/rQxaoVfkUiXxIBGAjXxxANRaoUYEE8/48BHJFAaAHkpGphkJ9uKA58h6/uM0MIeBdnANBcAnGcB4yQ4YJXuDNfMuVV12GbLxFmTYqVJ11WdMCTDFYckWWOQFeZ4Z5u36NBL9LJBKTGq2OSJeTqjgUIW+OCEEx45ooeB3LWmkBkaqOOGs7/8wylwzxR9XHOcuyW9c8lXVc9c/jm+CUOB3xVa679vKW/gLT9gjXraszoKDZ2yI+0UOeRzdEsvjlmc4da4GAZsumyt/DKdnjok3wMAv/BurzbgDYcAAAAASUVORK5CYII=",
	menu_survival_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAGmSURBVHjahNNPiMxxGMfxZ+eG2outtclBGW0txXHKxVC2JCTag+PIQWLTlnLiQpI/tSWpXQf/4uRCcTGyZS9KmyVclEZsy4HSzm95OfxmZmfmN8zznJ7v73l/vp/v9/t7Qr/zZlVVzbijpE8Ilx0TnTIMGzNhxh9pTNlo3JAd/wLqOeCwaRz0AFVnuwFp5m2u7XXFFiszwLKsxiq3/fbLoG8qii3f1nifBTYp2WC3XWDBvtp6jxFTOrgsS6wWwnZvsGhYCIX0Ttrbi7ix5NhVfNEr5HzoBJQl8i0rhyROCGEiC7Tq13OvR0I4nQXKEus6nKsghAvtQBGTnZ9LCM/agacWrW+q+910vKl+1Qpk9U9irqm+3gq064e8e0qNKudlM9DNf5hsfbisfipzyn454Qh+SvxHf8Dz2oR89wncdbQO3Mrc/3Jva+0vzKnHgsYfurOpecgBlxpN18yqGDGezkl08J2AedvkfQTnnDGY7pSLpdgTj+NzPIx3MR0RXyNiazyJiIhC3I+10RcRTSM62jBx0WswZtS8tuiRqvdGJVZE9/jxdwDiN8NxLhwraAAAAABJRU5ErkJggg==",
	menu_pvp_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAGaSURBVHjahJOxSsNQFIZPSYdYUOoaZxUVFKq1L9AipUMWV8F30EHBwW6F6uQkuPQRtENFyWZFH0BFO3erpAZaHYTPoTfJvTFi7pR7vv/kv3/uEXrET0AVSawqgUa8CeYTsGLgi/gmkBTAK/kIn+EpWQ4FBzSjvQ4WgmDRifaaHJqCJsKxVhZEa1GP32JLx5rkEYudqNLQm4mWQSjpM8cmn1r3ehyKUGVoSI4o4dBPxYdUBWGeZ+PzNg9pZuixjEzim+ZSbZ4gXKTi18wioUCwaAA3ZNlPxc/JTkj9r26Tp8J3hIfev9iNqRjPICyoi6Aftc+mqhqCDQa4vPzCH3BwcBmwYQpsvJQgW9iU6AMedtJSDg9oRfg3e4jKzCOXtFSkTA6PES0AfLawOKXFCI8cZYq6oMA7X9SY4nYyJiwhnIHqXmHMkFIoKPCu4qspYy6C4Gr45GKUEGFNm6mxMjYgQ4aBMjOO6j5rwr02Tj5FBFtFuI6NUDSGtKtfbz88WGLpkg+h/Q9uStqCQ5uAO1b/xAVhlS4BVzg/AwALrXkzq3u+GgAAAABJRU5ErkJggg==",
	menu_potion_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAGQSURBVHjajJLNK0RRGId/rikfdzEhIZoa/4GSko+dhYVSs7WzUBaajR07KxsbsbBgo2ysZUP5XCgpmoQFSaFGjJnxNTwW98x1Zoyu9yzue977/M4574dQwHLpJMo+T0wgpEDBPJDGs2kUUpCdSHKNP65U0PlRLrHt8T94gjifRrBbjFQQoRW3AG9AxAFIE/1Bqxhhh3cAchwxaeENJMwNnXm8lwsTSpPyX2zjl4wyh+vhMd6AK8aIIEQdQ+yyXYBHvaOFaCcLLFNdIu0iHAmHQ2AVp2SddgpxJAaBJLV/FHYPvJHIr5Biklyt6UphNape9zrVlj4UVrNCykqKacrqvF+dvy1nZ+eoKXCaylX/s3GUU7B92YIb462oTjMl8Xfd2oJN423rQRt+/Fxvvr+vDzvpHpNaklmuSXADLCL6/aSH7bIKse7/OsShhgwLiD4TO6OyWBDhzh+2Clp4AY7JAvBKV2ErvU8Ht0Zyx7PVgQyx4t7nnQhrvxp2QNvvYbE33cxywhMZzlhigLJS0/U9AEnSazSYvpvnAAAAAElFTkSuQmCC",
	menu_move_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFtSURBVHjajJQ9LwRRFIZfa2gs7e5aEt02EgmFhI2d5QcoReUPoND5+A1EohB/QDQaEiJ0PnoFCuxKNMgSdoVIeBRzjZm7Y9e5xcw993nvvOfm3GlA/4oujWpQ/XJE/THCAV94cV0PbmeTYKw7NY30aUupUOao1u79lAnHJ51/4xkeAJilhTkj2EF/ey8aKI5oNe9DYUGMBN3kcWjmxLcxR5x5ADZQUJDjGYA30qxQHbckg4KsX+A04xF4mV6PtPE9OniswksM/DjxHjf+Z9PsVuEFMr+V2qczVYUfet6jBCmWeLfwZZrCWwYnVxb8xBhpnLAgJqlRC7qQqwmVA12zrx4ldKms1V+INQAquOSoAPDOJEm2Aei2LWX8Xq/gmgNeRNyabMIWzARcvzKMS4EUMplnGm3BeqjQV4bNkjfL220pTq2zOfcFETgSd5Zg1iwVyUU1vvgI3ahV27M9HL2oTSXd60zH2tFlvf/N9wCGp7y9ilQCrwAAAABJRU5ErkJggg==",
	menu_exploit_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAGbSURBVHjahJPBS1RRFMa/92ZIZIKo1I2C1QhSiitbtRrcqYgMUbSZTdCyvyCCaBUtxEULQRfSJiQwNyOEBEGROOAsgmKmmJlFDug0Qg5mjjE/FzPcefc9ffPd1Xnn+9137jn3ClkrwhRLfOeQQ76xyCQR2+ENHB5QxK8C93HOAmKscJ7eEPMDEdKE6T1RG3hKJz3xAhepdgR+N8tyJUm3dUWddFXjklrADeU6AjkNtYH/Smkn1F7UQ520gaqSehcKrCqpahvIaUT5UOCHhptlu61wXQOhQL/S+inJzKGLEs+4zi3WrGa+ZZg4z8lzwR5cgi0mOKLMGFljzzDKLv+YIMsdG3hMhZvsAJ+ZNcA0H4AyI+zzqOmMmrb16KUSGtUl1U3lx1rWgrKa02UVWt/M5ZvniGMybPDH/GGfDTKc8JcXuMH3EGOIr4E7tE2c7rMfkOjlIADU6PN6XKvbFb0KTGBOe97QwU5fU0F1vVZDkquUohrUL6/B9e1X0ic5nvijbZfvDELM0DD1N5jy54OAuMcmNQ74wt1g9nQA4A4UZ2jqHusAAAAASUVORK5CYII=",
	menu_friend_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFgSURBVHjatJQ/KIRhHMe/790hhcslIROLZEEYlZTcQEYDi4wmg0lZSEldBiWTwczohhObwSBn8ifCRMiCznk/hrv33vd5uCuD77M8fX7Pt+f5/nqex0F/U+iP6xUJzMPqVUxp3ZZ04I0BbgBw2aaqQDtZZYspwh7xCt2842sPByEmyObJIZWmIYmpIUQjrwGyGDRU8GkZEohJg9znDLkuVRnhJalWUqNBosG2vujZMlxKShvkzOxSwtg+QysiwnGAjZihqzkplFxm8rQ1Tz+Ys9sqaljmiicOiOPTEF0MEvOJKD7KmSbJHY+cskZbjjqFy9eguFoU1YOOtK8vNSil9kDorBa05CdYJxMIeM0oDivYms8dqY7THyWXWRx2LZqlQzik+E0uwzTzZtFNMUYxneOwYbFrsUNx9RO3SCakvhKPpadwITyVRVRfwtCkO8XsJzpewnAh9GIi599/je8BAJHDBBzk80O7AAAAAElFTkSuQmCC",
	menu_waypoint_icon = b64prefix + "GQ13mru05qonapjrSuk+0rviP58gxrDKCNLY0nj3yb3TA+brTDvt6iwTLTysbawUbUVsWOx+2r/3OG24wWnY857Xba6rndb6b7UY5HnQq8F3gt9Fvsu81vlvz5ga+DeoGPB50NuhT4L+xLBFCkYpRRtHOMWGxWXF9+SMDtxc9LZ5OepTGly6TYZUZlVWbOy9+Tcy2PKVy/wKSwuml18uORtmUS5S0Vh5byqs9V/a/Xq4usnNRxr/N1s0JLeOq/teodgp3dXe/fhXoY++/66Cfsm/p/sOKV16onpvDOCZ86a9WiO1tySefsWcC0MW7R48celDssmLH+40nhV6+qba3XXNa2/udFgU8fmB1uttk3d/mGn765Vezj2pu87fkD9YOeh10f8jm4+Ln6i9uST095ntpyTPd9+4dOluMunrlpcW3ZD9Gbrra930u/evO/z4MAj08ernyo+m/lC8GXXa+Y3dW9/vi/98OlTwed3X/O+vfuR//PD7+I/3/5V/f8PAC4MHYugPAkxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHMSURBVHjahJLNb0xhFIefmduJoUk1k9E0gn4wsZCIBdLYqUTKBkmJSEhFhUX/AxKZjSUbHwuhC5HY2qC17bLBuky0RUYEk5hOtZKZx6K3172jpufdvOf8fs+973vOizStwFGnXHDBKS8ZNOvN9nZfGY9J21sDT9Qlix7woEWX1MetgH02bDhk1hFH3OAxGzbc+3/gujohTqj6QpxUr8U9aeKxDXjLZo4CMEQHb4DtcUsS+AL08JN3AMxQpR8oJzyJIw2qNQvuctxxd1qwph5u1aVp9b2DBgYesaROt27rgHVVq1ZVrTvQGsC7icHdWW/S2OGnyF62c30AT0fA8L/qWgA+U/X5WtrqpssZS5YseVzcYdWafeKpsDpj14qzLRzHZQrh7juHeE0RKbOfH/SH9VFuAqQECCjREwrdXCFDEbhBlafMhfWP9FFfnfTJ6JqLpnzosnvc7ZL3DVyOtBN/jzTPmfA7i8gjXpIhw3k+U2eYbPQPoA3Ik6MSFr8CARXyQIUAmGdLqOXI8w3xdmyy9wz8HWW/TPkgpt6SNBu5EHu8c2wlE2VZupmNqRfZlOYcuQTQm3j9fXyIZZ2cTXM1YZiN2rsSvQkAxv4MAMPgB/tha21FAAAAAElFTkSuQmCC",
	screenWidth = ctx.getWindowManager().getDefaultDisplay().getWidth(),
	screenHeight = ctx.getWindowManager().getDefaultDisplay().getHeight(),textSize=9,
	_0=0,_1=1,_2=2,_3=3,_4=4,_5=5,_6=6,Second=1000,rt0=0,rt1=90,rt2=180,rt3=270,rt4=360,
	rainbowText = new Array(6),rainbow = ["#C7FF0000","#C7FF7F00","#C7FFFF00","#C700FF00","#C70000FF","#C74B0082","#C79400D3"],rgbsubtick = 0,
	current_tab = null,developerMode = false,kbcoords=false,
	preserved_Survival = survivalTab, preserved_PVP = pvpTab, preserved_Movement = movementTab, preserved_Exploit = exploitTab,
	activeModulesIndex = new Array(1000),activeModulesTab = new Array(1000),survivalFunctions = new Array(1000),pvpFunctions = new Array(1000),movementFunctions = new Array(1000),exploitFunctions = new Array(1000),
	idgui = new Array(2),kbgui = new Array(1000),listar = new Array(9),r=0,g=255,b=0,r_=0,g_=255,b_=0,sr=250,sg=0,sb=5,horizontalmainlist,hostlayoutlist,
	intoggle = Color.WHITE,
	active = Color.GREEN,
	inactive = Color.parseColor("#ff2929"),
	revert = Color.parseColor("#34eba4"),
	transcolor = Color.parseColor("#34eba4"),
	module_back = Color.parseColor("#8C000000"),
	tab_back = Color.parseColor("#C4000000"),
	marginColor = Color.parseColor("#DB1d232b"),
	favon = Color.parseColor("#fffb00"),
	disabled = Color.parseColor("#858585");
	var enabledBox = new GradientDrawable();enabledBox.setColor(Color.GREEN);enabledBox.setAlpha(160);
	var settingBox = new GradientDrawable();settingBox.setColor(Color.parseColor("#C45691f0"));settingBox.setAlpha(160);
	var amountBox = new GradientDrawable();amountBox.setColor(Color.parseColor("#C45691f0"));amountBox.setAlpha(160);amountBox.setStroke(dip2px(1), Color.parseColor("#ffffff"));
	var closeBox = new GradientDrawable();closeBox.setColor(Color.parseColor("#C4f05656"));closeBox.setAlpha(160);closeBox.setStroke(dip2px(1), Color.parseColor("#ffffff"));
	var colBox = new GradientDrawable();colBox.setColor(Color.parseColor("#C45691f0"));colBox.setAlpha(160);colBox.setStroke(dip2px(1), Color.parseColor("#ffffff"));
	var disabledBox = new GradientDrawable(); disabledBox.setColor(inactive); disabledBox.setAlpha(160);
	var buttonBox = new GradientDrawable(); buttonBox.setColor(Color.WHITE); buttonBox.setAlpha(160);
	var favSelOn = new GradientDrawable(); favSelOn.setColor(Color.parseColor("#00ffd8")); favSelOn.setAlpha(160);
	var favSelOff = new GradientDrawable(); favSelOff.setColor(Color.parseColor("#0f6bff")); favSelOff.setAlpha(160);
	var closestyle = new GradientDrawable(); closestyle.setColor(defB); closestyle.setStroke(dip2px(1), defB); closestyle.setAlpha(196);
	var closestyle1 = new GradientDrawable(); closestyle1.setColor(tab_back); closestyle1.setCornerRadii([20, 20, 0, 0, 0, 0, 0, 0]); 
	var editstyle = new GradientDrawable(); editstyle.setColor(defB); editstyle.setStroke(dip2px(1), defB); editstyle.setAlpha(196);
	var offBackground = new GradientDrawable(); offBackground.setColor(defB); offBackground.setStroke(dip2px(1), defB); offBackground.setAlpha(160);
	var disabledMod = new GradientDrawable(); disabledMod.setColor(disabled); disabledMod.setAlpha(120);
	var editbox = new GradientDrawable(); editbox.setColor(Color.parseColor("#e05691f0"));
	var dragStyle = new GradientDrawable();dragStyle.setColor(Color.WHITE);dragStyle.setAlpha(140);dragStyle.setCornerRadius(360);dragStyle.setStroke(dip2px(1), Color.BLACK);
	var dragStyleDisabled = new GradientDrawable();dragStyleDisabled.setColor(Color.RED);dragStyleDisabled.setAlpha(140);dragStyleDisabled.setCornerRadius(360);dragStyleDisabled.setStroke(dip2px(1), Color.BLACK);
	var backgroundstyle = new GradientDrawable(); backgroundstyle.setColor(defB); backgroundstyle.setStroke(dip2px(0.5), Color.parseColor("#ffffff")); backgroundstyle.setAlpha(200);
	var backgroundstyle1 = new GradientDrawable(); backgroundstyle1.setColor(tab_back); 
	var updateBackground = new GradientDrawable(); updateBackground.setColor(tab_back); 
	var backgroundstyle3 = new GradientDrawable(); backgroundstyle3.setColor(tab_back); 
	var backgroundstyle4 = new GradientDrawable(); backgroundstyle4.setColor(tab_back); 
	var backgroundstyle5 = new GradientDrawable(); backgroundstyle5.setColor(tab_back); 
	var backgroundstyle6 = new GradientDrawable(); backgroundstyle6.setColor(tab_back);
	var backgroundstyle7 = new GradientDrawable(); backgroundstyle7.setColor(tab_back); 
	var backgroundstyle8 = new GradientDrawable(); backgroundstyle8.setColor(tab_back);
	var backgroundstyle2 = new GradientDrawable(); backgroundstyle2.setColor(tab_back); backgroundstyle2.setCornerRadii([0, 0, 0, 0, 0, 0, 20, 20]); 
	var fullclassicback = new GradientDrawable();fullclassicback.setColor(Color.TRANSPARENT);
	var backgroundstylekb = new GradientDrawable(); backgroundstylekb.setColor(defB); backgroundstylekb.setStroke(dip2px(0.5), Color.parseColor("#ffffff")); backgroundstylekb.setAlpha(200);
	var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
	var backgroundstyle2w = new GradientDrawable(); backgroundstyle2w.setCornerRadii([0, 0, 0, 0, 0, 0, 20, 20]); backgroundstyle2w.setColor(marginColor);
	var modstyle = new GradientDrawable();modstyle.setColor(Color.BLACK);modstyle.setAlpha(70);modstyle.setStroke(dip2px(2), Color.parseColor("#41caf4"));modstyle.setCornerRadii([90,90,0,0,0,0,90,90]);
	var toggled_tab = new GradientDrawable(); toggled_tab.setColor(tab_back);toggled_tab.setStroke(dip2px(1), Color.WHITE);toggled_tab.setAlpha(195);
	var keystyle = new GradientDrawable(); keystyle.setColor(Color.BLACK); keystyle.setStroke(dip2px(1), Color.parseColor("#ffffff")); keystyle.setAlpha(140);
	var titlestyle = new GradientDrawable(); titlestyle.setColor(Color.parseColor("#5fff54")); titlestyle.setStroke(dip2px(1), Color.parseColor("#ffffff")); titlestyle.setAlpha(180);
	var toaststyle = new GradientDrawable(); toaststyle.setColor(Color.BLACK); toaststyle.setStroke(dip2px(1), inactive);
var lite = parseUrl("https://instinctmods.com/jelly/jelly_vertical.json?"+Math.floor(Math.random() * 1000)), installed = "0.29";
var translatenamearr = 'Close /</br>Favorites /</br>Survival /</br>PVP /</br>Potion /</br>Move /</br>Exploit /</br>Friends /</br>Waypoints /</br>Search /</br>Add Edit Favorite /</br>Finish /</br>Add Friend /</br>Add Pointed /</br>Add Waypoint /</br>Save /</br>';
var translateOffset = 16;
var originallang = translatenamearr;
var arrs = [survivalTab,pvpTab,potionTab,movementTab,exploitTab];
var aI = 0;
var ca = arrs[aI];
for(var aI=0;aI<arrs.length;aI++){
	ca = arrs[aI];
	for(var i=0;i<ca.length;i++){
		translatenamearr = translatenamearr + ca[i].name + " /</br>";
	}
}
var eachArr = [survivalTab,pvpTab,potionTab,movementTab,exploitTab,favoriteTab,waypointTab,friendTab];
var aE = 0;
var ce = eachArr[aI];
for(var aE=0;aE<eachArr.length;aE++){
	ce = eachArr[aE];
	for(var i=0;i<ce.length;i++){
		ce[i].favorite = false;
		ce[i].keybind = null;
		ce[i].favoriteListing = null;
		ce[i].regularListing = null;
		ce[i].keybindtext = null;
	}
}
originallang = translatenamearr;
var langstring = translatenamearr.split(" /</br>");
var translatorSource = "<!DOCTYPE html><html><head><meta charset='UTF-8'><meta http-equiv='Content-type' content='text/html; charset=UTF-8'><style>.goog-te-banner-frame.skiptranslate {display: none !important;} body {top: 0px !important; }.goog-logo-link {display:none !important;} .goog-te-gadget{color: transparent !important;}p{background-color: rgba(0, 0, 0, 0.52); color:white;}</style></head><body><p id='tran'>"+translatenamearr+"</p><script>String.prototype.replaceAll = function(str1, str2, ignore) {return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,'\\$&'),(ignore?'gi':'g')),(typeof(str2)=='string')?str2.replace(/\$/g,'$$$$'):str2);}</script><script>var ori = document.getElementById('tran').innerHTML;    window.setInterval(function(){      urlchecker();}, 200); function urlchecker(){    var temp = document.getElementById('tran').innerHTML;    if(ori!==temp){        setTimeout(seturl, 3000);    }}function seturl() {    window.location.hash = '#'+document.getElementById('tran').textContent;}    </script><div id='google_translate_element' style='display:none'></div><script type='text/javascript'>function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'auto', autoDisplay: false}, 'google_translate_element');}var a = document.querySelector('#google_translate_element select');a.selectedIndex=1;a.dispatchEvent(new Event('change'));</script><script type='text/javascript' src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'></script></body></html>";
try{
	if(lite==undefined){
			updateText="\n§c§lCould not Connect";
			print("Jelly.js by Shark\nInstalled Version: "+installed+"\nPublic Version: No Connection"+"\n\n· Long press mods to access settings for that module.\n· Long press keybinds to dismiss");
	}else{
		if(lite.version!=installed){
			updateText="\n§c§lUpdate to Version "+lite.version;
			print("Jelly.js by Shark\nUpdate Available, go to www.instinctmods.com to update\n\nInstalled Version: "+installed+ "\nPublic Version: "+ lite.version+ "\n\n· Long press mods to access settings for that module.\n· Long press keybinds to dismiss");
			}else{
				updateText="\n§a§lLatest Version Installed";
				print("Jelly.js by Shark\nLatest Version Installed\n\nInstalled Version: "+installed+"\nPublic Version: "+ lite.version+ "\n\n· Long press mods to access settings for that module.\n· Long press keybinds to dismiss"); 		
				}
	}
}catch(e){clientMessage(e+'@'+e.lineNumber)}
function generateFunctions() {
	for(var i = 0;i < preserved_Survival.length;i++){
		if(preserved_Survival[i].call){
			survivalFunctions[i] = new Function ("try{"+preserved_Survival[i].call+"}catch(e){clientMessage(e)}"); 
		}else{
			survivalFunctions[i] = '';
		}
	}
	for(var i = 0;i < preserved_PVP.length;i++){
		if(preserved_PVP[i].call){
			pvpFunctions[i] = new Function ("try{"+preserved_PVP[i].call+"}catch(e){clientMessage(e)}"); 
		}else{
			pvpFunctions[i] = '';
		}
	}
	for(var i = 0;i < preserved_Movement.length;i++){
		if(preserved_Movement[i].call){
			movementFunctions[i] = new Function ("try{"+preserved_Movement[i].call+"}catch(e){clientMessage(e)}"); 
		}else{
			movementFunctions[i] = '';
		}
	}
	for(var i = 0;i < preserved_Exploit.length;i++){
		if(preserved_Exploit[i].call){
			exploitFunctions[i] = new Function ("try{"+preserved_Exploit[i].call+"}catch(e){clientMessage(e)}"); 
		}else{
			exploitFunctions[i] = '';
		}
	}
}
generateFunctions();
function filterValue(obj, key, value) {
  return obj.find(function(v){ return v[key] === value});
}
function threaded() {
	try{
		pT.schedule(new Runnable(function(){
			checkTick(exploitTab,"threaded");
			checkTick(pvpTab,"threaded");
			checkTick(movementTab,"threaded");
			checkTick(exploitTab,"threaded");
			eval(threaded());
		}), .000000000001, NS)
	}catch(e){clientMessage(e+'@'+e.lineNumber)}
}
threaded();
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
function createDelayedThread() {
	hostThread = new Thread(new Runnable({
		run() {
			Looper.prepare();
			new Handler().postDelayed(new Runnable({
				run() {
					try{
						if(parseInt(exploitTab[15].setting.split(';')[0].split(':')[1])>50)exploitTab[15].setting="cps:50;";
						checkTick(exploitTab,"delayedthread",exploitTab[15]);
						new Handler().postDelayed(this, 1000/parseInt(exploitTab[15].setting.split(';')[0].split(':')[1]));
					}catch(e){clientMessage(e+'@'+e.lineNumber)}
				}
			}), Second/parseInt(exploitTab[15].setting.split(';')[0].split(':')[1]));
			new Handler().postDelayed(new Runnable({
				run() {
					try{
						if(parseInt(pvpTab[17].setting.split(';')[0].split(':')[1])>50)pvpTab[17].setting="cps:50;";
						checkTick(pvpTab,"delayedthread",pvpTab[17]);
						new Handler().postDelayed(this, 1000/parseInt(pvpTab[17].setting.split(';')[0].split(':')[1]));
					}catch(e){clientMessage(e+'@'+e.lineNumber)}
				}
			}), Second/parseInt(pvpTab[17].setting.split(';')[0].split(':')[1]));
			Looper.loop();
		}
	}))
	hostThread.start();
}
createDelayedThread();
function keyevent(key) {
	var k = new Thread(new Runnable({run(){
				if(key=="f5")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_F5);
				if(key=="-")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_NUMPAD_SUBTRACT);//up slight
				if(key=="+")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_NUMPAD_ADD);//down slight
				if(key=="<")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_DPAD_LEFT);//left smooth
				if(key==">")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_DPAD_RIGHT);//right smooth
				if(key=="R")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_R);
				if(key=="Z")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Z);
				if(key=="enter")inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_ENTER);
		}}));k.start();
}
 /*
 *  p_ target pitch
 *  y_ target yaw
 */
function rotateplayer(yaw,pitch) {
	var curY = Entity.getYaw(getPlayerEnt());
	//(x + 360) % 360
	var diff = Math.abs((yaw)-(curY));
	var eq = (yaw)-(curY);
	var i;
	if(curY>yaw){
		for(i = 0; i < diff; i++){
			curY = Entity.getYaw(getPlayerEnt());
			if(curY<yaw){i=diff}
			inst.sendKeyDownUpSync(KeyEvent.KEYCODE_DPAD_LEFT);
			}
	}else{
		for(i = 0; i < diff; i++){
			curY = Entity.getYaw(getPlayerEnt());
			if(curY>yaw){i=diff}
			inst.sendKeyDownUpSync(KeyEvent.KEYCODE_DPAD_RIGHT);
			}
	}
	/*if(Entity.getPitch(player_)<p_-2){
		inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_DPAD_DOWN);
	}else{
		inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_DPAD_UP);
	}*/
}
function isOn(arr,val) {
    for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i].name==val&&arr[i].state){
            return arr[i];
        }
    }
}
function blInForeground() {
	var activityService = ctx.getSystemService(Context.ACTIVITY_SERVICE);
	var foregroundTaskInfo = activityService.getRunningTasks(1).get(0);
	var foregroundTaskPackageName = foregroundTaskInfo.topActivity.getPackageName();

	if(foregroundTaskPackageName.toLowerCase() == ctx.getPackageName().toLowerCase()){
		return true;
	}else{
		return false;
	}
}
/*getSetting(movementTab,"Teleport","x")*/
function getSetting(arr,name,setting) {
    for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i].name==name){
			var settingarr = arr[i].setting.split(';')
			for (var i = 0, length = settingarr.length; i < length; i++) {
				if(settingarr[i].split(':')[0]==setting){
					return settingarr[i].split(':')[1];
				}
			}
        }
    }
}
function triggerModule(arr,i) {
	if(arr!==survivalTab&&arr!==pvpTab&&arr!==movementTab&&arr!==exploitTab){
		var callthis = new Function (arr[i].call); 
		callthis();
	}else{
		if(arr==survivalTab){
			survivalFunctions[i]();
		}
		if(arr==movementTab){
			movementFunctions[i]();
		}
		if(arr==exploitTab){
			exploitFunctions[i]();
		}
		if(arr==pvpTab){
			pvpFunctions[i]();
		}
	}
}
function checkTick(arr,type,mod) {
    for (var i = 0, length = arr.length; i < length; i++) {
		if(mod!==undefined&mod==arr[i]){
			var continueSearch = true;
		}
		if(mod==undefined||continueSearch){
			var safe = confirmScreenSafe(),arp = arr[i].rp, aste = arr[i].state;
			if(!safe&&mod==undefined)return;
			if(type=="tick"){
				if (arp==type&&aste){
					triggerModule(arr,i)
			}}
			if(type=="threaded"){
				if (arp==type&&aste){
					triggerModule(arr,i)
			}}
			if(type=="delayedthread"){
				if (arp==type&&aste){
					triggerModule(arr,i)
			}}
			if(type=="t10"){
				if (arp==type&&aste){
					if(mod!==undefined){
						triggerModule(arr,i)
					}else if(i!==12){
						triggerModule(arr,i)
					}
			}}
			if(type=="atthook"){
				if (aste){
					if(arp==type||arp=="attusehook"){
						triggerModule(arr,i)
					}
			}}
			if(type=="usehook"){
				if (aste){
					if(arp==type||arp=="attusehook"){
						triggerModule(arr,i)
					}
			}}
		}
    }
	return
}
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}
function closeMenu() {
	current_tab = null;
	potionTab[0].menu=false;
	survivalTab[0].menu=false;
	movementTab[0].menu=false;
	pvpTab[0].menu=false;
	exploitTab[0].menu=false;
	friendTab[0].menu=false;
	waypointTab[0].menu=false;
	favoriteTab[0].menu=false;
	if(!exploitTab[20].state){
		openMenu.getBackground().setAlpha(70);openMenu.setTextColor(Color.parseColor("#41caf4"));
	}
	if(exploitTab[20].state){
		runKeybinds("invis");
		openMenu.getBackground().setAlpha(0);openMenu.setTextColor(Color.argb(0,0,0,0));
		openMenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(40),dip2px(40)));
	}
	openMenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(40),dip2px(40)));
	menuOpen=false;
	LIST.dismiss();
	if(!horizontalmenu){
		openDrag.dismiss();
		openInfo.dismiss();
		openTrans.dismiss();
		openBrowser.dismiss();
	}
	ctx.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
}
function dip2px(dips) {
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
dragLoc = screenWidth-dip2px(100);
menuXDim = dip2px(100);
tabs_width = dip2px(97);
jelly_classic = false;
previous_layout = "vertical";
current_layout = "vertical";
function changeOrientation() {
	horizontal=survivalTab[1].state;
	if(survivalTab[1].state){horizontallay=0}else{horizontallay=1}
	LIST.dismiss();seeList();
}
function tohtml(strin,boo) {
var str = decodeURIComponent(strin.toString());
if(str.includes("-")){
str = str.replace("-","");
str = str.slice(1);
str = str.slice(1);
}
if(str.includes(">")){
str = str.replace(">","");
str = str.slice(1);
str = str.slice(1);
}
if(boo){
var statuss="<font color=#3ef900>-</font>";
}else{
var statuss="<font color=#ff2929>></font>";
}
var htmld = Html.fromHtml("<font color=#000000>&#8203 &#8203"+str+"</font>    <b>"+statuss)
return htmld;
}
function createItem(i,arr,hide,favSel) {
	/*if(arr!=favoriteTab&&!favSel){
		for (var e = 1; e < favoriteTab.length; e++) {
			if (arr[i].name == favoriteTab[e].name) {
				hide=true;
			}
			}
	}*/
	var backgroundstyle = new GradientDrawable();
	backgroundstyle.setColor(module_back);
	backgroundstyle.setCornerRadii([20, 20, 0, 0, 0, 0, 20, 20]);
	var isOn = null;
	var favoritemenu = false;
	if(favSel){isOn=favSel;}
	if(arr==favoriteTab){
		favoritemenu = true;
	}
	function changeColor(){
		if(!favoriteTab[0].open){
			arr[i].state ? (sub1.setTextColor(active),s2.setBackground(enabledBox)): (sub1.setTextColor(inactive),s2.setBackground(disabledBox));
			arr[i].style=="white"?(sub1.setTextColor(intoggle),s2.setBackground(buttonBox)):'';
		}
	}
	var layout = new LinearLayout(ctx);
		layout.setOrientation(0);

	var gearBtn = new ImageView(ctx);
	gearBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(10),dip2px(30)));
	gearBtn.setPadding(dip2px(1),dip2px(1),dip2px(1),dip2px(1));
	gearBtn.setImageBitmap(decode64img(gearicon));
	gearBtn.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		if(arr==waypointTab&&waypointTab.length>1&&i>0){
			arr[0].setting="name:"+arr[i].name+";X:"+arr[i].X+";Y:"+arr[i].Y+";Z:"+arr[i].Z+";";
			openSetting(0,arr,"add waypoint",i);
			return true;
		}
		openSetting(i,arr);
		return true;
	}}));

	var favBtn = new ImageView(ctx);
	favBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(10),dip2px(30)));
	favBtn.setPadding(dip2px(1),dip2px(1),dip2px(1),dip2px(1));
	if(arr[i].favorite==true){
		favBtn.setImageBitmap(decode64img(favoriteiconon));
		favBtn.setColorFilter(favon, PorterDuff.Mode.SRC_ATOP);
	}else{
		favBtn.setImageBitmap(decode64img(favoriteiconoff));
	}
	favBtn.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		if(arr[i].favorite==true){
			try{
				addFavorite(arr,i,true);
				if(favoriteTab[0].menu){
					favoriteview.removeAllViews();
					generateLists("favorite");
					if(jelly_classic){
						resetTabs(favoriteTab)
					}
				}else{
					favBtn.setImageBitmap(decode64img(favoriteiconoff));
					favBtn.clearColorFilter();
				}
				openFavorite.setText(setContent(menu_favorite_icon,dip2px(10),dip2px(10)," " + langstring[1] + " (" + (favoriteTab.length-1) + ")"));
			}catch(e){clientMessage(e+" @"+e.lineNumber)}
		}else{
			addFavorite(arr,i);
			favBtn.setImageBitmap(decode64img(favoriteiconon));
			favBtn.setColorFilter(favon, PorterDuff.Mode.SRC_ATOP);
			
			openFavorite.setText(setContent(menu_favorite_icon,dip2px(10),dip2px(10)," " + langstring[1] + " (" + (favoriteTab.length-1) + ")"));
		}
	}}));
	
	var sub1 = new TextView(ctx);
		sub1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
	var widertext = false;
	var tempwidex = 0;
		if(arr[i].setting==undefined){
			gearBtn.setLayoutParams(new LinearLayout.LayoutParams(0,0));
			widertext = true;
		}
		if(arr==friendTab&&i>1){
			favBtn.setLayoutParams(new LinearLayout.LayoutParams(0,0));}
	if(horizontalmenu){
		if(widertext){tempwidex = dip2px(90);
		}else{tempwidex = dip2px(80);}
		sub1.setLayoutParams(new LinearLayout.LayoutParams(tempwidex, dip2px(30)));
	}
	if(fullwidthtoggles&&!horizontalmenu&&jelly_classic){
		if(arr[i].setting==undefined)gearBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(10),0));
		tempwidex = menuXDim-dip2px(122);
		sub1.setLayoutParams(new LinearLayout.LayoutParams(tempwidex, dip2px(30)));
		backgroundstyle.setCornerRadii([0, 0, 0, 0, 0, 0, 0, 0]);
	}
	if(fullwidthtoggles&&!horizontalmenu&&!jelly_classic){
		if(widertext){
			gearBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(10),0));
			tempwidex = menuXDim-dip2px(24);
		}else{tempwidex = menuXDim-dip2px(24);}
		sub1.setLayoutParams(new LinearLayout.LayoutParams(tempwidex, dip2px(30)));
	}
	if(fullwidthtoggles&&!horizontalmenu&&jelly_classic&&favoriteTab[0].open==true){
		if(widertext){tempwidex = menuXDim-dip2px(12);
		}else{tempwidex = menuXDim-dip2px(24);}
		sub1.setLayoutParams(new LinearLayout.LayoutParams(tempwidex, dip2px(30)));
	}
	if(fullwidthtoggles&&!horizontalmenu&&jelly_classic&&!searchb.getText().toString().matches("")){
		if(widertext){tempwidex = menuXDim-dip2px(12);
		}else{tempwidex = menuXDim-dip2px(24);}
		sub1.setLayoutParams(new LinearLayout.LayoutParams(tempwidex, dip2px(30)));
	}
	if(arr[i].display=="hidden"||hide||arr[i].removed){
		sub1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
	}
	sub1.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);

	var s2 = new TextView(ctx);
	s2.setBackground(disabledBox);
	s2.setLayoutParams(new LinearLayout.LayoutParams(dip2px(2), dip2px(30)));
	if(arr[i].display=="hidden"||hide||arr[i].removed){
		s2.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
	}
	s2.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	s2.setText("");
	changeColor();
	sub1.setText(" "+arr[i].name+" ");
	sub1.setSingleLine();

	function clicked(){
		try{
		if(favSel==undefined){
		if(arr==waypointTab&&waypointTab.length>1&&i>0){
			Entity.setPosition(getPlayerEnt(), arr[i].X, arr[i].Y + 2, arr[i].Z);
		}
		if(arr==friendTab&&friendTab.length>2&&i>1){
			friendTab.splice(i,1);
			ctx.runOnUiThread(new Runnable({ run: function() { 
			try{ 
				friendview.removeAllViews(); 
				for(var i=0;i<friendTab.length;i++){ 	 
					friendview.addView(createItem(i,friendTab)); } 
					}catch(e){clientMessage(e+'@'+e.lineNumber)} }}));
					return;
		}
		if(arr[i].state!==undefined){
			if(arr[i].delayedStart&&arr[i].keybind!==null&&arr[i].keybind!==undefined){
				arr[i].state=!arr[i].state;changeColor();
			}else if(arr[i].delayedStart==undefined){
				arr[i].state=!arr[i].state;changeColor();
			}else if(arr[i].delayedStart){
				newKeybind(i,arr);
				arr[i].keystate=true;
			}

		}
		if(arr[i].call){
			if(arr!==survivalTab&&arr!==pvpTab&&arr!==movementTab&&arr!==exploitTab){
				var callthis = new Function (arr[i].call); 
			}else{
				if(arr==survivalTab){
					callthis = survivalFunctions[i];
				}
				if(arr==movementTab){
					callthis = movementFunctions[i];
				}
				if(arr==exploitTab){
					callthis = exploitFunctions[i];
				}
				if(arr==pvpTab){
					callthis = pvpFunctions[i];
				}
			}
			function trigger(){
				if(arr[i].rp!=="kb"&&arr[i].rp!=="threaded"&&arr[i].delayedStart==undefined){callthis();}else if(arr[i].rp==undefined&&arr[i].delayedStart==undefined){callthis();}
				if(arr[i].keystate!==undefined&&!arr[i].keystate&arr[i].state){
					newKeybind(i,arr);
					arr[i].keystate=true;
					if(arr[i].delayedStart==undefined){arr[i].keybindtext.setTextColor(active);}
				}
				if(arr[i].state&&arr[i].keystate){
					arr[i].keybindtext.setTextColor(active)
				}else if(!arr[i].state&&arr[i].keystate){
					arr[i].keybindtext.setTextColor(inactive)
				}
			}
			if(arr[i].type=="button"){
				if(arr[i].rp&&!arr[i].rp.includes("hook")&arr[i].disablerp!==false){
					trigger();
				}else if(arr[i].rp==undefined){
					trigger();
				}
			}
			if(arr[i].type=="switch"){
				if(arr[i].rp&&!arr[i].rp.includes("hook")&arr[i].disablerp!==false){
					if(arr[i].state){trigger()}
				}else if(arr[i].rp==undefined){
					if(arr[i].state){trigger()}
				}
				if(arr[i].state==false&arr[i].keystate==true){
					arr[i].keybindtext.setTextColor(inactive)
				}
				if(arr[i].rp&&arr[i].rp.includes("hook")&&!arr[i].keystate){
					newKeybind(i,arr);
					arr[i].keystate=true;
					if(arr[i].delayedStart==undefined){arr[i].keybindtext.setTextColor(active);}
				}else if(arr[i].keystate){
					if(arr[i].state){
						arr[i].keybindtext.setTextColor(active);
					}else{
						arr[i].keybindtext.setTextColor(inactive);
					}
				}
			}
			if(arr[i].keystate==false&&arr[i].state==undefined){
				newKeybind(i,arr);
				arr[i].keystate=true;
				if(arr[i].name=="Elevator"){
					newKeybind(i+1,arr);arr[i+1].keystate=true;
				}}
		}
	}else{
		if(favSel!==undefined){
			if(arr[i].state==true||arr[i].keystate==true){
				askArg(arr,i,"Module is already enabled or has a keybind displayed, remove keybind and/or disable mod");
				return;
			} else if(isOn=='on'){
				sub1.setTextColor(Color.parseColor("#0f6bff"));s2.setBackground(favSelOff);
				addFavorite(arr,i,true);
				isOn='off';
			} else if(isOn=='off'){
				sub1.setTextColor(Color.parseColor("#00ffd8"));s2.setBackground(favSelOn);
				addFavorite(arr,i);
				isOn='on';
			}
		}
	}
}catch(e){clientMessage(e.lineNumber+", "+e)}
	}
	
	if(extended||arr==waypointTab&&i>0){layout.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		clicked();
	}}));}
	layout.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		if(arr[i].optionSensitive!==undefined&&arr[i].optionSensitive&&!needR){
			clicked();
		}else if(arr[i].optionSensitive==undefined){
			clicked();
		}else if(arr[i].optionSensitive!==undefined&&arr[i].optionSensitive&&needR){
			askArg(arr,i,"Options.txt was edited and requires a restart before running this mod. Click to Restart Blocklauncher",'Restarting',"rest()");
		}
	}}));
	layout.setOnLongClickListener(new android.view.View.OnLongClickListener({
		onLongClick: function() {
			if(arr==waypointTab&&waypointTab.length>1&&i>0){
				arr[0].setting="name:"+arr[i].name+";X:"+arr[i].X+";Y:"+arr[i].Y+";Z:"+arr[i].Z+";";
				openSetting(0,arr,"add waypoint",i);
				return true;
			}
			openSetting(i,arr);
			return true;
		}}));
	sub1.setGravity(Gravity.CENTER_VERTICAL | Gravity.RIGHT);
	if(fullwidthtoggles&&!horizontalmenu){
		sub1.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER);
	}
	sub1.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
	sub1.setMarqueeRepeatLimit(-1);
	sub1.setHorizontallyScrolling(true);
	sub1.setSelected(true);
	sub1.setPadding(0,dip2px(5),0,dip2px(5));
	if(isOn=='on'){sub1.setTextColor(Color.parseColor("#00ffd8"));s2.setBackground(favSelOn);}
	if(isOn=='off'){sub1.setTextColor(Color.parseColor("#0f6bff"));s2.setBackground(favSelOff);}
	if(isOn!==null){
		if(arr[i].state==true||arr[i].keystate==true){
			sub1.setTextColor(disabled);s2.setBackground(disabledMod);
		}
	}
	if(horizontalmenu){sub1.setGravity(Gravity.CENTER_VERTICAL);}
	s2.setGravity(Gravity.CENTER_VERTICAL | Gravity.RIGHT);
	if(horizontalmenu){s2.setGravity(Gravity.CENTER_VERTICAL);}
	if(gearBtn.getParent()!=null){gearBtn.getParent().removeView(gearBtn);}
	if(favBtn.getParent()!=null){favBtn.getParent().removeView(favBtn);}
	if(sub1.getParent()!=null){sub1.getParent().removeView(sub1);}
	if(!horizontalmenu){layout.addView(favBtn);layout.addView(gearBtn);layout.addView(sub1);}	
	if(!horizontalmenu){layout.setGravity(Gravity.RIGHT);}
	if(s2.getParent()!=null){s2.getParent().removeView(s2);}
	layout.addView(s2);
	if(horizontalmenu){layout.addView(favBtn);layout.addView(sub1);layout.addView(gearBtn);}
	layout.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, dip2px(30)));
	if(!horizontalmenu&&!hide&&!fullwidthtoggles){layout.getLayoutParams().setMargins(0,dip2px(1.5),0,dip2px(1.5));//regluar vertical
	}else if(!horizontalmenu&&!hide&&fullwidthtoggles&&jelly_classic){layout.getLayoutParams().setMargins(0,dip2px(0.5),0,dip2px(0.5));//full classic
	}else if(!horizontalmenu&&!hide&&fullwidthtoggles){layout.getLayoutParams().setMargins(0,dip2px(1.5),0,dip2px(1.5));}//half vertical full width
	if(arr[i].display=="hidden"||hide){layout.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));layout.getLayoutParams().setMargins(0,0,0,0);}
	if(!horizontalmenu&&!hide&&fullwidthtoggles&&jelly_classic){
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		layout.setBackground(fullclassicback);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		survivalview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		pvpview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		potionview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		movementview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		exploitview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		friendview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		waypointview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
		favoriteview.setBackground(fullclassicbacktab);
		var fullclassicbacktab = new GradientDrawable();fullclassicbacktab.setColor(marginColor);
	}else{layout.setBackground(backgroundstyle);}
	if(arr[i].optionSensitive!==undefined&&arr[i].optionSensitive&&needR){
		sub1.setTextColor(disabled);
		s2.setBackground(disabledMod);
	}
	if(favoritemenu){
		arr[i].favoriteListing = layout;
		arr[i].regularListing = null;
	}else{
		arr[i].regularListing = layout;
		arr[i].favoriteListing = null;
	}
	return layout;
}
function seeList(hide) {
ctx.runOnUiThread(new Runnable({
run: function() {
try {
	if(exploitTab[20].state){
		runKeybinds("display");
	}
hostmenuhostlay = new LinearLayout(ctx);
hostmenuhostlay.setOrientation(1);
hostmenuhostlay.setLayoutParams(new LinearLayout.LayoutParams(menuXDim, RelativeLayout.LayoutParams.WRAP_CONTENT));
buttonview = new LinearLayout(ctx);
buttonview.setOrientation(0);
buttonview.setBackground(editstyle);
if(horizontalmenu){hostmenuhostlay.setOrientation(0);hostmenuhostlay.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, dip2px(30)));}

closemenu = new Button(ctx);
if(horizontalmenu){
	closemenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	closemenu.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	closemenu.setGravity(Gravity.CENTER_VERTICAL|Gravity.CENTER);
	closemenu.setPadding(0,0,0,0);
}
closemenu.setTextColor(Color.parseColor("#ffffff"));
closemenu.setBackgroundDrawable(closestyle1);
closemenu.setText(langstring[0]);
closemenu.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	if(closemenu.getText()==langstring[11]){
		LIST.dismiss();
		if(!horizontalmenu){
			openDrag.dismiss();
			openInfo.dismiss();
			openTrans.dismiss();
			openBrowser.dismiss();
		}
		favoriteTab[0].open=false;
		seeList();
		runKeybinds(false);
	}else{
	closeMenu();}
	}}));
hostmenuhostlay.addView(closemenu);

updateTxt = new TextView(ctx);
updateTxt.setTextColor(defC);
updateTxt.setBackground(updateBackground);
updateTxt.setText(Html.fromHtml("Update"));
updateTxt.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.FILL_PARENT, dip2px(30)));
updateTxt.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
updateTxt.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
updateTxt.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	openUpdateSel();
	}}));
if(lite!=undefined&&lite.version!=installed){hostmenuhostlay.addView(updateTxt);}
listar[5]=updateTxt;

searchb=new EditText(ctx);
searchb.setHint(langstring[9]);
searchb.setTextColor(Color.WHITE);			
searchb.setHintTextColor(Color.parseColor("#b7b7b7"));
searchb.setLayoutParams(new LinearLayout.LayoutParams(menuXDim-dip2px(30), dip2px(30)));
if(horizontalmenu){
	searchb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(50), dip2px(30)));
	searchb.setPadding(0,0,0,0);
}
searchb.setPadding(dip2px(5),0,0,dip2px(7));
searchb.addTextChangedListener(new android.text.TextWatcher({
	afterTextChanged: function(text) {
		globalSearch = text;
		try{
			if(!searchb.getText().toString().matches("")){
					survivalview.removeAllViews();
					pvpview.removeAllViews();
					potionview.removeAllViews();
					movementview.removeAllViews();
					exploitview.removeAllViews();
					friendview.removeAllViews();
					waypointview.removeAllViews();
					favoriteview.removeAllViews();
					for(var i=0;i<survivalTab.length;i++){
						if(survivalTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1){
							survivalview.addView(createItem(i,survivalTab));
						}else{
							survivalview.addView(createItem(i,survivalTab,true));
						}
					}
					for(var i=0;i<pvpTab.length;i++){
						if(pvpTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1){
							pvpview.addView(createItem(i,pvpTab));
						}else{
							pvpview.addView(createItem(i,pvpTab,true));
						}
					}
					for(var i=0;i<potionTab.length;i++){
						if(potionTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1){
							potionview.addView(createItem(i,potionTab));
						}else{
							potionview.addView(createItem(i,potionTab,true));
						}
					}
					for(var i=0;i<movementTab.length;i++){
						if(movementTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1){
							movementview.addView(createItem(i,movementTab));
						}else{
							movementview.addView(createItem(i,movementTab,true));
						}
					}
					for(var i=0;i<exploitTab.length;i++){
						if(exploitTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1){
							exploitview.addView(createItem(i,exploitTab));
						}else{
							exploitview.addView(createItem(i,exploitTab,true));
						}
					}
					for(var i=0;i<friendTab.length;i++){
						if(friendTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1){
							friendview.addView(createItem(i,friendTab));
						}else{
							friendview.addView(createItem(i,friendTab,true));
						}
					}
					for(var i=0;i<waypointTab.length;i++){
						if(waypointTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1){
							waypointview.addView(createItem(i,waypointTab));
						}else{
							waypointview.addView(createItem(i,waypointTab,true));
						}
					}
					openSurvival.setLayoutParams(new LinearLayout.LayoutParams(0, dip2px(0)));
					openPvp.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
					openPotion.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
					openMovement.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
					openExploit.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
					openFriend.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
					openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
					openFavorite.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
					if(horizontalmenu){openSurvival.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));}
			}else{
				survivalview.removeAllViews();
				pvpview.removeAllViews();
				potionview.removeAllViews();
				movementview.removeAllViews();
				exploitview.removeAllViews();
				friendview.removeAllViews();
				waypointview.removeAllViews();
				favoriteview.removeAllViews();
				openSurvival.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				openPvp.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				openPotion.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				openMovement.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				openExploit.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				openFriend.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				openFavorite.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
				survivalTab[0].menu = false; 
				pvpTab[0].menu = false; 
				potionTab[0].menu = false; 
				movementTab[0].menu = false; 
				exploitTab[0].menu = false; 
				friendTab[0].menu = false; 
				waypointTab[0].menu = false; 
				favoriteTab[0].menu = false; 
				openFavorite.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
				openSurvival.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
				openPvp.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
				openPotion.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
				openMovement.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
				openExploit.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
				openFriend.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
				openWaypoint.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
			}
		}catch(e){clientMessage(e)}
	}
}));
searchb.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	current_tab = null;
	openEdit();
	}}));
searchb.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
buttonview.addView(searchb);

rotatemenu = new android.widget.ImageView(ctx);
rotatemenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(30), dip2px(30)));
rotatemenu.getLayoutParams().gravity=Gravity.CENTER;
rotatemenu.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(rotateicon, 0), 0, android.util.Base64.decode(rotateicon, 0).length)));
rotatemenu.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	horizontalmenu=!horizontalmenu;
	favoriteTab[0].menu = false;
	closestyle1.setCornerRadii([0, 0, 0, 0, 0, 0, 0, 0]);
	backgroundstyle2.setCornerRadii([0, 0, 0, 0, 0, 0, 0, 0]);
	backgroundstyle2w.setCornerRadii([0, 0, 0, 0, 0, 0, 0, 0]);
	try{openDrag.dismiss();openInfo.dismiss();openBrowser.dismiss();openTrans.dismiss();}catch(e){clientMessage(e+'@'+e.lineNumber)}
	if(!horizontalmenu&&!bottommenu){
		ctx.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
	}
	if(!horizontalmenu){
		closestyle1.setCornerRadii([20, 20, 0, 0, 0, 0, 0, 0]);
		backgroundstyle2.setCornerRadii([0, 0, 0, 0, 0, 0, 20, 20]);
		backgroundstyle2w.setCornerRadii([0, 0, 0, 0, 0, 0, 20, 20]);
	}
	LIST.dismiss(); seeList();
	}}));
buttonview.addView(rotatemenu);
if(horizontalmenu){
	rotatemenu = new android.widget.ImageView(ctx);
	rotatemenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(30), dip2px(30)));
	rotatemenu.getLayoutParams().gravity=Gravity.CENTER;
	if(bottommenu){
		rotatemenu.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(downicon, 0), 0, android.util.Base64.decode(downicon, 0).length)));
	}else{
		rotatemenu.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(upicon, 0), 0, android.util.Base64.decode(upicon, 0).length)));
		}
	rotatemenu.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		bottommenu=!bottommenu;
		LIST.dismiss(); seeList();
		if(bottommenu){
			ctx.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
		}
		}}));
	buttonview.addView(rotatemenu);
}

hostmenuhostlay.addView(buttonview);

scrollText = new android.widget.TextView(ctx);
scrollText.setText("Jelly by Shark. Long Press mods for settings. Long Press waypoints to edit/delete");
scrollText.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
scrollText.setTextColor(Color.WHITE);
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setBackgroundDrawable(closestyle);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
if(!horizontalmenu)hostmenuhostlay.addView(scrollText);


horizontalmainlistwrapper = new LinearLayout(ctx);
horizontalmainlistwrapper.setOrientation(LinearLayout.HORIZONTAL);

horizontalmainlist = new LinearLayout(ctx);//window view
horizontalmainlist.setOrientation(1);
horizontalmainlist.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT));
if(horizontalmenu){horizontalmainlist.setOrientation(0);}
hostscroll = new android.widget.ScrollView(ctx);
sidemodsscroll = new android.widget.ScrollView(ctx);
sidemodsparent = new LinearLayout(ctx);
sidemodsparent.setOrientation(LinearLayout.VERTICAL);
sidemodsscroll.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT));
sidemodsparent.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT));
if(horizontalmenu){hostscroll = new android.widget.HorizontalScrollView(ctx);}
hostlayoutlist = new LinearLayout(ctx);//main list w/ tabs&modules
hostlayoutlist.setOrientation(1);
if(!jelly_classic){
	hostlayoutlist.setLayoutParams(new LinearLayout.LayoutParams(menuXDim, RelativeLayout.LayoutParams.WRAP_CONTENT));
}
if(horizontalmenu){hostlayoutlist.setOrientation(0);hostlayoutlist.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT));}

sidemodsscroll.addView(sidemodsparent);
horizontalmainlistwrapper.addView(hostlayoutlist);
horizontalmainlistwrapper.addView(sidemodsscroll);

if(jelly_classic&&!horizontalmenu){
	hostmenuhostlay.addView(horizontalmainlistwrapper);
}else{
	hostscroll.addView(horizontalmainlistwrapper);
	hostmenuhostlay.addView(hostscroll);
}
menuTitle = new TextView(ctx);
menuTitle.setTextColor(Color.parseColor("#ffffff"));
menuTitle.setText("Jelly Vertical "+installed);
if(!horizontalmenu){menuTitle.setLayoutParams(new LinearLayout.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT));}else{
	menuTitle.setLayoutParams(new LinearLayout.LayoutParams(0,0));
}
menuTitle.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
menuTitle.setGravity(Gravity.CENTER_VERTICAL | Gravity.RIGHT);
let menutitlegrad = Array_Java.newInstance(Integer_Java.TYPE, 6);
menutitlegrad[0] = Color.TRANSPARENT;
menutitlegrad[1] = Color.HSVToColor([rt1, 0.8, 1.0]);
menuTitle.setBackgroundDrawable(new GradientDrawable(GradientDrawable.Orientation.LEFT_RIGHT ,menutitlegrad));
horizontalmainlist.addView(menuTitle);
horizontalmainlist.addView(hostmenuhostlay);

survivalhost = new LinearLayout(ctx);
survivalhost.setOrientation(1);
if(horizontalmenu){survivalhost.setOrientation(0);}
survivalview = new LinearLayout(ctx);
survivalview.setOrientation(1);
survivalview.setGravity(Gravity.RIGHT);
if(horizontalmenu){survivalview.setOrientation(0);}
var survivalscroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){survivalscroll = new android.widget.HorizontalScrollView(ctx);}
survivalscroll.addView(survivalview);

pvphost = new LinearLayout(ctx);
pvphost.setOrientation(1);
if(horizontalmenu){pvphost.setOrientation(0);}
pvpview = new LinearLayout(ctx);
pvpview.setOrientation(1);
pvpview.setGravity(Gravity.RIGHT);
if(horizontalmenu){pvpview.setOrientation(0);}
var pvpscroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){pvpscroll = new android.widget.HorizontalScrollView(ctx);}
pvpscroll.addView(pvpview);

potionhost = new LinearLayout(ctx);
potionhost.setOrientation(1);
if(horizontalmenu){potionhost.setOrientation(0);}
potionview = new LinearLayout(ctx);
potionview.setOrientation(1);
potionview.setGravity(Gravity.RIGHT);
if(horizontalmenu){potionview.setOrientation(0);}
var potionscroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){potionscroll = new android.widget.HorizontalScrollView(ctx);}
potionscroll.addView(potionview);

movementhost = new LinearLayout(ctx);
movementhost.setOrientation(1);
if(horizontalmenu){movementhost.setOrientation(0);}
movementview = new LinearLayout(ctx);
movementview.setOrientation(1);
movementview.setGravity(Gravity.RIGHT);
if(horizontalmenu){movementview.setOrientation(0);}
var movementscroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){movementscroll = new android.widget.HorizontalScrollView(ctx);}
movementscroll.addView(movementview);

exploithost = new LinearLayout(ctx);
exploithost.setOrientation(1);
if(horizontalmenu){exploithost.setOrientation(0);}
exploitview = new LinearLayout(ctx);
exploitview.setOrientation(1);
exploitview.setGravity(Gravity.RIGHT);
if(horizontalmenu){exploitview.setOrientation(0);}
var exploitscroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){exploitscroll = new android.widget.HorizontalScrollView(ctx);}
exploitscroll.addView(exploitview);

friendhost = new LinearLayout(ctx);
friendhost.setOrientation(1);
if(horizontalmenu){friendhost.setOrientation(0);}
friendview = new LinearLayout(ctx);
friendview.setOrientation(1);
friendview.setGravity(Gravity.RIGHT);
if(horizontalmenu){friendview.setOrientation(0);}
var friendscroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){friendscroll = new android.widget.HorizontalScrollView(ctx);}
friendscroll.addView(friendview);

waypointhost = new LinearLayout(ctx);
waypointhost.setOrientation(1);
if(horizontalmenu){waypointhost.setOrientation(0);}
waypointview = new LinearLayout(ctx);
waypointview.setOrientation(1);
waypointview.setGravity(Gravity.RIGHT);
if(horizontalmenu){waypointview.setOrientation(0);}
var waypointscroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){waypointscroll = new android.widget.HorizontalScrollView(ctx);}
waypointscroll.addView(waypointview);

favoritehost = new LinearLayout(ctx);
favoritehost.setOrientation(1);
if(horizontalmenu){favoritehost.setOrientation(0);}
favoriteview = new LinearLayout(ctx);
favoriteview.setOrientation(1);
favoriteview.setGravity(Gravity.RIGHT);
if(horizontalmenu){favoriteview.setOrientation(0);}
var favoritescroll = new android.widget.ScrollView(ctx);
if(horizontalmenu){favoritescroll = new android.widget.HorizontalScrollView(ctx);}
favoritescroll.addView(favoriteview);

openFavorite = new TextView(ctx);
listar[8]=openFavorite;
openFavorite.setTextColor(defC);
openFavorite.setBackground(backgroundstyle1);
openFavorite.setText(setContent(menu_favorite_icon,dip2px(10),dip2px(10)," " + langstring[1] + " (" + (favoriteTab.length-1) + ")"));
openFavorite.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openFavorite.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openFavorite.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openFavorite.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openFavorite.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openFavorite.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	favoriteTab[0].menu = !favoriteTab[0].menu;
	favoriteTab[0].menu ? (current_tab = listar[8],resetTabs(favoriteTab)) : (current_tab = null);
	if(favoriteTab[0].menu){
		generateLists("favorite");
		if(jelly_classic){
			resetTabs(favoriteTab)
		}
	}else{
		favoriteview.removeAllViews();
	}
	}}));
	favoriteWrapper = new LinearLayout(ctx);
	favoriteWrapper.addView(openFavorite);
hostlayoutlist.addView(favoriteWrapper);
		hostlayoutlist.addView(favoritehost);
favoritehost.addView(favoritescroll);

openSurvival = new TextView(ctx);
listar[0]=openSurvival;
openSurvival.setTextColor(defC);
openSurvival.setBackground(backgroundstyle3);
openSurvival.setText(setContent(menu_survival_icon,dip2px(10),dip2px(10)," "+langstring[2]+" ("+survivalTab.length+")"));
openSurvival.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openSurvival.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openSurvival.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openSurvival.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openSurvival.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openSurvival.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	survivalTab[0].menu = !survivalTab[0].menu;
	survivalTab[0].menu ? (current_tab = listar[0],resetTabs(survivalTab)) : (current_tab = null);
	if(survivalTab[0].menu){
		generateLists("survival");
		if(jelly_classic){
			resetTabs(survivalTab)
		}
	}else{
		survivalview.removeAllViews();
	}
	}}));
	survivalWrapper = new LinearLayout(ctx);
	survivalWrapper.addView(openSurvival);
hostlayoutlist.addView(survivalWrapper);
	hostlayoutlist.addView(survivalhost);
survivalhost.addView(survivalscroll);

openPvp = new TextView(ctx);
listar[1]=openPvp;
openPvp.setTextColor(defC);
openPvp.setBackground(backgroundstyle4);
openPvp.setText(setContent(menu_pvp_icon,dip2px(10),dip2px(10)," "+langstring[3]+" ("+pvpTab.length+")"));
openPvp.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openPvp.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openPvp.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openPvp.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openPvp.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openPvp.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	pvpTab[0].menu = !pvpTab[0].menu;
	pvpTab[0].menu ? (current_tab = listar[1],resetTabs(pvpTab)) : (current_tab = null);
	if(pvpTab[0].menu){
		generateLists("pvp");
		if(jelly_classic){
			resetTabs(pvpTab)
		}
	}else{
		pvpview.removeAllViews()
	}
	}}));
	pvpWrapper = new LinearLayout(ctx);
	pvpWrapper.addView(openPvp);
hostlayoutlist.addView(pvpWrapper);
		hostlayoutlist.addView(pvphost);
pvphost.addView(pvpscroll);

openPotion = new TextView(ctx);
listar[2]=openPotion;
openPotion.setTextColor(defC);
openPotion.setBackground(backgroundstyle5);
openPotion.setText(setContent(menu_potion_icon,dip2px(10),dip2px(10)," "+langstring[4]+" ("+potionTab.length+")"));
openPotion.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openPotion.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openPotion.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openPotion.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openPotion.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openPotion.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	potionTab[0].menu = !potionTab[0].menu;
	potionTab[0].menu ? (current_tab = listar[2],resetTabs(potionTab)) : (current_tab = null);
	if(potionTab[0].menu){
		generateLists("potion");
		if(jelly_classic){
			resetTabs(potionTab)
		}
	}else{
		potionview.removeAllViews();
	}
	}}));
	potionWrapper = new LinearLayout(ctx);
	potionWrapper.addView(openPotion);
hostlayoutlist.addView(potionWrapper);
		hostlayoutlist.addView(potionhost);
potionhost.addView(potionscroll);

openMovement = new TextView(ctx);
listar[3]=openMovement;
openMovement.setTextColor(defC);
openMovement.setBackground(backgroundstyle6);
openMovement.setText(setContent(menu_move_icon,dip2px(10),dip2px(10)," "+langstring[5]+" ("+(movementTab.length-1)+")"));
openMovement.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openMovement.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openMovement.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openMovement.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openMovement.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openMovement.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	movementTab[0].menu = !movementTab[0].menu;
	movementTab[0].menu ? (current_tab = listar[3],resetTabs(movementTab)) : (current_tab = null);
	if(movementTab[0].menu){
		generateLists("movement");
		if(jelly_classic){
			resetTabs(movementTab)
		}
	}else{
		movementview.removeAllViews();
	}
	}}));
	movementWrapper = new LinearLayout(ctx);
	movementWrapper.addView(openMovement);
hostlayoutlist.addView(movementWrapper);
		hostlayoutlist.addView(movementhost);
movementhost.addView(movementscroll);

openExploit = new TextView(ctx);
listar[4]=openExploit;
openExploit.setTextColor(defC);
openExploit.setBackground(backgroundstyle7);
openExploit.setText(setContent(menu_exploit_icon,dip2px(10),dip2px(10)," "+langstring[6]+" ("+(exploitTab.length-1)+")"));
openExploit.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openExploit.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openExploit.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openExploit.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openExploit.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openExploit.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	exploitTab[0].menu = !exploitTab[0].menu;
	exploitTab[0].menu ? (current_tab = listar[4],resetTabs(exploitTab)) : (current_tab = null);
	if(exploitTab[0].menu){
		generateLists("exploit");
		if(jelly_classic){
			resetTabs(exploitTab)
		}
	}else{
		exploitview.removeAllViews();
	}
	}}));
	exploitWrapper = new LinearLayout(ctx);
	exploitWrapper.addView(openExploit);
hostlayoutlist.addView(exploitWrapper);
		hostlayoutlist.addView(exploithost);
exploithost.addView(exploitscroll);

openFriend = new TextView(ctx);
listar[6]=openFriend;
openFriend.setTextColor(defC);
openFriend.setBackground(backgroundstyle8);
openFriend.setText(setContent(menu_friend_icon,dip2px(10),dip2px(10)," "+langstring[7]+" ("+(friendTab.length-2)+")"));
openFriend.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openFriend.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openFriend.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openFriend.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openFriend.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openFriend.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	friendTab[0].menu = !friendTab[0].menu;
	friendTab[0].menu ? (current_tab = listar[6],resetTabs(friendTab)) : (current_tab = null);
	if(friendTab[0].menu){
		generateLists("friend");
		if(jelly_classic){
			resetTabs(friendTab)
		}
	}else{
		friendview.removeAllViews();
	}
	}}));
	friendWrapper = new LinearLayout(ctx);
	friendWrapper.addView(openFriend);
hostlayoutlist.addView(friendWrapper);
		hostlayoutlist.addView(friendhost);
friendhost.addView(friendscroll);

openWaypoint = new TextView(ctx);
listar[7]=openWaypoint;
openWaypoint.setTextColor(defC);
openWaypoint.setBackground(backgroundstyle2);
openWaypoint.setText(setContent(menu_waypoint_icon,dip2px(10),dip2px(10)," "+langstring[8]+" ("+(waypointTab.length-1)+")"));
openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
if(!horizontalmenu)openWaypoint.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
if(horizontalmenu){openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));}
openWaypoint.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
openWaypoint.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
openWaypoint.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	waypointTab[0].menu = !waypointTab[0].menu;
	waypointTab[0].menu ? (current_tab = listar[7],resetTabs(waypointTab)) : (current_tab = null);
	if(waypointTab[0].menu){
		generateLists("waypoint");
		if(jelly_classic){
			resetTabs(waypointTab)
		}
	}else{
		waypointview.removeAllViews();
	}
	}}));
	waypointWrapper = new LinearLayout(ctx);
	waypointWrapper.addView(openWaypoint);
hostlayoutlist.addView(waypointWrapper);
		hostlayoutlist.addView(waypointhost);
waypointhost.addView(waypointscroll);


function openEdit() {
ctx.runOnUiThread(new Runnable({
run: function() {
try {
temped=new EditText(ctx);
searchb.setText('');
temped.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
temped.setTextColor(Color.WHITE);			
temped.setImeOptions(android.view.inputmethod.EditorInfo.IME_FLAG_NO_FULLSCREEN);		
temped.setHintTextColor(Color.parseColor("#b7b7b7"));
temped.setOnKeyListener(new android.view.View.OnKeyListener({onKey: function(v,keyCode,event) {
            if ((event.getAction() == 	android.view.KeyEvent.ACTION_DOWN) && (keyCode == 	android.view.KeyEvent.KEYCODE_ENTER)) {
                editp.dismiss();
                return true;
            }
            return false;
        }
    }));
temped.addTextChangedListener(new android.text.TextWatcher( {
	afterTextChanged: function(text) {
		try{
			searchb.setText(text.toString());
		}catch(e){clientMessage(e)}
	}
}));

editp = new PopupWindow(temped, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT,true);
editp.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
editp.setWidth(2);
editp.setHeight(2);
editp.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0,0);
new android.os.Handler().postDelayed(new java.lang.Runnable({
	run: function() {
		temped.dispatchTouchEvent(android.view.MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), android.view.MotionEvent.ACTION_DOWN , 0, 0, 0));
		temped.dispatchTouchEvent(android.view.MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), android.view.MotionEvent.ACTION_UP , 0, 0, 0));
	}
}), 200);
} catch (e) {clientMessage(e) } } })); };

LIST = new PopupWindow(horizontalmainlist, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
LIST.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
LIST.setAnimationStyle(android.R.style.Animation_Translucent);
hostlayoutlist.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
if(hide)LIST.setAnimationStyle(android.R.style.Animation);
if(horizontalmenu&&!bottommenu){
	LIST.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0,0);
	ctx.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
}else if(horizontalmenu&&bottommenu){
	LIST.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0,0);
}else{
	LIST.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0,0);
	favoriteWrapper.setBackgroundDrawable(new ColorDrawable(marginColor));
	survivalWrapper.setBackgroundDrawable(new ColorDrawable(marginColor));
	pvpWrapper.setBackgroundDrawable(new ColorDrawable(marginColor));
	potionWrapper.setBackgroundDrawable(new ColorDrawable(marginColor));
	movementWrapper.setBackgroundDrawable(new ColorDrawable(marginColor));
	exploitWrapper.setBackgroundDrawable(new ColorDrawable(marginColor));
	friendWrapper.setBackgroundDrawable(new ColorDrawable(marginColor));
	waypointWrapper.setBackground(backgroundstyle2w);
	dragBtn();
	infoBtn();
	browserBtn();
	translateBtn();
}
searchb.requestFocus();

//try{for(var i=0;i<listar.length;i++){listar[i].getBackground().setColor(Color.parseColor(rgbToHex(menuRed,menuGreen,menuBlue)));}}catch(e){clientMessage(e+'@'+e.lineNumber)}
if(jelly_classic&&!horizontalmenu){
	survivalview.removeAllViews();
	pvpview.removeAllViews();
	potionview.removeAllViews();
	movementview.removeAllViews();
	exploitview.removeAllViews();
	favoriteview.removeAllViews();
	friendview.removeAllViews();
	waypointview.removeAllViews();

	hostlayoutlist.removeView(favoritehost);
	hostlayoutlist.removeView(survivalhost);
	hostlayoutlist.removeView(pvphost);
	hostlayoutlist.removeView(potionhost);
	hostlayoutlist.removeView(movementhost);
	hostlayoutlist.removeView(exploithost);
	hostlayoutlist.removeView(friendhost);
	hostlayoutlist.removeView(waypointhost);

	openFavorite.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
	openSurvival.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
	openPvp.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
	openPotion.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
	openMovement.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
	openExploit.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
	openFriend.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
	openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));

	sidemodsparent.addView(favoritehost);
	sidemodsparent.addView(survivalhost);
	sidemodsparent.addView(pvphost);
	sidemodsparent.addView(potionhost);
	sidemodsparent.addView(movementhost);
	sidemodsparent.addView(exploithost);
	sidemodsparent.addView(friendhost);
	sidemodsparent.addView(waypointhost);
	
	openFavorite.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	openSurvival.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	openPvp.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	openPotion.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	openMovement.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	openExploit.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	openFriend.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	openWaypoint.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
	
	generateLists("all");
	favoriteTab[0].menu = true;
	current_tab = openFavorite;
		generateLists("favorite");
}
} catch (e) {clientMessage(e)
}
}
}));
}
function resetTabs(keep) {
	try{
		if(keep !== favoriteTab){
			favoriteview.removeAllViews();
			favoriteTab[0].menu=false;
		}
		if(keep !== survivalTab){
			survivalview.removeAllViews();
			survivalTab[0].menu=false;
		}
		if(keep !== pvpTab){
			pvpview.removeAllViews();
			pvpTab[0].menu=false;
		}
		if(keep !== potionTab){
			potionview.removeAllViews();
			potionTab[0].menu=false;
		}
		if(keep !== movementTab){
			movementview.removeAllViews();
			movementTab[0].menu=false;
		}
		if(keep !== exploitTab){
			exploitview.removeAllViews();
			exploitTab[0].menu=false;
		}
		if(keep !== friendTab){
			friendview.removeAllViews();
			friendTab[0].menu=false;
		}
		if(keep !== waypointTab){
			waypointview.removeAllViews();
			waypointTab[0].menu=false;
		}
	}catch(e){
		clientMessage(e)
	}
}
function closeRest() {
	potionTab[0].menu=false;
	survivalTab[0].menu=false;
	movementTab[0].menu=false;
	pvpTab[0].menu=false;
	exploitTab[0].menu=false;
	survivalview.removeAllViews();
	pvpview.removeAllViews();
	potionview.removeAllViews();
	movementview.removeAllViews();
	exploitview.removeAllViews();
}
function print(input,bool,prefix,x,y) {
	try {ctx.runOnUiThread(new java.lang.Runnable({run: function() {
	var toast = android.widget.Toast.makeText(ctx,input,android.widget.Toast.LENGTH_LONG);
	var txtv = new android.widget.TextView(ctx);
	prefix?txtv.setText(' '+prefix+': '+input+' '):txtv.setText(' '+input+' ');
	txtv.setGravity(android.view.Gravity.CENTER);
	txtv.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	txtv.setTextColor(Color.WHITE);
	txtv.setBackground(toaststyle);
	txtv.getBackground().setAlpha(140);
	if(bool == true){
		txtv.getBackground().setStroke(2, active)
	}else if(bool == false){
		txtv.getBackground().setStroke(2, Color.parseColor("#f52a2a"))
	}else if(bool==undefined||bool==null){
		txtv.getBackground().setStroke(2, Color.HSVToColor([rt3, 0.8, 1.0]));
	}
	if(x!==undefined&&y!==undefined){
		toast.setGravity(Gravity.TOP|Gravity.LEFT, x, y);
	}
	toast.setView(txtv);
	toast.show();
	}}))} catch (e) {}
}
function decode64img(src) {
	return android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(src, 0), 0, android.util.Base64.decode(src, 0).length)
}
function getImageSpannable(src,x,y) {

	var originalBitmap = decode64img(src);

	var bitmap = Bitmap.createScaledBitmap(originalBitmap, x, y, true);
	var dr = new android.graphics.drawable.BitmapDrawable(bitmap);
	dr.setBounds(0, 0, bitmap.getWidth(), bitmap.getHeight());

	var imageSpannable = new android.text.SpannableString("\uFFFC");
	var imgSpan = new android.text.style.ImageSpan(dr, android.text.style.DynamicDrawableSpan.ALIGN_BOTTOM);

	imageSpannable.setSpan(imgSpan, 0, 1, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
	return imageSpannable;
}
function setContent(img,x,y,str) {

	var content = new android.text.SpannableStringBuilder();
	content.append(getImageSpannable(img, x,y));
	if(str!==undefined)content.append(str);

	return content;
}
function dragBtn() {
	if(!horizontalmenu){
		ctx.runOnUiThread(new Runnable({
		run: function() {
		try {
		var hostlayout = new LinearLayout(ctx),moving=false,mPosX=0,dx=0;
		hostlayout.setOrientation(1);

		dragThumb = new ImageView(ctx);
		dragThumb.setBackground(dragStyle);
		dragThumb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(20),dip2px(20)));
		dragThumb.getLayoutParams().setMargins(dip2px(5),dip2px(5),dip2px(5),dip2px(5));
		dragThumb.setPadding(dip2px(3),dip2px(3),dip2px(3),dip2px(3));
		dragThumb.setImageBitmap(decode64img(expandicon));
		dragThumb.setOnLongClickListener(new android.view.View.OnLongClickListener({
		onLongClick: function() {
			if(!searchb.getText().toString().matches("")){searchb.setText("")}
		moving = true;
		return true;
		}
		}));
		dragThumb.setOnTouchListener(new android.view.View.OnTouchListener({
		onTouch: function(a, b) {
		try {
		if (!moving) return false;
		switch (b.getAction()) {
		case android.view.MotionEvent.ACTION_DOWN:
		dx = mPosX - b.getRawX();
		break;
		case android.view.MotionEvent.ACTION_MOVE:
		mPosX = b.getRawX() + dx;
		dragLoc = mPosX-(dragThumb.getWidth()/2);
		if(dragLoc>(screenWidth-dip2px(100))){
			dragLoc = screenWidth-dip2px(100);
			openDrag.update(dragLoc-(dip2px(20)),0+(screenHeight/4), -1, -1);
			openInfo.update(dragLoc-(dip2px(20)),0+(screenHeight/4)+dip2px(50), -1, -1);
			openBrowser.update(dragLoc-(dip2px(20)),0+(screenHeight/4)+dip2px(100), -1, -1);
			openTrans.update(dragLoc-(dip2px(20)),0+(screenHeight/4)-dip2px(50), -1, -1);
		}else{
			openDrag.update((mPosX-(dragThumb.getWidth()/2))-(dip2px(20)),0+(screenHeight/4), -1, -1);
			openInfo.update((mPosX-(dragThumb.getWidth()/2))-(dip2px(20)),0+(screenHeight/4)+dip2px(50), -1, -1);
			openBrowser.update((mPosX-(dragThumb.getWidth()/2))-(dip2px(20)),0+(screenHeight/4)+dip2px(100), -1, -1);
			openTrans.update(dragLoc-(dip2px(20)),0+(screenHeight/4)-dip2px(50), -1, -1);
		}
		menuXDim = screenWidth - dragLoc;
		if(menuXDim>dip2px(100)){
			fullwidthtoggles = true;
		}else{
			fullwidthtoggles = false;
		}
		if(menuXDim>dip2px(200)){
			tabs_width = dip2px(97);
			jelly_classic = true;
		}else{
			tabs_width = menuXDim-dip2px(3);
			jelly_classic = false;
		}
		hostmenuhostlay.setLayoutParams(new LinearLayout.LayoutParams(menuXDim, RelativeLayout.LayoutParams.WRAP_CONTENT));
		searchb.setLayoutParams(new LinearLayout.LayoutParams(menuXDim-dip2px(30), dip2px(30)));
		survivalview.removeAllViews();
		pvpview.removeAllViews();
		potionview.removeAllViews();
		movementview.removeAllViews();
		exploitview.removeAllViews();
		favoriteview.removeAllViews();
		friendview.removeAllViews();
		waypointview.removeAllViews();
		hostlayoutlist.setLayoutParams(new LinearLayout.LayoutParams(menuXDim, RelativeLayout.LayoutParams.WRAP_CONTENT));
		if(jelly_classic){
			current_layout = "classic";
			hostlayoutlist.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT));
			favoritehost.getParent().removeView(favoritehost);
			survivalhost.getParent().removeView(survivalhost);
			pvphost.getParent().removeView(pvphost);
			potionhost.getParent().removeView(potionhost);
			movementhost.getParent().removeView(movementhost);
			exploithost.getParent().removeView(exploithost);
			friendhost.getParent().removeView(friendhost);
			waypointhost.getParent().removeView(waypointhost);

			openFavorite.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openSurvival.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openPvp.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openPotion.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openMovement.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openExploit.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openFriend.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));

			sidemodsparent.addView(favoritehost);
			sidemodsparent.addView(survivalhost);
			sidemodsparent.addView(pvphost);
			sidemodsparent.addView(potionhost);
			sidemodsparent.addView(movementhost);
			sidemodsparent.addView(exploithost);
			sidemodsparent.addView(friendhost);
			sidemodsparent.addView(waypointhost);
		}else{
			current_layout = "vertical";
			sidemodsparent.removeView(favoritehost);
			sidemodsparent.removeView(survivalhost);
			sidemodsparent.removeView(pvphost);
			sidemodsparent.removeView(potionhost);
			sidemodsparent.removeView(movementhost);
			sidemodsparent.removeView(exploithost);
			sidemodsparent.removeView(friendhost);
			sidemodsparent.removeView(waypointhost);

			openFavorite.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openSurvival.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openPvp.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openPotion.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openMovement.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openExploit.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openFriend.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));
			openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(tabs_width, dip2px(30)));

			hostlayoutlist.removeAllViews();
			hostlayoutlist.addView(favoriteWrapper);
			hostlayoutlist.addView(favoritehost);
			hostlayoutlist.addView(survivalWrapper);
			hostlayoutlist.addView(survivalhost);
			hostlayoutlist.addView(pvpWrapper);
			hostlayoutlist.addView(pvphost);
			hostlayoutlist.addView(potionWrapper);
			hostlayoutlist.addView(potionhost);
			hostlayoutlist.addView(movementWrapper);
			hostlayoutlist.addView(movementhost);
			hostlayoutlist.addView(exploitWrapper);
			hostlayoutlist.addView(exploithost);
			hostlayoutlist.addView(friendWrapper);
			hostlayoutlist.addView(friendhost);
			hostlayoutlist.addView(waypointWrapper);
			hostlayoutlist.addView(waypointhost);
		}
		openFavorite.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		openSurvival.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		openPvp.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		openPotion.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		openMovement.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		openExploit.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		openFriend.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		openWaypoint.getLayoutParams().setMargins(dip2px(1.5),dip2px(0.75),dip2px(1.5),dip2px(0.75));
		break;
		case android.view.MotionEvent.ACTION_UP:
		case android.view.MotionEvent.ACTION_CANCEL:
		moving = false;

		if(previous_layout!==current_layout){
			LIST.setAnimationStyle(android.R.style.Animation);
			closeMenu();
			seeList(true);
			menuOpen=true;
			openMenu.setLayoutParams(new LinearLayout.LayoutParams(0,dip2px(40)));
		}else{
			generateLists('all');
		}
		jelly_classic?previous_layout = "classic":previous_layout = "vertical";
	}
		} catch (c) {}
		return true;
		}
		}));
		
		hostlayout.addView(dragThumb);
		print()

		openDrag = new PopupWindow(hostlayout, RelativeLayout.LayoutParams.WRAP_CONTENT,RelativeLayout.LayoutParams.WRAP_CONTENT);
		openDrag.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		openDrag.setAnimationStyle(android.R.style.Animation_Translucent);
		openDrag.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, dragLoc-(dip2px(20)),0+(screenHeight/4));
		print('Long Press & Drag Me!',null,null,dragLoc-(dip2px(110)),0+(screenHeight/4)-dip2px(14));
		} catch (e) {
		clientMessage(e);
		}
		}
		}));
	}
}
function launchIntent(url) {
	var int = new android.content.Intent(ctx);
	int.setAction(android.content.Intent.ACTION_VIEW);
	int.setData(android.net.Uri.parse(url));
	ctx.startActivity(int);
}
function infoBtn() {
	if(!horizontalmenu){
		ctx.runOnUiThread(new Runnable({
		run: function() {
		try {
		var hostlayout = new LinearLayout(ctx),moving=false,mPosX=0,dx=0;
		hostlayout.setOrientation(1);

		infoThumb = new ImageView(ctx);
		infoThumb.setBackground(dragStyle);
		infoThumb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(20),dip2px(20)));
		infoThumb.getLayoutParams().setMargins(dip2px(5),dip2px(5),dip2px(5),dip2px(5));
		infoThumb.setPadding(dip2px(3),dip2px(3),dip2px(3),dip2px(3));
		infoThumb.setImageBitmap(decode64img(infoicon));
		infoThumb.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
			launchIntent("https://discord.gg/HP6xYrj");
			return true;
		}}));
		hostlayout.addView(infoThumb);
		
		openInfo = new PopupWindow(hostlayout, RelativeLayout.LayoutParams.WRAP_CONTENT,RelativeLayout.LayoutParams.WRAP_CONTENT);
		openInfo.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		openInfo.setAnimationStyle(android.R.style.Animation_Translucent);
		openInfo.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, dragLoc-(dip2px(20)),0+(screenHeight/4)+dip2px(50));
		} catch (e) {
		clientMessage(e);
		}
		}
		}));
	}
}
function translateBtn() {
	if(!horizontalmenu){
		ctx.runOnUiThread(new Runnable({
		run: function() {
		try {
		var hostlayout = new LinearLayout(ctx),moving=false,mPosX=0,dx=0;
		hostlayout.setOrientation(1);
		language = convertLangtoGoog(ModPE.getLanguage())
		write_file("translator.html",translatorSource,ctx.getDir("modscripts", 0));
		turl = "file://"+ctx.getDir("modscripts", 0)+"/translator.html#googtrans(en|"+language+")#hello";
		
		transThumb = new ImageView(ctx);
		transThumb.setBackground(dragStyle);
		if(convertLangtoGoog(ModPE.getLanguage())=='en'){
			transThumb.setBackground(dragStyleDisabled);
		}
		transThumb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(20),dip2px(20)));
		transThumb.getLayoutParams().setMargins(dip2px(5),dip2px(5),dip2px(5),dip2px(5));
		transThumb.setPadding(dip2px(3),dip2px(3),dip2px(3),dip2px(3));
		transThumb.setImageBitmap(decode64img(transicon));
		transThumb.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
			if(convertLangtoGoog(ModPE.getLanguage())!=='en'){
				askTranslate();
				return true;
			}else{
				print('Cannot translate English to English');
			}
		}}));
		hostlayout.addView(transThumb);
		
		openTrans = new PopupWindow(hostlayout, RelativeLayout.LayoutParams.WRAP_CONTENT,RelativeLayout.LayoutParams.WRAP_CONTENT);
		openTrans.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		openTrans.setAnimationStyle(android.R.style.Animation_Translucent);
		openTrans.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, dragLoc-(dip2px(20)),0+(screenHeight/4)-dip2px(50));
		} catch (e) {
		clientMessage(e);
		}
		}
		}));
	}
}
function browserBtn() {
	if(!horizontalmenu){
		ctx.runOnUiThread(new Runnable({
		run: function() {
		try {
		var hostlayout = new LinearLayout(ctx),moving=false,mPosX=0,dx=0;
		hostlayout.setOrientation(1);

		browserThumb = new ImageView(ctx);
		browserThumb.setBackground(dragStyle);
		browserThumb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(20),dip2px(20)));
		browserThumb.getLayoutParams().setMargins(dip2px(5),dip2px(5),dip2px(5),dip2px(5));
		browserThumb.setPadding(dip2px(3),dip2px(3),dip2px(3),dip2px(3));
		browserThumb.setImageBitmap(decode64img(webIcon));
		browserThumb.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
			if(webhost.getParent()==null)browserWindow();
			return true;
		}}));
		hostlayout.addView(browserThumb);
		
		openBrowser = new PopupWindow(hostlayout, RelativeLayout.LayoutParams.WRAP_CONTENT,RelativeLayout.LayoutParams.WRAP_CONTENT);
		openBrowser.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		openBrowser.setAnimationStyle(android.R.style.Animation_Translucent);
		openBrowser.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, dragLoc-(dip2px(20)),0+(screenHeight/4)+dip2px(100));
		} catch (e) {
		clientMessage(e);
		}
		}
		}));
	}
}
topen = false;
function browserWindow() {
	ctx.runOnUiThread(new Runnable({run: function() {try {
	webTitle = new TextView(ctx);
	webTitle.setTextColor(Color.parseColor("#ffffff"));
	webTitle.setText("Jelly Browser");
	webTitle.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), LayoutParams.WRAP_CONTENT));
	webTitle.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);

	webDisplay=new android.webkit.WebView(activity);
	webDisplay.getSettings().setJavaScriptEnabled(true);
	webDisplay.setWebChromeClient(new android.webkit.WebChromeClient());
	webDisplay.setWebViewClient(new android.webkit.WebViewClient());
	webDisplay.loadUrl('http://instinctmods.com/dash.html');
	webDisplay.setBackgroundColor(Color.WHITE);
	webDisplay.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), dip2px(140)));
	webDisplay.setInitialScale(100);
	webDisplay.setFocusable(true);
	webDisplay.setFocusableInTouchMode(true);
	var moving,mPosX = 0,mPosY = 0,dx = 0,dy = 0;
	var moved = false;
	webDisplay.setOnTouchListener(new android.view.View.OnTouchListener({
		onTouch: function(a, b) {
		try {
			if (!moving) return false;
			switch (b.getAction()) {
			case android.view.MotionEvent.ACTION_DOWN:
			dx = mPosX - b.getRawX();
			dy = mPosY - b.getRawY();
			break;
			case android.view.MotionEvent.ACTION_MOVE:
			mPosX = b.getRawX() + dx;
			mPosY = b.getRawY() + dy;
			browserGUI.update(mPosX-dip2px(150), mPosY-dip2px(100), -1, -1);
			moved = true;
			break;
			case android.view.MotionEvent.ACTION_UP:
			case android.view.MotionEvent.ACTION_CANCEL:
			moving = false;
			}} catch (e) {}
			return true;
			}}));
	webDisplay.setOnLongClickListener(new android.view.View.OnLongClickListener({
		onLongClick: function() {
			moving = true;
			return true;
		}}));
	
	var backBtn = new TextView(ctx);
	backBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), LayoutParams.FILL_PARENT));
	backBtn.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	backBtn.setTextColor(Color.WHITE);
	backBtn.setText("<")
	backBtn.setShadowLayer(2, 0, 0, defB);
	backBtn.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	backBtn.setBackground(amountBox);
	backBtn.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		if(webDisplay.canGoBack()){
			webDisplay.goBack();
		}
		}}));

	var foreBtn = new TextView(ctx);
	foreBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), LayoutParams.FILL_PARENT));
	foreBtn.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	foreBtn.setTextColor(Color.WHITE);
	foreBtn.setText(">")
	foreBtn.setShadowLayer(2, 0, 0, defB);
	foreBtn.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	foreBtn.setBackground(amountBox);
	foreBtn.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		if(webDisplay.canGoForward()){
			webDisplay.goForward();
		}
		}}));

	var closeBtn = new TextView(ctx);
	closeBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), LayoutParams.FILL_PARENT));
	closeBtn.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	closeBtn.setTextColor(Color.WHITE);
	closeBtn.setText("X")
	closeBtn.setShadowLayer(2, 0, 0, defB);
	closeBtn.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	closeBtn.setBackground(closeBox);
	closeBtn.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		browserGUI.dismiss();
		}}));

	var enterBtn = new TextView(ctx);
	enterBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), LayoutParams.FILL_PARENT));
	enterBtn.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	enterBtn.setTextColor(Color.WHITE);
	enterBtn.setText("Go")
	enterBtn.setShadowLayer(2, 0, 0, defB);
	enterBtn.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	enterBtn.setBackground(amountBox);
	enterBtn.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		try{
		if(!urlBox.getText().toString().includes('http')){
			urlBox.setText('http://'+urlBox.getText());
		}
		webDisplay.loadUrl(urlBox.getText());
	}catch(e){clientMessage(e)}
		}}));

	urlBox=new EditText(ctx);
	urlBox.setText("https://google.com");
	urlBox.setHint("address");
	urlBox.setTextColor(Color.WHITE);
	urlBox.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	urlBox.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	urlBox.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		openUrl();
		}}));

	function openUrl() {
		ctx.runOnUiThread(new Runnable({
		run: function() {
		try {
			editurlbox=new EditText(ctx);
			editurlbox.setText(urlBox.getText().toString());
			editurlbox.setImeOptions(android.view.inputmethod.EditorInfo.IME_FLAG_NO_FULLSCREEN);		
			editurlbox.setHint("address");
			editurlbox.setTextColor(Color.WHITE);
			editurlbox.setLayoutParams(new LinearLayout.LayoutParams(dip2px(150), LayoutParams.WRAP_CONTENT));
			editurlbox.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
			editurlbox.setBackground(editbox); 
			editurlbox.setPadding(0,dip2px(30),0,dip2px(150));
			editurlbox.setOnKeyListener(new android.view.View.OnKeyListener({
				onKey: function(v,keyCode,event) {
						if ((event.getAction() == 	android.view.KeyEvent.ACTION_DOWN) && (keyCode == 	android.view.KeyEvent.KEYCODE_ENTER)) {
							editurl.dismiss();
							return true;
						}
						return false;
					}
			}));
			editurlbox.addTextChangedListener(new android.text.TextWatcher( {
				afterTextChanged: function(text) {
				try{
					urlBox.setText(editurlbox.getText().toString());
				}catch(e){clientMessage(e)}
			}
			}));
			
			editurl = new PopupWindow(editurlbox, dip2px(200), LayoutParams.WRAP_CONTENT,true);
			editurl.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0,0);
			if(moved){
				editurl.update(mPosX-dip2px(150), mPosY-dip2px(100), -1, -1);
			}
			new android.os.Handler().postDelayed(new java.lang.Runnable({
				run: function() {
					editurlbox.dispatchTouchEvent(android.view.MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), android.view.MotionEvent.ACTION_DOWN , 0, 0, 0));
					editurlbox.dispatchTouchEvent(android.view.MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), android.view.MotionEvent.ACTION_UP , 0, 0, 0));
				}
			}), 200);
			} catch (e) {clientMessage(e) } } })); };

	collapseBtn = new TextView(ctx);
	collapseBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), dip2px(10)));
	collapseBtn.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	collapseBtn.setTextColor(Color.WHITE);
	collapseBtn.setText("^");
	collapseBtn.setShadowLayer(2, 0, 0, defB);
	collapseBtn.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	collapseBtn.setBackground(colBox);
	collapseBtn.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		try{
			if(webDisplay.getHeight() > 0){
				webDisplay.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), 0));
				urlBox.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), 0));
				urlButtonsLayout.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), 0));
				collapseBtn.setText("v");
			}else{
				webDisplay.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), dip2px(140)));
				urlBox.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
				urlButtonsLayout.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), dip2px(30)));
				collapseBtn.setText("^");
			}
		}catch(e){clientMessage(e)}
	}}));

	webhost = new LinearLayout(ctx);
	var hostScroll = new android.widget.ScrollView(ctx);
	var hostLayoutWeb = new LinearLayout(ctx);
	var urlButtonsLayout = new LinearLayout(ctx);
	
	urlButtonsLayout.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), dip2px(30)));
	hostLayoutWeb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), RelativeLayout.LayoutParams.WRAP_CONTENT));

	webhost.setOrientation(LinearLayout.VERTICAL);
	urlButtonsLayout.setOrientation(LinearLayout.HORIZONTAL);
	hostLayoutWeb.setOrientation(LinearLayout.VERTICAL);

	hostScroll.addView(hostLayoutWeb);
	webhost.addView(hostScroll);
	webhost.addView(collapseBtn);

	urlButtonsLayout.addView(backBtn);
	urlButtonsLayout.addView(foreBtn);
	urlButtonsLayout.addView(urlBox);
	urlButtonsLayout.addView(enterBtn);
	urlButtonsLayout.addView(closeBtn);

	hostLayoutWeb.addView(webTitle);
	hostLayoutWeb.addView(urlButtonsLayout);
	hostLayoutWeb.addView(webDisplay);

	browserGUI = new PopupWindow(webhost,dip2px(200), RelativeLayout.LayoutParams.WRAP_CONTENT);
	browserGUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
	browserGUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0,0);

	webDisplay.requestFocus(View.FOCUS_DOWN);
	} catch (e) {clientMessage(e+"\n#"+e.linenumber)}}}));
}
function translateMenu() {
	print('Attempting translation...');
	ctx.runOnUiThread(new Runnable({run: function() {try {
	topen = true;
	translateclock = System.currentTimeMillis();

	translatewindow=new android.webkit.WebView(activity);
	translatewindow.getSettings().setJavaScriptEnabled(true);
	translatewindow.setWebChromeClient(new android.webkit.WebChromeClient());
	translatewindow.setWebViewClient(new android.webkit.WebViewClient());
	translatewindow.loadUrl(turl);
	translatewindow.setFocusable(true);
	translatewindow.setFocusableInTouchMode(true);

	developerMode?dtw=dip2px(300):dtw=0;
	translateparent = new PopupWindow(translatewindow,dtw,dtw);
	translateparent.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0,0);
	} catch (e) {clientMessage(e+"\n#"+e.linenumber)}}}));
}
function generateLists(type) {
	if(type=="favorite"||type=="all"){
		if(favoriteTab[0].menu){
			closeRest();
			for(var i=0;i<favoriteTab.length;i++){
				favoriteview.addView(createItem(i,favoriteTab));
				}
		}
	}
	if(type=="survival"||type=="all"){
		if(survivalTab[0].menu){
			for(var i=0;i<survivalTab.length;i++){
				survivalview.addView(createItem(i,survivalTab));
				}
		}
	}
	if(type=="pvp"||type=="all"){
		if(pvpTab[0].menu){
			for(var i=0;i<pvpTab.length;i++){
				pvpview.addView(createItem(i,pvpTab));
				}
		}
	}
	if(type=="potion"||type=="all"){
		if(potionTab[0].menu){
			for(var i=0;i<potionTab.length;i++){
				potionview.addView(createItem(i,potionTab));
				}
		}
	}
	if(type=="movement"||type=="all"){
		if(movementTab[0].menu){
			for(var i=0;i<movementTab.length;i++){
				movementview.addView(createItem(i,movementTab));
				}
		}
	}
	if(type=="exploit"||type=="all"){
		if(exploitTab[0].menu){
			for(var i=0;i<exploitTab.length;i++){
				exploitview.addView(createItem(i,exploitTab));
				}
		}
	}
	if(type=="friend"||type=="all"){
		if(friendTab[0].menu){
			for(var i=0;i<friendTab.length;i++){
				friendview.addView(createItem(i,friendTab));
				}
		}
	}
	if(type=="waypoint"||type=="all"){
		if(waypointTab[0].menu){
			for(var i=0;i<waypointTab.length;i++){
				waypointview.addView(createItem(i,waypointTab));
				}
		}
	}
	if(!horizontalmenu){/*
		hostscroll.smoothScrollTo(0,0);
		sidemodsscroll.smoothScrollTo(0,0);
		hostscroll.smoothScrollTo(0,0);
		sidemodsscroll.smoothScrollTo(0,0);
		hostscroll.smoothScrollTo(0,0);
		sidemodsscroll.smoothScrollTo(0,0);*/
	}
}
function setDefaultDestroy() {
	var mcpeVersion = ModPE.getMinecraftVersion();
	for(var i = -255; i < 406; i++){
		try{
			if(mcpeVersion=="1.14.1.5"){
				defaultDestroy[i] = 0.75;
			}else{
				defaultDestroy[i] = Block.getDestroyTime(i);
			}}catch(e){clientMessage(e+'@'+e.lineNumber)}
		}
}
function runKeybinds(grey) {
	var eachArr = [survivalTab,pvpTab,potionTab,movementTab,exploitTab,favoriteTab,waypointTab,friendTab];
	var aE = 0;
	var ce = eachArr[aI];
	for(var aE=0;aE<eachArr.length;aE++){
		ce = eachArr[aE];
		for(var i=0;i<ce.length;i++){
			if(grey!==false&&grey!=="invis"&&grey!=="display"){
				try{
					ce[i].keybindtext.setTextColor(disabled);
				}catch(e){}
			}else if(grey==false&&grey!=="invis"&&grey!=="display"){
				if(ce[i].keybind!==null){
					try{
						if(ce[i].state==true){
							ce[i].keybindtext.setTextColor(active);
						}else{
							ce[i].keybindtext.setTextColor(inactive);
						}
					}catch(e){clientMessage(e+'@'+e.lineNumber)}
				}
			}else if(grey=="invis"){
				if(ce[i].keybindtext!==null&&ce[i].keybindtext!==undefined){
					try{
						ce[i].keybindtext.getBackground().setAlpha(0);
						ce[i].keybindtext.setTextColor(Color.argb(0,0,0,0));
					}catch(e){clientMessage(e+'@'+e.lineNumber)}
				}
			}else if(grey=="display"){
				if(ce[i].keybindtext!==null&&ce[i].keybindtext!==undefined){
					try{
						ce[i].keybindtext.getBackground().setAlpha(140);
						if(ce[i].state==true){
							ce[i].keybindtext.setTextColor(active);
						}else{
							ce[i].keybindtext.setTextColor(inactive);
						}
					}catch(e){clientMessage(e+'@'+e.lineNumber)}
				}
			}
		}
	}
}
function openModBtn() {
if(!displayed){
ctx.runOnUiThread(new Runnable({
run: function() {
try {
var hostlayout = new LinearLayout(ctx),moving=false,mPosX=0,mPosY=0,dx=0,dy=0;
hostlayout.setOrientation(1);
openMenu = new Button(ctx);
openMenu.setTextColor(Color.parseColor("#41caf4"));
openMenu.setBackground(modstyle);
openMenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(40),dip2px(40)));
openMenu.setText("<");
openMenu.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	if(!menuOpen){
		seeList();
		menuOpen=true;
		openMenu.setLayoutParams(new LinearLayout.LayoutParams(0,dip2px(40)));
		}
	}}));
openMenu.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function() {
moving = true;
return true;
}
}));
openMenu.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(a, b) {
try {
if (!moving) return false;
switch (b.getAction()) {
case android.view.MotionEvent.ACTION_DOWN:
dx = mPosX - b.getRawX();
dy = mPosY - b.getRawY();
break;
case android.view.MotionEvent.ACTION_MOVE:
mPosX = b.getRawX() + dx;
mPosY = b.getRawY() + dy;
openGui.update(mPosX-(openMenu.getWidth()/2), mPosY-(openMenu.getHeight()/2), -1, -1);
//[topLeft,topLeft,topRight,topRight,bottomRight,bottomRight,bottomLeft,bottomLeft]
if(mPosY>screenHeight-dip2px(20)){//bottom
	modstyle.setCornerRadii([90,90,90,90,0,0,0,0]);
	openMenu.setText("^");
}else if(mPosY<0+dip2px(20)){//top
	modstyle.setCornerRadii([0,0,0,0,90,90,90,90]);
	openMenu.setText("v");
}else if(mPosX>screenWidth-dip2px(20)){//right
	modstyle.setCornerRadii([90,90,0,0,0,0,90,90]);
	openMenu.setText("<");
}else if(mPosX<0+dip2px(20)){//left
	modstyle.setCornerRadii([0,0,90,90,90,90,0,0]);
	openMenu.setText(">");
}else{//mid
	modstyle.setCornerRadii([90,90,90,90,90,90,90,90]);
}

break;
case android.view.MotionEvent.ACTION_UP:
case android.view.MotionEvent.ACTION_CANCEL:
moving = false;
}
} catch (c) {}
return true;
}
}));

hostlayout.addView(openMenu);

openGui = new PopupWindow(hostlayout, RelativeLayout.LayoutParams.WRAP_CONTENT,RelativeLayout.LayoutParams.WRAP_CONTENT);
openGui.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
openGui.setAnimationStyle(android.R.style.Animation_Translucent);
openGui.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, screenWidth,screenHeight/4);
} catch (e) {
clientMessage(e);
}
}
}));
displayed=true;
}
}
openModBtn();
function itemDamage(id) {
	switch(id) {
		case 269:
		case 284:
		return 1;
		break;
		case 270:
		case 285:
		case 273:
		return 2;
		break;
		case 271:
		case 286:
		case 274:
		case 256:
		return 3;
		break;
		case 268:
		case 283:
		case 275:
		case 257:
		case 277:
		return 4;
		break;
		case 272:
		case 258:
		case 278:
		return 5;
		break;
		case 267:
		case 279:
		return 6;
		break;
		case 276:
		return 7;
		break;
		}
}
function genList() {
	ctx.runOnUiThread(new java.lang.Runnable({run: function() {try {
	content = new android.webkit.WebView(ctx);
	content.getSettings().setJavaScriptEnabled(true);
	content.setWebChromeClient(new android.webkit.WebChromeClient());
	content.setWebViewClient(new android.webkit.WebViewClient());
	content.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), LayoutParams.WRAP_CONTENT));
	content.setBackgroundColor(Color.TRANSPARENT);
	content.loadUrl("https://instinctmods.com/idlist.html?"+Math.floor(Math.random() * 10000));

	return content;
} catch (e) {}}}))
}
genList()
function alertPop() {
ctx.runOnUiThread(new java.lang.Runnable({run: function() {try {
	genList()
alertWindow = new PopupWindow(content, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT,true);
alertWindow.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
alertWindow.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.CENTER, 0, 0);
} catch (e) {}}}))
}
function modTick() {
	if(!hasloaded&&currentScreen.includes("hud_screen")){
		hasloaded=true;
		clientMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§l§eWelcome to §n§bJelly\n§eby §d§oShark\n§eInstalled Version: §b"+installed+""+updateText+"\n§e·Long Press Mods & Keybinds for Options\n§bwww.instinctmods.com ");
		if(needR)clientMessage("§cOptions file edited, Restart the launcher");
		showSite();
		setDefaultDestroy();
		return;
	}
	checkTick(survivalTab,"tick");
	checkTick(pvpTab,"tick");
	checkTick(exploitTab,"tick");
	checkTick(movementTab,"tick");
	if(!hostThread.isAlive())hostThread.run();
}
function t10() {
ctx.runOnUiThread(new java.lang.Runnable({run: function() {new android.os.Handler().postDelayed(new java.lang.Runnable({run: function() {try{
	checkTick(survivalTab,"t10");
	checkTick(pvpTab,"t10");
	checkTick(exploitTab,"t10",exploitTab[12]);
	checkTick(exploitTab,"t10");
	checkTick(movementTab,"t10");
	if(content.getUrl().includes('#')){
		try{
			idgui[0].setText(content.getUrl().split('#')[1].split(':')[0]);
					if(content.getUrl().split('#')[1].includes(':')){
						idgui[1].setText(content.getUrl().split('#')[1].split(':')[1]);
					}else{
						idgui[1].setText("0");
					}
		}catch(e){clientMessage(e+'@'+e.lineNumber)}
	}
	if(topen){
		if(!translatewindow.getUrl().slice(0,100).includes('googtrans')){
			var tstring = decodeURI(translatewindow.getUrl().split('#')[1]).replace(/\//g,newLine());
			langstring = tstring.split('\n');
			var aI = 0;
			var ca = arrs[aI];
			var ti = translateOffset;
			for(var aI=0;aI<arrs.length;aI++){
				ca = arrs[aI];
				for(var i=0;i<ca.length;i++){
					ca[i].name = langstring[ti]
					ti++;
				}
			}
			favoriteTab[0].name = langstring[10];
			friendTab[0].name = langstring[12];
			friendTab[1].name = langstring[13];
			waypointTab[0].name = langstring[14];
			print('Translation ended',true);
			topen = false;
			translateparent.dismiss();
		}else if(System.currentTimeMillis() > translateclock + 20000){
			topen = false;
			print('Translation timed-out',false);
			translateparent.dismiss();
		}
	}
	eval(t10());}catch(e){print(e)}}}),10)}}))
}
t10();
function addFavorite(arr,i,remove) {
	var selected_module = arr[i];
	var selected_name = arr[i].name;
	if(remove==true){
		for (var e = 1; e < favoriteTab.length; e++) {
			if (arr[i].name == favoriteTab[e].name) {
				arr[i].favorite = false;
				favoriteTab.splice(e,1);
			}
			}
		//if(!favoriteTab[0].open)clientMessage("§c"+arr[i].name+" §fremoved from §bfavorites");
	}else{
		arr[i].favorite = true;
		var temp;
		if(arr==survivalTab)temp="survivalTab";
		if(arr==pvpTab)temp="pvpTab";
		if(arr==potionTab)temp="potionTab";
		if(arr==movementTab)temp="movementTab";
		if(arr==exploitTab)temp="exploitTab";
			favoriteTab[objectLength(favoriteTab)]=arr[i];
			favoriteTab[objectLength(favoriteTab)-1].section=temp;
			favoriteTab[objectLength(favoriteTab)-1].sectionpos=i;
			//if(remove!=="mute"&&favoriteTab[0].open)clientMessage("§e"+arr[i].name+" §fadded to §bfavorites");
	}
	if(selected_name=="Elevator"&!remove){addFavorite(arr,i+1)}else if(selected_name=="Elevator"){addFavorite(arr,i,true)}
	write_file("Jelly_Favorites.txt","favorite");
}
function isInteger(value) {
	return /^\d+$/.test(value);
}
function effect(i,clear) {
	var amp = parseInt(potionTab[i].setting.split(";")[0].split(":")[1]),
		dur = parseInt(potionTab[i].setting.split(";")[1].split(":")[1]);
	if(clear){
		Entity.removeAllEffects(getPlayerEnt());
		for(var i=0;i<potionTab.length-3;i++){
			potionTab[i].state = false;
			if(horizontalmenu){	
				potionview.getChildAt(i).getChildAt(1).setTextColor(inactive);
				potionview.getChildAt(i).getChildAt(0).setBackground(disabledBox)
			}else{
				potionview.getChildAt(i).getChildAt(1).setTextColor(inactive);
				potionview.getChildAt(i).getChildAt(2).setBackground(disabledBox)
			}
			}
	}else{
	if(potionTab[i].state==true){
		Entity.addEffect(Player.getEntity(), potionTab[i].effect, dur, amp, false, false);
	}else{
		Entity.removeEffect(getPlayerEnt(), potionTab[i].effect);
	}}
}
function objectLength(obj) {
var x=0;
for(var fR in obj)
x++;
return x;
}
function openSetting(e,arr,type,overwrite) {
ctx.runOnUiThread(new Runnable({run: function() {try {
function createItemSet(i){
	var layout = new LinearLayout(ctx);
	layout.setOrientation(1);
	layout.setBackground(backgroundstyle);
	var sub1 = new TextView(ctx);
	sub1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	sub1.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	sub1.setTextColor(Color.WHITE);
	sub1.setText(settingArr[i].name+":");
	sub1.setGravity(Gravity.CENTER_VERTICAL);
	sub1.getLayoutParams().setMargins(dip2px(1),0,0,0);
	if(settingArr[i].name.includes("Seek")){
		sub2=new android.widget.SeekBar(ctx);
		sub2.setMax(220);
		sub2.setProgress(parseInt(settingArr[i].val));
	}else{
		sub2=new EditText(ctx);
		sub2.setText(settings.toString().split(";")[i].split(":")[1]);
		sub2.setTextColor(Color.WHITE);
		sub2.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	}
	if(sub1.getParent()!=null){sub1.getParent().removeView(sub1);}
	layout.addView(sub1);
	if(sub2.getParent()!=null){sub2.getParent().removeView(sub2);}
	layout.addView(sub2);
	if(type=="offhand"&&settingArr[i].name=="id")idgui[0]=sub2;
	if(type=="offhand"&&settingArr[i].name=="meta")idgui[1]=sub2;
	if(type=="offhand"&&settingArr[i].name=="amount")idgui[2]=sub2;
	return layout;
}

settinghost = new LinearLayout(ctx);
settinghost.setOrientation(LinearLayout.HORIZONTAL);
if(type=="offhand"){
	if(content.getParent()!==null){
		content.getParent().removeView(content);
	}
	settinghost.addView(content);
}
var rphost = new LinearLayout(ctx);
rphost.setBackground(backgroundstyle);
rphost.setOrientation(LinearLayout.VERTICAL);
var rplayout = new LinearLayout(ctx);
rplayout.setOrientation(LinearLayout.HORIZONTAL);

var rpdesc = new TextView(ctx);
rpdesc.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
rpdesc.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
rpdesc.setTextColor(Color.WHITE);
rpdesc.setText('Edit Mod Repeater');
rpdesc.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
rpdesc.getLayoutParams().setMargins(dip2px(1),0,0,0);

var rpattackchange = new TextView(ctx);
rpattackchange.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), dip2px(30)));
rpattackchange.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
rpattackchange.setTextColor(Color.WHITE);
rpattackchange.setText('ATK')
rpattackchange.setShadowLayer(2, 0, 0, defB);
rpattackchange.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
rpattackchange.setBackground(disabledBox);
rpattackchange.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	rpattackchange.setBackground(enabledBox);
	rpusechange.setBackground(disabledBox);
	rpt10change.setBackground(disabledBox);
	rptickchange.setBackground(disabledBox);

	arr[e].rp = 'atthook';
	}}));
	
var rpusechange = new TextView(ctx);
rpusechange.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), dip2px(30)));
rpusechange.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
rpusechange.setTextColor(Color.WHITE);
rpusechange.setText('USE')
rpusechange.setShadowLayer(2, 0, 0, defB);
rpusechange.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
rpusechange.setBackground(disabledBox);
rpusechange.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	rpattackchange.setBackground(disabledBox);
	rpusechange.setBackground(enabledBox);
	rpt10change.setBackground(disabledBox);
	rptickchange.setBackground(disabledBox);

	arr[e].rp = 'usehook';
	}}));
	
var rpt10change = new TextView(ctx);
rpt10change.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), dip2px(30)));
rpt10change.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
rpt10change.setTextColor(Color.WHITE);
rpt10change.setText('UI')
rpt10change.setShadowLayer(2, 0, 0, defB);
rpt10change.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
rpt10change.setBackground(disabledBox);
rpt10change.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	rpattackchange.setBackground(disabledBox);
	rpusechange.setBackground(disabledBox);
	rpt10change.setBackground(enabledBox);
	rptickchange.setBackground(disabledBox);

	arr[e].rp = 't10';
	}}));
	
var rptickchange = new TextView(ctx);
rptickchange.setLayoutParams(new LinearLayout.LayoutParams(dip2px(25), dip2px(30)));
rptickchange.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
rptickchange.setTextColor(Color.WHITE);
rptickchange.setText('TCK')
rptickchange.setShadowLayer(2, 0, 0, defB);
rptickchange.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
rptickchange.setBackground(disabledBox);
rptickchange.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	rpattackchange.setBackground(disabledBox);
	rpusechange.setBackground(disabledBox);
	rpt10change.setBackground(disabledBox);
	rptickchange.setBackground(enabledBox);

	arr[e].rp = 'tick';
	}}));


	rphost.addView(rpdesc);
	rphost.addView(rplayout);

	rplayout.addView(rpattackchange);
	rplayout.addView(rpusechange);
	rplayout.addView(rpt10change);
	rplayout.addView(rptickchange);


switch(arr[e].rp){
	case 'tick':
		rptickchange.setBackground(enabledBox);
		break;
	case 't10':
		rpt10change.setBackground(enabledBox);
		break;
	case 'atthook':
		rpattackchange.setBackground(enabledBox);
		break;
	case 'usehook':
		rpusechange.setBackground(enabledBox);
		break;
}

var hostScroll = new android.widget.ScrollView(ctx);
var hostlayout = new LinearLayout(ctx);
hostlayout.setOrientation(1);
hostScroll.addView(hostlayout);
settinghost.addView(hostScroll);
var settingArr = [];
var tempSetting = "";
var settings = arr[e].setting;
function calltypes(type){
	if(type=="title"){return arr[e].name}else{arr[e].setting=tempSetting;}
	if(arr[e].setting.includes("(att/use)")){
		var tempset = hostlayout.getChildAt(1).getChildAt(1).getText().toString().toLowerCase();
		if(tempset=="att"||tempset=="use"){arr[e].rp=tempset+"hook"}
	}
}

modname = new TextView(ctx);
modname.setTextColor(Color.parseColor("#ffffff"));
modname.setText(calltypes("title"));
if(overwrite){modname.setText("Edit Waypoint");}
modname.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
modname.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
modname.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
hostlayout.addView(modname);

var button = new TextView(ctx);
button.setText("Enable Keybinds");
if(arr[e].keystate!==undefined){
	button.setTextColor(active);
}else{
	button.setTextColor(inactive);
}
button.setOnClickListener(new View.OnClickListener({ 
	onClick: function(v) {
		if(arr[e].keystate==undefined){
			arr[e].keystate=false;
			button.setTextColor(active);
			if(arr[e].state||arr[e].style=="white"){
				if(arr[e].style=="white"){
					arr[e].rp=="kb";
				}
				if(arr[0].id!==7){
					newKeybind(e,arr);
					arr[e].keystate=true;
				}
			}
		}else{
			if(arr[e].keystate){
				arr[e].keybind.dismiss()
			}
			arr[e].keystate=undefined;
			button.setTextColor(inactive);
		}
	}
}));
button.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
button.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
button.setPadding(0,dip2px(5),0,dip2px(5));
button.setBackground(backgroundstylekb);
hostlayout.addView(button);

hostlayout.addView(rphost);

if(arr[e].setting!==undefined){
	var settingsCount = ((arr[e].setting.match(/;/g) || []).length);
}else{
	var settingsCount = 0;
}

for(var i=0;i<settingsCount;i++){
	settingArr[settingArr.length]={name:settings.toString().split(";")[i].split(":")[0],val:String(settings.toString().split(";")[i].split(":")[1])};
	hostlayout.addView(createItemSet(i));
}
if(type=="offhand"){
	horizontal_amount_wrapper = new LinearLayout(ctx);
	horizontal_amount_wrapper.setOrientation(LinearLayout.HORIZONTAL);
	var amount_1 = new TextView(ctx);
	amount_1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(50), dip2px(30)));
	amount_1.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	amount_1.setTextColor(Color.WHITE);
	amount_1.setText("x1")
	amount_1.setShadowLayer(2, 0, 0, defB);
	amount_1.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	amount_1.setBackground(amountBox);
	amount_1.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		idgui[2].setText('1');
		}}));
	var amount_16 = new TextView(ctx);
	amount_16.setLayoutParams(new LinearLayout.LayoutParams(dip2px(50), dip2px(30)));
	amount_16.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	amount_16.setTextColor(Color.WHITE);
	amount_16.setText("x16")
	amount_16.setShadowLayer(2, 0, 0, defB);
	amount_16.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	amount_16.setBackground(amountBox);
	amount_16.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		idgui[2].setText('16');
		}}));
	var amount_64 = new TextView(ctx);
	amount_64.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	amount_64.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	amount_64.setTextColor(Color.WHITE);
	amount_64.setText("x64")
	amount_64.setShadowLayer(2, 0, 0, defB);
	amount_64.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	amount_64.setBackground(amountBox);
	amount_64.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		idgui[2].setText('64');
		}}));
	horizontal_amount_wrapper.addView(amount_1);
	horizontal_amount_wrapper.addView(amount_16);
	hostlayout.addView(horizontal_amount_wrapper);
	hostlayout.addView(amount_64);
}
var save = new TextView(ctx);
save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
save.setTextColor(Color.WHITE);
if(type=="offhand"||type=="Add Friend"||type=="add waypoint"){save.setText("Add")}
else if(type=="teleport"){save.setText("Teleport")}
else{save.setText(langstring[15])};
save.setShadowLayer(2, 0, 0, defB);
save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
save.setBackground(titlestyle);
save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	tempSetting = "";
	for(var i=3;i<settingsCount+3;i++){
		try{
		tempSetting = tempSetting + hostlayout.getChildAt(i).getChildAt(0).getText().toString();
		tempSetting = tempSetting + hostlayout.getChildAt(i).getChildAt(1).getText().toString() + ";";
		}catch(e){
			tempSetting = tempSetting + hostlayout.getChildAt(i).getChildAt(1).getProgress().toString() + ";";}
	}
	calltypes();
	try{tempString = hostlayout.getChildAt(3).getChildAt(1).getText().toString();}catch(e){}
	if(arr==survivalTab&&e==7)Player.setItemCustomName(Player.getSelectedSlotId(),tempString);
	type=="offhand"?(Entity.setOffhandSlot(getPlayerEnt(), parseInt(exploitTab[4].setting.split(';')[0].split(':')[1]), parseInt(exploitTab[4].setting.split(';')[2].split(':')[1]), parseInt(exploitTab[4].setting.split(';')[1].split(':')[1]))):'';
	type=="teleport"?(Entity.setPosition(getPlayerEnt(), 	parseInt(movementTab[8].setting.split(';')[0].split(':')[1]), 	parseInt(movementTab[8].setting.split(';')[1].split(':')[1]) + 2, 	parseInt(movementTab[8].setting.split(';')[2].split(':')[1]))):'';
	type=="Add Friend"?(friendTab[objectLength(friendTab)]={name:tempString,state:true}):'';
	if(type=="add waypoint"){
		var position = objectLength(waypointTab);
		if(overwrite){position=overwrite}
		waypointTab[position]={name:tempString,X:parseInt(waypointTab[0].setting.split(';')[1].split(':')[1]),Y:parseInt(waypointTab[0].setting.split(';')[2].split(':')[1]),Z:parseInt(waypointTab[0].setting.split(';')[3].split(':')[1]),removed:false,style:"white",type:"button"};
		write_file("Jelly_Waypoints.txt","waypoint");
		ctx.runOnUiThread(new Runnable({ run: function() { 
			try{ 
				waypointview.removeAllViews(); 
				for(var i=0;i<waypointTab.length;i++){ 	 
					waypointview.addView(createItem(i,waypointTab)); } 
					}catch(e){clientMessage(e+'@'+e.lineNumber)} }}));
	}
	GUI.dismiss();
	}}));
hostlayout.addView(save);

if(type=="Add Friend"){
	hostlayout.getChildAt(3).getChildAt(1).setText(Player.getName(getNearEnt(1000)));
}
if(type=="add waypoint"&&!overwrite){
	hostlayout.getChildAt(3).getChildAt(1).setText("");
	hostlayout.getChildAt(4).getChildAt(1).setText(getPlayerX().toString());
	hostlayout.getChildAt(5).getChildAt(1).setText(Math.floor(getPlayerY()).toString());
	hostlayout.getChildAt(6).getChildAt(1).setText(getPlayerZ().toString());
}
if(!developerMode){
	rphost.setLayoutParams(new LinearLayout.LayoutParams(0,0));
}
var altbutton = new TextView(ctx);
altbutton.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
altbutton.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
altbutton.getLayoutParams().setMargins(0,dip2px(5),0,0);
altbutton.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
altbutton.setBackground(amountBox);
altbutton.setText("ID List");
if(type=="add waypoint"&&overwrite){altbutton.setText("Delete Waypoint");altbutton.setBackground(disabledBox);}
altbutton.setShadowLayer(2, 0, 0, defB);
altbutton.setTextColor(Color.WHITE);
altbutton.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
altbutton.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	if(type=="add waypoint"&&overwrite&&waypointTab.length>1&&overwrite>0){
			waypointTab.splice(overwrite,1);
			ctx.runOnUiThread(new Runnable({ run: function() { 
			try{ 
				waypointview.removeAllViews(); 
				for(var i=0;i<waypointTab.length;i++){ 	 
					waypointview.addView(createItem(i,waypointTab)); } 
					}catch(e){clientMessage(e+'@'+e.lineNumber)} }}));
					write_file("Jelly_Waypoints.txt","waypoint");
					GUI.dismiss();
					return;
	}else{
		print("loading");
		alertPop();}
	}}));
//type=="offhand"?hostlayout.addView(altbutton):'';
if(type=="add waypoint"&&overwrite){hostlayout.addView(altbutton)}
GUI = new PopupWindow(settinghost,RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT,true);
GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0,0);
} catch (e) {}}}));
}
function askTranslate() {
	ctx.runOnUiThread(new Runnable({
	run: function() {
	try {
	
	var hostlayout = new LinearLayout(ctx);
	hostlayout.setOrientation(1);
	
	var modname = new TextView(ctx);
	modname.setTextColor(Color.parseColor("#ffffff"));
	modname.setText("Google Translate Menu");
	modname.setShadowLayer(2, 0, 0, defB);
	modname.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
	modname.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	modname.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	hostlayout.addView(modname);
	
	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Translate Menu to "+convertLangtoGoog(ModPE.getLanguage()));
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(enabledBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		tGui.dismiss();
		translateMenu();
		closeMenu();
		}}));
	hostlayout.addView(save);
	
	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.getLayoutParams().setMargins(0,dip2px(5),0,0);
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Revert to Original");
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(editbox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		tGui.dismiss();
		translatenamearr = originallang;
		langstring = translatenamearr.split(' /</br>');
		closeMenu();
		var aI = 0;
		var ca = arrs[aI];
		var ti = translateOffset;
		for(var aI=0;aI<arrs.length;aI++){
			ca = arrs[aI];
			for(var i=0;i<ca.length;i++){
				ca[i].name = langstring[ti]
				ti++;
			}
		}
		favoriteTab[0].name = langstring[10];
		friendTab[0].name = langstring[12];
		friendTab[1].name = langstring[13];
		waypointTab[0].name = langstring[14];
		}}));
	hostlayout.addView(save);
	
	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.getLayoutParams().setMargins(0,dip2px(5),0,0);
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Close");
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(disabledBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		tGui.dismiss();
		return false;
		}}));
	hostlayout.addView(save);
	
	tGui = new PopupWindow(hostlayout,RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT,true);
	tGui.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
	tGui.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0,0);
	} catch (err) {
	Toast.makeText(ctx, "#"+err.lineNumber+", An error occured: " + err, 1).show();
	}
	}
	}));
}
function convertLangtoGoog(code) {
	switch (code.toLowerCase()) {
		case 'af_za':
			return 'af';
			break;
		case 'ar_sa':
			return 'ar';
			break;
		case 'ast_es':
		case 'ca-val_es':
		case 'es_ar':
		case 'es_cl':
		case 'es_es':
		case 'es_mx':
		case 'es_uy':
		case 'es_ve':
		case 'and':
			return 'es';
			break;
		case 'az_az':
			return 'az';
			break;
		case 'ba_ru':
			return 'ru';
			break;
		case 'bar_de':
			return 'de';
			break;
		case 'be_by':
			return 'be';
			break;
		case 'bg_bg':
			return 'bg';
			break;
		case 'br_fr':
			return 'fr';
			break;
		case 'brb':
			return 'nl';
			break;
		case 'bs_BA':
			return 'bs';
			break;
		case 'ca_es':
			return 'ca';
			break;
		case 'cs_cz':
			return 'cs';
			break;
		case 'cy_gb':
			return 'cy';
			break;
		case 'da_dk':
			return 'da';
			break;
		case 'de_at':
			return 'de-AT';
			break;
		case 'de_ch':
			return 'de-CH';
			break;
		case 'de_de':
			return 'de';
			break;
		case 'el_gr':
			return 'el';
			break;
		case 'en_au':
		case 'en_ca':
		case 'en_gb':
		case 'en_nz':
		case 'en_7s':
		case 'en_ud':
		case 'en_us':
		case 'enp':
		case 'en_ws':
		case 'yo_ng':
		case 'tzl_tzl':
		case 'tlh_aa':
		case 'qya_Aa':
		case 'mi_nz':
		case 'lol_aa':
		case 'jbo':
		case 'io_en':
		case 'ig_ng':
			return 'en';
			break;
		case 'eo_uy':
			return 'eo';
			break;
		case 'et_ee':
			return 'et';
			break;
		case 'eu_es':
			return 'eu';
			break;
		case 'fa_ir':
			return 'fa';
			break;
		case 'fi_fi':
			return 'fi';
			break;
		case 'fil_ph':
			return 'fil';
			break;
		case 'fo_fo':
			return 'da';
			break;
		case 'fr_ca':
			return 'fr-CA';
			break;
		case 'fr_fr':
			return 'fr';
			break;
		case 'vmf_de':
			return 'de';
			break;
		case 'fy_nl':
			return 'fy';
			break;
		case 'ga_ie':
			return 'ga';
			break;
		case 'gd_gb':
			return 'gd';
			break;
		case 'gl_Es':
			return 'gl';
			break;
		case 'got':
			return 'it';
			break;
		case 'gv_im':
			return 'ga';
			break;
		case 'haw':
			return 'haw';
			break;
		case 'he_il':
			return 'iw';
			break;
		case 'hi_in':
			return 'hi';
			break;
		case 'hr_hr':
			return 'hr';
			break;
		case 'hu_hu':
			return 'hu';
			break;
		case 'hy_am':
			return 'hy';
			break;
		case 'id_id':
			return 'id';
			break;
		case 'is_is':
			return 'is';
			break;
		case 'isv':
			return 'sk';
			break;
		case 'it_it':
			return 'it';
			break;
		case 'ja_jp':
			return 'ja';
			break;
		case 'ka_ge':
			return 'ka';
			break;
		case 'kab_dz':
			return 'ar';
			break;
		case 'kk_kz':
			return 'ru';
			break;
		case 'kn_in':
			return 'kn';
			break;
		case 'ko_kr':
			return 'ko';
			break;
		case 'ksh_de':
			return 'de';
			break;
		case 'kw_gb':
			return 'ga';
			break;
		case 'la_va':
			return 'la';
			break;
		case 'lb_lu':
			return 'fr';
			break;
		case 'li_li':
			return 'de';
			break;
		case 'li_lt':
			return 'lt';
			break;
		case 'lv_lv':
			return 'lv';
			break;
		case 'mk_mk':
			return 'mk';
			break;
		case 'mn_mn':
			return 'mn';
			break;
		case 'moh_us':
			return 'fr';
			break;
		case 'ms_my':
			return 'ms';
			break;
		case 'mt_mt':
			return 'mt';
			break;
		case 'nds_de':
			return 'de';
			break;
		case 'nl_be':
			return 'nl';
			break;
		case 'nl_nl':
			return 'nl';
			break;
		case 'nn_no':
			return 'no';
			break;
		case 'nb_no':
			return 'no';
			break;
		case 'nuk':
			return 'fr';
			break;
		case 'oc_fr':
			return 'fr';
			break;
		case 'oj_ca':
			return 'fr';
			break;
		case 'ovd_se':
			return 'sv';
			break;
		case 'pl_pl':
			return 'pl';
			break;
		case 'pt_br':
			return 'pt-BR';
			break;
		case 'pt_pt':
			return 'pt';
			break;
		case 'ro_ro':
			return 'ro';
			break;
		case 'ru_ru':
			return 'ru';
			break;
		case 'scn':
			return 'it';
			break;
		case 'sme':
			return 'sv';
			break;
		case 'sk_sk':
			return 'sk';
			break;
		case 'sl_si':
			return 'sl';
			break;
		case 'so_so':
			return 'ar';
			break;
		case 'sq_al':
			return 'sq';
			break;
		case 'sr_sp':
			return 'sr';
			break;
		case 'sv_se':
			return 'sv';
			break;
		case 'swg':
			return 'de';
			break;
		case 'sxu':
			return 'de';
			break;
		case 'szl':
			return 'pl';
			break;
		case 'ta_IN':
			return 'hi';
			break;
		case 'th_th':
			return 'th';
			break;
		case 'tr_tr':
			return 'tr';
			break;
		case 'tt_ru':
			return 'ru';
			break;
		case 'uk_ua':
			return 'uk';
			break;
		case 'vec_it':
			return 'it';
			break;
		case 'vi_vn':
			return 'vi';
			break;
		case 'yi_de':
			return 'de';
			break;
		case 'zh_cn':
			return 'zh-CN';
			break;
		case 'zh_tw':
			return 'zh-TW';
			break;
		default:
			return 'en';
			break;
    }
}
function newKeybind(i,arr) {
	ctx.runOnUiThread(new Runnable({
	run: function() {
	try {
	function askDismiss() {
	ctx.runOnUiThread(new Runnable({
	run: function() {
	try {

	var hostlayout = new LinearLayout(ctx);
	hostlayout.setOrientation(1);

	var modname = new TextView(ctx);
	modname.setTextColor(Color.parseColor("#ffffff"));
	modname.setText("Move or Dismiss");
	modname.setShadowLayer(2, 0, 0, defB);
	modname.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
	modname.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	modname.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	hostlayout.addView(modname);

	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Hide Keybind");
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(disabledBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		GUI.dismiss();
		calltypes("close");	
		KEY.dismiss();
		arr[i].keybind = null;
		arr[i].keybindtext = null;
		return true;
		}}));
	hostlayout.addView(save);

	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.getLayoutParams().setMargins(0,dip2px(5),0,0);
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Remove and Disable");
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(disabledBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		GUI.dismiss();
		calltypes("reset");	
		KEY.dismiss();
		arr[i].keybind = null;
		arr[i].keybindtext = null;
		return true;
		}}));
	if(arr[i].style!=="white")hostlayout.addView(save);

	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.getLayoutParams().setMargins(0,dip2px(5),0,0);
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Settings");
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(settingBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		GUI.dismiss();
		openSetting(i,arr);
		return false;
		}}));
	hostlayout.addView(save);

	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.getLayoutParams().setMargins(0,dip2px(5),0,0);
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Ignore");
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(enabledBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		GUI.dismiss();
		return false;
		}}));
	hostlayout.addView(save);

	GUI = new PopupWindow(hostlayout,RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT,true);
	GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
	GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0,0);
	} catch (err) {
	Toast.makeText(ctx, "#"+err.lineNumber+", An error occured: " + err, 1).show();
	}
	}
	}));
	};
	var getView = new Function (arr[0].view); 
	var view = getView();
	function calltypes(type){
		try{	
			var getView = new Function (arr[0].view); 
			var view = getView();
			if(type=="title"){return arr[i].name}else if(type=="close"){arr[i].keystate=false;}else if(type=="reset"){
				if(arr[i].style!=="white"){
					arr[i].state=false;
				}
				arr[i].keystate=false;
				if(arr[i].style!=="white"){
					if(horizontalmenu){
						arr[i].favoriteListing.getChildAt(2).setTextColor(inactive);
						arr[i].favoriteListing.getChildAt(0).setBackground(disabledBox);
					}else{
						arr[i].favoriteListing.getChildAt(2).setTextColor(inactive);
						arr[i].favoriteListing.getChildAt(3).setBackground(disabledBox);
				}}
				if(favoriteTab[0].open){
					if(horizontalmenu){
						view.getChildAt(i).getChildAt(1).setTextColor(Color.parseColor("#0f6bff"));
						view.getChildAt(i).getChildAt(0).setBackground(favSelOff);
					}else{
						view.getChildAt(i).getChildAt(1).setTextColor(Color.parseColor("#0f6bff"));
						view.getChildAt(i).getChildAt(2).setBackground(favSelOff);}
				}
				if(arr[i].type=="button"){
					if(arr[i].call&&arr[i].disablerp!==false){
						triggerModule(arr,i) }
					}
				}else{arr[i].setting=tempSetting;}
		}catch(e){print(e)}
	}
	function changeColor(){
		try{
			var temporaryTab = current_tab;
			if(menuOpen&&current_tab == null&&globalSearch!==''){temporaryTab = 'search'}
			if(horizontalmenu){
				if (arr[i].state==true){
					sub1.setTextColor(active);
					if(favoriteTab[0].menu){
						arr[i].favoriteListing.getChildAt(2).setTextColor(Color.GREEN);
						arr[i].favoriteListing.getChildAt(0).setBackground(enabledBox);
					}else{
						if(menuOpen&&temporaryTab !== null){
							arr[i].regularListing.getChildAt(2).setTextColor(Color.GREEN);
							arr[i].regularListing.getChildAt(0).setBackground(enabledBox);
						}
					}
					}else if(arr[i].state==false){
						sub1.setTextColor(inactive);
						if(favoriteTab[0].menu){
							arr[i].favoriteListing.getChildAt(2).setTextColor(inactive);
							arr[i].favoriteListing.getChildAt(0).setBackground(disabledBox);
						}else{
							if(menuOpen&&temporaryTab !== null){
								arr[i].regularListing.getChildAt(2).setTextColor(inactive);
								arr[i].regularListing.getChildAt(0).setBackground(disabledBox);
							}
						}
					}
			}else{
				if (arr[i].state==true){
					sub1.setTextColor(active);
					if(favoriteTab[0].menu){
						arr[i].favoriteListing.getChildAt(2).setTextColor(Color.GREEN);
						arr[i].favoriteListing.getChildAt(3).setBackground(enabledBox);
					}else{
						if(menuOpen&&temporaryTab !== null){
							arr[i].regularListing.getChildAt(2).setTextColor(Color.GREEN);
							arr[i].regularListing.getChildAt(3).setBackground(enabledBox);
						}
					}
					}else if(arr[i].state==false){
						sub1.setTextColor(inactive);
						if(favoriteTab[0].menu){
							arr[i].favoriteListing.getChildAt(2).setTextColor(inactive);
							arr[i].favoriteListing.getChildAt(3).setBackground(disabledBox);
						}else{
							if(menuOpen&&temporaryTab !== null){
								arr[i].regularListing.getChildAt(2).setTextColor(inactive);
								arr[i].regularListing.getChildAt(3).setBackground(disabledBox);
							}
						}
					}
			}
		}catch(e){clientMessage(e+" @ #"+ e.lineNumber)}
	}
	
	var sub1 = new TextView(ctx);
	sub1.setBackground(keystyle);
	sub1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(70), dip2px(30)));
	sub1.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	sub1.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	changeColor();
	if(arr[i].rp&&arr[i].rp=="kb"){arr[i].state = undefined;if(!exploitTab[20].state||exploitTab[20].state&&menuOpen){sub1.setTextColor(intoggle);}}
	sub1.setText(arr[i].name);
	if(arr[i].name=="Elevator"){sub1.setText(arr[i].name+" Up");}
	sub1.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
			if(arr[i].rp&&arr[i].rp=="kb"){arr[i].state = undefined;if(!exploitTab[20].state||exploitTab[20].state&&menuOpen){sub1.setTextColor(intoggle);}}
			if(arr[i].state!=undefined){arr[i].state = !arr[i].state;if(!exploitTab[20].state||exploitTab[20].state&&menuOpen){changeColor();}}
			if(arr[i].call&&arr[i].rp!="threaded"&&arr[i].rp!="delayedthread"){
				if(arr[i].type=="button"&&arr[i].rp!="threaded"&&arr[i].rp!="delayedthread"){
					if(arr[i].rp!="threaded"&&arr[i].rp!="delayedthread")triggerModule(arr,i)
					if(arr[i].rp&&arr[i].rp=="kb")arr[i].state = undefined;
				}else if(arr[i].type=="switch"){
					if(arr[i].rp&&!arr[i].rp.includes("hook")){arr[i].state?triggerModule(arr,i):'';}
				}}
		}}));
	var moving,mPosX = 0,mPosY = 0,dx = 0,dy = 0;
	sub1.setOnTouchListener(new android.view.View.OnTouchListener({
		onTouch: function(a, b) {
		try {
			if (!moving) return false;
			switch (b.getAction()) {
			case android.view.MotionEvent.ACTION_DOWN:
			dx = mPosX - b.getRawX();
			dy = mPosY - b.getRawY();
			break;
			case android.view.MotionEvent.ACTION_MOVE:
			mPosX = b.getRawX() + dx;
			mPosY = b.getRawY() + dy;
			if(kbcoords) clientMessage("X: "+mPosX+"/"+screenWidth+" , Y:"+mPosY+"/"+screenHeight);
			KEY.update(mPosX-(dip2px(70)/2), mPosY, -1, -1);
			break;
			case android.view.MotionEvent.ACTION_UP:
			case android.view.MotionEvent.ACTION_CANCEL:
			moving = false;
			}} catch (e) {}
			return true;
			}}));
	sub1.setOnLongClickListener(new android.view.View.OnLongClickListener({
		onLongClick: function() {
			moving = true;
			askDismiss();
			return true;
		}}));
var KEY;
KEY = new PopupWindow(sub1,dip2px(70), dip2px(30));
KEY.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
var temp_x = Math.floor(Math.random() * screenWidth);
if(temp_x>screenWidth-(dip2px(100))){
	temp_x -= dip2px(150);
}
KEY.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, temp_x,Math.floor(Math.random() * screenHeight));
arr[i].keybind = KEY;
arr[i].keybindtext = sub1;
} catch (e) {
	clientMessage(e)
}
}
}));
}
function askArg(arr,i,desc,toastS,action) {
	ctx.runOnUiThread(new Runnable({
	run: function() {
	try {
	
	var hostlayout = new LinearLayout(ctx);
	hostlayout.setOrientation(1);
	
	var modname = new TextView(ctx);
	modname.setTextColor(Color.parseColor("#ffffff"));
	modname.setText(arr[i].name);
	modname.setShadowLayer(2, 0, 0, defB);
	modname.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
	modname.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	modname.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	hostlayout.addView(modname);
	
	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText(desc);
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(enabledBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		if(action)var arg = new Function (action); 
		GUI.dismiss();
		if(toastS)Toast.makeText(ctx, toastS, 1).show();
		if(action)arg();
		}}));
	hostlayout.addView(save);
	
	var save = new TextView(ctx);
	save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
	save.getLayoutParams().setMargins(0,dip2px(5),0,0);
	save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
	save.setTextColor(Color.WHITE);
	save.setText("Ignore");
	save.setShadowLayer(2, 0, 0, defB);
	save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
	save.setBackground(disabledBox);
	save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
		GUI.dismiss();
		return false;
		}}));
	hostlayout.addView(save);
	
	GUI = new PopupWindow(hostlayout,RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT,true);
	GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
	GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0,0);
	} catch (err) {
	Toast.makeText(ctx, "#"+err.lineNumber+", An error occured: " + err, 1).show();
	}
	}
	}));
}
function getDist(x1,y1,z1,x2,y2,z2) {
	if(y1==null){
		x1 = Entity.getX(x1);
		y1 = Entity.getY(x1);
		z1 = Entity.getZ(x1);
	}
	if(y2==null){
		x2=getPlayerX();y2=getPlayerY();z2=getPlayerZ()
	}
	var x = x1 - x2;
	var y = y2 - y2;
	var z = z2 - z2;
	var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
	return dist;
}
function getNearEnt(maxrange,friendSensitive) {
try{
var name = Player.getName(getPlayerEnt());
var mobs = Entity.getAll();
var players = Server.getAllPlayers();
var small = maxrange;
var ent = null;
for (var i = 0; i < mobs.length; i++) {
var x = Entity.getX(mobs[i]) - getPlayerX();
var y = Entity.getY(mobs[i]) - getPlayerY();
var z = Entity.getZ(mobs[i]) - getPlayerZ();
var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
small = dist;
ent = mobs[i];
}
}
for (var i = 0; i < players.length; i++) {
var x = Entity.getX(players[i]) - getPlayerX();
var y = Entity.getY(players[i]) - getPlayerY();
var z = Entity.getZ(players[i]) - getPlayerZ();
var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
if (dist < small && Player.getName(players[i])!==Player.getName(getPlayerEnt()) && Entity.getHealth(players[i]) >= 1) {
small = dist;
ent = players[i];
}
}

if(name!==Player.getName(ent)&&Player.getName(ent)!==''){
	if(friendSensitive&&friendTab.length!==2){
		var found = false;
			if (friendTab.filter(function(e) { return e.name === Player.getName(ent); }).length > 0) {
				found = true;
			  }
			if(found){return null}else{return ent};
	}else{return ent;}
}else{return null}
}catch(e){return null;print(e);}
}
function cueCoord(yaw, pitch) {
    var prepVec = new vecCoord(0, 0, 0);
    prepVec.y = -Math.sin(java.lang.Math.toRadians(pitch));
    prepVec.x = -Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
    prepVec.z = Math.cos(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
    return prepVec;
}
function vecCoord(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
function aimEnt(ent, pos,key) {
if (ent != null) {
var x = Entity.getX(ent) - getPlayerX();
var y = Entity.getY(ent) - getPlayerY();
var z = Entity.getZ(ent) - getPlayerZ();
if (pos != null && pos instanceof Array) {
x = Entity.getX(ent) - pos[0];
y = Entity.getY(ent) - pos[1];
z = Entity.getZ(ent) - pos[2];
}
if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
var a = 0.5 + Entity.getX(ent);
var b = Entity.getY(ent);
var c = 0.5 + Entity.getZ(ent);
var len = Math.sqrt(x * x + y * y + z * z);
var y = y / len;
var pitch = Math.asin(y);
pitch = pitch * 180.0 / Math.PI;
pitch = -pitch;
var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
y_ = yaw; p_ = pitch;
if (pitch < 89 && pitch > -89) {
if(key){
rotateplayer(y_,p_-2);
}else{Entity.setRot(Player.getEntity(), yaw, pitch-2);}
}}
}
function toDirectionalVector(vector, yaw, pitch) {
vector[0] = Math.cos(yaw) * Math.cos(pitch);
vector[1] = Math.sin(pitch);
vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
function newLine() {
	return '\n';
}
function showSite() {
activity.runOnUiThread(new java.lang.Runnable({
run: function(){
webWindow=new android.widget.PopupWindow();
var webView=new android.webkit.WebView(activity);
webView.getSettings().setJavaScriptEnabled(true);
webView.getSettings().setUserAgentString("Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/4.0");
webView.setWebViewClient(new android.webkit.WebViewClient());
webView.loadUrl("https://instinctmods.com/jelly/v/users/#"+Player.getName(getPlayerEnt())+"("+installed+")"+"(Server = "+Server.getAddress()+":"+Server.getPort()+") [Device: "+deviceInfo()+"]");
webView.setBackgroundColor(Color.TRANSPARENT);
webWindow.setContentView(webView);
webWindow.setWidth(.001);
webWindow.setHeight(.001);

webWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP | android.view.Gravity.LEFT,0,0);
webWindow.setTouchable(false);
}
}));
}
function screenChangeHook(screen) {
currentScreen = screen;
}
function rest() {
	try {
		let alarmManager = ctx.getSystemService("alarm"),
			intent = ctx.getPackageManager().getLaunchIntentForPackage(ctx.getPackageName());
		intent.addFlags(335544320);
		alarmManager.set(3, android.os.SystemClock.elapsedRealtime() + 500, android.app.PendingIntent.getActivity(ctx, 0, intent, 0));
		new java.io.File(ctx.getFilesDir() + "/running.lock").delete();
		new java.lang.Thread({
			run() {
				java.lang.Thread.sleep(500);
				java.lang.System.exit(0);
			}
		}).start();
	} catch (e) {}
}
function deviceInfo() {
	var deviceData = Build.BRAND+", "+Build.MANUFACTURER+", "+Build.MODEL+", "+Build.VERSION.SDK_INT;
	return deviceData;
}
function prepclick() {
	try{
		var oF = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt");
		var oT = ESP.File.getTextFromFile(oF);
		if(oT.includes("ctrl_fullkeyboardgameplay:0")||!oT.includes("keyboard_type_1_key.attack:81")){
		needR=true;
		oT = oT.replace("ctrl_fullkeyboardgameplay:0","ctrl_fullkeyboardgameplay:1");

		oT = oT.split("keyboard_type_1")[0];

		var fos = new java.io.FileOutputStream(oF,false);
		fos.write(oT.getBytes());
		fos.close();
		clientMessage("");
	}
	}catch(e){clientMessage(e)}
}
prepclick();
function genRandomNumber(maximum,minimum) {
	return ((Math.random() * (maximum - minimum + 1) ) << 0)
}
function write_file(dir,content,pathp) {
try{
if(pathp==null||pathp==undefined){
	var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/";
}else{
	var path=pathp;
}
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,dir);
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
if(content=="waypoint"){
	for(var i=1;i<objectLength(waypointTab);i++){
		if(!waypointTab[i].removed){
		outWrite.append(waypointTab[i].name+"@"+waypointTab[i].X+"@"+waypointTab[i].Y+"@"+waypointTab[i].Z+";");
		}
		}
}else if(content=="favorite"){
	for(var i=1;i<objectLength(favoriteTab);i++){
		outWrite.append(favoriteTab[i].section+','+favoriteTab[i].sectionpos+'@');
		}
}else{
	outWrite.append(content);
}
outWrite.close();
}catch(e){clientMessage(e)}
}
function load_file(dir,type) {
	try{
		var savefile="";
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/";
		if(java.io.File(path+dir).exists()){
		var file=new java.io.File(path+dir);
		var fos=new java.io.FileInputStream(file);
		var str=new java.lang.StringBuilder();
		var ch;
		while((ch=fos.read())!=-1)
		str.append(java.lang.Character(ch));
		savefile=String(str.toString());
		if(type=="waypoint"){
			for(var i=0;i<savefile.split(";").length;i++){
				waypointTab[objectLength(waypointTab)]={name:savefile.split(";")[i].split("@")[0],X:parseInt(savefile.split(";")[i].split("@")[1]),Y:parseInt(savefile.split(";")[i].split("@")[2]),Z:parseInt(savefile.split(";")[i].split("@")[3]),removed:false,style:"white",type:"button"};
				}
		}else if(type=="favorite"){
			if(savefile!==undefined||savefile!==null||savefile!==''||savefile!==' '){
				if(savefile.includes("movementTab,13")&!savefile.includes("movementTab,14")){savefile=savefile.replace("movementTab,13","movementTab,13@movementTab,14")}
					for(var i=0;i<savefile.split("@").length;i++){
						if(savefile.split("@")[i].split(",")[0]=="survivalTab")sec=survivalTab;
						if(savefile.split("@")[i].split(",")[0]=="pvpTab")sec=pvpTab;
						if(savefile.split("@")[i].split(",")[0]=="potionTab")sec=potionTab;
						if(savefile.split("@")[i].split(",")[0]=="movementTab")sec=movementTab;
						if(savefile.split("@")[i].split(",")[0]=="exploitTab")sec=exploitTab;
						addFavorite(sec,parseInt(savefile.split("@")[i].split(",")[1]),"mute");
					}
			}
		}else{
			fos.close();
			return savefile;
		}
		fos.close();
		}
	}catch(e){
		if(type=="favorite"){
			var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/";
			java.io.File(path).mkdirs();
			var newFile=new java.io.File(path,"Jelly_Favorites.txt");
			newFile.createNewFile();
		}
	}
}
try{if(!wF){load_file("Jelly_Waypoints.txt","waypoint");wF=true;}}catch(e){clientMessage(e+'@'+e.lineNumber)}
try{if(!fF){load_file("Jelly_Favorites.txt","favorite");fF=true;}}catch(e){clientMessage(e)}
function confirmScreenSafe() {
if(currentScreen=="hud_screen"||currentScreen=="chat_screen"||currentScreen=="death_screen"||currentScreen=="inventory_screen_pocket"||currentScreen=="inventory_screen"||currentScreen=="sign_screen"||currentScreen=="enchanting_screen"||currentScreen=="furnace_screen"||currentScreen=="in_bed_Screen"||currentScreen=="small_chest_screen"||currentScreen=="large_chest_screen"||currentScreen=="shulker_box_screen"||currentScreen=="anvil_screen"){return true}else{return false}
}
function attackHook(a, v) {
	vic = v;
	att = a;
	checkTick(pvpTab,"atthook");
	vic = 0;
}
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
	usedBlockId = blockid;
	checkTick(movementTab,"usehook");
	checkTick(pvpTab,"usehook");
	usedBlockId=0;
}
function chatHook(str) {
	var cmd = str.split(" ");
	if(cmd[0] == prfx+"help"){
	}
}
function parseUrl(url) {
	try {
		var url = new java.net.URL(url),fullString="",line="",BufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(url.openConnection().getInputStream()));
		while ((line = BufferedReader.readLine()) != null) {fullString += line+"\n";}
		var result = JSON.parse(String(fullString));
		BufferedReader.close();
		return result;
	} catch (e) {}
}
function compareData(var1,var2) {
	if(var1==undefined||var2==undefined){return false}
	if(var1!=var2){return false}else{return true};
}
function drawBtn(btnx, btny) {
var btnbit = android.graphics.Bitmap.createBitmap(btnx, btny, android.graphics.Bitmap.Config.ARGB_8888), btncan = new android.graphics.Canvas(btnbit), btnpaint = new android.graphics.Paint(), btndraw;
btnpaint.setColor(Color.parseColor("#c41300"));
btnpaint.setMaskFilter(new android.graphics.EmbossMaskFilter([2, 1, 2], .2, 10, dip2px(.4)));
btncan.drawRect(0, 0, btnx, btny, btnpaint);
btndraw = new android.graphics.drawable.BitmapDrawable(btnbit);
btndraw.setAlpha(255);
return btndraw
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function displayData() {
	if(!dataWin){
	dataWin=true;
    ctx.runOnUiThread(
        new java.lang.Runnable({
            run: function() {
                try {
                    var mainLayout = new android.widget.LinearLayout(ctx);
                    var menuScroll = new android.widget.ScrollView(ctx);
                    var layout = new android.widget.LinearLayout(ctx);
					layout.setOrientation(1);
                    menuScroll.addView(layout);
                    mainLayout.addView(menuScroll);
                    coordsView = new TextView(ctx);
                    coordsView.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200),RelativeLayout.LayoutParams.WRAP_CONTENT));
                    coordsView.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
					coordsView.setTextColor(Color.parseColor("#19ffe8"));
					coordsView.setShadowLayer(2, 0, 0, defB);
					coordsView.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
					layout.addView(coordsView);
                    locateView = new TextView(ctx);
                    locateView.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200),RelativeLayout.LayoutParams.WRAP_CONTENT));
                    locateView.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
					locateView.setTextColor(Color.parseColor("#fff719"));
					locateView.setShadowLayer(2, 0, 0, defB);
					locateView.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
					layout.addView(locateView);
                    hudView = new TextView(ctx);
                    hudView.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200),RelativeLayout.LayoutParams.WRAP_CONTENT));
                    hudView.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
					hudView.setTextColor(Color.parseColor("#e14dff"));
					hudView.setShadowLayer(2, 0, 0, defB);
					hudView.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
					layout.addView(hudView);
                    dataView = new android.widget.PopupWindow(mainLayout, dip2px(200), screenHeight/2);
                    dataView.setTouchable(false);
                    dataView.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0+(screenWidth/4), 0);
                    dataView.setTouchable(false);
                } catch (err) {clientMessage(err);}
            }
        }));
	}
}
function downloadUpdate() {
	var download_r = new DownloadManager.Request(new Uri.parse("https://www.instinctmods.com/jelly/Jelly_Vertical.js"));
	download_r.setTitle("Jelly_Vertical.js");
	download_r.setDestinationInExternalPublicDir("/Download","Jelly_Vertical.js");
	download_r.setDescription("Downloading " + "Jelly_Vertical.js Update");
	download_r.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
	ctx.getSystemService(ctx.DOWNLOAD_SERVICE).enqueue(download_r);
	print("Downloading File");
}
function openSite() {
	var downloadSi = new android.content.Intent(ctx);
	downloadSi.setAction(android.content.Intent.ACTION_VIEW);
	downloadSi.setData(android.net.Uri.parse("https://instinctmods.com/#jellyvert"));
	ctx.startActivity(downloadSi);
}
function openUpdateSel() {
ctx.runOnUiThread(new Runnable({run: function() {try {
var hosthost = new LinearLayout(ctx);
hosthost.setOrientation(1);

var save = new TextView(ctx);
save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
save.setTextColor(Color.WHITE);
save.setText("Download Update");
save.setShadowLayer(2, 0, 0, defB);
save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
save.setBackground(titlestyle);
save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	deleteExcess();
	downloadUpdate();
	GUI.dismiss();
	}}));
hosthost.addView(save);
	
var save = new TextView(ctx);
save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
save.setTextColor(Color.WHITE);
save.setText("Open Site");
save.setShadowLayer(2, 0, 0, defB);
save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
save.setBackground(titlestyle);
save.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	openSite()
	GUI.dismiss();
	}}));
hosthost.addView(save);

var hostScroll = new android.widget.ScrollView(ctx);
var hostlayout = new LinearLayout(ctx);
hostlayout.setOrientation(1);
hostScroll.addView(hostlayout);
hosthost.addView(hostScroll);

var save = new TextView(ctx);
save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), RelativeLayout.LayoutParams.WRAP_CONTENT));
save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
save.setTextColor(Color.WHITE);
save.setText(lite.changelog)
save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
save.setBackground(backgroundstyle);
hostlayout.addView(save);

GUI = new PopupWindow(hosthost,RelativeLayout.LayoutParams.WRAP_CONTENT, screenHeight-dip2px(100),true);
GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0,0);
} catch (err) {print(err)}}}));
}
function deleteExcess() {
var downloadDir = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download");
function remove(sm){
if(downloadDir.exists() || downloadDir.isDirectory()){
var list = downloadDir.listFiles();
for(var i = 0; i < list.length; i++){
if(list[i].isFile()) {
if(list[i].getName().endsWith(".js")){
if(list[i].getName().toLowerCase().includes('jelly')&&list[i].getName().toLowerCase().includes('v')){
var file = java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download", list[i].getName());
if(sm){net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(file, false);}
file.delete();}
}}}
}}
remove();
}