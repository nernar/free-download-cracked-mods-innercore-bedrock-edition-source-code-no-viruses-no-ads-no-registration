var workbench = {id: 58, data: 0};
var validsI = [];
var validsB = [];
Item.isValid = ModAPI.requireGlobal("Item.isValid");
const Color = android.graphics.Color;
var container = new UI.Container();
var popupWindow = new UI.Window({location: {x: 0, y: 100, width: 45, height: 45}, drawing: [{type: "color", color: Color.TRANSPARENT}], elements: {"slot": {type: "slot", x: 10, y: 10, size: 980, bitmap: "_default_slot_empty", isTransparentBackground: true, visual: true, clicker: {onClick: function (position, container, tileEntity, window, canvas, scale) {
    alert("Please select a kind of Recipes");
    let workbenckSlot = mainContainer.getSlot("slot");
    workbenckSlot.count = 1;
    if (workbench) {
        workbenckSlot.id = workbench.id;
        workbenckSlot.data = workbench.data;
    }
    let slot2 = mainContainer.getSlot("slot2");
    slot2.id = 61;
    slot2.count = 1;
    slot2.data = 0;
    let slot3 = mainContainer.getSlot("slot3");
    slot3.id = 54;
    slot3.count = 1;
    slot3.data = 0;
    let slot4 = mainContainer.getSlot("slot4");
    slot4.id = 403;
    slot4.count = 1;
    slot4.data = 0;
    mainContainer.openAs(mainWindow);
}}}}});
popupWindow.setAsGameOverlay(true);
let slot = container.getSlot("slot");
slot.count = 1;
if (workbench) {
    slot.id = workbench.id;
    slot.data = workbench.data;
}
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (!(screenName === "hud_screen" || screenName === "in_game_play_screen")) {
        container.isOpened() ? container.close() : null;
    } else {
        UI.getContext().runOnUiThread(new java.lang.Runnable({run: function () {
            container.openAs(popupWindow);
        }}));
    }
});
var mainContainer = new UI.Container();
var mainWindow = new UI.StandartWindow({standart: {header: {text: {text: "Main Interface (Please select a kind of Recipes)"}}, background: {standart: true}, minHeight: 600}, drawing: [], elements: {"slot": {type: "slot", x: 100, y: 50, size: 100, bitmap: "_default_slot_empty", isTransparentBackground: true, visual: true, clicker: {onClick: function (position, container, tileEntity, window, canvas, scale) {
    alert("Please select a kind of Items or Blocks");
    selectContainer.openAs(selectWindow);
}}}, "slot2": {type: "slot", x: 250, y: 50, size: 100, bitmap: "_default_slot_empty", isTransparentBackground: true, visual: true, clicker: {onClick: function (position, container, tileEntity, window, canvas, scale) {
    alert("Under Construction");
}}}, "slot3": {type: "slot", x: 100, y: 250, size: 100, bitmap: "_default_slot_empty", isTransparentBackground: true, visual: true, clicker: {onClick: function (position, container, tileEntity, window, canvas, scale) {
    alert("Under Construction");
}}}, "slot4": {type: "slot", x: 250, y: 250, size: 100, bitmap: "_default_slot_empty", isTransparentBackground: true, visual: true, clicker: {onClick: function (position, container, tileEntity, window, canvas, scale) {
    alert("\u672c\u6a21\u7ec4\u7531\u767e\u5ea6\u8d34\u5427@\u65b9\u6cd5\u653e\u5bd2\u5047 \u5236\u4f5c, \u7248\u6743\u6240\u6709, \u4fb5\u6743\u5fc5\u7a76");
    alert("This mod is made by VK @miemiemethod (Miemie Method). Copyright infringement.");
}}}}});
var selectContainer = new UI.Container();
var selectWindow = new UI.StandartWindow();
Callback.addCallback("PostLoaded", function () {
    for (i = 0; i < 256; i++) {
        if (Item.isValid(i, 0)) {
            validsB.push(i);
        }
    }
    for (i = 256; i < 512; i++) {
        if (Item.isValid(i, 0)) {
            validsI.push(i);
        }
    }
    for (i in ItemID) {
        validsI.push(ItemID[i]);
    }
    for (i in BlockID) {
        validsB.push(BlockID[i]);
    }
    selectContainer = new UI.Container();
    selectWindow = new UI.StandartWindow({standart: {header: {text: {text: "Selecting Interface (Please select a kind of Items or Blocks)"}}, background: {standart: true}, minHeight: 1000}, drawing: [], elements: createSlots(validsI, validsB)});
    fillSlots(validsI, validsB, 1, 90);
});
function createSlots(validsI, validsB) {
    var elements = [{}];
    var sCount = 0;
    var count = validsI.length + validsB.length;
    var tens = 0;
    var tCount = 0;
    for (i = 1; i <= count; i++) {
        let num = i;
        let slotData = {type: "slot", x: 10 + 100 * tens, y: 30 + 100 * tCount, size: 80, bitmap: "_default_slot_empty", isTransparentBackground: true, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
            addRecipes(validsI, validsB, num, 0);
            recipesContainers[num].openAs(recipesWindows[num]);
            fillRecipes(validsI, validsB, num, 0);
        }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
            if (num <= validsI.length) {
                alert(Item.getName(validsI[num - 1], 0) + " (ID\uff1a" + validsI[num - 1] + ")");
            } else {
                alert(Item.getName(validsB[num - (1 + validsI.length)], 0) + " (ID\uff1a" + validsB[num - (1 + validsI.length)] + ")");
            }
        }}};
        elements[sCount]["slot" + i] = slotData;
        if (tens == 9) {
            tens = 0;
            if (tCount == 8) {
                tCount = 0;
                if (i % 90 == 0) {
                    sCount++;
                    elements[sCount] = {};
                }
            } else {
                tCount++;
            }
        } else {
            tens++;
        }
    }
    let num = 0;
    for (j = 0; j <= sCount; j++) {
        if (j != Math.floor(count / 90)) {
            elements[j]["next"] = {type: "button", x: 600, y: 940, bitmap: "next1", bitmap2: "next2", scale: 2, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                alert("Current Page: " + (num + 2) + "/" + (sCount + 1));
                let content = container.getGuiContent();
                content.elements["next"] = null;
                for (k in elements[num + 1]) {
                    content.elements[k] = deepCopy(elements[num + 1][k]);
                }
                for (l = num * 90 + 1; l <= (num + 1) * 90; l++) {
                    content.elements["slot" + l] = null;
                }
                fillSlots(validsI, validsB, (num + 1) * 90 + 1, (num + 2) * 90);
                num++;
            }}};
        }
        if (j != 0) {
            elements[j]["last"] = {type: "button", x: 200, y: 940, bitmap: "last1", bitmap2: "last2", scale: 2, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                alert("Current Page: " + num + "/" + (sCount + 1));
                let content = container.getGuiContent();
                content.elements["last"] = null;
                for (k in elements[num - 1]) {
                    content.elements[k] = deepCopy(elements[num - 1][k]);
                }
                for (l = num * 90 + 1; l <= (num + 1) * 90; l++) {
                    content.elements["slot" + l] = null;
                }
                fillSlots(validsI, validsB, (num - 1) * 90 + 1, num * 90);
                num--;
            }}};
        }
    }
    var someElements = deepCopy(elements[0]);
    return someElements;
}
function fillSlots(validsI, validsB, min, max) {
    var i = 1;
    for (i; i <= validsI.length; i++) {
        if (i >= min && i <= max) {
            let slot = selectContainer.getSlot("slot" + i);
            slot.id = validsI[i - 1];
            slot.count = 1;
            slot.data = 0;
        }
    }
    for (i; i < validsI.length + validsB.length; i++) {
        if (i >= min && i <= max) {
            let slot = selectContainer.getSlot("slot" + i);
            slot.id = validsB[i - (validsI.length + 1)];
            slot.count = 1;
            slot.data = 0;
        }
    }
}
recipesContainers = [];
recipesWindows = [];
recipesContainers[0] = new UI.Container();
recipesWindows[0] = new UI.StandartWindow({standart: {header: {text: {text: "It's air. _(:\u0437\u300d\u2220)_"}}, background: {standart: true}, minHeight: 600}, drawing: [], elements: {"slot1": {type: "slot", x: 300, y: 100, size: 100, visual: true}, "slot2": {type: "slot", x: 300, y: 200, size: 100, visual: true}, "slot3": {type: "slot", x: 300, y: 300, size: 100, visual: true}, "slot4": {type: "slot", x: 400, y: 100, size: 100, visual: true}, "slot5": {type: "slot", x: 400, y: 200, size: 100, visual: true}, "slot6": {type: "slot", x: 400, y: 300, size: 100, visual: true}, "slot7": {type: "slot", x: 500, y: 100, size: 100, visual: true}, "slot8": {type: "slot", x: 500, y: 200, size: 100, visual: true}, "slot9": {type: "slot", x: 500, y: 300, size: 100, visual: true}, "array1": {type: "image", x: 600, y: 200, bitmap: "array_empty", scale: 0.1953125}, "slot10": {type: "slot", x: 700, y: 200, size: 100, visual: true}}});
function addRecipes(validsI, validsB, id, value) {
    var i = 1;
    for (i; i <= validsI.length; i++) {
        if (id == i) {
            let elements = [{}];
            if (Recipes.getWorkbenchRecipesByResult(validsI[i - 1], -1, -1).toArray().length > 0) {
                let num = 0;
                var recipes = Recipes.getWorkbenchRecipesByResult(validsI[i - 1], -1, -1).toArray();
                for (j in recipes) {
                    let recipesNum = j;
                    elements[j] = {};
                    elements[j]["slot" + (1 + j * 10)] = {type: "slot", x: 300, y: 100, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (1 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (1 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (4 + j * 10)] = {type: "slot", x: 300, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (4 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (4 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (7 + j * 10)] = {type: "slot", x: 300, y: 300, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (7 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (7 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (2 + j * 10)] = {type: "slot", x: 400, y: 100, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (2 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (2 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (5 + j * 10)] = {type: "slot", x: 400, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (5 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (5 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}}, elements[j]["slot" + (8 + j * 10)] = {type: "slot", x: 400, y: 300, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (8 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (8 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (3 + j * 10)] = {type: "slot", x: 500, y: 100, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (3 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (3 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (6 + j * 10)] = {type: "slot", x: 500, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (6 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (6 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (9 + j * 10)] = {type: "slot", x: 500, y: 300, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (9 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (9 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["array" + (1 + j)] = {type: "image", x: 600, y: 200, bitmap: "array_empty", scale: 0.1953125};
                    elements[j]["slot" + (10 + j * 10)] = {type: "slot", x: 700, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (10 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (10 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                }
                for (j = 0; j < elements.length; j++) {
                    if (j != recipes.length - 1) {
                        elements[j]["next"] = {type: "button", x: 600, y: 440, bitmap: "next1", bitmap2: "next2", scale: 2, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                            alert("Current Page: " + (num + 2) + "/" + elements.length);
                            let content = container.getGuiContent();
                            content.elements["next"] = null;
                            for (k in elements[num + 1]) {
                                content.elements[k] = deepCopy(elements[num + 1][k]);
                            }
                            for (l = num * 10 + 1; l <= (num + 1) * 10; l++) {
                                content.elements["slot" + l] = null;
                            }
                            content.elements["array" + num] = null;
                            fillRecipes(validsI, validsB, id, num + 1);
                            num++;
                        }}};
                    }
                    if (j != 0) {
                        elements[j]["last"] = {type: "button", x: 200, y: 440, bitmap: "last1", bitmap2: "last2", scale: 2, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                            alert("Current Page: " + num + "/" + elements.length + 1);
                            let content = container.getGuiContent();
                            content.elements["last"] = null;
                            for (k in elements[num - 1]) {
                                content.elements[k] = deepCopy(elements[num - 1][k]);
                            }
                            for (l = num * 10 + 1; l <= (num + 1) * 10; l++) {
                                content.elements["slot" + l] = null;
                            }
                            content.elements["array" + num] = null;
                            fillRecipes(validsI, validsB, id, num - 1);
                            num--;
                        }}};
                    }
                }
            }
            let recipesContainer = new UI.Container();
            let recipesWindow = new UI.StandartWindow({standart: {header: {text: {text: Item.getName(validsI[i - 1], 0) + " (ID\uff1a" + validsI[i - 1] + ")"}}, background: {standart: true}, minHeight: 1000}, drawing: [], elements: deepCopy(elements[0])});
            recipesContainers[i] = recipesContainer;
            recipesWindows[i] = recipesWindow;
        }
    }
    for (i; i < validsI.length + validsB.length; i++) {
        if (id == i) {
            let elements = [{}];
            if (Recipes.getWorkbenchRecipesByResult(validsB[i - (1 + validsI.length)], -1, -1).toArray().length > 0) {
                let num = 0;
                var recipes = Recipes.getWorkbenchRecipesByResult(validsB[i - (1 + validsI.length)], -1, -1).toArray();
                for (j in recipes) {
                    let recipesNum = j;
                    elements[j] = {};
                    elements[j]["slot" + (1 + j * 10)] = {type: "slot", x: 300, y: 100, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (1 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (1 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (4 + j * 10)] = {type: "slot", x: 300, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (4 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (4 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (7 + j * 10)] = {type: "slot", x: 300, y: 300, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (7 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (7 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (2 + j * 10)] = {type: "slot", x: 400, y: 100, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (2 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (2 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (5 + j * 10)] = {type: "slot", x: 400, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (5 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (5 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}}, elements[j]["slot" + (8 + j * 10)] = {type: "slot", x: 400, y: 300, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (8 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (8 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (3 + j * 10)] = {type: "slot", x: 500, y: 100, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (3 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (3 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (6 + j * 10)] = {type: "slot", x: 500, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (6 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (6 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["slot" + (9 + j * 10)] = {type: "slot", x: 500, y: 300, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (9 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (9 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                    elements[j]["array" + (1 + j)] = {type: "image", x: 600, y: 200, bitmap: "array_empty", scale: 0.1953125};
                    elements[j]["slot" + (10 + j * 10)] = {type: "slot", x: 700, y: 200, size: 100, visual: true, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (10 + recipesNum * 10));
                        for (k = 1; k <= validsI.length + validsB.length; k++) {
                            if (thisSlot.id == validsI[k - 1] || thisSlot.id == validsB[k - (1 + validsI.length)]) {
                                addRecipes(validsI, validsB, k, value + 1);
                                recipesContainers[k].openAs(recipesWindows[k]);
                                fillRecipes(validsI, validsB, k, 0);
                                break;
                            }
                        }
                    }, onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                        thisSlot = container.getSlot("slot" + (10 + recipesNum * 10));
                        if (thisSlot.data == -1) {
                            alert("ALL KINDS OF " + Item.getName(thisSlot.id, 0) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        } else {
                            alert(Item.getName(thisSlot.id, thisSlot.data) + " (ID\uff1a" + thisSlot.id + ", DV\uff1a" + thisSlot.data + ")");
                        }
                    }}};
                }
                for (j = 0; j < elements.length; j++) {
                    if (j != recipes.length - 1) {
                        elements[j]["next"] = {type: "button", x: 600, y: 440, bitmap: "next1", bitmap2: "next2", scale: 2, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                            alert("Current Page: " + (num + 2) + "/" + elements.length + 1);
                            let content = container.getGuiContent();
                            content.elements["next"] = null;
                            for (k in elements[num + 1]) {
                                content.elements[k] = deepCopy(elements[num + 1][k]);
                            }
                            for (l = num * 10 + 1; l <= (num + 1) * 10; l++) {
                                content.elements["slot" + l] = null;
                            }
                            content.elements["array" + num] = null;
                            fillRecipes(validsI, validsB, id, num + 1);
                            num++;
                        }}};
                    }
                    if (j != 0) {
                        elements[j]["last"] = {type: "button", x: 200, y: 440, bitmap: "last1", bitmap2: "last2", scale: 2, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
                            alert("Current Page: " + num + "/" + elements.length + 1);
                            let content = container.getGuiContent();
                            content.elements["last"] = null;
                            for (k in elements[num - 1]) {
                                content.elements[k] = deepCopy(elements[num - 1][k]);
                            }
                            for (l = num * 10 + 1; l <= (num + 1) * 10; l++) {
                                content.elements["slot" + l] = null;
                            }
                            content.elements["array" + num] = null;
                            fillRecipes(validsI, validsB, id, num - 1);
                            num--;
                        }}};
                    }
                }
            }
            let recipesContainer = new UI.Container();
            let recipesWindow = new UI.StandartWindow({standart: {header: {text: {text: Item.getName(validsB[i - (1 + validsI.length)], 0) + " (ID\uff1a" + validsB[i - (1 + validsI.length)] + ")"}}, background: {standart: true}, minHeight: 1000}, drawing: [], elements: deepCopy(elements[0])});
            recipesContainers[i] = recipesContainer;
            recipesWindows[i] = recipesWindow;
        }
    }
}
function fillRecipes(validsI, validsB, num, pg) {
    let recipes;
    if (num <= validsI.length) {
        recipes = Recipes.getWorkbenchRecipesByResult(validsI[num - 1], -1, -1).toArray();
    } else {
        recipes = Recipes.getWorkbenchRecipesByResult(validsB[num - (1 + validsI.length)], -1, -1).toArray();
    }
    if (recipes.length > 0) {
        for (j in recipes) {
            if (j == pg) {
                for (k in recipes[j].sortedEntries) {
                    recipesContainers[num].getSlot("slot" + (parseInt(k) + 1 + j * 10)).id = recipes[j].sortedEntries[k].id;
                    recipesContainers[num].getSlot("slot" + (parseInt(k) + 1 + j * 10)).count = 1;
                    recipesContainers[num].getSlot("slot" + (parseInt(k) + 1 + j * 10)).data = recipes[j].sortedEntries[k].data;
                }
                recipesContainers[num].getSlot("slot" + (10 + j * 10)).id = recipes[j].result.id;
                recipesContainers[num].getSlot("slot" + (10 + j * 10)).count = recipes[j].result.count;
                recipesContainers[num].getSlot("slot" + (10 + j * 10)).data = recipes[j].result.data;
            }
        }
    } else {
        alert("There's no Recipes");
    }
}
function deepCopy(obj) {
    if (typeof obj != "object") {
        return obj;
    }
    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = deepCopy(obj[attr]);
    }
    return newobj;
}

