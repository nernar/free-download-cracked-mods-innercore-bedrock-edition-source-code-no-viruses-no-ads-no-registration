ModAPI.addAPICallback("GuideAPI", function(){
    pages["wim"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.woodIncubator}
            ],
            elements:[
                {color: Ncolor, text: Translation.translate("This mechanism will grow the tree anywhere."), size: 20}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Wood Incubator"),
            recipes:[
                {
                    result:{id: BlockID.woodIncubator, data: 0},
                    grid:[
                        ["t", "d", "t"],["r", "g", "r"],["t", "t", "t"]
                    ],
                    materials:{
                        "t":{id: BlockID.blockLead},
                        "d":{id: 3, data: 0},
                        "g":{id: 266, data: 0},
                        "r":{id: 331, data: 0}
                    }
                }
            ]
        },
        preLink: "mechanic_main",
        nextLink: "wig"
    }
});