let Options = {
	theme: __config__.get("theme")||"black",
	
	isThemeBlack(){
		return this.theme == "black";
	}
};