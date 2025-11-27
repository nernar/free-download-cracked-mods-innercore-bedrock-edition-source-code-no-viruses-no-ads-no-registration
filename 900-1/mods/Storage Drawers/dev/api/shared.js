ModAPI.registerAPI("DrawerAPI", {
 ModelType: ModelType,
 StorageType: StorageType,
 DrawerAPI: DrawerAPI,
 requireGlobal(cmd){
  return eval(cmd);
 }
});
