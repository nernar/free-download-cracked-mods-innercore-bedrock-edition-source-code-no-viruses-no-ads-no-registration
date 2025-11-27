interface IRecipe {
    input: ItemInstance[],
    output: ItemInstance[],
    enchant: number;
}


class RecipeManager {

    private static readonly recipes: {[id: number]: {id: number, max: number}} = {};

    private static getCodeByItem(id: number, data: number): number {
        return data === -1 ? -id : id | (data << 16);
    }

    private static getItemByCode(code: number): Tile {
        return code < 0 ? {id: -code, data: -1} : {id: code & 65535, data: code >> 16};
    }

    static addRecipe(item: number | Tile, enchant: number, maxLv: number): void {
        this.recipes[typeof item === "number" ? this.getCodeByItem(item, -1) : this.getCodeByItem(item.id, item.data)] = {id: enchant, max: maxLv};
    }

    static isExist(id: number, data: number): boolean {
        return this.getCodeByItem(id, data) in this.recipes || this.getCodeByItem(id, -1) in this.recipes;
    }

    static getResult(id: number, data: number): {id: number, max: number} {
        return this.recipes[this.getCodeByItem(id, data)] || this.recipes[this.getCodeByItem(id, -1)];
    }

    static getAllRecipeForRV(): IRecipe[] {
        const list: IRecipe[] = [];
        let item: Tile;
        for(let code in this.recipes){
            item = this.getItemByCode(parseInt(code));
            list.push({
                input: [{id: item.id, count: 1, data: item.data === -1 ? 0 : item.data}, {id: VanillaItemID.dye, count: 8, data: 4}, {id: VanillaItemID.book, count: 1, data: 0}],
                output: [{id: VanillaItemID.enchanted_book, count: 1, data: 0}],
                enchant: this.recipes[code].id
            });
        }
        return list;
    }

}


ModAPI.registerAPI("SimplyEnchanting", {
    Recipe: RecipeManager
});


RecipeManager.addRecipe(VanillaBlockID.obsidian, EnchID.PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.magma_cream, EnchID.FIRE_PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.feather, EnchID.FEATHER_FALLING, 4);
RecipeManager.addRecipe(VanillaItemID.gunpowder, EnchID.BLAST_PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.arrow, EnchID.PROJECTILE_PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.glass_bottle, EnchID.RESPIRATION, 3);
RecipeManager.addRecipe(VanillaBlockID.waterlily, EnchID.AQUA_AFFINITY, 1);
RecipeManager.addRecipe(VanillaBlockID.cactus, EnchID.THORNS, 3);
RecipeManager.addRecipe(VanillaItemID.iron_ingot, EnchID.DEPTH_STRIDER, 3);
RecipeManager.addRecipe(VanillaBlockID.ice, EnchID.FROST_WALKER, 2);
RecipeManager.addRecipe(VanillaItemID.quartz, EnchID.SHARPNESS, 5);
RecipeManager.addRecipe(VanillaItemID.rotten_flesh, EnchID.SMITE, 5);
RecipeManager.addRecipe(VanillaItemID.spider_eye, EnchID.BANE_OF_ARTHROPODS, 5);
RecipeManager.addRecipe(VanillaBlockID.piston, EnchID.KNOCKBACK, 2);
RecipeManager.addRecipe(VanillaItemID.blaze_powder, EnchID.FIRE_ASPECT, 2);
RecipeManager.addRecipe({id: VanillaBlockID.skull, data: 0}, EnchID.LOOTING, 3);
//RecipeManager.addRecipe(VanillaBlockID.tnt, EnchID.SWEEPING, 3);
RecipeManager.addRecipe(VanillaItemID.emerald, EnchID.EFFICIENCY, 5);
RecipeManager.addRecipe(VanillaItemID.diamond, EnchID.SILK_TOUCH, 1);
RecipeManager.addRecipe(VanillaItemID.slime_ball, EnchID.UNBREAKING, 3);
RecipeManager.addRecipe(VanillaItemID.gold_ingot, EnchID.FORTUNE, 3);
RecipeManager.addRecipe(VanillaItemID.flint, EnchID.POWER, 5);
RecipeManager.addRecipe(VanillaItemID.ender_eye, EnchID.PUNCH, 2);
RecipeManager.addRecipe({id: VanillaItemID.flint_and_steel, data: 0}, EnchID.FLAME, 1);
RecipeManager.addRecipe(VanillaItemID.ender_pearl, EnchID.INFINITY, 1);
RecipeManager.addRecipe({id: VanillaItemID.dye, data: 0}, EnchID.LUCK_OF_THE_SEA, 3);
RecipeManager.addRecipe(VanillaItemID.fish, EnchID.LURE, 3);
RecipeManager.addRecipe(VanillaBlockID.end_stone, EnchID.MENDING, 1);


let RV;

ModAPI.addAPICallback("RecipeViewer", (api: any) => {

    RV = api.Core;

    Callback.addCallback("PostLoaded", () => {

        const size = 100;
        const scale = size / 16;

        RV.registerRecipeType("book_enchanter", {
            title: "Book Enchanter",
            contents: {
                icon: BlockID.book_enchanter,
                drawing: [
                    {type: "bitmap", x: 325 + 1.5 * scale, y: 100 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale},
                    {type: "bitmap", x: 575 + 1.5 * scale, y: 100 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale}
                ],
                elements: {
                    input0: {x: 200, y: 100, size: size},
                    input1: {x: 450, y: 100, size: size},
                    input2: {x: 700, y: 100, size: size},
                    output0: {x: 450, y: 250, size: size},
                    textEnchant: {type: "text", x: 500, y: 380, font: {color: Color.WHITE, size: 40, shadow: 0.5, align: UI.Font.ALIGN_CENTER}}
                },
                moveItems: {x: 820, y: 152, slots: ["slotSource", "slotLapis", "slotBook"]}
            },
            recipeList: RecipeManager.getAllRecipeForRV(),
            onOpen: (elements: java.util.HashMap<string, UI.Element>, recipe: IRecipe) => {
                elements.get("textEnchant").setBinding("text", (() => {
                    for(let name in EnchID){
                        //@ts-ignore
                        if(recipe.enchant === EnchID[name]){
                            return name;
                        }
                    }
                    return "";
                })());
            }
        });

    });

});