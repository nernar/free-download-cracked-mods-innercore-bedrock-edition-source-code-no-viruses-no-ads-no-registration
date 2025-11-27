Translation.addTranslation("Iron Transport Pipe", {ru: "Железная транспортная труба"});
IDRegistry.genBlockID("pipeItemIron");
Block.createBlock("pipeItemIron", [
	{name: "Iron Transport Pipe", texture: [["pipe_iron",0]], inCreative: true},
]);


IDRegistry.genBlockID("pipeItemIron_a");
Block.createBlock("pipeItemIron_a", [
	{name: "Iron Pipe", texture: [["pipe_iron",1]], inCreative: false}
]);

Recipes.addShaped({id: BlockID.pipeItemIron, count: 1, data: 0}, [
		"aba"
	], ['a', 265,0,'b',20,0]);

Pipe.registerTile(BlockID.pipeItemIron);

//model
var var1 = new ICRender.Model();
var var2 = new ICRender.Model();
var var3= new ICRender.Model();
var var4 = new ICRender.Model();
var var5 = new ICRender.Model();
var var6 = new ICRender.Model();

var width=0.5;

var box1=[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2];
var box2= [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2];
var box3=[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2];
var box4=[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2];
var box5=[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1];
var box6=[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2];

var group = ICRender.getGroup("item-pipe");
	group.add(BlockID.pipeItemIron, -1);
var group2 = ICRender.getGroup("item-wood-pipe");
var group3 = ICRender.getGroup("item-sandstone-pipe");
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemIron, -1);
Block.setBlockShape(BlockID.pipeItemIron, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});

var model = BlockRenderer.createModel();
model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, BlockID.pipeItemIron, 0);
var1.addEntry(model);
var2.addEntry(model);
var3.addEntry(model);
var4.addEntry(model);
var5.addEntry(model);
var6.addEntry(model);


var boxes1=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron}
];
var boxes2=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes3=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes4=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes5=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes6=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];



for (var i in boxes1) {
	var box = boxes1[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes2) {
	var box = boxes2[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes3) {
	var box = boxes3[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes4) {
	var box = boxes4[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);	
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes5) {
	var box = boxes5[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes6) {
	var box = boxes6[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

	}


BlockRenderer.enableCoordMapping(BlockID.pipeItemIron,-1,var1);

TileEntity.registerPrototype(BlockID.pipeItemIron,{
	getTransportingDirections:function(item){
		var a=[];
		a.push(Pipe.directions[this.data.index]);
		return a
	},
	tick:function(){
		if(!this.data.index)this.data.index=0;
	},
	click:function(){
		if(ItemDictionary.isItemInCathegory(Player.getCarriedItem().id,"wrench")){
			if(this.data.index<5)this.data.index++;
			else this.data.index=0;
			this.map();
			return;
		}
	},
	destroy:function(){
		BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
	},
	map:function(){
		var vis=[
			var1,var2,var3,var4,var5,var6
		];
		BlockRenderer.mapAtCoords(this.x,this.y,this.z,vis[this.data.index]);
	}
});