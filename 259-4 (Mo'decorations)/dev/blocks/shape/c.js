//создаем блок с рендером

IDRegistry.genBlockID("c");
Block.createBlock("c", [
 {name: "ядро (хранилише)", texture: [["", 0]], inCreative: false}
])
 
function createBricRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (3/16, 3/16, 3/16, 13/16, 13/16, 13/16,  BlockID.block4, 0);
//нижние грани
model.addBox (1/16, 1/16, 1/16, 4/16, 2/16, 4/16,  BlockID.block2, 0);
model.addBox (12/16, 1/16, 1/16, 15/16, 2/16, 4/16,  BlockID.block2, 0);
model.addBox (1/16, 1/16, 12/16, 4/16, 2/16, 15/16,  BlockID.block2, 0);
model.addBox (12/16, 1/16, 12/16, 15/16, 2/16, 15/16,  BlockID.block2, 0);
//низ
model.addBox (4/16, 1/16, 5/16, 7/16, 2/16, 8/16,  BlockID.block2, 0);
model.addBox (6/16, 1/16, 10/16, 9/16, 2/16, 13/16,  BlockID.block2, 0);
model.addBox (10/16, 1/16, 6/16, 13/16, 2/16, 9/16,  BlockID.block2, 0);
//верхние грани
model.addBox (1/16, 14/16, 1/16, 4/16, 15/16, 4/16,  BlockID.block2, 0);
model.addBox (12/16, 14/16, 1/16, 15/16, 15/16, 4/16,  BlockID.block2, 0);
model.addBox (1/16, 14/16, 12/16, 4/16, 15/16, 15/16,  BlockID.block2, 0);
model.addBox (12/16, 14/16, 12/16, 15/16, 15/16, 15/16,  BlockID.block2, 0);
//верх
model.addBox (4/16, 14/16, 5/16, 7/16, 15/16, 8/16,  BlockID.block2, 0);
model.addBox (6/16, 14/16, 10/16, 9/16, 15/16, 13/16,  BlockID.block2, 0);
model.addBox (10/16, 14/16, 6/16, 13/16, 15/16, 9/16,  BlockID.block2, 0);
//нижние углы
model.addBox (1/16, 2/16, 1/16, 4/16, 4/16, 2/16,  BlockID.block2, 0);
model.addBox (1/16, 2/16, 1/16, 2/16, 4/16, 4/16,  BlockID.block2, 0);
model.addBox (12/16, 2/16, 1/16, 15/16, 4/16, 2/16,  BlockID.block2, 0);
model.addBox (14/16, 2/16, 1/16, 15/16, 4/16, 4/16,  BlockID.block2, 0);
model.addBox (1/16, 2/16, 14/16, 4/16, 4/16, 15/16,  BlockID.block2, 0);
model.addBox (1/16, 2/16, 12/16, 2/16, 4/16, 15/16,  BlockID.block2, 0);
model.addBox (12/16, 2/16, 14/16, 15/16, 4/16, 15/16,  BlockID.block2, 0);
model.addBox (14/16, 2/16, 12/16, 15/16, 4/16, 15/16,  BlockID.block2, 0);
//верхние углы
model.addBox (1/16, 12/16, 1/16, 4/16, 14/16, 2/16,  BlockID.block2, 0);
model.addBox (1/16, 12/16, 1/16, 2/16, 14/16, 4/16,  BlockID.block2, 0);
model.addBox (12/16, 12/16, 1/16, 15/16, 14/16, 2/16,  BlockID.block2, 0);
model.addBox (14/16, 12/16, 1/16, 15/16, 14/16, 4/16,  BlockID.block2, 0);
model.addBox (1/16, 12/16, 14/16, 4/16, 14/16, 15/16,  BlockID.block2, 0);
model.addBox (1/16, 12/16, 12/16, 2/16, 14/16, 15/16,  BlockID.block2, 0);
model.addBox (12/16, 12/16, 14/16, 15/16, 14/16, 15/16,  BlockID.block2, 0);
model.addBox (14/16, 12/16, 12/16, 15/16, 14/16, 15/16,  BlockID.block2, 0);
//бока
model.addBox (5/16, 4/16, 1/16, 8/16, 7/16, 2/16,  BlockID.block2, 0);
model.addBox (10/16, 7/16, 1/16, 13/16, 10/16, 2/16,  BlockID.block2, 0);
model.addBox (6/16, 11/16, 1/16, 9/16, 14/16, 2/16,  BlockID.block2, 0);
model.addBox (5/16, 4/16, 14/16, 8/16, 7/16, 15/16,  BlockID.block2, 0);
model.addBox (10/16, 7/16, 14/16, 13/16, 10/16, 15/16,  BlockID.block2, 0);
model.addBox (6/16, 11/16, 14/16, 9/16, 14/16, 15/16,  BlockID.block2, 0);
model.addBox (14/16, 5/16, 4/16, 15/16, 8/16, 7/16,  BlockID.block2, 0);
model.addBox (14/16, 6/16, 9/16, 15/16, 9/16, 12/16,  BlockID.block2, 0);
model.addBox (14/16, 10/16, 5/16, 15/16, 13/16, 8/16,  BlockID.block2, 0);
model.addBox (1/16, 5/16, 4/16, 2/16, 8/16, 7/16,  BlockID.block2, 0);
model.addBox (1/16, 6/16, 9/16, 2/16, 9/16, 12/16,  BlockID.block2, 0);
model.addBox (1/16, 10/16, 5/16, 2/16, 13/16, 8/16,  BlockID.block2, 0);
render.addEntry(model);
}

createBricRender(BlockID.c, 49, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("c1");
Item.createItem("c1","ядро (хранилище)",{name:"c",meta:0},{stack:1});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.c1, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.c);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("c", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.c1, 1, data]]; });

//добавление GUI

var cGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "ядро (хранилище)"
            }
        },
        
        inventory: {
            standart: true
        },
        background: {
            bitmap: "c"
        }
    },
    drawing: [
       
    ],
    elements: {
		
    }});
    
TileEntity.registerPrototype(BlockID.c, {
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
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 11; j++) {
                    var slot_size = 55;
                    var x = 355 + (j * slot_size);
                    var y = 40 + (i * slot_size);
                    content.elements["slotInput" + temp] = {type: "slot", x: x, y: y};
                    temp++;
                }
            }
        }
    },
    getGuiScreen: function () {
        return cGUI;
    }
});

Recipes.addShaped({id: ItemID.c1, count: 1, data: 0}, [ 
"xax", 
" b ", 
"xax" 
], ['x', 266, 0, 'a', 54, 0, 'b', 152, 0]);