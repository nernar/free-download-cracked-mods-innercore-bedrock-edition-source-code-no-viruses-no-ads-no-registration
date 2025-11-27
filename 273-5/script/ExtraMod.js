ModAPI.addAPICallback("EquivalentAPI", function (api) {
    let System = api.System;
    System.setValue(ItemID.circultUnic, 0, 34048);
    System.setValue(ItemID.GearTecM, 0, 138496);
    System.setValue(ItemID.GearAndvancendTecM, 0, 293120);
    System.setValue(BlockID.MachineBlockMG, 0, 156928);
    System.setValue(ItemID.tecCoreG, 0, 1362176);
    System.setValue(BlockID.MachineBlockTier2MG, 0, 5605632);
    System.setValue(ItemID.tecCoreDG, 0, 5741824);
    System.setValue(ItemID.tecCoreSG, 0, 50995456);
    System.setValue(ItemID.colorIngot, 0, 160000);
    System.setValue(ItemID.colorCristal, 0, 20000);
    IDRegistry.genBlockID("condenserMK2T");
    Block.createBlockWithRotation("condenserMK2T", [{name: "Energy condenser MK II", texture: [["EcondenserTop_t", 0], ["EcondenserTop_t", 0], ["EcondenserSide_t", 0], ["EcondenserFront_t", 0], ["EcondenserSide_t", 0], ["EcondenserSide_t", 0]], inCreative: true}]);
    Block.setBlockShape(BlockID.condenserMK2T, {x: 0.0625, y: 0, z: 0.0625}, {x: 0.9375, y: 0.875, z: 0.9375});
    Recipes.addShaped({id: BlockID.condenserMK2T, count: 1, data: 0}, ["xax", "xbx", "xax"], ["x", ItemID.circultUnic, 0, "a", BlockID.MachineBlockMG, 0, "b", BlockID.condenser, 0]);
    var TMK2 = new UI.StandartWindow({standart: {inventory: {padding: 10000}}, params: {slot: "invSlot_t", selection: "selection_wood2"}, drawing: [], elements: {"item": {type: "slot", x: 370, y: 190, size: 38}, "star": {type: "slot", x: 370, y: 900, size: 38}, "emcScale": {type: "scale", x: 425, y: 190, value: 0.5, direction: 0, scale: 1.8, bitmap: "emcBar_1_tec"}, "emcText": {type: "text", x: 650, y: 195, width: 50, height: 20, size: 14, text: ""}}});
    ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
        api.CriarClassicUI.ClassicGUI(TMK2, {text: "Energy condenser MK II"});
    });
    TMK2.content.drawing.push({type: "bitmap", x: 425, y: 190, scale: 1.8, bitmap: "emcBar_0_tec"});
    var xp = 375;
    var xt = 607;
    var yp = 260;
    for (var i = 1; i <= 20; i++) {
        TMK2.content.elements["burn" + i] = {type: "slot", x: xp, y: yp, size: 38};
        TMK2.content.elements["burns" + i] = {type: "slot", x: xt, y: yp, size: 38};
        xp += 38;
        xt += 38;
        if (i % 4 === 0) {
            xp = 375;
            xt = 607;
            yp += 38;
        }
    }
    var directions = [{x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}];
    var burnSlots = ["burn1", "burn2", "burn3", "burn4", "burn5", "burn6", "burn7", "burn8", "burn9", "burn10", "burn11", "burn12", "burn13", "burn14", "burn15", "burn16", "burn17", "burn18", "burn19", "burn20"];
    var burnsSlotss = ["burns1", "burns2", "burns3", "burns4", "burns5", "burns6", "burns7", "burns8", "burns9", "burns10", "burns11", "burns12", "burns13", "burns14", "burns15", "burns16", "burns17", "burns18", "burns19", "burns20"];
    TileEntity.registerPrototype(BlockID.condenserMK2T, {defaultValues: {emc: 0, maxEmc: 999999999}, getGuiScreen: function () {
        return TMK2;
    }, getTransportSlots: function () {
        return {input: burnSlots, output: burnsSlotss};
    }, checkUp: function (fs1, fs0, double) {
        double = double ? 1 : 1;
        return !fs1.id || fs1.id == fs0.id && fs1.data == fs0.data && fs1.count <= 64 - double;
    }, shiftItem: function (fs0, fs1) {
        fs0.count && this.checkUp(fs1, fs0) && (fs1.id = fs0.id, fs1.data = fs0.data, fs1.count++, fs0.count--) & this.container.validateSlot("item") & this.container.validateSlot("burns1") & this.container.validateSlot("burns2") & this.container.validateSlot("burns3") & this.container.validateSlot("burns4") & this.container.validateSlot("burns5") & this.container.validateSlot("burns6") & this.container.validateSlot("burns7") & this.container.validateSlot("burns8") & this.container.validateSlot("burns9") & this.container.validateSlot("burns10") & this.container.validateSlot("burns11") & this.container.validateSlot("burns12") & this.container.validateSlot("burns13") & this.container.validateSlot("burns14") & this.container.validateSlot("burns15") & this.container.validateSlot("burns16") & this.container.validateSlot("burns17") & this.container.validateSlot("burns18") & this.container.validateSlot("burns19") & this.container.validateSlot("burns20");
    }, tick: function () {
        this.container.setText("emcText", this.data.emc);
        var slotItem = this.container.getSlot("item");
        var slotStar = this.container.getSlot("star");
        var burns1 = this.container.getSlot("burns1");
        var burns2 = this.container.getSlot("burns2");
        var burns3 = this.container.getSlot("burns3");
        var burns4 = this.container.getSlot("burns4");
        var burns5 = this.container.getSlot("burns5");
        var burns6 = this.container.getSlot("burns6");
        var burns7 = this.container.getSlot("burns7");
        var burns8 = this.container.getSlot("burns8");
        var burns9 = this.container.getSlot("burns9");
        var burns10 = this.container.getSlot("burns10");
        var burns11 = this.container.getSlot("burns11");
        var burns12 = this.container.getSlot("burns12");
        var burns13 = this.container.getSlot("burns13");
        var burns14 = this.container.getSlot("burns14");
        var burns15 = this.container.getSlot("burns15");
        var burns16 = this.container.getSlot("burns16");
        var burns17 = this.container.getSlot("burns17");
        var burns18 = this.container.getSlot("burns18");
        var burns19 = this.container.getSlot("burns19");
        var burns20 = this.container.getSlot("burns20");
        this.container.setScale("emcScale", this.data.emc / this.data.maxEmc);
        if (System.getValue(slotItem.id, slotItem.data)) {
            this.data.maxEmc = System.getValue(slotItem.id, slotItem.data);
        }
        if (!System.getValue(slotItem.id, slotItem.data)) {
            this.data.maxEmc = 9999999;
        }
        if (System.getValue(slotItem.id, slotItem.data) && slotItem.count < 64 && this.data.emc >= System.getValue(slotItem.id, slotItem.data)) {
            slotItem.count += 1;
            this.data.emc -= System.getValue(slotItem.id, slotItem.data);
        }
        for (i in burnSlots) {
            slotBurn = this.container.getSlot(burnSlots[i]);
            if (System.getValue(slotBurn.id, slotBurn.data) && System.getValue(slotItem.id, slotItem.data) && this.data.emc <= this.data.maxEmc && slotBurn.id != slotItem.id) {
                slotBurn.count--;
                this.data.emc += System.getValue(slotBurn.id, slotBurn.data);
            }
            if (slotBurn.count == 0) {
                slotBurn.id = 0;
                slotBurn.data = 0;
            }
        }
        for (i in directions) {
            let dir = directions[i];
            let tileEnt = World.getTileEntity(this.x + dir.x, this.y + dir.y, this.z + dir.z);
            let getTile = World.getBlock(this.x + dir.x, this.y + dir.y, this.z + dir.z).id;
            if (System.getValue(slotItem.id, slotItem.data) && tileEnt && (getTile == BlockID.relay0 || getTile == BlockID.relay1 || getTile == BlockID.relay2)) {
                if (tileEnt.data.emc > 0 && this.data.emc < this.data.maxEmc) {
                    this.data.emc++;
                    tileEnt.data.emc--;
                }
            }
        }
        if (slotItem.count >= 2) {
            this.shiftItem(slotItem, burns1);
            this.shiftItem(burns1, burns2);
            this.shiftItem(burns2, burns3);
            this.shiftItem(burns3, burns4);
            this.shiftItem(burns4, burns5);
            this.shiftItem(burns5, burns6);
            this.shiftItem(burns6, burns7);
            this.shiftItem(burns7, burns8);
            this.shiftItem(burns8, burns9);
            this.shiftItem(burns9, burns10);
            this.shiftItem(burns10, burns11);
            this.shiftItem(burns11, burns12);
            this.shiftItem(burns12, burns13);
            this.shiftItem(burns13, burns14);
            this.shiftItem(burns14, burns15);
            this.shiftItem(burns15, burns16);
            this.shiftItem(burns16, burns17);
            this.shiftItem(burns17, burns18);
            this.shiftItem(burns18, burns19);
            this.shiftItem(burns19, burns20);
        }
    }});
});

