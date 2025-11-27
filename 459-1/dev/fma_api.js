//Welcome to Hell...


/*examples:
Stick -> Diamond x2
Grindstone.addRecipe([280, 0], [264, 2, 0]);

//Usage in tile

var recipe = Grindstone.getRecipe(slotInput.id, slotInput.data);
if(recipe){
alert(recipe);

*/
var Grindstone = {
list: {},
addRecipe: function(input, output){
this.list[input[0]+":"+input[1]] = output
},
getRecipe: function(id, data){
return this.list[id+":"+data];
}
};
//Translate api
var TranslateText = function(eng,ru){
  if(Item.getName(280)=="Палка"){
    return ru;
  } else return eng;
};