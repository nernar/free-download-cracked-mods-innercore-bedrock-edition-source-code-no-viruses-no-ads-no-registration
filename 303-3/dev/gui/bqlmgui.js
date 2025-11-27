var GUI_BAR_CLASSIC_SCALE = 7.9;

var bqlmGui = new UI.AdaptiveWindow({
    
standart: {
		inventory: {standart: true},
		background: {standart: true}
	},
drawing: [
        {type: "bitmap", x: 380, y: 80, bitmap: "icecream_machine_background", scale: GUI_BAR_CLASSIC_SCALE},
       		{type: "bitmap", x: 447, y: -5, bitmap: "snow", scale:6.2} 
	],
	
	elements: {
		"progressScale": {type: "scale", x: 380, y: 80, direction: 3, value: 0.5, bitmap: "icecream_machine_scale", scale: GUI_BAR_CLASSIC_SCALE},
		"burningScale": {type: "scale", x: 447, y: -5, direction: 1, value: 0.5, bitmap: "snowball", scale:6.2},
		"slotSource": {type: "slot", x: 250, y: 55,bitmap:"Tislot",size:115},
		"slotFuel": {type: "slot", x: 640, y: 55,bitmap:"Tislot",size:115},
		"slotResult": {type: "slot", x: 435, y: 350,bitmap:"Tislot",size:130},
	}
});

//。。。。 2018.10.25

