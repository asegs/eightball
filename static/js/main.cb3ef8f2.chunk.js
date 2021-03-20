(this.webpackJsonpeightball=this.webpackJsonpeightball||[]).push([[0],{16:function(t,e,s){},28:function(t,e,s){},35:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),r=s(5),i=s.n(r),o=(s(28),s(16),s(10)),c=s.n(o),l=s(15),u=s(17),h=s(18),p=s(21),j=s(20),d=s(50),g=s(2);function b(t){return Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:t.response.question}),Object(g.jsx)("p",{style:{color:t.color},children:t.response.answer}),Object(g.jsx)("hr",{})]})}var y=s(51);function O(t){for(var e=[],s=0;s<t.history.length;s++)e.push(Object(g.jsx)(b,{response:t.history[s],color:t.getResponseColor(t.history[s])}));var n=Object(g.jsxs)("div",{className:"modal",children:[e,Object(g.jsx)("button",{onClick:t.toggle,children:"Close"}),Object(g.jsx)("button",{onClick:t.clear,children:"Clear history"})]});return Object(g.jsx)(y.a,{open:t.open,onClose:t.toggle,children:Object(g.jsx)("p",{children:n})})}var f=function(t){Object(p.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(u.a)(this,s),(n=e.call(this,t)).validateInput=function(){return n.state.question.endsWith("?")},n.setQuestion=function(t){n.setState({question:t.target.value})},n.sanitize=function(t){return t.replaceAll("/","")},n.appendToHistory=function(t){var e=n.state.history;n.state.history.length<10||e.shift(),e.push(t),n.setState({history:e})},n.clearHistory=function(){n.setState({history:[]})},n.getLastResponse=function(){return n.state.history.length>0?n.state.history[n.state.history.length-1]:{answer:"",question:"",type:""}},n.getResponseColor=function(t){switch(t.type){case"Affirmative":return"green";case"Contrary":return"red";default:return"black"}},n.toggleModal=function(){n.setState({modalOpen:!n.state.modalOpen})},n.state={question:"",history:[],loadingPage:!0,loadingResponse:!1,modalOpen:!1,error:""},n}return Object(h.a)(s,[{key:"executeCall",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.validateInput()&&this.setState({loadingResponse:!0},(function(){e.callEightBallAPI()}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"callEightBallAPI",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,s,n,a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=encodeURIComponent(this.sanitize(this.state.question)),s="https://8ball.delegator.com/magic/JSON/"+e,t.next=4,fetch(s);case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,this.appendToHistory(a.magic),"Neutral"!==a.magic.type&&this.setState({question:""}),r=200===n.status?"":"Server unresponsive.",this.setState({loadingResponse:!1,error:r});case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setState({loadingPage:!1})}},{key:"render",value:function(){var t=this,e=this.validateInput(),s=this.getLastResponse();if(this.state.loadingPage)return Object(g.jsx)(d.a,{});var n=this.state.loadingResponse?Object(g.jsx)(d.a,{color:"primary"}):Object(g.jsx)("p",{className:"paragraphStyle",style:{color:this.getResponseColor(s)},children:s.answer});return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"headerStyle",children:"Magic 8-Ball"}),Object(g.jsx)("img",{className:"imageStyle",src:this.props.image}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),n,Object(g.jsx)("p",{className:"paragraphStyle",children:"Ask the oracle:"}),Object(g.jsx)("input",{type:"text",className:e?"textFieldValidStyle":"textFieldInvalidStyle",value:this.state.question,onChange:this.setQuestion}),Object(g.jsx)("p",{style:{color:"white"},children:e?"":"Must end in a question mark"}),Object(g.jsx)("p",{style:{color:"red"},children:this.state.error}),Object(g.jsx)("button",{className:e?"buttonValid":"buttonInvalid",onClick:function(){return t.executeCall()},children:"Ask"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{className:this.state.history.length>0?"buttonValid":"buttonInvalid",onClick:function(){return t.toggleModal()},children:"View History"}),Object(g.jsx)(O,{clear:this.clearHistory,getResponseColor:this.getResponseColor,history:this.state.history,open:this.state.modalOpen,toggle:this.toggleModal})]})}}]),s}(n.Component),x=s.p+"static/media/eightball.5c347cb0.jpg";var v=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(f,{image:x})})},m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),r(t),i(t)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),m()}},[[35,1,2]]]);
//# sourceMappingURL=main.cb3ef8f2.chunk.js.map