/*IDRegistry.genItemID("potionAw"); 
Item.createFoodItem("potionAw", "potion", {name: "potion", meta: 0}, {stack: 1, food: 0});
Translation.addTranslation("potion", {ru: "зелье"});

Item.registerNameOverrideFunction(ItemID.potionAw, function(item, name, translation) {
    let extra = item.extra || new ItemExtraData();
    let arr = Potion.potions["p"+(extra.getInt("pot", -1))] || [];
    for(let i in arr){
        name = name + "\n " + Item.getName(arr[i].id) + " * " + arr[i].count;
    }
    return name;
});

let Potion = {
    items: {},
    potions: {},
    potion: {},
    setPrototype: function(obj){
        obj.type = obj.type || "update";
        obj.setFunction = obj.setFunction || function(p){};
        this.items[obj.id] = obj;
    },
    getPrototype: function(id){
        if(id) 
            return this.items[id];
    }
};

Callback.addCallback("FoodEaten", function(food, ratio, player){
    let item = Entity.getCarriedItem(player);
    let extra = item.extra || new ItemExtraData();
    if(item.id == ItemID.potionAw){
        let arr = Potion.potions["p"+(extra.getInt("pot", -1))] || [];
        for(let i in arr){
            let obj = arr[i];
            let packet = {
                arr: arr,
                item: item,
                extra: extra,
                i: parseInt(i),
                level: 1,
                time: 10,
                player: player,
                x3: false,
                custom: {},
                get: function(name, value){
                    return this.custom[name] || value;
                },
                set: function(name, value){
                    this.custom[name] = value;
                }
            };
             Potion.items[obj.id].setFunction(packet);
        }
    }
});
Potion.setPrototype({
    id: 264,
    setFunction: function(packet){
        
    }
});*/