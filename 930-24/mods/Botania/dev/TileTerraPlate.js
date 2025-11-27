let TileTerraPlate = (function (_super) {
    __extends(TileTerraPlate, _super);
    __implements(TileTerraPlate, ISparkAttachable);
    const TAG_MANA = "mana";
    const TAG_COMPLETION = "completion";
    const MULTIBLOCK = TileTerraPlate.MULTIBLOCK = new LazyValue(function () {
        return new DenseMultiblock([["___", "_P_", "___"], ["RLR", "L0L", "RLR"]], "P", ModBlocks.terraPlate, "R", ModBlocks.livingrock, "0", ModBlocks.livingrock, "L", VanillaBlockID.lapis_block);
    });
    function TileTerraPlate() {
        _super.call(this);
        this.defaultValues.mana = 0;
        return this;
    }
    TileTerraPlate.prototype.onTick = function () {
        let removeMana = true;
        if (this.hasValidPlatform()) {
            let items = this.getItems();
            let inv = this.getInventory();
            let recipe = this.getCurrentRecipe(inv);
            this.networkData.putFloat(TAG_COMPLETION, this.getCompletion());
            if (recipe != null) {
                removeMana = false;
                let spark = this.getAttachedSpark();
                if (spark != null) {
                    let sparks = SparkHelper.getSparksAround(this.region, this.getPos().getX() + 0.5, this.getPos().getY() + 0.5, this.getPos().getZ() + 0.5, spark.getNetwork()).filter(function (otherSpark) {
                        return otherSpark != spark && __instanceOf(otherSpark.getAttachedTile(), IManaPool);
                    });
                    for (let i in sparks) {
                        sparks[i].registerTransfer(spark);
                    }
                }
                if (this.data.mana >= recipe.getMana()) {
                    let result = recipe.getCraftingResult(inv);
                    for (let i in items) {
                        items[i].clear();
                    }
                    this.region.dropItem(this.getPos().getX() + 0.5, this.getPos().getY() + 0.5, this.getPos().getZ() + 0.5, result.id, result.count, result.data, result.extra);
                    this.data.mana = 0;
                }
                if (this.networkData.getBoolean(TAG_MANA, false) != !!this.data.mana) {
                    this.networkData.putBoolean(TAG_MANA, !!this.data.mana);
                }
            }
        }
        if (removeMana) {
            this.addMana(-10000);
        }
        this.networkData.sendChanges();
    };
    TileTerraPlate.prototype.getCompletion = function () {
        let recipe = this.getCurrentRecipe(this.getInventory());
        if (recipe == null) {
            return 0;
        }
        return this.getMana() / recipe.getMana();
    };
    TileTerraPlate.prototype.isActive = function () {
        return this.getCurrentRecipe(this.getInventory()) != null;
    };
    TileTerraPlate.prototype.getItems = function () {
        let pos = this.getPos();
        let stacks = [];
        this.region.getEntitiesWithinAABB(new AxisAlignedBB(pos, pos.add(1, 1, 1)), ItemEntity, function (entity) {
            let stack = entity.getItemStack();
            if (!stack.isEmpty()) {
                stacks.push(stack);
            }
        });
        return stacks;
    };
    TileTerraPlate.prototype.getMana = function () {
        return this.data.mana;
    };
    TileTerraPlate.prototype.isFull = function () {
        let recipe = this.getCurrentRecipe(this.getInventory());
        return recipe == null || this.getMana() >= recipe.getMana();
    };
    TileTerraPlate.prototype.addMana = function (mana) {
        this.data.mana = Math.max(0, this.data.mana + mana);
    };
    TileTerraPlate.prototype.canReceiveManaFromBursts = function () {
        return this.isActive();
    };
    TileTerraPlate.prototype.canAttachSpark = function (stack) {
        return true;
    };
    TileTerraPlate.prototype.attachSpark = function (entity) {
    };
    TileTerraPlate.prototype.areIncomingTranfersDone = function () {
        return !this.isActive();
    };
    TileTerraPlate.prototype.getAvailableSpaceForMana = function () {
        let recipe = this.getCurrentRecipe(this.getInventory());
        return recipe == null ? 0 : Math.max(0, recipe.getMana() - this.getMana());
    };
    TileTerraPlate.prototype.clientTick = function () {
        if (this.networkData.getBoolean(TAG_MANA, false)) {
            BotaniaParticleEffect({type: EBotaniaParticleEffect.TERRA_PLATE, dimension: this.dimension, x: this.x, y: this.y, z: this.z, percentage: this.networkData.getFloat(TAG_COMPLETION, 0)});
        }
    };
    function flattenStacks(items) {
        let stacks = [];
        let i = 0;
        for (let j in items) {
            let item = items[j];
            i += item.count;
        }
        if (i > 64) {
            return [];
        }
        let j = 0;
        for (let _j in items) {
            let item = items[_j];
            if (item.count > 1) {
                let temp = item.copy();
                temp.count = 1;
                for (let count = 0; count < item.count; count++) {
                    stacks[j] = temp.copy();
                    j++;
                }
            } else {
                stacks[j] = item;
                j++;
            }
        }
        return stacks;
    }
    TileTerraPlate.prototype.getCurrentRecipe = function (inv) {
        if (!inv || Object.keys(inv.slots).length == 0) {
            return null;
        }
        return ModRecipes.getRecipe(ModRecipes.TERRA_PLATE_TYPE, inv);
    };
    TileTerraPlate.prototype.getInventory = function (items) {
        let container = new ItemContainer();
        let stacks = flattenStacks(this.getItems());
        for (let i in stacks) {
            let stack = stacks[i];
            container.setSlot("slot" + i, stack.id, stack.count, stack.data, stack.extra);
        }
        return container;
    };
    TileTerraPlate.prototype.hasValidPlatform = function () {
        return MULTIBLOCK.getValue().validate(this.region, this.getPos().down()) != null;
    };
    TileTerraPlate.prototype.getAttachedSpark = function () {
        let sparks = this.region.getEntitiesWithinAABB(new AxisAlignedBB(this.getPos().up(), this.getPos().up().add(1, 1, 1)), ISparkEntity);
        if (sparks.length == 1) {
            return sparks[0];
        }
        return null;
    };
    return TileTerraPlate;
}(TileMod));

