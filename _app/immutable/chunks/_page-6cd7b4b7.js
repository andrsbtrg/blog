const n=async({fetch:t,params:e})=>{const{category:s}=e,o=(await(await t("/api/posts")).json()).filter(a=>a.meta.categories.includes(s));return{category:s,posts:o}},c=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{c as _,n as l};