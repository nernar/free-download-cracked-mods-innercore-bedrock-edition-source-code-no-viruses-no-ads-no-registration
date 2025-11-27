ModAPI.addAPICallback("GuideAPI", function(){
    pages["lbg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("For the mechanism to work, you need to: keep the mechanism charged with energy and place the research chips in the upper slot."), size: 14, color: Ncolor}
            ]
        },
        preLink: "lbm",
        nextLink: "mechanic_main"
    }
});