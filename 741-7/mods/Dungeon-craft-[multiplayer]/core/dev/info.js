IMPORT("DungeonAPI");
IMPORT("ToolLib");
IMPORT("TileRender");
IMPORT("add-onCreter");

const mod = FileTools.ReadJSON(__dir__ + 'mod.info');

var _inventory_open = false;
Callback.addCallback('NativeGuiChanged', function (screenName) {
	if (screenName == 'inventory_screen' || screenName == 'inventory_screen_pocket')
		_inventory_open = true;
	else
		_inventory_open = false;
});

const mod_tip = function (id) {
	try {
	if (BlockID[id]) id = Block.convertBlockToItemId(id);
	Callback.addCallback('PostLoaded', function () {
		var _func = Item.nameOverrideFunctions[id];
		Item.registerNameOverrideFunction(id, function (item, name) {
			if (_func) name = _func(item, name);
			if (_inventory_open) name += "\n§9" + mod.name;
			return name;
		})
	});
	}
	catch (err){
		alert (id)
		}
}

var config = FileTools.ReadJSON(__dir__+"/config.json");
const PartType = {
    mana: Particles.registerParticleType({
        texture: "mana",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    forest: Particles.registerParticleType({
        texture: "EnchantedForest_particle",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    magic: Particles.registerParticleType({
        texture: "magic_particle",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    magic2: Particles.registerParticleType({
        texture: "magic_particle",
        render: 2,
        size: [2, 5],
        lifetime:[25, 25],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    fire: Particles.registerParticleType({
        texture: "fire",
        render: 3,
        size: [3, 3],
        lifetime:[5, 5],
        isUsingBlockLight: true,
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    rai: Particles.registerParticleType({
        texture: "rai_particle",
        render: 2,
        size: [3, 3],
        lifetime:[40, 40],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
};
let DA = false;





const setTimeout = function(func, ticks){
  var upd = {
    ticks: 0,
      update: function(){
        this.ticks++
          if(this.ticks >= ticks){
            func();
            this.remove = true
      }
    }
  };
  Updatable.addUpdatable(upd);
}