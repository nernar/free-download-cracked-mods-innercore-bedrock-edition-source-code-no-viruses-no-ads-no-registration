let cableAPI = {
    renderSet: function (idblock, siz) {
        var group = ICRender.getGroup("sj-wire");
        var id = idblock;
        var width = siz;
        group.add(id, -1);

        var boxes = [{
            side: [1,
                0,
                0],
            box: [0.5 + width / 2,
                0.5 - width / 2,
                0.5 - width / 2,
                1,
                0.5 + width / 2,
                0.5 + width / 2]},
            {
                side: [-1,
                    0,
                    0],
                box: [0,
                    0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2]},
            {
                side: [0,
                    1,
                    0],
                box: [0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    1,
                    0.5 + width / 2]},
            {
                side: [0,
                    -1,
                    0],
                box: [0.5 - width / 2,
                    0,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2]},
            {
                side: [0,
                    0,
                    1],
                box: [0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    1]},
            {
                side: [0,
                    0,
                    -1],
                box: [0.5 - width / 2,
                    0.5 - width / 2,
                    0,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2]}];

        var model = new ICRender.Model();

        model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0));

        for (var i in boxes) {

            var box = boxes[i].box;
            var side = boxes[i].side;

            model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
            .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
        }

        BlockRenderer.setStaticICRender(id, -1, model);
    },
    addGroup: function (id) {
        var group = ICRender.getGroup("sj-wire");
        group.add(id, -1);
    },
    renderStjSet: function (idblock, siz) {
        var group = ICRender.getGroup("stj-wire");
        var id = idblock;
        var width = siz;
        group.add(id, -1);

        var boxes = [{
            side: [1,
                0,
                0],
            box: [0.5 + width / 2,
                0.5 - width / 2,
                0.5 - width / 2,
                1,
                0.5 + width / 2,
                0.5 + width / 2]},
            {
                side: [-1,
                    0,
                    0],
                box: [0,
                    0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2]},
            {
                side: [0,
                    1,
                    0],
                box: [0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    1,
                    0.5 + width / 2]},
            {
                side: [0,
                    -1,
                    0],
                box: [0.5 - width / 2,
                    0,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2]},
            {
                side: [0,
                    0,
                    1],
                box: [0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    1]},
            {
                side: [0,
                    0,
                    -1],
                box: [0.5 - width / 2,
                    0.5 - width / 2,
                    0,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2]}];

        var model = new ICRender.Model();

        model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0));

        for (var i in boxes) {

            var box = boxes[i].box;
            var side = boxes[i].side;

            model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
            .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
        }

        BlockRenderer.setStaticICRender(id, -1, model);
    },
    addStj: function (id) {
        var group = ICRender.getGroup("stj-wire");
        group.add(id, -1);
    },
}

var AirCable = {
    set: function (idblock, siz) {
        var group2 = ICRender.getGroup("sc-wire");
        var id = idblock;
        var width = siz;
        group2.add(id, -1);

        var boxes = [{
            side: [1,
                0,
                0],
            box: [0.5 + width / 2,
                0.5 - width / 2,
                0.5 - width / 2,
                1,
                0.5 + width / 2,
                0.5 + width / 2]},
            {
                side: [-1,
                    0,
                    0],
                box: [0,
                    0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2]},
            {
                side: [0,
                    1,
                    0],
                box: [0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    1,
                    0.5 + width / 2]},
            {
                side: [0,
                    -1,
                    0],
                box: [0.5 - width / 2,
                    0,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2]},
            {
                side: [0,
                    0,
                    1],
                box: [0.5 - width / 2,
                    0.5 - width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    1]},
            {
                side: [0,
                    0,
                    -1],
                box: [0.5 - width / 2,
                    0.5 - width / 2,
                    0,
                    0.5 + width / 2,
                    0.5 + width / 2,
                    0.5 - width / 2]}];

        var model = new ICRender.Model();

        model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0));

        for (var i in boxes) {

            var box = boxes[i].box;
            var side = boxes[i].side;

            model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
            .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group2, false));
        }

        BlockRenderer.setStaticICRender(id, -1, model);
    },
    addGroup: function (id) {
        var group2 = ICRender.getGroup("sc-wire");
        group2.add(id, -1);
    }
};


var leaves = [];
var burnItems = []
var Colding = [];
var compressorRecipe = []
var SpacesMachine = {
    addCollectorLeave: function(id) {
        leaves.push({
            id: id
        })
    },
    addCoal: function(id) {
        burnItems.push({
            id: id
        })
    },
    addIce: function(id) {
        Colding.push({
            id: id
        })
    },
    registerStandartMachine: function(id, Standart) {

        cableAPI.addGroup(id)

        ToolAPI.registerBlockMaterial(id, "stone");
        Block.setDestroyTime(id, 3);
        TileEntity.registerPrototype(id, Standart);
        EnergyTileRegistry.addEnergyTypeForId(id, EU);
        EnergyTileRegistry.addEnergyTypeForId(id, RF);
        EnergyTileRegistry.addEnergyTypeForId(id, ft);
        EnergyTileRegistry.addEnergyTypeForId(id, sj);
    },
    registerO2SJMachine: function(id, Standart) {

        cableAPI.addGroup(id)

        ToolAPI.registerBlockMaterial(id, "stone");
        Block.setDestroyTime(id, 3);
        TileEntity.registerPrototype(id, Standart);
        EnergyTileRegistry.addEnergyTypeForId(id, EU);
        EnergyTileRegistry.addEnergyTypeForId(id, RF);
        EnergyTileRegistry.addEnergyTypeForId(id, ft);
        EnergyTileRegistry.addEnergyTypeForId(id, sj);
        EnergyTileRegistry.addEnergyTypeForId(id, ob);
    },
    //addReceptForElectricCompressor: function(oneingot,twoingot){
    // compressorRecipe.push({oneingot: oneingot;twoingot: twoingot});

    //},
};
// теперь массив a выглядит вот так: [2, 3 4, 5]

function oxygenData(number,id){this.blockSource.setBlock(this.x, this.y, this.z, BlockID.oxygen_storage_module, this.blockSource.getBlockData(this.x, this.y, this.z)=number)}


IDRegistry.genBlockID("mekanism_block");
Block.createBlock("mekanism_block", [{
    name: "Machine block", texture: [["Machine", 0]], inCreative: true
}]);


