const Random = {
    randomDouble: function (minimal, maximal) {
        return Math.random() * (maximal - mimimal) + minimal;
    },
    randomInteger: function (minimal, maximal) {
        return Math.floor(this.randomDouble(minimal, maximal));
    }
};