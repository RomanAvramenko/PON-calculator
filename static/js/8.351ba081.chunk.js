(this["webpackJsonppon-calculator"]=this["webpackJsonppon-calculator"]||[]).push([[8],{22:function(e,l,t){},38:function(e,l,t){"use strict";t.r(l);var a=t(2),s=t(0),i=[{label:"95/5",tails:[.32,13.7]},{label:"90/10",tails:[.49,10]},{label:"85/15",tails:[.76,8.16]},{label:"80/20",tails:[1.06,7.11]},{label:"75/25",tails:[1.42,6.29]},{label:"70/30",tails:[1.56,5.39]},{label:"65/35",tails:[1.93,4.56]},{label:"60/40",tails:[2.34,4.01]},{label:"55/45",tails:[2.71,3.73]},{label:"50/50",tails:[3.15,3.17]},{label:"1/4",tails:[7.28]},{label:"1/8",tails:[10.7]},{label:"1/16",tails:[14]}],c=(t(22),t(1));l.default=function(e){var l=e.callback,t=e.handleClose,n=Object(s.useState)(0),r=Object(a.a)(n,2),o=r[0],b=r[1],u=Object(s.useState)(0),j=Object(a.a)(u,2),d=j[0],p=j[1],m=function(e){p(e.target.value)};return Object(c.jsxs)("div",{className:"selector",children:[Object(c.jsxs)("form",{className:"selector_splitter",children:[Object(c.jsx)("label",{className:"selector_splitter_label",htmlFor:"splitters",children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"}),Object(c.jsx)("select",{className:"selector_splitter_select",name:"splitters",id:"splitters",value:o,onChange:function(e){b(e.target.value)},children:i.map((function(e,l){return Object(c.jsx)("option",{value:l,children:e.label},l)}))})]}),Object(c.jsxs)("form",{className:"selector_tails",onSubmit:function(e){if(d>0){var a=i[o].tails.findIndex((function(e){return e===+d}));l({id:Date.now(),label:i[o].label.split("/"),attenuation:d,tailIndex:a})}t(),e.preventDefault()},children:[Object(c.jsx)("label",{className:"selector_tails_label",htmlFor:"tails",children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u0443:"}),1===i[o].tails.length?Object(c.jsxs)("div",{className:"selector_tails_side",children:[Object(c.jsxs)("p",{className:"selector_tails_side_name",children:[i[o].label,": -",i[o].tails[0]]}),Object(c.jsx)("input",{className:"selector_tails_side_radio",type:"radio",name:"attenuation",value:i[o].tails[0],onChange:m})]},"0"):i[o].tails.map((function(e,l){return Object(c.jsxs)("div",{className:"selector_tails_side",children:[Object(c.jsxs)("p",{className:"selector_tails_side_name",children:[i[o].label.split("/")[l],": -",e]}),Object(c.jsx)("input",{className:"selector_tails_side_radio",type:"radio",name:"attenuation",value:e,onChange:m})]},l)})),Object(c.jsx)("input",{className:"selector_tails_button",type:"submit",value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}}]);
//# sourceMappingURL=8.351ba081.chunk.js.map