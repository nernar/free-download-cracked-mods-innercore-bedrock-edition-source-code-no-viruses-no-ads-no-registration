const Tinco = {

	liquid: ["water", "lava", "obsidian", "iron", "gold", "copper", "tin", "aluminum", "cobalt", "ardite", "bronze", "alubrass", "alumite", "manyullyn"],

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
	},

	createTableModel: function(id, i){
		let render, model;
		for(; i--;){
			render = new ICRender.Model();
			model = BlockRenderer.createModel();
			model.addBox(00/16, 12/16, 00/16, 16/16, 16/16, 16/16, id, i);
			model.addBox(00/16, 00/16, 00/16, 04/16, 12/16, 04/16, id, i);
			model.addBox(00/16, 00/16, 12/16, 04/16, 12/16, 16/16, id, i);
			model.addBox(12/16, 00/16, 00/16, 16/16, 12/16, 04/16, id, i);
			model.addBox(12/16, 00/16, 12/16, 16/16, 12/16, 16/16, id, i);
			render.addEntry(model);
			BlockRenderer.setStaticICRender(id, i, render);
		}
	},

	createBerry: function(id, name, isOre){

		id = "berry_" + id;

		IDRegistry.genBlockID(id);
		Block.createBlock(id, [
			{name: name + " Bush", texture: [[id, 0]], inCreative: true},
			{name: "", texture: [[id, 0]]},
			{name: "", texture: [[id, 0]]},
			{name: "", texture: [[id + "_ripe", 0]]}
		]);
		Block.setShape(BlockID[id], 04/16, 00/16, 04/16, 12/16, 08/16, 12/16, 0);
		Block.setShape(BlockID[id], 02/16, 00/16, 02/16, 14/16, 12/16, 14/16, 1);
		BlockRenderer.setCustomCollisionShape(BlockID[id], -1, new ICRender.CollisionShape());
		ToolAPI.registerBlockMaterial(BlockID[id], "plant");
		Block.setDestroyTime(BlockID[id], 2);

		IDRegistry.genItemID(id);
		Item.createItem(id, name, {name: id});

		if(isOre){
			Block.registerPlaceFunction(id, function(coords, item){
				Game.prevent();
				const c = coords.relative;
				if(World.getLightLevel(c.x, c.y, c.z) < 13 && GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
					World.setBlock(c.x, c.y, c.z, BlockID[id]);
				}
			});
			Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data){
				data < 4 && Math.random() < 0.5 && World.getLightLevel(x, y, z) < 10 && World.setBlock(x, y, z, id, data + 1);
			});
		}
		else{
			Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data){
				data < 4 && Math.random() < 0.5 && World.setBlock(x, y, z, id, data + 1);
			});
		}

		Block.registerDropFunction(id, function(){
			return [BlockID[id], 1];
		});

		Block.registerClickFunction(id, function(coords, item, block){
			if(block.data == 3){
				const relative = coords.relative
				World.setBlock(coords.x, coords.y, coords.z, BlockID[id], 2);
				World.drop(relative.x + 0.5, relative.y + 0.5, relative.z + 0.5, ItemID[id], 1);
			}
		});

	},

	addNuggetRecipe: function(ingot, nugget){
		Recipes.addShaped({id: ingot}, ["aaa", "aaa", "aaa"], ["a", nugget, 0]);
		Recipes.addShaped({id: nugget, count: 9}, ["a"], ["a", ingot, 0]);
	}

};


Tinco.registerLiquid("alubrass", "Aluminum Brass");
Tinco.registerLiquid("aluminum");
Tinco.registerLiquid("alumite");
Tinco.registerLiquid("ardite");
Tinco.registerLiquid("bronze");
Tinco.registerLiquid("cobalt");
Tinco.registerLiquid("copper");
Tinco.registerLiquid("gold");
Tinco.registerLiquid("iron");
Tinco.registerLiquid("manyullyn");
Tinco.registerLiquid("obsidian");
Tinco.registerLiquid("tin");