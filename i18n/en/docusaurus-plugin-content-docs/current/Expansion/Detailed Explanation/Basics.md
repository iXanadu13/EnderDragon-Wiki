---
sidebar_position: 1
---

# Basics

If you have some Java foundation, using Groovy will be very easy.

## Variable Definition

`var`/`def` Define variables(automatic inference type)

```js
var test = 114
def test2 = "Hello"
```

`final` Defining Constants(automatic inference type)

```js
final test = 114
//test = 114514  ->  Non repeatable assignment
```

`<Type>` Define a specified type variable(same as Java)

```js
String str = "Hello Groovy"
```

## Function Definition

Actually, a function is also a variable

Using the keyword `def`:
```js
def test() {
    // your code
}
```

Specify the return value type to define the function(same as Java):
```js
String calc(String input){
    // your code
}

static void doSomething(){//static method
    // your code
}
```

Closure Definition:
```js
def sum={
    a,b -> return a+b
}
```

Method reference:
```js
def str = "Hello, World!"
def toUpperCaseMethod = str.&toUpperCase
println(toUpperCaseMethod())  //Output: HELLO, WORLD!
```

## Global Variable

In fact, there is no concept of "global variables" in Groovy, where "global" refers to being accessible anywhere in the script.

Similar to Java, it cannot be directly defined in Groovy. You need to set a layer of classes outside.

```js
class TestClass{
    static def value = "abc"
    def value2 = "test"
}
static void enable(){
    Bukkit.broadcastMessage(TestClass.value)  //Static variables can be directly accessed through classes
    def clazz = new TestClass()
    Bukkit.broadcastMessage(clazz.value2)  //Member variables need to be accessed through objects
}
```

After reloading, you can see this output in console:

```
[00:38:23 INFO]: abc
[00:38:23 INFO]: test
```

Simply put, as long as you don't reload the plugin or close the server, this variable will always exist and you can call it anywhere.

## New Object

```js
def map = new HashMap()  //define using "def"

HashMap map2 = new HashMap()  //not specify the data type stored in HashMap

HashMap<String, String> map2 = new HashMap()  //Specify the data type stored in HashMap, like Java
```

## Loop

for loop(same as Java):
```js
for(int i=0;i<10;i++){
    // your code
}
```

enhanced for loop:
```js
def numbers = [1, 2, 3, 4, 5]
for (num in numbers) {
    println(num)
}
for (int num : numbers) {//same as Java
    println(num)
}
```

forEach loop:

```js
def numbers = [1, 2, 3, 4, 5]
numbers.each { num ->
    println(num)
}
numbers.forEach(num -> println(num)) //same as Java
```
