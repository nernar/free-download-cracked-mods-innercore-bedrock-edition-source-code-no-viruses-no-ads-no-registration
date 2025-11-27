let TilePool = (function (_super) {
    __extends(TilePool, _super);
    __implements(TilePool, IManaPool, IKeyLocked, ISparkAttachable);
    const TAG_MANA = "mana";
    const TAG_MAX_MANA = "maxMana";
    const MANA_MESH = new LazyValue(function () {
        let mesh = StandardMesh.newBox(15.5, 0.1, 15.5);
        return mesh;
    });
    function TilePool(maxMana) {
        _super.apply(this);
        this.defaultValues = {mana: 0, maxMana: maxMana, outputting: false, soundTicks: 0, canAccept: true, canSpare: true, fragile: false, isDoingTransfer: false, ticksDoingTransfer: 0, inputKey: "", outputKey: "", sendPacket: false};
        return this;
    }
    TilePool.prototype.isInfinity = function () {
        return this.getMaxMana() == -1;
    };
    TilePool.prototype.isFull = function () {
        if (this.isInfinity()) {
            return true;
        }
        let blockBelow = this.region.getBlock(this.getPos()).getBlock();
        return this.getMana() >= this.getMaxMana();
    };
    TilePool.prototype.addMana = function (mana) {
        if (this.isInfinity()) {
            return;
        }
        let old = this.data.mana;
        this.data.mana = Math.max(0, Math.min(this.getMana() + mana, this.getMaxMana()));
        if (old != this.data.mana) {
            this.sendPacket("clientUpdateMana", {mana: this.getMana()});
        }
    };
    function calculateComparatorLevel(mana, max) {
        let val = mana / max * 15;
        if (mana > 0) {
            val = Math.max(val, 1);
        }
        return val;
    }
    TilePool.calculateComparatorLevel = calculateComparatorLevel;
    function manaInfusionRecipes(region) {
        return ModRecipes.getRecipes(ModRecipes.MANA_INFUSION_TYPE);
    }
    TilePool.manaInfusionRecipes = manaInfusionRecipes;
    TilePool.prototype.getMatchingRecipe = function (stack, block) {
        let matchingNonCatRecipes = [];
        let matchingCatRecipes = [];
        let newStack = stack.copy();
        newStack.count = 1;
        manaInfusionRecipes(this.region).forEach(function (recipe) {
            if (recipe.matches(newStack)) {
                if (recipe.getCatalyst() == null) {
                    matchingNonCatRecipes.push(recipe);
                } else {
                    if (recipe.getCatalyst().equals(new ItemStack(block.id, 1, block.data))) {
                        matchingCatRecipes.push(recipe);
                    }
                }
            }
        });
        return matchingCatRecipes[0] || matchingNonCatRecipes[0];
    };
    TilePool.prototype.collideEntityItem = function (entity) {
        let stack = entity.getItemStack();
        if (__instanceOf(stack.getItem(), IManaDissolvable)) {
            stack.getItem().onDissolveTick(this, stack, entity);
        }
        let recipe = this.getMatchingRecipe(stack, this.region.getBlock(this.getPos().down()));
        if (recipe != null) {
            let mana = recipe.getManaToConsume();
            if (this.getMana() >= mana) {
                this.addMana(-mana);
                let output = recipe.getRecipeOutput(stack);
                stack.decrease();
                let newItem = this.region.dropItem(this.getPos().add(0.5, 1.5, 0.5), output.id, output.count, output.data, output.extra);
                this.craftingFanciness();
                return true;
            }
        }
        return false;
    };
    TilePool.prototype.craftingFanciness = function () {
        if (this.data.soundTicks == 0) {
            this.sendPacket("playCraftSound");
            this.data.soundTicks = 6;
        }
        this.sendPacket("addCraftingParticles");
    };
    TilePool.prototype.onLoad = function () {
        ManaNetworkEvent.addPool(this);
    };
    TilePool.prototype.clientLoadListener = function (client) {
        if (this.isInfinity()) {
            this.sendPacketToClient(client, "clientUpdateMana", {mana: 1, maxMana: 1});
        } else {
            this.sendPacketToClient(client, "clientUpdateMana", {mana: this.getMana(), maxMana: this.getMaxMana()});
        }
    };
    TilePool.prototype.onUnload = function () {
        ManaNetworkEvent.removePool(this);
    };
    TilePool.prototype.onDestroy = function (fromDestroyBlock, dropAllowed) {
        ManaNetworkEvent.removePool(this);
        return false;
    };
    TilePool.prototype.clientLoad = function () {
        this.craftSound = new Sound(ModSounds.poolCraft);
        this.craftSound.setInBlock(this.x, this.y, this.z);
        this.anim = new Animation.Base(this.x + 0.5, this.y + 0.058, this.z + 0.5);
        this.anim.describe({mesh: MANA_MESH.getValue(), skin: "terrain-atlas/mana_animation.anim.2", material: "animated"});
        this.anim.load();
    };
    TilePool.prototype.clientUpdateMana = function (packet) {
        this.mana = packet.mana;
        this.maxMana = packet.maxMana || this.maxMana;
    };
    TilePool.prototype.clientTick = function () {
        if (this.anim) {
            if (this.mana > 0) {
                let particleChance = 1 - this.mana / this.maxMana * 0.1;
                if (Math.random() > particleChance) {
                    let part = new WispParticleType(new WispParticleData([0, 0.34], 0, 0.776, 1, null, 2));
                    ParticleManager.addParticle(part, this.x + 0.3 + Math.random() * 0.5, this.y + 0.6 + Math.random() * 0.25, this.z + Math.random(), 0, Math.random() / 25, 0);
                }
                let manaY = (this.mana / this.maxMana) * 0.3675;
                this.anim.transform().lock().clear().translate(0, manaY, 0).unlock();
            }
        }
    };
    TilePool.prototype.clientUnload = function () {
        if (this.anim) {
            this.anim.destroy();
            this.anim = null;
        }
    };
    TilePool.prototype.playCraftSound = function () {
        this.craftSound.play();
    };
    TilePool.prototype.addCraftingParticles = function () {
        for (let pc = 0; pc < 5; pc++) {
            let data = ModParticles.RainbowSparkle[randomInt(ModParticles.RainbowSparkle.length - 1)];
            ParticleManager.particleEffect("fx_sparkle", {data: data, x: this.x + 0.5 + Math.random() * 0.4 - 0.2, y: this.y + 0.75, z: this.z + 0.5 + Math.random() * 0.4 - 0.2});
        }
    };
    TilePool.prototype.getMaxMana = function () {
        return this.data.maxMana;
    };
    TilePool.prototype.onTick = function () {
        let wasDoingTransfer = this.data.isDoingTransfer;
        this.data.isDoingTransfer = false;
        if (this.data.soundTicks > 0) {
            this.data.soundTicks--;
        }
        if (!ManaNetworkHandler.instance.isPoolIn(this) && !this.isRemoved()) {
            ManaNetworkEvent.addPool(this);
        }
        let aabb = new AxisAlignedBB(this.getPos(), this.getPos().add(1, 1, 1));
        this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
            if (__instanceOf(entity, ItemEntity)) {
                this.collideEntityItem(entity);
                let stack = entity.getItemStack();
                let mana = stack.getItem();
                if (!stack.isEmpty() && mana && __instanceOf(mana, IManaItem)) {
                    if (this.data.outputting && mana.canReceiveManaFromPool(stack, this) || !this.data.outputting && mana.canExportManaToPool(stack, this)) {
                        let didSomething = false;
                        let bellowCount = 0;
                        if (this.data.outputting) {
                            for (let i in Direction.Plane.HORIZONTAL) {
                                let dir = Direction.Plane.HORIZONTAL[i];
                                let tile = this.region.getTileEntity(this.getPos().offset(dir));
                                if (tile instanceof TileBellows && tile.getLinkedTile() == this) {
                                    bellowCount++;
                                }
                            }
                        }
                        let transfRate = 1000 * (bellowCount + 1);
                        if (this.data.outputting) {
                            if (this.data.canSpare) {
                                if (this.getMana() > 0 && mana.getMana(stack) < mana.getMaxMana(stack)) {
                                    didSomething = true;
                                }
                                let manaVal = Math.min(transfRate, Math.min(this.getMana(), mana.getMaxMana(stack) - mana.getMana(stack)));
                                mana.addMana(stack, manaVal);
                                this.addMana(-manaVal);
                            }
                        } else {
                            if (this.data.canAccept) {
                                if (mana.getMana(stack) > 0 && !this.isFull()) {
                                    didSomething = true;
                                }
                                let manaVal = Math.min(transfRate, Math.min(this.getMaxMana() - this.getMana(), mana.getMana(stack)));
                                mana.addMana(stack, -manaVal);
                                this.addMana(manaVal);
                            }
                        }
                        if (didSomething) {
                            this.data.isDoingTransfer = this.data.outputting;
                        }
                    }
                }
            }
        }, this);
        if (this.data.isDoingTransfer) {
            this.data.ticksDoingTransfer++;
        } else {
            this.data.ticksDoingTransfer = 0;
        }
    };
    TilePool.prototype.getOutputKey = function () {
        return this.data.outputKey;
    };
    TilePool.prototype.onWanded = function (player, stack) {
        if (player.getSneaking()) {
            this.data.outputting = !this.data.outputting;
        }
    };
    TilePool.prototype.canReceiveManaFromBursts = function () {
        return true;
    };
    TilePool.prototype.isOutputtingPower = function () {
        return this.data.outputting;
    };
    TilePool.prototype.getMana = function () {
        return this.isInfinity() ? 1000000000000 : this.data.mana;
    };
    TilePool.prototype.getInputKey = function () {
        return this.data.inputKey;
    };
    TilePool.prototype.getColor = function () {
        return null;
    };
    TilePool.prototype.setColor = function () {
    };
    TilePool.prototype.attachSpark = function () {
    };
    TilePool.prototype.canAttachSpark = function () {
        return true;
    };
    TilePool.prototype.getAttachedSpark = function () {
        let sparks = this.region.getEntitiesWithinAABB(new AxisAlignedBB(this.getPos().up(), this.getPos().up().add(1, 1, 1)), ISparkEntity);
        if (sparks.length == 1) {
            return sparks[0];
        }
        return null;
    };
    TilePool.prototype.areIncomingTranfersDone = function () {
        return false;
    };
    TilePool.prototype.getAvailableSpaceForMana = function () {
        let space = Math.max(0, this.getMaxMana() - this.getMana());
        if (space > 0) {
            return space;
        } else {
            if (this.region.getBlock(this.getPos().down()).id == BlockID.manaVoid) {
                return this.getMaxMana();
            } else {
                return 0;
            }
        }
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TilePool.prototype, "addCraftingParticles", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TilePool.prototype, "clientUpdateMana", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TilePool.prototype, "playCraftSound", null);
    return TilePool;
}(TileMod));

