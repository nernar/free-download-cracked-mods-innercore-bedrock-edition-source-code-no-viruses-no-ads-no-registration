IDRegistry.genItemID("fuel_canister");
Item.createItem("fuel_canister", "Fuel Canister", {name: "Fuel_Canister_Partial", meta:6}, {stack: 1});
Translation.addTranslation("Clean Fuel Canister", {
ru: "Канистра с чистым топливом "
});
Item.registerNameOverrideFunction("fuel_canister", function(item, translation, name) {
    return Translation.translate("Clean Fuel Canister") + Translation.translate("\n§7Filled in : ") + item.data;
});
Translation.addTranslation("\n§7Filled in : ", {ru: "\n§7Заполненно: "});

Item.registerIconOverrideFunction("fuel_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "Fuel_Canister_Partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "Fuel_Canister_Partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "Fuel_Canister_Partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "Fuel_Canister_Partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "Fuel_Canister_Partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "Fuel_Canister_Partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );

	Item.setLiquidClip("fuel_canister", true);
	