ModAPI.addAPICallback("GuideAPI", function(){
    pages["malachite"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotMalachite, data: 0},
                {id: BlockID.oreMalachite, data: 0},
                {id: BlockID.blockMalachite, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("very fast"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("not durable"), size: 15, color: UIColor.RED}
            ]
        }
    }
});