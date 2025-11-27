const enum EnchantmentType {
    ARMOR_HEAD = 1 << 0,
    ARMOR_TORSO = 1 << 1,
    ARMOR_LEGS = 1 << 2,
    ARMOR_FEET = 1 << 3,
    ARMOR = ARMOR_HEAD | ARMOR_TORSO | ARMOR_LEGS | ARMOR_FEET,
    WEAPON = 1 << 4,
    DIGGER = 1 << 5,
    BOW = 1 << 6,
    FISHING_ROD = 1 << 7,
    TRIDENT = 1 << 8,
    CROSSBOW = 1 << 9,
    ALL = ARMOR | WEAPON | DIGGER | BOW | FISHING_ROD | TRIDENT | CROSSBOW
}


class Enchantment {

    static readonly list: Enchantment[] = [
        new Enchantment(0, "Protection", 4, 10, EnchantmentType.ARMOR),
        new Enchantment(1, "Fire Protection", 4, 5, EnchantmentType.ARMOR),
        new Enchantment(2, "Feather Falling", 4, 5, EnchantmentType.ARMOR_FEET),
        new Enchantment(3, "Blast Protection", 4, 2, EnchantmentType.ARMOR),
        new Enchantment(4, "Projectile Protection", 4, 5, EnchantmentType.ARMOR),
        new Enchantment(5, "Thorns", 3, 1, EnchantmentType.ARMOR_TORSO),
        new Enchantment(6, "Respiration", 3, 2, EnchantmentType.ARMOR_HEAD),
        new Enchantment(7, "Aqua Affinity", 1, 2, EnchantmentType.ARMOR_HEAD),
        new Enchantment(8, "Depth Strider", 3, 2, EnchantmentType.ARMOR_FEET),
        new Enchantment(9, "Sharpness", 5, 10, EnchantmentType.WEAPON),
        new Enchantment(10, "Smite", 5, 5, EnchantmentType.WEAPON),
        new Enchantment(11, "Bane of Arthropods", 5, 5, EnchantmentType.WEAPON),
        new Enchantment(12, "Knockback", 2, 5, EnchantmentType.WEAPON),
        new Enchantment(13, "Fire Aspect", 2, 2, EnchantmentType.WEAPON),
        new Enchantment(14, "Looting", 3, 2, EnchantmentType.WEAPON),
        new Enchantment(15, "Efficiency", 5, 10, EnchantmentType.DIGGER),
        new Enchantment(16, "Silk Touch", 1, 1, EnchantmentType.DIGGER),
        new Enchantment(17, "Unbreaking", 3, 5, EnchantmentType.ALL),
        new Enchantment(18, "Fortune", 3, 2, EnchantmentType.DIGGER),
        new Enchantment(19, "Power", 5, 10, EnchantmentType.BOW),
        new Enchantment(20, "Punch", 2, 2, EnchantmentType.BOW),
        new Enchantment(21, "Flame", 1, 2, EnchantmentType.BOW),
        new Enchantment(22, "Infinity", 1, 1, EnchantmentType.BOW),
        new Enchantment(23, "Luck of the Sea", 3, 2, EnchantmentType.FISHING_ROD),
        new Enchantment(24, "Lure", 3, 2, EnchantmentType.FISHING_ROD),
        new Enchantment(25, "Frost Walker", 2, 2, EnchantmentType.ARMOR_FEET, "treasure"),
        new Enchantment(26, "Mending", 1, 2, EnchantmentType.ALL, "treasure"),
        new Enchantment(27, "Curse of Binding", 1, 1, EnchantmentType.ARMOR, "curse"),
        new Enchantment(28, "Curse of Vanishing", 1, 1, EnchantmentType.ALL, "curse"),
        new Enchantment(29, "Impaling", 5, 2, EnchantmentType.TRIDENT),
        new Enchantment(30, "Riptide", 3, 2, EnchantmentType.TRIDENT),
        new Enchantment(31, "Loyalty", 3, 5, EnchantmentType.TRIDENT),
        new Enchantment(32, "Channeling", 1, 1, EnchantmentType.TRIDENT)
    ];

    static incompatibilities(...enchants: number[]): void {
        let i: number;
        let j: number;
        for(i = 0; i < enchants.length; i++){
            for(j = 0; j < enchants.length; j++){
                if(i !== j){
                    this.list[enchants[i]].hate[enchants[j]] = true;
                }
            }
        }
    }

    readonly isCurse: boolean;
    readonly isTreasure: boolean;
    private readonly hate: {[key: number]: true};

    private constructor(public readonly id: number, private readonly name: string, public readonly maxLv: number, private readonly weight: number, private readonly type: EnchantmentType, special?: "curse" | "treasure"){
        this.isCurse = false;
        this.isTreasure = false;
        switch(special){
            case "curse": this.isCurse = true; break;
            case "treasure": this.isTreasure = true; break;
        }
        this.hate = {};
    }

    getName(lv: number): string {
        return this.name + " " + ["", "I", "II", "III", "IV", "V"][lv];
    }

    getMaxLevel(): number {
        return this.maxLv;
    }

    getWeight(): number {
        return this.weight;
    }

    canApply(type: EnchantmentType): boolean {
        return !!(this.type & type);
    }

