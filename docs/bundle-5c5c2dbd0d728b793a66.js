(()=>{"use strict";const e=JSON.parse('{"l":[{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"1","name":"Default","icon":"person-workspace","color":"red"},{"id":"2","name":"Personal","icon":"person","color":"green"}]}').l;class t{constructor(e){this._handlers=[],this.name=e}raise=e=>this._handlers.forEach((t=>t(e)));addHandler=e=>this._handlers.push(e);removeHandler(e){const t=this._handlers;t.forEach((n=>{n===e&&t.splice(t.indexOf(n),1)}))}}const n=function(){const e=[],n=n=>{let o=e.filter((e=>e.name===n))[0];return o||(o=new t(n),e.push(o)),o};return{subscribe:(e,t)=>n(e).addHandler(t),publish:(e,t)=>n(e).raise(t),unsubscribe:(e,t)=>n(e).removeHandler(t)}}(),o={select:(e,t)=>(t||document).querySelector(e),selectAll:(e,t)=>(t||document).querySelectorAll(e),createElements:(...e)=>{const t=[];return e.forEach((e=>{const n=document.createElement(e);t.push(n)})),1==t.length?t[0]:t},createElementsByClassName(...e){const t=[];return e.forEach((e=>{const n=e.length>1&&e[1]?e[1]:"div",r=o.createElements(n);r.className=e[0],t.push(r)})),1==t.length?t[0]:t},addAttribute:(e,...t)=>{t.forEach((t=>{t[0].setAttribute(e,t[1])}))},addAttributes:(e,t)=>{for(const n in t)e.setAttribute(n,t[n])},bulkAppend(e,...t){t&&t.forEach((t=>{if(e.appendChild(t[0]),t[1]){const[e]=t.splice(0,1);this.bulkAppend(e,...t)}}))},textNode(e,t,n){const o=this.createElements(t);if(o.textContent=e,n&&n.appendChild(o),!n)return o},bsIcon(e,t){const n=this.createElements("i");return n.className=`bi bi-${e}`,t?t.appendChild(n):n}},r=o,a=e=>{const t=/header/i.test(e)?"header":/footer/i.test(e)?"footer":"div",[n,o,a,s]=r.createElementsByClassName([e,t],["left"],["center"],["right"]);return r.bulkAppend(n,[o],[a],[s]),n};function s(e){const[t,n,o,a,s]=r.createElementsByClassName(["list-item","li"],["row"],["icon"],["count"],["title"]);return t.setAttribute("data-id",e.id),r.bsIcon(e.icon,o),r.textNode(e.name,"span",s),r.textNode(0,"span",a),r.bulkAppend(t,[n,[o],[s],[a]]),t}n.subscribe("initialize",(()=>{const e=r.select("#container"),t=r.select("title").textContent,[o,s,c]=r.createElementsByClassName(["title-header","header"],["app"],["content"]),l=a("app-header"),i=a("app-footer");r.textNode(t,"h1",o),e.innerHTML="",r.bulkAppend(e,[o],[s,[l],[c],[i]]),n.publish("ready")}));const c=(e=>{const t=[];return[{id:"today",name:"Today",icon:"calendar-event",color:"blue"},{id:"scheduled",name:"Scheduled",icon:"calendar3",color:"red"},{id:"all",name:"All",icon:"inbox",color:"gray"}].forEach((e=>{const n=s(e),o=r.select(".title",n),a=r.createElementsByClassName(["row"]);n.classList.add(e.name.toLowerCase()),a.appendChild(o),n.appendChild(a),t.push(n)})),t})();function l(t=1,n){const o=r.createElements("ul");1===t?o.append(...c):2===t&&e.forEach((e=>{o.append(s(e))})),n.appendChild(o)}n.subscribe("ready",(()=>{const e=r.select(".content"),t=function(){const[e,t,n,o]=r.createElementsByClassName(["sidebar"],["lists"],["filtered-lists","section"],["all-lists","section"]);r.textNode("My Lists","h3",o),l(1,n),l(2,o);const a=function(){const[e,t,n,o,a,s,c,l]=r.createElementsByClassName(["profile","footer"],["row"],["avatar"],["img","img"],["info"],["name"],["email"],["setting-gear"]);return r.addAttributes(o,{src:"https://avatars0.githubusercontent.com/u/1209898?s=460&v=4",alt:"avatar"}),r.textNode("Shahzar Mazhar","span",s),r.textNode("mohdshahzar.1996@gmail.com","span",c),r.bsIcon("sliders2",l),r.bulkAppend(e,[t,[n,[o]],[a,[s],[c]],[l]]),e}();return r.bulkAppend(e,[t,[n],[o]],[a]),e}();console.log("ready"),r.bulkAppend(e,[t])})),n.publish("initialize")})();