ModAPI.addAPICallback("GuideAPI", function(){
    pages["lead"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotLead, data: 0},
                {id: BlockID.oreLead, data: 0},
                {id: BlockID.blockLead, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("not rare"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("no strengths"), size: 15, color: UIColor.RED}
            ]
        }
    }
});