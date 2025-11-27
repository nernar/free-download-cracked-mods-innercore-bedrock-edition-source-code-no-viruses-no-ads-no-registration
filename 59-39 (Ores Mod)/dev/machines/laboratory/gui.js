GUI.createObject(Translation.translate("Laboratory Block"));

GUI.addDrawableObject.bitmap("research", {x: 533, y: 153}, 3.6);
GUI.addDrawableObject.bitmap("arrow_bg_bottom", {x: 573, y: 107}, 2);
GUI.addDrawableObject.bitmap("arrow_bg_bottom", {x: 573, y: 271}, 2);
GUI.addDrawableObject.bitmap("background", {x: 662, y: 143/2}, 3.6);

GUI.addElement.slot("chipSlot", {x: 564, y: 56})

GUI.addElement.slot("burntChipSlot", {x: 464, y: 316});
GUI.addElement.slot("splitterChipSlot", {x: 514, y: 316});
GUI.addElement.slot("quantomDetectorChipSlot", {x: 564, y: 316});
GUI.addElement.slot("densityControllerChipSlot", {x: 614, y: 316});
GUI.addElement.slot("matterDriveChip", {x: 664, y: 316});

GUI.addElement.scale("researchScale", {x: 533, y: 153}, 3, "research_full", 3.6);
GUI.addElement.scale("energyScale", {x: 662+3.6*4, y: 143/2}, 0,"scale", 3.6);

if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 383}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 400}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 340, y: 423}, {size: 14, color: UIColor.WHITE});

    GUI.addElement.text("chipListener", {x: 350, y: 450}, 300, 20, "В слоте сверху должна быть исследовательская микросхема", {color: UIColor.RED, size: 15});
    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 411}, 0, 0, "Простаивает", {color: UIColor.YELLOW, size: 14});
}

gui.laboratory = GUI.importScreen();