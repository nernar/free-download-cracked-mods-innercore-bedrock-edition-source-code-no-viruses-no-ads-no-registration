//IMPORT("ScrutinyAPI")
/*var UITabbed = new UI.TabbedWindow({
    location: {
        width: 650,
        height: 350,
        x: 150,
        y: 50,
    },
    elements:{},
    drawing:[]
});
var Study = {
    container: new UI.Container(),
    count: 1,
    registerElements: function(){
        this.element = {};
        this.drawing = [];
        this.items = {};
        this.id = 0;
        this.addStudy = function(button){
            let id = this.id;
            if(id != 0 && button.line){
                this.drawing.push({
                    type: "line", 
                    x1: this.element["slot"+button.id].x + 30, 
                    y1: this.element["slot"+button.id].y + 30, 
                    x2: button.x + 30, 
                    y2: button.y + 30,
                    width: 8
                });
            }
             this.element["button"+id] = {
                type: "button",
                x: button.x, 
                y: button.y, 
                scale: 5,
                bitmap: "classic_frame_bg_light_border", 
                bitmap2: "classic_frame_bg_dark",
            };
            this.element["slot"+id] = {
                type: "slot",
                bitmap: "slot",
                x: button.x - 7, 
                y: button.y - 7, 
                size: 85,
                visual: true
            };
            this.items["slot"+id] = button.item ||{};
            this.id++;
            return id;
        }
        this.getElement = function(){
            return this.element;
        }
    },
    addTab: function(bitmap, elements){
        elements = elements || {};
        UITabbed.setTab(this.count, {
            "button": {
                type: "button",
                bitmap: "air",
                x: -35, 
                y: -35, 
                scale: 4.5,
                clicker: {
                    onClick: function(position, container, tileEntity, window, canvas, scale){
                        let keys = Object.keys(elements.items);
                        for(let i in keys){
                            container.setSlot(keys[i], elements.items[keys[i]].id || 1, 1, elements.items[keys[i]].data || 0, null);
                        }
                    }
                }
            },
            "image": {
                type: "image", 
                x: -30, 
                y: -30, 
                scale: 4.0,
                bitmap: bitmap || "air"
            }
        }, {
            drawing: elements.drawing,
            elements: elements.element
        },true);
        this.count++;
    }
};
let element = new Study.registerElements();
element.addStudy({
    x: 50,
    y: 50,
    item: {
        id: 264
    }
});
element.addStudy({
    x: 100,
    y: 200,
    line: true,
    id: 0,
    item: {
        id: 263,
        data: 1
    }
});
Study.addTab("bitmap", element);
element = new Study.registerElements();
element.addStudy({
    x: 50,
    y: 50,
    item: {
        id: 264
    }
});
element.addStudy({
    x: 100,
    y: 200,
    line: true,
    id: 0,
    item: {
        id: 263,
        data: 1
    }
});
element.addStudy({
    x: 300,
    y: 100,
    item: {
        id: 266
    }
});
Study.addTab("bitmap", element);


Callback.addCallback("ItemUse",  function(coords, item, block, isExter, player){
    Study.container.openAs(UITabbed);
});*/