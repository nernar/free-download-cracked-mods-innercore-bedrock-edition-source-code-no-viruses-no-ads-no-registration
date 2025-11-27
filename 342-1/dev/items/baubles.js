IMPORT ("BaublesAPI", "Baubles");
	
	IDRegistry.genItemID("valkiriaring");
Item.createItem("valkiriaring", "Кольцо Валькирии", {name: "valkiriaring", meta: 0}, {stack: 3});

Baubles.registerBauble({
    id: ItemID.valkiriaring, //Айди предмета
    type: "ring", //Тип (amulet, ring, belt, head, body или charm)
    onEquip: function () {
        //Вызывается при экипировке указанного предмета в соответствующий слот и при входе в мир, если предмет одет
    },

    onTakeOff: function () {
        //Вызывается, когда игрок снимет предмет или при его смерти
    },
    
    tick: function () {
    	Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
        //Вызывается каждый тик, если указанный предмет одет
    }
});

Recipes.addShaped({id: ItemID.valkiriaring, count: 1, data: 0}, [ " a ", "a a", " a "], ['a', ItemID.aeroliteingot, 0]);








