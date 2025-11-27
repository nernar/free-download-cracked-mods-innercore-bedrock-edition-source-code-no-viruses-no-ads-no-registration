ModAPI.addAPICallback("GuideAPI", function(){
    pages["items_main"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: Translation.translate("Matter"), color: Lcolor, size: 20, link: "matter", underline: true},
                {text: String.t("Chips"), color: Lcolor, size: 20, color: Lcolor, link: "chips", underline: true},    
                {text: String.t("Cores"), color: Lcolor, size: 20, color: Lcolor, link: "cores", underline: true},
                {text: String.t("Nuggets"), color: Lcolor, size: 20, color: Lcolor, link: "nuggets", underline: true},
                {text: String.t("Photovailtaic Cell"), color: Lcolor, size: 20, color: Lcolor, link: "PhotovailtaicCell", underline: true}
            ]
        },
        preLink: "default"
    }
});