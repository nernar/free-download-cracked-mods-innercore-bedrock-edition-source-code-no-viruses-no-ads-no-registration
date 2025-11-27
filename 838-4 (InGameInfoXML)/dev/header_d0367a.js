let worldInfo = __config__.getBool("WorldInfo.enabled");
let lightInfo = __config__.getBool("Light.enabled");
let lightInfoPosition = __config__.getInteger("Light.position") - 1;
let biomeInfo = __config__.getBool("Biome.enabled");
let biomeInfoPosition = __config__.getInteger("Biome.position") - 1;
let fpsInfo = __config__.getBool("Fps.enabled");
let fpsInfoPosition = __config__.getInteger("Fps.position") - 1;
let timeInfo = __config__.getBool("Time.enabled");
let timeInfoPosition = __config__.getInteger("Time.position") - 1;
let expInfo = __config__.getBool("Experience.enabled");
let expInfoPosition = __config__.getInteger("Experience.position") - 1;
let coordsInfo = __config__.getBool("Coordinates.enabled");
let coordsInfoPosition = __config__.getInteger("Coordinates.position") - 1;
let playerHealthInfo = __config__.getBool("PlayerHealthInfo.enabled");
let itemCarriedInfo = __config__.getBool("ItemCarriedInfo.enabled");
let armorInfo = __config__.getBool("ArmorInfo.enabled");
let buttonEnabled = __config__.getBool("powerButton");
let getHeight = UI.getScreenHeight();
let sizeElements = __config__.getInteger("sizeElements"), yElementPosition = sizeElements / 5 + sizeElements;
let arrayBoolens = [[0, worldInfo], [0, itemCarriedInfo], [0, armorInfo], [0, playerHealthInfo]];
for (let i = 0; i < 4; i++) {
    if (arrayBoolens[i][1] == true) {
        arrayBoolens[i][0] = 1;
    }
}

