let AngelTrade = new RecipePool();
function AngelAI(ent) {
    ServerEntityAI.apply(this, arguments);
    this.onInteract = function (player) {
        let item = Entity.getCarriedItem(player);
        let recipe = AngelTrade.get([item]);
        if (recipe) {
            if (DA) {
                ac.give(player, "DungeonAchievement", "trade");
            }
            let coords = Entity.getPosition(ent);
            let result = recipe.output[Random.nextInt(recipe.output.length)];
            BlockSource.getDefaultForActor(player).spawnDroppedItem(coords.x, coords.y, coords.z, result.id, result.count, result.data, null);
            delItem(player, {id: item.id, count: item.count - (recipe.input[0].count - 1), data: item.data});
        }
    };
}
ServerEntityAIController.register("dungeoncraft:angel", AngelAI);

