IDRegistry.genItemID("rubber_canister"); 
Item.createItem("rubber_canister", "Rubber Canister", {name: "rubber_canister_partial", meta: 6}, {stack: 1});
Translation.addTranslation("Rubber Canister", {
ru: "Канистра с каучуком "
});

Item.registerNameOverrideFunction("rubber_canister", function(item, translation, name) {
    return Translation.translate("Rubber Canister") + Translation.translate("\n§7Filled in : ") + item.data;
});
Translation.addTranslation("\n§7Filled in : ", {ru: "\n§7Заполненно: "});

Item.registerIconOverrideFunction("rubber_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "rubber_canister_partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "rubber_canister_partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "rubber_canister_partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "rubber_canister_partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "rubber_canister_partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "rubber_canister_partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );