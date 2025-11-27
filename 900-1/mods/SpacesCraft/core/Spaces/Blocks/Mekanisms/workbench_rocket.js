
IDRegistry.genBlockID("workbench_rocket");
Block.createBlock("workbench_rocket",[{name: "Workbench Rocket", texture: [["workbench_nasa_side", 0],["rocket_workbench", 0],["workbench_nasa_side", 0],["workbench_nasa_side", 0],["workbench_nasa_side", 0],["workbench_nasa_side", 0]], inCreative: true} ]);
Translation.addTranslation("Workbench Rocket",{
ru: "Верстак НАСА"
});



Block.registerPlaceFunction("workbench_rocket", function(coords, item, block){
	var spaces = coords.relative
     World.setBlock(spaces.x, spaces.y, spaces.z, item.id, item.data); 
     World.setBlock(spaces.x, spaces.y + 1, spaces.z, BlockID.workbench_nasa);
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.workbench_rocket){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});
Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.workbench_nasa){World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});



var Workbench1 = {
    recipes: {},
  
   set: function(o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14, result){
      this.recipes[JSON.stringify([o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14){
     return this.recipes[JSON.stringify([o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14])];
}
};

Workbench1.set(ItemID.nose_cone, ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.engine_tier,ItemID.rocket_fins,ItemID.rocket_fins,ItemID.rocket_fins,ItemID.rocket_fins, {
    id: ItemID.rocket_1, count: 1, data: 0
});


let WorkbencheableUI = new UI.StandartWindow({standart:{header:{text:{text:Translation.translate("Rocketbench machine")}},inventory:{standart:true},background:{standart:true}},drawing:[
    {type: "bitmap", x: 725, y: 195, bitmap: "SignRocketbench",scale:3.2
    },
],elements:{slot1:{type:"slot",x:550,y:50,size:50},chestable1:{type:"slot",x:675,y:40,size:50, bitmap: "ChestableSlot"},chestable2:{type:"slot",x:775,y:40,size:50, bitmap: "ChestableSlot"},chestable3:{type:"slot",x:875,y:40,size:50, bitmap: 
"ChestableSlot"},slot2:{type:"slot",x:525,y:100,size:50},slot3:{type:"slot",x:575,y:100,size:50},slot4:{type:"slot",x:525,y:150,size:50},slot5:{type:"slot",x:575,y:150,size:50},slot6:{type:"slot",x:525,y:200,size:50},slot7:{type:"slot",x:575,y:200,size:50},slot8:{type:"slot",x:525,y:250,size:50},slot9:{type:"slot",x:575,y:250,size:50},slotuer1:{type:"slot",x:625,y:250,size:50},slotuer2:{type:"slot",x:625,y:300,size:50},slotuel1:{type:"slot",x:475,y:250,size:50},slotuel2:{type:"slot",x:475,y:300,size:50},slot10:{type:"slot",x:550,y:300,size:50},craftable:{type:"slot",x:775,y:240,size:85, bitmap: "RocketSlots"}}});



TileEntity.registerPrototype(BlockID.workbench_rocket,{
	useNetworkItemContainer: true,
	getScreenName(){return "main";},
	getScreenByName(){return WorkbencheableUI},
tick:function(){
let a = this.container.getSlot("slot1").id
let b = this.container.getSlot("slot2").id
let c = this.container.getSlot("slot3").id
let d = this.container.getSlot("slot4").id
let e = this.container.getSlot("slot5").id
let f = this.container.getSlot("slot6").id
let g = this.container.getSlot("slot7").id
let h = this.container.getSlot("slot8").id
let i = this.container.getSlot("slot9").id
let j = this.container.getSlot("slot10").id
let k = this.container.getSlot("slotuer1").id
let l = this.container.getSlot("slotuer2").id
let m = this.container.getSlot("slotuel1").id
let n = this.container.getSlot("slotuel2").id
let o = this.container.getSlot("chestable1").id
let p = this.container.getSlot("chestable2").id
let q = this.container.getSlot("chestable3").id
let r = this.container.getSlot("craftable").id
let rec = Workbench1.get(a.id, b.id,c.id,d.id,e.id,f.id,g.id,h.id,i.id,j.id,k.id,l.id,m.id,n.id);
        {
        if(rec!=null) {
   if((((r.id == rec.id && r.data == rec.data) && r.count < 64) || r.id == 0)){
            a.count--;
            b.count--;
            c.count--;
            d.count--;
            e.count--;
           f.count--;
            g.count--;
            h.count--;
            i.count--;
            j.count--;
            k.count--;
            l.count--;
            m.count--;
            n.count--;
            r.id = rec.id;
            r.data = rec.data;
            r.count+= rec.count;
            this.container.validateAll();
          
                }
            }
        }


},});
/*  slots:numerations
slotuer:r1,r2.
sltuel:l1,l2.
slotchestable:sc1,sc2,sc3.
craftable:cr.
drawing:SignRocketbench — drsrb.
             #1
           2#-#3   sc1#  sc2#  sc3#
           4#-#5
           6#-#7
        r1#8#-#9#l1  #drsrb
        r2# #10 #l2   #cr
       
          Интерфейс*/

var Workbenchmesh = new RenderMesh(); 
Workbenchmesh.setBlockTexture("assembly",0); 
Workbenchmesh.importFromFile(__dir__+"/models/workbench.obj","obj",null); 
IDRegistry.genBlockID("workbench_nasa"); 
Block.createBlock("workbench_nasa", [ 
 {name: "Workbench Nasa", texture: [["assembly", 0],["assembly", 1],["assembly", 2],["assembly", 3],["assembly", 4],["assembly", 5]], inCreative: false} 
]); 
var Workbenchrender = new ICRender.Model(); 
Workbenchrender.addEntry(new BlockRenderer.Model(Workbenchmesh)); 
BlockRenderer.setStaticICRender(BlockID.workbench_nasa,0,Workbenchrender);

TileEntity.registerPrototype(BlockID.workbench_nasa,{useNetworkItemContainer: true,
	getScreenName(){return "main";},
	getScreenByName(){return ManipulatorsUI},});


let ManipulatorsUI = new UI.StandartWindow({standart:{header:{text:{text:Translation.translate("Manipulator program")
}},inventory:{standart:true},background:{standart:true}},drawing:[
    {type: "bitmap", x: 500, y:120, bitmap: "ShemaS",scale:4.2
    }],elements:{slot1:{type:"slot",x:583,y:169,size:79},button:{type:"button",x:415,y:300,scale:1.4,bitmap:"Button"}}});
/*          
                
           
          #######
          ##d,s##
          #######
          %%%%%%%
 
          
          Интерфейс*/
