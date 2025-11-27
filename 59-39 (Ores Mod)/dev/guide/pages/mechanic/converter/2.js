ModAPI.addAPICallback("GuideAPI", function(){
    pages["mcg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Using molecular converter"), size: 20, color: UIColor.CYAN},
                {text: String.t("The information panel in the mechanism window displays the current state of the mechanism and helps to understand how the mechanism works."), size: 14, color: Ncolor},
                {text: String.t("As a result, you will receive an item that was as a result of the reconstruction of matter."), size: 14, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("At the exit you will receive the item that was recorded in the reconstructed matter."), size: 15, color: Ncolor}
            ]
        },
        preLink: "mcm",
        nextLink: "mechanic_main"
    }
});