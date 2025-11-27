var CWS_lang = FileTools.ReadJSON(__dir__ + "CWS.lang");
var AlertDialog = android.app.AlertDialog;
var ctx = UI.getContext();
var LinearLayout = android.widget.LinearLayout;
var LayoutParams = android.widget.RelativeLayout.LayoutParams;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var View = android.view.View;
var ImageView = android.widget.ImageView;
//...
//var loadTexture = java.lang.Class.forName("zhekasmirnov.launcher.api.mod.ui.icon.ItemIconSource", true, UI.getContext().getClass().getClassLoader());
//var iconGet = Updatable.requireMethodFromNativeAPI("zhekasmirnov.launcher.api.mod.ui.icon.ItemIconSource","getIcon",true);
//var loadTexture = zhekasmirnov.launcher.api.mod.ui.icon.ItemIconLoader;
//Recipes.getWorkbenchRecipesByResult
var ItemIDArray = [];
for (iid in ItemID){
	if (iid==="dough"||iid==="butter"||iid==="cheese"||iid==="flour"||iid==="yeast"||iid==="mixing_bowl"||iid.substring(0,14) === "coffeeworkshop"){
		ItemIDArray[ItemIDArray.length] = ItemID[iid];
	}
}
for (iid in BlockID){
	if ( iid.substring(0,14) === "coffeeworkshop"){
		ItemIDArray[ItemIDArray.length] = BlockID[iid];
	}
}
ItemIDArray.push(BlockID.machineBlockBasic);
ItemIDArray.push(ItemID.plateIron);
var uiObj0 = {
standart: {
header: {text: {text: "咖啡工坊-享受您的咖啡！！！"}},
		//inventory: {standart: true},
		background: {standart: true},
		minHeight: 2400
	},
drawing: [
      // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
//	{type: "bitmap", x: 280, y: 146, bitmap: "op1", scale: 3.2},
//	{type: "bitmap", x: 320, y: 170, bitmap: "op2", scale: 0.8}
	]
};
var bookHelper={};
bookHelper.std = {
standart: {
header: {text: {text: "咖啡工坊-享受您的咖啡！！！"}},
		//inventory: {standart: true},
		background: {standart: true}
		//minHeight: 2400
	},
drawing: [
      // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
//	{type: "bitmap", x: 280, y: 146, bitmap: "op1", scale: 3.2},
//	{type: "bitmap", x: 320, y: 170, bitmap: "op2", scale: 0.8}
	]
};
Object.create=function(obj){
var o=function(){};
o.prototype=obj;
return new o();
};
bookHelper.openItem = function(iid){
var judge=0;
for(let i=0;i<ItemIDArray.length;i++)
if(ItemIDArray[i]===iid){judge=1;break;}
if(judge===0)return;
var con = new UI.Container();
var h=0;

var std = {
standart: {
header: {text: {text: "咖啡工坊-享受您的咖啡！！！"}},
		//inventory: {standart: true},
		background: {standart: true}
		//minHeight: 2400
	},
drawing: [
      // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
//	{type: "bitmap", x: 280, y: 146, bitmap: "op1", scale: 3.2},
//	{type: "bitmap", x: 320, y: 170, bitmap: "op2", scale: 0.8}
	]
};
std.elements = {
//"slot":{type: "slot", x: 100, y:100, visual: true, bitmap:"tou", onClick: function() {alertMessage(Item.getName(ItemID.coffeeworkshop$cream_milk,0, false),"","OK");}}
};
if(iid===BlockID.machineBlockBasic||iid===ItemID.plateIron)
std.standart.header.text.text  = "工业2："+Item.getName(iid,0, false);
else if(iid===ItemID.dough||iid===ItemID.butter||iid===ItemID.cheese||iid===ItemID.flour||iid===ItemID.yeast||iid===ItemID.mixing_bowl)
std.standart.header.text.text  = "咖啡工坊／潘马斯农场："+Item.getName(iid,0, false);
else
 std.standart.header.text.text  = "咖啡工坊："+Item.getName(iid,0, false);
var icer = machine.icecreamMachine.getRoot(iid);
//var i;
if(icer[0]){
for(let i=0;i<icer.length;i++){


std.elements["slote"+h]={type: "slot", x: 150+(h%2)*400, y:80+(Math.floor(h/2)*450), visual: true, size:64,onClick: function() {bookHelper.openItem(this.ido[0]);}};
con.setSlot("slote"+h ,icer[i][0],1,icer[i][1]);
std.elements["slote"+h].ido= icer[i];

std.elements["slote0"+h]={type: "slot", x: 250 +(h%2)*400, y:80  +(Math.floor(h/2)*450) , visual: true, size:64,bitmap:"tou",onClick: function() {bookHelper.openItem(ItemID.coffeeworkshop$bqlm);}};
con.setSlot("slote0"+h,ItemID.coffeeworkshop$bqlm,1,0);

std.elements["slote1"+h]={type: "slot", x: 350+(h%2)*400   , y:80+(Math.floor(h/2)*450)   , visual: true, size:64,onClick: function() {}};
con.setSlot("slote1"+h,332,1,0);

std.elements["progressScalee"+h] = {type: "scale", x: 198 +(h%2)*400  , y:165+(Math.floor(h/2)*450)   , direction: 3, value: 1, bitmap: "icecream_machine_scale", scale:5.6};

std.elements["slote2"+h]={type: "slot", x: 250  +(h%2)*400, y:345+(Math.floor(h/2)*450)   , visual: true, size:64,onClick: function() {bookHelper.openItem(iid);  }};
con.setSlot("slote2"+h,iid,1,0);

h++;
//std.standart.header.minHeight=450*(Math.floor(h/2)+1);
}
}

var grr = machine.grinderMachine.getRoot(iid);
//var i;
if(grr[0]){
for(let i=0;i<grr.length;i++){


std.elements["slot"+h]={type: "slot", x: 150+(h%2)*400, y:80+(Math.floor(h/2)*450), visual: true, size:64,onClick: function() {bookHelper.openItem(this.ido);}};
con.setSlot("slot"+h ,grr[i][0],1,grr[i][1]);
std.elements["slot"+h].ido= grr[i][0];

std.elements["slot0"+h]={type: "slot", x: 250+(h%2)*400  , y:80 +(Math.floor(h/2)*450)  , visual: true, size:64,bitmap:"tou",onClick: function() {bookHelper.openItem(ItemID.coffeeworkshop$grinder);}};
con.setSlot("slot0"+h,ItemID.coffeeworkshop$grinder,1,0);

std.elements["slot1"+h]={type: "slot", x: 350+(h%2)*400, y:80+(Math.floor(h/2)*450)   , visual: true, size:64,onClick: function() {}};
con.setSlot("slot1"+h,263,1,0);

std.elements["progressScale"+h] = {type: "scale", x: 198+(h%2)*400  , y:165+(Math.floor(h/2)*450)    , direction: 3, value: 1, bitmap: "icecream_machine_scale", scale:5.6};

std.elements["slot2"+h]={type: "slot", x: 250+(h%2)*400   , y:345+(Math.floor(h/2)*450)    , visual: true, size:64,onClick: function() {bookHelper.openItem(iid);  }};
con.setSlot("slot2"+h,iid,1,0);

h++;
//std.standart.header.minHeight=450*(Math.floor(h/2)+1);
}
}
var cfr = machine.coffeeMachine.getRoot(iid);
//var i;
if(cfr[0]){
for(let i=0;i<cfr.length;i++){


std.elements["slotc"+h]={type: "slot", x: 150+(h%2)*400, y:80+(Math.floor(h/2)*450), visual: true, size:64,onClick: function() {bookHelper.openItem(this.ido[0]);}};
con.setSlot("slotc"+h ,cfr[i][0],1,cfr[i][1]);
std.elements["slotc"+h].ido= cfr[i];

std.elements["slotc0"+h]={type: "slot", x: 250+(h%2)*400   , y:80+(Math.floor(h/2)*450)    , visual: true, size:64,bitmap:"tou",onClick: function() {bookHelper.openItem(ItemID.coffeeworkshop$cfm);}};
con.setSlot("slotc0"+h,ItemID.coffeeworkshop$cfm,1,0);

std.elements["slotc1"+h]={type: "slot", x: 350  +(h%2)*400, y:80+(Math.floor(h/2)*450)   , visual: true, size:64,onClick: function() {}};
con.setSlot("slotc1"+h,263,1,0);

std.elements["progressScalec"+h] = {type: "scale", x: 198  +(h%2)*400, y:165 +(Math.floor(h/2)*450)   , direction: 3, value: 1, bitmap: "icecream_machine_scale", scale:5.6};

std.elements["slotc2"+h]={type: "slot", x: 250  +(h%2)*400 , y:345 +(Math.floor(h/2)*450)  , visual: true, size:64,onClick: function() {bookHelper.openItem(iid);  }};
con.setSlot("slotc2"+h,iid,1,0);

h++;
//std.standart.header.minHeight=450*(Math.floor(h/2)+1);
}
}
if(Recipes.getWorkbenchRecipesByResult(iid,-1,-1).toArray().length>0){
//for(let i=0;i<Recipes.getWorkbenchRecipesByResult(iid,-1,-1).toArray().length;i++){
var reci=resultToRecipeArray(Recipes.getWorkbenchRecipesByResult(iid,-1,-1));
//for(let i=0;i<Recipes.getWorkbenchRecipesByResult(iid,-1,-1).toArray().length;i++){
//for(let j=0;j<reci.length;j++){
//alertMessage("v",""+reci[0].sources["slot0"].id, "ok");
for(let k=0;k<reci.length;k++){
for(let s=0;s<9;s++){
std.elements["slot3"+h+s]={type: "slot", x: 150+(s%3)*70+(h%2)*400   , y:80+(Math.floor(s/3)*70)+(Math.floor(h/2)*450)    , visual: true, size:64,onClick: function() {
bookHelper.openItem(this.ido);  
}};
con.setSlot("slot3"+h+s,reci[k].sources["slot"+s].id,1,reci[k].sources["slot"+s].data);
std.elements["slot3"+h+s].ido= reci[k].sources["slot"+s].id ;
}
std.elements["slot3"+h]={type: "slot", x: 355+(h%2)*400, y:150+(Math.floor(h/2)*450)    , visual: true, size:64,bitmap:"tou",onClick: function() {}};
con.setSlot("slot3"+h,58,1,0);
std.elements["slot4"+h]={type: "slot", x: 425+(h%2)*400, y:150+(Math.floor(h/2)*450)    , visual: true, size:64,onClick: function() {}};
con.setSlot("slot4"+h,iid,1,0);
h++;
}
//}
}
//}
//var i;
if(furnaceList[iid]){
for(let i=0;i<furnaceList[iid].length;i++){


std.elements["slot5"+h]={type: "slot", x: 150+(h%2)*400, y:150+(Math.floor(h/2)*450), visual: true, size:64,onClick: function() {bookHelper.openItem(this.ido);}};
con.setSlot("slot5"+h ,furnaceList[iid][i],1,0);
std.elements["slot5"+h].ido= furnaceList[iid][i];

std.elements["slot6"+h]={type: "slot", x: 250  +(h%2)*400, y:150+(Math.floor(h/2)*450)   ,bitmap:"tou", visual: true, size:64,onClick: function() {}};
con.setSlot("slot6"+h,61,1,0);

std.elements["slot7"+h]={type: "slot", x: 350+(h%2)*400, y:150+(Math.floor(h/2)*450), visual: true, size:64,onClick: function() {bookHelper.openItem(this.ido);}};
con.setSlot("slot7"+h ,iid,1,0);
std.elements["slot7"+h].ido= iid;

h++;
//std.standart.header.minHeight=450*(Math.floor(h/2)+1);
}
}
var ovr = machine.ovenMachine.getRoot(iid);
//var i;
if(ovr[0]){
for(let i=0;i<ovr.length;i++){


std.elements["slotb"+h]={type: "slot", x: 150+(h%2)*400, y:80+(Math.floor(h/2)*450), visual: true, size:64,onClick: function() {bookHelper.openItem(this.ido);}};
con.setSlot("slotb"+h ,ovr[i][0],1,ovr[i][1]);
std.elements["slotb"+h].ido= ovr[i][0];

std.elements["slota"+h]={type: "slot", x: 250+(h%2)*400  , y:80 +(Math.floor(h/2)*450)  , visual: true, size:64,bitmap:"tou",onClick: function() {bookHelper.openItem(ItemID.coffeeworkshop$oven);}};
con.setSlot("slota"+h,ItemID.coffeeworkshop$oven,1,0);

std.elements["slot9"+h]={type: "slot", x: 350+(h%2)*400, y:80+(Math.floor(h/2)*450)   , visual: true, size:64,onClick: function() {}};
con.setSlot("slot9"+h,263,1,0);

std.elements["progressScaled"+h] = {type: "scale", x: 198+(h%2)*400  , y:165+(Math.floor(h/2)*450)    , direction: 3, value: 1, bitmap: "icecream_machine_scale", scale:5.6};

std.elements["slot8"+h]={type: "slot", x: 250+(h%2)*400   , y:345+(Math.floor(h/2)*450)    , visual: true, size:64,onClick: function() {bookHelper.openItem(iid);  }};
con.setSlot("slot8"+h,iid,1,0);

h++;

}
}
std.standart.minHeight=450*(Math.floor(h/2)+1);
//alertMessage( "v",typeof Recipes.getFurnaceRecipesByResult(iid,-1,"furnace$").toArray(),"ok");
var u= new UI.StandartWindow(std);
con.openAs(u);
};
var resultToRecipeArray= function(arrList)
    {
        var recipes = [];
        //alert("Res size: "+arrList.size());
        for (var i = 0; i < arrList.size(); i++)
        {
            var recipe = arrList.toArray()[i];
            var ingredients = {};
            var entries = recipe.getSortedEntries();
            for (var j = 0; j < 9; j++)
            {
                ingredients["slot" + j] = entries[j] ? entries[j] :
                {
                    id: 0,
                    data: 0
                };
            }

            recipes.push(
            {
                sources: ingredients,
                results:
                {
                    "slotResult":
                    {
                        id: recipe.result.id,
                        count: recipe.result.count,
                        data: recipe.result.data
                    }
                }
            });
        }
        //alert(3.6);
        return recipes;
    };
