(this["webpackJsonpbeer-catalog"]=this["webpackJsonpbeer-catalog"]||[]).push([[0],{246:function(e,t,n){},266:function(e,t,n){},331:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},461:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(29),s=n.n(i),l=(n(246),n(463)),o=n(147),d=n(228),u=n(464),j=n(467),b=n(469),m=n(470),O=n(100),h=n(465),p=n(472),x=n(239),f=n(473),g=n(474),v=n(475),N=n(476),y=n(33),_=n(28),S=n(56),I=n(57),C=n.n(I),w=n(229),E=n.n(w),B=n(8),P={id:0,name:"",tagline:"",abv:0,attenuation_level:0,boil_volume:{value:0,unit:""},brewers_tips:"",contributed_by:"",description:"",ebc:null,first_brewed:"",food_pairing:[],ibu:null,image_url:"",ph:null,srm:null,target_fg:0,target_og:0,volume:{value:0,unit:""}},F=B.d.model({value:B.d.number,unit:B.d.string}),L=B.d.model({id:B.d.number,name:B.d.string,tagline:B.d.string,abv:B.d.number,attenuation_level:B.d.number,boil_volume:F,brewers_tips:B.d.string,contributed_by:B.d.string,description:B.d.string,ebc:B.d.maybeNull(B.d.number),first_brewed:B.d.string,food_pairing:B.d.array(B.d.string),ibu:B.d.maybeNull(B.d.number),image_url:B.d.string,ph:B.d.maybeNull(B.d.number),srm:B.d.maybeNull(B.d.number),target_fg:B.d.number,target_og:B.d.number,volume:F,selectedCount:B.d.optional(B.d.number,1)}).actions((function(e){return{setCount:function(t){e.selectedCount=t||1}}}));!function(e){e.initial="initial",e.pending="pending",e.error="error",e.loadSuccess="loadSuccess",e.saveSuccess="saveSuccess"}(a||(a={}));var k=B.d.model("RemoteDataModel").volatile((function(){return{loadStatus:a.initial}})).views((function(e){return{get dataInitial(){return e.loadStatus===a.initial},get dataPending(){return e.loadStatus===a.pending},get dataError(){return e.loadStatus===a.error},get dataLoadSuccess(){return e.loadStatus===a.loadSuccess},get dataSaveSuccess(){return e.loadStatus===a.saveSuccess}}})).actions((function(e){return{setInitial:function(){e.loadStatus=a.initial},setPending:function(){e.loadStatus=a.pending},setError:function(){e.loadStatus=a.error},setLoadSuccess:function(){e.loadStatus=a.loadSuccess},setSaveSuccess:function(){e.loadStatus=a.saveSuccess}}})),T=B.d.compose(k,B.d.model({items:B.d.array(L)})).named("BeerCollection").actions((function(e){return{loadAll:Object(B.c)(C.a.mark((function t(){var n,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setPending(),t.prev=1,t.next=4,X.get();case 4:n=t.sent,a=n.data,setTimeout((function(){Object(B.a)(e.items,a),e.setLoadSuccess()}),2e3),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),e.setError(),R.addError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))}})),V=B.d.model({errors:B.d.array(B.d.string)}).actions((function(e){return{addError:function(t){e.errors.push(t)},clearErrors:function(){e.errors.clear()}}})),q=V,D=B.d.model({}).actions((function(e){return{setField:function(t,n){e[t]=Object(B.b)(n)}}})),z=B.d.model({items:B.d.array(L),totalPrice:B.d.maybeNull(B.d.number),address:B.d.maybeNull(B.d.string)}),A=B.d.compose(D,k,z).named("Cart").views((function(e){return{get count(){return e.items.toJSON().length}}})).actions((function(e){return{getCurrentProduct:function(t){return e.items.toJSON().find((function(e){return e.id===t}))},loadByIds:Object(B.c)(C.a.mark((function t(n){var a,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setPending(),t.prev=1,t.next=4,X.getByIds(n);case 4:a=t.sent,r=a.data,setTimeout((function(){Object(B.a)(e.items,r),e.setLoadSuccess()}),2e3),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),R.addError(t.t0),e.setError();case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))}})),J=T.create({items:[]}),R=q.create({errors:[]}),$=A.create({items:[]}),M={404:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",502:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d (502)",503:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d (503)",504:"\u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e (504)",network:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0442\u0438\u043b, \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0442\u044c\u044e",default:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u0441\u0435\u0442\u0435\u0432\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"},G=E.a.create({baseURL:"",timeout:6e4});G.interceptors.response.use((function(e){return e}),(function(e){return e.config.skipError||function(e){e.response?M[e.response.status]&&R.addError("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(M[e.response.status])):e.request?R.addError(M.network):R.addError(M.default)}(e),e.axios=!0,Promise.reject(e)}));var H,U,K,Q,W=G,X={get:function(){return W.get("/beers")},getById:function(e){return W.get("/beers/".concat(e))},getByIds:function(e){return W.get("/beers/",{params:{ids:e}})}},Y=B.d.compose(D,k,L).named("Beer").actions((function(e){return{loadById:Object(B.c)(C.a.mark((function t(n){var a,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setPending(),t.prev=1,t.next=4,X.getById(n);case 4:a=t.sent,r=a.data,setTimeout((function(){Object(B.a)(e,r[0]),e.setLoadSuccess()}),2e3),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),e.setError(),R.addError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))}})),Z=(n(266),{main:function(){return"/"},details:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":id";return"/details/".concat(e)},cart:function(){return"/cart"},order:function(){return"/order"}}),ee=n(116),te=function(e,t){var n=e&&e.split("?")[1].split("&")||[];return n.length?n.length?n.map((function(e){return e.split("=")})).find((function(e){return e[0]===t}))?"?".concat(n.map((function(e){var n=e.split("="),a=Object(ee.a)(n,2),r=a[0],c=a[1];return r===t?"".concat(r,"=").concat(+c+1):e})).join("&")):"".concat(e,"&").concat(t,"=1"):"":"?".concat(t,"=1")},ne=function(e,t){var n=e&&e.split("?")[1].split("&")||[];return n.map((function(e){return e.split("=")})).find((function(e){return e[0]===t}))?"?".concat(n.map((function(e){var n=e.split("="),a=Object(ee.a)(n,2),r=a[0],c=a[1];return r===t?"".concat(r,"=").concat(1===+c?1:+c-1):e})).join("&")):""},ae=function(e,t){var n=e&&e.split("?")[1].split("&")||[];return t?n.length?n.map((function(e){return e.split("=")})).filter((function(e){return e[0]!==t})).map((function(e,t){return"".concat(t?"&":"?").concat(e[0],"=").concat(e[1])})).join(""):"":e},re=function(e,t){return!!e.replace("?","").split("&").map((function(e){return e.split("=")})).find((function(e){return e[0]===t}))},ce=function(e,t){var n=e.replace("?","").split("&").map((function(e){return e.split("=")})).find((function(e){return e[0]===t}));return n?+n[1]:0},ie=function(e){return e.replace("?","").split("&").length},se=n(4),le=Object(S.a)((function(){var e=Object(y.g)().id,t=Object(y.f)().search,n=r.useRef(Y.create(Object(d.a)({},P))).current;return r.useEffect((function(){e&&n.loadById(e)}),[e]),Object(se.jsxs)(u.a,{title:n.name,actions:[Object(se.jsx)(p.a,{})],children:[Object(se.jsx)("div",{className:"bread-crumb",children:Object(se.jsxs)(j.a,{children:[Object(se.jsx)(j.a.Item,{children:Object(se.jsx)(_.b,{to:Z.main()+t,children:"Catalog"})},"home"),Object(se.jsx)(j.a.Item,{children:Object(se.jsx)(_.b,{to:Z.details(e),children:n.name})},e)]})}),n.dataPending&&Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(b.a,{loading:!0,active:!0}),Object(se.jsx)(b.a,{loading:!0,active:!0})]}),n.dataLoadSuccess&&Object(se.jsxs)("div",{className:"details-container",children:[Object(se.jsx)("img",{className:"details-beer-img",src:n.image_url,alt:n.name}),Object(se.jsxs)("div",{children:[Object(se.jsxs)(m.b,{className:"beer-card_description",title:"Details",size:"middle",column:2,children:[Object(se.jsx)(m.b.Item,{label:"Description",span:2,children:n.description}),Object(se.jsx)(m.b.Item,{label:"Brewers tips",span:2,children:n.brewers_tips}),Object(se.jsx)(m.b.Item,{label:"Contributed by",span:1,children:n.contributed_by}),Object(se.jsx)(m.b.Item,{label:"First brewed",children:n.first_brewed}),Object(se.jsx)(m.b.Item,{label:"Food pairing",children:n.food_pairing.map((function(e,t){return Object(se.jsxs)("span",{className:"food-span",children:[e,n.food_pairing.length===t+1?"":", "]},e)}))})]}),Object(se.jsxs)("div",{className:"actions-container",children:[Object(se.jsx)(_.b,{to:Z.details(e)+te(t,e),children:Object(se.jsx)(O.a,{icon:Object(se.jsx)(x.a,{})})}),Object(se.jsx)(_.b,{to:Z.details(e)+ne(t,e),children:Object(se.jsx)(O.a,{icon:Object(se.jsx)(f.a,{})})}),Object(se.jsx)(h.a,{className:"actions-container_item",children:ce(t,e)}),re(t,e)?Object(se.jsx)(_.b,{to:Z.details(e)+ae(t,String(e)),children:Object(se.jsx)(O.a,{className:"actions-container_item",icon:Object(se.jsx)(g.a,{}),children:"Remove from Card"})}):Object(se.jsx)(_.b,{to:Z.details(e)+te(t,String(e)),children:Object(se.jsx)(O.a,{className:"actions-container_item",icon:Object(se.jsx)(v.a,{}),children:"Add to Card"})}),Object(se.jsx)(_.b,{to:Z.cart()+t,children:Object(se.jsx)(O.a,{className:"actions-container_item",icon:Object(se.jsx)(N.a,{}),children:"Go to Cart"})})]})]})]})]})})),oe=n(471),de=n(466),ue=n(468),je=n(30),be=n(166),me=n.n(be),Oe=n(234),he=n.n(Oe);!function(e){e.city="city",e.street="street",e.houseNumber="houseNumber",e.name="name",e.email="email",e.phone="phone",e.cardNumber="cardNumber"}(Q||(Q={}));var pe=(H={},Object(je.a)(H,Q.city,""),Object(je.a)(H,Q.street,""),Object(je.a)(H,Q.houseNumber,0),Object(je.a)(H,Q.name,""),Object(je.a)(H,Q.email,""),Object(je.a)(H,Q.phone,""),Object(je.a)(H,Q.cardNumber,""),H),xe=B.d.model((U={},Object(je.a)(U,Q.city,B.d.maybeNull(B.d.string)),Object(je.a)(U,Q.street,B.d.maybeNull(B.d.string)),Object(je.a)(U,Q.houseNumber,B.d.maybeNull(B.d.number)),Object(je.a)(U,Q.name,B.d.maybeNull(B.d.string)),Object(je.a)(U,Q.email,B.d.maybeNull(B.d.string)),Object(je.a)(U,Q.phone,B.d.maybeNull(B.d.string)),Object(je.a)(U,Q.cardNumber,B.d.maybeNull(B.d.string)),U)),fe=new me.a;he()(fe);var ge={properties:(K={},Object(je.a)(K,Q.city,{type:"string"}),Object(je.a)(K,Q.street,{type:"string"}),Object(je.a)(K,Q.houseNumber,{type:"number"}),Object(je.a)(K,Q.name,{type:"string"}),Object(je.a)(K,Q.email,{format:"email"}),Object(je.a)(K,Q.phone,{type:"number"}),Object(je.a)(K,Q.cardNumber,{type:"number"}),K)},ve=fe.compile(ge),Ne=B.d.model("Validator",{}).views((function(e){return{get isValid(){return ve(e)},propertyValidation:function(t){var n=Object(je.a)({},t,Object(B.b)(e[t]));return ve(n),ve.errors}}})),ye=B.d.compose(D,xe,Ne),_e=(n(331),h.a.Title),Se=Object(S.a)((function(){var e=Object(y.f)().search,t=r.useRef(ye.create(pe)).current,n=function(e){return function(n){t.setField(e,n.target.value)}},a=ie(e);return Object(se.jsxs)(u.a,{title:"Ordering",className:"beer-order",children:[Object(se.jsx)("div",{className:"bread-crumb",children:Object(se.jsxs)(j.a,{children:[Object(se.jsx)(j.a.Item,{children:Object(se.jsx)(_.b,{to:Z.main()+e,children:"Catalog"})},"home"),Object(se.jsx)(j.a.Item,{children:Object(se.jsx)(_.b,{to:Z.cart()+e,children:a?"Selected ".concat(a," products in cart"):"Empty Cart"})},"cart")]})}),!a&&Object(se.jsx)(oe.a,{message:"Products not found",type:"info"}),a&&Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)("div",{className:"delivery-information",children:[Object(se.jsx)(_e,{level:4,children:"Delivery info"}),Object(se.jsx)("div",{className:"order-field",children:Object(se.jsx)(de.a.Item,{name:Q.city,label:"City/Town",rules:[{required:!0}],help:!!t.propertyValidation(Q.city)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(se.jsx)(ue.a,{placeholder:"Prague",value:t.city||"",onChange:n(Q.city)})})}),Object(se.jsx)("div",{className:"order-field",children:Object(se.jsx)(de.a.Item,{name:Q.street,label:"Street",rules:[{required:!0}],help:!!t.propertyValidation(Q.street)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(se.jsx)(ue.a,{placeholder:"Parizhska",value:t.street||"",onChange:n(Q.street)})})}),Object(se.jsx)("div",{className:"order-field",children:Object(se.jsx)(de.a.Item,{name:Q.houseNumber,label:"House number",rules:[{required:!0}],help:!!t.propertyValidation(Q.houseNumber)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(se.jsx)(ue.a,{placeholder:"1",value:t.houseNumber||"",onChange:n(Q.houseNumber)})})})]}),Object(se.jsxs)("div",{className:"contact-information",children:[Object(se.jsx)(_e,{level:4,children:"Contact info"}),Object(se.jsx)("div",{className:"order-field",children:Object(se.jsx)(de.a.Item,{name:Q.name,label:"Name",rules:[{required:!0}],help:!!t.propertyValidation(Q.name)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(se.jsx)(ue.a,{value:t.name||"",onChange:n(Q.name)})})}),Object(se.jsx)("div",{className:"order-field",children:Object(se.jsx)(de.a.Item,{name:Q.email,label:"Email",rules:[{required:!0}],help:!!t.propertyValidation(Q.email)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email",children:Object(se.jsx)(ue.a,{placeholder:"example@gmai.com",value:t.email||"",onChange:n(Q.email)})})}),Object(se.jsx)("div",{className:"order-field",children:Object(se.jsx)(de.a.Item,{name:Q.phone,label:"Phone",rules:[{required:!0}],help:!!t.propertyValidation(Q.phone)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u043e\u043c\u0435\u0440\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",children:Object(se.jsx)(ue.a,{placeholder:"+7-999-000-00-00",value:t.phone||"",onChange:n(Q.phone)})})})]}),Object(se.jsxs)("div",{className:"contact-information",children:[Object(se.jsx)(_e,{level:4,children:"Payment info"}),Object(se.jsx)("div",{className:"order-field",children:Object(se.jsx)(de.a.Item,{name:Q.cardNumber,label:"card numder",rules:[{required:!0}],help:!!t.propertyValidation(Q.cardNumber)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043a\u0430\u0440\u0442\u044b",children:Object(se.jsx)(ue.a,{placeholder:"example@gmai.com",value:t.city||"",onChange:n(Q.cardNumber)})})})]}),Object(se.jsx)("div",{className:"cart_button-container",children:Object(se.jsx)(_.b,{to:Z.order(),children:Object(se.jsx)(O.a,{type:"primary",children:"Buy $$$"})})})]})]})})),Ie=n(236),Ce=n.n(Ie),we=n(101),Ee=n(55),Be=(n(399),u.a.Meta),Pe=Object(S.a)((function(e){var t=e.data,n=Object(y.f)().search;return Object(se.jsx)(u.a,{title:t.name,actions:[Object(se.jsx)(O.a,{icon:Object(se.jsx)(p.a,{})}),Object(se.jsx)(_.b,{to:Z.details(String(t.id))+n,children:Object(se.jsx)(O.a,{children:"Details..."})}),Object(se.jsx)(_.b,{to:Z.main()+te(n,String(t.id)),children:Object(se.jsx)(O.a,{className:"beer_add-to-cart",icon:Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(v.a,{})," 1 in",Object(se.jsx)(N.a,{})]})})}),Object(se.jsx)(_.b,{to:Z.cart()+n,children:Object(se.jsx)(O.a,{className:"actions-container_item",icon:Object(se.jsx)(N.a,{})})})],children:Object(se.jsx)(Be,{avatar:Object(se.jsx)("img",{className:"beer-img",src:t.image_url,alt:t.name}),title:t.name,description:t.description})})})),Fe=(n(400),Object(S.a)((function(){var e=Object(y.f)().search;return r.useEffect((function(){J.loadAll()}),[]),Object(se.jsxs)("div",{className:"main-page_container",children:[Object(se.jsxs)("div",{className:"main-page_header",children:[Object(se.jsx)("div",{className:"main-page_search_container",children:Object(se.jsx)(Ce.a,{placeholder:"please input text",enterButton:"Search",size:"large"})}),!!ie(e)&&Object(se.jsx)(_.b,{to:Z.cart()+e,children:Object(se.jsxs)(O.a,{className:"actions-container_item",icon:Object(se.jsx)(N.a,{}),children:["In Cart ",ie(e)," items"]})})]}),Object(se.jsxs)(we.a,{children:[J.dataPending&&new Array(12).fill({}).map((function(e,t){return Object(se.jsx)(Ee.a,{className:"main-page_beer-list_col",span:8,children:Object(se.jsx)(u.a,{children:Object(se.jsx)(b.a,{loading:!0,avatar:!0,active:!0})})},t)})),J.dataLoadSuccess&&J.items.toJSON().map((function(e){return Object(se.jsx)(Ee.a,{className:"main-page_beer-list_col",span:8,children:Object(se.jsx)(Pe,{data:e})},e.id)}))]})]})}))),Le=function(e){r.useEffect((function(){var t=e&&e.split("?")[1].split("&")||[],n="",a=[];t.forEach((function(e,r){var c=e.split("="),i=Object(ee.a)(c,2),s=i[0],l=i[1];n+="".concat(s).concat(r<t.length?"|":""),a.push(+l)})),$.loadByIds(n).then((function(){$.items.forEach((function(e,t){e.setCount(a[t])}))}))}),[e])},ke=(n(458),h.a.Title),Te=Object(S.a)((function(){var e=Object(y.f)().search;Le(e);var t=function(e){return e.replace("?","").split("&").map((function(e){return e.split("=")})).reduce((function(e,t){return e+Number(t[1])}),0)}(e),n=ie(e);return Object(se.jsxs)(u.a,{title:"Cart",className:"beer-cart",children:[Object(se.jsx)("div",{className:"bread-crumb",children:Object(se.jsxs)(j.a,{children:[Object(se.jsx)(j.a.Item,{children:Object(se.jsx)(_.b,{to:Z.main()+e,children:"Catalog"})},"home"),Object(se.jsx)(j.a.Item,{children:Object(se.jsx)(_.b,{to:Z.cart()+e,children:"Cart"})},"cart")]})}),$.dataPending&&Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(b.a,{loading:!0,active:!0}),Object(se.jsx)(b.a,{loading:!0,active:!0}),Object(se.jsx)(b.a,{loading:!0,active:!0})]}),$.dataLoadSuccess&&!n&&Object(se.jsx)(oe.a,{message:"Empty Cart",type:"info"}),$.dataLoadSuccess&&!!n&&Object(se.jsxs)(se.Fragment,{children:[$.items.map((function(t,n){return Object(se.jsx)(r.Fragment,{children:Object(se.jsxs)("div",{className:"card_item-container",children:[Object(se.jsx)("img",{className:"cart-beer-img",src:t.image_url,alt:t.name}),Object(se.jsxs)("div",{children:[Object(se.jsxs)(m.b,{className:"cart_item_description",title:"".concat(n+1,". ").concat(t.name),size:"middle",column:2,children:[Object(se.jsx)(m.b.Item,{label:"Description",span:2,children:t.description}),Object(se.jsx)(m.b.Item,{label:"count",children:ce(e,String(t.id))}),Object(se.jsxs)(m.b.Item,{label:"price",children:[3.5*ce(e,String(t.id))," $"]})]}),Object(se.jsxs)("div",{className:"cart_item_actions",children:[Object(se.jsx)(_.b,{to:Z.details(t.id.toString())+e,children:Object(se.jsx)(O.a,{className:"cart_item_first_btn",children:"Details"})}),Object(se.jsx)(_.b,{to:Z.cart()+ae(e,String(t.id)),children:Object(se.jsx)(O.a,{children:"Remove"})})]})]})]})},t.id)})),Object(se.jsxs)(ke,{level:4,children:["TOTAL: ",3.5*t," $"]}),$.items.toJSON().length&&Object(se.jsx)("div",{className:"cart_button-container",children:Object(se.jsx)(_.b,{to:Z.order()+e,children:Object(se.jsx)(O.a,{type:"primary",children:"Go to ordering"})})})]})]})}));n(459);function Ve(){return Object(se.jsxs)(l.a,{children:[Object(se.jsx)(o.Header,{className:"header",children:"Beans Love Beers"}),Object(se.jsx)(l.a,{children:Object(se.jsx)(o.Content,{children:Object(se.jsx)(_.a,{basename:"/Beer-catalog",children:Object(se.jsxs)(y.c,{children:[Object(se.jsx)(y.a,{exact:!0,path:Z.main(),children:Object(se.jsx)(Fe,{})}),Object(se.jsx)(y.a,{path:Z.details(),children:Object(se.jsx)(le,{})}),Object(se.jsx)(y.a,{path:Z.cart(),children:Object(se.jsx)(Te,{})}),Object(se.jsx)(y.a,{path:Z.order(),children:Object(se.jsx)(Se,{})})]})})})}),Object(se.jsx)(o.Footer,{style:{textAlign:"center"},children:"Beer Catalog developed by Igor Bezdeneznhykh"})]})}var qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,477)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(460);s.a.render(Object(se.jsx)(c.a.StrictMode,{children:Object(se.jsx)(Ve,{})}),document.getElementById("root")),qe()}},[[461,1,2]]]);
//# sourceMappingURL=main.ea293378.chunk.js.map