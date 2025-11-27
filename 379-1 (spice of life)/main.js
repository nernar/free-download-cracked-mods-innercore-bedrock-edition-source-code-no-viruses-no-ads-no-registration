const History = [];
const maxLength = __config__.getNumber("HistoryLength") | 0;


Saver.addSavesScope("SpiceOfLifeScope",
  function read(scope){
    if(scope.history){
      for(let i = 0; i < scope.history.length; i++){
        History[i] = scope.history[i];
      }
      History.length = Math.min(History.length, maxLength);
    }
  },
  function save(){
    return {history: History};
  }
);


Callback.addCallback("FoodEaten", function(openValue, ratio){

  const secretValue = openValue * ratio * 2;
  const id = Player.getCarriedItem().id;

  let count = 0;
  for(let i = 0; i < History.length; i++){
    if(History[i] == id){
      count++;
    }
  }

  const decrement = 1 - count / maxLength;
  const hunger = Player.getHunger() - openValue + Math.round(Math.pow(decrement, Math.min(8, openValue)) * openValue);
  const saturation = Player.getSaturation() - secretValue + Math.pow(decrement, Math.min(8, secretValue)) * secretValue;

  Player.setHunger(hunger);
  Player.setSaturation(Math.min(hunger, saturation));

  History.unshift(id);
  History.length = Math.min(History.length, maxLength);

});