ModAPI.addAPICallback("GuideAPI", function(){
    pages["ultimate"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelUltimate, data: 0}
            ],
            elements:[
                {color: Ncolor, text: String.solar("ultimate"), size: 15}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Ultimate Solar Panel"),
            recipes:[
                {
                    grid:[
                        ["r", "l", "r"],
                        ["c", "p", "c"],
                        ["r", "c", "r"]
                    ],
                    materials:{
                        "l":{id: ItemID.cellPhotovailtaic, data: 0},
                        "r":{id: ItemID.nuggetMistery, data: 0},
                        "c":{id: ItemID.solarCoreUltimate, data: 0},
                        "p":{id: BlockID.solarPanelAdvanced, data: 0}
                    },
                    result:{id: BlockID.solarPanelUltimate, data: 0},
                }
            ],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        preLink: "advanced",
        nextLink: "solar_main"
    }
});