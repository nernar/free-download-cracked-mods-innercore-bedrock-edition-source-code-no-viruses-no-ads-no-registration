ToolType.netherstar_hammer = {
    blockTypes: ["stone"],
    onDestroy: function(item, coords, block){
        const direction = {x: 0, y: 0, z: 0};
        let rangeX = rangeY = rangeZ = 1;
        switch(coords.side & 6){
            case 0: rangeY = 0; direction.y = coords.side & 1 ? -1 : 1; break;
            case 2: rangeZ = 0; direction.z = coords.side & 1 ? -1 : 1; break;
            case 4: rangeX = 0; direction.x = coords.side & 1 ? -1 : 1; break;
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool();
        new Thread(function(){
            let x = y = z = xx = yy = zz = 0;
            for(let i = 0; i < 16; i++){
                for(x = coords.x - rangeX; x <= coords.x + rangeX; x++){
                for(y = coords.y - rangeY; y <= coords.y + rangeY; y++){
                for(z = coords.z - rangeZ; z <= coords.z + rangeZ; z++){
                    xx = x + direction.x * i;
                    yy = y + direction.y * i;
                    zz = z + direction.z * i;
                    (xx !== coords.x || yy !== coords.y || zz !== coords.z) && ToolAPI.getBlockMaterialName(World.getBlockID(xx, yy, zz)) === "stone" && World.destroyBlock(xx, yy, zz, true);
                }
                }
                }
                Thread.sleep(200);
            }
        }).start();
    }
};


IDRegistry.genItemID("shammer_netherstar");
Item.createItem("shammer_netherstar", "Netherstar Hammer", {name: "shammer_netherstar"}, {stack: 1});
Item.setGlint("shammer_netherstar", true);
ToolLib.setTool(ItemID.shammer_netherstar, {level: 3, durability: 10, efficiency: 5, damage: 40}, ToolType.netherstar_hammer);
SHammer.addRecipe(ItemID.shammer_netherstar, ["aabaa", "abcba"], {a: VanillaItemID.diamond, b: VanillaBlockID.gold_block, c: VanillaItemID.netherstar});