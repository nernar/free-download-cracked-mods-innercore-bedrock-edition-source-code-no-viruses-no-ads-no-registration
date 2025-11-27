let AcApi

ModAPI.addAPICallback("AchievementsAPI", function(api){
    AcApi = api;

	   Callback.addCallback("PostLoaded", function(){
		//Recipes.ReplaceWithShaped({id:ItemID.StoneHammer, count:1, data:0}, ["aa ", "aab", "aa"], ['a', litst, 0, 'b', 280, 0], function(){api.AchievementAPI.give("altech", "stone_hammer")});
		Recipes.ReplaceWithShaped({id:311, count:1, data:0}, [
	        "a a",
	        "aaa",
	        "aaa"
        ], ['a', ItemID.gemDiamond, 0], function(){api.AchievementAPI.give("story", "shiny_gear")});
	   });
	   Callback.addCallback("DestroyBlock", function (coords, block, player) {
          switch (block.id) {
          case 14:
            api.AchievementAPI.give("story", "mine_stone");
            break; 
          case 15:
            api.AchievementAPI.give("story", "mine_stone");
            break; 
          case 16:
            api.AchievementAPI.give("story", "mine_stone");
            break;   
          case 56:
            api.AchievementAPI.give("story", "mine_stone");
            break;  
          case 73:
            api.AchievementAPI.give("story", "mine_stone");
            break;  	
          case 74:
            api.AchievementAPI.give("story", "mine_stone");
            break;  
          case 129:
            api.AchievementAPI.give("story", "mine_stone");
            break; 
          case 21:
            api.AchievementAPI.give("story", "mine_stone");
            break;   			
          case BlockID.oreDiamondStone:
            api.AchievementAPI.give("story", "mine_diamond");
            break;
            case BlockID.oreDiamondEnd:
            api.AchievementAPI.give("story", "mine_diamond");
            break;
         }           
       });
	   //Achievements
       api.AchievementAPI.registerGroup({ 
	        unique: "altech_otherworld", 
			name: "AlTech Otherworld", 
			width: 1000, 
			height: 1000, 
			size: 40, 
			bgTexture: "groups_bg.stone",
			icon: { 
			    id: BlockID.oreGoldStone
			}
	   });
	
	    api.AchievementAPI.registerGroup({ 
	        unique: "altech_nether", 
			name: "AlTech Nether", 
			width: 1000, 
			height: 1000, 
			size: 40, 
			bgTexture: "groups_bg.nether",
			icon: { 
			    id: BlockID.oreGoldNether
			}
	   });
	
	    api.AchievementAPI.registerGroup({ 
	        unique: "altech_end", 
			name: "AlTech End", 
			width: 1000, 
			height: 1000, 
			size: 40, 
			bgTexture: "groups_bg.end",
			icon: { 
			    id: BlockID.oreGoldEnd
			}
	   });
	   
	   /*api.AchievementAPI.register("altech", { 
	        unique: "stone_hammer",
			name: { 
			    text: "First Tool!",
				translate: "at.stone_hammer"
			},
			description: { 
			    text: "Craft a Stone hammer",
				translate: "at.stone_hammer_info"
			},
			column: 1, 
			row: 2,
			item: {
				id: ItemID.StoneHammer
			}
	   });
	
	api.AchievementAPI.register("altech", { 
	        unique: "comp_furnace",
			name: { 
			    text: "First furnace!",
				translate: "at.comp_furnace"
			},
			description: { 
			    text: "Build a cobblestone furnace!",
				translate: "at.comp_furnace_info"
			},
			column: 1, 
			row: 3,
			item: {
				id: BlockID.compactedfurnace
			}
	   });*/
	
	   let x = 0
	   let y = 0
	   for(let i = 0; i < ATMat.ores.length; i++){
		    for(let a = 0; a < ATGen.oresEarth.length; a++){
			    let ids = ATGen.oresEarth[a].ids
		        for(let b = 0; b < ids.length; b++){
			        if(ids[b] == ATMat.ores[i].id){        
		                let ores = ATMat.ores[i]
		                let deposite = ATGen.oresEarth[a]
		                Achievement.AchievementRegister(api, "altech_otherworld", ores.type, {text: ores.type+" ore"}, {text: "Min Y: "+deposite.minY+", max Y: "+deposite.maxY+", chance: "+deposite.chance+"%"}, x, y, "BlockID.ore"+ores.type+"Stone");
		
		              //alert(x+", "+y)
	                   if(x < 14){
		                   x++
                       }else{
                       	x=0;
                           y++
                       }
	               }
	           }
	       }
	   }
	
	   x = 0
       y = 0
	   for(let i = 0; i < ATMat.ores.length; i++){
		    for(let a = 0; a < ATGen.oresNether.length; a++){
			    let ids = ATGen.oresNether[a].ids
		        for(let b = 0; b < ids.length; b++){
			        if(ids[b] == ATMat.ores[i].id){        
		                let ores = ATMat.ores[i]
		                let deposite = ATGen.oresNether[a]
		                Achievement.AchievementRegister(api, "altech_nether", ores.type, {text: ores.type+" ore"}, {text: "Min Y: "+deposite.minY+", max Y: "+deposite.maxY+", chance: "+deposite.chance+"%"}, x, y, "BlockID.ore"+ores.type+"Nether");
		
		               //alert(x+", "+y)
	                   if(x < 14){
		                   x++
                       }else{
                       	x=0;
                           y++
                       }
	               }
	           }
	       }
	   }
	  
	    x = 0
        y = 0
        for(let i = 0; i < ATMat.ores.length; i++){
		    for(let a = 0; a < ATGen.oresEnd.length; a++){
			    let ids = ATGen.oresEnd[a].ids
		        for(let b = 0; b < ids.length; b++){
			        if(ids[b] == ATMat.ores[i].id){        
		                let ores = ATMat.ores[i]
		                let deposite = ATGen.oresEnd[a]
		                Achievement.AchievementRegister(api, "altech_end", ores.type, {text: ores.type+" ore"}, {text: "Min Y: "+deposite.minY+", max Y: "+deposite.maxY+", chance: "+deposite.chance+"%"}, x, y, "BlockID.ore"+ores.type+"End");
		
		               //alert(x+", "+y)
	                   if(x < 14){
		                   x++
                       }else{
                       	x=0;
                           y++
                       }
	               }
	           }
	       }
	   }
	   
	   //Achievement.AchievementRegister(api, "altech", "flint_pick", {text: "Alternative tool!", translate: "at.flint_pick"}, {text: "Craft a flint pickaxe", translate: "at.flint_pick_info"}, 2, 2, "ItemID.flintpickaxe", "stone_hammer");
	   //Achievement.AchievementRegister(api, "altech", "blast_furnace", {text: "Oh, so hot!", translate: "at.blast_furnace"}, {text: "Build a blast furnace", translate: "at.blast_furnace_info"}, 2, 3, "BlockID.blastfurnace", "comp_furnace");

	   //Translation
	   //Translation.addTranslation("at.stone_hammer", {en: "First Tool!", ru: "Первый инструмент!"})
	   //Translation.addTranslation("at.stone_hammer_info", {en: "Craft a Srone hammer.", ru: "Скрафтить каменный молот"})
});