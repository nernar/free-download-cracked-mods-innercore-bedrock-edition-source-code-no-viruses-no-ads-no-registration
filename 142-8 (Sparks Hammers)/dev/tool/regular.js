ToolType.sparks_hammer = {
    blockTypes: ["stone"],
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
        if(this.toolMaterial.infrangible){
            return true;
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool(damage);
    }
};

ToolType.sparks_excavator = {
    blockTypes: ["dirt"],
    onDestroy: ToolType.sparks_hammer.onDestroy
};


SHammer.addBasicTools("wood", "Wood", "#866526", VanillaBlockID.planks);
SHammer.addBasicTools("stone", "Stone", "#9A9A9A", VanillaBlockID.cobblestone);
SHammer.addBasicTools("iron", "Iron", "#FFFFFF", VanillaItemID.iron_ingot);
SHammer.addBasicTools("golden", "Gold", "#EAEE57", VanillaItemID.gold_ingot);
SHammer.addBasicTools("diamond", "Diamond", "#33EBCB", VanillaItemID.diamond);

Callback.addCallback("PreLoaded", function(){
    "bronze" in ToolAPI.toolMaterials && SHammer.addBasicTools("bronze", "Bronze", "#EC9D4B", ItemID.ingotBronze);
});

IDRegistry.genItemID("shammer_giant");
SHammer.genTexture("giant", "#955CC4", "hammer");
Item.createItem("shammer_giant", "Giant Hammer", {name: "shammer_giant"}, {stack: 1});
ToolLib.setTool(ItemID.shammer_giant, {level: 2, durability: 9000, efficiency: 1.8, damage: 8, range: 3}, ToolType.sparks_hammer);
SHammer.addRecipe(ItemID.shammer_giant, ["aaaaa", "aabaa"], {a: VanillaBlockID.iron_block, b: VanillaItemID.dye});//data: 5