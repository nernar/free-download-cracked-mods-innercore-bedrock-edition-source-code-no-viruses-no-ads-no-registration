var FurnaceTemplate = function(FuelEffPct, MaxTemp, RecipesEffPct, gui, timer) { return {
    defaultValues: {
        progress1:0,
        prog1end:0,
        progress2:0,
        prog2end:0,
        fire:0, 
        burn:1,
        temp:0,
        lava:0,
        keys:0,
        result1:0,
        result2:0,
        maxTemp:0,
        fuelEfr:0,
        timer: 0,
	},
    container:gui,
    click: function(){
    	Game.prevent()
    
        this.container.openAs(gui)
        //Game.message("Duck")
       /*var key = this.data.MAPIkey
        var m = this
        var side = 0
        var bl = 0
        //for(var side in MAPI.multiblocks[key].struc){
        	bl=0
            //Game.message(side);
            for(var keyi in MAPI.multiblocks[key].struc[side]){ 
            	World.setBlock(m.x+MAPI.multiblocks[key].struc[side][keyi][0], m.y+MAPI.multiblocks[key].struc[side][keyi][1], m.z+MAPI.multiblocks[key].struc[side][keyi][2], MAPI.multiblocks[key].struc[side][keyi][3])
            }
        //}         */         	
    },
    tick: function(){

		var sourseSlot1 = this.container.getSlot("slot1");
		var sourseSlot2 = this.container.getSlot("slot2");
		var resultSlot1 = this.container.getSlot("slot4");
		var resultSlot2 = this.container.getSlot("slot5");
		var metallSlot = this.container.getSlot("slot3");
		var fuelSlot = this.container.getSlot("slot6");
	    
	    //alert(this.data.MAPIact)
         if(this.data.MAPIact==true){
         	if(AcApi){
         	    //this.id == BlockID.compactedfurnace ? AcApi.AchievementAPI.give("altech", "comp_furnace") : null
                 //this.id == BlockID.blastfurnace ? AcApi.AchievementAPI.give("altech", "blast_furnace") : null
             }
            this.container.setText("struct", "");
				//alert(Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data));
				if(fuelSlot.id > 0 && Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data) && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) && this.data.fire==0){
					fuelSlot.count--;
					this.data.fire=Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data)
					this.data.burn=this.data.fire;
					this.data.fuelEff=1
					this.container.validateAll()
					//Game.message(this.data.fuelEff)
			}
			if(this.data.fire>0){
				this.data.timer = 0
				this.data.fire--;
				this.data.temp+=this.data.fuelEff
				this.activate()
			}else{ this.deactivate() }
	
			if(this.data.temp>MaxTemp){
				this.data.temp=MaxTemp;
			}

			for(var key in furnaceRecipes){
				if(
				furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0
				&&
				this.data.temp>=furnaceRecipes[key].temp){
					sourseSlot1.count-=furnaceRecipes[key].sS1[1];
					sourseSlot2.count-=furnaceRecipes[key].sS2[1];
					this.data.prog1end=round(furnaceRecipes[key].long*20/ 1.33 / RecipesEffPct * 100, 1)
					this.data.keys=key
					this.data.maxtemp = furnaceRecipes[key].temp
					this.container.validateAll();
				    //Game.message(round(furnaceRecipes[key].long*20/ 1.33 / 100 * RecipesEffPct, 1))
				}else if(
                furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0){
				    this.container.setText("sec", "Time: "+round(furnaceRecipes[key].long / RecipesEffPct * 100, 1))
			        this.container.setText("needTemp", "Need temp: "+furnaceRecipes[key].temp);
			        this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[key].rS1[0], furnaceRecipes[key].rS1[1]));
			        break
			    }
			}
		   if(this.data.progress1<this.data.prog1end &&
                this.data.temp>=this.data.maxtemp &&this.data.lava==0){
                this.data.progress1++;
            }
           if(this.data.prog1end<=this.data.progress1&&this.data.lava==0&&this.data.prog1end>0){
                this.data.lava=1;
                this.data.prog2end=round(furnaceRecipes[this.data.keys].long*20 / RecipesEffPct * 100 - this.data.prog1end, 1)
                //Game.message(this.data.prog1end)
                //Game.message(this.data.prog2end)
            }
            if(this.data.progress2<this.data.prog2end &&
                this.data.temp>=this.data.maxtemp &&this.data.lava==1){
                this.data.progress2++;
                
            }
    
			if(this.data.prog2end<=this.data.progress2&&this.data.lava==1&&this.data.prog2end>0&&
			(resultSlot1.id==0||resultSlot1.id==furnaceRecipes[this.data.keys].rS1[0])&&
			(resultSlot2.id==0||resultSlot2.id==furnaceRecipes[this.data.keys].rS2[0])&&
            (resultSlot1.count==0||resultSlot1.count<64-furnaceRecipes[this.data.keys].rS1[1])&&
			(resultSlot2.count==0||resultSlot2.count<64-furnaceRecipes[this.data.keys].rS2[1]) ){
				resultSlot1.id = furnaceRecipes[this.data.keys].rS1[0]
				resultSlot1.count += furnaceRecipes[this.data.keys].rS1[1]
				resultSlot1.data = furnaceRecipes[this.data.keys].rS1[2]
				resultSlot2.id = furnaceRecipes[this.data.keys].rS2[0]
				resultSlot2.count += furnaceRecipes[this.data.keys].rS2[1]
				resultSlot2.data = furnaceRecipes[this.data.keys].rS2[2]
				this.data.lava=0;
				this.data.progress1=0;
				this.data.progress2=0;
				this.data.prog1end=0;
				this.data.prog2end=0;
				this.container.validateAll();
			}
			
			if(this.data.prog1end > 0){
			    this.container.setText("secLeft", "Left time: "+round((furnaceRecipes[this.data.keys].long *20 / RecipesEffPct * 100-this.data.progress1-this.data.progress2)/20, 1));
			}else{
				this.container.setText("secLeft", "Left time: ");
		    }
			
			if(this.data.progress1 > 0){
		        this.container.setText("sec", "Time: "+round(furnaceRecipes[this.data.keys].long / RecipesEffPct * 100, 1))
			    this.container.setText("needTemp", "Need temp: "+furnaceRecipes[this.data.keys].temp);
			    this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[this.data.keys].rS1[0], furnaceRecipes[this.data.keys].rS1[1]));
			}else if(sourseSlot1.id==0 && sourseSlot2.id==0){
			    this.container.setText("sec", "Time: ");
			    this.container.setText("needTemp", "Need temp: ");
			    this.container.setText("result", "Result: ");
			}
			
	    }else{
		    this.deactivate()
            this.data.fire=0; 
            this.container.setText("struct", "Incorrect struct");
            this.container.setText("sec", "");
			this.container.setText("needTemp", "");
			this.container.setText("result", "");
			this.container.setText("secLeft", "");
        }
	
	    if(this.data.fire==0 && this.data.timer < timer * 20){
			this.data.timer++
		}
		if(this.data.timer == timer * 20 && this.data.temp>0){
			this.data.temp--
		}

		if(this.data.lava==1){
			metallSlot.id=lava;
			metallSlot.count=1;
		}else{
			metallSlot.id=0;
			metallSlot.count=0
		}

		this.container.setText("temp", "t: "+Math.floor(this.data.temp)+" / "+MaxTemp+" C");
		this.container.setScale("fire", this.data.fire/this.data.burn);
		this.container.setScale("progbar1", this.data.progress1/this.data.prog1end)
		this.container.setScale("progbar2", this.data.progress2/this.data.prog2end);
		},
		
		init: MachineRenderer.initModel,
		activate: MachineRenderer.activateMachine,
	    deactivate: MachineRenderer.deactivateMachine,
	    destroy: function(){ this.deactivate; if(this.container.getSlot("slot3").id){ this.container.getSlot("slot3").id = this.container.getSlot("slot3").data = this.container.getSlot("slot3").count = 0 } }
	}
}