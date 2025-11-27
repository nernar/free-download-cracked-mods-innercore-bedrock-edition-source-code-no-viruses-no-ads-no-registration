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