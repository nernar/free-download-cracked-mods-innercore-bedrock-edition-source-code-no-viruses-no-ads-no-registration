ToolType.mini_hammer = {
    blockTypes: ["stone"],
    getAxis: function(side){
        const sneak = Entity.getSneaking(player);
        if(side < 2){
            let yaw = ((Entity.getLookAngle(player).yaw * 180 / Math.PI) - 45) / 90;
		    yaw < 0 && yaw--;
            yaw &= 1;
            let flag = !!yaw;
            if(sneak){
                flag = !flag;
            }
            return flag ? "z" : "x";
        }
        return sneak ? side >= 4 ? "z" : "x" : "y";
    },
    onDestroy: function(item, coords, block){
        const axis = this.getAxis(coords.side);
        const coords2 = {x: 0, y: 0, z: 0};
        let damage = 0;
        for(coords2[axis] = -1; coords2[axis] <= 1; coords2[axis]++){
            if(coords2[axis] !== 0 && this.blockMaterials[ToolAPI.getBlockMaterialName(World.getBlockID(coords.x + coords2.x, coords.y + coords2.y, coords.z + coords2.z))]){
                World.destroyBlock(coords.x + coords2.x, coords.y + coords2.y, coords.z + coords2.z, true);
                damage++;
            }
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool(damage);
    }
};


IDRegistry.genItemID("shammer_mini");
Item.createItem("shammer_mini", "Mini Hammer", {name: "shammer_mini"}, {stack: 1});
ToolLib.setTool(ItemID.shammer_mini, {level: 2, durability: 750, efficiency: 3.6, damage: 3.5}, ToolType.mini_hammer);
SHammer.addRecipe(ItemID.shammer_mini, ["_aaa_", "_aaa_"], {a: VanillaItemID.iron_ingot});