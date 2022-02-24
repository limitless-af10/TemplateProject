/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojeventtarget","ojs/ojdataprovider","ojs/ojset","ojs/ojmap","ojs/ojmetadatautils"],function(t,e,s,r,i,n){"use strict";r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;
/**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
var o=function(t,e,s,r){return new(s||(s=Promise))(function(i,n){function o(t){try{c(r.next(t))}catch(t){n(t)}}function a(t){try{c(r.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s(function(t){t(e)})).then(o,a)}c((r=r.apply(t,e||[])).next())})};class a{constructor(t){this.options=t}fetch(){return o(this,void 0,void 0,function*(){const t=yield this._createRequest(),e=yield fetch(t);return this._parseResponse(e)})}_createRequest(){return o(this,void 0,void 0,function*(){const{url:t,transforms:e,fetchParameters:s,fetchType:r,fetchOptions:i}=this.options,o=e[r].request;if(o){return o(n.deepFreeze({url:t,fetchParameters:s,fetchType:r,fetchOptions:i}))}return new Request(t)})}_parseResponse(t){return o(this,void 0,void 0,function*(){const e={status:t.status,headers:t.headers,body:yield this._getResponseBody(t)};if(!t.ok)throw e;return this._applyResponseTransforms(e)})}_getResponseBody(t){return o(this,void 0,void 0,function*(){try{return yield t.json()}catch(t){return}})}_applyResponseTransforms({status:t,headers:e,body:s}){return o(this,void 0,void 0,function*(){const{transforms:r={},fetchType:i}=this.options,o=r[i].response;let a,c,h,f;if(o){const r=n.deepFreeze({status:t,headers:e,body:s}),i=yield o(r);a=i.data,c=i.keys,h=i.hasMore,f=i.totalSize}else null!==s&&"object"==typeof s&&(a=s.data,c=s.keys,h=s.hasMore,f=s.totalSize);if(!Array.isArray(a))throw'"data" should be an array. Please use the response transform to extract the data array from the response if needed.';return{data:a,keys:c,hasMore:h,totalSize:f}})}}var c=function(t,e,s,r){return new(s||(s=Promise))(function(i,n){function o(t){try{c(r.next(t))}catch(t){n(t)}}function a(t){try{c(r.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s(function(t){t(e)})).then(o,a)}c((r=r.apply(t,e||[])).next())})};class h{constructor(t){this.options=t,this._totalSize=-1,this._sequenceNum=0,this._mapClientIdToOffset=new Map,this.AsyncIterable=class{constructor(t){this._asyncIterator=t,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}},this.AsyncIterator=class{constructor(t,e,s,r,i){this._parent=t,this._nextFunc=e,this._fetchParameters=s,this._offset=r,this._iterationLimit=i,this._rowsFetched=0,this._clientId=s&&s.clientId||Symbol(),t._mapClientIdToOffset.set(this._clientId,r)}next(){return c(this,void 0,void 0,function*(){const t=this._parent._mapClientIdToOffset.get(this._clientId),{result:e,offset:s}=yield this._nextFunc("fetchFirst",this._fetchParameters,t);this._parent._mapClientIdToOffset.set(this._clientId,s);const r=e.value.data;return this._rowsFetched+=r.length,Number.isInteger(this._iterationLimit)&&this._rowsFetched>=this._iterationLimit&&(e.done=!0),e})}},this.AsyncIteratorYieldResult=class{constructor(t){this.value=t,this.done=!1}},this.AsyncIteratorReturnResult=class{constructor(t){this.value=t,this.done=!0}}}fetchFirst(t){return new this.AsyncIterable(new this.AsyncIterator(this,this._fetchFrom.bind(this),t,0,this.options.iterationLimit))}fetchByKeys(t){return c(this,void 0,void 0,function*(){if(!t)throw Error('"keys" is a required parameter');const e=this._getCapabilitiesFromOptions();if(e.fetchByKeys){if("lookup"===e.fetchByKeys.implementation)return this._fetchByKeysLookup(t);if("batchLookup"===e.fetchByKeys.implementation)return this._fetchByKeysBatchLookup(t)}return this._fetchByKeysIteration(t)})}fetchByOffset(t){return c(this,void 0,void 0,function*(){if(!t)throw Error('"offset" is a required parameter');const e=t.offset>0?t.offset:0,s=this._getCapabilitiesFromOptions();return s.fetchByOffset&&"randomAccess"===s.fetchByOffset.implementation?this._fetchByOffsetRandomAccess(t,e):this._fetchByOffsetIteration(t,e)})}containsKeys(t){return c(this,void 0,void 0,function*(){const e=new r,s=yield this.fetchByKeys(t);return t.keys.forEach(t=>{null!=s.results.get(t)&&e.add(t)}),{containsParameters:t,results:e}})}createOptimizedKeySet(t){return t?new r(t):new r}createOptimizedKeyMap(t){return t?new i(t):new i}isEmpty(){return"unknown"}getCapability(t){const e=this._getCapabilitiesFromOptions();switch(t){case"sort":return e.sort;case"filter":return e.filter;case"fetchFirst":return this._getFetchCapability("fetchFirst");case"fetchByKeys":return this._getFetchCapability("fetchByKeys");case"fetchByOffset":return this._getFetchCapability("fetchByOffset");case"fetchCapability":return h._getFetchCapabilityDefaults();default:return}}getTotalSize(){return Promise.resolve(this._totalSize)}refresh(){this.dispatchEvent(new s.DataProviderRefreshEvent)}mutate(t){const{add:e,remove:r}=t;this._adjustIteratorOffset(r,e),this.dispatchEvent(new s.DataProviderMutationEvent(t))}_fetchFrom(t,e,r){return c(this,void 0,void 0,function*(){const i=this._convertFetchListToFetchByOffsetParameters(e,r),n=this._getFetchSize(i),o=Object.assign(Object.assign({},i),{size:n,filterCriterion:s.FilterFactory.getFilter({filterDef:i.filterCriterion,filterOptions:this.options})}),c=new a({fetchType:t,fetchParameters:o,url:this.options.url,transforms:this.options.transforms,fetchOptions:{textFilterAttributes:this.options.textFilterAttributes}}),h=yield c.fetch(),{data:f,keys:u=this._generateKeysFromData(f),totalSize:l,hasMore:y}=h,d=u.map(t=>({key:t})),p=this._mergeSortCriteria(e.sortCriteria);p&&(e.sortCriteria=p);const m={fetchParameters:e,data:f,metadata:d};return Number.isInteger(l)&&this._totalSize!==l&&(this._totalSize=l),"boolean"==typeof y&&(y||f.length>0)?{result:new this.AsyncIteratorYieldResult(m),offset:r+f.length}:{result:new this.AsyncIteratorReturnResult(m),offset:r+f.length}})}_fetchByKeysIteration(t){return c(this,void 0,void 0,function*(){const e=this._convertFetchByKeysToFetchListParameters(t),s=this.fetchFirst(e)[Symbol.asyncIterator](),r=[],i=[];let n=!1;for(;!n;){const e=yield s.next(),{data:o,metadata:a}=e.value;a.forEach((e,s)=>{t.keys.has(e.key)&&(r.push(o[s]),i.push(e.key))}),n=t.keys.size===i.length||e.done}return this._createFetchByKeysResults(t,r,i)})}_fetchByKeysLookup(t){return c(this,void 0,void 0,function*(){const e=[],s=[],r=[];for(let s of t.keys){const r=new a({fetchType:"fetchByKeys",fetchParameters:Object.assign(Object.assign({},t),{keys:new Set([s])}),url:this.options.url,transforms:this.options.transforms});e.push(r.fetch())}return(yield Promise.all(e)).forEach(t=>{t.data.forEach(t=>{s.push(t)}),(t.keys||this._generateKeysFromData(t.data)).forEach(t=>{r.push(t)})}),this._createFetchByKeysResults(t,s,r)})}_fetchByKeysBatchLookup(t){return c(this,void 0,void 0,function*(){const e=new a({fetchType:"fetchByKeys",fetchParameters:t,url:this.options.url,transforms:this.options.transforms}),s=yield e.fetch();return this._createFetchByKeysResults(t,s.data,s.keys||this._generateKeysFromData(s.data))})}_fetchByOffsetRandomAccess(t,e){return c(this,void 0,void 0,function*(){const s=yield this._fetchFrom("fetchByOffset",this._convertFetchByOffsetToFetchListParameters(t),e),{value:r,done:i}=s.result,{data:n,metadata:o}=r,a=n.map((t,e)=>({metadata:o[e],data:t}));return{fetchParameters:t,results:a,done:i}})}_fetchByOffsetIteration(t,e){return c(this,void 0,void 0,function*(){const s=this._convertFetchByOffsetToFetchListParameters(t),r=this.fetchFirst(s)[Symbol.asyncIterator](),i=[],n=[],o=this._getFetchSize(t);let a=!1,c=!0;for(;!a;){const t=yield r.next(),s=t.value,{data:h,metadata:f}=s;c=t.done,h.forEach(t=>{i.push(t)}),f.forEach(t=>{n.push(t)}),a=void 0!==i[e+o-1]||c}const h=e,f=e+o,u=i.slice(h,f),l=n.slice(h,f),y=u.map((t,e)=>({metadata:l[e],data:t}));return{fetchParameters:t,results:y,done:c}})}_generateKeysFromData(t){const e=null!=this.options?this.options.keyAttributes:null;return t.map(t=>{let s=this._getId(t);return null!=s&&"@index"!=e||(s=this._sequenceNum++),s})}_getId(t){let e,s=null;if(null!=this.options&&null!=this.options.keyAttributes&&(s=this.options.keyAttributes),null!=s){if(Array.isArray(s)){let r;for(e=[],r=0;r<s.length;r++)e[r]=this._getVal(t,s[r])}else e=this._getVal(t,s);return e}return null}_getVal(t,e){const s=e.indexOf(".");if(s>0){const r=e.substring(0,s),i=e.substring(s+1),n=t[r];if(n)return this._getVal(n,i)}return"function"==typeof t[e]?t[e]():t[e]}_convertFetchByOffsetToFetchListParameters(t){return{size:t.size,sortCriteria:t.sortCriteria,filterCriterion:t.filterCriterion,attributes:t.attributes,clientId:t.clientId}}_convertFetchListToFetchByOffsetParameters(t,e){return{offset:e,size:t.size,sortCriteria:t.sortCriteria,filterCriterion:t.filterCriterion,attributes:t.attributes,clientId:t.clientId}}_convertFetchByKeysToFetchListParameters(t){return{attributes:t.attributes}}_createFetchByKeysResults(t,e,s){const r=new Map;return e.forEach((t,e)=>{t&&r.set(s[e],{metadata:{key:s[e]},data:t})}),{fetchParameters:t,results:r}}_getFetchCapability(t){const e=this._getCapabilitiesFromOptions(),s=h._getFetchCapabilityDefaults();return"fetchFirst"===t?Object.assign(Object.assign({},s),{iterationSpeed:"delayed"}):e[t]?Object.assign(Object.assign({},s),e[t]||{}):null}static _getFetchCapabilityDefaults(){return{caching:"none",attributeFilter:{expansion:{},ordering:{},defaultShape:{features:new Set(["exclusion"])}}}}_getCapabilitiesFromOptions(){return this.options.capabilities||{}}_getFetchSize(t){return Number.isInteger(t.size)&&t.size>0?t.size:25}_mergeSortCriteria(t){const e=null!=this.options?this.options.implicitSort:null;if(null!=e){if(null==t)return e;const s=t.slice(0);let r,i,n;for(r=0;r<e.length;r++){for(n=!1,i=0;i<s.length;i++)s[i].attribute==e[r].attribute&&(n=!0);n||s.push(e[r])}return s}return t}_adjustIteratorOffset(t,e){const s=t?t.indexes:null,r=e?e.indexes:null;this._mapClientIdToOffset.forEach((t,e)=>{let i=0;s&&s.forEach(function(e){e<t&&++i}),t-=i,r&&r.forEach(function(e){e<t&&++t}),this._mapClientIdToOffset.set(e,t)})}}e.EventTargetMixin.applyMixin(h),t.RESTDataProvider=h,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojrestdataprovider.js.map