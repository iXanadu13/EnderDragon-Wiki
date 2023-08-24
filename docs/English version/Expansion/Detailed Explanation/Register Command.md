---
sidebar_position: 5
---

# Register Command

EnderDragon expansion provides a simplified method to register a command.

Here is an example:

```js
package expansion.groovy.Example

import org.bukkit.Bukkit
import pers.xanadu.enderdragon.config.Lang
import pers.xanadu.enderdragon.script.tool.ScriptCommand as Command//You can delete this import because "Command" is built-in

static void enable(){
    Lang.info("I am a CommandTest script written in groovy.")
    def executor = {
        sender, cmd, label, args ->{
            sender.sendMessage("I'm a test command")//sender a message to command sender
            return true
        }
    }
    new Command("hello")//new a command with name "hello"
            .setAliases(["666","he"])//you can use an alias instead of "hello"
            .setExecutor(executor)//code to run when command is executed
            //set the tab completer
            .setTabCompleter({//Define a closure and then pass it in is also avaliable(like setExecutor), which makes no difference
            sender, cmd, label, args ->{
                    return ["tab1","tab2"]
                }
            })
            .setPermission("hello.test")//set command permission
            .setPermissionMessage("§4You don't have permission to do that!")//remind if lack permission
            .setNamespace("xanadu")//send command namespace, ie. /hello:hello -> /xanadu:hello
            .setDescription("test command")//set command description
            .setUsage("A command register example")//set command usage
            //.register() //register this command(Default Unregistered)
}

static void test(){
    Bukkit.broadcastMessage("you runs test()")
}
```

The above code regiser a simple command, "/hello", which can be executed through "/666" or "/he", 
and of course you need permission "hello.test" to use it.

And here is a simpler example:

```js
def executor = {
    sender, cmd, label, args ->{
        sender.sendMessage("I'm a test command")
        return true
    }
}
new Command("hello")
        .setExecutor(executor)
        .register()
```
