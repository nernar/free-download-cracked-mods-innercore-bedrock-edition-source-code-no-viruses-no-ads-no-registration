IDRegistry.genItemID("methane_canister");
Item.createItem("methane_canister", "Methane Canister", {name: "methane_canister_partial", meta:6}, {stack: 1});
Translation.addTranslation("Methane Canister", {
ru: "Канистра с метаном"
});
Item.registerNameOverrideFunction("methane_canister", function(item, translation, name) {
    return Translation.translate("Methane Canister") + Translation.translate("\n§7Filled with gas: ") + item.data;
});
Translation.addTranslation("\n§7Filled with gas: ", {ru: "\n§7Наполненно газом: "});

Item.registerIconOverrideFunction("methane_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "methane_canister_partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "methane_canister_partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "methane_canister_partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "methane_canister_partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "methane_canister_partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "methane_canister_partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
});
