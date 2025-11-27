/*
BUILD INFO:
  dir: core/script
  target: main.js
  files: 11
*/



// file: block/LavaBlock.js

IDRegistry.genBlockID("lavaBlock");
Block.createBlock("lavaBlock", [{name: "Lava Block", texture: [["lava_block", 0]], inCreative: true}])




// file: block/WaterBlock.js

IDRegistry.genBlockID("waterBlock");
Block.createBlock("waterBlock", [{name: "Water Block", texture: [["water_block", 0]], inCreative: true}])




// file: block/StructureBlock.js

IDRegistry.genBlockID("structureBlock");
Block.createBlock("structureBlock", [{name: "Structure Block", texture: [["structure_block", 0]]}])




// file: block/StructureCenterBlock.js

IDRegistry.genBlockID("structureCenterBlock");
Block.createBlock("structureCenterBlock", [{name: "Structure Center Block", texture: [["structure_center_block", 0]]}])




// file: item/StructureWand.js

IDRegistry.genItemID("structureWand");
Item.createItem("structureWand", "Structure Wand", {name:  "structure_wand"}, {stack: 1});




// file: item/DeleteStructure.js

IDRegistry.genItemID("deleteStructure");
Item.createItem("deleteStructure", "Delete Structure", {name:  "delete_structure"}, {stack: 1});




// file: item/SaveStructure.js

IDRegistry.genItemID("saveStructure");
Item.createItem("saveStructure", "Save Structure", {name:  "save_structure"}, {stack: 1});




// file: item/ClearStructureData.js

IDRegistry.genItemID("clearStructureData");
Item.createItem("clearStructureData", "Clear Structure Data", {name:  "clear_structure_data"}, {stack: 1});




// file: item/NextStructure.js

IDRegistry.genItemID("nextStructure");
Item.createItem("nextStructure", "Next Structure", {name:  "next_structure"}, {stack: 1});




// file: item/StructuralVisibilityHammer.js

IDRegistry.genItemID("structurVisibilityHammer");
Item.createItem("structurVisibilityHammer", "Structure Visibility Hammer", {name:  "structural_visibility_hammer"}, {stack: 1});




// file: Structure.js

var structureJSONData = {
    main_pos: null,
    structure: []
};

var structureDataFilesList = ["structure1Data.json", "structure2Data.json", "structure3Data.json", "structure4Data.json", "structure5Data.json"];

var structureFilesList = ["structure1.json", "structure2.json", "structure3.json", "structure4.json", "structure5.json"];

var structureEdit = 0;
var center = false;

