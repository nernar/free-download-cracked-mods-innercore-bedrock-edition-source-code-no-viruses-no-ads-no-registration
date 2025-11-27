ModAPI.registerAPI("CarpenterBlocks", {
requireGlobal(cmd){
return eval(cmd);
}
});