(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{242:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(65),i=a.n(o),c=(a(74),a(26)),s=a(27),u=a(29),l=a(28),d=a(30),f=(a(76),a(77),a(66)),h=a.n(f),p=a(67),v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={chartData:{},requestData:[]},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;h.a.get("/api").then(function(e){var a=e.data,n={labels:t.getLabels(a),datasets:[{data:t.dataAsPercentages(a),backgroundColor:"#ffb935"}]};t.setState(function(t,e){return{chartData:n}},function(){t.forceUpdate()})})}},{key:"render",value:function(){return this.state.chartData.datasets?r.a.createElement("div",{className:"chart"},r.a.createElement(p.a,{data:this.state.chartData,options:{title:{display:!0,text:"Years Coding Professionally",fontSize:25},legend:{display:!1,position:"right"}}})):r.a.createElement("div",null,"Loading...")}},{key:"dataAsPercentages",value:function(t){var e=[],a=0;for(var n in t)a+=t[n];for(var r in t){var o=t[r]/a*100;e.push(Math.round(10*o)/10)}return e}},{key:"getLabels",value:function(t){var e=[];for(var a in t)e.push(a);return e}}]),e}(n.Component),m=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},69:function(t,e,a){t.exports=a(242)},74:function(t,e,a){},76:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},77:function(t,e,a){}},[[69,2,1]]]);
//# sourceMappingURL=main.e8688075.chunk.js.map