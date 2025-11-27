const BLOCK_STONE = Block.createSpecialType({
	solid: true,
	renderlayer: EBlockRenderLayer.BLEND,
	explosionres: 4.0,
	lightopacity: 15,
	translucency: 0.0
});

const translate = function(str, args) {
	try {
		str = Translation.translate(str);
		if (args !== undefined) {
			Array.isArray(args) || (args = [args]);
			str = java.lang.String.format(str, args);
		}
		return "" + str;
	} catch (e) {
		Logger.Log("Aboba#translate: " + e, "ERROR");
		return "" + str;
	}
};