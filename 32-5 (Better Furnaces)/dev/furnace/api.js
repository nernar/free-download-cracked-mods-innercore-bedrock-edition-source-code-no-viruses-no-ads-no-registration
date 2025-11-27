const ValidFunc = {
    source: function(id, count, data){
        return !!Recipes.getFurnaceRecipeResult(id, data);
    },
    fuel: function(id, count, data){
        return Recipes.getFuelBurnDuration(id, data) > 0;
    },
    result: function(){
        return false;
    }
};


const Furnace = {
    
    genTexArray: function(level, active){
        const meta = level * 3;
        return [
            ["better_furnace", meta],
            ["better_furnace", meta],
            ["better_furnace", meta],
            ["better_furnace", meta + (active ? 2 : 1)],
            ["better_furnace", meta],
            ["better_furnace", meta]
        ];
    },
    
    genTexRender: function(level, active){
        const render = new ICRender.Model();
        const model = BlockRenderer.createTexturedBlock(this.genTexArray(level, active));
        render.addEntry(model);
        return render;
    },
    
    window: new UI.StandartWindow({
        standart: {
            header: {text: {text: "Better Furnace"}},
            inventory: {standart: true},
            background: {standart: true}
        },
        drawing: [
            {type: "bitmap", x: 565, y: 175, bitmap: "bfurnace_burn_0", scale: 4},
            {type: "bitmap", x: 660, y: 170, bitmap: "bfurnace_progress_0", scale: 4}
        ],
        elements: {
            scaleBurn: {type: "scale", x: 565, y: 175, bitmap: "bfurnace_burn_1", scale: 4, direction: 1},
            scaleProgress: {type: "scale", x: 660, y: 170, bitmap: "bfurnace_progress_1", scale: 4},
            scaleLiquid: {type: "scale", x: 660, y: 240, bitmap: "bfurnace_tank", overlay: "bfurnace_tank", scale: 4, direction: 1},
            slotUpgrade0: {type: "slot", x: 350, y: 80, size: 80},
            slotUpgrade1: {type: "slot", x: 350, y: 160, size: 80},
            slotUpgrade2: {type: "slot", x: 350, y: 240, size: 80},
            slotSource: {type: "slot", x: 550, y: 80, size: 80, isValid: ValidFunc.source},
            slotFuel: {type: "slot", x: 550, y: 240, size: 80, isValid: ValidFunc.fuel},
            slotResult: {type: "slot", x: 780, y: 150, size: 100, isValid: ValidFunc.result},
            subslotSource: {type: "slot", x: 470, y: 80, size: 80, isValid: ValidFunc.source},
            subslotFuel: {type: "slot", x: 470, y: 240, size: 80, isValid: ValidFunc.fuel},
            subslotResult: {type: "slot", x: 880, y: 150, size: 100, isValid: ValidFunc.result}
        }
    }),
    
    modifier: [0.625, 0.5, 0.25, 0.04, 0.02],
    
    getSpeedModifier: function(level){
        return this.modifier[level];
    },
    
    getSmeltingTime: function(level){
        return 200 * this.modifier[level];
    }
    
};