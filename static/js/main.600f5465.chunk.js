(this["webpackJsonppon-calculator"]=this["webpackJsonppon-calculator"]||[]).push([[0],[,,,,,,,,,,,function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return c}));var a=i(1),s=i(13),l=i(4),n=i.n(l),c=(i(27),function(t){var e=t.callback,i=Object(s.a)(),l=Object(s.b)({click:function(){var t=l._container.textContent.slice(-16,-10).match(/\d+/g);e(!!t&&t.join(""))}});return Object(a.useEffect)((function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(t){i.panTo(new n.a.LatLng(t.coords.latitude,t.coords.longitude))})):i.panTo(new n.a.LatLng(50.4421237150998,30.520453831008716))}),[i]),Object(a.useEffect)((function(){i&&n.a.control.ruler().addTo(i)}),[i]),null});!function(e,a){"object"===typeof exports&&(t.exports=e(i(4))),"undefined"!==typeof a&&a.L&&(a.L.Ruler=e(n.a))}((function(t){t.Control.Ruler=t.Control.extend({options:{position:"topleft",circleMarker:{color:"black",radius:2},lineStyle:{color:"black",dashArray:"1,6"}},onAdd:function(e){return this._map=e,this._container=t.DomUtil.create("div","leaflet-bar"),this._container.classList.add("leaflet-ruler"),t.DomEvent.disableClickPropagation(this._container),t.DomEvent.on(this._container,"click",this._toggleMeasure,this),this._choice=!1,this._defaultCursor=this._map._container.style.cursor,this._allLayers=t.layerGroup(),this._container},onRemove:function(){t.DomEvent.off(this._container,"click",this._toggleMeasure,this)},_toggleMeasure:function(){this._choice=!this._choice,this._clickedLatLong=null,this._clickedPoints=[],this._totalLength=0,this._choice?(this._map.doubleClickZoom.disable(),t.DomEvent.on(this._map._container,"keydown",this._escape,this),t.DomEvent.on(this._map._container,"dblclick",this._closePath,this),this._container.classList.add("leaflet-ruler-clicked"),this._clickCount=0,this._tempLine=t.featureGroup().addTo(this._allLayers),this._tempPoint=t.featureGroup().addTo(this._allLayers),this._pointLayer=t.featureGroup().addTo(this._allLayers),this._polylineLayer=t.featureGroup().addTo(this._allLayers),this._allLayers.addTo(this._map),this._map._container.style.cursor="crosshair",this._map.on("click",this._clicked,this),this._map.on("mousemove",this._moving,this)):(this._map.doubleClickZoom.enable(),t.DomEvent.off(this._map._container,"keydown",this._escape,this),t.DomEvent.off(this._map._container,"dblclick",this._closePath,this),this._container.classList.remove("leaflet-ruler-clicked"),this._map.removeLayer(this._allLayers),this._allLayers=t.layerGroup(),this._map._container.style.cursor=this._defaultCursor,this._map.off("click",this._clicked,this),this._map.off("mousemove",this._moving,this))},_clicked:function(e){var i;(this._clickedLatLong=e.latlng,this._clickedPoints.push(this._clickedLatLong),t.circleMarker(this._clickedLatLong,this.options.circleMarker).addTo(this._pointLayer),this._clickCount>0&&!e.latlng.equals(this._clickedPoints[this._clickedPoints.length-2]))&&(this._movingLatLong&&t.polyline([this._clickedPoints[this._clickCount-1],this._movingLatLong],this.options.lineStyle).addTo(this._polylineLayer),this._totalLength+=this._result.Distance,this._clickCount>1?(this.options.distaneValue=this._totalLength.toFixed(),i=this._totalLength.toFixed()+" m"):(this.options.distaneValue=this._result.Distance.toFixed(),i=this._result.Distance.toFixed()+" m"),t.circleMarker(this._clickedLatLong,this.options.circleMarker).bindTooltip(i,{permanent:!0,className:"result-tooltip"}).addTo(this._pointLayer).openTooltip());this._clickCount++},_moving:function(e){var i;this._clickedLatLong&&(t.DomEvent.off(this._container,"click",this._toggleMeasure,this),this._movingLatLong=e.latlng,this._tempLine&&(this._map.removeLayer(this._tempLine),this._map.removeLayer(this._tempPoint)),this._addedLength=0,this._tempLine=t.featureGroup(),this._tempPoint=t.featureGroup(),this._tempLine.addTo(this._map),this._tempPoint.addTo(this._map),this._calculateBearingAndDistance(),this._addedLength=this._result.Distance+this._totalLength,t.polyline([this._clickedLatLong,this._movingLatLong],this.options.lineStyle).addTo(this._tempLine),i=this._clickCount>1?this._addedLength.toFixed()+" m":this._result.Distance.toFixed()+" m",t.circleMarker(this._movingLatLong,this.options.circleMarker).bindTooltip(i,{sticky:!0,offset:t.point(0,0),className:"moving-tooltip"}).addTo(this._tempPoint).openTooltip())},_escape:function(t){27===t.keyCode&&(this._clickCount>0?this._closePath():(this._choice=!0,this._toggleMeasure()))},_calculateBearingAndDistance:function(){var t=this._clickedLatLong.lat,e=this._clickedLatLong.lng,i=this._movingLatLong.lat,a=this._movingLatLong.lng,s=Math.PI/180,l=(i-t)*s,n=(a-e)*s,c=Math.sin(l/2)*Math.sin(l/2)+Math.cos(t*s)*Math.cos(i*s)*Math.sin(n/2)*Math.sin(n/2),o=6371e3*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)));this._result={Distance:o}},_closePath:function(){this._map.removeLayer(this._tempLine),this._map.removeLayer(this._tempPoint),this._clickCount<=1&&this._map.removeLayer(this._pointLayer),this._choice=!1,t.DomEvent.on(this._container,"click",this._toggleMeasure,this),this._toggleMeasure()}}),t.control.ruler=function(e){return new t.Control.Ruler(e)}}),window)}).call(this,i(26)(t))},,,,,,,,function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a=i(1),s=i.n(a),l=i(6),n=i.n(l),c=(i(19),i(12)),o=i(2),r=[{label:"95/5",tails:[.32,13.7]},{label:"90/10",tails:[.49,10]},{label:"85/15",tails:[.76,8.16]},{label:"80/20",tails:[1.06,7.11]},{label:"75/25",tails:[1.42,6.29]},{label:"70/30",tails:[1.56,5.39]},{label:"65/35",tails:[1.93,4.56]},{label:"60/40",tails:[2.34,4.01]},{label:"55/45",tails:[2.71,3.73]},{label:"50/50",tails:[3.15,3.17]},{label:"1/4",tails:[7.28]},{label:"1/8",tails:[10.7]},{label:"1/16",tails:[14]}],h=(i(20),i(0)),u=function(t){var e=t.callback,i=t.handleClose,s=Object(a.useState)(0),l=Object(o.a)(s,2),n=l[0],c=l[1],u=Object(a.useState)(0),d=Object(o.a)(u,2),_=d[0],m=d[1],p=function(t){m(t.target.value)};return Object(h.jsxs)("div",{className:"selector",children:[Object(h.jsxs)("form",{className:"selector_splitter",children:[Object(h.jsx)("label",{className:"selector_splitter_label",htmlFor:"splitters",children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"}),Object(h.jsx)("select",{className:"selector_splitter_select",name:"splitters",id:"splitters",value:n,onChange:function(t){c(t.target.value)},children:r.map((function(t,e){return Object(h.jsx)("option",{value:e,children:t.label},e)}))})]}),Object(h.jsxs)("form",{className:"selector_tails",onSubmit:function(t){if(_>0){var a=r[n].tails.findIndex((function(t){return t===+_}));e({id:Date.now(),label:r[n].label.split("/"),attenuation:_,tailIndex:a})}i(),t.preventDefault()},children:[Object(h.jsx)("label",{className:"selector_tails_label",htmlFor:"tails",children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u0443:"}),1===r[n].tails.length?Object(h.jsxs)("div",{className:"selector_tails_side",children:[Object(h.jsxs)("p",{className:"selector_tails_side_name",children:[r[n].label,": -",r[n].tails[0]]}),Object(h.jsx)("input",{className:"selector_tails_side_radio",type:"radio",name:"attenuation",value:r[n].tails[0],onChange:p})]},"0"):r[n].tails.map((function(t,e){return Object(h.jsxs)("div",{className:"selector_tails_side",children:[Object(h.jsxs)("p",{className:"selector_tails_side_name",children:[r[n].label.split("/")[e],": -",t]}),Object(h.jsx)("input",{className:"selector_tails_side_radio",type:"radio",name:"attenuation",value:t,onChange:p})]},e)})),Object(h.jsx)("input",{className:"selector_tails_button",type:"submit",value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},d=(i(22),function(t){var e=t.show,i=t.children,a=e?"modal display-block":"display-none";return Object(h.jsx)("div",{className:a,children:Object(h.jsx)("section",{className:"modal_main",children:Object(h.jsx)("div",{className:"children",children:i})})})}),_=(i(23),function(t){var e=t.data,i=t.start,a=t.length,s=t.splices,l={1310:.33,1490:.24,1550:.22},n=function(t){var n=0;return e.length>0&&(n=e.map((function(t){return t.attenuation})).reduce((function(t,e){return+t+ +e}))),(i-n-.2*s-a/1e3*l[t]).toFixed(2)};return Object(h.jsxs)("div",{className:"result",children:[Object(h.jsx)("h3",{className:"result_label",children:"\u0417\u0430\u0442\u0443\u0445\u0430\u043d\u0438\u0435 \u043d\u0430 \u0434\u043b\u0438\u043d\u043d\u0435 \u0432\u043e\u043b\u043d\u044b"}),Object(h.jsxs)("ul",{className:"result_list",children:[Object(h.jsxs)("li",{className:"result_list_item",children:[Object(h.jsx)("p",{className:"result_list_item_label",children:"1310"}),Object(h.jsx)("div",{className:"result_list_item_value",children:n(1310)})]}),Object(h.jsxs)("li",{className:"result_list_item",children:[Object(h.jsx)("p",{className:"result_list_item_label",children:"1490"}),Object(h.jsx)("div",{className:"result_list_item_value",children:n(1490)})]}),Object(h.jsxs)("li",{className:"result_list_item",children:[Object(h.jsx)("p",{className:"result_list_item_label",children:"1550"}),Object(h.jsx)("div",{className:"result_list_item_value",children:n(1550)})]})]})]})}),m=(i(24),function(t){var e=t.data,i=t.change,a=function(t){i(e.filter((function(e){return e.id!==t})))},s=e.map((function(t){if(t.label[0]>1){var e=0===t.tailIndex?"highLight":null,i=1===t.tailIndex?"highLight":null;return Object(h.jsxs)("li",{className:"app-attenuation_item",children:[Object(h.jsxs)("div",{className:"app-attenuation_item_label",children:[Object(h.jsx)("div",{className:e,children:t.label[0]}),"/",Object(h.jsx)("div",{className:i,children:t.label[1]})]}),Object(h.jsxs)("div",{className:"app-attenuation_item_value",children:[" -",t.attenuation]}),Object(h.jsx)("button",{className:"app-attenuation_item_button",onClick:function(){return a(t.id)},children:Object(h.jsxs)("svg",{height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"m453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0",fill:"#f44336"}),Object(h.jsx)("path",{d:"m350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",fill:"#fafafa"})]})})]},t.id.toFixed())}return Object(h.jsxs)("li",{className:"app-attenuation_item",children:[Object(h.jsx)("div",{className:"app-attenuation_item_label",children:Object(h.jsxs)("div",{className:"highLight",children:[t.label[0],"/",t.label[1]]})}),Object(h.jsxs)("div",{className:"app-attenuation_item_value",children:[" -",t.attenuation]}),Object(h.jsx)("button",{className:"app-attenuation_item_button",onClick:function(){return a(t.id)},children:Object(h.jsxs)("svg",{height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"m453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0",fill:"#f44336"}),Object(h.jsx)("path",{d:"m350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",fill:"#fafafa"})]})})]},t.id.toFixed())}));return Object(h.jsx)("div",{className:"app-table",children:Object(h.jsx)("ul",{className:"app-attenuation",children:s})})}),p=(i(25),function(t){var e=t.length,i=t.handleLength,a=t.handleMapModal,s=t.start,l=t.handleStart,n=t.count,c=t.handleCount,o=t.handleModal;return Object(h.jsxs)("div",{className:"inputs",children:[Object(h.jsxs)("div",{className:"inputs_item",children:[Object(h.jsx)("label",{children:"\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u0433\u043d\u0430\u043b: "}),Object(h.jsx)("input",{className:"inputs_item_input",type:"number",id:"length",name:"length",value:s,onChange:l}),"dBm"]}),Object(h.jsxs)("div",{className:"inputs_item",children:[Object(h.jsx)("label",{children:"\u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043b\u0438\u043d\u0438\u0438: "}),Object(h.jsxs)("div",{className:"inputs_item_length",children:[Object(h.jsx)("input",{className:"inputs_item_length_input",type:"number",id:"length",name:"length",min:"0",max:"30000",value:e,onChange:i}),Object(h.jsx)("input",{className:"inputs_item_length_map",type:"button",value:"",onClick:a})]}),"\u043c\u0435\u0442\u0440\u043e\u0432"]}),Object(h.jsxs)("div",{className:"inputs_item",children:[Object(h.jsx)("label",{children:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0432\u0430\u0440\u043e\u043a: "}),Object(h.jsx)("input",{className:"inputs_item_input",min:"0",type:"number",id:"length",name:"length",value:n,onChange:c}),"\u0448\u0442\u0443\u043a"]}),Object(h.jsx)("input",{className:"inputs_button",type:"button",value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c",onClick:o})]})}),j=i(31),b=i(32),g=i(11),f=(i(28),function(t){var e=t.handleMapLength,i=Object(a.useState)(0),s=Object(o.a)(i,2),l=s[0],n=s[1];return Object(h.jsxs)("div",{id:"mapid",children:[Object(h.jsxs)(j.a,{center:[50.4421237150998,30.520453831008716],zoom:13,scrollWheelZoom:!0,children:[Object(h.jsx)(b.a,{url:"http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"}),Object(h.jsx)(g.a,{callback:function(t){n(t)}})]}),Object(h.jsx)("input",{className:"map-button",type:"button",value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:function(){return e(l)}})]})}),v=(i(29),function(){var t=Object(a.useState)(0),e=Object(o.a)(t,2),i=e[0],s=e[1],l=Object(a.useState)(0),n=Object(o.a)(l,2),r=n[0],j=n[1],b=Object(a.useState)(0),g=Object(o.a)(b,2),v=g[0],x=g[1],O=Object(a.useState)(!1),L=Object(o.a)(O,2),k=L[0],y=L[1],N=Object(a.useState)(!1),C=Object(o.a)(N,2),M=C[0],w=C[1],D=Object(a.useState)([]),T=Object(o.a)(D,2),P=T[0],S=T[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{length:r,handleLength:function(t){j(t.target.value)},handleMapModal:function(){w(!0)},start:i,handleStart:function(t){s(t.target.value)},count:v,handleCount:function(t){x(t.target.value)},handleModal:function(){y(!0)}}),k?Object(h.jsx)(d,{show:k,children:Object(h.jsx)(u,{callback:function(t){S([].concat(Object(c.a)(P),[t])),x(+v+1)},handleClose:function(){y(!1)}})}):null,M?Object(h.jsx)(d,{show:M,children:Object(h.jsx)(f,{handleMapLength:function(t){j(+t),w(!1)}})}):null,Object(h.jsx)(m,{data:P,change:function(t){S(t)}}),Object(h.jsx)(_,{data:P,start:i,length:r,splices:v})]})});n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.600f5465.chunk.js.map