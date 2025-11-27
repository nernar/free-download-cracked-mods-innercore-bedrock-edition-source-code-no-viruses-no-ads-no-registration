ModAPI.addAPICallback("GuideAPI", function(){
    pages["matter"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.Oresmatter, data: 0}
            ],
            elements:[
                {text: String.t("Matter"), color: Ncolor, size: 20, bold: true},
                {text: String.t("Receiving:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Molecular Sealant"), color: Ncolor, size: 17, bold: true, link: "msm"},
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Matter Reenactor"), color: Ncolor, size: 17, bold: true, link: "mrm"}
            ]
        },
        right:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.rebuiltMatter, data: 0}
            ],
            elements:[
                {text: String.t("Rebuilt Matter"), color: Ncolor, size: 20, bold: true},
                {text: String.t("Receiving:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Matter Reenactor"), color: Ncolor, size: 17, bold: true, link: "mrm"},
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Molecular Converter"), color: Ncolor, size: 17, bold: true, link: "mcm"}
            ]
        },
        preLink: "items_main"
    }
});