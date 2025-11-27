const PalaCraft = {

	liquid: ["Paladium", "SulfuricWater"],

	getLiquidY: function(liquid){
		return this.liquid.indexOf(liquid) * 32;
	},

	registerLiquid: function(material, name){
		name = name || material.charAt(0).toUpperCase() + material.slice(1);
		const id = "bucket_" + material;
		IDRegistry.genItemID(id);
		Item.createItem(id, name + " Bucket", {name: id}, {stack: 1});
		LiquidRegistry.registerLiquid(material, name, ["liquid." + material]);
		LiquidRegistry.registerItem(material, {id: 325, data: 0}, {id: ItemID[id], data: 0});
	},

	placeFunction: function(coords, item){
		const c = coords.relative;
		Game.prevent();
		if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
			World.setBlock(c.x, c.y, c.z, item.id, item.data);
			World.addTileEntity(c.x, c.y, c.z);
		}
	}
	
PalaCraft.registerLiquid("SulfuricWater");
PalaCraft.registerLiquid("Paladium");