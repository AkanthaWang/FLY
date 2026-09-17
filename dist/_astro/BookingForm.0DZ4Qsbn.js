import{r as d}from"./index.-iFofLld.js";var p={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function v(){if(x)return m;x=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(i,n,a){var r=null;if(a!==void 0&&(r=""+a),n.key!==void 0&&(r=""+n.key),"key"in n){a={};for(var l in n)l!=="key"&&(a[l]=n[l])}else a=n;return n=a.ref,{$$typeof:t,type:i,key:r,ref:n!==void 0?n:null,props:a}}return m.Fragment=s,m.jsx=o,m.jsxs=o,m}var b;function y(){return b||(b=1,p.exports=v()),p.exports}var e=y();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=(...t)=>t.filter((s,o,i)=>!!s&&s.trim()!==""&&i.indexOf(s)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=d.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:n="",children:a,iconNode:r,...l},c)=>d.createElement("svg",{ref:c,...w,width:s,height:s,stroke:t,strokeWidth:i?Number(o)*24/Number(s):o,className:g("lucide",n),...l},[...r.map(([k,f])=>d.createElement(k,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(t,s)=>{const o=d.forwardRef(({className:i,...n},a)=>d.createElement(N,{ref:a,iconNode:s,className:g(`lucide-${j(t)}`,i),...n}));return o.displayName=`${t}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=u("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=u("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=u("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),h={name:"",email:"",studentAge:"",experience:"",availability:"",message:""},A="hello@flytothemoon.studio";function $(){const[t,s]=d.useState(h),[o,i]=d.useState(!1),n=(r,l)=>{s(c=>({...c,[r]:l}))},a=r=>{r.preventDefault();const l=encodeURIComponent(`Trial lesson inquiry from ${t.name}`),c=encodeURIComponent([`Name: ${t.name}`,`Email: ${t.email}`,`Student age: ${t.studentAge||"Not provided"}`,`Experience: ${t.experience||"Not provided"}`,`Availability: ${t.availability||"Not provided"}`,"",t.message].join(`
`));window.location.href=`mailto:${A}?subject=${l}&body=${c}`,i(!0)};return o?e.jsxs("div",{className:"flex min-h-[360px] flex-col items-start justify-center border border-ink/15 bg-white/70 p-8 sm:p-10",children:[e.jsx("span",{className:"mb-7 grid h-12 w-12 place-items-center rounded-full bg-sage text-white","aria-hidden":"true",children:e.jsx(R,{size:22,strokeWidth:1.7})}),e.jsx("p",{className:"eyebrow mb-4 text-brass",children:"Your note is ready"}),e.jsx("h3",{className:"font-display text-4xl leading-none text-ink",children:"Let's start a conversation."}),e.jsx("p",{className:"mt-5 max-w-sm text-sm leading-7 text-ink/65",children:"Your email app should have opened with the details filled in. Send it when you're ready, and Anna will be in touch within two business days."}),e.jsxs("button",{type:"button",onClick:()=>{s(h),i(!1)},className:"mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-brass hover:text-brass",children:["Send another note ",e.jsx(C,{size:14})]})]}):e.jsxs("form",{onSubmit:a,className:"border border-ink/15 bg-white/70 p-6 sm:p-8",children:[e.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[e.jsxs("label",{className:"grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70",children:["Your name ",e.jsx("input",{required:!0,value:t.name,onChange:r=>n("name",r.target.value),placeholder:"First and last name",className:"border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass"})]}),e.jsxs("label",{className:"grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70",children:["Email ",e.jsx("input",{required:!0,type:"email",value:t.email,onChange:r=>n("email",r.target.value),placeholder:"you@example.com",className:"border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass"})]}),e.jsxs("label",{className:"grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70",children:["Student age ",e.jsx("input",{value:t.studentAge,onChange:r=>n("studentAge",r.target.value),placeholder:"e.g. 8 or adult",className:"border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass"})]}),e.jsxs("label",{className:"grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70",children:["Experience ",e.jsxs("select",{value:t.experience,onChange:r=>n("experience",r.target.value),className:"border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal tracking-normal text-ink outline-none focus:border-brass",children:[e.jsx("option",{value:"",children:"Choose one"}),e.jsx("option",{children:"Brand new to piano"}),e.jsx("option",{children:"Some experience"}),e.jsx("option",{children:"Intermediate"}),e.jsx("option",{children:"Advanced"})]})]})]}),e.jsxs("label",{className:"mt-5 grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70",children:["Preferred days and times ",e.jsx("input",{value:t.availability,onChange:r=>n("availability",r.target.value),placeholder:"e.g. weekday afternoons",className:"border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass"})]}),e.jsxs("label",{className:"mt-5 grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70",children:["Tell us a little more ",e.jsx("textarea",{rows:3,value:t.message,onChange:r=>n("message",r.target.value),placeholder:"What would you love to explore at the piano?",className:"resize-none border-b border-ink/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-ink outline-none placeholder:text-ink/35 focus:border-brass"})]}),e.jsxs("button",{type:"submit",className:"mt-7 inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brass sm:w-auto",children:["Prepare my inquiry ",e.jsx(E,{size:15,strokeWidth:1.8})]}),e.jsx("p",{className:"mt-4 text-xs leading-5 text-ink/45",children:"This opens your email app with the inquiry ready to send. Replace with Calendly or a form provider before launch."})]})}export{$ as default};
