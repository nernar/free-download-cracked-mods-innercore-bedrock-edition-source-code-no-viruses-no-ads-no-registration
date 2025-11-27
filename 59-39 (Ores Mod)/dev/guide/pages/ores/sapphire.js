ModAPI.addAPICallback("GuideAPI", function(){
    pages["sapphire"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.crystalSapphire, data: 0},
                {id: BlockID.oreSapphire, data: 0},
                {id: BlockID.blockSapphire, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("the most effective material"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("rate"), size: 15, color: UIColor.RED}
            ]
        }
    }
});