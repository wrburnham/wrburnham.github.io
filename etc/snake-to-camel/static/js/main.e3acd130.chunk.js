(this["webpackJsonpsnake-to-camel"]=this["webpackJsonpsnake-to-camel"]||[]).push([[0],{21:function(e,a,t){e.exports=t(36)},26:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(4),c=t.n(r),o=(t(26),t(14)),i=t(15),s=t(3),m=t(20),u=t(19),d=t(16),p=t.n(d),h=t(11),C=t.n(h),E=t(17),k=t.n(E),b=t(18),v=t.n(b),f=t(7),T=t.n(f),y=t(5),w=t.n(y),g=(t(31),t(9)),z=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).textarea=null,n.state={snake:"",camel:"",capitalizeFirst:!1},n.snakeToCamelHandler=n.snakeToCamelHandler.bind(Object(s.a)(n)),n.capitalizeFirstHandler=n.capitalizeFirstHandler.bind(Object(s.a)(n)),n.snakeToCamel=n.snakeToCamel.bind(Object(s.a)(n)),n.copyCamelToClipboard=n.copyCamelToClipboard.bind(Object(s.a)(n)),n}return Object(i.a)(t,[{key:"copyCamelToClipboard",value:function(e){this.camelTextArea.controlEl.select(),document.execCommand("copy"),e.target.focus(),g.b.info("Copied camelCase text to clipboard.")}},{key:"snakeToCamelHandler",value:function(e){var a=e.target.value;this.setState({snake:a});var t=this.snakeToCamel(a,this.state.capitalizeFirst);this.setState({camel:t})}},{key:"capitalizeFirstHandler",value:function(e){var a=e.target.checked,t=this.snakeToCamel(this.state.snake,a);this.setState({capitalizeFirst:a,camel:t})}},{key:"snakeToCamel",value:function(e,a){var t=e.toLowerCase().replace(/([-_][a-z0-9])/g,(function(e){return e.toUpperCase().replace("-","").replace("_","")}));return a&&(t=(t=t.replace(/([\s][a-z0-9])/g,(function(e){return e.toUpperCase()}))).charAt(0).toUpperCase()+t.substring(1)),t}},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{fluid:!0},l.a.createElement(T.a,null,l.a.createElement(w.a,{md:"12"},l.a.createElement("h1",null,"Snake Case to Camel Case"),l.a.createElement("p",null,"Convert a list of ",l.a.createElement("code",null,"SNAKE_CASE")," or ",l.a.createElement("code",null,"KEBAB-CASE")," terms to their ",l.a.createElement("code",null,"camelCase"),' equivalents. Clicking "capitalize first"  will capitalize the first letter of every ',l.a.createElement("code",null,"camelCase")," term (also known as ",l.a.createElement("code",null,"PascalCase"),"). The input can be mixed. For example ",l.a.createElement("code",null,"TERM-ONE term_two Term-Three")," will be converted to ",l.a.createElement("code",null,"termOne termTwo termThree"),"."))),l.a.createElement(T.a,null,l.a.createElement(w.a,{md:"12"},l.a.createElement(C.a,{label:"Input",rows:"4",value:this.state.snake,placeholder:"TRY_ME",onChange:this.snakeToCamelHandler}))),l.a.createElement(T.a,null,l.a.createElement(w.a,{md:"12"},l.a.createElement(C.a,{label:"Output",rows:"4",value:this.state.camel,placeholder:"tryMe",ref:function(a){return e.camelTextArea=a},readOnly:!0}))),l.a.createElement(T.a,null,l.a.createElement(w.a,{md:"2",sm:"4",xs:"6"},l.a.createElement(k.a,{value:this.state.capitalizeFirst,label:"Capitalize first",onChange:this.capitalizeFirstHandler})),l.a.createElement(w.a,{md:"2",sm:"4",xs:"6"},l.a.createElement(v.a,{color:"primary",disabled:0===this.state.camel.length,onClick:this.copyCamelToClipboard},"Copy"))))}}]),t}(l.a.Component);t(34),t(35);var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(z,null),l.a.createElement(g.a,{autoClose:2500}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.e3acd130.chunk.js.map