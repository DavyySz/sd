import './polyfills.server.mjs';
import{A as a,B as Ve,C as Me,D as g,E as ie,F as c,G as re,H as De,I as w,J as E,K as F,L as S,M as B,O as Ae,S as we,U as Ee,W as Fe,X as H,Y as v,Z as Se,_ as oe,a as fe,aa as Ie,b as pe,ba as Oe,c as ge,ca as xe,d as me,da as Ne,e as M,f as ee,g as y,ga as Pe,h as R,i as te,j as p,k as _e,l as ve,m as ye,ma as ke,n as T,o as G,p as D,q as h,r as l,s as A,t as U,u as _,v as ne,w as j,x as Ce,y as be,z as s}from"./chunk-SSBEJY43.mjs";import{a as d,b as f}from"./chunk-5XUXGTUW.mjs";var $e=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(l(A),l(D))}}static{this.\u0275dir=p({type:n})}}return n})(),ce=(()=>{class n extends $e{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=T(n)))(r||n)}})()}static{this.\u0275dir=p({type:n,features:[_]})}}return n})(),z=new y("");var ct={provide:z,useExisting:M(()=>Z),multi:!0};function dt(){let n=oe()?oe().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ht=new y(""),Z=(()=>{class n extends $e{constructor(t,i,r){super(t,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(l(A),l(D),l(ht,8))}}static{this.\u0275dir=p({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&g("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},features:[S([ct]),_]})}}return n})();var ft=new y(""),pt=new y("");function qe(n){return n!=null}function ze(n){return Ae(n)?pe(n):n}function Ze(n){let e={};return n.forEach(t=>{e=t!=null?d(d({},e),t):e}),Object.keys(e).length===0?null:e}function Xe(n,e){return e.map(t=>t(n))}function gt(n){return!n.validate}function Ye(n){return n.map(e=>gt(e)?e:t=>e.validate(t))}function mt(n){if(!n)return null;let e=n.filter(qe);return e.length==0?null:function(t){return Ze(Xe(t,e))}}function Ke(n){return n!=null?mt(Ye(n)):null}function _t(n){if(!n)return null;let e=n.filter(qe);return e.length==0?null:function(t){let i=Xe(t,e).map(ze);return me(i).pipe(ge(Ze))}}function Je(n){return n!=null?_t(Ye(n)):null}function Re(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function vt(n){return n._rawValidators}function yt(n){return n._rawAsyncValidators}function se(n){return n?Array.isArray(n)?n:[n]:[]}function W(n,e){return Array.isArray(n)?n.includes(e):n===e}function Te(n,e){let t=se(e);return se(n).forEach(r=>{W(t,r)||t.push(r)}),t}function Ge(n,e){return se(e).filter(t=>!W(n,t))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ke(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Je(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},ae=class extends ${get formDirective(){return null}get path(){return null}},P=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},le=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},mn=f(d({},Ct),{"[class.ng-submitted]":"isSubmitted"}),Qe=(()=>{class n extends le{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(l(P,2))}}static{this.\u0275dir=p({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&be("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[_]})}}return n})();var I="VALID",L="INVALID",C="PENDING",O="DISABLED",V=class{},q=class extends V{constructor(e,t){super(),this.value=e,this.source=t}},x=class extends V{constructor(e,t){super(),this.pristine=e,this.source=t}},N=class extends V{constructor(e,t){super(),this.touched=e,this.source=t}},b=class extends V{constructor(e,t){super(),this.status=e,this.source=t}};function bt(n){return(X(n)?n.validators:n)||null}function Vt(n){return Array.isArray(n)?Ke(n):n||null}function Mt(n,e){return(X(e)?e.asyncValidators:n)||null}function Dt(n){return Array.isArray(n)?Je(n):n||null}function X(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var ue=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=H(()=>this.statusReactive()),this.statusReactive=U(void 0),this._pristine=H(()=>this.pristineReactive()),this.pristineReactive=U(!0),this._touched=H(()=>this.touchedReactive()),this.touchedReactive=U(!1),this._events=new fe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return v(this.statusReactive)}set status(e){v(()=>this.statusReactive.set(e))}get valid(){return this.status===I}get invalid(){return this.status===L}get pending(){return this.status==C}get disabled(){return this.status===O}get enabled(){return this.status!==O}get pristine(){return v(this.pristineReactive)}set pristine(e){v(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return v(this.touchedReactive)}set touched(e){v(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Te(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Te(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(d({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(d({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new x(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new x(!0,i))}markAsPending(e={}){this.status=C;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(d({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(f(d({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new q(this.value,i)),this._events.next(new b(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(f(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===C)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new q(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(d({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=ze(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(L)?L:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new x(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new N(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Vt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Dt(this._rawAsyncValidators)}};var et=new y("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function At(n,e){return[...e.path,n]}function wt(n,e,t=de){Ft(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),St(n,e),Ot(n,e),It(n,e),Et(n,e)}function Ue(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Et(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Ft(n,e){let t=vt(n);e.validator!==null?n.setValidators(Re(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=yt(n);e.asyncValidator!==null?n.setAsyncValidators(Re(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Ue(e._rawValidators,r),Ue(e._rawAsyncValidators,r)}function St(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&tt(n,e)})}function It(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&tt(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function tt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ot(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function xt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Nt(n){return Object.getPrototypeOf(n.constructor)===ce}function Pt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===Z?t=o:Nt(o)?i=o:r=o}),r||i||t||null}function je(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Be(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var kt=class extends ue{constructor(e=null,t,i){super(bt(t),Mt(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Be(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){je(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){je(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Be(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt={provide:P,useExisting:M(()=>he)},He=Promise.resolve(),he=(()=>{class n extends P{constructor(t,i,r,o,u,m){super(),this._changeDetectorRef=u,this.callSetDisabledState=m,this.control=new kt,this._registered=!1,this.name="",this.update=new G,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Pt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),xt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){wt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){He.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Fe(i);He.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?At(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(l(ae,9),l(ft,10),l(pt,10),l(z,10),l(Ee,8),l(et,8))}}static{this.\u0275dir=p({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[S([Rt]),_,_e]})}}return n})();var Tt={provide:z,useExisting:M(()=>Y),multi:!0};function nt(n,e){return n==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${n}: ${e}`.slice(0,50))}function Gt(n){return n.split(":")[0]}var Y=(()=>{class n extends ce{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let i=this._getOptionId(t),r=nt(i,t);this.setProperty("value",r)}registerOnChange(t){this.onChange=i=>{this.value=this._getOptionValue(i),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),t))return i;return null}_getOptionValue(t){let i=Gt(t);return this._optionMap.has(i)?this._optionMap.get(i):t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=T(n)))(r||n)}})()}static{this.\u0275dir=p({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&g("change",function(u){return r.onChange(u.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[S([Tt]),_]})}}return n})(),it=(()=>{class n{constructor(t,i,r){this._element=t,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(nt(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(i){return new(i||n)(l(D),l(A),l(Y,9))}}static{this.\u0275dir=p({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return n})(),Ut={provide:z,useExisting:M(()=>rt),multi:!0};function Le(n,e){return n==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${n}: ${e}`.slice(0,50))}function jt(n){return n.split(":")[0]}var rt=(()=>{class n extends ce{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let i;if(Array.isArray(t)){let r=t.map(o=>this._getOptionId(o));i=(o,u)=>{o._setSelected(r.indexOf(u.toString())>-1)}}else i=(r,o)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(t){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let u=o;for(let m=0;m<u.length;m++){let k=u[m],Q=this._getOptionValue(k.value);r.push(Q)}}else{let u=i.options;for(let m=0;m<u.length;m++){let k=u[m];if(k.selected){let Q=this._getOptionValue(k.value);r.push(Q)}}}this.value=r,t(r)}}_registerOption(t){let i=(this._idCounter++).toString();return this._optionMap.set(i,t),i}_getOptionId(t){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,t))return i;return null}_getOptionValue(t){let i=jt(t);return this._optionMap.has(i)?this._optionMap.get(i)._value:t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=T(n)))(r||n)}})()}static{this.\u0275dir=p({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&g("change",function(u){return r.onChange(u.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[S([Ut]),_]})}}return n})(),ot=(()=>{class n{constructor(t,i,r){this._element=t,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(Le(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Le(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(i){return new(i||n)(l(D),l(A),l(rt,9))}}static{this.\u0275dir=p({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return n})();var Bt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({})}}return n})();var st=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:et,useValue:t.callSetDisabledState??de}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[Bt]})}}return n})();function Wt(n,e){if(n&1&&(s(0,"option",18),c(1),a()),n&2){let t=e.$implicit;j("value",t.name),h(),re(t.name)}}function $t(n,e){if(n&1){let t=Me();s(0,"tr")(1,"td"),c(2),a(),s(3,"td",19),c(4),a(),s(5,"td")(6,"button",20),g("click",function(){let r=ve(t).index,o=ie();return ye(o.deleteUser(r))}),c(7,"L\xF6schen"),a()()()}if(n&2){let t=e.$implicit,i=ie();h(2),re(t.name),h(),Ce("background-color",i.getRoleColor(t.role)),h(),De(" ",t.role," ")}}var K=class n{newUserName="";newUserRole="";newRoleName="";newRoleColor="#000000";users=[];roles=[{name:"Mitglied",color:"#007bff"},{name:"Admin",color:"#28a745"},{name:"Gast",color:"#6c757d"}];allUsersRole="Mitglied";addUser(){if(this.newUserName&&this.newUserRole){let e=this.roles.find(t=>t.name===this.newUserRole);this.users.push({name:this.newUserName,role:this.newUserRole,color:e?e.color:"#6c757d"}),this.newUserName="",this.newUserRole=""}}deleteAllUsers(){this.users=[]}setAllUsersRole(){this.allUsersRole&&this.users.forEach(e=>e.role=this.allUsersRole)}addRole(){this.newRoleName&&this.newRoleColor&&(this.roles.push({name:this.newRoleName,color:this.newRoleColor}),this.newRoleName="",this.newRoleColor="#000000")}getRoleColor(e){let t=this.roles.find(i=>i.name===e);return t?t.color:"#6c757d"}deleteUser(e){this.users.splice(e,1)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["app-imput-mask"]],standalone:!0,features:[B],decls:42,vars:6,consts:[[1,"container","d-flex","justify-content-center","align-items-center",2,"height","100vh"],[1,"card","p-4","shadow-lg",2,"width","90%","background-color","#3f3f3f"],[1,"text-center"],[1,"input-group","mb-3"],["type","text","placeholder","Benutzername",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-select",2,"font-family","'Arial'","font-size","14px","color","#bbb",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-primary","w-100",3,"click"],[1,"mt-4"],[1,"table-responsive"],[1,"table","table-dark","mt-3"],[4,"ngFor","ngForOf"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger","w-100",3,"click"],[1,"mt-5"],["type","text","placeholder","Neue Rolle",1,"form-control",3,"ngModelChange","ngModel"],["type","color",1,"form-control",3,"ngModelChange","ngModel"],[3,"value"],[1,"text-white","p-2","rounded"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"div",1)(2,"h2",2),c(3,"Gruppen\xFCbersicht"),a(),s(4,"div",3)(5,"input",4),F("ngModelChange",function(o){return E(i.newUserName,o)||(i.newUserName=o),o}),a()(),s(6,"div",3)(7,"select",5),F("ngModelChange",function(o){return E(i.newUserRole,o)||(i.newUserRole=o),o}),s(8,"option",6),c(9,"Hier Rolle ausw\xE4hlen"),a(),ne(10,Wt,2,2,"option",7),a()(),s(11,"button",8),g("click",function(){return i.addUser()}),c(12,"Benutzer hinzuf\xFCgen"),a(),s(13,"div",9)(14,"h4",2),c(15,"Benutzerliste"),a(),s(16,"div",10)(17,"table",11)(18,"thead")(19,"tr")(20,"th"),c(21,"Benutzername"),a(),s(22,"th"),c(23,"Rolle"),a(),s(24,"th"),c(25,"Aktionen"),a()()(),s(26,"tbody"),ne(27,$t,8,4,"tr",12),a()()()(),s(28,"button",13),g("click",function(){return i.setAllUsersRole()}),c(29,"Alles \xFCbernehmen"),a(),s(30,"div",9)(31,"button",14),g("click",function(){return i.deleteAllUsers()}),c(32,"Alles l\xF6schen"),a()(),s(33,"div",15)(34,"h4",2),c(35,"Eigene Rollen erstellen"),a(),s(36,"div",3)(37,"input",16),F("ngModelChange",function(o){return E(i.newRoleName,o)||(i.newRoleName=o),o}),a()(),s(38,"div",3)(39,"input",17),F("ngModelChange",function(o){return E(i.newRoleColor,o)||(i.newRoleColor=o),o}),a()(),s(40,"button",8),g("click",function(){return i.addRole()}),c(41,"Erstellen"),a()()()()),t&2&&(h(5),w("ngModel",i.newUserName),h(2),w("ngModel",i.newUserRole),h(3),j("ngForOf",i.roles),h(17),j("ngForOf",i.users),h(10),w("ngModel",i.newRoleName),h(2),w("ngModel",i.newRoleColor))},dependencies:[Oe,Ie,st,it,ot,Z,Y,Qe,he],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#1e1e1e;color:#e0e0e0;margin:0;padding:0}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{color:#f1f1f1}.card[_ngcontent-%COMP%]{background-color:#2e3b4e;border-radius:12px;box-shadow:0 4px 10px #0003;max-height:80vh;overflow-y:auto}.form-control[_ngcontent-%COMP%]{background-color:#333;color:#fafafa;border:1px solid #444;border-radius:5px}.form-control[_ngcontent-%COMP%]:focus{background-color:#444;border-color:#4caf50;box-shadow:0 0 5px #4caf5080}.form-select[_ngcontent-%COMP%]{background-color:#333;color:#f1f1f1;border:1px solid #444;border-radius:5px}.form-select[_ngcontent-%COMP%]:focus{background-color:#444;border-color:#4caf50;box-shadow:0 0 5px #4caf5080}.form-control[_ngcontent-%COMP%]::placeholder{color:#bbb;font-style:Times;font-size:14px}.btn[_ngcontent-%COMP%]{border-radius:5px;font-weight:500}.btn-primary[_ngcontent-%COMP%]{background-color:#3a7ca5;border:none}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2c5a77}.btn-success[_ngcontent-%COMP%]{background-color:#6fbf73;border:none}.btn-success[_ngcontent-%COMP%]:hover{background-color:#4f8e5b}.btn-danger[_ngcontent-%COMP%]{background-color:#dc6f72;border:none}.btn-danger[_ngcontent-%COMP%]:hover{background-color:#c04f43}.btn-warning[_ngcontent-%COMP%]{background-color:#e8b95d;border:none}.btn-warning[_ngcontent-%COMP%]:hover{background-color:#c48b4c}.btn-secondary[_ngcontent-%COMP%]{background-color:#6c757d;border:none}.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#5a6268}input[type=color][_ngcontent-%COMP%]{width:50px;height:30px;padding:0;border-radius:5px;border:none}.table-dark[_ngcontent-%COMP%]{background-color:#2c2f38;color:#f1f1f1}.table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-color:#444}.table-dark[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#444}.table-responsive[_ngcontent-%COMP%]{width:100%;overflow-x:auto}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{word-wrap:break-word;overflow-wrap:break-word;padding:10px;text-align:left}@media (max-width: 767px){table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:10px;padding:3px}.table[_ngcontent-%COMP%]{font-size:14px}.table-responsive[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch}}@media (max-width: 576px){table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:8px;padding:2px}}"]})};var J=class n{title="mein-projekt";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["app-root"]],standalone:!0,features:[B],decls:1,vars:0,template:function(t,i){t&1&&Ve(0,"app-imput-mask")},dependencies:[K],encapsulation:2})};var at=[];var lt={providers:[we({eventCoalescing:!0}),ke(at),Ne()]};var qt={providers:[Pe()]},ut=Se(lt,qt);var zt=()=>xe(J,ut),jn=zt;export{jn as a};
