---
sidebar_position: 3
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