IDRegistry.genBlockID("stj_mekanism_block");
Block.createBlock("stj_mekanism_block", [{
    name: "Electrical machine block", texture: [["Dangerous Lent", 0], ["Compressed Drill", 0], ["Compressed Drill Side", 0]], inCreative: true
}]);


IDRegistry.genBlockID("stj_mekanism_block_ports");
Block.createBlockWithRotation("stj_mekanism_block_ports", [{
    name: "Electrical machine block and ports", texture: [["Dangerous Lent", 0], ["Compressed Drill", 0], ["Compressed Drill Side", 0], ["Compressed Drill Side", 0], ["Strength Machine", 0], ["Port 2", 0]], inCreative: true
}]);


IDRegistry.genBlockID("mekanism_block_ports");
Block.createBlockWithRotation("mekanism_block_ports", [{
    name: "Machine block and ports", texture: [["Machine", 0], ["Machine", 0], ["Machine", 0], ["Machine", 0], ["Machine Input", 0], ["Machine Output", 0]], inCreative: true
}]);


IDRegistry.genBlockID("mekanism_block_ports_1");
Block.createBlockWithRotation("mekanism_block_ports_1", [{
    name: "Machine block and ports", texture: [["Machine", 0], ["Machine", 0], ["machine_side", 0], ["Machine", 0], ["Machine Input", 0], ["Machine Input", 0]], inCreative: true
}]);

IDRegistry.genBlockID("advanced_mekanism_block_ports_1");
Block.createBlockWithRotation("advanced_mekanism_block_ports_1", [{
    name: "Advanced machine block and ports", texture: [["machine_b", 0], ["machine_b", 0], ["machine_side_gl", 0], ["machine_b", 0], ["machine_input", 0], ["machine_input", 0]], inCreative: true
}]);



IDRegistry.genBlockID("advanced_mekanism_block");
Block.createBlock("advanced_mekanism_block", [{
    name: "Advanced machine block", texture: [["machine_b", 0], ["machine_b", 0], ["machine_side_gl", 0], ["machine_b", 0], ["machine_b", 0], ["machine_b", 0]], inCreative: true
}]);



IDRegistry.genBlockID("spaces_lent");
Block.createBlock("spaces_lent", [{
    name: "Dangerous Lent", texture: [["Dangerous Lent", 0]], inCreative: true
}]);
Translation.addTranslation("Dangerous Lent", {
    ru: "§6Лента опасности"
});







IDRegistry.genBlockID("compressor_sj");
Block.createBlockWithRotation("compressor_sj", [{
    name: "Compressor", texture: [["Machine", 0], ["Machine", 0], ["Machine", 0], ["Compressor", 0], ["Machine Input", 0], ["Machine", 0]], inCreative: true
}]);


var CompressinG = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Compressor")}},
        inventory: {
            standart: true
        }, background: {
            standart: true
        }},
    drawing: [{
        type: "bitmap", x: 590, y: 150, bitmap: "compressor_background", scale: 4.2
    },
        {
            type: "bitmap", x: 630, y: 150, bitmap: "fire_background", scale: 4.1
        }],
    elements: {
        "progressScale": {
            type: "scale", x: 590, y: 130, direction: 0, bitmap: "compressor_slace", scale: 4.2
        },
        "BurningScale": {
            type: "scale", x: 630, y: 150, direction: 1, bitmap: "fire_scale", scale: 4.1
        },

        "CoalSlot": {
            type: "slot", x: 530, y: 300, bitmap: "coalslot", size: 60
        },
        "slot1": {
            type: "slot", x: 410, y: 110, bitmap: "slot", size: 60
        },
        "slot2": {
            type: "slot", x: 470, y: 110, bitmap: "slot", size: 60
        },
        "slot3": {
            type: "slot", x: 530, y: 110, bitmap: "slot", size: 60
        },

        "slot4": {
            type: "slot", x: 410, y: 170, bitmap: "slot", size: 60
        },
        "slot5": {
            type: "slot", x: 470, y: 170, bitmap: "slot", size: 60
        },
        "slot6": {
            type: "slot", x: 530, y: 170, bitmap: "slot", size: 60
        },

        "slot7": {
            type: "slot", x: 410, y: 230, bitmap: "slot", size: 60
        },
        "slot8": {
            type: "slot", x: 470, y: 230, bitmap: "slot", size: 60
        },
        "slot9": {
            type: "slot", x: 530, y: 230, bitmap: "slot", size: 60
        },

        "slotResult": {
            type: "slot", x: 830, y: 190, bitmap: "slot", size: 70
        },
        Status:
        {
            type: "text", x: 650, y: 290, width: 100, height: 30, text: "Status: "
        },
    }
});

TileEntity.registerPrototype(BlockID.compressor_sj, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return CompressinG
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        burning: 0,
        burningMax: 1000,

    },

    tick: function() {
        if (this.data.burning != 0) {
            this.container.setText("Status", Translation.translate("Status: have energy"))};
        if (this.data.burning == 0) {
            this.container.setText("Status", Translation.translate("Status: don't have energy"))};
        if (this.data.progress != 0) {
            this.container.setText("Status", Translation.translate("Status: working"))};
        var CoalSlot = this.container.getSlot("CoalSlot").id
        /*   if(CoalSlot.id == VanillaItemID.coal || ItemID.burned_coal || VanillaItemID.charcoal){this.data.burning += 300;
            CoalSlot.count --
        }*/
        this.container.setScale("progressScale", this.data.progress / 1000);
        this.container.setScale("BurningScale", this.data.burning / 1000);

    },
    /*
let canisterFuel = this.container.getSlot("canisterFuel");

this.container.setScale("FuelScale", this.data.liquid / 40);
this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
*/
}
);

IDRegistry.genBlockID("circuit_fabricator");
Block.createBlockWithRotation("circuit_fabricator", [{
    name: "Circuit Fabricator",
    texture: [["Machine",
        0],
        ["Machine",
            0],
        ["Machine",
            0],
        ["circuit_fabricator",
            0],
        ["Machine Input",
            0],
        ["Machine",
            0]],
    inCreative: true
}]);



IDRegistry.genBlockID("electric_compressor_sj");
Block.createBlockWithRotation("electric_compressor_sj", [{
    name: "Electric compressor",
    texture: [["machine_b",
        0],
        ["machine_b",
            0],
        ["machine_b",
            0],
        ["electric_compressor",
            0],
        ["machine_input",
            0],
        ["machine_b",
            0]],
    inCreative: true
}]);



var CompressinGElectric = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Electric Compressor")}},
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }},
    drawing: [{
        type: "bitmap",
        x: 590,
        y: 150,
        bitmap: "compressor_background",
        scale: 4.2
    },
        {
            type: "bitmap",
            x: 346,
            y: 320,
            bitmap: "slace_en_0",
            scale: 3
        },
        {
            type: "bitmap",
            x: 335,
            y: 320,
            bitmap: "en_noy",
            scale: 3
        }],
    elements: {
        "progressScale": {
            type: "scale",
            x: 590,
            y: 130,
            direction: 0,
            bitmap: "compressor_slace",
            scale: 4.2
        },
        "Elect4": {
            type: "scale",
            x: 630,
            y: 150,
            direction: 1,
            bitmap: "fire_scale",
            scale: 4.1
        },

        "EnergySlot": {
            type: "slot",
            x: 530,
            y: 300,
            bitmap: "Others.en_slot",
            size: 60
        },
        "slot1": {
            type: "slot",
            x: 410,
            y: 110,
            bitmap: "slot",
            size: 60
        },
        "slot2": {
            type: "slot",
            x: 470,
            y: 110,
            bitmap: "slot",
            size: 60
        },
        "slot3": {
            type: "slot",
            x: 530,
            y: 110,
            bitmap: "slot",
            size: 60
        },

        "slot4": {
            type: "slot",
            x: 410,
            y: 170,
            bitmap: "slot",
            size: 60
        },
        "slot5": {
            type: "slot",
            x: 470,
            y: 170,
            bitmap: "slot",
            size: 60
        },
        "slot6": {
            type: "slot",
            x: 530,
            y: 170,
            bitmap: "slot",
            size: 60
        },

        "slot7": {
            type: "slot",
            x: 410,
            y: 230,
            bitmap: "slot",
            size: 60
        },
        "slot8": {
            type: "slot",
            x: 470,
            y: 230,
            bitmap: "slot",
            size: 60
        },
        "slot9": {
            type: "slot",
            x: 530,
            y: 230,
            bitmap: "slot",
            size: 60
        },
        ENERGYBar: {
            type: "scale",
            x: 346,
            y: 320,
            bitmap: "slace_en_1",
            scale: 3,
            direction: 0
        },
        Energy: {
            type: "scale",
            x: 335,
            y: 320,
            bitmap: "en_yes",
            scale: 3,
            direction: 1
        },
        "slotResult1": {
            type: "slot",
            x: 830,
            y: 221,
            bitmap: "slot",
            size: 60
        },
        "slotResult2": {
            type: "slot",
            x: 830,
            y: 161,
            bitmap: "slot",
            size: 60
        },
        Status:
        {
            type: "text",
            x: 650,
            y: 290,
            width: 100,
            height: 30,
            text: "Статус: "
        },
    }
});

SpacesMachine.registerStandartMachine(BlockID.electric_compressor_sj, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return CompressinGElectric
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        energy: 0,
        energyMax: 1000,
    },
    getCapacity: function() {
        return 1000
    },
    energyReceive: function(type, amount, voltage) {
        amount = Math.min(amount, 1000)
        var add = Math.min(amount, this.getCapacity() - this.data.energy);
        this.data.energy += add
        return add
    },
    tick: function() {
        this.container.sendChanges();
        battery.add(this.container, this.data, "EnergySlot")
        if (this.container.getSlot("EnergySlot").id == ItemID.battery_infinity && this.data.energy != this.data.energyMax) {
            this.data.energy += 1
        }
        this.container.setScale("progressScale", this.data.progress / 500);
        this.container.setScale("ENERGYBar", this.data.energy / 1000);
        this.container.setScale("Energy", this.data.energy / 100);
        if (this.data.energy != 0) {
            this.container.setText("Status", Translation.translate("Status: have energy"))};
        if (this.data.energy == 0) {
            this.container.setText("Status", Translation.translate("Status: don't have energy"))};
        if (this.data.progress != 0) {
            this.container.setText("Status", Translation.translate("Status: don't have energy"))};

        var slot1 = this.container.getSlot("slot1");
        var slot2 = this.container.getSlot("slot2");
        /*for(var i in compressorRecipe){
    if(this.data.energy >= 200 && slot1.id == compressorRecipe[i].oneingot && slot2.id == compressorRecipe[i].twoingot){alert("работает!");this.data.progress++;
        if(
            this.data.progress>=500
            ){
                this.data.energy-=200;
                this.data.progress=0; slot1.count--;
                slot2.count--;
                this.data.setSlot("slotResult1", compressorRecipe[i].twoingot)
           this.data.setSlot("slotResult2", compressorRecipe[i].twoingot)
            }
    }
    }*/
    },
    energyTick: function(type, src) {

        let output = Math.min(1000, this.data.energy)
        this.data.energy += src.add(output) - output;

    },
    /*
let canisterFuel = this.container.getSlot("canisterFuel");

this.container.setScale("FuelScale", this.data.liquid / 40);
this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
*/
}
);



