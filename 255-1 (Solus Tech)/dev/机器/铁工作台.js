function addrecipe(result,count,data,s1,s2,s3,s4,s5,s6,s7,s8,s9,tool,ct){
	  var st1 = ct.getSlot("slot0");
        var st2 = ct.getSlot("slot1");
        var st3 = ct.getSlot("slot2");
        var st4 = ct.getSlot("slot3");
        var st5 = ct.getSlot("slot4");
        var st6 = ct.getSlot("slot5");
        var st7 = ct.getSlot("slot6");
        var st8 = ct.getSlot("slot7");
        var st9 = ct.getSlot("slot8");
        var st10 = ct.getSlot("resultSlot");
        var ss1 = ct.getSlot("slot11");
        var ss2 = ct.getSlot("slot12");
        var ss3 = ct.getSlot("slot13");
        if(st1.id==s1&&
st2.id==s2&&
st3.id==s3&&
st4.id==s4&&
st5.id==s5&&
st6.id==s6&&
st7.id==s7&&
st8.id==s8&&
st9.id==s9&&
(ss1.id==tool||ss2.id==tool||ss3.id==tool)){
	st10.id=result;
	st10.data=data;
	st10.count+=count;
	st1.count--;
	st2.count--;
	st3.count--;
	st4.count--;
	st5.count--;
	st6.count--;
	st7.count--;
	st8.count--;
	st9.count--;
	if(ss1.id==tool){
		ss1.data++;
		}else if(ss2.id==tool){
			ss2.data++;
			}else if(ss3.id==tool){
				ss3.data++
				};}
				
				
				};
IDRegistry.genBlockID("ft_铁工作台");
Block.createBlock("ft_铁工作台", [
	{name: "Steel Workbench", texture:
[["ft_铁", 0], ["ft_铁工作台", 0],
["ft_铁工作台", 2], ["ft_铁工作台", 2],
["ft_铁工作台", 1], ["ft_铁工作台", 1]],
inCreative: true}
]);

var workbenchGui=new UI.StandartWindow({
standart: {
	header: {text: {text: "Iron Workbench"}},
	inventory: {standart: true},
	background: {standart: true}},
	
elements: {
		"slot0": {type: "slot", x: 467, y: 146, size: 60},
		"slot1": {type: "slot", x: 537, y: 146, size: 60},
		"slot2": {type: "slot", x: 607, y: 146, size: 60},
		"slot3": {type: "slot", x: 467, y: 214, size: 60},
		"slot4": {type: "slot", x: 537, y: 214, size: 60},
		"slot5": {type: "slot", x: 607, y: 214, size: 60},
		"slot6": {type: "slot", x: 467, y: 283, size: 60},
		"slot7": {type: "slot", x: 537, y: 283, size: 60},
		"slot8": {type: "slot", x: 607, y: 283, size: 60},
		"slot11": {type: "slot", x: 830, y: 42},
		"slot12": {type: "slot", x: 830, y: 102},
		"slot13": {type: "slot", x: 830, y: 162},
		"resultSlot": {type: "slot", x: 698, y: 212},
		    "button": {type: "button", x: 600, y: 400, bitmap: "button", scale: 2, clicker: {
			onClick: function(container, tileEntity){
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_铁锤,container);
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_钢锤,container);
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_金锤,container);
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_钻石锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_铁锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_钢锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_金锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_钻石锤,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_铁钳子,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钢钳子,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_金钳子,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钻石钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_铁钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_钢钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_金钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_钻石钳子,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_铁小刀,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_钢小刀,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_金小刀,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_钻石小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_铁小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_金小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_钢小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_钻石小刀,container);
				addrecipe(BlockID.ft_机器外壳,1,0,ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,ItemID.ft_螺丝刀,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_铁锤,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_钢锤,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_金锤,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_钻石锤,container);
				addrecipe(BlockID.ft_机床,1,0,0,0,0,ItemID.ft_蓄电池,58,ItemID.ft_发电机核心,0,0,0,BlockID.ft_机器外壳,container);
				addrecipe(ItemID.ft_摇柄,1,0,ItemID.ft_钢,ItemID.ft_螺丝,0,0,ItemID.ft_钢,0,0,ItemID.ft_螺丝,ItemID.ft_钢,ItemID.ft_螺丝刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_铁小刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钢小刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_金小刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钻石小刀,container);
				addrecipe(BlockID.ft_大型洗矿机,1,0,ItemID.ft_电机,BlockID.ft_锅炉,ItemID.ft_电机,0,BlockID.ft_洗矿机,0,ItemID.ft_蓄电池,0,ItemID.ft_蓄电池,ItemID.ft_扳手,container);
			}
}}
}
});

TileEntity.registerPrototype(BlockID.ft_铁工作台, {
	tick:function()
		{
			  var st1 = this.container.getSlot("slot0");
        var st2 = this.container.getSlot("slot1");
        var st3 = this.container.getSlot("slot2");
        var st4 = this.container.getSlot("slot3");
        var st5 = this.container.getSlot("slot4");
        var st6 = this.container.getSlot("slot5");
        var st7 = this.container.getSlot("slot6");
        var st8 = this.container.getSlot("slot7");
        var st9 = this.container.getSlot("slot8");
        var st10 = this.container.getSlot("resultSlot");
        var ss1 = this.container.getSlot("slot11");
        var ss2 = this.container.getSlot("slot12");
        var ss3 = this.container.getSlot("slot13");
        if(ss1.data>Item.getMaxDamage(ss1.id) ){
					ss1.id=0;
};
					if(ss2.data>Item.getMaxDamage(ss2.id) ){
					ss2.id=0;
};
if(ss3.data>Item.getMaxDamage(ss3.id) ){
					ss3.id=0;
};
				if(st1.count<=0){
				st1.id=0;
				st1.count=0;
				};
				if(st2.count<=0){
				st2.id=0;
				st2.count=0;
				};
				if(st3.count<=0){
				st3.id=0;
				st3.count=0
				};
				if(st4.count<=0){
				st4.id=0;
				st4.count=0
				};
				if(st5.count<=0){
				st5.id=0;
				st5.count=0
				};
				if(st6.count<=0){
				st6.id=0;
				st6.count=0
				};
				if(st7.count<=0){
				st7.id=0;
				st7.count=0
				};
				if(st8.count<=0){
				st8.id=0;
				st8.count=0
				};
				if(st9.count<=0){
				st9.id=0;
				st9.count=0
				};
				if(st10.count<=0){
				st10.id=0;
				st10.count=0
				};
				if(ss1.count<=0){
				ss1.id=0;
				ss1.count=0
				};
				if(ss2.count<=0){
				ss2.id=0;
				ss2.count=0
				};
				if(ss3.count<=0){
				ss3.id=0;
				ss3.count=0
				};
				},
    getGuiScreen: function() {
        return workbenchGui;
    }
});