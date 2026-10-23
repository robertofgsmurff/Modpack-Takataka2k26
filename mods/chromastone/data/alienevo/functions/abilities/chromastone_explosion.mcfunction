execute as @s run scoreboard players add @s Chromastone.Explosion 1
execute if score @s Chromastone.Explosion matches 1 run effect give @s minecraft:levitation 3 0 true
execute if score @s Chromastone.Explosion matches 1..22 run effect give @s minecraft:slowness 1 255 true


execute if score @s Chromastone.Explosion matches 22..60 run particle alienevo:blows ^ ^2 ^ 0 0 0 0.45 20 normal
execute if score @s Chromastone.Explosion matches 22..60 run particle alienevo:blows_boya ^ ^2 ^ 0 0 0 0.45 20 normal
execute if score @s Chromastone.Explosion matches 22..60 run particle alienevo:blows_yrg ^ ^2 ^ 0 0 0 0.45 20 normal


execute if score @s Chromastone.Explosion matches 22..60 run particle minecraft:flash ^ ^2 ^ 0 0 0 0.001 1 normal
execute if score @s Chromastone.Explosion matches 22..60 run scoreboard players remove @s afomni.ChromaEnergy 60


#  Middle ring (around torso, y = 1.6)
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^2 ^1.6 ^ 0 0 0 0.01 20 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_boya ^1.4 ^1.6 ^1.4 0 0 0 0.01 20 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^ ^1.6 ^2 0 0 0 0.01 20 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_boya ^-1.4 ^1.6 ^1.4 0 0 0 0.01 20 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^-2 ^1.6 ^ 0 0 0 0.01 20 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_boya ^-1.4 ^1.6 ^-1.4 0 0 0 0.01 20 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^ ^1.6 ^-2 0 0 0 0.01 20 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_boya ^1.4 ^1.6 ^-1.4 0 0 0 0.01 20 normal

#  Upper ring (around shoulders/head, y = 2.6)
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_yrg ^1.5 ^2.6 ^ 0 0 0 0.01 15 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^1 ^2.6 ^1 0 0 0 0.01 15 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_yrg ^ ^2.6 ^1.5 0 0 0 0.01 15 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^-1 ^2.6 ^1 0 0 0 0.01 15 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_yrg ^-1.5 ^2.6 ^ 0 0 0 0.01 15 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^-1 ^2.6 ^-1 0 0 0 0.01 15 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows_yrg ^ ^2.6 ^-1.5 0 0 0 0.01 15 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^1 ^2.6 ^-1 0 0 0 0.01 15 normal

# Lower ring (around legs, y = 0.6)
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^1.5 ^0.6 ^ 0 0 0 0.01 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^1 ^0.6 ^1 0 0 0 0.01 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^ ^0.6 ^1.5 0 0 0 0.01 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^-1 ^0.6 ^1 0 0 0 0.01 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^-1.5 ^0.6 ^ 0 0 0 0.01 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^-1 ^0.6 ^-1 0 0 0 0.01 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^ ^0.6 ^-1.5 0 0 0 0.01 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^1 ^0.6 ^-1 0 0 0 0.01 10 normal

execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^ ^3.2 ^ 0 0 0 0.05 10 normal
execute if score @s Chromastone.Explosion matches 1..12 run particle alienevo:blows2 ^ ^0.2 ^ 0 0 0 0.05 10 normal