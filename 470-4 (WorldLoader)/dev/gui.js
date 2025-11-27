IMPORT("GUILib");
var TextView = android.widget.TextView, Color = android.graphics.Color, Typeface = android.graphics.Typeface, RelativeLayout = android.widget.RelativeLayout, ScrollView = android.widget.ScrollView;
GUI.WorldItem = function (world) {
    GUI.IElement.apply(this, arguments);
    this.type = "worlditem";
    this.setOnClick = function () {
    };
    this.setOnLongClick = function () {
    };
    this.onCreate = function () {
        this.view = new RelativeLayout(GUI.ctx);
        this.view.setBackgroundDrawable(GUI.createDrawable(GUI.DefaultTextures.button.pressed));
        var icon = new GUI.Image(GUI.getScaledBitmap(GUI.getBitmap(world.icon), 120, 120));
        icon.window = this.window;
        icon.create();
        params = new RelativeLayout.LayoutParams(120, 120);
        params.setMargins(10, 10, 0, 0);
        this.view.addView(icon.view, params);
        var title_text = world.name;
        if (world.version) {
            title_text += " [" + world.version + "]";
        }
        var title = new GUI.Text(title_text);
        title.setTextSize(30);
        title.window = this.window;
        title.create();
        params = new RelativeLayout.LayoutParams(GUI.Size.WRAP_CONTENT, GUI.Size.WRAP_CONTENT);
        params.setMargins(140, 10, 0, 0);
        this.view.addView(title.view, params);
        var mod_name = new GUI.Text(world.mod);
        mod_name.setTextSize(20);
        mod_name.create();
        mod_name.window = this.window;
        params = new RelativeLayout.LayoutParams(GUI.Size.WRAP_CONTENT, GUI.Size.WRAP_CONTENT);
        params.setMargins(140, 47, 0, 0);
        this.view.addView(mod_name.view, params);
        if (world.author) {
            var author = new GUI.Text(world.author);
            author.setTextSize(20);
            author.create();
            params = new RelativeLayout.LayoutParams(GUI.Size.WRAP_CONTENT, GUI.Size.WRAP_CONTENT);
            params.setMargins(140, 72, 0, 0);
            this.view.addView(author.view, params);
        }
        var button = new GUI.Button("Create");
        button.window = this.window;
        button.create();
        if (world.not_loaded) {
            button.setText("Download");
        }
        button.setOnClick(function (c) {
            WorldLoader.selectWorld = world;
            if (world.not_loaded) {
                try {
                    c.open(WorldLoaderUI.progressWindow);
                    new File(__dir__ + "/.tmp/").createDirectory();
                    var WLZ = new ZIP(__dir__ + "/.tmp/world.zip");
                    WorldLoaderUI.Events.progressLoad(0, 1);
                    File.download(world.link, WLZ, {progress: WorldLoaderUI.Events.progressLoad, end: WorldLoaderUI.Events.unzip});
                }
                catch (e) {
                    alert("ERR: " + e);
                }
                return;
            }
            c.open(WorldLoaderUI.createWorld);
            if (world.gamemode !== undefined && [0, 1].indexOf(world.gamemode) != -1) {
                WorldLoaderUI.createWorld.getElement("creative").setVisibility(false);
                WorldLoaderUI.createWorld.getElement("survival").setVisibility(false);
                WorldLoaderUI.createWorld.getElement("create").setY(453);
            } else {
                WorldLoaderUI.createWorld.getElement("creative").setVisibility(true);
                WorldLoaderUI.createWorld.getElement("survival").setVisibility(true);
                WorldLoaderUI.createWorld.getElement("create").setY(560);
            }
            var title_text = world.name;
            if (world.version) {
                title_text += " [" + world.version + "]";
            }
            WorldLoaderUI.createWorld.getElement("t1").setText(title_text);
            WorldLoaderUI.createWorld.getElement("t2").setText(world.mod);
            WorldLoaderUI.createWorld.getElement("t3").setText(world.author || "");
            WorldLoaderUI.createWorld.getElement("name").setText(world.name);
            WorldLoaderUI.createWorld.getElement("icon").setSource(GUI.getScaledBitmap(GUI.getBitmap(world.icon), 200, 200));
        });
        params = new RelativeLayout.LayoutParams(GUI.Size.WRAP_CONTENT, GUI.Size.WRAP_CONTENT);
        params.addRule(RelativeLayout.ALIGN_PARENT_RIGHT);
        params.setMargins(0, 22, 10, 0);
        this.view.addView(button.view, params);
    };
};
GUI.IWindow.ElementTypes["worlditem"] = function (settings) {
    settings.height = 140;
    settings.width = GUI.Size.MATCH_PARENT;
    return new GUI.WorldItem(settings.world);
};
GUI.WorldItem.prototype = Object.create(GUI.IElement.prototype);