bookHelper.page=1;
//var uiObj = new UI.StandartWindow(uiObj0);

var uiObjOpen = function(){
var contain = new UI.Container();
 uiObj0 = {
standart: {
header: {text: {text: "咖啡工坊PE 内置指南"}},
		//inventory: {standart: true},
		background: {standart: true},
		minHeight: 2400
	},
drawing: [
      // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
//	{type: "bitmap", x: 280, y: 146, bitmap: "op1", scale: 3.2},
//	{type: "bitmap", x: 320, y: 170, bitmap: "op2", scale: 0.8}
	]
};
bookHelper.page=1;

uiObj0.elements = {
//"slot":{type: "slot", x: 100, y:100, visual: true, bitmap:"tou", onClick: function() {alertMessage(Item.getName(ItemID.coffeeworkshop$cream_milk,0, false),"","OK");}}
};
var i;
var iid;

var positionGet = function(i){
var a=i+1;
return {x:(a*150) % 900+100,y:Math.ceil(a/6)*100};
};
var lengthNum = ItemIDArray.length;
uiObj0.standart.minHeight = positionGet(lengthNum).y + 350;
uiObj0.standart.header.text.text  = "共有"+lengthNum+"个物品";
//uiObj0.standart.background = {standart: true};
for ( i = 0;i <ItemIDArray.length;i += 1 ){
contain.setSlot("slot" + i,ItemIDArray[i],1,0);
uiObj0.elements["slot"+i]={type: "slot", x: positionGet(i).x, y:positionGet(i).y, visual: true, size:64,bitmap:"tou", onClick: function() {bookHelper.openItem(this.id);}};
uiObj0.elements["slot"+i].id= ItemIDArray[i];


}
//contain.setSlot("slot",ItemID.coffeeworkshop$cream_milk,1,0);
var uiObj = new UI.StandartWindow(uiObj0);
contain.openAs(uiObj);
};


