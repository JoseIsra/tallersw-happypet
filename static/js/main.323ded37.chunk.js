(this["webpackJsonptallersw-happypet"]=this["webpackJsonptallersw-happypet"]||[]).push([[0],{119:function(e,c,s){},120:function(e,c,s){},122:function(e,c,s){},124:function(e,c,s){},243:function(e,c,s){},244:function(e,c,s){},245:function(e,c,s){},247:function(e,c,s){},248:function(e,c,s){},249:function(e,c,s){},253:function(e,c,s){},254:function(e,c,s){},255:function(e,c,s){},256:function(e,c,s){},257:function(e,c,s){},258:function(e,c,s){},260:function(e,c,s){},261:function(e,c,s){},263:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s(1),i=s.n(a),n=s(97),r=s.n(n),l=(s(119),s(120),s(3)),o=s(5),d=s(31),j=s.n(d),b=s(47),u=s(4),m=(s(122),s(9)),h=(s(124),function(e){var c=e.children;return Object(t.jsx)("div",{className:"error-text",children:c})}),O=s(100),x=s.n(O).a.create({baseURL:"http://localhost:4000/api",withCredentials:!0}),p=function(e){return x.get("/products/".concat(e))},v=function(){return x.get("/category")},N=function(e){return x.post("/register",e)},g=function(e){return x.post("/login",e)},f=function(){return x.get("/user")},A=function(){return x.get("/logout")},I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAXwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTItMDFUMjM6MTA6MjEtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTItMDFUMjM6MTA6MjEtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTEyLTAxVDIzOjEwOjIxLTA1OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5MTc1YmU4LWRhZTEtNmE0ZS05M2Y2LWFkNzNkMzE3ZmQ5ZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY1ZDViM2FkLWUzYmUtN2Q0ZS04MzUyLTA0MGY0ZGI1MWE1NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmMyOWVlNTM1LTlkZTEtZjE0NS1hOTZlLTk0MjI4ZTk5NThhNSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMjllZTUzNS05ZGUxLWYxNDUtYTk2ZS05NDIyOGU5OTU4YTUiIHN0RXZ0OndoZW49IjIwMjAtMTItMDFUMjM6MTA6MjEtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTkxNzViZTgtZGFlMS02YTRlLTkzZjYtYWQ3M2QzMTdmZDlkIiBzdEV2dDp3aGVuPSIyMDIwLTEyLTAxVDIzOjEwOjIxLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0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",k=s(19),w=k.a({cli_name:k.b().required("No completado"),cli_lastname:k.b().required("No completado"),cli_email:k.b().email("no es un correo").required("No completado"),cli_password:k.b().min(6,"de 6 a m\xe1s caracteres por favor").required("No completado")}),B=function(){var e=Object(a.useState)(null),c=Object(u.a)(e,2),s=c[0],i=c[1],n=Object(a.useState)(!1),r=Object(u.a)(n,2),d=r[0],O=r[1],x=Object(o.f)(),p=function(){var e=Object(b.a)(j.a.mark((function e(c,s){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(c);case 2:""===(t=e.sent).data?(s.resetForm(),x.push("/login")):i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(c,s){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(s){O(!0);var e=setTimeout((function(){O(!1)}),2500);return function(){return clearTimeout(e)}}O(!1)}),[s]),Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(m.d,{initialValues:{cli_name:"",cli_lastname:"",cli_email:"",cli_password:""},validationSchema:w,onSubmit:p,validateOnBlur:!1,children:function(e){return Object(t.jsxs)("div",{className:"register",children:[Object(t.jsx)(l.b,{to:"/",children:Object(t.jsx)("img",{className:"hapyLogo",src:I,alt:"logohappy"})}),Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"registerForm",children:[d&&Object(t.jsxs)("p",{className:"emergencia",children:[Object(t.jsx)("span",{children:Object(t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"red","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-alert-triangle",children:[Object(t.jsx)("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),Object(t.jsx)("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),Object(t.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),s]}),Object(t.jsx)("h2",{children:"Reg\xedstrate"}),Object(t.jsx)("div",{className:"registerBox",children:Object(t.jsxs)(m.c,{children:[Object(t.jsxs)("div",{className:"inputBox w50",children:[Object(t.jsx)(m.b,{autoComplete:"off",required:!0,name:"cli_name",type:"text"}),Object(t.jsx)("span",{children:"Nombres"}),Object(t.jsx)(m.a,{name:"cli_name",component:h})]}),Object(t.jsxs)("div",{className:"inputBox w50",children:[Object(t.jsx)(m.b,{autoComplete:"off",required:!0,name:"cli_lastname",type:"text"}),Object(t.jsx)("span",{children:"Apellidos"}),Object(t.jsx)(m.a,{name:"cli_lastname",component:h})]}),Object(t.jsxs)("div",{className:"inputBox w50",children:[Object(t.jsx)(m.b,{autoComplete:"off",required:!0,name:"cli_email",type:"email"}),Object(t.jsx)("span",{children:"Correo"}),Object(t.jsx)(m.a,{name:"cli_email",component:h})]}),Object(t.jsxs)("div",{className:"inputBox w50",children:[Object(t.jsx)(m.b,{autoComplete:"off",required:!0,name:"cli_password",type:"password"}),Object(t.jsx)("span",{children:"Contrase\xf1a"}),Object(t.jsx)(m.a,{name:"cli_password",component:h})]}),Object(t.jsx)("div",{className:"inputBox w100",children:Object(t.jsx)("input",{type:"submit",value:"Guardar"})})]})})]})})]})}})})},R=(s(243),k.a({cli_email:k.b().email("no es un correo").required("No completado"),cli_password:k.b().min(6,"de 6 a m\xe1s caracteres por favor").required("No completado")})),S=function(){var e=Object(a.useState)(null),c=Object(u.a)(e,2),s=c[0],i=c[1],n=Object(a.useState)(!1),r=Object(u.a)(n,2),d=r[0],O=r[1],x=Object(o.f)(),p=function(){var e=Object(b.a)(j.a.mark((function e(c,s){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(c);case 3:t=e.sent,s.resetForm(),"Datos inv\xe1lidos"===t.data?i(t.data):(x.push("/mainpage"),console.log("usuario ingresado")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(c,s){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(s){O(!0);var e=setTimeout((function(){O(!1)}),2500);return function(){return clearTimeout(e)}}O(!1)}),[s]),Object(t.jsx)(m.d,{initialValues:{cli_email:"",cli_password:""},validationSchema:R,onSubmit:p,validateOnBlur:!1,children:function(e){return Object(t.jsxs)("div",{className:"login__section",children:[Object(t.jsx)(l.b,{to:"/",children:Object(t.jsx)("img",{className:"hapyLogo",src:I,alt:"logohappy"})}),Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"loginForm",children:[d&&Object(t.jsxs)("p",{className:"emergencia",children:[Object(t.jsx)("span",{children:Object(t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"red",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-alert-triangle",children:[Object(t.jsx)("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),Object(t.jsx)("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),Object(t.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),s]}),Object(t.jsx)("h2",{children:"Iniciar Sesi\xf3n"}),Object(t.jsx)("div",{className:"loginBox",children:Object(t.jsxs)(m.c,{children:[Object(t.jsxs)("div",{className:"inputBox w50",children:[Object(t.jsx)(m.b,{autoComplete:"off",required:!0,name:"cli_email",type:"email"}),Object(t.jsx)("span",{children:"Correo"}),Object(t.jsx)(m.a,{name:"cli_email",component:h})]}),Object(t.jsxs)("div",{className:"inputBox w50",children:[Object(t.jsx)(m.b,{required:!0,name:"cli_password",type:"password"}),Object(t.jsx)("span",{children:"Contrase\xf1a"}),Object(t.jsx)(m.a,{name:"cli_password",component:h})]}),Object(t.jsxs)("div",{className:"links_to_help",children:[Object(t.jsx)(l.b,{to:"/register",children:"Sin cuenta? Reg\xedstrate ya"}),Object(t.jsx)(l.b,{to:"/register",children:"Olvidaste tu contrase\xf1a?"})]}),Object(t.jsx)("div",{className:"inputBox w100",children:Object(t.jsx)("input",{type:"submit",value:"save"})})]})})]})})]})}})},C=(s(244),s(104)),E=s.n(C),M=(s(245),function(){document.querySelector(".panel-btn").classList.toggle("is-active")}),y=function(){return Object(t.jsxs)("header",{className:"header",children:[Object(t.jsx)("span",{className:"logo",children:Object(t.jsx)("img",{className:"imagenLogo",src:I,alt:"logo"})}),Object(t.jsxs)("div",{className:"navResponsive",children:[Object(t.jsxs)("div",{className:"search",children:[Object(t.jsx)(l.b,{className:"searchIcon",children:Object(t.jsx)(E.a,{})}),Object(t.jsx)("input",{className:"home-search form-control mr-sm-2",type:"search",placeholder:"\xbfEn qu\xe9 podemos ayudarte?"})]}),Object(t.jsx)("button",{className:"panel-btn hamburger hamburger--vortex",onClick:M,type:"button",children:Object(t.jsx)("span",{className:"hamburger-box",children:Object(t.jsx)("span",{className:"hamburger-inner"})})})]}),Object(t.jsxs)("nav",{className:"menu",children:[Object(t.jsx)("a",{href:"#inicio",children:"Inicio"}),Object(t.jsx)("a",{href:"#aboutUs",children:"Acerca de nosotros"}),Object(t.jsx)("a",{href:"#productos",children:"Nuestros productos"}),Object(t.jsx)("a",{href:"#servicios",children:"Nuestros servicios"})]}),Object(t.jsxs)("nav",{className:"botones",children:[Object(t.jsx)(l.b,{className:"login",to:"/login",children:"Iniciar Sesi\xf3n"}),Object(t.jsx)(l.b,{className:"login",to:"/register",children:"Registrarse"})]})]})},Y=(s(247),s(108)),G=s.n(Y),U=s(109),P=s.n(U),Z=s(110),D=s.n(Z),Q=function(){var e=function(e){switch(e){case"facebook":window.open("http://www.facebook.com","_blank");break;case"twitter":window.open("http://www.twitter.com","_blank");break;case"instagram":window.open("http://www.instagram.com","_blank");break;default:console.log("error")}};return Object(t.jsxs)("footer",{className:"footer",children:[Object(t.jsxs)("div",{className:"navFooter",children:[Object(t.jsxs)("nav",{className:"aboutUs",children:[Object(t.jsx)("p",{children:"Acerca de nosotros"}),Object(t.jsx)("a",{href:"#aboutUs",children:"Mision"}),Object(t.jsx)("a",{href:"#aboutUs",children:"Vision"}),Object(t.jsx)("a",{href:"#aboutUs",children:"Metas"}),Object(t.jsx)("a",{href:"#aboutUs",children:"Nuestros proveedores"})]}),Object(t.jsxs)("nav",{className:"comunidad",children:[Object(t.jsx)("p",{children:"Comunidad"}),Object(t.jsx)("a",{href:"#",children:"Nuestros colaboradores"}),Object(t.jsx)("a",{href:"#",children:"Comunidad 3"}),Object(t.jsx)("a",{href:"#",children:"Comunidad 4"}),Object(t.jsx)("a",{href:"#",children:"Comunidad 5"})]})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("nav",{className:"deepFooter",children:[Object(t.jsxs)("nav",{className:"terminos",children:[Object(t.jsx)("div",{className:"terminos1",children:Object(t.jsx)("p",{className:"derechos",children:"\xa9 2020 HappyPet, Inc. All rights reserved"})}),Object(t.jsxs)("div",{className:"terminos2",children:[Object(t.jsx)("span",{className:"separador",children:"\xb7"}),Object(t.jsx)("a",{className:"priv",href:"",children:"Privacidad"}),Object(t.jsx)("span",{className:"separador",children:"\xb7"}),Object(t.jsx)("a",{className:"term",href:"",children:"T\xe9rminos"}),Object(t.jsx)("span",{className:"separador",children:"\xb7"}),Object(t.jsx)("a",{className:"map",href:"",children:"Mapa del sitio"})]})]}),Object(t.jsxs)("nav",{className:"redesSociales",children:[Object(t.jsx)(G.a,{onClick:function(){e("facebook")},className:"facebook"}),Object(t.jsx)(P.a,{onClick:function(){e("twitter")},className:"twitter"}),Object(t.jsx)(D.a,{onClick:function(){e("instagram")},className:"instagram"})]})]})]})},T=(s(248),s.p+"static/media/fondo-alimentos.bb2d4a4b.png"),V=s.p+"static/media/fondo-juguetes.9ef64902.png",F=s.p+"static/media/fondo-medicina.2524eed3.png",L=function(){return Object(t.jsxs)("div",{className:"homeService",children:[Object(t.jsx)("span",{className:"title",children:Object(t.jsx)("h2",{children:"Nuestros servicios"})}),Object(t.jsxs)("div",{id:"carouselExampleControls2",className:"carousel slide","data-ride":"carousel",children:[Object(t.jsxs)("div",{className:"carousel-inner",children:[Object(t.jsxs)("div",{className:"carousel-item active",children:[Object(t.jsx)("img",{className:"d-block w-100",src:T,alt:"First slide"}),Object(t.jsx)("div",{className:"cont-prueba",children:Object(t.jsx)(l.b,{className:"prueba",children:"Consultas"})}),Object(t.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(t.jsx)("div",{className:"contantLink",children:Object(t.jsx)(l.b,{className:"btn-alimentos",children:"Ir a consultas"})}),Object(t.jsx)("h5",{children:"Consultas b\xe1sicas"}),Object(t.jsx)("p",{children:"Realice cualquier tipo de consulta con respecto a su mascota: alimentaci\xf3n, estado de salud, etc."})]})]}),Object(t.jsxs)("div",{className:"carousel-item ",children:[Object(t.jsx)("img",{className:"d-block w-100",src:V,alt:"Second slide"}),Object(t.jsx)("div",{className:"cont-prueba",children:Object(t.jsx)(l.b,{className:"prueba",children:"Adiestramiento"})}),Object(t.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(t.jsx)("div",{className:"contantLink",children:Object(t.jsx)(l.b,{className:"btn-alimentos",children:"Reservar cita"})}),Object(t.jsx)("h5",{children:"Adiestramiento"}),Object(t.jsx)("p",{children:"Especializado en canes, contamos con colaboradores de todo el mundo"})]})]}),Object(t.jsxs)("div",{className:"carousel-item ",children:[Object(t.jsx)("img",{className:"d-block w-100",src:F,alt:"Third slide"}),Object(t.jsx)("div",{className:"cont-prueba",children:Object(t.jsx)(l.b,{className:"prueba",children:"Limpieza y Spa"})}),Object(t.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(t.jsx)("div",{className:"contantLink",children:Object(t.jsx)(l.b,{className:"btn-alimentos",children:"Reservar cita"})}),Object(t.jsx)("h5",{children:"Tratamiento completo de limpieza"}),Object(t.jsx)("p",{children:"Deje a su mascota en buenas manos, ofrecemos servicios completos de limpieza"})]})]}),Object(t.jsxs)("ol",{className:"carousel-indicators",children:[Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators2","data-slide-to":"0",className:"active"}),Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators2","data-slide-to":"1"}),Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators2","data-slide-to":"2"})]})]}),Object(t.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleControls2",role:"button","data-slide":"prev",children:[Object(t.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(t.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(t.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleControls2",role:"button","data-slide":"next",children:[Object(t.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(t.jsx)("span",{className:"sr-only",children:"Next"})]})]})]})},z=(s(249),function(){return Object(t.jsxs)("div",{className:"homeProductos",children:[Object(t.jsx)("span",{className:"title",children:Object(t.jsx)("h2",{children:"Nuestros productos"})}),Object(t.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel",children:[Object(t.jsxs)("div",{className:"carousel-inner",children:[Object(t.jsxs)("div",{className:"carousel-item active",children:[Object(t.jsx)("img",{className:"d-block w-100",src:T,alt:"First slide"}),Object(t.jsx)("div",{className:"cont-prueba",children:Object(t.jsx)(l.b,{className:"prueba",children:"Ver Alimentos"})}),Object(t.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(t.jsx)("div",{className:"contLink",children:Object(t.jsx)(l.b,{to:"/mainpage",className:"btn-animado",children:"Ver alimentos"})}),Object(t.jsx)("div",{className:"cat",children:Object(t.jsx)("h5",{children:"Alimentos"})}),Object(t.jsxs)("div",{className:"descr",children:[" ",Object(t.jsx)("p",{children:"Variedad de productos y precios"})]})]})]}),Object(t.jsxs)("div",{className:"carousel-item ",children:[Object(t.jsx)("img",{className:"d-block w-100",src:V,alt:"Second slide"}),Object(t.jsx)("div",{className:"cont-prueba",children:Object(t.jsx)(l.b,{className:"prueba",children:"Ver Accesorios"})}),Object(t.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(t.jsx)("div",{className:"contLink",children:Object(t.jsx)(l.b,{to:"/mainpage",className:"btn-animado",children:"Ver accesorios"})}),Object(t.jsx)("h5",{children:"Accesorios"}),Object(t.jsx)("p",{children:"Productos de entretenimiento y ropa para tus mascotas"})]})]}),Object(t.jsxs)("div",{className:"carousel-item ",children:[Object(t.jsx)("img",{className:"d-block w-100",src:F,alt:"Third slide"}),Object(t.jsx)("div",{className:"cont-prueba",children:Object(t.jsx)(l.b,{className:"prueba",children:"Ver art\xedculos de limpieza"})}),Object(t.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(t.jsx)("div",{className:"contLink",children:Object(t.jsx)(l.b,{to:"/mainpage",className:"btn-animado",children:"Ver art\xedculos"})}),Object(t.jsx)("h5",{children:"Art\xedculos de limpieza"}),Object(t.jsx)("p",{children:"Para que tu mascota siempre lleve una buena higiene "})]})]}),Object(t.jsxs)("ol",{className:"carousel-indicators",children:[Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]})]}),Object(t.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev",children:[Object(t.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(t.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(t.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next",children:[Object(t.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(t.jsx)("span",{className:"sr-only",children:"Next"})]})]})]})}),W=(s(250),function(){return Object(t.jsxs)("div",{className:"home",children:[Object(t.jsx)(y,{}),Object(t.jsxs)("main",{className:"main",children:[Object(t.jsx)("section",{id:"inicio",className:"section seccionInicio",children:Object(t.jsx)("div",{className:"inicio",children:Object(t.jsxs)("div",{className:"texto",children:[Object(t.jsx)("div",{className:"letras",children:Object(t.jsx)("h2",{children:"Comienza a explorar todos nuestros productos y servicios"})}),Object(t.jsx)(l.b,{to:"/mainpage",className:"begin",children:"Comenzar"})]})})}),Object(t.jsx)("section",{id:"aboutUs",className:"section",children:Object(t.jsxs)("div",{className:"AboutUs",children:[Object(t.jsx)("h2",{children:"Acerca de nosotros"}),Object(t.jsxs)("div",{className:"AboutUs2",children:[Object(t.jsxs)("div",{className:"mision",children:[Object(t.jsx)("h4",{children:"Nuestra misi\xf3n"}),Object(t.jsx)("p",{children:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris. "})]}),Object(t.jsxs)("div",{className:"vision",children:[Object(t.jsx)("h4",{children:"Nuestra visi\xf3n"}),Object(t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris."})]}),Object(t.jsxs)("div",{className:"metas",children:[Object(t.jsx)("h4",{children:"Nuestras metas"}),Object(t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris."})]}),Object(t.jsxs)("div",{className:"proveedores",children:[Object(t.jsx)("h4",{children:"Nuestros proveedores"}),Object(t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris."})]})]})]})}),Object(t.jsx)("section",{id:"productos",className:"section productos",children:Object(t.jsx)(z,{})}),Object(t.jsx)("section",{id:"servicios",className:"section servicios",children:Object(t.jsx)(L,{})})]}),Object(t.jsx)(Q,{})]})}),X=s(14),H=(s(253),i.a.createContext()),_=function(e){var c=e.initialState,s=e.reducer,i=e.children;return Object(t.jsx)(H.Provider,{value:Object(a.useReducer)(s,c),children:i})},J=function(){return Object(a.useContext)(H)},q=(s(254),function(){var e=Object(a.useState)([]),c=Object(u.a)(e,2),s=c[0],i=c[1],n=Object(a.useState)("juguetes"),r=Object(u.a)(n,2),l=r[0],o=r[1],d=J(),j=Object(u.a)(d,2),b=(j[0]._,j[1]);Object(a.useEffect)((function(){v().then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(t.jsxs)("div",{className:"sidebar",children:[Object(t.jsx)("p",{className:"sidebar-title",children:"Categor\xeda actual"}),Object(t.jsx)("h3",{children:l}),Object(t.jsx)("p",{className:"sidebar-subtitle",children:"Categorias:"}),Object(t.jsx)("ul",{className:"sidebar-list",children:s.map((function(e,c){return Object(t.jsx)("li",{onClick:function(c){return t=e.idcategory,o(s[t-1].cat_name),void b({type:"UPDATE_CATEGORY",payload:t});var t},className:"sidebar__categories",children:e.cat_name},c)}))})]})}),K=(s(255),function(e){var c=e.idproduct,s=e.prod_name,a=e.prod_price,i=e.prod_image,n=J(),r=Object(u.a)(n,2),d=r[0].client,j=r[1],b=Object(o.f)();return Object(t.jsxs)("div",{className:"productCard",children:[Object(t.jsx)("img",{src:i,alt:"producto"}),Object(t.jsxs)("div",{className:"productCard__container",children:[Object(t.jsx)("p",{children:s}),Object(t.jsxs)("p",{children:[Object(t.jsx)("strong",{children:"Precio: S/."}),a]})]}),Object(t.jsxs)("div",{className:"productCard__BuyOptions",children:[Object(t.jsx)("button",{onClick:function(){if(!d)return b.push("/login");j({type:"ADD_TO_BASKET",item:{idproduct:c,prod_name:s,prod_price:a,prod_image:i}})},className:"btn-addToBasket",children:"A\xf1adir al carrito"}),Object(t.jsx)(l.b,{to:"/mainpage/product",className:"btn-seeDetails",children:"Ver detalles "})]})]})}),$=function(){var e=Object(a.useState)([]),c=Object(u.a)(e,2),s=c[0],i=c[1],n=J(),r=Object(u.a)(n,1)[0].idCategory;return Object(a.useEffect)((function(){p(r).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[r]),Object(t.jsx)("div",{className:"mainpage",children:Object(t.jsxs)("div",{className:"mainpage__container",children:[Object(t.jsx)(q,{}),Object(t.jsx)("aside",{className:"mainpage__right__side",children:s.map((function(e,c){return Object(t.jsx)(K,Object(X.a)({},e),c)}))})]})})},ee=(s(256),s(111)),ce=s.n(ee),se=s(277),te=function(){var e=J(),c=Object(u.a)(e,2),s=c[0],i=s.basket,n=s.client,r=c[1],d=Object(o.f)();return Object(a.useEffect)((function(){f().then((function(e){r({type:"SET_USER",client:e.data})})).catch((function(e){return console.log(e)}))}),[]),Object(t.jsxs)("header",{className:"headerProductos",children:[Object(t.jsx)("span",{className:"logo_Productos",children:Object(t.jsx)("img",{className:"imgLogo",src:I,alt:""})}),Object(t.jsx)("div",{className:"buscar",children:Object(t.jsx)("input",{className:"barraBuscar",placeholder:"\xbfQu\xe9 producto necesitas?"})}),Object(t.jsxs)("div",{className:"botonesP",children:[Object(t.jsx)(l.b,{className:"carrito",to:n?"mainpage/basket":"/login",children:Object(t.jsx)(se.a,{badgeContent:null===i||void 0===i?void 0:i.length,color:"secondary",children:Object(t.jsx)(ce.a,{className:"icono_shop_Producto"})})}),Object(t.jsx)(l.b,{to:!n&&"/login",className:"header__session",children:Object(t.jsxs)("div",{onClick:function(){n&&A().then((function(e){d.push("/mainpage"),window.location.reload()}))},className:"header__options",children:[n&&Object(t.jsxs)("span",{className:"header__options__one",children:["Hola ",n.cli_name]}),Object(t.jsx)("span",{className:"header__options__two",children:n?"Cerrar Sesi\xf3n":"Iniciar Sesi\xf3n"})]})})]})]})},ae=(s(257),function(){return Object(t.jsx)("div",{className:"detailProduct",children:Object(t.jsx)("h1",{children:"detalles del producto + imagen + descripcion "})})}),ie=(s(258),function(e){var c=e.idproduct,s=e.prod_name,a=e.prod_price,i=e.prod_image,n=J(),r=Object(u.a)(n,2)[1];return Object(t.jsxs)("div",{className:"basketItem",children:[Object(t.jsx)("img",{src:i,alt:"productHere"}),Object(t.jsxs)("div",{className:"basketItem__Info",children:[Object(t.jsx)("h4",{children:s}),Object(t.jsxs)("p",{children:["S/.",Object(t.jsx)("strong",{children:a})]}),Object(t.jsx)("button",{onClick:function(){console.log(typeof a),r({type:"REMOVE_ITEM",id:c})},className:"btn-Remove",children:"Remover de carrito"})]})]})}),ne=s(12),re=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,c){return parseFloat(c.prod_price)+e}),0)},le=function(e,c){switch(console.log(c),c.type){case"UPDATE_CATEGORY":return Object(X.a)(Object(X.a)({},e),{},{idCategory:c.payload});case"ADD_TO_BASKET":return Object(X.a)(Object(X.a)({},e),{},{basket:[].concat(Object(ne.a)(e.basket),[c.item])});case"REMOVE_ITEM":var s=e.basket.filter((function(e){return e.idproduct!==c.id}));return Object(X.a)(Object(X.a)({},e),{},{basket:s});case"SET_USER":return Object(X.a)(Object(X.a)({},e),{},{client:c.client});default:return e}},oe=s(112),de=s.n(oe);s(260);var je=function(){var e=J(),c=Object(u.a)(e,1)[0].basket;return Object(t.jsx)("div",{className:"subtotal",children:Object(t.jsx)(de.a,{renderText:function(e){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("p",{children:["Total (",c.length,") productos"]}),Object(t.jsxs)("div",{className:"subtotal__info",children:[Object(t.jsxs)("p",{children:["Monto: ",Object(t.jsxs)("span",{children:[" ",Object(t.jsx)("strong",{children:"".concat(e)})]})]}),Object(t.jsx)("button",{children:"Comprar"})]})]})},decimalScale:2,value:re(c),displayType:"text",thousandSeparator:!0,prefix:"S/."})})};s(261);var be=function(){var e=J(),c=Object(u.a)(e,1)[0].basket;return Object(t.jsxs)("div",{className:"checkBasket",children:[Object(t.jsx)("div",{className:"checkBasket__leftSide",children:0===(null===c||void 0===c?void 0:c.length)?Object(t.jsxs)("div",{className:"checkBasket__empty",children:[Object(t.jsx)("h2",{children:"\ud83d\udc80Su carrito est\xe1 vac\xedo \ud83d\ude25\ud83d\ude16\ud83d\ude2b"}),Object(t.jsx)("p",{children:'Presione "agregar al carrito" en los productos que desee \ud83e\udd13'})]}):Object(t.jsxs)("div",{className:"checkBastet__products",children:[Object(t.jsx)("h3",{children:"Su cesta no est\xe1 vac\xeda \ud83d\ude0e"}),null===c||void 0===c?void 0:c.map((function(e,c){return Object(t.jsx)(ie,Object(X.a)({},e),c)}))]})}),(null===c||void 0===c?void 0:c.length)>0&&Object(t.jsx)("div",{className:"checkBasket__rightSide",children:Object(t.jsx)(je,{})})]})};var ue=function(){return Object(t.jsx)("div",{className:"app",children:Object(t.jsx)(l.a,{children:Object(t.jsxs)(o.c,{children:[Object(t.jsx)(o.a,{exact:!0,path:"/",component:W}),Object(t.jsx)(o.a,{exact:!0,path:"/login",component:S}),Object(t.jsx)(o.a,{exact:!0,path:"/register",component:B}),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(te,{}),Object(t.jsx)(o.a,{exact:!0,path:"/mainpage",component:$}),Object(t.jsx)(o.a,{exact:!0,path:"/mainpage/product",component:ae}),Object(t.jsx)(o.a,{exact:!0,path:"/mainpage/basket",component:be}),Object(t.jsx)(Q,{})]})]})})})};s(262);r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(_,{initialState:{idCategory:1,basket:[],client:null},reducer:le,children:Object(t.jsx)(ue,{})})}),document.getElementById("root"))}},[[263,1,2]]]);
//# sourceMappingURL=main.323ded37.chunk.js.map