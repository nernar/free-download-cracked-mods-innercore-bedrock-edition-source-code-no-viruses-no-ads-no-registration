var grmTitle = function(){
if(Translation.getLanguage()==="ch"){return "火力研磨机";}
else{return "Grind Machine";}
};
var grinderGui = new UI.StandartWindow({
    
standart: {
		header: {text: {text: grmTitle()}},
		inventory: {standart: true},
		background: {standart: true}
	},
drawing: [
       // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
			//"textInfo1": {type: "text", x: 742, y: 92, width: 300, height: 30, text:"请放入燃料"},
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});
//唉。。。。。 2018.10.20