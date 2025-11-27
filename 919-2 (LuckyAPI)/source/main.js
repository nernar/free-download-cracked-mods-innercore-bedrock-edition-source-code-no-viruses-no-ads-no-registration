/*
BUILD INFO:
  dir: core/script
  target: main.js
  files: 2
*/



// file: header.js

IMPORT("LuckyAPI")

ModAPI.registerAPI("LuckyAPI", {
	LuckyAPI: LuckyAPI
});




// file: LuckyBlock.js

Block.createSpecialType("luckyBlock", {
    base: 1,
    solid: true,
    destroytime: 2,
}, "stone");

IDRegistry.genBlockID("luckyblock");
LuckyAPI.createLuckyBlock("luckyblock", "Lucky Block", [
    {
        chance: 50,
        drop: {
            id: 1,
            count: 10,
            data: 0
        },
        message: {
            content: "Item and message",
            translate: {ru: "Предмет и сообщение", en: "Item and message"}
        }
    },
    {
        chance: 25,
        drop: {
            id: 14,
            count: 3,
            data: 0
        }
    },
    {
        chance: 25,
        message: {
            content: "Only message",
            translate: {ru: "Только сообщение", en: "Only message"}
        }
    },
    {
        chance: 30,
        drop: [
            {
                id:357,
                count: 64,
                data: 0
            },
            {
                id: 262,
                count: 32,
                data: 0
            },
            {
                id: 396,
                count: 1,
                data: 0
            }
        ],
        message: {
            content: "3 items in one",
            translate: {ru:"сразу 3 предмета!", en: "3 items in one"}
        }
    },
    {
        chance: 70,
        block: {
            id: 4,
            data: 0
        },
        message: {
            content: "Block!",
            translate: {ru: "Блок!", en: "Block!"}
        }
    },
    {
        chance: 30,
        entity: {
            id: 75
        },
        message: {
            content: "Entity!",
            translate: {ru: "Это существо!", en: "Entity!"}
        }
    }
], [["lucky_block", 0]], "luckyBlock");