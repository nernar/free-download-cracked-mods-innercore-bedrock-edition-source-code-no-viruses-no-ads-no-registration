IDRegistry.genBlockID("machineAltar");
Block.createBlock("machineAltar", [{
    name: "Altar", texture: [
        ["altar_top", 0],
        ["altar_top", 0],
        ["altar_side", 0],
        ["altar_side", 0],
        ["altar_side", 0],
        ["altar_side", 0]
    ], inCreative: true
}], "opaque");

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineAltar, count: 1, data: 0 }, [
        "bbb",
        "aca",
        "aaa"
    ], ['a', 331, 0, 'b', 4, 0, 'c', 58, 0]);
});

TileEntity.registerPrototype(BlockID.machineAltar, {
    defaultValues: {
        currentRitual: null
    },
    click: function (id, count, data) {
        Game.prevent();
        if (this.data.currentRitual) {
            var ritualClick = Ritual.valueList[this.data.currentRitual].click || function () { };
            var ritualCheck = Ritual.valueList[this.data.currentRitual].check || function () { };
            if (ritualCheck(this)) {
                ritualClick(id, count, data, this);
            }
        }
        else {
            for (var i in Ritual.valueList) {
                var testForRitual = Ritual.valueList[i];
                var testResult = testForRitual.activate(id, count, data, this);
                if (testResult && data + 50 <= Item.getMaxDamage(id)) {
                    this.data.currentRitual = i;
                    Player.setCarriedItem(id, count, data + 50);
                }
            }
        }
    },
    tick: function () {
        if (this.data.currentRitual) {
            var ritualTick = Ritual.valueList[this.data.currentRitual].tick || function () { };
            var ritualCheck = Ritual.valueList[this.data.currentRitual].check || function () { };
            if (ritualCheck(this)) {
                ritualTick(this);
            }
        }
    }
});