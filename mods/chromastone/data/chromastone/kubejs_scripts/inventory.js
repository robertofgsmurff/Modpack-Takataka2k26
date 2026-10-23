PlayerEvents.inventoryOpened(event => {
    const player = event.player;
    player.persistentData.inventoryOpen = true;
});

PlayerEvents.inventoryClosed(event => {
    const player = event.player;
    player.persistentData.inventoryOpen = false;
});