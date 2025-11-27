var MaterialRegistry = {

    defineMaterial: function (vanilla, name, armor, durabilityModifier, blockTexture) {

        if (!vanilla) {
        
IDRegistry.genItemID("ingot"+ name);
Item.createItem("ingot"+ name, name+ "ingot", {name:"ingot_"+ name.toLowerCase(), meta:0}, {});

IDRegistry.genItemID("nugget" + name);
            Item.createItem("nugget" + name, name + " nugget", {name: "nugget_" + name.toLowerCase(), meta: 0}, {});        
            
            IDRegistry.genItemID("axe" + name);
            Item.createItem("axe" + name, name + " axe", {name: "axe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("hoe" + name);
            Item.createItem("hoe" + name, name + " hoe", {name: "hoe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("pickaxe" + name);
            Item.createItem("pickaxe" + name, name + " pickaxe", {
                name: "pickaxe_" + name.toLowerCase(),
                meta: 0
            }, {stack: 1});

            IDRegistry.genItemID("shovel" + name);
            Item.createItem("shovel" + name, name + " shovel", {
                name: "shovel_" + name.toLowerCase(),
                meta: 0
            }, {stack: 1});

            IDRegistry.genItemID("sword" + name);
            Item.createItem("sword" + name, name + " sword", {
                name: "sword_" + name.toLowerCase(),
                meta: 0
            }, {stack: 1});
            IDRegistry.genItemID("helmet" + name);
            Item.createArmorItem("helmet" + name, name + " helmet", {name: "helmet_" + name.toLowerCase()}, {
                type: "helmet",
                armor: armor[0],
                durability: durabilityModifier * 11,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("chestplate" + name);
            Item.createArmorItem("chestplate" + name, name + " chestplate", {name: "chestplate_" + name.toLowerCase()}, {
                type: "chestplate",
                armor: armor[1],
                durability: durabilityModifier * 16,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("leggings" + name);
            Item.createArmorItem("leggings" + name, name + " leggings", {name: "leggings_" + name.toLowerCase()}, {
                type: "leggings",
                armor: armor[2],
                durability: durabilityModifier * 15,
                texture: "armor/"+name.toLowerCase() + "_2.png"
            });

            IDRegistry.genItemID("boots" + name);
            Item.createArmorItem("boots" + name, name + " boots", {name: "boots_" + name.toLowerCase()}, {
                type: "boots",
                armor: armor[3],
                durability: durabilityModifier * 13,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });
            
IDRegistry.genBlockID("block" + name);
            Block.createBlock("block" + name, [
                {name: name + " block", texture: [[blockTexture, 0]], inCreative: true}
            ]);            
            ToolAPI.setTool(ItemID["axe" + name], name.toLowerCase(), ToolType.axe);
            ToolAPI.setTool(ItemID["hoe" + name], name.toLowerCase(), ToolType.hoe);
            ToolAPI.setTool(ItemID["pickaxe" + name], name.toLowerCase(), ToolType.pickaxe);
            ToolAPI.setTool(ItemID["shovel" + name], name.toLowerCase(), ToolType.shovel);
            ToolAPI.setTool(ItemID["sword" + name], name.toLowerCase(), ToolType.sword);
        }

        Callback.addCallback("PostLoaded", function () {
             if(ItemID["ingot"+name]){

            Recipes.addShaped({id: ItemID["sword" + name], count: 1, data: 0}, [
                " a ",
                " a ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["pickaxe" + name], count: 1, data: 0}, [
                "aaa",
                " s ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["shovel" + name], count: 1, data: 0}, [
                " a ",
                " s ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["axe" + name], count: 1, data: 0}, [
                "aa ",
                "as ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["hoe" + name], count: 1, data: 0}, [
                "aa ",
                " s ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["helmet" + name], count: 1, data: 0}, [
                "aaa",
                "a a",
                "   "
            ], ['a', ItemID["ingot" + name], 0]);

            Recipes.addShaped({id: ItemID["chestplate" + name], count: 1, data: 0}, [
                "a a",
                "aaa",
                "aaa"
            ], ['a', ItemID["ingot" + name], 0]);

            Recipes.addShaped({id: ItemID["leggings" + name], count: 1, data: 0}, [
                "aaa",
                "a a",
                "a a"
            ], ['a', ItemID["ingot" + name], 0]);

            Recipes.addShaped({id: ItemID["boots" + name], count: 1, data: 0}, [
                "   ",
                "a a",
                "a a"
            ], ['a', ItemID["ingot" + name], 0]);
			
			Recipes.addShaped({id: BlockID["block" + name], count: 1, data: 0}, [
                "aaa",
                "aaa",
                "aaa"
            ], ['a', ItemID["ingot" + name], 0]);
            }
        });


    }

};