var stateGui = function(){
	var contain = new UI.Container();
 uiObj0 = {
standart: {
header: {text: {text: "我的状态"}},
		//inventory: {standart: true},
		background: {standart: true},
		minHeight: 2400
	},
drawing: [
      // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
//	{type: "bitmap", x: 280, y: 146, bitmap: "op1", scale: 3.2},
//	{type: "bitmap", x: 320, y: 170, bitmap: "op2", scale: 0.8}
	]
};

uiObj0.elements = {
//"slot":{type: "slot", x: 100, y:100, visual: true, bitmap:"tou", onClick: function() {alertMessage(Item.getName(ItemID.coffeeworkshop$cream_milk,0, false),"","OK");}}
};

for(let i = 0; i < CFMState.playerState.length; i++){
		//遍历每个状态
	//	uiObj0.drawing.push({type: "bitmap", x: 100, y: 100 + i*100, bitmap: CFMState.playerState[i].bitmap});
		uiObj0.elements[i] = {type: "text", x: 200, y: 70 + i *100, width: 300, height: 30, text:"状态："+CFMState.states[CFMState.playerState[i].id].name.en+"\n剩余时间："+CFMState.playerState[i].duration+"tick\n\n"+CFMState.states[CFMState.playerState[i].id].produce.en,onClick: function() {}};
		}
var uiObj = new UI.StandartWindow(uiObj0);
contain.openAs(uiObj);

};


