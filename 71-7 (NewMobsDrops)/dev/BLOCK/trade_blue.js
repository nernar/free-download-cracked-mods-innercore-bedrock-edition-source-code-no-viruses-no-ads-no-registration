var BLUETrade = {
    recipes: {},
  
   set: function(nagymet1, result){
      this.recipes[JSON.stringify([nagymet1])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1){
     return this.recipes[JSON.stringify([nagymet1])];
}
};

BLUETrade.set(ItemID.red_coupon, {
    id: 267, count: 1, data: 0
});
BLUETrade.set(ItemID.green_coupon, {
    id: 277, count: 1, data: 0
});
BLUETrade.set(ItemID.blue_coupon, {
    id: 315, count: 1, data: 0
});
BLUETrade.set(ItemID.yellow_coupon, {
    id: 308, count: 1, data: 0
});

TileEntity.registerPrototype(BlockID.TradeBLUE, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiTiyTradeBLUE;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = BLUETrade.get(source1.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source1.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});