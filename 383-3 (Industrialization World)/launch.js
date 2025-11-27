var modsAPI = {};

ModAPI.addAPICallback("ICore", function(api){
    modsAPI.ICORE = api
});

ModAPI.addAPICallback("AchievementsAPI", function(api){
    modsAPI.Achievements = api
});

Launch({
    modsAPI: modsAPI
});

