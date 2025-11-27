LIBRARY({name: "ModelKooker", version: Math.round(106 * 117 * 110 * 103 / 107 / 111 / 111 / 107), shared: true, api: "CoreEngine"});
let LevelDisplayedQueue = {actions: [], isDisplayed: false, run: function (action, thisArg) {
    if (this.isDisplayed) {
        action.apply(thisArg || this, []);
    } else {
        this.actions.push([action, thisArg]);
    }
}};
Callback.addCallback("LevelDisplayed", function () {
    let actions = LevelDisplayedQueue.actions;
    LevelDisplayedQueue.isDisplayed = true;
    while (actions.length > 0) {
        let action = actions.shift();
        action[0].apply(action[1] || {}, []);
    }
});
Callback.addCallback("LevelLeft", function () {
    LevelDisplayedQueue.isDisplayed = false;
});
Translation.addTranslation("model_kooker.process", {ru: "\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043d\u044f\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f", en: "Model optimization. It can take some time", ko: "\ubaa8\ub378 \ucd5c\uc801\ud654. \uc2dc\uac04\uc774 \uc880 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4"});
void function (ModelKooker) {
    const ignoredIds = [];
    const crossTexturedRenderTypes = [1];
    ModelKooker["\u2665kook\u2665"] = function (id, data) {
        if (typeof id == "object" && !(id instanceof java.lang.Integer)) {
            data = id.data, id = id.id;
        }
        id = Number(id);
        data = data || 0;
        if (typeof id == "number" && !isNaN(id)) {
            if (Network.inRemoteWorld()) {
                reconstructItemMesh(id, data);
            } else {
                Network.sendToAllClients("model_kooker.kook", {id: id, data: data});
            }
        } else {
            throw new Error("invalid id argument. id: " + id);
        }
    };
    function reconstructItemMesh(id, data) {
        if (!!~ignoredIds.indexOf(id)) {
            return;
        }
        LevelDisplayedQueue.run(function () {
            ignoredIds.push(id);
            if (IDRegistry.getIdInfo(id).split(":")[0] == "block" && !~crossTexturedRenderTypes.indexOf(Block.getRenderType(id))) {
                return;
            }
            let itemModel = ItemModel.getFor(id, data);
            if (!itemModel) {
                return Logger.Log("cannot find itemModel with id: " + id + ", data: " + data, "MODELKOOKER");
            }
            if (itemModel.overridesHand()) {
                return;
            }
            let bmp = itemModel.getIconBitmap();
            if (!bmp) {
                return Logger.Log("item mesh hasn't texture, id: " + id + ", data: " + data, "MODELKOOKER");
            }
            let height = bmp.getHeight();
            let width = bmp.getWidth();
            if ((height * width) > 4096) {
                return Logger.Log("item mesh texture is biggest, id: " + id + ", data: " + data, "MODELKOOKER");
            }
            alert(Translation.translate("model_kooker.process"));
            let mesh = itemModel.getItemRenderMesh(1, false);
            mesh.clear();
            deepReconstructItemMeshFaces(mesh, bmp, 0, 0, height, width);
            reconstructItemMeshFrame(mesh, bmp);
            mesh.invalidate();
            itemModel.setHandModel(mesh, itemModel.getMeshTextureName());
            itemModel.setSpriteHandRender(true);
            itemModel.setSpriteUiRender(true);
        });
    }
    function reconstructItemMeshFrame(mesh, bmp) {
        let scaleX = 1 / bmp.getWidth();
        let scaleY = 1 / bmp.getHeight();
        for (let x = 0; x < bmp.getWidth() - 1; x++) {
            for (let y = 0; y < bmp.getHeight() - 1; y++) {
                let transpanent = transparent(bmp, x, y) == 0;
                if (transpanent == (transparent(bmp, x + 1, y) > 0)) {
                    addRectToMesh(mesh, (x + 1) * scaleX, y * scaleY, 0, 0.0625, 0, 0.0625, x > bmp.getWidth() / 2, (x + (transpanent ? 1 : 0)) * scaleX, y * scaleY);
                }
                if (transpanent == (transparent(bmp, x, y + 1) > 0)) {
                    addRectToMesh(mesh, x * scaleX, (y + 1) * scaleY, 0.0625, 0, 0, 0.0625, y > bmp.getHeight() / 2, x * scaleX, (y + (transpanent ? 1 : 0)) * scaleY);
                }
            }
        }
    }
    function deepReconstructItemMeshFaces(mesh, bmp, x1, y1, x2, y2) {
        let scaleX = 1 / bmp.getWidth();
        let scaleY = 1 / bmp.getHeight();
        let canDevide = x2 - x1 > 1 && y2 - y1 > 1;
        if (!chunkHasTransparent(bmp, x1, y1, x2, y2)) {
            addTwoRectToMesh(mesh, x1 * scaleX, y1 * scaleY, (x2 - x1) * scaleX, (y2 - y1) * scaleY);
        } else {
            if (canDevide) {
                if (!chunkIsTransparent(bmp, x1, y1, (x1 + x2) / 2, (y1 + y2) / 2)) {
                    deepReconstructItemMeshFaces(mesh, bmp, x1, y1, (x1 + x2) / 2, (y1 + y2) / 2);
                }
                if (!chunkIsTransparent(bmp, (x1 + x2) / 2, y1, x2, (y1 + y2) / 2)) {
                    deepReconstructItemMeshFaces(mesh, bmp, (x1 + x2) / 2, y1, x2, (y1 + y2) / 2);
                }
                if (!chunkIsTransparent(bmp, x1, (y1 + y2) / 2, (x1 + x2) / 2, y2)) {
                    deepReconstructItemMeshFaces(mesh, bmp, x1, (y1 + y2) / 2, (x1 + x2) / 2, y2);
                }
                if (!chunkIsTransparent(bmp, (x1 + x2) / 2, (y1 + y2) / 2, x2, y2)) {
                    deepReconstructItemMeshFaces(mesh, bmp, (x1 + x2) / 2, (y1 + y2) / 2, x2, y2);
                }
            }
        }
    }
    function chunkHasTransparent(bmp, x1, y1, x2, y2) {
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                if (transparent(bmp, x, bmp.getHeight() - 1 - y) == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function chunkIsTransparent(bmp, x1, y1, x2, y2) {
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                if (transparent(bmp, x, bmp.getHeight() - 1 - y) == 0) {
                    return false;
                }
            }
        }
        return true;
    }
    function transparent(bmp, x, y) {
        let a = android.graphics.Color.alpha(bmp.getPixel(x, y));
        if (a == 0) {
            return 0;
        }
        if (a == 1) {
            return 1;
        }
        return 2;
    }
    function addTwoRectToMesh(mesh, x, y, w, h) {
        addRectToMesh(mesh, x, y, w, h, 0, 0, false);
        addRectToMesh(mesh, x, y, w, h, 0.0625, 0, true);
    }
    function addRectToMesh(mesh, x, y, w, h, z, sz, invertNormal, u, v) {
        u = u || x;
        v = v || y;
        let normal = invertNormal ? -1 : 1;
        if (sz > 0 && w > 0 && h == 0) {
            mesh.setNormal(0, normal, 0);
            mesh.addVertex(x, y, z, u, v);
            mesh.addVertex(x + w, y, z, u, v);
            mesh.addVertex(x, y, z + sz, u, v);
            mesh.addVertex(x, y, z + sz, u, v);
            mesh.addVertex(x + w, y, z, u, v);
            mesh.addVertex(x + w, y, z + sz, u, v);
        } else {
            if (sz == 0 && w > 0 && h > 0) {
                mesh.setNormal(0, 0, normal);
                mesh.addVertex(x, y, z, u, v);
                mesh.addVertex(x + w, y, z, u + w, v);
                mesh.addVertex(x, y + h, z, u, v + h);
                mesh.addVertex(x, y + h, z, u, v + h);
                mesh.addVertex(x + w, y, z, u + w, v);
                mesh.addVertex(x + w, y + h, z, u + w, v + h);
            } else {
                if (sz > 0 && h > 0 && w == 0) {
                    mesh.setNormal(normal, 0, 0);
                    mesh.addVertex(x, y, z, u, v);
                    mesh.addVertex(x, y + h, z, u, v);
                    mesh.addVertex(x, y, z + sz, u, v);
                    mesh.addVertex(x, y, z + sz, u, v);
                    mesh.addVertex(x, y + h, z, u, v);
                    mesh.addVertex(x, y + h, z + sz, u, v);
                }
            }
        }
    }
    Network.addClientPacket("model_kooker.kook", function (packet) {
        reconstructItemMesh(Network.serverToLocalId(packet.id), packet.data);
    });
    EXPORT("ModelKooker", ModelKooker);
}({});

