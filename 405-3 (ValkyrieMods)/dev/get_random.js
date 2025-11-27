function get_random(type) {
    var total = 0;
    for (var i in type) {
        total += type[i].chance;
    }
    var random = Math.random() * total * 1.35;
    var current = 0;
    for (var i in type) {
        var drop = type[i];
        if (current < random && current + drop.chance > random) {
            return drop;
        }
        current += drop.chance;
    }
    return {id: ItemID.litherite};
}