var alertMessage = function(t,m,b){
new AlertDialog.Builder(ctx)
			.setTitle(t)
			.setMessage(m)
			.setPositiveButton(b,null)
			.show();
};
var authorList = " 咖啡工坊PE版本号：1.1.5\n 本mod移植自JAVA版咖啡工坊模组。\n 咖啡工坊JAVA原版由mc百科小组开发。\n JAVA版原作者：射命丸政  梨木利亚\n PE版作者：\n    编写：pv糊_PotPaste  hunter\n    美工：彩虹星空_RainbowSky\n    mod制作不易，未经允许禁止转载分发！";
var coffeeBookGui = new UI.StandartWindow({/*...空的描述对象...*/
standart: {
header: {text: {text: "咖啡工坊-享受您的咖啡！！！"}},
		//inventory: {standart: true},
		background: {standart: true}
	},
drawing: [
      // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
//	{type: "bitmap", x: 280, y: 146, bitmap: "op1", scale: 3.2},
//	{type: "bitmap", x: 320, y: 170, bitmap: "op2", scale: 0.8}
	],
	
	elements: {
			"textInfo1": {type: "text", x: 168, y: 300, width: 300, height: 30, text:"模组指南",onClick: function() {uiObjOpen();}},
			"textInfo2": {type: "text", x: 333, y: 300, width: 300, height: 30, text:"我的状态",onClick: function() {stateGui();}},
			"textInfo3": {type: "text", x: 498, y: 300, width: 300, height: 30, text:"关         于",onClick: function() {alertMessage("制作者名单",anthorList,"OK");}},
			"textInfo4": {type: "text", x: 663, y: 300, width: 300, height: 30, text:"设         置",onClick: function() {alertMessage("即将开放","敬请期待！","OK");}},
			"button1":	{type: "button", x: 155, y: 170, bitmap:  "op1", bitmap2: "op1", scale:0.8, onClick: function() {uiObjOpen();}},
		"button2":	{type: "button", x: 320, y: 170, bitmap: "op2", bitmap2: "op2", scale:0.8, onClick: function() {stateGui();}},
			"button3":	{type: "button", x: 485, y: 170, bitmap: "op3", bitmap2: "op3", scale:0.8, onClick: function() {alertMessage("联系作者","pv糊QQ：2351579300","OK");}},
					"button4":	{type: "button", x: 650, y: 170, bitmap: "op4", bitmap2: "op4", scale:0.8, onClick: function() {alertMessage("即将开放","敬请期待","OK");}}
		//"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		//"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},
	//	"slotSource": {type: "slot", x: 441, y: 75},
		//"slotFuel": {type: "slot", x: 441, y: 212},
//		"slotResult": {type: "slot", x: 625, y: 142},
	}
});
 //打开一个完全空着的界面


