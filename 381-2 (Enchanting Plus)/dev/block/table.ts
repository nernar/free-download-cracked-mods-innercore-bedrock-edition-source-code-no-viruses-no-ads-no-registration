IDRegistry.genBlockID("eplus_table");
Block.createBlock("eplus_table", [{name: "Advanced Enchantment Table", texture: [["eplus_table", 0], ["eplus_table", 1], ["eplus_table", 2]], inCreative: true}]);
Block.setShape(BlockID.eplus_table, 0, 0, 0, 1, 0.75, 1);
Block.setDestroyTime(BlockID.eplus_table, 5);
ToolAPI.registerBlockMaterial(BlockID.eplus_table, "stone");
Recipes2.addShaped(BlockID.eplus_table, "aba:cdc:aea", {a: VanillaItemID.gold_ingot, b: VanillaItemID.writable_book, c: VanillaBlockID.obsidian, d: VanillaBlockID.enchanting_table, e: VanillaItemID.ender_eye});


Block.setAnimateTickCallback(BlockID.eplus_table, (posX, posY, posZ) => {
    let x: number;
    let y: number;
    let z: number;
    let block: number;
    for(x = -2; x <= 2; x++){
        for(z = -2; z <= 2; z++){
            if(x > -2 && x < 2 && z === -1){
                z = 2;
            }
            if((Math.random() * 16 | 0) === 0 && World.getBlockID(posX + x / 2, posY, posZ + z / 2) === 0){
                for(y = 0; y <= 1; y++){
                    block = World.getBlockID(posX + x, posY + y, posZ + z);
                    if(block === VanillaBlockID.bookshelf || block === BlockID.eplus_decoration){
                        Particles.addParticle(ParticleID.enchantmenttable, posX + 0.5, posY + 2, posZ + 0.5, x + Math.random() - 0.5, y - Math.random() - 1, z + Math.random() - 0.5);
                    }
                }
            }
        }
    }
});


let scrollX: number;
let scrollY: number;
let scrollH: number;

const TestObj = {
    key: 0
};

