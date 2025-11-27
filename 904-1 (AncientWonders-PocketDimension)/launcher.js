ConfigureMultiplayer({
	isClientOnly: false
});
IMPORT("DependenceHelper");

const min_version = 10;
const recommended_version = "Ancient Wonders release 1.4.2";

new Dependence(__name__, 1)
	.addDependence("AncientWondersAPI", "https://icmods.mineprogramming.org/mod?id=682")
	.setLaunch(function(all_api,api) {
		if(api.versionAPI >= min_version)
			Launch(api);
		else{
			Debug.error("Не удалось загрузить Ancient wonders addition, минимальная версия api "+min_version+", у вас "+api.versionAPI+", рекомендуется версия мода "+recommended_version);
			Debug.bitmap(FileTools.ReadImage(AncientWonders.getDir()+"mod_icon.png"), "Не удалось загрузить Ancient wonders addition");
			alert("Минимальная версия api "+min_version+", у вас "+api.versionAPI+", рекомендуется версия мода "+recommended_version);
		}
	});