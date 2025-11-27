IDRegistry.genItemID("proc");
Item.createItem("proc", "\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440", {name: "proc"});
IDRegistry.genBlockID("calc1");
Block.createBlockWithRotation("calc1", [{name: "\u042d\u0412\u041c", texture: [["calc0", 1], ["calc0", 1], ["calc0", 0], ["calc0", 0], ["calc0", 0], ["calc0", 0]], inCreative: true}]);
TileEntity.registerPrototype(BlockID.calc1, {defaultValues: {numb1str: "0", numb2str: "0", result: "0", limit: 3}, tick: function () {
    this.container.setText("result", this.data.result);
    this.container.setText("numb1", parseInt(this.data.numb1str));
    this.container.setText("numb2", parseInt(this.data.numb2str));
}, getGuiScreen: function () {
    return calc1Gui;
}});
Block.setBlockShape(BlockID.calc1, {x: 2 / 16, y: 0, z: 2 / 16}, {x: 14 / 16, y: 1, z: 14 / 16});
Recipes.addShaped({id: BlockID.calc1, count: 1, data: 0}, ["aaa", "obo", "odo"], ["a", 44, 0, "o", 265, 0, "d", 331, 0, "b", 356, 0]);
var buttonScale = 4;
var calctxt = {font: 90, txtx: 310, txtx2: 540, txty: 40};
var calc1Gui = UI.StandartWindow({standart: {header: {text: {text: "\u042d\u0412\u041c"}}}, drawing: [{type: "bitmap", bitmap: "numb", x: 210, y: 20, scale: 10}], elements: {"numb1": {type: "text", x: calctxt.txtx, y: calctxt.txty, width: calctxt.txtx, height: 25, text: "", font: calctxt.font}, "numb2": {type: "text", x: calctxt.txtx2, y: calctxt.txty, width: calctxt.txtx, height: 25, text: "", font: calctxt.font}, "result": {type: "text", x: calctxt.txtx + 100, y: calctxt.txty + 100, width: calctxt.txtx, height: 25, text: "", font: calctxt.font}, "button1": {type: "button", x: 30, y: 130, bitmap: "but_1_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 1) + "";
    }
}}}, "button2": {type: "button", x: 100, y: 130, bitmap: "but_2_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 2) + "";
    }
}}}, "button3": {type: "button", x: 170, y: 130, bitmap: "but_3_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 3) + "";
    }
}}}, "button4": {type: "button", x: 30, y: 200, bitmap: "but_4_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 4) + "";
    }
}}}, "button5": {type: "button", x: 100, y: 200, bitmap: "but_5_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 5) + "";
    }
}}}, "button6": {type: "button", x: 170, y: 200, bitmap: "but_6_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 6) + "";
    }
}}}, "button7": {type: "button", x: 30, y: 270, bitmap: "but_7_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 7) + "";
    }
}}}, "button8": {type: "button", x: 100, y: 270, bitmap: "but_8_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 8) + "";
    }
}}}, "button9": {type: "button", x: 170, y: 270, bitmap: "but_9_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 9) + "";
    }
}}}, "button0": {type: "button", x: 100, y: 340, bitmap: "but_0_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 0) + "";
    }
}}}, "button12": {type: "button", x: 780, y: 130, bitmap: "but_1_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 1) + "";
    }
}}}, "button22": {type: "button", x: 850, y: 130, bitmap: "but_2_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 2) + "";
    }
}}}, "button32": {type: "button", x: 920, y: 130, bitmap: "but_3_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 3) + "";
    }
}}}, "button42": {type: "button", x: 780, y: 200, bitmap: "but_4_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 4) + "";
    }
}}}, "button52": {type: "button", x: 850, y: 200, bitmap: "but_5_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 5) + "";
    }
}}}, "button62": {type: "button", x: 920, y: 200, bitmap: "but_6_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 6) + "";
    }
}}}, "button72": {type: "button", x: 780, y: 270, bitmap: "but_7_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 7) + "";
    }
}}}, "button82": {type: "button", x: 850, y: 270, bitmap: "but_8_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 8) + "";
    }
}}}, "button92": {type: "button", x: 920, y: 270, bitmap: "but_9_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 9) + "";
    }
}}}, "button02": {type: "button", x: 850, y: 340, bitmap: "but_0_0", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
        tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 0) + "";
    }
}}}, "act1": {type: "button", x: 500, y: 300, bitmap: "act1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = parseInt(tileEntity.data.numb1str) * parseInt(tileEntity.data.numb2str) + "";
}}}, "act2": {type: "button", x: 570, y: 300, bitmap: "act2", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = parseInt(tileEntity.data.numb1str) + parseInt(tileEntity.data.numb2str) + "";
}}}, "act3": {type: "button", x: 500, y: 370, bitmap: "act3", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = tileEntity.data.numb1str / tileEntity.data.numb2str;
}}}, "act4": {type: "button", x: 570, y: 370, bitmap: "act4", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = parseInt(tileEntity.data.numb1str) - parseInt(tileEntity.data.numb2str) + "";
}}}, "bcks": {type: "button", x: 147, y: 20, bitmap: "bcks", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.numb1str = Math.floor(tileEntity.data.numb1str / 10) + "";
}}}, "bcks2": {type: "button", x: 770, y: 20, bitmap: "bcks", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.numb2str = Math.floor(tileEntity.data.numb2str / 10) + "";
}}}}});
IDRegistry.genBlockID("calc2");
Block.createBlockWithRotation("calc2", [{name: "\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440", texture: [["calc1", 1], ["calc1", 2], ["calc1", 0], ["calc1", 0], ["calc1", 0], ["calc1", 0]], inCreative: true}]);
TileEntity.registerPrototype(BlockID.calc2, {defaultValues: {numb1str: "0", numb2str: "0", result: "0", limit: 5, mode: 1}, tick: function () {
    this.container.setText("result", this.data.result);
    this.container.setText("numb1", parseInt(this.data.numb1str));
    this.container.setText("numb2", parseInt(this.data.numb2str));
}, getGuiScreen: function () {
    return calc2Gui;
}});
Block.setBlockShape(BlockID.calc2, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 4 / 16, z: 15 / 16});
Recipes.addShaped({id: BlockID.calc2, count: 1, data: 0}, ["aaa", "ozo", "odo"], ["a", 44, 0, "o", 265, 0, "d", 331, 0, "b", 356, 0, "z", ItemID.proc, 0]);
var calc2Gui = UI.StandartWindow({standart: {background: {color: "#ff888888"}, header: {text: {text: "\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 2lvl"}}}, drawing: [{type: "bitmap", bitmap: "numb1_0", x: 210, y: 20, scale: 10}], elements: {"numb1": {type: "text", x: calctxt.txtx, y: calctxt.txty, width: calctxt.txtx, height: 25, text: "", font: calctxt.font}, "numb2": {type: "text", x: calctxt.txtx2, y: calctxt.txty, width: calctxt.txtx, height: 25, text: "", font: calctxt.font}, "result": {type: "text", x: calctxt.txtx + 100, y: calctxt.txty + 100, width: calctxt.txtx, height: 25, text: "", font: calctxt.font}, "mode1": {type: "button", x: 210, y: 20, bitmap: "modechang", scale: 10, clicker: {onClick: function (container, tileEntity) {
    container.getGuiContent().drawing = [{type: "bitmap", x: 210, y: 20, scale: 10, bitmap: "numb1_0"}];
    tileEntity.data.mode = 1;
}}}, "mode2": {type: "button", x: 500, y: 20, bitmap: "modechang", scale: 10, clicker: {onClick: function (container, tileEntity) {
    container.getGuiContent().drawing = [{type: "bitmap", x: 210, x: 20, scale: 10, bitmap: "numb1_1"}];
    tileEntity.data.mode = 2;
}}}, "button1": {type: "button", x: 30, y: 130, bitmap: "but_1_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 1) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 1) + "";
        }
    }
}}}, "button2": {type: "button", x: 100, y: 130, bitmap: "but_2_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 2) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 2) + "";
        }
    }
}}}, "button3": {type: "button", x: 170, y: 130, bitmap: "but_3_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 3) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 3) + "";
        }
    }
}}}, "button4": {type: "button", x: 30, y: 200, bitmap: "but_4_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 4) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 4) + "";
        }
    }
}}}, "button5": {type: "button", x: 100, y: 200, bitmap: "but_5_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 5) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 5) + "";
        }
    }
}}}, "button6": {type: "button", x: 170, y: 200, bitmap: "but_6_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 6) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 6) + "";
        }
    }
}}}, "button7": {type: "button", x: 30, y: 270, bitmap: "but_7_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 7) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 7) + "";
        }
    }
}}}, "button8": {type: "button", x: 100, y: 270, bitmap: "but_8_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 8) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 8) + "";
        }
    }
}}}, "button9": {type: "button", x: 170, y: 270, bitmap: "but_9_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10 + 9) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10 + 9) + "";
        }
    }
}}}, "button0": {type: "button", x: 100, y: 340, bitmap: "but_0_1", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb1str = (parseInt(tileEntity.data.numb1str) * 10) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length < tileEntity.data.limit) {
            tileEntity.data.numb2str = (parseInt(tileEntity.data.numb2str) * 10) + "";
        }
    }
}}}, "act1": {type: "button", x: 900, y: 100, bitmap: "act11", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = parseInt(tileEntity.data.numb1str) * parseInt(tileEntity.data.numb2str) + "";
}}}, "act2": {type: "button", x: 900, y: 170, bitmap: "act21", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = parseInt(tileEntity.data.numb1str) + parseInt(tileEntity.data.numb2str) + "";
}}}, "act3": {type: "button", x: 900, y: 240, bitmap: "act31", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = tileEntity.data.numb1str / tileEntity.data.numb2str;
}}}, "act4": {type: "button", x: 900, y: 310, bitmap: "act41", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.result = parseInt(tileEntity.data.numb1str) - parseInt(tileEntity.data.numb2str) + "";
}}}, "bcks": {type: "button", x: 147, y: 20, bitmap: "bcks_2", scale: buttonScale, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.mode == 1) {
        if (tileEntity.data.numb1str.split("").length <= tileEntity.data.limit) {
            tileEntity.data.numb1str = Math.floor(tileEntity.data.numb1str / 10) + "";
        }
    }
    if (tileEntity.data.mode == 2) {
        if (tileEntity.data.numb2str.split("").length <= tileEntity.data.limit) {
            tileEntity.data.numb2str = Math.floor(tileEntity.data.numb2str / 10) + "";
        }
    }
}}}}});

