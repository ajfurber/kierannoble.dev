import{h as w,p as y,i as c,u as d,f,_ as b,a as _,b as v,c as j,d as k,e as S,g as I,j as x,k as P,l as U}from"./prototype-ui.js";import{j as e,r as m,P as N,a as t,S as r}from"./index.js";import{u as l,S as a,a as i,b as C,c as s,C as o,d as h}from"./SectionTitle.js";import{R as D}from"./Row.js";function T(n){return e("div",{className:"section__image",children:e("img",{src:n.src,alt:n.alt,className:`image ${n.noShadow?"no-shadow":""}`,loading:"lazy",decoding:"async"})})}function E(){const{setProject:n}=m.useContext(N);m.useEffect(()=>{n("harmony")},[]);let p=l(c),u=l(d),g=l(Object.assign({"/src/assets/projects/harmony/slideshows/final-product-1.webp":S,"/src/assets/projects/harmony/slideshows/final-product-2.webp":I,"/src/assets/projects/harmony/slideshows/final-product-3.webp":x,"/src/assets/projects/harmony/slideshows/final-product-4.webp":P,"/src/assets/projects/harmony/slideshows/final-product-5.webp":U}),Object.assign({"/src/assets/projects/harmony/slideshows/thumbnails/final-product-1-thumbnail.webp":b,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-2-thumbnail.webp":_,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-3-thumbnail.webp":v,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-4-thumbnail.webp":j,"/src/assets/projects/harmony/slideshows/thumbnails/final-product-5-thumbnail.webp":k}));return t("main",{className:"layout",children:[t(a,{type:"primary",align:"centered",children:[e(i,{children:e(C,{src:w})}),e(s,{children:"An E-Commerce platform for the modern music industry"}),t("h3",{children:["This project is the outcome of ",e("a",{href:"https://www.iweb.co.uk",children:"iWeb"}),"'s client briefing during an assessment within the second year of my Computer Science degree."]})]}),t(a,{type:"secondary",children:[e(i,{children:"Process"}),e(s,{children:"At the start of this task, the team and myself decided on how to approach the different stages in the lifecycle of a project and its development - along with the client and our project supervisor, we agreed so that we would follow the steps outlined below:"}),e(T,{src:y,noShadow:"true"}),e("p",{children:"Surrounding each of these stages we maintained communication both within our team, as well as with our project supervisor and the client."}),e("p",{children:"We implemented an iterative approach to the process which allowed us to all to air our opinions and move forwards with the project whilst allowing for ideas and designs to change freely and quickly."})]}),e(a,{align:"centered",children:t(o,{children:[e(i,{children:"Initial Designs"}),e(r,{images:p,children:e(h,{children:e("img",{className:"image",src:c,loading:"lazy",decoding:"async"})})}),e(s,{children:"These wireframe designs were received very well by the client and were praised for them looking and feeling like something that could be implemented into a real and professional looking product that the client would actually make."}),e("p",{children:"Ultimately, we collectively decided that we would take a hybrid between the two wireframe designs and create a product that implemented the 'best' parts from each design into the UI/UX prototype."})]})}),e(a,{type:"tertiary",align:"right",children:t(D,{equal:"true",children:[e(r,{images:u,children:e(h,{children:e("img",{className:"image",src:d,loading:"lazy",decoding:"async"})})}),t(o,{small:"true",children:[e(i,{children:"UI/UX Prototype"}),e(s,{children:"After the meeting with the client, we implemented the initial version of our UI/UX Prototype."}),e("p",{children:"We tried to play to the strenghs of the team, and as Sam was the member with the most experience in UI Design, he was tasked with implementing the prototype of the core layout for the web app as well as designing some cards for displaying information such as:"}),t("ul",{className:"layout layout__column layout--small",children:[e("li",{children:"Album listings"}),e("li",{children:"Event listings"}),e("li",{children:"Merch listings"})]})]})]})}),e(a,{type:"secondary",children:t(o,{size:"small",children:[e(i,{children:"Feature Development"}),e(s,{children:"Once we had designs that were approved by both the client and the project supervisor, we started to take these designs which up until now were static pages and start to build a data framework around it. For this, I took the lead as I have the most experience in backend development."}),e("p",{children:"I started by taking the design and breaking the elements into distinct components, such as buttons, navigation items, footers (etc) and converting them, so they are reusable and extensible throughout the application. Once this had been completed I could move onto creating a data structure for the application."}),e("p",{children:"As this web application is primary used for creating a cart and ordering music from the store, the data for the music had to be organised carefully to allow for a few key pieces of functionality: each release can have different release types (CD, Vinyl, Digital), each of which can have many groupings within them, such as a CD release may have multiple discs. Similarly, within each of these discs (if they exist), there can be many tracks, which may be different to a track on another release type. This problem is compounded by the functionality that links merch to album listings and their tracks."}),e("p",{children:"Throughout this process we kept in contact with the client to ensure that they were happy with the progress being made and so that we could receive relevant feedback and make changes with the 8 weeks that we had to complete this project from conception to final delivery."})]})}),e(a,{type:"primary",align:"centered",children:t(o,{size:"small",children:[e(i,{children:"Final Product"}),e("a",{href:"https://harmony.aylo.net",children:e(s,{children:"View Here"})}),e(r,{images:g,children:e(h,{children:e("img",{className:"image",src:f,loading:"lazy",decoding:"async"})})}),e("p",{children:"Ultimately, this project received a grade of 96% (1st), which is accredible in no small part to the great team that we had - our attitudes to succeed and the love and passion that we all had for the project was noted by the client who congratulated us on creating a project that functions the way that it does so quickly and professionally."}),e("p",{children:"The team for this project were:"}),t("ul",{children:[t("li",{children:["Sam Palmer - ",e("a",{href:"https://github.com/samp",children:"@samp"})]}),t("li",{children:["Nash Willok - ",e("a",{href:"https://github.com/NashWillock",children:"@NashWillock"})]}),t("li",{children:["Ryan Jelf - ",e("a",{href:"https://github.com/RyanJelf",children:"@RyanJelf"})]})]})]})})]})}export{E as default};