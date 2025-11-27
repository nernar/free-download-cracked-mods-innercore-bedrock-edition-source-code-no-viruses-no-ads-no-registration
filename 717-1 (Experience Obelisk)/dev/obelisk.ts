IDRegistry.genBlockID("experience_obelisk");
Block.createBlock("experience_obelisk", [{name: "Experience Obelisk", texture: [["experience_obelisk", 0]], inCreative: true}]);
Block.setShape(BlockID.experience_obelisk, 1/16, 0, 1/16, 15/16, 0.5, 15/16);
Block.setDestroyTime(BlockID.experience_obelisk, 5);
ToolAPI.registerBlockMaterial(BlockID.experience_obelisk, "stone");

Recipes.addShaped({id: BlockID.experience_obelisk}, ["_a_", "bcb", "ded"], [
    "a", ItemID.experience_rod, -1,
    "b", VanillaItemID.gold_ingot, -1,
    "c", VanillaBlockID.cauldron, -1,
    "d", VanillaItemID.diamond, -1,
    "e", VanillaBlockID.iron_block, -1
]);

(() => {
    const mesh = new RenderMesh();
    const model = new BlockRenderer.Model(mesh);
    const render = new ICRender.Model();
    mesh.importFromFile(__dir__ + "res/terrain-atlas/experience_obelisk.obj", "obj", null);
    mesh.setBlockTexture("experience_obelisk", 0);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.experience_obelisk, -1, render);
    ItemModel.getFor(BlockID.experience_obelisk, -1).setModel(render);
})();


const windowObelisk = (() => {

    const Color = android.graphics.Color;

    const globalWidth = 500;
    const globalHeight = 300;
    const height = globalHeight / globalWidth * 1000;

    const button = {type: "button", bitmap: "xp_obelisk.button_up", bitmap2: "xp_obelisk.button_down", scale: 100 / 32};
    const icon = {type: "image", z: 1, scale: 75 / 32};

    const window = new UI.Window({
        location: {x: (1000 - globalWidth) / 2, y: (UI.getScreenHeight() - globalHeight) / 2, width: globalWidth, height: globalHeight},
        drawing: [
            {type: "background", color: Color.TRANSPARENT},
            {type: "frame", x: 0, y: 0, width: 1000, height: height, bitmap: "classic_frame_bg_light", scale: 4},
            {type: "bitmap", x: 136, y: height / 2 - 10 + 20, bitmap: "xp_obelisk.scale_back", scale: 4}//182x5
        ],
        elements: {
            close: {type: "closeButton", x: 928, y: 12, bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 4},
            scaleXp: {type: "scale", x: 136, y: height / 2 - 10 + 20, bitmap: "xp_obelisk.scale", scale: 4},
            textLv: {type: "text", x: 500, y: height / 2 - 90 + 20, font: {size: 40, color: Color.GREEN, shadow: 0.5, align: UI.Font.ALIGN_CENTER}, text: "0"},
            buttonP: {...button, x: 330, y: 100, clicker: {onClick: (pos, container) => container.sendEvent("doDrainXp", {player: Player.get() - 0, lv: 1})}},
            buttonPP: {...button, x: 450, y: 100, clicker: {onClick: (pos, container) => container.sendEvent("doDrainXp", {player: Player.get() - 0, lv: 10})}},
            buttonPPP: {...button, x: 570, y: 100, clicker: {onClick: (pos, container) => container.sendEvent("doDrainXp", {player: Player.get() - 0, lv: 5000})}},
            buttonM: {...button, x: 330, y: height - 200, clicker: {onClick: (pos, container) => container.sendEvent("doAddXp", {player: Player.get() - 0, lv: 1})}},
            buttonMM: {...button, x: 450, y: height - 200, clicker: {onClick: (pos, container) => container.sendEvent("doAddXp", {player: Player.get() - 0, lv: 10})}},
            buttonMMM: {...button, x: 570, y: height - 200, clicker: {onClick: (pos, container) => container.sendEvent("doAddXp", {player: Player.get() - 0, lv: 5000})}},
            iconP: {...icon, x: 330 + 12.5, y: 100 + 12.5, bitmap: "xp_obelisk.plus_single"},
            iconPP: {...icon, x: 450 + 12.5, y: 100 + 12.5, bitmap: "xp_obelisk.plus_double"},
            iconPPP: {...icon, x: 570 + 12.5, y: 100 + 12.5, bitmap: "xp_obelisk.plus_triple"},
            iconM: {...icon, x: 330 + 12.5, y: height - 200 + 12.5, bitmap: "xp_obelisk.minus_single"},
            iconMM: {...icon, x: 450 + 12.5, y: height - 200 + 12.5, bitmap: "xp_obelisk.minus_double"},
            iconMMM: {...icon, x: 570 + 12.5, y: height - 200 + 12.5, bitmap: "xp_obelisk.minus_triple"}
        }
    });

    window.setEventListener({
        onOpen: win => {
            const container = win.getContainer();
            const tile = container.getParent();
            tile.sendEvent("refreshUi", {});
        }
    });

    window.setBlockingBackground(true);

    return window;

})();


