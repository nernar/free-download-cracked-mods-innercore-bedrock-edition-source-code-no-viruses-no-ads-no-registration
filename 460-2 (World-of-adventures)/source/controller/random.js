/**
 * Simplifies pseudo random numbers
 */
const Random = {

    /**
     * Returns a double random number
     * @param {number} minimum minimum possible value
     * @param {number} maximum maximum possible value
     */
    randomDouble: function (minimum, maximum) {
        return Math.random() * (maximum - minimum) + minimum;
    },

    /**
      * Returns a integer random number
      * @param {number} minimum minimum possible value
      * @param {number} maximum maximum possible value
      */
    randomInteger: function (minimum, maximum) {
        return Math.floor(this.randomDouble(minimum, maximum));
    }
};