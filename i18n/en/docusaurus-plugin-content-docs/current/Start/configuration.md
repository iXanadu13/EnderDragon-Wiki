---
sidebar_position: 2
hide_title: true
---

## config.yml
>  Plugin version: 2.2.1

```yaml
#You don't need to edit it.
version: 2.2.0

#Enabled: 'Chinese','English'
lang: 'English'

#Enabled: 'Disable','ChatBox','SubTitle','ActionBar'
damage_visible_mode: ActionBar

damage_statistics:
  # Display how many player at most
  limit: 10

#Enabled: 'weight','pc' ('edge' is deprecated!)
#'weight'(edge): means using weight to decide which dragon(including default dragon) to spawn.
#'pc': namely 'priority+chance', dragons(except the default one) will be sorted in descending order of priority, and plugin will sequently try to spawn each dragon(according to respective chance). Once succeed, it will spawn and dragons behind it will be skipped. If all attempts fail, spawn the default one.
special_dragon_jude_mode: 'weight'

#format: '<NAME>:<WEIGHT>'   (<NAME> -> file name; <WEIGHT> -> positive integer)
# For example, if you want to add a new dragon,
# you can create a new file named '<NAME>.yml' in plugins/EnderDragon/setting,
# and then add - '<NAME>:<WEIGHT>' here
dragon_setting_file:
  - 'default:5'
  - 'special:5'

auto_respawn:
  # You can add more entries without duplicate name according to the format.
  task1:
    enable: false
    world_name: world_the_end
    #some examples:
    # minute:30            -> respawn every 30 minutes
    # hour:4               -> respawn every 4 hours
    # day:1,00:00          -> respawn at 00:00 every day
    # day:10,14:30         -> respawn at 14:30 every 10 days
    # week:6,22:00         -> respawn at 22:00 every Saturday(the 6th day of one week)
    # week:7,09:00         -> respawn at 09:00 every Sunday
    # month:8,11:43        -> respawn at 11:43,the 8th day every month
    # year:200,00:00       -> respawn at 00:00,the 200th day every year
    respawn_time: 'day:10,22:00'
  task_2:
    enable: false
    world_name: world_the_end
    respawn_time: 'week:7,20:00'



#"respawn_cd" works as accurate countdown, and have an independent system.
#The configuration can be modified with command "/ed respawn_cd".
#"auto_respawn.invulnerable" has same effect on this.
respawn_cd:
  enable: true

#if set this to true, player(in survival mode) can't break the end_crystal after auto_respawn starts
crystal_invulnerable: false
#if set this to true, end_crystal can still be crafted or placed,but end_crystal that placed by player cannot respawn the ender_dragon
resist_player_respawn: false
#if set this to true, player cannot gather dragon_breath with glass_bottle
resist_dragon_breath_gather: false
#The gui that will be shown when using "/ed drop gui"
main_gui: main

#The spawn of ender_dragon in these worlds will be ignored by this plugin.
blacklist_worlds:
  - 'world'
  - 'world_nether'

#optional: [default/nbt/advanced]
item_format:
  reward: default

#Whether hook to other plugins
hook_plugins:
  MythicLib: true

#Whether enable script expansion
#Due to dependency loading, this configuration change will only take effect after reloading the server
expansion:
  groovy: false

#[true/false]
debug: false

#Do not modify the configuration below unless you know what you are doing
advanced_setting:
  # In some mohist-server, environment of world may be loaded incorrectly, which affects the respawn function.
  # You can set this to "true" and reload server to fix it.
  world_env_fix: false
  save_respawn_status: false
  backslash_split:
    reward: false
```


## setting/default.yml
>  Plugin version: 2.2.1