let CircuitFabricatorUI = new UI.StandartWindow({
    standart:
    {
        header:
        {
            text: {
                text:
                Translation.translate("Curcuit Fabricator")
            }},
        inventory:
        {
            standart: true
        },
        background:
        {
            standart: true
        }},
    drawing: [{
        type: "bitmap",
        x: 355,
        y: 65,
        bitmap: "Others.line1_0",
        scale: 3.8
    },
        {
            type: "bitmap",
            x: 436,
            y: 295,
            bitmap: "slace_en_0",
            scale: 3.2
        },
        {
            type: "bitmap",
            x: 425,
            y: 295,
            bitmap: "en_noy",
            scale: 3.2
        },
        {
            type: "bitmap",
            x: 568,
            y: 150,
            bitmap: "Others.line2_0",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 720,
            y: 95,
            bitmap: "Others.line3_0",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 565,
            y: 65,
            bitmap: "Others.circuitfabri_scale_0",
            scale: 3.2
        }],
    elements: {
        DiamondSlot:
        {
            type: "slot",
            x: 340,
            y: 40,
            size: 60,
            bitmap: "Others.diamond_slot"
        },
        EnergySlot:
        {
            type: "slot",
            x: 330,
            y: 290,
            size: 60,
            bitmap: "Others.en_slot"
        },
        FabrSlot0:
        {
            type: "slot",
            x: 515,
            y: 135,
            size: 60,
            bitmap: "Others.fabricator_slot"
        },
        FabrSlot1:
        {
            type: "slot",
            x: 515,
            y: 195,
            size: 60,
            bitmap: "Others.fabricator_slot"
        },
        DustSlot:
        {
            type: "slot",
            x: 682,
            y: 130,
            size: 60,
            bitmap: "Others.dust_slot"
        },
        Slot1:
        {
            type: "slot",
            x: 745,
            y: 50,
            size: 60
        },
        ResultatSlot:
        {
            type: "slot",
            x: 769,
            y: 278,
            size: 60
        },
        Line1:
        {
            type: "scale",
            x: 355,
            y: 65,
            bitmap: "Others.line1_1",
            scale: 2.1,
            direction: 1
        },
        Line2:
        {
            type: "scale",
            x: 568,
            y: 150,
            bitmap: "Others.line2_1",
            scale: 2.1,
            direction: 0
        },
        Line3:
        {
            type: "scale",
            x: 720,
            y: 95,
            bitmap: "Others.line3_1",
            scale: 2.1,
            direction: 0
        },
        Burning:
        {
            type: "scale",
            x: 565,
            y: 65,
            bitmap: "Others.circuitfabri_scale_1",
            scale: 3.2,
            direction: 0
        },

        ENERGYBar: {
            type: "scale",
            x: 436,
            y: 295,
            bitmap: "slace_en_1",
            scale: 3.2,
            direction: 0
        },
        Energy: {
            type: "scale",
            x: 425,
            y: 295,
            bitmap: "en_yes",
            scale: 3.2,
            direction: 1
        },
        ELECTRIC: {
            type: "text",
            x: 563,
            y: 260,
            width: 100,
            height: 30,
            text: "Status:"
        },
    }
}
);



SpacesMachine.registerStandartMachine(BlockID.circuit_fabricator, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return CircuitFabricatorUI
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        active: false,
        energy: 0,
        energyMax: 1000,
    },
    getCapacity: function() {
        return 1000
    },
    energyReceive: function(type, amount, voltage) {
        amount = Math.min(amount, 1000)
        var add = Math.min(amount, this.getCapacity() - this.data.energy);
        this.data.energy += add
        return add
    },
    canReceiveEnergy: function(type, side) {
        return true;
    },

    tick: function() {
        this.container.sendChanges();
        battery.add(this.container, this.data, "EnergySlot");
        if (this.container.getSlot("EnergySlot").id == ItemID.battery_infinity && this.data.energy != this.data.energyMax) {
            this.data.energy += 1
        }
        var DiamondSlot = this.container.getSlot("DiamondSlot").id
        var FabrSlot0 = this.container.getSlot("FabrSlot0").id
        var FabrSlot1 = this.container.getSlot("FabrSlot1").id
        var DustSlot = this.container.getSlot("DustSlot").id
        var Slot1 = this.container.getSlot("Slot1").id
        var ResultatSlot = this.container.getSlot("ResultatSlot").id
        if (this.data.energy != 0) {
            this.container.setText("ELECTRIC", Translation.translate("Status: have energy"))};
        if (this.data.energy == 0) {
            this.container.setText("ELECTRIC", Translation.translate("Status: don't have energy"))};
        if (this.data.progress != 0) {
            this.container.setText("ELECTRIC", Translation.translate("Status: working"))};
        this.container.setScale("Energy", this.data.energy / 1000);
        this.container.setScale("Burning", this.data.progress / 1000);
        this.container.setScale("Line3", this.data.progress / 700);
        this.container.setScale("Line1", this.data.progress / 200);
        this.container.setScale("Line2", this.data.progress / 400);

        this.container.setScale("ENERGYBar", this.data.energy / 1000);
        /*if(this.data.energy <= 300){for(i in Fabricator){
    if(DiamondSlot == Fabricator[i].DiamondSlot){
        if(FabrSlot0 == Fabricator[i].FabrSlot0){
            if(FabrSlot1 == Fabricator[i].FabrSlot1){
                if(DustSlot == Fabricator[i].DustSlot){if(Slot1 == Fabricator[i].Slot1){this.data.progress++
                    if(this.data.progress<=1000){this.data.energy - 500;
                        DiamondSlot.count--;
                        FabrSlot0.count--;
                        FabrSlot1.count--;
                        DustSlot.count--;
                        this.data.progress = 0;
                        this.container.setSlot("ResultatSlot", ItemID.Fabricator[i].ResultatSlot, 1, 0)
                    }
                }}}}
}}}
        /*
let canisterFuel = this.container.getSlot("canisterFuel");

this.container.setScale("FuelScale", this.data.liquid / 40);
this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
*/
    },
    energyTick: function(type, src) {

        let output = Math.min(1000, this.data.energy)
        this.data.energy += src.add(output) - output;

    },
});






IDRegistry.genBlockID("fuel_loader");
Block.createBlockWithRotation("fuel_loader", [{
    name: "Fuel Loader",
    texture: [["Machine",
        0],
        ["Machine",
            0],
        ["refinery_front",
            0],
        ["Fuel Loader",
            0],
        ["Machine Output",
            0],
        ["Machine Output",
            0]],
    inCreative: true
}]);

