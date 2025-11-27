const MachineRecipe = {crusher: [], smelter: {}, sliceAndSlice: {}, theVat: {}, soulBinder: {}, addCrusher: function (src, res) {
    this.crusher.push({id: src.id, data: src.data, time: src.time, result0: {id: res[0][0], data: res[0][1], chance: res[0][2]}, result1: {id: res[1][0], data: res[1][1], chance: res[1][2]}, result2: {id: res[2][0], data: res[2][1], chance: res[2][2]}, result3: {id: res[3][0], data: res[3][1], chance: res[3][2]}});
}, getCrusher: function (id, data) {
    for (key in this.crusher) {
        if (this.crusher[key].id == id && this.crusher[key].data == data) {
            return this.crusher[key];
        }
    }
}, addSmelter: function (src, result) {
    this.smelter[src[0] + ":" + src[1] + ":" + src[2]] = {id: result.id, count: result.count, data: result.data, time: result.time};
}, getSmelter: function (src1, src2, src3) {
    return this.smelter[src1 + ":" + src2 + ":" + src3];
}, addSliceAndSpliceRecipe: function (src, result) {
    this.sliceAndSlice[src[0] + ":" + src[1] + ":" + src[2] + ":" + src[3] + ":" + src[4] + ":" + src[5]] = {id: result.id, data: result.data};
}, getSliceAndSpliceRecipe: function (src) {
    return this.sliceAndSlice[src[0] + ":" + src[1] + ":" + src[2] + ":" + src[3] + ":" + src[4] + ":" + src[5]];
}, addVatRecipe: function (src, result) {
    this.theVat[src[0][0] + ":" + src[0][1] + ":" + src[1][0] + ":" + src[1][1]] = {liquid: result.liquid, usedLiquid: result.usedLiquid};
}, getVatRecipe: function (src0, src1, src2, src3) {
    return this.theVat[src0 + ":" + src1 + ":" + src2 + ":" + src3];
}, addSoulBinderRecipe: function (src, result) {
    this.soulBinder[src[0] + ":" + src[1]] = {result: result.id, second: result.second};
}, getSoulBinderRecipe: function (src) {
    return this.soulBinder[src[0] + ":" + src[1]];
}};

