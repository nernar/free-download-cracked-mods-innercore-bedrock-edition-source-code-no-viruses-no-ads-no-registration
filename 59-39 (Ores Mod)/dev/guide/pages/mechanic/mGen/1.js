ModAPI.addAPICallback("GuideAPI", function(){
    pages["mgm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.molecularGenerator, data: 0}
            ],
            elements:[
                {text: String.t("Generator, for generating a new type of energy QE (Quantum Energy)"), size: 18, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            recipes:[{
                result:{id: BlockID.molecularGenerator, data: 0},
                grid:[["t", "d", "t"], ["r", "c", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "d":{id: ItemID.matteryDrive, data: 0},
                    "r":{id: 331, data: 0},
                    "s":{id: ItemID.splitterChip, data: 0},
                    "c":{id: ItemID.crystalSapphire, data: 0}
                }
            }],
            title: Translation.translate("Molecular Generator")
        },
        preLink: "mechanic_main",
        nextLink: "mgg"
    }
});