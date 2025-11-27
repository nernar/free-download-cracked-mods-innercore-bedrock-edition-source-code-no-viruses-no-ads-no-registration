const Tool = {

	startupMeta: {},
	toolData : {},

	level: ["", "Stone", "Iron", "Redstone", "Obsidian", "Cobalt", "Manyullyn"],

	param: {
		Wooden: {durability: 97, modifier: 1, efficiency: 3.5, level: 2, damage: 0},
		Stone: {durability: 131, modifier: 0.5, efficiency: 4, level: 2, damage: 1, trait: {name: "Stonebound", level: 1}},
		Iron: {durability: 250, modifier: 1.3, efficiency: 6, level: 3, damage: 2, trait: {name: "Reinforced", level: 1}},
		Flint: {durability: 171, modifier: 0.7, efficiency: 5.25, level: 2, damage: 2},
		Cactus: {durability: 150, modifier: 1, efficiency: 5, level: 2, damage: 2, trait: {name: "Jagged", level: 1}},
		Bone: {durability: 200, modifier: 1, efficiency: 4, level: 2, damage: 1},
		Obsidian: {durability: 89, modifier: 0.8, efficiency: 7, level: 4, damage: 2, trait: {name: "Reinforced", level: 3}},
		Netherrack: {durability: 131, modifier: 1.2, efficiency: 4, level: 3, damage: 1, trait: {name: "Stonebound", level: 1}},
		Slime: {durability: 500, modifier: 1.5, efficiency: 1.5, level: 1, damage: 0, trait: {name: "Slimy", level: 1}},
		Paper: {durability: 30, modifier: 0.3, efficiency: 2, level: 1, damage: 0, trait: {name: "Writable", level: 1}},
		Cobalt: {durability: 800, modifier: 1.75, efficiency: 14, level: 5, damage: 3, trait: {name: "Reinforced", level: 2}},
		Ardite: {durability: 500, modifier: 2, efficiency: 8, level: 5, damage: 3, trait: {name: "Stonebound", level: 2}},
		Manyullyn: {durability: 1200, modifier: 2.5, efficiency: 9, level: 6, damage: 4},
		Copper: {durability: 180, modifier: 1.15, efficiency: 5, level: 2, damage: 2},
		Bronze: {durability: 550, modifier: 1.3, efficiency: 8, level: 3, damage: 2, trait: {name: "Reinforced", level: 1}},
		Alumite: {durability: 700, modifier: 1.3, efficiency: 8, level: 5, damage: 3, trait: {name: "Reinforced", level: 2}}
	},

	partData: {},
	partName: {
		rod: {name: " Tool Rod", cost: 0.5},
		pickaxe: {name: " Pickaxe Head", cost: 1},
		shovel: {name: " Shovel Head", cost: 1},
		hatchet: {name: " Axe Head", cost: 1},
		sword: {name: " Sword Blade", cost: 1},
		guard: {name: " Wide Guard", cost: 0.5},
		binding: {name: " Tool Binding", cost: 0.5},
		rod2: {name: " Tough Rod", cost: 3},
		binding2: {name: " Tough Binding", cost: 3},
		plate: {name: " Large Plate", cost: 8},
		lumberaxe: {name: " Broadaxe Head", cost: 8},
		scythe: {name: " Scythe Head", cost: 8},
		excavator: {name: " Excavator Head", cost: 8},
		hammer: {name: " Hammer Head", cost: 8}
	},
	createAllPart: function(name, isMetal){
		const material = name.toLowerCase();
		let id = "";
		for(let key in this.partName){
			id = "part_" + key + "_" + material;
			IDRegistry.genItemID(id);
			Item.createItem(id, name + this.partName[key].name, {name: id});
			this.partData[ItemID[id]] = {type: key, material: name};
			Material.registerShape(key, ItemID[id]);
			Material.registerMaterial(ItemID[id], -1, material, this.partName[key].cost, key, isMetal);
			Material.addMeltingRecipe(ItemID[id], material, this.partName[key].cost * 144 / 1000);
		}
	},

	getPartData: function(id){
		return this.partData[id];
	},


	createTool: function(type, material){
		let path = __dir__ + "res/items-opaque/tool/meta.json"
		const meta = FileTools.ReadJSON(path);
		meta[type]++;
		FileTools.WriteJSON(path, meta);
		if(!this.toolData[type]){
			this.toolData[type] = {};
		}
		this.toolData[type][meta[type]] = {
			material: material,
			uses: 0,
			repair: 0,
			slot: 3,
			modifier: []
		};
		path = __dir__ + "res/items-opaque/tool/tinkers_" + type + "_";
		FileTools.WriteImage(path + meta[type] + ".png", UI.TextureSource.get(type + "-" + material.join("_")));
		FileTools.WriteImage(path + "broken_" + meta[type] + ".png", Bmp.createTool(type, material, type == "hammer" ? 1 : 0));
		return meta[type];
	},


	modifier: {
		diamond: {name: "Diamond", max: 1, multi: false},
		emerald: {name: "Emerald", max: 1, multi: false},
		redstone: {name: "Haste", max: 50, multi: true},
		moss: {name: "Auto-Repair", max: 1, multi: true},
		lava: {name: "Auto-Smelt", max: 1, multi: false, compatible: ["silky"]},
		lapis: {name: "Luck", max: 450, multi: false, compatible: ["silky"]},
		quartz: {name: "Sharpness", max: 72, multi: true},
		blaze: {name: "Fiery", max: 25, multi: true},
		necrotic: {name: "Necrotic", max: 1, multi: true},
		silky: {name: "Silky", max: 1, multi: false, compatible: ["lava", "lapis"]},
		reinforced: {name: "Reinforced", max: 1, multi: true},
		piston: {name: "Knockback", max: 10, multi: true},
		head: {name: "Beheading", max: 1, multi: true},
		spider: {name: "Bane of Arthropods", max: 4, multi: true},
		smite: {name: "Smite", max: 36, multi: true},
	},

	modifierRecipe: {},
	addModifierRecipe: function(result, item1, item2){
		item2.id = item2.id || 0;
		if(!("data" in item1) && !("data" in item2)){
			this.modifierRecipe[item1.id + "," + item2.id] = result;
			this.modifierRecipe[item2.id + "," + item1.id] = result;
			return;
		}
		item1.data = item1.data || 0;
		item2.data = item2.data || 0;
		this.modifierRecipe[item1.id + ":" + item1.data + "," + item2.id + item2.data] = result;
		this.modifierRecipe[item2.id + ":" + item2.data + "," + item1.id + item1.data] = result;
	},
	getModifierRecipe: function(item1, item2){
		return this.modifierRecipe[item1.id + "," + item2.id] || this.modifierRecipe[item1.id + ":" + item1.data + "," + item2.id + item2.data];
	},


	getToolType: function(id){
		return this.toolType[id];
	},
	getToolData: function(id, data){
		const type = this.getToolType(id);
		if(type){
			return this.toolData[type][data];
		}
	},

	getTrait: function(material){
		const trait = {
			Reinforced: 0,
			Stonebound: 0,
			Jagged: 0,
			Writable: 0,
			Slimy: 0
		};
		let traitData;
		for(let i = material.length; i--;){
			traitData = this.param[material[i]].trait;
			if(traitData && trait[traitData.name] < traitData.level){
				trait[traitData.name] = traitData.level;
			}
		}
		return trait;
	},

	getParam: function(id, toolData){
		const part = [
			this.param[toolData.material[0]] || {},
			this.param[toolData.material[1]] || {},
			this.param[toolData.material[2]] || {},
			this.param[toolData.material[3]] || {}
		];
		const param = {
			durability: 0,
			efficiency: part[0].efficiency,
			level: part[0].level,
			damage: part[0].damage
		};
		switch(id){
			default:
				param.durability = part[0].durability * part[1].modifier;
			break;
			case ItemID.tinkers_mattock:
				param.durability = (part[0].durability + part[2].durability) * 0.75 * part[1].modifier;
			break;
			case ItemID.tinkers_lumberaxe:
				param.durability = (part[0].durability + part[2].durability) * 0.5625 * (part[1].modifier + part[3].modifier) * 2.5;
			break;
			case ItemID.tinkers_excavator:
				param.durability = (part[0].durability + part[2].durability) * 0.5625 * (part[1].modifier + part[3].modifier) * 2.75;
			break;
			case ItemID.tinkers_hammer:
				param.durability = (part[0].durability + part[2].durability + part[3].durability) * 3 * part[1].modifier;
				param.efficiency = (part[0].efficiency + part[2].efficiency + part[3].efficiency) / 7.5;
			break;
			case ItemID.tinkers_scythe:
				param.durability = part[0].durability * 3 * (part[1].modifier + part[2].modifier + part[3].modifier);
			break;
		}
		let redstone = quartz = 0;
		for(let i = 0; i < toolData.modifier.length; i++){
			switch(toolData.modifier[i].name){
				case "diamond":
					param.durability += 500;
					param.level = Math.max(param.level, 4);
				break;
				case "emerald":
					param.durability *= 1.5;
					param.level = Math.max(param.level, 3);
				break;
				case "redstone":
					redstone +=  toolData.modifier[i].level;
				break;
				case "quartz":
					quartz +=  toolData.modifier[i].level;
				break;
			}
		}

		let flag10 = flag20 = false;

		for(; redstone--;){
			flag10 = param.efficiency <= 10;
			flag20 = param.efficiency <= 20;
			param.efficiency += (flag10 ? 0.15 : flag20 ? 0.1 : 0.05) - (flag20 ? 0.05 * param.efficiency / (flag10 ? 10 : 20) : 0);
		}

		for(; quartz--;){
			flag10 = param.damage <= 10;
			flag20 = param.damage <= 20;
			param.damage += (flag10 ? 0.05 : flag20 ? 0.025 : 0.015) - (flag10 ? 0.025 : flag20 ? 0.01 : 0) * (param.damage / (flag10 ? 10 : 20));
		}

		const trait = this.getTrait(toolData.material);
		const bonus = Math.log(toolData.uses / 72 + 1) * 2;
		param.efficiency = Math.max(0, param.efficiency + bonus * (trait.Stonebound - trait.Jagged));
		param.damage = Math.max(0, param.damage + bonus * (trait.Jagged - trait.Stonebound));
		param.durability |= 0;
		return param;
	},


	damageTool: function(toolData, max, point){
		const trait = this.getTrait(toolData.material);
		let reinforced = 0;
		for(let i = toolData.modifier.length; i--;){
			if(toolData.modifier[i].name == "reinforced"){
				reinforced++;
			}
		}
		if(Math.random() > (trait.Reinforced + reinforced) * 0.1){
			toolData.uses = Math.min(max, toolData.uses + point);
		}
	},


	toolType: {},
	registerTool: function(type, name, blockMaterial, damage, option){

		const key = "tinkers_" + type
		const id = IDRegistry.genItemID(key);
		Item.createItem(key, name, {name: "stick"}, {stack: 1, isTech: true});

		this.toolType[id] = type;

		Item.registerIconOverrideFunction(id, function(item){
			if(item.data > Tool.startupMeta[type]){
				return {name: "tinkers_missing"};
			}
			const toolData = Tool.getToolData(item.id, item.data);
			const param = Tool.getParam(item.id, toolData);
			let name = "tinkers_" + type;
			if(toolData.uses >= param.durability){
				name += "_broken";
			}
			return {name: name, meta: item.data};
		});

		Item.registerNameOverrideFunction(id, function(item, defName){
			let newName = defName;
			const toolData = Tool.getToolData(item.id, item.data);
			if(toolData){
				const param = Tool.getParam(item.id, toolData);
				newName = toolData.material[0] + " " + defName + "  " + (param.durability - toolData.uses) + " / " + param.durability;
			}
			return newName;
		});

		ToolAPI.registerTool(id, {efficiency: 0, durability: 0, level: 0, damage: 0}, blockMaterial, {
			damage: damage,

			calcDestroyTime: option.calcDestroyTime || function(item, coords, block, timeData){
				const realData = ToolAPI.getToolData(item.id);
				const toolData = Tool.getToolData(item.id, item.data);
				if(!toolData){
					realData.toolMaterial.level = 0;
					return timeData.base;
				}
				const param = Tool.getParam(item.id, toolData);
				const blockData = ToolAPI.getBlockData(block.id);
				if(toolData.uses >= param.durability || !realData.blockMaterials[blockData.material.name] || param.level < blockData.level){
					realData.toolMaterial.level = 0;
					return timeData.base;
				}
				realData.toolMaterial.level = param.level;
				return timeData.base / param.efficiency;
			},

			onDestroy: option.onDestroy || function(item){
				const toolData = Tool.getToolData(item.id, --item.data);
				toolData && Tool.damageTool(toolData, Tool.getParam(item.id, toolData).durability, option.isWeapon ? 2 : 1);
			},

			onMineBlock: function(coords, item, block){
				const toolData = Tool.getToolData(item.id, item.data);
				toolData && Math.random() < 0.0033 * 1000 && Tool.getTrait(toolData.material).Slimy && Entity.spawn(coords.x + 0.5, coords.y, coords.z + 0.5, 37);
			},

			onAttack: function(item, ent){
				item.data -= 2;
				const realData = ToolAPI.getToolData(item.id);
				const toolData = Tool.getToolData(item.id, item.data);
				if(!toolData){
					realData.toolMaterial.damage = 0;
					return;
				}
				const param = Tool.getParam(item.id, toolData);
				if(toolData.point >= param.durability){
					realData.toolMaterial.damage = 0;
					return;
				}
				realData.toolMaterial.damage = param.damage;
				Tool.damageTool(toolData, param.durability, option.isWeapon ? 1 : 2);

				const modifier = {
					blaze: 0,
					lava: 0,
					piston: 0,
					necrotic: 0,
					spider: 0,
					smite: 0
				};

				for(let i = toolData.modifier.length; i--;){
					switch(toolData.modifier[i].name){
						case "blaze": modifier.blaze += toolData.modifier[i].level; break;
						case "lava": modifier.lava = 60; break;
						case "piston": modifier.piston += toolData.modifier[i].level; break;
						case "necrotic": modifier.necrotic++; break;
						case "spider": modifier.spider += toolData.modifier[i].level; break;
						case "smite": modifier.smite += toolData.modifier[i].level; break;
					}
				}

				option.onAttack && option.onAttack(item, ent, modifier);

				const time = modifier.blaze * 4 + modifier.lava;
				time && Entity.setFire(ent, time);
				modifier.piston && Entity.moveToAngle(ent, Entity.getLookAngle(player), {speed: modifier.piston / 10});
				modifier.necrotic && Entity.healEntity(player, modifier.necrotic * 2);

				if(Entity.isArthropod(ent) && modifier.spider){
					realData.toolMaterial.damage += (Math.random() * 2 + 2) * modifier.spider / 4;
				}
				else if(Entity.isUndead(ent) && modifier.smite){
					realData.toolMaterial.damage += (Math.random() * 2 + 2) * modifier.smite / 36;
				}

			},

			modifyEnchant: function(enchant, item){
				const toolData = Tool.getToolData(item.id, item.data);
				for(let i = toolData.modifier.length; i--;){
					if(toolData.modifier[i].name == "lapis"){
						if(toolData.modifier[i].level == 450){
							enchant.fortune = 3;
							break;
						}
						if(toolData.modifier[i].level >= 300){
							enchant.fortune = 2;
							break;
						}
						if(toolData.modifier[i].level >= 100){
							enchant.fortune = 1;
							break;
						}
						break;
					}
					if(toolData.modifier[i].name == "silky"){
						enchant.silk = 1;
						break;
					}
				}
			},

			onBroke: function(){
				return true;
			}
		});

	},


	get3x3Area: function(side){
		const area = {x: 1, y: 1, z: 1};
		switch(side & 6){
			case 0: area.y = 0; break;
			case 2: area.z = 0; break;
			case 4: area.x = 0; break;
		}
		return area;
	}


};


