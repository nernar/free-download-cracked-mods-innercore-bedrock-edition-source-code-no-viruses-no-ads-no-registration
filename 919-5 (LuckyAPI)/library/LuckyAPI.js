/*

╔╗─╔╗╔╦══╦╗╔══╦╗╔╦══╦═══╦══╗ 
║║─║║║║╔═╣║║╔═╣║║║╔╗║╔═╗╠╗╔╝ 
║║─║║║║║─║╚╝║─║╚╝║╚╝║╚═╝║║║ 
║║─║║║║║─║╔╗║─╚═╗║╔╗║╔══╝║║ 
║╚═╣╚╝║╚═╣║║╚═╗╔╝║║║║║──╔╝╚╗ 
╚══╩══╩══╩╝╚══╝╚═╩╝╚╩╝──╚══╝

    LuckyAPI library
    
    Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода
    3.Явное копирование кода
    4.Horizon +  Inner + Modding === ???
    
    ©NameOfShadow ( https://discord.gg/kEQGeJrVyq )
    
    Правила использования составлены ©WolfTeam (https://vk.com/wolf___team).
*/
/*ChangeLog:
    1v
        -dropout from the lucky block of the item and the array of items was added
        -dropout with lucky message block was added
        
    1.4v
        -dropout was added from the lucky block of the entity, you can also add custom NBTTag to the entity
        -the translate key has been added to the message object, translate must contain the localization object
        -dropout with lucky block block has been added;)
        
    1.6v
        -ChangeLog has been added
        -Dropping structure from lucky block was added.  the structure can depend on the coordinates of either block or player.  Structures can currently only be created by writing code.
*/

LIBRARY({
    name: "LuckyAPI",
    version: 1.6,
    shared: true,
    api: "CoreEngine",
});

var LuckyAPI = {
    createLuckyBlock: function(blockID, gameName, dropArray, texture, blockType) {
        Block.createBlock(blockID, [
            {
                name: gameName,
                texture: texture,
                inCreative: true,
            },
        ], blockType);
    
        Block.registerDropFunction(blockID, function(coords, id, data, diggingLevel, toolLevel) {
            var totalChance = 0;
            for (var i = 0; i < dropArray.length; i++) {
                totalChance += dropArray[i].chance;
            }
    
            var randomNumber = Math.random() * totalChance;
    
            var gameLang = Translation.getLanguage();
            var structureDirPath = "structure";
            var dropItems = [];
            var dropSetBlock = null;
            var dropEntity = null;
            var messageContent = null;
            var dropStructure = null;
    
            for (var j = 0; j < dropArray.length; j++) {
                var currentDrop = dropArray[j];
                randomNumber -= currentDrop.chance;
    
                if (randomNumber <= 0) {
                    if (currentDrop.drop && Array.isArray(currentDrop.drop)) {
                        for (var k = 0; k < currentDrop.drop.length; k++) {
                            dropItems.push([currentDrop.drop[k].id, currentDrop.drop[k].count, currentDrop.drop[k].data]);
                        }
                    } else if (currentDrop.drop) {
                        dropItems.push([currentDrop.drop.id, currentDrop.drop.count, currentDrop.drop.data]);
                    }
    
                    if (currentDrop.block) {
                        dropSetBlock = {
                            id: currentDrop.block.id,
                            data: currentDrop.block.data,
                        };
                    }
    
                    if (currentDrop.message) {
                        var translatedMessage = currentDrop.message.translate;
                        if (translatedMessage && translatedMessage[gameLang]) {
                            messageContent = translatedMessage[gameLang];
                        } else {
                            messageContent = currentDrop.message.content;
                        }
                    }
    
                    if (currentDrop.entity) {
                        dropEntity = {
                            id: currentDrop.entity.id,
                            NBTTag: currentDrop.entity.NBTTag,
                        };
                    }
    
                    if (currentDrop.structure) {
                        dropStructure = {
                            parent: currentDrop.structure.parent,
                            name: currentDrop.structure.name,
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
                var ent = Entity.spawn(coords.x, coords.y, coords.z, dropEntity.id);
                if (dropEntity.NBTTag) {
                    Entity.setNameTag(ent, dropEntity.NBTTag);
                }
            }
    
            if (dropStructure) {
                World.destroyBlock(coords.x, coords.y, coords.z, false);
                
                Game.prevent();
                
                var structure = FileTools.ReadJSON(__dir__ + "/" + structureDirPath + "/" + dropStructure.name + ".json");
    
                if (dropStructure.parent === "player") {
                    var pos = Player.getPosition();
    
                    Ppos = {
                        x: pos.x,
                        y: pos.y - 2,
                        z: pos.z,
                    };
    
                    placeStructure(Ppos, structure);
                } else if (dropStructure.parent === "block") {
                    placeStructure(coords, structure);
                }
            }
    
            return null;
        });
    },
};

function placeStructure(coords, structure) {
    for (var i = 0; i < structure.structure.length; i++) {
        var blockInfo = structure.structure[i];
        var blockX = coords.x + blockInfo.coords.x;
        var blockY = coords.y + blockInfo.coords.y;
        var blockZ = coords.z + blockInfo.coords.z;
        World.setBlock(blockX, blockY, blockZ, blockInfo.block.id, blockInfo.block.data);
    }
}

EXPORT("LuckyAPI", LuckyAPI);