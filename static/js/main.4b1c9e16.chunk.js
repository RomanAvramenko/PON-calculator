(this["webpackJsonppon-calculator"]=this["webpackJsonppon-calculator"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,l){},function(e,t,l){},,function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";l.r(t);var a=l(1),s=l.n(a),c=l(6),n=l.n(c),i=(l(12),l(7)),r=l(2),j=[{label:"95/5",tails:[.32,13.7]},{label:"90/10",tails:[.49,10]},{label:"85/15",tails:[.76,8.16]},{label:"80/20",tails:[1.06,7.11]},{label:"75/25",tails:[1.42,6.29]},{label:"70/30",tails:[1.56,5.39]},{label:"65/35",tails:[1.93,4.56]},{label:"60/40",tails:[2.34,4.01]},{label:"55/45",tails:[2.71,3.73]},{label:"50/50",tails:[3.15,3.17]},{label:"1/4",tails:[7.28]},{label:"1/8",tails:[10.7]},{label:"1/16",tails:[14]}],u=(l(13),l(0)),b=function(e){var t=e.callback,l=e.handleClose,s=Object(a.useState)(0),c=Object(r.a)(s,2),n=c[0],i=c[1],b=Object(a.useState)(0),d=Object(r.a)(b,2),o=d[0],h=d[1],m=function(e){h(e.target.value)};return Object(u.jsxs)("div",{className:"selector",children:[Object(u.jsxs)("form",{className:"selector_splitter",children:[Object(u.jsx)("label",{className:"selector_splitter_label",htmlFor:"splitters",children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"}),Object(u.jsx)("select",{className:"selector_splitter_select",name:"splitters",id:"splitters",value:n,onChange:function(e){i(e.target.value)},children:j.map((function(e,t){return Object(u.jsx)("option",{value:t,children:e.label},t)}))})]}),Object(u.jsxs)("form",{className:"selector_tails",onSubmit:function(e){if(o>0){var a=j[n].tails.findIndex((function(e){return e===+o}));t({id:Date.now(),label:j[n].label.split("/"),attenuation:o,tailIndex:a})}l(),e.preventDefault()},children:[Object(u.jsx)("label",{className:"selector_tails_label",htmlFor:"tails",children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u0443:"}),1===j[n].tails.length?Object(u.jsxs)("div",{className:"selector_tails_side",children:[Object(u.jsxs)("p",{className:"selector_tails_side_name",children:[j[n].label,": -",j[n].tails[0]]}),Object(u.jsx)("input",{className:"selector_tails_side_radio",type:"radio",name:"attenuation",value:j[n].tails[0],onChange:m})]},"0"):j[n].tails.map((function(e,t){return Object(u.jsxs)("div",{className:"selector_tails_side",children:[Object(u.jsxs)("p",{className:"selector_tails_side_name",children:[j[n].label.split("/")[t],": -",e]}),Object(u.jsx)("input",{className:"selector_tails_side_radio",type:"radio",name:"attenuation",value:e,onChange:m})]},t)})),Object(u.jsx)("input",{className:"selector_tails_button",type:"submit",value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},d=(l(15),function(e){var t=e.show,l=e.children,a=t?"modal display-block":"display-none";return Object(u.jsx)("div",{className:a,children:Object(u.jsx)("section",{className:"modal_main",children:Object(u.jsx)("div",{className:"children",children:l})})})}),o=(l(16),function(e){var t=e.data,l=e.start,a=e.length,s=e.splices,c={1310:.33,1490:.24,1550:.22},n=function(e){var n=0;return t.length>0&&(n=t.map((function(e){return e.attenuation})).reduce((function(e,t){return+e+ +t}))),(l-n-.2*s-a/1e3*c[e]).toFixed(2)};return Object(u.jsxs)("div",{className:"result",children:[Object(u.jsx)("h3",{className:"result_label",children:"\u0417\u0430\u0442\u0443\u0445\u0430\u043d\u0438\u0435 \u043d\u0430 \u0434\u043b\u0438\u043d\u043d\u0435 \u0432\u043e\u043b\u043d\u044b"}),Object(u.jsxs)("ul",{className:"result_list",children:[Object(u.jsxs)("li",{className:"result_list_item",children:[Object(u.jsx)("p",{className:"result_list_item_label",children:"1310"}),Object(u.jsx)("div",{className:"result_list_item_value",children:n(1310)})]}),Object(u.jsxs)("li",{className:"result_list_item",children:[Object(u.jsx)("p",{className:"result_list_item_label",children:"1490"}),Object(u.jsx)("div",{className:"result_list_item_value",children:n(1490)})]}),Object(u.jsxs)("li",{className:"result_list_item",children:[Object(u.jsx)("p",{className:"result_list_item_label",children:"1550"}),Object(u.jsx)("div",{className:"result_list_item_value",children:n(1550)})]})]})]})}),h=(l(17),l(18),function(e){var t=e.data,l=e.change,a=function(e){l(t.filter((function(t){return t.id!==e})))},s=t.map((function(e){if(e.label[0]>1){var t=0===e.tailIndex?"highLight":null,l=1===e.tailIndex?"highLight":null;return Object(u.jsxs)("li",{className:"app-attenuation_item",children:[Object(u.jsxs)("div",{className:"app-attenuation_item_label",children:[Object(u.jsx)("div",{className:t,children:e.label[0]}),"/",Object(u.jsx)("div",{className:l,children:e.label[1]})]}),Object(u.jsxs)("div",{className:"app-attenuation_item_value",children:[" -",e.attenuation]}),Object(u.jsx)("button",{className:"app-attenuation_item_button",onClick:function(){return a(e.id)},children:Object(u.jsxs)("svg",{height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"m453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0",fill:"#f44336"}),Object(u.jsx)("path",{d:"m350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",fill:"#fafafa"})]})})]},e.id.toFixed())}return Object(u.jsxs)("li",{className:"app-attenuation_item",children:[Object(u.jsx)("div",{className:"app-attenuation_item_label",children:Object(u.jsxs)("div",{className:"highLight",children:[e.label[0],"/",e.label[1]]})}),Object(u.jsxs)("div",{className:"app-attenuation_item_value",children:[" -",e.attenuation]}),Object(u.jsx)("button",{className:"app-attenuation_item_button",onClick:function(){return a(e.id)},children:Object(u.jsxs)("svg",{height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"m453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0",fill:"#f44336"}),Object(u.jsx)("path",{d:"m350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",fill:"#fafafa"})]})})]},e.id.toFixed())}));return Object(u.jsx)("div",{className:"app-table",children:Object(u.jsx)("ul",{className:"app-attenuation",children:s})})}),m=(l(19),function(e){var t=e.length,l=e.handleLength,a=e.start,s=e.handleStart,c=e.count,n=e.handleCount,i=e.handleModal;return Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsxs)("div",{className:"inputs_item",children:[Object(u.jsx)("label",{children:"\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u0433\u043d\u0430\u043b: "}),Object(u.jsx)("input",{type:"number",id:"length",name:"length",value:a,onChange:s}),"dBm"]}),Object(u.jsxs)("div",{className:"inputs_item",children:[Object(u.jsx)("label",{children:"\u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043b\u0438\u043d\u0438\u0438: "}),Object(u.jsx)("input",{type:"number",id:"length",name:"length",min:"0",max:"30000",value:t,onChange:l}),"\u043c\u0435\u0442\u0440\u043e\u0432"]}),Object(u.jsxs)("div",{className:"inputs_item",children:[Object(u.jsx)("label",{children:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0432\u0430\u0440\u043e\u043a: "}),Object(u.jsx)("input",{type:"number",id:"length",name:"length",value:c,onChange:n}),"\u0448\u0442\u0443\u043a"]}),Object(u.jsx)("input",{className:"inputs_button",type:"button",value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c",onClick:i})]})}),O=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),l=t[0],s=t[1],c=Object(a.useState)(0),n=Object(r.a)(c,2),j=n[0],O=n[1],p=Object(a.useState)(0),x=Object(r.a)(p,2),_=x[0],v=x[1],f=Object(a.useState)(!1),N=Object(r.a)(f,2),g=N[0],w=N[1],C=Object(a.useState)([]),S=Object(r.a)(C,2),y=S[0],k=S[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{length:j,handleLength:function(e){O(e.target.value)},start:l,handleStart:function(e){s(e.target.value)},count:_,handleCount:function(e){v(e.target.value)},handleModal:function(){w(!0)}}),g?Object(u.jsx)(d,{show:g,children:Object(u.jsx)(b,{callback:function(e){k([].concat(Object(i.a)(y),[e]))},handleClose:function(){w(!1)}})}):null,Object(u.jsx)(h,{data:y,change:function(e){k(e)}}),Object(u.jsx)(o,{data:y,start:l,length:j,splices:_})]})};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4b1c9e16.chunk.js.map