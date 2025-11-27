let BurstProperties = (function () {
    function BurstProperties(maxMana, ticksBeforeManaLoss, manaLossPerTick, gravity, motionModifier, color) {
        this.maxMana = maxMana;
        this.ticksBeforeManaLoss = ticksBeforeManaLoss;
        this.manaLossPerTick = manaLossPerTick;
        this.gravity = gravity;
        this.motionModifier = motionModifier;
        this.color = color;
        return this;
    }
    return BurstProperties;
}());

