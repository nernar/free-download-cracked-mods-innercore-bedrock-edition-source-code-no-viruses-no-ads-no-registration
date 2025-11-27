var ScribleRecipe = {
	array: [],
	addStandartRecipe: function (item, catalyst, result) {
		this.array.push({
			item: item,
			catalyst: catalyst,
			result: result
		});
		return true
	},
	getRecipe: function (item, catalyst) {
		for (var i in this.array) {
			var recipe = this.array[i];
			if (recipe.item.id == item.id && recipe.catalyst.id == catalyst.id) {
				return i;
			}
		}
		return false;
	},
	isRecipe: function (item, catalyst) {
		if (this.getRecipe(item, catalyst) === false) {
			return false;
		} else {
			return true;
		}
	},
	getResult: function (item, catalyst) {
		var recipe = this.getRecipe(item, catalyst);
		if (recipe === false) {
			return null;
		} else {
			return this.array[recipe].result;
		}
	}
}

var ScribleAnimation = {
	render: [],
	animationType: [],
	addAnimation: function (type, func) {
		this.animationType.push({
			type: type,
			func: func
		});
	},
	addRender: function () {
		var render = new Render();
		render.addPart("body.rotPart")
		var mesh = new RenderMesh(__dir__ + "model/circle.obj", "obj", null);
		var bodyPart = render.getPart("body.rotPart");
		bodyPart.setMesh(mesh)
		this.render.push({
			render: render
		});
		return this.render.length - 1;
	},
	getAnimation: function (type) {
		for (var i in this.animationType) {
			if (this.animationType[i].type == type) {
				return this.animationType[i].func;
			} else {
				return false;
			}
		}
	},
	getRender: function (id) {
		return this.render[id].render;
	},
	executeAnimation(type, render, progress) {
		var anim = this.getAnimation(type);
		if (anim === false) {
			Debug.m('no anim');
			return false
		} else {
			anim(render, progress);
		}
	},
	texture:[],
	addTexture:function(id, tex){
		this.texture.push({id:id, texture:tex});
	},
	getTexture:function(id){
		for(var i in this.texture){
			if(this.texture[i].id==id){
				return this.texture[i].texture
			}
		}
		return false
	}
}