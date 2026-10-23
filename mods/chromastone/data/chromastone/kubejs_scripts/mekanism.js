const RADIATION_THRESHOLD = 0.0000049; // The tint would start at 0.000010 cus thats 10 μsv. But its slightly lower so it wipes it before the tint appear or atlaest just a for a second

ServerEvents.tick(event => {

    event.server.players.forEach(player => {

        if (!player) return;
        if (!abilityUtil.hasPower(player, "chromastone:crystalsapien")) return;

        let nbt = player.getNbt(); //This could break trinkets or m1s again
        if (!nbt) return;
        if (!nbt.ForgeCaps) return;

        let radCap = nbt.ForgeCaps["mekanism:radiation"];
        if (!radCap) return;

        let radiation = radCap.radiation;
        if (radiation == null) return;

        if (radiation >= RADIATION_THRESHOLD) {
    player.runCommandSilent("mek radiation reduce @s 10000");
    const scoreKey = "afomni.ChromaEnergy";
    const cap = 10000;
    const current = palladium.scoreboard.getScore(player, scoreKey);

    if (current < cap) {palladium.scoreboard.setScore(player,scoreKey,Math.min(current + 125, cap));

    }}

    });

});