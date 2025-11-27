ModAPI.addAPICallback("GuideAPI", function(){
    pages["advanced"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Advanced Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["s", "s", "s"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelAdvanced, data: 0},
                    "c":{id: ItemID.solarCoreAdvanced, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "r":{id: 266, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0}
                },
                result:{id: BlockID.solarPanelAdvanced, data: 0}
            }],
            elements:[
                {text: String.toMain, size: 20, underline: true, link: "default", color: Ncolor}
            ]
        },
        left:{
            elements:[
                {text: String.solar("advanced"), size: 15, color: Ncolor}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelAdvanced, data: 0}
            ]
        },
        preLink: "resonant",
        nextLink: "ultimate"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
});