let MysticalMushroomConfig = (function () {
    function MysticalMushroomConfig(mushroomPatchSize) {
        this.mushroomPatchSize = mushroomPatchSize;
        return this;
    }
    MysticalMushroomConfig.prototype.getMushroomPatchSize = function () {
        return this.mushroomPatchSize;
    };
    return MysticalMushroomConfig;
}());

