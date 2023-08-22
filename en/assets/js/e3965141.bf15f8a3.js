"use strict";(self.webpackChunkenderdragon_wiki=self.webpackChunkenderdragon_wiki||[]).push([[932],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:3},o="Register Listener",s={unversionedId:"English version/Expansion/Detailed Explanation/Register Listener",id:"English version/Expansion/Detailed Explanation/Register Listener",title:"Register Listener",description:"EnderDragon expansion provides a simplified method to register a listener.",source:"@site/docs/English version/Expansion/Detailed Explanation/Register Listener.md",sourceDirName:"English version/Expansion/Detailed Explanation",slug:"/English version/Expansion/Detailed Explanation/Register Listener",permalink:"/EnderDragon-Wiki/en/English version/Expansion/Detailed Explanation/Register Listener",draft:!1,editUrl:"https://github.com/iXanadu13/EnderDragon-Wiki/blob/main/docs/English version/Expansion/Detailed Explanation/Register Listener.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Detailed Explanation",permalink:"/EnderDragon-Wiki/en/category/detailed-explanation"},next:{title:"\u5f00\u59cb",permalink:"/EnderDragon-Wiki/en/category/\u5f00\u59cb"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register-listener"},"Register Listener"),(0,i.kt)("p",null,"EnderDragon expansion provides a simplified method to register a listener."),(0,i.kt)("p",null,"Here is an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//Set the package name. Nothing matters if you skip this\npackage expansion.groovy.Example\n\n//Usually, you need to import classes like what you do in Java before using.\n//However, the plugin has automatically imported some classes for you during script engine initialization,\n//so some class names and variables can be used directly.\n//For example, you can delete this(import org.bukkit.Bukkit) without affecting script operation\nimport org.bukkit.Bukkit\nimport org.bukkit.event.EventPriority\nimport org.bukkit.event.player.PlayerJoinEvent\nimport org.bukkit.event.player.PlayerQuitEvent\n//The same goes for this import\nimport pers.xanadu.enderdragon.script.Events\n\n/**\n * Function enable() will be called when a script is loaded.\n * If this function is missing, you will receive a warning in console.\n */\nstatic void enable(){\n    // To avoid confusing you, this listener is not registered by default.\n    // If you want to test it, just delete the "//".\n    // registerListener()\n    // registerAnotherListener()\n    Bukkit.getLogger().info("Example script has been reloaded!")  //send a message in console when this script is loaded\n}\n\n// An example of registering listener\n// Plugin has simplified the method to register. Here are two ways to register.\n// You don\'t need to worry about problems about unregister them, because plugin will do that.\n/**\n * Events.register(Class clazz, Consumer consumer)\n * @param clazz -> The class name to listen for events\n * @param consumer -> Function to run when this event is listened\n */\nstatic void registerListener(){\n    Events.register(PlayerJoinEvent.class, e -> Bukkit.broadcastMessage(e.getPlayer().getName()+ " joined!"))\n}\n/**\n * Events.register(Class clazz, EventPriority priority, boolean ignoreCancelled, Consumer consumer)\n * @param clazz -> The class name to listen for events\n * @param priority -> priority of listener(default: EventPriority.NORMAL)\n * @param ignoreCancelled -> Define if the handler ignores a cancelled event(default: false)\n * @param consumer -> Function to run when this event is listened\n */\nstatic def registerAnotherListener(){\n    Events.register(PlayerQuitEvent.class, EventPriority.NORMAL,false,event->{\n        Bukkit.broadcastMessage("Quit message is:" + event.getQuitMessage())\n        Bukkit.broadcastMessage("Player\'s name is " + event.player.displayName)\n    })\n}\n/**\n * Priorities available for selection:\n * EventPriority.LOWEST (Process first)\n * EventPriority.LOW\n * EventPriority.NORMAL\n * EventPriority.HIGH\n * EventPriority.HIGHEST\n * EventPriority.MONITOR (Process last)\n */\n')),(0,i.kt)("p",null,"The above code implements the monitoring of player joining server events and player exiting server events, and outputs some information."))}d.isMDXComponent=!0}}]);