var GuideAPI = false;
var GuideHelper, Ctrl = null;
var pages = {};

const Lcolor = UIColor.rgb(0, 0, 128);
const Ncolor = UIColor.rgb(128, 0, 128);

var String = {
    toMain:Translation.translate("To main"),
    usedInCrafts:Translation.translate("Used in crafts."),
    adv:function(str){
        return Translation.translate("Advantage")+": "+Translation.translate(str);
    },
    disAdv:function(str){
        return Translation.translate("Disadvantage")+": "+Translation.translate(str);
    },
    t:Translation.translate,
    solar:function(type){
        return Translation.translate("Generation")+": " +OresAPI.getConfigValue(type+"_solar_panel.gen_day")+" ("+OresAPI.getConfigValue(type+"_solar_panel.gen_night")+" "+Translation.translate("night")+")";
    },
    ore:function(id){
        lang = (Item.getName(280) == "Stick")?false:true;
        let a, b;
        switch(id){
            case 1:
                a = "Адамантит";
                b = "Adamantite";
            break;
            case 2:
               a = "Свинец";
               b = "Tin";
            break; 
            case 3:
                a = "Малахит";
                b = "Malachite";
            break;
            case 4:
                a = "Мифрил";
                b = "Muthril";
            break;
            case 5:
                a = "Сапфир";
                b = "Sapphire";
            break;
            case 6:
                a = "Ураниум";
                b = "Uranium";
            break;
        }
        return (lang)?a:b;
    }
}

ModAPI.addAPICallback("GuideAPI", function(api){
    GuideAPI = api.GuideAPI;
    GuideHelper = api.GudeHelper;
    Ctrl = api.PageControllers;
    Callback.addCallback("PostLoaded", function(){
        GuideAPI.registerGuide("oresModGuide", {
            item: ItemID.oresModGuideBook,
            pages: pages,
            textures:{
                background: "blue_background",
                nextLink: "next",
                preLink: "pre",
                close: "btn"
            }
        });
    });
});