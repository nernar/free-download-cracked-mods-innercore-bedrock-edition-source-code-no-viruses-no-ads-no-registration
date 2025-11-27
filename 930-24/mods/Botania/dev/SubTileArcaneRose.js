let SubTileArcaneRose = (function (_super) {
    __extends(SubTileArcaneRose, _super);
    const MANA_PER_XP = 50;
    const MANA_PER_XP_ORB = 35;
    const MANA_PER_XP_DISENCHANT = 40;
    const RANGE = 1;
    function SubTileArcaneRose() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileArcaneRose.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.getMana() >= this.getMaxMana()) {
            return;
        }
        let effectBounds = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
        this.region.getEntitiesWithinAABB(effectBounds, Actor, function (entity) {
            if (__instanceOf(entity, PlayerEntity)) {
                let allXP = entity.getExperience();
                if (allXP > 0) {
                    let lvls = XPtoLVL(allXP - 1);
                    entity.setLevel(lvls.lvl);
                    entity.setExperience(lvls.rem);
                    this.addMana(MANA_PER_XP);
                    return false;
                }
            } else {
                if (entity.getType == EEntityType.EXPERIENCE_ORB) {
                    this.addMana(getXp(entity) * MANA_PER_XP_ORB);
                    entity.remove();
                    let pitch = (Math.random() - Math.random()) * 0.35 + 0.9;
                    this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "random.fizz", 0.07, pitch);
                    return false;
                } else {
                    if (__instanceOf(entity, ItemEntity)) {
                        let stack = entity.getItemStack();
                        if (stack.getId() == VanillaItemID.enchanted_book && stack.isEnchanted()) {
                            let xp = this.getEnchantmentXpValue(stack);
                            if (xp > 0) {
                                let newStack = this.removeNonCurses(stack);
                                stack.decrease();
                                let entityPos = entity.getPosition();
                                let entityMotion = entity.getVelocity();
                                let newEntity = this.region.dropItem(entityPos.x, entityPos.y, entityPos.z, newStack);
                                newEntity.setVelocity(entityMotion.x, entityMotion.y, entityMotion.z);
                                while (xp > 0) {
                                    let i = getXPSplit(xp);
                                    xp -= i;
                                    this.region.spawnExpOrbs(this.x + 0.5, this.y + 0.5, this.z + 0.5, i);
                                }
                                return false;
                            }
                        }
                    }
                }
            }
            return false;
        }, this);
    };
    SubTileArcaneRose.prototype.getEnchantmentXpValue = function (stack) {
        let ret = 0;
        let enchants = stack.getEnchants();
        for (let i in enchants) {
            let enchantId = Number(i);
            let enchantLevel = enchants[i];
            if (CURSED_ENCHANTS.indexOf(enchantId) == -1) {
                ret += EnchantHelper.getMinCost(enchantLevel);
            }
        }
        return ret;
    };
    SubTileArcaneRose.prototype.removeNonCurses = function (stack) {
        let extra = new ItemExtraData();
        let enchants = stack.getEnchants();
        for (let i in enchants) {
            if (CURSED_ENCHANTS.indexOf(Number(i)) !== -1) {
                extra.addEnchant(Number(i), enchants[i]);
            }
        }
        let newStack = new ItemStack(stack);
        newStack.extra = extra;
        if (!extra.isEnchanted()) {
            newStack.id = VanillaItemID.book;
        }
        return newStack;
    };
    SubTileArcaneRose.prototype.getColor = function () {
        return 16748280;
    };
    SubTileArcaneRose.prototype.getMaxMana = function () {
        return 6000;
    };
    return SubTileArcaneRose;
}(TileEntityGeneratingFlower));

