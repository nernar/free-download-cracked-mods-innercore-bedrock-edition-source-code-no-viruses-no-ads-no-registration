function FramedButton(coords, w, h, clicker) {
    if (!clicker) {
        clicker = {onClick: function () {
        }};
    }
    var frameTextureUp = UI.FrameTextureSource.get("mod_browser_frame_button").expandAndScale(w, h, 4, android.graphics.Color.rgb(198, 198, 198));
    var frameTextureDown = UI.FrameTextureSource.get("mod_browser_frame_button_down").expandAndScale(w, h, 4, android.graphics.Color.rgb(198, 205, 250));
    var name1 = "_btntexture1_" + w + "x" + h;
    var name2 = "_btntexture2_" + w + "x" + h;
    UI.TextureSource.put(name1, frameTextureUp);
    UI.TextureSource.put(name2, frameTextureDown);
    this.type = "button";
    this.x = coords.x;
    this.y = coords.y;
    this.z = coords.z;
    this.bitmap = name1;
    this.bitmap2 = name2;
    this._forceUpdate = Math.random();
    this.clicker = clicker;
}