var pvhuSay = function(){
if(Translation.getLanguage()==="zh"){return"来自作者pv糊的话-------咖啡工坊PE移植自pc版咖啡工坊mod,原作者为 射命丸政 和 梨木利亚,由我和hunter移植，转发需经过作者的同意!我的qq:2351579300,我的邮箱pvpaste@meowcat.org,我的b站号 pv糊，欢迎关注";}
else{return "CoffeeWorkshop Pocket Edition ICmod is transplanted from CoffeeWorkShop mod Java Edition,the authors of the Java Edition are 射命丸政 and 梨木利亚;This mod is made in China by 惊悚humter and Pvhu!Welcome to play!Author Pvhu's Email:pvpaste@meowcat.org.This mod is copyright, do not distribute.";}
};
const Color = android.graphics.Color;
 var stateContainer = new UI.Container();
var stateWindow = new UI.Window({
    location: {
        x:50 ,
        y: 20,
        width: 75,
        minHeight: 1
    },
    drawing: [{
        type: "color",
        color: Color.TRANSPARENT
    }],
    elements: {
//        "slot": {
//            type: "slot",
//            x: 10,
//            y: 10,
//            size: 980,
//            bitmap: "_default_slot_empty",
//            isTransparentBackground: true,
//            visual: true,
//            clicker: {
//                onClick: function(position, container, tileEntity, window, canvas, scale) {
//					print(CFMState.playerState[i].duration,"#FFA703");
//                }
//            }
 //       }
    }
});

