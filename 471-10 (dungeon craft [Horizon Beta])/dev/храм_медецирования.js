var structure = FileTools.ReadJSON(__dir__ + "/json/structure.json");
var generateItems5 = [];
var Structure5 = {addItems: function (id, random, count, data) {
    random = random || 1;
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    data = data || 0;
    generateItems5.push({id: id, data: data, random: random, count: count});
}};
Structure5.addItems(264, 0.3, {max: 3});
Structure5.addItems(266, 0.5, {max: 5});
Structure5.addItems(265, 0.4, {max: 10});
Structure5.addItems(372, 0.1, {max: 5});
Structure5.addItems(384, 0.1, {max: 11});
Structure5.addItems(399, 0.01, {max: 1});
Structure5.addItems(ItemID.glas, 0.4, {max: 1});
Structure5.addItems(ItemID.magis_book, 1, {max: 1});
function fillChest5(x, y, z) {
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for (var i in generateItems5) {
        if (random < generateItems5[i].random) {
            var count = Math.floor(Math.random() * (generateItems5[i].count.max - generateItems5[i].count.min)) + generateItems5[i].count.min;
            container.setSlot(slot, generateItems5[i].id, count, generateItems5[i].data);
            slot++;
        }
    }
}

