"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[55],{1055:(U,g,o)=>{o.r(g),o.d(g,{RecuperarPassModule:()=>L});var b=o(6019),s=o(7535),a=o(9133),_=o(399),d=o(3199),m=o(4897),f=o.n(m),l=o(4287),e=o(3668),h=o(3220),P=o(4173),w=o(8481),v=o(2509),C=o(5286),M=o(9797),x=o(481),O=o(4750);function k(n,i){if(1&n&&(e.TgZ(0,"small",16),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.validarNewPass.mensaje)}}function y(n,i){if(1&n&&(e.TgZ(0,"small",16),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.validarOldPass.mensaje)}}function Z(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeDialog()}),e.qZA(),e.TgZ(1,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().btnGuardar()}),e.qZA()}}const T=function(){return["/login"]},A=function(){return{width:"500px"}},u=function(){return{width:"100%"}},R=[{path:"",component:(()=>{class n{constructor(t,r,c,p,D,N){this.fb=t,this.store=r,this.validadores=c,this.userService=p,this.route=D,this.router=N,this.displayDialog=!1,this.passIguales=!1,this.passIgualesLabel=""}ngOnInit(){this.setLocalToken(),this.crearFormulario()}setLocalToken(){this.route.queryParamMap.subscribe(t=>{if(t.has("token")){const c=t.get("token");this.userService.decodificarToken(c).subscribe(p=>{p.ok||this.router.navigateByUrl("/not-found")})}else this.router.navigateByUrl("/not-found")})}crearFormulario(){this.forma=this.fb.group({oldPass:[],newPass:[]})}limpiarFormulario(){this.forma.controls.oldPass.reset(),this.forma.controls.newPass.reset()}showDialog(){this.displayDialog=!0,this.limpiarFormulario()}closeDialog(){this.displayDialog=!1}get validarNewPass(){return this.validadores.validarTexto({requerido:!0,size:!0,minSize:8,maxSize:20,value:this.forma.controls.newPass.value})}get validarOldPass(){return this.validadores.validarTexto({requerido:!0,size:!0,minSize:8,maxSize:20,value:this.forma.controls.oldPass.value})}btnGuardar(){if(!this.validarNewPass.valido||!this.validarOldPass.valido)return this.passIgualesLabel="",void this.forma.markAllAsTouched();this.store.dispatch(l.G()),this.passIguales=this.forma.controls.newPass.value.toLowerCase()===this.forma.controls.oldPass.value.toLocaleLowerCase(),this.passIguales?this.route.queryParams.pipe((0,d.zg)(r=>this.userService.decodificarToken(r.token).pipe((0,d.zg)(c=>this.userService.editarPassword({token:c.token,id:c.usuarioDB._id,password:this.forma.controls.newPass.value,reset_pass:!1}))))).subscribe(r=>{r.ok?(this.displayDialog=!1,f().fire("Mensaje","Contrase\xf1a editada","success"),this.router.navigateByUrl("/login"),this.limpiarFormulario(),this.store.dispatch(l.F())):(f().fire("Mensaje","Error editar la contrase\xf1a","error"),this.store.dispatch(l.F())),r||(f().fire("Mensaje","Error editar la contrase\xf1a","error"),this.store.dispatch(l.F()))}):this.passIgualesLabel="Las contrase\xf1as no son iguales"}ngOnDestroy(){localStorage.clear()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu),e.Y36(h.yh),e.Y36(P.n),e.Y36(w.K),e.Y36(s.gz),e.Y36(s.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recuperar-pass"]],decls:31,vars:19,consts:[["id","body"],[1,"lock"],[1,"message"],[2,"color","rgb(132, 0, 172)","cursor","pointer","font-weight","500",3,"click"],[2,"color","rgb(132, 0, 172)","cursor","pointer","font-weight","500",3,"routerLink"],[3,"formGroup"],["header","Cambiar contrase\xf1a",3,"visible","modal","draggable","resizable","visibleChange","onHide"],["id","wrap-form-perfil"],[1,"field","flex-column"],[1,"p-float-label"],["id","float-input","promptLabel","Ingrese la contrase\xf1a","weakLabel","D\xe9bil","mediumLabel","Intermedio","strongLabel","Fuerte","formControlName","newPass"],["for","float-input"],["class","p-error","style","word-wrap: break-word",4,"ngIf"],["id","float-input","promptLabel","Ingrese la contrase\xf1a","weakLabel","D\xe9bil","mediumLabel","Intermedio","strongLabel","Fuerte","formControlName","oldPass"],["for","",2,"grid-column","1 / 3","color","tomato"],["pTemplate","footer"],[1,"p-error",2,"word-wrap","break-word"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(t,r){1&t&&(e._UZ(0,"app-loading"),e.TgZ(1,"section",0),e._UZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"h1"),e._uU(5,"Solicit\xfad actualizaci\xf3n de contrase\xf1a"),e.qZA(),e.TgZ(6,"a",3),e.NdJ("click",function(){return r.showDialog()}),e._uU(7,"Actualizar contrase\xf1a"),e.qZA(),e._uU(8," | "),e.TgZ(9,"a",4),e._uU(10,"Ir a la P\xe1gina principal"),e.qZA(),e.TgZ(11,"p"),e._uU(12,"Despu\xe9s de 4 horas ya no podr\xe1 acceder a este enlace"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"form",5),e.TgZ(14,"p-dialog",6),e.NdJ("visibleChange",function(p){return r.displayDialog=p})("onHide",function(){return r.closeDialog()}),e.TgZ(15,"section",7),e.TgZ(16,"div",8),e.TgZ(17,"span",9),e._UZ(18,"p-password",10),e.TgZ(19,"label",11),e._uU(20,"Nueva contrase\xf1a"),e.qZA(),e.qZA(),e.YNc(21,k,2,1,"small",12),e.qZA(),e.TgZ(22,"div",8),e.TgZ(23,"span",9),e._UZ(24,"p-password",13),e.TgZ(25,"label",11),e._uU(26,"Confirmar contrase\xf1a"),e.qZA(),e.qZA(),e.YNc(27,y,2,1,"small",12),e.qZA(),e.TgZ(28,"label",14),e._uU(29),e.qZA(),e.qZA(),e.YNc(30,Z,2,0,"ng-template",15),e.qZA(),e.qZA()),2&t&&(e.xp6(9),e.Q6J("routerLink",e.DdM(15,T)),e.xp6(4),e.Q6J("formGroup",r.forma),e.xp6(1),e.Akn(e.DdM(16,A)),e.Q6J("visible",r.displayDialog)("modal",!0)("draggable",!0)("resizable",!1),e.xp6(2),e.Akn(e.DdM(17,u)),e.xp6(5),e.Q6J("ngIf",!r.validarNewPass.valido&&r.forma.controls.newPass.touched),e.xp6(1),e.Akn(e.DdM(18,u)),e.xp6(5),e.Q6J("ngIf",!r.validarOldPass.valido&&r.forma.controls.oldPass.touched),e.xp6(2),e.Oqu(r.passIgualesLabel))},directives:[v.N,s.yS,a._Y,a.JL,a.sg,C.V,M.ro,a.JJ,a.u,b.O5,x.jx,O.Hq],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@import"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap";@import"https://fonts.googleapis.com/css?family=Lato";@font-face{font-family:"primeicons";font-display:block;src:url(primeicons.964f445f3ea9db80.eot);src:url(primeicons.964f445f3ea9db80.eot?#iefix) format("embedded-opentype"),url(primeicons.5f5d08cd089b4e5d.ttf) format("truetype"),url(primeicons.29151a741d66863a.woff) format("woff"),url(primeicons.76044b1c189cc4d7.svg?#primeicons) format("svg");font-weight:normal;font-style:normal}.pi[_ngcontent-%COMP%]{font-family:"primeicons";speak:none;font-style:normal;font-weight:normal;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pi[_ngcontent-%COMP%]:before{--webkit-backface-visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden}.pi-fw[_ngcontent-%COMP%]{width:1.28571429em;text-align:center}.pi-spin[_ngcontent-%COMP%]{animation:fa-spin 2s infinite linear}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.pi-sort-alt-slash[_ngcontent-%COMP%]:before{content:"\\e9ee"}.pi-arrows-h[_ngcontent-%COMP%]:before{content:"\\e9ec"}.pi-arrows-v[_ngcontent-%COMP%]:before{content:"\\e9ed"}.pi-pound[_ngcontent-%COMP%]:before{content:"\\e9eb"}.pi-prime[_ngcontent-%COMP%]:before{content:"\\e9ea"}.pi-chart-pie[_ngcontent-%COMP%]:before{content:"\\e9e9"}.pi-reddit[_ngcontent-%COMP%]:before{content:"\\e9e8"}.pi-code[_ngcontent-%COMP%]:before{content:"\\e9e7"}.pi-sync[_ngcontent-%COMP%]:before{content:"\\e9e6"}.pi-shopping-bag[_ngcontent-%COMP%]:before{content:"\\e9e5"}.pi-server[_ngcontent-%COMP%]:before{content:"\\e9e4"}.pi-database[_ngcontent-%COMP%]:before{content:"\\e9e3"}.pi-hashtag[_ngcontent-%COMP%]:before{content:"\\e9e2"}.pi-bookmark-fill[_ngcontent-%COMP%]:before{content:"\\e9df"}.pi-filter-fill[_ngcontent-%COMP%]:before{content:"\\e9e0"}.pi-heart-fill[_ngcontent-%COMP%]:before{content:"\\e9e1"}.pi-flag-fill[_ngcontent-%COMP%]:before{content:"\\e9de"}.pi-circle[_ngcontent-%COMP%]:before{content:"\\e9dc"}.pi-circle-fill[_ngcontent-%COMP%]:before{content:"\\e9dd"}.pi-bolt[_ngcontent-%COMP%]:before{content:"\\e9db"}.pi-history[_ngcontent-%COMP%]:before{content:"\\e9da"}.pi-box[_ngcontent-%COMP%]:before{content:"\\e9d9"}.pi-at[_ngcontent-%COMP%]:before{content:"\\e9d8"}.pi-arrow-up-right[_ngcontent-%COMP%]:before{content:"\\e9d4"}.pi-arrow-up-left[_ngcontent-%COMP%]:before{content:"\\e9d5"}.pi-arrow-down-left[_ngcontent-%COMP%]:before{content:"\\e9d6"}.pi-arrow-down-right[_ngcontent-%COMP%]:before{content:"\\e9d7"}.pi-telegram[_ngcontent-%COMP%]:before{content:"\\e9d3"}.pi-stop-circle[_ngcontent-%COMP%]:before{content:"\\e9d2"}.pi-stop[_ngcontent-%COMP%]:before{content:"\\e9d1"}.pi-whatsapp[_ngcontent-%COMP%]:before{content:"\\e9d0"}.pi-building[_ngcontent-%COMP%]:before{content:"\\e9cf"}.pi-qrcode[_ngcontent-%COMP%]:before{content:"\\e9ce"}.pi-car[_ngcontent-%COMP%]:before{content:"\\e9cd"}.pi-instagram[_ngcontent-%COMP%]:before{content:"\\e9cc"}.pi-linkedin[_ngcontent-%COMP%]:before{content:"\\e9cb"}.pi-send[_ngcontent-%COMP%]:before{content:"\\e9ca"}.pi-slack[_ngcontent-%COMP%]:before{content:"\\e9c9"}.pi-sun[_ngcontent-%COMP%]:before{content:"\\e9c8"}.pi-moon[_ngcontent-%COMP%]:before{content:"\\e9c7"}.pi-vimeo[_ngcontent-%COMP%]:before{content:"\\e9c6"}.pi-youtube[_ngcontent-%COMP%]:before{content:"\\e9c5"}.pi-flag[_ngcontent-%COMP%]:before{content:"\\e9c4"}.pi-wallet[_ngcontent-%COMP%]:before{content:"\\e9c3"}.pi-map[_ngcontent-%COMP%]:before{content:"\\e9c2"}.pi-link[_ngcontent-%COMP%]:before{content:"\\e9c1"}.pi-credit-card[_ngcontent-%COMP%]:before{content:"\\e9bf"}.pi-discord[_ngcontent-%COMP%]:before{content:"\\e9c0"}.pi-percentage[_ngcontent-%COMP%]:before{content:"\\e9be"}.pi-euro[_ngcontent-%COMP%]:before{content:"\\e9bd"}.pi-book[_ngcontent-%COMP%]:before{content:"\\e9ba"}.pi-shield[_ngcontent-%COMP%]:before{content:"\\e9b9"}.pi-paypal[_ngcontent-%COMP%]:before{content:"\\e9bb"}.pi-amazon[_ngcontent-%COMP%]:before{content:"\\e9bc"}.pi-phone[_ngcontent-%COMP%]:before{content:"\\e9b8"}.pi-filter-slash[_ngcontent-%COMP%]:before{content:"\\e9b7"}.pi-facebook[_ngcontent-%COMP%]:before{content:"\\e9b4"}.pi-github[_ngcontent-%COMP%]:before{content:"\\e9b5"}.pi-twitter[_ngcontent-%COMP%]:before{content:"\\e9b6"}.pi-step-backward-alt[_ngcontent-%COMP%]:before{content:"\\e9ac"}.pi-step-forward-alt[_ngcontent-%COMP%]:before{content:"\\e9ad"}.pi-forward[_ngcontent-%COMP%]:before{content:"\\e9ae"}.pi-backward[_ngcontent-%COMP%]:before{content:"\\e9af"}.pi-fast-backward[_ngcontent-%COMP%]:before{content:"\\e9b0"}.pi-fast-forward[_ngcontent-%COMP%]:before{content:"\\e9b1"}.pi-pause[_ngcontent-%COMP%]:before{content:"\\e9b2"}.pi-play[_ngcontent-%COMP%]:before{content:"\\e9b3"}.pi-compass[_ngcontent-%COMP%]:before{content:"\\e9ab"}.pi-id-card[_ngcontent-%COMP%]:before{content:"\\e9aa"}.pi-ticket[_ngcontent-%COMP%]:before{content:"\\e9a9"}.pi-file-o[_ngcontent-%COMP%]:before{content:"\\e9a8"}.pi-reply[_ngcontent-%COMP%]:before{content:"\\e9a7"}.pi-directions-alt[_ngcontent-%COMP%]:before{content:"\\e9a5"}.pi-directions[_ngcontent-%COMP%]:before{content:"\\e9a6"}.pi-thumbs-up[_ngcontent-%COMP%]:before{content:"\\e9a3"}.pi-thumbs-down[_ngcontent-%COMP%]:before{content:"\\e9a4"}.pi-sort-numeric-down-alt[_ngcontent-%COMP%]:before{content:"\\e996"}.pi-sort-numeric-up-alt[_ngcontent-%COMP%]:before{content:"\\e997"}.pi-sort-alpha-down-alt[_ngcontent-%COMP%]:before{content:"\\e998"}.pi-sort-alpha-up-alt[_ngcontent-%COMP%]:before{content:"\\e999"}.pi-sort-numeric-down[_ngcontent-%COMP%]:before{content:"\\e99a"}.pi-sort-numeric-up[_ngcontent-%COMP%]:before{content:"\\e99b"}.pi-sort-alpha-down[_ngcontent-%COMP%]:before{content:"\\e99c"}.pi-sort-alpha-up[_ngcontent-%COMP%]:before{content:"\\e99d"}.pi-sort-alt[_ngcontent-%COMP%]:before{content:"\\e99e"}.pi-sort-amount-up[_ngcontent-%COMP%]:before{content:"\\e99f"}.pi-sort-amount-down[_ngcontent-%COMP%]:before{content:"\\e9a0"}.pi-sort-amount-down-alt[_ngcontent-%COMP%]:before{content:"\\e9a1"}.pi-sort-amount-up-alt[_ngcontent-%COMP%]:before{content:"\\e9a2"}.pi-palette[_ngcontent-%COMP%]:before{content:"\\e995"}.pi-undo[_ngcontent-%COMP%]:before{content:"\\e994"}.pi-desktop[_ngcontent-%COMP%]:before{content:"\\e993"}.pi-sliders-v[_ngcontent-%COMP%]:before{content:"\\e991"}.pi-sliders-h[_ngcontent-%COMP%]:before{content:"\\e992"}.pi-search-plus[_ngcontent-%COMP%]:before{content:"\\e98f"}.pi-search-minus[_ngcontent-%COMP%]:before{content:"\\e990"}.pi-file-excel[_ngcontent-%COMP%]:before{content:"\\e98e"}.pi-file-pdf[_ngcontent-%COMP%]:before{content:"\\e98d"}.pi-check-square[_ngcontent-%COMP%]:before{content:"\\e98c"}.pi-chart-line[_ngcontent-%COMP%]:before{content:"\\e98b"}.pi-user-edit[_ngcontent-%COMP%]:before{content:"\\e98a"}.pi-exclamation-circle[_ngcontent-%COMP%]:before{content:"\\e989"}.pi-android[_ngcontent-%COMP%]:before{content:"\\e985"}.pi-google[_ngcontent-%COMP%]:before{content:"\\e986"}.pi-apple[_ngcontent-%COMP%]:before{content:"\\e987"}.pi-microsoft[_ngcontent-%COMP%]:before{content:"\\e988"}.pi-heart[_ngcontent-%COMP%]:before{content:"\\e984"}.pi-mobile[_ngcontent-%COMP%]:before{content:"\\e982"}.pi-tablet[_ngcontent-%COMP%]:before{content:"\\e983"}.pi-key[_ngcontent-%COMP%]:before{content:"\\e981"}.pi-shopping-cart[_ngcontent-%COMP%]:before{content:"\\e980"}.pi-comments[_ngcontent-%COMP%]:before{content:"\\e97e"}.pi-comment[_ngcontent-%COMP%]:before{content:"\\e97f"}.pi-briefcase[_ngcontent-%COMP%]:before{content:"\\e97d"}.pi-bell[_ngcontent-%COMP%]:before{content:"\\e97c"}.pi-paperclip[_ngcontent-%COMP%]:before{content:"\\e97b"}.pi-share-alt[_ngcontent-%COMP%]:before{content:"\\e97a"}.pi-envelope[_ngcontent-%COMP%]:before{content:"\\e979"}.pi-volume-down[_ngcontent-%COMP%]:before{content:"\\e976"}.pi-volume-up[_ngcontent-%COMP%]:before{content:"\\e977"}.pi-volume-off[_ngcontent-%COMP%]:before{content:"\\e978"}.pi-eject[_ngcontent-%COMP%]:before{content:"\\e975"}.pi-money-bill[_ngcontent-%COMP%]:before{content:"\\e974"}.pi-images[_ngcontent-%COMP%]:before{content:"\\e973"}.pi-image[_ngcontent-%COMP%]:before{content:"\\e972"}.pi-sign-in[_ngcontent-%COMP%]:before{content:"\\e970"}.pi-sign-out[_ngcontent-%COMP%]:before{content:"\\e971"}.pi-wifi[_ngcontent-%COMP%]:before{content:"\\e96f"}.pi-sitemap[_ngcontent-%COMP%]:before{content:"\\e96e"}.pi-chart-bar[_ngcontent-%COMP%]:before{content:"\\e96d"}.pi-camera[_ngcontent-%COMP%]:before{content:"\\e96c"}.pi-dollar[_ngcontent-%COMP%]:before{content:"\\e96b"}.pi-lock-open[_ngcontent-%COMP%]:before{content:"\\e96a"}.pi-table[_ngcontent-%COMP%]:before{content:"\\e969"}.pi-map-marker[_ngcontent-%COMP%]:before{content:"\\e968"}.pi-list[_ngcontent-%COMP%]:before{content:"\\e967"}.pi-eye-slash[_ngcontent-%COMP%]:before{content:"\\e965"}.pi-eye[_ngcontent-%COMP%]:before{content:"\\e966"}.pi-folder-open[_ngcontent-%COMP%]:before{content:"\\e964"}.pi-folder[_ngcontent-%COMP%]:before{content:"\\e963"}.pi-video[_ngcontent-%COMP%]:before{content:"\\e962"}.pi-inbox[_ngcontent-%COMP%]:before{content:"\\e961"}.pi-lock[_ngcontent-%COMP%]:before{content:"\\e95f"}.pi-unlock[_ngcontent-%COMP%]:before{content:"\\e960"}.pi-tags[_ngcontent-%COMP%]:before{content:"\\e95d"}.pi-tag[_ngcontent-%COMP%]:before{content:"\\e95e"}.pi-power-off[_ngcontent-%COMP%]:before{content:"\\e95c"}.pi-save[_ngcontent-%COMP%]:before{content:"\\e95b"}.pi-question-circle[_ngcontent-%COMP%]:before{content:"\\e959"}.pi-question[_ngcontent-%COMP%]:before{content:"\\e95a"}.pi-copy[_ngcontent-%COMP%]:before{content:"\\e957"}.pi-file[_ngcontent-%COMP%]:before{content:"\\e958"}.pi-clone[_ngcontent-%COMP%]:before{content:"\\e955"}.pi-calendar-times[_ngcontent-%COMP%]:before{content:"\\e952"}.pi-calendar-minus[_ngcontent-%COMP%]:before{content:"\\e953"}.pi-calendar-plus[_ngcontent-%COMP%]:before{content:"\\e954"}.pi-ellipsis-v[_ngcontent-%COMP%]:before{content:"\\e950"}.pi-ellipsis-h[_ngcontent-%COMP%]:before{content:"\\e951"}.pi-bookmark[_ngcontent-%COMP%]:before{content:"\\e94e"}.pi-globe[_ngcontent-%COMP%]:before{content:"\\e94f"}.pi-replay[_ngcontent-%COMP%]:before{content:"\\e94d"}.pi-filter[_ngcontent-%COMP%]:before{content:"\\e94c"}.pi-print[_ngcontent-%COMP%]:before{content:"\\e94b"}.pi-align-right[_ngcontent-%COMP%]:before{content:"\\e946"}.pi-align-left[_ngcontent-%COMP%]:before{content:"\\e947"}.pi-align-center[_ngcontent-%COMP%]:before{content:"\\e948"}.pi-align-justify[_ngcontent-%COMP%]:before{content:"\\e949"}.pi-cog[_ngcontent-%COMP%]:before{content:"\\e94a"}.pi-cloud-download[_ngcontent-%COMP%]:before{content:"\\e943"}.pi-cloud-upload[_ngcontent-%COMP%]:before{content:"\\e944"}.pi-cloud[_ngcontent-%COMP%]:before{content:"\\e945"}.pi-pencil[_ngcontent-%COMP%]:before{content:"\\e942"}.pi-users[_ngcontent-%COMP%]:before{content:"\\e941"}.pi-clock[_ngcontent-%COMP%]:before{content:"\\e940"}.pi-user-minus[_ngcontent-%COMP%]:before{content:"\\e93e"}.pi-user-plus[_ngcontent-%COMP%]:before{content:"\\e93f"}.pi-trash[_ngcontent-%COMP%]:before{content:"\\e93d"}.pi-external-link[_ngcontent-%COMP%]:before{content:"\\e93c"}.pi-window-maximize[_ngcontent-%COMP%]:before{content:"\\e93b"}.pi-window-minimize[_ngcontent-%COMP%]:before{content:"\\e93a"}.pi-refresh[_ngcontent-%COMP%]:before{content:"\\e938"}.pi-user[_ngcontent-%COMP%]:before{content:"\\e939"}.pi-exclamation-triangle[_ngcontent-%COMP%]:before{content:"\\e922"}.pi-calendar[_ngcontent-%COMP%]:before{content:"\\e927"}.pi-chevron-circle-left[_ngcontent-%COMP%]:before{content:"\\e928"}.pi-chevron-circle-down[_ngcontent-%COMP%]:before{content:"\\e929"}.pi-chevron-circle-right[_ngcontent-%COMP%]:before{content:"\\e92a"}.pi-chevron-circle-up[_ngcontent-%COMP%]:before{content:"\\e92b"}.pi-angle-double-down[_ngcontent-%COMP%]:before{content:"\\e92c"}.pi-angle-double-left[_ngcontent-%COMP%]:before{content:"\\e92d"}.pi-angle-double-right[_ngcontent-%COMP%]:before{content:"\\e92e"}.pi-angle-double-up[_ngcontent-%COMP%]:before{content:"\\e92f"}.pi-angle-down[_ngcontent-%COMP%]:before{content:"\\e930"}.pi-angle-left[_ngcontent-%COMP%]:before{content:"\\e931"}.pi-angle-right[_ngcontent-%COMP%]:before{content:"\\e932"}.pi-angle-up[_ngcontent-%COMP%]:before{content:"\\e933"}.pi-upload[_ngcontent-%COMP%]:before{content:"\\e934"}.pi-download[_ngcontent-%COMP%]:before{content:"\\e956"}.pi-ban[_ngcontent-%COMP%]:before{content:"\\e935"}.pi-star-fill[_ngcontent-%COMP%]:before{content:"\\e936"}.pi-star[_ngcontent-%COMP%]:before{content:"\\e937"}.pi-chevron-left[_ngcontent-%COMP%]:before{content:"\\e900"}.pi-chevron-right[_ngcontent-%COMP%]:before{content:"\\e901"}.pi-chevron-down[_ngcontent-%COMP%]:before{content:"\\e902"}.pi-chevron-up[_ngcontent-%COMP%]:before{content:"\\e903"}.pi-caret-left[_ngcontent-%COMP%]:before{content:"\\e904"}.pi-caret-right[_ngcontent-%COMP%]:before{content:"\\e905"}.pi-caret-down[_ngcontent-%COMP%]:before{content:"\\e906"}.pi-caret-up[_ngcontent-%COMP%]:before{content:"\\e907"}.pi-search[_ngcontent-%COMP%]:before{content:"\\e908"}.pi-check[_ngcontent-%COMP%]:before{content:"\\e909"}.pi-check-circle[_ngcontent-%COMP%]:before{content:"\\e90a"}.pi-times[_ngcontent-%COMP%]:before{content:"\\e90b"}.pi-times-circle[_ngcontent-%COMP%]:before{content:"\\e90c"}.pi-plus[_ngcontent-%COMP%]:before{content:"\\e90d"}.pi-plus-circle[_ngcontent-%COMP%]:before{content:"\\e90e"}.pi-minus[_ngcontent-%COMP%]:before{content:"\\e90f"}.pi-minus-circle[_ngcontent-%COMP%]:before{content:"\\e910"}.pi-circle-on[_ngcontent-%COMP%]:before{content:"\\e911"}.pi-circle-off[_ngcontent-%COMP%]:before{content:"\\e912"}.pi-sort-down[_ngcontent-%COMP%]:before{content:"\\e913"}.pi-sort-up[_ngcontent-%COMP%]:before{content:"\\e914"}.pi-sort[_ngcontent-%COMP%]:before{content:"\\e915"}.pi-step-backward[_ngcontent-%COMP%]:before{content:"\\e916"}.pi-step-forward[_ngcontent-%COMP%]:before{content:"\\e917"}.pi-th-large[_ngcontent-%COMP%]:before{content:"\\e918"}.pi-arrow-down[_ngcontent-%COMP%]:before{content:"\\e919"}.pi-arrow-left[_ngcontent-%COMP%]:before{content:"\\e91a"}.pi-arrow-right[_ngcontent-%COMP%]:before{content:"\\e91b"}.pi-arrow-up[_ngcontent-%COMP%]:before{content:"\\e91c"}.pi-bars[_ngcontent-%COMP%]:before{content:"\\e91d"}.pi-arrow-circle-down[_ngcontent-%COMP%]:before{content:"\\e91e"}.pi-arrow-circle-left[_ngcontent-%COMP%]:before{content:"\\e91f"}.pi-arrow-circle-right[_ngcontent-%COMP%]:before{content:"\\e920"}.pi-arrow-circle-up[_ngcontent-%COMP%]:before{content:"\\e921"}.pi-info[_ngcontent-%COMP%]:before{content:"\\e923"}.pi-info-circle[_ngcontent-%COMP%]:before{content:"\\e924"}.pi-home[_ngcontent-%COMP%]:before{content:"\\e925"}.pi-spinner[_ngcontent-%COMP%]:before{content:"\\e926"}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{background-color:#eff2f5!important}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ffffff}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}a[_ngcontent-%COMP%]{text-decoration:none}*[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;box-sizing:border-box;font-family:"Lato",sans-serif}#body[_ngcontent-%COMP%]{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(to bottom right,#eee,#aaa)}h1[_ngcontent-%COMP%]{margin:40px 0 20px}.lock[_ngcontent-%COMP%]{border-radius:5px;width:55px;height:45px;background-color:#333;animation:dip 3s infinite;animation-delay:1.5s}.lock[_ngcontent-%COMP%]:before, .lock[_ngcontent-%COMP%]:after{content:"";position:absolute;border-left:5px solid #333;height:20px;width:15px;left:calc(50% - 12.5px)}.lock[_ngcontent-%COMP%]:before{top:-30px;border:5px solid #333;border-bottom-color:transparent;border-radius:15px 15px 0 0;height:30px;animation:lock 2s,spin 2s}.lock[_ngcontent-%COMP%]:after{top:-10px;border-right:5px solid transparent;animation:spin 2s}@keyframes lock{0%{top:-45px}65%{top:-45px}to{top:-30px}}@keyframes spin{0%{transform:scaleX(-1);left:calc(50% - 30px)}65%{transform:scaleX(1);left:calc(50% - 12.5px)}}@keyframes dip{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}*[_ngcontent-%COMP%]{font-family:"Nunito Sans",sans-serif}@media screen and (max-width: 576px){button#btnNuevo[_ngcontent-%COMP%]{margin-left:-25px!important;margin-top:-25px!important}section#wrap-perfil[_ngcontent-%COMP%]{margin-top:40px}}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.badge-activo[_ngcontent-%COMP%]{background-color:#53b35680;padding:4px 8px;border-radius:3px;font-weight:bold;color:#055c08}.badge-inactivo[_ngcontent-%COMP%]{background-color:tomato;padding:4px 8px;border-radius:3px;font-weight:bold;color:#fafafa}.btnHeader[_ngcontent-%COMP%]{background-color:#00b19d;border:none!important}.btnHeader[_ngcontent-%COMP%]:hover{background-color:#009f8d!important}#wrap-perfil[_ngcontent-%COMP%]{margin:100px auto;width:90%}#wrap-tabla[_ngcontent-%COMP%]{background-color:#fff;padding:25px}#wrap-form-perfil[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);padding:25px 0;grid-column-gap:15px;column-gap:15px;grid-row-gap:35px;row-gap:35px;position:relative}.p-inputtext[_ngcontent-%COMP%], .p-dropdown[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{border:none;position:relative;overflow:hidden;border-radius:8px;cursor:pointer}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;width:4px;height:100%;background-color:#cbfff9;transform:scaleY(1);transition:all .5s;transform-origin:bottom}.card[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;width:4px;height:100%;background-color:#00b19d;transform:scaleY(0);transition:all .5s;transform-origin:bottom}.card[_ngcontent-%COMP%]:hover:after{transform:scaleY(1)}.fonts[_ngcontent-%COMP%]{font-size:11px}.social-list[_ngcontent-%COMP%]{display:flex;list-style:none;justify-content:center;padding:0}.social-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px;color:#00b19d;font-size:19px}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1){border:1px solid #00b19d!important;color:#00b19d;height:40px}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover{border:1px solid #00b19d!important;color:#fff;height:40px;background-color:#00b19d}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){border:1px solid #00b19d!important;background-color:#00b19d;color:#fff;height:40px}']}),n})()}];let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.Bz.forChild(R)]]}),n})();var F=o(7043);let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[P.n],imports:[[b.ez,z,s.Bz,C.S,O.hJ,F.j,M.gz,a.u5,a.UX,_.I]]}),n})()}}]);