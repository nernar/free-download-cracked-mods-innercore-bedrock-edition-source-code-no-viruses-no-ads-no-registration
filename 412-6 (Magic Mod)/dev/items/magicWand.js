IDRegistry.genItemID("magicWand");
Item.createItem("magicWand", "Magic Wand", {
	name: "magic_wand"
}, {
	stack: 1
});

var particle_air = Particles.registerParticleType({
	texture: "air",
	size: [1, 15],
	lifetime: [40, 120],
	render: 2,
	animators: {
		size: {
			period: 120,
			fadeIn: 1,
			fadeOut: 0,
			start: 0.2,
			end: 1
		}
	},
});

var lens_selection_menu = new UI.Window({
	location: {
		width: 400,
		height: 400,
		x: 300,
		y: 50 + 20
	},
	params: {

	},
	drawing: [{
		type: "color",
		color: android.graphics.Color.TRANSPARENT
	}],
	elements: {
		"image": {
			type: "image",
			x: 0,
			y: 0,
			bitmap: "frame1",
			scale: 3.9,
		},
		"desc": {
			type: "text",
			x: 275,
			y: 275,
			text: "",
			font: {
				color: android.graphics.Color.WHITE,
				shadow: 0.5,
				size: 30
			}
		}
	}
});
lens_selection_menu.setAsGameOverlay(true);
var container = new UI.Container();

var fireballs = [];

var sound_air = new Sound("air.ogg");
var sound_air2 = new Sound("air2.ogg");
var sound_interval;
var interval;

var drop_mob = false;
var mob_captured;
var tel_window = new UI.Window({
	location: {
		width: 60,
		height: 60 * 2,
		x: 0,
		y: 150
	},
	drawing: [{
		type: "color",
		color: android.graphics.Color.TRANSPARENT
	}],
	elements: {
		"button_push": {
			x: 0,
			y: 0,
			type: "button",
			bitmap: "tel_push",
			scale: 50,
			clicker: {
				onClick: function(position, container, tileEntity, window, canvas, scale) {
					drop_mob = true;
					var vel = Entity.getLookVector(Player.get());
					Entity.addVelocity(mob_captured, vel.x * 5, vel.y * 5, vel.z * 5);
				}
			}
		},
		"button_drop": {
			x: 0,
			y: 1000,
			type: "button",
			bitmap: "tel_drop",
			scale: 50,
			clicker: {
				onClick: function(position, container, tileEntity, window, canvas, scale) {
					drop_mob = true;
				}
			}
		}
	}
})
var tel_container = new UI.Container();

var lenses = [{
		name: "Air",
		texture: "airLense",
		description: "The wind will push you up and when you attack the mobs, the wind will push them further away\n\nOn use no target: You fly up\nOn attack: The mob pushes further",
		onUseNoTarget: function(item) {
			sound_air.stop();
			clearInterval(interval);
			var speed = 0.15;
			sound_air.play();
			sound_air.setLooping(true);
			interval = setInterval(function() {
				if (Player.getCarriedItem().id != ItemID.magicWand || Player.getCarriedItem().data != 1) {
					sound_air.stop();
					sound_air.setLooping(false);
					return true;
				}
				if (Entity.getSneaking(Player.get())) {
					sound_air2.stop();
					sound_air.stop();
					sound_air.setLooping(false);
					return false;
				} else if (!sound_air.isPlaying()) {
					sound_air.play();
					sound_air.setLooping(true);
				}
				if (Player.getVelocity().y < 0) {
					speed = Player.getVelocity().y + 0.2;
				} else if (Player.getVelocity().y > 1) {
					speed = Player.getVelocity().y - 0.2;
				} else {
					speed = 0.15;
				}
				if (Math.random() >= 0.75) sound_air2.play();
				Player.setVelocity(Player.getVelocity().x, speed, Player.getVelocity().z);
				var player_pos = Player.getPosition();
				var emitter = new Particles.ParticleEmitter(player_pos.x, player_pos.y - 2.5, player_pos.z);
				emitter.setEmitRelatively(true);
				emitter.emit(particle_air, 0, 0, 0, 0, 0, 0.18, 0, 0, 0, 0);
			}, 1);
		},
		onPlayerAttack: function(player, victim) {
			var vel = Entity.getLookVector(player);
			Entity.addVelocity(victim, vel.x * 2, 0, vel.z * 2);
			var player_pos = Player.getPosition();
			var emitter = new Particles.ParticleEmitter(player_pos.x, player_pos.y, player_pos.z);
			emitter.setEmitRelatively(true);
			emitter.emit(particle_air, 0, 0, 0, 0, 0, 0, 0, vel.x / 10, vel.y / 10, vel.z / 10);
			sound_air.play();
		}
	},
	{
		name: "Fire",
		description: "Launches fireballs and sets fire to blocks\n\nOn use no target: Launch fareball\nOn use: Set fire",
		texture: "fireLense",
		onUseNoTarget: function(item) {
			var pos = Player.getPosition();
			var vel = Entity.getLookVector(Player.get());
			Entity.spawn(pos.x + vel.x * 2, pos.y + vel.y * 2, pos.z + vel.z * 2, 85);
			var entities = Entity.getAllInRange(pos, 5, 85);
			for (var i in entities) {
				if (fireballs.indexOf(entities[i]) == -1) {
					Entity.addVelocity(entities[i], vel.x, vel.y, vel.z);
					fireballs.push(entities[i]);
				}
			}
		},
		onUse: function(coords, item, block) {
			World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, 51, 0);
		},
		onPlayerAttack: function(player, victim) {
			Entity.setFire(victim, 120, true)
		}
	},
	{
		name: "Blood",
		description: "Restores health through target health\n\nWhen using on a mob: Inflicts 1hp to a mob and restore 1hp you\nOn use no target: If a diamond lies nearby, it replaces it with a bloody one and takes 19hp from you",
		texture: "bloodLense",
		onUseNoTarget: function(item) {
			var pointed = getPointed();
			var pos = Player.getPosition();
			pos.y--;
			if (pointed.entity != -1) {
				Entity.damageEntity(pointed.entity, 1);
				Entity.healEntity(Player.get(), 1);
				return
			}
			var items = Entity.getAllInRange(pos, 5, 64);
			if (items.length != 0) {
				var diamond;
				for (var i in items) {
					if (Entity.getDroppedItem(items[i]).id == 264) diamond = items[i];
				}
				if (!diamond || Entity.getHealth(Player.get()) < 20) return;
				Entity.damageEntity(Player.get(), 19);
				pos = Entity.getPosition(diamond);
				var item = Entity.getDroppedItem(items[i]);
				item.count == 1 ? Entity.setDroppedItem(diamond, 0, 0, 0) : Entity.setDroppedItem(diamond, 264, item.count - 1, item.data);
				World.drop(pos.x, pos.y, pos.z, ItemID.bloodDiamond, 1, 0);
			}
		}
	},
	{
		name: "Telekinesis",
		texture: "telLense",
		description: "Allows you to lift mobs into the air and throw them far\n\nWhen using on a mob: raise mob\nLeft top button using for throw mob\nLeft down button using for let off mob",
		onUseNoTarget: function(item) {
			var pointed = getPointed();
			if (pointed.entity == -1) return;
			mob_captured = pointed.entity;
			//Entity.setMobile(pointed.entity, false);
			var last = {
				x: 0,
				y: 0,
				z: 0
			};
			var lastp = {
				x: 0,
				y: 0,
				z: 0
			};
			if (!tel_container.isOpened()) tel_container.openAs(tel_window);
			setInterval(function() {
				var item = Player.getCarriedItem();
				if (pointed.entity != mob_captured) drop_mob = true;
				if (item.id != ItemID.magicWand || item.data != 4) drop_mob = true;
				if (drop_mob) {
					drop_mob = false;
					mob_captured = false;
					tel_container.close();
					return true;
				}
				var pos = Player.getPosition();
				var vec = Entity.getLookVector(Player.get());
				if (vec.x == 0 && vec.y == 0 && vec.z == 1) {
					vec.x = last.x, vec.y = last.y, vec.z = last.z;
				}
				last.x = vec.x, last.y = vec.y, last.z = vec.z;
				/*if(lastp.x != pos.x, lastp.y != pos.y, lastp.z != pos.z) log(JSON.stringify(pos));
				lastp = pos;*/
				var target_pos = {
					x: pos.x + vec.x * 5,
					y: pos.y + vec.y * 5,
					z: pos.z + vec.z * 5
				}
				Entity.moveToTarget(pointed.entity, target_pos, {
					speed: 10,
					denyY: false,
					jumpVel: 10
				})
			}, 1)
		}
	}
]

var lens = {
	/*
		data = {
			name: string,
			description: string,
			texture: string,
			onUse: function(coords, item, block),
			onUseNoTarget: function(item),
			onPlayerAttack: function(player, victim)
		}
		Returns data stuff with lens
	*/
	add: function(data) {
		if (!data) return Logger.Log("Data not listed", "MagicModAPI ERROR");
		if (!data.name) return Logger.Log("Name not listed", "MagicModAPI ERROR");
		if (!data.texture) return Logger.Log("Texture not listed", "MagicModAPI ERROR");
		lenses.push(data);
		return lenses.length;
	},
	/*
		name: string
	*/
	remove: function(name) {
		if (!name) return Logger.Log("Name not listed", "MagicModAPI ERROR");
		lenses.splice(lenses.find(function(element, index, array) {
			if (element.name == name) return index;
		}), 1)
	},
	/*
		name: string
	*/
	get: function(name) {
		if (!name) return Logger.Log("Name not listed", "MagicModAPI ERROR");
		return lenses.find(function(element, index, array) {
			if (element.name == name) return element;
		})
	}
}

Callback.addCallback("APILoaded", function() {
	for (var i in lenses) {
		IDRegistry.genItemID("LensOf" + lenses[i].name);
		Item.createItem("LensOf" + lenses[i].name, "Lens Of " + lenses[i].name, {
			name: lenses[i].texture
		}, {
			stack: 1
		});
	}
});

Item.registerNoTargetUseFunction("magicWand", function(item) {
	if (item.data == 0) return;
	if (lenses[item.data - 1].onUseNoTarget) lenses[item.data - 1].onUseNoTarget(item);
});

Callback.addCallback("PlayerAttack", function(player, victim) {
	var item = Player.getCarriedItem();
	if (item.id == ItemID.magicWand) {
		if (item.data == 0) return;
		if (lenses[item.data - 1].onPlayerAttack) lenses[item.data - 1].onPlayerAttack(player, victim);
	}
});

Item.registerNameOverrideFunction(ItemID.magicWand, function(item, name) {
	name = "§b" + name
	if (item.data == 0) return name + "\n§7" + Translation.translate('Lens') + ': ' + Translation.translate('Nope');
	if (lenses[item.data - 1]) {
		return name + "\n§7" + Translation.translate('Lens') + ': ' + Translation.translate(lenses[item.data - 1].name);
	} else {
		return name + "\n§7" + Translation.translate('Lens') + ': ' + Translation.translate('Nope');
	}
});

