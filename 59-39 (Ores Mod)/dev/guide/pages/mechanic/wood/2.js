ModAPI.addAPICallback("GuideAPI", function(){
    pages["wig"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Use of a wood incubator"), size: 21, color: UIColor.CYAN},
                {color: Ncolor, text: String.t("To use a wood incubator you will need: seedling, energy and catalyst."), size: 14},
                {color: Ncolor, text: String.t("List of supported seedlings and catalysts on the right page."), underline: true, size: 14},
                {color: Ncolor, text: String.t("Before using the mechanism, you need to place a block of earth or dirt next to it."), size: 14},
                {color: Ncolor, text: String.t("In the window of the mechanism, approximately in the middle, there is a red rectangle."), size: 14},
                {color: Ncolor, text: String.t("You need to work only with slots from the left of this rectangle."), underline: true, size: 14},
                {color: Ncolor, text: String.t("A sapling is placed in the top slot; in the right - the catalyst"), size: 14},
                {color: Ncolor, text: String.t("If you did everything correctly, then a sapling will appear on the dirt block, and the red rectangle will turn green."), size: 14},
                {color: Ncolor, text: String.t("I remind you that the mechanism consumes energy, nothing will work without it."), size: 14},
                {color: Ncolor, text: String.t("The red box is the growth progress bar. When progress is completed - you will receive a tree, seedlings and a special drop, if there is one."), size: 14}
            ]
        },
        right:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {color: Ncolor, text: String.t("Saplings:"), size: 20, bold: true},
                {color: Ncolor, text: String.t("Currently only saplings from minecraft are supported."), size: 14},
                {color: Ncolor, text: String.t("Catalysts:"), size: 20, bold: true},
                {color: Ncolor, text: String.t("Bone flour."), size: 14, bold: true},
                {text: String.t("The catalyst is used to accelerate the growth of the tree, its use is not necessary"), size: 14, color: UIColor.RED, underline: true, bold: true}
            ]
        },
        nextLink: "mechanic_main",
        preLink: "wim"
    } 
});