var Ce=Object.defineProperty;var Ne=(e,t,i)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var V=(e,t,i)=>Ne(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const _e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ON","CS","ON","CS","ON","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ON","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","ON","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],Fe=["AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL"];function Me(e){return e<=255?_e[e]:1424<=e&&e<=1524?"R":1536<=e&&e<=1791?Fe[e&255]:1792<=e&&e<=2220?"AL":"L"}function $e(e){const t=e.length;if(t===0)return null;const i=new Array(t);let n=0;for(let o=0;o<t;o++){const a=Me(e.charCodeAt(o));(a==="R"||a==="AL"||a==="AN")&&n++,i[o]=a}if(n===0)return null;const r=t/n<.3?0:1,s=new Int8Array(t);for(let o=0;o<t;o++)s[o]=r;const l=r&1?"R":"L",c=l;let u=c;for(let o=0;o<t;o++)i[o]==="NSM"?i[o]=u:u=i[o];u=c;for(let o=0;o<t;o++){const a=i[o];a==="EN"?i[o]=u==="AL"?"AN":"EN":(a==="R"||a==="L"||a==="AL")&&(u=a)}for(let o=0;o<t;o++)i[o]==="AL"&&(i[o]="R");for(let o=1;o<t-1;o++)i[o]==="ES"&&i[o-1]==="EN"&&i[o+1]==="EN"&&(i[o]="EN"),i[o]==="CS"&&(i[o-1]==="EN"||i[o-1]==="AN")&&i[o+1]===i[o-1]&&(i[o]=i[o-1]);for(let o=0;o<t;o++){if(i[o]!=="EN")continue;let a;for(a=o-1;a>=0&&i[a]==="ET";a--)i[a]="EN";for(a=o+1;a<t&&i[a]==="ET";a++)i[a]="EN"}for(let o=0;o<t;o++){const a=i[o];(a==="WS"||a==="ES"||a==="ET"||a==="CS")&&(i[o]="ON")}u=c;for(let o=0;o<t;o++){const a=i[o];a==="EN"?i[o]=u==="L"?"L":"EN":(a==="R"||a==="L")&&(u=a)}for(let o=0;o<t;o++){if(i[o]!=="ON")continue;let a=o+1;for(;a<t&&i[a]==="ON";)a++;const d=o>0?i[o-1]:c,h=a<t?i[a]:c,p=d!=="L"?"R":"L";if(p===(h!=="L"?"R":"L"))for(let x=o;x<a;x++)i[x]=p;o=a-1}for(let o=0;o<t;o++)i[o]==="ON"&&(i[o]=l);for(let o=0;o<t;o++){const a=i[o];(s[o]&1)===0?a==="R"?s[o]++:(a==="AN"||a==="EN")&&(s[o]+=2):(a==="L"||a==="AN"||a==="EN")&&s[o]++}return s}function Oe(e,t){const i=$e(e);if(i===null)return null;const n=new Int8Array(t.length);for(let r=0;r<t.length;r++)n[r]=i[t[r]];return n}const Be=/[ \t\n\r\f]+/g,Te=/[\t\n\r\f]| {2,}|^ | $/;function We(e){const t=e??"normal";return t==="pre-wrap"?{mode:t,preserveOrdinarySpaces:!0,preserveHardBreaks:!0}:{mode:t,preserveOrdinarySpaces:!1,preserveHardBreaks:!1}}function Pe(e){if(!Te.test(e))return e;let t=e.replace(Be," ");return t.charCodeAt(0)===32&&(t=t.slice(1)),t.length>0&&t.charCodeAt(t.length-1)===32&&(t=t.slice(0,-1)),t}function De(e){return/[\r\f]/.test(e)?e.replace(/\r\n/g,`
`).replace(/[\r\f]/g,`
`):e.replace(/\r\n/g,`
`)}let Et=null,He;function Re(){return Et===null&&(Et=new Intl.Segmenter(He,{granularity:"word"})),Et}const ze=new RegExp("\\p{Script=Arabic}","u"),Lt=new RegExp("\\p{M}","u"),ce=new RegExp("\\p{Nd}","u");function $t(e){return ze.test(e)}function Q(e){for(const t of e){const i=t.codePointAt(0);if(i>=19968&&i<=40959||i>=13312&&i<=19903||i>=131072&&i<=173791||i>=173824&&i<=177983||i>=177984&&i<=178207||i>=178208&&i<=183983||i>=183984&&i<=191471||i>=196608&&i<=201551||i>=63744&&i<=64255||i>=194560&&i<=195103||i>=12288&&i<=12351||i>=12352&&i<=12447||i>=12448&&i<=12543||i>=44032&&i<=55215||i>=65280&&i<=65519)return!0}return!1}const he=new Set(["，","．","！","：","；","？","、","。","・","）","〕","〉","》","」","』","】","〗","〙","〛","ー","々","〻","ゝ","ゞ","ヽ","ヾ"]),At=new Set(['"',"(","[","{","“","‘","«","‹","（","〔","〈","《","「","『","【","〖","〘","〚"]),Dt=new Set(["'","’"]),dt=new Set([".",",","!","?",":",";","،","؛","؟","।","॥","၊","။","၌","၍","၏",")","]","}","%",'"',"”","’","»","›","…"]),Ie=new Set([":",".","،","؛"]),Ve=new Set(["၏"]),Xe=new Set(["”","’","»","›","」","』","】","》","〉","〕","）"]);function je(e){if(Ht(e))return!0;let t=!1;for(const i of e){if(dt.has(i)){t=!0;continue}if(!(t&&Lt.test(i)))return!1}return t}function Ye(e){for(const t of e)if(!he.has(t)&&!dt.has(t))return!1;return e.length>0}function Ge(e){if(Ht(e))return!0;for(const t of e)if(!At.has(t)&&!Dt.has(t)&&!Lt.test(t))return!1;return e.length>0}function Ht(e){let t=!1;for(const i of e)if(!(i==="\\"||Lt.test(i))){if(At.has(i)||dt.has(i)||Dt.has(i)){t=!0;continue}return!1}return t}function Ue(e){const t=Array.from(e);let i=t.length;for(;i>0;){const n=t[i-1];if(Lt.test(n)){i--;continue}if(At.has(n)||Dt.has(n)){i--;continue}break}return i<=0||i===t.length?null:{head:t.slice(0,i).join(""),tail:t.slice(i).join("")}}function Ke(e,t){if(e.length===0)return!1;for(const i of e)if(i!==t)return!1;return!0}function qe(e){return!$t(e)||e.length===0?!1:Ie.has(e[e.length-1])}function Je(e){return e.length===0?!1:Ve.has(e[e.length-1])}function Qe(e){if(e.length<2||e[0]!==" ")return null;const t=e.slice(1);return new RegExp("^\\p{M}+$","u").test(t)?{space:" ",marks:t}:null}function ue(e){for(let t=e.length-1;t>=0;t--){const i=e[t];if(Xe.has(i))return!0;if(!dt.has(i))return!1}return!1}function Ze(e,t){if(t.preserveOrdinarySpaces||t.preserveHardBreaks){if(e===" ")return"preserved-space";if(e==="	")return"tab";if(t.preserveHardBreaks&&e===`
`)return"hard-break"}return e===" "?"space":e===" "||e===" "||e==="⁠"||e==="\uFEFF"?"glue":e==="​"?"zero-width-break":e==="­"?"soft-hyphen":"text"}function ti(e,t,i,n){const r=[];let s=null,l="",c=i,u=!1,o=0;for(const a of e){const d=Ze(a,n),h=d==="text"&&t;if(s!==null&&d===s&&h===u){l+=a,o+=a.length;continue}s!==null&&r.push({text:l,isWordLike:u,kind:s,start:c}),s=d,l=a,c=i+o,u=h,o+=a.length}return s!==null&&r.push({text:l,isWordLike:u,kind:s,start:c}),r}function Ot(e){return e==="space"||e==="preserved-space"||e==="zero-width-break"||e==="hard-break"}const ei=/^[A-Za-z][A-Za-z0-9+.-]*:$/;function ii(e,t){const i=e.texts[t];return i.startsWith("www.")?!0:ei.test(i)&&t+1<e.len&&e.kinds[t+1]==="text"&&e.texts[t+1]==="//"}function ni(e){return e.includes("?")&&(e.includes("://")||e.startsWith("www."))}function si(e){const t=e.texts.slice(),i=e.isWordLike.slice(),n=e.kinds.slice(),r=e.starts.slice();for(let l=0;l<e.len;l++){if(n[l]!=="text"||!ii(e,l))continue;let c=l+1;for(;c<e.len&&!Ot(n[c]);){t[l]+=t[c],i[l]=!0;const u=t[c].includes("?");if(n[c]="text",t[c]="",c++,u)break}}let s=0;for(let l=0;l<t.length;l++){const c=t[l];c.length!==0&&(s!==l&&(t[s]=c,i[s]=i[l],n[s]=n[l],r[s]=r[l]),s++)}return t.length=s,i.length=s,n.length=s,r.length=s,{len:s,texts:t,isWordLike:i,kinds:n,starts:r}}function ri(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s];if(t.push(l),i.push(e.isWordLike[s]),n.push(e.kinds[s]),r.push(e.starts[s]),!ni(l))continue;const c=s+1;if(c>=e.len||Ot(e.kinds[c]))continue;let u="";const o=e.starts[c];let a=c;for(;a<e.len&&!Ot(e.kinds[a]);)u+=e.texts[a],a++;u.length>0&&(t.push(u),i.push(!0),n.push("text"),r.push(o),s=a-1)}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}const li=new Set([":","-","/","×",",",".","+","–","—"]),Jt=/^[A-Za-z0-9_]+[,:;]*$/,oi=/[,:;]+$/;function de(e){for(const t of e)if(ce.test(t))return!0;return!1}function Bt(e){if(e.length===0)return!1;for(const t of e)if(!(ce.test(t)||li.has(t)))return!1;return!0}function ai(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s],c=e.kinds[s];if(c==="text"&&Bt(l)&&de(l)){let u=l,o=s+1;for(;o<e.len&&e.kinds[o]==="text"&&Bt(e.texts[o]);)u+=e.texts[o],o++;t.push(u),i.push(!0),n.push("text"),r.push(e.starts[s]),s=o-1;continue}t.push(l),i.push(e.isWordLike[s]),n.push(c),r.push(e.starts[s])}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function ci(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s],c=e.kinds[s],u=e.isWordLike[s];if(c==="text"&&u&&Jt.test(l)){let o=l,a=s+1;for(;oi.test(o)&&a<e.len&&e.kinds[a]==="text"&&e.isWordLike[a]&&Jt.test(e.texts[a]);)o+=e.texts[a],a++;t.push(o),i.push(!0),n.push("text"),r.push(e.starts[s]),s=a-1;continue}t.push(l),i.push(u),n.push(c),r.push(e.starts[s])}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function hi(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s];if(e.kinds[s]==="text"&&l.includes("-")){const c=l.split("-");let u=c.length>1;for(let o=0;o<c.length;o++){const a=c[o];if(!u)break;(a.length===0||!de(a)||!Bt(a))&&(u=!1)}if(u){let o=0;for(let a=0;a<c.length;a++){const d=c[a],h=a<c.length-1?`${d}-`:d;t.push(h),i.push(!0),n.push("text"),r.push(e.starts[s]+o),o+=h.length}continue}}t.push(l),i.push(e.isWordLike[s]),n.push(e.kinds[s]),r.push(e.starts[s])}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function ui(e){const t=[],i=[],n=[],r=[];let s=0;for(;s<e.len;){let l=e.texts[s],c=e.isWordLike[s],u=e.kinds[s],o=e.starts[s];if(u==="glue"){let a=l;const d=o;for(s++;s<e.len&&e.kinds[s]==="glue";)a+=e.texts[s],s++;if(s<e.len&&e.kinds[s]==="text")l=a+e.texts[s],c=e.isWordLike[s],u="text",o=d,s++;else{t.push(a),i.push(!1),n.push("glue"),r.push(d);continue}}else s++;if(u==="text")for(;s<e.len&&e.kinds[s]==="glue";){let a="";for(;s<e.len&&e.kinds[s]==="glue";)a+=e.texts[s],s++;if(s<e.len&&e.kinds[s]==="text"){l+=a+e.texts[s],c=c||e.isWordLike[s],s++;continue}l+=a}t.push(l),i.push(c),n.push(u),r.push(o)}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function di(e){const t=e.texts.slice(),i=e.isWordLike.slice(),n=e.kinds.slice(),r=e.starts.slice();for(let s=0;s<t.length-1;s++){if(n[s]!=="text"||n[s+1]!=="text"||!Q(t[s])||!Q(t[s+1]))continue;const l=Ue(t[s]);l!==null&&(t[s]=l.head,t[s+1]=l.tail+t[s+1],r[s+1]=r[s]+l.head.length)}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function pi(e,t,i){const n=Re();let r=0;const s=[],l=[],c=[],u=[];for(const h of n.segment(e))for(const p of ti(h.segment,h.isWordLike??!1,h.index,i)){const v=p.kind==="text";t.carryCJKAfterClosingQuote&&v&&r>0&&c[r-1]==="text"&&Q(p.text)&&Q(s[r-1])&&ue(s[r-1])||v&&r>0&&c[r-1]==="text"&&Ye(p.text)&&Q(s[r-1])||v&&r>0&&c[r-1]==="text"&&Je(s[r-1])?(s[r-1]+=p.text,l[r-1]=l[r-1]||p.isWordLike):v&&r>0&&c[r-1]==="text"&&p.isWordLike&&$t(p.text)&&qe(s[r-1])?(s[r-1]+=p.text,l[r-1]=!0):v&&!p.isWordLike&&r>0&&c[r-1]==="text"&&p.text.length===1&&p.text!=="-"&&p.text!=="—"&&Ke(s[r-1],p.text)||v&&!p.isWordLike&&r>0&&c[r-1]==="text"&&(je(p.text)||p.text==="-"&&l[r-1])?s[r-1]+=p.text:(s[r]=p.text,l[r]=p.isWordLike,c[r]=p.kind,u[r]=p.start,r++)}for(let h=1;h<r;h++)c[h]==="text"&&!l[h]&&Ht(s[h])&&c[h-1]==="text"&&(s[h-1]+=s[h],l[h-1]=l[h-1]||l[h],s[h]="");for(let h=r-2;h>=0;h--)if(c[h]==="text"&&!l[h]&&Ge(s[h])){let p=h+1;for(;p<r&&s[p]==="";)p++;p<r&&c[p]==="text"&&(s[p]=s[h]+s[p],u[p]=u[h],s[h]="")}let o=0;for(let h=0;h<r;h++){const p=s[h];p.length!==0&&(o!==h&&(s[o]=p,l[o]=l[h],c[o]=c[h],u[o]=u[h]),o++)}s.length=o,l.length=o,c.length=o,u.length=o;const a=ui({len:o,texts:s,isWordLike:l,kinds:c,starts:u}),d=di(ci(hi(ai(ri(si(a))))));for(let h=0;h<d.len-1;h++){const p=Qe(d.texts[h]);p!==null&&(d.kinds[h]!=="space"&&d.kinds[h]!=="preserved-space"||d.kinds[h+1]!=="text"||!$t(d.texts[h+1])||(d.texts[h]=p.space,d.isWordLike[h]=!1,d.kinds[h]=d.kinds[h]==="preserved-space"?"preserved-space":"space",d.texts[h+1]=p.marks+d.texts[h+1],d.starts[h+1]=d.starts[h]+p.space.length))}return d}function fi(e,t){if(e.len===0)return[];if(!t.preserveHardBreaks)return[{startSegmentIndex:0,endSegmentIndex:e.len,consumedEndSegmentIndex:e.len}];const i=[];let n=0;for(let r=0;r<e.len;r++)e.kinds[r]==="hard-break"&&(i.push({startSegmentIndex:n,endSegmentIndex:r,consumedEndSegmentIndex:r+1}),n=r+1);return n<e.len&&i.push({startSegmentIndex:n,endSegmentIndex:e.len,consumedEndSegmentIndex:e.len}),i}function gi(e,t,i="normal"){const n=We(i),r=n.mode==="pre-wrap"?De(e):Pe(e);if(r.length===0)return{normalized:r,chunks:[],len:0,texts:[],isWordLike:[],kinds:[],starts:[]};const s=pi(r,t,n);return{normalized:r,chunks:fi(s,n),...s}}let it=null;const Qt=new Map;let nt=null;const mi=new RegExp("\\p{Emoji_Presentation}","u"),xi=/[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;let kt=null;const Zt=new Map;function Rt(){if(it!==null)return it;if(typeof OffscreenCanvas<"u")return it=new OffscreenCanvas(1,1).getContext("2d"),it;if(typeof document<"u")return it=document.createElement("canvas").getContext("2d"),it;throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.")}function Li(e){let t=Qt.get(e);return t||(t=new Map,Qt.set(e,t)),t}function q(e,t){let i=t.get(e);return i===void 0&&(i={width:Rt().measureText(e).width,containsCJK:Q(e)},t.set(e,i)),i}function bt(){if(nt!==null)return nt;if(typeof navigator>"u")return nt={lineFitEpsilon:.005,carryCJKAfterClosingQuote:!1,preferPrefixWidthsForBreakableRuns:!1,preferEarlySoftHyphenBreak:!1},nt;const e=navigator.userAgent,i=navigator.vendor==="Apple Computer, Inc."&&e.includes("Safari/")&&!e.includes("Chrome/")&&!e.includes("Chromium/")&&!e.includes("CriOS/")&&!e.includes("FxiOS/")&&!e.includes("EdgiOS/"),n=e.includes("Chrome/")||e.includes("Chromium/")||e.includes("CriOS/")||e.includes("Edg/");return nt={lineFitEpsilon:i?1/64:.005,carryCJKAfterClosingQuote:n,preferPrefixWidthsForBreakableRuns:i,preferEarlySoftHyphenBreak:i},nt}function Ai(e){const t=e.match(/(\d+(?:\.\d+)?)\s*px/);return t?parseFloat(t[1]):16}function zt(){return kt===null&&(kt=new Intl.Segmenter(void 0,{granularity:"grapheme"})),kt}function bi(e){return mi.test(e)||e.includes("️")}function wi(e){return xi.test(e)}function Si(e,t){let i=Zt.get(e);if(i!==void 0)return i;const n=Rt();n.font=e;const r=n.measureText("😀").width;if(i=0,r>t+.5&&typeof document<"u"&&document.body!==null){const s=document.createElement("span");s.style.font=e,s.style.display="inline-block",s.style.visibility="hidden",s.style.position="absolute",s.textContent="😀",document.body.appendChild(s);const l=s.getBoundingClientRect().width;document.body.removeChild(s),r-l>.5&&(i=r-l)}return Zt.set(e,i),i}function vi(e){let t=0;const i=zt();for(const n of i.segment(e))bi(n.segment)&&t++;return t}function yi(e,t){return t.emojiCount===void 0&&(t.emojiCount=vi(e)),t.emojiCount}function J(e,t,i){return i===0?t.width:t.width-yi(e,t)*i}function Ei(e,t,i,n){if(t.graphemeWidths!==void 0)return t.graphemeWidths;const r=[],s=zt();for(const l of s.segment(e)){const c=q(l.segment,i);r.push(J(l.segment,c,n))}return t.graphemeWidths=r.length>1?r:null,t.graphemeWidths}function ki(e,t,i,n){if(t.graphemePrefixWidths!==void 0)return t.graphemePrefixWidths;const r=[],s=zt();let l="";for(const c of s.segment(e)){l+=c.segment;const u=q(l,i);r.push(J(l,u,n))}return t.graphemePrefixWidths=r.length>1?r:null,t.graphemePrefixWidths}function Ci(e,t){const i=Rt();i.font=e;const n=Li(e),r=Ai(e),s=t?Si(e,r):0;return{cache:n,fontSize:r,emojiCorrection:s}}function mt(e){return e==="space"||e==="preserved-space"||e==="tab"||e==="zero-width-break"||e==="soft-hyphen"}function Ni(e,t){if(t<=0)return 0;const i=e%t;return Math.abs(i)<=1e-6?t:t-i}function pe(e,t,i,n){return!n||t===null?e[i]:t[i]-(i>0?t[i-1]:0)}function _i(e,t,i,n,r,s){let l=0,c=t;for(;l<e.length;){const u=s?t+e[l]:c+e[l];if((l+1<e.length?u+r:u)>i+n)break;c=u,l++}return{fitCount:l,fittedWidth:c}}function Fi(e,t,i){const{widths:n,kinds:r,breakableWidths:s,breakablePrefixWidths:l}=e;if(n.length===0)return 0;const c=bt(),u=c.lineFitEpsilon;let o=0,a=0,d=!1,h=0,p=0,v=0,x=0,C=-1,A=0;function m(){C=-1,A=0}function S(g=v,y=x,$=a){o++,i==null||i({startSegmentIndex:h,startGraphemeIndex:p,endSegmentIndex:g,endGraphemeIndex:y,width:$}),a=0,d=!1,m()}function k(g,y){d=!0,h=g,p=0,v=g+1,x=0,a=y}function F(g,y,$){d=!0,h=g,p=y,v=g,x=y+1,a=$}function R(g,y){if(!d){k(g,y);return}a+=y,v=g+1,x=0}function H(g,y){mt(r[g])&&(C=g+1,A=a-y)}function N(g){M(g,0)}function M(g,y){const $=s[g],z=l[g]??null;for(let W=y;W<$.length;W++){const I=pe($,z,W,c.preferPrefixWidthsForBreakableRuns);if(!d){F(g,W,I);continue}a+I>t+u?(S(),F(g,W,I)):(a+=I,v=g,x=W+1)}d&&v===g&&x===$.length&&(v=g+1,x=0)}let E=0;for(;E<n.length;){const g=n[E],y=r[E];if(!d){g>t&&s[E]!==null?N(E):k(E,g),H(E,g),E++;continue}if(a+g>t+u){if(mt(y)){R(E,g),S(E+1,0,a-g),E++;continue}if(C>=0){S(C,0,A);continue}if(g>t&&s[E]!==null){S(),N(E),E++;continue}S();continue}R(E,g),H(E,g),E++}return d&&S(),o}function Mi(e,t,i){if(e.simpleLineWalkFastPath)return Fi(e,t,i);const{widths:n,lineEndFitAdvances:r,lineEndPaintAdvances:s,kinds:l,breakableWidths:c,breakablePrefixWidths:u,discretionaryHyphenWidth:o,tabStopAdvance:a,chunks:d}=e;if(n.length===0||d.length===0)return 0;const h=bt(),p=h.lineFitEpsilon;let v=0,x=0,C=!1,A=0,m=0,S=0,k=0,F=-1,R=0,H=0,N=null;function M(){F=-1,R=0,H=0,N=null}function E(L=S,b=k,w=x){v++,i==null||i({startSegmentIndex:A,startGraphemeIndex:m,endSegmentIndex:L,endGraphemeIndex:b,width:w}),x=0,C=!1,M()}function g(L,b){C=!0,A=L,m=0,S=L+1,k=0,x=b}function y(L,b,w){C=!0,A=L,m=b,S=L,k=b+1,x=w}function $(L,b){if(!C){g(L,b);return}x+=b,S=L+1,k=0}function z(L,b){if(!mt(l[L]))return;const w=l[L]==="tab"?0:r[L],O=l[L]==="tab"?b:s[L];F=L+1,R=x-b+w,H=x-b+O,N=l[L]}function W(L){I(L,0)}function I(L,b){const w=c[L],O=u[L]??null;for(let _=b;_<w.length;_++){const G=pe(w,O,_,h.preferPrefixWidthsForBreakableRuns);if(!C){y(L,_,G);continue}x+G>t+p?(E(),y(L,_,G)):(x+=G,S=L,k=_+1)}C&&S===L&&k===w.length&&(S=L+1,k=0)}function B(L){if(N!=="soft-hyphen")return!1;const b=c[L];if(b===null)return!1;const w=h.preferPrefixWidthsForBreakableRuns?u[L]??b:b,O=w!==b,{fitCount:_,fittedWidth:G}=_i(w,x,t,p,o,O);return _===0?!1:(x=G,S=L,k=_,M(),_===b.length?(S=L+1,k=0,!0):(E(L,_,G+o),I(L,_),!0))}function Y(L){v++,i==null||i({startSegmentIndex:L.startSegmentIndex,startGraphemeIndex:0,endSegmentIndex:L.consumedEndSegmentIndex,endGraphemeIndex:0,width:0}),M()}for(let L=0;L<d.length;L++){const b=d[L];if(b.startSegmentIndex===b.endSegmentIndex){Y(b);continue}C=!1,x=0,A=b.startSegmentIndex,m=0,S=b.startSegmentIndex,k=0,M();let w=b.startSegmentIndex;for(;w<b.endSegmentIndex;){const O=l[w],_=O==="tab"?Ni(x,a):n[w];if(O==="soft-hyphen"){C&&(S=w+1,k=0,F=w+1,R=x+o,H=x+o,N=O),w++;continue}if(!C){_>t&&c[w]!==null?W(w):g(w,_),z(w,_),w++;continue}if(x+_>t+p){const Ee=x+(O==="tab"?0:r[w]),ke=x+(O==="tab"?_:s[w]);if(N==="soft-hyphen"&&h.preferEarlySoftHyphenBreak&&R<=t+p){E(F,0,H);continue}if(N==="soft-hyphen"&&B(w)){w++;continue}if(mt(O)&&Ee<=t+p){$(w,_),E(w+1,0,ke),w++;continue}if(F>=0&&R<=t+p){E(F,0,H);continue}if(_>t&&c[w]!==null){E(),W(w),w++;continue}E();continue}$(w,_),z(w,_),w++}if(C){const O=F===b.consumedEndSegmentIndex?H:x;E(b.consumedEndSegmentIndex,0,O)}}return v}let Ct=null,te=new WeakMap;function fe(){return Ct===null&&(Ct=new Intl.Segmenter(void 0,{granularity:"grapheme"})),Ct}function $i(e){return{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableWidths:[],breakablePrefixWidths:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[],segments:[]}}function Oi(e,t,i){const n=fe(),r=bt(),{cache:s,emojiCorrection:l}=Ci(t,wi(e.normalized)),c=J("-",q("-",s),l),o=J(" ",q(" ",s),l)*8;if(e.len===0)return $i();const a=[],d=[],h=[],p=[];let v=e.chunks.length<=1;const x=[],C=[],A=[],m=i?[]:null,S=Array.from({length:e.len}),k=Array.from({length:e.len});function F(N,M,E,g,y,$,z,W){y!=="text"&&y!=="space"&&y!=="zero-width-break"&&(v=!1),a.push(M),d.push(E),h.push(g),p.push(y),x==null||x.push($),C.push(z),A.push(W),m!==null&&m.push(N)}for(let N=0;N<e.len;N++){S[N]=a.length;const M=e.texts[N],E=e.isWordLike[N],g=e.kinds[N],y=e.starts[N];if(g==="soft-hyphen"){F(M,0,c,c,g,y,null,null),k[N]=a.length;continue}if(g==="hard-break"){F(M,0,0,0,g,y,null,null),k[N]=a.length;continue}if(g==="tab"){F(M,0,0,0,g,y,null,null),k[N]=a.length;continue}const $=q(M,s);if(g==="text"&&$.containsCJK){let B="",Y=0;for(const L of n.segment(M)){const b=L.segment;if(B.length===0){B=b,Y=L.index;continue}if(At.has(B)||he.has(b)||dt.has(b)||r.carryCJKAfterClosingQuote&&Q(b)&&ue(B)){B+=b;continue}const w=q(B,s),O=J(B,w,l);F(B,O,O,O,"text",y+Y,null,null),B=b,Y=L.index}if(B.length>0){const L=q(B,s),b=J(B,L,l);F(B,b,b,b,"text",y+Y,null,null)}k[N]=a.length;continue}const z=J(M,$,l),W=g==="space"||g==="preserved-space"||g==="zero-width-break"?0:z,I=g==="space"||g==="zero-width-break"?0:z;if(E&&M.length>1){const B=Ei(M,$,s,l),Y=r.preferPrefixWidthsForBreakableRuns?ki(M,$,s,l):null;F(M,z,W,I,g,y,B,Y)}else F(M,z,W,I,g,y,null,null);k[N]=a.length}const R=Bi(e.chunks,S,k),H=x===null?null:Oe(e.normalized,x);return m!==null?{widths:a,lineEndFitAdvances:d,lineEndPaintAdvances:h,kinds:p,simpleLineWalkFastPath:v,segLevels:H,breakableWidths:C,breakablePrefixWidths:A,discretionaryHyphenWidth:c,tabStopAdvance:o,chunks:R,segments:m}:{widths:a,lineEndFitAdvances:d,lineEndPaintAdvances:h,kinds:p,simpleLineWalkFastPath:v,segLevels:H,breakableWidths:C,breakablePrefixWidths:A,discretionaryHyphenWidth:c,tabStopAdvance:o,chunks:R}}function Bi(e,t,i){const n=[];for(let r=0;r<e.length;r++){const s=e[r],l=s.startSegmentIndex<t.length?t[s.startSegmentIndex]:i[i.length-1]??0,c=s.endSegmentIndex<t.length?t[s.endSegmentIndex]:i[i.length-1]??0,u=s.consumedEndSegmentIndex<t.length?t[s.consumedEndSegmentIndex]:i[i.length-1]??0;n.push({startSegmentIndex:l,endSegmentIndex:c,consumedEndSegmentIndex:u})}return n}function Ti(e,t,i,n){const r=gi(e,bt(),n==null?void 0:n.whiteSpace);return Oi(r,t,i)}function Wi(e,t,i){return Ti(e,t,!0,i)}function ee(e,t,i){let n=i.get(e);if(n!==void 0)return n;n=[];const r=fe();for(const s of r.segment(t[e]))n.push(s.segment);return i.set(e,n),n}function Pi(e){let t=te.get(e);return t!==void 0||(t=new Map,te.set(e,t)),t}function Di(e,t,i,n){return n>0&&e[n-1]==="soft-hyphen"&&!(t===n&&i>0)}function Hi(e,t,i,n,r,s,l){let c="";const u=Di(t,n,r,s);for(let o=n;o<s;o++)t[o]==="soft-hyphen"||t[o]==="hard-break"||(o===n&&r>0?c+=ee(o,e,i).slice(r).join(""):c+=e[o]);return l>0?(u&&(c+="-"),c+=ee(s,e,i).slice(n===s?r:0,l).join("")):u&&(c+="-"),c}function Ri(e,t,i,n,r,s,l){return{text:Hi(e.segments,e.kinds,t,n,r,s,l),width:i,start:{segmentIndex:n,graphemeIndex:r},end:{segmentIndex:s,graphemeIndex:l}}}function zi(e,t,i){return Ri(e,t,i.width,i.startSegmentIndex,i.startGraphemeIndex,i.endSegmentIndex,i.endGraphemeIndex)}function Ii(e,t,i){const n=[];if(e.widths.length===0)return{lineCount:0,height:0,lines:n};const r=Pi(e),s=Mi(e,t,l=>{n.push(zi(e,r,l))});return{lineCount:s,height:s*i,lines:n}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class X{constructor(t,i,n,r,s="div"){this.parent=t,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),X.nextNameID=X.nextNameID||0,this.$name.id=`lil-gui-name-${++X.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Vi extends X{constructor(t,i,n){super(t,i,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Tt(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const Xi={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:Tt,toHexString:Tt},ct={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},ji={isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,i=1){const n=ct.fromHexString(e);t[0]=(n>>16&255)/255*i,t[1]=(n>>8&255)/255*i,t[2]=(n&255)/255*i},toHexString([e,t,i],n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return ct.toHexString(r)}},Yi={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){const n=ct.fromHexString(e);t.r=(n>>16&255)/255*i,t.g=(n>>8&255)/255*i,t.b=(n&255)/255*i},toHexString({r:e,g:t,b:i},n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return ct.toHexString(r)}},Gi=[Xi,ct,ji,Yi];function Ui(e){return Gi.find(t=>t.match(e))}class Ki extends X{constructor(t,i,n,r){super(t,i,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ui(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Tt(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Nt extends X{constructor(t,i,n){super(t,i,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class qi extends X{constructor(t,i,n,r,s,l){super(t,i,n,"lil-number"),this._initInput(),this.min(r),this.max(s);const c=l!==void 0;this.step(c?l:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let m=parseFloat(this.$input.value);isNaN(m)||(this._stepExplicit&&(m=this._snap(m)),this.setValue(this._clamp(m)))},n=m=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+m),this.$input.value=this.getValue())},r=m=>{m.key==="Enter"&&this.$input.blur(),m.code==="ArrowUp"&&(m.preventDefault(),n(this._step*this._arrowKeyMultiplier(m))),m.code==="ArrowDown"&&(m.preventDefault(),n(this._step*this._arrowKeyMultiplier(m)*-1))},s=m=>{this._inputFocused&&(m.preventDefault(),n(this._step*this._normalizeMouseWheel(m)))};let l=!1,c,u,o,a,d;const h=5,p=m=>{c=m.clientX,u=o=m.clientY,l=!0,a=this.getValue(),d=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",x)},v=m=>{if(l){const S=m.clientX-c,k=m.clientY-u;Math.abs(k)>h?(m.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>h&&x()}if(!l){const S=m.clientY-o;d-=S*this._step*this._arrowKeyMultiplier(m),a+d>this._max?d=this._max-a:a+d<this._min&&(d=this._min-a),this._snapClampSetValue(a+d)}o=m.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",x)},C=()=>{this._inputFocused=!0},A=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",C),this.$input.addEventListener("blur",A)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(A,m,S,k,F)=>(A-m)/(S-m)*(F-k)+k,i=A=>{const m=this.$slider.getBoundingClientRect();let S=t(A,m.left,m.right,this._min,this._max);this._snapClampSetValue(S)},n=A=>{this._setDraggingStyle(!0),i(A.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=A=>{i(A.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let l=!1,c,u;const o=A=>{A.preventDefault(),this._setDraggingStyle(!0),i(A.touches[0].clientX),l=!1},a=A=>{A.touches.length>1||(this._hasScrollBar?(c=A.touches[0].clientX,u=A.touches[0].clientY,l=!0):o(A),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=A=>{if(l){const m=A.touches[0].clientX-c,S=A.touches[0].clientY-u;Math.abs(m)>Math.abs(S)?o(A):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else A.preventDefault(),i(A.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),v=400;let x;const C=A=>{if(Math.abs(A.deltaX)<Math.abs(A.deltaY)&&this._hasScrollBar)return;A.preventDefault();const S=this._normalizeMouseWheel(A)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",a,{passive:!1}),this.$slider.addEventListener("wheel",C,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ji extends X{constructor(t,i,n,r){super(t,i,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const n=document.createElement("option");n.textContent=i,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class Qi extends X{constructor(t,i,n){super(t,i,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Zi=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function tn(e){const t=document.createElement("style");t.innerHTML=e;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let ie=!1;class It{constructor({parent:t,autoPlace:i=t===void 0,container:n,width:r,title:s="Controls",closeFolders:l=!1,injectStyles:c=!0,touchStyles:u=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),u&&this.domElement.classList.add("lil-allow-touch-styles"),!ie&&c&&(tn(Zi),ie=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=l}add(t,i,n,r,s){if(Object(n)===n)return new Ji(this,t,i,n);const l=t[i];switch(typeof l){case"number":return new qi(this,t,i,n,r,s);case"boolean":return new Vi(this,t,i);case"string":return new Qi(this,t,i);case"function":return new Nt(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,l)}addColor(t,i,n=1){return new Ki(this,t,i,n)}addFolder(t){const i=new It({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Nt||n._name in t.controllers&&n.load(t.controllers[n._name])}),i&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Nt)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const en=`To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles,
And by opposing end them. To die, to sleep,
No more, and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to, 'tis a consummation
Devoutly to be wish'd. To die, to sleep,
To sleep, perchance to dream, ay, there's the rub,
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause.`,_t=20,Vt='"Helvetica Neue", Helvetica, Arial, sans-serif',Xt=600,nn=1.32,ne=en.trim().split(/\s+/),Wt=222,Pt=28,sn=140,se=12,re=.1,jt=.003,ge=.18,me=2.4,xt=5,rn="https://github.com/jeantimex/ripples",xe=document.querySelector("#app");if(!xe)throw new Error("App root not found");const P=document.createElement("canvas"),D=document.createElement("div"),Yt=document.createElement("footer"),lt=document.createElement("a"),Le=P.getContext("2d");if(!Le)throw new Error("2D context is not available");const K=Le;D.className="text-layer";Yt.className="footer-bar";lt.className="footer-link";lt.href=rn;lt.target="_blank";lt.rel="noreferrer";lt.innerHTML=`
  <svg viewBox="0 0 24 24" aria-hidden="true" class="footer-link__icon">
    <path fill="currentColor" d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.52v-1.82c-2.95.64-3.57-1.25-3.57-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.48 1.15 3.08.88.1-.68.37-1.15.67-1.42-2.35-.27-4.82-1.18-4.82-5.23 0-1.15.4-2.08 1.08-2.82-.1-.27-.47-1.37.1-2.85 0 0 .88-.28 2.9 1.08a9.95 9.95 0 0 1 5.28 0c2.01-1.36 2.89-1.08 2.89-1.08.58 1.48.22 2.58.11 2.85.68.74 1.08 1.67 1.08 2.82 0 4.06-2.48 4.95-4.84 5.21.38.33.72.97.72 1.96v2.9c0 .29.19.63.73.52A10.5 10.5 0 0 0 12 1.5Z"/>
  </svg>
  <span>jeantimex</span>
`;xe.replaceChildren(P,D,Yt);Yt.append(lt);const ft=1/60,ln=1/20,on=3,le={mode:"text",dotSpacing:15,dotRadius:3,textCount:500,textSize:15,textSelectable:!1,rippleScaleAmplitude:.49,fieldCellSize:18,rippleSpeed:.3,dropRadius:79,dropStrength:5.4,dragDropRadius:25,dragDropStrength:.4,dragMinDistance:3,rippleForce:36300,springStrength:7,motionDamping:11};let Z=0,st=0,ht=[],j,Ft=0,gt=0,pt=!1,rt=null,ot=0,at=0,Mt=null,oe="";class Ae{constructor(t,i,n){V(this,"width");V(this,"height");V(this,"cellSize");V(this,"columns",0);V(this,"rows",0);V(this,"heights",new Float32Array);V(this,"velocities",new Float32Array);V(this,"nextHeights",new Float32Array);V(this,"nextVelocities",new Float32Array);this.cellSize=n,this.width=t,this.height=i,this.resize(t,i)}resize(t,i){this.width=t,this.height=i,this.columns=Math.max(2,Math.ceil(t/this.cellSize)+1),this.rows=Math.max(2,Math.ceil(i/this.cellSize)+1);const n=this.columns*this.rows;this.heights=new Float32Array(n),this.velocities=new Float32Array(n),this.nextHeights=new Float32Array(n),this.nextVelocities=new Float32Array(n)}disturb(t,i,n,r){const s=Math.max(0,Math.floor((t-n)/this.cellSize)),l=Math.min(this.columns-1,Math.ceil((t+n)/this.cellSize)),c=Math.max(0,Math.floor((i-n)/this.cellSize)),u=Math.min(this.rows-1,Math.ceil((i+n)/this.cellSize));for(let o=c;o<=u;o+=1)for(let a=s;a<=l;a+=1){const d=a*this.cellSize,h=o*this.cellSize,p=Math.hypot(d-t,h-i);if(p>n)continue;const v=1-p/n,x=.5-Math.cos(v*Math.PI)*.5;this.heights[this.index(a,o)]+=x*r}}step(){for(let t=0;t<this.rows;t+=1)for(let i=0;i<this.columns;i+=1){const n=this.index(i,t),r=this.heights[n],s=(this.heightAt(i-1,t)+this.heightAt(i+1,t)+this.heightAt(i,t-1)+this.heightAt(i,t+1))*.25;let l=this.velocities[n];l+=(s-r)*f.rippleSpeed,l*=.995,this.nextVelocities[n]=l,this.nextHeights[n]=r+l}[this.heights,this.nextHeights]=[this.nextHeights,this.heights],[this.velocities,this.nextVelocities]=[this.nextVelocities,this.velocities]}gradientAt(t,i){const n=this.cellSize,r=this.sampleHeight(t-n,i),s=this.sampleHeight(t+n,i),l=this.sampleHeight(t,i-n),c=this.sampleHeight(t,i+n);return{x:(s-r)/(n*2),y:(c-l)/(n*2)}}surfaceHeightAt(t,i){return this.sampleHeight(t,i)}sampleHeight(t,i){const n=U(t,0,this.width),r=U(i,0,this.height),s=n/this.cellSize,l=r/this.cellSize,c=Math.floor(s),u=Math.floor(l),o=Math.min(this.columns-1,c+1),a=Math.min(this.rows-1,u+1),d=s-c,h=l-u,p=this.heights[this.index(c,u)],v=this.heights[this.index(o,u)],x=this.heights[this.index(c,a)],C=this.heights[this.index(o,a)],A=tt(p,v,d),m=tt(x,C,d);return tt(A,m,h)}heightAt(t,i){const n=U(Math.round(t),0,this.columns-1),r=U(Math.round(i),0,this.rows-1);return this.heights[this.index(n,r)]}index(t,i){return i*this.columns+t}}function U(e,t,i){return Math.min(Math.max(e,t),i)}function tt(e,t,i){return e+(t-e)*i}function wt(e,t,i){return t===e?0:(i-e)/(t-e)}function ut(e){return e.kind==="word"}function an(){return`${Xt} ${f.textSize}px ${Vt}`}function Gt(){return Math.round(f.textSize*nn)}function cn(){D.style.fontFamily=Vt,D.style.fontWeight=String(Xt),D.style.fontSize=`${f.textSize}px`,D.style.lineHeight=`${Gt()}px`}function hn(){const e=Math.max(1,Math.round(f.textCount));return Array.from({length:e},(i,n)=>ne[n%ne.length]).join(" ")}function un(){const e=hn(),t=an(),i=`${e}
${t}`;return(Mt===null||oe!==i)&&(Mt=Wi(e,t),oe=i),Mt}function ae(e,t){e.domElement.style.display=t?"":"none"}function dn(){D.replaceChildren()}function Ut(){D.style.display=f.mode==="text"?"block":"none",D.style.pointerEvents=f.mode==="text"?"auto":"none",D.style.userSelect=f.textSelectable?"text":"none",D.style.webkitUserSelect=f.textSelectable?"text":"none",P.style.pointerEvents=f.mode==="text"?"none":"auto";for(const e of ht)ut(e)&&(e.element.style.userSelect=f.textSelectable?"text":"none",e.element.style.webkitUserSelect=f.textSelectable?"text":"none")}function be(e){const t=Math.hypot(e.vx,e.vy),i=U(wt(0,sn,t),0,1);return Math.round(tt(Wt,Pt,i))}function pn(e){const t=be(e),i=wt(Pt,Wt,t),r=Math.round(U(i,0,1)*(se-1))/(se-1);return Math.round(tt(Pt,Wt,r))}function fn(e){const t=e.x+e.width*.5,i=e.y+e.height*.5,n=j.surfaceHeightAt(t,i),r=Math.hypot(e.vx,e.vy);if(Math.abs(n)<=ge||r<=me)return 1;const l=1+U(wt(-xt,xt,n)*2-1,-1,1)*f.rippleScaleAmplitude;return Math.abs(l-1)<=jt?1:l}function gn(e){const t=ut(e)?e.x+e.width*.5:e.x,i=ut(e)?e.y+e.height*.5:e.y,n=j.surfaceHeightAt(t,i),r=Math.hypot(e.vx,e.vy);if(Math.abs(n)<=ge||r<=me)return 1;const l=1+U(wt(-xt,xt,n)*2-1,-1,1)*f.rippleScaleAmplitude;return Math.abs(l-1)<=jt?1:l}function et(){j=new Ae(Z||1,st||1,f.fieldCellSize),dn(),ht=f.mode==="text"?Nn(Z):kn(Z,st),Ut(),gt=0,vt()}const f={...le,reset:()=>{Object.assign(f,le),we(),qt(),et()}},T=new It({title:"Ripples"}),mn=T.add(f,"mode",["dot","text"]).name("mode"),Kt=T.addFolder("Dot Settings"),St=T.addFolder("Text Settings"),xn=Kt.add(f,"dotSpacing",12,60,1).name("dot spacing"),Ln=Kt.add(f,"dotRadius",1,6,.1).name("dot radius"),An=St.add(f,"textCount",20,800,1).name("text count"),bn=St.add(f,"textSize",10,96,1).name("text size"),wn=St.add(f,"textSelectable").name("text selectable"),Sn=T.add(f,"rippleScaleAmplitude",0,.8,.01).name("ripple scale"),vn=T.add(f,"fieldCellSize",8,40,1).name("field cell");T.add(f,"rippleSpeed",.1,4,.1).name("ripple speed");T.add(f,"dropRadius",40,320,1).name("click radius");T.add(f,"dropStrength",1,30,.1).name("click strength");T.add(f,"dragDropRadius",20,220,1).name("drag radius");T.add(f,"dragDropStrength",.1,10,.1).name("drag strength");T.add(f,"dragMinDistance",2,40,1).name("drag spacing");T.add(f,"rippleForce",1e3,8e4,100).name("ripple force");T.add(f,"springStrength",1,60,.5).name("spring");T.add(f,"motionDamping",1,30,.5).name("damping");T.add(f,"reset").name("reset");const yn=T.controllers;T.close();function we(){for(const e of yn)e.updateDisplay()}function qt(){ae(Kt,f.mode==="dot"),ae(St,f.mode==="text")}function En(e){f.mode=e,we(),qt(),Ut(),et()}mn.onFinishChange(e=>{En(e)});xn.onFinishChange(()=>{f.mode==="dot"&&et()});vn.onFinishChange(et);Ln.onChange(vt);An.onFinishChange(()=>{f.mode==="text"&&et()});bn.onFinishChange(()=>{f.mode==="text"&&et()});wn.onChange(()=>{Ut()});Sn.onChange(vt);qt();j=new Ae(1,1,f.fieldCellSize);function kn(e,t){const i=[],n=e%f.dotSpacing*.5,r=t%f.dotSpacing*.5;for(let s=r;s<=t;s+=f.dotSpacing)for(let l=n;l<=e;l+=f.dotSpacing)i.push({kind:"dot",originX:l,originY:s,x:l,y:s,vx:0,vy:0});return i}function Cn(e,t,i){const n=[];for(let r=t;r<i;r+=1)n.push({text:e.segments[r]??"",width:e.widths[r]??0});return n}function Nn(e){const t=Math.max(120,e-_t*2),i=Gt(),n=un(),r=Ii(n,t,i),s=[];cn();for(let l=0;l<r.lines.length;l+=1){const c=r.lines[l],u=_t+l*i;let o=_t;const a=Cn(n,c.start.segmentIndex,c.end.segmentIndex);for(const d of a){if(d.text.trim().length===0){o+=d.width;continue}s.push({kind:"word",text:d.text,width:d.width,height:i,element:_n(d.text),renderedX:Number.NaN,renderedY:Number.NaN,renderedTone:Number.NaN,renderedScale:Number.NaN,originX:o,originY:u,x:o,y:u,vx:0,vy:0}),o+=d.width}}return s}function _n(e){const t=document.createElement("span");return t.className="text-word",t.textContent=e,t.style.fontFamily=Vt,t.style.fontWeight=String(Xt),t.style.fontSize=`${f.textSize}px`,t.style.lineHeight=`${Gt()}px`,t.style.transformOrigin="50% 50%",t.style.userSelect=f.textSelectable?"text":"none",t.style.webkitUserSelect=f.textSelectable?"text":"none",D.append(t),t}function Se(){Z=window.innerWidth,st=window.innerHeight;const e=window.devicePixelRatio||1;P.width=Math.round(Z*e),P.height=Math.round(st*e),P.style.width=`${Z}px`,P.style.height=`${st}px`,K.setTransform(e,0,0,e,0,0),et()}function Fn(e){for(const t of ht){const i=ut(t)?t.x+t.width*.5:t.x,n=ut(t)?t.y+t.height*.5:t.y,r=j.gradientAt(i,n),s=-r.x*f.rippleForce,l=-r.y*f.rippleForce,c=(t.originX-t.x)*f.springStrength,u=(t.originY-t.y)*f.springStrength,o=-t.vx*f.motionDamping,a=-t.vy*f.motionDamping,d=s+c+o,h=l+u+a;t.vx+=d*e,t.vy+=h*e,t.x+=t.vx*e,t.y+=t.vy*e}}function Mn(e){gt+=Math.min(e,ln);let t=0;for(;gt>=ft&&t<on;)j.step(),Fn(ft),gt-=ft,t+=1}function vt(){if(K.clearRect(0,0,Z,st),K.fillStyle="#111",f.mode==="text"){for(const e of ht)if(e.kind==="word"){const t=pn(e),i=fn(e);(!Number.isFinite(e.renderedX)||!Number.isFinite(e.renderedY)||!Number.isFinite(e.renderedScale)||Math.abs(e.x-e.renderedX)>re||Math.abs(e.y-e.renderedY)>re||Math.abs(i-e.renderedScale)>jt)&&(e.element.style.transform=`translate3d(${e.x}px, ${e.y}px, 0) scale(${i})`,e.renderedX=e.x,e.renderedY=e.y,e.renderedScale=i),t!==e.renderedTone&&(e.element.style.color=`rgb(${t}, ${t}, ${t})`,e.renderedTone=t)}return}for(const e of ht){const t=be(e),i=gn(e);K.fillStyle=`rgb(${t}, ${t}, ${t})`,K.beginPath(),K.arc(e.x,e.y,f.dotRadius*i,0,Math.PI*2),K.fill()}}function ve(e){const t=Ft===0?ft:(e-Ft)/1e3;Ft=e,Mn(t),vt(),window.requestAnimationFrame(ve)}function ye(e,t){const i=Math.hypot(e-ot,t-at);if(i<f.dragMinDistance)return;const n=Math.max(1,Math.ceil(i/f.dragMinDistance));for(let r=1;r<=n;r+=1){const s=r/n;j.disturb(tt(ot,e,s),tt(at,t,s),f.dragDropRadius,f.dragDropStrength)}ot=e,at=t}function $n(e){f.mode==="text"&&(pt=!0,rt=e.pointerId,ot=e.clientX,at=e.clientY,j.disturb(e.clientX,e.clientY,f.dropRadius,f.dropStrength))}function On(e){f.mode==="text"&&(!pt||e.pointerId!==rt||e.buttons===0||ye(e.clientX,e.clientY))}P.addEventListener("pointerdown",e=>{f.mode!=="text"&&(pt=!0,rt=e.pointerId,ot=e.clientX,at=e.clientY,P.setPointerCapture(e.pointerId),j.disturb(e.clientX,e.clientY,f.dropRadius,f.dropStrength))});P.addEventListener("pointermove",e=>{f.mode!=="text"&&(!pt||e.pointerId!==rt||ye(e.clientX,e.clientY))});function yt(e){e.pointerId===rt&&(pt=!1,rt=null,P.hasPointerCapture(e.pointerId)&&P.releasePointerCapture(e.pointerId))}P.addEventListener("pointerup",yt);P.addEventListener("pointercancel",yt);D.addEventListener("pointerdown",$n);D.addEventListener("pointermove",On);window.addEventListener("pointerup",yt);window.addEventListener("pointercancel",yt);window.addEventListener("resize",Se);Se();window.requestAnimationFrame(ve);
