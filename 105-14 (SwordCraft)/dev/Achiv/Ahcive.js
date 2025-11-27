ModAPI.addAPICallback("AchievementsAPI", function (api) { api.AchievementAPI.registerGroup({ 
"unique": "SW", 
"name": "SwordCraft", 
"width": 1000, 
"height": 650, 
"size": 100, 
"bgTexture": "groups_bg.SCraft", 
"icon": { 
"id": 276
} 
}); 
}); 



ModAPI.addAPICallback("AchievementsAPI", function (api) { 
 api.AchievementAPI.register("SW", { 
unique: "one", 
name: { 
text: "Куй железо, пока горячо", 
translate: "Куй железо, пока горячо" 
}, 
description: { 
text: "Сделайте обычный меч", 
translate: "Сделайте обычный меч" 
}, 
column: 1, 
row: 2, 
item: { 
id: 265
}
});
});