//stateWindow.setAsGameOverlay(true);

/*
Callback.addCallback("NativeGuiChanged", function (screenName) {
//print(screenName,"#FFA703");

     if (!(screenName === "creative_inventory_screen" || screenName === "creative_inventory_screen")) {
         stateContainer.isOpened() ? stateContainer.close() : null;
     } else {
         UI.getContext().runOnUiThread(new java.lang.Runnable({run: function () {
             stateContainer.openAs(stateWindow);
         }}));
     }
 });
 */
 var workbench = {id: 58, data: 0};
 var stateSlot = stateContainer.getSlot("slot");
     stateSlot.count = 1;
     if (workbench) {
         stateSlot.id = workbench.id;
         stateSlot.data = workbench.data;
     }
 
function runAsUI(func){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
        func();
    }catch(err){
        print(err,"#FFA703");
    }}}));
}
Callback.addCallback("LevelLoaded", function(){

//Game.message(loadTexture.getIcon(ItemID.coffeeworkshop$plate,0));
//Game.message(Item.getItemById(ItemID.coffeeworkshop$plate).texture);
});
//主界面
/*
ctx.runOnUiThread(new java.lang.Runnable({run:function()
{
try{
//if( __config__.getBool("display_guide")){
		CoffeeWorkshop=new android.widget.PopupWindow();
		CoffeeWorkshop.setHeight(dip(32));
		CoffeeWorkshop.setWidth(dip(32));
        CoffeeWorkshop.setFocusable(false);
        CoffeeWorkshop.setTouchable(true);
       CoffeeWorkshop.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
CWSbook=new android.widget.RelativeLayout(ctx);
        CoffeeWorkshop.setContentView(CWSbook);   
		//setPicture(CWSbook,"images/layout.png");
		//var webBook = new android.webkit.WebView(ctx);
		//webBook.loadUrl("http://www.baidu.com");

authorButton=RelativeLayoutView(new android.widget.ImageView(ctx),dip(0),dip(0),dip(32),dip(32));
	CWSbook.addView(authorButton);
setPicture(authorButton,"images/gui.png")//<add>
authorButton.setOnClickListener(new View.OnClickListener(function() {
	//runAsUI(function(){
		//print(dip,"#FFA703");
var contain = new UI.Container();
		contain.openAs(coffeeBookGui);
		//var web = RelativeLayoutView(webBook,Math.ceil(0*ctx.getResources().getDisplayMetrics().density),Math.ceil(0*ctx.getResources().getDisplayMetrics().density),Math.ceil(800*ctx.getResources().getDisplayMetrics().density),Math.ceil(500*ctx.getResources().getDisplayMetrics().density));
	//	CWSbook.addView(web);
//});
})
);
CoffeeWorkshop.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP,dip(5),dip(ctx.getScreenHeight()));
//}
		}catch(err){
		Game.tipMessage("UIerr1:"+err);
	}

}}))*/
function dip(dips){
	return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}
