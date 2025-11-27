//fruitItems
fuctionsNature.setFood("gooseBerry","Goose Berry","gooseberry",4)

fuctionsNature.setFood("apricot","Apricot","apricot",6)

fuctionsNature.setFood("coconut","Coconut","coconut",7)

fuctionsNature.setFood("cherry","Cherry","cherry",4)

fuctionsNature.setFood("banana","banana","banana",6)

fuctionsNature.setFood("almond","almond","almond",3)

fuctionsNature.setFood("avocado","avocado","avocado",4)

fuctionsNature.setFood("cashew","cashew","cashew",6)

fuctionsNature.setFood("orange","orange","orange",3)

fuctionsNature.setFood("dragonfruit","dragonfruit","dragonfruit",5)

fuctionsNature.setFood("date","date","date",4)

fuctionsNature.setFood("lemon","lemon","lemon",3)

fuctionsNature.setFood("mango","mango","mango",5)

fuctionsNature.setFood("papaya","papaya","papaya",6)

fuctionsNature.setFood("starfruit","starfruit","starfruit",8)
//fruitBlock
PlantsBlock.setFruit("gooseBerryFruit","gooseBerryFruit","gooseberry",{id:ItemID.gooseBerry,data:0,amount:2,random:true},0.3,debug)

PlantsBlock.setFruit("appleBlock", "none", "appleBlock", { id: 260, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("apricotBlock", "apricotBlock", "apricot", { id: ItemID.apricot, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("coconutBlock", "coconutBlock", "coconut", { id: ItemID.coconut, data: 0, amount: 1 }, 0.3, debug)

PlantsBlock.setFruit("cherryBlock", "cherryBlock", "cherry", { id: ItemID.cherry, data: 0, amount: 3,random: true }, 0.2, debug)

PlantsBlock.setFruit("bananaBlock", "bananaBlock", "banana", { id: ItemID.banana, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("almondBlock", "almondBlock", "almond", { id: ItemID.almond, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("avocadoBlock", "avocadoBlock", "avocado", { id: ItemID.avocado, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("cashewBlock", "cashewBlock", "cashew", { id: ItemID.cashew, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("orangeBlock", "orangeBlock", "orange", { id: ItemID.orange, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("dragonfruitBlock", "dragonfruitBlock", "dragonfruit", { id: ItemID.dragonfruit, data: 0, amount: 1 }, 0.2, debug)

PlantsBlock.setFruit("dateBlock", "dateBlock", "date", { id: ItemID.date, data: 0, amount: 2,random: true}, 0.3, debug)

PlantsBlock.setFruit("lemonBlock", "lemonBlock", "lemon", { id: ItemID.lemon, data: 0, amount:1}, 0.2, debug)

PlantsBlock.setFruit("mangoBlock", "mangoBlock", "mango", { id: ItemID.mango, data: 0, amount:1}, 0.2, debug)

PlantsBlock.setFruit("papayaBlock", "papayaBlock", "papaya", { id: ItemID.papaya, data: 0, amount:1}, 0.2, debug)

PlantsBlock.setFruit("starfruitBlock", "starfruitBlock", "starfruit", { id: ItemID.starfruit, data: 0, amount:1}, 0.2, debug)
//sapling
PlantsBlock.setSapling("appleSapling","apple Sapling","appleSapling",{2:true},0.3,6,"TreeAple",true)

PlantsBlock.setSapling("gooseberrySapling","Goose berry Sapling","gooseberrySapling",{2:true},0.2,6,"TreeGooseBerry",true)

PlantsBlock.setSapling("apricotSapling","apricot Sapling","apricotSapling",{2:true},0.2,7,"apricotTree",true)

PlantsBlock.setSapling("coconutSapling","coconut Sapling","coconutSapling",{2:true,12:true},0.3,9,"coconutTree",true)

PlantsBlock.setSapling("cherrySapling","cherry Sapling","cherrySapling",{2:true},0.3,5,"cherryTree",true)

PlantsBlock.setSapling("bananaSapling","Banana Sapling","bananaSapling",{2:true},0.3,5,"bananaTree",true)

PlantsBlock.setSapling("almondSapling","almond Sapling","almondSapling",{2:true},0.4,6,"almondTree",true)

PlantsBlock.setSapling("avocadoSapling","Avocado Sapling","avocadoSapling",{2:true},0.4,6,"avocadoTree",true)

PlantsBlock.setSapling("cashewSapling","cashew Sapling","cashewSapling",{2:true},0.4,6,"cashewTree",true)

PlantsBlock.setSapling("orangeSapling","orange Sapling","orangeSapling",{2:true},0.4,6,"orangeTree",true)

PlantsBlock.setSapling("dragonfruitSapling","dragonfruit Sapling","dragonfruitSapling",{2:true},0.4,6,"dragonfruitTree",true)

PlantsBlock.setSapling("dateSapling","date  Sapling","dateSapling",{2:true},0.4,6,"dateTree",true)

PlantsBlock.setSapling("lemonSapling","lemon  Sapling","lemonSapling",{2:true},0.2,7,"lemonTree",true)

PlantsBlock.setSapling("mangoSapling","mango  Sapling","mangoSapling",{2:true},0.2,3,"mangoTree",true)

PlantsBlock.setSapling("papayaSapling","papaya  Sapling","papayaSapling",{2:true},0.2,5,"papayaTree",true)

PlantsBlock.setSapling("starfruitSapling","starfruit  Sapling","starfruitSapling",{2:true},0.1,4,"starfruitTree",true)

//craft
fuctionsNature.setCraftSapling("appleSapling",260)

fuctionsNature.setCraftSapling("gooseberrySapling",ItemID.gooseBerry)

fuctionsNature.setCraftSapling("apricotSapling",ItemID.apricot)

fuctionsNature.setCraftSapling("coconutSapling",ItemID.coconut)

fuctionsNature.setCraftSapling("cherrySapling",ItemID.cherry)

fuctionsNature.setCraftSapling("bananaSapling", ItemID.banana)

fuctionsNature.setCraftSapling("almondSapling", ItemID.almond)

fuctionsNature.setCraftSapling("avocadoSapling", ItemID.avocado)

fuctionsNature.setCraftSapling("cashewSapling", ItemID.cashew)

fuctionsNature.setCraftSapling("orangeSapling", ItemID.orange)

fuctionsNature.setCraftSapling("dragonfruitSapling", ItemID.dragonfruit)

fuctionsNature.setCraftSapling("dateSapling", ItemID.date)

fuctionsNature.setCraftSapling("lemonSapling", ItemID.lemon)

fuctionsNature.setCraftSapling("mangoSapling", ItemID.mango)

fuctionsNature.setCraftSapling("papayaSapling", ItemID.papaya)

fuctionsNature.setCraftSapling("starfruitSapling", ItemID.starfruit)

//tstTree
if(debug){
fuctionsNature.setTstItem("tst1","TreeAple")
fuctionsNature.setTstItem("tst2", "TreeGooseBerry")
fuctionsNature.setTstItem("tst4", "apricotTree")
fuctionsNature.setTstItem("tst5", "coconutTree")
fuctionsNature.setTstItem("tst6", "cherryTree")
fuctionsNature.setTstItem("tst7", "bananaTree")
fuctionsNature.setTstItem("tst8", "almondTree")
fuctionsNature.setTstItem("tst9", "avocadoTree6")
fuctionsNature.setTstItem("tst10", "cashewTree")
fuctionsNature.setTstItem("tst11", "orangeTree")
fuctionsNature.setTstItem("tst12", "dragonfruitTree")
fuctionsNature.setTstItem("tst13", "dateSapling")
fuctionsNature.setTstItem("tst13", "lemonTree")
fuctionsNature.setTstItem("tst14", "mangoTree")
fuctionsNature.setTstItem("tst15", "papayaTree")
fuctionsNature.setTstItem("tst16", "starfruitTree")
}
//Tree

CreateTrees.registerTree("TreeAple", {
 type: "treeFruit",
 variants: [
  {
   minheight: 3,
   maxheight: 5,
   leafDiv: 1,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.1
    },
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.1
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 0
  },
  leaf: {
   id: 18,
   data: 0
  },
  fruit: {
   id: BlockID["appleBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("TreeGooseBerry", {
 type: "treeFruit",
 variants: [
  {
   minheight: 3,
   maxheight: 6,
   leafDiv: 2,
   leafDivStart: 1.6,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 4,
   maxheight: 7,
   leafDiv: 2,
   leafDivStart: 1.7,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 0
  },
  leaf: {
   id: 18,
   data: 1
  },
  fruit: {
   id: BlockID["gooseBerryFruit"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("apricotTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 2,
   maxheight: 4,
   leafDiv: 2,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 2,
   maxheight: 7,
   leafDiv: 2,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 0
  },
  leaf: {
   id: 18,
   data: 0
  },
  fruit: {
   id: BlockID["apricotBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("coconutTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1.2,
   leafDivStart: 1.3,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 6,
   maxheight: 8,
   leafDiv: 1.2,
   leafDivStart: 1.3,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 3
  },
  leaf: {
   id: 18,
   data: 0
  },
  fruit: {
   id: BlockID["coconutBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("cherryTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 2,
   maxheight: 3,
   leafDiv: 1.2,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 3,
   maxheight: 4,
   leafDiv: 1,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 1
  },
  leaf: {
   id: 18,
   data: 0
  },
  fruit: {
   id: BlockID["cherryBlock"],
   data: 0
  }
 },
 devMode: debugTree
})


CreateTrees.registerTree("bananaTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1.5,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 4,
   maxheight: 8,
   leafDiv: 1.5,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 1
  },
  leaf: {
   id: 18,
   data: 3
  },
  fruit: {
   id: BlockID["bananaBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("almondTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1,
   leafDivStart: 3,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.3
    },
  {
   minheight: 4,
   maxheight: 8,
   leafDiv: 1,
   leafDivStart: 3,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.4
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 1
  },
  leaf: {
   id: 18,
   data: 3
  },
  fruit: {
   id: BlockID["almondBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("avocadoTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.15
    },
  {
   minheight: 4,
   maxheight: 8,
   leafDiv: 1,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.15
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 1
  },
  leaf: {
   id: 18,
   data: 2
  },
  fruit: {
   id: BlockID["avocadoBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("cashewTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1,
   leafDivStart: 1.8,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 4,
   maxheight: 8,
   leafDiv: 1,
   leafDivStart: 1.8,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 0
  },
  leaf: {
   id: 18,
   data: 3
  },
  fruit: {
   id: BlockID["cashewBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("orangeTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 2,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 0
  },
  leaf: {
   id: 18,
   data: 0
  },
  fruit: {
   id: BlockID["orangeBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("dragonfruitTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 3,
   maxheight: 5,
   leafDiv: 1,
   leafDivStart: 3,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 4,
   maxheight: 6,
   leafDiv: 1,
   leafDivStart: 3,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 0
  },
  leaf: {
   id: 18,
   data: 2
  },
  fruit: {
   id: BlockID["dragonfruitBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("dateTree", {
 type: "treeFruit",
 variants: [
  {
   minheight: 4,
   maxheight: 5,
   leafDiv: 1.2,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    },
  {
   minheight: 3,
   maxheight: 6,
   leafDiv: 1.2,
   leafDivStart: 2,
   spike: true,
   spikeRadius: 2,
   chanceFruit: 0.2
    }
  ],
 blocks: {
  wood: {
   id: 17,
   data: 3
  },
  leaf: {
   id: 18,
   data: 1
  },
  fruit: {
   id: BlockID["dateBlock"],
   data: 0
  }
 },
 devMode: debugTree
})

CreateTrees.registerTree("lemonTree", {
  type: "treeFruit",
  variants: [
    {
      minheight: 4,
      maxheight: 6,
      leafDiv: 2,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.2
    },
    {
      minheight: 3,
      maxheight: 6,
      leafDiv: 2,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.2
    }
  ],
  blocks: {
    wood: {
      id: 17,
      data: 1
    },
    leaf: {
      id: 18,
      data: 3
    },
    fruit: {
      id: BlockID["lemonBlock"],
      data: 0
    }
  },
  devMode: debugTree
})

CreateTrees.registerTree("mangoTree", {
  type: "treeFruit",
  variants: [
    {
      minheight: 4,
      maxheight: 3,
      leafDiv: 4,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.2
    },
    {
      minheight: 5,
      maxheight: 7,
      leafDiv: 4,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.2
    }
  ],
  blocks: {
    wood: {
      id: 17,
      data: 3
    },
    leaf: {
      id: 18,
      data: 2
    },
    fruit: {
      id: BlockID["mangoBlock"],
      data: 0
    }
  },
  devMode: debugTree
})

CreateTrees.registerTree("papayaTree", {
  type: "treeFruit",
  variants: [
    {
      minheight: 6,
      maxheight: 8,
      leafDiv: 2,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.2
    },
    {
      minheight: 4,
      maxheight: 7,
      leafDiv: 2,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.2
    }
  ],
  blocks: {
    wood: {
      id: 17,
      data: 3
    },
    leaf: {
      id: 18,
      data: 3
    },
    fruit: {
      id: BlockID["papayaBlock"],
      data: 0
    }
  },
  devMode: debugTree
})

CreateTrees.registerTree("starfruitTree", {
  type: "treeFruit",
  variants: [
    {
      minheight: 6,
      maxheight: 7,
      leafDiv: 2,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.1
    },
    {
      minheight: 4,
      maxheight: 6,
      leafDiv: 2,
      leafDivStart: 2,
      spike: true,
      spikeRadius: 2,
      chanceFruit: 0.1
    }
  ],
  blocks: {
    wood: {
      id: 17,
      data: 2
    },
    leaf: {
      id: 18,
      data: 3
    },
    fruit: {
      id: BlockID["starfruitBlock"],
      data: 0
    }
  },
  devMode: debugTree
})

/*
llanuras/
1,128
llanuras de flores/
129
desierto/
2,130,17
colinas/
3,131
bosque/
4,18
bosque de flores/
132
taiga/
5,133,19,32,33,160,161
pantano/
6,134
rio/
7
seta/
14,15
playa/
16
colinas/
10,34,162
selva/
21,149,23,151,22
playa de piedra/
25
abedul/
27,155,28,156
bosqueHongos/
29,157
taigafria/
30,158
montañas/
31
sabana/
35,163,36,164
*/

//forest
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([1,128,129,4,18,132],3),{2:true},500,"TreeAple",4)
//taiga
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([5,133,19,32,33,160,161],3),{2:true},500,"TreeGooseBerry",2)
//abedul
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([27,155,28,156],3),{2:true},500,"apricotTree",3)
//desierto playa
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([2,130,17,16],3),{2:true,12:true},500,"coconutTree",2)
//taiga
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([5,133,19,32,33,160,161],3),{2:true},500,"cherryTree",2)
//jungla
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([21,149,23,151,22],3),{2:true},500,"bananaTree",3)
//taiga
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([5,133,19,32,33,160,161],3),{2:true},500,"almondTree",1)
//jungla
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([21,149,23,151,22],3),{2:true},500,"avocadoTree",1)
//montañas
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([31,30,158],3),{2:true},500,"cashewTree",3)
//sabana
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([35,163,36,164],3),{2:true},500,"orangeTree",2)
//montañas jungla
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([31,30,158,21,149,23,151,22],3),{2:true},500,"dragonfruitTree",2)
//bosque de hongos
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([29,157],3),{2:true},500,"dateTree",3)
//sabana
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([35,163,36,164],3),{2:true},500,"lemonTree",2)
//jungla
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([21,149,23,151,22],3),{2:true},1,500,"mangoTree",3)
//montaña
fuctionsNature.setGenerationTree(fuctionsNature.setBiomes([31,30,158],3),500,"papayaTree",2)
//all
fuctionsNature.setGenerationTree({all:true,chance:0.2
},{2:true},500,"starfruitTree",1)
/*
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
 let biome = {
  //forest
  4: 0.2, 
  18: 0.3, 
  27: 0.2,
  28: 0.4, 
  132: 0.4,
  155: 0.1,
  156: 0.5
 }
 let dirtTiles = {
  2: true
 }
 if (Math.random() < biome[World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)]) {
  for (var i = 0; i < 1 + Math.random() * 5; i++) {
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
   coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
   if (dirtTiles[World.getBlockID(coords.x, coords.y, coords.z)]) {
    coords.y++;
    CreateTrees.createTreeForType(coords.x, coords.y, coords.z, "tst");
   }
  }
 }
})
*/
