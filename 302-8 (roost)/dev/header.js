IMPORT("StorageInterface");
IMPORT("EnhancedRecipes");


const MaxStack = __config__.getNumber("MaxStack") | 0;
const SpeedModifier = {
	roost: __config__.getNumber("SpeedModifier.roost"),
	breeder: __config__.getNumber("SpeedModifier.breeder")
};


const Chicken = function(key, name, product, biomeType){
	this.key = "chicken_" + key;
	this.name = name;
	this.skin = "model/roost_chicken/" + key + ".png";
	this.product = product;
	this.biomeType = biomeType;
};

Chicken.prototype = {

	getKey: function(){
		return this.key;
	},
	getName: function(){
		return this.name;
	},
	getSkin: function(){
		return this.skin;
	},
	getProduct: function(){
		return this.product;
	},

	isValidBiome: function(biome){
		let biomeType = 0;
		switch(biome){
			case 8:
				biomeType = 3;
				break;
			case 3:
			case 10:
			case 11:
			case 12:
			case 13:
			case 20:
			case 26:
			case 30:
			case 31:
			case 34:
			case 131:
			case 140:
			case 158:
			case 162:
				biomeType = 2;
				break;
			default:
				biomeType = 1;
				break;
		}
		return this.biomeType == biomeType;
	},

	setParents: function(parent1, parent2){
		this.parent1 = parent1;
		this.parent2 = parent2;
	},
	isChildOf: function(parent1, parent2){
		return this.parent1 == parent1 && this.parent2 == parent2 || this.parent1 == parent2 && this.parent2 == parent1;
	},

	getTier: function(){
		if(this.tier){
			return this.tier;
		}
		this.tier = this.parent1 ? Math.max(this.parent1.getTier(), this.parent2.getTier()) + 1 : 1;
		return this.tier;
	},

	getMinLayTime: function(){
		return Math.max(this.getTier() * 6000, 1) | 0;
	},
	getMaxLayTime: function(){
		return this.getMinLayTime() * 2;
	},
	getLayTime: function(){
		const min = this.getMinLayTime();
		const max = this.getMaxLayTime();
		return min + (Math.random() * (max - min) | 0);
	},

	getRandomChild: function(){
		if(!this.parent1){
			return this.getKey();
		}
		const array = [this, this.parent1, this.parent2];
		const maxChance = Math.max.apply(null, array.map(function(data){
			return data.getTier();
		})) + 1;
		let i = 0;
		let maxDiceValue = 0;
		for(i = 3; i--;){
			maxDiceValue += maxChance - array[i].getTier();
		}
		const diceValue = Math.random() * maxDiceValue;
		let currentValue = 0;
		for(i = 0; i < 3; i++){
			currentValue += maxChance - array[i].getTier();
			if(diceValue < currentValue){
				return array[i].getKey();
			}
		}
		return null;
	}

};