Callback.addCallback("EntityDeath", function(ent, attacker){
	const head = Entity.getHeadMeta(ent);
	if(attacker == player && ~head){
		const item = Player.getCarriedItem();
		const toolData = Tool.getToolData(item.id, item.data);
		if(toolData){
			let level = 0;
			for(let i = toolData.modifier.length; i--;){
				if(toolData.modifier[i].name == "head"){
					level++;
				}
			}
			if(Math.random() < level / 10){
				const pos = Player.getPosition();
				World.drop(pos.x, pos.y, pos.z, 397, 1, head);
			}
		}
	}
});


Callback.addCallback("tick", function(){
	ThreadTime = World.getThreadTime();
	if(ThreadTime & 511){
		return;
	}
	const select = Player.getSelectedSlotId();
	const pos = Player.getPosition();
	const light = World.getLightLevel(pos.x, pos.y + 1, pos.z)
	let i = j = moss = 0;
	let item, toolData;
	for(i = 9; i--;){
		if(i == select){
			continue;
		}
		item = Player.getInventorySlot(i);
		toolData = Tool.getToolData(item.id, item.data);
		if(!toolData){
			continue;
		}
		moss = 0;
		for(j = toolData.modifier.length; j--;){
			if(toolData.modifier[j].name == "moss"){
				moss += toolData.modifier[j].level;
			}
		}
		if(moss){
			toolData.uses -= Math.min(toolData.uses, moss + Math.random() * light | 0);
		}
	}

});