    isImcompatibleWith(list: EnchantSet): boolean {
        for(let id in list){
            if(this.hate[id]){
                return true;
            }
        }
        return false;
    }

}


Enchantment.incompatibilities(EnchID.PROTECTION, EnchID.FIRE_PROTECTION, EnchID.BLAST_PROTECTION, EnchID.PROJECTILE_PROTECTION);
Enchantment.incompatibilities(EnchID.DEPTH_STRIDER, EnchID.FROST_WALKER);
Enchantment.incompatibilities(EnchID.SHARPNESS, EnchID.SMITE, EnchID.BANE_OF_ARTHROPODS);
Enchantment.incompatibilities(EnchID.FORTUNE, EnchID.SILK_TOUCH);
Enchantment.incompatibilities(EnchID.MENDING, EnchID.INFINITY);
Enchantment.incompatibilities(EnchID.RIPTIDE, EnchID.LOYALTY, EnchID.CHANNELING);


class EnchantmentItem {

    private static readonly type: {[id: number]: EnchantmentType} = {};

    static setType(id: number, type: EnchantmentType): void {
        this.type[id] = type;
    }

    static getAvailableList(id: number, activeCurse: boolean, activeTreasure: boolean): Enchantment[] {
        return Enchantment.list.filter(enchant => enchant.canApply(this.type[id]) && (!enchant.isCurse || activeCurse) && (!enchant.isTreasure || activeTreasure));
    }

    static isExist(id: number): boolean {
        return id in this.type;
    }

}


EnchantmentItem.setType(VanillaItemID.leather_helmet, EnchantmentType.ARMOR_HEAD);
EnchantmentItem.setType(VanillaItemID.chainmail_helmet, EnchantmentType.ARMOR_HEAD);
EnchantmentItem.setType(VanillaItemID.iron_helmet, EnchantmentType.ARMOR_HEAD);
EnchantmentItem.setType(VanillaItemID.golden_helmet, EnchantmentType.ARMOR_HEAD);
EnchantmentItem.setType(VanillaItemID.diamond_helmet, EnchantmentType.ARMOR_HEAD);
EnchantmentItem.setType(VanillaItemID.turtle_helmet, EnchantmentType.ARMOR_HEAD);
EnchantmentItem.setType(VanillaItemID.leather_chestplate, EnchantmentType.ARMOR_TORSO);
EnchantmentItem.setType(VanillaItemID.chainmail_chestplate, EnchantmentType.ARMOR_TORSO);
EnchantmentItem.setType(VanillaItemID.iron_chestplate, EnchantmentType.ARMOR_TORSO);
EnchantmentItem.setType(VanillaItemID.golden_chestplate, EnchantmentType.ARMOR_TORSO);
EnchantmentItem.setType(VanillaItemID.diamond_chestplate, EnchantmentType.ARMOR_TORSO);
EnchantmentItem.setType(VanillaItemID.leather_leggings, EnchantmentType.ARMOR_LEGS);
EnchantmentItem.setType(VanillaItemID.chainmail_leggings, EnchantmentType.ARMOR_LEGS);
EnchantmentItem.setType(VanillaItemID.iron_leggings, EnchantmentType.ARMOR_LEGS);
EnchantmentItem.setType(VanillaItemID.golden_leggings, EnchantmentType.ARMOR_LEGS);
EnchantmentItem.setType(VanillaItemID.diamond_leggings, EnchantmentType.ARMOR_LEGS);
EnchantmentItem.setType(VanillaItemID.leather_boots, EnchantmentType.ARMOR_FEET);
EnchantmentItem.setType(VanillaItemID.chainmail_boots, EnchantmentType.ARMOR_FEET);
EnchantmentItem.setType(VanillaItemID.iron_boots, EnchantmentType.ARMOR_FEET);
EnchantmentItem.setType(VanillaItemID.golden_boots, EnchantmentType.ARMOR_FEET);
EnchantmentItem.setType(VanillaItemID.diamond_boots, EnchantmentType.ARMOR_FEET);
EnchantmentItem.setType(VanillaItemID.wooden_sword, EnchantmentType.WEAPON);
EnchantmentItem.setType(VanillaItemID.stone_sword, EnchantmentType.WEAPON);
EnchantmentItem.setType(VanillaItemID.iron_sword, EnchantmentType.WEAPON);
EnchantmentItem.setType(VanillaItemID.golden_sword, EnchantmentType.WEAPON);
EnchantmentItem.setType(VanillaItemID.diamond_sword, EnchantmentType.WEAPON);
EnchantmentItem.setType(VanillaItemID.wooden_shovel, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.stone_shovel, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.iron_shovel, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.golden_shovel, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.diamond_shovel, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.wooden_pickaxe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.stone_pickaxe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.iron_pickaxe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.golden_pickaxe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.diamond_pickaxe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.wooden_axe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.stone_axe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.iron_axe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.golden_axe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.diamond_axe, EnchantmentType.DIGGER);
EnchantmentItem.setType(VanillaItemID.bow, EnchantmentType.BOW);
EnchantmentItem.setType(VanillaItemID.fishing_rod, EnchantmentType.FISHING_ROD);
EnchantmentItem.setType(VanillaItemID.trident, EnchantmentType.TRIDENT);