let FuelLoader = new UI.StandartWindow({
    standart:
    {
        header:
        {
            text: {
                text:
                Translation.translate("Fuel Loader")
            }},
        inventory:
        {
            standart: true
        },
        background:
        {
            standart: true
        }},
    drawing: [{
        type: "bitmap",
        x: 268,
        y: 190,
        bitmap: "Liquid_null",
        scale: 3.8
    },
        {
            type: "bitmap",
            x: 550,
            y: 70,
            bitmap: "slace_en_0",
            scale: 3
        },
        {
            type: "bitmap",
            x: 690,
            y: 70,
            bitmap: "en_noy",
            scale: 3
        }],
    elements: {
        canisterFuel:
        {
            type: "slot",
            x: 355,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        FuelScale:
        {
            type: "scale",
            x: 268,
            y: 190,
            bitmap: "Liquid_fuel",
            scale: 3.8,
            direction: 1
        },
        EnergySlot: {
            type: "slot",
            x: 455,
            y: 260,
            size: 70,
            bitmap: "Others.en_slot"
        },
        ENERGYBar: {
            type: "scale",
            x: 550,
            y: 70,
            bitmap: "slace_en_1",
            scale: 3,
            direction: 0
        },
        Energy: {
            type: "scale",
            x: 690,
            y: 70,
            bitmap: "en_yes",
            scale: 3,
            direction: 1
        },
        ELECTRIC: {
            type: "text",
            x: 565,
            y: 113,
            width: 100,
            height: 30,
            text: "Space Joule"
        },
    }
}
);

SpacesMachine.registerStandartMachine(BlockID.fuel_loader, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return FuelLoader
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        active: false,
        energy: 0,
        energyMax: 1000,
        liquid: 0,
    },
    energyReceive: function(type, amount, voltage) {
        amount = Math.min(amount, 950)
        var add = Math.min(amount, this.getCapacity() - this.data.energy);
        this.data.energy += add
        return add
    },
    canReceiveEnergy: function(type, side) {
        return true;
    },
    getCapacity: function() {
        return 1000
    },
    tick: function() {
        this.container.sendChanges();
        battery.add(this.container, this.data, "EnergySlot");
        if (this.container.getSlot("EnergySlot").id == ItemID.battery_infinity && this.data.energy != this.data.energyMax) {
            this.data.energy += 1
        }
        let canisterFuel = this.container.getSlot("canisterFuel");
        this.container.setScale("Energy", this.data.energy / 1000);
        this.container.setScale("ENERGYBar", this.data.energy / 1000);
        this.container.setScale("FuelScale", this.data.liquid / 40);
        this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
        if (this.container.getSlot("canisterFuel").id == ItemID.bucket_of_fuel && this.data.liquid <= 40) {
            this.container.setSlot("canisterFuel", 325, 1, 0);
            this.data.liquid += 5;
        }
    },
    energyTick: function(type, src) {

        let output = Math.min(950, this.data.energy)
        this.data.energy += src.add(output) - output;

    },
});







IDRegistry.genBlockID("enclosed_aluminum_wire");
Block.createBlockWithRotation("enclosed_aluminum_wire", [{
    name: "Enclosed Aluminum Wire",
    texture: [["Deco Block",
        0],
        ["Deco Block",
            0],
        ["Enclosed Aluminum Wire",
            0],
        ["Enclosed Aluminum Wire",
            0],
        ["Enclosed Aluminum Wire",
            0],
        ["Enclosed Aluminum Wire",
            0]],
    inCreative: true
}]);
Translation.addTranslation("Enclosed Aluminum Wire", {
    ru: "Герметичная алюминиевая труба"
});
sj.registerWire(BlockID.enclosed_aluminum_wire, 200);

IDRegistry.genBlockID("enclosed_fluid_pipe");
Block.createBlockWithRotation("enclosed_fluid_pipe", [{
    name: "Enclosed Oxygen Pipe",
    texture: [["Deco Block",
        0],
        ["Deco Block",
            0],
        ["Enclosed Fluid Pipe",
            0],
        ["Enclosed Fluid Pipe",
            0],
        ["Enclosed Fluid Pipe",
            0],
        ["Enclosed Fluid Pipe",
            0]],
    inCreative: true
}]);
Translation.addTranslation("Enclosed Oxygen Pipe", {
    ru: "Герметичная кислородная труба"
});
sj.registerWire(BlockID.enclosed_fluid_pipe, 400);

IDRegistry.genBlockID("enclosed_heavy_aluminum_wire");
Block.createBlockWithRotation("enclosed_heavy_aluminum_wire", [{
    name: "Enclosed Heavy Aluminum Wire",
    texture: [["Deco Block",
        0],
        ["Deco Block",
            0],
        ["Enclosed Heavy Aluminum Wire",
            0],
        ["Enclosed Heavy Aluminum Wire",
            0],
        ["Enclosed Heavy Aluminum Wire",
            0],
        ["Enclosed Heavy Aluminum Wire",
            0]],
    inCreative: true
}]);
Translation.addTranslation("Enclosed Heavy Aluminum Wire", {
    ru: "Герметичная улучшенная алюминиевая труба"
});
sj.registerWire(BlockID.enclosed_heavy_aluminum_wire, 400);

IDRegistry.genBlockID("collector_sc");
Block.createBlockWithRotation("collector_sc", [{
    name: "Oxygen Collector",
    texture: [["collector",
        0],
        ["collector",
            0],
        ["collector",
            0],
        ["collector",
            0],
        ["Machine Input",
            0],
        ["Machine Oxygen Output",
            0]],
    inCreative: true
}]);
Translation.addTranslation("Oxygen Collector", {
    ru: "Кислородный коллектор"
});

IDRegistry.genItemID("damaged_leave");
Item.createItem("damaged_leave", "Damaged Leave", {
    name: "damage_leave",
    meta: 0
}, {
    stack: 64,
    inCreative: true
});
Translation.addTranslation("Damaged Leave", {
    ru: "Уничтоженный листок"
});

Recipes.addFurnaceFuel(ItemID.damaged_leave, 0, 20)

