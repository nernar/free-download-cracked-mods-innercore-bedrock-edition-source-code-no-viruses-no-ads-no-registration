let TileRuneAltar = (function (_super) {
    __extends(TileRuneAltar, _super);
    __implements(TileRuneAltar, IManaReceiver);
    const TAG_MANA = "mana";
    const TAG_MANA_TO_GET = "manaToGet";
    const TAG_COOLDOWN = "cooldown";
    function TileRuneAltar() {
        _super.apply(this, arguments) || this;
        this.defaultValues = {mana: 0, manaToGet: 0, signal: 0, cooldown: 0};
        return this;
    }
    TileRuneAltar.prototype.addItem = function (stack) {
        if (!stack || this.data.cooldown > 0 || ItemTwigWand.valid(stack) && stack.id == ItemID.lexicon) {
            return false;
        }
        if (this.data.manaToGet != 0) {
            return false;
        }
        for (let i = 0; i < 16; i++) {
            if (stack.isEmpty()) {
                break;
            }
            if (this.container.getSlot("slot" + i).isEmpty()) {
                this.sendPacket("loadAnim", stack.copy());
                this.container.setSlot("slot" + i, stack.getId(), 1, stack.getData(), stack.getExtra());
                stack.preventSync();
                stack.decrease();
            }
        }
        stack._sync();
        this.container.sendChanges();
        this.updateRecipe();
        return true;
    };
    TileRuneAltar.prototype.clientLoad = function () {
        this.startSound = new Sound(ModSounds.runeAltarStart);
        this.craftSound = new Sound(ModSounds.runeAltarCraft);
        this.startSound.setInBlock(this.x, this.y, this.z);
        this.craftSound.setInBlock(this.x, this.y, this.z);
        this.itemAnimations = [];
        this.animCoords = {x: this.x + 0.5 + 1 / 16 - 1 / 16, y: this.y + 1.625 + 1 / 16 / (1 / (1 / (16 / 6))) * 3.5, z: this.z + 0.5 - 1 / 16 + 1 / 16};
    };
    TileRuneAltar.prototype.clientTick = function () {
        let animCoords = this.animCoords;
        let time = ClientTickHandler.ticksInGame / 90;
        let containerSize = this.itemAnimations.length;
        let step = containerSize > 0 ? (Math.PI * 2) / containerSize : 0;
        for (let i in this.itemAnimations) {
            let anim = this.itemAnimations[i];
            let angle = step * i;
            let thisVec = new Vec3d(animCoords.x + Math.sin(angle + time), animCoords.y + Math.sin(time + angle) / 6, animCoords.z + Math.cos(angle + time));
            anim.setPos(thisVec.x, thisVec.y, thisVec.z);
            let blockVec = new Vec3d(this.x + 0.5, thisVec.y, this.z + 0.5);
            let diffVec = blockVec.subtract(thisVec);
            let diffVec2D = new Vec3d(diffVec.x, diffVec.z, 0);
            let rotVec = new Vec3d(0, 1, 0);
            let rotation = Math.angleBetween(rotVec, diffVec2D);
            if (blockVec.x < thisVec.x) {
                rotation = -rotation;
            }
            anim.setItemRotation(0, -rotation, 0);
        }
        if (this.networkData.getBoolean(TAG_MANA, false)) {
            let comp = null;
            let color = comp == null ? 8947848 : comp.getParticleColor(stackAt);
            let red = (color >> 16 & 255) / 255;
            let green = (color >> 8 & 255) / 255;
            let blue = (color & 255) / 255;
            let data = new WispParticleData([0, 1], r, g, b, null, 10);
            ParticleManager.addParticle(new WispParticleType(data), this.x + Math.random(), this.y + 0.8, this.z + Math.random(), 0, 0.025, 0);
        }
    };
    TileRuneAltar.prototype.playStartSound = function () {
        this.startSound.play();
    };
    TileRuneAltar.prototype.playCraftSound = function () {
        this.craftSound.play();
    };
    TileRuneAltar.prototype.craftEffect = function () {
        for (let i = 0; i < 25; i++) {
            let h = ModParticles.RainbowSparkle[randomInt(ModParticles.RainbowSparkle.length - 1)];
            ParticleManager.particleEffect("fx_sparkle", {data: h, x: this.x + 0.5 + Math.random() * 0.4 - 0.2, y: this.y + 1, z: this.z + 0.5 + Math.random() * 0.4 - 0.2});
        }
    };
    TileRuneAltar.prototype.loadAnim = function (stack) {
        stack.id = Network.serverToLocalId(stack.id);
        LevelDisplayedQueue.run(function () {
            let itemAnimation = new Animation.Item(this.x + 0.5, this.y + 1, this.z + 0.5);
            itemAnimation.describeItem({id: stack.id, data: stack.data, count: 1, notRandomize: true, size: 1 / (16 / 6)});
            itemAnimation.refresh();
            itemAnimation.load();
            this.itemAnimations.push(itemAnimation);
        }, this);
    };
    TileRuneAltar.prototype.destroyAnims = function () {
        for (let i in this.itemAnimations) {
            this.itemAnimations[i].destroy();
        }
        this.itemAnimations = [];
    };
    TileRuneAltar.prototype.destroyAnim = function (packet) {
        this.itemAnimations[packet.index].destroy();
        this.itemAnimations.splice(packet.index, 1);
    };
    TileRuneAltar.prototype.onTick = function () {
        if (this.data.manaToGet == 0) {
            this.region.getEntitiesWithinAABB(new AxisAlignedBB(this.getPos(), this.getPos().add(1, 1, 1)), ItemEntity, function (entity) {
                let stack = entity.getItemStack();
                if (stack && stack.getCount() > 0) {
                    if (stack.getId() != BlockID.livingrock) {
                        this.addItem(stack);
                    } else {
                        entity.setPosition(this.x + 0.5, this.y + 0.75, this.z + 0.5);
                    }
                }
                return false;
            }, this);
        }
        let newSignal = 0;
        if (this.data.manaToGet > 0) {
            newSignal++;
            if (this.data.mana >= this.data.manaToGet) {
                newSignal++;
            }
        }
        if (newSignal != this.data.signal) {
            this.data.signal = newSignal;
        }
        if (this.data.cooldown > 0) {
            this.data.cooldown--;
        } else {
            if (this.networkData.getBoolean(TAG_COOLDOWN, false) != this.data.cooldown) {
                this.networkData.putBoolean(TAG_COOLDOWN, false);
                this.networkData.sendChanges();
            }
        }
    };
    TileRuneAltar.prototype.getContainerSize = function () {
        let size = 0;
        for (let i = 0; i < 16; i++) {
            if (!this.container.getSlot("slot" + i).isEmpty()) {
                size++;
            }
        }
        return size;
    };
    TileRuneAltar.prototype.updateRecipe = function () {
        this.currentRecipe = null;
        this.data.manaToGet = 0;
        this.data.mana = 0;
        ModRecipes.getRecipes(ModRecipes.RUNE_TYPE).forEach(function (recipe) {
            if (!this.currentRecipe && recipe.matches(this.container)) {
                this.currentRecipe = recipe;
                this.data.manaToGet = recipe.getManaUsage();
                this.sendPacket("playStartSound");
            }
        }, this);
    };
    TileRuneAltar.prototype.onWanded = function (player, stack) {
        if (!this.currentRecipe) {
            return;
        }
        let recipe = this.currentRecipe;
        if (this.data.manaToGet > 0 && this.data.mana >= this.data.manaToGet) {
            let livingrock = null;
            this.region.getEntitiesWithinAABB(new AxisAlignedBB(this.getPos(), this.getPos().add(1, 1, 1)), ItemEntity, function (entity) {
                let stack = entity.getItemStack();
                if (stack.count > 0 && stack.id == BlockID.livingrock) {
                    livingrock = stack;
                    return;
                }
                return false;
            });
            if (livingrock != null) {
                this.addMana(-this.data.manaToGet);
                let result = recipe.getCraftingResult();
                this.sendPacket("playCraftSound");
                this.region.dropItem(this.getPos().add(0.5, 1.5, 0.5), result);
                this.currentRecipe = null;
                this.data.cooldown = 60;
                this.networkData.putBoolean(TAG_COOLDOWN, true);
                this.networkData.sendChanges();
                this.data.manaToGet = 0;
                for (let i = 0; i < 16; i++) {
                    let slot = this.container.getSlot("slot" + i);
                    if (!slot.isEmpty()) {
                        if (slot.id == ItemID.rune) {
                            this.region.dropItem(this.getPos().add(0.5, 1.5, 0.5), slot.asScriptable());
                        }
                        this.container.clearSlot("slot" + i);
                    }
                }
                this.sendPacket("destroyAnims");
                livingrock.decrease();
                this.sendPacket("craftEffect");
            }
        }
    };
    TileRuneAltar.prototype.onItemUse = function (coords, stack, player) {
        let size = this.getContainerSize() - 1;
        if (player.getSneaking()) {
            if (size >= 0 && !ItemTwigWand.valid(stack)) {
                let slot = this.container.getSlot("slot" + size);
                player.addItemToInventory(slot.id, 1, slot.data, slot.extra);
                this.container.clearSlot("slot" + size);
                this.container.sendChanges();
                this.sendPacket("destroyAnim", {index: size});
                this.updateRecipe();
            }
        } else {
        }
    };
    TileRuneAltar.prototype.getMana = function () {
        return this.data.mana;
    };
    TileRuneAltar.prototype.isFull = function () {
        return this.data.mana >= this.data.manaToGet;
    };
    TileRuneAltar.prototype.addMana = function (mana) {
        this.data.mana = Math.min(this.data.mana + mana, this.data.manaToGet);
    };
    TileRuneAltar.prototype.canReceiveManaFromBursts = function () {
        return !this.isFull();
    };
    TileRuneAltar.prototype.onLoad = function () {
        this.updateRecipe();
        this.itemAnimations = [];
        for (let i in this.container.slots) {
            let slot = this.container.slots[i];
            if (!slot.isEmpty()) {
                this.sendPacket("loadAnim", new ItemStack(slot.asScriptable()));
            }
        }
    };
    TileRuneAltar.prototype.onUnload = function () {
        this.sendPacket("destroyAnims");
    };
    TileRuneAltar.prototype.destroy = function () {
        this.sendPacket("destroyAnims");
        return false;
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileRuneAltar.prototype, "craftEffect", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileRuneAltar.prototype, "playStartSound", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileRuneAltar.prototype, "playCraftSound", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileRuneAltar.prototype, "loadAnim", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileRuneAltar.prototype, "destroyAnim", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileRuneAltar.prototype, "destroyAnims", null);
    return TileRuneAltar;
}(TileMod));

