block_drop = {};
droped = {};
function rnd(i, a) {
    return Math.floor(Math.random() * (a - i + 1)) + i;
}
function ib(a) {
    return a > 255 ? 255 - a : a;
}
function refresh_drop() {
    block_drop = {};
    FileTools.WriteJSON(__dir__ + "drop.json", block_drop, true);
    Game.message("\xa79\u6389\u843d\u7269\u5df2\u91cd\u7f6e");
}
try {
    block_drop = FileTools.ReadJSON(__dir__ + "drop.json");
}
catch (e) {
}
for (i in block_drop) {
    droped[block_drop[i].id + ":" + block_drop[i].data] = true;
}
Callback.addCallback("DestroyBlock", function (c, b, p) {
    if (b.id >= 2048) {
        return;
    }
    L_drop = Block.getBlockDropViaItem(b, Player.getCarriedItem(), c) || [[ib(b.id), 1, b.data]];
    L_drop.map(function (LD) {
        bb = {id: LD[0], data: LD[2]};
        if (!block_drop[bb.id + ":" + bb.data]) {
            while (true) {
                R_block = {id: rnd(1, 471)};
                if ((R_block.id > 384 || R_block.id < 267) && R_block.id !== 248 && R_block.id !== 249) {
                    R_block.data = rnd(0, Item.getMaxDamage(ib(R_block.id)));
                    if (!droped[R_block.id + ":" + R_block.data] && Item.isValid(ib(R_block.id), R_block.data)) {
                        droped[R_block.id + ":" + R_block.data] = true;
                        block_drop[bb.id + ":" + bb.data] = R_block;
                        FileTools.WriteJSON(__dir__ + "drop.json", block_drop, true);
                        break;
                    }
                }
            }
        }
        new java.lang.Thread(function () {
            java.lang.Thread.sleep(1);
            L_drop.map(function (ii) {
                var entity = Entity.getAllInRange(c, 3, 64);
                entity.map(function (i) {
                    var e_i = Entity.getDroppedItem(i);
                    if (e_i.id == ii[0] && e_i.data == ii[2] && ii[1] > 0) {
                        if (e_i.count <= ii[1]) {
                            Entity.remove(i);
                            ii[1] = ii[1] - e_i.count;
                        } else {
                            if (e_i.count > ii[1]) {
                                Entity.setDroppedItem(i, e_i.id, e_i.count - ii[1], e_i.data);
                                ii[1] = 0;
                            }
                        }
                    }
                });
            });
        }).start();
        r_block = block_drop[bb.id + ":" + bb.data];
        this.drop = Block.getBlockDropViaItem(r_block, {id: 278, data: 0}, c) || [];
        if (this.drop.length == 0) {
            this.drop = [[ib(r_block.id), 1, r_block.data]];
        }
        this.drop.map(function (i) {
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, i[0], i[1], i[2]);
        });
    });
});
Callback.addCallback("tick", function () {
    if (World.getThreadTime() == 10) {
        alert("\u6b22\u8fce\u4f7f\u7528random_drop(\u968f\u673a\u6389\u843d)\n\u60a8\u53ef\u4ee5\u8f93\u5165\u201c\n/refresh_drop\n\u201d\u4ee5\u91cd\u7f6e\u6389\u843d");
    }
    if (__config__.getBool("\u81ea\u52a8\u5237\u65b0")) {
        if ((World.getThreadTime() + 1) % (__config__.getNumber("\u5237\u65b0\u65f6\u95f4\uff08\u79d2\uff09") * 20) == 0) {
            refresh_drop();
        }
    }
});
Callback.addCallback("NativeCommand", function (str) {
    if (str == "/refresh_drop") {
        Game.prevent();
        refresh_drop();
    }
});

