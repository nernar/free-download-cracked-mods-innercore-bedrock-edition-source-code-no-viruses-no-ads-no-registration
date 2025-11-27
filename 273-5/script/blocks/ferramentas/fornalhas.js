const ORE = [14, 15, 56, 16, BlockID.oreCopper, BlockID.oreTin, BlockID.oreLead, BlockID.oreAluminum, BlockID.oreNickel, BlockID.orePlatinum, BlockID.oreIridium, BlockID.oreMithril, BlockID.orecoppere, BlockID.draconiumOre, BlockID.draconiumOreNether, BlockID.draconiumOreEnd];
const regItem = function (tex, name, meta) {
    tex = "TecFurnace_" + tex;
    const id = tex + (meta || "");
    IDRegistry.genItemID(id);
    Item.createItem(id, "Upgrade" + name, {name: tex, meta: meta}, {stack: 1});
};
const ID = function (str) {
    str = "TecFurnace_" + str;
    return ItemID[str] || BlockID[str];
};
regItem("fuel", " de Combust\xedvel");
regItem("fuel", " de Combust\xedvel Avan\xe7ado", 1);
regItem("ore", " de  Processamento de Minerio");
regItem("ore", " de  Processamento de Minerio Avan\xe7ado", 1);
regItem("storage", " de Espa\xe7o");
regItem("liquid", " de l\xedquidos");
var FURNACE_SOLID = Block.createSpecialType({base: 1, solid: true, destroytime: 2, explosionres: 10, opaque: false, lightopacity: 0}, "reinforced_block");
let RenderData = {};
var FurnaceGUI = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1100}, background: {color: android.graphics.Color.argb(90, 1, 1, 1)}}, params: {selection: "selection_wood2"}, drawing: [], elements: {"slotSource1": {type: "slot", x: 450, y: 250, size: 38, bitmap: "invSlot_t"}, "slotSource2": {type: "slot", x: 2000, y: 250 - 38, size: 38, bitmap: "invSlot_t"}, "slotResult1": {type: "slot", x: 560, y: 250, size: 38, bitmap: "invSlot_t"}, "slotResult2": {type: "slot", x: 2000, y: 250 - 38, size: 38, bitmap: "invSlot_t"}, "slotFuel1": {type: "slot", x: 450, y: 340, size: 38, bitmap: "invSlot_t"}, "slotFuel2": {type: "slot", x: 2000, y: 340 + 38, size: 38, bitmap: "invSlot_t"}, "scaleProg1b": {type: "image", x: 2000, y: 215, bitmap: "bar_progrese_background", scale: 2}, "scaleProg": {type: "scale", x: 500, y: 255, direction: 0, value: 0.5, bitmap: "bar_progrese", scale: 2}, "scaleProg1": {type: "scale", x: 2000, y: 215, direction: 0, value: 0.5, bitmap: "bar_progrese", scale: 2}, "scaleBurn": {type: "scale", x: 452, y: 296, direction: 1, value: 0.5, bitmap: "burn_1", scale: 2.5}, "lavaEscale": {type: "image", x: 2000, y: 350, bitmap: "lava_0", scale: 3.2}, "scaleLava": {type: "scale", x: 2000, y: 350, direction: 1, bitmap: "lava_1", value: 0.5, scale: 3.2}, "slotUpgrade0": {type: "slot", x: 370, y: 172, size: 38, bitmap: "invSlot_t"}, "slotUpgrade1": {type: "slot", x: 370, y: 210, size: 38, bitmap: "invSlot_t"}, "slotUpgrade2": {type: "slot", x: 370, y: 248, size: 38, bitmap: "invSlot_t"}, "slotUpgrade3": {type: "slot", x: 370, y: 286, size: 38, bitmap: "invSlot_t"}}});
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(FurnaceGUI, {invSlot: "invSlot_t", frame: "frame", closeButton: "close_b", closeButton2: "close_b2", text: "Fornalha", backgroundBitmap: null, backgroundColor: {a: 255, r: 174, g: 174, b: 174}, textColor: {r: 1, g: 1, b: 1}});
});
FurnaceGUI.content.drawing.push({type: "bitmap", x: 452, y: 296, bitmap: "burn_0", scale: 2.5}, {type: "bitmap", x: 500, y: 255, bitmap: "bar_progrese_background", scale: 2});
const regFurnace = function (id, name, speed) {
    id = "TecFurnace_" + id;
    name = name + " Furnace";
    IDRegistry.genBlockID(id);
    Block.createBlockWithRotation(id, [{name: name, texture: [[id, 0], [id, 0], [id, 0], [id, 1], [id, 0], [id, 0]], inCreative: true}], FURNACE_SOLID);
    ToolAPI.registerBlockMaterial(BlockID[id], "stone");
    Block.setDestroyTime(BlockID[id], 5);
    ICRender.getGroup("item-pipe").add(BlockID[id], -1);
    ICRender.getGroup("liquid-pipe").add(BlockID[id], -1);
    RenderData[BlockID[id]] = [];
    let render1, render2;
    const tex1 = [[[id, 0], [id, 0], [id, 0], [id, 1], [id, 0], [id, 0]], [[id, 0], [id, 0], [id, 1], [id, 0], [id, 0], [id, 0]], [[id, 0], [id, 0], [id, 0], [id, 0], [id, 0], [id, 1]], [[id, 0], [id, 0], [id, 0], [id, 0], [id, 1], [id, 0]]];
    const tex2 = [[[id, 0], [id, 0], [id, 0], [id, 2], [id, 0], [id, 0]], [[id, 0], [id, 0], [id, 2], [id, 0], [id, 0], [id, 0]], [[id, 0], [id, 0], [id, 0], [id, 0], [id, 0], [id, 2]], [[id, 0], [id, 0], [id, 0], [id, 0], [id, 2], [id, 0]]];
    for (let i = 0; i < 4; i++) {
        render1 = new ICRender.Model();
        render1.addEntry(BlockRenderer.createTexturedBlock(tex1[i]));
        BlockRenderer.enableCoordMapping(BlockID[id], i, render1);
        render2 = new ICRender.Model();
        render2.addEntry(BlockRenderer.createTexturedBlock(tex2[i]));
        RenderData[BlockID[id]].push(render2);
    }
    TileEntity.registerPrototype(BlockID[id], {getGuiScreen: function () {
        return FurnaceGUI;
    }, defaultValues: {max: 0, burn: 0, progress: 0}, init: function () {
        this.liquidStorage.setLimit("lava", 4);
    }, addTransportedItem: function (self, item) {
        let add = 0;
        const n = this.getUpg(ID("storage")) ? 2 : 1;
        const s = this.container.getSlot("slotSource" + n);
        const f = this.container.getSlot("slotFuel" + n);
        if (Recipes.getFuelBurnDuration(item.id, item.data)) {
            if (this.checkUp(f, item)) {
                add = Math.min(item.count, 64 - f.count);
                f.id = item.id;
                f.data = item.data;
                f.count += add;
                item.count -= add;
                if (!item.count) {
                    return;
                }
            }
        } else {
            if (this.checkUp(s, item)) {
                add = Math.min(item.count, 64 - s.count);
                s.id = item.id;
                s.data = item.data;
                s.count += add;
                item.count -= add;
                if (!item.count) {
                    return;
                }
            }
        }
    }, getTransportSlots: function () {
        return {input: ["slotSource1", "slotSource2", "slotFuel1", "slotFuel2"], output: ["slotResult1", "slotResult2"]};
    }, checkUp: function (s1, s2, double) {
        double = double ? 2 : 1;
        return !s1.id || s1.id == s2.id && s1.data == s2.data && s1.count <= 64 - double;
    }, shiftItem: function (s1, s2) {
        s2.count && this.checkUp(s1, s2) && (s1.id = s2.id, s1.data = s2.data, s1.count++, s2.count--) & this.container.validateSlot("slotSource2") & this.container.validateSlot("slotFuel2") & this.container.validateSlot("slotResult1");
    }, dumpItem: function (s) {
        s.count && World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, s.id, s.count, s.data) & (s.id = s.count = s.data = 0);
    }, getUpg: function (id) {
        let slot;
        for (let i = 4; i--; ) {
            slot = this.container.getSlot("slotUpgrade" + i);
            if (slot.id == id) {
                return slot;
                break;
            }
        }
    }, activate: function () {
        const block = World.getBlock(this.x, this.y, this.z);
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, RenderData[block.id][block.data]);
    }, tick: function () {
        const scare = this.data.burn / this.data.max;
        this.container.setScale("scaleBurn", isNaN(scare) ? 0 : scare);
        this.container.setScale("scaleLava", this.liquidStorage.getAmount("lava") / 4);
        this.container.setScale("scaleProg", this.data.progress);
        this.container.setScale("scaleProg1", this.data.progress);
        const s1 = this.container.getSlot("slotSource1");
        const f1 = this.container.getSlot("slotFuel1");
        const r1 = this.container.getSlot("slotResult1");
        const s2 = this.container.getSlot("slotSource2");
        const f2 = this.container.getSlot("slotFuel2");
        const r2 = this.container.getSlot("slotResult2");
        const rec = Recipes.getFurnaceRecipeResult(s1.id);
        const content = this.container.getGuiContent();
        const storage = this.getUpg(ID("storage"));
        const liquid = this.getUpg(ID("liquid"));
        if (content) {
            content.elements.slotSource2.x = storage ? 450 : 2000;
            content.elements.slotFuel2.x = storage ? 450 : 2000;
            content.elements.slotResult2.x = storage ? 560 : 2000;
            content.elements.scaleProg1b.x = storage ? 500 : 2000;
            content.elements.scaleProg1.x = storage ? 500 : 2000;
            content.elements.lavaEscale.x = content.elements.scaleLava.x = liquid ? 720 : 2000;
        }
        storage ? this.shiftItem(s1, s2) & this.shiftItem(f1, f2) & this.shiftItem(r2, r1) : this.dumpItem(s2) & this.dumpItem(f2) & this.dumpItem(r2);
        let empty;
        if (liquid) {
            if (LiquidRegistry.getItemLiquid(f1.id, f1.data) == "lava" && this.liquidStorage.getAmount("lava") <= 3) {
                empty = LiquidRegistry.getEmptyItem(f1.id, f1.data);
                this.liquidStorage.addLiquid("lava", 1);
                f1.id = empty.id;
                f1.data = empty.data;
            }
        } else {
            this.liquidStorage.setAmount("lava", 0);
        }
        if (this.data.burn > 0) {
            this.data.burn -= speed;
        } else {
            if (this.data.max) {
                this.data.max = 0;
                BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
            }
            if (rec) {
                const fuel = this.getUpg(ID("fuel"));
                const fuel1 = this.getUpg(ID("fuel1"));
                if (this.liquidStorage.getAmount("lava")) {
                    this.liquidStorage.getLiquid("lava", 0.01);
                    this.data.burn = this.data.max = fuel || fuel1 ? 400 : 200;
                    this.activate();
                    fuel && ++fuel.data == 128 && (fuel.id = fuel.data = fuel.count = 0);
                } else {
                    let time = Recipes.getFuelBurnDuration(f1.id, f1.data);
                    if (time) {
                        if (LiquidRegistry.getItemLiquid(f1.id, f1.data) == "lava" && f1.count == 1) {
                            empty = LiquidRegistry.getEmptyItem(f1.id, f1.data);
                            f1.id = empty.id;
                            f1.data = empty.data;
                        } else {
                            f1.count--;
                        }
                        this.container.validateSlot("slotFuel1");
                        if (fuel || fuel1) {
                            time *= 2;
                            fuel && ++fuel.data == 128 && (fuel.id = fuel.data = fuel.count = 0);
                        }
                        this.data.burn = this.data.max = time;
                        this.activate();
                    } else {
                        this.data.burn = this.data.max = 0;
                    }
                }
            }
        }
        if (this.data.burn && rec) {
            const ore = this.getUpg(ID("ore"));
            const ore1 = this.getUpg(ID("ore1"));
            const oreCheck = ORE.indexOf(s1.id) != -1 && (ore || ore1);
            if (this.checkUp(r1, rec, oreCheck)) {
                this.data.progress += speed / 200;
                if (this.data.progress >= 1) {
                    this.data.progress = 0;
                    r1.id = rec.id;
                    r1.data = rec.data;
                    r1.count++;
                    if (oreCheck) {
                        r1.count++;
                        ore && ++ore.data == 512 && (ore.id = ore.data = ore.count = 0);
                    }
                    s1.count--;
                    this.container.validateSlot("slotSource1");
                }
            }
        } else {
            this.data.progress = 0;
        }
    }});
};
regFurnace("iro", "Iron", 1.6);
regFurnace("gol", "Gold", 2);
regFurnace("dia", "Diamond", 4);
regFurnace("hel", "Hell", 25);
regFurnace("ext", "Extreme", 50);
regFurnace("utraext", "Utra extreme", 100);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ID("iro")}, ["aaa", "aba", "aaa"], ["a", 265, 0, "b", 61, 0]);
    Recipes.addShaped({id: ID("gol")}, ["aaa", "aba", "aaa"], ["a", 266, 0, "b", ID("iro"), 0]);
    Recipes.addShaped({id: ID("dia")}, ["aba", "bcb", "aba"], ["a", 20, 0, "b", 264, 0, "c", ID("gol"), 0]);
    Recipes.addShaped({id: ID("hel")}, ["aaa", "bcb", "ded"], ["a", 378, 0, "b", 57, 0, "c", ID("dia"), 0, "d", 112, 0, "e", 46, 0]);
    Recipes.addShaped({id: ID("ext")}, ["oao", "bcb", "ded"], ["a", 399, 0, "b", 381, 0, "c", ID("hel"), 0, "d", 121, 0, "e", 112, 0]);
    Recipes.addShaped({id: ID("utraext")}, ["aaa", "cbc", "aaa"], ["a", 49, 0, "b", 61, 0, "c", 264, 0]);
    Recipes.addShaped({id: ID("fuel")}, ["aba", "bcb", "aba"], ["a", 22, 0, "b", 368, 0, "c", 263, 0]);
    Recipes.addShaped({id: ID("fuel1")}, ["aba", "cdc", "aca"], ["a", 264, 0, "b", 370, 0, "c", 381, 0, "d", ID("fuel"), 0]);
    Recipes.addShaped({id: ID("ore")}, ["aaa", "aba", "aca"], ["a", 1, 0, "b", 318, 0, "c", 33, -1]);
    Recipes.addShaped({id: ID("ore1")}, ["aba", "cdc", "aba"], ["a", 264, 0, "b", 33, -1, "c", 49, 0, "d", ID("ore"), 0]);
    Recipes.addShaped({id: ID("liquid")}, ["aoa", "bcb", "aba"], ["a", 265, 0, "b", 20, 0, "c", 325, 0]);
    Recipes.addShaped({id: ID("storage")}, ["aba", "bcb", "aba"], ["a", 1, 0, "b", 20, 0, "c", 54, 0]);
});
Item.setMaxDamage(ID("fuel"), 128);
Item.setMaxDamage(ID("ore"), 512);

