/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: Translation.js

Translation.addTranslation( " Shears" , { zh : "剪刀" , ru : "Ножницы" } );

Translation.addTranslation( "Wood" , { zh : "木" , ru : "дерево" } );
Translation.addTranslation( "Flint" , { zh : "燧石" , ru : "Кремень" } );
Translation.addTranslation( "Stone" , { zh : "石" , ru : "Камень" } );
Translation.addTranslation( "Bone" , { zh : "骨" , ru : "Кость" } );
Translation.addTranslation( "Gold" , { zh : "金" , ru : "Золотой" } );
Translation.addTranslation( "Quartz" , { zh : "下界石英" , ru : "Кварц Нижнего мира" } );
Translation.addTranslation( "Diamond" , { zh : "钻石" , ru : "Алмаз" } );
Translation.addTranslation( "Emerald" , { zh : "绿宝石" , ru : "Изумруд" } );
Translation.addTranslation( "Obsidian" , { zh : "黑曜石" , ru : "Обсидиан" } );

Translation.addTranslation( "Bronze" , { zh : "青铜" , ru : "Бронзовый" } );

ModAPI.addAPICallback( "ThermalExpansionAPI" , function ( api )
{
Translation.addTranslation( "Copper" , { zh : "铜" , ru : "Медный" } );
Translation.addTranslation( "Tin" , { zh : "锡" , ru : "Оловянный" } );
Translation.addTranslation( "Silver" , { zh : "银" , ru : "Серебряный" } );
Translation.addTranslation( "Lead" , { zh : "铅" , ru : "Свинцовый" } );
Translation.addTranslation( "Aluminum" , { zh : "铝" , ru : "Алюминиевая" } );
Translation.addTranslation( "Nickel" , { zh : "镍" , ru : "Никелевая" } );
Translation.addTranslation( "Platinum" , { zh : "铂" , ru : "Платиновая" } );
Translation.addTranslation( "Steel" , { zh : "钢" , ru : "Стальной" } );
Translation.addTranslation( "Electrum" , { zh : "琥珀金" , ru : "Электрумовая" } );
Translation.addTranslation( "Invar" , { zh : "因瓦合金" , ru : "Инваровая" } );
Translation.addTranslation( "Constantan" , { zh : "康铜" , ru : "Константановая" } );
}
);

ModAPI.addAPICallback( "RedCore" , function ( api )
{
Translation.addTranslation( "Ruby" , { zh : "红宝石" , ru : "Рубиновая" } );
Translation.addTranslation( "Sapphire" , { zh : "蓝宝石" , ru : "Сапфировая" } );
Translation.addTranslation( "Green Sapphire" , { zh : "绿色蓝宝石" , ru : "зелёного сапфира" } );
}
);




// file: Shears API.js

