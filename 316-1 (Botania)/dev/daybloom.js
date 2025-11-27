createFlower("daybloom", {en: "Daybloom", ru: "\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u0426\u0432\u0435\u0442\u043e\u043a"});
addGenerator(BlockID.daybloom);
addApothecaryRecipe([{id: ItemID.petalYellow}, {id: ItemID.petalYellow}, {id: ItemID.petalLightBlue}, {id: ItemID.petalOrange}], ItemID.daybloom, 1, 0);
var guiBatBox = new UI.StandartWindow({standart: {header: {text: {text: "Daybloom"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [], elements: {"text": {type: "text", x: 300, y: 172, width: 350, height: 30, text: "10000"}}});
makeFlower("daybloom", {defaultValues: {progress: 0, live: 0, curMana: 0, maxMana: 10, multiplier: 1, checkLight: 1, checkDay: 1}, tick: function () {
    if (World.getBlock(this.x + 1, this.y, this.z).id == BlockID.daybloom || World.getBlock(this.x - 1, this.y, this.z).id == BlockID.daybloom || World.getBlock(this.x, this.y, this.z + 1).id == BlockID.daybloom || World.getBlock(this.x, this.y, this.z - 1).id == BlockID.daybloom) {
        this.data.multiplier = 0.5;
    } else {
        this.data.multiplier = 1;
    }
    this.data.checkLight = 1;
    if (World.getWorldTime() % 24000 < 12000) {
        this.data.checkDay = 1;
    } else {
        this.data.checkDay = 0;
    }
    if (this.data.checkDay * this.data.checkLight != 0 && this.data.curMana < 10) {
        this.data.progress++;
    }
    if (this.data.progress > 200 / this.data.multiplier && this.data.curMana < 10) {
        this.data.curMana++;
        this.data.progress = 0;
    }
    this.container.setText("text", "Mana: " + this.data.curMana + "/10    Progress: " + this.data.progress + "/200" + "   Check: " + World.getWorldTime() + " " + this.data.checkDay + " sky: " + World.canSeeSky(this.x, this.y + 1, this.z) + "     Mult: " + this.data.multiplier);
    if (!this.animation1) {
        this.initAnimation;
    }
    if (!this.animation2) {
        this.initAnimation;
    }
    if (World.getBlockID(this.x, this.y - 1, this.z) == 0) {
        this.destroy();
    }
}, click: function () {
}}, guiBatBox);

