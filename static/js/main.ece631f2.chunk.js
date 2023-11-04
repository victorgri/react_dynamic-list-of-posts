(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(8),c=s.n(n),a=s(2),i=s(1),o=(s(13),s(14),s(15),s(3)),r=s.n(o),l=s(0),d=function(e){var t=e.posts,s=e.onPost,n=e.selectedPost,c=e.onSelectedPost;return Object(l.jsxs)("div",{"data-cy":"PostsList",children:[Object(l.jsx)("p",{className:"title",children:"Posts:"}),Object(l.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"has-background-link-light",children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:"."})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var t=n!==e;return Object(l.jsxs)("tr",{"data-cy":"Post",children:[Object(l.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(l.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(l.jsx)("td",{className:"has-text-right is-vcentered",children:t?Object(l.jsx)("button",{onClick:function(){return s(e)},type:"button","data-cy":"PostButton",className:"button is-link is-light",children:"Open"}):Object(l.jsx)("button",{onClick:function(){return c(null)},type:"button","data-cy":"PostButton",className:"button is-link",children:"Close"})})]},e.id)}))})]})]})},j=s(6),m=function(e){return e.Users="Error loading users",e.Posts="Error loading posts",e.None="",e.Comments="Error loading comments",e}({});function u(e){var t,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return s&&(n.body=JSON.stringify(s),n.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://mate.academy/students-api"+e,n)})).then((function(e){return e.json()}))}var b=function(e){return u(e)},h=function(e,t){return u(e,"POST",t)},O=function(e){return u(e,"DELETE")},x=function(){return b("/users").catch((function(e){throw new Error(e)}))},f=function(e){return b("/posts?userId=".concat(e))},N=function(e){return b("/comments?postId=".concat(e))},p=function(e){return h("/comments",e)},y=function(e){return O("/comments/".concat(e))},v=(s(17),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),g=function(e){return e.None="",e.Name="Name is required",e.Email="Email is required",e.Comment="Enter some text",e}({}),C=function(e){var t=e.onComments,s=e.id,n=Object(i.useState)(""),c=Object(a.a)(n,2),o=c[0],d=c[1],m=Object(i.useState)(""),u=Object(a.a)(m,2),b=u[0],h=u[1],O=Object(i.useState)(""),x=Object(a.a)(O,2),f=x[0],N=x[1],y=Object(i.useState)(g.None),v=Object(a.a)(y,2),C=v[0],S=v[1],E=Object(i.useState)(g.None),P=Object(a.a)(E,2),w=P[0],k=P[1],T=Object(i.useState)(g.None),B=Object(a.a)(T,2),F=B[0],L=B[1],I=Object(i.useState)(!1),U=Object(a.a)(I,2),D=U[0],M=U[1],Y=function(e){return e.trim().length>0};return Object(l.jsxs)("form",{"data-cy":"NewCommentForm",children:[Object(l.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":C}),value:o,onChange:function(e){d(e.target.value),S(g.None)}}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-user"})}),C&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),C&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:C})]}),Object(l.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"email",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":w}),value:b,onChange:function(e){h(e.target.value),k(g.None)}}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-envelope"})}),w&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:w})]}),Object(l.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":F}),value:f,onChange:function(e){N(e.target.value),L(g.None)}})}),F&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:F})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),function(){var e=Y(o),n=Y(b),c=Y(f);e||S(g.Name),n&&/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(b)||k(g.Email),c||L(g.Comment),e&&n&&c&&(M(!0),p({postId:s,name:o,email:b,body:f}).then((function(e){t((function(t){return[].concat(Object(j.a)(t),[e])})),N("")})).finally((function(){return M(!1)})))}()},type:"submit",className:r()("button is-link",{"is-loading":D}),children:"Add"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{onClick:function(){d(""),h(""),N(""),L(g.None),k(g.None),S(g.None)},type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},S=function(e){var t=e.post,s=Object(i.useState)(!1),n=Object(a.a)(s,2),c=n[0],o=n[1],r=Object(i.useState)(!1),d=Object(a.a)(r,2),u=d[0],b=d[1],h=Object(i.useState)(m.None),O=Object(a.a)(h,2),x=O[0],f=O[1],p=Object(i.useState)([]),g=Object(a.a)(p,2),S=g[0],E=g[1];Object(i.useEffect)((function(){b(!0),N(t.id).then((function(e){E(e)})).catch((function(){return f(m.Comments)})).finally((function(){return b(!1)}))}),[t]);var P=S.length>0,w={commentsError:x&&!u,noCommentsYet:!P&&!x&&!u,comments:P&&!x&&!u,writeCommentButton:!c&&!x&&!u};return Object(l.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(l.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(l.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(l.jsxs)("div",{className:"block",children:[u&&Object(l.jsx)(v,{}),w.commentsError&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:x}),w.noCommentsYet&&Object(l.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),w.comments&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"title is-4",children:"Comments:"}),S.map((function(e){return Object(l.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(l.jsxs)("div",{className:"message-header",children:[Object(l.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(l.jsx)("button",{onClick:function(){var t=Object(j.a)(S),s=t.filter((function(t){return t.id!==e.id}));E((function(){return s})),y(e.id).catch((function(){E((function(){return t}))}))},"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",children:"delete button"})]}),Object(l.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),w.writeCommentButton&&Object(l.jsx)("button",{onClick:function(){return o(!0)},"data-cy":"WriteCommentButton",type:"button",className:"button is-link",children:"Write a comment"})]}),c&&Object(l.jsx)(C,{onComments:E,id:t.id})]})})},E=function(e){var t=e.users,s=e.onPost,n=e.selectedUser,c=Object(i.useState)(!1),o=Object(a.a)(c,2),d=o[0],j=o[1];return Object(l.jsxs)("div",{"data-cy":"UserSelector",className:r()("dropdown",{"is-active":d}),role:"button",tabIndex:0,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},onMouseDown:function(){return j(!d)},children:[Object(l.jsx)("div",{className:"dropdown-trigger",children:Object(l.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",children:[n?Object(l.jsx)("span",{children:n.name}):Object(l.jsx)("span",{children:"Choose a user"}),Object(l.jsx)("span",{className:"icon is-small",children:Object(l.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(l.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(l.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(l.jsx)("a",{onClick:function(t){t.preventDefault(),s(e),j(!1)},href:"user-".concat(e.id),className:r()("dropdown-item",{"is-active":e===n}),children:e.name},e.id)}))})})]})},P=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),s=t[0],n=t[1],c=Object(i.useState)(null),o=Object(a.a)(c,2),j=o[0],u=o[1],b=Object(i.useState)([]),h=Object(a.a)(b,2),O=h[0],N=h[1],p=Object(i.useState)(!1),y=Object(a.a)(p,2),g=y[0],C=y[1],P=O.length>0,w=Object(i.useState)(null),k=Object(a.a)(w,2),T=k[0],B=k[1],F=Object(i.useState)(m.None),L=Object(a.a)(F,2),I=L[0],U=L[1],D=Object(i.useState)(m.None),M=Object(a.a)(D,2),Y=M[0],A=M[1],_={noPostYet:!P&&j&&!g&&!Y,postList:P&&j&&!g&&!Y};return Object(i.useEffect)((function(){x().then((function(e){n(e)})).catch((function(){U(m.Users)}))}),[]),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsxs)("div",{className:"tile is-child box is-success",children:[Object(l.jsx)("div",{className:"block",children:Object(l.jsx)(E,{users:s,onPost:function(e){B(null),A(m.None),C(!0),u(e),f(e.id).then(N).catch((function(){return A(m.Posts)})).finally((function(){return C(!1)}))},selectedUser:j})}),Object(l.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!j&&Object(l.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),g&&Object(l.jsx)(v,{}),I&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"UsersLoadingError",children:I}),Y&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:Y}),_.noPostYet&&Object(l.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),_.postList&&Object(l.jsx)(d,{posts:O,onPost:function(e){B(e)},selectedPost:T,onSelectedPost:B})]})]})}),Object(l.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":T}),children:Object(l.jsx)("div",{className:"tile is-child box is-success ",children:T&&Object(l.jsx)(S,{post:T},T.id)})})]})})})};c.a.render(Object(l.jsx)(P,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ece631f2.chunk.js.map