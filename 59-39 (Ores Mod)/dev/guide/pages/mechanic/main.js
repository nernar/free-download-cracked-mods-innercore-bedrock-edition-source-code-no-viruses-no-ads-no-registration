ModAPI.addAPICallback("GuideAPI", function(){
    pages["mechanic_main"] = {
        left:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Solar Panels"), size: 20, color: Lcolor, link: "solar_main", underline: true},
                {text: String.t("Wood Incubator"), size: 20, color: Lcolor, link: "wim", underline: true},
                {text: String.t("Molecular Generator"), size: 20, color: Lcolor, link: "mgm", underline: true},
                {text: String.t("Molecular Sealant"), size: 20, color: Lcolor, link: "msm", underline: true},
                {text: String.t("Matter Reenactor"),  size: 20, color: Lcolor, link: "mrm", underline: true},
                {text: String.t("Molecular Converter"), size: 20, color: Lcolor, link: "mcm", underline: true},
                {text: String.t("Laboratory Block"), size: 20, color: Lcolor, link: "lbm", underline: true}
            ]
        },
        preLink: "default"
    }
}); 