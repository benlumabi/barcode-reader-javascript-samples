(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{27:function(c,e,t){},28:function(c,e,t){},29:function(c,e,t){},35:function(c,e,t){},37:function(c,e,t){},38:function(c,e,t){"use strict";t.r(e);var n=t(8),r=t.n(n),a=t(20),s=t.n(a),o=(t(27),t(28),t(0)),i=t(2),l=t(4),h=t(5),u=t(6),d=t(7),j=(t(29),t.p+"static/media/logo.6ce24c58.svg"),b=t(11);b.a.license="DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAwLWRicl9qc19zYW1wbGVzIiwib3JnYW5pemF0aW9uSUQiOiIyMDAwMDAifQ==",b.a.engineResourcePath="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.2.11/dist/";var p=t(1),v=(t(35),t(3)),f=function(c){Object(u.a)(t,c);var e=Object(d.a)(t);function t(c){var n;return Object(l.a)(this,t),(n=e.call(this,c)).pScanner=null,n.elRef=r.a.createRef(),n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var c=Object(i.a)(Object(o.a)().mark((function c(){var e,t;return Object(o.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,this.pScanner=b.b.createInstance();case 3:return e=c.sent,c.next=6,e.setUIElement(this.elRef.current);case 6:return e.onFrameRead=function(c){var e,t=Object(p.a)(c);try{for(t.s();!(e=t.n()).done;){var n=e.value;console.log(n.barcodeText)}}catch(r){t.e(r)}finally{t.f()}},e.onUniqueRead=function(c,e){alert(c)},c.next=10,e.open();case 10:c.next=17;break;case 12:c.prev=12,c.t0=c.catch(0),t=c.t0.message.includes("network connection error")?"Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.":c.t0.message||c.t0,console.error(t),alert(t);case 17:case"end":return c.stop()}}),c,this,[[0,12]])})));return function(){return c.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var c=Object(i.a)(Object(o.a)().mark((function c(){return Object(o.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!this.pScanner){c.next=5;break}return c.next=3,this.pScanner;case 3:c.sent.destroyContext(),console.log("BarcodeScanner Component Unmount");case 5:case"end":return c.stop()}}),c,this)})));return function(){return c.apply(this,arguments)}}()},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(v.jsxs)("div",{ref:this.elRef,className:"component-barcode-scanner",children:[Object(v.jsx)("svg",{className:"dce-bg-loading",viewBox:"0 0 1792 1792",children:Object(v.jsx)("path",{d:"M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z"})}),Object(v.jsx)("svg",{className:"dce-bg-camera",viewBox:"0 0 2048 1792",children:Object(v.jsx)("path",{d:"M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"})}),Object(v.jsx)("div",{className:"dce-video-container"}),Object(v.jsx)("div",{className:"dce-scanarea",children:Object(v.jsx)("div",{className:"dce-scanlight"})}),Object(v.jsxs)("div",{className:"div-select-container",children:[Object(v.jsx)("select",{className:"dce-sel-camera"}),Object(v.jsx)("select",{className:"dce-sel-resolution"})]}),Object(v.jsx)("div",{className:"dbr-msg-poweredby",children:Object(v.jsx)("svg",{viewBox:"0 0 94 17",children:Object(v.jsxs)("g",{children:[Object(v.jsx)("path",{d:"M0.9,14V4.3h2.3c0.6,0,1,0.1,1.4,0.3c0.3,0.2,0.6,0.5,0.7,0.9s0.2,0.8,0.2,1.4c0,0.5-0.1,0.9-0.2,1.3 C5.1,8.5,4.9,8.8,4.5,9.1C4.2,9.3,3.7,9.4,3.2,9.4H1.8V14H0.9z M1.8,8.7h1.2c0.4,0,0.7-0.1,1-0.2S4.3,8.2,4.4,8 c0.1-0.3,0.2-0.6,0.2-1.1c0-0.5,0-0.9-0.1-1.2C4.3,5.4,4.2,5.2,3.9,5.1S3.4,5,2.9,5H1.8V8.7z"}),Object(v.jsx)("path",{d:"M8.1,14.1c-0.5,0-0.8-0.1-1.1-0.3s-0.5-0.5-0.6-0.9s-0.2-0.9-0.2-1.4V9.6c0-0.6,0.1-1,0.2-1.4 C6.5,7.8,6.7,7.5,7,7.3S7.6,7,8.1,7C8.6,7,9,7.1,9.2,7.3s0.5,0.5,0.6,0.9C9.9,8.5,9.9,9,9.9,9.6v1.9c0,0.6-0.1,1-0.2,1.4 c-0.1,0.4-0.3,0.7-0.6,0.9S8.6,14.1,8.1,14.1z M8.1,13.4c0.3,0,0.5-0.1,0.7-0.2C8.9,13,9,12.8,9,12.5c0-0.3,0-0.6,0-1v-2 c0-0.4,0-0.7,0-1C9,8.2,8.9,8,8.8,7.9C8.6,7.7,8.4,7.6,8.1,7.6c-0.3,0-0.5,0.1-0.7,0.2C7.3,8,7.2,8.2,7.2,8.5c0,0.3-0.1,0.6-0.1,1 v2c0,0.4,0,0.7,0.1,1c0,0.3,0.1,0.5,0.3,0.7C7.6,13.4,7.8,13.4,8.1,13.4z"}),Object(v.jsx)("path",{d:"M12,14l-1.1-6.9h0.7l0.9,5.8l1.1-5.8h0.8l1.1,5.8l0.8-5.8H17L15.9,14H15l-1.1-5.6L12.8,14H12z"}),Object(v.jsx)("path",{d:"M19.8,14.1c-0.4,0-0.8-0.1-1.1-0.3s-0.5-0.5-0.6-0.9c-0.1-0.4-0.2-0.9-0.2-1.6V9.6c0-0.7,0.1-1.2,0.2-1.6 c0.1-0.4,0.3-0.7,0.6-0.8C19,7,19.3,7,19.8,7c0.5,0,0.9,0.1,1.1,0.3c0.3,0.2,0.4,0.5,0.5,0.9c0.1,0.4,0.1,1,0.1,1.6v0.6h-2.8v1.2 c0,0.4,0,0.8,0.1,1.1c0.1,0.3,0.2,0.4,0.3,0.6s0.3,0.2,0.6,0.2c0.2,0,0.3,0,0.5-0.1c0.1-0.1,0.3-0.2,0.3-0.4s0.1-0.5,0.1-0.8v-0.5 h0.9V12c0,0.6-0.1,1.1-0.4,1.5S20.4,14.1,19.8,14.1z M18.8,9.9h1.9V9.4c0-0.4,0-0.7-0.1-0.9c0-0.3-0.1-0.5-0.3-0.6S20,7.6,19.8,7.6 c-0.2,0-0.4,0.1-0.6,0.2c-0.1,0.1-0.3,0.3-0.3,0.6c-0.1,0.3-0.1,0.7-0.1,1.1V9.9z"}),Object(v.jsx)("path",{d:"M22.8,14V7.1h0.9V8c0.2-0.4,0.5-0.6,0.8-0.8C24.8,7.1,25,7,25.3,7c0,0,0,0,0.1,0s0.1,0,0.1,0v0.9 c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2,0-0.2,0c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.3-0.6,0.6V14H22.8z"}),Object(v.jsx)("path",{d:"M28,14.1c-0.4,0-0.8-0.1-1.1-0.3s-0.5-0.5-0.6-0.9c-0.1-0.4-0.2-0.9-0.2-1.6V9.6c0-0.7,0.1-1.2,0.2-1.6 c0.1-0.4,0.3-0.7,0.6-0.8C27.3,7,27.6,7,28,7c0.5,0,0.9,0.1,1.1,0.3c0.3,0.2,0.4,0.5,0.5,0.9c0.1,0.4,0.1,1,0.1,1.6v0.6H27v1.2 c0,0.4,0,0.8,0.1,1.1c0.1,0.3,0.2,0.4,0.3,0.6s0.3,0.2,0.6,0.2c0.2,0,0.3,0,0.5-0.1c0.1-0.1,0.3-0.2,0.3-0.4s0.1-0.5,0.1-0.8v-0.5 h0.9V12c0,0.6-0.1,1.1-0.4,1.5S28.7,14.1,28,14.1z M27,9.9H29V9.4c0-0.4,0-0.7-0.1-0.9c0-0.3-0.1-0.5-0.3-0.6S28.3,7.6,28,7.6 c-0.2,0-0.4,0.1-0.6,0.2c-0.1,0.1-0.3,0.3-0.3,0.6C27.1,8.6,27,9,27,9.5V9.9z"}),Object(v.jsx)("path",{d:"M32.6,14.1c-0.6,0-1-0.2-1.3-0.7c-0.3-0.4-0.4-1.2-0.4-2.2V9.9c0-0.6,0-1.1,0.1-1.6c0.1-0.4,0.2-0.8,0.5-1 c0.2-0.2,0.6-0.4,1-0.4C32.8,7,33,7,33.2,7.1c0.2,0.1,0.4,0.3,0.5,0.4V4.3h0.9V14h-0.9v-0.5c-0.1,0.2-0.3,0.3-0.5,0.4 C33,14,32.8,14.1,32.6,14.1z M32.7,13.4c0.2,0,0.4,0,0.5-0.1c0.2-0.1,0.3-0.2,0.5-0.3V8.1c-0.1-0.1-0.3-0.2-0.4-0.3 c-0.2-0.1-0.4-0.2-0.6-0.2c-0.4,0-0.6,0.2-0.8,0.5S31.8,9,31.8,9.6v1.6c0,0.5,0,0.9,0.1,1.2c0.1,0.3,0.1,0.6,0.3,0.7 C32.3,13.3,32.5,13.4,32.7,13.4z"}),Object(v.jsx)("path",{d:"M40.5,14.1c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.4-0.3-0.5-0.4V14h-0.9V4.3h0.9v3.4c0.1-0.2,0.3-0.3,0.5-0.5 C40.1,7,40.3,7,40.6,7C41,7,41.2,7,41.4,7.2c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.3,0.2,0.6,0.2,0.9s0.1,0.7,0.1,1v1.5 c0,0.6,0,1.1-0.1,1.5c-0.1,0.4-0.3,0.8-0.5,1C41.3,14,41,14.1,40.5,14.1z M40.4,13.4c0.3,0,0.5-0.1,0.6-0.3 c0.1-0.2,0.2-0.4,0.3-0.8s0.1-0.7,0.1-1.2V9.7c0-0.5,0-0.8-0.1-1.1S41.1,8,41,7.9c-0.1-0.2-0.3-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2 c-0.2,0.1-0.3,0.2-0.5,0.4v4.7c0.1,0.1,0.3,0.3,0.5,0.4C40,13.4,40.2,13.4,40.4,13.4z"}),Object(v.jsx)("path",{d:"M43.2,15.7V15c0.4,0,0.7,0,0.9-0.1c0.2-0.1,0.3-0.1,0.4-0.3c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1,0-0.3-0.1-0.5 c0-0.2-0.1-0.4-0.2-0.6L43,7.1h0.9l1.2,5.9l1.2-5.9h0.9l-1.7,7.4c-0.1,0.3-0.2,0.5-0.3,0.7c-0.2,0.2-0.4,0.3-0.6,0.4 c-0.3,0.1-0.6,0.1-1,0.1H43.2z"}),Object(v.jsx)("path",{d:"M50.6,14V4.3h2.1c0.7,0,1.2,0.1,1.6,0.4c0.4,0.2,0.6,0.6,0.8,1c0.2,0.4,0.2,0.9,0.2,1.5V11 c0,0.6-0.1,1.1-0.2,1.6s-0.4,0.8-0.8,1S53.5,14,52.8,14H50.6z M51.5,13.3h1.2c0.5,0,0.9-0.1,1.1-0.3s0.4-0.5,0.5-0.9 s0.1-0.8,0.1-1.3V7.2c0-0.5,0-0.9-0.1-1.2s-0.2-0.6-0.5-0.8S53.2,5,52.7,5h-1.2V13.3z"}),Object(v.jsx)("path",{d:"M56.5,15.7V15c0.4,0,0.7,0,0.9-0.1c0.2-0.1,0.3-0.1,0.4-0.3c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1,0-0.3-0.1-0.5 c0-0.2-0.1-0.4-0.2-0.6l-1.4-6.1h0.9l1.2,5.9l1.2-5.9h0.9l-1.7,7.4c-0.1,0.3-0.2,0.5-0.3,0.7s-0.4,0.3-0.6,0.4s-0.6,0.1-1,0.1H56.5 z"}),Object(v.jsx)("path",{d:"M61.3,14V7.1h0.9v0.7c0.2-0.2,0.5-0.4,0.8-0.6C63.2,7,63.5,7,63.8,7C64,7,64.2,7,64.4,7.1s0.3,0.3,0.4,0.5 c0.1,0.2,0.1,0.5,0.1,0.8V14H64V8.6c0-0.4-0.1-0.6-0.2-0.8c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.6,0.2s-0.4,0.3-0.6,0.5V14 H61.3z"}),Object(v.jsx)("path",{d:"M67.4,14.1c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.4-0.3-0.5-0.6C66,13.1,66,12.8,66,12.6c0-0.4,0.1-0.7,0.2-0.9 s0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.4,0.9-0.6c0.4-0.2,0.8-0.4,1.3-0.6V9.3c0-0.4,0-0.8-0.1-1c-0.1-0.2-0.1-0.4-0.3-0.5 c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0-0.5,0.1c-0.1,0.1-0.3,0.2-0.3,0.4c-0.1,0.2-0.1,0.4-0.1,0.7V9l-0.9,0 c0-0.7,0.2-1.2,0.5-1.6C66.8,7.1,67.3,7,68,7c0.6,0,1.1,0.2,1.3,0.6c0.3,0.4,0.4,1,0.4,1.7v3.4c0,0.1,0,0.3,0,0.5 c0,0.2,0,0.4,0,0.5c0,0.2,0,0.3,0,0.4h-0.8c0-0.2-0.1-0.3-0.1-0.5c0-0.2,0-0.3-0.1-0.5c-0.1,0.3-0.3,0.5-0.5,0.7 S67.7,14.1,67.4,14.1z M67.6,13.4c0.2,0,0.3,0,0.5-0.1c0.1-0.1,0.3-0.2,0.4-0.3s0.2-0.3,0.3-0.4v-2.2c-0.3,0.2-0.6,0.3-0.9,0.5 c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.1-0.3,0.3-0.3,0.5s-0.1,0.4-0.1,0.6c0,0.4,0.1,0.6,0.2,0.8C67.2,13.3,67.4,13.4,67.6,13.4z"}),Object(v.jsx)("path",{d:"M70.9,14V7.1h0.8v0.7c0.2-0.3,0.5-0.5,0.8-0.6c0.3-0.1,0.6-0.2,0.9-0.2c0.2,0,0.5,0.1,0.7,0.2s0.3,0.4,0.4,0.7 c0.2-0.3,0.5-0.5,0.8-0.7c0.3-0.2,0.6-0.2,0.9-0.2c0.2,0,0.4,0,0.6,0.1s0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.5,0.2,0.9V14h-0.8V8.6 c0-0.4-0.1-0.7-0.2-0.8s-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.7,0.2S74.7,8,74.5,8.3c0,0,0,0.1,0,0.1s0,0.1,0,0.1V14h-0.8V8.6 c0-0.4-0.1-0.7-0.2-0.8c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.7,0.2c-0.2,0.1-0.4,0.3-0.6,0.5V14H70.9z"}),Object(v.jsx)("path",{d:"M80.2,14.1c-0.6,0-1-0.2-1.3-0.5c-0.3-0.4-0.5-0.8-0.6-1.4l0.7-0.2c0,0.5,0.2,0.9,0.4,1.2 c0.2,0.2,0.5,0.4,0.8,0.4c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.2-0.4,0.2-0.7c0-0.2-0.1-0.5-0.2-0.7c-0.1-0.2-0.4-0.5-0.6-0.7l-0.9-0.8 c-0.3-0.3-0.5-0.5-0.7-0.8c-0.2-0.3-0.2-0.6-0.2-0.9c0-0.3,0.1-0.6,0.2-0.8c0.1-0.2,0.3-0.4,0.6-0.5C79.5,7,79.8,7,80.2,7 c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.4,0.8,0.4,1.3L81.2,9c0-0.3-0.1-0.6-0.1-0.8s-0.2-0.4-0.3-0.5c-0.1-0.1-0.3-0.1-0.5-0.1 c-0.3,0-0.5,0.1-0.6,0.2c-0.2,0.1-0.2,0.4-0.2,0.6c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.2,0.3,0.4,0.5l1,0.9c0.2,0.2,0.4,0.3,0.6,0.5 c0.2,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.5,0.2,0.8c0,0.4-0.1,0.7-0.2,0.9c-0.1,0.2-0.4,0.4-0.6,0.6C80.9,14,80.6,14.1,80.2,14.1z"}),Object(v.jsx)("path",{d:"M84.7,14.1c-0.5,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.5-0.5-0.6-0.9s-0.2-0.9-0.2-1.4V9.6c0-0.6,0.1-1,0.2-1.4 c0.1-0.4,0.3-0.7,0.6-0.9C83.9,7.1,84.3,7,84.7,7c0.5,0,0.9,0.1,1.1,0.3s0.5,0.5,0.6,0.9c0.1,0.4,0.2,0.9,0.2,1.4v1.9 c0,0.6-0.1,1-0.2,1.4s-0.3,0.7-0.6,0.9S85.2,14.1,84.7,14.1z M84.7,13.4c0.3,0,0.5-0.1,0.7-0.2c0.1-0.2,0.2-0.4,0.3-0.7 c0-0.3,0-0.6,0-1v-2c0-0.4,0-0.7,0-1c0-0.3-0.1-0.5-0.3-0.7c-0.1-0.2-0.4-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.7,0.2 c-0.1,0.2-0.2,0.4-0.3,0.7c0,0.3-0.1,0.6-0.1,1v2c0,0.4,0,0.7,0.1,1c0,0.3,0.1,0.5,0.3,0.7C84.2,13.4,84.4,13.4,84.7,13.4z"}),Object(v.jsx)("path",{d:"M88.2,14V7.7h-0.9V7.1h0.9V6.3c0-0.3,0-0.6,0.1-0.9c0.1-0.3,0.2-0.5,0.4-0.6c0.2-0.2,0.5-0.2,0.8-0.2 c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.3,0.1v0.6c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.3,0-0.4,0.1-0.5,0.2s-0.1,0.4-0.1,0.8v0.8 h1.1v0.6h-1.1V14H88.2z"}),Object(v.jsx)("path",{d:"M92.7,14.1c-0.3,0-0.6-0.1-0.8-0.2s-0.3-0.3-0.4-0.5c-0.1-0.2-0.1-0.5-0.1-0.8V7.6h-0.9V7.1h0.9V4.9h0.9v2.1 h1.2v0.6h-1.2v4.8c0,0.3,0,0.6,0.1,0.7c0.1,0.1,0.2,0.2,0.5,0.2c0.1,0,0.2,0,0.2,0s0.2,0,0.3,0V14c-0.1,0-0.2,0-0.4,0.1 C92.9,14.1,92.8,14.1,92.7,14.1z"})]})})})]})}}]),t}(r.a.Component),m=f,O=(t(37),function(c){Object(u.a)(t,c);var e=Object(d.a)(t);function t(c){var n;return Object(l.a)(this,t),(n=e.call(this,c)).decodeImg=function(){var c=Object(i.a)(Object(o.a)().mark((function c(e){var t,r,a,s,i,l;return Object(o.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,n.pReader=n.pReader||b.a.createInstance();case 3:return t=c.sent,c.next=6,t.decode(e.target.files[0]);case 6:r=c.sent,a=Object(p.a)(r);try{for(a.s();!(s=a.n()).done;)i=s.value,alert(i.barcodeText)}catch(o){a.e(o)}finally{a.f()}r.length||alert("No barcode found"),c.next=17;break;case 12:c.prev=12,c.t0=c.catch(0),l=c.t0.message.includes("network connection error")?"Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.":c.t0.message||c.t0,console.error(l),alert(l);case 17:e.target.value="";case 18:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}(),n.pReader=null,n}return Object(h.a)(t,[{key:"componentWillUnmount",value:function(){var c=Object(i.a)(Object(o.a)().mark((function c(){return Object(o.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!this.pReader){c.next=5;break}return c.next=3,this.pReader;case 3:c.sent.destroyContext(),console.log("ImgDecode Component Unmount");case 5:case"end":return c.stop()}}),c,this)})));return function(){return c.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)("div",{className:"ImgDecode",children:Object(v.jsx)("input",{type:"file",onChange:this.decodeImg})})}}]),t}(n.Component)),x=function(c){Object(u.a)(t,c);var e=Object(d.a)(t);function t(c){var n;return Object(l.a)(this,t),(n=e.call(this,c)).showScanner=function(){n.setState({bShowScanner:!0,bShowImgDecode:!1})},n.showImgDecode=function(){n.setState({bShowScanner:!1,bShowImgDecode:!0})},n.state={bShowScanner:!0,bShowImgDecode:!1},n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var c=Object(i.a)(Object(o.a)().mark((function c(){var e;return Object(o.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,b.a.loadWasm();case 3:c.next=10;break;case 5:c.prev=5,c.t0=c.catch(0),e=c.t0.message.includes("network connection error")?"Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.":c.t0.message||c.t0,console.error(e),alert(e);case 10:case"end":return c.stop()}}),c,null,[[0,5]])})));return function(){return c.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"helloWorld",children:[Object(v.jsxs)("h1",{children:["Hello World for React",Object(v.jsx)("img",{src:j,className:"App-logo",alt:"logo"})]}),Object(v.jsxs)("div",{className:"btn-group",children:[Object(v.jsx)("button",{style:{marginRight:"10px",backgroundColor:this.state.bShowScanner?"rgb(255,174,55)":"white"},onClick:this.showScanner,children:"Video Decode"}),Object(v.jsx)("button",{style:{backgroundColor:this.state.bShowImgDecode?"rgb(255,174,55)":"white"},onClick:this.showImgDecode,children:"Image Decode"})]}),Object(v.jsxs)("div",{className:"container",children:[this.state.bShowScanner?Object(v.jsx)(m,{}):"",this.state.bShowImgDecode?Object(v.jsx)(O,{}):""]})]})}}]),t}(r.a.Component),g=x;var V=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(g,{})})},C=function(c){c&&c instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;t(c),n(c),r(c),a(c),s(c)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(V,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.6dbc2208.chunk.js.map