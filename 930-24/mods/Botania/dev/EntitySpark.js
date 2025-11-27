let EntitySpark = (function (_super) {
    __extends(EntitySpark, _super);
    __implements(EntitySpark, ISparkEntity);
    const TRANSFER_RATE = 1000;
    const TAG_UPGRADE = "upgrade";
    const TAG_NETWORK = "network";
    function EntitySpark(region) {
        _super.call(this, region);
        this.transfers = [];
        this.removeTransferant = 2;
        this.upgrade = 0;
        this.network = 0;
        return this;
    }
    EntitySpark.prototype.onTick = function () {
        _super.prototype.onTick.call(this);
        let tile = this.getAttachedTile();
        if (tile == null) {
            this.dropAndKill();
            return;
        }
        let upgrade = this.getUpgrade();
        let transfers = this.getTransfers();
        switch (upgrade) {
          case SparkUpgradeType.DISPERSIVE:
            let players = SparkHelper.getEntitiesAround(Player.isPlayer, this.region, this.getPosX(), this.getPosY(), this.getPosZ());
            let receivingPlayers = {};
            let input = new ItemStack(ModItems.spark);
            for (let i in players) {
                let player = new PlayerEntity(players[i]);
                let inventory = player.inventory;
                let stacks = inventory.mainInventory.concat(inventory.armorInventory);
                for (let j in stacks) {
                    let stack = stacks[j];
                    if (stack.isEmpty() || !__instanceOf(stack.getItemInstance(), IManaItem)) {
                        continue;
                    }
                    let manaItem = stack.getItemInstance();
                    if (manaItem.canReceiveManaFromItem(stack, input)) {
                        let receivingStacks;
                        let add = false;
                        if (!receivingPlayers.containsKey(players[i])) {
                            add = true;
                            receivingStacks = {};
                        } else {
                            receivingStacks = receivingPlayers[players[i]];
                        }
                        let recv = Math.min(this.getAttachedTile().getMana(), Math.min(TRANSFER_RATE, manaItem.getMaxMana(stack) - manaItem.getMana(stack)));
                        if (recv > 0) {
                            receivingStacks[stack] = [recv, j];
                            if (add) {
                                receivingPlayers[players[i]] = receivingStacks;
                            }
                        }
                    }
                }
            }
            if (Object.keys(receivingPlayers).length) {
                let keys = Object.keys(receivingPlayers);
                shuffle(keys);
                let player = keys[0];
                let items = receivingPlayers[player];
                let stack = Object.keys(items)[0];
                let cost = items[stack][0];
                let slot = items[stack][1];
                let manaToPut = Math.min(this.getAttachedTile().getMana(), cost);
                stack.getItemInstance().addMana(stack, manaToPut);
                this.getAttachedTile().addMana(-manaToPut);
                stack.getItemInstance().updateStack(player, stack, slot);
                this.particlesTowards(player);
            }
            break;
          case SparkUpgradeType.DOMINANT:
            let validSparks = SparkHelper.getSparksAround(this.region, this.getPosX(), this.getPosY(), this.getPosZ(), this.getNetwork()).filter(function (s) {
                let otherUpgrade = s.getUpgrade();
                return s != this && otherUpgrade == SparkUpgradeType.NONE && __instanceOf(s.getAttachedTile(), IManaPool);
            });
            if (validSparks.length) {
                validSparks[Math.round(Math.random() * (validSparks.length - 1))].registerTransfer(this);
            }
            break;
          case SparkUpgradeType.RECESSIVE:
            let arr = SparkHelper.getSparksAround(this.region, this.getPosX(), this.getPosY(), this.getPosZ(), this.getNetwork()).filter(function (s) {
                let otherUpgrade = s.getUpgrade();
                return s != this && otherUpgrade != SparkUpgradeType.DOMINANT && otherUpgrade != SparkUpgradeType.RECESSIVE && otherUpgrade != SparkUpgradeType.ISOLATED;
            });
            for (let i in arr) {
                this.transfers.push(arr[i]);
            }
            break;
          default:
            break;
        }
        if (transfers.length) {
            let manaTotal = Math.min(TRANSFER_RATE * this.transfers.length, tile.getMana());
            let count = this.transfers.length;
            let manaSpent = 0;
            if (manaTotal > 0) {
                for (let i in this.transfers) {
                    let spark = this.transfers[i];
                    count--;
                    if (!spark || spark.getAttachedTile() == null || spark.getAttachedTile().isFull() || spark.areIncomingTransfersDone()) {
                        continue;
                    }
                    let attached = spark.getAttachedTile();
                    let spend = Math.min(attached.getAvailableSpaceForMana(), (manaTotal - manaSpent) / (count + 1));
                    attached.addMana(spend);
                    manaSpent += spend;
                    this.particlesTowards(spark);
                }
                tile.addMana(-manaSpent);
            }
        }
        if (this.removeTransferants > 0) {
            this.removeTransferants--;
        }
        this.filterTransfers();
    };
    EntitySpark.prototype.getAttachedTile = function () {
        let tile = this.region.getTileEntity(new BlockPos(this.pos).down());
        if (__instanceOf(tile, ISparkAttachable)) {
            return tile;
        }
        return null;
    };
    EntitySpark.prototype.dropAndKill = function () {
        let upgrade = this.getUpgrade();
        this.entityDropItem(new ItemStack(ModItems.spark));
        if (upgrade != SparkUpgradeType.NONE) {
            this.entityDropItem(ItemSparkUpgrade.getByType(upgrade));
        }
        this.kill();
    };
    EntitySpark.prototype.getUpgrade = function () {
        return SparkUpgradeType.values()[this.upgrade];
    };
    EntitySpark.prototype.setUpgrade = function (type) {
        this.upgrade = type.ordinal();
    };
    EntitySpark.prototype.getNetwork = function () {
        return DyeColor.byId(this.network);
    };
    EntitySpark.prototype.setNetwork = function (color) {
        this.network = color.getId();
        this.networkData.putInt(TAG_NETWORK, this.network);
        this.networkData.sendChanges();
    };
    EntitySpark.prototype.filterTransfers = function () {
        for (let i in this.transfers) {
            let spark = this.transfers[i];
            if (!spark) {
                this.transfers.splice(i, 1);
                continue;
            }
            let upgr = this.getUpgrade();
            let supgr = spark.getUpgrade();
            let atile = spark.getAttachedTile();
            if (spark == this || !spark.isAlive() || spark.areIncomingTransfersDone() || this.getNetwork() != spark.getNetwork() || atile == null || atile.isFull() || !(upgr == SparkUpgradeType.NONE && supgr == SparkUpgradeType.DOMINANT || upgr == SparkUpgradeType.RECESSIVE && (supgr == SparkUpgradeType.NONE || supgr == SparkUpgradeType.DISPERSIVE) || !__instanceOf(atile, IManaPool))) {
                this.transfers.splice(i, 1);
            }
        }
    };
    EntitySpark.prototype.getTransfers = function () {
        this.filterTransfers();
        return this.transfers;
    };
    EntitySpark.prototype.getShape = function () {
        return new AxisAlignedBB(-0.1, -0.25, -0.1, 0.1, 0.25, 0.1);
    };
    EntitySpark.prototype.hasTransfer = function (entity) {
        return !!~this.transfers.indexOf(entity);
    };
    EntitySpark.prototype.registerTransfer = function (entity) {
        if (this.hasTransfer(entity)) {
            return;
        }
        this.transfers.push(entity);
    };
    EntitySpark.prototype.areIncomingTransfersDone = function () {
        let tile = this.getAttachedTile();
        if (__instanceOf(tile, IManaPool)) {
            return this.removeTransferants > 0;
        }
        return tile != null && tile.areIncomingTranfersDone();
    };
    EntitySpark.prototype.onInteract = function (intersectPoint, stack, player) {
        if (this.isAlive() && !stack.isEmpty()) {
            let upgrade = this.getUpgrade();
            if (ItemTwigWand.valid(stack)) {
                if (player.getSneaking()) {
                    if (upgrade != SparkUpgradeType.NONE) {
                        this.entityDropItem(ItemSparkUpgrade.getByType(upgrade));
                        this.setUpgrade(SparkUpgradeType.NONE);
                        this.transfers = [];
                        this.removeTransferants = 2;
                    } else {
                        this.dropAndKill();
                    }
                } else {
                    SparkHelper.getSparksAround(this.region, this.getX(), this.getY(), this.getZ(), this.getNetwork()).forEach(function (s) {
                        this.particleBeam(player, this, s);
                    }, this);
                }
            } else {
                if (stack.getItem() instanceof ItemSparkUpgrade && upgrade == SparkUpgradeType.NONE) {
                    this.setUpgrade(stack.getItem().type);
                    stack.decrease();
                } else {
                    if (stack.getItem() == ModItems.phantomInk) {
                    } else {
                        if (DyeColor.COLOR_BY_ITEM[stack.getId()] || stack.getItem() == ModItems.flowerPollen) {
                            let color = DyeColor.COLOR_BY_ITEM[stack.getId()] || DyeColor.byId(stack.getData());
                            if (color != this.getNetwork()) {
                                this.setNetwork(color);
                                stack.decrease();
                            }
                        }
                    }
                }
            }
        }
    };
    EntitySpark.prototype.clientTick = function () {
        if (World.getThreadTime() % 13 == 0) {
            let network = this.networkData.getInt(TAG_NETWORK, 0);
            let particle = ModParticles.SparkEntity[network];
            ParticleManager.addParticle(particle, this.x, this.y, this.z);
        }
    };
    EntitySpark.prototype.particlesTowards = function (e) {
        BotaniaParticleEffect({type: EBotaniaParticleEffect.SPARK_MANA_FLOW, dimension: this.region.getDimension(), coords: this.getPos(), coords2: e.getPos(), color: this.getNetwork().getColorValue()});
    };
    EntitySpark.prototype.particleBeam = function (player, e1, e2) {
    };
    EntitySpark.prototype.read = function (data) {
        _super.prototype.read.call(this, data);
        this.setNetwork(DyeColor.byId(data[TAG_NETWORK]));
        this.setUpgrade(SparkUpgradeType.values()[data[TAG_UPGRADE]]);
    };
    EntitySpark.prototype.write = function (data) {
        _super.prototype.write.call(this, data);
        data[TAG_NETWORK] = this.getNetwork().getId();
        data[TAG_UPGRADE] = this.getUpgrade().ordinal();
    };
    return EntitySpark;
}(TickableEntity));

