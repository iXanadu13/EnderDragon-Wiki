---
sidebar_position: 5
description: action
---

# Action
> permission: op. [] represents a required field, () represents an optional field

## tell
> /ed action \[name] tell: \[text]

* `[name]` player's name, "me" represents yourself
* `[text]` string to be parsed

Send a message to player, which supports papi variable and color char '&'.

## tell-colorless
> /ed action \[name] tell-colorless: \[text]

* `[name]` player's name, "me" represents yourself
* `[text]` string to be parsed

Send a message to player, which supports papi variable.

## tell-raw
> /ed action \[name] tell-raw: \[text]

* `[name]` player's name, "me" represents yourself
* `[text]` string

Send a raw message to player.

## groovy
> /ed action \[name] groovy: \[code]

* `[name]` player's name, "me" represents yourself
* `[code]` code in Groovy

Execute the code. Variables can be used are below:
* `player` Player
* `itemStack` Item in player's main-hand
* `world` The world, where the player is located

Some examples:
```js
/ed action me groovy: player.setFoodLevel(player.foodLevel+1)
```
Plus one food-level for yourself.

```js
/ed action me groovy: tell(itemStack.type)
```
Tell you the item's type in your main-hand.

Attention! The function tell() here is defined in script\lib.groovy, an internal script file of plugin.
