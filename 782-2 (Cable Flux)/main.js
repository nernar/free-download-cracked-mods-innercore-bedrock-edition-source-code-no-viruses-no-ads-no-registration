IMPORT("EnergyNet");

const RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);
const group = ICRender.getGroup("rf-wire");

const transfer = [
    __config__.getNumber("transfer.first").intValue(),
    __config__.getNumber("transfer.second").intValue(),
    __config__.getNumber("transfer.last").intValue()
];


Item.addCreativeGroup("cableflux", "Cable Flux", [
    IDRegistry.genBlockID("cableflux_first"),
    IDRegistry.genBlockID("cableflux_second"),
    IDRegistry.genBlockID("cableflux_last")
]);

Block.createBlock("cableflux_first", [{name: "First Cable\n§b" + transfer[0] + " RF/t", texture: [["cableflux_first", 0]], inCreative: true}]);
Block.createBlock("cableflux_second", [{name: "Second Cable\n§b" + transfer[1] + " RF/t", texture: [["cableflux_second", 0]], inCreative: true}]);
Block.createBlock("cableflux_last", [{name: "The Last Cable\n§b" + transfer[2] + " RF/t", texture: [["cableflux_last", 0]], inCreative: true}]);

RF.registerWire(BlockID.cableflux_first, transfer[0]);
RF.registerWire(BlockID.cableflux_second, transfer[1]);
RF.registerWire(BlockID.cableflux_last, transfer[2]);

Recipes.addShaped({id: BlockID.cableflux_first, count: 6}, ["aaa", "bbb", "aaa"], ["a", VanillaBlockID.glass, -1, "b", VanillaItemID.redstone, -1]);
Recipes.addShaped({id: BlockID.cableflux_second, count: 6}, ["aaa", "bbb", "aaa"], ["a", VanillaItemID.iron_ingot, -1, "b", VanillaItemID.redstone, -1]);
Recipes.addShaped({id: BlockID.cableflux_last, count: 2}, ["aaa", "bcb", "aaa"], ["a", VanillaBlockID.diamond_block, -1, "b", VanillaItemID.glowstone_dust, -1, "c", VanillaItemID.ender_eye, -1]);

setCableModel(BlockID.cableflux_first, "cableflux_first");
setCableModel(BlockID.cableflux_second, "cableflux_second");
setCableModel(BlockID.cableflux_last, "cableflux_last");


function setCableModel(id, texName){

    const render = new ICRender.Model();
    const shape = new ICRender.CollisionShape();
    const icon = new ICRender.Model();

    const connect = [
        {box: [11/32,  0/32, 11/32, 21/32, 11/32, 21/32], tex: [["empty", 0], ["empty", 0], [texName, 1]], condition: ICRender.BLOCK(0, -1, 0, group, false)},
        {box: [11/32, 21/32, 11/32, 21/32, 32/32, 21/32], tex: [["empty", 0], ["empty", 0], [texName, 1]], condition: ICRender.BLOCK(0, 1, 0, group, false)},
        {box: [11/32, 11/32,  0/32, 21/32, 21/32, 11/32], tex: [[texName, 1], [texName, 1], ["empty", 0], ["empty", 0], [texName, 2], [texName, 2]], condition: ICRender.BLOCK(0, 0, -1, group, false)},
        {box: [11/32, 11/32, 21/32, 21/32, 21/32, 32/32], tex: [[texName, 1], [texName, 1], ["empty", 0], ["empty", 0], [texName, 2], [texName, 2]], condition: ICRender.BLOCK(0, 0, 1, group, false)},
        {box: [ 0/32, 11/32, 11/32, 11/32, 21/32, 21/32], tex: [[texName, 2], [texName, 2], [texName, 2], [texName, 2], ["empty", 0], ["empty", 0]], condition: ICRender.BLOCK(-1, 0, 0, group, false)},
        {box: [21/32, 11/32, 11/32, 32/32, 21/32, 21/32], tex: [[texName, 2], [texName, 2], [texName, 2], [texName, 2], ["empty", 0], ["empty", 0]], condition: ICRender.BLOCK(1, 0, 0, group, false)}
    ];

    connect.forEach(function(data){
        const model = BlockRenderer.createTexturedBox(data.box[0], data.box[1], data.box[2], data.box[3], data.box[4], data.box[5], data.tex);
        render.addEntry(model).setCondition(data.condition);
        const entry = shape.addEntry();
        entry.addBox(data.box[0], data.box[1], data.box[2], data.box[3], data.box[4], data.box[5]);
        entry.setCondition(data.condition);
    });

    const centerDU = BlockRenderer.createTexturedBox(11/32, 11/32, 11/32, 21/32, 21/32, 21/32, connect[0].tex);
    const centerNS = BlockRenderer.createTexturedBox(11/32, 11/32, 11/32, 21/32, 21/32, 21/32, connect[2].tex);
    const centerWE = BlockRenderer.createTexturedBox(11/32, 11/32, 11/32, 21/32, 21/32, 21/32, connect[4].tex);
    const centerBox = BlockRenderer.createTexturedBox(5/16, 5/16, 5/16, 11/16, 11/16, 11/16, [[texName, 0]]);

    const D = connect[0].condition;
    const U = connect[1].condition;
    const N = connect[2].condition;
    const S = connect[3].condition;
    const W = connect[4].condition;
    const E = connect[5].condition;

    const onlyDU = ICRender.AND(D, U, ICRender.NOT(N), ICRender.NOT(S), ICRender.NOT(W), ICRender.NOT(E));
    const onlyNS = ICRender.AND(ICRender.NOT(D), ICRender.NOT(U), N, S, ICRender.NOT(W), ICRender.NOT(E));
    const onlyWE = ICRender.AND(ICRender.NOT(D), ICRender.NOT(U), ICRender.NOT(N), ICRender.NOT(S), W, E);

    render.addEntry(centerDU).setCondition(onlyDU);
    render.addEntry(centerNS).setCondition(onlyNS);
    render.addEntry(centerWE).setCondition(onlyWE);
    render.addEntry(centerBox).setCondition(ICRender.AND(ICRender.NOT(onlyDU), ICRender.NOT(onlyNS), ICRender.NOT(onlyWE)));

    shape.addEntry().addBox(11/32, 11/32, 11/32, 21/32, 21/32, 21/32);

    icon.addEntry(BlockRenderer.createTexturedBox(connect[0].box[0], connect[0].box[1], connect[0].box[2], connect[0].box[3], connect[0].box[4], connect[0].box[5], connect[0].tex));
    icon.addEntry(BlockRenderer.createTexturedBox(connect[1].box[0], connect[1].box[1], connect[1].box[2], connect[1].box[3], connect[1].box[4], connect[1].box[5], connect[1].tex));
    icon.addEntry(centerBox);

    BlockRenderer.setStaticICRender(id, -1, render);
    BlockRenderer.setCustomCollisionShape(id, -1, shape);
    ItemModel.getFor(id, -1).setModel(icon);
    Block.setShape(id, 5/16, 5/16, 5/16, 11/16, 11/16, 11/16);
    group.add(id, -1);

}