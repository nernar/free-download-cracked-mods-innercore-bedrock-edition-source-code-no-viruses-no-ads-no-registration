ModAPI.addAPICallback("GuideAPI", function(){
    pages["hardent"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Hardent Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["n", "r", "n"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelLeadstone, data: 0},
                    "c":{id: ItemID.solarCoreHardent, data: 0},
                    "r":{id: 266, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: BlockID.solarPanelHardent, data: 0}
            }],
            elements:[
                {text: String.toMain, size: 20, underline: true, link: "default", color: Ncolor}
            ]
        },
        left:{
            elements:[
                {color: Ncolor, text: String.solar("hardent"), size: 15}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelHardent, data: 0}
            ]
        },
        preLink: "leadstone",
        nextLink: "redstone"
    }
});