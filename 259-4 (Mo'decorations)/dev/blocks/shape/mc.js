//создаем блок с рендером

IDRegistry.genBlockID("mc");
Block.createBlock("mc", [
 {name: "малое ядро (хранилише)", texture: [["", 0]], inCreative: false}
])
 
function createBriRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (3/16, 3/16, 3/16, 13/16, 13/16, 13/16,  BlockID.block5, 0);

model.addBox (3/16, 1/16, 2/16, 7/16, 2/16, 6/16,  BlockID.block6, 0);
model.addBox (10/16, 1/16, 3/16, 14/16, 2/16, 7/16,  BlockID.block6, 0);
model.addBox (2/16, 1/16, 9/16, 6/16, 2/16, 13/16,  BlockID.block6, 0);
model.addBox (9/16, 1/16, 10/16, 13/16, 2/16, 14/16,  BlockID.block6, 0);

model.addBox (2/16, 14/16, 3/16, 6/16, 15/16, 7/16,  BlockID.block6, 0);
model.addBox (9/16, 14/16, 2/16, 13/16, 15/16, 6/16,  BlockID.block6, 0);
model.addBox (3/16, 14/16, 10/16, 7/16, 15/16, 14/16,  BlockID.block6, 0);
model.addBox (10/16, 14/16, 9/16, 14/16, 15/16, 13/16,  BlockID.block6, 0);

model.addBox (2/16, 3/16, 1/16, 6/16, 7/16, 2/16,  BlockID.block6, 0);
model.addBox (3/16, 10/16, 1/16, 7/16, 14/16, 2/16,  BlockID.block6, 0);
model.addBox (9/16, 2/16, 1/16, 13/16, 6/16, 2/16,  BlockID.block6, 0);
model.addBox (10/16, 9/16, 1/16, 14/16, 13/16, 2/16,  BlockID.block6, 0);

model.addBox (3/16, 2/16, 14/16, 7/16, 6/16, 15/16,  BlockID.block6, 0);
model.addBox (2/16, 9/16, 14/16, 6/16, 13/16, 15/16,  BlockID.block6, 0);
model.addBox (10/16, 3/16, 14/16, 14/16, 7/16, 15/16,  BlockID.block6, 0);
model.addBox (9/16, 10/16, 14/16, 13/16, 14/16, 15/16,  BlockID.block6, 0);

model.addBox (1/16, 2/16, 3/16, 2/16, 6/16, 7/16,  BlockID.block6, 0);
model.addBox (1/16, 9/16, 2/16, 2/16, 13/16, 6/16,  BlockID.block6, 0);
model.addBox (1/16, 10/16, 9/16, 2/16, 14/16, 13/16,  BlockID.block6, 0);
model.addBox (1/16, 3/16, 10/16, 2/16, 7/16, 14/16,  BlockID.block6, 0);

model.addBox (14/16, 3/16, 2/16, 15/16, 7/16, 6/16,  BlockID.block6, 0);
model.addBox (14/16, 10/16, 3/16, 15/16, 14/16, 7/16,  BlockID.block6, 0);
model.addBox (14/16, 9/16, 10/16, 15/16, 13/16, 14/16,  BlockID.block6, 0);
model.addBox (14/16, 2/16, 9/16, 15/16, 6/16, 13/16,  BlockID.block6, 0);
render.addEntry(model);
}

createBriRender(BlockID.mc, 49, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("mc1");
Item.createItem("mc1","малое ядро (хранилище)",{name:"mc",meta:0},{stack:1});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.mc1, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.mc);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("mc", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.mc1, 1, data]]; });

//добавление GUI

var mcGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "малое ядро (хранилище)"
            }
        },
        
        inventory: {
            standart: true
        },
        background: {
            bitmap: "mc"
        }
    },
    drawing: [
       
    ],
    elements: {
		
    }});
    
TileEntity.registerPrototype(BlockID.mc, {
    defaultValues: {},

    getTransportSlots: function () {
        var out = ["slotoutput"];
        var inp = ["slot1", "slot2","slot3"];
        var sl1 = this.container.getSlot("slot1");
        return {input: inp, output: out};
    },

    init: function () {
        
    },

    tick: function () {
        var temp = 0;
        var content = this.container.getGuiContent();

        if (content && !content.elements["slotInput0"]) {
            for (var i = 0; i < 7; i++) {
                for (var j = 0; j < 9; j++) {
                    var slot_size = 60;
                    var x = 355 + (j * slot_size);
                    var y = 40 + (i * slot_size);
                    content.elements["slotInput" + temp] = {type: "slot", x: x, y: y};
                    temp++;
                }
            }
        }
    },
    getGuiScreen: function () {
        return mcGUI;
    }
});

Recipes.addShaped({id: ItemID.mc1, count: 1, data: 0}, [ 
"xax", 
" b ", 
"x x" 
], ['x', 265, 0, 'a', 54, 0, 'b', 22, 0]);