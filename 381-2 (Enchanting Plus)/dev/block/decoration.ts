IDRegistry.genBlockID("eplus_decoration");
Block.createBlock("eplus_decoration", [{name: "eplus decoration", texture: [["obsidian", 0]]}]);
Block.setShape(BlockID.eplus_decoration, 6/16, 0, 6/16, 10/16, 0.5/16, 10/16);

Block.registerDropFunction(BlockID.eplus_decoration, coords => {
    const tile = World.getTileEntity(coords.x, coords.y, coords.z);
    if(tile && tile.data.skin in ItemID){
        return [[ItemID[tile.data.skin], 1, 0]];
    }
    return [];
});


class FloatingBook implements TileEntity.TileEntityPrototype {

    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly blockID: number;
    readonly isLoaded: boolean;
    data: {[key: string]: any};
    container: UI.Container;
    liquidStorage: LiquidRegistry.Storage;
    bookModel: BookModel;

    readonly defaultValues = {
        skin: "eplus_book_advanced"
    };

    init(): void {
        this.bookModel = new BookModel(this.x + 0.5, this.y + 0.75, this.z + 0.5, "model/" + this.data.skin + ".png");
        this.bookModel.spawn();
        delete this.liquidStorage;
    }

    destroy(): void {
        this.bookModel && this.bookModel.destroy();
    }

}


TileEntity.registerPrototype(BlockID.eplus_decoration, new FloatingBook());