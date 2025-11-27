let TileAlfPortal = (function (_super) {
    __extends(TileAlfPortal, _super);
    const MULTIBLOCK = new LazyValue(function () {
        return new DenseMultiblock([["_", "W", "G", "W", "_"], ["W", " ", " ", " ", "W"], ["G", " ", " ", " ", "G"], ["W", " ", " ", " ", "W"], ["_", "W", "0", "W", "_"]], "W", ModBlocks.livingwood, "G", ModBlocks.livingwoodGlimmering, "0", ModBlocks.alfPortal);
    });
    const MESH = new LazyValue(function () {
        let mesh = StandardMesh.newBox(48.01, 48.01, 8);
        return mesh;
    });
    const TAG_TICKS_OPEN = "ticksOpen";
    const TAG_TICKS_SINCE_LAST_ITEM = "ticksSinceLastItem";
    const TAG_STACK_COUNT = "stackCount";
    const TAG_STACK = "portalStack";
    const TAG_PORTAL_FLAG = "_elvenPortal";
    const TAG_PORTAL_OPEN = "portalOpen";
    function TileAlfPortal() {
        _super.call(this);
        this.ticksOpen = 0;
        this.ticksSinceLastItem = 0;
        this.closeNow = false;
        this.explode = false;
        return this;
    }
    TileAlfPortal.prototype.onInit = function () {
        this.stacksIn = [];
    };
    TileAlfPortal.prototype.onTick = function () {
        if (this.getBlockState().data == 0 || !this.stacksIn) {
            this.ticksOpen = 0;
            this.sendPacket("portalClose");
            return;
        }
        if (this.ticksOpen == 0) {
            this.portalOpen();
        }
        let state = this.getBlockState().data;
        let newState = this.getValidState();
        this.ticksOpen++;
        let aabb = this.getPortalAABB();
        let open = this.ticksOpen > 60;
        Callback.invokeCallback("Botania:ElvenPortalUpdateEvent", this, aabb, open, this.stacksIn);
        if (this.ticksOpen > 60) {
            this.ticksSinceLastItem++;
            let items = this.region.getEntitiesWithinAABB(aabb, ItemEntity, function (item) {
                let stack = item.getItemStack();
                let consume;
                if (ItemNBTHelper.getBoolean(stack, TAG_PORTAL_FLAG, false)) {
                    consume = false;
                } else {
                    if (__instanceOf(stack.getItem(), ItemLexicon)) {
                        consume = true;
                    } else {
                        if (!__instanceOf(stack.getItem(), IElvenItem) || !stack.getItem().isElvenItem(stack)) {
                            consume = true;
                        } else {
                            consume = false;
                        }
                    }
                }
                if (consume) {
                    item.kill();
                    if (this.validateItemUsage(item)) {
                        this.addItem(stack);
                    }
                    this.ticksSinceLastItem = 0;
                }
            }, this);
            if (!this.stacksIn.length == 0 && this.ticksSinceLastItem >= 4) {
                this.resolveRecipes();
            }
        }
        if (this.closeNow) {
            this.region.setBlock(this.getPos(), ModBlocks.alfPortal);
            this.sendPacket("closeParticles", {state: state});
            this.closeNow = false;
        } else {
            if (newState != state) {
                if (newState == 0) {
                    this.sendPacket("closeParticles", {state: state});
                }
                this.region.setBlock(this.getPos(), this.getBlockState().id, newState);
            } else {
                if (this.explode) {
                    this.region.explode(this.pos.getX() + 0.5, this.pos.getY() + 2, this.pos.getZ() + 0.5, 3, true);
                    this.explode = false;
                }
            }
        }
    };
    TileAlfPortal.prototype.validateItemUsage = function (entity) {
        let inputStack = entity.getItemStack();
        let recipes = elvenTradeRecipes();
        for (let i in recipes) {
            let recipe = recipes[i];
            if (recipe.containsItem(inputStack)) {
                return true;
            }
        }
        if (inputStack.id == VanillaItemID.bread) {
            this.explode = true;
        }
        return false;
    };
    TileAlfPortal.prototype.blockParticle = function (state) {
        let dh, dy;
        switch (this.region.rand.nextInt(9)) {
          default:
          case 0:
            dh = 0;
            dy = 1;
            break;
          case 1:
            dh = 0;
            dy = 2;
            break;
          case 2:
            dh = 0;
            dy = 3;
            break;
          case 3:
            dh = -1;
            dy = 1;
            break;
          case 4:
            dh = -1;
            dy = 2;
            break;
          case 5:
            dh = -1;
            dy = 3;
            break;
          case 6:
            dh = 1;
            dy = 1;
            break;
          case 7:
            dh = 1;
            dy = 2;
            break;
          case 8:
            dh = 1;
            dy = 3;
            break;
        }
        let dx = state == 1 ? 0 : dh;
        let dz = state == 2 ? 0 : dh;
        let motionMul = 0.2;
        let data = new WispParticleData([0.1, 0.25], 0.125, 0.85, 0.125);
        this.region.addParticle(new WispParticleType(data), this.getPos().getX() + dx, this.getPos().getY() + dy, this.getPos().getZ() + dz, (Math.random() - 0.5) * motionMul, (Math.random() - 0.5) * motionMul, (Math.random() - 0.5) * motionMul);
    };
    TileAlfPortal.prototype.closeParticles = function (packetData) {
        for (let i = 0; i < 36; i++) {
            this.blockParticle(packetData.state);
        }
    };
    TileAlfPortal.prototype.onWanded = function (player, region, state, pos) {
        let state = this.getBlockState().data;
        if (state == 0) {
            let newState = this.getValidState();
            if (newState != 0) {
                this.region.setBlock(this.getPos(), this.getBlockState().id, newState);
                return true;
            }
        }
        return false;
    };
    TileAlfPortal.prototype.getPortalAABB = function () {
        let aabb = new AxisAlignedBB(this.pos.add(-1, 1, 0), this.pos.add(2, 4, 1));
        if (this.getBlockState().data == 1) {
            aabb = new AxisAlignedBB(this.pos.add(0, 1, -1), this.pos.add(1, 4, 2));
        }
        return aabb;
    };
    TileAlfPortal.prototype.addItem = function (stack) {
        this.stacksIn.push(stack.copy());
    };
    function elvenTradeRecipes() {
        return ModRecipes.getRecipes(ModRecipes.ELVEN_TRADE_TYPE);
    }
    TileAlfPortal.elvenTradeRecipes = elvenTradeRecipes;
    TileAlfPortal.prototype.resolveRecipes = function () {
        let pylons = this.locatePylons();
        let recipes = elvenTradeRecipes();
        for (let i in recipes) {
            let recipe = recipes[i];
            let match = recipe.match(this.stacksIn);
            if (match.length != 0) {
                if (this.consumeMana(pylons, 500, false)) {
                    for (let i in match) {
                        this.stacksIn.remove(match[i]);
                    }
                    let outputs = recipe.getOutputs(match);
                    for (let i in outputs) {
                        this.spawnItem(outputs[i].copy());
                    }
                }
                break;
            }
        }
    };
    TileAlfPortal.prototype.spawnItem = function (stack) {
        let item = this.region.dropItem(this.pos.getX() + 0.5, this.pos.getY() + 1.5, this.pos.getZ() + 0.5, stack);
        ItemNBTHelper.putBoolean(item.stack, TAG_PORTAL_FLAG, true);
        this.ticksSinceLastItem = 0;
    };
    TileAlfPortal.prototype.write = function (cmp) {
        let ret = _super.prototype.write.call(this, cmp);
        cmp[TAG_STACK_COUNT] = this.stacksIn.length;
        let i = 0;
        for (let j in this.stacksIn) {
            let stack = this.stackIn[j];
            cmp[TAG_STACK + i] = stack;
            i++;
        }
        return ret;
    };
    TileAlfPortal.prototype.read = function (state, cmp) {
        _super.prototype.read.call(this, state, cmp);
        let count = cmp[TAG_STACK_COUNT];
        this.stacksIn = [];
        for (let i = 0; i < count; i++) {
            let stack = new ItemStack(cmp[TAG_STACK + i]);
            this.stacksIn.push(stack);
        }
    };
    TileAlfPortal.prototype.getValidState = function () {
        let rot = MULTIBLOCK.getValue().validate(this.region, this.getPos());
        if (rot == null) {
            return 0;
        }
        this.lightPylons();
        switch (rot) {
          default:
          case Rotation.NONE:
          case Rotation.CLOCKWISE_180:
            return 2;
          case Rotation.CLOCKWISE_90:
          case Rotation.COUNTERCLOCKWISE_90:
            return 1;
        }
    };
    TileAlfPortal.prototype.locatePylons = function () {
        let range = 5;
        let pylonState = ModBlocks.naturaPylon;
        let that = this;
        return BlockPos.getAllInBox(this.getPos().add(-range, -range, -range), this.getPos().add(range, range, range)).filter(function (p) {
            return that.region.getBlock(p).id == pylonState.id && __instanceOf(that.region.getBlock(p.down()).getBlock(), BlockPool);
        });
    };
    TileAlfPortal.prototype.lightPylons = function () {
        if (this.ticksOpen < 50) {
            return;
        }
        let pylons = this.locatePylons();
        for (let i in pylons) {
            let pos = pylons[i];
            let tile = this.region.getTileEntity(pos);
            if (__instanceOf(tile, TilePylon)) {
                tile.activated = true;
                tile.centerPos = this.getPos();
            }
        }
        if (this.ticksOpen == 50) {
            this.consumeMana(pylons, 200000, true);
        }
    };
    TileAlfPortal.prototype.consumeMana = function (pylons, totalCost, close) {
        let consumePools = [];
        let consumed = 0;
        if (pylons.length < 2) {
            this.closeNow = true;
            return false;
        }
        let costPer = Math.max(1, totalCost / pylons.length);
        let expectedConsumption = costPer * pylons.length;
        for (let i in pylons) {
            let pos = pylons[i];
            let tile = this.region.getTileEntity(pos);
            if (__instanceOf(tile, TilePylon)) {
                tile.activated = true;
                tile.centerPos = this.getPos();
            }
            tile = this.region.getTileEntity(pos.down());
            if (__instanceOf(tile, TilePool)) {
                if (tile.getMana() < costPer) {
                    this.closeNow = this.closeNow || close;
                    return false;
                } else {
                    consumePools.push(tile);
                    consumed += costPer;
                }
            }
        }
        if (consumed >= expectedConsumption) {
            for (let i in consumePools) {
                let pool = consumePools[i];
                pool.addMana(-costPer);
            }
            return true;
        }
        return false;
    };
    TileAlfPortal.prototype.portalOpen = function () {
        this.networkData.putBoolean(TAG_PORTAL_OPEN, true);
        this.networkData.sendChanges();
    };
    TileAlfPortal.prototype.clientLoad = function () {
        this.anim = new Animation.Base(this.x + 0.5, this.y + 2.5, this.z + 0.5);
        this.anim.describe({mesh: MESH.getValue(), skin: "terrain-atlas/alfheim_portal.anim", material: "animated_alpha"});
        this.anim.load();
        if (this.getBlockState().data == 1) {
            this.anim.transform().lock().clear().rotate(0, Math.PI / 2, 0).unlock();
        }
    };
    TileAlfPortal.prototype.portalClose = function () {
        this.setAlpha(0);
        this.isOpen = false;
        this.ticksOpen = 0;
    };
    TileAlfPortal.prototype.clientTick = function () {
        this.isOpen = this.networkData.getBoolean(TAG_PORTAL_OPEN, false);
        if (this.isOpen) {
            this.ticksOpen++;
        }
        if (this.ticksOpen > 60 && ConfigHandler.CLIENT.elfPortalParticlesEnabled.get()) {
            this.blockParticle(this.getBlockState().data);
        }
        if (this.anim && !!this.anim.render) {
            let alpha = Math.min(1, (Math.sin(ClientTickHandler.ticksInGame / 8) + 1) / 7 + 0.6) * (Math.min(60, this.ticksOpen) / 60) * 0.5;
            this.setAlpha(alpha);
        }
    };
    TileAlfPortal.prototype.clientUnload = function () {
        this.portalClose();
        if (this.anim) {
            this.anim.destroy();
            this.anim = null;
        }
    };
    TileAlfPortal.prototype.setAlpha = function (alpha) {
        if (this.anim && this.anim.render) {
            this.anim.getShaderUniforms().setUniformValue("botania", "ALPHA", alpha);
        }
    };
    __decorate([BlockEngine.Decorators.ClientSide], TileAlfPortal.prototype, "setAlpha", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileAlfPortal.prototype, "closeParticles", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client), BlockEngine.Decorators.ClientSide], TileAlfPortal.prototype, "portalClose", null);
    __decorate([BlockEngine.Decorators.ClientSide], TileAlfPortal.prototype, "blockParticle", null);
    return TileAlfPortal;
}(TileMod));

