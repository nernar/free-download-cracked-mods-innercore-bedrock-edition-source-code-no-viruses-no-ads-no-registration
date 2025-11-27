var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var XpUtil = /** @class */ (function () {
    function XpUtil() {
    }
    XpUtil.getXp4Lv = function (lv) {
        if (lv < 17) {
            return lv * lv + 6 * lv;
        }
        if (lv < 32) {
            return (2.5 * lv * lv - 40.5 * lv + 360) | 0;
        }
        return (4.5 * lv * lv - 162.5 * lv + 2220) | 0;
    };
    XpUtil.getLv4Xp = function (xp) {
        var lv = 0;
        while (this.getXp4Lv(lv) <= xp) {
            lv++;
        }
        ;
        return lv - 1;
    };
    XpUtil.setPlayerXp = function (player, xp) {
        var lv = this.getLv4Xp(xp);
        var cap = xp - this.getXp4Lv(lv);
        player.setLevel(lv);
        player.setExperience(cap);
    };
    XpUtil.dropOrb = function (x, y, z, value, blockSource) {
        var size;
        while (value > 0) {
            size = this.orbs.find(function (v) { return v <= value; });
            value -= size;
            blockSource.spawnExpOrbs(x, y, z, size);
        }
        /*
        let orb: number;
        let tag: NBT.CompoundTag;
        let size: number;
        while(value > 0){
            orb = Entity.spawn(x, y, z, Native.EntityType.EXPERIENCE_ORB);
            tag = Entity.getCompoundTag(orb);
            size = this.orbs.find(v => v <= value);
            value -= size;
            tag.putInt("experience value", size);
            Entity.setCompoundTag(orb, tag);
        }
        */
    };
    XpUtil.orbs = [2477, 1237, 617, 307, 149, 73, 37, 17, 7, 3, 1];
    return XpUtil;
}());
IDRegistry.genItemID("experience_rod");
Item.createItem("experience_rod", "Experience Rod", { name: "experience_rod" }, { stack: 1 });
Item.setToolRender(ItemID.experience_rod, true);
Recipes.addShaped({ id: ItemID.experience_rod }, ["_ab", "cdc", "ba_"], [
    "a", VanillaItemID.redstone, -1,
    "b", VanillaItemID.gold_ingot, -1,
    "c", VanillaItemID.glowstone_dust, -1,
    "d", VanillaItemID.diamond, -1
]);
IDRegistry.genBlockID("experience_obelisk");
Block.createBlock("experience_obelisk", [{ name: "Experience Obelisk", texture: [["experience_obelisk", 0]], inCreative: true }]);
Block.setShape(BlockID.experience_obelisk, 1 / 16, 0, 1 / 16, 15 / 16, 0.5, 15 / 16);
Block.setDestroyTime(BlockID.experience_obelisk, 5);
ToolAPI.registerBlockMaterial(BlockID.experience_obelisk, "stone");
Recipes.addShaped({ id: BlockID.experience_obelisk }, ["_a_", "bcb", "ded"], [
    "a", ItemID.experience_rod, -1,
    "b", VanillaItemID.gold_ingot, -1,
    "c", VanillaBlockID.cauldron, -1,
    "d", VanillaItemID.diamond, -1,
    "e", VanillaBlockID.iron_block, -1
]);
(function () {
    var mesh = new RenderMesh();
    var model = new BlockRenderer.Model(mesh);
    var render = new ICRender.Model();
    mesh.importFromFile(__dir__ + "res/terrain-atlas/experience_obelisk.obj", "obj", null);
    mesh.setBlockTexture("experience_obelisk", 0);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.experience_obelisk, -1, render);
    ItemModel.getFor(BlockID.experience_obelisk, -1).setModel(render);
})();
var windowObelisk = (function () {
    var Color = android.graphics.Color;
    var globalWidth = 500;
    var globalHeight = 300;
    var height = globalHeight / globalWidth * 1000;
    var button = { type: "button", bitmap: "xp_obelisk.button_up", bitmap2: "xp_obelisk.button_down", scale: 100 / 32 };
    var icon = { type: "image", z: 1, scale: 75 / 32 };
    var window = new UI.Window({
        location: { x: (1000 - globalWidth) / 2, y: (UI.getScreenHeight() - globalHeight) / 2, width: globalWidth, height: globalHeight },
        drawing: [
            { type: "background", color: Color.TRANSPARENT },
            { type: "frame", x: 0, y: 0, width: 1000, height: height, bitmap: "classic_frame_bg_light", scale: 4 },
            { type: "bitmap", x: 136, y: height / 2 - 10 + 20, bitmap: "xp_obelisk.scale_back", scale: 4 } //182x5
        ],
        elements: {
            close: { type: "closeButton", x: 928, y: 12, bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 4 },
            scaleXp: { type: "scale", x: 136, y: height / 2 - 10 + 20, bitmap: "xp_obelisk.scale", scale: 4 },
            textLv: { type: "text", x: 500, y: height / 2 - 90 + 20, font: { size: 40, color: Color.GREEN, shadow: 0.5, align: UI.Font.ALIGN_CENTER }, text: "0" },
            buttonP: __assign(__assign({}, button), { x: 330, y: 100, clicker: { onClick: function (pos, container) { return container.sendEvent("doDrainXp", { player: Player.get() - 0, lv: 1 }); } } }),
            buttonPP: __assign(__assign({}, button), { x: 450, y: 100, clicker: { onClick: function (pos, container) { return container.sendEvent("doDrainXp", { player: Player.get() - 0, lv: 10 }); } } }),
            buttonPPP: __assign(__assign({}, button), { x: 570, y: 100, clicker: { onClick: function (pos, container) { return container.sendEvent("doDrainXp", { player: Player.get() - 0, lv: 5000 }); } } }),
            buttonM: __assign(__assign({}, button), { x: 330, y: height - 200, clicker: { onClick: function (pos, container) { return container.sendEvent("doAddXp", { player: Player.get() - 0, lv: 1 }); } } }),
            buttonMM: __assign(__assign({}, button), { x: 450, y: height - 200, clicker: { onClick: function (pos, container) { return container.sendEvent("doAddXp", { player: Player.get() - 0, lv: 10 }); } } }),
            buttonMMM: __assign(__assign({}, button), { x: 570, y: height - 200, clicker: { onClick: function (pos, container) { return container.sendEvent("doAddXp", { player: Player.get() - 0, lv: 5000 }); } } }),
            iconP: __assign(__assign({}, icon), { x: 330 + 12.5, y: 100 + 12.5, bitmap: "xp_obelisk.plus_single" }),
            iconPP: __assign(__assign({}, icon), { x: 450 + 12.5, y: 100 + 12.5, bitmap: "xp_obelisk.plus_double" }),
            iconPPP: __assign(__assign({}, icon), { x: 570 + 12.5, y: 100 + 12.5, bitmap: "xp_obelisk.plus_triple" }),
            iconM: __assign(__assign({}, icon), { x: 330 + 12.5, y: height - 200 + 12.5, bitmap: "xp_obelisk.minus_single" }),
            iconMM: __assign(__assign({}, icon), { x: 450 + 12.5, y: height - 200 + 12.5, bitmap: "xp_obelisk.minus_double" }),
            iconMMM: __assign(__assign({}, icon), { x: 570 + 12.5, y: height - 200 + 12.5, bitmap: "xp_obelisk.minus_triple" })
        }
    });
    window.setEventListener({
        onOpen: function (win) {
            var container = win.getContainer();
            var tile = container.getParent();
            tile.sendEvent("refreshUi", {});
        }
    });
    window.setBlockingBackground(true);
    return window;
})();
var ExperienceObeliskClient = /** @class */ (function () {
    function ExperienceObeliskClient() {
        this.containerEvents = {
            updateUi: function (container, window, content, data) {
                var lv = XpUtil.getLv4Xp(data.xp);
                var xp = XpUtil.getXp4Lv(lv);
                container.setText("textLv", lv === 0 ? "" : lv + "");
                container.setScale("scaleXp", (data.xp - xp) / (XpUtil.getXp4Lv(lv + 1) - xp));
            }
        };
    }
    ExperienceObeliskClient.prototype.load = function () {
        this.anim = new Animation.Item(this.x + 0.5, this.y + 1, this.z + 0.5);
        this.anim.setSkylightMode();
        this.anim.describeItem({ id: Network.serverToLocalId(ItemID.experience_rod), count: 1, data: 0 });
        this.anim.loadCustom(function () {
            var transform = this.transform();
            transform && transform.rotate(0, Math.PI / 60, 0);
        });
    };
    ExperienceObeliskClient.prototype.unload = function () {
        this.anim && this.anim.destroy();
    };
    return ExperienceObeliskClient;
}());
var ExperienceObelisk = /** @class */ (function () {
    function ExperienceObelisk() {
        this.containerEvents = {
            doDrainXp: function (data, client) {
                var player = new PlayerActor(data.player);
                var playerLv = player.getLevel();
                var playerXp = player.getExperience();
                var xp = data.lv <= playerLv ? playerXp - XpUtil.getXp4Lv(playerLv - data.lv) : playerXp;
                XpUtil.setPlayerXp(player, playerXp - xp);
                this.data.xp += xp;
                this.container.sendEvent("updateUi", { xp: this.data.xp });
            },
            doAddXp: function (data, client) {
                var player = new PlayerActor(data.player);
                var playerLv = Player.getLevel();
                var playerXp = Player.getExperience();
                var xp = Math.min(this.data.xp, XpUtil.getXp4Lv(playerLv + data.lv) - playerXp);
                XpUtil.setPlayerXp(player, playerXp + xp);
                this.data.xp -= xp;
                this.container.sendEvent("updateUi", { xp: this.data.xp });
            },
            refreshUi: function (data, client) {
                this.container.sendEvent("updateUi", { xp: this.data.xp });
            }
        };
        this.useNetworkItemContainer = true;
        this.client = new ExperienceObeliskClient();
        this.defaultValues = { xp: 0 };
    }
    ExperienceObelisk.prototype.getScreenName = function (player, coords) {
        return "main";
    };
    ExperienceObelisk.prototype.getScreenByName = function (name) {
        return name === "main" ? windowObelisk : null;
    };
    ExperienceObelisk.prototype.destroy = function () {
        XpUtil.dropOrb(this.x + 0.5, this.y + 0.5, this.z + 0.5, this.data.xp, this.blockSource);
    };
    return ExperienceObelisk;
}());
TileEntity.registerPrototype(BlockID.experience_obelisk, new ExperienceObelisk());
