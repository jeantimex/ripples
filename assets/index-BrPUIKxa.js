var Se=Object.defineProperty;var ye=(e,t,i)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var I=(e,t,i)=>ye(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const Ee=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ON","CS","ON","CS","ON","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ON","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","ON","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],ke=["AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL"];function Ce(e){return e<=255?Ee[e]:1424<=e&&e<=1524?"R":1536<=e&&e<=1791?ke[e&255]:1792<=e&&e<=2220?"AL":"L"}function Ne(e){const t=e.length;if(t===0)return null;const i=new Array(t);let n=0;for(let o=0;o<t;o++){const a=Ce(e.charCodeAt(o));(a==="R"||a==="AL"||a==="AN")&&n++,i[o]=a}if(n===0)return null;const r=t/n<.3?0:1,s=new Int8Array(t);for(let o=0;o<t;o++)s[o]=r;const l=r&1?"R":"L",c=l;let u=c;for(let o=0;o<t;o++)i[o]==="NSM"?i[o]=u:u=i[o];u=c;for(let o=0;o<t;o++){const a=i[o];a==="EN"?i[o]=u==="AL"?"AN":"EN":(a==="R"||a==="L"||a==="AL")&&(u=a)}for(let o=0;o<t;o++)i[o]==="AL"&&(i[o]="R");for(let o=1;o<t-1;o++)i[o]==="ES"&&i[o-1]==="EN"&&i[o+1]==="EN"&&(i[o]="EN"),i[o]==="CS"&&(i[o-1]==="EN"||i[o-1]==="AN")&&i[o+1]===i[o-1]&&(i[o]=i[o-1]);for(let o=0;o<t;o++){if(i[o]!=="EN")continue;let a;for(a=o-1;a>=0&&i[a]==="ET";a--)i[a]="EN";for(a=o+1;a<t&&i[a]==="ET";a++)i[a]="EN"}for(let o=0;o<t;o++){const a=i[o];(a==="WS"||a==="ES"||a==="ET"||a==="CS")&&(i[o]="ON")}u=c;for(let o=0;o<t;o++){const a=i[o];a==="EN"?i[o]=u==="L"?"L":"EN":(a==="R"||a==="L")&&(u=a)}for(let o=0;o<t;o++){if(i[o]!=="ON")continue;let a=o+1;for(;a<t&&i[a]==="ON";)a++;const d=o>0?i[o-1]:c,h=a<t?i[a]:c,p=d!=="L"?"R":"L";if(p===(h!=="L"?"R":"L"))for(let x=o;x<a;x++)i[x]=p;o=a-1}for(let o=0;o<t;o++)i[o]==="ON"&&(i[o]=l);for(let o=0;o<t;o++){const a=i[o];(s[o]&1)===0?a==="R"?s[o]++:(a==="AN"||a==="EN")&&(s[o]+=2):(a==="L"||a==="AN"||a==="EN")&&s[o]++}return s}function _e(e,t){const i=Ne(e);if(i===null)return null;const n=new Int8Array(t.length);for(let r=0;r<t.length;r++)n[r]=i[t[r]];return n}const Fe=/[ \t\n\r\f]+/g,$e=/[\t\n\r\f]| {2,}|^ | $/;function Me(e){const t=e??"normal";return t==="pre-wrap"?{mode:t,preserveOrdinarySpaces:!0,preserveHardBreaks:!0}:{mode:t,preserveOrdinarySpaces:!1,preserveHardBreaks:!1}}function Be(e){if(!$e.test(e))return e;let t=e.replace(Fe," ");return t.charCodeAt(0)===32&&(t=t.slice(1)),t.length>0&&t.charCodeAt(t.length-1)===32&&(t=t.slice(0,-1)),t}function Oe(e){return/[\r\f]/.test(e)?e.replace(/\r\n/g,`
`).replace(/[\r\f]/g,`
`):e.replace(/\r\n/g,`
`)}let bt=null,Te;function We(){return bt===null&&(bt=new Intl.Segmenter(Te,{granularity:"word"})),bt}const De=new RegExp("\\p{Script=Arabic}","u"),mt=new RegExp("\\p{M}","u"),le=new RegExp("\\p{Nd}","u");function Nt(e){return De.test(e)}function q(e){for(const t of e){const i=t.codePointAt(0);if(i>=19968&&i<=40959||i>=13312&&i<=19903||i>=131072&&i<=173791||i>=173824&&i<=177983||i>=177984&&i<=178207||i>=178208&&i<=183983||i>=183984&&i<=191471||i>=196608&&i<=201551||i>=63744&&i<=64255||i>=194560&&i<=195103||i>=12288&&i<=12351||i>=12352&&i<=12447||i>=12448&&i<=12543||i>=44032&&i<=55215||i>=65280&&i<=65519)return!0}return!1}const oe=new Set(["，","．","！","：","；","？","、","。","・","）","〕","〉","》","」","』","】","〗","〙","〛","ー","々","〻","ゝ","ゞ","ヽ","ヾ"]),xt=new Set(['"',"(","[","{","“","‘","«","‹","（","〔","〈","《","「","『","【","〖","〘","〚"]),Tt=new Set(["'","’"]),ut=new Set([".",",","!","?",":",";","،","؛","؟","।","॥","၊","။","၌","၍","၏",")","]","}","%",'"',"”","’","»","›","…"]),Pe=new Set([":",".","،","؛"]),Re=new Set(["၏"]),ze=new Set(["”","’","»","›","」","』","】","》","〉","〕","）"]);function He(e){if(Wt(e))return!0;let t=!1;for(const i of e){if(ut.has(i)){t=!0;continue}if(!(t&&mt.test(i)))return!1}return t}function Ve(e){for(const t of e)if(!oe.has(t)&&!ut.has(t))return!1;return e.length>0}function Ie(e){if(Wt(e))return!0;for(const t of e)if(!xt.has(t)&&!Tt.has(t)&&!mt.test(t))return!1;return e.length>0}function Wt(e){let t=!1;for(const i of e)if(!(i==="\\"||mt.test(i))){if(xt.has(i)||ut.has(i)||Tt.has(i)){t=!0;continue}return!1}return t}function Xe(e){const t=Array.from(e);let i=t.length;for(;i>0;){const n=t[i-1];if(mt.test(n)){i--;continue}if(xt.has(n)||Tt.has(n)){i--;continue}break}return i<=0||i===t.length?null:{head:t.slice(0,i).join(""),tail:t.slice(i).join("")}}function je(e,t){if(e.length===0)return!1;for(const i of e)if(i!==t)return!1;return!0}function Ye(e){return!Nt(e)||e.length===0?!1:Pe.has(e[e.length-1])}function Ge(e){return e.length===0?!1:Re.has(e[e.length-1])}function Ue(e){if(e.length<2||e[0]!==" ")return null;const t=e.slice(1);return new RegExp("^\\p{M}+$","u").test(t)?{space:" ",marks:t}:null}function ae(e){for(let t=e.length-1;t>=0;t--){const i=e[t];if(ze.has(i))return!0;if(!ut.has(i))return!1}return!1}function Ke(e,t){if(t.preserveOrdinarySpaces||t.preserveHardBreaks){if(e===" ")return"preserved-space";if(e==="	")return"tab";if(t.preserveHardBreaks&&e===`
`)return"hard-break"}return e===" "?"space":e===" "||e===" "||e==="⁠"||e==="\uFEFF"?"glue":e==="​"?"zero-width-break":e==="­"?"soft-hyphen":"text"}function qe(e,t,i,n){const r=[];let s=null,l="",c=i,u=!1,o=0;for(const a of e){const d=Ke(a,n),h=d==="text"&&t;if(s!==null&&d===s&&h===u){l+=a,o+=a.length;continue}s!==null&&r.push({text:l,isWordLike:u,kind:s,start:c}),s=d,l=a,c=i+o,u=h,o+=a.length}return s!==null&&r.push({text:l,isWordLike:u,kind:s,start:c}),r}function _t(e){return e==="space"||e==="preserved-space"||e==="zero-width-break"||e==="hard-break"}const Je=/^[A-Za-z][A-Za-z0-9+.-]*:$/;function Qe(e,t){const i=e.texts[t];return i.startsWith("www.")?!0:Je.test(i)&&t+1<e.len&&e.kinds[t+1]==="text"&&e.texts[t+1]==="//"}function Ze(e){return e.includes("?")&&(e.includes("://")||e.startsWith("www."))}function ti(e){const t=e.texts.slice(),i=e.isWordLike.slice(),n=e.kinds.slice(),r=e.starts.slice();for(let l=0;l<e.len;l++){if(n[l]!=="text"||!Qe(e,l))continue;let c=l+1;for(;c<e.len&&!_t(n[c]);){t[l]+=t[c],i[l]=!0;const u=t[c].includes("?");if(n[c]="text",t[c]="",c++,u)break}}let s=0;for(let l=0;l<t.length;l++){const c=t[l];c.length!==0&&(s!==l&&(t[s]=c,i[s]=i[l],n[s]=n[l],r[s]=r[l]),s++)}return t.length=s,i.length=s,n.length=s,r.length=s,{len:s,texts:t,isWordLike:i,kinds:n,starts:r}}function ei(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s];if(t.push(l),i.push(e.isWordLike[s]),n.push(e.kinds[s]),r.push(e.starts[s]),!Ze(l))continue;const c=s+1;if(c>=e.len||_t(e.kinds[c]))continue;let u="";const o=e.starts[c];let a=c;for(;a<e.len&&!_t(e.kinds[a]);)u+=e.texts[a],a++;u.length>0&&(t.push(u),i.push(!0),n.push("text"),r.push(o),s=a-1)}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}const ii=new Set([":","-","/","×",",",".","+","–","—"]),Ut=/^[A-Za-z0-9_]+[,:;]*$/,ni=/[,:;]+$/;function ce(e){for(const t of e)if(le.test(t))return!0;return!1}function Ft(e){if(e.length===0)return!1;for(const t of e)if(!(le.test(t)||ii.has(t)))return!1;return!0}function si(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s],c=e.kinds[s];if(c==="text"&&Ft(l)&&ce(l)){let u=l,o=s+1;for(;o<e.len&&e.kinds[o]==="text"&&Ft(e.texts[o]);)u+=e.texts[o],o++;t.push(u),i.push(!0),n.push("text"),r.push(e.starts[s]),s=o-1;continue}t.push(l),i.push(e.isWordLike[s]),n.push(c),r.push(e.starts[s])}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function ri(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s],c=e.kinds[s],u=e.isWordLike[s];if(c==="text"&&u&&Ut.test(l)){let o=l,a=s+1;for(;ni.test(o)&&a<e.len&&e.kinds[a]==="text"&&e.isWordLike[a]&&Ut.test(e.texts[a]);)o+=e.texts[a],a++;t.push(o),i.push(!0),n.push("text"),r.push(e.starts[s]),s=a-1;continue}t.push(l),i.push(u),n.push(c),r.push(e.starts[s])}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function li(e){const t=[],i=[],n=[],r=[];for(let s=0;s<e.len;s++){const l=e.texts[s];if(e.kinds[s]==="text"&&l.includes("-")){const c=l.split("-");let u=c.length>1;for(let o=0;o<c.length;o++){const a=c[o];if(!u)break;(a.length===0||!ce(a)||!Ft(a))&&(u=!1)}if(u){let o=0;for(let a=0;a<c.length;a++){const d=c[a],h=a<c.length-1?`${d}-`:d;t.push(h),i.push(!0),n.push("text"),r.push(e.starts[s]+o),o+=h.length}continue}}t.push(l),i.push(e.isWordLike[s]),n.push(e.kinds[s]),r.push(e.starts[s])}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function oi(e){const t=[],i=[],n=[],r=[];let s=0;for(;s<e.len;){let l=e.texts[s],c=e.isWordLike[s],u=e.kinds[s],o=e.starts[s];if(u==="glue"){let a=l;const d=o;for(s++;s<e.len&&e.kinds[s]==="glue";)a+=e.texts[s],s++;if(s<e.len&&e.kinds[s]==="text")l=a+e.texts[s],c=e.isWordLike[s],u="text",o=d,s++;else{t.push(a),i.push(!1),n.push("glue"),r.push(d);continue}}else s++;if(u==="text")for(;s<e.len&&e.kinds[s]==="glue";){let a="";for(;s<e.len&&e.kinds[s]==="glue";)a+=e.texts[s],s++;if(s<e.len&&e.kinds[s]==="text"){l+=a+e.texts[s],c=c||e.isWordLike[s],s++;continue}l+=a}t.push(l),i.push(c),n.push(u),r.push(o)}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function ai(e){const t=e.texts.slice(),i=e.isWordLike.slice(),n=e.kinds.slice(),r=e.starts.slice();for(let s=0;s<t.length-1;s++){if(n[s]!=="text"||n[s+1]!=="text"||!q(t[s])||!q(t[s+1]))continue;const l=Xe(t[s]);l!==null&&(t[s]=l.head,t[s+1]=l.tail+t[s+1],r[s+1]=r[s]+l.head.length)}return{len:t.length,texts:t,isWordLike:i,kinds:n,starts:r}}function ci(e,t,i){const n=We();let r=0;const s=[],l=[],c=[],u=[];for(const h of n.segment(e))for(const p of qe(h.segment,h.isWordLike??!1,h.index,i)){const S=p.kind==="text";t.carryCJKAfterClosingQuote&&S&&r>0&&c[r-1]==="text"&&q(p.text)&&q(s[r-1])&&ae(s[r-1])||S&&r>0&&c[r-1]==="text"&&Ve(p.text)&&q(s[r-1])||S&&r>0&&c[r-1]==="text"&&Ge(s[r-1])?(s[r-1]+=p.text,l[r-1]=l[r-1]||p.isWordLike):S&&r>0&&c[r-1]==="text"&&p.isWordLike&&Nt(p.text)&&Ye(s[r-1])?(s[r-1]+=p.text,l[r-1]=!0):S&&!p.isWordLike&&r>0&&c[r-1]==="text"&&p.text.length===1&&p.text!=="-"&&p.text!=="—"&&je(s[r-1],p.text)||S&&!p.isWordLike&&r>0&&c[r-1]==="text"&&(He(p.text)||p.text==="-"&&l[r-1])?s[r-1]+=p.text:(s[r]=p.text,l[r]=p.isWordLike,c[r]=p.kind,u[r]=p.start,r++)}for(let h=1;h<r;h++)c[h]==="text"&&!l[h]&&Wt(s[h])&&c[h-1]==="text"&&(s[h-1]+=s[h],l[h-1]=l[h-1]||l[h],s[h]="");for(let h=r-2;h>=0;h--)if(c[h]==="text"&&!l[h]&&Ie(s[h])){let p=h+1;for(;p<r&&s[p]==="";)p++;p<r&&c[p]==="text"&&(s[p]=s[h]+s[p],u[p]=u[h],s[h]="")}let o=0;for(let h=0;h<r;h++){const p=s[h];p.length!==0&&(o!==h&&(s[o]=p,l[o]=l[h],c[o]=c[h],u[o]=u[h]),o++)}s.length=o,l.length=o,c.length=o,u.length=o;const a=oi({len:o,texts:s,isWordLike:l,kinds:c,starts:u}),d=ai(ri(li(si(ei(ti(a))))));for(let h=0;h<d.len-1;h++){const p=Ue(d.texts[h]);p!==null&&(d.kinds[h]!=="space"&&d.kinds[h]!=="preserved-space"||d.kinds[h+1]!=="text"||!Nt(d.texts[h+1])||(d.texts[h]=p.space,d.isWordLike[h]=!1,d.kinds[h]=d.kinds[h]==="preserved-space"?"preserved-space":"space",d.texts[h+1]=p.marks+d.texts[h+1],d.starts[h+1]=d.starts[h]+p.space.length))}return d}function hi(e,t){if(e.len===0)return[];if(!t.preserveHardBreaks)return[{startSegmentIndex:0,endSegmentIndex:e.len,consumedEndSegmentIndex:e.len}];const i=[];let n=0;for(let r=0;r<e.len;r++)e.kinds[r]==="hard-break"&&(i.push({startSegmentIndex:n,endSegmentIndex:r,consumedEndSegmentIndex:r+1}),n=r+1);return n<e.len&&i.push({startSegmentIndex:n,endSegmentIndex:e.len,consumedEndSegmentIndex:e.len}),i}function ui(e,t,i="normal"){const n=Me(i),r=n.mode==="pre-wrap"?Oe(e):Be(e);if(r.length===0)return{normalized:r,chunks:[],len:0,texts:[],isWordLike:[],kinds:[],starts:[]};const s=ci(r,t,n);return{normalized:r,chunks:hi(s,n),...s}}let et=null;const Kt=new Map;let it=null;const di=new RegExp("\\p{Emoji_Presentation}","u"),pi=/[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;let vt=null;const qt=new Map;function Dt(){if(et!==null)return et;if(typeof OffscreenCanvas<"u")return et=new OffscreenCanvas(1,1).getContext("2d"),et;if(typeof document<"u")return et=document.createElement("canvas").getContext("2d"),et;throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.")}function fi(e){let t=Kt.get(e);return t||(t=new Map,Kt.set(e,t)),t}function U(e,t){let i=t.get(e);return i===void 0&&(i={width:Dt().measureText(e).width,containsCJK:q(e)},t.set(e,i)),i}function Lt(){if(it!==null)return it;if(typeof navigator>"u")return it={lineFitEpsilon:.005,carryCJKAfterClosingQuote:!1,preferPrefixWidthsForBreakableRuns:!1,preferEarlySoftHyphenBreak:!1},it;const e=navigator.userAgent,i=navigator.vendor==="Apple Computer, Inc."&&e.includes("Safari/")&&!e.includes("Chrome/")&&!e.includes("Chromium/")&&!e.includes("CriOS/")&&!e.includes("FxiOS/")&&!e.includes("EdgiOS/"),n=e.includes("Chrome/")||e.includes("Chromium/")||e.includes("CriOS/")||e.includes("Edg/");return it={lineFitEpsilon:i?1/64:.005,carryCJKAfterClosingQuote:n,preferPrefixWidthsForBreakableRuns:i,preferEarlySoftHyphenBreak:i},it}function gi(e){const t=e.match(/(\d+(?:\.\d+)?)\s*px/);return t?parseFloat(t[1]):16}function Pt(){return vt===null&&(vt=new Intl.Segmenter(void 0,{granularity:"grapheme"})),vt}function mi(e){return di.test(e)||e.includes("️")}function xi(e){return pi.test(e)}function Li(e,t){let i=qt.get(e);if(i!==void 0)return i;const n=Dt();n.font=e;const r=n.measureText("😀").width;if(i=0,r>t+.5&&typeof document<"u"&&document.body!==null){const s=document.createElement("span");s.style.font=e,s.style.display="inline-block",s.style.visibility="hidden",s.style.position="absolute",s.textContent="😀",document.body.appendChild(s);const l=s.getBoundingClientRect().width;document.body.removeChild(s),r-l>.5&&(i=r-l)}return qt.set(e,i),i}function Ai(e){let t=0;const i=Pt();for(const n of i.segment(e))mi(n.segment)&&t++;return t}function wi(e,t){return t.emojiCount===void 0&&(t.emojiCount=Ai(e)),t.emojiCount}function K(e,t,i){return i===0?t.width:t.width-wi(e,t)*i}function bi(e,t,i,n){if(t.graphemeWidths!==void 0)return t.graphemeWidths;const r=[],s=Pt();for(const l of s.segment(e)){const c=U(l.segment,i);r.push(K(l.segment,c,n))}return t.graphemeWidths=r.length>1?r:null,t.graphemeWidths}function vi(e,t,i,n){if(t.graphemePrefixWidths!==void 0)return t.graphemePrefixWidths;const r=[],s=Pt();let l="";for(const c of s.segment(e)){l+=c.segment;const u=U(l,i);r.push(K(l,u,n))}return t.graphemePrefixWidths=r.length>1?r:null,t.graphemePrefixWidths}function Si(e,t){const i=Dt();i.font=e;const n=fi(e),r=gi(e),s=t?Li(e,r):0;return{cache:n,fontSize:r,emojiCorrection:s}}function gt(e){return e==="space"||e==="preserved-space"||e==="tab"||e==="zero-width-break"||e==="soft-hyphen"}function yi(e,t){if(t<=0)return 0;const i=e%t;return Math.abs(i)<=1e-6?t:t-i}function he(e,t,i,n){return!n||t===null?e[i]:t[i]-(i>0?t[i-1]:0)}function Ei(e,t,i,n,r,s){let l=0,c=t;for(;l<e.length;){const u=s?t+e[l]:c+e[l];if((l+1<e.length?u+r:u)>i+n)break;c=u,l++}return{fitCount:l,fittedWidth:c}}function ki(e,t,i){const{widths:n,kinds:r,breakableWidths:s,breakablePrefixWidths:l}=e;if(n.length===0)return 0;const c=Lt(),u=c.lineFitEpsilon;let o=0,a=0,d=!1,h=0,p=0,S=0,x=0,C=-1,A=0;function m(){C=-1,A=0}function v(g=S,y=x,M=a){o++,i==null||i({startSegmentIndex:h,startGraphemeIndex:p,endSegmentIndex:g,endGraphemeIndex:y,width:M}),a=0,d=!1,m()}function k(g,y){d=!0,h=g,p=0,S=g+1,x=0,a=y}function F(g,y,M){d=!0,h=g,p=y,S=g,x=y+1,a=M}function z(g,y){if(!d){k(g,y);return}a+=y,S=g+1,x=0}function R(g,y){gt(r[g])&&(C=g+1,A=a-y)}function N(g){$(g,0)}function $(g,y){const M=s[g],H=l[g]??null;for(let W=y;W<M.length;W++){const V=he(M,H,W,c.preferPrefixWidthsForBreakableRuns);if(!d){F(g,W,V);continue}a+V>t+u?(v(),F(g,W,V)):(a+=V,S=g,x=W+1)}d&&S===g&&x===M.length&&(S=g+1,x=0)}let E=0;for(;E<n.length;){const g=n[E],y=r[E];if(!d){g>t&&s[E]!==null?N(E):k(E,g),R(E,g),E++;continue}if(a+g>t+u){if(gt(y)){z(E,g),v(E+1,0,a-g),E++;continue}if(C>=0){v(C,0,A);continue}if(g>t&&s[E]!==null){v(),N(E),E++;continue}v();continue}z(E,g),R(E,g),E++}return d&&v(),o}function Ci(e,t,i){if(e.simpleLineWalkFastPath)return ki(e,t,i);const{widths:n,lineEndFitAdvances:r,lineEndPaintAdvances:s,kinds:l,breakableWidths:c,breakablePrefixWidths:u,discretionaryHyphenWidth:o,tabStopAdvance:a,chunks:d}=e;if(n.length===0||d.length===0)return 0;const h=Lt(),p=h.lineFitEpsilon;let S=0,x=0,C=!1,A=0,m=0,v=0,k=0,F=-1,z=0,R=0,N=null;function $(){F=-1,z=0,R=0,N=null}function E(L=v,w=k,b=x){S++,i==null||i({startSegmentIndex:A,startGraphemeIndex:m,endSegmentIndex:L,endGraphemeIndex:w,width:b}),x=0,C=!1,$()}function g(L,w){C=!0,A=L,m=0,v=L+1,k=0,x=w}function y(L,w,b){C=!0,A=L,m=w,v=L,k=w+1,x=b}function M(L,w){if(!C){g(L,w);return}x+=w,v=L+1,k=0}function H(L,w){if(!gt(l[L]))return;const b=l[L]==="tab"?0:r[L],B=l[L]==="tab"?w:s[L];F=L+1,z=x-w+b,R=x-w+B,N=l[L]}function W(L){V(L,0)}function V(L,w){const b=c[L],B=u[L]??null;for(let _=w;_<b.length;_++){const Y=he(b,B,_,h.preferPrefixWidthsForBreakableRuns);if(!C){y(L,_,Y);continue}x+Y>t+p?(E(),y(L,_,Y)):(x+=Y,v=L,k=_+1)}C&&v===L&&k===b.length&&(v=L+1,k=0)}function O(L){if(N!=="soft-hyphen")return!1;const w=c[L];if(w===null)return!1;const b=h.preferPrefixWidthsForBreakableRuns?u[L]??w:w,B=b!==w,{fitCount:_,fittedWidth:Y}=Ei(b,x,t,p,o,B);return _===0?!1:(x=Y,v=L,k=_,$(),_===w.length?(v=L+1,k=0,!0):(E(L,_,Y+o),V(L,_),!0))}function j(L){S++,i==null||i({startSegmentIndex:L.startSegmentIndex,startGraphemeIndex:0,endSegmentIndex:L.consumedEndSegmentIndex,endGraphemeIndex:0,width:0}),$()}for(let L=0;L<d.length;L++){const w=d[L];if(w.startSegmentIndex===w.endSegmentIndex){j(w);continue}C=!1,x=0,A=w.startSegmentIndex,m=0,v=w.startSegmentIndex,k=0,$();let b=w.startSegmentIndex;for(;b<w.endSegmentIndex;){const B=l[b],_=B==="tab"?yi(x,a):n[b];if(B==="soft-hyphen"){C&&(v=b+1,k=0,F=b+1,z=x+o,R=x+o,N=B),b++;continue}if(!C){_>t&&c[b]!==null?W(b):g(b,_),H(b,_),b++;continue}if(x+_>t+p){const be=x+(B==="tab"?0:r[b]),ve=x+(B==="tab"?_:s[b]);if(N==="soft-hyphen"&&h.preferEarlySoftHyphenBreak&&z<=t+p){E(F,0,R);continue}if(N==="soft-hyphen"&&O(b)){b++;continue}if(gt(B)&&be<=t+p){M(b,_),E(b+1,0,ve),b++;continue}if(F>=0&&z<=t+p){E(F,0,R);continue}if(_>t&&c[b]!==null){E(),W(b),b++;continue}E();continue}M(b,_),H(b,_),b++}if(C){const B=F===w.consumedEndSegmentIndex?R:x;E(w.consumedEndSegmentIndex,0,B)}}return S}let St=null,Jt=new WeakMap;function ue(){return St===null&&(St=new Intl.Segmenter(void 0,{granularity:"grapheme"})),St}function Ni(e){return{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableWidths:[],breakablePrefixWidths:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[],segments:[]}}function _i(e,t,i){const n=ue(),r=Lt(),{cache:s,emojiCorrection:l}=Si(t,xi(e.normalized)),c=K("-",U("-",s),l),o=K(" ",U(" ",s),l)*8;if(e.len===0)return Ni();const a=[],d=[],h=[],p=[];let S=e.chunks.length<=1;const x=[],C=[],A=[],m=i?[]:null,v=Array.from({length:e.len}),k=Array.from({length:e.len});function F(N,$,E,g,y,M,H,W){y!=="text"&&y!=="space"&&y!=="zero-width-break"&&(S=!1),a.push($),d.push(E),h.push(g),p.push(y),x==null||x.push(M),C.push(H),A.push(W),m!==null&&m.push(N)}for(let N=0;N<e.len;N++){v[N]=a.length;const $=e.texts[N],E=e.isWordLike[N],g=e.kinds[N],y=e.starts[N];if(g==="soft-hyphen"){F($,0,c,c,g,y,null,null),k[N]=a.length;continue}if(g==="hard-break"){F($,0,0,0,g,y,null,null),k[N]=a.length;continue}if(g==="tab"){F($,0,0,0,g,y,null,null),k[N]=a.length;continue}const M=U($,s);if(g==="text"&&M.containsCJK){let O="",j=0;for(const L of n.segment($)){const w=L.segment;if(O.length===0){O=w,j=L.index;continue}if(xt.has(O)||oe.has(w)||ut.has(w)||r.carryCJKAfterClosingQuote&&q(w)&&ae(O)){O+=w;continue}const b=U(O,s),B=K(O,b,l);F(O,B,B,B,"text",y+j,null,null),O=w,j=L.index}if(O.length>0){const L=U(O,s),w=K(O,L,l);F(O,w,w,w,"text",y+j,null,null)}k[N]=a.length;continue}const H=K($,M,l),W=g==="space"||g==="preserved-space"||g==="zero-width-break"?0:H,V=g==="space"||g==="zero-width-break"?0:H;if(E&&$.length>1){const O=bi($,M,s,l),j=r.preferPrefixWidthsForBreakableRuns?vi($,M,s,l):null;F($,H,W,V,g,y,O,j)}else F($,H,W,V,g,y,null,null);k[N]=a.length}const z=Fi(e.chunks,v,k),R=x===null?null:_e(e.normalized,x);return m!==null?{widths:a,lineEndFitAdvances:d,lineEndPaintAdvances:h,kinds:p,simpleLineWalkFastPath:S,segLevels:R,breakableWidths:C,breakablePrefixWidths:A,discretionaryHyphenWidth:c,tabStopAdvance:o,chunks:z,segments:m}:{widths:a,lineEndFitAdvances:d,lineEndPaintAdvances:h,kinds:p,simpleLineWalkFastPath:S,segLevels:R,breakableWidths:C,breakablePrefixWidths:A,discretionaryHyphenWidth:c,tabStopAdvance:o,chunks:z}}function Fi(e,t,i){const n=[];for(let r=0;r<e.length;r++){const s=e[r],l=s.startSegmentIndex<t.length?t[s.startSegmentIndex]:i[i.length-1]??0,c=s.endSegmentIndex<t.length?t[s.endSegmentIndex]:i[i.length-1]??0,u=s.consumedEndSegmentIndex<t.length?t[s.consumedEndSegmentIndex]:i[i.length-1]??0;n.push({startSegmentIndex:l,endSegmentIndex:c,consumedEndSegmentIndex:u})}return n}function $i(e,t,i,n){const r=ui(e,Lt(),n==null?void 0:n.whiteSpace);return _i(r,t,i)}function Mi(e,t,i){return $i(e,t,!0,i)}function Qt(e,t,i){let n=i.get(e);if(n!==void 0)return n;n=[];const r=ue();for(const s of r.segment(t[e]))n.push(s.segment);return i.set(e,n),n}function Bi(e){let t=Jt.get(e);return t!==void 0||(t=new Map,Jt.set(e,t)),t}function Oi(e,t,i,n){return n>0&&e[n-1]==="soft-hyphen"&&!(t===n&&i>0)}function Ti(e,t,i,n,r,s,l){let c="";const u=Oi(t,n,r,s);for(let o=n;o<s;o++)t[o]==="soft-hyphen"||t[o]==="hard-break"||(o===n&&r>0?c+=Qt(o,e,i).slice(r).join(""):c+=e[o]);return l>0?(u&&(c+="-"),c+=Qt(s,e,i).slice(n===s?r:0,l).join("")):u&&(c+="-"),c}function Wi(e,t,i,n,r,s,l){return{text:Ti(e.segments,e.kinds,t,n,r,s,l),width:i,start:{segmentIndex:n,graphemeIndex:r},end:{segmentIndex:s,graphemeIndex:l}}}function Di(e,t,i){return Wi(e,t,i.width,i.startSegmentIndex,i.startGraphemeIndex,i.endSegmentIndex,i.endGraphemeIndex)}function Pi(e,t,i){const n=[];if(e.widths.length===0)return{lineCount:0,height:0,lines:n};const r=Bi(e),s=Ci(e,t,l=>{n.push(Di(e,r,l))});return{lineCount:s,height:s*i,lines:n}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class X{constructor(t,i,n,r,s="div"){this.parent=t,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),X.nextNameID=X.nextNameID||0,this.$name.id=`lil-gui-name-${++X.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ri extends X{constructor(t,i,n){super(t,i,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function $t(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const zi={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:$t,toHexString:$t},ct={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},Hi={isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,i=1){const n=ct.fromHexString(e);t[0]=(n>>16&255)/255*i,t[1]=(n>>8&255)/255*i,t[2]=(n&255)/255*i},toHexString([e,t,i],n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return ct.toHexString(r)}},Vi={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){const n=ct.fromHexString(e);t.r=(n>>16&255)/255*i,t.g=(n>>8&255)/255*i,t.b=(n&255)/255*i},toHexString({r:e,g:t,b:i},n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return ct.toHexString(r)}},Ii=[zi,ct,Hi,Vi];function Xi(e){return Ii.find(t=>t.match(e))}class ji extends X{constructor(t,i,n,r){super(t,i,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Xi(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=$t(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class yt extends X{constructor(t,i,n){super(t,i,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Yi extends X{constructor(t,i,n,r,s,l){super(t,i,n,"lil-number"),this._initInput(),this.min(r),this.max(s);const c=l!==void 0;this.step(c?l:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let m=parseFloat(this.$input.value);isNaN(m)||(this._stepExplicit&&(m=this._snap(m)),this.setValue(this._clamp(m)))},n=m=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+m),this.$input.value=this.getValue())},r=m=>{m.key==="Enter"&&this.$input.blur(),m.code==="ArrowUp"&&(m.preventDefault(),n(this._step*this._arrowKeyMultiplier(m))),m.code==="ArrowDown"&&(m.preventDefault(),n(this._step*this._arrowKeyMultiplier(m)*-1))},s=m=>{this._inputFocused&&(m.preventDefault(),n(this._step*this._normalizeMouseWheel(m)))};let l=!1,c,u,o,a,d;const h=5,p=m=>{c=m.clientX,u=o=m.clientY,l=!0,a=this.getValue(),d=0,window.addEventListener("mousemove",S),window.addEventListener("mouseup",x)},S=m=>{if(l){const v=m.clientX-c,k=m.clientY-u;Math.abs(k)>h?(m.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>h&&x()}if(!l){const v=m.clientY-o;d-=v*this._step*this._arrowKeyMultiplier(m),a+d>this._max?d=this._max-a:a+d<this._min&&(d=this._min-a),this._snapClampSetValue(a+d)}o=m.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",x)},C=()=>{this._inputFocused=!0},A=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",C),this.$input.addEventListener("blur",A)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(A,m,v,k,F)=>(A-m)/(v-m)*(F-k)+k,i=A=>{const m=this.$slider.getBoundingClientRect();let v=t(A,m.left,m.right,this._min,this._max);this._snapClampSetValue(v)},n=A=>{this._setDraggingStyle(!0),i(A.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=A=>{i(A.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let l=!1,c,u;const o=A=>{A.preventDefault(),this._setDraggingStyle(!0),i(A.touches[0].clientX),l=!1},a=A=>{A.touches.length>1||(this._hasScrollBar?(c=A.touches[0].clientX,u=A.touches[0].clientY,l=!0):o(A),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=A=>{if(l){const m=A.touches[0].clientX-c,v=A.touches[0].clientY-u;Math.abs(m)>Math.abs(v)?o(A):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else A.preventDefault(),i(A.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),S=400;let x;const C=A=>{if(Math.abs(A.deltaX)<Math.abs(A.deltaY)&&this._hasScrollBar)return;A.preventDefault();const v=this._normalizeMouseWheel(A)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(p,S)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",a,{passive:!1}),this.$slider.addEventListener("wheel",C,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Gi extends X{constructor(t,i,n,r){super(t,i,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const n=document.createElement("option");n.textContent=i,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class Ui extends X{constructor(t,i,n){super(t,i,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Ki=`.lil-gui {
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
}`;function qi(e){const t=document.createElement("style");t.innerHTML=e;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let Zt=!1;class Rt{constructor({parent:t,autoPlace:i=t===void 0,container:n,width:r,title:s="Controls",closeFolders:l=!1,injectStyles:c=!0,touchStyles:u=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),u&&this.domElement.classList.add("lil-allow-touch-styles"),!Zt&&c&&(qi(Ki),Zt=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=l}add(t,i,n,r,s){if(Object(n)===n)return new Gi(this,t,i,n);const l=t[i];switch(typeof l){case"number":return new Yi(this,t,i,n,r,s);case"boolean":return new Ri(this,t,i);case"string":return new Ui(this,t,i);case"function":return new yt(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,l)}addColor(t,i,n=1){return new ji(this,t,i,n)}addFolder(t){const i=new Rt({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof yt||n._name in t.controllers&&n.load(t.controllers[n._name])}),i&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof yt)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const Ji=`To be, or not to be, that is the question:
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
Must give us pause.`,Et=20,zt='"Helvetica Neue", Helvetica, Arial, sans-serif',Ht=600,Qi=1.32,te=Ji.trim().split(/\s+/),Mt=222,Bt=28,Zi=140,ee=12,ie=.1,tn="https://github.com/jeantimex/ripples",de=document.querySelector("#app");if(!de)throw new Error("App root not found");const D=document.createElement("canvas"),P=document.createElement("div"),Vt=document.createElement("footer"),lt=document.createElement("a"),pe=D.getContext("2d");if(!pe)throw new Error("2D context is not available");const G=pe;P.className="text-layer";Vt.className="footer-bar";lt.className="footer-link";lt.href=tn;lt.target="_blank";lt.rel="noreferrer";lt.innerHTML=`
  <svg viewBox="0 0 24 24" aria-hidden="true" class="footer-link__icon">
    <path fill="currentColor" d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.52v-1.82c-2.95.64-3.57-1.25-3.57-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.48 1.15 3.08.88.1-.68.37-1.15.67-1.42-2.35-.27-4.82-1.18-4.82-5.23 0-1.15.4-2.08 1.08-2.82-.1-.27-.47-1.37.1-2.85 0 0 .88-.28 2.9 1.08a9.95 9.95 0 0 1 5.28 0c2.01-1.36 2.89-1.08 2.89-1.08.58 1.48.22 2.58.11 2.85.68.74 1.08 1.67 1.08 2.82 0 4.06-2.48 4.95-4.84 5.21.38.33.72.97.72 1.96v2.9c0 .29.19.63.73.52A10.5 10.5 0 0 0 12 1.5Z"/>
  </svg>
  <span>jeantimex</span>
`;de.replaceChildren(D,P,Vt);Vt.append(lt);const pt=1/60,en=1/20,nn=3,ne={mode:"text",dotSpacing:15,dotRadius:3,textCount:500,textSize:13,textSelectable:!1,fieldCellSize:18,rippleSpeed:.3,dropRadius:79,dropStrength:5.4,dragDropRadius:38,dragDropStrength:1.1,dragMinDistance:6,rippleForce:36300,springStrength:7,motionDamping:11};let J=0,st=0,ht=[],Z,kt=0,ft=0,dt=!1,rt=null,ot=0,at=0,Ct=null,se="";class fe{constructor(t,i,n){I(this,"width");I(this,"height");I(this,"cellSize");I(this,"columns",0);I(this,"rows",0);I(this,"heights",new Float32Array);I(this,"velocities",new Float32Array);I(this,"nextHeights",new Float32Array);I(this,"nextVelocities",new Float32Array);this.cellSize=n,this.width=t,this.height=i,this.resize(t,i)}resize(t,i){this.width=t,this.height=i,this.columns=Math.max(2,Math.ceil(t/this.cellSize)+1),this.rows=Math.max(2,Math.ceil(i/this.cellSize)+1);const n=this.columns*this.rows;this.heights=new Float32Array(n),this.velocities=new Float32Array(n),this.nextHeights=new Float32Array(n),this.nextVelocities=new Float32Array(n)}disturb(t,i,n,r){const s=Math.max(0,Math.floor((t-n)/this.cellSize)),l=Math.min(this.columns-1,Math.ceil((t+n)/this.cellSize)),c=Math.max(0,Math.floor((i-n)/this.cellSize)),u=Math.min(this.rows-1,Math.ceil((i+n)/this.cellSize));for(let o=c;o<=u;o+=1)for(let a=s;a<=l;a+=1){const d=a*this.cellSize,h=o*this.cellSize,p=Math.hypot(d-t,h-i);if(p>n)continue;const S=1-p/n,x=.5-Math.cos(S*Math.PI)*.5;this.heights[this.index(a,o)]+=x*r}}step(){for(let t=0;t<this.rows;t+=1)for(let i=0;i<this.columns;i+=1){const n=this.index(i,t),r=this.heights[n],s=(this.heightAt(i-1,t)+this.heightAt(i+1,t)+this.heightAt(i,t-1)+this.heightAt(i,t+1))*.25;let l=this.velocities[n];l+=(s-r)*f.rippleSpeed,l*=.995,this.nextVelocities[n]=l,this.nextHeights[n]=r+l}[this.heights,this.nextHeights]=[this.nextHeights,this.heights],[this.velocities,this.nextVelocities]=[this.nextVelocities,this.velocities]}gradientAt(t,i){const n=this.cellSize,r=this.sampleHeight(t-n,i),s=this.sampleHeight(t+n,i),l=this.sampleHeight(t,i-n),c=this.sampleHeight(t,i+n);return{x:(s-r)/(n*2),y:(c-l)/(n*2)}}sampleHeight(t,i){const n=nt(t,0,this.width),r=nt(i,0,this.height),s=n/this.cellSize,l=r/this.cellSize,c=Math.floor(s),u=Math.floor(l),o=Math.min(this.columns-1,c+1),a=Math.min(this.rows-1,u+1),d=s-c,h=l-u,p=this.heights[this.index(c,u)],S=this.heights[this.index(o,u)],x=this.heights[this.index(c,a)],C=this.heights[this.index(o,a)],A=Q(p,S,d),m=Q(x,C,d);return Q(A,m,h)}heightAt(t,i){const n=nt(Math.round(t),0,this.columns-1),r=nt(Math.round(i),0,this.rows-1);return this.heights[this.index(n,r)]}index(t,i){return i*this.columns+t}}function nt(e,t,i){return Math.min(Math.max(e,t),i)}function Q(e,t,i){return e+(t-e)*i}function ge(e,t,i){return t===e?0:(i-e)/(t-e)}function Ot(e){return e.kind==="word"}function sn(){return`${Ht} ${f.textSize}px ${zt}`}function It(){return Math.round(f.textSize*Qi)}function rn(){P.style.fontFamily=zt,P.style.fontWeight=String(Ht),P.style.fontSize=`${f.textSize}px`,P.style.lineHeight=`${It()}px`}function ln(){const e=Math.max(1,Math.round(f.textCount));return Array.from({length:e},(i,n)=>te[n%te.length]).join(" ")}function on(){const e=ln(),t=sn(),i=`${e}
${t}`;return(Ct===null||se!==i)&&(Ct=Mi(e,t),se=i),Ct}function re(e,t){e.domElement.style.display=t?"":"none"}function an(){P.replaceChildren()}function Xt(){P.style.display=f.mode==="text"?"block":"none",P.style.pointerEvents=f.mode==="text"?"auto":"none",P.style.userSelect=f.textSelectable?"text":"none",P.style.webkitUserSelect=f.textSelectable?"text":"none",D.style.pointerEvents=f.mode==="text"?"none":"auto";for(const e of ht)Ot(e)&&(e.element.style.userSelect=f.textSelectable?"text":"none",e.element.style.webkitUserSelect=f.textSelectable?"text":"none")}function me(e){const t=Math.hypot(e.vx,e.vy),i=nt(ge(0,Zi,t),0,1);return Math.round(Q(Mt,Bt,i))}function cn(e){const t=me(e),i=ge(Bt,Mt,t),r=Math.round(nt(i,0,1)*(ee-1))/(ee-1);return Math.round(Q(Bt,Mt,r))}function tt(){Z=new fe(J||1,st||1,f.fieldCellSize),an(),ht=f.mode==="text"?bn(J):An(J,st),Xt(),ft=0,Gt()}const f={...ne,reset:()=>{Object.assign(f,ne),xe(),Yt(),tt()}},T=new Rt({title:"Ripples"}),hn=T.add(f,"mode",["dot","text"]).name("mode"),jt=T.addFolder("Dot Settings"),At=T.addFolder("Text Settings"),un=jt.add(f,"dotSpacing",12,60,1).name("dot spacing"),dn=jt.add(f,"dotRadius",1,6,.1).name("dot radius"),pn=At.add(f,"textCount",20,800,1).name("text count"),fn=At.add(f,"textSize",10,96,1).name("text size"),gn=At.add(f,"textSelectable").name("text selectable"),mn=T.add(f,"fieldCellSize",8,40,1).name("field cell");T.add(f,"rippleSpeed",.1,4,.1).name("ripple speed");T.add(f,"dropRadius",40,320,1).name("click radius");T.add(f,"dropStrength",1,30,.1).name("click strength");T.add(f,"dragDropRadius",20,220,1).name("drag radius");T.add(f,"dragDropStrength",.1,10,.1).name("drag strength");T.add(f,"dragMinDistance",2,40,1).name("drag spacing");T.add(f,"rippleForce",1e3,8e4,100).name("ripple force");T.add(f,"springStrength",1,60,.5).name("spring");T.add(f,"motionDamping",1,30,.5).name("damping");T.add(f,"reset").name("reset");const xn=T.controllers;T.close();function xe(){for(const e of xn)e.updateDisplay()}function Yt(){re(jt,f.mode==="dot"),re(At,f.mode==="text")}function Ln(e){f.mode=e,xe(),Yt(),Xt(),tt()}hn.onFinishChange(e=>{Ln(e)});un.onFinishChange(()=>{f.mode==="dot"&&tt()});mn.onFinishChange(tt);dn.onChange(Gt);pn.onFinishChange(()=>{f.mode==="text"&&tt()});fn.onFinishChange(()=>{f.mode==="text"&&tt()});gn.onChange(()=>{Xt()});Yt();Z=new fe(1,1,f.fieldCellSize);function An(e,t){const i=[],n=e%f.dotSpacing*.5,r=t%f.dotSpacing*.5;for(let s=r;s<=t;s+=f.dotSpacing)for(let l=n;l<=e;l+=f.dotSpacing)i.push({kind:"dot",originX:l,originY:s,x:l,y:s,vx:0,vy:0});return i}function wn(e,t,i){const n=[];for(let r=t;r<i;r+=1)n.push({text:e.segments[r]??"",width:e.widths[r]??0});return n}function bn(e){const t=Math.max(120,e-Et*2),i=It(),n=on(),r=Pi(n,t,i),s=[];rn();for(let l=0;l<r.lines.length;l+=1){const c=r.lines[l],u=Et+l*i;let o=Et;const a=wn(n,c.start.segmentIndex,c.end.segmentIndex);for(const d of a){if(d.text.trim().length===0){o+=d.width;continue}s.push({kind:"word",text:d.text,width:d.width,height:i,element:vn(d.text),renderedX:Number.NaN,renderedY:Number.NaN,renderedTone:Number.NaN,originX:o,originY:u,x:o,y:u,vx:0,vy:0}),o+=d.width}}return s}function vn(e){const t=document.createElement("span");return t.className="text-word",t.textContent=e,t.style.fontFamily=zt,t.style.fontWeight=String(Ht),t.style.fontSize=`${f.textSize}px`,t.style.lineHeight=`${It()}px`,t.style.userSelect=f.textSelectable?"text":"none",t.style.webkitUserSelect=f.textSelectable?"text":"none",P.append(t),t}function Le(){J=window.innerWidth,st=window.innerHeight;const e=window.devicePixelRatio||1;D.width=Math.round(J*e),D.height=Math.round(st*e),D.style.width=`${J}px`,D.style.height=`${st}px`,G.setTransform(e,0,0,e,0,0),tt()}function Sn(e){for(const t of ht){const i=Ot(t)?t.x+t.width*.5:t.x,n=Ot(t)?t.y+t.height*.5:t.y,r=Z.gradientAt(i,n),s=-r.x*f.rippleForce,l=-r.y*f.rippleForce,c=(t.originX-t.x)*f.springStrength,u=(t.originY-t.y)*f.springStrength,o=-t.vx*f.motionDamping,a=-t.vy*f.motionDamping,d=s+c+o,h=l+u+a;t.vx+=d*e,t.vy+=h*e,t.x+=t.vx*e,t.y+=t.vy*e}}function yn(e){ft+=Math.min(e,en);let t=0;for(;ft>=pt&&t<nn;)Z.step(),Sn(pt),ft-=pt,t+=1}function Gt(){if(G.clearRect(0,0,J,st),G.fillStyle="#111",f.mode==="text"){for(const e of ht)if(e.kind==="word"){const t=cn(e);(!Number.isFinite(e.renderedX)||!Number.isFinite(e.renderedY)||Math.abs(e.x-e.renderedX)>ie||Math.abs(e.y-e.renderedY)>ie)&&(e.element.style.transform=`translate3d(${e.x}px, ${e.y}px, 0)`,e.renderedX=e.x,e.renderedY=e.y),t!==e.renderedTone&&(e.element.style.color=`rgb(${t}, ${t}, ${t})`,e.renderedTone=t)}return}for(const e of ht){const t=me(e);G.fillStyle=`rgb(${t}, ${t}, ${t})`,G.beginPath(),G.arc(e.x,e.y,f.dotRadius,0,Math.PI*2),G.fill()}}function Ae(e){const t=kt===0?pt:(e-kt)/1e3;kt=e,yn(t),Gt(),window.requestAnimationFrame(Ae)}function we(e,t){const i=Math.hypot(e-ot,t-at);if(i<f.dragMinDistance)return;const n=Math.max(1,Math.ceil(i/f.dragMinDistance));for(let r=1;r<=n;r+=1){const s=r/n;Z.disturb(Q(ot,e,s),Q(at,t,s),f.dragDropRadius,f.dragDropStrength)}ot=e,at=t}function En(e){f.mode==="text"&&(dt=!0,rt=e.pointerId,ot=e.clientX,at=e.clientY,Z.disturb(e.clientX,e.clientY,f.dropRadius,f.dropStrength))}function kn(e){f.mode==="text"&&(!dt||e.pointerId!==rt||e.buttons===0||we(e.clientX,e.clientY))}D.addEventListener("pointerdown",e=>{f.mode!=="text"&&(dt=!0,rt=e.pointerId,ot=e.clientX,at=e.clientY,D.setPointerCapture(e.pointerId),Z.disturb(e.clientX,e.clientY,f.dropRadius,f.dropStrength))});D.addEventListener("pointermove",e=>{f.mode!=="text"&&(!dt||e.pointerId!==rt||we(e.clientX,e.clientY))});function wt(e){e.pointerId===rt&&(dt=!1,rt=null,D.hasPointerCapture(e.pointerId)&&D.releasePointerCapture(e.pointerId))}D.addEventListener("pointerup",wt);D.addEventListener("pointercancel",wt);P.addEventListener("pointerdown",En);P.addEventListener("pointermove",kn);window.addEventListener("pointerup",wt);window.addEventListener("pointercancel",wt);window.addEventListener("resize",Le);Le();window.requestAnimationFrame(Ae);
