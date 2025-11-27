FactAPI.recipe = {
    repairStation: {
        all: {},
        register: function (id, id2, data2) {
            if (!data2) data2 = 0;
            if (!id2) id2 = id;
            this.all[id] = { id: id2, data: data2 };
        },
        get: function (id) {
            return this.all[id] || false;
        },
        delete: function (id) {
            this.all[id] = false;
        }
    },
}