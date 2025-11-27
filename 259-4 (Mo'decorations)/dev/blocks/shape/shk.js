//создаем блок с рендером

IDRegistry.genBlockID("shk");
Block.createBlock("shk", [
 {name: "shk", texture: [["", 0]], inCreative: false}
])
 
function createBrickRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/16, 0, 1/16, 4/16, 1/16, 4/16,  BlockID.block1, 0);
model.addBox (12/16, 0, 1/16, 15/16, 1/16, 4/16,  BlockID.block1, 0);
model.addBox (1/16, 0, 12/16, 4/16, 1/16, 15/16,  BlockID.block1, 0);
model.addBox (12/16, 0, 12/16, 15/16, 1/16, 15/16,  BlockID.block1, 0);
model.addBox (1/16, 1/16, 1/16, 15/16, 2/16, 15/16,  BlockID.block1, 0);
model.addBox (1/16, 2/16, 1/16, 15/16, 14/16, 14/16,  BlockID.block3, 0);
model.addBox (1/16, 14/16, 1/16, 15/16, 15/16, 15/16,  BlockID.block1, 0);
model.addBox (6/16, 10/16, 14/16, 10/16, 11/16, 15/16,  BlockID.block2, 0);
model.addBox (6/16, 5/16, 14/16, 10/16, 6/16, 15/16,  BlockID.block2, 0);
render.addEntry(model);
}

createBrickRender(BlockID.shk, 5, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("shk1");
Item.createItem("shk1","шкаф",{name:"shk",meta:0},{stack:1});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.shk1, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.shk);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("shk", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.shk1, 1, data]]; });

//добавление GUI

var shkGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "шкаф"
            }
        },
        
        inventory: {
            standart: true
        },
        background: {
            bitmap: "shkaf1"
        }
    },
    drawing: [
       
    ],
    elements: {
		
    }});
    
TileEntity.registerPrototype(BlockID.shk, {
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
                for (var j = 0; j < 4; j++) {
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
        return shkGUI;
    }
});

Recipes.addShaped({id: ItemID.shk1, count: 1, data: 0}, [ 
"xax", 
"xbx", 
"xxx" 
], ['x', 5, 0, 'a', 371, 0, 'b', 54, 0]);