class ExperienceObeliskClient {

    x: number;
    y: number;
    z: number;
    anim: Animation.Item;

    load(): void {
        this.anim = new Animation.Item(this.x + 0.5, this.y + 1, this.z + 0.5);
        this.anim.setSkylightMode();
        this.anim.describeItem({id: Network.serverToLocalId(ItemID.experience_rod), count: 1, data: 0});
        this.anim.loadCustom(function(){
            const transform = this.transform();
            transform && transform.rotate(0, Math.PI / 60, 0);
        });
    }

    unload(): void {
        this.anim && this.anim.destroy();
    }

    containerEvents = {

        updateUi: function(container: ItemContainer, window: UI.Window, content: UI.WindowContent, data: {xp: number}){
            const lv = XpUtil.getLv4Xp(data.xp);
            const xp = XpUtil.getXp4Lv(lv);
            container.setText("textLv", lv === 0 ? "" : lv + "");
            container.setScale("scaleXp", (data.xp - xp) / (XpUtil.getXp4Lv(lv + 1) - xp));
        }

    };

}


class ExperienceObelisk {

    x: number;
    y: number;
    z: number;
    useNetworkItemContainer: boolean;
    client: ExperienceObeliskClient;
    defaultValues: {xp: number};
    data: {xp: number};
    container: ItemContainer;
    blockSource: BlockSource;

    constructor(){
        this.useNetworkItemContainer = true;
        this.client = new ExperienceObeliskClient();
        this.defaultValues = {xp: 0};
    }

    getScreenName(player: number, coords: Vector): string {
        return "main";
    }

    getScreenByName(name: string): UI.Window {
        return name === "main" ? windowObelisk : null;
    }

    destroy(): void {
        XpUtil.dropOrb(this.x + 0.5, this.y + 0.5, this.z + 0.5, this.data.xp, this.blockSource);
    }

    containerEvents = {

        doDrainXp: function(data: {player: number, lv: number}, client: Network.Client){
            const player = new PlayerActor(data.player);
            const playerLv = player.getLevel();
            const playerXp = player.getExperience();
            const xp = data.lv <= playerLv ? playerXp - XpUtil.getXp4Lv(playerLv - data.lv) : playerXp;
            XpUtil.setPlayerXp(player, playerXp - xp);
            this.data.xp += xp;
            this.container.sendEvent("updateUi", {xp: this.data.xp});
        },

        doAddXp: function(data: {player: number, lv: number}, client: Network.Client){
            const player = new PlayerActor(data.player);
            const playerLv = Player.getLevel();
            const playerXp = Player.getExperience();
            const xp = Math.min(this.data.xp, XpUtil.getXp4Lv(playerLv + data.lv) - playerXp);
            XpUtil.setPlayerXp(player, playerXp + xp);
            this.data.xp -= xp;
            this.container.sendEvent("updateUi", {xp: this.data.xp});
        },

        refreshUi: function(data: any, client: Network.Client){
            this.container.sendEvent("updateUi", {xp: this.data.xp});
        }

    };

}


TileEntity.registerPrototype(BlockID.experience_obelisk, new ExperienceObelisk());