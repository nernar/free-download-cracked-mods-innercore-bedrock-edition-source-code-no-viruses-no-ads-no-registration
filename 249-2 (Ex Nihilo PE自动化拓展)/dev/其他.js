importLib("energylib", "*");
importLib("fanyi", "*");
importLib("MachineRender", "*");
importLib("ChargeItem","*");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

var Sievecon = {
	"foric": __config__.access("for_ic"),
	"forhc": __config__.access("fot_hc")
};

if(
Sievecon.foric
){
	IDRegistry.genItemID("um_铜碎矿");
	IDRegistry.genItemID("um_锡碎矿");
	IDRegistry.genItemID("um_铅碎矿");
	
	IDRegistry.genItemID("um_铜矿渣");
	IDRegistry.genItemID("um_锡矿渣");
	IDRegistry.genItemID("um_铅矿渣");
	
	IDRegistry.genBlockID("um_铜矿砂"); 
	IDRegistry.genBlockID("um_锡矿砂"); 
	IDRegistry.genBlockID("um_铅矿砂"); 
	
	IDRegistry.genItemID("dustCopper")
	IDRegistry.genItemID("dustTin")
	IDRegistry.genItemID("dustLead")
	
	IDRegistry.genItemID("ingotCopper")
	IDRegistry.genItemID("ingotTin")
	IDRegistry.genItemID("ingotLead")
	
	IDRegistry.genItemID("rubberSapling")
	IDRegistry.genItemID("uraniumChunk")
};

if(
Sievecon.forhc
){
IDRegistry.genItemID("appleSapling");
IDRegistry.genItemID("salt");

IDRegistry.genItemID("strawberry_seed");
IDRegistry.genItemID("raspberry_seed");
IDRegistry.genItemID("cranberry_seed");
IDRegistry.genItemID("blueberry_seed");
IDRegistry.genItemID("blackberry_seed");

IDRegistry.genItemID("candleberryseed");
IDRegistry.genItemID("grape_seed");
IDRegistry.genItemID("cucumber_seed");
IDRegistry.genItemID("onion_seed");
IDRegistry.genItemID("cabbage_seed");

IDRegistry.genItemID("tomato_seed");
IDRegistry.genItemID("bellpepper_seed");
IDRegistry.genItemID("garlic_seed");
IDRegistry.genItemID("lettuce_seed");
IDRegistry.genItemID("coffee_seed");

IDRegistry.genItemID("peas_seed");
IDRegistry.genItemID("chili_pepper_seed");
IDRegistry.genItemID("spice_leaf_seed");
IDRegistry.genItemID("corn_seed");
IDRegistry.genItemID("peppercorn_seed");

IDRegistry.genItemID("um_盐碎矿");
	
};

