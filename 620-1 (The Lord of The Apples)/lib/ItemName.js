LIBRARY({
	name:"ItemName",
	version:1,
	shared:true,
	api:"CoreEngine"
});

// ItemName Lib By - MaiSui

var TOOLTIP = {}

var ItemName = {
    registerTooltipAddFunction:function(id,state,level,prefix){
        if(!TOOLTIP[id]) TOOLTIP[id] = [];
        TOOLTIP[id].push({tooltip:state,level:Math.min(level || 0,16),prefix:(prefix || "null")});
    },

    removeTooltip:function(id){
        delete TOOLTIP[id];
    },

    removeTooltipByPrefix:function(prefix){
        for(let i in TOOLTIP){
            if(TOOLTIP[i].prefix == prefix) delete TOOLTIP[i];
        }
    },

    removeTooltipByLevel:function(level){
        for(let i in TOOLTIP){
            if(TOOLTIP[i].level == level) delete TOOLTIP[i];
        }
    }
}

Callback.addCallback("LevelLoaded",function(){
    for(let i in TOOLTIP){
        Item.registerNameOverrideFunction(parseInt(i),function(item,name){
            var tooltip = "";

            for(let level = 0;level < 16;level++){
                for(let ii in TOOLTIP[item.id]){
                    var data = TOOLTIP[item.id][ii];
                    if(data.level == level) tooltip += "\n§7" + data.tooltip(item,name);
                }
            }

            return name + tooltip;
        });

        Logger.Log("add item tooltip ID: " + parseInt(i),"TOOLTIP");
    }
});

EXPORT("ItemName",ItemName);