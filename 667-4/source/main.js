function PlayerTransfer(dim, client) {
    if (dim == 1997) {
        Matrix.data.time = World.getWorldTime();
    }
    else {
        if (Matrix.data.time != 0 && Entity.getDimension(client) != 0)
            World.setWorldTime(Matrix.data.time);
    }
    Dimensions.transfer(client, dim);
    Callback.addCallback("PlayerChangedDimension", function (playerUid, currentId, lastId) {
        var p = Entity.getPosition(playerUid);
        for (var i = 0; i < 254; i++) {
            var bs = BlockSource.getDefaultForDimension(currentId);
            if (bs.getBlockId(p.x, i - 1, p.z) !== 0) {
                Entity.setPosition(playerUid, p.x, i + 2, p.z);
                break;
            }
        }
    });
}
var rotations = [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2];
function rtd(r) {
    return r * (180 / Math.PI);
}
function getBlockRotation(isFull, clientPlayer) {
    var angle = Entity.getLookAngle(clientPlayer);
    var pitch = rtd(angle.pitch);
    var yaw = rtd(angle.yaw);
    if (isFull) {
        if (pitch < -45)
            return 0;
        if (pitch > 45)
            return 1;
    }
    while (yaw == 0)
        yaw = Entity.getLookAngle(clientPlayer).yaw;
    var rotation = Math.floor((yaw - 45) % 360 / 90);
    if (rotation < 0)
        rotation += 4;
    rotation = [3, 1, 2, 0][rotation];
    // alert(pitch)
    // alert(yaw)
    return isFull ? rotation + 2 : rotation;
}
function regBlockWithModel(info) {
    var block = info.block;
    var meshProps = info.model;
    var shp = info.shape;
    var recipe = info.recipe;
    IDRegistry.genBlockID(block.id);
    Block.createBlock(block.id, [{ name: block.name, texture: block.textures, inCreative: true }], { lightopacity: 0, translucency: 1 });
    if (meshProps) {
        for (var i = 0; i < 4; i++) {
            var mesh = new RenderMesh();
            var icr = new ICRender.Model();
            mesh.setBlockTexture(meshProps.texture, 0);
            mesh.importFromFile(__dir__ + "resources/mod_assets/models/" + meshProps.modelFile, "obj", { translate: [1, 0, 1], scale: [1 / 16, 1 / 16, 1 / 16] });
            mesh.rotate(0.5, 0.5, 0.5, 0, rotations[i], 0);
            mesh.rebuild();
            mesh.setColor(255, 255, 255);
            icr.addEntry(new BlockRenderer.Model(mesh));
            BlockRenderer.setStaticICRender(BlockID[block.id], i, icr);
            ItemModel.getFor(BlockID[block.id], i).setHandModel(mesh, meshProps.texture);
            ItemModel.getFor(BlockID[block.id], i).setModUiSpriteName(meshProps.name, 0);
            // if (!meshProps.addToCreativeVariations && i == 0)
            //     Item.addToCreative(BlockID[block.id], 1, i)
            if (meshProps.addToCreativeVariations)
                Item.addToCreative(BlockID[block.id], 1, i);
        }
    }
    // Block.registerPlaceFunction(BlockID[block.id], function (c, item, bl, player) {
    //     let bs = BlockSource.getDefaultForActor(player)
    //         bs.setBlock(c.x, c.y, c.z, BlockID[block.id], getBlockRotation(false, player))
    // }) //TODO: Ожидает фикса жеки
    if (shp)
        Block.setShape(BlockID[block.id], shp.from.x, shp.from.y, shp.from.z, shp.to.x, shp.to.y, shp.to.z);
    if (recipe)
        Recipes.addShaped({ id: BlockID[block.id], count: recipe.props.count || 1, data: recipe.props.data || -1 }, recipe.form, recipe.ingredients);
}
regBlockWithModel({
    block: { id: 'matrix_tel', name: 'Matrix Telephone', textures: [['cauldron_inner', 0], ['cauldron_inner', 0], ['cauldron_inner', 0]] },
    model: { texture: 'tel', modelFile: 'tel.obj', addToCreativeVariations: false, name: 'phone_item' },
    shape: {
        from: { x: 2 / 16, y: 0 / 16, z: 2 / 16 },
        to: { x: 14 / 16, y: 10 / 16, z: 14 / 16 }
    },
    recipe: {
        form: ["asa", "dfd", " g "],
        ingredients: ['a', 265, 0, 's', 101, 0, 'd', 77, 5, 'f', 148, 0, 'g', 42, 0],
        props: { count: 1, data: 0 }
    }
});
regBlockWithModel({
    block: { id: 'matrix_dish', name: 'Dish', textures: [['cauldron_inner', 0], ['cauldron_inner', 0], ['cauldron_inner', 0]] },
    model: { texture: 'dish', modelFile: 'dish.obj', addToCreativeVariations: false, name: 'dish_item' },
    shape: {
        from: { x: 3 / 16, y: 0 / 16, z: 3 / 16 },
        to: { x: 13 / 16, y: 2 / 16, z: 13 / 16 }
    },
    recipe: {
        form: ['a'],
        ingredients: ['a', 155, 3],
        props: { count: 6, data: 0 }
    }
});
regBlockWithModel({
    block: { id: 'matrix_pc', name: 'Pc', textures: [['cauldron_inner', 0], ['cauldron_inner', 0], ['cauldron_inner', 0]] },
    model: { texture: 'pc', modelFile: 'pc.obj', addToCreativeVariations: false, name: 'pc_item' },
    shape: {
        from: { x: 1 / 16, y: 0 / 16, z: 1 / 16 },
        to: { x: 15 / 16, y: 15 / 16, z: 15 / 16 }
    },
    recipe: {
        form: ['aba', 'ada', ' f '],
        ingredients: ['a', 171, 15, 'b', 321, 0, 'd', 101, 0, 'f', -166, 1],
        props: { count: 1, data: 0 }
    }
});
// Callback.addCallback("ItemUse", function (coords, i, block) {
//     // alert(Item.getName(i.id, i.data) + ' = ' + i.id + ', ' + i.data)
// })
IDRegistry.genItemID("blue_pellet");
IDRegistry.genItemID("red_pellet");
Item.createFoodItem("blue_pellet", "Blue pellet", { name: "blue_pellet" }, { stack: 8, food: 8 });
Item.createFoodItem("red_pellet", "Red pellet", { name: "red_pellet" }, { stack: 8, food: 16 });
Recipes.addShaped({ id: ItemID.blue_pellet, count: 1, data: 0 }, [
    "abc"
], ['a', 322, 0, 'b', 396, 0, 'c', 351, 18]);
Recipes.addShaped({ id: ItemID.red_pellet, count: 1, data: 0 }, [
    "abc", 'de'
], ['a', 322, 0, 'b', 396, 0, 'c', 351, 1, 'd', 382, 0, 'e', 368, 0]);
Callback.addCallback("FoodEaten", function (food, ratio, player) {
    var client = Network.getClientForPlayer(player);
    var clientPlayer = client.getPlayerUid();
    switch (Entity.getCarriedItem(clientPlayer).id) {
        case ItemID.blue_pellet:
            Entity.addEffect(clientPlayer, Native.PotionEffect.absorption, 5, 6000);
            Entity.addEffect(clientPlayer, Native.PotionEffect.damageBoost, 2, 6000);
            Entity.addEffect(clientPlayer, Native.PotionEffect.damageResistance, 2, 6000);
            Entity.addEffect(clientPlayer, Native.PotionEffect.digSpeed, 2, 6000);
            break;
        case ItemID.red_pellet:
            Entity.addEffect(clientPlayer, Native.PotionEffect.regeneration, 5, 12000);
            Entity.addEffect(clientPlayer, Native.PotionEffect.damageResistance, 2, 12000);
            PlayerTransfer(1997, clientPlayer);
            break;
    }
});
var MatrixDimension = new Dimensions.CustomDimension("Matrix", 1997);
var generator = new Dimensions.CustomGenerator("overworld").setModGenerationBaseDimension(0).setBuildVanillaSurfaces(true).setGenerateVanillaStructures(true);
MatrixDimension.setCloudColor(0, 0, 0);
MatrixDimension.setSkyColor(0, 0, 0);
MatrixDimension.setSunsetColor(0, 0, 0);
MatrixDimension.setGenerator(generator);
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Matrix = {
    data: {
        ticks: 0,
        time: 0,
        first: true,
    },
    particles: [],
    dialog: [
        "Wake up, Neo...",
        "The Matrix has you...",
        "Follow the white rabbit."
    ],
    rainStyles: {
        styles: [9, 2, 5, 1, 7],
        current: 0,
        multiplier: 1
    },
    commands: {
        noclip: null, nightvision: null, slow: null,
        fly: null, gm: null, speed: null,
        normalspeed: null, transfer: null,
    },
    regParticles: function (list) {
        for (var i in list) {
            this.particles.push(Particles.registerParticleType({
                texture: list[i],
                size: [2, 2],
                lifetime: [1, 40],
                render: 2
            }));
        }
    },
    tick: function () {
        this.data.ticks++;
        if (this.data.first == true)
            this.startDialog();
    },
    add: function (coords, radius, count) {
        var rainStyle = this.rainStyles;
        var style = rainStyle.styles[rainStyle.current];
        for (var i = 0; i < count; i++) {
            var x = coords.x - radius + Math.random() * radius * 2;
            var y = coords.y - radius + Math.random() * radius * 2;
            var z = coords.z - radius + Math.random() * radius * 2;
            for (var i_1 = 0; i_1 < style * rainStyle.multiplier; i_1++)
                Particles.addParticle(this.particles[randomInt(0, 8)], x + Math.random() * 1.382, y + i_1, z + Math.random() * 1.382, 0, -0.35, 0);
        }
    },
    startDialog: function () {
        switch (this.data.ticks) {
            case 20:
                Game.message(Native.Color.GREEN + this.dialog[0]);
                break;
            case 80:
                Game.message(Native.Color.GREEN + this.dialog[1]);
                break;
            case 160:
                Game.message(Native.Color.GREEN + this.dialog[2]);
                var c = Player.getPosition();
                Entity.spawn(c.x + randomInt(3, 5), c.y + 2, c.z + randomInt(2, 6), Native.EntityType.RABBIT);
                this.data.first == false;
                this.data.ticks == 0;
                break;
        }
    }
};
Matrix.regParticles(["m0", "m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9"]);
Callback.addCallback("LocalTick", function () {
    var coords = Entity.getPosition(Player.get());
    if (Player.getDimension() == 1997) {
        if (World.getThreadTime() % 4 === 0) {
            World.setWorldTime(22000);
            Matrix.add(coords, 5, 4);
            Matrix.tick();
        }
    }
});
Callback.addCallback("NativeCommand", function (str) {
    str = str.split(" ");
    var cmdName = str[0];
    var cmdArg = str[1];
    if (str[0].replace("/", "") in Matrix.commands)
        Game.prevent();
    switch (cmdName) {
        case "/noclip":
            Player.setAbility(Native.PlayerAbility.NOCLIP, Boolean(cmdArg || false) || false);
            break;
        case "/nightvision":
            Boolean(cmdArg) == true ?
                Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 0, 200000) :
                Entity.clearEffect(Player.get(), Native.PotionEffect.nightVision);
            break;
        case "/fly":
            Player.setAbility(Native.PlayerAbility.MAYFLY, Boolean(cmdArg || false) || false);
            break;
        case "/gm":
            switch (Number(cmdArg)) {
                case 0:
                    Game.setGameMode(Native.GameMode.SURVIVAL);
                    break;
                case 1:
                    Game.setGameMode(Native.GameMode.CREATIVE);
                    break;
                case 2:
                    Game.setGameMode(Native.GameMode.ADVENTURE);
                    break;
                case 3:
                    Game.setGameMode(Native.GameMode.SPECTATOR);
                    break;
                default:
                    Game.setGameMode(Native.GameMode.SURVIVAL);
                    break;
            }
            break;
        case "/rainstyle":
            var num = Number(cmdArg);
            Matrix.rainStyles.current = num < Matrix.rainStyles.styles.length - 1 ? num : 0;
            break;
        case '/rainmultiplier':
            var num = Number(cmdArg);
            Matrix.rainStyles.multiplier = num;
            break;
        case "/speed":
            Player.setAbility(Native.PlayerAbility.WALKSPEED, 2.5);
            Player.setAbility(Native.PlayerAbility.FLYSPEED, 2.5);
            break;
        case "/slow":
            Player.setAbility(Native.PlayerAbility.WALKSPEED, 0.001);
            Player.setAbility(Native.PlayerAbility.FLYSPEED, 0.001);
            break;
        case "/normalspeed":
            Player.setAbility(Native.PlayerAbility.WALKSPEED, 0.05);
            Player.setAbility(Native.PlayerAbility.FLYSPEED, 0.1);
            break;
        case "/transfer":
            var dim = Player.getDimension();
            if (dim != 0 && dim != 1 && dim != -1)
                PlayerTransfer(Number(cmdArg) || 0);
            break;
        case "/help":
            Game.message("Matrix Commands: noclip, nightvision, fly, gm, speed, slow, normalspeed");
            break;
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    if (block.id == BlockID.matrix_tel) {
        var client = Network.getClientForPlayer(player);
        var clientPlayer = client.getPlayerUid();
        PlayerTransfer(0, clientPlayer);
    }
});
TileEntity.registerPrototype(BlockID.matrix_dish, {
    useNetworkItemContainer: true,
    client: {
        updateItem: function () {
            var id = Network.serverToLocalId(this.networkData.getInt("itemId"));
            var data = this.networkData.getInt("itemData");
            this.itemAnim.load();
            this.itemAnim.describeItem({
                id: id, count: 1, data: data, notRandomize: true, rotation: [Math.PI / 2, 0, 0], size: 0.5
            });
            this.itemAnim.refresh();
            this.itemAnim.updateRender();
        },
        load: function () {
            this.itemAnim = new Animation.Item(this.x + 0.5, this.y + 2 / 16, this.z + 0.5);
            var _this = this;
            this.networkData.addOnDataChangedListener(function (data, isExternal) {
                _this.updateItem();
            });
        },
        unload: function () {
            this.itemAnim.destroy();
        }
    },
    click: function (id, count, data, coords, player) {
        var con = this.container;
        var item = con.getSlot("itemSlot");
        var client = Network.getClientForPlayer(player);
        var clientPlayer = client.getPlayerUid();
        var bs = BlockSource.getDefaultForActor(clientPlayer);
        // alert('1:  ' + item.id + ' ' + item.count + ' ' + item.data)
        // alert('1:  ' + id + ' ' + count + ' ' + data)
        if (item.id == 0 && item.count == 0 && id !== 0 && count != 0) {
            count = 1;
            var carr = Entity.getCarriedItem(clientPlayer);
            Entity.setCarriedItem(clientPlayer, carr.id, carr.count - 1, carr.data);
        }
        else {
            id = 0, count = 0, data = 0;
            bs.spawnDroppedItem(coords.x + 0.5, coords.y + 0.2, coords.z + 0.5, item.id, item.count, item.data);
        }
        con.setSlot("itemSlot", id, count, data);
        con.validateSlot("itemSlot");
        // alert('2:  ' + item.id + ' ' + item.count + ' ' + item.data)
        // alert('2:  ' + id + ' ' + count + ' ' + data)
        con.sendChanges();
        this.networkData.putInt("itemId", id);
        this.networkData.putInt("itemData", data);
        this.networkData.sendChanges();
        return true;
    }
});
Saver.addSavesScope("MatrixData", function read(scope) {
    Matrix.data = scope.data || {
        ticks: 0,
        time: 0,
        first: true,
    };
}, function save() {
    return {
        data: Matrix.data
    };
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimID) {
    if (dimID != 1997)
        return;
    var coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
    // generateMetro()
    //TODO: тут должна быть генерация структур через Structure Api но эта либа не оптимизирована для мультиплеера
    // структуры могу скинуть в личку картой
});
