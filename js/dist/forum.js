(()=>{var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["common/app"];t.n(e)().initializers.add("benedikz/flarum-user-tunes",(function(){console.log("[benedikz/flarum-user-tunes] Hello, forum and admin!")}));const r=flarum.core.compat["forum/app"];var n=t.n(r);const o=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/SettingsPage"];var s=t.n(a);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,u(t,e)}const i=flarum.core.compat["common/Component"];var c=t.n(i);const p=flarum.core.compat["common/components/Button"];var f=t.n(p);const d=flarum.core.compat["common/utils/Stream"];var h=t.n(d),v=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).anthemUrl=void 0,e}l(e,t);var r=e.prototype;return r.oninit=function(e){var r;t.prototype.oninit.call(this,e),this.anthemUrl=h()((null==(r=n().session.user)?void 0:r.attribute("anthemUrl"))||"")},r.view=function(){return m("div",{className:"AnthemSettings"},m("div",{className:"Form-group"},m("label",null,n().translator.trans("flarum-user-tunes.forum.anthem_settings_label")),m("input",{className:"FormControl",type:"text",bidi:this.anthemUrl,placeholder:n().translator.trans("flarum-user-tunes.forum.anthem_settings_placeholder")})),m(f(),{className:"Button Button--primary",onclick:this.saveAnthem.bind(this)},n().translator.trans("flarum-user-tunes.forum.save_button")))},r.saveAnthem=function(){n().session.user.save({anthemUrl:this.anthemUrl()}).then((function(){n().alerts.show({type:"success"},n().translator.trans("flarum-user-tunes.forum.save_success"))}))},e}(c());const y=flarum.core.compat["forum/components/UserCard"];var b=t.n(y),_=function(t){function e(){return t.apply(this,arguments)||this}return l(e,t),e.prototype.view=function(t){var e=t.attrs.user,r=(null==e?void 0:e.attribute("anthemUrl"))||"";return r?m("div",{className:"UserProfileAnthem"},m("h4",null,n().translator.trans("flarum-user-tunes.forum.anthem_heading")),m("audio",{controls:!0},m("source",{src:r,type:"audio/ogg"}),n().translator.trans("flarum-user-tunes.forum.audio_not_supported"))):null},e}(c());n().initializers.add("benedikz/flarum-user-tunes",(function(){(0,o.extend)(s().prototype,"settingsItems",(function(t){t.add("anthem",m(v),100)})),(0,o.extend)(b().prototype,"infoItems",(function(t){var e=this.attrs.user;(null==e?void 0:e.attribute("anthemUrl"))&&t.add("anthem",m(_,{user:e}),100)}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map