function Vanilla ( ID ) {
Block.registerDropFunction( 18 , function ( coords , id , data , diggingLevel , toolLevel ) {
    if ( Player.getCarriedItem ().id == ItemID[ ID + "_shears" ] ) {
        if ( data == 0 || data == 4 || data == 8 || data == 12 ) {
                return [ [ id, 1, 8 ] ];
            }
            else if ( data == 1 || data == 5 || data == 9 || data == 13 ){
                return [ [ id , 1 , 9 ] ];
            }
            else if ( data == 2 || data == 6 || data == 10 || data == 14 ) {
                return [ [ id , 1 , 10 ] ];
            }
            else if ( data == 3 || data == 7 || data == 11 || data == 15 ) {
                return [ [ id , 1 , 11 ] ];
            }
        }
    });
Block.registerDropFunction( 161 , function ( coords , id , data , diggingLevel , toolLevel ) {
    if ( Player.getCarriedItem ().id == ItemID[ ID + "_shears" ] ) {
        if ( data == 0 || data == 4 || data == 8 || data == 12 ) {
                return [ [ id , 1 , 8 ] ];
            }
            else if ( data == 1 || data == 5 || data == 9 || data == 13 ) {
                return [ [ id , 1 , 9 ] ];
            }
        }
    });
Block.registerDropFunction( 31 , function ( coords , id , data , diggingLevel , toolLevel ) {
    if ( Player.getCarriedItem ().id == ItemID[ ID + "_shears" ] ) {
        if ( data == 1 ) {
                return [ [ id , 1 , 1 ] ];
            }
            else if ( data == 2 ) {
                return [ [ id , 1 , 2 ] ];
            }
        }
    });
Block.registerDropFunction( 32 , function ( coords , id , data , diggingLevel , toolLevel ) {
    if ( Player.getCarriedItem ().id == ItemID[ ID + "_shears" ] ) {
            return [ [ id , 1 , 0 ] ];
        }
    });
Block.registerDropFunction( 30 , function ( coords , id , data , diggingLevel , toolLevel ) {
    if ( Player.getCarriedItem ().id == ItemID[ ID + "_shears" ] ) {
            return [ ];
        }
    });
Block.registerDropFunction( 175 , function ( coords , id , data , diggingLevel , toolLevel ) {
    if ( Player.getCarriedItem ().id == ItemID[ ID + "_shears" ] ) {
        if ( data == 2 ) {
                return [ [ 31 , 2 , 1 ] ];
            }
            else if ( data == 3 ) {
                return [ [ 31 , 2 , 2 ] ];
            }
        }
    });
Block.registerDropFunction( 106 , function ( coords , id , data , diggingLevel , toolLevel ) {
    if ( Player.getCarriedItem ().id == ItemID[ ID + "_shears" ] ) {
            return [ [ id , 1 , 0 ] ];
        }
    });
};

function CreateShears ( ID , Name ) {
IDRegistry.genItemID( ID + "_shears" );
Item.createItem( ID + "_shears" , Translation.translate( Name ) + Translation.translate( " Shears" ) , { name: ID + "_shears" } , { stack: 1 } );
};

function SetShears ( ID , Durability ) {
Item.setMaxDamage( ItemID[ ID + "_shears" ] , Durability );
Callback.addCallback( "DestroyBlockStart" , function ( coords , block , player ) {
    if ( Player.getCarriedItem().id == ItemID[ ID + "_shears" ] ) {
            Vanilla( ID );
            Block.setTempDestroyTime( 18 , 0 );
            Block.setTempDestroyTime( 161 , 0 );
            Block.setTempDestroyTime( 30 , 0.08 );
            Block.setTempDestroyTime( 35 , 0.25 );
        }
    });
Callback.addCallback( "DestroyBlock" , function ( coords , block , player ) {
    if ( Player.getCarriedItem().id == ItemID[ ID + "_shears" ] ) {
            var item = Player.getCarriedItem( );
            Player.setCarriedItem( item.id , item.count , item.data + 1 );
        if ( Player.getCarriedItem().data == Durability ) {
                Player.setCarriedItem( 0 , 0 , 0 );
            }
        }
    });
};

function ShearsRecipe ( ID , Material , MaterialData ) {
Recipes.addShaped({ id : ItemID[ ID + "_shears" ] , count : 1 , data : 0 } ,
    [ " s" , "s " ] ,
    [ 's' , Material , MaterialData ]
);
};




// file: Shears.js

CreateShears( "wood" , "Wood" );
SetShears( "wood" , 59 );

CreateShears( "flint" , "Flint" );
SetShears( "flint" , 84 );

CreateShears( "stone" , "Stone" );
SetShears( "stone" , 131 );

CreateShears( "bone" , "Bone" );
SetShears( "bone" , 150 );

CreateShears( "gold" , "Gold" );
SetShears( "gold" , 32 );

CreateShears( "quartz" , "Quartz" );
SetShears( "quartz" , 250 );

CreateShears( "diamond" , "Diamond" );
SetShears( "diamond" , 1561 );

CreateShears( "emerald" , "Emerald" );
SetShears( "emerald" , 2345 );

CreateShears( "obsidian" , "Obsidian" );
SetShears( "obsidian" , 2501 );




ModAPI.addAPICallback( "ICore" , function ( api )
{
CreateShears( "IC2_bronze" , "Bronze" );
SetShears( "IC2_bronze" , 350 );
});

