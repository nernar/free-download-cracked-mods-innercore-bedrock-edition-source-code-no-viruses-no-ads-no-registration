ModAPI.addAPICallback("GuideAPI", function(){
    pages["redstone"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Redstone Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["n", "n", "n"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelHardent, data: 0},
                    "c":{id: ItemID.solarCoreRedstone, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: BlockID.solarPanelRedstone, data: 0}
            }],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        left:{
            elements:[
                {color: Ncolor, text: String.solar("redstone"), size: 15}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelRedstone, data: 0}
            ]
        },
        preLink: "hardent",
        nextLink: "resonant"
    }
});