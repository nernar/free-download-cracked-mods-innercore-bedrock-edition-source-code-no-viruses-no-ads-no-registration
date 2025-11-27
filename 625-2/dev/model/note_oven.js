NC.ovenMachine = (function () {
    var recipe = {
        
    };
    
    var fuel = {};
    var translate = {};
    var ovenModelArray = [
        [1/16, 0, 0, 15/16, 12 / 16, 1 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
            ["lapis_block", 0]
        ]],
        [
            0, 11 / 16, 0, 1, 12 / 16, 10 / 16, [
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0]
            ]
        ],
        [0, 0, 0, 1 / 16, 12 / 16, 10 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],

        [15 / 16, 0, 0, 1, 12 / 16, 10 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
        [0, 0, 0, 1, 1 / 16, 10 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
        [1 / 16, 1 / 16, 1 / 16, 0, 11 / 16, 9 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
        [1, 1 / 16, 1 / 16, 17 / 16, 11 / 16, 9 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
       
        [1 / 16, 1 / 16, 7 / 16, 15 / 16, 11 / 16, 8 / 16, [
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0]
        ]]
    ];
    IDRegistry.genItemID(PREFIX + "note_oven");
    Item.createItem(PREFIX + "note_oven", "Note Oven", {
        name: "nc_lapis_block"
    }, {
        inTech: true,
        stack: 64
    });
    directionBlockAPI.creatBlock(PREFIX + "note_oven", "Note Oven", false);
    directionBlockAPI.createModel1(PREFIX + "note_oven", ovenModelArray);
    directionBlockAPI.bundItem(ItemID[PREFIX + "note_oven"], PREFIX + "note_oven", true,ovenModelArray);

    for (var grindi = 0; grindi <= 3; grindi += 1) {
        TileEntity.registerPrototype(BlockID[PREFIX + "note_oven" + grindi], {

            defaultValues: {
                progress: 0,
                burn: 0,
                id: 0,
                burnmax: 0,
                size: 0.5
            },
            

                init: function () {
                    
                },

                destroy: function () {
                    
                },
                tick: function () {
                    var that = this;
                    var slotSource = that.container.getSlot("slotSource");
                    
                    var slotFuel = that.container.getSlot("slotFuel");

                    var slotResult = that.container.getSlot("slotResult");
                    var burn = NC.ovenMachine.getRecipeFuel(slotFuel.id);
                    this.container.setScale("burningScale", this.data.burn / this.data.burnmax || 0);
                    this.container.setScale("progressScale", this.data.progress / 800);
                    if (slotFuel.count < 1) {
                        that.container.clearSlot("slotFuel");
                    }
                    if (slotSource.count < 1) {
                        that.container.clearSlot("slotSource");
                    }
                    if (that.data.burn === 0) {
                        if (burn && slotFuel.count >= 1) {
                            that.data.burn += burn;
                            that.data.burnmax = burn;
                            if (LiquidRegistry.getItemLiquid(slotFuel.id, slotFuel.data)) {
                                var empty = LiquidRegistry.getEmptyItem(slotFuel.id, slotFuel.data);
                                slotFuel.id = empty.id;
                                slotFuel.data = empty.data;
                            } else {
                                that.container.setSlot("slotFuel", slotFuel.id, slotFuel.count - 1, 0);
                            }
                        }
                    } else if (that.data.burn >= 1) {
                        that.data.burn -= 1;
                        if (! NC.ovenMachine.getRecipe(slotSource.id)) {
                            if (that.data.progress >= 1) {
                                that.data.progress -= 1;
                            }
                        } else {
                            if (that.data.progress <= 799) {
                                that.data.progress += 1;
                                
                                


                            } else if (that.data.progress === 800) {
                                that.changeItem();
                                
                            }
                        }
                    }
                    if (that.data.burn === 0 && that.data.progress >= 1) {
                        that.data.progress -= 1;
                    }

                },
                changeItem: function () {
                    var that = this;
                    var slotFuel = that.container.getSlot("slotFuel");
                    var slotSource = that.container.getSlot("slotSource");
                    var slotResult = that.container.getSlot("slotResult");
                    if (slotResult.id === ItemID[PREFIX + "record_empty"] && slotResult.count === 1) {
                        that.container.setSlot("slotSource", slotSource.id, slotSource.count - 1, 0);
                        
                        if(Math.random() < NC.ovenMachine.getRecipe(slotSource.id))
                        that.container.setSlot("slotResult",   NC.recordArr[chance.integer({ min: 0, max: NC.recordArr.length - 1 })], 1, 0);
                        else that.container.setSlot("slotResult", ItemID[PREFIX + "record_broken"],1,0);
                        that.data.progress = 0;
                    }
                    /* else if (slotResult.id ===   NC.ovenMachine.getRecipe(slotSource.id)) {
                        that.container.setSlot("slotSource", slotSource.id, slotSource.count - 1, 0);
                        that.container.setSlot("slotResult", slotResult.id, slotResult.count + 1, 0);
                        that.data.progress = 0;
                    }
                    */
                },
                click: function () {
                    
                },
                getGuiScreen: function () {
                    return ovenGui;
                }
        });
    }

    return {
        registerRecipe: function (a, b) {
                recipe[a] = b;
                return this;
            },
            getRecipe: function (a) {
                
                    return recipe[a];
           
            },
            
          
            registerRecipeFuel: function(a, v) {
                 fuel[a] = v;
             },
             getRecipeFuel: function(a) {
                 return fuel[a];
             },
            registerTranslate: function (stringid, json) {
                translate[stringid] = json;
                return this;
            },
            getTranslate: function (id, lang) {
                return translate[id][lang] ? translate[id][lang] : translate[id]["en"];
            }
    };
}());

Callback.addCallback("PreLoaded", function(){
    NC.ovenMachine
    .registerRecipeFuel(ItemID[PREFIX + "note"],40);
});

Translation.addTranslation("Note Oven", {zh: "音炉"});

Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "note_oven"], count: 1, data: 0}, [
		"yyy",
		"yxy",
		"yyy"
	], ['x', BlockID[PREFIX + "music_glass"],0,'y',ItemID[PREFIX + "note_steel"],0]);
});	
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: BlockID[PREFIX + "music_glass"], count: 1, data: 0}, [
		"yyy",
		"yxy",
		"yyy"
	], ['x', 20,0,'y',ItemID[PREFIX + "note_steel"],0]);
});	