(this.webpackJSONPwpmdb=this.webpackJSONPwpmdb||[]).push([[8],{719:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(1),c=n(6),r=n(37),s=n(11),u=n(16),p=n(113),m=n.n(p),o=n(27),d=n.n(o),f=n(17),b=n(40),g=n(18),h=n.n(g),_=n(13),O=n.n(_),v=n(199),j=Object(c.c)(function(e){return{theme_plugin_files:e.theme_plugin_files,panel_info:e.panels,local_version:e.migrations.local_site.theme_plugin_files_version}},{})(function(e){var t="",n=e.theme_plugin_files,a=e.disabled,c=e.local_version,s=[],u=e.panel_info.panelsOpen;if(a)return l.a.createElement(v.a,{message:e.theme_plugin_files.message,pluginSlug:"wp-migrate-db-pro-theme-plugin-files",remoteUpgradable:e.theme_plugin_files.remoteUpgradable,version:c,shortName:r.c});if(e.hasOwnProperty("items")&&e.hasOwnProperty("selected")){e.items.forEach(function(t){h()(e.selected,t.path)&&s.push(t.name)});var p=e.items.length,m=e.selected.length,o=Object(i.c)(Object(i.a)("<b>(%s of %s)</b>"),m,p);!h()(u,e.type)&&n[e.type].enabled&&m>0&&(t="".concat(o," ").concat(s.join(", ")))}return l.a.createElement(l.a.Fragment,null,O()(t))}),E=n(577),y=n(93),P=n(23),w=function(e){var t=Object(c.d)(),n=e.theme_plugin_files,a=e.type,i=e.disabled,r="undefined"!==typeof n&&n[e.type].enabled,s=function(n){if(i)return n.preventDefault(),!1;t(r?Object(P.h)(e.type):Object(P.c)(e.type)),function(e){e.toggleThemePluginFiles(e.type)}(e,e.type)};return l.a.createElement("div",{className:"tpf-panel-header"},l.a.createElement("input",{type:"checkbox",onChange:s,checked:r,id:a}),l.a.createElement("h4",{className:"panel-title"},l.a.createElement("label",{htmlFor:a,onClick:s},e.title," ")))},S=n(25),k=n(153);function N(){var e=Object(u.a)(["\n  min-height: 180px;\n  margin-bottom: 10px;\n"]);return N=function(){return e},e}var x=f.a.select(N());var C=function(e,t,n){e.updateSelected(t,n)},F=function(e,t,n){var a=[];if("object"===typeof t){var l=Object.values(t).map(function(e){return e[0].path});n["".concat(e,"_selected")].forEach(function(e){l.includes(e)&&a.push(e)})}return a};var T=function(e,t){var n=e.theme_plugin_files,u=e.panelsOpen,p=e.current_migration,o=e.remote_site,f=e.local_site,g=p.status,h=p.intent,_=function(e){var t=e.theme_plugin_files;return"undefined"!==typeof t.available&&!t.available}(e),O=Object(c.d)(),v=t.title,P=t.type,N=t.panel_name,T=t.items,D=T.map(function(e){return e.path}),U=!1,A=function(e,t,n,a,l){var i=l.site_details,c=F(a,"plugins"===a?i.plugins:i.themes,e);return{enabled:e["".concat(a.slice(0,-1),"_files")].enabled,isOpen:t.includes("".concat(a.slice(0,-1),"_files")),selected:c,selectionEmpty:m()(n,{name:"SELECTED_".concat(a.toUpperCase(),"_EMPTY")})}}(n,u,g,P,"pull"===h?o:f),J=A.enabled,I=A.isOpen,L=A.selected,M=A.selectionEmpty;Object(a.useEffect)(function(){O(e.updateSelected(L,P))},[]),L.length&&J&&!I&&(U=!0);var Y=[];return U&&Y.push("has-divider"),J&&Y.push("enabled"),l.a.createElement(b.a,{title:v,className:Y.join(" "),header:l.a.createElement(w,Object(s.a)({},e,{items:T,disabled:_,selected:L,title:v,type:N})),panelName:N,disabled:_,forceDivider:U,callback:function(t){return Object(k.b)(t,N,I,J,_,e.addOpenPanel,e.removeOpenPanel,function(){return O(Object(r.j)(N))})},bodyClass:"tpf-panel-body",panelSummary:l.a.createElement(j,Object(s.a)({},e,{disabled:_,items:T,selected:L,title:v,type:N}))},l.a.createElement("div",null,l.a.createElement(x,{multiple:!0,value:L,onChange:function(t){return function(e,t,n,a){t(n,[].slice.call(e.target.selectedOptions).map(function(e){return e.value}),a)}(t,C,e,P)}},T.map(function(e){return l.a.createElement("option",{key:d()(),value:e.path},e.name)}))),l.a.createElement("div",{className:"excludes-wrap"},l.a.createElement(E.a,Object(s.a)({},e,{excludes:n.excludes,excludesUpdater:e.updateExcludes}))),l.a.createElement("div",{className:"select-group"},l.a.createElement("p",{className:"multiselect-options"},l.a.createElement("button",{onClick:function(){return e.updateSelected(D,P)}},Object(i.a)("Select All","wp-migrate-db")),l.a.createElement("button",{onClick:function(){return e.updateSelected([],P)}},Object(i.a)("Deselect All","wp-migrate-db")),l.a.createElement("button",{onClick:function(){return function(e,t,n,a){return Object(y.a)(e.updateSelected,t,n,a)}(e,D,L,P)}},Object(i.a)("Invert Selection","wp-migrate-db")))),M&&l.a.createElement(S.c,{className:"error-msg"},Object(i.c)(Object(i.a)("Please select %s files for migration","wp-migrate-db"),"themes"===P?"theme":"plugin")))},D=n(4),U=(n(533),n(34));function A(e,t){var n={};return["themes","plugins"].forEach(function(a,l){var i=e.local_site.site_details[a];"pull"===t&&(i=e.remote_site.site_details[a]);var c=[];for(var r in i){var s=i[r];c.push({name:s[0].name,path:s[0].path})}return n[a]=c}),n}var J=function(e){var t=A(e,e.current_migration.intent).themes;return T(e,{title:Object(i.a)("Theme Files","wp-migrate-db"),type:"themes",panel_name:"theme_files",items:t})},I=function(e){var t=A(e,e.current_migration.intent).plugins;return T(e,{title:Object(i.a)("Plugin Files","wp-migrate-db"),type:"plugins",panel_name:"plugin_files",items:t})};t.default=Object(c.c)(function(e){var t=Object(D.f)("current_migration",e),n=Object(D.f)("local_site",e),a=Object(D.f)("remote_site",e),l=Object(U.a)("panelsOpen",e),i=Object(D.d)("stages",e),c=Object(D.g)("status",e);return{theme_plugin_files:e.theme_plugin_files,current_migration:t,local_site:n,remote_site:a,panelsOpen:l,stages:i,status:c}},{toggleThemePluginFiles:r.j,updateSelected:r.n,togglePanelsOpen:P.l,addOpenPanel:P.c,removeOpenPanel:P.h,updateExcludes:r.m,kickOffTPFStage:r.g})(function(e){return l.a.createElement("div",{className:"theme-plugin-files"},l.a.createElement(J,e),l.a.createElement(I,e))})}}]);