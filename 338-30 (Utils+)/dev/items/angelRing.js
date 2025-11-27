IDRegistry.genItemID("angelRing");
Item.createItem("angelRing", "Angel ring", {
	name: "angelRing"
}, {
	stack: 1
});
var baubleEquip = false;
var ringEquiped = false;

Recipes.addShaped({
	id: ItemID.angelRing,
	count: 1,
	data: 0
}, [
	"g#g",
	"#s#",
	" # "
], ['s', 399, 0, '#', 266, 0, 'g', 20, 0]);

Callback.addCallback("tick", function() {
	if (!ringEquiped) {
		if (searchItem(ItemID.angelRing)) {
			Player.setFlyingEnabled(true);
			ringEquiped = true;
		}
	} else if (ringEquiped && !baubleEquip) {
		if (!searchItem(ItemID.angelRing)) {
			Player.setFlyingEnabled(false);
			ringEquiped = false;
		}
	}
});

ModAPI.addAPICallback("BaublesAPI", function(api) {
	api.Baubles.registerBauble({
		id: ItemID.angelRing,
		type: "ring",
		onEquip: function() {
			Player.setFlyingEnabled(true);
			ringEquiped = true;
			baubleEquip = true;
		},
		onTakeOff: function() {
			Player.setFlyingEnabled(false);
			ringEquiped = false;
			baubleEquip = false;
		}
	});
})

Callback.addCallback("EntityHurt", function(attacker, victim, damage) {
	if (searchItem(ItemID.angelRing) || baubleEquip) {
		var vel = Player.getVelocity().y;
		var time = vel / -0.06;
		var height = 0.06 * time * time / 2;
		if (height >= 4) {
			Game.prevent();
		}
	}
});