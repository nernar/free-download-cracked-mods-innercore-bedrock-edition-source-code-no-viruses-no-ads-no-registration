var TABLET_ITEMS = [], TABLET_EMC = 0, TABLET_PAGE = 0, TABLET_CONTAINER = new UI.Container();

System.isLearned = function(id, data){
	for(i in TABLET_ITEMS){
	    if(TABLET_ITEMS[i].id == id && TABLET_ITEMS[i].data == data){
		    return true;
	    }
	}
	return false;
}

Saver.addSavesScope("EE2Tablet",
function read(scope){
  TABLET_ITEMS = [];
  TABLET_EMC = 0;
  TABLET_PAGE = 0;
  TABLET_CONTAINER = new UI.Container();
  
  if(scope && scope.items && scope.learned){
    for(i in scope.items){
      TABLET_ITEMS.push(scope.items[i]);
    }
	
    TABLET_EMC = scope.emc;
	TABLET_CONTAINER = scope.cont;
  }
},
function save(){
  return {
    items: TABLET_ITEMS,
    emc: TABLET_EMC,
    cont: TABLET_CONTAINER
  };
});