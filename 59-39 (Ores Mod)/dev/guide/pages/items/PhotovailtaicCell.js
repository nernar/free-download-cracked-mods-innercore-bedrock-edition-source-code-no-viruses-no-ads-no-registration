ModAPI.addAPICallback("GuideAPI", function(){
    pages["PhotovailtaicCell"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.cellPhotovailtaic, data: 0}
            ],
            elements:[
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: String.t("Creating mechanisms"), color: Ncolor, size: 17, bold: true}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: String.t("Photovailtaic Cell"),
            recipes:[{
                grid:[["g", "g", "g"], ["l", "l", "l"], ["i", "i", "i"]],
                materials:{
                    "g":{id: 102, data: 0},
                    "l":{id: ItemID.shardLapis, data: 0},
                    "i":{id: ItemID.nuggetIron, data: 0}
                },
                result: {id: ItemID.cellPhotovailtaic, data: 0}
            }]
        },
        preLink: "items_main"
    }
});