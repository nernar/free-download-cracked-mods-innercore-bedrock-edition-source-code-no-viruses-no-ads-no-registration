IMPORT("BlockEngine", "*");
IMPORT("EnchantmentLib", "*");
IMPORT("TileRender", "*");

var TCAPI = {
    registerBasicItem: function(name, stack) {
        IDRegistry.genItemID("tofucraft_" + name);
        Item.createItem("tofucraft_" + name, name, {
            name: name
        }, {
            isTech: false,
            stack: stack
        });
    },
    onValueChanged: function(namespace, value, func) {
        if (!this.namespace.value) {
            this.namespace.value = func;
        };
        if (this.namespace.value != namespace) {
            func();
        };
    }
};

var tcFoodAPI = {

};

var tcMachineAPI = {
    baseRegister: function(id, data, textureArray1, textureArray2, tileEntityParams) {
        TileRenderer.setStandardModel(id, -1, textureArray1);
        TileRenderer.registerModelWithRotation(id, 0, textureArray1);
        TileRenderer.registerModelWithRotation(id, 4, textureArray2);
        TileRenderer.setRotationPlaceFunction(id);
        tileEntityParams.defaultValues.meta = 0;
        TileEntity.registerPrototype(id, tileEntityParams);
    }
};

var tcDimensionAPI = {

};

var tcPlantAPI = {

};

var tcToolAPI = {
    defaultfacter: 1,
    EnchantTypes: {}
};

var tcEntityAPI = {

};

var tcTofuBlockAPI = {

};