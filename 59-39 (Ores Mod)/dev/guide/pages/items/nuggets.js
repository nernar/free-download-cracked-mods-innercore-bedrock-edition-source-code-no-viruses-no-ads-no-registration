ModAPI.addAPICallback("GuideAPI", function(){
    pages["nuggets"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.shardLapis, data: 0},
                {id: ItemID.nuggetLead, data: 0},
                {id: ItemID.nuggetElectrum, data: 0},
                {id: ItemID.nuggetUranium, data: 0},
                {id: ItemID.nuggetMistery, data: 0},
                {id: ItemID.nuggetIron, data: 0}
            ],
            elements:[
                {text: "Большинство самородков получаются из одноименных полноценных слитков (в случае с лазуритовым осколком - это целый лазурит), кроме неопознанного и электроумового самородков", size: 14, underline: true, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: "",
            recipes: [{
                grid:[["o", "g", "o"], ["r", "s", "r"], ["o", "g", "o"]],
                materials:{
                    "s":{id: ItemID.nuggetLead, data: 0},
                    "r":{id: 331, data: 0},
                    "g":{id: 371, data: 0},
                    "o":{id: 0}
                },
                result:{id: ItemID.nuggetElectrum, data: 0}
            }, {
                grid:[["o", "e", "o"], ["d", "s", "d"], ["o", "e", "o"]],
                materials:{
                    "o":{id: 49, data: 0},
                    "d":{id: 264, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "e":{id: ItemID.nuggetElectrum, data: 0},
                    "o":{id: 0}
                },
                result:{id: ItemID.nuggetMistery, data: 0}
            }]
        },
        preLink: "items_main"
    }
});