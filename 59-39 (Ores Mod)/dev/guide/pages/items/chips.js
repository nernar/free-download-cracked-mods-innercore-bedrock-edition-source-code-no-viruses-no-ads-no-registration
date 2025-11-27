ModAPI.addAPICallback("GuideAPI", function(){
    pages["chips"] = {
        preLink: "items_main",
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.researchChip, data: 0},
                {id: ItemID.burntChip, data: 0},
                {id: ItemID.splitterChip, data: 0},
                {id: ItemID.quantomDetectorChip, data: 0},
                {id: ItemID.densityControllerChip, data: 0},
                {id: ItemID.matteryDrive, data: 0}
            ],
            elements:[
                {text: String.t("Chips"), color: Ncolor, size: 20, bold: true},
                {text: String.t("Receiving:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Laboratory Block"), color: Ncolor, size: 17, bold: true, link: "lbm"},
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: String.t("Creating mechanisms"), color: Ncolor, size: 17, bold: true}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Research Chip"),
            recipes:[{
                grid:[["t", "r", "t"], ["r", "s", "r"], ["t", "r", "t"]],
                materials:{
                    "t":{id: ItemID.ingotLead, data: 0},
                    "r":{id: 331, data: 0},
                    "s":{id: 265, data: 0}
                },
                result:{id: ItemID.researchChip, count: 4, data: 0}
            }]
        }
    }
});