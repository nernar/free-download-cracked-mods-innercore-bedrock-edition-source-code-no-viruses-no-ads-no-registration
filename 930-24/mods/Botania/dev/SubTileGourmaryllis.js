let SubTileGourmaryllis = (function (_super) {
    __extends(SubTileGourmaryllis, _super);
    const TAG_COOLDOWN = "cooldown";
    const TAG_DIGESTING_MANA = "digestingMana";
    const TAG_LAST_FOODS = "lastFoods";
    const TAG_LAST_FOOD_COUNT = "lastFoodCount";
    const TAG_STREAK_LENGTH = "streakLength";
    const RANGE = 1;
    const STREAK_MULTIPLIERS = [0, 1, 1.3, 1.5, 1.6, 1.7, 1.75, 1.8];
    function SubTileGourmaryllis() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.cooldown = 0;
        _this.defaultValues.digestingMana = 0;
        _this.defaultValues.streakLength = -1;
        _this.defaultValues.lastFoodCount = 0;
        return _this;
    }
    SubTileGourmaryllis.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (!this.data.lastFoods) {
            this.data.lastFoods = [];
        }
        if (this.data.cooldown > -1) {
            this.data.cooldown--;
        }
        if (this.data.digestingMana != 0) {
            let munchInterval = 2 + (2 * this.data.lastFoodCount);
            if (this.data.cooldown == 0) {
                this.addMana(this.data.digestingMana);
                this.data.digestingMana = 0;
                let burpPitch = Math.pow(2, (this.data.streakLength == 0 ? -this.data.lastFoodCount : this.data.streakLength) / 12);
                this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "random.burp", 1, burpPitch);
            } else {
                if (this.data.cooldown % munchInterval == 0) {
                    this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "random.eat", 0.5, 1);
                    this.sendPacket("addParicle", {id: this.data.lastFoods[0].id, data: this.data.lastFoods[0].data});
                }
            }
        }
        let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
        this.region.getEntitiesWithinAABB(aabb, ItemEntity, function (entity) {
            let stack = entity.getItemStack();
            if (ItemHelper.getNutrition(stack.id)) {
                if (this.data.cooldown <= 0) {
                    this.data.streakLength = Math.min(this.data.streakLength + 1, this.processFood(stack));
                    let val = Math.min(12, ItemHelper.getNutrition(stack.id));
                    this.data.digestingMana = val * val * 70;
                    this.data.digestingMana *= this.getMultiplierForStreak(this.data.streakLength);
                    this.data.cooldown = val * 10;
                }
                entity.kill();
            }
        }, this);
    };
    SubTileGourmaryllis.prototype.addParticle = function (packet) {
        ParticlesHelper.addBreakingItemParticle(this.x + 0.5, this.y + 0.6, this.z + 0.5, packet.id, packet.data);
    };
    SubTileGourmaryllis.prototype.getMaxStreak = function () {
        return STREAK_MULTIPLIERS.length - 1;
    };
    SubTileGourmaryllis.prototype.getMultiplierForStreak = function (index) {
        if (index == 0) {
            return 1 / ++this.data.lastFoodCount;
        } else {
            this.data.lastFoodCount = 1;
            return STREAK_MULTIPLIERS[index];
        }
    };
    SubTileGourmaryllis.prototype.processFood = function (food) {
        for (let i in this.data.lastFoods) {
            let streakFood = this.data.lastFoods[i];
            if (streakFood.id == food.id && streakFood.data == food.data) {
                this.data.lastFoods.unshift(streakFood);
                return Number(i);
            }
        }
        food.count = 1;
        this.data.lastFoods.unshift(food);
        if (this.data.lastFoods.length >= this.getMaxStreak()) {
            this.data.lastFoods.pop();
        }
        return this.getMaxStreak();
    };
    SubTileGourmaryllis.prototype.getColor = function () {
        return 13882884;
    };
    SubTileGourmaryllis.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putInt(TAG_COOLDOWN, this.data.cooldown);
        cmp.putInt(TAG_DIGESTING_MANA, this.data.digestingMana);
        cmp.putString(TAG_LAST_FOODS, toJson(this.data.lastFoods));
        cmp.putInt(TAG_LAST_FOOD_COUNT, this.data.lastFoodCount);
        cmp.putInt(TAG_STREAK_LENGTH, this.data.streakLength);
    };
    SubTileGourmaryllis.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.cooldown = cmp.getInt(TAG_COOLDOWN, 0);
        this.data.digestingMana = cmp.getInt(TAG_DIGESTING_MANA, 0);
        this.data.lastFoods = JSON.parse(cmp.getString(TAG_LAST_FOODS, "[]"));
        this.data.lastFoodCount = cmp.getInt(TAG_LAST_FOOD_COUNT, 0);
        this.data.streakLength = cmp.getInt(TAG_STREAK_LENGTH, -1);
    };
    SubTileGourmaryllis.prototype.getMaxMana = function () {
        return 9000;
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], SubTileGourmaryllis.prototype, "addParticle", null);
    return SubTileGourmaryllis;
}(TileEntityGeneratingFlower));

