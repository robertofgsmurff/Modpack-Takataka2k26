EntityEvents.hurt(event => {
    const { entity, source } = event;
    if (!entity.isPlayer()) return;

    const player = entity;
    if (!palladium.abilities.hasPower(player, 'chromastone:crystalsapien')) return;
    if (!abilityUtil.isEnabled(player, 'chromastone:crystalsapien', 'crystalsapien_loop')) return;

    // list of valid energy sources
    const validSources = [
         'DamageSource (deathlaser)',
        'DamageSource (electric_shock)',
        'DamageSource (energy)',
        'DamageSource (electricity)',
        'DamageSource (shock)',
         'DamageSource (lightning_magic)',
        'DamageSource (fire_magic)',
        'DamageSource (ice_magic)',
        'DamageSource (holy_magic)',
        'DamageSource (energy_beam)',
        'DamageSource (jujutsu)',
        'DamageSource (eldritch_magic)'
    ];
    

    // list of weaker energy sources
        const RealSources = [
        'DamageSource (tremorzilla_beam)',
        'DamageSource (magic)',
        'DamageSource (lightning_magic)',
        'DamageSource (fire_magic)',
        'DamageSource (innate)',
        'DamageSource (field_shock)',
        'DamageSource (blood)'
        
    ];
    const weakSources = ['DamageSource (radiation)','DamageSource (laser_static)'];
    const orbitSources = ['DamageSource (strike)'];
    const dragonSources = ['DamageSource (dragon_lightning)','DamageSource (dragon_fire)'];
    const fdb = ['DamageSource (chesed_attack)','DamageSource (electric_sphere)', 'DamageSource (chesed_vertical_ray)', 'DamageSource (geburah_laser_strike)', 'DamageSource (geburah_ray_strike)', 'DamageSource (malkuth_slashes)', 'DamageSource (geburah_judgement_ball)'];
    const superlaserSources = ['DamageSource (laser)', 'DamageSource (laser_headshot)', 'DamageSource (world_slash)'];

    if (RealSources.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 200;
        const cap = 10000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
        event.cancel();
    }
    
        if (fdb.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 520;
        const cap = 10000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
        event.cancel();
    }

    if (validSources.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 100;
        const cap = 10000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
        event.cancel();
    }

    if (weakSources.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 75; 
        const cap = 10000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
        event.cancel();
    }

        if (orbitSources.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 25000;
        const cap = 30000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
        event.cancel();
    }
            if (dragonSources.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 50;
        const cap = 10000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
        event.cancel();
    }

            if (superlaserSources.includes(String(source))) {
        const scoreKey = 'afomni.ChromaEnergy';
        const current = palladium.scoreboard.getScore(player, scoreKey);
        const gain = 9000;
        const cap = 10000;
        const calculated = Math.min(current + gain, cap);

        if (current < cap) {
            palladium.scoreboard.setScore(player, scoreKey, calculated);
        }
        event.cancel();
    }



});


//debug EntityEvents.hurt((event) => {
    // const player = event.player;
    //player.tell(`Damage Source: ${event.source.getType()}`);
//});

//EntityEvents.hurt((event) => {
   // if (event.source == 'DamageSource (tremorzilla_beam)' && event.entity.isPlayer() && abilityUtil.isEnabled(event.entity, 'chromastone:crystalsapien', 'crystalsapien_loop')) {
    //    event.cancel(); 
   // }
//}); Quill, thank you for helping out and adding a better system as opposed to resistance