IMPORT("BookModel");
IMPORT("EnhancedRecipes");

const Color = android.graphics.Color;
const EnchID = Native.Enchantment;
const EnchType = Native.EnchantType;
const ParticleID = Native.ParticleType;

const spawnParticleRing = (id: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, step: number, data?: number) => {
    for(let d = 0; d < Math.PI * 2; d += step){
        Particles.addParticle(id, x + Math.cos(d), y, z + Math.sin(d), vx, vy, vz, data);
    }
};


interface EnchantSet {[id: number]: number}


Callback.addCallback("PreLoaded", () => {
    const Bitmap = android.graphics.Bitmap;
    const bmp1 = new Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
    const bmp2 = new Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
    bmp1.setPixel(0, 0, Color.parseColor("#445aaeae"));
    bmp2.setPixel(0, 0, Color.parseColor("#44d10841"));
    UI.TextureSource.put("eplus.bg_available", bmp1);
    UI.TextureSource.put("eplus.bg_lock", bmp2);
});