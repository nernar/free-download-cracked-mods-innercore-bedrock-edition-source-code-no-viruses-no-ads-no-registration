var entityTypeDarksoul = MobRegistry.registerEntity("Soul");

MobSpawnRegistry.registerSpawn("Soul", 0.009);

IDRegistry.genItemID("Soul-spawn");
Item.createItem("Soul-spawn", "создать существо Эссенция тьмы", {name: "spawnSoul", meta: 0}, {stack: 64});
Item.registerUseFunction("Soul-spawn", function(coords, item, block){
Entity.spawnCustom("Soul", coords.relative.x + .5, coords.relative.y + .5, coords.relative.z + .5); 
});

//внешний вид... 
var Darksoul_model = new EntityModel(); 
entityTypeDarksoul.customizeEvents({ 
tick: function(){ 
var Darksoul_texture = new Texture("mob/DarkSoul.png"); 
Darksoul_texture.setResolution(31, 15); 
Darksoul_texture.setPixelScale(1); 
Darksoul_model.setTexture(Darksoul_texture); 
Entity.setSkin(this.entity, "mob/DarkSoul.png");
    }
   }); 

entityTypeDarksoul.customizeDescription({
   getDrop: function() {
      return [{
         id: ItemID.DarkEss,
         count: {min: 1, max: 1},
         separate: true, chance: 0.5
       }]
}
});
