ModAPI.addAPICallback("GuideAPI", function(){
    pages["uranium"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotUranium, data: 0},
                {id: BlockID.oreUranium, data: 0},
                {id: BlockID.blockUranium, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("effective, has the highest damage"), size: 14, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("rarely comes across"), size: 15, color: UIColor.RED}
            ]
        }
    }
});