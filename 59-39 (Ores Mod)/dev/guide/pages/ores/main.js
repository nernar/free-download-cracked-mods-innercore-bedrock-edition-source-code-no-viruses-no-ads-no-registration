ModAPI.addAPICallback("GuideAPI", function(){
    pages["ores_main"] = {
        left:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.ore(1), size: 20, color: Lcolor, link: "adamantite", underline: true},
                {text: String.ore(2), size: 20, color: Lcolor, link: "lead", underline: true},
                {text: String.ore(3), size: 20, color: Lcolor, link: "malachite", underline: true},
                {text: String.ore(4), size: 20, color: Lcolor, link: "muthril", underline: true},
                {text: String.ore(5), size: 20, color: Lcolor, link: "uranium", underline: true},
                {text: String.ore(6), size: 20, color: Lcolor, link: "sapphire", underline: true}
            ]
        },
        preLink: "default"
    }
});