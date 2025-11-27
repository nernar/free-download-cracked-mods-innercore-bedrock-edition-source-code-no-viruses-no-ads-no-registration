LIBRARY({
    name:"GUILib",
    version:"1",
    api:"CoreEngine",
    shared:false
});

var GUI = {
    createObject:function(text){
        if(GUI.creationUI) delete GUI.creationUI;
        GUI.creationUI = {
    standart: {
        header: {
            text: {
                text: text
            }
        },
        
        inventory: {
            standart: true
           
        },
        
        background: {
            standart: true
            
        }
    },
    
    drawing: [
      
    ],
    
    elements: {
       
    },
    
    params:{textures:{}}
}
    },
    addDrawableObject:{
        background:function(color){
            GUI.creationUI.drawing.push({type: "background", color: color})
        },
        bitmap:function(bitmap, coords, scale){
            if(!scale) scale = 1;
            GUI.creationUI.drawing.push({type: "bitmap", bitmap: bitmap, x: coords.x, y: coords.y, scale: scale})
        },
        frame:function(coords, bitmap, scale){
            if(!scale) scale = 1;
            GUI.creationUI.drawing.push({type: "frame", x: coords.x, y: coords.y, scale: scale, bitmap: bitmap})
        },
        text:function(text, coords){
            GUI.creationUI.drawing.push({type: "text", text: text, x: coords.x, y: coords.y})
        }
    },
    addElement:{
        scale:function(name, coords, direction, bitmap, scale, invert){
            if(!invert) invert = false;
            GUI.creationUI.elements[name] = {type: "scale", x: coords.x, y: coords.y, direction: direction, bitmap: bitmap, invert: invert, scale: scale}
        },
        text:function(name, coords, width, height, text){
            GUI.creationUI.elements[name] = {type: "text", x: coords.x, y: coords.y, width: width, height: height, text: text}
        },
        slot:function(name, coords, size, visual){
            if(!visual) visual = false
            GUI.creationUI.elements[name] = {type:"slot", x: coords.x, y: coords.y, visual: visual}
        },
        button:function(name, coords, bitmap, scale, clicker){
            GUI.creationUI.elements[name] = {type: "button", x: coords.x, y: coords.y, bitmap: bitmap, scale: scale};
            if(clicker.onClick){
                GUI.creationUI.elements[name].onClick = function(container, tileEntity, position){clicker.onClick(container, tileEntity, position)}
            }
            if(clicker.onLongClick){
                GUI.creationUI.elements[name].onLongClick = function(container, tileEntity, position){clicker.onLongClick(container, tileEntity, position)}
            }
        }
    },
    importScreen:function(){
        return new UI.StandartWindow(GUI.creationUI)
    },
    editStyles:function(styles){
        var style = {}
        if(styles.slot) style.slot = styles.slot;
        if(styles.invSlot) style.invSlot = styles.invSlot;
        if(styles.selecttion) style = styles.selection;
        if(styles.closeButton) style = styles.closeButton;
        if(styles.closeButton2) style = styles.closeButton2;
        if(styles.frame) style = styles.frame;
        for(var i in style){
            GUI.creationUI.params.textures[style[i]] = style[i];
        }
    }
}

EXPORT("GUI", GUI);