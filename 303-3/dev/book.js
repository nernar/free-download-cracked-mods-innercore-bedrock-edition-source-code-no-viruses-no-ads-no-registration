var CWS_lang = FileTools.ReadJSON(__dir__ + "CWS.lang");
var AlertDialog = android.app.AlertDialog;
var ctx = UI.getContext();
var LinearLayout = android.widget.LinearLayout;
var LayoutParams = android.widget.RelativeLayout.LayoutParams;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var View = android.view.View;
var ImageView = android.widget.ImageView;
var ItemIDArray = [];
for (iid in ItemID) {
    if (iid === "dough" || iid === "butter" || iid === "cheese" || iid === "flour" || iid === "yeast" || iid === "mixing_bowl" || iid.substring(0, 14) === "coffeeworkshop") {
        ItemIDArray[ItemIDArray.length] = ItemID[iid];
    }
}
for (iid in BlockID) {
    if (iid.substring(0, 14) === "coffeeworkshop") {
        ItemIDArray[ItemIDArray.length] = BlockID[iid];
    }
}
ItemIDArray.push(BlockID.machineBlockBasic);
ItemIDArray.push(ItemID.plateIron);
var uiObj0 = {standart: {header: {text: {text: "\u5496\u5561\u5de5\u574a-\u4eab\u53d7\u60a8\u7684\u5496\u5561\uff01\uff01\uff01"}}, background: {standart: true}, minHeight: 2400}, drawing: []};
var bookHelper = {};
bookHelper.std = {standart: {header: {text: {text: "\u5496\u5561\u5de5\u574a-\u4eab\u53d7\u60a8\u7684\u5496\u5561\uff01\uff01\uff01"}}, background: {standart: true}}, drawing: []};
Object.create = function (obj) {
    var o = function () {
    };
    o.prototype = obj;
    return new o();
};
bookHelper.openItem = function (iid) {
    var judge = 0;
    for (let i = 0; i < ItemIDArray.length; i++) {
        if (ItemIDArray[i] === iid) {
            judge = 1;
            break;
        }
    }
    if (judge === 0) {
        return;
    }
    var con = new UI.Container();
    var h = 0;
    var std = {standart: {header: {text: {text: "\u5496\u5561\u5de5\u574a-\u4eab\u53d7\u60a8\u7684\u5496\u5561\uff01\uff01\uff01"}}, background: {standart: true}}, drawing: []};
    std.elements = {};
    if (iid === BlockID.machineBlockBasic || iid === ItemID.plateIron) {
        std.standart.header.text.text = "\u5de5\u4e1a2\uff1a" + Item.getName(iid, 0, false);
    } else {
        if (iid === ItemID.dough || iid === ItemID.butter || iid === ItemID.cheese || iid === ItemID.flour || iid === ItemID.yeast || iid === ItemID.mixing_bowl) {
            std.standart.header.text.text = "\u5496\u5561\u5de5\u574a\uff0f\u6f58\u9a6c\u65af\u519c\u573a\uff1a" + Item.getName(iid, 0, false);
        } else {
            std.standart.header.text.text = "\u5496\u5561\u5de5\u574a\uff1a" + Item.getName(iid, 0, false);
        }
    }
    var icer = machine.icecreamMachine.getRoot(iid);
    if (icer[0]) {
        for (let i = 0; i < icer.length; i++) {
            std.elements["slote" + h] = {type: "slot", x: 150 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(this.ido[0]);
            }};
            con.setSlot("slote" + h, icer[i][0], 1, icer[i][1]);
            std.elements["slote" + h].ido = icer[i];
            std.elements["slote0" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, bitmap: "tou", onClick: function () {
                bookHelper.openItem(ItemID.coffeeworkshop$bqlm);
            }};
            con.setSlot("slote0" + h, ItemID.coffeeworkshop$bqlm, 1, 0);
            std.elements["slote1" + h] = {type: "slot", x: 350 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
            }};
            con.setSlot("slote1" + h, 332, 1, 0);
            std.elements["progressScalee" + h] = {type: "scale", x: 198 + (h % 2) * 400, y: 165 + (Math.floor(h / 2) * 450), direction: 3, value: 1, bitmap: "icecream_machine_scale", scale: 5.6};
            std.elements["slote2" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 345 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(iid);
            }};
            con.setSlot("slote2" + h, iid, 1, 0);
            h++;
        }
    }
    var grr = machine.grinderMachine.getRoot(iid);
    if (grr[0]) {
        for (let i = 0; i < grr.length; i++) {
            std.elements["slot" + h] = {type: "slot", x: 150 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(this.ido);
            }};
            con.setSlot("slot" + h, grr[i][0], 1, grr[i][1]);
            std.elements["slot" + h].ido = grr[i][0];
            std.elements["slot0" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, bitmap: "tou", onClick: function () {
                bookHelper.openItem(ItemID.coffeeworkshop$grinder);
            }};
            con.setSlot("slot0" + h, ItemID.coffeeworkshop$grinder, 1, 0);
            std.elements["slot1" + h] = {type: "slot", x: 350 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
            }};
            con.setSlot("slot1" + h, 263, 1, 0);
            std.elements["progressScale" + h] = {type: "scale", x: 198 + (h % 2) * 400, y: 165 + (Math.floor(h / 2) * 450), direction: 3, value: 1, bitmap: "icecream_machine_scale", scale: 5.6};
            std.elements["slot2" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 345 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(iid);
            }};
            con.setSlot("slot2" + h, iid, 1, 0);
            h++;
        }
    }
    var cfr = machine.coffeeMachine.getRoot(iid);
    if (cfr[0]) {
        for (let i = 0; i < cfr.length; i++) {
            std.elements["slotc" + h] = {type: "slot", x: 150 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(this.ido[0]);
            }};
            con.setSlot("slotc" + h, cfr[i][0], 1, cfr[i][1]);
            std.elements["slotc" + h].ido = cfr[i];
            std.elements["slotc0" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, bitmap: "tou", onClick: function () {
                bookHelper.openItem(ItemID.coffeeworkshop$cfm);
            }};
            con.setSlot("slotc0" + h, ItemID.coffeeworkshop$cfm, 1, 0);
            std.elements["slotc1" + h] = {type: "slot", x: 350 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
            }};
            con.setSlot("slotc1" + h, 263, 1, 0);
            std.elements["progressScalec" + h] = {type: "scale", x: 198 + (h % 2) * 400, y: 165 + (Math.floor(h / 2) * 450), direction: 3, value: 1, bitmap: "icecream_machine_scale", scale: 5.6};
            std.elements["slotc2" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 345 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(iid);
            }};
            con.setSlot("slotc2" + h, iid, 1, 0);
            h++;
        }
    }
    if (Recipes.getWorkbenchRecipesByResult(iid, -1, -1).toArray().length > 0) {
        var reci = resultToRecipeArray(Recipes.getWorkbenchRecipesByResult(iid, -1, -1));
        for (let k = 0; k < reci.length; k++) {
            for (let s = 0; s < 9; s++) {
                std.elements["slot3" + h + s] = {type: "slot", x: 150 + (s % 3) * 70 + (h % 2) * 400, y: 80 + (Math.floor(s / 3) * 70) + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                    bookHelper.openItem(this.ido);
                }};
                con.setSlot("slot3" + h + s, reci[k].sources["slot" + s].id, 1, reci[k].sources["slot" + s].data);
                std.elements["slot3" + h + s].ido = reci[k].sources["slot" + s].id;
            }
            std.elements["slot3" + h] = {type: "slot", x: 355 + (h % 2) * 400, y: 150 + (Math.floor(h / 2) * 450), visual: true, size: 64, bitmap: "tou", onClick: function () {
            }};
            con.setSlot("slot3" + h, 58, 1, 0);
            std.elements["slot4" + h] = {type: "slot", x: 425 + (h % 2) * 400, y: 150 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
            }};
            con.setSlot("slot4" + h, iid, 1, 0);
            h++;
        }
    }
    if (furnaceList[iid]) {
        for (let i = 0; i < furnaceList[iid].length; i++) {
            std.elements["slot5" + h] = {type: "slot", x: 150 + (h % 2) * 400, y: 150 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(this.ido);
            }};
            con.setSlot("slot5" + h, furnaceList[iid][i], 1, 0);
            std.elements["slot5" + h].ido = furnaceList[iid][i];
            std.elements["slot6" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 150 + (Math.floor(h / 2) * 450), bitmap: "tou", visual: true, size: 64, onClick: function () {
            }};
            con.setSlot("slot6" + h, 61, 1, 0);
            std.elements["slot7" + h] = {type: "slot", x: 350 + (h % 2) * 400, y: 150 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(this.ido);
            }};
            con.setSlot("slot7" + h, iid, 1, 0);
            std.elements["slot7" + h].ido = iid;
            h++;
        }
    }
    var ovr = machine.ovenMachine.getRoot(iid);
    if (ovr[0]) {
        for (let i = 0; i < ovr.length; i++) {
            std.elements["slotb" + h] = {type: "slot", x: 150 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(this.ido);
            }};
            con.setSlot("slotb" + h, ovr[i][0], 1, ovr[i][1]);
            std.elements["slotb" + h].ido = ovr[i][0];
            std.elements["slota" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, bitmap: "tou", onClick: function () {
                bookHelper.openItem(ItemID.coffeeworkshop$oven);
            }};
            con.setSlot("slota" + h, ItemID.coffeeworkshop$oven, 1, 0);
            std.elements["slot9" + h] = {type: "slot", x: 350 + (h % 2) * 400, y: 80 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
            }};
            con.setSlot("slot9" + h, 263, 1, 0);
            std.elements["progressScaled" + h] = {type: "scale", x: 198 + (h % 2) * 400, y: 165 + (Math.floor(h / 2) * 450), direction: 3, value: 1, bitmap: "icecream_machine_scale", scale: 5.6};
            std.elements["slot8" + h] = {type: "slot", x: 250 + (h % 2) * 400, y: 345 + (Math.floor(h / 2) * 450), visual: true, size: 64, onClick: function () {
                bookHelper.openItem(iid);
            }};
            con.setSlot("slot8" + h, iid, 1, 0);
            h++;
        }
    }
    std.standart.minHeight = 450 * (Math.floor(h / 2) + 1);
    var u = new UI.StandartWindow(std);
    con.openAs(u);
};
var resultToRecipeArray = function (arrList) {
    var recipes = [];
    for (var i = 0; i < arrList.size(); i++) {
        var recipe = arrList.toArray()[i];
        var ingredients = {};
        var entries = recipe.getSortedEntries();
        for (var j = 0; j < 9; j++) {
            ingredients["slot" + j] = entries[j] ? entries[j] : {id: 0, data: 0};
        }
        recipes.push({sources: ingredients, results: {"slotResult": {id: recipe.result.id, count: recipe.result.count, data: recipe.result.data}}});
    }
    return recipes;
};
bookHelper.page = 1;
var uiObjOpen = function () {
    var contain = new UI.Container();
    uiObj0 = {standart: {header: {text: {text: "\u5496\u5561\u5de5\u574aPE \u5185\u7f6e\u6307\u5357"}}, background: {standart: true}, minHeight: 2400}, drawing: []};
    bookHelper.page = 1;
    uiObj0.elements = {};
    var i;
    var iid;
    var positionGet = function (i) {
        var a = i + 1;
        return {x: (a * 150) % 900 + 100, y: Math.ceil(a / 6) * 100};
    };
    var lengthNum = ItemIDArray.length;
    uiObj0.standart.minHeight = positionGet(lengthNum).y + 350;
    uiObj0.standart.header.text.text = "\u5171\u6709" + lengthNum + "\u4e2a\u7269\u54c1";
    for (i = 0; i < ItemIDArray.length; i += 1) {
        contain.setSlot("slot" + i, ItemIDArray[i], 1, 0);
        uiObj0.elements["slot" + i] = {type: "slot", x: positionGet(i).x, y: positionGet(i).y, visual: true, size: 64, bitmap: "tou", onClick: function () {
            bookHelper.openItem(this.id);
        }};
        uiObj0.elements["slot" + i].id = ItemIDArray[i];
    }
    var uiObj = new UI.StandartWindow(uiObj0);
    contain.openAs(uiObj);
};
var stateGui = function () {
    var contain = new UI.Container();
    uiObj0 = {standart: {header: {text: {text: "\u6211\u7684\u72b6\u6001"}}, background: {standart: true}, minHeight: 2400}, drawing: []};
    uiObj0.elements = {};
    for (let i = 0; i < CFMState.playerState.length; i++) {
        uiObj0.elements[i] = {type: "text", x: 200, y: 70 + i * 100, width: 300, height: 30, text: "\u72b6\u6001\uff1a" + CFMState.states[CFMState.playerState[i].id].name.en + "\n\u5269\u4f59\u65f6\u95f4\uff1a" + CFMState.playerState[i].duration + "tick\n\n" + CFMState.states[CFMState.playerState[i].id].produce.en, onClick: function () {
        }};
    }
    var uiObj = new UI.StandartWindow(uiObj0);
    contain.openAs(uiObj);
};
var alertMessage = function (t, m, b) {
    new AlertDialog.Builder(ctx).setTitle(t).setMessage(m).setPositiveButton(b, null).show();
};
var authorList = " \u5496\u5561\u5de5\u574aPE\u7248\u672c\u53f7\uff1a1.1.5\n \u672cmod\u79fb\u690d\u81eaJAVA\u7248\u5496\u5561\u5de5\u574a\u6a21\u7ec4\u3002\n \u5496\u5561\u5de5\u574aJAVA\u539f\u7248\u7531mc\u767e\u79d1\u5c0f\u7ec4\u5f00\u53d1\u3002\n JAVA\u7248\u539f\u4f5c\u8005\uff1a\u5c04\u547d\u4e38\u653f  \u68a8\u6728\u5229\u4e9a\n PE\u7248\u4f5c\u8005\uff1a\n    \u7f16\u5199\uff1apv\u7cca_PotPaste  hunter\n    \u7f8e\u5de5\uff1a\u5f69\u8679\u661f\u7a7a_RainbowSky\n    mod\u5236\u4f5c\u4e0d\u6613\uff0c\u672a\u7ecf\u5141\u8bb8\u7981\u6b62\u8f6c\u8f7d\u5206\u53d1\uff01";
var coffeeBookGui = new UI.StandartWindow({standart: {header: {text: {text: "\u5496\u5561\u5de5\u574a-\u4eab\u53d7\u60a8\u7684\u5496\u5561\uff01\uff01\uff01"}}, background: {standart: true}}, drawing: [], elements: {"textInfo1": {type: "text", x: 168, y: 300, width: 300, height: 30, text: "\u6a21\u7ec4\u6307\u5357", onClick: function () {
    uiObjOpen();
}}, "textInfo2": {type: "text", x: 333, y: 300, width: 300, height: 30, text: "\u6211\u7684\u72b6\u6001", onClick: function () {
    stateGui();
}}, "textInfo3": {type: "text", x: 498, y: 300, width: 300, height: 30, text: "\u5173         \u4e8e", onClick: function () {
    alertMessage("\u5236\u4f5c\u8005\u540d\u5355", anthorList, "OK");
}}, "textInfo4": {type: "text", x: 663, y: 300, width: 300, height: 30, text: "\u8bbe         \u7f6e", onClick: function () {
    alertMessage("\u5373\u5c06\u5f00\u653e", "\u656c\u8bf7\u671f\u5f85\uff01", "OK");
}}, "button1": {type: "button", x: 155, y: 170, bitmap: "op1", bitmap2: "op1", scale: 0.8, onClick: function () {
    uiObjOpen();
}}, "button2": {type: "button", x: 320, y: 170, bitmap: "op2", bitmap2: "op2", scale: 0.8, onClick: function () {
    stateGui();
}}, "button3": {type: "button", x: 485, y: 170, bitmap: "op3", bitmap2: "op3", scale: 0.8, onClick: function () {
    alertMessage("\u8054\u7cfb\u4f5c\u8005", "pv\u7ccaQQ\uff1a2351579300", "OK");
}}, "button4": {type: "button", x: 650, y: 170, bitmap: "op4", bitmap2: "op4", scale: 0.8, onClick: function () {
    alertMessage("\u5373\u5c06\u5f00\u653e", "\u656c\u8bf7\u671f\u5f85", "OK");
}}}});
var pvhuSay = function () {
    if (Translation.getLanguage() === "zh") {
        return "\u6765\u81ea\u4f5c\u8005pv\u7cca\u7684\u8bdd-------\u5496\u5561\u5de5\u574aPE\u79fb\u690d\u81eapc\u7248\u5496\u5561\u5de5\u574amod,\u539f\u4f5c\u8005\u4e3a \u5c04\u547d\u4e38\u653f \u548c \u68a8\u6728\u5229\u4e9a,\u7531\u6211\u548chunter\u79fb\u690d\uff0c\u8f6c\u53d1\u9700\u7ecf\u8fc7\u4f5c\u8005\u7684\u540c\u610f!\u6211\u7684qq:2351579300,\u6211\u7684\u90ae\u7bb1pvpaste@meowcat.org,\u6211\u7684b\u7ad9\u53f7 pv\u7cca\uff0c\u6b22\u8fce\u5173\u6ce8";
    } else {
        return "CoffeeWorkshop Pocket Edition ICmod is transplanted from CoffeeWorkShop mod Java Edition,the authors of the Java Edition are \u5c04\u547d\u4e38\u653f and \u68a8\u6728\u5229\u4e9a;This mod is made in China by \u60ca\u609ahumter and Pvhu!Welcome to play!Author Pvhu's Email:pvpaste@meowcat.org.This mod is copyright, do not distribute.";
    }
};
const Color = android.graphics.Color;
var stateContainer = new UI.Container();
var stateWindow = new UI.Window({location: {x: 50, y: 20, width: 75, minHeight: 1}, drawing: [{type: "color", color: Color.TRANSPARENT}], elements: {}});
var workbench = {id: 58, data: 0};
var stateSlot = stateContainer.getSlot("slot");
stateSlot.count = 1;
if (workbench) {
    stateSlot.id = workbench.id;
    stateSlot.data = workbench.data;
}
function runAsUI(func) {
    ctx.runOnUiThread(new java.lang.Runnable({run: function () {
        try {
            func();
        }
        catch (err) {
            print(err, "#FFA703");
        }
    }}));
}
Callback.addCallback("LevelLoaded", function () {
});
function dip(dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function RelativeLayoutView(widgetType, x, y, w, h) {
    this.widget = widgetType;
    var vParams = new android.widget.RelativeLayout.LayoutParams(w, h);
    vParams.setMargins(x, y, 0, 0);
    widget.setLayoutParams(vParams);
    return widget;
}
function setPicture(awidget, filepath) {
    var texture = BitmapFactory.decodeFile(__dir__ + filepath);
    var Pic = new android.graphics.drawable.BitmapDrawable(texture);
    awidget.setBackgroundDrawable(Pic);
}
function ScreenSize(WorH) {
    var rWidth = ctx.getScreenWidth();
    var rHeight = ctx.getScreenHeight();
    if (android.os.Build.VERSION.SDK_INT >= 17) {
        var uiFlags = ctx.getWindow().getDecorView().getSystemUiVisibility();
        if ((uiFlags & android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION) !== 0) {
            var metrics = new android.util.DisplayMetrics();
            ctx.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
            rWidth = metrics.widthPixels;
            rHeight = metrics.heightPixels;
            if (rHeight > rWidth) {
                var trans = rHeight;
                rHeight = rWidth;
                rWidth = trans;
            }
        }
    }
    if (WorH == "W") {
        return rWidth;
    } else {
        if (WorH == "H") {
            return rHeight;
        }
    }
}
var btnUI = new UI.Window({location: {x: 1000 / 2 + 160, y: 5, width: 45, height: 45}, drawing: [{type: "color", color: Color.argb(0, 0, 0, 0)}], elements: {"btn": {type: "button", x: 0, y: 0, bitmap: "btn_coffeebook", scale: 60, clicker: {onClick: function () {
    bookCon.openAs(coffeeBookGui);
}}}}});
btnUI.setAsGameOverlay(true);
var btnCon = new UI.Container();
var bookCon = new UI.Container();
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "hud_screen" || screenName === "in_game_play_screen") {
        btnCon.openAs(btnUI);
    } else {
        btnCon.close();
    }
});

