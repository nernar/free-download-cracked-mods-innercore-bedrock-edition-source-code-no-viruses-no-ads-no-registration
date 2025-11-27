//items
fuctionsNature.createFoodBerrySeed("berry","Silvestry Berry","berry","silvestryBerry_crop",{2:true,3:true},2)

fuctionsNature.createFoodBerrySeed("BlueBerry","Silvestry Blue Berry","blueberry","silvestryBlueBerry_crop",{2:true,3:true},3)

fuctionsNature.createFoodBerrySeed("PrechBerry","Silvestry Prech Berry","prechBerry","SilvestryPrechBerry_crop",{2:true,3:true},2)

fuctionsNature.createFoodBerrySeed("BlackBerry","Silvestry Black Berry","blackberry","SilvestryBlackBerry_crop",{2:true,3:true},3)
//crop
PlantsBlock.setBlockCrop("silvestryBerry_crop", "silvestryBerry_crop", "cropBerry", 0.4, { 2: true, 3: true }, 5, { id: ItemID.berry, data: 0 }, { id: BlockID.silvestryBerry, data: 0 }, debug)

PlantsBlock.setBlockCrop("silvestryBlueBerry_crop", "silvestryBlueBerry_crop", "cropBerry", 0.4, { 2: true, 3: true }, 5, { id: ItemID.BlueBerry, data: 0 }, { id: BlockID.silvestryBlueBerry, data: 0 }, debug)

PlantsBlock.setBlockCrop("SilvestryPrechBerry_crop", "SilvestryPrechBerry_crop", "cropBerry", 0.4, { 2: true, 3: true }, 5, { id: ItemID.PrechBerry, data: 0 }, { id: BlockID.SilvestryPrechBerry, data: 0 }, debug)

PlantsBlock.setBlockCrop("SilvestryBlackBerry_crop", "SilvestryBlackBerry_crop", "cropBerry", 0.4, { 2: true, 3: true }, 5, { id: ItemID.BlackBerry, data: 0 }, { id: BlockID.SilvestryBlackBerry, data: 0 }, debug)
//berry
PlantsBlock.setBerryBlock("silvestryBerry","Silvestry Berry","silvestryBerry",{id:ItemID.berry,data:0,amount:3,random: true},0.2,{2:true,3:true},4,debug)

PlantsBlock.setBerryBlock("silvestryBlueBerry","Silvestry Blue Berry","silvestryBlueBerry",{id:ItemID.BlueBerry,data:0,amount:5,random: true},0.2,{2:true,3:true},6,debug)

PlantsBlock.setBerryBlock("SilvestryPrechBerry","Silvestry Prech Berry","SilvestryPrechBerry",{id:ItemID.PrechBerry,data:0,amount:3,random: true},0.2,{2:true,3:true},8,debug)

PlantsBlock.setBerryBlock("SilvestryBlackBerry","Silvestry Black Berry","SilvestryBlackBerry",{id:ItemID.BlackBerry,data:0,amount:2,random: true},0.2,{2:true,3:true},7,debug)

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
//forest abedul llanuras
fuctionsNature.setGenerationBerry(fuctionsNature.setBiomes([3,131,4,18,132,1,128,129,27,155,28,156],10),{2:true},90,"silvestryBerry",5)
//bosque de hongos llanuras
fuctionsNature.setGenerationBerry(fuctionsNature.setBiomes([29,158],10),{2:true},90,"silvestryBlueBerry",5)
//montañas selba
fuctionsNature.setGenerationBerry(fuctionsNature.setBiomes([10,34,162,31,21,149,23,151,22],10),{2:true},90,"SilvestryPrechBerry",5)
//taiga  pantano
fuctionsNature.setGenerationBerry(fuctionsNature.setBiomes([5,133,19,32,33,160,161,6,134],10),{2:true},90,"SilvestryBlackBerry",5)