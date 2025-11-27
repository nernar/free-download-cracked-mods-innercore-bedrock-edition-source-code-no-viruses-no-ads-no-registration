IDRegistry.genItemID("iceDust");
Item.createItem("iceDust", "Ice Dust", {name: "dust_ice"}, {});
ModAPI.requireAPI("ICore", function () {
    MachineRecipeRegistry.addRecipeFor("macreator", 80, ItemID.iceDust);
});

