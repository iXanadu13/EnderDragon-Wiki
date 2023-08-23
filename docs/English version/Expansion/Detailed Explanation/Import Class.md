---
sidebar_position: 3
---

# Import Class

I mentioned in the introduction section that `You can almost do anything with Groovy`

So you definitely need `import` in Java. It's obvious that you can do nothing without `import`

`import` in Groovy is similar to Java

```js
import org.bukkit.Bukkit
```

Import a static object

```js
import static pers.xanadu.enderdragon.EnderDragon.instance
```

The only difference is that Groovy allows you to change the name

```js
import org.bukkit.Bukkit as Bk
```

Although you can import classes or objects from other Groovy scripts, this will cause problems because scripts are loaded in order.

If the imported script is not loaded before it, the imported object cannot be found. 
Therefore, it's a wise choice to make scripts independent of each other.

This is also the reason why I mentioned earlier that package's name is not important.

