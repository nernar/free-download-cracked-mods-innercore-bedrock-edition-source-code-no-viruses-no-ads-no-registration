const RemoteMod = function (obj) {
    if (obj !== undefined) {
        this.fromJSON(obj);
    }
};
RemoteMod.prototype.id = -1;
RemoteMod.prototype.icon = null;
RemoteMod.prototype.title = null;
RemoteMod.prototype.description = null;
RemoteMod.prototype.optimized = false;
RemoteMod.prototype.version = null;
RemoteMod.prototype.updated = null;
RemoteMod.prototype.premium = false;
RemoteMod.prototype.pack = false;
RemoteMod.prototype.likes = -1;
RemoteMod.prototype.dislikes = -1;
RemoteMod.prototype.fromJSON = function (obj) {
    if (!obj) {
        return;
    }
    this.id = obj.id;
    this.icon = obj.icon;
    this.title = obj.title;
    this.description = obj.description;
    this.optimized = !!obj.horizon_optimized;
    this.version = obj.version_name;
    this.updated = obj.last_update;
    this.premium = !!obj.vip;
    this.pack = !!obj.pack;
    this.likes = obj.likes;
    this.dislikes = obj.dislikes;
};
RemoteMod.fetchList = function (list) {
    if (!Array.isArray(list)) {
        return null;
    }
    let mods = new Array();
    for (let i = 0; i < list.length; i++) {
        mods.push(new RemoteMod(list[i]));
    }
    return mods;
};

