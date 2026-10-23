global.alienevo_alien_176 = ['chromastone:crystalsapien']; // Register your alien. Use an index value between 102 and 300
global.alienevo_randomization_176 = [false]; // Determine if you want your alien to be unlocked through mistransformation.

// INTERFACE VALUES
global.alienevo_regen_176 = [5]; // A faux regen value to represent your alien's healing capability. Values 0 thru 10. Does not effect gameplay.
global.alienevo_scale_176 = [55]; // Scale of the alien preview render. 55 is default
global.alienevo_textcolor_176 = [0xfa7bca]; // Text color of the alien species name
global.alienevo_background_176 = ['minecraft:textures/block/crying_obsidian.png']; // Tiled texture that appears behind the alien preview render

// COLOR PALETTES
// This is where you will define the default colors your model will use to support color customization.

// The "_uniforms" entries allow you to disable Glow, Primary, or Secondary tabs from appearing when editing the colors of your alien, dependent on uniform type.
global.alienevo_176_10k_uniforms = [true, false, false]; // Glow (enabled), Primary (enabled), Secondary (enabled)
global.alienevo_176_default_uniforms = [true, false, false]; // Glow (enabled), Primary (disabled), Secondary (disabled)
global.alienevo_176_prototype_uniforms = [true, false, false];

// Make sure your colors are listed from BRIGHTEST TO DARKEST. You can use as many or as few colors in a palette as you'd like.
global.alienevo_176_10k_skincolor_palette_1 = ["47466c", "383254", "2e2643", "221a31", "1a1224", "171020", "140d1b", "130c19", "0f0913"];
global.alienevo_176_10k_skincolor_palette_2 = ["fa7bca", "eb59b4", "d8399c", "c21580", "a20b54", "8d0841", "78052d"];
global.alienevo_176_10k_skincolor_palette_3 = ["0a040b"];

global.alienevo_176_default_skincolor_palette_1 = ["47466c", "383254", "2e2643", "221a31", "1a1224", "171020", "140d1b", "130c19", "0f0913"];
global.alienevo_176_default_skincolor_palette_2 = ["fa7bca", "eb59b4", "d8399c", "c21580", "a20b54", "8d0841", "78052d"];
global.alienevo_176_default_skincolor_palette_3 = ["0a040b"];

global.alienevo_176_ov_skincolor_palette_1 = ["47466c", "383254", "2e2643", "221a31", "1a1224", "171020", "140d1b", "130c19", "0f0913"];
global.alienevo_176_ov_skincolor_palette_2 = ["fa7bca", "eb59b4", "d8399c", "c21580", "a20b54", "8d0841", "78052d"];
global.alienevo_176_ov_skincolor_palette_3 = ["0a040b"];

global.alienevo_176_prototype_skincolor_palette_1 = ["47466c", "383254", "2e2643", "221a31", "1a1224", "171020", "140d1b", "130c19", "0f0913"];
global.alienevo_176_prototype_skincolor_palette_2 = ["fa7bca", "eb59b4", "d8399c", "c21580", "a20b54", "8d0841", "78052d"];

// GLOW COLOR PALETTES

// Glow color also accepts palettes of as many or as few colors as you choose.
// In this instance, I am using a single color instead of multiple shades.
global.alienevo_176_10k_glowcolor_1 = ["b8ff00"];
global.alienevo_176_default_glowcolor_1 = ["b8ff00"];
global.alienevo_176_prototype_glowcolor_1 = ["b8ff00"];
// If your alien has more than one glow color, like XLR8 or Ripjaws, define it like this:
// global.alienevo_300_10k_glowcolor_2 = ["ffc833", "f1891f"];
// global.alienevo_300_default_glowcolor_2 = ["ffc833", "f1891f"];
// global.alienevo_300_prototype_glowcolor_2 = ["ffc833", "f1891f"];