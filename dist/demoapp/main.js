(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"https://larrydiamond.github.io/typescriptcollectionsframework/tsf-blue.png\" width=\"100\" height=\"100\"><br>\r\n\r\n<table>\r\n  <tr>\r\n    <td>ArrayList</td>\r\n    <td><a href=\"#\" (click)=\"ArrayList()\">string</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"ArrayListAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"ArrayListOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>LinkedList</td>\r\n    <td><a href=\"#\" (click)=\"LinkedList()\">string</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"LinkedListAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"LinkedListOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>HashSet</td>\r\n    <td><a href=\"#\" (click)=\"HashSet()\">string</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"HashSetAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"HashSetOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>SkipListSet</td>\r\n    <td><a href=\"#\" (click)=\"SkipListSet()\">string</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"SkipListSetAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"SkipListSetOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>TreeSet</td>\r\n    <td><a href=\"#\" (click)=\"TreeSet()\">string</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"TreeSetAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\r\n    <td><a href=\"#\" (click)=\"TreeSetOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>HashMap</td>\r\n    <td><a href=\"#\" (click)=\"HashMap()\">string, string</a>&nbsp;</td>\r\n    <td colspan=2>&nbsp; Very similar to the HashSet examples..... you'll see :) &nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>SkipListMap</td>\r\n    <td><a href=\"#\" (click)=\"SkipListMap()\">string, string</a>&nbsp;</td>\r\n    <td colspan=2>&nbsp; Very similar to the SkipListSet examples..... you'll see :) &nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>TreeMap</td>\r\n    <td><a href=\"#\" (click)=\"TreeMap()\">string, string</a>&nbsp;</td>\r\n    <td colspan=2>&nbsp; Very similar to the TreeSet examples..... you'll see :) &nbsp;</td>\r\n  </tr>\r\n</table>\r\n<br>\r\nSource code for this app is located at <a href=\"https://github.com/larrydiamond/typescriptcollectionsframework-Demo-For-Angular7\">https://github.com/larrydiamond/typescriptcollectionsframework-Demo-For-Angular7</a>\r\n<br>\r\n\r\n<p *ngIf=\"active=='ArrayList'\">\r\n  ArrayList compare on a string:<br>\r\n  <li *ngFor=\"let str of alData\"><button (click)=\"removeArrayListEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #aladd type=text placeholder=\"add\">\r\n  <button (click)=\"addArrayList(aladd.value);aladd.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\r\n  Click on an item to remove it from the ArrayList or enter a value and click Add to add it to the ArrayList.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\r\n\r\n  alData:ArrayList&lt;string> = new ArrayList&lt;string>(new AllFieldCollectable&lt;string>());<br>\r\n  this.alData.add (\"Cat\");<br>\r\n  this.alData.add (\"Squirrel\");<br>\r\n  this.alData.add (\"Dog\");<br>\r\n  this.alData.remove (\"OtherElement\");<br>\r\n  for (let iter:JIterator&lt;string> = this.alData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (ostr);<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let str of alData\">&lt;button (click)=\"removeArrayListEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\r\n\r\n</p>\r\n\r\n<p *ngIf=\"active=='LinkedList'\">\r\n  LinkedList compare on a string:<br>\r\n  <li *ngFor=\"let str of llData\"><button (click)=\"removeLinkedListEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #lladd type=text placeholder=\"add\">\r\n  <button (click)=\"addLinkedList(lladd.value);lladd.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\r\n  Click on an item to remove it from the LinkedList or enter a value and click Add to add it to the LinkedList.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\r\n\r\n  llData:LinkedList&lt;string> = new LinkedList&lt;string>(new AllFieldCollectable&lt;string>());<br>\r\n  this.llData.add (\"Cat\");<br>\r\n  this.llData.add (\"Squirrel\");<br>\r\n  this.llData.add (\"Dog\");<br>\r\n  this.llData.remove (\"OtherElement\");<br>\r\n  for (let iter:JIterator&lt;string> = this.llData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (ostr);<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a LinkedList in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let str of llData\">&lt;button (click)=\"removeLinkedListEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\r\n</p>\r\n\r\n<p *ngIf=\"active=='HashSet'\">\r\n  HashSet compare on a string:<br>\r\n  <li *ngFor=\"let str of hsData\"><button (click)=\"removeHashSetEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #hsadd type=text placeholder=\"add\">\r\n  <button (click)=\"addHashSet(hsadd.value);hsadd.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\r\n  Click on an item to remove it from the HashSet or enter a value and click Add to add it to the HashSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashset_.hashset.html\">HashSet Documentation</a><br><br>\r\n\r\n  hsData:HashSet&lt;string> = new HashSet&lt;string>(new AllFieldHashable&lt;string>());<br>\r\n  this.hsData.add (\"Cat\");<br>\r\n  this.hsData.add (\"Squirrel\");<br>\r\n  this.hsData.add (\"Dog\");<br>\r\n  this.hsData.remove (\"OtherElement\");<br>\r\n  for (let iter:JIterator&lt;string> = this.hsData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (ostr);<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a HashSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let str of hsData\">&lt;button (click)=\"removeHashSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\r\n</p>\r\n\r\n<p *ngIf=\"active=='SkipListSet'\">\r\n  SkipList compare using string Comparator<br>\r\n  <li *ngFor=\"let str of slData\"><button (click)=\"removeSkipListSetEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #sladd type=text placeholder=\"add\">\r\n  <button (click)=\"addSkipListSet(sladd.value);sladd.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A SkipListSet is a Set backed by a SkipListMap.  (TL;DR: Replace all TreeSet with SkipListSet they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the SkipListSet or enter a value and click Add to add it to the SkipListSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistset.html\">SkipListSet Documentation</a><br><br>\r\n\r\n  slData:SkipListSet&lt;string> = new SkipListSet&lt;string>(Collections.getStringComparator());<br>\r\n  this.slData.add (\"Cat\");<br>\r\n  this.slData.add (\"Squirrel\");<br>\r\n  this.slData.add (\"Dog\");<br>\r\n  this.slData.remove (\"OtherElement\");<br>\r\n  for (let iter:JIterator&lt;string> = this.slData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (ostr);<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a SkipListSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let str of slData\">&lt;button (click)=\"removeSkipListSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\r\n</p>\r\n\r\n<p *ngIf=\"active=='TreeSet'\">\r\n  TreeSet compare using string Comparator<br>\r\n  <li *ngFor=\"let str of tsData\"><button (click)=\"removeTreeSetEntry(str);\">{{str}}</button></li>\r\n  <br>\r\n  <input #tsadd type=text placeholder=\"add\">\r\n  <button (click)=\"addTreeSet(tsadd.value);tsadd.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A TreeSet is a Set backed by a TreeMap.   Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the TreeSet or enter a value and click Add to add it to the TreeSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treeset_.treeset.html\">TreeSet Documentation</a><br><br>\r\n\r\n  tsData:TreeSet&lt;string> = new TreeSet&lt;string>(Collections.getStringComparator());<br>\r\n  this.tsData.add (\"Cat\");<br>\r\n  this.tsData.add (\"Squirrel\");<br>\r\n  this.tsData.add (\"Dog\");<br>\r\n  this.tsData.remove (\"OtherElement\");<br>\r\n  for (let iter:JIterator&lt;string> = this.tsData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (ostr);<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a TreeSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let str of tsData\">&lt;button (click)=\"removeTreeSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\r\n</p>\r\n\r\n<p *ngIf=\"active=='ArrayListAllFields'\">\r\n  ArrayList compare on all fields:<br>\r\n  <li *ngFor=\"let psp of alAllData\"><button (click)=\"removeArrayListAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #alalladdsku type=text placeholder=\"sku\">\r\n  <input #alalladdname type=text placeholder=\"name\">\r\n  <button (click)=\"addArrayListAll(alalladdsku.value, alalladdname.value);alalladdsku.value='';alalladdname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\r\n  Click on an item to remove it from the ArrayList or enter a sku and a name and click Add to add it to the ArrayList.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\r\n\r\n  alAllData:ArrayList&lt;PetStoreProduct> = new ArrayList&lt;PetStoreProduct>(new AllFieldCollectable&lt;PetStoreProduct>());<br>\r\n  this.alAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.alAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.alAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.alAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.alAllData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of alAllData\">&lt;button (click)=\"removeArrayListAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\r\n\r\n  <br>  <br>\r\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n    &nbsp;&nbsp;private sku:string;<br>\r\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n<br>\r\n    &nbsp;&nbsp;private name:string;<br>\r\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n<br>\r\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n    &nbsp;&nbsp;}<br>\r\n  }<br>\r\n</p>\r\n\r\n\r\n<p *ngIf=\"active=='LinkedListAllFields'\">\r\n    LinkedList compare on all fields:<br>\r\n    <li *ngFor=\"let psp of llAllData\"><button (click)=\"removeLinkedListAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n    <br>\r\n    <input #llalladdsku type=text placeholder=\"sku\">\r\n    <input #llalladdname type=text placeholder=\"name\">\r\n    <button (click)=\"addLinkedListAll(llalladdsku.value, llalladdname.value);llalladdsku.value='';llalladdname.value=''\">Add</button>\r\n\r\n    <br>  <br>  <br>  <br>\r\n    A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\r\n    Click on an item to remove it from the LinkedList or enter a sku and a name and click Add to add it to the LinkedList.<br><br>\r\n    <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\r\n\r\n    llAllData:LinkedList&lt;PetStoreProduct> = new LinkedList&lt;PetStoreProduct>(new AllFieldCollectable&lt;PetStoreProduct>());<br>\r\n    this.llAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n    this.llAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n    this.llAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n    this.llAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n    for (let iter:JIterator&lt;PetStoreProduct> = this.llAllData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n    &#125;<br>\r\n    <br>\r\n    How to iterate over an LinkedList in the HTML template for an Angular Component:<br>\r\n    &lt;li *ngFor=\"let pspa of llAllData\">&lt;button (click)=\"removeLinkedListAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\r\n\r\n    <br>  <br>\r\n    export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n      &nbsp;&nbsp;private sku:string;<br>\r\n      &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n      &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n    <br>\r\n      &nbsp;&nbsp;private name:string;<br>\r\n      &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n      &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n    <br>\r\n      &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n      &nbsp;&nbsp;}<br>\r\n    }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='HashSetAllFields'\">\r\n  HashSet compare on all fields:<br>\r\n  <li *ngFor=\"let psp of hsAllData\"><button (click)=\"removeHashSetAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #hsalladdsku type=text placeholder=\"sku\">\r\n  <input #hsalladdname type=text placeholder=\"name\">\r\n  <button (click)=\"addHashSetAll(hsalladdsku.value, hsalladdname.value);hsalladdsku.value='';hsalladdname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\r\n  Click on an item to remove it from the HashSet or enter a sku and a name and and click Add to add it to the HashSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashset_.hashset.html\">HashSet Documentation</a><br><br>\r\n\r\n  hsAllData:HashSet&lt;PetStoreProduct> = new HashSet&lt;PetStoreProduct>(new AllFieldHashable&lt;PetStoreProduct>());<br>\r\n  this.hsAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.hsAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.hsAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.hsAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.hsAllData.iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over an HashSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of hsAllData\">&lt;button (click)=\"removeHashSetAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\r\n\r\n  <br>  <br>\r\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n    &nbsp;&nbsp;private sku:string;<br>\r\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;private name:string;<br>\r\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n    &nbsp;&nbsp;}<br>\r\n  }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='SkipListSetAllFields'\">\r\n  SkipListSet compare all on fields<br>\r\n  <li *ngFor=\"let psp of slAllData\"><button (click)=\"removeSkipListSetAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #slalladdsku type=text placeholder=\"sku\">\r\n  <input #slalladdname type=text placeholder=\"name\">\r\n  <button (click)=\"addSkipListSetAll(slalladdsku.value, slalladdname.value);slalladdsku.value='';slalladdname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A SkipListSet is a Set backed by a SkipListMap.  (TL;DR: Replace all TreeSet with SkipListSet they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the SkipListSet or enter a value and click Add to add it to the SkipListSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistset.html\">SkipListSet Documentation</a><br><br>\r\n\r\n  slAllData:SkipListSet&lt;string> = new SkipListSet&lt;PetStoreProduct>(new PetStoreProductAllFieldsComparator());<br>\r\n  this.slAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.slAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.slAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.slAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.slAllData.iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a SkipListSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of slAllData\">&lt;button (click)=\"removeSkipListSetAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\r\n<br>\r\n  export class PetStoreProductAllFieldsComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\r\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() > o2.getSku())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getName() < o2.getName())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\r\n  &nbsp;&nbsp;  }<br>\r\n  }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='TreeSetAllFields'\">\r\n  TreeSet compare all on fields<br>\r\n  <li *ngFor=\"let psp of tsAllData\"><button (click)=\"removeTreeSetAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #tsalladdsku type=text placeholder=\"sku\">\r\n  <input #tsalladdname type=text placeholder=\"name\">\r\n  <button (click)=\"addTreeSetAll(tsalladdsku.value, tsalladdname.value);tsalladdsku.value='';tsalladdname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A TreeSet is a Set backed by a TreeMap.   Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the TreeSet or enter a value and click Add to add it to the TreeSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treeset_.treeset.html\">TreeSet Documentation</a><br><br>\r\n\r\n  tsAllData:TreeSet&lt;string> = new TreeSet&lt;PetStoreProduct>(new PetStoreProductAllFieldsComparator());<br>\r\n  this.tsAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.tsAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.tsAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.tsAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.tsAllData.iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a TreeSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of tsAllData\">&lt;button (click)=\"removeTreeSetAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\r\n<br>\r\n  export class PetStoreProductAllFieldsComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\r\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() > o2.getSku())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getName() < o2.getName())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\r\n  &nbsp;&nbsp;  }<br>\r\n  }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='ArrayListOneField'\">\r\n  ArrayList compare on one field:<br>\r\n  <li *ngFor=\"let psp of alOneData\"><button (click)=\"removeArrayListOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #aloneaddsku type=text placeholder=\"sku\">\r\n  <input #aloneaddname type=text placeholder=\"name\">\r\n  <button (click)=\"addArrayListOne(aloneaddsku.value, aloneaddname.value);aloneaddsku.value='';aloneaddname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\r\n  Click on an item to remove it from the ArrayList or enter a sku and a name and click Add to add it to the ArrayList.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\r\n\r\n  alOneData:ArrayList&lt;PetStoreProduct> = new ArrayList&lt;PetStoreProduct>(new PetStoreProductSkuCollectable());<br>\r\n  this.alOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.alOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.alOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.alOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.alOneData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of alOneData\">&lt;button (click)=\"removeArrayListOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\r\n\r\n  <br>  <br>\r\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n    &nbsp;&nbsp;private sku:string;<br>\r\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n<br>\r\n    &nbsp;&nbsp;private name:string;<br>\r\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n<br>\r\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n    &nbsp;&nbsp;}<br>\r\n  }<br>\r\n  <br>\r\n  export class PetStoreProductSkuCollectable implements Collectable&lt;PetStoreProduct> &#123;<br>\r\n  &nbsp;&nbsp;equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;if (instance1 === undefined) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (instance2 === undefined) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;}<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === null) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === null) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if ((instance2 === null) || (instance2 === undefined)) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return false;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1.getSku() === instance2.getSku()) &#123;  // what we're really comparing here<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return true;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    return false;<br>\r\n  &nbsp;&nbsp;  }<br>\r\n  }<br>\r\n\r\n\r\n</p>\r\n\r\n\r\n<p *ngIf=\"active=='LinkedListOneField'\">\r\n    LinkedList compare on one field:<br>\r\n    <li *ngFor=\"let psp of llOneData\"><button (click)=\"removeLinkedListOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n    <br>\r\n    <input #llOneaddsku type=text placeholder=\"sku\">\r\n    <input #llOneaddname type=text placeholder=\"name\">\r\n    <button (click)=\"addLinkedListOne(llOneaddsku.value, llOneaddname.value);llOneaddsku.value='';llOneaddname.value=''\">Add</button>\r\n\r\n    <br>  <br>  <br>  <br>\r\n    A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\r\n    Click on an item to remove it from the LinkedList or enter a sku and a name and click Add to add it to the LinkedList.<br><br>\r\n    <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\r\n\r\n    llOneData:LinkedList&lt;PetStoreProduct> = new LinkedList&lt;PetStoreProduct>(new PetStoreProductSkuCollectable());<br>\r\n    this.llOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n    this.llOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n    this.llOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n    this.llOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n    for (let iter:JIterator&lt;PetStoreProduct> = this.llOneData.iterator(); iter.hasNext(); ) &#123; <br>\r\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n    &#125;<br>\r\n    <br>\r\n    How to iterate over an LinkedList in the HTML template for an Angular Component:<br>\r\n    &lt;li *ngFor=\"let pspa of llOneData\">&lt;button (click)=\"removeLinkedListOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\r\n\r\n    <br>  <br>\r\n    export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n      &nbsp;&nbsp;private sku:string;<br>\r\n      &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n      &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n    <br>\r\n      &nbsp;&nbsp;private name:string;<br>\r\n      &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n      &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n    <br>\r\n      &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n      &nbsp;&nbsp;}<br>\r\n    }<br>\r\n    <br>\r\n    export class PetStoreProductSkuCollectable implements Collectable&lt;PetStoreProduct> &#123;<br>\r\n    &nbsp;&nbsp;equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;if (instance1 === undefined) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (instance2 === undefined) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;}<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === null) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === null) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;    if ((instance2 === null) || (instance2 === undefined)) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return false;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n  <br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1.getSku() === instance2.getSku()) &#123;  // what we're really comparing here<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return true;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n  <br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;    return false;<br>\r\n    &nbsp;&nbsp;  }<br>\r\n    }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='HashSetOneField'\">\r\n  HashSet compare on one field:<br>\r\n  <li *ngFor=\"let psp of hsOneData\"><button (click)=\"removeHashSetOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #hsOneaddsku type=text placeholder=\"sku\">\r\n  <input #hsOneaddname type=text placeholder=\"name\">\r\n  <button (click)=\"addHashSetOne(hsOneaddsku.value, hsOneaddname.value);hsOneaddsku.value='';hsOneaddname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\r\n  Click on an item to remove it from the HashSet or enter a sku and a name and and click Add to add it to the HashSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashset_.hashset.html\">HashSet Documentation</a><br><br>\r\n\r\n  hsOneData:HashSet&lt;PetStoreProduct> = new HashSet&lt;PetStoreProduct>(new PetStoreProductSkuHashable());<br>\r\n  this.hsOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.hsOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.hsOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.hsOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.hsOneData.iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over an HashSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of hsOneData\">&lt;button (click)=\"removeHashSetOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\r\n\r\n  <br>  <br>\r\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n    &nbsp;&nbsp;private sku:string;<br>\r\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;private name:string;<br>\r\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n    &nbsp;&nbsp;}<br>\r\n  }<br>\r\n<br>\r\n  export class PetStoreProductSkuHashable implements Hashable&lt;PetStoreProduct> &#123;<br>\r\n  &nbsp;&nbsp;  equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === undefined) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === undefined) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === null) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === null) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if ((instance2 === null) || (instance2 === undefined)) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return false;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1.getSku() === instance2.getSku()) &#123;  // what we're really comparing here<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return true;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    return false;<br>\r\n  &nbsp;&nbsp;  };<br>\r\n  &nbsp;&nbsp;  hashCode (o:PetStoreProduct) : number &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o === undefined) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o === null) &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    return Collections.getHashCodeForString(o.getSku());<br>\r\n  &nbsp;&nbsp;  };<br>\r\n  }<br>\r\n\r\n</p>\r\n\r\n<p *ngIf=\"active=='TreeSetOneField'\">\r\n  TreeSet compare all one field<br>\r\n  <li *ngFor=\"let psp of tsOneData\"><button (click)=\"removeTreeSetOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #tsoneaddsku type=text placeholder=\"sku\">\r\n  <input #tsoneaddname type=text placeholder=\"name\">\r\n  <button (click)=\"addTreeSetOne(tsoneaddsku.value, tsoneaddname.value);tsoneaddsku.value='';tsoneaddname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A TreeSet is a Set backed by a TreeMap.   Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the TreeSet or enter a value and click Add to add it to the TreeSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treeset_.treeset.html\">TreeSet Documentation</a><br><br>\r\n\r\n  tsOneData:TreeSet&lt;string> = new TreeSet&lt;PetStoreProduct>(new PetStoreProductOneFieldComparator());<br>\r\n  this.tsOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.tsOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.tsOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.tsOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.tsOneData.iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a TreeSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of tsOneData\">&lt;button (click)=\"removeTreeSetOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\r\n<br>\r\n  export class PetStoreProductOneFieldComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\r\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\r\n  &nbsp;&nbsp;  }<br>\r\n  }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='SkipListSetOneField'\">\r\n  SkipListSet compare all one field<br>\r\n  <li *ngFor=\"let psp of slOneData\"><button (click)=\"removeSkipListSetOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\r\n  <br>\r\n  <input #sloneaddsku type=text placeholder=\"sku\">\r\n  <input #sloneaddname type=text placeholder=\"name\">\r\n  <button (click)=\"addSkipListSetOne(sloneaddsku.value, sloneaddname.value);sloneaddsku.value='';sloneaddname.value=''\">Add</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A SkipListSet is a Set backed by a SkipListMap.  (TL;DR: Replace all TreeSet with SkipListSet they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the SkipListSet or enter a value and click Add to add it to the SkipListSet.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistset.html\">SkipListSet Documentation</a><br><br>\r\n\r\n  slOneData:SkipListSet&lt;string> = new SkipListSet&lt;PetStoreProduct>(new PetStoreProductOneFieldComparator());<br>\r\n  this.slOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\r\n  this.slOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\r\n  this.slOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\r\n  this.slOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\r\n  for (let iter:JIterator&lt;PetStoreProduct> = this.slOneData.iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a SkipListSet in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let pspa of slOneData\">&lt;button (click)=\"removeSkipListSetOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\r\n<br>\r\n  export class PetStoreProductOneFieldComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\r\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\r\n  &nbsp;&nbsp;  }<br>\r\n  }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='HashMap'\">\r\n  HashMap compare on string, string:<br>\r\n  <li *ngFor=\"let psp of hsMapData.entrySet()\"><button (click)=\"removeHashMapEntry(psp.getKey());\">{{psp.getKey()}} - {{psp.getValue()}}</button></li>\r\n  <br>\r\n  <input #hsmapsku type=text placeholder=\"key\">\r\n  <input #hsmapname type=text placeholder=\"value\">\r\n  <button (click)=\"putHashMap(hsmapsku.value, hsmapname.value);hsmapsku.value='';hsmapname.value=''\">Put</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A HashMap is a Hash implementation of the JMap interface.   Duplicate keys are not permitted.   There are no guarantees as to the iteration order of the map.   Map order is not guaranteed to remain constant over time.<br>\r\n  Click on an item to remove it from the HashMap or enter a key and a value and and click Put to add it to the HashMap.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashmap_.hashmap.html\">HashMap Documentation</a><br><br>\r\n\r\n  hsMapData:HashMap&lt;string, string> = new HashMap&lt;string, string>(new AllFieldHashable&lt;string>());<br>\r\n  this.hsMapData.add (\"ABCDE\", \"Bird Seed\");<br>\r\n  this.hsMapData.add (\"FGHIJ\", \"Cat Food\");<br>\r\n  this.hsMapData.add (\"KLMNO\", \"Dog Food\");<br>\r\n  this.hsMapData.remove (\"ZZZZZ\", \"Not there anymore\");<br>\r\n  for (let iter:JIterator&lt;MapEntry&lt;string, string> = this.hsMapData.entrySet().iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:MapEntry&lt;string, string> = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getKey() - psp.getValue());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a HashMap in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let psp of hsMapData.entrySet()\">&lt;button (click)=\"removeHashMap(psp);\">&#123;&#123;psp.getKey() } } - &#123;&#123;psp.getValue() } } &lt;/button>&lt;/li>\r\n\r\n  <br>  <br>\r\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n    &nbsp;&nbsp;private sku:string;<br>\r\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;private name:string;<br>\r\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n    &nbsp;&nbsp;}<br>\r\n  }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='TreeMap'\">\r\n  TreeMap compare on string, string:<br>\r\n  <li *ngFor=\"let psp of tsMapData.entrySet()\"><button (click)=\"removeTreeMapEntry(psp.getKey());\">{{psp.getKey()}} - {{psp.getValue()}}</button></li>\r\n  <br>\r\n  <input #tsmapsku type=text placeholder=\"key\">\r\n  <input #tsmapname type=text placeholder=\"value\">\r\n  <button (click)=\"putTreeMap(tsmapsku.value, tsmapname.value);tsmapsku.value='';tsmapname.value=''\">Put</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A TreeMap is a binary tree implementation of the JMap interface.   Duplicate keys are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the TreeMap or enter a key and a value and and click Put to add it to the TreeMap.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treemap_.treemap.html\">TreeMap Documentation</a><br><br>\r\n\r\n  tsMapData:TreeMap&lt;string, string> = new TreeMap&lt;string, string>(Collections.getStringComparator());<br>\r\n  this.tsMapData.add (\"ABCDE\", \"Bird Seed\");<br>\r\n  this.tsMapData.add (\"FGHIJ\", \"Cat Food\");<br>\r\n  this.tsMapData.add (\"KLMNO\", \"Dog Food\");<br>\r\n  this.tsMapData.remove (\"ZZZZZ\", \"Not there anymore\");<br>\r\n  for (let iter:JIterator&lt;MapEntry&lt;string, string> = this.tsMapData.entrySet().iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:MapEntry&lt;string, string> = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getKey() - psp.getValue());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a TreeMap in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let psp of tsMapData.entrySet()\">&lt;button (click)=\"removeTreeMap(psp);\">&#123;&#123;psp.getKey() } } - &#123;&#123;psp.getValue() } } &lt;/button>&lt;/li>\r\n\r\n  <br>  <br>\r\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n    &nbsp;&nbsp;private sku:string;<br>\r\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;private name:string;<br>\r\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n    &nbsp;&nbsp;}<br>\r\n  }<br>\r\n</p>\r\n\r\n<p *ngIf=\"active=='SkipListMap'\">\r\n  SkipListMap compare on string, string:<br>\r\n  <li *ngFor=\"let psp of slMapData.entrySet()\"><button (click)=\"removeSkipListMapEntry(psp.getKey());\">{{psp.getKey()}} - {{psp.getValue()}}</button></li>\r\n  <br>\r\n  <input #slmapsku type=text placeholder=\"key\">\r\n  <input #slmapname type=text placeholder=\"value\">\r\n  <button (click)=\"putSkipListMap(slmapsku.value, slmapname.value);slmapsku.value='';slmapname.value=''\">Put</button>\r\n\r\n  <br>  <br>  <br>  <br>\r\n  A SkipListMap is a SkipList implementation of the JMap interface.   (TL;DR: Replace all TreeMap with SkipListMap they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicate keys are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\r\n  Click on an item to remove it from the SkipListMap or enter a key and a value and and click Put to add it to the SkipListMap.<br><br>\r\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistmap.html\">SkipListMap Documentation</a><br><br>\r\n\r\n  slMapData:SkipListMap&lt;string, string> = new SkipListMap&lt;string, string>(Collections.getStringComparator());<br>\r\n  this.slMapData.add (\"ABCDE\", \"Bird Seed\");<br>\r\n  this.slMapData.add (\"FGHIJ\", \"Cat Food\");<br>\r\n  this.slMapData.add (\"KLMNO\", \"Dog Food\");<br>\r\n  this.slMapData.remove (\"ZZZZZ\", \"Not there anymore\");<br>\r\n  for (let iter:JIterator&lt;MapEntry&lt;string, string> = this.slMapData.entrySet().iterator(); iter.hasNext(); ) &#123; <br>\r\n  &nbsp;&nbsp;let psp:MapEntry&lt;string, string> = iter.next();<br>\r\n  &nbsp;&nbsp;console.log (psp.getKey() - psp.getValue());<br>\r\n  &#125;<br>\r\n  <br>\r\n  How to iterate over a SkipListMap in the HTML template for an Angular Component:<br>\r\n  &lt;li *ngFor=\"let psp of slMapData.entrySet()\">&lt;button (click)=\"removeSkipListMap(psp);\">&#123;&#123;psp.getKey() } } - &#123;&#123;psp.getValue() } } &lt;/button>&lt;/li>\r\n\r\n  <br>  <br>\r\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\r\n    &nbsp;&nbsp;private sku:string;<br>\r\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\r\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;private name:string;<br>\r\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\r\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\r\n  <br>\r\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\r\n    &nbsp;&nbsp;}<br>\r\n  }<br>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: PetStoreProduct, AppComponent, PetStoreProductSkuCollectable, PetStoreProductSkuHashable, PetStoreProductAllFieldsComparator, PetStoreProductSkuComparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetStoreProduct", function() { return PetStoreProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetStoreProductSkuCollectable", function() { return PetStoreProductSkuCollectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetStoreProductSkuHashable", function() { return PetStoreProductSkuHashable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetStoreProductAllFieldsComparator", function() { return PetStoreProductAllFieldsComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetStoreProductSkuComparator", function() { return PetStoreProductSkuComparator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescriptcollectionsframework */ "./node_modules/typescriptcollectionsframework/dist/index.js");
/* harmony import */ var typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetStoreProduct = /** @class */ (function () {
    function PetStoreProduct(isku, iname) {
        this.sku = isku;
        this.name = iname;
    }
    PetStoreProduct.prototype.getSku = function () { return this.sku; };
    PetStoreProduct.prototype.getName = function () { return this.name; };
    return PetStoreProduct;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.active = "ArrayList";
        this.alData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["ArrayList"](new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["AllFieldCollectable"]());
        this.llData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["LinkedList"](new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["AllFieldCollectable"]());
        this.hsData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["HashSet"](new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["AllFieldHashable"]());
        this.tsData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["TreeSet"](typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["Collections"].getStringComparator());
        this.slData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["SkipListSet"](typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["Collections"].getStringComparator());
        this.alAllData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["ArrayList"](new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["AllFieldCollectable"]());
        this.llAllData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["LinkedList"](new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["AllFieldCollectable"]());
        this.hsAllData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["HashSet"](new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["AllFieldHashable"]());
        this.tsAllData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["TreeSet"](new PetStoreProductAllFieldsComparator());
        this.slAllData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["SkipListSet"](new PetStoreProductAllFieldsComparator());
        this.alOneData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["ArrayList"](new PetStoreProductSkuCollectable());
        this.llOneData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["LinkedList"](new PetStoreProductSkuCollectable());
        this.hsOneData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["HashSet"](new PetStoreProductSkuHashable());
        this.tsOneData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["TreeSet"](new PetStoreProductSkuComparator());
        this.slOneData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["SkipListSet"](new PetStoreProductSkuComparator());
        this.hsMapData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["HashMap"](new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["AllFieldHashable"]());
        this.tsMapData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["TreeMap"](typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["Collections"].getStringComparator());
        this.slMapData = new typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["SkipListMap"](typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["Collections"].getStringComparator());
        this.alData.add("Cat");
        this.alData.add("Squirrel");
        this.alData.add("Dog");
        this.llData.add("Cat");
        this.llData.add("Squirrel");
        this.llData.add("Dog");
        this.hsData.add("Cat");
        this.hsData.add("Squirrel");
        this.hsData.add("Dog");
        this.tsData.add("Cat");
        this.tsData.add("Squirrel");
        this.tsData.add("Dog");
        this.slData.add("Cat");
        this.slData.add("Squirrel");
        this.slData.add("Dog");
        var psp1 = new PetStoreProduct("ABCDE", "Bird Seed");
        var psp2 = new PetStoreProduct("FGHIJ", "Cat Food");
        var psp3 = new PetStoreProduct("KLMNO", "Dog Food");
        this.alAllData.add(psp1);
        this.alAllData.add(psp2);
        this.alAllData.add(psp3);
        this.llAllData.add(psp1);
        this.llAllData.add(psp2);
        this.llAllData.add(psp3);
        this.hsAllData.add(psp1);
        this.hsAllData.add(psp2);
        this.hsAllData.add(psp3);
        this.tsAllData.add(psp1);
        this.tsAllData.add(psp2);
        this.tsAllData.add(psp3);
        this.slAllData.add(psp1);
        this.slAllData.add(psp2);
        this.slAllData.add(psp3);
        this.alOneData.add(psp1);
        this.alOneData.add(psp2);
        this.alOneData.add(psp3);
        this.llOneData.add(psp1);
        this.llOneData.add(psp2);
        this.llOneData.add(psp3);
        this.hsOneData.add(psp1);
        this.hsOneData.add(psp2);
        this.hsOneData.add(psp3);
        this.tsOneData.add(psp1);
        this.tsOneData.add(psp2);
        this.tsOneData.add(psp3);
        this.slOneData.add(psp1);
        this.slOneData.add(psp2);
        this.slOneData.add(psp3);
        this.hsMapData.put(psp1.getSku(), psp1.getName());
        this.hsMapData.put(psp2.getSku(), psp2.getName());
        this.hsMapData.put(psp3.getSku(), psp3.getName());
        this.tsMapData.put(psp1.getSku(), psp1.getName());
        this.tsMapData.put(psp2.getSku(), psp2.getName());
        this.tsMapData.put(psp3.getSku(), psp3.getName());
        this.slMapData.put(psp1.getSku(), psp1.getName());
        this.slMapData.put(psp2.getSku(), psp2.getName());
        this.slMapData.put(psp3.getSku(), psp3.getName());
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ArrayList = function () {
        this.active = "ArrayList";
    };
    AppComponent.prototype.LinkedList = function () {
        this.active = "LinkedList";
    };
    AppComponent.prototype.HashSet = function () {
        this.active = "HashSet";
    };
    AppComponent.prototype.TreeSet = function () {
        this.active = "TreeSet";
    };
    AppComponent.prototype.SkipListSet = function () {
        this.active = "SkipListSet";
    };
    AppComponent.prototype.ArrayListAllFields = function () {
        this.active = "ArrayListAllFields";
    };
    AppComponent.prototype.LinkedListAllFields = function () {
        this.active = "LinkedListAllFields";
    };
    AppComponent.prototype.HashSetAllFields = function () {
        this.active = "HashSetAllFields";
    };
    AppComponent.prototype.TreeSetAllFields = function () {
        this.active = "TreeSetAllFields";
    };
    AppComponent.prototype.SkipListSetAllFields = function () {
        this.active = "SkipListSetAllFields";
    };
    AppComponent.prototype.ArrayListOneField = function () {
        this.active = "ArrayListOneField";
    };
    AppComponent.prototype.LinkedListOneField = function () {
        this.active = "LinkedListOneField";
    };
    AppComponent.prototype.HashSetOneField = function () {
        this.active = "HashSetOneField";
    };
    AppComponent.prototype.TreeSetOneField = function () {
        this.active = "TreeSetOneField";
    };
    AppComponent.prototype.SkipListSetOneField = function () {
        this.active = "SkipListSetOneField";
    };
    AppComponent.prototype.HashMap = function () {
        this.active = "HashMap";
    };
    AppComponent.prototype.TreeMap = function () {
        this.active = "TreeMap";
    };
    AppComponent.prototype.SkipListMap = function () {
        this.active = "SkipListMap";
    };
    AppComponent.prototype.addArrayList = function (newdata) {
        this.alData.add(newdata);
    };
    AppComponent.prototype.addLinkedList = function (newdata) {
        this.llData.add(newdata);
    };
    AppComponent.prototype.addHashSet = function (newdata) {
        this.hsData.add(newdata);
    };
    AppComponent.prototype.addTreeSet = function (newdata) {
        this.tsData.add(newdata);
    };
    AppComponent.prototype.addSkipListSet = function (newdata) {
        this.slData.add(newdata);
    };
    AppComponent.prototype.addArrayListAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.alAllData.add(psp);
    };
    AppComponent.prototype.addLinkedListAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.llAllData.add(psp);
    };
    AppComponent.prototype.addHashSetAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.hsAllData.add(psp);
    };
    AppComponent.prototype.addTreeSetAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.tsAllData.add(psp);
    };
    AppComponent.prototype.addSkipListSetAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.slAllData.add(psp);
    };
    AppComponent.prototype.addArrayListOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.alOneData.add(psp);
    };
    AppComponent.prototype.addLinkedListOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.llOneData.add(psp);
    };
    AppComponent.prototype.addHashSetOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.hsOneData.add(psp);
    };
    AppComponent.prototype.addTreeSetOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.tsOneData.add(psp);
    };
    AppComponent.prototype.addSkipListSetOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.slOneData.add(psp);
    };
    AppComponent.prototype.putHashMap = function (newsku, newvalue) {
        this.hsMapData.put(newsku, newvalue);
    };
    AppComponent.prototype.putTreeMap = function (newsku, newvalue) {
        this.tsMapData.put(newsku, newvalue);
    };
    AppComponent.prototype.putSkipListMap = function (newsku, newvalue) {
        this.slMapData.put(newsku, newvalue);
    };
    AppComponent.prototype.removeArrayListEntry = function (olddata) {
        this.alData.remove(olddata);
    };
    AppComponent.prototype.removeLinkedListEntry = function (olddata) {
        this.llData.remove(olddata);
    };
    AppComponent.prototype.removeHashSetEntry = function (olddata) {
        this.hsData.remove(olddata);
    };
    AppComponent.prototype.removeTreeSetEntry = function (olddata) {
        this.tsData.remove(olddata);
    };
    AppComponent.prototype.removeSkipListSetEntry = function (olddata) {
        this.slData.remove(olddata);
    };
    AppComponent.prototype.removeArrayListAllEntry = function (oldpsp) {
        this.alAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeLinkedListAllEntry = function (oldpsp) {
        this.llAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeHashSetAllEntry = function (oldpsp) {
        this.hsAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeTreeSetAllEntry = function (oldpsp) {
        this.tsAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeSkipListSetAllEntry = function (oldpsp) {
        this.slAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeArrayListOneEntry = function (oldpsp) {
        this.alOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeLinkedListOneEntry = function (oldpsp) {
        this.llOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeHashSetOneEntry = function (oldpsp) {
        this.hsOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeTreeSetOneEntry = function (oldpsp) {
        this.tsOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeSkipListSetOneEntry = function (oldpsp) {
        this.slOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeHashMapEntry = function (oldsku) {
        this.hsMapData.remove(oldsku);
    };
    AppComponent.prototype.removeTreeMapEntry = function (oldsku) {
        this.tsMapData.remove(oldsku);
    };
    AppComponent.prototype.removeSkipListMapEntry = function (oldsku) {
        this.slMapData.remove(oldsku);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

var PetStoreProductSkuCollectable = /** @class */ (function () {
    function PetStoreProductSkuCollectable() {
    }
    PetStoreProductSkuCollectable.prototype.equals = function (instance1, instance2) {
        if (instance1 === undefined) {
            if (instance2 === undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        if (instance1 === null) {
            if (instance2 === null) {
                return true;
            }
            else {
                return false;
            }
        }
        if ((instance2 === null) || (instance2 === undefined)) {
            return false;
        }
        if (instance1.getSku() === instance2.getSku()) { // what we're really comparing here
            return true;
        }
        return false;
    };
    return PetStoreProductSkuCollectable;
}());

var PetStoreProductSkuHashable = /** @class */ (function () {
    function PetStoreProductSkuHashable() {
    }
    PetStoreProductSkuHashable.prototype.equals = function (instance1, instance2) {
        if (instance1 === undefined) {
            if (instance2 === undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        if (instance1 === null) {
            if (instance2 === null) {
                return true;
            }
            else {
                return false;
            }
        }
        if ((instance2 === null) || (instance2 === undefined)) {
            return false;
        }
        if (instance1.getSku() === instance2.getSku()) { // what we're really comparing here
            return true;
        }
        return false;
    };
    ;
    PetStoreProductSkuHashable.prototype.hashCode = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        return typescriptcollectionsframework__WEBPACK_IMPORTED_MODULE_1__["Collections"].getHashCodeForString(o.getSku());
    };
    ;
    return PetStoreProductSkuHashable;
}());

var PetStoreProductAllFieldsComparator = /** @class */ (function () {
    function PetStoreProductAllFieldsComparator() {
    }
    PetStoreProductAllFieldsComparator.prototype.compare = function (o1, o2) {
        if (o1 === o2)
            return 0;
        if (o1 === undefined)
            return -1;
        if (o1 === null)
            return -1;
        if (o2 === undefined)
            return 1;
        if (o2 === null)
            return 1;
        if (o1.getSku() < o2.getSku())
            return -1;
        if (o1.getSku() > o2.getSku())
            return 1;
        if (o1.getName() < o2.getName())
            return -1;
        return 1;
    };
    return PetStoreProductAllFieldsComparator;
}());

var PetStoreProductSkuComparator = /** @class */ (function () {
    function PetStoreProductSkuComparator() {
    }
    PetStoreProductSkuComparator.prototype.compare = function (o1, o2) {
        if (o1 === o2)
            return 0;
        if (o1 === undefined)
            return -1;
        if (o1 === null)
            return -1;
        if (o2 === undefined)
            return 1;
        if (o2 === null)
            return 1;
        if (o1.getSku() < o2.getSku())
            return -1;
        return 1;
    };
    return PetStoreProductSkuComparator;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\typescriptcollectionsframework-Demo-For-Angular7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map