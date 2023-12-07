"use strict";(self.webpackChunkenderdragon_wiki=self.webpackChunkenderdragon_wiki||[]).push([[1554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3,description:"respawn/respawn_cd"},l="DragonRespawn",i={unversionedId:"English version/Command/DragonRespawn",id:"English version/Command/DragonRespawn",title:"DragonRespawn",description:"respawn/respawn_cd",source:"@site/docs/English version/Command/DragonRespawn.md",sourceDirName:"English version/Command",slug:"/English version/Command/DragonRespawn",permalink:"/EnderDragon-Wiki/English version/Command/DragonRespawn",draft:!1,editUrl:"https://github.com/iXanadu13/EnderDragon-Wiki/blob/main/docs/English version/Command/DragonRespawn.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"respawn/respawn_cd"},sidebar:"tutorialSidebar",previous:{title:"Update Configuration",permalink:"/EnderDragon-Wiki/English version/Command/Update Configuration"},next:{title:"Drop Setting",permalink:"/EnderDragon-Wiki/English version/Command/Drop Setting"}},p={},s=[{value:"respawn",id:"respawn",level:2},{value:"respawn_cd",id:"respawn_cd",level:2},{value:"spawn",id:"spawn",level:2},{value:"Compare",id:"compare",level:2},{value:"Mechanism",id:"mechanism",level:2}],d={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dragonrespawn"},"DragonRespawn"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"need permission: ed.respawn. [] represents a required field, () represents an optional field")),(0,r.kt)("h2",{id:"respawn"},"respawn"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/ed respawn (world_name)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(world_name)")," If absent, sender can only be player and sender's current world will be selected.")),(0,r.kt)("p",null,"Respawn a dragon and initialize the end_crystal in this world"),(0,r.kt)("h2",{id:"respawn_cd"},"respawn_cd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/ed respawn_cd get ","[","world_name]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[world_name]")," The name of one world.")),(0,r.kt)("p",null,"Get countdown information of respawn in this world"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/ed respawn_cd set ","[","world_name] ","[","time]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[world_name]")," The name of one world."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[time]")," Countdown setting time. (unit: seconds)")),(0,r.kt)("p",null,"Set the countdown of respawn in this world, which is how many seconds after the death of next EnderDragon to start a respawn"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/ed respawn_cd remove ","[","world_name]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[world_name]")," The name of one world.")),(0,r.kt)("p",null,"Delete countdown information of respawn in this world"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/ed respawn_cd removeAll")),(0,r.kt)("p",null,"Delete countdown information of respawn in ALL worlds"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/ed respawn_cd start ","[","world_name]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[world_name]")," The name of one world.")),(0,r.kt)("p",null,"Start the countdown in this world.\n(After setting, the default state is not started. If you want to start immediately, you can use this command)"),(0,r.kt)("h2",{id:"spawn"},"spawn"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/ed spawn ","[","unique_name] (world_name)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[unique_name]"),' The "unique_name" in dragon\'s configuration. (setting/xxx.yml)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(world_name)")," If absent, sender can only be player and sender's current world will be selected.")),(0,r.kt)("p",null,"Respawn a dragon with specified type and initialize the end_crystal in this world"),(0,r.kt)("h2",{id:"compare"},"Compare"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Plugin version: 2.2.1")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"-"),(0,r.kt)("th",{parentName:"tr",align:null},"respawn"),(0,r.kt)("th",{parentName:"tr",align:null},"respawn_cd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Config")),(0,r.kt)("td",{parentName:"tr",align:null},"in config.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"using /respawn_cd (only set whether enable in config.yml)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Data Storage")),(0,r.kt)("td",{parentName:"tr",align:null},"data.yml"),(0,r.kt)("td",{parentName:"tr",align:null},"respawn_cd.yml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Timing")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the target time point"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify seconds, execute countdown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Time Discrepancy")),(0,r.kt)("td",{parentName:"tr",align:null},"less than 1s"),(0,r.kt)("td",{parentName:"tr",align:null},"less than 1s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Max Number")),(0,r.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,r.kt)("td",{parentName:"tr",align:null},"only one per world")))),(0,r.kt)("h2",{id:"mechanism"},"Mechanism"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you don't want players in survival mode to break the end_crystal when respawn process is running, just fill ",(0,r.kt)("inlineCode",{parentName:"li"},"auto_respawn.invulnerable")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"When nobody is in world_the_end, chunks are unloaded and the respawn process is suspended.\nThe process of respawn continues only when the chunk be loaded again.\nYou can also set a chunk frequently loaded using other plugins if you want to."),(0,r.kt)("li",{parentName:"ul"},"If you stop/reload the server when a respawn process is suspended, the process will break.\nIf you want it to continue in the next time you start the server, just fill ",(0,r.kt)("inlineCode",{parentName:"li"},"advanced_setting.save_respawn_status")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"Because of some change of world generation in 1.20, if nobody has ever been to the_end, you can get the response ",(0,r.kt)("inlineCode",{parentName:"li"},"The world_the_end is unloaded")," when respawn been started.\nBut once someone has ever been to THE_END, regardless of whether the server is restarted or whether chunks are loaded, ",(0,r.kt)("inlineCode",{parentName:"li"},"/ed respawn [world name]")," works fine.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you install ",(0,r.kt)("inlineCode",{parentName:"p"},"Multiverse-Core"),", please fill ",(0,r.kt)("inlineCode",{parentName:"p"},"worlds.<world_name>.keepSpawnInMemory")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"worlds.yml")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",{parentName:"admonition"},"Or respawn may not function properly when nobody in THE_END.")))}m.isMDXComponent=!0}}]);