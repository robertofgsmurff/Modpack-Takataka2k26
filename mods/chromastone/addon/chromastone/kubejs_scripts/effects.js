const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");




StartupEvents.registry('mob_effect', event => {
  event.create('chromastone:encased')
    .color(Color.YELLOW)
    .beneficial()
});
StartupEvents.registry('block', event => {
  event.create('chromastone:crystal_block')
    .displayName("Energy crystal")
    .soundType('amethyst')
    .opaque(false)
    .noDrops()
    .hardness(1.5)       
    .resistance(6.0) 
    .box(0, 0, 0, 16, 16, 16)
    .texture('particle', 'chromastone:block/diamond_block')
    .texture('down', 'chromastone:block/diamond_block_up')
    .texture('north', 'chromastone:block/diamond_block')
    .texture('south', 'chromastone:block/diamond_block')
    .texture('east', 'chromastone:block/diamond_block')
    .texture('west', 'chromastone:block/diamond_block')
    .texture('up', 'chromastone:block/diamond_block_up')
    .blockEntity(blockEntity => {
            blockEntity.enableSync();
            const initialData = new $CompoundTag();
            blockEntity.initialData(initialData);
            blockEntity.serverTick(2500, 44, entity => {
                entity.level.destroyBlock(entity.blockPos, false)
            })
        })
});