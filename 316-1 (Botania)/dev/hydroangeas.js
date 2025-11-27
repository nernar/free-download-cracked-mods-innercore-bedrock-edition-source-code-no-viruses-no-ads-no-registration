createFlower("hydroangeas", {en: "Hydroangeas", ru: "\u0412\u043e\u0434\u043e\u0433\u043e\u0440\u0442\u0435\u043d\u0437\u0438\u044f"});
addGenerator(BlockID.hydroangeas);
addApothecaryRecipe([{id: ItemID.petalBlue}, {id: ItemID.petalBlue}, {id: ItemID.petalCyan}, {id: ItemID.petalCyan}], ItemID.hydroangeas, 1, 0);
var guiHydr = new UI.StandartWindow({standart: {header: {text: {text: "Hydroangeas"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [], elements: {"text": {type: "text", x: 300, y: 172, width: 350, height: 30, text: "10000"}}});
makeFlower("hydroangeas", {defaultValues: {progress: 0, live: 0, curMana: 0, maxMana: 10}, tick: function () {
    if (this.data.progress == 0) {
        if (World.getBlock(this.x + 1, this.y, this.z + 1).id == 8 || World.getBlock(this.x + 1, this.y, this.z + 1).id == 9) {
            this.data.progress = 150;
            this.data.curMana++;
            World.setBlock(this.x + 1, this.y, this.z + 1, 0);
        } else {
            if (World.getBlock(this.x + 1, this.y, this.z - 1).id == 8 || World.getBlock(this.x + 1, this.y, this.z - 1).id == 9) {
                this.data.progress = 150;
                this.data.curMana++;
                World.setBlock(this.x + 1, this.y, this.z - 1, 0);
            } else {
                if (World.getBlock(this.x - 1, this.y, this.z + 1).id == 8 || World.getBlock(this.x - 1, this.y, this.z + 1).id == 9) {
                    this.data.progress = 150;
                    this.data.curMana++;
                    World.setBlock(this.x - 1, this.y, this.z + 1, 0);
                } else {
                    if (World.getBlock(this.x - 1, this.y, this.z - 1).id == 8 || World.getBlock(this.x - 1, this.y, this.z - 1).id == 9) {
                        this.data.progress = 150;
                        this.data.curMana++;
                        World.setBlock(this.x - 1, this.y, this.z - 1, 0);
                    }
                }
            }
        }
    }
    if (this.data.progress > 0 && this.data.curMana < this.data.maxMana) {
        this.data.progress--;
    }
    this.container.setText("text", "Mana: " + this.data.curMana + "/10    Progress: " + this.data.progress + "/150");
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
}}, guiHydr);

