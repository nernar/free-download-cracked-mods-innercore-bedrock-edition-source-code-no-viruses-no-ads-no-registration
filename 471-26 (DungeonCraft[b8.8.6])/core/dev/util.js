function StrikerRandom(rndDef, plusRnd) {
    plusRnd = plusRnd || rndDef;
    let random = rndDef;
    this.canRandom = function () {
        let res = Math.random() <= random;
        if (!res) {
            random += plusRnd;
        } else {
            random = rndDef;
        }
        return res;
    };
}
function isPlayer(mob) {
    return Network.getConnectedPlayers().indexOf(mob) != -1;
}

