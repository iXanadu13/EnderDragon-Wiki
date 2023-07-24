---
sidebar_position: 1
---
# PAPI variable

## Quick lookup
1. Install [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
2. Use command /papi parse me %ed_...%

## Function Description

### can_respawn
**Usage:** 
* `%ed_can_respawn%` Analyse whether the player's world can respawn EnderDragon now.
* `%ed_can_respawn_<world_name>%` Analyse whether this world can respawn EnderDragon now.

**Return:** `true`/`false`

### countdown progress
**Usage:** 
* `%ed_respawn_cd_progress%` Get the progress of respawn_cd in the player's world.
* `%ed_respawn_cd_progress_<world_name>%` Get the progress of respawn_cd in this world.

**Return:** `0-1`/`null`

Returning null indicates that the current world hasn't set a respawn countdown.

If the progress remains unchanged at 1, it indicates that the respawn countdown has been set but not started.

### countdown remain seconds
**Usage:** 
* `%ed_respawn_cd_remainTime%` Get the remain seconds of the respawn_cd in the player's world.
* `%ed_respawn_cd_remainTime_<world_name>%` Get the remain seconds of the respawn_cd in this world.

**Return:** `(seconds)`/`null` (Returning null indicates that the current world hasn't set a respawn countdown)

### countdown set seconds
**Usage:** 
* `%ed_respawn_cd_setTime%` Get the set seconds of the respawn_cd in the player's world.
* `%ed_respawn_cd_setTime_<world_name>%` Get the remain seconds of the respawn_cd in this world.

**Return:** `(seconds)`/`null` (Returning null indicates that the current world hasn't set a respawn countdown)

### countdown remain seconds (with format)
**Usage:** 
* `%ed_respawn_cd_remain_<world_name>%` You maybe get this: 0d1h0m0s
* `%ed_respawn_cd_remain_<world_name>$days,$hour,$minute,$second%` You maybe get this: 0days,1hour,0minute,0second

**Attention! Please don't arbitrarily change the number of separators "$".**

**Return:** `(formated string)`/`null` (Returning null indicates that the current world hasn't set a respawn countdown)