const ChickenRegistry = {

	data: {},
	recipe: {},

	biomeType: {
		NONE: 0,
		NORMAL: 1,
		SNOW: 2,
		HELL: 3
	},

	registerChicken: function(key, name, product, spawnType, isVanilla){
		name = name || key.charAt().toUpperCase() + key.slice(1);
		name += " Chicken";
		const biomeType = this.biomeType[spawnType];
		const chickenData = new Chicken(key, name, product, biomeType);
		key = chickenData.getKey();
		const id = IDRegistry.genItemID(key);
		Item.createItem(key, name, {name: key}, {stack: MaxStack});
		this.data[id] = chickenData;
		Recipes.addFurnace(id, 366);
		if(isVanilla){
			Item.registerUseFunctionForID(id, function(c){
				c = c.relative;
				const ent = Entity.spawn(c.x + 0.5, c.y, c.z + 0.5, 10);
				Entity.setAge(ent, 0);
				Player.decreaseCarriedItem();
			});
			return;
		}

		const entity = MobRegistry.registerEntity(key);
		const model = new EntityModel();
		model.setRender(new Render(5));
		model.setTexture(new Texture(chickenData.getSkin()));
		entity.customizeVisual({ 
			getModels: function(){
				return {
					main: model
				};
			}
		});
		entity.setBaseType(10);
		Item.registerUseFunctionForID(id, function(c){
			c = c.relative;
			const custom = Entity.spawnCustom(key, c.x + 0.5, c.y, c.z + 0.5);
			Entity.setAge(custom.entity, 0);
			Player.decreaseCarriedItem();
		});
		if(biomeType){
			MobSpawnRegistry.registerSpawn(key, 0.01, function(x, z){
//				const data = ChickenRegistry.getData(ItemID[key]);
				return chickenData.isValidBiome(World.getBiome(x, z)) ? 3 : 0;
			});
		}

	},

	isChicken: function(id){
		return id in this.data;
	},

	getData: function(id){
		return this.data[id];
	},

	createKey: function(parent1, parent2){
		parent1 < parent2 ? parent1 <<= 12 : parent2 <<= 12;
		return parent1 | parent2;
	},

	parentsData: {},
	setParents: function(child, parent1, parent2){
		this.parentsData[child] = [parent1, parent2];
	},
	loadParentsData: function(){
		let child = parent1 = parent2 = 0;
		let chickenData, parentData1, parentData2;
		for(let key in this.parentsData){
			child = ItemID["chicken_" + key];
			parent1 = ItemID["chicken_" + this.parentsData[key][0]];
			parent2 = ItemID["chicken_" + this.parentsData[key][1]];
			chickenData = this.getData(child);
			parentData1 = this.getData(parent1);
			parentData2 = this.getData(parent2);
			chickenData.setParents(parentData1, parentData2);
			this.recipe[this.createKey(parent1, parent2)] = child;
		}
	},

	getChildForID: function(parent1, parent2){
		if(parent1 == parent2){
			return parent1;
		}
		return this.recipe[this.createKey(parent1, parent2)] || 0;
	},

	getChild: function(parent1, parent2){
		if(parent1 == parent2){
			return parent1;
		}
		for(let id in this.data){
			if(this.data[id].isChildOf(parent1, parent2)){
				return this.data[id].getKey();
			}
		}
		return null;
	}

};


Callback.addCallback("PostLoaded", function(){
	ChickenRegistry.loadParentsData();
});


Callback.addCallback("EntityAdded", function(ent){
	if(Entity.getType(ent) != 10 || Entity.getAge(ent) != -24000){
		return;
	}
	const array = Entity.getAllInRange(Entity.getPosition(ent), 1, 10);
	const index = array.indexOf(ent);
	index != -1 && array.splice(index, 1);
	if(array.length < 2){
		return;
	}
	array.sort(function(a, b){
		return Entity.getDistanceToEntity(a, ent) < Entity.getDistanceToEntity(b, ent) ? -1 : 1;
	});
	array.length = 2;
	const custom1 = Entity.getCustom(array[0]);
	const custom2 = Entity.getCustom(array[1]);
	if(!custom1 || !custom2){
		return;
	}
	const parent1 = ChickenRegistry.getData(ItemID[custom1.nameId]);
	const parent2 = ChickenRegistry.getData(ItemID[custom2.nameId]);
	const key = ChickenRegistry.getChild(parent1, parent2);
	if(!key){
		Game.prevent();
		return;
	}
	const key2 = ChickenRegistry.getData(ItemID[key]).getRandomChild();
	const type = MobRegistry.customEntities[key2];
	const custom = type.instantiate(ent);
	custom.callControllerEvent("created");
	custom.update();
});


const ValidFunc = {

	chicken: function(id){
		return ChickenRegistry.isChicken(id);
	},

	isSeed: {295: true, 361: true, 362: true, 458: true},
	seed: function(id){
		return this.isSeed[id] || false;
	},

	result: function(){
		return false;
	}

};


const BlackFont = {color: android.graphics.Color.BLACK, size: 40};


ModAPI.registerAPI("RoostAPI", {
	ChickenClass: Chicken,
	ChickenRegistry: ChickenRegistry
});