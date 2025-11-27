var Speedy = {1:0, 3:2};
var Healthy = {10:0};
var Stealthy = {16:0, 1:0, 14:0};
var Strong = {5:1, 12:1};
var Deadly = {19:0};
var Super = {8:0, 1:0, 3:0, 13:1, 10:1, 16:2, 14:2, 5:2};
var Beer = {9:1};

 XLRegistry.Drinks("speedy_energy_drink", "Speedy Energy Drink", 0, "empty_can", Speedy, 500);
 XLRegistry.Drinks("healthy_energy_drink", "Healthy Energy Drink", 0, "empty_can", Healthy, 600);
 XLRegistry.Drinks("stealthy_energy_drink", "Stealthy Energy Drink", 0, "empty_can", Stealthy, 2400);
 XLRegistry.Drinks("strong_energy_drink", "Strong Energy Drink", 0, "empty_can", Strong, 2400);
 XLRegistry.Drinks("deadly_energy_drink", "Deadly Energy Drink", 0, "empty_can", Deadly, 1200);
 XLRegistry.Drinks("super_energy_drink", "Super Energy Drink", 10, "empty_can", Super, 3600);
 XLRegistry.Drinks("beer", "Beer", 4, "glass_mug", Beer, 100);

 XLRegistry.Juices("lemon_juice", "Lemonade", 2);
 XLRegistry.Juices("strawberry_juice", "Strawberry Juice", 2);
 XLRegistry.Juices("pineapple_juice", "Pineapple Juice", 2);
 XLRegistry.Juices("lemon_syrup", "Lemon Syrup", 2);
 XLRegistry.Juices("strawberry_syrup", "Strawberry Syrup", 2);
 XLRegistry.Juices("pineapple_syrup", "Pineapple Syrup", 2);
 XLRegistry.Juices("lemon_slushie", "Lemonade Slushie", 3);
 XLRegistry.Juices("strawberry_slushie", "Strawberry Slushie", 3);
 XLRegistry.Juices("pineapple_slushie", "Pineapple Slushie", 3);