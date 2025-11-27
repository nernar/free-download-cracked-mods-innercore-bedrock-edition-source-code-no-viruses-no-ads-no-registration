LIBRARY({
    name: "RegionGuard",
    version: 1,
    shared: true,
    api: "CoreEngine"
});
;
var Region = /** @class */ (function () {
    function Region(region) {
        this.region = region;
        this.uuid = String(region.uuid);
        this.name = String(region.name);
        this.startX = Number(region.startX);
        this.startZ = Number(region.startZ);
        this.endX = Number(region.endX);
        this.endZ = Number(region.endZ);
        this.owner = String(region.owner);
        for (var i = 0; i < region.flags.size(); i++)
            this.flags.push(region.flags.get(i));
        for (var i = 0; i < region.users.size(); i++)
            this.users.push(region.users.get(i));
        this.dimension = Number(region.dimension);
    }
    Region.prototype.canMember = function(player) {
        return this.region.canMember(player);
    }
    return Region;
}());
var RegionGuard;
(function (RegionGuard) {
    var manager = null;
    var instance = null;
    function getRegion(x, z, dimension) {
        if (manager) {
            try {
                return new Region(manager.getRegion(x, z, dimension));
            }
            catch (ignore) { }
        }
        return null;
    }
    RegionGuard.getRegion = getRegion;
    function getRegions(owner) {
        if (owner === void 0) { owner = null; }
        if (manager) {
            var regions = [];
            var javaRegions = manager.getRegions(owner);
            for (var i = 0; i < javaRegions.size(); i++)
                regions.push(javaRegions.get(i));
            return regions;
        }
        return [];
    }
    RegionGuard.getRegions = getRegions;
    function canMember(player, x, z) {
        var region = getRegion(x, z, Entity.getDimension(player));
        if (region) {
            return region.canMember(player);
        }
        return true;
    }
    RegionGuard.canMember = canMember;
    Callback.addCallback("PluginEnable", function(plugin) {
        if(plugin.getName().equals("RegionGuard")) {
            instance = WRAP_JAVA("com.reider745.regionguard.MainRegionGuard").getInstance();
            manager = instance.getRegionManager();
        }
    });
})(RegionGuard || (RegionGuard = {}));
EXPORT("RegionGuard", RegionGuard);
