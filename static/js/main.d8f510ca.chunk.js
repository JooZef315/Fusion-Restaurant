(this.webpackJsonpproj2=this.webpackJsonpproj2||[]).push([[0],{103:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),s=t.n(l),c=(t(100),t(101),t(102),t(103),t(18)),o=t(19),m=t(21),i=t(20),u=t(153),d=t(154),E=t(155),h=t(156),f=t(157),p=t(158),g=t(8),N=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},b="https://my-json-server.typicode.com/JooZef315/FusionJSON";function v(e){var a=e.dish;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"dish"},a.name))))}var y=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(v,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container body"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},w=t(26),O=t(159),M=t(160),L=t(161),k=t(162),S=t(163),j=t(164),D=t(165),F=t(166),x=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleLogin=n.handleLogin.bind(Object(w.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(M.a,{onClick:this.toggleNav}),r.a.createElement(L.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(k.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(S.a,{navbar:!0},r.a.createElement(j.a,null,r.a.createElement(g.c,{className:"nav-link text-warning",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(j.a,null,r.a.createElement(g.c,{className:"nav-link text-warning",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(j.a,null,r.a.createElement(g.c,{className:"nav-link text-warning",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(j.a,null,r.a.createElement(g.c,{className:"nav-link text-warning",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),"// ",r.a.createElement(S.a,{className:"ml-auto",navbar:!0},"//   ",r.a.createElement(j.a,null,"//     ",r.a.createElement(D.a,{className:"text-warning",outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:" fa fa-sign-in fa-lg"})," Login //     "),"//   "),"// ")))),r.a.createElement(F.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),t}(n.Component);var C=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},A=t(176),I=t(167),T=t(168),R=t(169),_=t(170),q=t(171),P=t(172),H=t(7),G=t(27),W=function(e){return e&&e.length},U=function(e){return function(a){return!a||a.length<=e}},Y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n.state={isModalOpen:!1},n}return Object(o.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(A.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(I.a,{className:"mod",toggle:this.toggleModal},"Rate us!"),r.a.createElement(T.a,null,r.a.createElement(H.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"rating",md:4},"rating"),r.a.createElement(q.a,{md:12},r.a.createElement(H.Control.select,{model:".rating",id:"rating",placeholder:"your rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"author",md:4},"First Name"),r.a.createElement(q.a,{md:12},r.a.createElement(H.Control.text,{model:".author",id:"author",name:"author",placeholder:"author",className:"form-control",validators:{required:W,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:U(15)}}),r.a.createElement(H.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"comment",md:6},"Your Feedback"),r.a.createElement(q.a,{md:12},r.a.createElement(H.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(q.a,{md:{size:10}},r.a.createElement(D.a,{type:"submit",color:"primary"},"submit")))))),r.a.createElement(D.a,{outline:!0,className:"text-primary",onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}),"submit comment"))}}]),t}(n.Component);function B(e){var a=e.comments,t=e.postComment,n=e.dishId;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(u.a,null,r.a.createElement("h4",{className:"text-secondary"},"comments"),r.a.createElement("ul",null,r.a.createElement(G.Stagger,{in:!0},a.map((function(e){return r.a.createElement(G.Fade,{in:!0},r.a.createElement("li",null,r.a.createElement("p",null,e.comment),r.a.createElement("p",null,e.author," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}))))),r.a.createElement("div",null,r.a.createElement(Y,{dishId:n,postComment:t}))):r.a.createElement("div",null)}function J(e){var a=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(G.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"dish"},a.name),r.a.createElement(P.a,null,a.description)))))}var K=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container body"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(J,{dish:e.dish}),r.a.createElement(B,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},z=t(173);function Z(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(N,null):n?r.a.createElement("h4",null,n):r.a.createElement(G.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,a.name),a.designation?r.a.createElement(z.a,null,a.designation):null,r.a.createElement(P.a,null,a.description))))}var $=function(e){return r.a.createElement("div",{className:"container body"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(Z,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(Z,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(Z,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},Q=function(e){return e&&e.length},V=function(e){return function(a){return!a||a.length<=e}},X=function(e){return function(a){return a&&a.length>=e}},ee=function(e){return!isNaN(Number(e))},ae=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},te=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container body"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(H.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(q.a,{md:10},r.a.createElement(H.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:Q,minLength:X(3),maxLength:V(15)}}),r.a.createElement(H.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(q.a,{md:10},r.a.createElement(H.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:Q,minLength:X(3),maxLength:V(15)}}),r.a.createElement(H.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(q.a,{md:10},r.a.createElement(H.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:Q,minLength:X(3),maxLength:V(15),isNumber:ee}}),r.a.createElement(H.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(q.a,{md:10},r.a.createElement(H.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:Q,validEmail:ae}}),r.a.createElement(H.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(q.a,{md:2},r.a.createElement(_.a,{htmlFor:"contactType"},"contact Type")),r.a.createElement(q.a,{md:8},r.a.createElement("strong",null,"May we contact you?  "),r.a.createElement(H.Control.checkbox,{model:".agree",name:"agree",id:"agree"})),r.a.createElement(q.a,{md:2},r.a.createElement(H.Control.select,{model:".contactType",id:"contactType",placeholder:"contact Type",className:"form-control"},r.a.createElement("option",null,"E-mail"),r.a.createElement("option",null,"TEL.")))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(_.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(q.a,{md:10},r.a.createElement(H.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(R.a,{className:"form-group"},r.a.createElement(q.a,{md:{size:10,offset:2}},r.a.createElement(D.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ne=t(174),re=t(175);function le(e){var a=e.leader;return r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-3 d-flex"},r.a.createElement(ne.a,{left:!0,middle:!0},r.a.createElement(ne.a,{object:!0,src:b+a.image,alt:a.name}))),r.a.createElement("div",{className:"col-12 col-sm-9"},r.a.createElement(u.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement("h3",{className:"text-primary"},a.name)),r.a.createElement(P.a,null,r.a.createElement("h5",{className:"text-secondary"},a.designation),r.a.createElement("p",null,a.description)))))))}var se=function(e){var a=e.leaders.leaders.map((function(e){return r.a.createElement(le,{leader:e})}));return e.leaders.isLoading?r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",null,r.a.createElement(N,null)))):e.leaders.errMess?r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",null,r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container body"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(re.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(E.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(E.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement("ul",{className:"ul"},r.a.createElement(G.Stagger,{in:!0},r.a.createElement(G.Fade,{in:!0},a))))))},ce=t(32),oe=t(24),me=function(){return{type:"DISHES_LOADING"}},ie=function(e){return{type:"DISHES_FAILED",payload:e}},ue=function(e){return{type:"ADD_DISHES",payload:e}},de=function(e){return{type:"COMMENTS_FAILED",payload:e}},Ee=function(e){return{type:"ADD_COMMENTS",payload:e}},he=function(){return{type:"PROMOS_LOADING"}},fe=function(e){return{type:"PROMOS_FAILED",payload:e}},pe=function(e){return{type:"ADD_PROMOS",payload:e}},ge=function(){return{type:"LEADERS_LOADING"}},Ne=function(e){return{type:"LEADERS_FAILED",payload:e}},be=function(e){return{type:"ADD_LEADERS",payload:e}},ve=t(56),ye=t(88),we=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(ve.a,null,r.a.createElement(ye.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ce.d,null,r.a.createElement(ce.b,{path:"/home",component:function(){return r.a.createElement($,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(ce.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(ce.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(K,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ce.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(te,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ce.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(se,{leaders:e.props.leaders})}}),r.a.createElement(ce.a,{to:"/home"})))),r.a.createElement(C,null))}}]),t}(n.Component),Oe=Object(ce.g)(Object(oe.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError:"+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(me(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ue(a))})).catch((function(a){return e(ie(a.message))}))}))},resetFeedbackForm:function(){e(H.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ee(a))})).catch((function(a){return e(de(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(he()),fetch(b+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){return e(fe(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(ge()),fetch(b+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(be(a))})).catch((function(a){return e(Ne(a.message))}))}))},postFeedback:function(a,t,n,r,l,s){return e(function(e,a,t,n,r,l){return function(s){var c={firstname:e,lastname:a,telnum:t,email:n,contactType:r,message:l};return c.date=(new Date).toISOString(),fetch(b+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){alert("Current State is: "+JSON.stringify(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError:"+e.message)}))}}(a,t,n,r,l,s))}}}))(we)),Me=(t(151),t(10)),Le=t(25),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Me.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Me.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Me.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Me.a)({},e,{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Me.a)({},e,{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(Me.a)({},e,{comments:e.comments.concat(t)});default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Me.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Me.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Me.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Me.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Me.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Me.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Fe=t(92),xe=t(93),Ce=t.n(xe),Ae={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ie=Object(Le.createStore)(Object(Le.combineReducers)(Object(Me.a)({dishes:ke,comments:Se,promotions:je,leaders:De},Object(H.createForms)({feedback:Ae}))),Object(Le.applyMiddleware)(Fe.a,Ce.a)),Te=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(oe.Provider,{store:Ie},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Oe,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,a,t){e.exports=t(152)}},[[95,1,2]]]);
//# sourceMappingURL=main.d8f510ca.chunk.js.map