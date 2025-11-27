var KnightRend = new EntityModel(); 

MobRegistry.registerEntity("Knight");
MobSpawnRegistry.registerSpawn("Knight", 0.001);
Knight.customizeDescription(
{
   getDrop: function() {
      return [{
         id: "DarkestEss",
         count: {min: 1, max: 2},
         separate: true, chance: 0.33
       }, 
    ]
   },
});

var render = new Render({KnightRend.setPart("body", [ 
 { 
 type: "box", 
 uv: {x: 4, y:4}, 
 size: {x: 8, y: 7, z: 3, w:}, 
 coords: {x: 3,y: 4, z: 5}, 
 }, 

 ... ])
 });