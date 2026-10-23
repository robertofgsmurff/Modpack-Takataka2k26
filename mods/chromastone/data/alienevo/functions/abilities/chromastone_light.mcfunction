# Spawn 5 light blocks around player if air, slightly above head
execute positioned ~ ~1.5 ~ if block ~ ~ ~ air run summon marker ~ ~ ~ {Tags:["ChromastoneLight"]}
execute positioned ~ ~1.5 ~ if block ~ ~ ~ air run setblock ~ ~ ~ minecraft:light[level=12]

# 4-cross pattern
execute positioned ~1 ~1.5 ~ if block ~ ~ ~ air run summon marker ~ ~ ~ {Tags:["ChromastoneLight"]}
execute positioned ~1 ~1.5 ~ if block ~ ~ ~ air run setblock ~ ~ ~ minecraft:light[level=11]
execute positioned ~-1 ~1.5 ~ if block ~ ~ ~ air run summon marker ~ ~ ~ {Tags:["ChromastoneLight"]}
execute positioned ~-1 ~1.5 ~ if block ~ ~ ~ air run setblock ~ ~ ~ minecraft:light[level=11]
execute positioned ~ ~1.5 ~1 if block ~ ~ ~ air run summon marker ~ ~ ~ {Tags:["ChromastoneLight"]}
execute positioned ~ ~1.5 ~1 if block ~ ~ ~ air run setblock ~ ~ ~ minecraft:light[level=11]
execute positioned ~ ~1.5 ~-1 if block ~ ~ ~ air run summon marker ~ ~ ~ {Tags:["ChromastoneLight"]}
execute positioned ~ ~1.5 ~-1 if block ~ ~ ~ air run setblock ~ ~ ~ minecraft:light[level=11]
