let GuideAPI;
let GuideHelper;
let PageControllers;
ModAPI.addAPICallback("GuideAPI", function(api){
	GuideAPI = api.GuideAPI;
	GuideHelper = api.GuideHelper;
	PageControllers = api.PageControllers;
	Utility.createButtonTex(18, 18);
});


Callback.addCallback("PostLoaded", function(){

	if(!GuideAPI){
		return
	}

	const Func = {
		link: function(key){
			return function(){
				GuideAPI.openPage(GuideAPI.openedGuide.pages[key]);
			}
		},
		field: function(key){
			return function(){
				SHammer.returnInv();
				SHammer.setField(ItemID[key]) && GuideAPI.container.close();
			}
		}
	};

	const Page = {

		main: function(params, elements, con, section){
			const xp = {left: 50, right: 550}[section];
			let yp = 100;
			let link;
			for(let i = 0; i < 3; i++){
				elements["slot_" + params.items[i].link] = {type: "slot", x: xp, y: yp, size: 100, bitmap: "slot_empty", visual: true, clicker: {onClick: Func.link(params.items[i].link)}};
				elements["text_" + params.items[i].link] = {type: "text", x: xp + 100, y: yp + 60, font: {size: 20}, text: params.items[i].name};
				con.setSlot("slot_" + params.items[i].link, ItemID[params.items[i].icon], 1, 0);
				yp += 150;
			}
		},

		recipe: function(params, elements, con, section){
			params.items.push(280, 280, 280, 280);
			elements.title = {type: "text", x: 90, y: 90, font: {size: 24}, text: params.title};
			elements.slot0 = {type: "slot", x: 90, y: 150, visual: true};
			elements.slot1 = {type: "slot", x: 150, y: 150, visual: true};
			elements.slot2 = {type: "slot", x: 210, y: 150, visual: true};
			elements.slot3 = {type: "slot", x: 270, y: 150, visual: true};
			elements.slot4 = {type: "slot", x: 330, y: 150, visual: true};
			elements.slot5 = {type: "slot", x: 90, y: 210, visual: true};
			elements.slot6 = {type: "slot", x: 150, y: 210, visual: true};
			elements.slot7 = {type: "slot", x: 210, y: 210, visual: true};
			elements.slot8 = {type: "slot", x: 270, y: 210, visual: true};
			elements.slot9 = {type: "slot", x: 330, y: 210, visual: true};
			elements.slot10 = {type: "slot", x: 210, y: 270, visual: true};
			elements.slot11 = {type: "slot", x: 210, y: 330, visual: true};
			elements.slot12 = {type: "slot", x: 210, y: 390, visual: true};
			elements.slot13 = {type: "slot", x: 210, y: 450, visual: true};
			let item;
			for(let i = 14; i--;){
				if(typeof params.items[i] == "number"){
					con.setSlot("slot" + i, params.items[i], 1, 0);
				}
				else{
					item = params.items[i].split(":");
					con.setSlot("slot" + i, item[0], 1, item[1]);
				}
			}
		},

		infoBasic: function(params, elements, con, section){
			GuideHelper.drawTextArray(params.elements, 550, 50, 13, elements, section);
			elements.button = {type: "button", x: 722, y: 300, bitmap: "btnNJJ1_18x18", bitmap2: "btnNJJ2_18x18", scale: 3.2, clicker: {
				onClick: function(){
					SHammer.returnInv();
					SHammer.setField(ItemID[params.result]) && GuideAPI.container.close();
				}
			}};
			elements.slotResult = {type: "slot", x: 722, y: 298, z: 1, bitmap: "slot_empty", visual: true};
			con.setSlot("slotResult", ItemID[params.result], 1, 0);
		},

		infoSpecial: function(params, elements, con, section){
			GuideHelper.drawTextArray(params.elements, 550, 50, 13, elements, section);
			let xp = 560;
			let yp = 300;
			for(let key in SHammer.params){
				if(ItemID[params.type + key]){
					elements["button" + key] = {type: "button", x: xp, y: yp, bitmap: "btnNJJ1_18x18", bitmap2: "btnNJJ2_18x18", scale: 3.2, clicker: {onClick: Func.field(params.type + key)}};
					elements["slot" + key] = {type: "slot", x: xp, y: yp - 2, z: 1, bitmap: "slot_empty", visual: true};
					con.setSlot("slot" + key, ItemID[params.type + key], 1, 0);
					xp += 65;
					if(xp >= 950){
						xp = 560;
						yp += 65;
					}
				}
			}

		},

		image: function(params, elements, con, section){
			elements.text = {type: "text", x: 90, y: 90, font: {size: 32}, text: params.title};
			elements.image = {type: "image", x: 70, y: 150, bitmap: params.image, scale: 0.3};
		}

	};


	GuideAPI.registerGuide("SparksHammersGuide", {
		pages: {

			default: {
				left: {
					controller: Page.main,
					items: [
						{name: "Regular Hammers", icon: "hamIron", link: "hammer"},
						{name: "Regular Excavators", icon: "excIron", link: "excavator"},
						{name: "Mini Hammer", icon: "hamMini", link: "mini"}
					]
				},
				right: {
					controller: Page.main,
					items: [
						{name: "Giant Hammer", icon: "hamGiant", link: "giant"},
						{name: "Netherstar Hammer", icon: "hamNetherstar", link: "netherstar"},
						{name: "Mjolnir", icon: "hamMjolnir", link: "mjolnir"}
					]
				}
			},

			hammer: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Regular Hammers",
					items: [265, 265, 265, 265, 265, 265, 265, 265, 265, 265]
				},
				right: {
					controller: Page.infoSpecial,
					elements: [
						{text: "Hammers are items like pickaxes except they mine out a 3×3 area around the block broken."},
						{text: "However, like pickaxes, they will only effectively mine out stone-like materials."},
						{text: "Also, the extra blocks around the block hit will only break if their hardness is less than or equal to the block hit."}
					],
					type: "ham"
				}
			},

			excavator: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Regular Excavators",
					items: [0, 265, 265, 265, 0, 265, 265, 265, 265, 265]
				},
				right: {
					controller: Page.infoSpecial,
					elements: [
						{text: "Excavators are essentially the dirt-like material efficient tool equivalent of the hammers."},
						{text: "They will dig out a 3×3 area of dirt-like blocks."}
					],
					type: "exc"
				}
			},

			mini: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Mini Hammer",
					items: [0, 265, 265, 265, 0, 0, 265, 265, 265, 0]
				},
				right: {
					controller: Page.infoBasic,
					elements: [
						{text: "The Mini Hammer, instead of mining a 3×3, will mine out a 1×3 area (3 blocks vertically)."},
						{text: "Sneaking will change the mined area to a 3×1 area (3 blocks horizontally)."},
						{text: "Note that due to it’s smaller size, it has less durability than a regular hammer."}
					],
					result: "hamMini"
				}
			},

			giant: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Giant Hammer",
					items: [42, 42, 42, 42, 42, 42, 42, "351:5", 42, 42]
				},
				right: {
					controller: Page.infoBasic,
					elements: [
						{text: "The Giant Hammer, instead of mining a 3×3, will mine out a 9×9 area."},
						{text: "If you are flying or are mining up or down, then the area is centered on the block hit."},
						{text: "Otherwise the area will be shifted upwards so that the bottom of the mined area is at the floor level of the player."},
						{text: "Due to the increased material cost and size of the hammer, it has much more durability than a regular hammer."}
					],
					result: "hamGiant"
				}
			},

			netherstar: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Netherstar Hammer",
					items: [264, 264, 41, 264, 264, 264, 41, 399, 41, 264]
				},
				right: {
					controller: Page.infoBasic,
					elements: [
						{text: "The Nether Star Hammer is a powerful hammer capable of creating tunnels with a single use."},
						{text: "It will mine a 3×3 hole 16 blocks deep by default and the hammer will only have 10 durability."},
						{text: "1 durability will be used for every tunnel mined."}
					],
					result: "hamNetherstar"
				}
			},

			mjolnir: {
				preLink: "default",
				left: {
					controller: Page.image,
					title: "Mjolnir",
					image: "imageShrine"
				},
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "This legendary hammer, “forged in the heart of a dying star”, has been lying dormant in a shrine somewhere out in the world just waiting for the right person to pick it up."},
						{text: "Many have seen it, and some have built a shrine around it to keep it safe from those unworthy of it’s power."},
						{text: "Perhaps you are worthy of this mighty hammer?"},
						{text: "It is heard that worthiness can be gained in the slaying of a great beast in another dimension…"}
					]
				}
			}

		}
	});

});