SpacesMachine.registerO2SJMachine(BlockID.collector_sc, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return Collector
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        active: false,
        oxygen: 0,
        oxygenMax: 1000,
        energy: 0,
        energyMax: 1500,
        leaveS: 0,
        leavesMax: 1000,
    },
    isEnergySource: function() {
        return true
    },
    canReceiveEnergy: function() {
        return true
    },
    getCapacity: function() {
        return 1500
    },
    tick: function() {
        this.container.sendChanges();
        battery.add(this.container, this.data, "slot1");
        if (this.container.getSlot("EnergySlot").id == ItemID.battery_infinity && this.data.energy != this.data.energyMax) {
            this.data.energy += 1
        }
        //ChargeItemRegistry.getEnergyFrom("slot1", "sj", 1500, 900, 1, false)

        if (this.dimension == 0 && energy >=5) {
            if (World.getThreadTime()%20 == 0) {
            this.data.oxygen += Math.min(1, this.data.oxygenMax - this.data.oxygen); this.data.energy -=1;
        }};
        if (this.container.getSlot("EnergySlot").id == ItemID.battery_infinity && this.data.energy != this.data.energyMax) {
            this.data.energy += 1
        }
        if (this.data.oxygen >= 5) {
            this.container.setText("Status", Translation.translate("Status: input oxygen"));
            Particles.addParticle(
                Native.ParticleType.Portal, this.x + 0.5,
                this.y + 0.5,
                this.z + 0.5,
                Math.random()/20,
                Math.random() + 0.1,
                Math.random() + 0.1);
        };

        if (
            this.data.oxygen == 1000
        ) {
            this.container.setText
            ("Status", Translation.translate("Status: storage full"));
        };

        if (this.data.oxygen == 0) {
            this.container.setText("Status", Translation.translate("Status: waiting"));
        };
        let slot1 = this.container.getSlot("slot1");

        this.container.setScale("scala", this.data.oxygen / 1000);
        this.container.setScale("ENERGYBar", this.data.energy / 1500);
        this.container.setScale("Energy", this.data.energy / 700);
        this.container.setScale("o2", this.data.oxygen / 100);
        this.container.setText("OXYGEN", "Ob: " + this.data.oxygen + " / " + this.data.oxygenMax);
        this.container.setText("LeavesStatus", "Кислорода использовано: " + this.data.leaveS + " / " + this.data.leavesMax);
        if (this.dimension != 0) {
            if (World.getThreadTime()%20 == 0) {
                for (var i in leaves) {
                    if (this.data.energy != 0) {
                        if (this.blockSource.getBlockId(this.x, this.y+1, this.z) == leaves[i].id ||
                            this.blockSource.getBlockId(this.x, this.y, this.z+1) == leaves[i].id ||
                            this.blockSource.getBlockId(this.x+1, this.y, this.z) == leaves[i].id ||
                            this.blockSource.getBlockId(this.x, this.y, this.z-1) == leaves[i].id ||
                            this.blockSource.getBlockId(this.x-1, this.y, this.z) == leaves[i].id ||
                            this.blockSource.getBlockId(this.x, this.y-1, this.z) == leaves[i].id) {
                            this.data.oxygen += 1;
                            this.data.energy -= 5;
                            this.data.leaveS++
                            /*  if(this.data.leaveS < 969){this.blockSource.setGrassColorRGB(this.x,this.z+1,192);
            this.blockSource.setGrassColorRGB(this.x,this.z-1,192)
            this.blockSource.setGrassColorRGB(this.x-1,this.z,192)
            this.blockSource.setGrassColorRGB(this.x+1,this.z+1,192);
            this.blockSource.setGrassColorRGB(this.x,this.z,192);
            }*/
                            if (this.data.leaveS == 999) {
                                this.data.leaveS = 0;
                                if (
                                    this.blockSource.getBlockId(this.x, this.y+1, this.z) == leaves[i].id) {
                                    this.blockSource.destroyBlock(this.x, this.y+1, this.z, false);
                                    this.blockSource.spawnDroppedItem(this.x, this.y+1, this.z, ItemID.damaged_leave, 1, 0)
                                };
                                if (
                                    this.blockSource.getBlockId(this.x, this.y, this.z+1) == leaves[i].id) {
                                    this.blockSource.destroyBlock(this.x, this.y+1, this.z, false);
                                    this.blockSource.spawnDroppedItem(this.x, this.y, this.z+1, ItemID.damaged_leave, 1, 0)
                                };
                                if (this.blockSource.getBlockId(this.x+1, this.y, this.z) == leaves[i].id) {
                                    this.blockSource.destroyBlock(this.x+1, this.y, this.z, false);
                                    this.blockSource.spawnDroppedItem(this.x+1, this.y, this.z, ItemID.damaged_leave, 1, 0)
                                };

                                if (this.blockSource.getBlockId(this.x, this.y, this.z-1) == leaves[i].id) {
                                    this.blockSource.destroyBlock(this.x, this.y, this.z-1, false);
                                    this.blockSource.spawnDroppedItem(this.x, this.y, this.z-1, ItemID.damaged_leave, 1, 0)
                                };
                                if (this.blockSource.getBlockId(this.x-1, this.y, this.z) == leaves[i].id) {
                                    this.blockSource.destroyBlock(this.x-1, this.y, this.z, false);
                                    this.blockSource.spawnDroppedItem(
                                        this.x-1, this.y, this.z, ItemID.damaged_leave, 1, 0)
                                };
                                if (this.blockSource.getBlockId(this.x, this.y-1, this.z) == leaves[i].id) {
                                    this.blockSource.destroyBlock(this.x, this.y-1, this.z, false);
                                    this.blockSource.spawnDroppedItem(this.x, this.y-1, this.z, ItemID.damaged_leave, 1, 0)

                                }
                            }
                        }}}}}
    },
    energyReceive: function(type, amount, voltage) {

        amount = Math.min(amount, 1550)
        var add = Math.min(amount, this.getCapacity() - this.data.energy);
        this.data.energy += add
        return add
    },
    energyTick: function(type, src) {
        if (this.dimension == 0) {
            if (type == "ob") {
                src.addAll(1);
            }}
        if (type == "sj") {
            let output = Math.min(1500, this.data.energy)
            this.data.energy += src.add(output) - output;
        };
    },
});



let Collector = new UI.StandartWindow({
    standart:
    {
        header:
        {
            text: {
                text:
                Translation.translate("Сборщик кислорода")
            }},
        inventory:
        {
            standart: true
        },
        background:
        {
            standart: true
        }},
    drawing: [{
        type: "bitmap",
        x: 400,
        y: 190,
        bitmap: "Others.collector_scale_0",
        scale: 4.3
    },
        {
            type: "bitmap",
            x: 680,
            y: 130,
            bitmap: "o2_noy",
            scale: 6.0
        },
        {
            type: "bitmap",
            x: 379,
            y: 300,
            bitmap: "slace_en_0",
            scale: 3.4
        },
        {
            type: "bitmap",
            x: 370,
            y: 300,
            bitmap: "en_noy",
            scale: 3.4
        }],
    elements: {
        slot1:
        {
            type: "slot",
            x: 400,
            y: 110,
            size: 70,
            bitmap: "Others.en_slot"
        },
        scala:
        {
            type: "scale",
            x: 400,
            y: 190,
            bitmap: "Others.collector_scale_1",
            scale: 4.3,
            direction: 0
        },
        o2:
        {
            type: "scale",
            x: 680,
            y: 130,
            bitmap: "o2_yes",
            scale: 6.0,
            direction: 1
        },
        OXYGEN:
        {
            type: "text",
            x: 480,
            y: 135,
            width: 100,
            height: 30,
            text: "Oxygen Bar"
        },
        Status:
        {
            type: "text",
            x: 420,
            y: 250,
            width: 100,
            height: 30,
            text: "Статус: Нейтральный"
        },
        LeavesStatus:
        {
            type: "text",
            x: 420,
            y: 280,
            width: 99,
            height: 20,
            text: "Кислорода использовано:"
        },
        ENERGYBar: {
            type: "scale",
            x: 379,
            y: 300,
            bitmap: "slace_en_1",
            scale: 3.4,
            direction: 0
        },
        Energy: {
            type: "scale",
            x: 370,
            y: 300,
            bitmap: "en_yes",
            scale: 3.4,
            direction: 1
        },
    }
}
);

