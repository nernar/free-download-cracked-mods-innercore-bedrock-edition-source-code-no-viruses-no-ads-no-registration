var Getkey = function(object, value) {
    for (var key in object) {
        if (object[key][value]) {
            return key
        }
    }
    return null
};
var barrel_boxes_1 = [
    [c2, c0, c2, c14, c1, c14],
    [c1, c0, c1, c14, c16, c2],
    [c1, c0, c2, c2, c16, c15],
    [c14, c0, c1, c15, c16, c14],
    [c2, c0, c14, c15, c16, c15]
];
var BuildBarrelBox = function(id, ydata, data, x, y, z, dim) {
        var model = BlockRenderer.Model();
        var render = new ICRender.Model();
        for (var box in barrel_boxes_1) {
            var array = barrel_boxes_1[box];
            model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], BlockID[id], 0)
        };
        model.addBox(c2, c1, c2, c14, ydata, c14, data);
        render.addEntry(model);
        BlockRenderer.mapAtCoords(x, y, z, render);
        var Collision = new ICRender.CollisionShape();
        for (var box in barrel_boxes_1) {
            var array = barrel_boxes_1[box];
            Collision.addEntry().addBox(array[0], array[1], array[2], array[3], array[4], array[5])
        };
        Collision.addEntry().addBox(c2, c1, c2, c14, ydata, c14);
        BlockRenderer.mapCollisionModelAtCoords(dim, x, y, z, Collision);
    };
