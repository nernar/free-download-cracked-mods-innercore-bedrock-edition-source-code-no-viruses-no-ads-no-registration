/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: header.js

// 添加玩家效果
Player.addEffect = function(id,level,tick){
    Entity.addEffect(Player.get(),id,level,tick);
}

var Pollution = {
    data:{},

    getPollutionIntensity:function(){
        return __config__.getNumber("pollution_intensity");
    },

    getPollution:function(x,z){
        if(!this.data[x + ":" + z]){this.data[x + ":" + z] = 0;}
        return this.data[x + ":" + z];
    },

    setPollution:function(x,z,data){
        this.data[x + ":" + z] = data;
    },
    
    addPollution:function(x,z,data){
        this.setPollution(x,z,this.getPollution(x,z) + data);
    }
}

// 保存数据
Saver.addSavesScope("Pollution",function read(scope){
	Pollution.data = scope.pollution || {};
},function save(){
	return {
		pollution:Pollution.data
	}
});

// 效果
Callback.addCallback("tick",function(){
	var coords = Player.getPosition(),pollution = Pollution.getPollution(parseInt(coords.x / 16),parseInt(coords.z / 16));
	if(pollution){
        // [挖掘疲劳]Mining Fatigue
        if(pollution >= 16384 * 1){Player.addEffect(4,parseInt(pollution / 16384),60 * 20);}
        // [反胃]Nausea
        if(pollution >= 16384 * 2){Player.addEffect(9,parseInt(pollution / 16384),60 * 20);}
        // [失明]Blindness
        if(pollution >= 16384 * 3){Player.addEffect(15,parseInt(pollution / 16384),60 * 20);}
        // [中毒]Poison
        if(pollution >= 16384 * 4){Player.addEffect(19,parseInt(pollution / 16384),60 * 20);}
    }
});

function FilterModel(id,data){
    var render = new ICRender.Model(),model = BlockRenderer.Model();
    model.addBox(0,0,0,1,0.25,1,id,data);
    model.addBox(0,0.75,0,1,1,1,id,data);
    model.addBox(0.25,0.25,0.25,0.75,0.75,0.75,id,data);
    model.addBox(0.0625,0.25,0.0625,0.1875,0.75,0.1875,id,data);
    model.addBox(0.0625,0.25,0.8125,0.1875,0.75,0.9375,id,data);
    model.addBox(0.8125,0.25,0.0625,0.9375,0.75,0.1875,id,data);
    model.addBox(0.8125,0.25,0.8125,0.9375,0.75,0.9375,id,data);
    render.addEntry(model);
    BlockRenderer.enableCoordMapping(id,data,render);
}




// file: translation.js

// filter
Translation.addTranslation("Iron Filter",{zh:"铁过滤器"});
Translation.addTranslation("Gold Filter",{zh:"金过滤器"});
Translation.addTranslation("Diamond Filter",{zh:"钻石过滤器"});




// file: block/filter.js

Block.createSpecialType({
    base:1,
    opaque:false,
    destroytime:3
},"filter");

// ================================================== 铁过滤器 ================================================== //
IDRegistry.genBlockID("FilterIron");
Block.createBlock("FilterIron",[
    {name:"Iron Filter",texture:[["iron_block",0]],inCreative:true}
],"filter");
FilterModel(BlockID.FilterIron,0);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.FilterIron,count:1,data:0},["aaa","aba","aaa"],["a",265,0,"b",42,0]);
});

TileEntity.registerPrototype(BlockID.FilterIron,{
    tick:function(){
        var x = parseInt(this.x / 16),z = parseInt(this.z / 16),pollution = Pollution.getPollution(x,z);
	    if(pollution >= 16){
            Pollution.setPollution(x,z,pollution - 16);
        }
    }
});


// ================================================== 金过滤器 ================================================== //
IDRegistry.genBlockID("FilterGold");
Block.createBlock("FilterGold",[
    {name:"Gold Filter",texture:[["gold_block",0]],inCreative:true}
],"filter");
FilterModel(BlockID.FilterGold,0);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.FilterGold,count:1,data:0},["aaa","aba","aaa"],["a",266,0,"b",41,0]);
});

TileEntity.registerPrototype(BlockID.FilterGold,{
    tick:function(){
        var x = parseInt(this.x / 16),z = parseInt(this.z / 16),pollution = Pollution.getPollution(x,z);
	    if(pollution >= 32){
            Pollution.setPollution(x,z,pollution - 32);
        }
    }
});


// ================================================== 钻石过滤器 ================================================== //
IDRegistry.genBlockID("FilterDiamond");
Block.createBlock("FilterDiamond",[
    {name:"Diamond Filter",texture:[["diamond_block",0]],inCreative:true}
],"filter");
FilterModel(BlockID.FilterDiamond,0);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.FilterDiamond,count:1,data:0},["aaa","aba","aaa"],["a",264,0,"b",57,0]);
});

TileEntity.registerPrototype(BlockID.FilterDiamond,{
    tick:function(){
        var x = parseInt(this.x / 16),z = parseInt(this.z / 16),pollution = Pollution.getPollution(x,z);
	    if(pollution >= 64){
            Pollution.setPollution(x,z,pollution - 64);
        }
    }
});




// file: support/et2.js

ModAPI.addAPICallback("ETech",function(api){
    var ETMachine = api.Machine;
    for(var count in BlockID){
        var id = BlockID[count];

        if(ETMachine.isMachine(id)){
            var tile = TileEntity.getPrototype(id);

            // tick
            tile.pollution_tick = tile.tick;
            tile.tick = function(){
                this.pollution_tick();

                if(this.data.isActive){
                    Pollution.addPollution(parseInt(this.x / 16),parseInt(this.z / 16),(this.data.pollution?this.data.pollution:1) * Pollution.getPollutionIntensity());
                }
            }
        }
    }
});




// file: support/ic2.js

ModAPI.addAPICallback("ICore",function(api){
    var ICMachine = api.Machine;
    for(var count in BlockID){
        var id = BlockID[count];

        if(ICMachine.isMachine(id)){
            var tile = TileEntity.getPrototype(id);

            // tick
            tile.pollution_tick = tile.tick;
            tile.tick = function(){
                this.pollution_tick();

                if(this.data.isActive){
                    Pollution.addPollution(parseInt(this.x / 16),parseInt(this.z / 16),(this.data.pollution?this.data.pollution:1) * Pollution.getPollutionIntensity());
                }
            }
        }
    }
});




