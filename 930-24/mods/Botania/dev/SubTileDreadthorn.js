let SubTileDreadthorn = (function (_super) {
    __extends(SubTileDreadthorn, _super);
    function SubTileDreadthorn() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileDreadthorn.prototype.getColor = function () {
        return 2493253;
    };
    SubTileDreadthorn.prototype.getSelector = function (entity) {
        return ActorHelper.hasCategory(entity, 16);
    };
    SubTileDreadthorn.prototype.getManaCost = function () {
        return 30;
    };
    return SubTileDreadthorn;
}(SubTileBellethorn));

