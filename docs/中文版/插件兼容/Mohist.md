---
sidebar_position: 3
sidebar_label: Mohist
description: a kind of Minecraft server
---

## 配置

* 世界环境修复：`config.yml` 中的 `advanced_setting.world_env_fix` -> `true`/`false`

## 功能

在一些mohist服务端中`World::getEnvironment()`获取到的世界类型均为`NORMAL`，导致末影龙复活功能不能正常使用。

启用后，将为此提供热修复。

![](_images/world_env_fix.jpg)
