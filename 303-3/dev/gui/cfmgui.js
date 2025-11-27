var cfmTitle = function(){
if(Translation.getLanguage()==="ch"){return "咖啡机";}
else{return "Coffee Machine";}
};
var cfmGui = new UI.StandartWindow({
    
standart: {
		header: {text: {text: cfmTitle()}},
		inventory: {standart: true},
		background: {standart: true}
	},
drawing: [
      //  {type: "bitmap", x: 0, y: 0, bitmap: "cfb", scale: 256},
        {type: "bitmap", x: 590, y: 146, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 520, y: 150, bitmap: "ping", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
			//"textInfo1": {type: "text", x: 742, y: 92, width: 300, height: 30, text:"请放入雪球"},
		"progressScale": {type: "scale", x: 590, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		//"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "snowball", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 450, y: 150},
		//"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 685, y: 150},
	}
});