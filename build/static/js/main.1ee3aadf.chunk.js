(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(17),d=c.n(s),i=(c(28),c(29),c(5)),r=c(13),j=c(0),o=function(e){var t=e.selectedtab,c=e.setselectedtab;return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsxs)("div",{className:"Index"===t?"active":"",onClick:function(){return c("Index")},children:[Object(j.jsx)(r.a,{className:"icon"}),"Inbox"]}),Object(j.jsxs)("div",{className:"today"===t?"active":"",onClick:function(){return c("today")},children:[Object(j.jsx)(r.c,{className:"icon"}),"Today"]}),Object(j.jsxs)("div",{className:"next_7"===t?"active":"",onClick:function(){return c("next_7")},children:[Object(j.jsx)(r.b,{className:"icon"}),"Next 7 days"]})]})},b=c(22),l=c(18),u=c.n(l),O=(c(39),c(7)),x=c(19),f=c(20),h=c(23),m=c(21),v="dd/MM/yyyy";function p(e,t,c){return Object(O.a)(e,t,{locale:c})}var k=function(e){var t=e.onCancel,c=e.onAdd,a=Object(n.useState)(""),s=Object(i.a)(a,2),d=s[0],r=s[1],o=Object(n.useState)(null),b=Object(i.a)(o,2),l=b[0],x=b[1];return Object(j.jsxs)("div",{className:"add-tsk-dial",children:[Object(j.jsx)("input",{value:d,onChange:function(e){return r(e.target.value)}}),Object(j.jsxs)("div",{className:"add-task-actions-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"add_tsk",disabled:!d,onClick:function(){c(d,l),r("")},children:"Add Task"}),Object(j.jsx)("button",{className:"cnc",onClick:function(){t(),r("")},children:"Cancel"})]}),Object(j.jsx)("div",{className:"icon-container",children:Object(j.jsx)(u.a,{onDayChange:function(e){return x(e)},placeholder:"".concat(Object(O.a)(new Date,v)),formatDate:p,format:v,dayPickerProps:{modifiers:{disabled:[{before:new Date}]}}})})]})]})},N={Index:"Inbox",today:"Today",next_7:"next 7 days"},y=function(e){var t=e.tasks,c=e.selectedtab;return"next_7"===c?t.filter((function(e){return Object(x.a)(e.date,new Date)&&Object(f.a)(e.date,Object(m.a)(new Date,7))})).map((function(e){return Object(j.jsxs)("p",{children:[e.text," ",Object(O.a)(new Date(e.date),v)]})})):"today"===c?t.filter((function(e){return Object(h.a)(e.date)})).map((function(e){return Object(j.jsxs)("p",{children:[e.text," ",Object(O.a)(new Date(e.date),v)]})})):t.map((function(e){return Object(j.jsxs)("p",{children:[e.text," ",Object(O.a)(new Date(e.date),v)]})}))},C=function(e){var t=e.selectedtab,c=Object(n.useState)(!1),a=Object(i.a)(c,2),s=a[0],d=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),l=o[0],u=o[1];return Object(j.jsxs)("div",{className:"tasks",children:[Object(j.jsx)("h1",{children:N[t]}),Object(j.jsxs)("div",{className:"add-btn-task",onClick:function(){d(!s)},children:[Object(j.jsx)("span",{className:"plus",children:"+"}),Object(j.jsx)("span",{className:"add-task-text",children:"Add Tasks"})]}),s&&Object(j.jsx)(k,{onAdd:function(e,t){var c={text:e,date:t||new Date};u((function(e){return[].concat(Object(b.a)(e),[c])}))},onCancel:function(){return d(!1)}}),l.length>0?Object(j.jsx)(y,{tasks:l,selectedtab:t}):Object(j.jsx)("p",{children:"No Tasks Yet!"})]})},w=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("section",{className:"content",children:[Object(j.jsx)(o,{selectedtab:c,setselectedtab:a}),Object(j.jsx)(C,{selectedtab:c})]})},D=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("nav",{children:"To do List"})})};var I=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(D,{}),Object(j.jsx)(w,{})]})};d.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1ee3aadf.chunk.js.map