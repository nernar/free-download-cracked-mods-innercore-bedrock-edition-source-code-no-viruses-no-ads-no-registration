ModAPI.addAPICallback("GuideAPI", function(){
    pages["msm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.molecularSealant}
            ],
            elements:[
                {text: String.t("Molecular compactor compresses QE energy, turning it into matter."), size: 20, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Molecular Sealant"),
            recipes:[{
                grid:[["t", "s", "t"], ["r", "d", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "r":{id: 331, data: 0},
                    "d":{id: ItemID.quantomDetectorChip, data: 0}
                },
                result:{id: BlockID.molecularSealant, data: 0}
            }]
        },
        preLink: "mechanic_main",
        nextLink: "msg"
    }
});