function RelativeLayoutView(widgetType,x,y,w,h){
	this.widget = widgetType;
	var vParams = new android.widget.RelativeLayout.LayoutParams(w,h);
	vParams.setMargins(x,y,0,0);
	widget.setLayoutParams(vParams);
	return widget;
}
function setPicture(awidget,filepath){
	var texture=BitmapFactory.decodeFile( __dir__ + filepath);
	var Pic=new android.graphics.drawable.BitmapDrawable(texture);
	awidget.setBackgroundDrawable(Pic);
}
function ScreenSize(WorH){
	var rWidth=ctx.getScreenWidth();
	var rHeight=ctx.getScreenHeight();
	if(android.os.Build.VERSION.SDK_INT>=17){
		var uiFlags=ctx.getWindow().getDecorView().getSystemUiVisibility();
		if((uiFlags&android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION)!==0){
			var metrics=new android.util.DisplayMetrics();
			ctx.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
			rWidth=metrics.widthPixels;
			rHeight=metrics.heightPixels;
			if(rHeight>rWidth){
				var trans=rHeight;
				rHeight=rWidth;
				rWidth=trans;								
			}
		}
	}
	if(WorH=="W"){
		return rWidth
	}
	else if(WorH=="H"){
		return rHeight
	}
}
var btnUI = new UI.Window({location: {x: 1000 / 2 + 160, y: 5, width: 45, height: 45}, drawing: [{type: "color", color: Color.argb(0, 0, 0, 0)}], elements: {"btn": {type: "button", x: 0, y: 0, bitmap: "btn_coffeebook", scale: 60, clicker: {onClick: function () {
bookCon.openAs(coffeeBookGui);
       }
       }
       }
       }
       }
       );
      btnUI.setAsGameOverlay(true);
 var btnCon = new UI.Container();
 var bookCon = new UI.Container();
		
// btnCon.openAs(btnUI);
 Callback.addCallback("NativeGuiChanged", function (screenName) {
     if (screenName === "hud_screen" || screenName === "in_game_play_screen") {
        btnCon.openAs(btnUI);
     } else {
         btnCon.close();
     }
 });
/*
ctx.runOnUiThread(new java.lang.Runnable({run:function()
{
	try{
	window = new android.widget.PopupWindow();
   window.setTouchable(false);
    window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    
	//	CoffeeBook=new android.widget.PopupWindow();
	window.setHeight(dip(32));
		window.setWidth(dip(32));
  //      CoffeeBook.setFocusable(true);
      //  CoffeeBook.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable());
  //      CoffeeBook.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
BookButton=new android.widget.RelativeLayout(ctx);
        window.setContentView(BookButton);
 //       CoffeeBook.setTouchable(false);
     //   CoffeeBook.setOutsideTouchable(false);
	//	setPicture(BookButton,"images/gui.png");
authorButton=RelativeLayoutView(new android.widget.ImageView(ctx),dip(5),dip(200),dip(32),dip(32));
	window.addView(authorButton);
setPicture(authorButton,"images/gui.png")//
//ookButtonTo.setImageBitmap(bmp);
window.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP,dip(5),dip(200));
//CoffeeBook.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP,dip(5),dip(200));
	}catch(err){
		Game.tipMessage("UIerr2:"+err);
	}

}}));*/
