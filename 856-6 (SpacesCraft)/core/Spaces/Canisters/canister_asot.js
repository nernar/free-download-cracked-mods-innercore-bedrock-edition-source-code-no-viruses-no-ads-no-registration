IDRegistry.genItemID("asot_canister");
Item.createItem("asot_canister", "Asot Canister", {name: "canister_partial_In2", meta:6}, {stack: 1});
Translation.addTranslation("Asot Canister", {
ru: "Канистра с жидким азотом "
});
Item.registerNameOverrideFunction("asot_canister", function(item, translation, name) {
    return Translation.translate("Asot Canister") + Translation.translate("\n§7Filled with gas : ") + item.data;
});
Translation.addTranslation("\n§7Filled with gas : ", {ru: "\n§7Наполненно жидким газом: "});

Item.registerIconOverrideFunction("asot_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "canister_partial_In2", meta:6};
        } if (item.data == 5 ) {
            return {name: "canister_partial_In2", meta:5};
        } if (item.data == 4 ) {
            return {name: "canister_partial_In2", meta:4};
        } if (item.data == 3 ) { 
            return {name: "canister_partial_In2", meta:3};
        } if (item.data == 2 ) { 
            return {name: "canister_partial_In2" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "canister_partial_In2", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );