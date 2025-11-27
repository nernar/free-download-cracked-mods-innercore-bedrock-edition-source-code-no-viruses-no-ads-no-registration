IDRegistry.genItemID("masut_canister");
Item.createItem("masut_canister", "Masut Canister", {name: "masut_canister_partial", meta:6}, {stack: 1});
Translation.addTranslation("Masut Canister", {
ru: "Канистра с мазутом "
});
Item.registerNameOverrideFunction("masut_canister", function(item, translation, name) {
    return Translation.translate("Masut Canister") + Translation.translate("\n§7Filled in : ") + item.data;
});
Translation.addTranslation("\n§7Filled in : ", {ru: "\n§7Заполненно: "});

Item.registerIconOverrideFunction("masut_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "masut_canister_partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "masut_canister_partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "masut_canister_partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "masut_canister_partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "masut_canister_partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "masut_canister_partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );