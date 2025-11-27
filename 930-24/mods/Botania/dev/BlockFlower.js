let BlockFlower = (function (_super) {
    __extends(BlockFlower, _super);
    __implements(BlockFlower, IGrowable);
    function BlockFlower(nameId, blockTypes) {
        _super.call(this, nameId, blockTypes) || this;
        this.PLACEABLE_TILES.push(BlockID.enchantedSoil);
        return this;
    }
    function effectForFlower(color) {
        switch (color.name) {
          case "WHITE":
            return EPotionEffect.SPEED;
          case "ORANGE":
            return EPotionEffect.FIRE_RESISTANCE;
          case "MAGENTA":
            return EPotionEffect.MINING_FATIGUE;
          case "LIGHT_BLUE":
            return EPotionEffect.JUMP_BOOST;
          case "YELLOW":
            return EPotionEffect.ABSORPTION;
          case "LIME":
            return EPotionEffect.POISON;
          case "PINK":
            return EPotionEffect.REGENERATION;
          case "GRAY":
            return EPotionEffect.RESISTANCE;
          case "LIGHT_GRAY":
            return EPotionEffect.WEAKNESS;
          case "CYAN":
            return EPotionEffect.WATER_BREATHING;
          case "PURPLE":
            return EPotionEffect.NAUSEA;
          case "BLUE":
            return EPotionEffect.NIGHT_VISION;
          case "BROWN":
            return EPotionEffect.WITHER;
          case "GREEN":
            return EPotionEffect.HUNGER;
          case "RED":
            return EPotionEffect.STRENGTH;
          case "BLACK":
            return EPotionEffect.BLINDNESS;
        }
        return EPotionEffect.REGENERATION;
    }
    BlockFlower.effectForFlower = effectForFlower;
    BlockFlower.prototype.onAnimateTick = function (pos, state) {
        let color = DyeColor.byId(state.data).getColorComponentValues();
        let offset = this.getOffset(pos);
        if (Math.random() < ConfigHandler.CLIENT.flowerParticleFrequency.get()) {
            let data = SparkleParticleData.sparkle([0, 1], color[0], color[1], color[2], null, 5);
            ParticleManager.particleEffect("fx_sparkle", {data: data, x: pos.x + offset.x + 0.3 + Math.random() * 0.5, y: pos.y + offset.y + 0.5 + Math.random() * 0.5, z: pos.z + offset.z + 0.3 + Math.random() * 0.5});
        }
    };
    BlockFlower.prototype.canGrow = function (region, pos, block) {
        return region.isAirBlock(pos.up());
    };
    BlockFlower.prototype.grow = function (region, pos, state) {
        ModBlocks.doubleFlower.placeAt(region, pos, state.data);
    };
    BlockFlower.prototype.getOffset = function (coords) {
        return new Vec3d(JSON.parse(BlockHelper.getModifyOffset(coords.x, coords.z)));
    };
    return BlockFlower;
}(BushBlock));

