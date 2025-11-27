var pureRecipes = [];
function addPureRecipe(input, output) {
    pureRecipes[input] = output;
}
addApothecaryRecipe([{id: ItemID.petalWhite}, {id: ItemID.petalWhite}, {id: ItemID.petalWhite}, {id: ItemID.petalWhite}], ItemID.puredaisy, 1, 0);
createFlower("puredaisy", {en: "Pure Daisy", ru: "\u0427\u0438\u0441\u0442\u0430\u044f \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u043a\u0430"});
var puredaisy_gui = new UI.StandartWindow({standart: {header: {text: {text: "Puredaisy"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [], elements: {"text": {type: "text", x: 300, y: 172, width: 350, height: 30, text: "10000"}}});
TileEntity.registerPrototype(BlockID.puredaisy, {defaultValues: {progress: [0, 0, 0, 0, 0, 0, 0, 0, 0], number: 0}, getGuiScreen: function () {
    return puredaisy_gui;
}, initAnimation: function () {
    this.animation1 = new Animation.Item(this.x + 0.5, this.y + 0.4, this.z + 0.5);
    this.animation2 = new Animation.Item(this.x + 0.5, this.y + 0.4, this.z + 0.5);
    this.animation1.describeItem({id: ItemID.puredaisy, count: 1, data: 0, rotation: "x", size: 0.8});
    this.animation1.load();
}, destroyAnimation: function () {
    if (this.animation1) {
        this.animation1.destroy();
    }
    if (this.animation2) {
        this.animation2.destroy();
    }
}, updateAnimation: function () {
    this.destroyAnimation();
    this.initAnimation();
}, init: function () {
    this.initAnimation();
}, destroy: function () {
    this.destroyAnimation();
    World.destroyBlock(this.x, this.y, this.z, false);
}, tick: function () {
    if (World.getWorldTime() % 20 == 0) {
        this.puring(0, 0);
        this.puring(1, 0);
        this.puring(2, 0);
        this.puring(0, 1);
        this.puring(2, 1);
        this.puring(0, 2);
        this.puring(1, 2);
        this.puring(2, 2);
    }
    if (!this.animation1) {
        this.initAnimation;
    }
    if (!this.animation2) {
        this.initAnimation;
    }
    if (World.getBlockID(this.x, this.y - 1, this.z) == 0) {
        this.destroy();
    }
}, click: function (id, count, data, coords) {
}, puring: function (xx, zz) {
    this.data.number = (xx) * 3 + zz;
    if (pureRecipes[World.getBlock(this.x + xx - 1, this.y, this.z + zz - 1).id]) {
        this.data.progress[this.data.number]++;
        if (this.data.progress[this.data.number] > 10) {
            World.setBlock(this.x + xx - 1, this.y, this.z + zz - 1, pureRecipes[World.getBlock(this.x + xx - 1, this.y, this.z + zz - 1).id], 0);
            this.data.progress[this.data.number] = 0;
        }
    } else {
        this.data.progress[this.data.number] = 0;
    }
}});