IDRegistry.genBlockID("oxygen_storage_module");
Block.createBlockWithRotation("oxygen_storage_module", [{
    name: "Oxygen Storage Module",
    texture: [["Machine",
        0],
        ["Machine",
            0],
        ["Machine",
            0],
        ["Oxygen Storage Module",
            0],
        ["Machine Input",
            0],
        ["Machine Oxygen Input",
            0]],
    inCreative: true
},
{
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 1",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 2",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 3",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 4",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 5",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 6",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 7",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 8",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 9",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 10",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 11",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 12",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 13",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }, {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 14",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    },/* {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module 15",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    },*/ {
        name: "Oxygen Storage Module",
        texture: [["Machine",
            0],
            ["Machine",
                0],
            ["Machine",
                0],
            ["Oxygen Storage Module Full",
                0],
            ["Machine Input",
                0],
            ["Machine Oxygen Input",
                0]],
        inCreative: false
    }]);
Translation.addTranslation("Oxygen Storage Module", {
    ru: "Кислородное хранилище"
});

SpacesMachine.registerO2SJMachine(BlockID.oxygen_storage_module, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return OxygenStorage
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        active: false,
        energy: 0,
        energyMax: 20000,
    },
    isEnergySource: function() {
        return true
    },
    canReceiveEnergy: function() {
        return false
    },
    energyReceive: function(type, amount, voltage) {
        if (type == "oxygenbar") {
            amount = Math.min(amount, 450)
            var add = Math.min(amount, this.getCapacity() - this.data.energy);
            this.data.energy += add
            return add
        }
    },
    getCapacity: function() {
        return 20000
    },
    tick: function() {
        this.container.sendChanges();
        

        
        if (this.dimension == 0) {
            if (World.getThreadTime()%20 == 0) {
                this.data.energy += Math.min(1, this.data.energyMax - this.data.energy);
            }}
        let slot1 = this.container.getSlot("slot1");

        this.container.setScale("scala", this.data.energy / 20000);
        this.container.setScale("o2", this.data.energy / 100);
        this.container.setText("OXYGEN", "Ob: " + this.data.energy + " / " + this.data.energyMax);
    },
    energyTick: function(type, src) {
        if (type == "oxygenbar") {
            let output = Math.min(450, this.data.energy)
            this.data.energy += src.add(output) - output;
        }}
});



let OxygenStorage = new UI.StandartWindow({
    standart:
    {
        header:
        {
            text: {
                text:
                Translation.translate("Кислородное хранилище")
            }},
        inventory:
        {
            standart: true
        },
        background:
        {
            standart: true
        }},
    drawing: [{
        type: "bitmap",
        x: 400,
        y: 190,
        bitmap: "Others.Scala",
        scale: 4.3
    },
        {
            type: "bitmap",
            x: 680,
            y: 150,
            bitmap: "o2_noy",
            scale: 4.0
        }],
    elements: {
        slot1:
        {
            type: "slot",
            x: 400,
            y: 110,
            size: 70,
            bitmap: "Others.O2Slot"
        },
        scala:
        {
            type: "scale",
            x: 400,
            y: 190,
            bitmap: "Others.Scala2",
            scale: 4.3,
            direction: 0
        },
        o2:
        {
            type: "scale",
            x: 680,
            y: 150,
            bitmap: "o2_yes",
            scale: 4.0,
            direction: 1
        },
        OXYGEN:
        {
            type: "text",
            x: 480,
            y: 135,
            width: 100,
            height: 30,
            text: "Oxygen Bar"
        },
    }
}
);

/*
 $ - slot1
 # - Scala
 $
 #######
    */

IDRegistry.genBlockID("refinery_sc");
Block.createBlockWithRotation("refinery_sc", [{
    name: "Refinery",
    texture: [["Machine",
        0],
        ["refinery_top",
            0],
        ["Machine",
            0],
        ["refinery_side",
            0],
        ["refinery_front",
            0],
        ["Machine Oxygen Input",
            0]],
    inCreative: true
}]);


