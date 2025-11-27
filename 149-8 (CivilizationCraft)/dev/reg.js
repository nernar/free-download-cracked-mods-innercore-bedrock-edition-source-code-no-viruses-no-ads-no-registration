var KineticMachine = {machineIDs: [], registerPrototype: function (id, prot) {
    ICRender.getGroup("axle").add(id, -1);
    prot.isMachine = true;
    Block.setDestroyTime(id, 3);
    this.machineIDs.push(id);
    TileEntity.registerPrototype(id, prot);
}};

