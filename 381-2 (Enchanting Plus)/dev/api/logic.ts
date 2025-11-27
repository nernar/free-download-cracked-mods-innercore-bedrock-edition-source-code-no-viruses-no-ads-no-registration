class EnchLogic {

    private static readonly config = {
        baseCost: __config__.getNumber("baseCost") - 0 ?? 45,
        costFactor: __config__.getNumber("costFactor") - 0 ?? 1.0,
        curseFactor: __config__.getNumber("curseFactor") - 0 ?? 3.0,
        treasureFactor: __config__.getNumber("treasureFactor") - 0 ?? 4.0,
        floatingBookPower: __config__.getNumber("floatingBookPower") - 0 ?? 1.0
    };

    private static readonly beaconBase = {
        [VanillaBlockID.iron_block]: true,
        [VanillaBlockID.gold_block]: true,
        [VanillaBlockID.diamond_block]: true,
        [VanillaBlockID.emerald_block]: true
    };

    static getEnchantingPower(posX: number, posY: number, posZ: number): number {
        let power = 0;
        let x: number;
        let y: number;
        let z: number;
        let block: number;
        for(x = -2; x <= 2; x++){
            for(z = -2; z <= 2; z++){
                if(x > -2 && x < 2 && z === -1){
                    z = 2;
                }
                if(World.getBlockID(posX + x / 2, posY, posZ + z / 2) === 0){
                    for(y = 0; y <= 1; y++){
                        block = World.getBlockID(posX + x, posY + y, posZ + z);
                        if(block === VanillaBlockID.bookshelf){
                            power++;
                        }
                        else if(block === BlockID.eplus_decoration){
                            power += this.config.floatingBookPower;
                        }
                    }
                }
            }
        }
        return Math.min(30, power);
    }

    static canAddTreasure(posX: number, posY: number, posZ: number): boolean {
        let x: number;
        let z: number;
        for(x = -1; x <= 1; x++){
            for(z = -1; z <= 1; z++){
                if(!this.beaconBase[World.getBlockID(posX + x, posY - 1, posZ + z)]){
                    return false;
                }
            }
        }
        return true;
    }

    static canAddCurse(): boolean {
        const time = World.getWorldTime();
        const moonPhase = (time / 24000 % 8 + 8) & 7;
        let angle = (time % 24000 + 1) / 24000 - 0.25;
        angle < 0 && angle++;
        angle > 1 && angle--;
        const save = angle;
        angle = 1 - (Math.cos(angle * Math.PI) + 1) / 2;
        angle = save + (angle - save) / 3;
        return moonPhase === 0 && angle > 0.4 && angle < 0.6;
    }

    static calculateNewEnchCost(enchant: Enchantment, level: number): number {
        let cost = this.config.baseCost;
        cost *= Math.max(11 - enchant.getWeight(), 1);
        cost *= level;
        cost *= this.config.costFactor;
        if(enchant.isCurse){
            cost *= this.config.curseFactor;
        }
        else if(enchant.isTreasure){
            cost *= this.config.treasureFactor;
        }
        return cost;
    }

    static removeExperience(xp: number): void {
        let lv = Player.getLevel();
        let cap = Player.getExperience() - this.getExperienceForLevels(lv);
        while(cap < xp){
            cap += this.getExperienceForLevels(lv) - this.getExperienceForLevels(lv - 1);
            lv--;
        }
        Player.setLevel(lv);
        Player.setExperience(cap - xp);
    }

    private static getExperienceForLevels(lv: number): number {
        if(lv < 17){
            return lv * lv + 6 * lv;
        }
        if(lv < 32){
            return (2.5 * lv * lv - 40.5 * lv + 360) | 0;
        }
        return (4.5 * lv * lv - 162.5 * lv + 2220) | 0;
    }

}