(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=a(1),l=(a(13),a(0)),d=function(e){var t=e.user,a=t.name,n=t.email;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},u=function(e){var t=e.todo,a=t.completed,n=t.id,i=t.user,r=t.title,c="TodoInfo".concat(a?" TodoInfo--completed":"");return Object(l.jsxs)("article",{className:c,"data-id":n,children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:r}),i&&Object(l.jsx)(d,{user:i})]})},m=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(u,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];function h(e){return j.find((function(t){return t.id===e}))||null}var f=b.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:h(e.userId)})})),O=function(){var e=Object(o.useState)(f),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),s=Object(c.a)(i,2),d=s[0],u=s[1],O=Object(o.useState)(""),p=Object(c.a)(O,2),x=p[0],v=p[1],y=Object(o.useState)(!0),S=Object(c.a)(y,2),N=S[0],I=S[1],g=Object(o.useState)(!0),C=Object(c.a)(g,2),_=C[0],k=C[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsxs)("form",{action:"/api/users",method:"POST",id:"form",onSubmit:function(e){return function(e){if(e.preventDefault(),x.trim()&&d){var t={id:Math.max.apply(Math,Object(r.a)(b.map((function(e){return e.id}))))+1,title:x,completed:!1,userId:d,user:h(d)};return n([].concat(Object(r.a)(a),[t])),u(0),void v("")}x.trim()||k(!1),d||I(!1)}(e)},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(l.jsx)("input",{type:"text","data-cy":"titleInput",id:"title",value:x,onChange:function(e){return function(e){k(!0),v(e.target.value)}(e)},placeholder:"Enter a title"}),!_&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"user",children:"User: "}),Object(l.jsxs)("select",{"data-cy":"userSelect",id:"user",value:d,onChange:function(e){return function(e){I(!0),u(+e.target.value)}(e)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),j.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),!N&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(l.jsx)(m,{todos:a})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5daa5ce7.chunk.js.map