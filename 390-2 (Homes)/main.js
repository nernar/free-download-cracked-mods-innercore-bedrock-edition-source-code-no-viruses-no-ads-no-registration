/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: main.js

const NEW_LINE = "\n";

var homes = {};
var lastHome = "";

Callback.addCallback("NativeCommand", function(cmd){
    cmd = cmd.split(" ");
    if(cmd[0] == "/home"){
        switch(cmd[1]){
            case "help":
            case "?":
                Game.message(Translation.translate(
                    "/home set [name] - set the point of the house under the name \"name\""+ NEW_LINE +
                    "/home del <name> - delete the home point as \"name\"." + NEW_LINE + 
                    "/home [name] - teleport to the point of the house \"name\"."
                 ));
            break;
            
            case "set":
                var name = "";
                if(cmd[2]!=null){
                    if(["set", "del", "delete", "all", "help", "?"].indexOf(cmd[2])!=-1){
                        Game.message(Translation.sprintf(
                            "Cannot create a house named \"%s\"", cmd[2]
                        ));
                        break;
                    }
                    
                    name = cmd[2];
                }else{
                    var i = 1;
                    do{
                        name = "home"+i;
                        i++;
                    }while(homes.hasOwnProperty(name));
                }
                
                if(homes.hasOwnProperty(name)){
                    var str = "Home \"%s\" update.";
                }else{
                    var str = "Home \"%s\" created.";
                }
                
                homes[name] = Player.getPosition();
                lastHome = name;
                
                Game.message(Translation.sprintf(
                    str, name
                ));
            break;
            
            case "del":
            case "delete":
                if(cmd[2]==null){
                    Game.message(Translation.translate("Invalid command syntax."));
                    break;
                }
                 
                var name = cmd[2]; 
                if(homes.hasOwnProperty(name)){
                     delete homes[name];
                     Game.message(Translation.sprintf("Home \"%s\" removed.", name));
                }else if(name == "all"){
                    homes = {};
                    Game.message(Translation.translate("All houses are removed."));
                }else{
                    Game.message(Translation.sprintf("Home \"%s\" not found.", name));
                }
            break;
            
            case undefined:
                if(lastHome == ""){
                    Game.message(Translation.translate("Home not found."));
                    break;
                }
                if(homes.hasOwnProperty(lastHome)){
                    var home = homes[lastHome];
                    Player.setPosition(home.x, home.y, home.z);
                    Game.message(Translation.translate("You are at home."));
                }else{
                    Game.message(Translation.sprintf("Home \"%s\" was not found, it may have been deleted.", lastHome));
                }
            break;
            
            default:
                var name = cmd[1]; 
                if(homes.hasOwnProperty(name)){
                    var home = homes[name];
                    Player.setPosition(home.x, home.y, home.z);
                    Game.message(Translation.translate("You are at home."));
                }else{
                    Game.message(Translation.sprintf("Home \"%s\" not found.", name));
                }
            break;   
        }
        Game.prevent();
    } 
    if(cmd[0] == "/h"){
        Game.message(Translation.translate(
            "/home set [name] - set the point of the house under the name \"name\""+ NEW_LINE +
            "/home del <name> - delete the home point as \"name\"." + NEW_LINE + 
            "/home [name] - teleport to the point of the house \"name\"."
         ));
        Game.prevent();
    } 
});

Saver.addSavesScope("Homes",
    function read(scope){
        if(scope){
            homes = {};
            for(var i in scope.homes){
                homes[i] = scope.homes[i];
            }
            lastHome = scope.lastHome || "";
        }else{
            homes = {};
            lastHome = "";
        }
    },
    function save(){
        return {
            homes:homes,
            lastHome:lastHome
        };
    }
);




// file: translate.js

Translation.addTranslation("/home set [name] - set the point of the house under the name \"name\""+ NEW_LINE +
"/home del <name> - delete the home point as \"name\"." + NEW_LINE + 
"/home [name] - teleport to the point of the house \"name\".",
{
    ru: "/home set [name] - установить точку дома под именем \"name\"." + NEW_LINE + 
        "/home del <name> - удалить точку дома под именем \"name\"." + NEW_LINE + 
        "/home [name] - телепортироваться на точку дома \"name\".",
    en: "/home set [name] - set the point of the house under the name \"name\""+ NEW_LINE +
        "/home del <name> - delete the home point as \"name\"." + NEW_LINE + 
        "/home [name] - teleport to the point of the house \"name\"."
}); 
Translation.addTranslation("Home \"%s\" created.",{
    ru:"Дом \"%s\" создан.",
    en:"Home with the name \"%s\" created."
});
Translation.addTranslation("Home \"%s\" update.",{
    ru:"Дом \"%s\" обновлен.",
    en:"Home with the name \"%s\" updated."
});
Translation.addTranslation("Home \"%s\" removed.",{
    ru:"Дом \"%s\" удален.",
    en:"Home \"%s\" removed."
});
Translation.addTranslation("Home \"%s\" not found.",{
    ru:"Дом \"%s\" не найден.",
    en:"Home \"%s\" not found."
});
Translation.addTranslation("Invalid command syntax.",{
    ru:"Неверный синтаксис команды.",
    en:"Invalid command syntax."
});
Translation.addTranslation("You are at home.",{
    ru:"Вы дома.",
    en:"You are at home."
});
Translation.addTranslation("Home \"%s\" was not found, it may have been deleted.",{
    ru:"Дом \"%s\" не найден, возможно он был удален.",
    en:"Home \"%s\" was not found, it may have been deleted."
});

Translation.addTranslation("Cannot create a house named \"%s\"",{
    ru:"Невозможно создать дом с именем \"%s\".",
    en:"Cannot create a house named \"%s\"."
});
Translation.addTranslation("All houses are removed.",{
    ru:"Все дома удалены.",
    en:"All houses are removed."
});
Translation.addTranslation("Home not found.",{
    ru:"Дом не найден.",
    en:"Home not found."
});

//Good idea
if(!Translation.sprintf){
    Translation.sprintf = function(){
        var str = Translation.translate(arguments[0]);
        
        for(var i = 1; i < arguments.length; i++)
            str = str.replace("%s", arguments[i]);
        
        return str;
    };
}




