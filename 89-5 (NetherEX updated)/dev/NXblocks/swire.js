var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var CRAFTING_TOOL_MAX_DAMAGE = 96;

IDRegistry.genItemID("craftingHammer");
Item.createItem("craftingHammer", "Forge Hammer", {name: "crafting_hammer"}, {stack: 1});
Item.setMaxDamage(ItemID.craftingHammer, CRAFTING_TOOL_MAX_DAMAGE);

IDRegistry.genItemID("craftingCutter");
Item.createItem("craftingCutter", "Cutter", {name: "crafting_cutter"}, {stack: 1});
Item.setMaxDamage(ItemID.craftingCutter, CRAFTING_TOOL_MAX_DAMAGE);

function addRecipeWithCraftingTool(result, data, tool){
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function(api, field, result){
        for (var i in field){
            if (field[i].id == tool){
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_MAX_DAMAGE){
                    field[i].id = field[i].count = field[i].data = 0;
                }
            }
            else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}

IDRegistry.genBlockID("cableSilver");
Block.createBlock("cableSilver", [
    {name: "tile.cableSilver.name", texture: [["cable_block_silver", 0]], inCreative: false}]);

function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

function setupBlockAsWire(id) {
    EU.registerWire(id);
}    

setupBlockAsWire(BlockID.cableSilver);
setupWireRender(BlockID.cableSilver, 3/8, "ic-wire");

IDRegistry.genItemID("cableSilver0");
IDRegistry.genItemID("cableSilver1");
Item.createItem("cableSilver0", "Silver Cable", {name: "cable_silver", meta: 0});
Item.createItem("cableSilver1", "Silver Cable (insulated)", {name: "cable_silver", meta: 1});
Callback.addCallback("PostLoaded", function(){
addRecipeWithCraftingTool({id: ItemID.cableSilver0, count: 4, data: 0}, [{id: ItemID.plateSilver, data: 0}], ItemID.craftingCutter);
addRecipeWithCraftingTool({id: ItemID.casingSilver, count: 4, data: 0}, [{id: ItemID.plateSilver, data: 0}], ItemID.craftingHammer);
addRecipeWithCraftingTool({id: ItemID.plateSilver, count: 4, data: 0}, [{id: ItemID.ingotSilver, data: 0}], ItemID.craftingHammer);        
});

Recipes.addShaped({id: ItemID.cableSilver1, count: 1, data: 0}, [
 "ooo",
 "dco",
 "ooo"
 ], ["c", ItemID.cableSilver0, 0, "d", ItemID.rubber, 0]);

Item.registerUseFunction("cableSilver1", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.cableSilver);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        EnergyTypeRegistry.onWirePlaced();
    }
});

Block.registerDropFunction("cableSilver", function(){

    return [[ItemID.cableSilver1, 1, 0]];
});
