ModAPI.addAPICallback("GuideAPI", function(){
    pages["leadstone"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelLeadstone, data: 0}
            ],
            elements:[
                {color: Ncolor, text: String.solar("leadstone"), size: 15}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Leadstone Solar Panel"),
            recipes:[
                {
                    grid:[
                        ["l", "l", "l"],
                        ["r", "c", "r"],
                        ["n", "n", "n"]
                    ],
                    materials:{
                        "l":{id: ItemID.cellPhotovailtaic, data: 0},
                        "r":{id: 266, data: 0},
                        "c":{id: ItemID.solarCoreHardent, data: 0},
                        "n":{id: ItemID.nuggetLead, data: 0}
                    },
                    result:{id: BlockID.solarPanelLeadstone, data: 0},
                }
            ],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        preLink: "solar_main",
        nextLink: "hardent"
    }
});