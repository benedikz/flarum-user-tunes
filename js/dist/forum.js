(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["common/app"];t.n(e)().initializers.add("benedikz/flarum-user-tunes",(function(){console.log("[benedikz/flarum-user-tunes] Hello, forum and admin!")}));const n=flarum.core.compat["forum/app"];var r=t.n(n);const o=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/SettingsPage"];var s=t.n(a);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,u(t,e)}const i=flarum.core.compat["common/Component"];var c=t.n(i);const p=flarum.core.compat["common/components/Button"];var f=t.n(p);const d=flarum.core.compat["common/utils/Stream"];var h=t.n(d),v=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).anthemUrl=void 0,e}l(e,t);var n=e.prototype;return n.oninit=function(e){var n;t.prototype.oninit.call(this,e),this.anthemUrl=h()((null==(n=r().session.user)?void 0:n.attribute("anthemUrl"))||"")},n.view=function(){return m("div",{className:"AnthemSettings"},m("div",{className:"Form-group"},m("label",null,r().translator.trans("flarum-user-tunes.forum.anthem_settings_label")),m("input",{className:"FormControl",type:"text",bidi:this.anthemUrl,placeholder:r().translator.trans("flarum-user-tunes.forum.anthem_settings_placeholder")})),m(f(),{className:"Button Button--primary",onclick:this.saveAnthem.bind(this)},r().translator.trans("flarum-user-tunes.forum.save_button")))},n.saveAnthem=function(){r().session.user.save({anthemUrl:this.anthemUrl()}).then((function(){r().alerts.show({type:"success"},r().translator.trans("flarum-user-tunes.forum.save_success"))}))},e}(c());const y=flarum.core.compat["forum/components/UserCard"];var b=t.n(y),_=function(t){function e(){return t.apply(this,arguments)||this}return l(e,t),e.prototype.view=function(t){var e=t.attrs.user,n=(null==e?void 0:e.attribute("anthemUrl"))||"";return n?m("div",{className:"UserProfileAnthem"},m("h4",null,r().translator.trans("flarum-user-tunes.forum.anthem_heading")),m("audio",{controls:!0},m("source",{src:n,type:"audio/ogg"}),r().translator.trans("flarum-user-tunes.forum.audio_not_supported"))):m("span",null,"$ERR_NO_ANTHEM_SET.")},e}(c());r().initializers.add("benedikz/flarum-user-tunes",(function(){console.log("[benedikz/flarum-user-tunes] Hello, forum and admin!"),(0,o.extend)(s().prototype,"settingsItems",(function(t){t.add("anthem",m(v),100)})),(0,o.extend)(b().prototype,"infoItems",(function(t){var e=this.attrs.user;null==e||e.attribute("anthemUrl"),t.add("anthem",m(_,{user:e}),1)}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map