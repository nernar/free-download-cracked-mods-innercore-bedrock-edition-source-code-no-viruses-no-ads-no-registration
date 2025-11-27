IDRegistry.genBlockID("tofucraft_soymilk_hell_liquid");
Block.createLiquidBlock("tofucraft_soymilk_hell_liquid",
{
    name: "soymilk hell",
    tickDelay: 3,
    still: {
        texture: ["soymilk_hell", 0]
    },
    flowing: {
        texture: ["soymilk_hell", 0]
    },
    bucket: {
        texture: {
            name: "bucketSoymilkHell",
            meta: 0
        }
    },
    inCreative: __config__.getBool("debug"),
    isRenewable: false,
    modelTextures: "soymilk_hell",
    uiTextures: "soymilk_hell"
},
{
    renderlayer: 1
});