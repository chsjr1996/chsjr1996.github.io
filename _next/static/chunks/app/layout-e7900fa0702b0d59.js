(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8902:function(e,t,n){Promise.resolve().then(n.t.bind(n,4671,23)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.bind(n,1795))},5169:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(2265);let a=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,o=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:i},m=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(u,e),d=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=d,defaultTheme:m=n?"system":"light",attribute:u="data-theme",value:$,children:b,nonce:g})=>{let[S,p]=(0,r.useState)(()=>f(i,m)),[w,_]=(0,r.useState)(()=>f(i)),k=$?Object.values($):c,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let l=$?$[r]:r,o=t?y():null,i=document.documentElement;if("class"===u?(i.classList.remove(...k),l&&i.classList.add(l)):l?i.setAttribute(u,l):i.removeAttribute(u),s){let e=a.includes(m)?m:null,t=a.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),E=(0,r.useCallback)(e=>{p(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{_(v(t)),"system"===S&&n&&!e&&C("system")},[S,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&E(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,r.useEffect)(()=>{C(null!=e?e:S)},[e,S]);let x=(0,r.useMemo)(()=>({theme:S,setTheme:E,forcedTheme:e,resolvedTheme:"system"===S?w:S,themes:n?[...c,"system"]:c,systemTheme:n?w:void 0}),[S,E,e,w,n,c]);return r.createElement(o.Provider,{value:x},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:i,themes:c,defaultTheme:m,attribute:u,value:$,children:b,attrs:k,nonce:g}),b)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?a.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let l=c?c[e]:e,s=t?e+"|| ''":`'${l}'`,i="";return o&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},v=e?`!function(){${h}${y(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${u?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},1795:function(e,t,n){"use strict";var r=n(7437),a=n(5169);t.default=e=>{let{children:t}=e;return(0,r.jsx)(a.f,{attribute:"class",children:t})}},3054:function(){},4671:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[93,971,23,744],function(){return e(e.s=8902)}),_N_E=e.O()}]);