const windowTable = (() => {

    const scale = 3;
    const enchLabelX = 450;
    const enchLabelY = 50;
    const enchLabelW = 144 * scale;
    const enchLabelH = enchLabelW / 2;

    scrollX = enchLabelX + scale * 3;
    scrollY = enchLabelY + scale;
    scrollH = 18 * scale;

    const template = {
        slot: {type: "slot", x: enchLabelX - 16 * scale - 20, size: 16 * scale},
        button: {type: "button", bitmap: "classic_button_up", bitmap2: "classic_button_down", scale: scale},
        image: {type: "image", x: enchLabelX + enchLabelW + 20, z: 1, scale: scale},
        line: {type: "line", x1: enchLabelX + scale, x2: enchLabelX + enchLabelW - scale, color: Color.parseColor("#616161"), width: 2 * scale},
        scale: {type: "scale", x: enchLabelX + scale, bitmap: "eplus.bg_available", width: enchLabelW - scale * 2, height: 16 * scale},
        text: {type: "text", x: enchLabelX + 8 * scale, z: 1, font: {size: 8 * scale, color: Color.parseColor("#55aaff00")}},
        scroll: {
            type: "scroll",
            x: scrollX, y: 1000, z: 2,
            bitmapHandle: "eplus.handle", bitmapHandleHover: "eplus.handle_hover",
            bitmapBg: "_default_slot_empty", bitmapBgHover: "_default_slot_empty",
            width: 16 * scale,
            length: (enchLabelW - scale * 2) - (16 * scale) * 5 / 16,//5: width of handle image, 16: height
            min: 0,
            isInt: true
        }
    };

    const elements: UI.UIElementSet = {
        slot: {...template.slot, y: enchLabelY},
        icon: {...template.slot, y: enchLabelY + scrollH, z: 1, visual: true, bitmap: "_default_slot_empty", source: {id: 0, count: 0, data: 0}},
        buttonEnchant: {...template.button, x: enchLabelX - 16 * scale - 20, y: enchLabelY + scrollH, clicker: {
            onClick: (container, tile) => {
                tile.enchantItem();
            }
        }},
        buttonUp: {...template.button, x: enchLabelX + enchLabelW + 20, y: enchLabelY + scale, clicker: {
            onClick: (container, tile) => {
                tile.data.page = Math.max(0, tile.data.page - 1);
            },
            onLongClick: (container, tile) => {
                tile.data.page = 0;
            }
        }},
        buttonDown: {...template.button, x: enchLabelX + enchLabelW + 20, y: enchLabelY + enchLabelH - 16 * scale - scale, clicker: {
            onClick: (container, tile) => {
                const max: number = tile.getMaxPage();
                tile.data.page = Math.min(max, tile.data.page + 1);
            },
            onLongClick: (container, tile) => {
                const max: number = tile.getMaxPage();
                tile.data.page = max;
            }
        }},
        iconUp: {...template.image, y: enchLabelY, bitmap: "eplus.triangle_up"},
        iconDown: {...template.image, y: enchLabelY + enchLabelH - 16 * scale, bitmap: "eplus.triangle_down"},
        scale0: {...template.scale, y: enchLabelY + scale + scrollH * 0},
        scale1: {...template.scale, y: enchLabelY + scale + scrollH * 1},
        scale2: {...template.scale, y: enchLabelY + scale + scrollH * 2},
        scale3: {...template.scale, y: enchLabelY + scale + scrollH * 3},
        text0: {...template.text, y: enchLabelY + scale + scrollH * 0 + 3 * scale},
        text1: {...template.text, y: enchLabelY + scale + scrollH * 1 + 3 * scale},
        text2: {...template.text, y: enchLabelY + scale + scrollH * 2 + 3 * scale},
        text3: {...template.text, y: enchLabelY + scale + scrollH * 3 + 3 * scale},
        textInfo: {type: "text", x: enchLabelX, y: enchLabelY + enchLabelH + 10, font: {color: Color.BLACK, size: scale * 8}, multiline: true},
        textTips: {type: "text", x: enchLabelX, y: enchLabelY + enchLabelH + 100, font: {color: Color.GRAY, size: scale * 6}, multiline: true}
    };

    Enchantment.list.forEach(enchant => {
        const key = "scroll" + enchant.id;
        const max = enchant.getMaxLevel();
        elements[key] = {
            ...template.scroll,
            max: max,
            onNewValue: (value, container, elem) => {
                elem.setBinding("lv", value);
            },
            onTouchEvent: (elem, event) => {
                try{
                    const tile = elem.window.getContainer().getParent();
                    const oldEnch = tile.getInitialEnchants();
                    const newEnch = tile.getNewEnchants();
                    event.localX = enchant.isImcompatibleWith(newEnch) ? 0 : Math.max(enchant.isCurse ? 0 : (oldEnch[enchant.id] || 0), Math.round(event.localX * max)) / max;
                }
                catch(e){
                    alert("[TouchEvent]\n" + e);
                }
            }
        };
    });

    const window = new UI.StandartWindow({
        standard: {
            header: {text: {text: "Advanced Enchantment Table"}},
            inventory: {standard: true},
            background: {standard: true}
        },
        drawing: [
            {type: "frame", x: enchLabelX, y: enchLabelY, width: enchLabelW, height: enchLabelH, bitmap: "classic_slot", scale: scale},
            {...template.line, y1: enchLabelY + scale + 17 * scale, y2: enchLabelY + scale + 17 * scale},
            {...template.line, y1: enchLabelY + scale + 35 * scale, y2: enchLabelY + scale + 35 * scale},
            {...template.line, y1: enchLabelY + scale + 53 * scale, y2: enchLabelY + scale + 53 * scale}
        ],
        elements: elements
    });

    const addLineBreaks = (text: string): string => {
        const array: string[] = [];
        const words = text.split(" ");
        let i = 0;
        let line: string[];
        let count: number;
        while(i < words.length){
            line = [];
            count = 0;
            while(i < words.length && count + words[i].length <= 35){
                line.push(words[i]);
                count += words[i].length;
                i++;
            }
            array.push(line.join(" "));
        }
        return array.join("\n");
    }

    const tips = [
        "You can place bookshelves around to reduce the cost of enchantments.",
        "Treasure enchantments require a floor of prescious materials.",
        "Curses can only be modified near midnight on nights with a full moon.",
        "The advanced table will store it's inventory like a chest."
    ].map(text => addLineBreaks(text));

    window.getWindow("main").setEventListener({
        onOpen: win => {
            const container = win.getContainer();
            const tile = container.getParent();
            container.setBinding("icon", "source", {id: tile.data.activeCurse ? VanillaItemID.bone : VanillaItemID.enchanted_book, count: 1, data: 0});
            container.setBinding("textTips", "text", tips[Math.random() * tips.length | 0]);
        }
    });

    return window;

})();


class AdvTable extends FloatingBook {

    readonly defaultValues = {
        skin: "eplus_book_advanced",
        page: 0,
        activeCurse: false,
        activeTreasure: false
    };

    getGuiScreen(): UI.StandardWindow {
        return windowTable;
    }

