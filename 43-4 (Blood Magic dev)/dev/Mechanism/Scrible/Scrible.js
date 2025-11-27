IDRegistry.genBlockID("scrible");
Block.createBlock("scrible", [
	{
		name: "Tech",
		texture: [["blood_altar", 0]],
		inCreative: false
	}
]);

IDRegistry.genItemID("arcaneAshes");
Item.createItem("arcaneAshes", "Arcane Ashes", {
	name: "arcaneashes",
	meta: 0
}, {
	stack: 1
});
Translation.addTranslation("Arcane Ashes", {
	ru: "Мистический Пепел"
});

Item.setMaxDamage(ItemID.arcaneAshes, 9)
Item.registerUseFunction("arcaneAshes", function (coords, item, block) {
	World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.scrible);
	World.addTileEntity(coords.x, coords.y + 1, coords.z);
	if (item.data > 9) {
		Player.decreaseCarriedItem(1);
	} else {
		Player.setCarriedItem(ItemID.arcaneAshes, 1, item.data + 1);
	}
});


Block.registerDropFunction("scrible", function (coords, id, data, diggingLevel, toolLevel) {
	return [[0, 0, 0]];
});
Block.setBlockShape(BlockID.scrible, {
	x: 0,
	y: 0,
	z: 0
}, {
	x: 1,
	y: 1 / 16,
	z: 1
});
var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.scrible, 0, render);


TileEntity.registerPrototype(BlockID.scrible, {
	defaultValues: {
		renderID: null,
		p: 0
	},
	click: function () {
		var item = this.data.items.item;
		var catalyst = this.data.items.catalyst;
		if (item.id == 0 && Player.getCarriedItem().id != 0) {
			item.id = Player.getCarriedItem().id;
			item.data = Player.getCarriedItem().data;
			Player.decreaseCarriedItem(1);
			if (ScribleAnimation.getTexture(item.id)) {
				this.animation.describe({
					skin: ScribleAnimation.getTexture(item.id)
				});
			}
		} else if (catalyst.id == 0 && Player.getCarriedItem().id != 0) {
			catalyst.id = Player.getCarriedItem().id;
			catalyst.data = Player.getCarriedItem().data;
			Player.decreaseCarriedItem(1);
			if (ScribleRecipe.isRecipe(item, catalyst)) {
				this.data.p = 200;
			}
		}
	},
	init: function () {
		var item = this.data.items.item;
		var catalyst = this.data.items.catalyst;
		this.data.renderID = ScribleAnimation.addRender();
		this.animation = new Animation.Base(this.x + .5, this.y - 1.5, this.z + .5);
		this.animation.describe({
			render: ScribleAnimation.getRender(this.data.renderID).getId(),
			skin: "mob/textureArray/basearray.png"
		});
		if (ScribleAnimation.getTexture(item.id) && item.id != 0) {
			this.animation.describe({
				skin: ScribleAnimation.getTexture(item.id)
			});
		}
		this.animation.load();
	},
	created: function () {
		this.data.items = {
			item: {
				id: 0,
				data: 0
			},
			catalyst: {
				id: 0,
				data: 0
			}
		};
	},
	tick: function () {
		var item = this.data.items.item;
		var catalyst = this.data.items.catalyst;
		if (this.data.p > 1) {
			ScribleAnimation.executeAnimation('recipe', ScribleAnimation.getRender(this.data.renderID), this.data.p)
			this.data.p--;
		}
		if (this.data.p == 1) {
			addBloodParticle(this.x, this.y + 1, this.z, 30);
			World.drop(this.x + .5, this.y + .5, this.z + .5, ScribleRecipe.getResult(item, catalyst).id, 1, ScribleRecipe.getResult(item, catalyst).data);
			item.id = 0;
			catalyst.id = 0;
			World.removeTileEntity(this.x, this.y, this.z)
		}
	},
	destroy: function () {
		var item = this.data.items.item;
		var catalyst = this.data.items.catalyst;
		if (item.id != 0) {
			World.drop(this.x + .5, this.y + 0.5, this.z + .5, item.id, 1, item.data);
		}
		if (catalyst.id != 0) {
			World.drop(this.x + .5, this.y + 0.5, this.z + .5, catalyst.id, 1, catalyst.data);
		}
		this.animation.destroy();
		World.setBlock(this.x, this.y, this.z, 0)
	}

});
