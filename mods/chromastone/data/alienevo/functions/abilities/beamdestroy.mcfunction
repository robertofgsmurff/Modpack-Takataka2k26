# First layer
execute positioned ^-1 ^-1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^-1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^-1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^-1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

execute positioned ^-1 ^0 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^0 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^0 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^0 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

execute positioned ^-1 ^1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^1 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

execute positioned ^-1 ^2 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^2 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^2 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^2 ^ if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

# Second layer (forward one block)
execute positioned ^-1 ^-1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^-1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^-1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^-1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

execute positioned ^-1 ^0 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^0 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^0 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^0 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

execute positioned ^-1 ^1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^1 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

execute positioned ^-1 ^2 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^0 ^2 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^1 ^2 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy
execute positioned ^2 ^2 ^1 if block ~ ~ ~ #alienevo:strong_beam run setblock ~ ~ ~ air destroy

execute at @s run damage @e[distance=..3,limit=1,sort=nearest,type=!minecraft:marker,type=!minecraft:item,type=!palladium:custom_projectile] 50 palladium:energy_beam