ModAPI.addAPICallback("GuideAPI", function(){
    pages["cores"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.solarCoreLeadstone, data: 0},
                {id: ItemID.solarCoreHardent, data: 0},
                {id: ItemID.solarCoreRedstone, data: 0},
                {id: ItemID.solarCoreResonant, data: 0},
                {id: ItemID.solarCoreAdvanced, data: 0},
                {id: ItemID.solarCoreUltimate, data: 0}
            ],
            elements:[
                {text: String.t("Used in the creation of solar panels"), size: 15, bold: true, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: "",
            recipes:[{
                grid:[["o", "n", "o"], ["n", "i", "n"], ["o", "n", "o"]],
                materials:{
                    "i":{id: 265, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: ItemID.solarCoreLeadstone, data: 0}
            }],
            elements:[
                {text: String.t("To find out the recipe for higher level kernels, put the core one level less in inventory and open the inventory."), color: Ncolor, size: 20, underline: true},
                {text: String.t("For example, to find out the recipe for the core of a hardened solar panel - take the lead core and open the workbench."), color: Ncolor, size: 16}
            ]
        },
        preLink: "items_main"
    }
});