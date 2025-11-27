var YELLOWTrade = {
    recipes: {},
  
   set: function(nagymet1, result){
      this.recipes[JSON.stringify([nagymet1])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1){
     return this.recipes[JSON.stringify([nagymet1])];
}
};

YELLOWTrade.set(ItemID.red_coupon, {
    id: 61, count: 1, data: 0
});
YELLOWTrade.set(ItemID.green_coupon, {
    id: 54, count: 1, data: 0
});
YELLOWTrade.set(ItemID.blue_coupon, {
    id: 58, count: 1, data: 0
});
YELLOWTrade.set(ItemID.yellow_coupon, {
    id: 355, count: 1, data: 0
});

TileEntity.registerPrototype(BlockID.TradeYELLOW, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiTiyTradeYELLOW;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = YELLOWTrade.get(source1.id);
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