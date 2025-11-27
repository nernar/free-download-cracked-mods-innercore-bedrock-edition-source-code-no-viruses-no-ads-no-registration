ModAPI.addAPICallback("GuideAPI", function(){
    pages["muthril"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotMuthril, data: 0},
                {id: BlockID.oreMuthril, data: 0},
                {id: BlockID.blockMuthril, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"} 
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("not rare, relatively durable and efficient"), size: 14, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("lower speed than malachite"), size: 14, color: UIColor.RED}
            ]
        }
    }
});