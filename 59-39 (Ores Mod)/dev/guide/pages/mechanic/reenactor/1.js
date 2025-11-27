ModAPI.addAPICallback("GuideAPI", function(){
    pages["mrm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.matterReenactor, data: 0}
            ],
            elements:[
                {text: String.t("He accepts ordinary matter and any object, the data of which he will transmit to matter and will issue reconstructed matter."), size: 15, color: Ncolor},
                {text: String.t("Reconstructed matter is used in a molecular transducer."), size: 13, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            recipes:[{
                grid:[["t", "d", "t"], ["r", "c", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "d":{id: ItemID.quantomDetectorChip, data: 0},
                    "r":{id: 331, data: 0},
                    "c":{id: ItemID.splitterChip, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0}
                },
                result:{id: BlockID.matterReenactor, data: 0}
            }],
            title: Translation.translate("Matter Reenactor")
        },
        preLink: "mechanic_main",
        nextLink: "mrg"
    }
});