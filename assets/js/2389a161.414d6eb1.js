"use strict";(self.webpackChunkenderdragon_wiki=self.webpackChunkenderdragon_wiki||[]).push([[4062],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1561:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2,hide_title:!0},o=void 0,l={unversionedId:"\u4e2d\u6587\u7248/\u5f00\u59cb/\u914d\u7f6e\u6587\u4ef6",id:"\u4e2d\u6587\u7248/\u5f00\u59cb/\u914d\u7f6e\u6587\u4ef6",title:"\u914d\u7f6e\u6587\u4ef6",description:"config.yml",source:"@site/docs/\u4e2d\u6587\u7248/\u5f00\u59cb/\u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"\u4e2d\u6587\u7248/\u5f00\u59cb",slug:"/\u4e2d\u6587\u7248/\u5f00\u59cb/\u914d\u7f6e\u6587\u4ef6",permalink:"/EnderDragon-Wiki/\u4e2d\u6587\u7248/\u5f00\u59cb/\u914d\u7f6e\u6587\u4ef6",draft:!1,editUrl:"https://github.com/iXanadu13/EnderDragon-Wiki/blob/main/docs/\u4e2d\u6587\u7248/\u5f00\u59cb/\u914d\u7f6e\u6587\u4ef6.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/EnderDragon-Wiki/\u4e2d\u6587\u7248/\u5f00\u59cb/\u5b89\u88c5"},next:{title:"\u6307\u4ee4",permalink:"/EnderDragon-Wiki/category/\u6307\u4ee4"}},s={},c=[{value:"config.yml",id:"configyml",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configyml"},"config.yml"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," \u63d2\u4ef6\u7248\u672c: 2.2.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#\u914d\u7f6e\u6587\u4ef6\u7248\u672c\uff0c\u8bf7\u52ff\u4fee\u6539\nversion: 2.2.0\n\n#\u53ef\u9009: 'Chinese','English'\nlang: 'English'\n\n#\u53ef\u9009: 'Disable'\uff08\u4e0d\u542f\u7528\uff09,'ChatBox'\uff08\u804a\u5929\u680f\uff09,'SubTitle'\uff08\u526f\u6807\u9898\uff09,'ActionBar'\uff08\u72b6\u6001\u680f\uff09\ndamage_visible_mode: ActionBar\n\ndamage_statistics:\n  # \u663e\u793a\u4f24\u5bb3\u6392\u540d\u524d\u51e0\u7684\u73a9\u5bb6\n  limit: 10\n\n#\u53ef\u9009: 'weight','pc' ('edge' \u5df2\u4e0d\u518d\u4f7f\u7528\uff01)\n#'weight'(edge): \u4f7f\u7528\u6743\u91cd\u6765\u51b3\u5b9a\u6bcf\u6b21\u751f\u6210\u54ea\u6761\u9f99\uff08\u5305\u62ec\u9ed8\u8ba4\u9f99default\uff09\n#'pc': \u5373\u201c\u4f18\u5148\u7ea7+\u6982\u7387\u201d\uff0c\u63d2\u4ef6\u4f1a\u5148\u5c1d\u8bd5\u751f\u6210\uff08\u6309\u7167\u5176\u8bbe\u5b9a\u7684\u6982\u7387\uff09\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u9f99\uff0c\u5982\u679c\u5931\u8d25\u5219\u5c1d\u8bd5\u4e0b\u4e00\u6761\uff0c\u5982\u679c\u90fd\u5931\u8d25\u5c31\u751f\u6210\u9ed8\u8ba4\u9f99default\n#\u6ce8\u610f\uff0c\u5728pc\u6a21\u5f0f\u4e0b\uff0c\u9ed8\u8ba4\u9f99\u662f\u7528\u6765\u515c\u5e95\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u8be5\u6a21\u5f0f\uff0c\u7ed9\u9ed8\u8ba4\u9f99\u8bbe\u7f6e\u518d\u9ad8\u7684\u4f18\u5148\u7ea7\u90fd\u65e0\u6548\nspecial_dragon_jude_mode: 'weight'\n\n#\u683c\u5f0f: '\u540d\u5b57:\u6743\u91cd'\n#\u8fd9\u91cc\u7684\u540d\u5b57\u4e0e\u6587\u4ef6\u540d\u4e00\u4e00\u5bf9\u5e94\uff0c\u5982\u679c\u4f60\u8981\u589e\u52a0\u65b0\u7684\u9f99\u914d\u7f6e\uff0c\u9700\u8981\u5728plugins/EnderDragon/setting\u4e2d\u65b0\u5efa\u4e00\u4e2a\"\u540d\u5b57.yml\"\u6587\u4ef6\uff0c\u7136\u540e\u5728\u8fd9\u91cc\u52a0\u4e0a\u4e00\u9879\uff1a- '\u540d\u5b57:\u6743\u91cd'\n#\u6743\u91cd\u9700\u4e3a\u6b63\u6574\u6570\ndragon_setting_file:\n  - 'default:5'\n  - 'special:5'\n\n#\u81ea\u52a8\u590d\u6d3b\u672b\u5f71\u9f99\nauto_respawn:\n  # \u4f60\u53ef\u4ee5\u6309\u683c\u5f0f\u6dfb\u52a0\u66f4\u591a\u6761\u76ee\uff0c\u4f46\u662f\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\n  task1:\n    #\u662f\u5426\u542f\u7528: [true/false]\n    enable: false\n    #\u5bf9\u5e94\u7684\u672b\u5730\u4e16\u754c\u540d\u5b57\n    world_name: world_the_end\n    #\u590d\u6d3b\u65f6\u95f4\n    # minute:30            \u8868\u793a\u6bcf30\u5206\u949f\u590d\u6d3b\n    # hour:4               \u8868\u793a\u6bcf4\u5c0f\u65f6\u590d\u6d3b\n    # day:1,00:00          \u8868\u793a\u6bcf\u592900:00\u590d\u6d3b\n    # day:10,14:30         \u8868\u793a\u6bcf10\u5929\u768414:30\u590d\u6d3b\n    # week:6,22:00         \u8868\u793a\u6bcf\u54686\u768422:00\u590d\u6d3b\n    # week:7,09:00         \u8868\u793a\u6bcf\u5468\u5468\u65e5\u768409:00\u590d\u6d3b\n    # month:8,11:43        \u8868\u793a\u6bcf\u67088\u53f7\u768411:43\u590d\u6d3b\n    # year:200,00:00       \u8868\u793a\u6bcf\u5e74\u7b2c200\u5929\u768400:00\u590d\u6d3b\n    respawn_time: 'day:10,22:00'\n  task_2:\n    enable: false\n    world_name: world_the_end\n    respawn_time: 'week:7,20:00'\n\n\n#respawn_cd\u91c7\u7528\u5012\u8ba1\u65f6\uff0c\u7cbe\u786e\u5230\u79d2\uff0c\u91c7\u7528\u72ec\u7acb\u7684\u7cfb\u7edf\uff0c\u5177\u4f53\u914d\u7f6e\u4f7f\u7528 \"/ed respawn_cd\" \u7cfb\u5217\u6307\u4ee4\u8bbe\u7f6e\n#\u4e0a\u65b9\u7684\"auto_respawn.invulnerable\"\u540c\u6837\u4f5c\u7528\u4e8e\u6b64\nrespawn_cd:\n  enable: true\n\n#\u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u73a9\u5bb6\uff08\u751f\u5b58\u6a21\u5f0f\uff09\u5c06\u65e0\u6cd5\u7834\u574f\u81ea\u52a8\u590d\u6d3b\u672b\u5f71\u9f99\u65f6\u653e\u7f6e\u7684\u6c34\u6676\uff08\u88ab\u7834\u574f\u5219\u590d\u6d3b\u88ab\u4e2d\u6b62\uff09\ncrystal_invulnerable: false\n#\u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u73a9\u5bb6\u624b\u52a8\u653e\u7f6e\u672b\u5730\u6c34\u6676\u5c06\u65e0\u6cd5\u590d\u6d3b\u672b\u5f71\u9f99\uff0c\u4f46\u4e0d\u5f71\u54cd\u672b\u5730\u6c34\u6676\u7684\u5408\u6210\u3001\u653e\u7f6e\nresist_player_respawn: false\n#\u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u73a9\u5bb6\u65e0\u6cd5\u7528\u73bb\u7483\u74f6\u6536\u96c6\u9f99\u606f\nresist_dragon_breath_gather: false\n#\u6307\u4ee4/ed drop gui \u6253\u5f00\u7684\u9ed8\u8ba4\u4e3b\u9875\u9762\nmain_gui: main\n\n#\u4ee5\u4e0b\u4e16\u754c\u4e2d\u751f\u6210\u7684\u672b\u5f71\u9f99\u5c06\u4e0d\u88ab\u63d2\u4ef6\u76d1\u542c\nblacklist_worlds:\n  - 'world'\n  - 'world_nether'\n\n#\u53ef\u9009: [default/nbt/advanced]\nitem_format:\n  reward: default\n\n#\u662f\u5426hook\u5176\u4ed6\u63d2\u4ef6\nhook_plugins:\n  MythicLib: true\n\n#\u662f\u5426\u542f\u7528\u811a\u672c\u62d3\u5c55\n#\u7531\u4e8e\u6d89\u53ca\u5230\u4f9d\u8d56\u52a0\u8f7d\uff0c\u6b64\u9879\u914d\u7f6e\u53d8\u66f4\u53ea\u6709\u91cd\u542f\u670d\u52a1\u5668\u540e\u624d\u751f\u6548\nexpansion:\n  groovy: false\n\n#\u8c03\u8bd5\u6a21\u5f0f[true/false]\ndebug: false\n\n#\u8bf7\u52ff\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\uff0c\u9664\u975e\u4f60\u77e5\u9053\u4f60\u5728\u505a\u4ec0\u4e48\nadvanced_setting:\n  # \u5728\u4e00\u4e9bmohist\u7aef\u4e2d\uff0c\u4e16\u754c\u73af\u5883\u7c7b\u578b\u53ef\u80fd\u4f1a\u83b7\u53d6\u9519\u8bef\uff0c\u8fd9\u4f1a\u5f71\u54cd\u590d\u6d3b\u672b\u5f71\u9f99\u529f\u80fd\n  # \u8bbe\u7f6e\u8be5\u9879\u4e3atrue\u5e76\u91cd\u542f\u670d\u52a1\u5668\u5c06\u5c1d\u8bd5\u4fee\u590d\n  world_env_fix: false\n  save_respawn_status: false\n  backslash_split:\n    reward: false\n")))}p.isMDXComponent=!0}}]);