var Barrel = {
    liquidset: {
        limit: {
            "null": {
                "water": 1,
                "lava": 1,
                "waterwitch": 1
            },
            "water": {
                "water": 1,
                "milk": 1,
                "waterslime": 1
            },
            "lava": {
                "lava": 1
            }
        },
        mix: {
            "water": {
                "milk": "waterslime"
            }
        },
    },
    data: {},
    model: {},
    id: {},
    dataSet: function(liquid, object) {
        this.data[liquid] = object
    },
    dataGet: function(liquid, id, data) {
        return eval(this.data[liquid][id + ":" + data])
    },
    dataAdd: function(liquid, id, data, object) {
object.volume = object.volume || 1
        this.data[liquid][id + ":" + data] = object
    },
    modelset: function(object) {
        this.model = object
    },
    modeladd: function(id, object) {
        this.model[id] = object
    },
    modelget: function(id) {
        return this.model[id]
    },
    add: function(ID, name, texture, material) {
        IDRegistry.genBlockID(ID);
        var Type = Block.createSpecialType({
            sound: "wood"
        });
        switch (material) {
            case "wood":
                Block.createBlock(ID, [{
                    name: name,
                    texture: [
                        [texture, 0]
                    ],
                    inCreative: true
                }], Type);
                break;
            default:
                Block.createBlock(ID, [{
                    name: name,
                    texture: [
                        [texture, 0]
                    ],
                    inCreative: true
                }])
        };
        ToolAPI.registerBlockMaterial(BlockID[ID], material);
        var model = BlockRenderer.Model();
        for (var box in barrel_boxes_1) {
            var array = barrel_boxes_1[box];
            model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], BlockID[ID], 0)
        };
        var render = new ICRender.Model();
        render.addEntry(model);
        BlockRenderer.enableCoordMapping(BlockID[ID], 0, render);
        var Collision = new ICRender.CollisionShape();
        for (var box in barrel_boxes_1) {
            var array = barrel_boxes_1[box];
            Collision.addEntry()
                .addBox(array[0], array[1], array[2], array[3], array[4], array[5])
        };
        BlockRenderer.setCustomCollisionShape(BlockID[ID], 0, Collision);

        var testUI = new UIRegistry({
            standart: {
                header: {
                    text: "Crusher"
                }
            },
            elements: {
                "slotInput": {
                    type: "slot",
                    x: 600,
                    y: 146
                },
                "slotoutput": {
                    type: "slot",
                    x: 670,
                    y: 146
                },
                "slot3": {
                    type: "slot",
                    x: 670 + 70,
                    y: 146
                }
            }
        });
        var prototype = {
            useNetworkItemContainer: true,
            defaultValues: {
                starttime: 0,
                basetime: 0,
                volume: 0,
                refresh: false,
                ferment: false,
                mainliquid: null,
                BarrelOnce: false
            },
            setTransportSlots: [],
            getTransportSlots: function() {
                return {
                    input: this.setTransportSlots
                }
            },
            init: function() {
                this.show();
                this.data.starttime = -this.data.basetime
            },
            client: {
                renderModel: function() {
                    let ydata = this.networkData.getFloat("ydata");
            let data = this.networkData.getString("data") || "air";
            let dim = this.networkData.getInt("dim");
            if (typeof(ydata) == "number") {
                let tex = data.split(",")[0];
                BuildBarrelBox(ID, ydata, [[tex, 0]], this.x, this.y, this.z, dim);
            };
                },
                load: function() {
                    this.renderModel();
                    var self = this;
                    this.networkData.addOnDataChangedListener(function(data, isExternal) {
                        self.renderModel()
                    })
                },
                unload(){
                	let dim = this.networkData.getInt("dim");
                	BlockRenderer.unmapCollisionModelAtCoords(dim, this.x, this.y, this.z);
                }
            },
            barrelbox: function(ydata, data) {
                this.networkData.putFloat("ydata", ydata);
            this.networkData.putString("data", data);
            this.networkData.putInt("dim", this.dimension);
                this.networkData.sendChanges();
            },
            show: function() {
                var compost = this.container.getSlot("slotcompost");
                var output = this.container.getSlot("slotoutput");
                var stored = this.liquidStorage.getLiquidStored();
                var amount = this.liquidStorage.getAmount(stored);
                var model = output.id != 0 && Barrel.modelget(output.id);
                var Texture = compost.id != 0 && Barrel.dataGet("null", compost.id, compost.data)
                    .texture;
                Texture ? this.barrelbox(c16 / 1000 * this.data.volume, Texture) : null;
                stored ? this.barrelbox(c16 * amount, [
                    ["ex_" + stored, 0]
                ]) : null;
                model ? this.barrelbox(c16, model.texture) : null;
                !this.data.ferment && !stored && !Texture && !model ? BlockRenderer.unmapAtCoords(this.x, this.y, this.z) : null
            },
            play: function(type, x, y, z) {
                var particles = new Particles.ParticleEmitter(x + 0.5, y + 0.6, z + 0.5);
                particles.setEmitRelatively(true);
                for (var amount = 3; amount > 0; amount--) {
					var x2 = Math.random() <= 0.5 ? 0.1 : Math.random() * 0.5;
					y2 = x2;
					z2 = -x2;
					x2 = Math.random() <= 0.5 ? -x2: x2;
					z2 = Math.random() <= 0.5 ? z2: -z2;
					particles.emit(type, 0, 0, 0.5, 0, x2, y2, z2);
                }
            },
            addLiquid: function(type, material, blockSource) {
                var output = this.container.getSlot("slotoutput");
                var input = this.container.getSlot("slotInput");
                switch (type) {
                    case "waterslime":
                        this.data.refresh = true;
                        if (this.threadProcess()>= 1) {
                            output.setSlot(341, output.count + 2, output.data);
                            this.liquidStorage.setAmount("water", 0);
                            this.liquidStorage.getLiquid("waterslime", 1);
                            this.data.refresh = false;
                        };
                        break;
                    case "water":
                    this.data.refresh = true;
                 //   alert(World.getLightLevel(this.x, this.y + 1, this.z))
                        if (World.getLightLevel(this.x, this.y + 1, this.z) < 3 && this.liquidStorage.getAmount("water")>=1&& this.threadProcess()>= 1) {
                            output.setSlot(79, output.count + 1, output.data);
                            this.liquidStorage.getLiquid("water", 1);
                            this.data.refresh = false;
                        } else if (blockSource.getBlockId(this.x, this.y - 1, this.z) == 110 && this.threadProcess()>= 1) {
                            this.liquidStorage.addLiquid("waterwitch", 1);
                            this.liquidStorage.getLiquid("water", 1);
                            this.data.refresh = false;
                        };
                        break;
                    case "lava":
                     this.data.refresh = true;
                        if (blockSource.getBlock(this.x, this.y + 1, this.z).id == 8 || blockSource.getBlock(this.x, this.y + 1, this.z).id == 9) {
						output.setSlot(49, output.count + 1, output.data);
						this.liquidStorage.getLiquid("lava", 1)
					};
					if (material && material.name == "wood") {
						if (Math.random() <= 0.05) {
							this.play(9, this.x, this.y, this.z)
						}
					
					if (this.threadProcess()>= 1) {
						blockSource.setBlock(this.x, this.y, this.z, 10, 0);
						this.data.refresh = false;
						BlockRenderer.unmapAtCoords(this.x, this.y, this.z)
					};
					};
					break
                }
            },
            
            settime: function(){
            var time = World.getThreadTime();
            this.data.starttime = time;
            },
            
            threadProcess: function(){
            var time = World.getThreadTime();
            this.data.basetime = (time - this.data.starttime) % 1000;
            return Math.abs(Number(Math.sin((time - this.data.starttime) * 0.09 * Math.PI / 180).toFixed(7)))
            },
            
            tick: function() {
            	StorageInterface.checkHoppers(this);
                var time = World.getThreadTime();
                var input = this.container.getSlot("slotInput");
                var compost = this.container.getSlot("slotcompost");
                var output = this.container.getSlot("slotoutput");
                var stored = this.liquidStorage.getLiquidStored();
                var amount = this.liquidStorage.getAmount(stored);
                var Ferment = Barrel.dataGet("null", input.id, input.data);
                var Volume = compost.id != 0 && Barrel.dataGet("null", compost.id, compost.data)
                    .volume * compost.count
                var liquidget = Barrel.dataGet(stored, input.id, input.data);
				var material = ToolAPI.getBlockMaterial(this.blockSource.getBlock(this.x, this.y, this.z).id);
                this.addLiquid(stored, material, this.blockSource);
                if(!this.data.refresh){
                this.settime();
                }
                if (Barrel.liquidset.limit[stored]) {
                    this.data.mainliquid = stored
                } else {
                    this.data.mainliquid = Getkey(Barrel.liquidset.limit, stored)
                }
                this.liquidStorage.liquidLimits = Barrel.liquidset.limit[this.data.mainliquid] || {}
                
                if (Barrel.liquidset.mix[this.data.mainliquid]) {
                    for (i in Barrel.liquidset.mix[this.data.mainliquid]) {
                        var amount = Math.min(this.liquidStorage.getAmount(this.data.mainliquid), this.liquidStorage.getAmount(i));
                        if(amount>0){
                        this.data.refresh = false;
                        }
                                                this.liquidStorage.addLiquid(Barrel.liquidset.mix[this.data.mainliquid][i], amount)
                        this.liquidStorage.getLiquid(this.data.mainliquid, amount);
                        if(this.liquidStorage.liquidAmounts[this.data.mainliquid] - amount <=0){
                delete this.liquidStorage.liquidAmounts[this.data.mainliquid]
                //alert(stored)
                }
                        this.liquidStorage.getLiquid(i, amount);
                if(this.liquidStorage.liquidAmounts[i]==0){
                delete this.liquidStorage.liquidAmounts[i]
                }
                
                    }
                };
                
                if (!this.data.ferment && Number(Math.cos(Volume * 0.09 * Math.PI / 180)
                    .toFixed(7)) > 0) {
                    this.setTransportSlots = ["slotInput"]
                    if (Ferment) {
                        compost.setSlot(input.id, Volume / Ferment.volume + 1, input.data);
                        input.setSlot(0, input.count - 1, 0)
                    }
                    this.data.volume = Volume
                } else {
                    if (!this.data.ferment) {
                       this.data.refresh = true;
                        this.setTransportSlots = [];
                        this.data.ferment = true;
                        this.data.volume = 1000
                    }
                };
                if (this.data.ferment) {
                    if ( this.threadProcess()>= 1) {
                        this.data.refresh = false;
                        this.data.ferment = false;
                        this.data.volume = 0;
                        compost.setSlot(0, 0, 0);
                        output.setSlot(3, output.count + 1, 0)
                    }
                };
                if (World.getWeather()
                    .rain != 0 && (!stored || stored == "water") && this.data.volume <= 0 && output.id <= 0) {
                    
                    this.data.canseesky = GenerationUtils.canSeeSky(this.x, this.y, this.z) ? true : false;
                    this.data.canseesky && this.liquidStorage.addLiquid("water", 5 / 10000)
                    
                }
                if (liquidget && liquidget.output) {
                    output.setSlot(liquidget.output, output.count + 1, output.data);
                    input.setSlot(0, 0, 0);
                    this.liquidStorage.getLiquid(stored, 1)
                };
                this.container.sendChanges();
                this.show()
            },
            setItem: function(id, data, count, id2, data2, player) {
                try {
                    var client = Network.getClientForPlayer(player);
                    if (count > 1) {
                        (new PlayerActor(player)).addItemToInventory(id, 1, data, null, true)
                        Entity.setCarriedItem(player, id2, count - 1, data2);
                    } else {
                    	Entity.setCarriedItem(player, id, 1, data);
                    }
                } catch (e) {}
            },
            setLiquid: function(type, id, data, count, stored, amount, empty, liquid, player) {
                var output = this.container.getSlot("slotoutput");
                switch (type) {
                    case "milk":
                        if (stored == "water" && amount >= 1) {
                            this.liquidStorage.addLiquid("milk", 1);
                            this.setItem(empty.id, empty.data, count, id, data, player);
                            return true
                        };
                        break
                };
                if (!stored && output.id == 0 && (!this.data.process || stored == type) && amount < 1) {
                    this.liquidStorage.addLiquid(liquid, 1);
                    this.setItem(empty.id, empty.data, count, id, data, player);
                    return true
                }
            },
            getLiquid: function(full, amount, stored, id, data, count, player) {
                try {
                    var client = Network.getClientForPlayer(player);
                    if (amount >= 1) {
                        this.liquidStorage.getLiquid(stored, 1);
                        Entity.setCarriedItem(player, id, count - 1, data);
                        (new PlayerActor(player)).addItemToInventory(full.id, 1, full.data, null, true);
                        return true
                    } else {
                    	Entity.setCarriedItem(player, full.id, 1, full.data);
                    }
                } catch (e) {}
            },
            getBlock: function(stored, input, id, data, count, player) {
                try {
                    var client = Network.getClientForPlayer(player);
                    if (!stored && !this.data.ferment) {
                        input.setSlot(id, input.count + 1, data);
                        Entity.setCarriedItem(player, id, count - 1, data);
                    }
                } catch (e) {}
            },
            click: function(id, count, data, coords, player) {
                var output = this.container.getSlot("slotoutput");
                var input = this.container.getSlot("slotInput");
                var stored = this.liquidStorage.getLiquidStored();
                var liquid = LiquidRegistry.getItemLiquid(id, data);
                var liquidget = Barrel.dataGet(stored, id, data);
                var amount = this.liquidStorage.getAmount(stored);
                //alert(amount);
                if(stored == "water" && amount >= 1 && Entity.getSneaking(player)){
                	Scales.getScaleByPlayer(player, "water").setValue(20);
                        amount=0;
                    this.liquidStorage.setAmount(stored, amount);
                	//return;
                }
                var full = LiquidRegistry.getFullItem(id, data, stored);
                var empty = LiquidRegistry.getEmptyItem(id, data);
                var playerget = Barrel.dataGet("null", id, data);
                try {
                    var client = Network.getClientForPlayer(player)
                } catch (e) {}
                Game.prevent();
                liquid && this.setLiquid(liquid, id, data, count, stored, amount, empty, liquid, player);
                (full && amount >= 1) && this.getLiquid(full, amount, stored, id, data, count, player);
                output.id <= 0 && playerget && this.getBlock(stored, input, id, data, count, player);
                if (liquidget && amount >= 1) {
                    try {
                        input.setSlot(id, input.count + 1, data);
                        Entity.setCarriedItem(player, id, count - 1, data);
                    } catch (e) {}
                };
               // alert(stored)
                if (output.id != 0) {
ScrutinyAPI_V1.giveScrutiny(player, "skyblock", "gl", "barrel", true);
                    this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 1, this.z + 0.5, output.id, output.count, output.data, null);
                    output.setSlot(0, 0, 0)
                };
                id == ItemID.ex_crookwriter && Debug.message("1" + this.data.process)
            },
            getScreenName: function(player, coords) {
                if (Entity.getCarriedItem(player).id == ItemID.ex_crookwriter) {
                    return "testUI";
                }
            },
            getScreenByName: function(screenName) {
                return screenName == "testUI" ? testUI : null;
            },
            destroyBlock: function(coords, player) {
                var input = this.container.getSlot("slotInput");
                var compost = this.container.getSlot("slotcompost");
                var output = this.container.getSlot("slotoutput");
                output.setSlot(0, 0, 0);
                compost.setSlot(0, 0, 0);
                input.setSlot(0, 0, 0);
                BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
                this.show()
            }
        };
        TileEntity.registerPrototype(BlockID[ID], prototype);
        StorageInterface.createInterface(BlockID[ID], {
	slots: {
		"slotInput": {input: true, output: false, isValid(item, side, tileEntity){
			let data = Barrel.dataGet("null", item.id, item.data);
			if(data)
				return tileEntity.data.volume <= 1000;
			//return false;
		}},
		"slotoutput": {input: false, output: true}
	}
});
    }
};
