ModAPI.addAPICallback("GuideAPI", function(){
    pages["default"] = {
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.crystalSapphire, data: 0}
            ],
            elements:[
                {text: Translation.translate("All about Ores Mod"), size: 30, color: UIColor.CYAN}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: Translation.translate("About ores"), size: 15, color: Lcolor, link: "ores_main", underline: true, bold: true},
                {text: Translation.translate("About mechanical blocks"), size: 15, color: Lcolor, link: "mechanic_main", underline: true, bold: true},
                {text: Translation.translate("About other items"), size: 15, color: Lcolor, link: "items_main", underline: true, bold: true}
            ]
        }
    }
});