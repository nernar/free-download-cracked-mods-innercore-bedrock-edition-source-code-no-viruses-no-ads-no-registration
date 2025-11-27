/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: header.js

/*
     ______     __  __     ______     ______     ______     __  __     __    __     ______     _____
    /\  __ \   /\ \/\ \   /\  __ \   /\  == \   /\  == \   /\ \_\ \   /\ "-./  \   /\  __ \   /\  __-.
    \ \ \/\_\  \ \ \_\ \  \ \  __ \  \ \  __<   \ \  __<   \ \____ \  \ \ \-./\ \  \ \ \/\ \  \ \ \/\ \
     \ \___\_\  \ \_____\  \ \_\ \_\  \ \_\ \_\  \ \_\ \_\  \/\_____\  \ \_\ \ \_\  \ \_____\  \ \____-
      \/___/_/   \/_____/   \/_/\/_/   \/_/ /_/   \/_/ /_/   \/_____/   \/_/  \/_/   \/_____/   \/____/

      QuarryMod by Dmitriy Medvedev for ModChallenge3
 */

importLib("energylib", "*");
const EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

const directions = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
];

const ENERGY_PER_SCAN = 100;
const ENERGY_PER_DESTROY = 20;





// file: blocks.js

Block.setPrototype("quarry", {
    type: Block.TYPE_BASE,

    getVariations: function () {
        return [{
            name: "Quarry",
            texture: [["quarry", 0]],
            inCreative: true
        }];
    }

});
Block.setBlockMaterial(BlockID.quarry, "stone", 2);

Block.setPrototype("quarryCasing", {
    type: Block.TYPE_BASE,

    getVariations: function () {
        return [{
            name: "Quarry Casing",
            texture: [["quarry", 1]],
            inCreative: true
        }];
    }

});
Block.setBlockMaterial(BlockID.quarryCasing, "stone", 2);
EU.registerWire(BlockID.quarryCasing);

Callback.addCallback("ItemUse", function (coords, item, block) {
    if(block.id === BlockID.quarryCasing){

        //Открываем интерфейс соседнего quarry
        for(let index in directions){
            let dir = directions[index];
            let tile = World.getTileEntity(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]);

            if(tile && World.getBlockID(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]) === BlockID.quarry){
                tile.container.openAs(gui);
                break;
            }
        }

    }
});




// file: items.js

IDRegistry.genItemID("quarryUpgradeTerritory");
Item.createItem("quarryUpgradeTerritory", "Quarry Upgrade(Territory)", {name: "upgrade", meta: 0}, {stack: 1});

IDRegistry.genItemID("quarryLensSmelt");
Item.createItem("quarryLensSmelt", "Quarry Lens(Smelt)", {name: "lens", meta: 0}, {stack: 1});




// file: gui.js

