LIBRARY({
	name: "LuckyAPI",
	version: 1.4,
	shared: true,
	api: "CoreEngine"
});

var LuckyAPI = {
    createLuckyBlock: function(blockID, gameName, dropArray, texture, blockType) {
        Block.createBlock(blockID, [
            {
                name: gameName,
                texture: texture,
                inCreative: true
            }
        ], blockType);

        Block.registerDropFunction(blockID, function(coords, id, data, diggingLevel, toolLevel) {
            var totalChance = 0;
            for (var i = 0; i < dropArray.length; i++) {
                totalChance += dropArray[i].chance;
            }
            
            var randomNumber = Math.random() * totalChance;
            
            var gameLang = Translation.getLanguage();
            var structurePath = "LuckyAPIStructure";
            var dropItems = [];
            var dropSetBlock = null;
            var dropEntity = null;
            var messageContent = null;
            var structure = null;

            for (var j = 0; j < dropArray.length; j++) {
                var CurrentDrop = dropArray[j];
                randomNumber -= CurrentDrop.chance;

                if (randomNumber <= 0) {
                    if (CurrentDrop.drop && Array.isArray(CurrentDrop.drop)) {
                        for (var k = 0; k < CurrentDrop.drop.length; k++) {
                            dropItems.push([CurrentDrop.drop[k].id, CurrentDrop.drop[k].count, CurrentDrop.drop[k].data]);
                        }
                    } else if (CurrentDrop.drop) {
                        dropItems.push([CurrentDrop.drop.id, CurrentDrop.drop.count, CurrentDrop.drop.data]);
                    }
                    
                    if (CurrentDrop.block) {
                        dropSetBlock = {
                            id: CurrentDrop.block.id,
                            data: CurrentDrop.block.data
                        };
                    }

                    if (CurrentDrop.message) {
                        var translatedMessage = CurrentDrop.message.translate;
                        if (translatedMessage && translatedMessage[gameLang]) {
                            messageContent = translatedMessage[gameLang];
                        } else {
                            messageContent = CurrentDrop.message.content;
                        }
                    }
                    
                    if (CurrentDrop.entity) {
                        dropEntity = {
                            id: CurrentDrop.entity.id,
                            NBTTag: CurrentDrop.entity.NBTTag
                        }
                    }
                    
                    if (CurrentDrop.structure) {
                        structure = {
                            parents: CurrentDrop.structure.parents,
                            name: CurrentDrop.structure.name
                        };
                    }
                    break;
                }
            }

            if (dropSetBlock) {
                Game.prevent();
                World.setBlock(coords.x, coords.y, coords.z, dropSetBlock.id, dropSetBlock.data);
            }
            
            if (messageContent) {
                Game.message(messageContent);
            }

            if (dropItems.length > 0) {
                return dropItems;
            }
            
            if (dropEntity) {
                var ent = Entity.spawn(coords.x, coords.y, coords.z, dropEntity.id)
                if (dropEntity.NBTTag) {
                    Entity.setNameTag(ent, dropEntity.NBTTag)
                }
            }
            
            return null;
        });
    }
};

EXPORT("LuckyAPI", LuckyAPI);
