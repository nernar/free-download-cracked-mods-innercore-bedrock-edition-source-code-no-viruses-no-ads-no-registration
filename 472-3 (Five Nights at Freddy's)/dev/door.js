const doorRender = new Render({skin: "entity/door.png"});
doorRender.setPart("body", [{type: "box", coords: {x: 8, y: 24, z: -8}, size: {x: 4, y: 32, z: 16}, uv: {x: 0, y: 0}}], {});
var doorTick = [-1, -1];
const openDoor = function (side) {
    if (doorTick[side] == -1) {
        Office.door(side);
        var animation = new Animation.Base(side == 0 ? 50 : 44, 6, 8);
        animation.describe({render: doorRender.getId()});
        animation.loadCustom(function () {
            if (Office.active[side + 2] == -1) {
                return this.destroy();
            }
            doorTick[side] == 0 && this.destroy();
            this.setPos(this.coords.x, this.coords.y + 0.2, this.coords.z);
            doorTick[side]--;
            this.refresh();
        });
        doorTick[side] = 10;
    }
};
const closeDoor = function (side) {
    if (doorTick[side] == -1) {
        var animation = new Animation.Base(side == 0 ? 50 : 44, 8, 8);
        animation.describe({render: doorRender.getId()});
        animation.loadCustom(function () {
            if (Office.active[side + 2] == -1) {
                return this.destroy();
            }
            doorTick[side] == 0 && (this.destroy(), Office.door(side));
            this.setPos(this.coords.x, this.coords.y - 0.2, this.coords.z);
            doorTick[side]--;
            this.refresh();
        });
        doorTick[side] = 10;
    }
};
const switchDoor = function (side) {
    if (Office.active[side + 2]) {
        openDoor(side);
    } else {
        closeDoor(side);
    }
};

