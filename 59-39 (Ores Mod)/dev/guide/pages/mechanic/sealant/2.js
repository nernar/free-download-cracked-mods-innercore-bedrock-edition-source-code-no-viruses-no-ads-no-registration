ModAPI.addAPICallback("GuideAPI", function(){
    pages["msg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("The use of molecular sealer."), color: UIColor.CYAN, bold: true, size: 20},
                {text: String.t("The operation of this mechanism is fully automatic, you just need to maintain working conditions."), size: 14, color: Ncolor},
                {text: String.t("This is the only mechanism that consumes QE-energy."), size: 14, color: Ncolor},
                {text: String.t("In order for the mechanism to accept QE-energy, you need to connect a wire to it to the upper side."), size: 14, underline: true, color: Ncolor},
                {text: String.t("The mechanism itself begins to work when the energy inside it is greater than 0."), size: 14, color: Ncolor}    
            ]
        },
        right:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: ""},
                {text: "Редстоун-сигнал останавливает работу механизма, но при этом он по прежнему сможет принимать в себя энергию.", size: 15, color: Ncolor}
            ]
        },
        preLink: "mgm",
        nextLink: "mechanic_main"
    }
});