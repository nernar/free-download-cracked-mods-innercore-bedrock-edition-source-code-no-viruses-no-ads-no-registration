IDRegistry.genBlockID("shammer_table");
Block.createBlock("shammer_table", [{name: "Hammer Crafting Table", texture: [["shammer_table", 0], ["shammer_table", 1], ["shammer_table", 2]], inCreative: true}]);

Callback.addCallback("PreLoaded", function(){
    Recipes2.addShaped(BlockID.shammer_table, "aba:bcb:aba", {a: {id: 1, data: 0}, b: 58, c: ItemID.shammer_wood});
});


const HammerGrid = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Hammer Crafting Table"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "bitmap", x: 700, y: 180, bitmap: "_workbench_bar", scale: 0.8}
    ],
    elements: {
        inputSlot0: {type: "slot", x: 360, y: 30},
        inputSlot1: {type: "slot", x: 420, y: 30},
        inputSlot2: {type: "slot", x: 480, y: 30},
        inputSlot3: {type: "slot", x: 540, y: 30},
        inputSlot4: {type: "slot", x: 600, y: 30},
        inputSlot5: {type: "slot", x: 360, y: 90},
        inputSlot6: {type: "slot", x: 420, y: 90},
        inputSlot7: {type: "slot", x: 480, y: 90},
        inputSlot8: {type: "slot", x: 540, y: 90},
        inputSlot9: {type: "slot", x: 600, y: 90},
        inputSlot10: {type: "slot", x: 480, y: 150},
        inputSlot11: {type: "slot", x: 480, y: 210},
        inputSlot12: {type: "slot", x: 480, y: 270},
        inputSlot13: {type: "slot", x: 480, y: 330},
        inputSlot14: {type: "slot", x: 480, y: 1000},//hidden
        outputSlot: {type: "slot", x: 780, y: 165, size: 90}
    }
});


RecipeTE.registerWorkbench("shammer_table", {
    cols:5,
    rows:3,
    GuiScreen:HammerGrid
});


ModAPI.addAPICallback("RecipeViewer", function(api){
    api.Core.registerTEWorkbenchRecipeType("shammer_table", {
        drawing: [
            {type: "bitmap", x: 590, y: 230, bitmap: "_workbench_bar", scale: 1.6}
        ],
        elements: {
            input0: {type: "slot", x: 160, y: 40, size: 80},
			input1: {type: "slot", x: 240, y: 40, size: 80},
			input2: {type: "slot", x: 320, y: 40, size: 80},
			input3: {type: "slot", x: 400, y: 40, size: 80},
			input4: {type: "slot", x: 480, y: 40, size: 80},
			input5: {type: "slot", x: 160, y: 120, size: 80},
			input6: {type: "slot", x: 240, y: 120, size: 80},
			input7: {type: "slot", x: 320, y: 120, size: 80},
			input8: {type: "slot", x: 400, y: 120, size: 80},
			input9: {type: "slot", x: 480, y: 120, size: 80},
			input10: {type: "slot", x: 320, y: 200, size: 80},
			input11: {type: "slot", x: 320, y: 280, size: 80},
			input12: {type: "slot", x: 320, y: 360, size: 80},
			input13: {type: "slot", x: 320, y: 440, size: 80},
			input14: {type: "slot", x: 320, y: 1000, size: 80},//hidden
			output0: {type: "slot", x: 750, y: 200, size: 120}
        }
    }, RecipeTE.getRecipes("shammer_table"));
});