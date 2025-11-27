ModAPI.registerAPI("DMLCore", {
    DataModel: DataModel
});


DML.registerExpandImage("dml_scale.progress_rv", 36, 6, "progress");

ModAPI.addAPICallback("RecipeViewer", function(api){
    
    const utilSimulation = function(id){
        const chip = DataModel.getData(id);
        return {
            input: [{id: id - 0, count: 1, data: 0}, {id: ItemID.polymer_clay, count: 1, data: 0}],
            output: [{id: DataModel.getMatter(chip.type), count: 1, data: 0}, {id: chip.pristine, count: 1, data: 0}]
        };
    };
    
    api.Core.registerRecipeType("simulation_chamber", {
        contents: {
            icon: BlockID.simulation_chamber,
            params: {slot: "dml_slot.dark"},
            drawing: [
                {type: "frame", x: 180, y: 100, width: 640, height: 160, bitmap: "dml_frame.blue", bg: Color.parseColor("#111111"), scale: 6},
                {type: "frame", x: 386, y: 156, width: 228, height: 48, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 6},
                {type: "bitmap", x: 392, y: 162, bitmap: "dml_scale.progress_rv", scale: 6}
            ],
            elements: {
                input0: {type: "slot", x: 50, y: 120, bitmap: "dml_slot.blue", size: 120},
                input1: {type: "slot", x: 230, y: 120, size: 120},
                output0: {type: "slot", x: 654, y: 120, size: 120},
                output1: {type: "slot", x: 510, y: 270, size: 120}
            }
        },
        getList: function(id, data, isUsage){
            const list = [];
            let key = "";
            if(isUsage){
                if(DataModel.isDataModel(id)){
                    return [utilSimulation(id)];
                }
                if(id === ItemID.polymer_clay){
                    for(key in DataModel.data){
                        list.push(utilSimulation(key));
                    }
                    return list;
                }
                return list;
            }
            if(id in matterXP){
                for(key in DataModel.data){
                    if(DataModel.getMatter(DataModel.data.type) === id){
                        list.push(utilSimulation(key));
                    }
                }
                return list;
            }
            if(id in extractionRecipe){
                for(key in DataModel.data){
                    if(DataModel.data[key].pristine === id){
                        return [utilSimulation(key)];
                    }
                }
            }
            return list;
        }
    });
    
    
    api.Core.registerRecipeType("extraction_chamber", {
        contents: {
            icon: BlockID.extraction_chamber,
            drawing: [
                {type: "frame", x: 180, y: 100, width: 640, height: 160, bitmap: "dml_frame.blue", bg: Color.parseColor("#111111"), scale: 6},
                {type: "frame", x: 386, y: 156, width: 228, height: 48, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 6},
                {type: "bitmap", x: 392, y: 162, bitmap: "dml_scale.progress_rv", scale: 6}
            ],
            elements: {
                input0: {type: "slot", x: 230, y: 120, bitmap: "dml_slot.dark", size: 120},
                output0: {type: "slot", x: 654, y: 120, bitmap: "dml_slot.dark", size: 120}
            }
        },
        getList: function(id, data, isUsage){
            const list = [];
            let i = 0;
            if(isUsage){
                if(id in extractionRecipe){
                    for(i = 0; i < extractionRecipe[id].length; i++){
                        list.push({
                            input: [{id: id, count: 1, data: 0}],
                            output: [{id: extractionRecipe[id][i].id, count: extractionRecipe[id][i].count, data: extractionRecipe[id][i].data || 0}]
                        });
                    }
                    return list;
                }
            }
            for(let key in extractionRecipe){
            for(i = 0; i < extractionRecipe[key].length; i++){
                if(extractionRecipe[key][i].id === id && (extractionRecipe[key][i].data || 0) === (data === -1 ? 0 : data)){
                    list.push({
                        input: [{id: key - 0, count: 1, data: 0}],
                        output: [{id: id, count: extractionRecipe[key][i].count, data: data}]
                    });
                }
            }
            }
            return list;
        }
    });
    
});