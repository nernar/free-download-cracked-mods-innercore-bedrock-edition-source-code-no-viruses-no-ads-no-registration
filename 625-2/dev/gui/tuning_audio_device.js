NC.tuningGui = new UI.StandartWindow({
    
standart: {
		//header: {text: {text: "调律装置"}},
		//inventory: {standart: true},
		background: {standart: true}
	},
drawing: [
         {type: "background", color: 0xff0000FF},
         
       // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
		{type: "bitmap", x: 20, y: 300, bitmap: "default_horizontal_line_template", width:WIDTH,height:5},
		//{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
			"t": {type: "text", x: 742, y: 92, width: 300, height: 30, text:"0"},
	    "close_button": {type: "button", bitmap: "classic_close_button_down", x: 0, y: 0, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
                        }
               

          },
       "confirm_button": {type: "button", bitmap: "_craft_button_up", x: 200, y: 325, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
                        }
               

          },
          "confirm_text": {type: "text", x: 233, y: 340, width: 300, height: 30, text:"0"},
	    "2_1": {type: "image", level:2,x: 325, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_2": {type: "image", level:2,x: 325+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_3": {type: "image",level:2, x: 325+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_4": {type: "image",level:2, x: 325+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "10": {type: "image",level:10, x: 325+32+32+32+32, y: 300-32*5,  bitmap:"nc_note_slot_10"},
	    "9": {type: "image",level:9, x: 325+32+32+32+32+32, y: 300-32*4,  bitmap:"nc_note_slot_9"},
	    "8": {type: "image",level:8,x: 325+32+32+32+32+32+32, y: 300-32*3,  bitmap:"nc_note_slot_8"},
	    "7": {type: "image",level:7, x: 325+32+32+32+32+32+32+32, y: 300-32*2,  bitmap:"nc_note_slot_7"},
	    "6": {type: "image",level:6, x: 325+32+32+32+32, y: 300-32*5,  bitmap:"nc_note_slot_6"},
	    "5": {type: "image",level:5, x: 325+32+32+32+32+32, y: 300-32*4,  bitmap:"nc_note_slot_5"},
	    "4": {type: "image",level:4,x: 325+32+32+32+32+32+32, y: 300-32*3,  bitmap:"nc_note_slot_4"},
	   // "3": {type: "image",level:4, x: 325+32+32+32+32+32+32+32, y: 300-32*2,  bitmap:"nc_note_slot_3"},
	    "2_5": {type: "image",level:2,x: 325+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_6": {type: "image",level:2,x: 325+32+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_7": {type: "image",level:2,x: 325+32+32+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_8": {type: "image",level:2, x: 325+32+32+32+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
        "line":{type: "image",level:2,x: 5,y:300-240,width:5,height:240,bitmap:"default_vertical_line_template"},
	
		//"progressScale": {type: "scale", x: WIDTH-100, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		//"burningScale": {type: "scale", x: 4300, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},
		//"slotSource": {type: "slot", x: 441, y: 75},
		"slotNote": {type: "slot", x: 375, y: 325,"visual":true},
		 "note_text": {type: "text", x: 375, y: 405, width: 300, height: 30, text:"消耗音符"},
		 "slotIron": {type: "slot", x: 475, y: 325,"visual":true},
		 "iron_text": {type: "text", x: 475, y: 405, width: 300, height: 30, text:"消耗铁块"},
		 "slotSteel": {type: "slot", x: 575, y: 325,"visual":true},
		 "steel_text": {type: "text", x: 575, y: 405, width: 300, height: 30, text:"产出音钢"},
		//"slotResult": {type: "slot", x: 625, y: 142},
	}
});