```yaml
version: 2.2.0

#This is used for plugin internal identification.
#Please make sure the value is unique among all the types of dragons
unique_name: 'default'

display_name: 'Ender Dragon'

#In "weight" mode, this(priority) will be ignored.
#In "pc" mode, dragon with higher priority will be judged earlier
priority: -32768

#the chance of spawning a special ender dragon
#Now you can also enter a double here (unit:%)
#You shouldn't add "%".
spawn_chance: 100

#the icon that represents this dragon in gui view
icon:
  ==: org.bukkit.inventory.ItemStack
  type: APPLE
  amount: 1
  meta:
    ==: ItemMeta
    meta-type: UNSPECIFIC
    display-name: '§rNormal Dragon'

#MC1.19:
#icon:
#  ==: org.bukkit.inventory.ItemStack
#  v: 3105
#  type: APPLE
#  amount: 1
#  meta:
#    ==: ItemMeta
#    meta-type: UNSPECIFIC
#    display-name: '{"text":"Normal Dragon"}'

#the format of gui this dragon will use(chosen in file view.yml,multiple dragons can share the same one)
drop_gui: default_gui

#please enter a double that above 0
#Valid example: “100”,“1000.0”,“200.00” etc.
#TIPS: The max_health of native ender-dragon is 200.
max_health: 200

#the health of ender-dragon when it spawns
#please enter a double that above 0
#don't make it above the "max_health"
spawn_health: 200

# the least interval time between injuries (unit:tick, 1tick=0.05s)
# only supports integer value
no_damage_tick: 10

#please enter an integer here
#TIPS: In native mc,the first ender dragon drops 12000 exp,afterwards 500 exp per dragon
exp_drop: 500

dragon_egg_spawn:
  #the chance of spawning a dragon egg when this dragon died
  #enter an integer or a double (from 0 to 100)(unit:%)
  chance: 0

  #the dragon-egg spawn delay after this dragon died
  #please enter an integer that above 0 (unit:tick,20ticks=1 second)
  #Spawning an egg after the restoration of exit portal can avoid some trouble
  delay: 410

  #the position where the dragon egg spawns
  x: 0
  y: 70
  z: 0

#allow double and negative value
armor_modify: 0

#allow double and negative value
armor_toughness_modify: 0

#the health-regain amount every second when the ender-dragon is healed by ender-crystal(Native: 2.0 per second)
crystal_heal_speed: 2.0

#"none" represents not glowing; "random" is also optional
#enable color: AQUA,BLACK,BLUE,DARK_AQUA,DARK_BLUE,DARK_GRAY,DARK_GREEN,DARK_PURPLE,DARK_RED,GOLD,GRAY,GREEN,LIGHT_PURPLE,RED,WHITE,YELLOW
glow_color: none

attack:
  #the damage modify when this dragon attacks player with body or limb (allow double and negative value)
  damage_modify: 0

  #the effect give to player when this ender dragon attacks player with body or limb
  #the format is the same as effect_cloud.potion
  potion_effect:
    - ''
    - ''
    - ''

  # the effect give to player when this ender dragon attacks player with body or limb
  # format: (<type>: seconds)
  extra_effect:
    fire: 0
    # "freeze" can only be used in server greater than or equal to version 1.17
    freeze: 0


#dragon recover health when cause damage to other entity
#suck_amount = real_damage * <rate>(auto regard as "%") + <basic_amount>
suck_blood:
  enable: false

  #unit: %
  rate: 0

  #allow double
  base_amount: 0

  #whether only trigger when dragon attack the player
  only_player: true

bossbar:
  #enable:BLUE,GREEN,RED,PINK,PURPLE,WHITE,YELLOW
  color: pink

  #enable:SOLID,SEGMENTED_6,SEGMENTED_10,SEGMENTED_12,SEGMENTED_20
  style: 'SOLID'

effect_cloud:
  #enter a double that above 0
  original_radius: 5

  #how many blocks it's radius will enlarge per second
  expand_speed: 0.1

  #enter an integer that above 0 (unit: second)
  duration: 30

  #RGB module,example:'255:255:0' (yellow)
  #"none" represents original type
  color: none

  #please follow the format: '<potion> <duration> <level>'
  #please enter an integer that above 0 at "duration"(unit:second)
  #please enter an integer (from 1 to 256) at "level"
  #Some potion's name differs from that in mc native command,here are all the potions you can use:
  #ABSORPTION,BAD_OMEN,BLINDNESS,CONDUIT_POWER,CONFUSION,DAMAGE_RESISTANCE,DARKNESS,DOLPHINS_GRACE
  #FAST_DIGGING,FIRE_RESISTANCE,GLOWING,HARM,HEAL,HEALTH_BOOST,HERO_OF_THE_VILLAGE,HUNGER
  #INCREASE_DAMAGE,INVISIBILITY,JUMP,LEVITATION,LUCK,NIGHT_VISION,POISON,REGENERATION,SATURATION
  #SLOW,SLOW_DIGGING,SLOW_FALLING,SPEED,UNLUCK,WATER_BREATHING,WEAKNESS,WITHER
  potion:
    - 'harm 60 2'
    - 'BLINDNESS 10 1'

#All the settings below can be disabled with a "[]".(Ex: spawn_cmd: [] )

#commands that server will run when this dragon spawn
#Attention: You shouldn't add “/” at the beginning of each command!
spawn_cmd:
  - ''
  - ''
  - ''

#commands that server will run when this dragon been killed(exclude '/kill')
#You can use %player% respective the name of killer
#if plugin can't find who kill the dragon,commands that contain '%player%' won't be performed
#Example: - 'give %player% apple 1'
death_cmd:
  - ''
  - ''
  - ''

#Message send to everyone when this dragon spawn
#"%times" respective the ordinal number of this dragon
spawn_broadcast_msg:
  - '§aDragon No.%times% has spawned.'
  - ''

#Message send to everyone when this dragon is killed(exclude '/kill')
#"%times" respective the ordinal number of this dragon
#You can use {damage_statistics} to send "Dragon Slaying Report" with hover text.
#The plugin will try to find the killer as far as possible.If killer can't be found, %player% will be replaced with the 'dragon.no_killer' in language file
death_broadcast_msg:
  - '§bDragon No.%times% has been killed by %player%'
  - 'Rewards has been distributed! {damage_statistics}'
  - ''

#message that will be sent to the killer(if he/she can be found)
#"%times" respective the ordinal number of this dragon
msg_to_killer:
  - '§bCongratulations, You have been the dragon slayer!'
  - ''
  - ''

reward_dist:
  # enable: [all,drop,killer,pack,rank,termwise]
  # all: Give to all participants in dragon slaying.
  # drop: Dropped item, players can grab it casually.
  # killer: Only give to the final killer.
  # pack: Pack all items that trigger drop and distribute them to players weighted based on their damage percentage.
  # rank: Strictly based on player damage ranking, give the top few players with the highest damage.
  # termwise: Assign the items that trigger the drop ONE BY ONE to the player based on the weighted proportion of damage.
  type: killer
  drop:
    # Whether the dropped item glows.
    # Refer to the previous 'glow_color' for configuration method
    glow: green
  pack:
    # the number of player(s) can be selected at most
    max_num: 1
  rank:
    # Top few can receive rewards
    max_num: 1

```
