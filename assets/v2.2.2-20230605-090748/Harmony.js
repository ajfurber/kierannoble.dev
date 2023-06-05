import{h as w,p as g,i as l,u as h,_ as y,a as f,b,c as _,d as v,e as j,f as k,g as S,j as I,k as x}from"./prototype-ui.js";import{j as e,r as c,P as U,a as t,S as d}from"./index.js";import{u as r,S as a,a as i,b as P,c as o,C as n,d as m}from"./SectionTitle.js";import{W as C}from"./WebFrame.js";import{R as N}from"./Row.js";function D(s){return e("div",{className:"section__image",children:e("img",{src:s.src,alt:s.alt,className:`image ${s.noShadow?"no-shadow":""}`,loading:"lazy",decoding:"async"})})}function E(){const{setProject:s}=c.useContext(U);c.useEffect(()=>{s("harmony")},[]);let p=r(l),u=r(h);return r(Object.assign({"/src/assets/projects/harmony/slideshows/final-product-1.webp":j,"/src/assets/projects/harmony/slideshows/final-product-2.webp":k,"/src/assets/projects/harmony/slideshows/final-product-3.webp":S,"/src/assets/projects/harmony/slideshows/final-product-4.webp":I,"/src/assets/projects/harmony/slideshows/final-product-5.webp":x}),Object.assign({"/src/assets/projects/harmony/slideshows/thumbnails/final-product-1-thumbnail.webp":y,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-2-thumbnail.webp":f,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-3-thumbnail.webp":b,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-4-thumbnail.webp":_,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-5-thumbnail.webp":v})),t("main",{className:"layout",children:[t(a,{type:"primary",align:"centered",children:[e(i,{children:e(P,{src:w})}),e(o,{children:"An E-Commerce platform for the modern music industry"}),t("h3",{children:["This project is the outcome of ",e("a",{href:"https://www.iweb.co.uk",children:"iWeb"}),"'s client briefing during an assessment within the second year of my Computer Science degree."]})]}),t(a,{type:"secondary",children:[e(i,{children:"Process"}),e(o,{children:"At the start of this task, the team and myself decided on how to approach the different stages in the lifecycle of a project and its development - along with the client and our project supervisor, we agreed so that we would follow the steps outlined below:"}),e(D,{src:g,noShadow:"true"}),e("p",{children:"Surrounding each of these stages we maintained communication both within our team, as well as with our project supervisor and the client."}),e("p",{children:"We implemented an iterative approach to the process which allowed us to all to air our opinions and move forwards with the project whilst allowing for ideas and designs to change freely and quickly."})]}),e(a,{align:"centered",children:t(n,{children:[e(i,{children:"Initial Designs"}),e(d,{images:p,children:e(m,{children:e("img",{className:"image",src:l,loading:"lazy",decoding:"async"})})}),e(o,{children:"These wireframe designs were received very well by the client and were praised for them looking and feeling like something that could be implemented into a real and professional looking product that the client would actually make."}),e("p",{children:"Ultimately, we collectively decided that we would take a hybrid between the two wireframe designs and create a product that implemented the 'best' parts from each design into the UI/UX prototype."})]})}),e(a,{type:"tertiary",align:"right",children:t(N,{equal:"true",children:[e(d,{images:u,children:e(m,{children:e("img",{className:"image",src:h,loading:"lazy",decoding:"async"})})}),t(n,{small:"true",children:[e(i,{children:"UI/UX Prototype"}),e(o,{children:"After the meeting with the client, we implemented the initial version of our UI/UX Prototype."}),e("p",{children:"We tried to play to the strenghs of the team, and as Sam was the member with the most experience in UI Design, he was tasked with implementing the prototype of the core layout for the web app as well as designing some cards for displaying information such as:"}),t("ul",{className:"layout layout__column layout--small",children:[e("li",{children:"Album listings"}),e("li",{children:"Event listings"}),e("li",{children:"Merch listings"})]})]})]})}),e(a,{type:"secondary",children:t(n,{size:"small",children:[e(i,{children:"Feature Development"}),e(o,{children:"Once we had designs that were approved by both the client and the project supervisor, we started to take these designs which up until now were static pages and start to build a data framework around it. For this, I took the lead as I have the most experience in backend development."}),e("p",{children:"I started by taking the design and breaking the elements into distinct components, such as buttons, navigation items, footers (etc) and converting them, so they are reusable and extensible throughout the application. Once this had been completed I could move onto creating a data structure for the application."}),e("p",{children:"As this web application is primary used for creating a cart and ordering music from the store, the data for the music had to be organised carefully to allow for a few key pieces of functionality: each release can have different release types (CD, Vinyl, Digital), each of which can have many groupings within them, such as a CD release may have multiple discs. Similarly, within each of these discs (if they exist), there can be many tracks, which may be different to a track on another release type. This problem is compounded by the functionality that links merch to album listings and their tracks."}),e("p",{children:"Throughout this process we kept in contact with the client to ensure that they were happy with the progress being made and so that we could receive relevant feedback and make changes with the 8 weeks that we had to complete this project from conception to final delivery."})]})}),e(a,{type:"primary",align:"centered",children:t(n,{size:"small",children:[e(i,{children:"Final Product"}),e(C,{src:"https://harmony.aylo.net/"}),e("p",{children:"Ultimately, this project received a grade of 96% (1st), which is accredible in no small part to the great team that we had - our attitudes to succeed and the love and passion that we all had for the project was noted by the client who congratulated us on creating a project that functions the way that it does so quickly and professionally."}),e("p",{children:"The team for this project were:"}),t("ul",{children:[t("li",{children:["Sam Palmer - ",e("a",{href:"https://github.com/samp",children:"@samp"})]}),t("li",{children:["Nash Willok - ",e("a",{href:"https://github.com/NashWillock",children:"@NashWillock"})]}),t("li",{children:["Ryan Jelf - ",e("a",{href:"https://github.com/RyanJelf",children:"@RyanJelf"})]})]})]})})]})}export{E as default};