let ClearFuel = new UI.StandartWindow({
    standart:
    {
        header:
        {
            text: {
                text:
                Translation.translate("Refinery")
            }},
        inventory:
        {
            standart: true
        },
        background:
        {
            standart: true
        }},
    drawing: [{
        type: "bitmap",
        x: 268,
        y: 190,
        bitmap: "Liquid_null",
        scale: 3.8
    },
        {
            type: "bitmap",
            x: 769,
            y: 190,
            bitmap: "Liquid_null",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 667,
            y: 190,
            bitmap: "Liquid_null",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 565,
            y: 190,
            bitmap: "Liquid_null",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 500,
            y: 70,
            bitmap: "slace_en_0",
            scale: 3
        },
        {
            type: "bitmap",
            x: 640,
            y: 70,
            bitmap: "en_noy",
            scale: 3
        },
    ],
    elements: {
        canister1:
        {
            type: "slot",
            x: 355,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        canister1i1:
        {
            type: "slot",
            x: 445,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        OilScall:
        {
            type: "scale",
            x: 268,
            y: 190,
            bitmap: "Liquid_oil",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},

        FUELScall: {
            type: "scale",
            x: 769,
            y: 190,
            bitmap: "Liquid_fuel",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},
        canister2:
        {
            type: "slot",
            x: 855,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        canister3: {
            type: "slot",
            x: 755,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        canister4: {
            type: "slot",
            x: 651,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        CEROSINScall: {
            type: "scale",
            x: 667,
            y: 190,
            bitmap: "Others.Liquid_cerosin",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /*    RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},
        RUBBERScall: {
            type: "scale",
            x: 565,
            y: 190,
            bitmap: "Others.Liquid_rubber",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},
        ENERGYBar: {
            type: "scale",
            x: 500,
            y: 70,
            bitmap: "slace_en_1",
            scale: 3,
            direction: 0
        },
        Energy: {
            type: "scale",
            x: 640,
            y: 70,
            bitmap: "en_yes",
            scale: 3,
            direction: 1
        },
        ELECTRIC: {
            type: "text",
            x: 690,
            y: 80,
            width: 100,
            height: 30,
            text: "Space Joule"
        },
        EnergySlot: {
            type: "slot",
            x: 455,
            y: 260,
            size: 70,
            bitmap: "Others.en_slot"
        },
    }
}
);

SpacesMachine.registerStandartMachine(BlockID.refinery_sc, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return ClearFuel
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        active: false,
        energy: 0,
        energyMax: 500,
        fuel: 0,
        oil: 0,
        kerosene: 0,
        rubber: 0,
    },
    energyReceive: function(type, amount, voltage) {
        amount = Math.min(amount, 450)
        var add = Math.min(amount, this.getCapacity() - this.data.energy);
        this.data.energy += add
        return add
    },
    canReceiveEnergy: function(type, side) {
        return true;
    },
    getCapacity: function() {
        return 500
    },
    tick: function() {
        this.container.sendChanges();
        battery.add(this.container, this.data, "EnergySlot");
        if (this.container.getSlot("EnergySlot").id == ItemID.battery_infinity && this.data.energy != this.data.energyMax) {
            this.data.energy += 1
        }

        this.container.setScale("Energy", this.data.energy / 500);
        this.container.setScale("ENERGYBar", this.data.energy / 500);
        this.container.setScale("OilScall", this.data.oil / 40);
        this.container.setScale("CEROSINScall", this.data.kerosene / 40);
        this.container.setScale("RUBBERScall", this.data.rubber / 40);
        this.container.setScale("FUELScall", this.data.fuel / 40);
        this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
        if (this.data.energy >= 50) {

            if (this.container.getSlot("canister1").id == ItemID.bucket_of_oil && this.data.kerosene != 40 && this.data.fuel != 40 && this.data.rubber != 40) {
                this.container.setSlot("canister1", 325, 1, 0);
                this.data.fuel += 5;
                this.data.oil += 5;
                this.data.energy -= 45;
                if (this.data.kerosene != 40 && this.data.fuel != 40) {
                    this.data.oil -= 5;
                };
                this.data.kerosene += 5;
                this.data.rubber += 5
                if (this.data.fuel == 40 || this.data.rubber == 40 || this.data.kerosene == 40 && this.container.getSlot("canister1").id == ItemID.bucket_of_oil) {
                    this.container.setSlot("canister1", 325, 1, 0); this.data.oil += 0
                }
            }
            /* if(this.container.getSlot("canister1").id == ItemID.oil_canister, 6 && this.data.kerosene != 40 && this.data.fuel != 40 && this.data.rubber != 40) {
     this.container.setSlot("canister1", 325, 1, 0);
     this.data.fuel += 5;
     this.data.oil += 5;
     this.data.energy -= 45;
     if(this.data.kerosene != 40 && this.data.fuel != 40){
     this.data.oil -= 5;};
     this.data.kerosene += 5;
     this.data.rubber += 5
     if(this.data.fuel == 40 || this.data.rubber == 40 || this.data.kerosene == 40 && this.container.getSlot("canister1").id == ItemID.bucket_of_oil){this.container.setSlot("canister1", 325, 1, 0); this.data.oil += 0}
    }*/

            if (this.container.getSlot("canister1i1").id == VanillaItemID.bucket && this.data.oil >= 5) {
                this.container.setSlot("canister1i1", ItemID.bucket_of_oil, 1, 0);
                this.data.oil -= 5;
            };
            if (this.container.getSlot("canister3").id == VanillaItemID.bucket && this.data.kerosene >= 5) {
                this.container.setSlot("canister3", ItemID.bucket_of_cerosin, 1, 0);
                this.data.kerosene -= 5;
            };
            if (this.container.getSlot("canister2").id == VanillaItemID.bucket && this.data.fuel >= 5) {
                this.container.setSlot("canister2", ItemID.bucket_of_fuel, 1, 0);
                this.data.fuel -= 5;
            };
            var one = [0,
                1,
                2,
                3,
                4,
                5,
                6]
            var two = [1,
                2,
                3,
                4,
                5,
                6]
            var three = [1,
                2,
                3,
                4,
                5,
                6]
            var canislot = ["canister1i1,canister3,canister2,canister4"]
            var idis = ["oil_canister,cerosin_canister,fuel_canister,rubber_canister"]
            var value = ["oil,kerosene,fuel,rubber"]
            for (var i in one[i]) {
                idis[i];
                two[i];
                value[i];
                canislot[i];
                three[i];
                if (this.container.getSlot(canislot).id == ItemID[idis], 1, one && this.data[value] >= 5) {
                    if (this.data.progress == 0) {
                        this.data.progress += 1; if (this.data.progress <= 70) {
                            this.container.setSlot(canislot, ItemID[idis], 1, one);

                            this.data[value] -= three;
                        };
                        this.data.progress = 0
                    }
                }

            };

            if (this.container.getSlot("canister4").id == VanillaItemID.bucket && this.data.rubber >= 5) {
                this.container.setSlot("canister4", ItemID.bucket_of_rubber, 1, 0);
                this.data.rubber -= 5;
            };
        };
    },
    energyTick: function(type, src) {

        let output = Math.min(450, this.data.energy)
        this.data.energy += src.add(output) - output;

    },
});

/*
 $ - slot1
 # - Scala
 $
 #######
    */




//SpacesMachine.addReceptForElectricCompressor(ItemID.ingot_steel_spacescraft, ItemID.compressed_steel)

//SpacesMachine.addReceptForElectricCompressor(VanillaItemID.iron_ingot, ItemID.compressed_iron)