(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(12),a=c.n(s),n=c(2),r=c(1),i=(c(17),c(18),c(19),c(4)),o=c.n(i),l=c(0),d=function(e){var t=e.userPosts,c=e.selectedPost,s=e.setSelectedPost,a=void 0===s?function(){}:s,n=e.setCreateNewComment,r=void 0===n?function(){}:n,i=function(){a(void 0),r(!1)};return Object(l.jsxs)("div",{"data-cy":"PostsList",children:[Object(l.jsx)("p",{className:"title",children:"Posts:"}),Object(l.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"has-background-link-light",children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:" "})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title;return Object(l.jsxs)("tr",{"data-cy":"Post",children:[Object(l.jsx)("td",{"data-cy":"PostId",children:t}),Object(l.jsx)("td",{"data-cy":"PostTitle",children:s}),Object(l.jsx)("td",{className:"has-text-right is-vcentered",children:c&&c.id===t?Object(l.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-blue",onClick:i,children:"Close"}):Object(l.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return function(e){a(e),r(!1)}(e)},children:"Open"})})]},t)}))})]})]})},j=c(10),m=c(9),b=c(5),u=c.n(b),h=(c(22),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),O=c(7),x=c(3),f="https://mate.academy/students-api";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),p(300).then((function(){return fetch(f+e,s)})).then((function(e){return e.json()}))}var v=function(e){return N(e)},y=function(e,t){return N(e,"POST",t)},g=function(e){return N(e,"DELETE")},E=function(e){return g("/comments/".concat(e))},C=function(e){var t=e.postId,c=e.setPostComments,s=void 0===c?function(){}:c,a=e.setErrorMessage,i=void 0===a?function(){}:a,d=Object(r.useState)(!1),b=Object(n.a)(d,2),h=b[0],f=b[1],p=Object(r.useState)({name:"",email:"",body:""}),N=Object(n.a)(p,2),v=N[0],g=N[1],E=Object(r.useState)({nameError:!1,emailError:!1,bodyError:!1}),C=Object(n.a)(E,2),S=C[0],w=C[1],P=function(e){var t=e.target,c=t.name,s=t.value;g((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},c,s))})),w((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},"".concat(c,"Error"),!1))}))},k=function(){var e=Object(m.a)(u.a.mark((function e(){var c,a,n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,c=v.name,a=v.email,n=v.body,r={postId:t,name:c.trim(),email:a.trim(),body:n.trim()},e.next=6,y("/comments",r);case 6:o=e.sent,s((function(e){return[].concat(Object(j.a)(e),[o])})),g((function(e){return Object(x.a)(Object(x.a)({},e),{},{name:"",email:""})})),w((function(e){return Object(x.a)(Object(x.a)({},e),{},{nameError:!1,emailError:!1})})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),i(!0);case 14:return e.prev=14,f(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),T=function(e){e.preventDefault();var t=!1;v.name.trim()||(w((function(e){return Object(x.a)(Object(x.a)({},e),{},{nameError:!0})})),t=!0),v.email.trim()||(w((function(e){return Object(x.a)(Object(x.a)({},e),{},{emailError:!0})})),t=!0),v.body.trim()||(w((function(e){return Object(x.a)(Object(x.a)({},e),{},{bodyError:!0})})),t=!0),t||k()};return Object(l.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:T,children:[Object(l.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":S.nameError}),value:v.name,onChange:P}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-user"})}),S.nameError&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]})]})]}),Object(l.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":S.emailError}),value:v.email,onChange:P}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-envelope"})}),S.emailError&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]})]})]}),Object(l.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:o()("input",{"is-danger":S.bodyError}),value:v.body,onChange:P})}),S.bodyError&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":h}),onClick:T,children:"Add"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){g({name:"",email:"",body:""}),w({nameError:!1,emailError:!1,bodyError:!1})},children:"Clear"})})]})]})},S=function(e){var t=e.selectedPost,c=e.createNewComment,s=e.setCreateNewComment,a=void 0===s?function(){}:s,i=Object(r.useState)([]),o=Object(n.a)(i,2),d=o[0],b=o[1],O=Object(r.useState)(!1),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(r.useState)(!1),y=Object(n.a)(N,2),g=y[0],S=y[1];Object(r.useEffect)((function(){var e;p(!0),S(!1),(e=t.id,v("/comments?postId=".concat(e))).then(b).catch((function(){return S(!0)})).finally((function(){return p(!1)}))}),[t]);var w=function(){var e=Object(m.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(j.a)(d),b((function(e){return e.filter((function(e){return e.id!==t}))})),e.prev=2,e.next=5,E(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),b(c);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),P=t.id,k=t.title,T=t.body;return Object(l.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(l.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(P,": ").concat(k)}),Object(l.jsx)("p",{"data-cy":"PostBody",children:T})]}),Object(l.jsxs)("div",{className:"block",children:[f&&Object(l.jsx)(h,{}),g&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!f&&!g&&d&&0===d.length&&Object(l.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!g&&d&&d.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"title is-4",children:"Comments:"}),d.map((function(e){var t=e.id,c=e.name,s=e.email,a=e.body;return Object(l.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(l.jsxs)("div",{className:"message-header",children:[Object(l.jsx)("a",{href:"mailto:".concat(s),"data-cy":"CommentAuthor",children:c}),Object(l.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return w(t)},children:"delete button"})]}),Object(l.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:a})]},t)}))]}),!g&&(c?Object(l.jsx)(C,{postId:P,setPostComments:b,setErrorMessage:S}):Object(l.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){a(!0)},children:"Write a comment"}))]})]})})},w=function(e){var t=e.users,c=e.selectedUser,s=e.setSelectedUser,a=void 0===s?function(){}:s,i=e.setSelectedPost,d=void 0===i?function(){}:i,j=Object(r.useState)(!1),m=Object(n.a)(j,2),b=m[0],u=m[1];return Object(l.jsxs)("div",{"data-cy":"UserSelector",className:o()("dropdown",{"is-active":b}),children:[Object(l.jsx)("div",{className:"dropdown-trigger",children:Object(l.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){u(!b)},onBlur:function(){setTimeout((function(){u(!1)}),150)},children:[Object(l.jsx)("span",{children:c?c.name:"Choose a user"}),Object(l.jsx)("span",{className:"icon is-small",children:Object(l.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(l.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(l.jsx)("div",{className:"dropdown-content",children:t.map((function(e){var t=e.id,c=e.name;return Object(l.jsx)("a",{href:"#user-".concat(t),className:"dropdown-item",onClick:function(){return function(e){a(e),d(void 0)}(e)},children:c},t)}))})})]})},P=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)([]),i=Object(n.a)(a,2),j=i[0],m=i[1],b=Object(r.useState)(),u=Object(n.a)(b,2),O=u[0],x=u[1],f=Object(r.useState)(),p=Object(n.a)(f,2),N=p[0],y=p[1],g=Object(r.useState)(!1),E=Object(n.a)(g,2),C=E[0],P=E[1],k=Object(r.useState)(!1),T=Object(n.a)(k,2),F=T[0],I=T[1],B=Object(r.useState)(!1),M=Object(n.a)(B,2),U=M[0],L=M[1];return Object(r.useEffect)((function(){v("/users").then(s).catch((function(){return I(!0)}))}),[]),Object(r.useEffect)((function(){var e;O&&(P(!0),I(!1),(e=O.id,v("/posts?userId=".concat(e))).then(m).catch((function(){return I(!0)})).finally((function(){return P(!1)})))}),[O]),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsxs)("div",{className:"tile is-child box is-success",children:[Object(l.jsx)("div",{className:"block",children:Object(l.jsx)(w,{users:c,selectedUser:O,setSelectedUser:x,setSelectedPost:y})}),Object(l.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!O&&Object(l.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),C&&Object(l.jsx)(h,{}),F&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),O&&0===j.length&&!F&&!C&&Object(l.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),O&&j.length>0&&Object(l.jsx)(d,{userPosts:j,selectedPost:N,setSelectedPost:y,setCreateNewComment:L})]})]})}),Object(l.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":N}),children:N&&Object(l.jsx)("div",{className:"tile is-child box is-success ",children:Object(l.jsx)(S,{selectedPost:N,createNewComment:U,setCreateNewComment:L})})})]})})})};a.a.render(Object(l.jsx)(P,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5343077e.chunk.js.map