ModAPI.addAPICallback( "ThermalExpansionAPI" , function ( api )
{
CreateShears( "TE_copper" , "Copper" );
SetShears( "TE_copper" , 175 );

CreateShears( "TE_tin" , "Tin" );
SetShears( "TE_tin" , 200 );

CreateShears( "TE_silver" , "Silver" );
SetShears( "TE_silver" , 200 );

CreateShears( "TE_lead" , "Lead" );
SetShears( "TE_lead" , 150 );

CreateShears( "TE_aluminum" , "Aluminum" );
SetShears( "TE_aluminum" , 225 );

CreateShears( "TE_nickel" , "Nickel" );
SetShears( "TE_nickel" , 300 );

CreateShears( "TE_platinum" , "Platinum" );
SetShears( "TE_platinum" , 1700 );

CreateShears( "TE_steel" , "Steel" );
SetShears( "TE_steel" , 500 );

CreateShears( "TE_electrum" , "Electrum" );
SetShears( "TE_electrum" , 100 );

CreateShears( "TE_invar" , "Invar" );
SetShears( "TE_invar" , 450 );

CreateShears( "TE_bronze" , "Bronze" );
SetShears( "TE_bronze" , 500 );

CreateShears( "TE_constantan" , "Constantan" );
SetShears( "TE_constantan" , 275 );
});

ModAPI.addAPICallback( "RedCore" , function ( api )
{
CreateShears( "RP_ruby" , "Ruby" );
SetShears( "RP_ruby" , 500 );

CreateShears( "RP_sapphire" , "Sapphire" );
SetShears( "RP_sapphire" , 500 );

CreateShears( "RP_green_sapphire" , "Green Sapphire" );
SetShears( "RP_green_sapphire" , 500 );
});




// file: Recipe.js

ShearsRecipe( "wood" , 5 , -1 );

ShearsRecipe( "stone" , 4 , 0 );

ShearsRecipe( "flint" , 318 , 0 );

ShearsRecipe( "bone" , 352 , 0 );

ShearsRecipe( "gold" , 266 , 0 );

ShearsRecipe( "quartz" , 406 , 0 );

ShearsRecipe( "diamond" , 264 , 0 );

ShearsRecipe( "emerald" , 388 , 0 );

ShearsRecipe( "obsidian" , 49 , 0 );



ModAPI.addAPICallback( "ICore" , function ( api )
{
ShearsRecipe( "IC2_bronze" , ItemID.ingotCopper , 0 );
});

ModAPI.addAPICallback( "ThermalExpansionAPI" , function ( api )
{
ShearsRecipe( "TE_copper" , ItemID.ingotCopper , 0 );

ShearsRecipe( "TE_tin" , ItemID.ingotTin , 0 );

ShearsRecipe( "TE_silver" , ItemID.ingotSilver , 0 );

ShearsRecipe( "TE_lead" , ItemID.ingotLead , 0 );

ShearsRecipe( "TE_aluminum" , ItemID.ingotAluminum , 0 );

ShearsRecipe( "TE_nickel" , ItemID.ingotNickel , 0 );

ShearsRecipe( "TE_platinum" , ItemID.ingotPlatinum , 0 );

ShearsRecipe( "TE_steel" , ItemID.ingotSteel , 0 );

ShearsRecipe( "TE_electrum" , ItemID.ingotElectrum , 0 );

ShearsRecipe( "TE_invar" , ItemID.ingotInvar , 0 );

ShearsRecipe( "TE_bronze" , ItemID.ingotBronze , 0 );

ShearsRecipe( "TE_constantan" , ItemID.ingotConstantan , 0 );
});

ModAPI.addAPICallback( "RedCore" , function ( api )
{
ShearsRecipe( "RP_ruby" , ItemID.gemRuby , 0 );

ShearsRecipe( "RP_sapphire" , ItemID.gemSapphire , 0 );

ShearsRecipe( "RP_green_sapphire" , ItemID.gemGreenSapphire , 0 );
});




