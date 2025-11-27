IMPORT("Scales");

let helf_texture = "textures/ui/blood_scale_1_right";
if (__config__.getBool('left_bar_position')) 
    helf_texture = "textures/ui/blood_scale_1_left";
    
let BLOOD_SCALE = Scales.register({
    name: "BLOOD",
    full: "textures/ui/blood_scale_0",
    helf: helf_texture,
    empty: "textures/ui/blood_scale_2",
    isLeft: __config__.getBool('left_bar_position'),
    isReset: true
});