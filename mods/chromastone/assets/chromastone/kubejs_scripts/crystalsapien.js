ClientEvents.tick(event => {
    if (abilityUtil.hasPower(event.player, "chromastone:crystalsapien")) {
        let ChromastoneblowsEnabled = abilityUtil.isEnabled(event.player, "chromastone:crystalsapien", "explosion_anim");
        
        if (ChromastoneblowsEnabled) {
            let mode = Client.options.getCameraType();
            if (mode !== 'third_person_back' && mode !== 'third_person_front') {
                event.player.persistentData.camera_reset = 1;
                Client.options.setCameraType('third_person_back');
            }
        }

        let end = event.player.persistentData.camera_reset;
        // Reset camera only when both abilities are disabled
        if (!ChromastoneblowsEnabled && end === 1) {
            event.player.persistentData.camera_reset = 0;
            Client.options.setCameraType('first_person');
        }
    }
});


PalladiumEvents.registerAnimations((event) => {
    event.register("chromastone/crystalsapien_block", 30, (builder) => {
        if (abilityUtil.isEnabled(builder.getPlayer(), "chromastone:crystalsapien", "crystalsapien_anim_block")) {
            if (builder.isFirstPerson()) {  
            }
            else {
                if (builder.getPlayer().isCrouching()) {
                    builder.get("right_arm")
                        .setZ(-3.5)
                        .setY(2);
                    builder.get("left_arm")
                        .setZ(-3.5) //negative = forwards
                        .setY(2); //negative = higher placement
                    builder.get("right_leg")
                        .setZ(1)
                        .setY(10);
                    builder.get("left_leg")
                        .setZ(1)
                        .setY(10);
                    builder.get("chest")
                        .setZ(-5)
                        .setY(-0.1);
                }
            }
        }
    });
});


PalladiumEvents.registerAnimations((event) => {
    event.register('chroma_leap', 200, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'chromastone:crystalsapien', 'leap_anim', builder.getPartialTicks());
        if (animation > 0) {
            builder.get('right_arm')
                .setZRotDegrees(37.5)
                .setXRotDegrees(0)
                .animate('InOutCubic', animation);
        
            builder.get('left_arm')
                .setZRotDegrees(-37.5)
                .setXRotDegrees(0)
                .animate('InOutCubic', animation);
        
            builder.get('right_leg')
                .setX(-1.9)
                .setY(9)
                .setXRotDegrees(0)
                .setZ(-4)
                .animate('InOutCubic', animation);

                builder.get('left_leg')
                .setXRotDegrees(0)
                .animate('InOutCubic', animation);
               
                builder.get('body')
						.setXRotDegrees(-20)
                        .animate('InOutCubic', animation);

    }
});
});
PalladiumEvents.registerAnimations((event) => {
    event.register('chromastone/limbs', 15, (builder) => {
		
		if (abilityUtil.isEnabled(builder.getPlayer(), "chromastone:crystalsapien", "crystalsapien_loop")) {
		if (!builder.isFirstPerson()) {
            const halfPi = 1.57079632679;
            builder.get('left_arm').rotateX(builder.getModel().leftArm.xRot * -0.1)
	        builder.get('right_arm').rotateX(builder.getModel().rightArm.xRot * -0.1)
            builder.get('right_leg').rotateX(builder.getModel().rightLeg.xRot * -0.3)
	        builder.get('left_leg').rotateX(builder.getModel().leftLeg.xRot * -0.3)

        }
    }

    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('chromastone/crystal_block', 15, (builder) => {
        let block_anim = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'chromastone:crystalsapien', 'block_abil', builder.getPartialTicks());
            if (block_anim > 0.0 && builder.isFirstPerson()) {
               builder.get('right_arm').setXRotDegrees(90).setZRotDegrees(90).setYRotDegrees(-350).setY(9).setZ(-7).animate('InOutCubic', block_anim);
               builder.get('left_arm').setXRotDegrees(90).setZRotDegrees(-90).setYRotDegrees(350).setY(9).setZ(-7).animate('InOutCubic', block_anim);
                   } else {
                       builder.get('right_arm').setXRotDegrees(0).setZRotDegrees(0).setYRotDegrees(0).animate('InOutCubic', block_anim);
                       builder.get('left_arm').setXRotDegrees(0).setZRotDegrees(0).setYRotDegrees(0).animate('InOutCubic', block_anim);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('chromastone/explosion', 50, (builder) => {
        let explosion = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'chromastone:crystalsapien', 'explosion_anim', builder.getPartialTicks(), 20, 40);
        if (explosion > 0 && !builder.isFirstPerson()) {
            builder.get('right_arm')
                .rotateZDegrees(0)
                .setXRotDegrees(0)
                .animate('easeOutBack', explosion);
            builder.get('left_arm')
                .rotateZDegrees(0)
                .setXRotDegrees(0)
                .animate('easeOutBack', explosion);
            builder.get('left_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .animate('easeOutBack', explosion);
            builder.get('right_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .animate('easeOutBack', explosion);
        }
        if (explosion > 0.0 && builder.isFirstPerson()) {
        }
    });
});