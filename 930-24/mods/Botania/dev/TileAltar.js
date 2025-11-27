let TileAltar = (function (_super) {
    __extends(TileAltar, _super);
    const ITEM_TAG_APOTHECARY_SPAWNED = "ApothecarySpawned";
    const TAG_FLUID = "fluid";
    const TAG_CONTAINER_SIZE = "containerSize";
    const SEED_PATTERN = "(?:(?:(?:[A-Z-_.:]|^)seed)|(?:(?:[a-z-_.:]|^)Seed))(?:[sA-Z-_.:]|$)";
    let State = TileAltar.State = (function () {
        __enum(State, "EMPTY");
        __enum(State, "LAVA");
        __enum(State, "WATER");
        function State() {
            return this;
        }
        State.prototype.getString = function () {
            return this.name().toLowerCase();
        };
        return State;
    }());
    function TileAltar() {
        _super.apply(this, arguments);
        return this;
    }
    __implements(TileAltar, IPetalApothecary);
    TileAltar.prototype.collideEntityItem = function (entity) {
        let stack = entity.getItemStack();
        if (stack.isEmpty()) {
            return false;
        }
        let fluidName = LiquidRegistry.getItemLiquid(stack.id, stack.data);
        if (this.getFluid() == State.EMPTY) {
            if (fluidName == "water" || fluidName == "lava") {
                let emptyItem = LiquidRegistry.getEmptyItem(stack.id, stack.data);
                this.setFluid(fluidName);
                stack.set(emptyItem.id, null, emptyItem.data);
                return true;
            }
            return false;
        }
        if (this.getFluid() == State.LAVA) {
            entity.kill();
            this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "random.fizz", 0.5, randomFloat(1.8, 2.4));
            return true;
        }
        if (IDRegistry.getIdInfo(stack.getId()).match(SEED_PATTERN)) {
            let isPresent = false;
            ModRecipes.getRecipes(ModRecipes.PETAL_TYPE).forEach(function (recipe) {
                if (recipe.matches(this.container)) {
                    isPresent = true;
                    let output = recipe.getCraftingResult(this.container);
                    for (let i = 0; i < 16; i++) {
                        let slot = this.container.getSlot("slot" + i);
                        if (!slot.isEmpty()) {
                            this.container.clearSlot("slot" + i);
                        }
                    }
                    this.networkData.putInt(TAG_CONTAINER_SIZE, 0);
                    this.networkData.sendChanges();
                    this.container.sendChanges();
                    stack.decrease();
                    ItemNBTHelper.setBoolean(output, ITEM_TAG_APOTHECARY_SPAWNED, true);
                    this.region.dropItem(this.getPos().add(0.5, 1, 0.5), output);
                    this.setFluid(State.EMPTY);
                    this.sendPacket("craftEffect");
                }
            }, this);
            return isPresent;
        } else {
            if (!ItemNBTHelper.getBoolean(stack, ITEM_TAG_APOTHECARY_SPAWNED)) {
                if (!this.container.getSlot("slot15").isEmpty()) {
                    return false;
                }
                for (let i = 0; i < 16; i++) {
                    if (stack.isEmpty()) {
                        break;
                    }
                    if (this.container.getSlot("slot" + i).isEmpty()) {
                        this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "random.splash", 1, randomFloat(0.6, 1.4));
                        this.container.setSlot("slot" + i, stack.getId(), 1, stack.getData(), stack.getExtra());
                        this.networkData.putInt(TAG_CONTAINER_SIZE, this.networkData.getInt(TAG_CONTAINER_SIZE, 0) + 1);
                        stack.preventSync();
                        stack.decrease();
                    }
                }
                stack._sync();
                this.container.sendChanges();
                this.networkData.sendChanges();
            }
        }
    };
    TileAltar.prototype.isEmpty = function () {
        for (let i = 0; i < 16; i++) {
            if (!this.container.getSlot("slot" + i).isEmpty()) {
                return false;
            }
        }
        return true;
    };
    TileAltar.prototype.onTick = function () {
        let aabb = new AxisAlignedBB(this.getPos().add(0, 1 / 16 * 20, 0), this.getPos().add(1, 1 / 16 * 32, 1));
        this.region.getEntitiesWithinAABB(aabb, ItemEntity, function (entity) {
            this.collideEntityItem(entity);
            return false;
        }, this);
        let weather = World.getWeather();
        if (this.region.canSeeSky(this.pos.up()) && weather.rain && randomInt(320) == 1) {
            if (this.getFluid() == State.EMPTY) {
                this.setFluid(State.WATER);
            }
        }
    };
    TileAltar.prototype.onLoad = function () {
        this.networkData.putString(TAG_FLUID, this.getFluid().name());
        this.networkData.sendChanges();
    };
    TileAltar.prototype.clientLoad = function () {
        this.sound = new Sound(ModSounds.altarCraft);
        this.sound.setInBlock(this.x, this.y, this.z);
    };
    TileAltar.prototype.clientTick = function () {
        let containerSize = this.networkData.getInt(TAG_CONTAINER_SIZE, 0);
        let fluid = this.networkData.getString(TAG_FLUID, "");
        if (fluid == State.WATER.name()) {
            for (let i = 0; i < containerSize; i++) {
                if (Math.random() > 0.99) {
                    let data = ModParticles.RainbowSparkle[randomInt(ModParticles.RainbowSparkle.length - 1)];
                    ParticleManager.addParticle(new SparkleParticleType(data), this.x + 0.5 + Math.random() * 0.4 - 0.2, this.y + 1.2, this.z + 0.5 + Math.random() * 0.4 - 0.2, 0, 0, 0);
                }
            }
        } else {
            if (fluid == State.LAVA.name()) {
                if (Math.random() > 0.9) {
                    ParticleManager.addParticle(EParticleType.SMOKE2, this.x + 0.5 + Math.random() * 0.4 - 0.2, this.y + 1, this.z + 0.5 + Math.random() * 0.4 - 0.2);
                }
                if (Math.random() > 0.99) {
                    World.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "liquid.lavapop", randomFloat(0.4, 0.6), randomFloat(0.9, 1.05));
                    ParticleManager.addParticle(EParticleType.LAVA, this.x + 0.5 + Math.random() * 0.4 - 0.2, this.y + 1, this.z + 0.5 + Math.random() * 0.4 - 0.2);
                }
                if (Math.random() > 0.995) {
                    World.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "liquid.lava", randomFloat(0.4, 0.6), randomFloat(0.9, 1.05));
                }
            }
        }
    };
    TileAltar.prototype.craftEffect = function () {
        for (let i = 0; i < 25; i++) {
            let h = ModParticles.RainbowSparkle[randomInt(ModParticles.RainbowSparkle.length - 1)];
            ParticleManager.particleEffect("fx_sparkle", {data: h, x: this.x + 0.5 + Math.random() * 0.4 - 0.2, y: this.y + 1, z: this.z + 0.5 + Math.random() * 0.4 - 0.2});
        }
        if (this.sound) {
            this.sound.play();
        }
    };
    TileAltar.prototype.setFluid = function (fluid) {
        if (typeof fluid == "string") {
            fluid = State[fluid.toUpperCase()];
        }
        switch (fluid) {
          case State.WATER:
            this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "bucket.fill_water", 1, 1);
            this.region.setBlock(this.getPos(), this.blockID, 1);
            break;
          case State.LAVA:
            this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "bucket.fill_lava", 1, 1);
            this.region.setBlock(this.getPos(), this.blockID, 2);
            break;
          case State.EMPTY:
            this.region.setBlock(this.getPos(), this.blockID, 0);
            break;
        }
        this.networkData.putString(TAG_FLUID, this.getFluid().name());
        this.networkData.sendChanges();
    };
    TileAltar.prototype.getFluid = function () {
        switch (this.region.getBlockData(this.getPos())) {
          case 0:
            return State.EMPTY;
          case 1:
            return State.WATER;
          case 2:
            return State.LAVA;
        }
    };
    TileAltar.prototype.onItemUse = function (coords, stack, player) {
        let state = this.getFluid();
        let fluid = state.getString();
        let itemFluid = LiquidRegistry.getItemLiquid(stack.id, stack.data);
        if (!player.getSneaking() && !stack.isEmpty()) {
            if (fluid == "empty" && (itemFluid == "water" || itemFluid == "lava")) {
                this.setFluid(itemFluid);
                let emptyStack = LiquidRegistry.getEmptyItem(stack.id, stack.data);
                player.setCarriedItem(emptyStack.id, 1, emptyStack.data);
                this.preventClick();
            } else {
                if (fluid != "empty" && !itemFluid) {
                    let fullItem = LiquidRegistry.getFullItem(stack.id, stack.data, fluid);
                    if (fullItem) {
                        this.setFluid(State.EMPTY);
                        this.region.playSound(this.x + 0.5, this.y + 0.5, this.z + 0.5, "bucket.empty_" + fluid, 1, 1);
                        stack.decrease();
                        player.addItemToInventory(fullItem.id, 1, fullItem.data);
                    }
                }
            }
        }
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileAltar.prototype, "craftEffect", null);
    return TileAltar;
}(TileMod));

