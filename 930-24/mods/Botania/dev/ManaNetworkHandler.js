let ManaNetworkHandler = (function () {
    __implements(ManaNetworkHandler, IManaNetwork);
    function ManaNetworkHandler() {
        this.manaPools = {};
        this.manaCollectors = {};
        return this;
    }
    ManaNetworkHandler.prototype.onNetworkEvent = function (event) {
        let map = event.type == ManaNetworkEvent.ManaBlockType.COLLECTOR ? this.manaCollectors : this.manaPools;
        if (event.action == ManaNetworkEvent.Action.ADD) {
            this.add(map, event.tile);
        } else {
            this.remove(map, event.tile);
        }
    };
    ManaNetworkHandler.prototype.clear = function () {
        this.manaPools = {};
        this.manaCollectors = {};
    };
    ManaNetworkHandler.prototype.getClosestPool = function (pos, world, limit) {
        if (this.manaPools[world]) {
            return this.getClosest(this.manaPools[world], pos, limit);
        }
        return null;
    };
    ManaNetworkHandler.prototype.getClosestCollector = function (pos, world, limit) {
        if (this.manaCollectors[world]) {
            return this.getClosest(this.manaCollectors[world], pos, limit);
        }
        return null;
    };
    ManaNetworkHandler.prototype.isCollectorIn = function (tile) {
        return this.isIn(tile, this.manaCollectors);
    };
    ManaNetworkHandler.prototype.isPoolIn = function (tile) {
        return this.isIn(tile, this.manaPools);
    };
    ManaNetworkHandler.prototype.isIn = function (tile, map) {
        let arr = map[tile.region];
        return arr != null && !!~arr.indexOf(tile);
    };
    ManaNetworkHandler.prototype.getClosest = function (tiles, pos, limit) {
        let minDist = Number.MAX_VALUE;
        let closest = null;
        for (let i in tiles) {
            let te = tiles[i];
            if (!te.isRemoved()) {
                let distance = MathHelper.distSqr(te.getPos(), pos);
                if (distance <= limit * limit && distance < minDist) {
                    minDist = distance;
                    closest = te;
                }
            }
        }
        return closest;
    };
    ManaNetworkHandler.prototype.remove = function (map, tile) {
        let region = tile.region;
        if (!map[region]) {
            return;
        }
        map[region].remove(tile);
    };
    ManaNetworkHandler.prototype.add = function (map, tile) {
        let region = tile.region;
        let arr = map[region];
        if (!arr) {
            arr = map[region] = [];
        }
        arr.push(tile);
    };
    ManaNetworkHandler.prototype.getAllCollectorsInWorld = function (world) {
        return this.getAllInWorld(this.manaCollectors, world);
    };
    ManaNetworkHandler.prototype.getAllPoolsInWorld = function (world) {
        return this.getAllInWorld(this.manaPools, world);
    };
    ManaNetworkHandler.prototype.getAllInWorld = function (map, world) {
        let ret = map[world];
        return ret || [];
    };
    ManaNetworkHandler.instance = new ManaNetworkHandler();
    return ManaNetworkHandler;
}());

