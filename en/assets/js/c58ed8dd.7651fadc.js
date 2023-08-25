"use strict";(self.webpackChunkenderdragon_wiki=self.webpackChunkenderdragon_wiki||[]).push([[4219],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,g=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2,hide_title:!0},o=void 0,s={unversionedId:"English version/Start/configuration",id:"English version/Start/configuration",title:"configuration",description:"config.yml",source:"@site/docs/English version/Start/configuration.md",sourceDirName:"English version/Start",slug:"/English version/Start/configuration",permalink:"/EnderDragon-Wiki/en/English version/Start/configuration",draft:!1,editUrl:"https://github.com/iXanadu13/EnderDragon-Wiki/blob/main/docs/English version/Start/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"install",permalink:"/EnderDragon-Wiki/en/English version/Start/install"},next:{title:"Command",permalink:"/EnderDragon-Wiki/en/category/command"}},l={},d=[{value:"config.yml",id:"configyml",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configyml"},"config.yml"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," Plugin version: 2.2.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#You don't need to edit it.\nversion: 2.2.0\n\n#Enabled: 'Chinese','English'\nlang: 'English'\n\n#Enabled: 'Disable','ChatBox','SubTitle','ActionBar'\ndamage_visible_mode: ActionBar\n\ndamage_statistics:\n  # Display how many player at most\n  limit: 10\n\n#Enabled: 'weight','pc' ('edge' is deprecated!)\n#'weight'(edge): means using weight to decide which dragon(including default dragon) to spawn.\n#'pc': namely 'priority+chance', dragons(except the default one) will be sorted in descending order of priority, and plugin will sequently try to spawn each dragon(according to respective chance). Once succeed, it will spawn and dragons behind it will be skipped. If all attempts fail, spawn the default one.\nspecial_dragon_jude_mode: 'weight'\n\n#format: 'NAME:WEIGHT'   (the type of value is positive integer)\n#this name is corresponding to the file name\n#For example, if you want to add a new dragon, you can create a new file named 'NAME.yml' in plugins/EnderDragon/setting, and then add - 'NAME:WEIGHT' here\ndragon_setting_file:\n  - 'default:5'\n  - 'special:5'\n\nauto_respawn:\n  # You can add more entries without duplicate name according to the format.\n  task1:\n    enable: false\n    world_name: world_the_end\n    #some examples:\n    # minute:30            -> respawn every 30 minutes\n    # hour:4               -> respawn every 4 hours\n    # day:1,00:00          -> respawn at 00:00 every day\n    # day:10,14:30         -> respawn at 14:30 every 10 days\n    # week:6,22:00         -> respawn at 22:00 every Saturday(the 6th day of one week)\n    # week:7,09:00         -> respawn at 09:00 every Sunday\n    # month:8,11:43        -> respawn at 11:43,the 8th day every month\n    # year:200,00:00       -> respawn at 00:00,the 200th day every year\n    respawn_time: 'day:10,22:00'\n  task_2:\n    enable: false\n    world_name: world_the_end\n    respawn_time: 'week:7,20:00'\n\n\n\n#\"respawn_cd\" works as accurate countdown, and have an independent system.\n#The configuration can be modified with command \"/ed respawn_cd\".\n#\"auto_respawn.invulnerable\" has same effect on this.\nrespawn_cd:\n  enable: true\n\n#if set this to true, player(in survival mode) can't break the end_crystal after auto_respawn starts\ncrystal_invulnerable: false\n#if set this to true, end_crystal can still be crafted or placed,but end_crystal that placed by player cannot respawn the ender_dragon\nresist_player_respawn: false\n#if set this to true, player cannot gather dragon_breath with glass_bottle\nresist_dragon_breath_gather: false\n#The gui that will be shown when using \"/ed drop gui\"\nmain_gui: main\n\n#The spawn of ender_dragon in these worlds will be ignored by this plugin.\nblacklist_worlds:\n  - 'world'\n  - 'world_nether'\n\n#optional: [default/nbt/advanced]\nitem_format:\n  reward: default\n\n#Whether hook to other plugins\nhook_plugins:\n  MythicLib: true\n\n#Whether enable script expansion\n#Due to dependency loading, this configuration change will only take effect after reloading the server\nexpansion:\n  groovy: false\n\n#[true/false]\ndebug: false\n\n#Do not modify the configuration below unless you know what you are doing\nadvanced_setting:\n  # In some mohist-server, environment of world may be loaded incorrectly, which affects the respawn function.\n  # You can set this to \"true\" and reload server to fix it.\n  world_env_fix: false\n  save_respawn_status: false\n  backslash_split:\n    reward: false\n")))}p.isMDXComponent=!0}}]);