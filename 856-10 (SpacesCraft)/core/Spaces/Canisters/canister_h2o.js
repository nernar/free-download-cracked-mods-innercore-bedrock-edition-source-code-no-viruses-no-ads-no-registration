IDRegistry.genItemID("h2o_canister"); 
Item.createItem("h2o_canister", "h2o Canister", {name: "canister_partial_lox", meta: 6}, {stack: 1});
Translation.addTranslation("h2o Canister", {
ru: "Канистра с H2O  "
});

Item.registerNameOverrideFunction("h2o_canister", function(item, translation, name) {
    return Translation.translate("h2o Canister") + Translation.translate("\n§7Filled with gas : ") + item.data;
});
Translation.addTranslation("\n§7Filled with gas : ", {ru: "\n§7Наполненно жидким газом: "});

Item.registerIconOverrideFunction("h2o_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "canister_partial_lox", meta:6};
        } if (item.data == 5 ) {
            return {name: "canister_partial_lox", meta:5};
        } if (item.data == 4 ) {
            return {name: "canister_partial_lox", meta:4};
        } if (item.data == 3 ) { 
            return {name: "canister_partial_lox", meta:3};
        } if (item.data == 2 ) { 
            return {name: "canister_partial_lox" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "canister_partial_lox", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );