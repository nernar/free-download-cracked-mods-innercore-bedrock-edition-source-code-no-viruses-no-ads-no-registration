var BlockPos = WRAP_JAVA("com.core.api.mcpe.api.BlockPos");
var Vec2 = WRAP_JAVA("com.core.api.mcpe.api.Vec2");
var Vec3 = WRAP_JAVA("com.core.api.mcpe.api.Vec3");
var ChunkPos = WRAP_JAVA("com.core.api.mcpe.api.ChunkPos");
var Parameter = WRAP_JAVA("com.core.api.module.types.Parameter");
var Injector = WRAP_JAVA("com.core.api.Injector");
var ToolTip = WRAP_JAVA("com.core.api.item.ToolTip");
var NativeSaver = WRAP_JAVA("com.core.api.engine.NativeSaver");
var FileUtils = WRAP_JAVA("com.core.api.engine.FileUtils");
var CustomWarp = WRAP_JAVA("com.core.api.engine.CustomWarp");
var Warp = CustomWarp.init();
var Actor = WRAP_JAVA("com.core.api.mcpe.entity.Actor");
var Mob = WRAP_JAVA("com.core.api.mcpe.entity.Mob");
var NativePlayer = WRAP_JAVA("com.core.api.mcpe.entity.Player");
var LocalPlayer = WRAP_JAVA("com.core.api.mcpe.entity.LocalPlayer");
var ServerPlayer = WRAP_JAVA("com.core.api.mcpe.entity.ServerPlayer");
var NativeVar = WRAP_JAVA("com.core.api.engine.NativeVar");
var ActorDamageCause = WRAP_JAVA("com.core.api.entity.ActorDamageCause");
var NativeUi = WRAP_JAVA("com.core.api.engine.ui.NativeUi");
var ImageElement = WRAP_JAVA("com.core.api.engine.ui.types.ImageElement");
var TextElement = WRAP_JAVA("com.core.api.engine.ui.types.TextElement");
var MeshElement = WRAP_JAVA("com.core.api.engine.ui.types.MeshElement");
if (__config__.getBool("membory_display") == true) {
    var Membory_1 = new UI.Window({
        drawing: [
            { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) }
        ],
        elements: {
            "membory": { type: "text", x: 0, y: 0, text: "", size: 70, font: { color: android.graphics.Color.argb(1, 1, 1, 1) } }
        }
    });
    Membory_1.setAsGameOverlay(true);
    Membory_1.setTouchable(false);
    Membory_1.open();
    var time_1 = 1000 / 30;
    Threading.initThread("membory-information-update", function () {
        var context = UI.getContext();
        while (true) {
            java.lang.Thread.sleep(time_1);
            var free = Math.floor(context.getFreeMemory() / 1024 / 1024);
            var total = Math.floor(context.getTotalMemory() / 1024 / 1024);
            var float = free / total;
            var obj = Membory_1.content.elements["membory"];
            if (float >= .85)
                obj.font.color = android.graphics.Color.RED;
            else if (float >= .6)
                obj.font.color = android.graphics.Color.YELLOW;
            else
                obj.font.color = android.graphics.Color.GREEN;
            obj.text = free + "/" + total;
            Membory_1.forceRefresh();
        }
    });
}
/*
Любопытной варваре нос аторвали
let BlockSource_ = BlockSource;
BlockSource = new Warp("com.zhekasmirnov.apparatus.mcpe.NativeBlockSource");
function createBlockSource(region){
    try {
        let object = new CustomWarp.JsObject(region);
        object.test = function(){
            alert("hello");
        };
        return object;
    } catch (error) {
        Logger.error(error.toString());
        return region;
    }
}
try {
    BlockSource.staticTest = function(player){
        alert("createBlockSource");
        return createBlockSource(BlockSource_.getDefaultForActor(player));
    };
} catch (error) {
    Logger.error(error.toString());
}*/ 
var NativeAPIJava = WRAP_JAVA("com.core.api.module.NativeAPI");
var ConversionType = {
    ITEM: 0,
    BLOCK: 1
};
var NativeAPI = {
    dynamicToStatic: function (id, type) {
        return Number(NativeAPIJava.dynamicToStatic(id, type || ConversionType.ITEM));
    },
    staticToDynamic: function (id, type) {
        return Number(NativeAPIJava.staticToDynamic(id, type || ConversionType.ITEM));
    },
    getActorID: function (ptr) {
        return NativeAPIJava.getActorID(ptr);
    },
    getXBlockPos: function (ptr) {
        return Number(NativeAPIJava.getXBlockPos(ptr));
    },
    getYBlockPos: function (ptr) {
        return Number(NativeAPIJava.getYBlockPos(ptr));
    },
    getZBlockPos: function (ptr) {
        return Number(NativeAPIJava.getZBlockPos(ptr));
    },
    getActorById: function (ptr) {
        return NativeAPIJava.getActorById(ptr);
    }
};
var ItemsUtilJava = WRAP_JAVA("com.core.api.module.ItemsUtil");
var ItemsUtil = {
    api: WRAP_JAVA("com.core.api.mcpe.item.Item"),
    getItemById: function (id) {
        return ItemsUtilJava.getItem(id);
    },
    overrideName: function (id, data, name) {
        this.api.overrideName(id, data, name);
    },
    overrideArmorValue: function (id, value) {
        this.api.overrideArmorValue(id, value);
    },
};
var CustomEntityJava = WRAP_JAVA("com.core.api.entity.CustomEntity");
var EntityRegister = {
    setHandlerTick: function (name, func) {
        CustomEntityJava.setHandlerTick(name, func);
    }
};
var gui = WRAP_NATIVE("GUI");
var Gui = {
    animationDestroy: function (x, y, z) {
        gui.setDestroyBlock(x, y, z);
    }
};
var TickingAreasManagerJava = WRAP_JAVA("com.core.api.level.area.TickingAreasManager");
var TickingAreasManager = {
    hasActiveAreas: function () {
        return TickingAreasManagerJava.hasActiveAreas() == 1;
    },
    addArea: function (dimension, name, x, y, z, range) {
        TickingAreasManagerJava.addArea(dimension, name, x, y, z, range);
    },
    addAreaPostions: function (dimension, name, x, y, z, xx, yy, zz) {
        TickingAreasManagerJava.addAreaPostions(dimension, name, x, y, z, xx, yy, zz);
    },
    addEntityArea: function (dimension, ent) {
        TickingAreasManagerJava.addEntityArea(dimension, ent);
    },
    countStandaloneTickingAreas: function () {
        return Number(TickingAreasManagerJava.countStandaloneTickingAreas());
    },
    countPendingAreas: function (dimension) {
        return Number(TickingAreasManagerJava.countPendingAreas(dimension));
    }
};
var GlobalContext = {
    api: WRAP_JAVA("com.core.api.innnercore.GlobalContext"),
    getClientInstance: function () {
        return this.api.getClientInstance();
    },
    getServerLevel: function () {
        return this.api.getLevelServer();
    },
    getLevel: function () {
        return this.api.getLevel();
    },
    getLocalPlayer: function () {
        return this.api.getLocalPlayer();
    },
    getServerPlayer: function () {
        return this.api.getServerPlayer();
    },
    getDimension: function () {
        return this.api.getDimension();
    }
};
var BlockUtilsJava = WRAP_JAVA("com.core.api.innnercore.BlockUtils");
BlockUtilsJava.register(5, new ICRender.Model(new BlockRenderer.Model(5, 0)));
var BlockUtils = {
    getBlockById: function (id) {
        return BlockUtilsJava.getBlockById(id);
    },
    getBlockStateForIdData: function (id, data) {
        return BlockUtilsJava.getBlockStateForIdData(id, data);
    }
};
var BlockRegistry = {
    api: WRAP_JAVA("com.core.api.engine.BlockRegistry"),
    registerDoorBlock: function (uid, name, texture) {
        this.api.registerDoorBlock(BlockID[uid], uid, name, texture.name, texture.data | 0);
    }
};
var WorldJavaAPI = WRAP_JAVA("com.core.api.mcpe.World");
World.addWorldToCache = function (path) {
    return WorldJavaAPI.addWorldToCache(path);
};
World.updateWorlds = function () {
    return WorldJavaAPI.updateWorlds();
};
World.getWorldsCount = function () {
    return WorldJavaAPI.getWorldsCount();
};
World.setFlatGenerator = function (json) {
    return WorldJavaAPI.setFlatGenerator(json);
};
World.setFlatGenerator('{"biome_id":1,"block_layers":[{"block_data":0,"block_id":7,"count":1},{"block_data":0,"block_id":3,"count":2},{"block_data":0,"block_id":2,"count":1}],"encoding_version":3,"structure_options":null}');
var ScalesJava = WRAP_JAVA("com.core.api.module.Scales");
Network.addClientPacket("scalees.setValue", function (data) {
    ScalesJava.getScaleByPlayer(Player.get(), data.name).setValue(data.v);
});
Callback.addCallback("EntityDeath", function (entity) {
    if (Network.getConnectedPlayers().indexOf(entity) != -1) {
        var scales = ScalesJava.getScales();
        for (var i in scales) {
            var name = scales[i];
            if (ScalesJava.getScaleByName(name).isReset)
                ScalesJava.getScaleByPlayer(entity, name).reset();
        }
    }
});
function PlayerScale(javaClass, player, name) {
    this.getValue = function () {
        return javaClass.getValue();
    };
    this.setValue = function (v) {
        var client = Network.getClientForPlayer(player);
        if (client)
            client.send("scalees.setValue", {
                name: name,
                v: v
            });
        return javaClass.setValue(v);
    };
    this.addValue = function (v) {
        this.setValue(this.getValue() + v);
    };
    this.reset = function () {
        javaClass.reset();
    };
    this.getType = function () {
        return javaClass.getType();
    };
}
function Scale(java) {
    this.setDisplay = function (v) {
        java.setDisplay(v);
        return this;
    };
    this.isDisplay = function () {
        return java.isDisplay();
    };
    this.get = function () {
        return java;
    };
}
var Scales = {
    register: function (obj) {
        return new Scale(ScalesJava.register(obj));
    },
    getScaleByPlayer: function (player, name) {
        return new PlayerScale(ScalesJava.getScaleByPlayer(player, name), player, name);
    },
    isCreative: function (player, name) {
        return new PlayerActor(player).getGameMode() == 0;
    }
};
Saver.addSavesScope("lib.scales", function read(scope) {
    var players = Object.keys(scope.players);
    for (var i in players) {
        var player = players[i];
        var scales = Object.keys(scope.players[player]);
        for (var j in scales) {
            var scale = scales[j];
            ScalesJava.getScaleByPlayer(player, scale).setValue(scope.players[player][scale]);
        }
    }
}, function save() {
    var obj = {};
    var players = ScalesJava.getPlayers();
    for (var i in players) {
        var player = players[i];
        var scales = ScalesJava.getScales();
        obj[player] = {};
        for (var j in scales) {
            var scale = scales[j];
            obj[player][scale] = ScalesJava.getScaleByPlayer(player, scale).getValue();
        }
    }
    return {
        players: obj,
    };
});
var JsHelper = WRAP_JAVA("com.core.api.JsHelper");
ModAPI.registerAPI("CoreUtility", {
    ToolTip: JsHelper.get(ToolTip),
    ConversionType: ConversionType,
    NativeAPI: NativeAPI,
    Injector: JsHelper.get(Injector),
    EntityRegister: EntityRegister,
    ItemsUtil: ItemsUtil,
    FileUtils: JsHelper.get(FileUtils),
    Gui: Gui,
    TickingAreasManager: TickingAreasManager,
    GlobalContext: GlobalContext,
    Parameter: JsHelper.get(Parameter),
    BlockPos: JsHelper.get(BlockPos),
    Vec3: JsHelper.get(Vec3),
    Vec2: JsHelper.get(Vec2),
    ChunkPos: JsHelper.get(ChunkPos),
    Actor: JsHelper.get(Actor),
    Mob: JsHelper.get(Mob),
    NativePlayer: JsHelper.get(NativePlayer),
    LocalPlayer: JsHelper.get(LocalPlayer),
    ServerPlayer: JsHelper.get(ServerPlayer),
    NativeUi: JsHelper.get(NativeUi),
    ImageElement: JsHelper.get(ImageElement),
    TextElement: JsHelper.get(TextElement),
    ActorDamageCause: JsHelper.get(ActorDamageCause),
    BlockUtils: BlockUtils,
    BlockRegistry: BlockRegistry,
    Scales: Scales,
    version: 3,
    requireGlobal: function (cmd) {
        return eval(cmd);
    }
});
//container.openAs(window);
//WRAP_JAVA("com.core.api.module.NativeAPI").setWorldGenerator("{'biome_id':1,'block_layers': [{'block_name': 'minecraft:dirt',count:80}],'encoding_version':5}");
/*
let block_id = IDRegistry.genBlockID("test_block");
BlockRegistry.registerDoorBlock("test_block","Test Glass Door",{name:"glass"});

Item.registerUseFunctionForID(280, function(coords,item,block){
    var source = BlockSource.getDefaultForActor(Player.get());
    var down_door = new BlockState(BlockID["test_block"],0).addStates({
        open_bit:0, direction: 0, door_hinge_bit: 0, upper_block_bit: 0, color:0
    });
    var upper_door = new BlockState(BlockID["test_block"],0).addStates({
        open_bit:0, direction: 0, door_hinge_bit: 0, upper_block_bit: 1, color:0
     });
    source.setBlock(coords.x,coords.y + 1, coords.z, down_door);
    source.setBlock(coords.x,coords.y + 2,coords.z, upper_door);
   // Debug.m(source.getBlock(coords.x,coords.y +1,coords.z));
   // Debug.m(source.getBlock(coords.x,coords.y +2,coords.z));
})*/
