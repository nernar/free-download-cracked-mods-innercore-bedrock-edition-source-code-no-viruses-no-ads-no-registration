let ItemTwigWand = (function (_super) {
    __extends(ItemTwigWand, _super);
    const TAG_BOUND_TILE_X = "boundTileX";
    const TAG_BOUND_TILE_Y = "boundTileY";
    const TAG_BOUND_TILE_Z = "boundTileZ";
    const TAG_BIND_MODE = "bindMode";
    const UNBOUND_POS = new BlockPos(0, -1, 0);
    function ItemTwigWand() {
        _super.apply(this, arguments);
        this.localizedBindMode = Translation.translate("botaniamisc.wandMode.bind");
        this.localizedFunctionMode = Translation.translate("botaniamisc.wandMode.function");
        return this;
    }
    ItemTwigWand.prototype.onIconOverride = function (stack, _) {
        return {name: this.icon.name + "_" + stack.data, meta: getBindMode(stack) ? 1 : 0};
    };
    ItemTwigWand.prototype.onNameOverride = function (item, _) {
        return this.localizedName + "\n\xa77" + (getBindMode(item) ? this.localizedBindMode : this.localizedFunctionMode);
    };
    ItemTwigWand.prototype.register = function () {
        drawTextures(this.icon.name);
        for (let i = 0; i < 16; i++) {
            let item = new ItemTwigWand(this.stringID + i, this.getParams(), this.name);
            item.localizedName = Translation.translate(this.name);
            item.setIcon(this.getIcon().name + "_" + i);
            item.createGroup("botaniamisc.item_group." + this.icon.name);
            ItemRegistry.registerItem(item);
            ToolHUD.setButtonFor(item.id, "twig_wand_change_mode_button");
        }
    };
    function valid(item) {
        return __instanceOf(ItemRegistry.getInstanceOf(item.id || item), ItemTwigWand);
    }
    ItemTwigWand.valid = valid;
    function getBindMode(stack) {
        return ItemNBTHelper.getBoolean(stack, TAG_BIND_MODE, true);
    }
    ItemTwigWand.getBindMode = getBindMode;
    function setBindMode(stack, bindMode) {
        ItemNBTHelper.setBoolean(stack, TAG_BIND_MODE, bindMode);
    }
    ItemTwigWand.setBindMode = setBindMode;
    function drawTextures(textureName) {
        let path = __dir__ + "/assets/raw-textures/" + textureName;
        let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
        let cvs = new android.graphics.Canvas(emptyBmp);
        let wandBmp = FileTools.ReadImage(path + ".png");
        let bottomBmp = FileTools.ReadImage(path + "_bottom.png");
        let topBmp = FileTools.ReadImage(path + "_top.png");
        let bindBmp = FileTools.ReadImage(path + "_bind.png");
        let emptyBmp1 = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
        let cvs1 = new android.graphics.Canvas(emptyBmp1);
        for (let i = 0; i < 16; i++) {
            let bmpTop = TextureWorker.changeBitmapColor(topBmp, DyeColor.byId(i).getColorComponentValues());
            for (let j = 0; j < 16; j++) {
                let resultPath = __dir__ + "/assets/items-opaque/" + textureName + "_" + i + "_" + j;
                if (!FileTools.isExists(resultPath + "_0.png")) {
                    let bmpBottom = TextureWorker.changeBitmapColor(bottomBmp, DyeColor.byId(j).getColorComponentValues());
                    cvs.drawBitmap(wandBmp, 0, 0, null);
                    cvs.drawBitmap(bmpBottom, 0, 0, null);
                    cvs.drawBitmap(bmpTop, 0, 0, null);
                    cvs1.drawBitmap(wandBmp, 0, 0, null);
                    cvs1.drawBitmap(bmpBottom, 0, 0, null);
                    cvs1.drawBitmap(bmpTop, 0, 0, null);
                    cvs1.drawBitmap(bindBmp, 0, 0, null);
                    FileTools.WriteImage(resultPath + "_1.png", emptyBmp1);
                    FileTools.WriteImage(resultPath + "_0.png", emptyBmp);
                }
            }
        }
    }
    ItemTwigWand.drawTextures = drawTextures;
    function tryCompleteBinding(src, coords, item, block, player, region) {
        if (!coords.equals(src)) {
            setBindingAttempt(item, UNBOUND_POS);
            let srcTile = region.getTileEntity(src);
            if (__instanceOf(srcTile, IWandBindable)) {
                if (srcTile.bindTo(player, item, coords, block)) {
                    doParticleBeamWithOffset(region, src, coords);
                    setBindingAttempt(item, UNBOUND_POS);
                }
                return true;
            }
        }
        return false;
    }
    ItemTwigWand.tryCompleteBinding = tryCompleteBinding;
    function tryFormEnchanter(coords, item, block, player, region) {
        let axis = TileEnchanter.canEnchanterExist(world, pos);
        return false;
    }
    ItemTwigWand.tryFormEnchanter = tryFormEnchanter;
    function tryCompletePistonRelayBinding(coords, item, block, player, region) {
        return false;
    }
    ItemTwigWand.tryCompletePistonRelayBinding = tryCompletePistonRelayBinding;
    ItemTwigWand.prototype.onItemUse = function (coords, item, state, player) {
        let block = state.getBlock();
        let region = WorldRegion.getForActor(player);
        let boundPos = getBindingAttempt(item);
        if (player == null) {
            return;
        }
        if (tryCompleteBinding(boundPos, coords, item, state, player, region)) {
            return;
        }
        if (state.id == VanillaBlockID.lapis_block && ConfigHandler.COMMON.enchanterEnabled.get() && tryFormEnchanter(coords, item, state, player, region)) {
            return;
        }
        if (__instanceOf(block, IWandable)) {
            let tile = region.getTileEntity(coords);
            let bindable = __instanceOf(tile, IWandBindable);
            if (getBindMode(item) && bindable && tile.canSelect(coords, item, state, player, region)) {
                if (boundPos.equals(coords)) {
                    setBindingAttempt(item, UNBOUND_POS);
                } else {
                    setBindingAttempt(item, coords);
                }
            } else {
                block.onUsedByWand(player, item, region, coords);
            }
            return;
        }
        if (getBindMode(item) && tryCompletePistonRelayBinding(coords, item, state, player, region)) {
            return;
        }
    };
    function rotateAround(old, axis) {
        switch (axis) {
          case Direction.Axis.X:
            switch (old) {
              case Direction.DOWN:
                return Direction.SOUTH;
              case Direction.SOUTH:
                return Direction.UP;
              case Direction.UP:
                return Direction.NORTH;
              case Direction.NORTH:
                return Direction.DOWN;
            }
            break;
          case Direction.AxisY:
            switch (old) {
              case Direction.NORTH:
                return Direction.EAST;
              case Direction.EAST:
                return Direction.SOUTH;
              case Direction.SOUTH:
                return Direction.WEST;
              case Direction.WEST:
                return Direction.NORTH;
            }
            break;
          case Direction.Axis.Z:
            switch (old) {
              case Direction.DOWN:
                return Direction.WEST;
              case Direction.WEST:
                return Direction.UP;
              case Direction.UP:
                return Direction.EAST;
              case Direction.EAST:
                return Direction.DOWN;
            }
            break;
        }
        return old;
    }
    ItemTwigWand.rotateAround = rotateAround;
    function doParticleBeamWithOffset(region, orig, end) {
        let origOffset = BlockPos.ORIGIN;
        let block = region.getBlock(orig).getBlock();
        if (__instanceOf(block, BlockBase)) {
            origOffset = block.getOffset(orig);
        }
        let vorig = new Vec3d(orig.getX() + origOffset.getX() + 0.5, orig.getY() + origOffset.getY() + 0.5, orig.getZ() + origOffset.getZ() + 0.5);
        let endOffset = BlockPos.ORIGIN;
        block = region.getBlock(end).getBlock();
        if (__instanceOf(block, BlockBase)) {
            origOffset = block.getOffset(end);
        }
        let vend = new Vec3d(end.getX() + endOffset.getX() + 0.5, end.getY() + endOffset.getY() + 0.5, end.getZ() + endOffset.getZ() + 0.5);
        doParticleBeam(region, vorig, vend);
    }
    ItemTwigWand.doParticleBeamWithOffset = doParticleBeamWithOffset;
    function doParticleBeam(region, orig, end) {
        region.particleEffect("twig_wand.do_particle_beam", {orig: orig.toJSON(), end: end.toJSON()});
    }
    ItemTwigWand.doParticleBeam = doParticleBeam;
    function setBindingAttempt(stack, pos) {
        ItemNBTHelper.setInt(stack, TAG_BOUND_TILE_X, pos.x);
        ItemNBTHelper.setInt(stack, TAG_BOUND_TILE_Y, pos.y);
        ItemNBTHelper.setInt(stack, TAG_BOUND_TILE_Z, pos.z);
    }
    ItemTwigWand.setBindingAttempt = setBindingAttempt;
    function getBindingAttempt(stack) {
        let x = ItemNBTHelper.getInt(stack, TAG_BOUND_TILE_X, 0);
        let y = ItemNBTHelper.getInt(stack, TAG_BOUND_TILE_Y, -1);
        let z = ItemNBTHelper.getInt(stack, TAG_BOUND_TILE_Z, 0);
        return y < 0 ? new BlockPos(UNBOUND_POS) : new BlockPos(x, y, z);
    }
    ItemTwigWand.getBindingAttempt = getBindingAttempt;
    ItemTwigWand.TAG_BIND_MODE = TAG_BIND_MODE;
    return ItemTwigWand;
}(ItemMod));
let ToolHUD;
(function (ToolHUD) {
    Callback.addCallback("NativeGuiChanged", function (screenName) {
        ToolHUD.currentUIscreen = screenName;
        if (screenName != "in_game_play_screen" && ToolHUD.container) {
            ToolHUD.container.close();
        }
    });
    let buttonScale = 55;
    let isEnabled = false;
    ToolHUD.container = null;
    ToolHUD.Window = new UI.Window({location: {x: 1000 - buttonScale, y: UI.getScreenHeight() / 2 - buttonScale * 2, width: buttonScale, height: buttonScale * 5}, drawing: [{type: "background", color: 0}], elements: {}});
    ToolHUD.Window.setAsGameOverlay(true);
    let buttonMap = {};
    ToolHUD.buttons = {};
    function registerButton(button) {
        ToolHUD.buttons[button.name] = button;
        buttonMap[button.name] = false;
    }
    ToolHUD.registerButton = registerButton;
    function getButton(name) {
        return ToolHUD.buttons[name];
    }
    ToolHUD.getButton = getButton;
    function setButtonFor(id, name) {
        getButton(name).bindItem(id);
    }
    ToolHUD.setButtonFor = setButtonFor;
    function setArmorButton(id, name) {
        setButtonFor(id, name);
    }
    ToolHUD.setArmorButton = setArmorButton;
    function onClick(name) {
        Network.sendToServer("botania.clickHUDButton", {name: name});
    }
    ToolHUD.onClick = onClick;
    function updateUIbuttons() {
        let elements = ToolHUD.Window.getContent().elements;
        for (let name in buttonMap) {
            if (buttonMap[name]) {
                let button = getButton(name);
                if (!elements[name]) {
                    elements[name] = button.uiElement;
                }
                button.onUpdate(button.uiElement);
                buttonMap[name] = false;
            } else {
                elements[name] = null;
            }
        }
    }
    function onUpdate() {
        let item = Player.getCarriedItem();
        if (ToolHUD.currentUIscreen == "in_game_play_screen") {
            for (let name in ToolHUD.buttons) {
                let button = ToolHUD.buttons[name];
                if (button.isBindedItem(item.id)) {
                    buttonMap[name] = true;
                    isEnabled = true;
                }
            }
            if (isEnabled) {
                if (!ToolHUD.container || !ToolHUD.container.isOpened()) {
                    ToolHUD.container = new UI.Container();
                    ToolHUD.container.openAs(ToolHUD.Window);
                }
                updateUIbuttons();
            } else {
                if (ToolHUD.container === null || ToolHUD.container === void 0 ? void 0 : ToolHUD.container.isOpened()) {
                    ToolHUD.container.close();
                }
            }
        } else {
            if (ToolHUD.container) {
                ToolHUD.container.close();
                ToolHUD.container = null;
            }
        }
        isEnabled = false;
    }
    Callback.addCallback("LocalTick", onUpdate);
    Network.addServerPacket("botania.clickHUDButton", function (client, data) {
        let player = new PlayerEntity(client.getPlayerUid());
        getButton(data.name).onClick(player);
    });
    let AbstractButton = (function () {
        function AbstractButton(name, type, uiData) {
            let _this = this;
            this.name = name;
            this.type = type;
            this.uiData = uiData;
            this.bindedItems = [];
            this.uiElement = __assign(__assign({type: "button", x: 0, y: uiData.position * 1000}, uiData), {clicker: {onClick: function () {
                ToolHUD.onClick(_this.name);
            }}});
        }
        AbstractButton.prototype.bindItem = function (id) {
            this.bindedItems.push(id);
        };
        AbstractButton.prototype.isBindedItem = function (id) {
            return this.bindedItems.indexOf(id) != -1;
        };
        AbstractButton.prototype.onClick = function (player) {
        };
        AbstractButton.prototype.onUpdate = function (element) {
        };
        return AbstractButton;
    }());
    ToolHUD.AbstractButton = AbstractButton;
    let TwigWandChangeModeButton = (function (_super) {
        __extends(TwigWandChangeModeButton, _super);
        function TwigWandChangeModeButton() {
            _super.call(this, "twig_wand_change_mode_button", "tool", {position: 1, bitmap: "change_wand_mode_button_off_0", bitmap2: "change_wand_mode_button_on_0", scale: 42});
            return this;
        }
        TwigWandChangeModeButton.prototype.onUpdate = function (element) {
            if (ItemTwigWand.getBindMode(Player.getCarriedItem())) {
                element.bitmap = "change_wand_mode_button_off_0";
                element.bitmap2 = "change_wand_mode_button_on_0";
            } else {
                element.bitmap = "change_wand_mode_button_off_1";
                element.bitmap2 = "change_wand_mode_button_on_1";
            }
        };
        TwigWandChangeModeButton.prototype.onClick = function (player) {
            let stack = player.getCarriedItem();
            ItemTwigWand.setBindMode(stack, !ItemTwigWand.getBindMode(stack), player);
        };
        return TwigWandChangeModeButton;
    }(ToolHUD.AbstractButton));
    ToolHUD.TwigWandChangeModeButton = TwigWandChangeModeButton;
    ToolHUD.registerButton(new ToolHUD.TwigWandChangeModeButton());
})(ToolHUD || (ToolHUD = {}));

