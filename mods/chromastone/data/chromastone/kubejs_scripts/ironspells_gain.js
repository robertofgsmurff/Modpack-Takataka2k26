EntityEvents.hurt(event => {
    const { entity, source } = event;
    if (!entity.isPlayer()) return;

    const player = entity;
    if (!palladium.abilities.hasPower(player, 'chromastone:crystalsapien')) return;
    if (!abilityUtil.isEnabled(player, 'chromastone:crystalsapien', 'crystalsapien_loop')) return;


    // list of weaker energy sources
        const RealSources = [
        'DamageSource (blood_magic)',
        'DamageSource (nature_magic)'
        
    ];

    if (RealSources.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 175;
        const cap = 10000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
    }

});

