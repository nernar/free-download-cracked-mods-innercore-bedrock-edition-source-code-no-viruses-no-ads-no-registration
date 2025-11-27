var GREENTrade = {
    recipes: {},
  
   set: function(nagymet1, result){
      this.recipes[JSON.stringify([nagymet1])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1){
     return this.recipes[JSON.stringify([nagymet1])];
}
};

GREENTrade.set(ItemID.red_coupon, {
    id: 6, count: 8, data: 3
});
GREENTrade.set(ItemID.green_coupon, {
    id: 81, count: 5, data: 0
});
GREENTrade.set(ItemID.blue_coupon, {
    id: VanillaBlockID.bamboo, count: 5, data: 0
});
GREENTrade.set(ItemID.yellow_coupon, {
    id: 338, count: 8, data: 0
});

TileEntity.registerPrototype(BlockID.TradeGREEN, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiTiyTradeGREEN;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = GREENTrade.get(source1.id);
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