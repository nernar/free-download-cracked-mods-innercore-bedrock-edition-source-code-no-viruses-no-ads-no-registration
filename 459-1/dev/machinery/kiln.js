IDRegistry.genBlockID("forgeStone");
Block.createBlock("forgeStone", [{"name":"Forge stone","texture":[["stone",0]],"inCreative":true}]);

var forgeStone_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "stone", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 15/16, "stone", 0);

forgeStone_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.forgeStone, -1, forgeStone_render);

Block.setBlockShape(BlockID.forgeStone, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});

IDRegistry.genBlockID("unfiredKiln");
Block.createBlock("unfiredKiln", [{"name":"Unfired kiln","texture":[["clay",0]],"inCreative":true}]);

var unfiredkiln_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "clay", 0);
model.addBox(15/16, 2/16, 4/16, 16/16, 9/16, 6/16, "clay", 0);
model.addBox(15/16, 2/16, 10/16, 16/16, 9/16, 12/16, "clay", 0);
model.addBox(0/16, 0/16, 11/16, 15/16, 9/16, 12/16, "clay", 0);
model.addBox(0/16, 2/16, 4/16, 15/16, 9/16, 5/16, "clay", 0);
model.addBox(1/16, 9/16, 5/16, 0/16, 2/16, 11/16, "clay", 0);
model.addBox(0/16, 9/16, 4/16, 16/16, 11/16, 12/16, "clay", 0);
model.addBox(1/16, 2/16, 3/16, 15/16, 10/16, 4/16, "clay", 0);
model.addBox(1/16, 2/16, 2/16, 15/16, 9/16, 3/16, "clay", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 2/16, "clay", 0);
model.addBox(1/16, 2/16, 0/16, 15/16, 3/16, 1/16, "clay", 0);
model.addBox(1/16, 2/16, 12/16, 15/16, 10/16, 13/16, "clay", 0);
model.addBox(1/16, 2/16, 13/16, 15/16, 9/16, 14/16, "clay", 0);
model.addBox(1/16, 2/16, 14/16, 15/16, 8/16, 15/16, "clay", 0);
model.addBox(1/16, 2/16, 15/16, 15/16, 3/16, 16/16, "clay", 0);

unfiredkiln_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.unfiredKiln, -1, unfiredkiln_render);

Block.setBlockShape(BlockID.firedKiln, {"x":0,"y":0,"z":0}, {"x":1,"y":0.6875,"z":1});


IDRegistry.genBlockID("firedKiln");
Block.createBlock("firedKiln", [{"name":"Kiln","texture":[["hardened_clay",0]],"inCreative":true}]);

var kiln_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "hardened_clay", 0);
model.addBox(15/16, 2/16, 4/16, 16/16, 9/16, 6/16, "hardened_clay", 0);
model.addBox(15/16, 2/16, 10/16, 16/16, 9/16, 12/16, "hardened_clay", 0);
model.addBox(0/16, 0/16, 11/16, 15/16, 9/16, 12/16, "hardened_clay", 0);
model.addBox(0/16, 2/16, 4/16, 15/16, 9/16, 5/16, "hardened_clay", 0);
model.addBox(1/16, 9/16, 5/16, 0/16, 2/16, 11/16, "hardened_clay", 0);
model.addBox(0/16, 9/16, 4/16, 16/16, 11/16, 12/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 3/16, 15/16, 10/16, 4/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 2/16, 15/16, 9/16, 3/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 2/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 0/16, 15/16, 3/16, 1/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 12/16, 15/16, 10/16, 13/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 13/16, 15/16, 9/16, 14/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 14/16, 15/16, 8/16, 15/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 15/16, 15/16, 3/16, 16/16, "hardened_clay", 0);

kiln_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.firedKiln, -1, kiln_render);

Block.setBlockShape(BlockID.firedKiln, {"x":0,"y":0,"z":0}, {"x":1,"y":0.6875,"z":1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: BlockID.firedKiln, count: 1, data: 0}, 
   ["ofo", 
    "fof",
    "fff"],
  ["f", 82, 0
]);


});

var KilnGUI = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Kiln"}},
        inventory: {standart: true},
        background: {standart: true}
     },
     drawing: [
    {type: "bitmap", x: 500, y: 200, bitmap: "fire_scale0", scale: 3.2},
  ],
        elements: {
     "slotSource": {type: "slot", x: 400, y: 200},
     "slotResult": {type: "slot", x: 600, y: 200},
     "progress": {type: "scale", x: 500, y: 200, bitmap: "fire_scale1", direction: 1, scale: 3.2},
     "text": {type: "text", x: 500, y: 100, width: 100, height: 30, text: " "}
     }
});

TileEntity.registerPrototype(BlockID.firedKiln, {
  defaultValues: {
    progress: 0,
  },
  initAnimation: function(){
        this.animation = new Animation.Item(this.x + .5, this.y+.2, this.z + .65);
        if(this.container.getSlot("slotSource").id!=0){
          this.animation.describeItem({
                id: this.container.getSlot("slotSource").id,
               count: 1,
               data: this.container.getSlot("slotSource").data,
               rotation: [3.14/2,0,0],
               size: 0.3
        });
            this.animation.load();
          }
     },
     updateAnimation: function(){
        this.animation.destroy();
         this.initAnimation();
     },
     init: function(){
         this.initAnimation();
     },
     destroy: function(){
          this.animation.destroy();
    },
    getGuiScreen: function(){
      return KilnGUI;
    },
    tick: function(){
      if(World.getThreadTime()%30==0){
        this.updateAnimation();
        this.container.setText("text", " ");
        if(World.getBlockID(this.x,this.y-1,this.z)==51) World.setBlock(this.x,this.y-1,this.z,51);
      }
      
      this.container.setScale("progress", this.data.progress/400);
      
      let src = this.container.getSlot("slotSource");
      let result = this.container.getSlot("slotResult");
      let recipe = Recipes.getFurnaceRecipeResult(src.id, "iron");
      
      if(recipe&&(result.id==recipe.id&&result.data==recipe.data&&result.count<64||result.id==0)){
        if(World.getBlockID(this.x,this.y-1,this.z)==51){
          this.data.progress++;
        } else this.container.setText("text", TranslateText("This needs fire under block.", "Блоку нужен огонь снизу."));
        if(this.data.progress>=400){
          this.data.progress=0;
          result.id = recipe.id;
          result.count++;
          result.data = recipe.data;
          
          src.count--;
          this.container.validateAll();
        }
      }
    }
});