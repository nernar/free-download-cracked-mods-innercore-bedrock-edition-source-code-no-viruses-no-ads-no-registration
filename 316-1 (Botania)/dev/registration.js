var manaGenerators = [];
var manaStorages = [];
var funcFlowers = [];
function addGenerator(id) {
    manaGenerators[id] = true;
}
function addStorage(id) {
    Callback.addCallback("PostLoaded", function () {
        manaStorages.push(id);
    });
}
function isGenerator(id) {
    return manaGenerators[id];
}
function isStorage(id) {
    for (var i = 0; i < manaStorages.lenght; i++) {
        if (manaStorages[i] == id) {
            return true;
        }
    }
    return false;
}

