(this.webpackJsonpfronend=this.webpackJsonpfronend||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"a":"http://localhost:3000"}')},52:function(e,t,a){},53:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(26),s=a.n(c),o=(a(51),a(10)),i=(a(52),a(53),a(8)),l=a.n(i),u=a(12),b=a(15),j=a(17),d=a(18),h=a(20),m=a(19),O=a(13),p=a.n(O),v=a(21),f=a(25),x=a.n(f),g={get:x.a.get,post:x.a.post,put:x.a.put,delete:x.a.delete};function w(e){return g.post(v.a+"/newUser",{name:e.name,email:e.email,password:e.password})}function S(e){return g.post(v.a+"/login",{email:e.email,password:e.password})}var y=a(43),N=a(22),k=a(46),E=a(1);var C=function(e){var t=e.name,a=e.label,r=e.error,n=Object(k.a)(e,["name","label","error"]);return Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:t,children:a}),Object(E.jsx)("input",Object(u.a)(Object(u.a)({},n),{},{name:t,id:t,className:"form-control"})),r&&Object(E.jsx)("div",{className:"alert alert-dark",children:r})]})},_=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},errors:{}},e.validateProperty=function(t){var a=t.name,r=t.value,n=Object(N.a)({},a,r),c=Object(N.a)({},a,e.schema[a]),s=p.a.validate(n,c).error;return s?s.details[0].message:null},e.validate=function(){var t=p.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,r={},n=Object(y.a)(t.details);try{for(n.s();!(a=n.n()).done;){var c=a.value;r[c.path[0]]=c.message}}catch(s){n.e(s)}finally{n.f()}return r},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,r=Object(u.a)({},e.state.errors),n=e.validateProperty(a);n?r[a.name]=n:delete r[a.name];var c=Object(u.a)({},e.state.data);c[a.name]=a.value,e.setState({data:c,errors:r})},e}return Object(d.a)(a,[{key:"renderButton",value:function(e){return Object(E.jsx)("button",{disabled:this.validate(),className:"btn btn-dark btn-lg btn-block",children:e})}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,n=r.data,c=r.errors;return Object(E.jsx)(C,{type:a,name:e,placeholder:"Enter ".concat(e),label:t,value:n[e],onChange:this.handleChange,error:c[e]})}}]),a}(r.Component),F=a(11);function U(e){return{type:"SET_USER_NAME",payload:e}}var I=Object(F.b)(null,(function(e){return{setUserName:function(t){return e(U(t))}}}))(function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).setUserName=e.props.setUserName,e.state={data:{name:"",email:"",password:""},errors:{}},e.schema={name:p.a.string().required().label("Name"),email:p.a.string().email().required().label("email"),password:p.a.string().min(5).required().label("Password")},e.doSubmit=Object(b.a)(l.a.mark((function t(){var a,r,n,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e.state.data);case 3:a=t.sent,r=a.data,n=r.jwt,c=r.name,n&&e.setUserName(c),localStorage.setItem("token",n),e.props.history.push("/weather"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((s=Object(u.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:s}));case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e}return Object(d.a)(a,[{key:"render",value:function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)("br",{}),Object(E.jsxs)("form",{className:"inner",onSubmit:this.handleSubmit,children:[Object(E.jsx)("h3",{children:"Register"}),this.renderInput("name","Name"),this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Register")]}),Object(E.jsx)("br",{})]})}}]),a}(_)),T=Object(F.b)(null,(function(e){return{setUserName:function(t){return e(U(t))}}}))(function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).setUserName=e.props.setUserName,e.state={data:{email:"",password:""},errors:{}},e.schema={email:p.a.string().email().required().label("email"),password:p.a.string().min(5).required().label("Password")},e.doSubmit=Object(b.a)(l.a.mark((function t(){var a,r,n,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e.state.data);case 3:a=t.sent,r=a.data,n=r.jwt,c=r.name,n&&e.setUserName(c),localStorage.setItem("token",n),e.props.history.push("/weather"),t.next=18;break;case 11:t.prev=11,t.t0=t.catch(0),alert("wrong password!"),(s=Object(u.a)({},e.state.data)).email="",s.password="",e.setState({data:s});case 18:case"end":return t.stop()}}),t,null,[[0,11]])}))),e}return Object(d.a)(a,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:"login",children:[Object(E.jsx)("br",{}),Object(E.jsxs)("form",{className:"inner",onSubmit:this.handleSubmit,children:[Object(E.jsx)("h3",{children:"Login"}),this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Login"),Object(E.jsxs)(o.b,{className:"ms-auto p-2 bd-highlight forgot-password text-right",to:"/register",children:[" ","Register"]})]}),Object(E.jsx)("br",{})]})}}]),a}(_)),R=Object(F.b)((function(e){return{name:e.userReducer.user.name}}),(function(e){return{setUserName:function(t){return e(U(t))}}}))((function(e){var t=e.name,a=e.setUserName;return Object(E.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:Object(E.jsxs)("div",{className:"navbar-nav d-flex flex-row mb-1",children:[!t&&Object(E.jsxs)(E.Fragment,{children:[" ",Object(E.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Weather Forcast"}),Object(E.jsx)(o.c,{className:"nav-item nav-link",to:"/login",children:"Login"})," "]}),t&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"navbar-brand",children:"Hello ".concat(t,"!  ")}),Object(E.jsx)(o.b,{className:"navbar-brand",to:"/weather",children:"Weather Forcast"}),Object(E.jsx)(o.c,{className:"nav-item nav-link",to:"/history",children:"Browse History"}),Object(E.jsx)(o.c,{className:"nav-item nav-link",onClick:function(){localStorage.removeItem("token"),a(null)},to:"/login",children:"Log out"}),Object(E.jsx)("div",{className:"navbar-brand m-1"})]})]})})})),P=a(14);function W(e){return g.get("".concat(v.a,"/getWeather/").concat(e),{headers:{authorization:localStorage.getItem("token")}})}var L=Object(F.b)((function(e){return{user:e.userReducer.user}}),null)((function(e){e.user;var t=Object(r.useState)("-"),a=Object(P.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(""),o=Object(P.a)(s,2),i=o[0],u=o[1],j=Object(r.useState)(""),d=Object(P.a)(j,2),h=d[0],m=d[1],O=Object(r.useState)(""),p=Object(P.a)(O,2),v=p[0],f=p[1],x=Object(r.useState)("unknown"),g=Object(P.a)(x,2),w=g[0],S=g[1],y=Object(r.useState)("C"),N=Object(P.a)(y,2),k=N[0],C=N[1],_=Object(r.useState)(!0),F=Object(P.a)(_,2),U=F[0],I=F[1];Object(r.useEffect)((function(){m("")}),[]);var T=function(){var e=Object(b.a)(l.a.mark((function e(){var t,a,r,n,s,o,i,b,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h,e.prev=1,e.next=4,W(t);case 4:a=e.sent,r=a.data,n=r.weather,s=n.name,o=n.country,i=n.temp,b=n.desc,j=n.icon,c(Math.floor(i-273)),u(b),m(s),f(o),S(j),e.next=23;break;case 15:e.prev=15,e.t0=e.catch(1),alert("city not found!"),m(""),S("unknown"),f(""),u(""),c("-");case 23:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:["Weather ",Object(E.jsx)("br",{}),Object(E.jsx)("img",{src:"".concat("","/icons2/").concat(w,".png"),height:"80px",alt:""}),Object(E.jsx)("br",{}),Object(E.jsxs)("div",{onClick:function(){U?(c(Math.floor(9*n/5+32)),I(!1),C("F")):(I(!0),C("C"),c(Math.floor(5*(n-32)/9)))},children:[n,"\xb0",k]}),Object(E.jsx)("br",{}),i,Object(E.jsx)("br",{}),"".concat(h,", ").concat(v),Object(E.jsx)("br",{}),Object(E.jsx)("input",{className:"cen w-40 my-2",placeholder:"search city",type:"text",value:h,onChange:function(e){return m(e.target.value)}}),Object(E.jsx)("br",{}),Object(E.jsx)("button",{className:"btn btn-primary mb-2",onClick:T,children:"GET"})]})})),A=a(3),D=a(24),B=a(45),H=Object(B.a)((function(e,t){if("SET_USER_NAME"!==t.type)return e;e.user.name=t.payload}),{user:{name:null}}),M=Object(D.b)({userReducer:H}),q=Object(D.c)(M);window.store=q;var J=q;var K=function(e){var t=Object(r.useState)([]),a=Object(P.a)(t,2),n=a[0],c=a[1],s=function(){var e=Object(b.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("".concat(v.a,"/getWeatherHistory"),{headers:{authorization:localStorage.getItem("token")}});case 2:t=e.sent,(a=t.data).reverse(),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("br",{}),Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{className:"btn btn-primary",onClick:s,children:"Get History"}),Object(E.jsx)("ul",{children:n.reverse().map((function(e){return Object(E.jsxs)("li",{children:[Object(E.jsx)("a",{"data-toggle":"collapse",href:"#".concat(e._id),children:e.name}),Object(E.jsx)("div",{id:"".concat(e._id),className:"collapse in",children:"".concat(e.desc," ").concat(Math.floor(e.temp-273),"\xb0C on ").concat((t=e.date,new Date(t).toLocaleDateString([],{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})))})]},e._id);var t}))})]}),Object(E.jsx)("br",{})]})};var z=function(e){return Object(E.jsxs)(E.Fragment,{children:[" ",Object(E.jsx)("br",{})," ",Object(E.jsx)("h1",{children:"Welcome to the Weather App"})]})};var G=function(){return Object(E.jsxs)(F.a,{store:J,children:[Object(E.jsx)(R,{}),Object(E.jsxs)(A.c,{children:[Object(E.jsx)(A.a,{path:"/register",component:I}),Object(E.jsx)(A.a,{path:"/login",component:T}),Object(E.jsx)(A.a,{path:"/history",component:K}),Object(E.jsx)(A.a,{path:"/weather",component:L}),Object(E.jsx)(A.a,{path:"/",component:z})]})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),s.a.render(Object(E.jsx)(o.a,{children:Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(G,{})})}),document.getElementById("root")),V()}},[[79,1,2]]]);
//# sourceMappingURL=main.1820f9e8.chunk.js.map