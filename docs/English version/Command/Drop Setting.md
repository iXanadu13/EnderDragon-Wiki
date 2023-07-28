---
sidebar_position: 4
---

# Drop Setting
> [] represents a required field, () represents an optional field

## drop add (permission: ed.drop.edit)
> /ed drop add \[unique_name] \[chance]

* `[unique_name]` The "unique_name" in dragon's configuration. (setting/xxx.yml)
* `[chance]` The probability to take effect. (unit: %)

Add dropped item for one type of dragon.

Date will be saved in reward/xxx.yml. You can also choose a favorite item format in "item_format" of config.yml.

## drop edit (permission: ed.drop.edit)
> /ed drop edit

Edit the item configuration in gui.

**It's highly recommended to modify the dropped item's configuration in files directly.**

## drop clear (permission: ed.drop.edit)
> /ed drop clear \[unique_name]

* `[unique_name]` The "unique_name" in dragon's configuration. (setting/xxx.yml)

Clear all the dropped item for one type of dragon.

## drop gui (permission: ed.drop.gui)
> /ed drop gui (name)

* `(name)` the name of gui. If absent, "main_gui" of config.yml will be used.

Open one gui, in which players can view the dropped items.
