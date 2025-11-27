ModAPI.addAPICallback("RecipeViewer", function(api) {var RV = api.Core;

Translation.addTranslation("Energy generating: 3000",
{
    ru: "Энергии будет получено: 3000"
});

Translation.addTranslation("Energy: 3000",
{
    ru: "Энергии: 3000"
});

Translation.addTranslation("Collector recipes",
{
    ru: "Рецепты коллектора"
});

Translation.addTranslation("1-6 blocks leaves you can place",
{
    ru: "Ты можешь использовать от одного до шести блоков листвы"
});

Translation.addTranslation("Status: generating",
{
    ru: "Статус: работает"
});

Translation.addTranslation("Burning: 0%",
{
  ru: "Нагрев: 0%"
});

Translation.addTranslation("Burning: 50 / 2 %",
{
  ru: "Нагрев: 50 / 2 %"
});

Translation.addTranslation("Oxygen: + 1 / second",
{
  ru: "Кислород: + 1 / в секунду"
});


Translation.addTranslation("Coal generator recipes",
{
    ru: "Рецепты угольного генератора"
});

Translation.addTranslation("Coal generator cooling",
{
    ru: "Охлаждение угольного генератора"
});




	RV.registerRecipeType("refinery", {
      title: "Refinery",
      contents: {
         icon: BlockID.refinery_sc,
         drawing: [
    {type: "bitmap",x: 268,y: 190, bitmap: "Liquid_null",scale: 3.8},
    {type: "bitmap",x: 769,y: 190, bitmap: "Liquid_null",scale: 3.8}, {type: "bitmap", x:667 ,y: 190, bitmap:"Liquid_null",scale : 3.8},{type: "bitmap", x:565 ,y: 190, bitmap:"Liquid_null",scale : 3.8},
     {type: "bitmap", x:500 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:640 ,y: 70, bitmap:"en_noy",scale : 3}, 
			],
         elements: {
      input0:
    	{type:"slot",x:355,y:120,size:70, bitmap:"SPC.SPC_Canister"},input1:
    	{type:"slot",x:445,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    output0:    	{type:"slot",x:455,y:260,size:70,bitmap: "Others.en_slot"}, 
    
    	output1:
    	{type:"slot",x:855,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	output2: {type:"slot",x:755,y:120,size:70, bitmap:"SPC.SPC_Canister"}, output3: {type:"slot",x:651,y:120,size:70, bitmap:"SPC.SPC_Canister"}

         }

      },getList: function(id, data, isUsage) {    
}});

RV.registerRecipeType("generator 1", {
   title: Translation.translate("Coal generator recipes"),
   contents: {
      icon: BlockID.coal_generator,
      drawing: [
         {
            type: "bitmap",
            x: 320,
            y: 215,
            bitmap: "arrow_bar_background",
            scale: 8
    },
         {
             type: "bitmap", 
             x: 490, 
             y: 215, 
             bitmap: "generators.Crashed_1",
             scale: 8
             
         },
           { type: "bitmap",
           x: 770,
           y: 215,
           bitmap: "energy_small_background", 
         scale: 8
         },

   ],
      elements: {
         input0: {
            type: "slot",
            x: 145,
            y: 210,
            bitmap: "coalslot",
            size: 140,
         },
         output0: {
            type: "slot",
            x: 630,
            y: 210,
            bitmap: "trashslot",
            size: 140

         },
         Status: {
            type: "text",
            x: 300,
            y: 400,
            
            text: Translation.translate("Status: generating")

         },

         EnergiA: { 
             type: "text", 
             x: 270, 
             y: 170,
           
             text: Translation.translate("Energy generating: 3000")
             
         },
      }
   },

   getAllList: function(id, data, count) {
      let list = []
      for (var i in burnItems) {
         for (let e in Colding) {
            list.push({
               input: [{
                  id: burnItems[i].id,
                  count: 1,
                  data: 0
               }],
               output: [{
                  id: ItemID.soot_coal,
                  count: 1,
                  data: 0
               }]
            })
         }
      }
      return list
   },
});


RV.registerRecipeType("generator 2", {
   title: Translation.translate("Coal generator cooling"),
   contents: {
      icon: BlockID.coal_generator,
      drawing: [
         {
            type: "bitmap",
            x: 320,
            y: 215,
            bitmap: "arrow_bar_scale",
            scale: 8
    },
         {
             type: "bitmap", 
             x: 490, 
             y: 215, 
             bitmap: "generators.Crashed_2",
             scale: 8
             
         },
           { type: "bitmap",
           x: 770,
           y: 215,
           bitmap: "energy_small_scale", 
         scale: 8
         },
               {type: "bitmap",
         x: 145,
         y: 110,
         scale: 5.8,
         bitmap: "RV.rw_burning_"},

         
   ],
      elements: {
                 coalslot: {
            type: "slot",
            x: 145,
            y: 210,
            bitmap: "coalslot",
            size: 140,
         },
         input0: {
            type: "slot",
            x: 630,
            y: 210,
            bitmap: "trashslot",
            size: 140

         },
         Status: {
            type: "text",
            x: 300,
            y: 400,
            
            text: Translation.translate("Status: generating")

         },
       FiringStatus: {
            type: "text",
            x: 470,
            y: 160,
            width: 120,
            height: 50,
            text: Translation.translate("Burning: 50 / 2 %")
         },
         EnergiA: { 
             type: "text", 
             x: 730, 
             y: 170,
           
             text: Translation.translate("Energy: 3000")
             
         },
      }
   },

   getAllList: function(id, data, count) {
      let list = []
     
         for (let e in Colding) {
            list.push({
      
               input: [{
                  id: Colding[e].id,
                  count: 1,
                  data: 0
               }]
            })
         
      }
      return list
   },
});





RV.registerRecipeType("Collector", {
   title: Translation.translate("Collector recipes"),
   contents: {
      icon: BlockID.collector_sc,
      drawing: [
         {
            type: "bitmap",
            x: 300,
            y: 100,
            bitmap: "RV.Collector_rv",
            scale: 3
    },

         
   ],
      elements: {
         Status: {
            type: "text",
            x: 110,
            y: 10,
            
            text: Translation.translate("1-6 blocks leaves you can place")

         },
                 input0: {
            type: "slot",
            x: 425,
            y: 480,
            bitmap: "Others.O2Slot",
            size: 120,
         },
         input1: {
            type: "slot",
            x: 680,
            y: 420,
            bitmap: "Others.O2Slot",
            size: 120

         },
         input2: {
            type: "slot",
            x: 140,
            y: 200,
            bitmap: "Others.O2Slot",
            size: 120

         },
         input3: {
            type: "slot",
            x: 190,
            y: 40,
            bitmap: "Others.O2Slot",
            size: 120

         },
         input4: {
            type: "slot",
            x: 690,
            y: 40,
            bitmap: "Others.O2Slot",
            size: 120

         },
         input5: {
            type: "slot",
            x: 740,
            y: 200,
            bitmap: "Others.O2Slot",
            size: 120

         },
         input6: {
            type: "slot",
            x: 40,
            y: 480,
            bitmap: "Others.en_slot",
            size: 120

         },
         
         EnergiA: { 
             type: "text", 
             x: 690, 
             y: 450,
           
             text: Translation.translate("Oxygen: + 1 / second")
             
         },
      }
   },

   getAllList: function(id, data, count) {
      let list = []
     
         for (let e in leaves) {
             for(var i in batt){
            list.push({
      
               input: [{
                        id: leaves[e].id,
                        count: 1,
                        data: 0
                     },{
                        id: leaves[e].id,
                        count: 1,
                        data: 0
                     },{
                        id: leaves[e].id,
                        count: 1,
                        data: 0
                     },{
                        id: leaves[e].id,
                        count: 1,
                        data: 0
                     },{
                        id: leaves[e].id,
                        count: 1,
                        data: 0
                     },{
                        id: leaves[e].id,
                        count: 1,
                        data: 0
                     },{
                        id: batt[i].id,
                        count: 1,
                        data: 0
                     }],
            })
         
      }}
      return list
   },
});




});
﻿