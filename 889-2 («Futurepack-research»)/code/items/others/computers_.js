IDRegistry.genItemID("core"); 
Item.createItem("core", "Entronium core", {name: "core", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.core, "core", 1, [0,1,2,3,4,5,6,7]);

	IDRegistry.genItemID("ram"); 
Item.createItem("ram", "Entronium ram", {name: "ram", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.ram, "ram", 1, [0,1,2,3,4,5,6,7]);

IDRegistry.genItemID("spawn_note"); 
Item.createItem("spawn_note", "A note", {name: "spawn_note", meta: 0}, {stack: 1});
let SPN = new UI.Container();
Item.registerUseFunction("spawn_note", function(coords, item, block, player) {
	SPN.openAs(SPAWNOTE)
});
var SPAWNOTE = new UI.Window({
	location: {
    	x: 310/ 1.1 - 22.4,
        y: 260,
        width: 435,
        height: 560
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"spawnnote", scale: 4.0,x: 0,y: 5}],
    elements: {
       "closeButton": {type: "closeButton", x: 0, y: 100, global: false, bitmap: "futurevoid", scale: 1000 },
     }
  }
);
let statuses = ["Core: Unworking","Ram: Unworking","Core: 1\nMax Temp: 175.0",
"Core: 2\nMax Temp: 200.0","Core: 3\nMax Temp: 250.0","Core: 4\nMax Temp: 275.0","Core: 5\nMax Temp: 850.0","Core: 7\nMax Temp: 450.0","Core: 7\nMax Temp: 1100.0","Core: 2\nMax Temp: 2100.0","Core: 0\nMax Temp: 10000.0",//"Core: 10\nMax Temp: 100000.0",
"Ram: 1.0\nCorepower: 1\nMax. Temp:150.0","Ram: 2.0\nCorepower: 1\nMax. Temp:175.0","Ram: 3.0\nCorepower: 1\nMax. Temp:200.0","Ram: 4.0\nCorepower: 1\nMax. Temp:225.0","Ram: 5.0\nCorepower: 1\nMax. Temp:800.0","Ram: 7.0\nCorepower: 1\nMax. Temp:400.0","Ram: 7.0\nCorepower: 1\nMax. Temp:1000.0","Ram: 8.0\nCorepower: 1\nMax. Temp:2000.0","Ram: 0.0\nCorepower: 1\nMax. Temp:100000.0","Chip: Unworking","Chip: Why you need support chip?","Chip: ultimate","Chip: navigation","Chip: logic +-","Chip: network","Chip: transport","Chip: industrial","Chip: tactic","Chip: damage controlling","Chip: Alon I","Core: breaking","Machine board: modified double","Machine board","Flash speicher","Flash speicher","Flash speicher","Flash speicher","Flash speicher","Flash speicher"]
IDRegistry.genItemID("videocore"); 
Item.createItem("videocore", "Video core", {name: "videocore", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.videocore, "videocore", 1, [0,1]);
Item.registerNameOverrideFunction(ItemID.videocore, function(item,name){return Translation.translate("Video core") + "\n§6" + Translation.translate("Transmission of information: 4 mb/s")});
Translation.addTranslation("Transmission of information: 4 mb/s",{ru: "Передача видеоинформации: 4кб/с"});

let cores = ["toasted_core","toasted_ram","standart_core","a1_core","p2_core","tct_core","master_core","non_core","dungeon_core","univ_core","zombie_core","standart_ram","a_ram","p_ram","tct_ram","master_ram","non_ram","dungeon_ram","univ_ram","zombie_ram","toasted_chip","support_chip","ultimate_chip","navigation_chip","logic_chip","network_chip","chip_transport","industrie_chip","tactic_chip","damage_control_chip","ai_chip","fragment_core","double_machine_board","machine_board","a_i_flash_speicher_a","a_i_flash_speicher_b","a_i_flash_speicher_c","a_i_flash_speicher_d","a_i_flash_speicher_e","a_i_flash_speicher_f"];

let coresName = ["Toasted core","Toasted RAM","Standart core","Alon I Core","Penton II Core","TCT Core","Master Mind Core","NoN Core","Dungeon Heart Core","Torus Core","Zombie Core","Standard RAM","Alon RAM","Penton RAM","TCT RAM","Master RAM","NoN Ram","Dungeon RAM","Torus RAM","Zombie RAM","Toasted CHIP","Support CHIP","Ultimate CHIP","Navigation CHIP","Logic CHIP","Network CHIP","Transport CHIP","Industrial CHIP","Tactic CHIP","Damage Control CHIP","AI CHIP","Fragment Core","Double Machine Board","Machine Board","Flash Speicher 0","Flash Speicher 1","Flash Speicher 2","Flash Speicher 3","Flash Speicher 4","Flash Speicher 5"];
for(var i in cores){let a = cores[i];
	let b = coresName[i];
	let c = statuses[i];
	IDRegistry.genItemID(a); 
Item.createItem(a, b, {name: a, meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID[a], function(item,name){return Native.Color.GOLD+ name + "\n§7" + c});
};

IDRegistry.genItemID("fabricator_component"); 
Item.createItem("fabricator_component", "Mini fabricator", {name: "fabricator_item", meta: 0}, {stack: 1});
