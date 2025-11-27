LIBRARY({
    name: "ScrutinyAPI",
    version: 7, 
    api: "CoreEngine",
});
/*
Автор: Reider ___
Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода
    3.Явное копирование кода

    Используя библиотеку вы автоматически соглашаетесь с этими правилами.
*/
var UITabbed = new UI.TabbedWindow({
    location: {
        width: 650,
        height: 350,
        x: 150,
        y: 50,
    },
    elements:{
        "text": {x: 100, y: 100, text: "hello world!"}
    },
    drawing:[]
});
UITabbed.setDefaultTab(0);
var ScrutinyAPI = {
    windows: {},
    registerWindow: function(name){
        this.windows[name] = {
            container: new ItemContainer(),
            tabs: {}
        };
        let _this = this;
        Network.addClientPacket("client."+name, function(packetData) {
             _this.windows[packetData.name].container.registerScreenFactory("Scrutiny.ui."+packetData.name, function(container, n){ 
                return UITabbed;
            });
        });
        Network.addClientPacket("server."+name, function(packetData){
            _this.openWindowServer(packetData.player, packetData.name)
        });
    },
    addTab: function(windowName, name, image){
        this.windows[windowName].tabs[name] = {
            image: image || null,
            items: {},
            elements: {},
            drawing: []
        };
    },
    addStudies: function(windowName, tabName, name, obj){
        this.windows[windowName].tabs[tabName].elements[name+"Button"+tabName] = {
            type: "button",
            x: obj.x, 
            y: obj.y, 
            scale: 5,
            bitmap: "classic_frame_bg_light_border", 
            bitmap2: "classic_frame_bg_dark",
        };
        this.windows[windowName].tabs[tabName].elements[name+"Slot"+tabName] = {
            type: "slot",
            bitmap: "air",
            x: obj.x - 7, 
            y: obj.y - 7, 
            size: 85,
            visual: true
        };
        this.windows[windowName].tabs[tabName].items[name+"Slot"+tabName] = obj.item || {};
    },
    openWindowServer: function(player, name){
        
        let keys = Object.keys(this.windows[name].tabs);
        let _this = this;
        for(let i in keys){
            UITabbed.setTab(parseInt(i) + 1, {
                "button": {
                    type: "button",
                    bitmap: "air",
                    x: -35, 
                    y: -35, 
                    scale: 4.5,
                    clicker: {
                        onClick: function(position, container, tileEntity, window, canvas, scale){
                            let keys2 = Object.keys(_this.windows[name].tabs[keys[i]].items);
                            for(let a in keys2){
                                 container.setSlot(keys2[a], _this.windows[name].tabs[keys[i]].items[keys2[a]].id || 1, 1, _this.windows[name].tabs[keys[i]].items[keys2[a]].data || 0, null);
                            }
                        }
                    }
                },
                "image": {
                    type: "image", 
                    x: -30, 
                    y: -30, 
                    scale: 4.0,
                    bitmap: this.windows[name].tabs[keys[i]].image || "air"
                }
            }, {
                elements: this.windows[name].tabs[keys[i]].elements,
                drawing: this.windows[name].tabs[keys[i]].drawing
            });
        }
        this.windows[name].container.setClientContainerTypeName("Scrutiny.ui."+name);
        let client = Network.getClientForPlayer(player);
        client.send("client."+name, {
            name: name
        });
        this.windows[name].container.openFor(client, "main");
    },
    openWindowClient: function(player, name){
        Network.sendToServer("server."+name, {
            player: player,
            name: name
        })
    }
};
ScrutinyAPI.registerWindow("test");
ScrutinyAPI.addTab("test", "tab", "bitmap");
ScrutinyAPI.addStudies("test", "tab", "test", {
    x: 100,
    y: 100
});
ScrutinyAPI.addTab("test", "tab2", "bitmap");
ScrutinyAPI.addStudies("test", "tab2", "test", {
    x: 200,
    y: 100
});
Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
    ScrutinyAPI.openWindowServer(player, "test");
});