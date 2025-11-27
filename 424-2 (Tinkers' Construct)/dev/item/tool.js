Tool.registerTool("pickaxe", "Pickaxe", ["stone"], 1, {});
Tool.registerTool("shovel", "Shovel", ["dirt"], 2, {});
Tool.registerTool("hatchet", "Hatchet", ["wood", "plant"], 3, {});
Tool.registerTool("mattock", "Mattock", ["dirt", "wood"], 4, {});
Tool.registerTool("sword", "Broadsword", ["plant"], 4, {isWeapon: true});


(function(){

	const func3x3 = function(item, coords){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		if(++toolData.uses < param.durability){
			const area = Tool.get3x3Area(coords.side);
			let blockData;
			let x = y = z = count = 0;
			for(x = coords.x - area.x; x <= coords.x + area.x; x++){
			for(y = coords.y - area.y; y <= coords.y + area.y; y++){
			for(z = coords.z - area.z; z <= coords.z + area.z; z++){
				if(!x && !y && !z){
					continue;
				}
				blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
				if(realData.blockMaterials[blockData.material ? blockData.material.name : ""] && realData.toolMaterial.level >= blockData.level){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	};

	Tool.registerTool("hammer", "Hammer", ["stone"], 3, {onDestroy: func3x3});
	Tool.registerTool("excavator", "Excavator", ["dirt"], 2, {onDestroy: func3x3});

})();


Tool.registerTool("lumberaxe", "Lumber Axe", ["wood"], 3, {
	onDestroy: function(item, coords, block){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		if(++toolData.uses < param.durability){
			const woodLog = [17, 162];
			let x = y = z = count = 0;
			if(~woodLog.indexOf(block.id)){
				x = coords.x;
				y = coords.y;
				z = coords.z;
				while(~woodLog.indexOf(World.getBlockID(x, ++y, z))){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			else{
				const area = Tool.get3x3Area(coords.side);
				let blockData;
				for(x = coords.x - area.x; x <= coords.x + area.x; x++){
				for(y = coords.y - area.y; y <= coords.y + area.y; y++){
				for(z = coords.z - area.z; z <= coords.z + area.z; z++){
					if(!x && !y && !z){
						continue;
					}
					blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
					if(realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
						World.destroyBlock(x, y, z, true);
						count++;
					}
				}
				}
				}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	}
});


Tool.registerTool("scythe", "Scythe", ["plant"], 3, {
	isWeapon: true,
	onDestroy: function(item, coords, block){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		let blockData = ToolAPI.getBlockData(block.id);
		if(++toolData.uses < param.durability && realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
			let x = y = z = count = 0;
			for(x = coords.x -1; x <= coords.x + 1; x++){
			for(y = coords.y -1; y <= coords.y + 1; y++){
			for(z = coords.z -1; z <= coords.z + 1; z++){
				if(!x && !y && !z){
					continue;
				}
				blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
				if(realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	},
	onAttack: function(item, ent, modifier){
		const realData = ToolAPI.getToolData(item.id);
		const defDamage = realData.damage + realData.toolMaterial.damage;
		const entity = Entity.getAllInRange(Entity.getPosition(ent), 1.5);
		const angle = Entity.getLookAngle(player);
		angle.yaw = 0.2;
		let time = random = damage = health = 0;
		modifier.piston += 5;
		for(let i = entity.length; i--;){
			if(entity[i] == ent || Entity.isAbiosis(entity[i])){
				continue;
			}
			time = modifier.blaze % 5 * 20 + modifier.lava;
			if(time){
				Entity.setFire(entity[i], time);
			}
			Entity.moveToAngle(entity[i], angle, {speed: modifier.piston / 10});
			if(modifier.necrotic){
				Entity.healEntity(player, modifier.necrotic * 2);
			}
			random = Math.random() * 2 + 2;
			damage = defDamage;
			if(Entity.isArthropod(entity[i]) && modifier.spider){
				damage += random * modifier.spider / 4;
			}
			else if(Entity.isUndead(entity[i]) && modifier.smite){
				damage += random * modifier.smite / 36;
			}
			damage = (damage | 0) + (Math.random() < damage - (damage | 0) ? 1 : 0);
			health = Entity.getHealth(entity[i]);
			Entity.setHealth(entity[i], health - Math.min(damage, health));
		}
	}
});


Tool.registerTool("battleaxe", "Battle Axe", ["wood"], 4, {
	isWeapon: true,
	onDestroy: function(item, coords, block){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		if(++toolData.uses < param.durability){
			const area = Tool.get3x3Area(coords.side);
			let blockData;
			let x = y = z = count = 0;
			for(let key in area){
				area[key] *= 4;
			}
			for(x = coords.x - area.x; x <= coords.x + area.x; x++){
			for(y = coords.y - area.y; y <= coords.y + area.y; y++){
			for(z = coords.z - area.z; z <= coords.z + area.z; z++){
				if(!x && !y && !z){
					continue;
				}
				blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
				if(realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	}
});


Item.registerNoTargetUseFunction("tinkers_battleaxe", function(){
	const coords = Player.getPosition();
	const angle = Entity.getLookAngle(player);
	const vec = Entity.getLookVectorByAngle(angle);
	for(let i = 0; i < 8; i++){
		coords.x += vec.x;
		coords.y += vec.y;
		coords.z += vec.z;
		if(World.getBlockID(coords.x, coords.y, coords.z)){
			return;
		}
	}
	Entity.moveToAngle(player, {yaw: angle.yaw, pitch: 0.1}, {speed: 3});
	Entity.addEffect(player, 17, 0, 80);
	Entity.addEffect(player, 1, 0, 160);
	Entity.addEffect(player, 5, 0, 160);
	Entity.addEffect(player, 8, 0, 160);
});