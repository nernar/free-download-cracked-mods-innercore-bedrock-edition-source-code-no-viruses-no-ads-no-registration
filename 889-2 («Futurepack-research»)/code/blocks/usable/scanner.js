IDRegistry.genBlockID("scanner");

let scanners = [];
for(i in colors) {
 scanners.push({
  name: "Scanner",
  texture: [
   ["color_iron_"+colors[i], 0],
   ["scanner_top_"+mcolors[i]+"_an", 0],
   ["luftung_"+mcolors[i], 0],
   ["scanner_"+mcolors[i]+"_an", 0],
   ["color_iron_"+colors[i], 0],
   ["color_iron_"+colors[i], 0]
  ],
  inCreative: true
  })
}

Block.createBlockWithRotation("scanner", scanners, iron_block_type);

for(j in colors) {
 for(m in xrys) {
  Recipes.addShaped({id: BlockID.scanner, count: 1, data: j*4},
	["csc", "ibi", "kek"],
	['s', ItemID.E_scanner, 0, 'k', ItemID.coppercoil, 0, 'c', xrys[m], 0, 'b', BlockID[colors[j]+"_iron_block"], 0, 'i', 265, 0, 'e', ItemID.eisenteile, 0]);
 }
}
var scannerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Scanner"
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
		{
type: "bitmap", 
x: 350, 
y: 30, 
bitmap: "scanner_gui_0", 
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            bitmap: "scanner_slot_0",
            x: 595,
            y: 315,
            size: 66
        },
        slot2: {
            type: "slot",
            bitmap: "scanner_slot_1",
            x: 356,
            y: 45,
            size: 66
        },
button1: { 
type: "button", 
x: 667, 
y: 315, 
scale: 3, 
bitmap: "scanner_button_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
	let leaner = new UI.Container();
 leaner.openAs(SCANNER_L);
 let SCANNER = new UI.Container();
SCANNER.close(ScannerUI);

}}},
button2: { 
type: "button", 
x: 530, 
y: 154, 
scale: 3, 
bitmap: "scanner_button2_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
container.sendEvent("scanclick", {});
}}},
status: { 
type: "button", 
x: 490, 
y: 104, 
scale: 3, 
bitmap: "status_0"
},
buttongeo: { 
type: "button", 
x: 719, 
y: 45, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_geo_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("geoMode", {});
}}},
buttonmor: { 
type: "button", 
x: 774, 
y: 45, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_mor_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("morMode", {});
}}},
buttonhim: { 
type: "button", 
x: 719, 
y: 100, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_him_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("himMode", {});
}}},
buttonneo: { 
type: "button", 
x: 774, 
y: 100, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_neo_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("neoMode", {});
}}},
buttontie: { 
type: "button", 
x: 719, 
y: 155, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_tie_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("tieMode", {});
}}},
buttonpow: { 
type: "button", 
x: 774, 
y: 155, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_pow_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("powMode", {});
}}},
buttonlog: { 
type: "button", 
x: 719, 
y: 210, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_log_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("logMode", {});
}}},
buttonter: { 
type: "button", 
x: 774, 
y: 210, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_ter_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("terMode", {});
}}},
buttonmet: { 
type: "button", 
x: 719, 
y: 265, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_met_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("metMode", {});
}}},
buttonmas: { 
type: "button", 
x: 774, 
y: 265, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_mas_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("masMode", {});
}}},
buttonbio: { 
type: "button", 
x: 719, 
y: 320, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_bio_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("bioMode", {});
}}},
buttonhyd: { 
type: "button", 
x: 774, 
y: 320, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_hyd_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("hydMode", {});
}}},
        scale: {
            type: "scale",
            bitmap: "scanner_scale_0",
            direction: 3,
            x: 375,
            y: 115,
            scale: 3
        }
