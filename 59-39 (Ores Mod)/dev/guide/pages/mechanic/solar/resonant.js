ModAPI.addAPICallback("GuideAPI", function(){
    pages["resonant"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Resonant Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["r", "r", "r"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelRedstone, data: 0},
                    "c":{id: ItemID.solarCoreResonant, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "r":{id: 351, data: 4}
                },
                result:{id: BlockID.solarPanelResonant, data: 0}
            }],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        left:{
            elements:[
                {color: Ncolor, text: String.solar("resonant"), size: 15}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelResonant, data: 0}
            ]
        },
        preLink: "redstone",
        nextLink: "advanced"
    }
});