class XpUtil {

    static getXp4Lv(lv: number): number {
        if(lv < 17){
            return lv * lv + 6 * lv;
        }
        if(lv < 32){
            return (2.5 * lv * lv - 40.5 * lv + 360) | 0;
        }
        return (4.5 * lv * lv - 162.5 * lv + 2220) | 0;
    }

    static getLv4Xp(xp: number): number {
        let lv = 0;
        while(this.getXp4Lv(lv) <= xp){
            lv++;
        };
        return lv - 1;
    }

    static setPlayerXp(player: PlayerActor, xp: number): void {
        const lv = this.getLv4Xp(xp);
        const cap = xp - this.getXp4Lv(lv);
        player.setLevel(lv);
        player.setExperience(cap);
    }

    private static readonly orbs = [2477, 1237, 617, 307, 149, 73, 37, 17, 7, 3, 1];

    static dropOrb(x: number, y: number, z: number, value: number, blockSource: BlockSource): void {
        let size: number;
        while(value > 0){
            size = this.orbs.find(v => v <= value);
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
    }

}