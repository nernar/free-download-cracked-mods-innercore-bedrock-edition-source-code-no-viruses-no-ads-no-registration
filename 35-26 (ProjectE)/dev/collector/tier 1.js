Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 10
}, "light");

IDRegistry.genBlockID("energyCollector1");
Block.createBlockWithRotation("energyCollector1", [
	 {name: "Energy Collector I", texture: [
	   ["collectorOther",0],
	   ["collectorTop",0],
	   ["collectorOther",0],
	   ["collectorFront",0],
	   ["collectorOther",0],
	   ["collectorOther",0],
  ],inCreative: true}
], "light");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCollector1, count: 1, data: 0},
  ["glg",
   "gdg",
   "gfg"],
  ['g', 89, 0, 'd', 57, 0, 'f', 61, 0, 'l', 20, 0]);

});

var collectorUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Energy collector"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	 drawing: [
    {type: "bitmap", x: 425, y: 100, bitmap: "emcBarShort_0", scale: 5},
    {type: "bitmap", x: 750, y: 200, bitmap: "collectorProgress_0", scale: 3.5},
  ],
	 	elements: {
	   	"output": {type: "slot", x: 700, y: 100},
		  "input": {type: "slot", x: 700, y: 300},
    "progScale": {type: "scale", x: 750, y: 200, bitmap: "collectorProgress_1", scale: 3.5, direction: 1},
	   "charge": {type: "slot", x: 350, y: 100, bitmap: "starCharge"},
    "emcScale": {type: "scale", x: 425, y: 100, bitmap: "emcBarShort_1", scale: 5},
    "text": {type: "text", x: 800, y: 100, width: 100, height: 30, text: "EMC"}
  	}
});

TileEntity.registerPrototype(BlockID.energyCollector1, {
  defaultValues: {
    emc: 0, max: 50000
  },
  getGuiScreen: function(){
    return collectorUI;
  },
  dirs: [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ],
  tick: function(){
    slotInput = this.container.getSlot("input");
    slotOutput = this.container.getSlot("output");
    
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", this.data.emc+" EMC");
    
    if(World.getLightLevel(this.x, this.y + 1, this.z) >= 8){
      if(World.getThreadTime()%3 == 0 && this.data.emc <= this.data.max){
        this.data.emc++;
      }
    }
    System.chargeStar(this.container, this.data);
    /*for(i in this.dirs){
      let dir = dirs[i];
    }*/
    
    let res = System.getRecipe(Math.min(this.data.emc, this.emc_out).id,Math.min(this.data.emc, this.emc_out).data);
	 	  let val = System.getValue(Math.min(this.data.emc, this.emc_out).id,Math.min(this.data.emc, this.emc_out).data);
	 	  
    	if(val && res){
	     this.container.setScale("progScale", this.data.emc/(val*2));
    } else	this.container.setScale("progScale", this.data.emc/this.data.max);
    
    
    
    if(res && this.data.emc > val*2 && slotOutput.count<64 && (slotOutput.id==0||slotOutput.id==res)){
      this.data.emc-=val*2;
      slotOutput.id=res;
      slotOutput.count++;
      Math.min(this.data.emc, this.emc_out).count--;
      this.container.validateAll();
    }
  }
});