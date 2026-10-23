StartupEvents.registry('palladium:abilities', (event) => {
    event.create('chromastone:hunger')
        .icon(palladium.createItemIcon('palladium:vibranium_circuit'))
        .tick((entity, entry, holder, enabled) => {
            if (!enabled || entity.type !== 'minecraft:player') return;

            const foodData = entity.getFoodData();
            const minHunger = 8; 

            if (foodData.getFoodLevel() < minHunger) {
                foodData.setFoodLevel(minHunger);
            }
        });
});