Callback.addCallback('ItemUse', function (coords, item, block) {
    if (item.id == ItemID.structureWand) {
        if (block.id !== BlockID.structureBlock && block.id !== BlockID.structureCenterBlock) {
            if (structureJSONData.main_pos === null) {
                structureJSONData.main_pos = {x: coords.x, y: coords.y, z: coords.z};
                center = true;
            }
            if (block.id == BlockID.lavaBlock) {
                structureJSONData.structure.push({
                    coords: {x: coords.x, y: coords.y, z: coords.z},
                    block: {id: 10, data: 0}
                });
            } else if (block.id == BlockID.waterBlock) {
                structureJSONData.structure.push({
                    coords: {x: coords.x, y: coords.y, z: coords.z},
                    block: {id: 8, data: 0}
                });
            } else {
                structureJSONData.structure.push({
                    coords: {x: coords.x, y: coords.y, z: coords.z},
                    block: {id: block.id, data: block.data}
                });
            }
            
            if (center === true) {
                World.setBlock(coords.x, coords.y, coords.z, BlockID.structureCenterBlock);
                center = false;
            } else {
                World.setBlock(coords.x, coords.y, coords.z, BlockID.structureBlock);
            }
            
            FileTools.WriteJSON(__dir__ + "/structure/" + structureDataFilesList[structureEdit], structureJSONData, true);
        } else {
            TranslateMessage("§l§e Warning: Structure block cannot be part of a structure", {ru: "§l§e Предупреждение: Структурный блок не может быть частью структуры"})
        }
    } else if (item.id == ItemID.saveStructure) {
        var structureJSON = {
            structure: []
        };
        
        for (var i = 0; i < structureJSONData.structure.length; i++) {
            var absoluteCoords = {
                x: structureJSONData.structure[i].coords.x - structureJSONData.main_pos.x,
                y: structureJSONData.structure[i].coords.y - structureJSONData.main_pos.y,
                z: structureJSONData.structure[i].coords.z - structureJSONData.main_pos.z
            };
            
            structureJSON.structure.push({
                coords: absoluteCoords,
                block: {
                    id: structureJSONData.structure[i].block.id,
                    data: structureJSONData.structure[i].block.data
                }
            });
        }
        
        TranslateMessage(structureFilesList[structureEdit] + " has been saved", {ru: structureFilesList[structureEdit] + " была сохранена"});
        FileTools.WriteJSON(__dir__ + "/structure/" + structureFilesList[structureEdit], structureJSON, true);
        clearStructureTemp(structureEdit);
    } else if (item.id == ItemID.clearStructureData) {
        clearStructureTemp(structureEdit);
        TranslateMessage(structureDataFilesList[structureEdit] + " - has been cleared", {ru: structureDataFilesList[structureEdit] + " - была очищена"});
    } else if (item.id == ItemID.nextStructure) {
        if (structureEdit === structureDataFilesList.length - 1) {
            structureEdit = 0;
        } else {
            structureEdit += 1;
        }
        
        structureJSONData.main_pos = null;
        structureJSONData.structure = [];
        
        TranslateMessage(structureFilesList[structureEdit] + " has been selected" ,{ru: "Структура " + structureFilesList[structureEdit] + " была выбрана"})
    } else if (item.id == ItemID.deleteStructure) {
        FileTools.WriteJSON(__dir__ + "/structure/" + structureFilesList[structureEdit], {}, true);
        TranslateMessage(structureFilesList[structureEdit] + " has been removed", {ru: structureFilesList[structureEdit] + " была удалена"})
    } else if (item.id == ItemID.structurVisibilityHammer) {
        structureCheak = FileTools.ReadJSON(__dir__ + "/structure/" + structureFilesList[structureEdit]);
        if (structureCheak && Object.keys(structureCheak).length !== 0) {
            placeStructure(coords, structureCheak);
        }
    }
});

function clearStructureTemp(structureIndex) {
    var structureData = FileTools.ReadJSON(__dir__ + "/structure/" + structureDataFilesList[structureIndex]);
    
    if (structureData && Object.keys(structureData).length !== 0) {
        for (var i = 0; i < structureData.structure.length; i++) {
            var placedBlock = structureData.structure[i];
            var blockCoords = placedBlock.coords;
            var originalBlock = placedBlock.block;
    
            World.setBlock(blockCoords.x, blockCoords.y, blockCoords.z, originalBlock.id, originalBlock.data);
        }
    }
    
    structureJSONData.main_pos = null;
    structureJSONData.structure = [];
    
    FileTools.WriteJSON(__dir__ + "/structure/" + structureDataFilesList[structureIndex], {}, true);
};


function TranslateMessage(content, translate) {
    var lang = Translation.getLanguage();
    
    if (translate.hasOwnProperty(lang)) {
        Game.message(translate[lang]);
    } else {
        Game.message(content);
    }
};

function placeStructure(coords, structure) {
    for (var i = 0; i < structure.structure.length; i++) {
        var blockInfo = structure.structure[i];
        var blockX = coords.x + blockInfo.coords.x;
        var blockY = coords.y + blockInfo.coords.y;
        var blockZ = coords.z + blockInfo.coords.z;
        World.setBlock(blockX, blockY, blockZ, blockInfo.block.id, blockInfo.block.data);
    }
};




