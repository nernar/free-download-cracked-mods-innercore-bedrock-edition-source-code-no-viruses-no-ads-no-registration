IDRegistry.genBlockID("book_enchanter");
Block.createBlock("book_enchanter", [{name: "Book Enchanter", texture: [["book_enchanter", 0], ["book_enchanter", 1], ["book_enchanter", 2]], inCreative: true}]);
Block.setShape(BlockID.book_enchanter, 0, 0, 0, 1, 0.75, 1);
Block.setDestroyTime(BlockID.book_enchanter, 5);
ToolAPI.registerBlockMaterial(BlockID.book_enchanter, "stone");
Recipes.addShaped({id: BlockID.book_enchanter}, ["_a_", "bcb", "ddd"], [
    "a", VanillaItemID.book, -1,
    "b", VanillaItemID.diamond, -1,
    "c", VanillaBlockID.enchanting_table, -1,
    "d", VanillaBlockID.obsidian, -1
]);


const windowEnchanter = (() => {

    const width = 600;
    const height = 450;
    const size = 100;
    const scale = size / 16;
    const itemScale = scale * 0.75;
    const itemPadding = (size - size * 0.75) / 2;

    const window = new UI.Window({
        location: {x: (1000 - width) / 2, y: 20, width: width, height: height},
        drawing: [
            {type: "background", color: Color.TRANSPARENT},
            {type: "frame", x: 0, y: 0, width: 1000, height: 1000 * height / width, bitmap: "classic_frame_bg_light", scale: scale},
            {type: "text", x: 500, y: 40, text: "Book Enchanter", font: {color: Color.DKGRAY, size: 40, align: UI.Font.ALIGN_CENTER}},
            {type: "bitmap", x: 200, y: 70, width: size, height: size, bitmap: "classic_slot"},
            {type: "bitmap", x: 450, y: 70, width: size, height: size, bitmap: "classic_slot"},
            {type: "bitmap", x: 700, y: 70, width: size, height: size, bitmap: "classic_slot"},
            {type: "bitmap", x: 450 + itemPadding, y: 70 + itemPadding, bitmap: "icon_grayscale_lapis", scale: itemScale},
            {type: "bitmap", x: 700 + itemPadding, y: 70 + itemPadding, bitmap: "icon_grayscale_book", scale: itemScale},
            {type: "bitmap", x: 325 + 1.5 * scale, y: 70 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale},
            {type: "bitmap", x: 575 + 1.5 * scale, y: 70 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale},
        ],
        elements: (() => {

            const slot = {type: "slot", bitmap: "_default_slot_empty", size: size};

            const elements: UI.UIElementSet = {
                slotSource: {...slot, x: 200, y: 70, isValid: (id, count, data) => RecipeManager.isExist(id, data)},
                slotLapis: {...slot, x: 450, y: 70, isValid: (id, count, data) => id === VanillaItemID.dye && data === 4},
                slotBook: {...slot, x: 700, y: 70, isValid: id => id === VanillaItemID.book},
                slotIcon: {...slot, x: 450, y: 190, z: 1, visual: true, source: {id: VanillaItemID.enchanted_book, count: 1, data: 0}},
                buttonCraft: {type: "button", x: 450, y: 190, bitmap: "classic_button_up", bitmap2: "classic_button_down", scale: scale, clicker: {
                    onClick: container => {

                        container.setText("textLv", "");

                        const slotSource = container.getSlot("slotSource");
                        const slotLapis = container.getSlot("slotLapis");
                        const slotBook = container.getSlot("slotBook");
                        const enchant = RecipeManager.getResult(slotSource.id, slotSource.data);

                        if(!enchant || slotLapis.id !== VanillaItemID.dye || slotLapis.data !== 4 || slotLapis.count < 8 || slotBook.id !== VanillaItemID.book){
                            return;
                        }

                        const lv = Math.min(enchant.max, slotSource.count, slotLapis.count / 8 | 0);

                        if(Player.getLevel() < lv * 10){
                            container.setText("textLv", `Required Lv: ${lv * 10}`);
                            return;
                        }

                        slotSource.count -= lv;
                        slotLapis.count -= lv * 8;
                        slotBook.count--;
                        container.validateAll();
                        Player.addLevel(-lv * 10);

                        const extra = new ItemExtraData();
                        extra.addEnchant(enchant.id, lv);

                        for(let i = 0; i < 36; i++){
                            if(Player.getInventorySlot(i).id === 0){
                                Player.setInventorySlot(i, VanillaItemID.enchanted_book, 1, 0, extra);
                                return;
                            }
                        }

                        const pos = Player.getPosition();
                        World.drop(pos.x, pos.y, pos.z, VanillaItemID.enchanted_book, 1, 0, extra);


                    }
                }},
                buttonInfo: {type: "button", x: 820, y: 120, bitmap: "book_enchanter_info", scale: scale / 2, clicker: {
                    onClick: container => {
                        RV ? RV.openRecipePage("book_enchanter", container) : alert("Please install Recipe Viewer");
                    }
                }},
                buttonExit: {type: "closeButton", x: 1000 - (15 * 4 + 3 * scale), y: 3 * scale, bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 4},
                textLv: {type: "text", x: 570, y: 260, font: {size: 30, color: Color.GREEN, shadow: 0.5}}
            };

            for(let i = 0; i < 36; i++){
                elements["inv" + i] = {
                    type: "invSlot",
                    x: 50 + (i % 9) * size,
                    y: i < 9 ? 620 : 200 + (i / 9 | 0) * size,
                    size: size,
                    index: i
                }
            }

            return elements;

        })()
    });

    window.setInventoryNeeded(true);
    window.setBlockingBackground(true);

    window.setEventListener({
        onOpen: win => {
            const container = win.getContainer();
            container.setText("textLv", "");
        }
    })

    return window;

})();


class BookEnchanter implements TileEntity.TileEntityPrototype {

    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly container: UI.Container;
    liquidStorage: LiquidRegistry.Storage;
    anim: BookModel;

    //useNetworkItemContainer = true;

    init(): void {
        this.anim = new BookModel(this.x + 0.5, this.y + 0.75, this.z + 0.5, "model/enchanting_table_book");
        this.anim.spawn();
        delete this.liquidStorage;
    }

    destroy(): void {
        this.anim && this.anim.destroy();
    }

    getGuiScreen(): UI.Window {
        return windowEnchanter;
    }

}


TileEntity.registerPrototype(BlockID.book_enchanter, new BookEnchanter());