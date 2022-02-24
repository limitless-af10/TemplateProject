/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojdatasource-common","ojs/ojmodel"],function(t,e,o){"use strict";const n=function(t,e,o,n,i,c){this.parentKey=t,this.collection=e,this.models=o,this.childNodeSet=[],this.treeDataSource=n,i<o.length?this.start=i:0===o.length?this.start=0:this.start=o.length-1,this.count=-1===c?o.length:Math.min(o.length,c)};(t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t)._registerLegacyNamespaceProp("CollectionNodeSet",n),n.prototype.FetchDescendants=function(t){this._fetchDescendants(this).then(function(){t.success&&t.success()})},n.prototype._fetchDescendants=function(t){return new Promise(function(e){var o=t.getCount();!function n(i){i<o?t.FetchChildNodeSet(i,{success:function(e){null!==e?t._fetchDescendants(e).then(function(){n(i+1)}):n(i+1)}}):e(void 0)}(0)})},n.prototype.FetchChildNodeSet=function(t,e){var o=this.models[t];if(this.treeDataSource.parseMetadata(o).leaf)return this.childNodeSet[t]=null,void e.success(null);var n=this.treeDataSource.GetChildCollection(o),i=this.treeDataSource.parseMetadata(o).key,c=this;this.treeDataSource.FetchCollection(n,0,-1,{success:function(o){c.childNodeSet[t]=o,e.success(o)}},i)},n.prototype._getCollection=function(){return this.collection},n.prototype.getParent=function(){return this.parentKey},n.prototype.getStart=function(){return this.start},n.prototype.getCount=function(){return this.count},n.prototype.getData=function(t){return this._checkRange(t),this.models[t].attributes},n.prototype._checkRange=function(t){if(t<this.start||t>this.start+this.count)throw new Error("Out of range")},n.prototype.getMetadata=function(t){this._checkRange(t);var e={leaf:!1,depth:-1},o=this.models[t],n=this.treeDataSource.parseMetadata(o);return e.key=n.key,e.leaf=n.leaf,e.depth=n.depth,e},n.prototype.getChildNodeSet=function(t){return this.treeDataSource._virtual?null:(this._checkRange(t),this.childNodeSet[t])};const i=function(t){t=t||{},this.rootCollection=t.root,this.childCollectionCallback=t.childCollectionCallback,this.parseMetadata=t.parseMetadata,this.sortkey=null,this.sortdir="none",this.cache={},this._virtual=!1,i.superclass.constructor.call(this)};return t._registerLegacyNamespaceProp("CollectionTreeDataSource",i),i.prototype.parseMetadata=function(t){return{key:t.idAttribute+"="+t.id}},t.Object.createSubclass(i,t.TreeDataSource,"oj.CollectionTreeDataSource"),i.prototype.Init=function(){i.superclass.Init.call(this)},i.prototype.getChildCount=function(t){var e=this.__getParentsChildCollectionFromCache(t);return e&&e.length>0?e.length:-1},i.prototype.getChildCollection=function(t,e){this.fetchChildren(t,null,{success:function(t){e.success(t._getCollection())},error:e.error})},i.prototype.fetchChildren=function(t,e,o,n){var i=(e=e||{}).start?e.start:0,c=e.count?e.count:-1;if(null!==t){var r=this;this._getModelForId(this.rootCollection,i,c,t,0).then(function(e){if(e){var n=r.GetChildCollection(e.model);try{r.FetchCollection(n,i,c,o,t)}catch(t){o&&o.error&&o.error({status:t.message})}}else o&&o.error&&o.error(t)})}else this.FetchCollection(null,i,c,o,null)},i.prototype.ModelAdded=function(t,e,o){var n=0;o&&o.at&&(n=o.at);var i=this._getParentChain(e),c=null!=i&&i.length>0?i[i.length-1]:null,r=this._createEvent(this,"insert",n,i,this._putModelInNodeSet(c,t));this.handleEvent("change",r)},i.prototype.ModelRemoved=function(t,e,o){var n=0;o&&o.index&&(n=o.index),this._removeCollectionFromCache(t);var i=this._createEvent(this,"delete",n,this._getParentChain(e),null);this.handleEvent("change",i)},i.prototype.ModelUpdated=function(t,e){var o=t.collection,n=t.GetIndex(),i=null;o&&(i=this._getParentChain(o));var c=null!=i&&i.length>0?i[i.length-1]:null,r=this._createEvent(this,"update",n,i,this._putModelInNodeSet(c,t));this.handleEvent("change",r)},i.prototype.CollectionRefreshed=function(t,e,o){var n=this._createEvent(this,"refresh",null,this._getParentChain(t),null);this.handleEvent("refresh",n)},i.prototype._putModelInNodeSet=function(t,e){var n=new o.Collection;return n.add(e),this._getNodeSet(n,t,0,1,[e])},i.prototype._getParentChain=function(t){var e=[],o=null,n=t;do{null!==(o=this._getParentOfCollection(n))&&(o!==i.ROOT_CACHE_KEY&&e.unshift(o),n=this._getCollectionOfKey(o))}while(null!=o);return e},i.ROOT_CACHE_KEY="%!@ROOT%#@!",i.prototype._getCacheKey=function(t){var e=t instanceof o.Model?this.parseMetadata(t).key:t;return null!=t?e:i.ROOT_CACHE_KEY},i.prototype.__getParentsChildCollectionFromCache=function(t){return this.cache[this._getCacheKey(t)]},i.prototype._setCollectionInCache=function(t,e){e.on(o.Events.EventType.ADD,this.ModelAdded,this),e.on(o.Events.EventType.REMOVE,this.ModelRemoved,this),e.on(o.Events.EventType.CHANGE,this.ModelUpdated,this),e.on(o.Events.EventType.SYNC,this.CollectionRefreshed,this);var n=this._getCacheKey(t);return this.cache[n]=e,this.cache[n]},i.prototype._removeCollectionFromCache=function(t){for(var e=this._getCacheKey(t),o=Object.keys(this.cache),n=0;n<o.length;n++){if(o[n]===e)return this.cache[e].off(null,null,this),void delete this.cache[e]}},i.prototype._keyInCollection=function(t,e){for(var o=e.length,n=null,i=0;i<o;i++){if(n=e.models[i])if(t===this._getCacheKey(n))return!0}return!1},i.prototype._getCollectionOfKey=function(t){for(var e=Object.keys(this.cache),o=0;o<e.length;o++){var n=e[o],i=this.cache[n];if(this._keyInCollection(t,i))return i}return null},i.prototype._getParentOfCollection=function(t){for(var e=Object.keys(this.cache),o=0;o<e.length;o++){var n=e[o];if(this.cache[n]===t)return n}return null},i.prototype.GetChildCollection=function(t){var e=!0,o=this.__getParentsChildCollectionFromCache(t);return o||(e=!1,null!=(o=this.childCollectionCallback(this.rootCollection,t))&&(this._applySortToCollection(o),this._setCollectionInCache(t,o))),{collection:o,cached:e}},i.prototype._createEvent=function(t,e,o,n,i){return{source:t,operation:e,index:o,parent:n,data:i}},i.prototype.FetchCollection=function(t,e,o,n,i){var c=this;null===t&&((t=this.__getParentsChildCollectionFromCache(null))?t={collection:t,cached:!0}:(t={collection:c.rootCollection,cached:!1},c._setCollectionInCache(null,this.rootCollection))),t&&c._fetch(t,e,o,function(t,r){t.IsVirtual()&&(c._virtual=!0),n.success&&n.success(c._getNodeSet(t,i,e,o,r))},n.error)},i.prototype._getNodeSet=function(e,o,n,i,c){return new t.CollectionNodeSet(o,e,c,this,n,i)},i.prototype._scanForKey=function(t,e){var o=this,n=new Array(t.length);return new Promise(function(i){!function e(c,r,l){c<t.length?r.at(c,{deferred:!0}).then(function(t){if(n[c]=t,t){var s=o.parseMetadata(t);if(l===s.key)return void i({model:t,models:n})}e(c+=1,r,l)}):i({model:null,models:n})}(0,t,e)})},i.prototype._getModelForId=function(t,e,o,n,i){var c=this;return new Promise(function(r){c._scanForKey(t,n).then(function(t){t.model?r({model:t.model,depth:i}):function l(s,h,a){if(s<h.length){var u=c.__getParentsChildCollectionFromCache(h[s]);u?a._fetch({collection:u,cached:!0},e,o,function(t,c){a._getModelForId(t,e,o,n,i+1).then(function(t){t?r(t):l(s+=1,h,a)})},null):l(s+=1,h,a)}else!function t(l,s,h){var a;l<s.length?(c.parseMetadata(s[l]).leaf||(a=h.GetChildCollection(s[l])),a&&a.collection?h._fetch(a,e,o,function(c,a){h._getModelForId(c,e,o,n,i+1).then(function(e){e?r(e):t(l+=1,s,h)})},null):t(l+=1,s,h)):r(null)}(0,t.models,c)}(0,t.models,c)})})},i.prototype._getModelsFromCollection=function(t){if(t.IsVirtual()){var e=new Array(t.length);return new Promise(function(o){(function(t,e,o,n){return new Promise(function(i,c){var r,l=function(e){return new Promise(function(o,i){t.at(e).then(function(t){n[e]=t,o(e+1)},i)})},s=Promise.resolve(0);for(r=e;r<o;r++)s=s.then(l);return s.then(i,c)})})(t,0,t.length,e).then(function(){o(e)})})}return new Promise(function(e){e(t.models)})},i.prototype._fetch=function(t,e,o,n,i){var c=this;if(t.cached)this._getModelsFromCollection(t.collection).then(function(e){n(t.collection,e)});else{if(this.sortkey&&"none"!==this.sortkey&&(t.collection.comparator=this.sortkey,t.collection.sortDirection=this.sortdir),t.collection.length>0||!t.collection.IsUrlBased(null))return void n(t.collection,t.collection.models);-1===o?(t.collection.modelLimit=-1,t.collection.fetch({success:function(t){c._getModelsFromCollection(t).then(function(e){n(t,e)})},error:i})):(t.collection.modelLimit=-1,t.collection.setRangeLocal(e,o).then(function(e){t.models=e.models,n(t.collection,e.models)}))}},i.prototype.fetchDescendants=function(e,o,n){this._virtual&&t.Assert.failedInAbstractFunction();var i=this;null!==e?this._getModelForId(this.rootCollection,0,-1,e,0).then(function(t){if(t){var n=i.GetChildCollection(t.model);i.FetchCollection(n,0,-1,{success:function(t){t.FetchDescendants({success:function(){o.success&&o.success(t)}})}},e)}}):this.FetchCollection(null,0,-1,{success:function(t){t.FetchDescendants({success:function(){o.success&&o.success(t)}})}},null)},i.prototype.sort=function(t,e){var o=t.key,n=t.direction,i=!1;if(o!==this.sortkey&&(this.sortkey=o,i=!0),n!==this.sortdir&&(this.sortdir=n,i=!0),i){"none"===this.sortdir&&(this.cache={});for(var c=Object.keys(this.cache),r=0;r<c.length;r++){var l=c[r],s=this.cache[l];this._applySortToCollection(s)}}e&&e.success&&e.success()},i.prototype._applySortToCollection=function(t){t.comparator=this.sortkey,t.sortDirection="ascending"===this.sortdir?1:-1,t.sort()},i.prototype.getSortCriteria=function(){return{key:this.sortkey,direction:this.sortdir}},i.prototype.move=function(e,o,n,i){t.Assert.failedInAbstractFunction()},i.prototype.moveOK=function(t,e,o){return"invalid"},i.prototype.getCapability=function(t){return"sort"===t?"default":"move"===t?"none":"batchFetch"===t||"fetchDescendants"===t?"disable":null},i});
//# sourceMappingURL=ojcollectiontreedatasource.js.map