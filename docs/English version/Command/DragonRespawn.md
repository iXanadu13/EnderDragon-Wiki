---
sidebar_position: 3
---

# DragonRespawn
> need permission: ed.respawn. [] represents a required field, () represents an optional field

## respawn
> /ed respawn (world_name)

Respawn a dragon and initialize the end_crystal in this world

## respawn_cd
> /ed respawn_cd get [world_name]

Get countdown information of respawn in this world
> /ed respawn_cd set [world_name] [time:second]

Set the countdown of respawn in this world, which is how many seconds after the death of next EnderDragon to start a respawn
> /ed respawn_cd remove [world_name]

Delete countdown information of respawn in this world
> /ed respawn_cd removeAll

Delete countdown information of respawn in ALL worlds
> /ed respawn_cd start [world_name]

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
