(self.webpackChunklyhourchhen_blog=self.webpackChunklyhourchhen_blog||[]).push([[678],{3836:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blogs/static/f3eb0030cadd32f41b851600be63493b/e5610/22294314.png","srcSet":"/blogs/static/f3eb0030cadd32f41b851600be63493b/e5610/22294314.png 50w,\\n/blogs/static/f3eb0030cadd32f41b851600be63493b/e9b55/22294314.png 100w","sizes":"50px"},"sources":[{"srcSet":"/blogs/static/f3eb0030cadd32f41b851600be63493b/d4bf4/22294314.avif 50w,\\n/blogs/static/f3eb0030cadd32f41b851600be63493b/ee81f/22294314.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/blogs/static/f3eb0030cadd32f41b851600be63493b/3faea/22294314.webp 50w,\\n/blogs/static/f3eb0030cadd32f41b851600be63493b/6a679/22294314.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var a=l(7294),i=l(5444),n=l(154);t.Z=function(){var e,t,s=(0,i.useStaticQuery)("3257411868"),r=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=s.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"https://avatars.githubusercontent.com/u/22294314?s=400&u=d8cee01c14ca307edd27edf840f7a002514d869c&v=4",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(3836)}),(null==r?void 0:r.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,r.name)," ",(null==r?void 0:r.summary)||null," ",a.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"You should follow them on Twitter")))}},7704:function(e,t,l){"use strict";l.r(t);var a=l(7294),i=l(5444),n=l(9535),s=l(7198),r=l(3751);t.default=function(e){var t,l=e.data,o=e.location,c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=l.allMarkdownRemark.nodes;return 0===u.length?a.createElement(s.Z,{location:o,title:c},a.createElement(r.Z,{title:"All posts"}),a.createElement(n.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(s.Z,{location:o,title:c},a.createElement(r.Z,{title:"All posts"}),a.createElement(n.Z,null),a.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7c9042e052899711bb94.js.map