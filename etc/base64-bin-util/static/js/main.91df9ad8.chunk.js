(this["webpackJsonpbase64-bin-util"]=this["webpackJsonpbase64-bin-util"]||[]).push([[0],{67:function(e,t,a){e.exports=a(78)},72:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),l=(a(72),a(17)),c=a(18),s=a(19),d=a(24),u=a(23),b=a(117),m=a(113),p=a(54),h=a(116),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);e.children,e.value,e.index,Object(p.a)(e,["children","value","index"]);return n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:this.props.value!==this.props.index,id:"panel-".concat(this.props.index),"aria-labelledby":"tab-".concat(this.props.index)},this.props.other),this.props.value===this.props.index&&o.a.createElement(h.a,{p:3},this.props.children))}}]),a}(o.a.Component),f=a(112),g=a(111),E=a(114),y=a(110),w=a(12),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={downloadLink:"",actionEnabled:!1},n.update=n.update.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"update",value:function(e){this.setState({actionEnabled:!1});var t=e.target.value,a="";try{w.b.info("Converting...",{toastId:"toast-converting-b64tobin"}),a=atob(t)}catch(o){w.b.error("Error: ".concat(o.message),{toastId:"toast-error-b64tobin"}),console.error(o),a=""}if(""!==a){var n=this.downloadLink(this.toBin(a));""!==this.state.downloadLink&&window.URL.revokeObjectURL(this.state.downloadLink),w.b.info("Converted",{toastId:"toast-converted-b64tobin"}),this.setState({downloadLink:n,actionEnabled:!0})}}},{key:"downloadLink",value:function(e){var t=new Blob([e],{type:"application/octet-stream"});return window.URL.createObjectURL(t)}},{key:"toBin",value:function(e){for(var t=new Uint8Array(e.length),a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}},{key:"render",value:function(){var e={style:{marginBottom:"1rem",marginTop:"2rem"}};return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(E.a,{multiline:!0,rows:4,rowsMax:4,fullWidth:!0,size:"medium",placeholder:"Paste some base 64 text here",onChange:this.update})),o.a.createElement(h.a,e,o.a.createElement(y.a,{color:"primary",variant:"contained",disabled:!this.state.actionEnabled,href:this.state.downloadLink,download:"binary"},o.a.createElement(g.a,null,"Download"))))}}]),a}(o.a.Component),k=a(53),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={output:""},n.outputTextId="outputTextId",n.copyToClipboard=n.copyToClipboard.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleAccepted",value:function(e){var t=this;if(0===e.length)w.b.error("No file specified.",{toastId:"toast-error-no-file-bintob64"});else if(1!==e.length)w.b.error("Cannot process multiple files.",{toastId:"toast-error-multiple-files-bintob64"});else{w.b.info("Converting...",{toastId:"toast-converting-bintob64"});var a=e[0],n=new FileReader;n.onload=function(){try{for(var e=new Uint8Array(this.result),n=e.byteLength,o="",r=0;r<n;r++)o+=String.fromCharCode(e[r]);i=btoa(o),t.setState({output:i}),w.b.info("Converted ".concat(a.name," to base64."),{toastId:"toast-converted-bintob64"})}catch(l){w.b.error("Error: ".concat(l.message),{toastId:"toast-error-bintob64"}),console.error(l)}var i},n.readAsArrayBuffer(a)}}},{key:"copyToClipboard",value:function(e){document.getElementById(this.outputTextId).select(),document.execCommand("copy"),e.target.focus(),w.b.info("Copied base64 text to clipboard.",{toastId:"toast-copy-bintob64"})}},{key:"render",value:function(){var e=this,t={bgcolor:"background.default",color:"primary.light",style:{fontWeight:"bold",borderWidth:"2px",borderStyle:"dashed",textAlign:"center",cursor:"pointer",marginBottom:"1rem"}},a={style:{marginBottom:"1rem",marginTop:"2rem"}},n={style:{marginBottom:"1rem",marginTop:"1rem"}},r={style:{paddingBottom:"1rem",paddingTop:"1rem"}};return o.a.createElement("div",null,o.a.createElement(h.a,n,o.a.createElement(k.a,{onDrop:function(t){return e.handleAccepted(t)}},(function(e){var a=e.getRootProps,n=e.getInputProps;return o.a.createElement("section",null,o.a.createElement("div",a(),o.a.createElement("input",n()),o.a.createElement(h.a,t,o.a.createElement("p",r,"Drop a file here or click to select."))))}))),o.a.createElement(h.a,a,o.a.createElement(E.a,{id:this.outputTextId,multiline:!0,rows:4,rowsMax:4,fullWidth:!0,size:"medium",placeholder:"Output",value:this.state.output,InputProps:{readOnly:!0}})),o.a.createElement(h.a,a,o.a.createElement(y.a,{color:"primary",variant:"contained",disabled:""===this.state.output,onClick:this.copyToClipboard},o.a.createElement(g.a,null,"Copy"))))}}]),a}(o.a.Component),j=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:0},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e,t){this.setState({value:t})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{position:"static"},o.a.createElement(b.a,{value:this.state.value,onChange:this.handleChange},o.a.createElement(m.a,{label:"bin to b64"}),o.a.createElement(m.a,{label:"b64 to bin"}))),o.a.createElement(v,{value:this.state.value,index:0},o.a.createElement(O,null)),o.a.createElement(v,{value:this.state.value,index:1},o.a.createElement(C,null)))}}]),a}(o.a.Component);a(76),a(77);var x=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j,null),o.a.createElement(w.a,{autoClose:2500}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.91df9ad8.chunk.js.map