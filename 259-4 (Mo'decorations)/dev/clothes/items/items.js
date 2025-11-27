importLib("ToolType","*");

//ткани

IDRegistry.genItemID("tk");
Item.createItem("tk","белая ткань",{name:"tk",meta:0},{});

IDRegistry.genItemID("tk1");
Item.createItem("tk1","светло-серая ткань",{name:"tk",meta:1},{});

IDRegistry.genItemID("tk2");
Item.createItem("tk2","серая ткань",{name:"tk",meta:2},{});

IDRegistry.genItemID("tk3");
Item.createItem("tk3","темно-серая ткань",{name:"tk",meta:3},{});

IDRegistry.genItemID("tk4");
Item.createItem("tk4","красная ткань",{name:"tk",meta:4},{});

IDRegistry.genItemID("tk5");
Item.createItem("tk5","зеленая ткань",{name:"tk",meta:5},{});

IDRegistry.genItemID("tk6");
Item.createItem("tk6","темно-зеленая ткань",{name:"tk",meta:6},{});

IDRegistry.genItemID("tk7");
Item.createItem("tk7","синяя ткань",{name:"tk",meta:7},{});

IDRegistry.genItemID("tk8");
Item.createItem("tk8","желтая ткань",{name:"tk",meta:8},{});

IDRegistry.genItemID("tk9");
Item.createItem("tk9","розовая ткань",{name:"tk",meta:9},{});

IDRegistry.genItemID("tk10");
Item.createItem("tk10","фиолетовая ткань",{name:"tk",meta:10},{});

IDRegistry.genItemID("tk11");
Item.createItem("tk11","голубая ткань",{name:"tk",meta:11},{});

IDRegistry.genItemID("tk12");
Item.createItem("tk12","черная ткань",{name:"tk",meta:12},{});

//для пошива

IDRegistry.genItemID("g");
Item.createItem("g","джинса",{name:"g",meta:0},{});

IDRegistry.genItemID("nit");
Item.createItem("nit","нитки",{name:"nit",meta:0},{});

IDRegistry.genItemID("igla");
Item.createItem("igla","игла",{name:"igla",meta:0},{});
Item.setToolRender(ItemID.igla, true); 
ToolAPI.addToolMaterial("igla", {durability: 300, level: 3, efficiency: 0, damage: 6, enchantability: 14}); 
ToolAPI.setTool(ItemID.igla, "igla", ToolType.sword);

IDRegistry.genItemID("sh");
Item.createItem("sh","шнурки",{name:"sh",meta:0},{});

//все что касается резины

IDRegistry.genItemID("pod");
Item.createItem("pod","подошва",{name:"pod",meta:0},{});

IDRegistry.genItemID("extract");
Item.createItem("extract","экстракт резины",{name:"extract",meta:0},{});

IDRegistry.genItemID("ruber");
Item.createItem("ruber","резина",{name:"ruber",meta:0},{});

IDRegistry.genItemID("boot");
Item.createItem("boot","бутылек",{name:"boot",meta:0},{});

IDRegistry.genItemID("kra");
Item.createItem("kra","краник",{name:"kra",meta:0},{});

//ремень

IDRegistry.genItemID("rem");
Item.createItem("rem","ремень",{name:"rem",meta:0},{});