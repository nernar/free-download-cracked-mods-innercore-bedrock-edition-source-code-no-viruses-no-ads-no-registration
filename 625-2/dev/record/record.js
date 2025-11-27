IDRegistry.genItemID(PREFIX + "record_empty");
Item.createItem(PREFIX + "record_empty", "Empty Record", {name:"nc_record_empty"}, {inTech: true,stack: 64});
Translation.addTranslation("Empty Record", {zh: "空唱片"});

IDRegistry.genItemID(PREFIX + "record_broken");
Item.createItem(PREFIX + "record_broken", "Broken Record", {name:"nc_record_broken"}, {inTech: true,stack: 64});
Translation.addTranslation("Broken Record", {zh: "损坏的唱片"});

NC.recordList = {};
NC.recordArr = [];
NC.createRecord = function(id,name,src){
    IDRegistry.genItemID(PREFIX + "record_" + id);
    Item.createItem(PREFIX + "record_"+id, name, {name:"nc_record_custom"}, {inTech: true,stack: 64});
    this.recordList[ItemID[PREFIX + "record_"+id]] = {
        id : id,
        src : src,
        name : name
    };
    this.recordArr[this.recordArr.length] = ItemID[PREFIX + "record_"+id];
};
NC.createRecord("sea","The Sea","TheSea.mp3");
NC.createRecord("seasons_of_asia","Seasons of Asia","seasons_of_asia.mp3");
NC.createRecord("myyy","Meng Yu Ye Ying","myyy.mp3");
NC.createRecord("faded","Faded","faded.mp3");
NC.createRecord("tothemoon","To the Moon","ToTheMoon.mp3");
NC.createRecord("GhostWarrior","Ghost Warrior","GhostWarrior.mp3");
Translation.addTranslation("Meng Yu Ye Ying", {zh: "夢と葉桜"});
