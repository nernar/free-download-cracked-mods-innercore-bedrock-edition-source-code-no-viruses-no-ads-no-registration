const Elem = {};
const Mol = {};

const Chemistry = {

  debug: __config__.getBool("debug"),
  type: {},
  researchList: [],

  registerElement: function(number, symbol, name, color, type){
    const id = "MinechemElement_" + number;
    IconUtil.genElement(symbol, color, type || "solid");
    IDRegistry.genItemID(id);
    Item.createItem(id, name + "\n§9" + symbol + " (" + number + ")", {name: "element_" + symbol}, {isTech: !this.debug});
    Elem[symbol] = ItemID[id];
    this.type[symbol] = type || "solid";
  },

  registerMolecule: function(key, name, formation, type, color){
    const id = "MinechemMolecule_" + key;
    IconUtil.genMolecule(key, color);
    IDRegistry.genItemID(id);
    Item.createItem(id, name, {name: "molecule_" + key}, {isTech: !this.debug});
    Mol[key] = ItemID[id];
    this.type[key] = type || "solid";
    const array = [];
    for(let key2 in formation){
      array.push([key2, formation[key2]]);
    }
    Decomposer.addRecipe(Mol[key], -1, formation);
    Synthesiser.addRecipe({id: Mol[key]}, "ITEM", array);
  },

  isElem: function(id){
    for(let key in Elem){
      if(Elem[key] == id){
        return true;
      }
    }
    return false;
  },

  isMol: function(id){
    for(let key in Mol){
      if(Mol[key] == id){
        return true;
      }
    }
    return false;
  },

  addList: function(id, data){
    if(!~this.researchList.indexOf(id + ":" + data)){
      this.researchList.push(id + ":" + data);
      this.sortList();
      alert("You taken a note about composition of " + Item.getName(id, data));
    }
  },

  sortList: function(){
    this.researchList.sort(function(a, b){
      const A = a.split(":");
      const B = b.split(":");
      return A[0] - B[0] || A[1] - B[1];
    });
  }

};


Saver.addSavesScope("MinechemScope",
  function read(scope){
    if(!scope.research){
      return;
    }
    for(let i = scope.research.length; i--;){
      Chemistry.researchList.push(scope.research[i]);
    }
    Chemistry.sortList();
  },
  function save(){
    const scope = {
      research: []
    };
    for(let i = Chemistry.researchList.length; i--;){
      scope.research.push(Chemistry.researchList[i]);
    }
    return scope;
  }
);


Callback.addCallback("NativeCommand", function(cmd){
  cmd = cmd.split(" ");
  if(cmd[0] == "/minechem" && cmd[1] == "research"){
    if(cmd[2] == "all"){
      Chemistry.researchList = [];
      for(let key in Synthesiser.data){
        Chemistry.researchList.push(Synthesiser.data[key].id + ":" + Synthesiser.data[key].data);
      }
      Chemistry.sortList();
      alert("[Minechem]: Research All");
    }
    if(cmd[2] == "reset"){
      Chemistry.researchList = [];
      alert("[Minechem]: Research Reset");
    }
  }
});