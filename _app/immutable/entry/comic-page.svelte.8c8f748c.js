import{S as Z,i as x,s as ee,L as te,e as Y,b as N,M as ae,E as w,h as r,k as o,q as u,l as d,m as p,r as v,p as se,D as s,a as I,c as D,n as i,C as ne}from"../chunks/index.01f78f7a.js";function le(l){let e,t=l[3].message+"",a;return{c(){e=o("p"),a=u(t),this.h()},l(n){e=d(n,"P",{style:!0});var c=p(e);a=v(c,t),c.forEach(r),this.h()},h(){se(e,"color","red")},m(n,c){N(n,e,c),s(e,a)},p:w,d(n){n&&r(e)}}}function re(l){let e,t,a,n,c,E,L,B,h,G=l[2].title+"",M,V,m,k,$,q,f,O=new Date(parseInt(l[2].year),parseInt(l[2].month)-1,parseInt(l[2].day)).toLocaleDateString()+"",j,z,b,y,R,T,g,F=l[2].alt+"",U;return{c(){e=o("div"),t=o("img"),n=I(),c=o("div"),E=o("span"),L=u("Title of comic:"),B=I(),h=o("span"),M=u(G),V=I(),m=o("div"),k=o("span"),$=u("Date of publication:"),q=I(),f=o("span"),j=u(O),z=I(),b=o("div"),y=o("span"),R=u("Comic alt:"),T=I(),g=o("span"),U=u(F),this.h()},l(P){e=d(P,"DIV",{id:!0,class:!0});var _=p(e);t=d(_,"IMG",{id:!0,src:!0}),n=D(_),c=d(_,"DIV",{});var C=p(c);E=d(C,"SPAN",{class:!0});var H=p(E);L=v(H,"Title of comic:"),H.forEach(r),B=D(C),h=d(C,"SPAN",{class:!0,id:!0});var J=p(h);M=v(J,G),J.forEach(r),C.forEach(r),V=D(_),m=d(_,"DIV",{});var S=p(m);k=d(S,"SPAN",{class:!0});var K=p(k);$=v(K,"Date of publication:"),K.forEach(r),q=D(S),f=d(S,"SPAN",{class:!0,id:!0});var Q=p(f);j=v(Q,O),Q.forEach(r),S.forEach(r),z=D(_),b=d(_,"DIV",{});var A=p(b);y=d(A,"SPAN",{class:!0});var W=p(y);R=v(W,"Comic alt:"),W.forEach(r),T=D(A),g=d(A,"SPAN",{class:!0,id:!0});var X=p(g);U=v(X,F),X.forEach(r),A.forEach(r),_.forEach(r),this.h()},h(){i(t,"id","img"),ne(t.src,a=l[2].img)||i(t,"src",a),i(E,"class","span-title svelte-6dr3dv"),i(h,"class","span-content svelte-6dr3dv"),i(h,"id","comic_title"),i(k,"class","span-title svelte-6dr3dv"),i(f,"class","span-content svelte-6dr3dv"),i(f,"id","date_content"),i(y,"class","span-title svelte-6dr3dv"),i(g,"class","span-content svelte-6dr3dv"),i(g,"id","img_alt_content"),i(e,"id","comic"),i(e,"class","svelte-6dr3dv")},m(P,_){N(P,e,_),s(e,t),s(e,n),s(e,c),s(c,E),s(E,L),s(c,B),s(c,h),s(h,M),s(e,V),s(e,m),s(m,k),s(k,$),s(m,q),s(m,f),s(f,j),s(e,z),s(e,b),s(b,y),s(y,R),s(b,T),s(b,g),s(g,U)},p:w,d(P){P&&r(e)}}}function ce(l){let e,t;return{c(){e=o("p"),t=u("Processing...")},l(a){e=d(a,"P",{});var n=p(e);t=v(n,"Processing..."),n.forEach(r)},m(a,n){N(a,e,n),s(e,t)},p:w,d(a){a&&r(e)}}}function ie(l){let e,t={ctx:l,current:null,token:null,hasCatch:!0,pending:ce,then:re,catch:le,value:2,error:3};return te(l[0](),t),{c(){e=Y(),t.block.c()},l(a){e=Y(),t.block.l(a)},m(a,n){N(a,e,n),t.block.m(a,t.anchor=n),t.mount=()=>e.parentNode,t.anchor=e},p(a,[n]){l=a,ae(t,l,n)},i:w,o:w,d(a){a&&r(e),t.block.d(a),t.token=null,t=null}}}const oe="i.mirzazhanov@innopolis.university",de="https://fwd.innopolis.app/api/hw2",pe="https://getxkcd.vercel.app/api/comic";function _e(l){const e=async()=>await(await fetch(de+`?email=${oe}`)).json();return[async()=>{let a=await e();return await(await fetch(pe+`?num=${a}`)).json()}]}class ve extends Z{constructor(e){super(),x(this,e,_e,ie,ee,{})}}export{ve as default};
