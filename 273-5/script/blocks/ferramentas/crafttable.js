var BOCK_NEW_CONCRETE = Block.createSpecialType({base: 1, solid: true, destroytime: 5, explosionres: 30, opaque: false, lightopacity: 0}, "reinforced_block");
IDRegistry.genItemID("rec_brueprint");
Item.createItem("rec_brueprint", "Recipe Brueprint", {name: "rec_brueprint"}, {stack: 1, isTech: true});
Item.registerNameOverrideFunction(ItemID.rec_brueprint, function () {
    const item = Player.getCarriedItem();
    return "Recipe Brueprint\n\xa7o" + (item.extra ? item.extra.getString("title") : "Error");
});
IDRegistry.genBlockID("workbench");
Block.createBlock("workbench", [{name: "Workbench", texture: [["crafttable_b", 0], ["crafting_table_t", 0], ["crafting_table_s", 0]], inCreative: true}], BOCK_NEW_CONCRETE);
ToolAPI.registerBlockMaterial(BlockID.workbench, "stone", 2, true);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.workbench}, ["ab"], ["a", 58, 0, "b", 17, 0]);
});
const addInv = function (item) {
    const pos = Player.getPosition();
    const max = Item.getMaxStack(item.id);
    let inv;
    let min = 0;
    for (let i = 10; i <= 44; i++) {
        inv = Player.getInventorySlot(i);
        item.count && (!inv.id || inv.id == item.id && inv.data == item.data) && inv.count < max && (min = Math.min(item.count, max - inv.count), item.count -= min) & Player.setInventorySlot(i, item.id, inv.count + min, item.data);
    }
    while (item.count) {
        item.count > max ? World.drop(pos.x, pos.y, pos.z, item.id, max, item.data) & (item.count -= max) : World.drop(pos.x, pos.y, pos.z, item.id, item.count, item.data) & (item.id = item.count = item.data = 0);
    }
    item.id = item.data = 0;
};
var CraftTableGUI = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1100}, background: {color: android.graphics.Color.argb(90, 1, 1, 1)}}, params: {selection: "selection_wood2"}, drawing: [], elements: {"slot0": {type: "slot", x: 500, y: 236, size: 40, bitmap: "invSlot_wood2"}, "slot1": {type: "slot", x: 540, y: 236, size: 40, bitmap: "invSlot_wood2"}, "slot2": {type: "slot", x: 580, y: 236, size: 40, bitmap: "invSlot_wood2"}, "slot3": {type: "slot", x: 500, y: 276, size: 40, bitmap: "invSlot_wood2"}, "slot4": {type: "slot", x: 540, y: 276, size: 40, bitmap: "invSlot_wood2"}, "slot5": {type: "slot", x: 580, y: 276, size: 40, bitmap: "invSlot_wood2"}, "slot6": {type: "slot", x: 500, y: 316, size: 40, bitmap: "invSlot_wood2"}, "slot7": {type: "slot", x: 540, y: 316, size: 40, bitmap: "invSlot_wood2"}, "slot8": {type: "slot", x: 580, y: 316, size: 40, bitmap: "invSlot_wood2"}, "ContruirProgresse": {type: "image", x: 625, y: 278, scale: 1.9, bitmap: "pogress_wood"}, "slotResult": {type: "slot", x: 680, y: 270, size: 50, bitmap: "invSlot_wood2", clicker: {onClick: function (con) {
    const res = con.getSlot("slotResult");
    if (res.id) {
        let slot;
        addInv(res);
        for (let i = 9; i--; ) {
            slot = con.getSlot("slot" + i);
            slot.id && !--slot.count && con.clearSlot("slot" + i);
        }
    }
}, onLongClick: function (con) {
    const res = con.getSlot("slotResult");
    if (res.id) {
        const field = [];
        let slot;
        let max = 0;
        for (let i = 9; i--; ) {
            slot = con.getSlot("slot" + i);
            slot.id && (field[field.length] = i);
            (!max || slot.count && max > slot.count) && (max = slot.count);
        }
        addInv({id: res.id, count: res.count * max, data: res.data});
        for (let i = field.length; i--; ) {
            slot = con.getSlot("slot" + field[i]);
            slot.count -= max;
            slot.count || con.clearSlot("slot" + field[i]);
        }
    }
}}}}});
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(CraftTableGUI, {invSlot: "invSlot_wood2", frame: "frame_wood2", closeButton: "close_tec", closeButton2: "close_tec2", text: "CraftTable", backgroundBitmap: null, ScaleInvSlot: 1, backgroundColor: {a: 255, r: 152, g: 120, b: 73}, textColor: {r: 255, g: 255, b: 255}});
});
TileEntity.registerPrototype(BlockID.workbench, {getGuiScreen: function () {
    return CraftTableGUI;
}, tick: function () {
    const content = this.container.getGuiContent();
    if (content) {
        const res = Recipes.getRecipeResult(this.container) || {id: 0, count: 0, data: 0};
        this.container.setSlot("slotResult", res.id, res.count, res.data);
    } else {
        this.container.clearSlot("slotResult");
        for (let i = 9; i--; ) {
            addInv(this.container.getSlot("slot" + i));
        }
    }
}});
var GLASS_LISO = Block.createSpecialType({base: 5});
var WOOD_COLOR_DECORATIVOS = Block.createSpecialType({base: 5, solid: true, explosionres: 10, opaque: false, lightopacity: 0}, "reinforced_block");
var BOCK_MESADEARTESANATO = Block.createSpecialType({base: 1, destroytime: 0.1, explosionres: 30, opaque: false, lightopacity: 0}, "mesaartesanato");
IDRegistry.genItemID("corantePower1");
Item.createItem("corantePower1", "P\xf3 de Corante multi color", {name: "dye_power_1", meta: 0}, {stack: 64});
IDRegistry.genItemID("corantePower2");
Item.createItem("corantePower2", "P\xf3 de Corante multi color 2", {name: "dye_power_2", meta: 0}, {stack: 64});
IDRegistry.genBlockID("mesadeartesanato");
Block.createBlock("mesadeartesanato", [{name: "Mesa de Artesanato", texture: [["mesa_de_artesanato_button", 0], ["mesa_de_artesanato_top", 0], ["mesa_de_artesanato_side", 0]], inCreative: true}], BOCK_MESADEARTESANATO);
ToolAPI.registerBlockMaterial(BlockID.mesadeartesanato, "stone", 2, true);
IDRegistry.genBlockID("plankcolorido");
Block.createBlock("plankcolorido", [{name: "T\xe1buas de madeira Azul", texture: [["plank_blue", 0]], inCreative: true}, {name: "T\xe1buas de madeira Amarela", texture: [["plank_yellow", 0]], inCreative: true}, {name: "T\xe1buas de madeira Laranja", texture: [["plank_orange", 0]], inCreative: true}, {name: "T\xe1buas de madeira Roxa", texture: [["plank_purple", 0]], inCreative: true}, {name: "T\xe1buas de madeira Verde", texture: [["plank_green", 0]], inCreative: true}, {name: "T\xe1buas de madeira Ciano", texture: [["plank_cyan", 0]], inCreative: true}, {name: "T\xe1buas de madeira Preta", texture: [["plank_black", 0]], inCreative: true}, {name: "T\xe1buas de madeira Vermelha", texture: [["plank_red", 0]], inCreative: true}, {name: "T\xe1buas de madeira rosa", texture: [["plank_rosa", 0]], inCreative: true}, {name: "T\xe1buas de madeira Branca", texture: [["plank_branco", 0]], inCreative: true}, {name: "T\xe1buas de madeira Verde clara", texture: [["plank_green_c", 0]], inCreative: true}, {name: "T\xe1buas de madeira Magenta", texture: [["plank_magenta", 0]], inCreative: true}, {name: "T\xe1buas de madeira Azul claro", texture: [["plank_blue_c", 0]], inCreative: true}, {name: "T\xe1buas de madeira Sinza", texture: [["plank_gray_c", 0]], inCreative: true}, {name: "T\xe1buas de madeira Sinza Escuro", texture: [["plank_gray", 0]], inCreative: true}, {name: "T\xe1buas de madeira Marron", texture: [["plank_brown", 0]], inCreative: true}], WOOD_COLOR_DECORATIVOS);
ToolAPI.registerBlockMaterial(BlockID.plankcolorido, "wood", 0, true);
IDRegistry.genBlockID("vidrolizo");
Block.createBlock("vidrolizo", [{name: "Vidro", texture: [["vidrolizo", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.vidrolizo, "stone", 2, true);
IDRegistry.genBlockID("vidrolizoIronT");
Block.createBlock("vidrolizoIronT", [{name: "Vidro", texture: [["vidrolizo_iron_t", 0]], inCreative: false}]);
IDRegistry.genBlockID("vidrolizopuro");
Block.createBlock("vidrolizopuro", [{name: "Vidro", texture: [["glasslizo", 0]], inCreative: true}], GLASS_LISO);
IDRegistry.genBlockID("virodeferrot");
Block.createBlock("virodeferrot", [{name: "Vidro", texture: [["glass_iron_t", 0]], inCreative: true}], GLASS_LISO);
Recipes.addShaped({id: BlockID.virodeferrot, count: 8, data: 0}, ["aaa", "aba", "aaa"], ["a", BlockID.vidrolizopuro, 0, "b", 265, 0]);
ToolAPI.registerBlockMaterial(BlockID.vidrolizopuro, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.virodeferrot, "stone", 2, true);
Recipes.addShaped({id: ItemID.corantePower1, count: 1, data: 0}, ["abc", "def", "ghi"], ["a", 351, 0, "b", 351, 1, "c", 351, 2, "d", 351, 3, "e", 351, 4, "f", 351, 5, "g", 351, 6, "h", 351, 7, "i", 351, 8]);
Recipes.addShaped({id: ItemID.corantePower2, count: 1, data: 0}, ["abc", "def", "ghi"], ["a", 351, 9, "b", 351, 10, "c", 351, 11, "d", 351, 12, "e", 351, 13, "f", 351, 14, "g", 351, 15]);
Recipes.addShaped({id: BlockID.mesadeartesanato}, ["adb", "dcd", "ddd"], ["a", ItemID.corantePower2, 0, "b", ItemID.corantePower1, 0, "c", BlockID.workbench, 0, "d", 17, 2]);
Recipes.addShaped({id: BlockID.vidrolizopuro, count: 8, data: 0}, ["aaa", "aba", "aaa"], ["a", 20, 0, "b", 263, 0]);
function createGlassConnect(itemID, centerID, bordID, groupID) {
    var currentPlayerPosition;
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(itemID, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(7 / 16, 0, 7 / 16, 9 / 16, 1 / 32, 9 / 16, bordID, 0);
    var group = ICRender.getGroup(groupID);
    group.add(itemID, 0);
    var vidrolizopuroBorderRender = [{side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(1, 0, 0, group, true)), box: [15 / 16, 15 / 16, 0, 16 / 16, 16 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(-1, 0, 0, group, true)), box: [0 / 16, 15 / 16, 0, 1 / 16, 16 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)), box: [0 / 16, 15 / 16, 15 / 16, 16 / 16, 16 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(0, 0, -1, group, true)), box: [0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 1 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(1, 0, 0, group, true)), box: [15 / 16, 0 / 16, 0, 16 / 16, 1 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(-1, 0, 0, group, true)), box: [0 / 16, 0 / 16, 0, 1 / 16, 1 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)), box: [0 / 16, 0 / 16, 15 / 16, 16 / 16, 1 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(0, 0, -1, group, true)), box: [0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 1 / 16]}, {side: ICRender.AND(ICRender.BLOCK(-1, 0, 0, group, true), ICRender.BLOCK(0, 0, -1, group, true)), box: [0 / 16, 0 / 16, 0 / 16, 1 / 16, 16 / 16, 1 / 16]}, {side: ICRender.AND(ICRender.BLOCK(1, 0, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)), box: [15 / 16, 0 / 16, 15 / 16, 16 / 16, 16 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(-1, 0, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)), box: [0 / 16, 0 / 16, 15 / 16, 1 / 16, 16 / 16, 16 / 16]}, {side: ICRender.AND(ICRender.BLOCK(0, 0, -1, group, true), ICRender.BLOCK(1, 0, 0, group, true)), box: [15 / 16, 0 / 16, 0 / 16, 16 / 16, 16 / 16, 1 / 16]}, {side: ICRender.BLOCK(0, 1, 0, group, true), box: [1 / 16, 15 / 16, 1 / 16, 15 / 16, 16 / 16, 15 / 16], id: centerID}, {side: ICRender.BLOCK(0, -1, 0, group, true), box: [1 / 16, 0 / 16, 1 / 16, 15 / 16, 1 / 16, 15 / 16], id: centerID}, {side: ICRender.BLOCK(-1, 0, 0, group, true), box: [0 / 16, 1 / 16, 1 / 16, 1 / 16, 15 / 16, 15 / 16], id: centerID}, {side: ICRender.BLOCK(1, 0, 0, group, true), box: [15 / 16, 1 / 16, 1 / 16, 16 / 16, 15 / 16, 15 / 16], id: centerID}, {side: ICRender.BLOCK(0, 0, -1, group, true), box: [1 / 16, 1 / 16, 0 / 16, 15 / 16, 15 / 16, 1 / 16], id: centerID}, {side: ICRender.BLOCK(0, 0, 1, group, true), box: [1 / 16, 1 / 16, 15 / 16, 15 / 16, 15 / 16, 16 / 16], id: centerID}];
    for (var i in vidrolizopuroBorderRender) {
        var cglass = vidrolizopuroBorderRender[i];
        var gModel = BlockRenderer.createModel();
        var box = cglass.box;
        gModel.addBox(box[0], box[1], box[2], box[3], box[4], box[5], cglass.id || bordID, 0);
        render.addEntry(gModel).setCondition(cglass.side);
    }
}
createGlassConnect(BlockID.vidrolizopuro, BlockID.vidrolizo, 49, "connectGlassTec-wire");
createGlassConnect(BlockID.virodeferrot, BlockID.vidrolizoIronT, BlockID.virodeferrot, "connectGlassTec-wire");
const mesadeartesanatorender = new ICRender.Model();
const mesadeartesanatomodel = BlockRenderer.createModel();
mesadeartesanatomodel.addBox(13 / 16, 0, 13 / 16, 16 / 16, 14 / 16, 16 / 16, BlockID.mesadeartesanato, 0);
mesadeartesanatomodel.addBox(13 / 16, 0 / 16, 0 / 16, 16 / 16, 14 / 16, 3 / 16, BlockID.mesadeartesanato, 0);
mesadeartesanatomodel.addBox(0 / 16, 0 / 16, 0 / 16, 3 / 16, 14 / 16, 3 / 16, BlockID.mesadeartesanato, 0);
mesadeartesanatomodel.addBox(0 / 16, 0 / 16, 13 / 16, 3 / 16, 14 / 16, 16 / 16, BlockID.mesadeartesanato, 0);
mesadeartesanatomodel.addBox(0 / 16, 14 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, BlockID.mesadeartesanato, 0);
mesadeartesanatorender.addEntry(mesadeartesanatomodel);
BlockRenderer.setStaticICRender(BlockID.mesadeartesanato, 0, mesadeartesanatorender);
var ATGUI = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1000}}, params: {slot: "invSlot_tec_window", selection: "selection_wood2"}, drawing: [], elements: {"ClearSlot": {type: "slot", x: 720, y: 415, size: 40, bitmap: "close_tec_window_button", isTransparentBackground: true}}});
var xp = 370;
var yp = 180;
for (var i = 11; i <= 24; i++) {
    ATGUI.content.elements["slot" + i] = {type: "slot", x: xp, y: yp, size: 38};
    xp += 38;
    if (i % 10 === 0) {
        xp = 370;
        yp += 38;
    }
}
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(ATGUI, {text: "Mesa de artesanato(wood)", frame: "tec_window_frame", invSlot: "invSlot_tec_window"});
});
Block.registerDropFunction("mesadeartesanato", function () {
    return [[BlockID.mesadeartesanato, 1, 0]];
});
TileEntity.registerPrototype(BlockID.mesadeartesanato, {getGuiScreen: function () {
    return ATGUI;
}, tick: function () {
    const content = this.container.getGuiContent();
    if (content) {
        const res = Recipes.getRecipeResult(this.container) || {id: 0, count: 0, data: 0};
        this.container.setSlot("slot11", BlockID.plankcolorido, 1, 0);
        this.container.setSlot("slot12", BlockID.plankcolorido, 1, 1);
        this.container.setSlot("slot13", BlockID.plankcolorido, 1, 2);
        this.container.setSlot("slot14", BlockID.plankcolorido, 1, 5);
        this.container.setSlot("slot15", BlockID.plankcolorido, 1, 6);
        this.container.setSlot("slot16", BlockID.plankcolorido, 1, 7);
        this.container.setSlot("slot17", BlockID.plankcolorido, 1, 8);
        this.container.setSlot("slot18", BlockID.plankcolorido, 1, 9);
        this.container.setSlot("slot19", BlockID.plankcolorido, 1, 10);
        this.container.setSlot("slot20", BlockID.plankcolorido, 1, 11);
        this.container.setSlot("slot21", BlockID.plankcolorido, 1, 12);
        this.container.setSlot("slot22", BlockID.plankcolorido, 1, 13);
        this.container.setSlot("slot23", BlockID.plankcolorido, 1, 14);
        this.container.setSlot("slot24", BlockID.plankcolorido, 1, 15);
        this.container.setSlot("ClearSlot", 0, 0, 0);
    }
}, destroyBlock: function (coords) {
    this.container.setSlot("slot11", 0, 1, 0);
    this.container.setSlot("slot12", 0, 1, 1);
    this.container.setSlot("slot13", 0, 1, 2);
    this.container.setSlot("slot14", 0, 1, 5);
    this.container.setSlot("slot15", 0, 1, 6);
    this.container.setSlot("slot16", 0, 1, 7);
    this.container.setSlot("slot17", 0, 1, 8);
    this.container.setSlot("slot18", 0, 1, 9);
    this.container.setSlot("slot19", 0, 1, 10);
    this.container.setSlot("slot20", 0, 1, 11);
    this.container.setSlot("slot21", 0, 1, 12);
    this.container.setSlot("slot22", 0, 1, 13);
    this.container.setSlot("slot23", 0, 1, 14);
    this.container.setSlot("slot24", 0, 1, 15);
}});
var STONE_DECORATIVO = Block.createSpecialType({base: 1, solid: true, destroytime: 5, explosionres: 30, opaque: false, lightopacity: 0});
IDRegistry.genBlockID("tijoloquadriculado");
Block.createBlock("tijoloquadriculado", [{name: "Tijolo quadriculado", texture: [["tijoloqudriculado_pequeno", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.tijoloquadriculado, "stone", 2, true);
IDRegistry.genBlockID("tijolinhoquadriculado");
Block.createBlock("tijolinhoquadriculado", [{name: "Tijolinhos de pedra", texture: [["tijolinhos_quadriculados", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.tijolinhoquadriculado, "stone", 2, true);
IDRegistry.genBlockID("tijoloquadriculadogrande");
Block.createBlock("tijoloquadriculadogrande", [{name: "Tijolo quadriculado grande", texture: [["tijolo_quadriculado_grande", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.tijoloquadriculadogrande, "stone", 2, true);
IDRegistry.genBlockID("tijoloquadriculadoa");
Block.createBlock("tijoloquadriculadoa", [{name: "Tijolo quadriculado", texture: [["tijolo_de_pedra_a", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.tijoloquadriculadoa, "stone", 2, true);
IDRegistry.genBlockID("tijoloquadriculadob");
Block.createBlock("tijoloquadriculadob", [{name: "Tijolo quadriculado", texture: [["tijolo_de_pedra_b", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.tijoloquadriculadob, "stone", 2, true);
IDRegistry.genBlockID("tijoloquadriculadoc");
Block.createBlock("tijoloquadriculadoc", [{name: "Tijolo quadriculado", texture: [["tijolo_de_pedra_c", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.tijoloquadriculadoc, "stone", 2, true);
IDRegistry.genBlockID("tijoloquadriculadod");
Block.createBlock("tijoloquadriculadod", [{name: "Tijolo quadriculado", texture: [["tijolo_de_pedra_d", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.tijoloquadriculadod, "stone", 2, true);
IDRegistry.genBlockID("pilardepedra");
Block.createBlock("pilardepedra", [{name: "Pilar de pedra", texture: [["pilar_de_pedra", 0]], inCreative: true}], STONE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.pilardepedra, "stone", 2, true);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.tijoloquadriculadogrande, count: 4, data: 0}, ["aa", "aa"], ["a", 98, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculado, count: 9, data: 0}, ["aaa", "aaa", "aaa"], ["a", 98, 0]);
    Recipes.addShaped({id: BlockID.tijolinhoquadriculado, count: 9, data: 0}, ["aab", "bba", "aab"], ["a", 98, 0, "b", 1, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculadoa, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["a", 98, 0, "b", 1, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculadob, count: 9, data: 0}, ["aab", "bob", "baa"], ["a", 98, 0, "b", 1, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculadoc, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 98, 0, "b", 1, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculadoc, count: 9, data: 0}, ["bob", "oao", "bob"], ["a", 98, 0, "b", 1, 0]);
    Recipes.addShaped({id: BlockID.pilardepedra, count: 9, data: 0}, ["bab", "bab", "bab"], ["a", 98, 0, "b", 1, 0]);
});
var COMCRETE_DECORATIVO = Block.createSpecialType({base: 1, solid: true, destroytime: 1, explosionres: 30, opaque: false, lightopacity: 0});
IDRegistry.genBlockID("cwhite");
Block.createBlock("cwhite", [{name: "Concreto", texture: [["c_white", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cwhite, "stone", 2, true);
IDRegistry.genBlockID("cblue");
Block.createBlock("cblue", [{name: "Concreto azul", texture: [["c_blue", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cblue, "stone", 2, true);
IDRegistry.genBlockID("cbluec");
Block.createBlock("cbluec", [{name: "Concreto azul claro", texture: [["c_blue_claro", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cbluec, "stone", 2, true);
IDRegistry.genBlockID("cgreen");
Block.createBlock("cgreen", [{name: "Concreto verde", texture: [["c_verde", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cgreen, "stone", 2, true);
IDRegistry.genBlockID("cgreenclaro");
Block.createBlock("cgreenclaro", [{name: "Concreto verde claro", texture: [["c_verde_claro", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cgreenclaro, "stone", 2, true);
IDRegistry.genBlockID("cred");
Block.createBlock("cred", [{name: "Concreto vermelho", texture: [["c_vermelho", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cred, "stone", 2, true);
IDRegistry.genBlockID("cmangeta");
Block.createBlock("cmangeta", [{name: "Concreto magenta", texture: [["c_magenta", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cmangeta, "stone", 2, true);
IDRegistry.genBlockID("cpink");
Block.createBlock("cpink", [{name: "Concreto rosa", texture: [["c_rosa", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cpink, "stone", 2, true);
IDRegistry.genBlockID("cmarron");
Block.createBlock("cmarron", [{name: "Concreto marrom", texture: [["c_marrom", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cmarron, "stone", 2, true);
IDRegistry.genBlockID("claranja");
Block.createBlock("claranja", [{name: "Concreto laranja", texture: [["c_laranja", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.claranja, "stone", 2, true);
IDRegistry.genBlockID("cciano");
Block.createBlock("cciano", [{name: "Concreto Ciano", texture: [["c_ciano", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cciano, "stone", 2, true);
IDRegistry.genBlockID("ccinza");
Block.createBlock("ccinza", [{name: "Concreto Cinza", texture: [["c_cinza", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.ccinza, "stone", 2, true);
IDRegistry.genBlockID("cpreto");
Block.createBlock("cpreto", [{name: "Concreto Preto", texture: [["c_preto", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cpreto, "stone", 2, true);
IDRegistry.genBlockID("croxo");
Block.createBlock("croxo", [{name: "Concreto roxo", texture: [["c_roxo", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.croxo, "stone", 2, true);
IDRegistry.genBlockID("camarelo");
Block.createBlock("camarelo", [{name: "Concreto Amarelo", texture: [["c_amarelo", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.camarelo, "stone", 2, true);
IDRegistry.genBlockID("ccinzaescuro");
Block.createBlock("ccinzaescuro", [{name: "Concreto cinza escuro", texture: [["c_cinza_escuro", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.ccinzaescuro, "stone", 2, true);
IDRegistry.genBlockID("cbranco");
Block.createBlock("cbranco", [{name: "Concreto Branco", texture: [["cbranco", 0]], inCreative: true}], COMCRETE_DECORATIVO);
ToolAPI.registerBlockMaterial(BlockID.cbranco, "stone", 2, true);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.cbranco, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 15, "b", BlockID.cwhite, 0]);
    Recipes.addFurnace(1, 0, BlockID.cwhite, 0);
    Recipes.addShaped({id: BlockID.cblue, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 4, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cbluec, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 12, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cgreen, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 2, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cgreenclaro, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 10, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cred, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 1, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cmangeta, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 13, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cpink, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 9, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cmarron, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 3, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.claranja, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 14, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cciano, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 6, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.cpreto, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 0, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.croxo, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 5, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.camarelo, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 11, "b", BlockID.cwhite, 0]);
    Recipes.addShaped({id: BlockID.ccinzaescuro, count: 9, data: 0}, ["bbb", "bab", "bbb"], ["a", 351, 8, "b", BlockID.cwhite, 0]);
});
Block.createSpecialType({base: 5, destroytime: 2, explosionres: 0.5, opaque: false, lightopacity: 0, renderlayer: 3, lightlevel: 0}, "sabblock");
IDRegistry.genBlockID("slabtijoloquadriculado");
Block.createBlock("slabtijoloquadriculado", [{name: "tile.tijolinhos_quadriculados.name", texture: [["tijolinhos_quadriculados", 0]], inCreative: false}, {name: "laje de tijolinhos quadriculados", texture: [["tijolinhos_quadriculados", 0]], inCreative: true}, {name: "tile.tijolinhos_quadriculados.name", texture: [["tijolinhos_quadriculados", 0]], inCreative: false}, {name: "tile.tijolinhos_quadriculados.name", texture: [["tijolinhos_quadriculados", 0]], inCreative: false}, {name: "tile.tijolinhos_quadriculados.name", texture: [["tijolinhos_quadriculados", 0]], inCreative: false}, {name: "tile.tijolinhos_quadriculados.name", texture: [["tijolinhos_quadriculados", 0]], inCreative: false}], "sabblock");
IDRegistry.genBlockID("tijoloquadriculadoslab");
Block.createBlock("tijoloquadriculadoslab", [{name: "tile.Lajedetijoloquadriculado.name", texture: [["tijoloqudriculado_pequeno", 0]], inCreative: false}, {name: "Laje de tijolo quadriculado", texture: [["tijoloqudriculado_pequeno", 0]], inCreative: true}, {name: "tile.Lajedetijoloquadriculado.name", texture: [["tijoloqudriculado_pequeno", 0]], inCreative: false}, {name: "tile.Lajedetijoloquadriculado.name", texture: [["tijoloqudriculado_pequeno", 0]], inCreative: false}, {name: "tile.Lajedetijoloquadriculado.name", texture: [["tijoloqudriculado_pequeno", 0]], inCreative: false}, {name: "tile.Laje de tijolo quadriculado.name", texture: [["tijoloqudriculado_pequeno", 0]], inCreative: false}], "sabblock");
IDRegistry.genBlockID("tijoloquadriculadograndeslab");
Block.createBlock("tijoloquadriculadograndeslab", [{name: "title.tijolo_quadriculado_grande.name", texture: [["tijolo_quadriculado_grande", 0]], inCreative: false}, {name: "Laje de Tijolo quadriculado grande", texture: [["tijolo_quadriculado_grande", 0]], inCreative: true}, {name: "title.tijolo_quadriculado_grande.name", texture: [["tijolo_quadriculado_grande", 0]], inCreative: false}, {name: "title.tijolo_quadriculado_grande.name", texture: [["tijolo_quadriculado_grande", 0]], inCreative: false}, {name: "title.tijolo_quadriculado_grande.name", texture: [["tijolo_quadriculado_grande", 0]], inCreative: false}, {name: "title.tijolo_quadriculado_grande.name", texture: [["tijolo_quadriculado_grande", 0]], inCreative: false}], "sabblock");
IDRegistry.genBlockID("slabtijoloquadriculadoa");
Block.createBlock("slabtijoloquadriculadoa", [{name: "title.slabtijoloquadriculadoa.name", texture: [["tijolo_de_pedra_a", 0]], inCreative: false}, {name: "Laje de  Tijolo quadriculado", texture: [["tijolo_de_pedra_a", 0]], inCreative: true}, {name: "title.slabtijoloquadriculadoa.name", texture: [["tijolo_de_pedra_a", 0]], inCreative: false}, {name: "title.slabtijoloquadriculadoa.name", texture: [["tijolo_de_pedra_a", 0]], inCreative: false}, {name: "title.slabtijoloquadriculadoa.name", texture: [["tijolo_de_pedra_a", 0]], inCreative: false}, {name: "title.slabtijoloquadriculadoa.name", texture: [["tijolo_de_pedra_a", 0]], inCreative: false}], "sabblock");
IDRegistry.genBlockID("tijoloquadriculadobslab");
Block.createBlock("tijoloquadriculadobslab", [{name: "title.tijoloquadriculadobslab.name", texture: [["tijolo_de_pedra_b", 0]], inCreative: false}, {name: "Laje de Tijolo quadriculado", texture: [["tijolo_de_pedra_b", 0]], inCreative: true}, {name: "title.tijoloquadriculadobslab.name", texture: [["tijolo_de_pedra_b", 0]], inCreative: false}, {name: "title.tijoloquadriculadobslab.name", texture: [["tijolo_de_pedra_b", 0]], inCreative: false}, {name: "title.tijoloquadriculadobslab.name", texture: [["tijolo_de_pedra_b", 0]], inCreative: false}, {name: "title.tijoloquadriculadobslab.name", texture: [["tijolo_de_pedra_b", 0]], inCreative: false}], "sabblock");
IDRegistry.genBlockID("slabtijoloquadriculadoc");
Block.createBlock("slabtijoloquadriculadoc", [{name: "tile.slabtijoloquadriculadoc.name", texture: [["tijolo_de_pedra_c", 0]], inCreative: false}, {name: "Laje de Tijolo quadriculado", texture: [["tijolo_de_pedra_c", 0]], inCreative: true}, {name: "tile.slabtijoloquadriculadoc.name", texture: [["tijolo_de_pedra_c", 0]], inCreative: false}, {name: "tile.slabtijoloquadriculadoc.name", texture: [["tijolo_de_pedra_c", 0]], inCreative: false}, {name: "tile.slabtijoloquadriculadoc.name", texture: [["tijolo_de_pedra_c", 0]], inCreative: false}, {name: "tile.slabtijoloquadriculadoc.name", texture: [["tijolo_de_pedra_c", 0]], inCreative: false}], "sabblock");
IDRegistry.genBlockID("slabtijoloquadriculadod");
Block.createBlock("slabtijoloquadriculadod", [{name: "tile.slabtijoloquadriculadod.name", texture: [["tijolo_de_pedra_d", 0]], inCreative: false}, {name: "Laje de Tijolo quadriculado", texture: [["tijolo_de_pedra_d", 0]], inCreative: true}, {name: "tile.slabtijoloquadriculadod.name", texture: [["tijolo_de_pedra_d", 0]], inCreative: false}, {name: "tile.slabtijoloquadriculadod.name", texture: [["tijolo_de_pedra_d", 0]], inCreative: false}, {name: "tile.slabtijoloquadriculadod.name", texture: [["tijolo_de_pedra_d", 0]], inCreative: false}, {name: "tile.slabtijoloquadriculadod.name", texture: [["tijolo_de_pedra_d", 0]], inCreative: false}], "sabblock");
IDRegistry.genBlockID("slabpilardepedra");
Block.createBlock("slabpilardepedra", [{name: "title.pilar_de_pedra.name", texture: [["pilar_de_pedra", 0]], inCreative: false}, {name: "Laje de pilar de pedra", texture: [["pilar_de_pedra", 0]], inCreative: true}, {name: "title.pilar_de_pedra.name", texture: [["pilar_de_pedra", 0]], inCreative: false}, {name: "title.pilar_de_pedra.name", texture: [["pilar_de_pedra", 0]], inCreative: false}, {name: "title.pilar_de_pedra.name", texture: [["pilar_de_pedra", 0]], inCreative: false}, {name: "title.pilar_de_pedra.name", texture: [["pilar_de_pedra", 0]], inCreative: false}], "sabblock");
Block.setBlockShape(BlockID.slabtijoloquadriculado, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.slabtijoloquadriculado, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.slabtijoloquadriculado, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.slabtijoloquadriculado, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.slabtijoloquadriculado, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.slabtijoloquadriculado, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.setBlockShape(BlockID.tijoloquadriculadoslab, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.tijoloquadriculadoslab, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.tijoloquadriculadoslab, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.tijoloquadriculadoslab, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.tijoloquadriculadoslab, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.tijoloquadriculadoslab, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.setBlockShape(BlockID.tijoloquadriculadograndeslab, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.tijoloquadriculadograndeslab, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.tijoloquadriculadograndeslab, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.tijoloquadriculadograndeslab, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.tijoloquadriculadograndeslab, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.tijoloquadriculadograndeslab, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.setBlockShape(BlockID.slabtijoloquadriculadoa, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.slabtijoloquadriculadoa, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.slabtijoloquadriculadoa, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.slabtijoloquadriculadoa, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.slabtijoloquadriculadoa, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.slabtijoloquadriculadoa, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.setBlockShape(BlockID.tijoloquadriculadobslab, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.tijoloquadriculadobslab, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.tijoloquadriculadobslab, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.tijoloquadriculadobslab, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.tijoloquadriculadobslab, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.tijoloquadriculadobslab, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.setBlockShape(BlockID.slabtijoloquadriculadoc, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.slabtijoloquadriculadoc, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.slabtijoloquadriculadoc, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.slabtijoloquadriculadoc, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.slabtijoloquadriculadoc, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.slabtijoloquadriculadoc, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.setBlockShape(BlockID.slabtijoloquadriculadod, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.slabtijoloquadriculadod, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.slabtijoloquadriculadod, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.slabtijoloquadriculadod, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.slabtijoloquadriculadod, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.slabtijoloquadriculadod, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.setBlockShape(BlockID.slabpilardepedra, {x: 0, y: 8 / 16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.slabpilardepedra, {x: 0, y: 0, z: 0}, {x: 1, y: 8 / 16, z: 1}, 1);
Block.setBlockShape(BlockID.slabpilardepedra, {x: 0, y: 0, z: 8 / 16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.slabpilardepedra, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 8 / 16}, 3);
Block.setBlockShape(BlockID.slabpilardepedra, {x: 8 / 16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.slabpilardepedra, {x: 0, y: 0, z: 0}, {x: 8 / 16, y: 1, z: 1}, 5);
Block.registerDropFunction("slabtijoloquadriculado", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.slabtijoloquadriculado, 1, 1]];
});
Block.registerDropFunction("tijoloquadriculadoslab", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.tijoloquadriculadoslab, 1, 1]];
});
Block.registerDropFunction("tijoloquadriculadograndeslab", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.tijoloquadriculadograndeslab, 1, 1]];
});
Block.registerDropFunction("slabtijoloquadriculadoa", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.slabtijoloquadriculadoa, 1, 1]];
});
Block.registerDropFunction("tijoloquadriculadobslab", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.tijoloquadriculadobslab, 1, 1]];
});
Block.registerDropFunction("slabtijoloquadriculadoc", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.slabtijoloquadriculadoc, 1, 1]];
});
Block.registerDropFunction("slabtijoloquadriculadod", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.slabtijoloquadriculadod, 1, 1]];
});
Block.registerDropFunction("slabpilardepedra", function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.slabpilardepedra, 1, 1]];
});
Block.registerPlaceFunction("tijoloquadriculadoslab", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.tijoloquadriculadoslab, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Block.registerPlaceFunction("slabtijoloquadriculado", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.slabtijoloquadriculado, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Block.registerPlaceFunction("tijoloquadriculadograndeslab", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.tijoloquadriculadograndeslab, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Block.registerPlaceFunction("slabtijoloquadriculadoa", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.slabtijoloquadriculadoa, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Block.registerPlaceFunction("tijoloquadriculadobslab", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.tijoloquadriculadobslab, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Block.registerPlaceFunction("slabtijoloquadriculadoc", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.slabtijoloquadriculadoc, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Block.registerPlaceFunction("slabtijoloquadriculadod", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.slabtijoloquadriculadod, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Block.registerPlaceFunction("slabpilardepedra", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    var block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, BlockID.slabpilardepedra, coords.side);
        World.addTileEntity(x, y, z);
    }
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.slabtijoloquadriculado, count: 6, data: 1}, ["aaa"], ["a", BlockID.tijolinhoquadriculado, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculadoslab, count: 6, data: 1}, ["aaa"], ["a", BlockID.tijoloquadriculado, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculadograndeslab, count: 6, data: 1}, ["aaa"], ["a", BlockID.tijoloquadriculadogrande, 0]);
    Recipes.addShaped({id: BlockID.slabtijoloquadriculadoa, count: 6, data: 1}, ["aaa"], ["a", BlockID.tijoloquadriculadoa, 0]);
    Recipes.addShaped({id: BlockID.tijoloquadriculadobslab, count: 6, data: 1}, ["aaa"], ["a", BlockID.tijoloquadriculadob, 0]);
    Recipes.addShaped({id: BlockID.slabtijoloquadriculadoc, count: 6, data: 1}, ["aaa"], ["a", BlockID.tijoloquadriculadoc, 0]);
    Recipes.addShaped({id: BlockID.slabtijoloquadriculadod, count: 6, data: 1}, ["aaa"], ["a", BlockID.tijoloquadriculadod, 0]);
    Recipes.addShaped({id: BlockID.slabpilardepedra, count: 6, data: 1}, ["aaa"], ["a", BlockID.pilardepedra, 0]);
});

