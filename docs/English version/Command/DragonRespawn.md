---
sidebar_position: 3
description: respawn/respawn_cd
---

# DragonRespawn
> need permission: ed.respawn. [] represents a required field, () represents an optional field

## respawn
> /ed respawn (world_name)

* `(world_name)` If absent, sender can only be player and sender's current world will be selected.

Respawn a dragon and initialize the end_crystal in this world

## respawn_cd
> /ed respawn_cd get \[world_name]

* `[world_name]` The name of one world.

Get countdown information of respawn in this world
> /ed respawn_cd set \[world_name] \[time]

* `[world_name]` The name of one world.
* `[time]` Countdown setting time. (unit: seconds)

Set the countdown of respawn in this world, which is how many seconds after the death of next EnderDragon to start a respawn
> /ed respawn_cd remove \[world_name]

* `[world_name]` The name of one world.

Delete countdown information of respawn in this world
> /ed respawn_cd removeAll

Delete countdown information of respawn in ALL worlds
> /ed respawn_cd start \[world_name]

* `[world_name]` The name of one world.

Start the countdown in this world. 
(After setting, the default state is not started. If you want to start immediately, you can use this command)

## Compare
| - | respawn | respawn_cd |
| :----: | ---- | ---- |
| **Config** | in config.yml | using /respawn_cd (only set whether enable in config.yml) |
| **Data Storage** | data.yml | respawn_cd.yml |
| **Timing** | Specify the target time point | Specify seconds, execute countdown |
| **Time Discrepancy** | less than 10s | less than 1s |
| **World Number** | only one | unlimited |

## Mechanism
* If you don't want players in survival mode to break the end_crystal when respawn process is running, just fill `auto_respawn.invulnerable` of `config.yml` with `true`.
* When nobody is in world_the_end, chunks are unloaded and the respawn process is suspended. 
The process of respawn continues only when the chunk be loaded again. 
You can also set a chunk frequently loaded using other plugins if you want to.
* If you stop/reload the server when a respawn process is suspended, the process will break. 
If you want it to continue in the next time you start the server, just fill `advanced_setting.save_respawn_status` of `config.yml` with `true`.
* Because of some change of world generation in 1.20, if nobody has ever been to the_end, you can get the response `The world_the_end is unloaded` when respawn been started. 
But once someone has ever been to THE_END, regardless of whether the server is restarted or whether chunks are loaded, `/ed respawn [world name]` works fine.

:::caution

If you install `Multiverse-Core`, please fill `worlds.<world_name>.keepSpawnInMemory` of `worlds.yml` with `true`.

Or respawn may not function properly when nobody in THE_END.

:::
