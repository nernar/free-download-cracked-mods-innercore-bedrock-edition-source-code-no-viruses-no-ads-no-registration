ModAPI.addAPICallback("GuideAPI", function(){
    pages["solar_main"] = {
        left:{
           controller: Ctrl.BASIC_PAGE,
           elements:[
              {text: String.t("Leadstone"), color: Lcolor, link: "leadstone", underline: true, size: 20},
              {text: String.t("Hardent"), color: Lcolor, size: 20, link: "hardent", underline: true, size: 20},
              {text: String.t("Redstone"), color: Lcolor, size: 20, link: "redstone", underline: true, size: 20},
              {text: String.t("Resonant"), color: Lcolor, size: 20, link: "resonant", underline: true},
              {text: String.t("Advanced"), color: Lcolor, size: 20, link: "advanced", underline: true},
              {text: String.t("Ultimate"), color: Lcolor, size: 20, link: "ultimate", underline: true}
           ]
        },
       preLink: "mechanic_main",
       nextLink: "leadstone"
    }
});