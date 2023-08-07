---
sidebar_position: 1
sidebar_label: PlaceholderAPI
---
# PAPI变量

## 快速查看
1. 安装 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
2. 使用指令/papi parse me %ed_...%

## 功能介绍

### 能否复活末影龙
**用法：**
* `%ed_can_respawn%` 判断玩家所在世界当前能否复活末影龙
* `%ed_can_respawn_世界名%` 判断这个世界当前能否复活末影龙

**返回值：** `true`/`false`

### 复活倒计时进度
**用法：**
* `%ed_respawn_cd_progress%` 获得玩家所在世界respawn_cd进行进度
* `%ed_respawn_cd_progress_世界名%` 获得这个世界respawn_cd进行进度

**返回值：** `0-1`/`null`（返回null说明当前世界没有设置复活倒计时；如果进度保持在1不变，说明复活倒计时已设置但未启动）

### 复活倒计时剩余时间
**用法：**
* `%ed_respawn_cd_remainTime%` 获得玩家所在世界respawn_cd剩余时间
* `%ed_respawn_cd_remainTime_世界名%` 同理

**返回值：** `剩余秒数`/`null`（返回null说明当前世界没有设置复活倒计时）

### 复活倒计时设定时间
**用法：**
* `%ed_respawn_cd_setTime%` 获得玩家所在世界respawn_cd设定时间
* `%ed_respawn_cd_setTime_世界名%` 同理

**返回值：** `秒数`/`null`（返回null说明当前世界没有设置复活倒计时）

### 复活倒计时剩余时间（带格式）
**用法：**
* `%ed_respawn_cd_remain_世界名%` 返回值举例：“0d1h0m0s”
* `%ed_respawn_cd_remain_世界名$天$小时$分$秒%` 返回值举例：“0天1小时0分0秒”

**注意，要么不加$用默认的，要么加4个$，请勿自己发明一种新的写法**

**返回值：** `带格式的剩余时间`/`null`（返回null说明当前世界没有设置复活倒计时）





