IDRegistry.genBlockID("comettrader");
Block.createBlock("comettrader", [{name: "Аукцион Комет", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiCometTraider = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Три золотых монеты для Фиолетового Дробовика"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.comettrader, { 
 
getGuiScreen: function(){ 
return guiCometTraider; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.goldmoney, count: 3, data: 0},{id: ItemID.VioletDrobovik, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});







IDRegistry.genBlockID("comettrader1");
Block.createBlock("comettrader1", [{name: "Аукцион Комет", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiCometTraider = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Три золотых монеты для Гигатхора"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.comettrader1, { 
 
getGuiScreen: function(){ 
return guiCometTraider; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.goldmoney, count: 3, data: 0},{id: ItemID.gigathor, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});











IDRegistry.genBlockID("moneyblock");
Block.createBlock("moneyblock", [{name: "Обменник монет", texture: [["moneyblocktop", 0], ["moneyblocktop", 0], ["moneyblock", 0], ["moneyblock", 0], ["moneyblock", 0], ["moneyblock", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiMoney = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "10 монет"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.moneyblock, { 
 
getGuiScreen: function(){ 
return guiMoney; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.bronzemoney, count: 10, data: 0},{id: ItemID.silvermoney, data: 0, count: 1}); 
 
 this.addRecipes({id: ItemID.silvermoney, count: 10, data: 0},{id: ItemID.goldmoney, data: 0, count: 1}); 
 
 this.container.validateAll(); 
} 
});



Recipes.addShaped({id: BlockID.moneyblock, count: 1, data: 0}, [ "bbb", "b b", "aaa"], ['a', ItemID.flisotuachewn, 0, 'b', ItemID.darkhamingot, 0]);










IDRegistry.genBlockID("purgatorytrader");
Block.createBlock("purgatorytrader", [{name: "Аукцион Пургаториума", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiPurgatoryTraider = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "7 серебрянных монет для посоха терраформирования"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.purgatorytrader, { 
 
getGuiScreen: function(){ 
return guiPurgatoryTraider; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.silvermoney, count: 25, data: 0},{id: ItemID.terraformingstaff, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});




IDRegistry.genBlockID("purgatorytrader1");
Block.createBlock("purgatorytrader1", [{name: "Аукцион Пургаториума", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiPurgatoryTraider1 = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "3 золотых монет для хищного лука"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.purgatorytrader1, { 
 
getGuiScreen: function(){ 
return guiPurgatoryTraider1; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.goldmoney, count: 3, data: 0},{id: ItemID.wildbow, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});






