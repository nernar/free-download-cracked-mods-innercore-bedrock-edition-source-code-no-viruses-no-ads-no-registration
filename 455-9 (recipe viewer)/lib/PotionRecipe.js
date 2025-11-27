LIBRARY({
	name: "PotionRecipe",
	version: 1,
	shared: false,
	api: "CoreEngine"
});


var PotionMeta = {
	none: 0,
	mundane: 1,
	mundane_extended: 2,
	thick: 3,
	awkward: 4,
	night_vision: 5,
	night_vision_extended: 6,
	invisibility: 7,
	invisibility_extended: 8,
	leaping: 9,
	leaping_extended: 10,
	leaping_enhanced: 11,
	fire_resistance: 12,
	fire_resistance_extended: 13,
	swiftness: 14,
	swiftness_extended: 15,
	swiftness_enhanced: 16,
	slowness: 17,
	slowness_extended: 18,
	water_breathing: 19,
	water_breathing_extended: 20,
	healing: 21,
	healing_enhanced: 22,
	harming: 23,
	harming_enhanced: 24,
	poison: 25,
	poison_extended: 26,
	poison_enhanced: 27,
	regeneration: 28,
	regeneration_extended: 29,
	regeneration_enhanced: 30,
	strength: 31,
	strength_extended: 32,
	strength_enhanced: 33,
	weakness: 34,
	weakness_extended: 35
};


var PotionRecipe = {

	data: {
		0: PotionMeta.mundane,
		32: PotionMeta.mundane_extended,
		1: PotionMeta.regeneration,
		33: PotionMeta.regeneration_extended,
		65: PotionMeta.regeneration_enhanced,
		2: PotionMeta.swiftness,
		34: PotionMeta.swiftness_extended,
		66: PotionMeta.swiftness_enhanced,
		3: PotionMeta.fire_resistance,
		35: PotionMeta.fire_resistance_extended,
		4: PotionMeta.poison,
		36: PotionMeta.poison_extended,
		68: PotionMeta.poison_enhanced,
		5: PotionMeta.healing,
		69: PotionMeta.healing_enhanced,
		6: PotionMeta.night_vision,
		38: PotionMeta.night_vision_extended,
		8: PotionMeta.weakness,
		40: PotionMeta.weakness_extended,
		9: PotionMeta.strength,
		41: PotionMeta.strength_extended,
		73: PotionMeta.strength_enhanced,
		10: PotionMeta.slowness,
		42: PotionMeta.slowness_extended,
		11: PotionMeta.leaping,
		43: PotionMeta.leapin_extended,
		75: PotionMeta.leaping_enhanced,
		12: PotionMeta.harming,
		76: PotionMeta.harming_enhanced,
		13: PotionMeta.water_breathing,
		45: PotionMeta.water_breathing_extended,
		14: PotionMeta.invisibility,
		46: PotionMeta.invisibility_extended,
	},

	mask: {
		normal: 0,
		extended: 1 << 5,
		enhanced: 1 << 6
	},

	getCode: function(meta){
		for(let key in this.data){
			if(this.data[key] == meta){
				return key - 0;
			}
		}
	},

	getEffect: function(code){
		return code & 15;
	},

	isModified: function(code){
		const mask = this.mask.extended | this.mask.enhanced;
		return code & mask;
	},

	getModifier: function(code){
		if(code & this.mask.extended){
			return "extended";
		}
		if(code & this.mask.enhanced){
			return "enhanced";
		}
		return "normal";
	},

	getMeta: function(id, type){
		return this.data[id | this.mask[type]];
	},

	base: {
		331: PotionMeta.mundane,
		353: PotionMeta.mundane,
		370: PotionMeta.mundane,
		375: PotionMeta.mundane,
		377: PotionMeta.mundane,
		378: PotionMeta.mundane,
		382: PotionMeta.mundane,
		414: PotionMeta.mundane,
		348: PotionMeta.thick,
		376: PotionMeta.weakness
	},

	effect: {
		370: 1,
		353: 2,
		378: 3,
		375: 4,
		382: 5,
		396: 6,
		377: 9,
		414: 11,
		462: 13
	},

	corrupt: {
		9: 8,
		2: 10,
		11: 10,
		4: 12,
		5: 12,
		6: 14
	},

	modifier: {
		331: "extended",
		348: "enhanced"
	},

	getResult: function(ingredient, bottle){
		if(bottle.id != 373 && bottle.id != 438){
			return;
		}
		if(ingredient == 289 && bottle.id == 373){
			return {id: 438, data: bottle.data};
		}
		if(ingredient == 437 && bottle.id == 438){
			return {id: 441, data: bottle.data};
		}
		if(this.base[ingredient] && bottle.data == PotionMeta.none){
			return {id: bottle.id, data: this.getMeta(this.base[ingredient], "normal")};
		}
		if(this.effect[ingredient] && bottle.data == PotionMeta.awkward){
			return {id: bottle.id, data: this.getMeta(this.effect[ingredient], "normal")};
		}
		const code = this.getCode(bottle.data);
		if(ingredient == 376){
			const effect = this.corrupt[this.getEffect(code)];
			if(effect){
				return {id: bottle.id, data: effect | code >> 4 << 4};
			}
		}
		if(this.modifier[ingredient] && !this.isModified(code)){
			const meta = this.getMeta(code, this.modifier[ingredient]);
			if(meta){
				return {id: bottle.id, data: meta};
			}
		}
	}

};


EXPORT("PotionMeta", PotionMeta);
EXPORT("PotionRecipe", PotionRecipe);