(this["webpackJsonpreact-first-app"]=this["webpackJsonpreact-first-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),l=n(7),u=n(6),b=(n(14),n(15),n(16),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.robot.id,"?set=set1&size=180x180")}),Object(c.jsx)("h2",{className:"white-text",children:e.robot.name}),Object(c.jsx)("p",{className:"white-text",children:e.robot.email}),Object(c.jsx)("p",{className:"white-text",children:e.robot.phone})]})}),d=function(e){return Object(c.jsx)("div",{className:"card-list",children:e.robots.map((function(e){return Object(c.jsx)(b,{robot:e},e.id)}))})},j=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{className:"search-box",type:"search",placeholder:t,onChange:n})}),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"ROB_LOG"}),Object(c.jsx)(j,{placeholder:"Search robots",handleChange:this.handleChange}),Object(c.jsx)(d,{robots:r})]})}}]),n}(r.Component);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.5e932839.chunk.js.map