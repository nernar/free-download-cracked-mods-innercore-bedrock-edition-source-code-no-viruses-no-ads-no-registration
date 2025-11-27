NC.purerGui = {
    
standart: {
		//header: {text: {text: "调律装置"}},
		//inventory: {standart: true},
		
	},
drawing: [
         {type: "background", color: 0xff0000FF},
        // {type: "bitmap",x: 0,y:0,width:WIDTH + 64,height:HEIGHT,bitmap:"bg_faded"},
             // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
	//{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
	    "bg" : {type: "image",x: 0,y:0,width:WIDTH + 64,height:HEIGHT,bitmap:"bg_faded"},
      "v": {type: "image",x: 100,y:50,width:5,height: 250,bitmap:"default_vertical_line_template"},
      "h1" :	{type: "image", x: 20, y: 50 ,bitmap: "default_horizontal_line_template", width:WIDTH,height:5},
		"h2":	{type: "image", x: 20, y: 300,bitmap: "default_horizontal_line_template", width:WIDTH,height:5},
		
			"t": {type: "text", x: 150, y: 92, width: 300, height: 30, text:"0",font: {color: android.graphics.Color.WHITE, shadow: .6, size: 25}},
	 "s": {type: "text", x: 350, y: 92, width: 300, height: 30, text:"0",font: {color: android.graphics.Color.WHITE, shadow: .6, size: 25}},
	 
	       "close_button": {type: "button", bitmap: "arrow_l_default", x: 0, y: 120, scale: GUI_BAR_STANDART_SCALE*3, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
               }
               
               

          },
        "2_1": {type: "image", level:2,x: 0, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_2": {type: "image", level:2,x: 32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_3": {type: "image",level:2, x: 32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_4": {type: "image",level:2, x: 32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_5": {type: "image",level:2,x: 32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_6": {type: "image",level:2,x: 32+32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_7": {type: "image",level:2,x: 32+32+32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    //"2_8": {type: "image",level:2, x: 325+32+32+32+32+32+32+32+32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_8": {type: "image", level:2,x: WIDTH - 0, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_9": {type: "image", level:2,x: WIDTH - 32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_10": {type: "image",level:2, x:WIDTH - 32*2, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_11": {type: "image",level:2, x:WIDTH - 32*3,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_12": {type: "image",level:2,x:WIDTH - 32*4,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_13": {type: "image",level:2,x:WIDTH - 32*5,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_14": {type: "image",level:2,x:WIDTH - 32*6,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	 
	    "10": {type: "image",level:10, x: 0, y: HEIGHT - 10 * 16,  bitmap:"nc_note_slot_10"},
	    "9": {type: "image",level:9, x: 32, y: HEIGHT - 9 * 16,  bitmap:"nc_note_slot_9"},
	    "8": {type: "image",level:8,x: 32+32, y: HEIGHT - 8 * 16,  bitmap:"nc_note_slot_8"},
	    "7": {type: "image",level:7, x: 32+32+32, y: HEIGHT - 7 * 16,  bitmap:"nc_note_slot_7"},
	    "6": {type: "image",level:6, x: 32+32+32+32, y: HEIGHT - 6 * 16,  bitmap:"nc_note_slot_6"},
	    "5": {type: "image",level:5, x: 32+32+32+32+32, y: HEIGHT - 5 * 16,  bitmap:"nc_note_slot_5"},
	    "4": {type: "image",level:4,x: 32+32+32+32+32+32, y: HEIGHT - 4 * 16,  bitmap:"nc_note_slot_4"},
	    "10_1": {type: "image",level:10, x: WIDTH - 32, y: HEIGHT - 10 * 16,  bitmap:"nc_note_slot_10"},
	    "9_1": {type: "image",level:9, x: WIDTH - 32*2, y: HEIGHT - 9 * 16,  bitmap:"nc_note_slot_9"},
	    "8_1": {type: "image",level:8,x: WIDTH - 32*3, y: HEIGHT - 8 * 16,  bitmap:"nc_note_slot_8"},
	    "7_1": {type: "image",level:7, x: WIDTH - 32*4,y: HEIGHT - 7 * 16,  bitmap:"nc_note_slot_7"},
	    "6_1": {type: "image",level:6, x: WIDTH - 32*5, y: HEIGHT - 6 * 16,  bitmap:"nc_note_slot_6"},
	    "5_1": {type: "image",level:5, x: WIDTH - 32*6, y: HEIGHT - 5 * 16,  bitmap:"nc_note_slot_5"},
	    "4_1": {type: "image",level:4,x: WIDTH - 32*7, y: HEIGHT - 4 * 16,  bitmap:"nc_note_slot_4"},

	   // "3": {type: "image",level:4, x: 325+32+32+32+32+32+32+32, y: 300-32*2,  bitmap:"nc_note_slot_3"},
	    
       "left_button": {type: "button", bitmap: "left_button", x: 300, y: 325, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
               }
               

          },
            "right_button": {type: "button", bitmap: "right_button", x: 580, y: 325, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
               }
               

          }
       
	}
};