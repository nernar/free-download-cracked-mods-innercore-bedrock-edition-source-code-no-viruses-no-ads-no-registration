var Ritual = {
    valueList: {},
    registerPrototype: function (identifier, prototypeObject) {
        this.valueList[identifier] = prototypeObject;
    }
};