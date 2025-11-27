ModAPI.addAPICallback("GuideAPI", function(){
    pages["mcm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.molecularConverter, data: 0}
            ],
            elements:[
                {text: String.t("Turns reconstructed matter into objects."), size: 14, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Molecular Converter"),
            recipes:[{
                grid:[["t", "s", "t"], ["r", "s", "r"], ["t", "d", "t"]],
                result:{id: BlockID.molecularConverter, data: 0},
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "r":{id: 331, data: 0},
                    "c":{id: ItemID.densityControllerChip, data: 0},
                    "d":{id: 264, data: 0}
                }
            }]
        },
        preLink: "mechanic_main",
        nextLink: "mcg"
    }
});