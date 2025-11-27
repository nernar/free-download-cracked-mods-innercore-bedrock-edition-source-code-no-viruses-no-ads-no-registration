var energy_convertor_texture={
	side:"block_energy_convertor",
	top:"block_machine_iron"
}

if(Options.theme){
	energy_convertor_texture.side="light_energy_convertor";
	energy_convertor_texture.top="light_iron_machine";
}

Translation.addTranslation("Energy Convertor", {
	ru: "Энергоконвертор"
});

IDRegistry.genBlockID("machineEnergyConvertor");
Block.createBlock("machineEnergyConvertor", [
    {
        name: "Energy Convertor", texture: [
           [energy_convertor_texture.top,0], 
           [energy_convertor_texture.top, 0],
           [energy_convertor_texture.side, 0],
           [energy_convertor_texture.side, 0],
           [energy_convertor_texture.side, 0],
           [energy_convertor_texture.side, 0]
        ], inCreative: true
    }
]);

BlockRenderer.addRenderCallback(BlockID.machineEnergyConvertor, function(api, coords,block) {

	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1, 1, 1/16,BlockID.machineEnergyConvertor, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1/16, 1, 1, BlockID.machineEnergyConvertor, block.data);
	
	api.renderBoxId(coords.x, coords.y, coords.z, 15/16, 0, 0, 1, 1, 1,BlockID.machineEnergyConvertor, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 15/16, 1, 1, 1, BlockID.machineEnergyConvertor, block.data);
	
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1, 1/16, 1,BlockID.machineEnergyConvertor, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 15/16, 0, 1, 1, 1, BlockID.machineEnergyConvertor, block.data);
	
	api.renderBoxId(coords.x, coords.y, coords.z, 2/16, 2/16, 2/16, 14/16, 14/16, 14/16, 152, 0);
})
BlockRenderer.enableCustomRender(BlockID.machineEnergyConvertor);

Recipes.addShaped({ id: BlockID.machineEnergyConvertor, count: 1, data: 0 }, [
       "cbc",
        "bab",
        "cbc"
    ], ['a', BlockID.blockMachineIron, 0, 'b', BlockID.energy_cable, 0, 'c', 331, 0]);

    
    FactAPI.machine.registerEnergyTile(BlockID.machineEnergyConvertor, {
        isStorage: true,
        getEnergyStorage: function () {
            return 200;
        },
        energyTick: function (type, src) {
            var TRANSFER = 32;
            this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
        }
    });