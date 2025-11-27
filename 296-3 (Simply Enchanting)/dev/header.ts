IMPORT("BookModel");

const Color = android.graphics.Color;
const EnchID = Native.Enchantment;


Callback.addCallback("PreLoaded", () => {

    const getA = (pixel: number) => pixel >> 24;
    const getR = (pixel: number) => pixel >> 16 & 0xff;
    const getG = (pixel: number) => pixel >> 8 & 0xff;
    const getB = (pixel: number) => pixel & 0xff;

    const convertMonochrome = (bitmap: android.graphics.Bitmap) => {
        const bmp = bitmap.copy(android.graphics.Bitmap.Config.ARGB_8888, true);
        const width = bmp.getWidth();
        const height = bmp.getHeight();
        let w: number;
        let h: number;
        let pixel: number;
        let gray: number;
        for(w = 0; w < width; w++){
            for(h = 0; h < height; h++){
                pixel = bmp.getPixel(w, h);
                if(getA(pixel) !== 0){
                    gray = getR(pixel) * 0.30 + getG(pixel) * 0.59 + getB(pixel) * 0.11;
                    bmp.setPixel(w, h, Color.argb(127, gray, gray, gray));
                }
            }
        }
        return bmp;
    };

    const dir = __packdir__ + "assets/resource_packs/vanilla/textures/";
    const lapis = FileTools.ReadImage(dir + "items/dye_powder_blue.png");
    const book = FileTools.ReadImage(dir + "items/book_normal.png");

    UI.TextureSource.put("icon_grayscale_lapis", convertMonochrome(lapis));
    UI.TextureSource.put("icon_grayscale_book", convertMonochrome(book));
    //UI.TextureSource.put("ui.anvil-plus", FileTools.ReadImage(dir + "ui/anvil-plus.png"));

});