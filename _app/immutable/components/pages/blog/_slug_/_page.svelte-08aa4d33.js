import{S as W,i as X,s as Y,w as U,k as v,a as I,q as S,x as V,L as Z,l as $,h as m,c as L,m as E,r as q,y as x,n as z,F as u,b as C,z as j,u as T,t as G,d as ee,f as J,A as K,M as te,g as le}from"../../../../chunks/index-bc926077.js";function N(f,l,a){const r=f.slice();return r[1]=l[a],r}function O(f){let l,a,r,_,i,s=f[0].categories,t=[];for(let e=0;e<s.length;e+=1)t[e]=Q(N(f,s,e));return{c(){l=v("aside"),a=v("h3"),r=S("Posted in:"),_=I(),i=v("ul");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){l=$(e,"ASIDE",{});var h=E(l);a=$(h,"H3",{});var n=E(a);r=q(n,"Posted in:"),n.forEach(m),_=L(h),i=$(h,"UL",{});var g=E(i);for(let k=0;k<t.length;k+=1)t[k].l(g);g.forEach(m),h.forEach(m)},m(e,h){C(e,l,h),u(l,a),u(a,r),u(l,_),u(l,i);for(let n=0;n<t.length;n+=1)t[n].m(i,null)},p(e,h){if(h&1){s=e[0].categories;let n;for(n=0;n<s.length;n+=1){const g=N(e,s,n);t[n]?t[n].p(g,h):(t[n]=Q(g),t[n].c(),t[n].m(i,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(e){e&&m(l),te(t,e)}}}function Q(f){let l,a,r=f[1]+"",_,i,s;return{c(){l=v("li"),a=v("a"),_=S(r),s=I(),this.h()},l(t){l=$(t,"LI",{});var e=E(l);a=$(e,"A",{href:!0});var h=E(a);_=q(h,r),h.forEach(m),s=L(e),e.forEach(m),this.h()},h(){z(a,"href",i="/blog/category/"+f[1])},m(t,e){C(t,l,e),u(l,a),u(a,_),u(l,s)},p(t,e){e&1&&r!==(r=t[1]+"")&&T(_,r),e&1&&i!==(i="/blog/category/"+t[1])&&z(a,"href",i)},d(t){t&&m(l)}}}function ae(f){let l,a,r,_,i,s,t,e=f[0].title+"",h,n,g,k,y=f[0].date+"",B,D,c,H,b;document.title=l="Blog - "+f[0].title;var A=f[0].content;function F(o){return{}}A&&(c=U(A,F()));let d=f[0].categories&&O(f);return{c(){a=v("meta"),_=I(),i=v("div"),s=v("article"),t=v("h1"),h=S(e),n=I(),g=v("p"),k=S("Published: "),B=S(y),D=I(),c&&V(c.$$.fragment),H=I(),d&&d.c(),this.h()},l(o){const p=Z("svelte-z0xtv8",document.head);a=$(p,"META",{property:!0,content:!0}),p.forEach(m),_=L(o),i=$(o,"DIV",{});var P=E(i);s=$(P,"ARTICLE",{});var w=E(s);t=$(w,"H1",{});var R=E(t);h=q(R,e),R.forEach(m),n=L(w),g=$(w,"P",{});var M=E(g);k=q(M,"Published: "),B=q(M,y),M.forEach(m),D=L(w),c&&x(c.$$.fragment,w),w.forEach(m),H=L(P),d&&d.l(P),P.forEach(m),this.h()},h(){z(a,"property","og:title"),z(a,"content",r=f[0].title)},m(o,p){u(document.head,a),C(o,_,p),C(o,i,p),u(i,s),u(s,t),u(t,h),u(s,n),u(s,g),u(g,k),u(g,B),u(s,D),c&&j(c,s,null),u(i,H),d&&d.m(i,null),b=!0},p(o,[p]){if((!b||p&1)&&l!==(l="Blog - "+o[0].title)&&(document.title=l),(!b||p&1&&r!==(r=o[0].title))&&z(a,"content",r),(!b||p&1)&&e!==(e=o[0].title+"")&&T(h,e),(!b||p&1)&&y!==(y=o[0].date+"")&&T(B,y),A!==(A=o[0].content)){if(c){le();const P=c;G(P.$$.fragment,1,0,()=>{K(P,1)}),ee()}A?(c=U(A,F()),V(c.$$.fragment),J(c.$$.fragment,1),j(c,s,null)):c=null}o[0].categories?d?d.p(o,p):(d=O(o),d.c(),d.m(i,null)):d&&(d.d(1),d=null)},i(o){b||(c&&J(c.$$.fragment,o),b=!0)},o(o){c&&G(c.$$.fragment,o),b=!1},d(o){m(a),o&&m(_),o&&m(i),c&&K(c),d&&d.d()}}}function ne(f,l,a){let{data:r}=l;return f.$$set=_=>{"data"in _&&a(0,r=_.data)},[r]}class ie extends W{constructor(l){super(),X(this,l,ne,ae,Y,{data:0})}}export{ie as default};