OresAPI.registerItem("Oresmatter", "Matter", {name: "mattery"}, {ru: "Материя"}, {}, [defaultItemNameOverride("e", "item"), false]);
OresAPI.registerItem("rebuiltMatter", "Rebuilt Matter", {name: "mattery", data: 1}, {ru: "Реконструированная Материя"}, {stack: 1, isTech: true, glint: true}, [{
    colorName: "5",
    prefix:{
        standart: true,
        itemType: "item"
    },
    other:function(item, name){
        if(item.extra){
            return "§7item: "+ Translation.translate(Item.getName(item.extra.getInt("id")))/*+ " data: "+ item.extra.getInt("data")*/;
        }
    }
}, true]);