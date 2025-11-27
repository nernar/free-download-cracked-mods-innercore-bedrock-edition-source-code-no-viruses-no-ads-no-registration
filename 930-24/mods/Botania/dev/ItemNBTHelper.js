let ItemNBTHelper = (function (ItemNBTHelper) {
    const DEFAULT_NBT_TYPES = ["boolean", "float", "int", "long", "string"];
    function createExtraIfRequared(stack) {
        if (!stack.extra) {
            stack.extra = new ItemExtraData();
        }
    }
    DEFAULT_NBT_TYPES.forEach(function (v) {
        v = v.charAt(0).toUpperCase() + v.slice(1);
        ItemNBTHelper["set" + v] = ItemNBTHelper["put" + v] = function (stack, tag, value) {
            createExtraIfRequared(stack);
            stack.extra["put" + v](tag, value);
            stack._sync();
        };
        ItemNBTHelper["get" + v] = function (stack, tag, value) {
            if (!stack.extra) {
                return value;
            }
            if (value != undefined && !isNaN(value)) {
                return stack.extra["get" + v](tag, value);
            }
            return stack.extra["get" + v](tag);
        };
    });
    return ItemNBTHelper;
}(ItemNBTHelper || (ItemNBTHelper = {})));