const guiObj = {
    standart: {
        header: {
            text: {
                text: "Quarry"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 400, y: 120, bitmap: "energy_small_background", scale: 3.2},
        {type: "bitmap", x: 595, y: 280, bitmap: "exp_bar", scale: 3.2},
        {type: "text", text: "BL", x: 815, y: 80},
        {type: "text", text: "WL", x: 915, y: 80},
    ],
    elements: {
        "energyScale": {type: "scale", x: 400, y: 120, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
        "expScale": {type: "scale", x: 595, y: 280, bitmap: "exp_bar_full", scale: 3.2},
        "slotTool": {type: "slot", x: 390, y: 40},

        "slotUpgrade0": {type: "slot", x: 390, y: 180, bitmap: "slot_upgrade"},
        "slotUpgrade1": {type: "slot", x: 390, y: 240, bitmap: "slot_upgrade"},

        "slotLens0": {type: "slot", x: 470, y: 240, bitmap: "slot_lens"},
        "slotLens1": {type: "slot", x: 530, y: 240, bitmap: "slot_lens"},

        "button": {type: "button", x: 900, y: 240, bitmap: "btn_exp", scale: 3.2, clicker:
            {
                onClick: function(container, tileEntity){
                    try{
                        Player.addExperience(tileEntity.data.exp);
                    }catch (e) {
                        alert("Если вы видите данное сообщение, то Жека ещё не исправил метод для добавления опыта");
                        return;
                    }
                    tileEntity.data.exp = 0;
                }
            }
        },

        "text": {type: "text", x: 390, y: 320, width: 100, height: 20, text: ""},
        "textRange": {type: "text", x: 390, y: 360, width: 100, height: 20, text: ""},
        "textExp": {type: "text", x: 595, y: 250, width: 100, height: 30, text: ""},

        "switch": {type: "switch", x: 853, y: 58, scale: 2,
            onNewState: function(state, container){
                if(container)
                    container.getParent().data.whitelist = state;
            }
        }
    }
};

let temp = 0;
for(let i=0;i<3;i++){
    for(let k=0;k<5;k++){
        guiObj.elements["slot"+temp] = {type: "slot", x: 470+k*60, y: 40+i*60};
        temp++;
    }
}

temp = 0;
for(let i=0;i<3;i++){
    for(let k=0;k<2;k++){
        guiObj.elements["slotList"+temp] = {type: "slot", x: 790+i*60, y: 100+k*60};
        temp++;
    }
}

const gui = new UI.StandartWindow(guiObj);




// file: tile.js

TileEntity.registerPrototype(BlockID.quarry, {
    defaultValues: {
        // Количество энергии в TE
        energy: 0,
        // Количество опыта
        exp: 0,
        // Модификатор радиуса копания
        territoryModifier: 1,
        //Координаты, на который копает карьер
        digY: 0,
        digX: 0,
        digZ: 0,
        // Карьер завершил свою работы?
        complete: false,
        // Включён белый список?
        whitelist: false,
        // Если true в tick произойдёт обновление состояния переключателя
        stateFlag: false
    },

    created: function () {
        this.data.digY = this.y - 3;
        this.data.digX = this.x - 16 * this.data.territoryModifier;
        this.data.digZ = this.z - 16 * this.data.territoryModifier;
    },

    getGuiScreen: function () {
        this.data.stateFlag = true;
        return gui;
    },

    /**
     * Добавление дропа в буффер
     * @param items
     */
    addItemToStorage: function (items) {

        for(let index in items) {
            let item = items[index];

            if(this.smelt){
                let smelted = Recipes.getFurnaceRecipeResult(item[0], item[2]);

                if(smelted)
                    item = [smelted.id, item[1], smelted.data];
            }

            for (let i = 0; i < 15; i++) {
                let slot = this.container.getSlot("slot" + i);

                if (!slot.id) {

                    slot.id = item[0];
                    slot.count = item[1];
                    slot.data = item[2];
                    break;

                } else if (slot.id === item[0] && slot.data === item[2] && Item.getMaxStack(slot.id) - slot.count !== 0) {
                    let count = Math.min(Item.getMaxStack(slot.id) - slot.count, item[1]);
                    slot.count += count;

                    if (count < item[1]) {
                        this.addItemToStorage([item[0], item[1] - count, item[2]]);
                    }
                    break;
                }
            }
        }

    },

    /**
     * Применение модификаторов апгрейдов и линз
     */
    upgrades: function () {
        this.data.territoryModifier = 1;
        this.smelt = false;

        for(let i=0;i<2;i++){
            let slot = this.container.getSlot("slotUpgrade"+i);

            if(slot.id === ItemID.quarryUpgradeTerritory){
                this.data.territoryModifier *= 2;
            }
        }

        for(let i=0;i<2;i++){
            let slot = this.container.getSlot("slotLens"+i);

            if(slot.id === ItemID.quarryLensSmelt){
                this.smelt = true;
            }
        }
    },

    /**
     * @param slotTool
     * @returns boolean Истина если предметом slotTool можно добывать блоки с материалом stone
     */
    isCorrectTool: function (slotTool) {
        let toolData = ToolAPI.getToolData(slotTool.id);
        return toolData && toolData.blockMaterials && toolData.blockMaterials["stone"];
    },

    /**
     * Тратим прочность инструмента
     * @param slotTool
     */
    damageTool: function (slotTool) {
        slotTool.data++;
        if(slotTool.data >= Item.getMaxDamage(slotTool.id)){
            slotTool.id = 0;
            slotTool.data = 0;
            slotTool.count = 0;
        }
    },

    /**
     * Проверка валидности структуры
     * @returns {boolean}
     */
    isValidStructure: function () {
        for(let index in directions){
            let dir = directions[index];

            if(World.getBlockID(this.x + dir[0], this.y + dir[1], this.z + dir[2]) !== BlockID.quarryCasing)
                return false;

        }

        return true;
    },

    /**
     * Обновление списка блоков в Белом/Черном списке
     */
    refreshList: function () {
        this.list = {};
        for(let i = 0;i < 6;i++){
            let slot = this.container.getSlot("slotList"+i);

            if(slot.id)
                this.list[slot.id + ":" + slot.data] = true;
        }
    },

    tick: function(){
        let slotTool = this.container.getSlot("slotTool");
        let content = this.container.getGuiContent();

        if(this.data.stateFlag) {
            this.container.setBinding("switch", "state", this.data.whitelist);
        }

        this.refreshList();

        if(!this.isValidStructure()) {

            if(content)
                content.elements["text"].text = "Incorrect structure";

        }else {
            let correctTool = this.isCorrectTool(slotTool);
            if(slotTool.id && !correctTool) {

                if(content)
                    content.elements["text"].text = "Incorrect tool";

            }else {
                if (content)
                    content.elements["text"].text = "X:" + this.data.digX + " Y:" + this.data.digY + " Z:" + this.data.digZ;

                if (this.data.energy >= 70 && World.getThreadTime() % 5 === 0 && !this.data.complete) {

                    this.upgrades();

                    let range = 16 * this.data.territoryModifier;
                    this.data.energy -= ENERGY_PER_SCAN;

                    if (++this.data.digX > this.x + range) {

                        this.data.digX = this.x - range;

                        if (++this.data.digZ > this.z + range) {

                            this.data.digZ = this.z - range;
                            this.data.digX = this.x - range;

                            if (--this.data.digY < 1) {
                                this.data.complete = true;
                            }

                        }

                    }
                    let block = World.getBlock(this.data.digX, this.data.digY, this.data.digZ);
                    if (block.id > 0) {
                        let blockData = ToolAPI.blockData[block.id];

                        if (blockData && blockData.material.name === "stone" && ((this.data.whitelist && this.list[block.id + ":" + block.data]) || (!this.data.whitelist && !this.list[block.id + ":" + block.data]))) {
                                 let drop = Block.getBlockDropViaItem(block, {
                                    id: slotTool.id || 278,
                                    data: slotTool.data
                                }, {x: this.data.digX, y: this.data.digY, z: this.data.digZ});
                            // }else{
                            //     let block = World.getBlock(this.data.digX, this.data.digY, this.data.digZ);
                            //     let dropFunc = Block.getDropFunction (block.id);
                            //
                            //     alert(this.silkTouch);
                            //     let drop = dropFunc({x: this.data.digX, y: this.data.digY, z: this.data.digZ}, block.id, block.data, correctTool ? ToolAPI.getToolLevel (slotTool.id) : 0, ToolAPI.getToolLevel (slotTool.id), {silk: this.silkTouch});
                           // }

                            if (correctTool)
                                this.damageTool(slotTool);
                            else this.data.energy -= ENERGY_PER_DESTROY;

                            if (drop)
                                this.addItemToStorage(drop);

                            World.setBlock(this.data.digX, this.data.digY, this.data.digZ, 3);

                            let exp_orbs = Entity.getAllInRange({x: this.data.digX, y: this.data.digY, z: this.data.digZ}, 2, 69);

                            for(let index in exp_orbs){
                                if(this.data.exp < 1000) {
                                    this.data.exp = Math.min(1000, this.data.exp + 2);

                                    Entity.remove(exp_orbs[index]);
                                }
                            }
                        }
                    }
                }
            }
        }

        if(content) {
            content.elements["textExp"].text = "Exp: " + this.data.exp;
            content.elements["textRange"].text = "Range: " + 16 * this.data.territoryModifier;
        }

        this.container.setScale("energyScale", this.data.energy / 50000);
        this.container.setScale("expScale", this.data.exp / 1000);
    },

    energyTick: function (type, src) {
        this.data.energy += src.get(50000 - this.data.energy);
    }

});

EnergyTileRegistry.addEnergyTypeForId(BlockID.quarry, EU);




// file: recipes.js

Recipes.addShaped({id: BlockID.quarry, count: 1}, [
    "gpg",
    "cdc",
    "rcr"
], ['g', 266, 0, 'c', BlockID.quarryCasing, 0, 'd', 57, 0, 'r', 152, 0, 'p', 278, 0]);

Recipes.addShaped({id: BlockID.quarryCasing, count: 1}, [
    "gig",
    "igi",
    "grg"
], ['g', 266, 0, 'i', 265, 0, 'r', 152, 0]);

Recipes.addShaped({id: ItemID.quarryUpgradeTerritory, count: 1}, [
    "dgd",
    "drd",
    "did"
], ['g', 266, 0, 'i', 42, 0, 'r', 152, 0, 'd', 264, 0]);

Recipes.addShaped({id: ItemID.quarryLensSmelt, count: 1}, [
    "030",
    "414",
    "020"
], ['1', 20, 0, '2', 152, 0, '3', 264, 0, '4', 42, 0]);