    getAvailableList(): Enchantment[] {
        const slot = this.container.getSlot("slot");
        return EnchantmentItem.getAvailableList(slot.id, this.data.activeCurse, this.data.activeTreasure);
    }

    getMaxPage(): number {
        return Math.max(0, this.getAvailableList().length - 4);
    }

    getInitialEnchants(): EnchantSet {
        const slot = this.container.getSlot("slot");
        if(slot.extra && slot.extra.isEnchanted()){
            return slot.extra.getEnchants();
        }
        return {};
    }

    getNewEnchants(): EnchantSet {
        const list = this.getAvailableList();
        const obj = {};
        Enchantment.list.forEach(enchant => {
            const lv = this.container.getBinding("scroll" + enchant.id, "lv") | 0;
            if(lv > 0 && list.some(e => e.id === enchant.id)){
                obj[enchant.id] = lv;
            }
        });
        return obj;
    }

    calcCost(): number {
        const oldEnch = this.getInitialEnchants();
        const newEnch = this.getNewEnchants();
        let cost = Enchantment.list.reduce((val, enchant) => val + EnchLogic.calculateNewEnchCost(enchant, Math.abs((newEnch[enchant.id] || 0) - (oldEnch[enchant.id] || 0))), 0);
        cost *= (100 - EnchLogic.getEnchantingPower(this.x, this.y, this.z)) / 100;
        return cost | 0;
    }

    tick(): void {

        if((World.getThreadTime() & 63) === 0){
            this.data.activeCurse = EnchLogic.canAddCurse();
            this.data.activeTreasure = EnchLogic.canAddTreasure(this.x, this.y, this.z);
        }

        if(this.data.activeCurse){
            spawnParticleRing(ParticleID.portal, this.x + 0.5, this.y + 1, this.z + 0.5, 0, -1, 0, 0.45);
        }
        else if(this.data.activeTreasure && Math.random() < 0.5){
            spawnParticleRing(ParticleID.redstone, this.x + 0.5, this.y + 1, this.z + 0.5, World.getThreadTime() & 1 ? 0 : -1, 1, 0, 0.45);
        }

        if(this.container.isOpened()){

            const list = this.getAvailableList();
            const oldEnch = this.getInitialEnchants();
            const newEnch = this.getNewEnchants();

            if(list.length === 0){
                this.data.page = 0;
            }

            const visible = list.slice(this.data.page, this.data.page + 4);

            Enchantment.list.forEach(enchant => {
                const index = visible.findIndex(e => e.id === enchant.id);
                const elem = this.container.getElement("scroll" + enchant.id);
                if(elem){
                    elem.setPosition(scrollX, index === -1 ? 1000 : scrollY + scrollH * index);
                    elem.isTouched || elem.setBinding("raw-value", java.lang.Float.valueOf(Math.max(enchant.isCurse ? 0 : (oldEnch[enchant.id] || 0), newEnch[enchant.id] || 0) / enchant.getMaxLevel()));
                }
            });

            for(let i = 0; i < 4; i++){
                if(visible[i]){
                    this.container.setBinding("scale" + i, "texture", visible[i].isImcompatibleWith(newEnch) ? "eplus.bg_lock" : "eplus.bg_available");
                    this.container.setBinding("scale" + i, "value", 1);
                    this.container.setText("text" + i, visible[i].getName(this.container.getBinding("scroll" + visible[i].id, "lv") | 0));
                }
                else{
                    this.container.setBinding("scale" + i, "value", 0);
                    this.container.setText("text" + i, "");
                }
            }

            this.container.setText("textInfo", list.length === 0 ?
                "Place an item in to see\navailable enchantments." :
                "EXP: " + Player.getExperience() + "\nCost: " + this.calcCost() + "\nDiscount: " + EnchLogic.getEnchantingPower(this.x, this.y, this.z) + "%"
            );

        }

    }

    enchantItem(): void {
        const slot = this.container.getSlot("slot");
        if(slot.id){
            const cost = this.calcCost();
            if(Player.getExperience() >= cost){
                const newEnch = this.getNewEnchants();
                if(slot.extra){
                    slot.extra.removeAllEnchants();
                }
                else{
                    slot.extra = new ItemExtraData();
                }
                for(let id in newEnch){
                    slot.extra.addEnchant(parseInt(id), newEnch[id]);
                }
                EnchLogic.removeExperience(cost);
            }
            else{
                alert("You need more EXP to do this enchantment.");
            }
        }
    }

}


TileEntity.registerPrototype(BlockID.eplus_table, new AdvTable());