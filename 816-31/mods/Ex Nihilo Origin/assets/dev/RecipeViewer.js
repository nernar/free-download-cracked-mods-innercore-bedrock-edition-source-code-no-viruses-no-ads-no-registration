var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
ModAPI.addAPICallback("RecipeViewer", function(api){
	var SieveRecipe = (function(_super){
  	__extends(SieveRecipe, _super);
    function SieveRecipe(name, icon, key, content){
      let _this = _super.call(this, name, icon, content) || this;
      _this.ritualKey = key;
      return _this;
    }
    SieveRecipe.prototype.getAllList = function() {
    	let list = [];
    	let blocks = Object.keys(Sieve.sieve);
    	for(let b in blocks){
    		let drops = Sieve[blocks[b]];
    		let keys = Object.keys(drops);
    		for(let i in keys){
    			let drop = drops[keys[i]];
    			list.push({
    				input: [{id: parseInt(blocks[b]), data: 0, count: 1}],
    				output: [{id: parseInt(keys[i]), data: drop.data, count: 1}],
    				chance: drop.chance
     		 });
    		}
    	}
    	return list;
		};
		SieveRecipe.prototype.onOpen = function(elements, data){
			elements.get("chance").onBindingUpdated("text", data.chance+"%");
  	}
    return SieveRecipe;
  }(api.RecipeType));
  Translation.addTranslation("Sieve", {
  	ru: "Сито"
  })
	api.RecipeTypeRegistry.register("Sieve", new SieveRecipe(Translation.translate("Sieve"), BlockID.ex_sieve, "Sieve", {
		drawing: [
			{type: "bitmap", x: 410, y: 150, scale: 6, bitmap: "furnProg_0"},
		],
		elements: {
			output0: {x: 590, y: 150, size: 100},
      input0: {x: 290, y: 150, size: 100},
      chance: {type: "text", x: 380, y: 255, font: {size: 40}},
		}
	}));
});