PlayerEvents.tick(e => {
  const player = e.player;

  for (let p = 1; p <= 10; p++) {
    for (let s = 1; s <= 10; s++) {
      let key = `alienevo.alien_${p}_${s}`;
      let id = player.persistentData.getInt(key);

      if (id === 36) {
        player.tell(Text.green("<Omnitrix> Crystalsapien has successfully been overriden"));
        player.persistentData.putInt(key, 176);
      }
    }
  }
});