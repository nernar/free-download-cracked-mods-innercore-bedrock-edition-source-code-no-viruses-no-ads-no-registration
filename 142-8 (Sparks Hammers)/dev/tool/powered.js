/*
IDRegistry.genItemID("shammer_upg_base");
Item.createItem("shammer_upg_base", "Upgrade Base", {name: "shammer_upg_base"});
Recipes2.addShaped(ItemID.shammer_upg_base, "aba:bcb:aba", {a: VanillaItemID.iron_ingot, b: VanillaItemID.gold_ingot, c: VanillaItemID.diamond});

IDRegistry.genItemID("shammer_upg_size");
Item.createItem("shammer_upg_size", "Size Upgrade", {name: "shammer_upg_size"}, {stack: 2});
Recipes2.addShaped(ItemID.shammer_upg_size, "_a_:aba:_a_", {a: ItemID.shammer_stone, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_speed");
Item.createItem("shammer_upg_speed", "Spped Upgrade", {name: "shammer_upg_speed"}, {stack: 3});
Recipes2.addShaped(ItemID.shammer_upg_speed, "_a_:aba:_a_", {a: VanillaItemID.sugar, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_attack");
Item.createItem("shammer_upg_attack", "Attack Upgrade", {name: "shammer_upg_attack"}, {stack: 3});
Recipes2.addShaped(ItemID.shammer_upg_attack, "_a_:aba:_a_", {a: VanillaItemID.stone_sword, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_harvest");
Item.createItem("shammer_upg_harvest", "Harvest Upgrade", {name: "shammer_upg_harvest"}, {stack: 1});
Recipes2.addShaped(ItemID.shammer_upg_harvest, "_a_:aba:_a_", {a: VanillaItemID.diamond, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_capacity");
Item.createItem("shammer_upg_capacity", "Capacity Upgrade", {name: "shammer_upg_capacity"}, {stack: 4});
Recipes2.addShaped(ItemID.shammer_upg_capacity, "_a_:aba:_a_", {a: VanillaBlockID.redstone_block, b: ItemID.shammer_upg_base});

Item.addCreativeGroup("sparks_upgrade", "Powered Hammer Upgrades", [
    ItemID.shammer_upg_size,
    ItemID.shammer_upg_speed,
    ItemID.shammer_upg_attack,
    ItemID.shammer_upg_harvest,
    ItemID.shammer_upg_capacity,
]);

const getCodeFromUpgrade = function(upg){
    return upg.size << 12 | upg.speed << 9 | upg.attack << 6 | upg.harvest << 3 | upg.capacity << 0;
};

const getUpgradeFromCode = function(code){
    return {
        size: code >> 12,
        speed: (code & 4095) >> 9,
        attack: (code & 511) >> 6,
        harvest: (code & 63) >> 3,
        capacity: code & 7
    };
};

let windowUpgrade;

(function(){

    const elements = {
        close: {type: "closeButton", x: 928, y: 0, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 4},
        slot0: {type: "slot", x: 200, y: 110, size: 120, bitmap: "shammer.slot_size", isValid: function(id){return id === ItemID.shammer_upg_size}},
        slot1: {type: "slot", x: 320, y: 110, size: 120, bitmap: "shammer.slot_speed", isValid: function(id){return id === ItemID.shammer_upg_speed}},
        slot2: {type: "slot", x: 440, y: 110, size: 120, bitmap: "shammer.slot_attack", isValid: function(id){return id === ItemID.shammer_upg_attack}},
        slot3: {type: "slot", x: 560, y: 110, size: 120, bitmap: "shammer.slot_harvest", isValid: function(id){return id === ItemID.shammer_upg_harvest}},
        slot4: {type: "slot", x: 680, y: 110, size: 120, bitmap: "shammer.slot_capacity", isValid: function(id){return id === ItemID.shammer_upg_capacity}}
    };

    for(i = 9; i <= 44; i++){
		elements["invSlot" + i] = {
			type: "invSlot",
			x: 50 + (i % 9) * 100,
			y: 210 + (i / 9 | 0) * 100,
			size: 100,
			index: i
		};
    }
    
    const font = {color: Color.BLACK, size: 40};

    windowUpgrade = new UI.Window({
        location: {x: 200, y: 50, width: 600, height: 450},
        drawing: [
            {type: "background", color: Color.TRANSPARENT},
            {type: "frame", x: 0, y: 0, width: 1000, height: 750, bitmap: "default_frame_bg_light", scale: 6},
            {type: "text", x: 50, y: 60, text: "Upgrade", font: font},
			{type: "text", x: 50, y: 300, text: "Inventory", font: font},
        ],
        elements: elements
    });

})();

windowUpgrade.setBlockingBackground(true);

windowUpgrade.setEventListener({
    onOpen: function(window){
        const item = Player.getCarriedItem();
        const elements = window.getElements();
        const code = item.extra ? item.extra.getInt("upgrade") : 0;
        const upg = getUpgradeFromCode(code);
        elements.get("slot0").onBindingUpdated("source", upg.size ? {id: ItemID.shammer_upg_size, count: upg.size, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot1").onBindingUpdated("source", upg.speed ? {id: ItemID.shammer_upg_speed, count: upg.speed, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot2").onBindingUpdated("source", upg.attack ? {id: ItemID.shammer_upg_attack, count: upg.attack, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot3").onBindingUpdated("source", upg.harvest ? {id: ItemID.shammer_upg_harvest, count: upg.harvest, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot4").onBindingUpdated("source", upg.capacity ? {id: ItemID.shammer_upg_capacity, count: upg.capacity, data: 0} : {id: 0, count: 0, data: 0});
    },
    onClose: function(window){
        const item = Player.getCarriedItem();
        const elements = window.getElements();
        let code = 0;
        for(let i = 0; i < 5; i++){
            code |= elements.get("slot" + i).source.count << (12 - i * 3);
        }
        if(!item.extra){
            item.extra = new ItemExtraData();
        }
        item.extra.putInt("upgrade", code);
    }
});


ToolType.powered_hammer = {
    blockTypes: ["stone"],
    calcDestroyTime: function(item, coords, block, params, destroyTime){
        return ChargeItemRegistry.getEnergyStored(item) < this.toolMaterial.energyPerUse ? params.base : destroyTime;
    },
    onDestroy: function(item, coords, block){
        let rangeX = rangeY = rangeZ = this.toolMaterial.range;
        switch(coords.side & 6){
            case 0: rangeY = 0; break;
            case 2: rangeZ = 0; break;
            case 4: rangeX = 0; break;
        }
        let x = y = z = yy = damage = 0;
        for(x = coords.x - rangeX; x <= coords.x + rangeX; x++){
        for(y = coords.y - rangeY; y <= coords.y + rangeY; y++){
        for(z = coords.z - rangeZ; z <= coords.z + rangeZ; z++){
            yy = coords.side < 2 ? y : y + rangeY - 1;
            if((x !== coords.x || yy !== coords.y || z !== coords.z) && this.blockMaterials[ToolAPI.getBlockMaterialName(World.getBlockID(x, yy, z))]){
                World.destroyBlock(x, yy, z, true);
                damage++;
            }
        }
        }
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool(damage);
    },
    onBroke: function(){
        return true;
    },
    onAttack: function(){
        return true;
    }
}


IDRegistry.genItemID("shammer_powered");
Item.createItem("shammer_powered", "Powered Hammer", {name: "shammer_iron"}, {stack: 1});
Item.registerUseFunction("shammer_powered", function(){
    Entity.getSneaking(player) && windowUpgrade.open();
})
ChargeItemRegistry.registerExtraItem(ItemID.shammer_powered, "Eu", 100000, 100, 1, "tool", true, true);
ToolLib.setTool(ItemID.shammer_powered, {level: 2, efficiency: 3, damage: 3, range: 1, energyPerUse: 100}, ToolType.powered_hammer);
SHammer.addRecipe({id: ItemID.shammer_powered, data: 27}, ["abcba", "acdca"], {a: VanillaItemID.iron_ingot, b: VanillaBlockID.iron_block, c: VanillaItemID.gold_ingot, d: VanillaBlockID.redstone_block});
*/