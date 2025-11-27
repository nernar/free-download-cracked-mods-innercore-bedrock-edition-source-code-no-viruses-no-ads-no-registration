ModAPI.addAPICallback("GuideAPI", function(){
    pages["mrg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Use of matter re-constructor"), color: UIColor.CYAN, bold: true, size: 20},
                {text: String.t("To understand the mechanism - just open it and look at the panel below."), size: 14, color: Ncolor},
                {text: String.t("The red and yellow text indicates that the mechanism is lacking for work."), size: 14, color: Ncolor}
            ]
        },
        preLink: "mrm",
        nextLink: "mechanic_main"
    }
});