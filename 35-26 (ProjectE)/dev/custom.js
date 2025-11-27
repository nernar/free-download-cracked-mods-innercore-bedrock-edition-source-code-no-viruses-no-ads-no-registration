var CUSTOM_DIR = __dir__+"/custom.json";

Callback.addCallback("LevelLoaded", function(){
  arr = FileTools.ReadJSON(CUSTOM_DIR);
  for(i in arr){
    System.setValue(arr[i].id, arr[i].data, arr[i].emc);
  }
});

Callback.addCallback("NativeCommand", function(str){
  var arr = FileTools.ReadJSON(CUSTOM_DIR);
  cmd = str.split(" ");
  
  if(cmd[0] == "/projecte"){
    if(cmd[1] == "set"){
      var arr = FileTools.ReadJSON(CUSTOM_DIR);
      if(cmd[2] || cmd[3] || cmd[4]){
        arr.push({
          id: cmd[2], data: cmd[3], emc: cmd[4]
        });
        FileTools.WriteJSON(CUSTOM_DIR, arr);
        Game.message("Succesfully setted value for "+Item.getName(cmd[2], cmd[3])+"\nType /projecte reload, to apply changes");
      }
    } else Game.message("Aviable commands: \n/projecte set <id> <data> <value>\n/projecte reload\n/projecte clear");
    
    if(cmd[1] == "clear"){
      FileTools.WriteJSON(CUSTOM_DIR, "[]");
      Game.message("Succesfully  cleared all custom EMC configuration.");
    } else Game.message("Aviable commands: \n/projecte set <id> <data> <value>\n/projecte reload\n/projecte clear");
    
    
    if(cmd[1] == "reload"){
      for(i in arr){
        System.setValue(arr[i].id, arr[i].data, arr[i].emc);
      }
      DefineEmcFromRecipe();
      Game.message("Custom values was updated");
    }
    Game.prevent();
  }
});