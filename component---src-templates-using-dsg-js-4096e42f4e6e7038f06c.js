"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[713],{5592:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(1883);const l=[{text:"Home",url:"/"},{text:"Page 2",url:"/page-2/"},{text:"Blog",url:"/"}];var i=e=>{let{siteTitle:t}=e;return a.createElement("header",{style:{margin:"0 auto",maxWidth:"var(--size-header)",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"space-around"}},l.map(((e,t)=>a.createElement(a.Fragment,{key:e.url},a.createElement(r.Link,{to:e.url},e.text),t!==l.length-1&&a.createElement(a.Fragment,null," · ")))))};var c=e=>{var t;let{children:n}=e;const l=(0,r.useStaticQuery)("3649515864");return a.createElement(a.Fragment,null,a.createElement(i,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},a.createElement("main",null,n),a.createElement("footer",null,"© ",(new Date).getFullYear()," · Built by ","jps",".")))}},9357:function(e,t,n){var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:l,title:i,children:c}=e;const{site:o}=(0,r.useStaticQuery)("63159454"),m=l||o.siteMetadata.description,u=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?i+" | "+u:i),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:m}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=o.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:m}),c)}},4808:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(7294),r=n(1883),l=n(5592),i=n(9357);const c=()=>a.createElement(i.Z,{title:"Using DSG"});t.default=()=>a.createElement(l.Z,null,a.createElement("h1",null,"Hello from a ",a.createElement("b",null,"DSG Page")),a.createElement("p",null,"This page is not created until requested by a user."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"},"documentation about Deferred Static Generation"),"."),a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}}]);
//# sourceMappingURL=component---src-templates-using-dsg-js-4096e42f4e6e7038f06c.js.map