/*coordsButton1: { 
type: "button", 
x: 300, 
y: 190, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].x -= 1; 
alert(JSON.stringify(content.elements["button2"].x)); 
}}},
coordsButton2: { 
type: "button", 
x: 400, 
y: 190, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].x += 1; 
alert(JSON.stringify(content.elements["button2"].x)); 
}}},
coordsButton3: { 
type: "button", 
x: 350, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].y -= 1; 
alert(JSON.stringify(content.elements["button2"].y)); 
}}},
coordsButton4: { 
type: "button", 
x: 350, 
y: 140, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].y += 1; 
alert(JSON.stringify(content.elements["button2"].x)); 
}}},*/
    }
});

//ЗАРЕГИСТРИРОВАТЬ РЕЦЕПТЫ ПОЗЖЕ
MachineRecipeRegistry.registerRecipesFor("scanner-1", {
  "BlockID.techtable": {data: [1]}
//поршень,мотыга,золото,руда,блок,рельса
 }, true);
MachineRecipeRegistry.registerRecipesFor("scanner-2", {
  1: {sciences:["ter"]}
 }, true);

//ЧЕКАТЬ ТУТ
TileEntity.registerPrototype(BlockID.scanner, {
	containerEvents: {
 	scanclick(container, window, content, data){
			this.data.click = this.data.click + 1;
  },
		resaerchMode(container, window, content, data){
			this.data.resaerch = (this.data.resaerch + 1) % 2;
		},
 	geoMode(container, window, content, data){
			this.data.geo = (this.data.geo + 1) % 2;
		},
 	morMode(container, window, content, data){
			this.data.mor = (this.data.mor + 1) % 2;
		},
 	himMode(container, window, content, data){
			this.data.him = (this.data.him + 1) % 2;
		},
 	neoMode(container, window, content, data){
			this.data.neo = (this.data.neo + 1) % 2;
		},
 	tieMode(container, window, content, data){
			this.data.tie = (this.data.tie + 1) % 2;
		},
 	powMode(container, window, content, data){
			this.data.pow = (this.data.pow + 1) % 2;
		},
 	logMode(container, window, content, data){
			this.data.log = (this.data.log + 1) % 2;
		},
 	terMode(container, window, content, data){
			this.data.ter = (this.data.ter + 1) % 2;
		},
 	metMode(container, window, content, data){
			this.data.met = (this.data.met + 1) % 2;
		},
 	masMode(container, window, content, data){
			this.data.mas = (this.data.mas + 1) % 2;
		},
 	bioMode(container, window, content, data){
			this.data.bio = (this.data.bio + 1) % 2;
		},
 	hydMode(container, window, content, data){
			this.data.hyd = (this.data.hyd + 1) % 2;
		}
	},
	client: {
		containerEvents: {
			setIconResaerch(container, window, content, data){
				if(content)
					content.elements.button1.bitmap = "scanner_button_" + data.resaerch;
			},
setIcon(container, window, content, data){
    if(content){
     content.elements.status.bitmap = "status_"+data.icon;
     content.elements.button2.bitmap = "status_0";
    }
   },
setIconLupe(container, window, content, data){
    if(content){
     content.elements.status.bitmap = "status_scan";
     content.elements.button2.bitmap = "status_0";
     }
},
resetIconLupe(container, window, content, data){
    if(content){
     content.elements.status.bitmap = "status_0";
     content.elements.status.x = 490;
     content.elements.status.y = 104;
     }
},
setXY(container, window, content, data){
    if(content){
     content.elements.status.x = data.x;
     content.elements.status.y = data.y;
     }
},
			setIcon0(container, window, content, data){
				if(content) {
    content.elements.status.bitmap = "status_0";
    content.elements.button2.bitmap = "scanner_button2_0";
    content.elements.status.x = 490;
    content.elements.status.y = 104;
    }
			},
   setIconGeo(container, window, content, data){
				if(content)
					content.elements.buttongeo.bitmap = "scanner_button_geo_" + data.geo;
			},
   setIconMor(container, window, content, data){
				if(content)
					content.elements.buttonmor.bitmap = "scanner_button_mor_" + data.mor;
			},
   setIconHim(container, window, content, data){
				if(content)
					content.elements.buttonhim.bitmap = "scanner_button_him_" + data.him;
			},
   setIconNeo(container, window, content, data){
				if(content)
					content.elements.buttonneo.bitmap = "scanner_button_neo_" + data.neo;
			},
   setIconTie(container, window, content, data){
				if(content)
					content.elements.buttontie.bitmap = "scanner_button_tie_" + data.tie;
			},
   setIconPow(container, window, content, data){
				if(content)
					content.elements.buttonpow.bitmap = "scanner_button_pow_" + data.pow;
			},
   setIconLog(container, window, content, data){
				if(content)
					content.elements.buttonlog.bitmap = "scanner_button_log_" + data.log;
			},
   setIconTer(container, window, content, data){
				if(content)
					content.elements.buttonter.bitmap = "scanner_button_ter_" + data.ter;
			},
   setIconMet(container, window, content, data){
				if(content)
					content.elements.buttonmet.bitmap = "scanner_button_met_" + data.met;
			},
   setIconMas(container, window, content, data){
				if(content)
					content.elements.buttonmas.bitmap = "scanner_button_mas_" + data.mas;
			},
   setIconBio(container, window, content, data){
				if(content)
					content.elements.buttonbio.bitmap = "scanner_button_bio_" + data.bio;
			},
   setIconHyd(container, window, content, data){
				if(content)
					content.elements.buttonhyd.bitmap = "scanner_button_hyd_" + data.hyd;
			}
  }
	},
   useNetworkItemContainer: true,
   defaultValues: {
      resaerch: 0,
      progress: 0,
      isActive: false,
      geo: 0,
      mor: 0,
      him: 0,
      neo: 0,
      tie: 0,
      pow: 0,
      log: 0,
      ter: 0,
      met: 0,
      mas: 0,
      bio: 0,
      hyd: 0,
      angle: 0,
      sciences: [],
      lastID: 0,
      click: 0,
      timer1: 0,
      timer2: 0,
      timer3: 0
   },

   tick: function() {
		this.container.sendEvent("setIconGeo", {geo: this.data.geo});
		this.container.sendEvent("setIconMor", {mor: this.data.mor});
		this.container.sendEvent("setIconHim", {him: this.data.him});
		this.container.sendEvent("setIconNeo", {neo: this.data.neo});
		this.container.sendEvent("setIconTie", {tie: this.data.tie});
		this.container.sendEvent("setIconPow", {pow: this.data.pow});
		this.container.sendEvent("setIconLog", {log: this.data.log});
		this.container.sendEvent("setIconTer", {ter: this.data.ter});
		this.container.sendEvent("setIconMet", {met: this.data.met});
		this.container.sendEvent("setIconMas", {mas: this.data.mas});
		this.container.sendEvent("setIconBio", {bio: this.data.bio});
		this.container.sendEvent("setIconHyd", {hyd: this.data.hyd});

if(this.container.getSlot("slot2").id == lastID) {
} else {
 var lastID = this.container.getSlot("slot2").id;
 var cert = MachineRecipeRegistry.hasRecipeFor("scanner-1", this.container.getSlot("slot2").id);
 if(cert == true) {
  var result = MachineRecipeRegistry.getRecipeResult("scanner-1", this.container.getSlot("slot2").id);
  var res = researchs.researchs;
  for(i in res) {
  	for(e in result.data) {
  		if (res[i] == result.data[e]) {
	  		this.data.progress++;
	  	}
	  }
  }
  this.container.setScale("scale", this.data.progress/result.data.length);
 } else {
 var result = 0;
 this.data.progress = 0;
 }
}
//this.data.progress = 50;
//this.container.setScale("scale", this.data.progress/50);
      if(this.data.click == 1) {
       var status = this.scan(this.container.getSlot("slot2").id);
       this.data.sciences = [];
       if(status > 1) {
        this.data.timer3 = 1;
        var emu = status;
        var status = 0;
        this.container.sendEvent("setIcon", {icon: emu});
       }
       this.data.click--;
      }
      if(this.data.timer3 > 0) {
       this.data.timer2++;
       if(this.data.timer2 >= 50) {
        this.data.timer3 = 0;
        this.container.sendEvent("setIcon0", {});
        this.data.timer2 = 0;
       }
      }
this.container.sendChanges();

/*
ПОЛЕЗНЫЕ ФУНКЦИИ
      this.container.sendChanges()
      var slot1 =      this.container.setScale("scale2", this.data.burn/1000);
      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      if(recipe1) {
         var result1 = MachineRecipeRegistry.getRecipeResult("part_press", item1);
      }
      this.container.setSlot("slot5", 263, count5 - 1, 0);
      }}
      if(this.data.click == 1) {
       this.data.click = 0;
       alert("res")
       this.resaerch();
      this.container.validateAll();*/
},
resaerch: function(geo,mor,him,neo,tie,pow,log,ter,met,mas,bio,hyd,sciences) {
if(geo == 1) {
sciences.push("geo");
}
if(mor == 1) {
sciences.push("mor");
}
if(him == 1) {
sciences.push("him");
}
if(neo == 1) {
sciences.push("neo");
}
if(tie == 1) {
sciences.push("tie");
}
if(pow == 1) {
sciences.push("pow");
}
if(log == 1) {
sciences.push("log");
}
if(ter == 1) {
sciences.push("ter");
}
if(met == 1) {
sciences.push("met");
}
if(mas == 1) {
sciences.push("mas");
}
if(bio == 1) {
sciences.push("bio");
}
if(hyd == 1) {
sciences.push("hyd");
}
return sciences
},
scan: function(slot2){
var baseX = 490;
var baseY = 104;
var radius = 50;
var currentAngle = 0;
this.container.sendEvent("setIconLupe", {});
for(var d = 0; d < 3; d++) {
 for(var f = 0; f < 36000; f++) {
  var vx = Math.cos(currentAngle) * radius;
  var vy = Math.sin(currentAngle) * radius;
  currentAngle += 0.01;
  //content.elements.status.x = baseX + vx;
  //content.elements.status.y = baseY + yx;
  //alert(""+vx+" "+vy+" "+currentAngle);
  this.container.sendEvent("setXY", {x: baseX+vx,y:baseY+vy});
 }
}
this.container.sendEvent("resetIconLupe", {});
 var recipe = MachineRecipeRegistry.hasRecipeFor("scanner-1", slot2);
 if(recipe == true) {
  var result = MachineRecipeRegistry.getRecipeResult("scanner-1", slot2);
  var status = 0;
  science = this.resaerch(this.data.geo, this.data.mor, this.data.him, this.data.neo, this.data.tie, this.data.pow, this.data.log, this.data.ter, this.data.met, this.data.mas, this.data.bio, this.data.hyd, this.data.sciences);
  var hom = JSON.stringify(science);
  for(m in result.data) {
   var resaer = MachineRecipeRegistry.getRecipeResult("scanner-2", result.data[m]);
   var r = resaer.sciences;
   var lom = JSON.stringify(r);
   var p = 0;
   var s = science.length;
   if(result.data[m] in researchs.researchs) {
    coincidences++;
    if(coincidences == result.data.length) {
     var status = 1;
     //показать звезду
    }
   } else if(lom == hom && (status == 4 || status == 3 || status == 0)) {
    var status = 2;
    this.container.setSlot("slot1", blueprints[result.data[m]], 1, 0);
    //выдать предмет
   } else if(r.length > s && (status == 4 || status == 0)){
    n = 0;
    for(i in r) {
     for(l in science) {
      if(r[i] == science[l]) {
       n++;
      }
     }
    }
    if(r.length - 1 == n) {
     var status = 3;
     //показать недостающий пазл
    } else {
     var status = 4;
     //желтый крест
    }
   } else if(r.length <= s && (status == 0 || status == 4)) {
   status = 4
   }
  }
 } else {
  var status = 5;

  //показать что неизучаемо
 }
 return status;
},

   getScreenName(){
return "main";
},
   getScreenByName(){
return scannerUI;
},
});
