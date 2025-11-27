IMPORT("TileRender");
IMPORT("StorageInterface");
IMPORT("BackpackAPI");
IMPORT("EnhancedRecipes");

const Color = android.graphics.Color;
const canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");


UI.TextureSource.put("bfurnace_button_up", UI.FrameTextureSource.get("default_button_up").expandAndScale(128, 16, 1, Color.parseColor("#a1918c")));
UI.TextureSource.put("bfurnace_button_down", UI.FrameTextureSource.get("default_button_down").expandAndScale(128, 16, 1, Color.parseColor("#706561")));