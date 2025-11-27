var guiCometTorg = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Торговля"}}, 
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
 
