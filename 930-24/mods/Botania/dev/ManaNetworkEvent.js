let ManaNetworkEvent = (function () {
    function ManaNetworkEvent(tile, type, action) {
        this.tile = tile;
        this.type = type;
        this.action = action;
        return this;
    }
    function addCollector(tile) {
        ManaNetworkHandler.instance.onNetworkEvent(new ManaNetworkEvent(tile, ManaBlockType.COLLECTOR, Action.ADD));
    }
    ManaNetworkEvent.addCollector = addCollector;
    function removeCollector(tile) {
        ManaNetworkHandler.instance.onNetworkEvent(new ManaNetworkEvent(tile, ManaBlockType.COLLECTOR, Action.REMOVE));
    }
    ManaNetworkEvent.removeCollector = addCollector;
    function addPool(tile) {
        ManaNetworkHandler.instance.onNetworkEvent(new ManaNetworkEvent(tile, ManaBlockType.POOL, Action.ADD));
    }
    ManaNetworkEvent.addPool = addPool;
    function removePool(tile) {
        ManaNetworkHandler.instance.onNetworkEvent(new ManaNetworkEvent(tile, ManaBlockType.POOL, Action.REMOVE));
    }
    ManaNetworkEvent.removePool = removePool;
    let ManaBlockType = ManaNetworkEvent.ManaBlockType = (function () {
        __enum(ManaBlockType, "POOL");
        __enum(ManaBlockType, "COLLECTOR");
        function ManaBlockType() {
            return this;
        }
        return ManaBlockType;
    }());
    let Action = ManaNetworkEvent.Action = (function () {
        __enum(Action, "ADD");
        __enum(Action, "REMOVE");
        function Action() {
            return this;
        }
        return Action;
    }());
    return ManaNetworkEvent;
}());

