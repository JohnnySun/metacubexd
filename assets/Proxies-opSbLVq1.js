import{c as e,H as me,i as t,A as x,F as U,b as $,d as h,at as $e,au as se,S as B,t as A,g as z,D as fe,h as re,q as xe,Y as be,a4 as pe,k as _e,av as le,M as we,Q as ie,e as ye}from"./vendor-gBgDaLGg.js";import{u as W,J as Ce,K as Pe,N as Se,O as Te,P as Le,Q as Ee,R as Ie,S as Ne,U as De,V as R,W as Me,X as ke,Y as Oe,Z as Ae,_ as K,$ as ge,a0 as Z,a1 as V,M as Ue,a2 as N,a3 as ve,a4 as G,B as Y,a5 as Fe,a6 as ae,a7 as ce,a8 as oe}from"./index-vT02hrIo.js";import{f as je}from"./global-ArFRIu8s.js";import{C as O}from"./ConfigTitle-UySuXleQ.js";const Be=h('<div class="flex flex-col gap-4"><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><input type=number class="input input-bordered w-full"></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><select class="select select-bordered w-full"></select></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><select class="select select-bordered w-full">'),Re=h('<option class="flex items-center gap-2">'),He=h("<option>"),Ye=r=>{const[s]=W();return e(Ue,{ref:n=>{var i;return(i=r.ref)==null?void 0:i.call(r,n)},get icon(){return e(me,{size:24})},get title(){return s("proxiesSettings")},get children(){const n=Be(),i=n.firstChild,o=i.firstChild,d=o.firstChild,m=i.nextSibling,y=m.firstChild,u=m.nextSibling,D=u.firstChild,f=u.nextSibling,S=f.firstChild,b=f.nextSibling,C=b.firstChild,g=b.nextSibling,T=g.firstChild,L=T.firstChild,P=g.nextSibling,M=P.firstChild,Q=M.firstChild,X=P.nextSibling,j=X.firstChild;return t(i,e(O,{withDivider:!0,get children(){return s("autoCloseConns")}}),o),d.addEventListener("change",c=>Ce(c.target.checked)),t(m,e(O,{withDivider:!0,get children(){return s("urlForLatencyTest")}}),y),y.addEventListener("change",c=>Pe(c.target.value)),t(u,e(O,{withDivider:!0,get children(){return[x(()=>s("latencyTestTimeoutDuration"))," (",x(()=>s("ms")),")"]}}),D),D.addEventListener("change",c=>Se(Number(c.target.value))),t(f,e(O,{withDivider:!0,get children(){return s("urlForIPv6SupportTest")}}),S),S.addEventListener("change",c=>{var p;return Te((p=c.target.value)==null?void 0:p.trim())}),t(b,e(O,{withDivider:!0,get children(){return s("proxiesSorting")}}),C),C.addEventListener("change",c=>Le(c.target.value)),t(C,e(U,{get each(){return Object.values(Ee)},children:c=>(()=>{const p=Re();return p.value=c,t(p,()=>s(c)),p})()})),t(g,e(O,{withDivider:!0,get children(){return s("hideUnAvailableProxies")}}),T),L.addEventListener("change",c=>Ie(c.target.checked)),t(P,e(O,{withDivider:!0,get children(){return s("renderInTwoColumns")}}),M),Q.addEventListener("change",c=>Ne(c.target.checked)),t(X,e(O,{withDivider:!0,get children(){return s("proxiesPreviewType")}}),j),j.addEventListener("change",c=>De(c.target.value)),t(j,e(U,{get each(){return Object.values(R)},children:c=>(()=>{const p=He();return p.value=c,t(p,()=>s(c)),p})()})),$(()=>d.checked=Me()),$(()=>y.value=ke()),$(()=>D.value=Oe()),$(()=>S.value=Ae()),$(()=>C.value=K()),$(()=>L.checked=ge()),$(()=>Q.checked=Z()),$(()=>j.value=V()),n}})},de=r=>{const s=()=>V()===R.OFF,n=x(()=>r.proxyNameList.length<=10),i=x(()=>{const d=V();return d===R.BAR||d===R.Auto&&!n()}),o=x(()=>{const d=V();return d===R.DOTS||d===R.Auto&&n()});return e(B,{get when(){return!s()},get children(){return e($e,{get children(){return[e(se,{get when(){return i()},get children(){return e(Xe,{get proxyNameList(){return r.proxyNameList},get now(){return r.now}})}}),e(se,{get when(){return o()},get children(){return e(qe,{get proxyNameList(){return r.proxyNameList},get now(){return r.now}})}})]}})}})},Qe=h('<div class="flex items-center gap-2 py-2"><div class="my-2 flex flex-1 items-center justify-center overflow-hidden rounded-2xl [&amp;>*]:h-2"><div class=bg-success></div><div class=bg-warning></div><div class=bg-error></div><div class=bg-neutral>'),Xe=r=>{const{latencyMap:s}=G(),n=x(()=>r.proxyNameList.map(u=>s()[u])),i=x(()=>n().length),o=x(()=>n().filter(u=>u>N().NOT_CONNECTED&&u<=N().MEDIUM).length),d=x(()=>n().filter(u=>u>N().MEDIUM&&u<=N().HIGH).length),m=x(()=>n().filter(u=>u>N().HIGH).length),y=x(()=>n().filter(u=>u===N().NOT_CONNECTED).length);return(()=>{const u=Qe(),D=u.firstChild,f=D.firstChild,S=f.nextSibling,b=S.nextSibling,C=b.nextSibling;return t(u,e(ve,{get name(){return r.now}}),null),$(g=>{const T=`${o()*100/i()}%`,L=`${d()*100/i()}%`,P=`${m()*100/i()}%`,M=`${y()*100/i()}%`;return T!==g._v$&&((g._v$=T)!=null?f.style.setProperty("width",T):f.style.removeProperty("width")),L!==g._v$2&&((g._v$2=L)!=null?S.style.setProperty("width",L):S.style.removeProperty("width")),P!==g._v$3&&((g._v$3=P)!=null?b.style.setProperty("width",P):b.style.removeProperty("width")),M!==g._v$4&&((g._v$4=M)!=null?C.style.setProperty("width",M):C.style.removeProperty("width")),g},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),u})()},ze=h("<div>"),Ve=h('<div class="flex items-center gap-2 py-2"><div class="flex flex-1 flex-wrap items-center gap-1">'),We=r=>{let s=r.selected?"bg-white border-4 border-success":"bg-success";return typeof r.latency!="number"||r.latency===N().NOT_CONNECTED?s=r.selected?"bg-white border-4 border-neutral":"bg-neutral":r.latency>N().HIGH?s=r.selected?"bg-white border-4 border-error":"bg-error":r.latency>N().MEDIUM&&(s=r.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{const n=ze();return $(i=>{const o=A("h-4 w-4 rounded-full",s),d=r.name;return o!==i._v$&&z(n,i._v$=o),d!==i._v$2&&fe(n,"title",i._v$2=d),i},{_v$:void 0,_v$2:void 0}),n})()},qe=r=>{const{latencyMap:s}=G();return(()=>{const n=Ve(),i=n.firstChild;return t(i,e(U,{get each(){return r.proxyNameList.map(o=>[o,s()[o]])},children:([o,d])=>{const m=r.now===o;return e(We,{name:o,latency:d,selected:m})}})),t(n,e(ve,{get name(){return r.now}}),null),n})()},Je=h("<progress class=progress max=100>"),Ke=h('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),Ze=h('<div class="text-sm text-slate-500">: '),Ge=r=>{const{Download:s=0,Upload:n=0,Total:i=0,Expire:o=0}=r,d=re(i,{units:"iec"}),m=re(s+n,{units:"iec"}),y=xe.toFinite(((s+n)/i*100).toFixed(2));return{total:d,used:m,percentage:y,expirePrefix:()=>{const[f]=W();return f("expire")},expireStr:()=>{const[f]=W();return o===0?f("noExpire"):be(o*1e3).format("YYYY-MM-DD")}}},et=r=>{if(!r.subscriptionInfo)return;const s=Ge(r.subscriptionInfo);return[(()=>{const n=Je();return $(()=>n.value=s.percentage),n})(),(()=>{const n=Ke(),i=n.firstChild,o=i.nextSibling,d=o.nextSibling,m=d.nextSibling;return m.nextSibling,t(n,()=>`${s.used}`,i),t(n,()=>`${s.total}`,o),t(n,()=>s.percentage,m),n})(),(()=>{const n=Ze(),i=n.firstChild;return t(n,()=>s.expirePrefix(),i),t(n,()=>s.expireStr(),null),n})()]},ue=h("<div>"),tt=h('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class=ml-auto></div></div><div class="flex-1 overflow-y-auto">'),nt=h('<button><span></span><div class="badge badge-sm">'),st=h('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm">'),rt=h('<div class="text-sm text-slate-500"> '),lt=h('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm"></div></div><div class="flex items-center gap-2">'),it=h('<div class="text-sm text-slate-500"> :: <!> '),ut=()=>{let r;const[s]=W(),{fetchProxies:n,proxies:i,selectProxyInGroup:o,latencyMap:d,proxyGroupNames:m,proxyProviders:y,updateProviderByProviderName:u,updateAllProvider:D,proxyGroupLatencyTest:f,proxyProviderLatencyTest:S,collapsedMap:b,setCollapsedMap:C,proxyGroupLatencyTestingMap:g,proxyProviderLatencyTestingMap:T,isAllProviderUpdating:L,updatingMap:P}=G();pe(n);const M=async(_,E)=>{_.stopPropagation(),f(E)},Q=(_,E)=>{_.stopPropagation(),S(E)},X=(_,E)=>{_.stopPropagation(),u(E)},j=async _=>{_.stopPropagation(),D()},[c,p]=_e("proxies"),he=()=>[{type:"proxies",name:s("proxies"),count:i().length},{type:"proxyProviders",name:s("proxyProviders"),count:y().length}];return(()=>{const _=tt(),E=_.firstChild,ee=E.firstChild,te=ee.nextSibling,ne=E.nextSibling;return t(ee,e(U,{get each(){return he()},children:v=>(()=>{const l=nt(),k=l.firstChild,H=k.nextSibling;return l.$$click=()=>p(v.type),t(k,()=>v.name),t(H,()=>v.count),$(()=>z(l,A(c()===v.type&&"tab-active","tab tab-sm gap-2 px-2 sm:tab-md"))),l})()})),t(E,e(B,{get when(){return c()==="proxyProviders"},get children(){return e(Y,{class:"btn btn-circle btn-sm",get disabled(){return L()},onClick:v=>j(v),get icon(){return e(le,{get class(){return A(L()&&"animate-spin text-success")}})}})}}),te),t(te,e(Y,{class:"btn-circle btn-sm sm:btn-md",onClick:()=>r==null?void 0:r.showModal(),get icon(){return e(we,{})}})),t(ne,e(B,{get when(){return c()==="proxies"},get children(){const v=ue();return t(v,e(U,{get each(){return i()},children:l=>{const k=x(()=>Fe(ae(l.all??[],d(),K(),m()),d(),m(),ge())),H=[(()=>{const a=st(),I=a.firstChild,w=I.firstChild,q=w.nextSibling;return t(w,()=>l.name),t(q,()=>{var F;return(F=l.all)==null?void 0:F.length}),t(a,e(Y,{class:"btn-circle btn-sm",get disabled(){return g()[l.name]},onClick:F=>M(F,l.name),get icon(){return e(ie,{get class(){return A(g()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),(()=>{const a=rt(),I=a.firstChild;return t(a,()=>l.type,I),t(a,()=>{var w;return((w=l.now)==null?void 0:w.length)>0&&` :: ${l.now}`},null),a})(),e(B,{get when(){return!b()[l.name]},get children(){return e(de,{get proxyNameList(){return k()},get now(){return l.now}})}})];return e(ce,{get isOpen(){return b()[l.name]},title:H,onCollapse:a=>C(l.name,a),get children(){return e(U,{get each(){return k()},children:a=>e(oe,{proxyName:a,get isSelected(){return l.now===a},onClick:()=>void o(l,a)})})}})}})),$(()=>z(v,A("grid grid-cols-1 place-items-start gap-2",Z()?"sm:grid-cols-2":"sm:grid-cols-1"))),v}}),null),t(ne,e(B,{get when(){return c()==="proxyProviders"},get children(){const v=ue();return t(v,e(U,{get each(){return y()},children:l=>{const k=x(()=>ae(l.proxies.map(a=>a.name)??[],d(),K(),void 0)),H=[(()=>{const a=lt(),I=a.firstChild,w=I.firstChild,q=w.nextSibling,F=I.nextSibling;return t(w,()=>l.name),t(q,()=>l.proxies.length),t(F,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return P()[l.name]},onClick:J=>X(J,l.name),get icon(){return e(le,{get class(){return A(P()[l.name]&&"animate-spin text-success")}})}}),null),t(F,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return T()[l.name]},onClick:J=>Q(J,l.name),get icon(){return e(ie,{get class(){return A(T()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),e(et,{get subscriptionInfo(){return l.subscriptionInfo}}),(()=>{const a=it(),I=a.firstChild,w=I.nextSibling;return w.nextSibling,t(a,()=>l.vehicleType,I),t(a,()=>s("updated"),w),t(a,()=>je(l.updatedAt),null),a})(),e(B,{get when(){return!b()[l.name]},get children(){return e(de,{get proxyNameList(){return k()}})}})];return e(ce,{get isOpen(){return b()[l.name]},title:H,onCollapse:a=>C(l.name,a),get children(){return e(U,{get each(){return k()},children:a=>e(oe,{proxyName:a})})}})}})),$(()=>z(v,A("grid grid-cols-1 place-items-start gap-2",Z()?"sm:grid-cols-2":"sm:grid-cols-1"))),v}}),null),t(_,e(Ye,{ref:v=>r=v}),null),_})()};ye(["click"]);export{ut as default};
