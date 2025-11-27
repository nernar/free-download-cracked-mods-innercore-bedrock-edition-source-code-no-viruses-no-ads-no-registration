ModAPI.addAPICallback("GuideAPI", function(){
    pages["lbm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.labBlock, data: 0}
            ],
            elements:[
                {text: String.t("The only source of chips"), size: 20, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Laboratory Block"),
            recipes:[{
                grid:[["s", "g", "s"], ["i", "r", "i"], ["r", "d", "r"]],
                materials:{
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "d":{id: 54, data: 0},
                    "i":{id: 42, data: 0},
                    "r":{id: 152, data: 0},
                    "g":{id: 20, data: 0}
                },
                result: {id: BlockID.labBlock, data: 0}
            }]
        },
        preLink: "mechanic_main",
        nextLink: "lbg"
    }
});