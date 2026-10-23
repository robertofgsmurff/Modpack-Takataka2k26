let BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
let LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');
let ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
let BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');

const MAX_HEIGHT = 4;
const BLOCKS_PER_TICK = 1; 

// Modded blocks
const modBlockID = new ResourceLocation("chromastone", "crystal_block");
const crystalBlock = BuiltInRegistries.BLOCK.get(modBlockID);
const crystalState = crystalBlock ? crystalBlock.defaultBlockState() : null;

ServerEvents.tick(event => {
    const server = event.getServer ? event.getServer() : event.server;
    if (!server) return;

    server.getAllLevels().forEach(level => {
        if (level.isClientSide()) return;

        level.entities.forEach(entity => {
            if (!(entity instanceof LivingEntity)) return;
            if (!entity.hasEffect('chromastone:encased')) return;
            if (!crystalState) return;

            const pos = entity.blockPosition();
            const px = pos.x;
            const py = pos.y;
            const pz = pos.z;

            const bb = entity.getBoundingBox();
            const rawHeight = Math.ceil(bb.maxY - bb.minY);
            const height = Math.min(MAX_HEIGHT, rawHeight) + 1;

            // Attempt at wdith, not really workinh, but if it partially works it works
            const rawWidthX = bb.maxX - bb.minX;
            const rawWidthZ = bb.maxZ - bb.minZ;
            const rawWidth = Math.ceil(Math.max(rawWidthX, rawWidthZ));
            const width = Math.max(1, Math.floor(rawWidth / 2));

            let growthOffsets = [];

            // Center
            growthOffsets.push([0, -1, 0]);
            growthOffsets.push([0, height, 0]);

            growthOffsets.push([width, 0, 0]);
            growthOffsets.push([-width, 0, 0]);
            growthOffsets.push([0, 0, width]);
            growthOffsets.push([0, 0, -width]);

            growthOffsets.push([0, 3, -width]);
            growthOffsets.push([width, 3, 0]);
            growthOffsets.push([-width, 3, 0]);
            growthOffsets.push([0, 3, width]);

            growthOffsets.push([width, 2, width]);
            growthOffsets.push([width, 1, width]);

            growthOffsets.push([width, 2, -width]);
            growthOffsets.push([width, 1, -width]);

            growthOffsets.push([-width, 2, width]);
            growthOffsets.push([-width, 1, width]);

            growthOffsets.push([-width, 2, -width]);
            growthOffsets.push([-width, 1, -width]);

            const directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ]; 

            let veins = 3 + Math.floor(Math.random() * 2); // Rng veins

            for (let v = 0; v < veins; v++) {

                let dir = directions[Math.floor(Math.random() * directions.length)];
                let dirX = dir[0];
                let dirZ = dir[1];

                let length = 1 + Math.floor(Math.random() * 2); // How lentghy it is from the sides

                for (let l = 1; l <= length; l++) {

                    let yOffset = Math.min(height, Math.floor(l * 0.7)); //How high it will go

                    let x = dirX * l;
                    let z = dirZ * l;

                    growthOffsets.push([x, yOffset, z]);

                    if (Math.random() < 0.25) {
                        growthOffsets.push([
                            x,
                            yOffset + 1,
                            z
                        ]);
                    }
                }
            }

            growthOffsets.sort(() => Math.random() - 0.5);

            let placed = 0;

            for (let i = 0; i < growthOffsets.length && placed < BLOCKS_PER_TICK; i++) {

                let [dx, dy, dz] = growthOffsets[i];
                let bp = new BlockPos(px + dx, py + dy, pz + dz);
                let block = level.getBlock(bp);

                if (!block) continue;
                if (block.getId() !== 'minecraft:air') continue;
//if (Math.random() < 0.9) {} for rng
    level.setBlock(bp, crystalState, 3);
    placed++;

            }
        });
    });
}); 

//Thank you quill for giving the basis of this from Armodrillo's drilling. The original thign was to make i tbased on the entities width/height, but it just kept looking like dogshit if it were bigger. So i just decided to force it to always be the same ass strucutre, and HOPE that it will look natural based on whether or not the entity moves or bthe way the blocks appear. If anyone reads this, please lmk how to unfuck the random spread/vein for bigger entities, because apart from the preset blocks, the actual "natura" block spreading just becomes inverted. not even inverted, just randomly bigger without the crystals even being connected.