Item.registerUseFunction("magicWand", function(coords, item, block) {
	if (block.id == BlockID.magicTable) return;
	if (Entity.getSneaking(Player.get())) {
		if (item.data == 0) {
			container.openAs(lens_selection_menu);
			var content = container.getGuiContent();
			/*content.elements["image"].scale = 0.1;
			jSetInterval(function(){
				content.elements["image"].scale += 0.0005//3.9/(5000/25)/100;
				if(content.elements["image"].scale+"" == "3.9") return true;
			},1)
			var f = 0;
			function plus(){
				content.elements["image"].scale += 0.00015 + f;
				f += 0.0001;
				if(content.elements["image"].scale < 3.9)jSetTimeout(plus, 1);
			}
			plus();*/
			content.elements["desc"].text = "";
			for (var i = 1;; i++) {
				if (!content.elements["desc" + i]) break;
				content.elements["desc" + i] = null;
			}
			var k = 0;
			for (var i = 0; i < 6.27; i += 0.57) {
				content.elements['slot' + k] = {
					slot: 'slot' + k,
					type: 'slot',
					x: Math.sin(i) * 385 + 400,
					y: Math.cos(i) * -1 * 385 + 400,
					size: 200,
					bitmap: "_default_slot_empty",
					visual: true,
					isTransparentBackground: true,
					clicker: {
						onClick: function(position, container, tileEntity, window, canvas, scale) {
							var item = container.getSlot(this.slot);
							if (item.id == 0) return;
							Player.setInventorySlot(searchItem(item.id, -1).slot, 0, 0, 0);
							var data = 0;
							for (var i in ItemID) {
								if (ItemID[i] == item.id) {
									for (var d in lenses) {
										if ("LensOf" + lenses[d].name == i) data = (+d) + 1;
									}
									break;
								}
							}
							Player.setCarriedItem(ItemID.magicWand, 1, data);
							container.setSlot(this.slot, 0, 0, 0);
							container.close();
						},
						onLongClick: function(position, container, tileEntity, window, canvas, scale) {
							if (container.getSlot(this.slot).id == 0) return;
							var cont = container.getGuiContent();
							for (var i = 0; i < 11; i++) {
								cont.elements['slot' + i].bitmap = "_default_slot_empty";
							}
							cont.elements["desc"].text = "";
							for (var i = 1;; i++) {
								if (!cont.elements["desc" + i]) break;
								cont.elements["desc" + i] = null;
							}
							cont.elements[this.slot].bitmap = "selected_slot";
							var item = container.getSlot(this.slot);
							var data = 0;
							for (var i in ItemID) {
								if (ItemID[i] == item.id) {
									for (var d in lenses) {
										if ("LensOf" + lenses[d].name == i) data = (+d) + 1;
									}
									break;
								}
							}
							var text = Translation.translate("Description") + ": " + Translation.translate(lenses[data - 1].description);
							var last_sim = 0;
							for (var i = 0; i < Math.trunc(text.length / 25); i++) {
								text = setCharAt(text, text.substr(last_sim, 25).lastIndexOf(" ") + last_sim, "\n");
								last_sim += 25;
							}
							var splited = text.split("\n");
							cont.elements.desc.text = splited[0];
							var y = 35;
							for (var i = 1; i < splited.length; i++) {
								cont.elements["desc" + i] = {
									type: "text",
									x: 275,
									y: 275 + y,
									text: splited[i],
									font: {
										color: android.graphics.Color.WHITE,
										shadow: 0.5,
										size: 30
									}
								};
								y += 35;
							}
						}
					}
				}
				k++;
			}
			for (var i = 0; i <= 10; i++) {
				container.setSlot("slot" + i, 0, 0, 0);
			}
			var items = [];
			for (var i in lenses) {
				var item = searchItem(ItemID["LensOf" + lenses[i].name], -1);
				if (item) {
					items.push([item.id, item.data, item.slot]);
				}
			}
			var slots = [
				[],
				[0],
				[0, 5],
				[0, 4, 7],
				[1, 10, 4, 7],
				[0, 2, 4, 7, 9],
				[1, 3, 5, 6, 8, 10],
				[0, 1, 2, 3, 4, 5, 6],
				[0, 1, 2, 3, 4, 5, 6, 7],
				[0, 1, 2, 3, 4, 5, 6, 7, 8],
				[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			];
			var l = 0;
			var length = items.length > 10 ? 10 : items.length;
			for (var i in slots[length]) {
				container.setSlot("slot" + slots[items.length][i], items[l][0], 1, items[l][1]);
				l++;
			}
			close();
		} else {
			Player.setCarriedItem(item.id, 1, 0);
			Player.addItemToInventory(ItemID["LensOf" + lenses[item.data - 1].name], 1, 0);
		}
		return
	}
	if (item.data == 0) return;
	if (lenses[item.data - 1].onUse) lenses[item.data - 1].onUse(coords, item, block);
});

function stop_capture_on_death(entity) {
	if (entity == mob_captured) drop_mob = true;
}

Callback.addCallback("EntityDeath", stop_capture_on_death);
Callback.addCallback("EntityRemoved", stop_capture_on_death);

function close() {
	var last_look = getPointed().vec;
	setInterval(function() {
		if (!container.isOpened()) return true;
		var look = getPointed().vec;
		if (look.x != last_look.x || look.y != last_look.y || look.z != last_look.z) {
			container.close();
			return true;
		}
		if (Player.getCarriedItem().id != ItemID.magicWand || Player.getCarriedItem().data != 0) {
			container.close();
			return true;
		}
	}, 5);
}