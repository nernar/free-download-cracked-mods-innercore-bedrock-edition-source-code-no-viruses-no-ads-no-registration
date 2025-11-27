ModAPI.addAPICallback("GuideAPI", function(){
    pages["adamantite"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotAdamantite, data: 0},
                {id: BlockID.oreAdamantite, data: 0},
                {id: BlockID.blockAdamantite, data: 0}
            ],
            elements:[
                {text: Translation.translate("To main"), side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: Translation.translate("Used in craft."), size: 15, color: Ncolor},
                {text: String.adv("strength"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("low speed"), size: 15, color: UIColor.RED}
            ]
        }
    }
});