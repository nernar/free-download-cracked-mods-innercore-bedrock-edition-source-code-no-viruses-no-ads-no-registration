/*
	ItemDictionary lib
	© SWCorp
*/

LIBRARY({
	name: "ItemDictionary",
	version:1,
	shared:true,
	api:"CoreEngine",
	dependencies: []
});

var ItemDictionary = {
    dictionary: {},
    createCathegory: function (name) {
        this.dictionary[name] = {}
    },
    setItemCathegory: function (id, name) {
        if (!this.dictionary[name]) this.createCathegory(name);
        this.dictionary[name][id] = true;
    },
    isItemInCathegory: function (id, name) {
        if (!this.dictionary[name]) {
            return false;
        }
        if (this.dictionary[name][id]) {
            return true
        }
        return false
    },
    removeItemFromCathegory: function (id, name) {
        if (this.dictionary[name]&&this.dictionary[name][id]) {
            this.dictionary[name][id] = false;
        }
    }
};

EXPORT("ItemDictionary", ItemDictionary);