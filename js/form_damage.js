// choices
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Choices=t():e.Choices=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var i={};return t.m=e,t.c=i,t.p="/assets/scripts/dist/",t(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),c=i(2),l=n(c),h=i(3),u=n(h),d=i(29),p=i(30);i(31);var f=function(){function e(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-choice]",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),(0,p.isType)("String",i)){var s=document.querySelectorAll(i);if(s.length>1)for(var o=1;o<s.length;o++){var a=s[o];new e(a,n)}}var c={items:[],choices:[],maxItemCount:-1,addItems:!0,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItems:!0,delimiter:",",paste:!0,search:!0,searchFloor:1,position:"auto",resetScrollPosition:!0,regexFilter:null,shouldSort:!0,sortFilter:p.sortByAlpha,sortFields:["label","value"],placeholder:!0,placeholderValue:null,prependValue:null,appendValue:null,loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",addItemText:function(e){return'Press Enter to add <b>"'+e+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added."},uniqueItemText:"Only unique values can be added.",classNames:{containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",hiddenState:"is-hidden",flippedState:"is-flipped",loadingState:"is-loading"},fuseOptions:{include:"score"},callbackOnInit:null,callbackOnCreateTemplates:null};if(this.config=(0,p.extend)(c,n),this.store=new u.default(this.render),this.initialised=!1,this.currentState={},this.prevState={},this.currentValue="",this.element=i,this.passedElement=(0,p.isType)("String",i)?document.querySelector(i):i,this.isSelectElement="select-one"===this.passedElement.type||"select-multiple"===this.passedElement.type,this.isTextElement="text"===this.passedElement.type,!this.passedElement)return void console.error("Passed element not found");this.highlightPosition=0,this.canSearch=this.config.search,this.presetChoices=this.config.choices,this.presetItems=this.config.items,this.passedElement.value&&(this.presetItems=this.presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this.init=this.init.bind(this),this.render=this.render.bind(this),this.destroy=this.destroy.bind(this),this.disable=this.disable.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this.wasTap=!0;var l="classList"in document.documentElement;l||console.error("Choices: Your browser doesn't support Choices");var h=["select-one","select-multiple","text"].some(function(e){return e===t.passedElement.type}),d=(0,p.isElement)(this.passedElement)&&h;if(d){if("active"===this.passedElement.getAttribute("data-choice"))return;this.init()}else console.error("Incompatible input passed")}return a(e,[{key:"init",value:function(){if(this.initialised!==!0){var e=this.config.callbackOnInit;this.initialised=!0,this._createTemplates(),this._createInput(),this.store.subscribe(this.render),this.render(),this._addEventListeners(),e&&(0,p.isType)("Function",e)&&e.call(this)}}},{key:"destroy",value:function(){this.initialised!==!1&&(this._removeEventListeners(),this.passedElement.classList.remove(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.removeAttribute("tabindex"),this.passedElement.removeAttribute("style","display:none;"),this.passedElement.removeAttribute("aria-hidden"),this.passedElement.removeAttribute("data-choice","active"),this.passedElement.value=this.passedElement.value,this.containerOuter.parentNode.insertBefore(this.passedElement,this.containerOuter),this.containerOuter.parentNode.removeChild(this.containerOuter),this.clearStore(),this.config.templates=null,this.initialised=!1)}},{key:"renderGroups",value:function(e,t,i){var n=this,s=i||document.createDocumentFragment(),o=this.config.sortFilter;return this.config.shouldSort&&e.sort(o),e.forEach(function(e){var i=t.filter(function(t){return"select-one"===n.passedElement.type?t.groupId===e.id:t.groupId===e.id&&!t.selected});if(i.length>=1){var o=n._getTemplate("choiceGroup",e);s.appendChild(o),n.renderChoices(i,s)}}),s}},{key:"renderChoices",value:function(e,t){var i=this,n=t||document.createDocumentFragment(),s=this.isSearching?p.sortByScore:this.config.sortFilter;return(this.config.shouldSort||this.isSearching)&&e.sort(s),e.forEach(function(e){var t=i._getTemplate("choice",e),s="select-one"===i.passedElement.type||!e.selected;s&&n.appendChild(t)}),n}},{key:"renderItems",value:function(e,t){var i=this,n=t||document.createDocumentFragment(),s=this.store.getItemsReducedToValues(e);if(this.isTextElement)this.passedElement.setAttribute("value",s.join(this.config.delimiter));else{var o=document.createDocumentFragment();e.forEach(function(e){var t=i._getTemplate("option",e);o.appendChild(t)}),this.passedElement.innerHTML="",this.passedElement.appendChild(o)}return e.forEach(function(e){var t=i._getTemplate("item",e);n.appendChild(t)}),n}},{key:"render",value:function(){if(this.currentState=this.store.getState(),this.currentState!==this.prevState){if(!(this.currentState.choices===this.prevState.choices&&this.currentState.groups===this.prevState.groups||"select-multiple"!==this.passedElement.type&&"select-one"!==this.passedElement.type)){var e=this.store.getGroupsFilteredByActive(),t=this.store.getChoicesFilteredByActive(),i=document.createDocumentFragment();if(this.choiceList.innerHTML="",this.config.resetScrollPosition&&(this.choiceList.scrollTop=0),e.length>=1&&this.isSearching!==!0?i=this.renderGroups(e,t,i):t.length>=1&&(i=this.renderChoices(t,i)),i.childNodes&&i.childNodes.length>0)this.choiceList.appendChild(i),this._highlightChoice();else{var n=void 0,s=void 0;this.isSearching?(s=(0,p.isType)("Function",this.config.noResultsText)?this.config.noResultsText():this.config.noResultsText,n=this._getTemplate("notice",s)):(s=(0,p.isType)("Function",this.config.noChoicesText)?this.config.noChoicesText():this.config.noChoicesText,n=this._getTemplate("notice",s)),this.choiceList.appendChild(n)}}if(this.currentState.items!==this.prevState.items){var o=this.store.getItemsFilteredByActive();if(o){var r=this.renderItems(o);this.itemList.innerHTML="",r.childNodes&&this.itemList.appendChild(r)}}this.prevState=this.currentState}}},{key:"highlightItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var i=e.id,n=e.groupId,s=n>=0?this.store.getGroupById(n):null;return this.store.dispatch((0,d.highlightItem)(i,!0)),t&&(s&&s.value?(0,p.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label,groupValue:s.value}):(0,p.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label})),this}}},{key:"unhighlightItem",value:function(e){if(e){var t=e.id,i=e.groupId,n=i>=0?this.store.getGroupById(i):null;return this.store.dispatch((0,d.highlightItem)(t,!1)),n&&n.value?(0,p.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label,groupValue:n.value}):(0,p.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label}),this}}},{key:"highlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.highlightItem(t)}),this}},{key:"unhighlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.unhighlightItem(t)}),this}},{key:"removeItemsByValue",value:function(e){var t=this;if(!e||!(0,p.isType)("String",e))return void console.error("removeItemsByValue: No value was passed to be removed");var i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.value===e&&t._removeItem(i)}),this}},{key:"removeActiveItems",value:function(e){var t=this,i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.active&&e!==i.id&&t._removeItem(i)}),this}},{key:"removeHighlightedItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.highlighted&&i.active&&(e._removeItem(i),t&&e._triggerChange(i.value))}),this}},{key:"showDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.body,i=document.documentElement,n=Math.max(t.scrollHeight,t.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);this.containerOuter.classList.add(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","true"),this.dropdown.classList.add(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","true");var s=this.dropdown.getBoundingClientRect(),o=Math.ceil(s.top+window.scrollY+s.height),r=!1;return"auto"===this.config.position?r=o>=n:"top"===this.config.position&&(r=!0),r?this.containerOuter.classList.add(this.config.classNames.flippedState):this.containerOuter.classList.remove(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement!==this.input&&this.input.focus(),(0,p.triggerEvent)(this.passedElement,"showDropdown",{}),this}},{key:"hideDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.containerOuter.classList.contains(this.config.classNames.flippedState);return this.containerOuter.classList.remove(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","false"),this.dropdown.classList.remove(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","false"),t&&this.containerOuter.classList.remove(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement===this.input&&this.input.blur(),(0,p.triggerEvent)(this.passedElement,"hideDropdown",{}),this}},{key:"toggleDropdown",value:function(){var e=this.dropdown.classList.contains(this.config.classNames.activeState);return e?this.hideDropdown():this.showDropdown(!0),this}},{key:"getValue",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive(),n=[];return i.forEach(function(i){e.isTextElement?n.push(t?i.value:i):i.active&&n.push(t?i.value:i)}),"select-one"===this.passedElement.type?n[0]:n}},{key:"setValue",value:function(e){var t=this;if(this.initialised===!0){var i=[].concat(o(e)),n=this.passedElement.type,s=function(e){var i=(0,p.getType)(e);if("Object"===i){if(!e.value)return;"text"!==n?t._addChoice(!0,!1,e.value,e.label,-1):t._addItem(e.value,e.label,e.id)}else"String"===i&&("text"!==n?t._addChoice(!0,!1,e,e,-1):t._addItem(e))};i.length>1?i.forEach(function(e){s(e)}):s(i[0])}return this}},{key:"setValueByChoice",value:function(e){var t=this;if("text"!==this.passedElement.type){var i=this.store.getChoices(),n=(0,p.isType)("Array",e)?e:[e];n.forEach(function(e){var n=i.find(function(t){return t.value===e});n?n.selected?console.warn("Attempting to select choice already selected"):t._addItem(n.value,n.label,n.id,n.groupId):console.warn("Attempting to select choice that does not exist")})}return this}},{key:"setChoices",value:function(e,t,i){var n=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.initialised===!0&&this.isSelectElement){if(!(0,p.isType)("Array",e)||!t)return;s&&this._clearChoices(),e&&e.length&&(this.containerOuter.classList.remove(this.config.classNames.loadingState),e.forEach(function(e,s){var o=!!e.selected&&e.selected,r=!!e.disabled&&e.disabled;e.choices?n._addGroup(e,e.id||null,t,i):n._addChoice(o,r,e[t],e[i])}))}return this}},{key:"clearStore",value:function(){return this.store.dispatch((0,d.clearAll)()),this}},{key:"clearInput",value:function(){return this.input.value&&(this.input.value=""),"select-one"!==this.passedElement.type&&this._setInputWidth(),"text"!==this.passedElement.type&&this.config.search&&(this.isSearching=!1,this.store.dispatch((0,d.activateChoices)(!0))),this}},{key:"enable",value:function(){this.passedElement.disabled=!1;var e=this.containerOuter.classList.contains(this.config.classNames.disabledState);return this.initialised&&e&&(this._addEventListeners(),this.passedElement.removeAttribute("disabled"),this.input.removeAttribute("disabled"),this.containerOuter.classList.remove(this.config.classNames.disabledState),this.containerOuter.removeAttribute("aria-disabled")),this}},{key:"disable",value:function(){this.passedElement.disabled=!0;var e=!this.containerOuter.classList.contains(this.config.classNames.disabledState);return this.initialised&&e&&(this._removeEventListeners(),this.passedElement.setAttribute("disabled",""),this.input.setAttribute("disabled",""),this.containerOuter.classList.add(this.config.classNames.disabledState),this.containerOuter.setAttribute("aria-disabled","true")),this}},{key:"ajax",value:function(e){return this.initialised===!0&&this.isSelectElement&&(this._handleLoadingState(!0),e(this._ajaxCallback())),this}},{key:"_triggerChange",value:function(e){e&&(0,p.triggerEvent)(this.passedElement,"change",{value:e})}},{key:"_handleButtonAction",value:function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode.getAttribute("data-id"),n=e.find(function(e){return e.id===parseInt(i,10)});if(this._removeItem(n),this._triggerChange(n.value),"select-one"===this.passedElement.type){var s=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));if(s){var o=this._getTemplate("placeholder",s);this.itemList.appendChild(o)}}}}},{key:"_handleItemAction",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&t&&this.config.removeItems&&"select-one"!==this.passedElement.type){var s=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(s,10)||e.highlighted?n||e.highlighted&&i.unhighlightItem(e):i.highlightItem(e)}),document.activeElement!==this.input&&this.input.focus()}}},{key:"_handleChoiceAction",value:function(e,t){if(e&&t){var i=t.getAttribute("data-id"),n=this.store.getChoiceById(i),s=this.dropdown.classList.contains(this.config.classNames.activeState);if((0,p.triggerEvent)(this.passedElement,"choice",{choice:n}),n&&!n.selected&&!n.disabled){var o=this._canAddItem(e,n.value);o.response&&(this._addItem(n.value,n.label,n.id,n.groupId),this._triggerChange(n.value))}this.clearInput(this.passedElement),s&&"select-one"===this.passedElement.type&&(this.hideDropdown(),this.containerOuter.focus())}}},{key:"_handleBackspace",value:function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some(function(e){return e.highlighted===!0});this.config.editItems&&!i&&t?(this.input.value=t.value,this._setInputWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}}},{key:"_canAddItem",value:function(e,t){var i=!0,n=(0,p.isType)("Function",this.config.addItemText)?this.config.addItemText(t):this.config.addItemText;if("select-multiple"!==this.passedElement.type&&"text"!==this.passedElement.type||this.config.maxItemCount>0&&this.config.maxItemCount<=this.itemList.children.length&&(i=!1,n=(0,p.isType)("Function",this.config.maxItemText)?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),"text"===this.passedElement.type&&this.config.addItems){var s=!e.some(function(e){return e.value===t.trim()});this.config.regexFilter&&(i=this._regexFilter(t)),this.config.duplicateItems!==!1||s||(i=!1,n=(0,p.isType)("Function",this.config.uniqueItemText)?this.config.uniqueItemText(t):this.config.uniqueItemText)}return{response:i,notice:n}}},{key:"_handleLoadingState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.itemList.querySelector("."+this.config.classNames.placeholder);if(e)this.containerOuter.classList.add(this.config.classNames.loadingState),this.containerOuter.setAttribute("aria-busy","true"),"select-one"===this.passedElement.type?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.appendChild(t)):this.input.placeholder=this.config.loadingText;else{this.containerOuter.classList.remove(this.config.classNames.loadingState);var i=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));"select-one"===this.passedElement.type?t.innerHTML=i||"":this.input.placeholder=i||""}}},{key:"_ajaxCallback",value:function(){var e=this;return function(t,i,n){if(t&&i){var s=(0,p.isType)("Object",t)?[t]:t;s&&(0,p.isType)("Array",s)&&s.length?(e._handleLoadingState(!1),s.forEach(function(t,s){var o=!!t.selected&&t.selected,r=!!t.disabled&&t.disabled;t.choices?e._addGroup(t,t.id||null,i,n):e._addChoice(o,r,t[i],t[n])})):e._handleLoadingState(!1),e.containerOuter.removeAttribute("aria-busy")}}}},{key:"_searchChoices",value:function(e){var t=(0,p.isType)("String",e)?e.trim():e,i=(0,p.isType)("String",this.currentValue)?this.currentValue.trim():this.currentValue;if(t.length>=1&&t!==i+" "){var n=this.store.getChoicesFilteredBySelectable(),s=t,o=(0,p.isType)("Array",this.config.sortFields)?this.config.sortFields:[this.config.sortFields],r=Object.assign(this.config.fuseOptions,{keys:o}),a=new l.default(n,r),c=a.search(s);this.currentValue=t,this.highlightPosition=0,this.isSearching=!0,this.store.dispatch((0,d.filterChoices)(c))}}},{key:"_handleSearch",value:function(e){if(e){var t=this.store.getChoices(),i=t.some(function(e){return e.active!==!0});this.input===document.activeElement&&(e&&e.length>this.config.searchFloor?(this._searchChoices(e),(0,p.triggerEvent)(this.passedElement,"search",{value:e})):i&&(this.isSearching=!1,this.store.dispatch((0,d.activateChoices)(!0))))}}},{key:"_addEventListeners",value:function(){document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("click",this._onClick),document.addEventListener("touchmove",this._onTouchMove),document.addEventListener("touchend",this._onTouchEnd),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseover",this._onMouseOver),this.passedElement.type&&"select-one"===this.passedElement.type&&(this.containerOuter.addEventListener("focus",this._onFocus),this.containerOuter.addEventListener("blur",this._onBlur)),this.input.addEventListener("input",this._onInput),this.input.addEventListener("paste",this._onPaste),this.input.addEventListener("focus",this._onFocus),this.input.addEventListener("blur",this._onBlur)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("click",this._onClick),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseover",this._onMouseOver),this.passedElement.type&&"select-one"===this.passedElement.type&&(this.containerOuter.removeEventListener("focus",this._onFocus),this.containerOuter.removeEventListener("blur",this._onBlur)),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("paste",this._onPaste),this.input.removeEventListener("focus",this._onFocus),this.input.removeEventListener("blur",this._onBlur)}},{key:"_setInputWidth",value:function(){if(this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"))){var e=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));this.input.value&&this.input.value.length>=e.length/1.25&&(this.input.style.width=(0,p.getWidthOfInput)(this.input))}else this.input.style.width=(0,p.getWidthOfInput)(this.input)}},{key:"_onKeyDown",value:function(e){var t,i=this;if(e.target===this.input||this.containerOuter.contains(e.target)){var n=e.target,o=this.passedElement.type,r=this.store.getItemsFilteredByActive(),a=this.input===document.activeElement,c=this.dropdown.classList.contains(this.config.classNames.activeState),l=this.itemList&&this.itemList.children,h=String.fromCharCode(e.keyCode),u=46,d=8,f=13,v=65,m=27,g=38,y=40,b=33,E=34,_=e.ctrlKey||e.metaKey;"text"!==o&&/[a-zA-Z0-9-_ ]/.test(h)&&!c&&this.showDropdown(!0),this.canSearch=this.config.search;var I=function(){_&&l&&(i.canSearch=!1,i.config.removeItems&&!i.input.value&&i.input===document.activeElement&&i.highlightAll(i.itemList.children))},w=function(){if("text"===o&&n.value){var t=i.input.value,s=i._canAddItem(r,t);s.response&&(c&&i.hideDropdown(),i._addItem(t),i._triggerChange(t),i.clearInput(i.passedElement))}if(n.hasAttribute("data-button")&&(i._handleButtonAction(r,n),e.preventDefault()),c){e.preventDefault();var a=i.dropdown.querySelector("."+i.config.classNames.highlightedState);a&&i._handleChoiceAction(r,a)}else"select-one"===o&&(c||(i.showDropdown(!0),e.preventDefault()))},S=function(){c&&i.toggleDropdown()},T=function(){if(c||"select-one"===o){c||i.showDropdown(!0),i.canSearch=!1;var t=e.keyCode===y||e.keyCode===E?1:-1,n=e.metaKey||e.keyCode===E||e.keyCode===b,s=void 0;if(n)s=t>0?Array.from(i.dropdown.querySelectorAll("[data-choice-selectable]")).pop():i.dropdown.querySelector("[data-choice-selectable]");else{var r=i.dropdown.querySelector("."+i.config.classNames.highlightedState);s=r?(0,p.getAdjacentEl)(r,"[data-choice-selectable]",t):i.dropdown.querySelector("[data-choice-selectable]")}s&&((0,p.isScrolledIntoView)(s,i.choiceList,t)||i._scrollToChoice(s,t),i._highlightChoice(s)),e.preventDefault()}},A=function(){a&&!e.target.value&&"select-one"!==o&&(i._handleBackspace(r),e.preventDefault())},C=(t={},s(t,v,I),s(t,f,w),s(t,m,S),s(t,g,T),s(t,b,T),s(t,y,T),s(t,E,T),s(t,d,A),s(t,u,A),t);C[e.keyCode]&&C[e.keyCode]()}}},{key:"_onKeyUp",value:function(e){if(e.target===this.input)if(this.isTextElement){var t=this.dropdown.classList.contains(this.config.classNames.activeState),i=this.input.value;if(i){var n=this.store.getItemsFilteredByActive(),s=this._canAddItem(n,i);if(s.notice){var o=this._getTemplate("notice",s.notice);this.dropdown.innerHTML=o.outerHTML}s.response===!0?t||this.showDropdown():!s.notice&&t&&this.hideDropdown()}else t&&this.hideDropdown()}else{var r=46,a=8;e.keyCode!==r&&e.keyCode!==a||e.target.value?this.canSearch&&this._handleSearch(this.input.value):"text"!==this.passedElement.type&&this.isSearching&&(this.isSearching=!1,this.store.dispatch((0,d.activateChoices)(!0)))}}},{key:"_onInput",value:function(){"select-one"!==this.passedElement.type&&this._setInputWidth()}},{key:"_onTouchMove",value:function(){this.wasTap===!0&&(this.wasTap=!1)}},{key:"_onTouchEnd",value:function(e){var t=e.target||e.touches[0].target,i=this.dropdown.classList.contains(this.config.classNames.activeState);this.wasTap===!0&&this.containerOuter.contains(t)&&(t!==this.containerOuter&&t!==this.containerInner||"select-one"===this.passedElement.type||(this.isTextElement?document.activeElement!==this.input&&this.input.focus():i||this.showDropdown(!0)),e.stopPropagation()),this.wasTap=!0}},{key:"_onMouseDown",value:function(e){var t=e.target;if(this.containerOuter.contains(t)&&t!==this.input){var i=void 0,n=this.store.getItemsFilteredByActive(),s=e.shiftKey;(i=(0,p.findAncestorByAttrName)(t,"data-button"))?this._handleButtonAction(n,i):(i=(0,p.findAncestorByAttrName)(t,"data-item"))?this._handleItemAction(n,i,s):(i=(0,p.findAncestorByAttrName)(t,"data-choice"))&&this._handleChoiceAction(n,i),e.preventDefault()}}},{key:"_onClick",value:function(e){var t=e.target,i=this.dropdown.classList.contains(this.config.classNames.activeState),n=this.store.getItemsFilteredByActive();if(this.containerOuter.contains(t))t.hasAttribute("data-button")&&this._handleButtonAction(n,t),i?"select-one"!==this.passedElement.type||t===this.input||this.dropdown.contains(t)||this.hideDropdown(!0):this.isTextElement?document.activeElement!==this.input&&this.input.focus():this.canSearch?this.showDropdown(!0):(this.showDropdown(),this.containerOuter.focus());else{var s=n.some(function(e){return e.highlighted===!0});s&&this.unhighlightAll(),this.containerOuter.classList.remove(this.config.classNames.focusState),i&&this.hideDropdown()}}},{key:"_onMouseOver",value:function(e){(e.target===this.dropdown||this.dropdown.contains(e.target))&&e.target.hasAttribute("data-choice")&&this._highlightChoice(e.target)}},{key:"_onPaste",value:function(e){e.target!==this.input||this.config.paste||e.preventDefault()}},{key:"_onFocus",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)){var n=this.dropdown.classList.contains(this.config.classNames.activeState),s={text:function(){i===t.input&&t.containerOuter.classList.add(t.config.classNames.focusState)},"select-one":function(){t.containerOuter.classList.add(t.config.classNames.focusState),i===t.input&&(n||t.showDropdown())},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.add(t.config.classNames.focusState),n||t.showDropdown(!0))}};s[this.passedElement.type]()}}},{key:"_onBlur",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)){var n=this.store.getItemsFilteredByActive(),s=this.dropdown.classList.contains(this.config.classNames.activeState),o=n.some(function(e){return e.highlighted===!0}),r={text:function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),o&&t.unhighlightAll(),s&&t.hideDropdown())},"select-one":function(){t.containerOuter.classList.remove(t.config.classNames.focusState),i===t.containerOuter&&s&&!t.canSearch&&t.hideDropdown(),i===t.input&&s&&t.hideDropdown()},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),s&&t.hideDropdown(),o&&t.unhighlightAll())}};r[this.passedElement.type]()}}},{key:"_regexFilter",value:function(e){if(e){var t=this.config.regexFilter,i=new RegExp(t.source,"i");return i.test(e)}}},{key:"_scrollToChoice",value:function(e,t){var i=this;if(e){var n=this.choiceList.offsetHeight,s=e.offsetHeight,o=e.offsetTop+s,r=this.choiceList.scrollTop+n,a=t>0?this.choiceList.scrollTop+o-r:e.offsetTop,c=function e(){var n=4,s=i.choiceList.scrollTop,o=!1,r=void 0,c=void 0;t>0?(r=(a-s)/n,c=r>1?r:1,i.choiceList.scrollTop=s+c,s<a&&(o=!0)):(r=(s-a)/n,c=r>1?r:1,i.choiceList.scrollTop=s-c,s>a&&(o=!0)),o&&requestAnimationFrame(function(i){e(i,a,t)})};requestAnimationFrame(function(e){c(e,a,t)})}}},{key:"_highlightChoice",value:function(e){var t=this,i=Array.from(this.dropdown.querySelectorAll("[data-choice-selectable]"));if(i&&i.length){var n=Array.from(this.dropdown.querySelectorAll("."+this.config.classNames.highlightedState));if(n.forEach(function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")}),e)e.classList.add(this.config.classNames.highlightedState),this.highlightPosition=i.indexOf(e);else{var s=void 0;s=i.length>this.highlightPosition?i[this.highlightPosition]:i[i.length-1],s||(s=i[0]),s.classList.add(this.config.classNames.highlightedState),s.setAttribute("aria-selected","true")}}}},{key:"_addItem",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,s=(0,p.isType)("String",e)?e.trim():e,o=this.store.getItems(),r=t||s,a=parseInt(i,10)||-1,c=n>=0?this.store.getGroupById(n):null,l=o?o.length+1:1;return this.config.prependValue&&(s=this.config.prependValue+s.toString()),this.config.appendValue&&(s+=this.config.appendValue.toString()),this.store.dispatch((0,d.addItem)(s,r,l,a,n)),"select-one"===this.passedElement.type&&this.removeActiveItems(l),c&&c.value?(0,p.triggerEvent)(this.passedElement,"addItem",{id:l,value:s,label:r,groupValue:c.value}):(0,p.triggerEvent)(this.passedElement,"addItem",{id:l,value:s,label:r}),this}},{key:"_removeItem",value:function(e){if(!e||!(0,p.isType)("Object",e))return void console.error("removeItem: No item object was passed to be removed");var t=e.id,i=e.value,n=e.label,s=e.choiceId,o=e.groupId,r=o>=0?this.store.getGroupById(o):null;return this.store.dispatch((0,d.removeItem)(t,s)),r&&r.value?(0,p.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n,groupValue:r.value}):(0,p.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n}),this}},{key:"_addChoice",value:function(e,t,i,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;if("undefined"!=typeof i&&null!==i){var o=this.store.getChoices(),r=n||i,a=o?o.length+1:1;this.store.dispatch((0,d.addChoice)(i,r,a,s,t)),e&&this._addItem(i,r,a)}}},{key:"_clearChoices",value:function(){this.store.dispatch((0,d.clearChoices)())}},{key:"_addGroup",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"label",o=(0,p.isType)("Object",e)?e.choices:Array.from(e.getElementsByTagName("OPTION")),r=t?t:Math.floor((new Date).valueOf()*Math.random()),a=!!e.disabled&&e.disabled;o?(this.store.dispatch((0,d.addGroup)(e.label,r,!0,a)),o.forEach(function(e){var t=e.disabled||e.parentNode&&e.parentNode.disabled||!1,o=!!e.selected&&e.selected,a=void 0;a=(0,p.isType)("Object",e)?e[s]||e[n]:e.innerHTML,i._addChoice(o,t,e[n],a,r)})):this.store.dispatch((0,d.addGroup)(e.label,e.id,!1,e.disabled))}},{key:"_getTemplate",value:function(e){if(e){for(var t=this.config.templates,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return t[e].apply(t,n)}}},{key:"_createTemplates",value:function(){var e=this,t=this.config.classNames,i={containerOuter:function(i){return(0,p.strToEl)('\n          <div class="'+t.containerOuter+'" data-type="'+e.passedElement.type+'" '+("select-one"===e.passedElement.type?'tabindex="0"':"")+' aria-haspopup="true" aria-expanded="false" dir="'+i+'"></div>\n        ')},containerInner:function(){return(0,p.strToEl)('\n          <div class="'+t.containerInner+'"></div>\n        ')},itemList:function(){return(0,p.strToEl)('\n          <div class="'+t.list+" "+("select-one"===e.passedElement.type?t.listSingle:t.listItems)+'"></div>\n        ')},placeholder:function(e){return(0,p.strToEl)('\n          <div class="'+t.placeholder+'">'+e+"</div>\n        ")},item:function(i){return e.config.removeItemButton?(0,
p.strToEl)('\n            <div class="'+t.item+" "+(i.highlighted?t.highlightedState:"")+" "+(i.disabled?"":t.itemSelectable)+'" data-item data-id="'+i.id+'" data-value="'+i.value+'" '+(i.active?'aria-selected="true"':"")+" "+(i.disabled?'aria-disabled="true"':"")+" data-deletable>\n            "+i.label+'<button type="button" class="'+t.button+'" data-button>Remove item</button>\n            </div>\n          '):(0,p.strToEl)('\n          <div class="'+t.item+" "+(i.highlighted?t.highlightedState:t.itemSelectable)+'"  data-item data-id="'+i.id+'" data-value="'+i.value+'" '+(i.active?'aria-selected="true"':"")+" "+(i.disabled?'aria-disabled="true"':"")+">\n            "+i.label+"\n          </div>\n        ")},choiceList:function(){return(0,p.strToEl)('\n          <div class="'+t.list+'" dir="ltr" role="listbox" '+("select-one"!==e.passedElement.type?'aria-multiselectable="true"':"")+"></div>\n        ")},choiceGroup:function(e){return(0,p.strToEl)('\n          <div class="'+t.group+" "+(e.disabled?t.itemDisabled:"")+'" data-group data-id="'+e.id+'" data-value="'+e.value+'" role="group" '+(e.disabled?'aria-disabled="true"':"")+'>\n            <div class="'+t.groupHeading+'">'+e.value+"</div>\n          </div>\n        ")},choice:function(i){return(0,p.strToEl)('\n          <div class="'+t.item+" "+t.itemChoice+" "+(i.disabled?t.itemDisabled:t.itemSelectable)+'" data-select-text="'+e.config.itemSelectText+'" data-choice '+(i.disabled?'data-choice-disabled aria-disabled="true"':"data-choice-selectable")+' data-id="'+i.id+'" data-value="'+i.value+'" '+(i.groupId>0?'role="treeitem"':'role="option"')+">\n            "+i.label+"\n          </div>\n        ")},input:function(){return(0,p.strToEl)('\n          <input type="text" class="'+t.input+" "+t.inputCloned+'" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list">\n        ')},dropdown:function(){return(0,p.strToEl)('\n          <div class="'+t.list+" "+t.listDropdown+'" aria-expanded="false"></div>\n        ')},notice:function(e){return(0,p.strToEl)('\n          <div class="'+t.item+" "+t.itemChoice+'">'+e+"</div>\n        ")},option:function(e){return(0,p.strToEl)('\n          <option value="'+e.value+'" selected>'+e.label+"</option>\n        ")}},n=this.config.callbackOnCreateTemplates,s={};n&&(0,p.isType)("Function",n)&&(s=n.call(this,p.strToEl)),this.config.templates=(0,p.extend)(i,s)}},{key:"_createInput",value:function(){var e=this,t=this.passedElement.getAttribute("dir")||"ltr",i=this._getTemplate("containerOuter",t),n=this._getTemplate("containerInner"),s=this._getTemplate("itemList"),o=this._getTemplate("choiceList"),r=this._getTemplate("input"),a=this._getTemplate("dropdown"),c=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));if(this.containerOuter=i,this.containerInner=n,this.input=r,this.choiceList=o,this.itemList=s,this.dropdown=a,this.passedElement.classList.add(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.tabIndex="-1",this.passedElement.setAttribute("style","display:none;"),this.passedElement.setAttribute("aria-hidden","true"),this.passedElement.setAttribute("data-choice","active"),(0,p.wrap)(this.passedElement,n),(0,p.wrap)(n,i),c&&(r.placeholder=c,"select-one"!==this.passedElement.type&&(r.style.width=(0,p.getWidthOfInput)(r))),this.config.addItems||this.disable(),i.appendChild(n),i.appendChild(a),n.appendChild(s),"text"!==this.passedElement.type&&a.appendChild(o),"select-multiple"===this.passedElement.type||"text"===this.passedElement.type?n.appendChild(r):this.canSearch&&a.insertBefore(r,a.firstChild),"select-multiple"===this.passedElement.type||"select-one"===this.passedElement.type){var l=Array.from(this.passedElement.getElementsByTagName("OPTGROUP"));if(this.highlightPosition=0,this.isSearching=!1,l&&l.length)l.forEach(function(t){e._addGroup(t,t.id||null)});else{var h=Array.from(this.passedElement.options),u=this.config.sortFilter,d=this.presetChoices;h.forEach(function(e){d.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:e.disabled||e.parentNode.disabled})}),this.config.shouldSort&&d.sort(u);var f=d.some(function(e){return e.selected===!0});d.forEach(function(t,i){var n=!!t.disabled&&t.disabled,s=!!t.selected&&t.selected;"select-one"===e.passedElement.type?f||!f&&i>0?e._addChoice(s,n,t.value,t.label):e._addChoice(!0,!1,t.value,t.label):e._addChoice(s,n,t.value,t.label)})}}else this.isTextElement&&this.presetItems.forEach(function(t){var i=(0,p.getType)(t);if("Object"===i){if(!t.value)return;e._addItem(t.value,t.label,t.id)}else"String"===i&&e._addItem(t)})}}]),e}();e.exports=f},function(e,t,i){!function(t){"use strict";function i(){console.log.apply(console,arguments)}function n(e,t){var i;this.list=e,this.options=t=t||{};for(i in a)a.hasOwnProperty(i)&&("boolean"==typeof a[i]?this.options[i]=i in t?t[i]:a[i]:this.options[i]=t[i]||a[i])}function s(e,t,i){var n,r,a,c,l,h;if(t){if(a=t.indexOf("."),a!==-1?(n=t.slice(0,a),r=t.slice(a+1)):n=t,c=e[n],null!==c&&void 0!==c)if(r||"string"!=typeof c&&"number"!=typeof c)if(o(c))for(l=0,h=c.length;l<h;l++)s(c[l],r,i);else r&&s(c,r,i);else i.push(c)}else i.push(e);return i}function o(e){return"[object Array]"===Object.prototype.toString.call(e)}function r(e,t){t=t||{},this.options=t,this.options.location=t.location||r.defaultOptions.location,this.options.distance="distance"in t?t.distance:r.defaultOptions.distance,this.options.threshold="threshold"in t?t.threshold:r.defaultOptions.threshold,this.options.maxPatternLength=t.maxPatternLength||r.defaultOptions.maxPatternLength,this.pattern=t.caseSensitive?e:e.toLowerCase(),this.patternLen=e.length,this.patternLen<=this.options.maxPatternLength&&(this.matchmask=1<<this.patternLen-1,this.patternAlphabet=this._calculatePatternAlphabet())}var a={id:null,caseSensitive:!1,include:[],shouldSort:!0,searchFn:r,sortFn:function(e,t){return e.score-t.score},getFn:s,keys:[],verbose:!1,tokenize:!1,matchAllTokens:!1,tokenSeparator:/ +/g,minMatchCharLength:1,findAllMatches:!1};n.VERSION="2.6.0",n.prototype.set=function(e){return this.list=e,e},n.prototype.search=function(e){this.options.verbose&&i("\nSearch term:",e,"\n"),this.pattern=e,this.results=[],this.resultMap={},this._keyMap=null,this._prepareSearchers(),this._startSearch(),this._computeScore(),this._sort();var t=this._format();return t},n.prototype._prepareSearchers=function(){var e=this.options,t=this.pattern,i=e.searchFn,n=t.split(e.tokenSeparator),s=0,o=n.length;if(this.options.tokenize)for(this.tokenSearchers=[];s<o;s++)this.tokenSearchers.push(new i(n[s],e));this.fullSeacher=new i(t,e)},n.prototype._startSearch=function(){var e,t,i,n,s=this.options,o=s.getFn,r=this.list,a=r.length,c=this.options.keys,l=c.length,h=null;if("string"==typeof r[0])for(i=0;i<a;i++)this._analyze("",r[i],i,i);else for(this._keyMap={},i=0;i<a;i++)for(h=r[i],n=0;n<l;n++){if(e=c[n],"string"!=typeof e){if(t=1-e.weight||1,this._keyMap[e.name]={weight:t},e.weight<=0||e.weight>1)throw new Error("Key weight has to be > 0 and <= 1");e=e.name}else this._keyMap[e]={weight:1};this._analyze(e,o(h,e,[]),h,i)}},n.prototype._analyze=function(e,t,n,s){var r,a,c,l,h,u,d,p,f,v,m,g,y,b,E,_=this.options,I=!1;if(void 0!==t&&null!==t){a=[];var w=0;if("string"==typeof t){if(r=t.split(_.tokenSeparator),_.verbose&&i("---------\nKey:",e),this.options.tokenize){for(b=0;b<this.tokenSearchers.length;b++){for(p=this.tokenSearchers[b],_.verbose&&i("Pattern:",p.pattern),f=[],g=!1,E=0;E<r.length;E++){v=r[E],m=p.search(v);var S={};m.isMatch?(S[v]=m.score,I=!0,g=!0,a.push(m.score)):(S[v]=1,this.options.matchAllTokens||a.push(1)),f.push(S)}g&&w++,_.verbose&&i("Token scores:",f)}for(l=a[0],u=a.length,b=1;b<u;b++)l+=a[b];l/=u,_.verbose&&i("Token score average:",l)}d=this.fullSeacher.search(t),_.verbose&&i("Full text score:",d.score),h=d.score,void 0!==l&&(h=(h+l)/2),_.verbose&&i("Score average:",h),y=!this.options.tokenize||!this.options.matchAllTokens||w>=this.tokenSearchers.length,_.verbose&&i("Check Matches",y),(I||d.isMatch)&&y&&(c=this.resultMap[s],c?c.output.push({key:e,score:h,matchedIndices:d.matchedIndices}):(this.resultMap[s]={item:n,output:[{key:e,score:h,matchedIndices:d.matchedIndices}]},this.results.push(this.resultMap[s])))}else if(o(t))for(b=0;b<t.length;b++)this._analyze(e,t[b],n,s)}},n.prototype._computeScore=function(){var e,t,n,s,o,r,a,c,l,h=this._keyMap,u=this.results;for(this.options.verbose&&i("\n\nComputing score:\n"),e=0;e<u.length;e++){for(n=0,s=u[e].output,o=s.length,c=1,t=0;t<o;t++)r=s[t].score,a=h?h[s[t].key].weight:1,l=r*a,1!==a?c=Math.min(c,l):(n+=l,s[t].nScore=l);1===c?u[e].score=n/o:u[e].score=c,this.options.verbose&&i(u[e])}},n.prototype._sort=function(){var e=this.options;e.shouldSort&&(e.verbose&&i("\n\nSorting...."),this.results.sort(e.sortFn))},n.prototype._format=function(){var e,t,n,s,o,r=this.options,a=r.getFn,c=[],l=this.results,h=r.include;for(r.verbose&&i("\n\nOutput:\n\n",l),s=r.id?function(e){l[e].item=a(l[e].item,r.id,[])[0]}:function(){},o=function(e){var t,i,n,s,o,r=l[e];if(h.length>0){if(t={item:r.item},h.indexOf("matches")!==-1)for(n=r.output,t.matches=[],i=0;i<n.length;i++)s=n[i],o={indices:s.matchedIndices},s.key&&(o.key=s.key),t.matches.push(o);h.indexOf("score")!==-1&&(t.score=l[e].score)}else t=r.item;return t},t=0,n=l.length;t<n;t++)s(t),e=o(t),c.push(e);return c},r.defaultOptions={location:0,distance:100,threshold:.6,maxPatternLength:32},r.prototype._calculatePatternAlphabet=function(){var e={},t=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]|=1<<this.pattern.length-t-1;return e},r.prototype._bitapScore=function(e,t){var i=e/this.patternLen,n=Math.abs(this.options.location-t);return this.options.distance?i+n/this.options.distance:n?1:i},r.prototype.search=function(e){var t,i,n,s,o,r,a,c,l,h,u,d,p,f,v,m,g,y,b,E,_,I,w,S=this.options;if(e=S.caseSensitive?e:e.toLowerCase(),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};if(this.patternLen>S.maxPatternLength){if(y=e.match(new RegExp(this.pattern.replace(S.tokenSeparator,"|"))),b=!!y)for(_=[],t=0,I=y.length;t<I;t++)w=y[t],_.push([e.indexOf(w),w.length-1]);return{isMatch:b,score:b?.5:1,matchedIndices:_}}for(s=S.findAllMatches,o=S.location,n=e.length,r=S.threshold,a=e.indexOf(this.pattern,o),E=[],t=0;t<n;t++)E[t]=0;for(a!=-1&&(r=Math.min(this._bitapScore(0,a),r),a=e.lastIndexOf(this.pattern,o+this.patternLen),a!=-1&&(r=Math.min(this._bitapScore(0,a),r))),a=-1,m=1,g=[],h=this.patternLen+n,t=0;t<this.patternLen;t++){for(c=0,l=h;c<l;)this._bitapScore(t,o+l)<=r?c=l:h=l,l=Math.floor((h-c)/2+c);for(h=l,u=Math.max(1,o-l+1),d=s?n:Math.min(o+l,n)+this.patternLen,p=Array(d+2),p[d+1]=(1<<t)-1,i=d;i>=u;i--)if(v=this.patternAlphabet[e.charAt(i-1)],v&&(E[i-1]=1),0===t?p[i]=(p[i+1]<<1|1)&v:p[i]=(p[i+1]<<1|1)&v|((f[i+1]|f[i])<<1|1)|f[i+1],p[i]&this.matchmask&&(m=this._bitapScore(t,i-1),m<=r)){if(r=m,a=i-1,g.push(a),!(a>o))break;u=Math.max(1,2*o-a)}if(this._bitapScore(t+1,o)>r)break;f=p}return _=this._getMatchedIndices(E),{isMatch:a>=0,score:0===m?.001:m,matchedIndices:_}},r.prototype._getMatchedIndices=function(e){for(var t,i=[],n=-1,s=-1,o=0,r=e.length;o<r;o++)t=e[o],t&&n===-1?n=o:t||n===-1||(s=o-1,s-n+1>=this.options.minMatchCharLength&&i.push([n,s]),n=-1);return e[o-1]&&o-1-n+1>=this.options.minMatchCharLength&&i.push([n,o-1]),i},e.exports=n}(this)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=i(4),a=i(25),c=n(a),l=function(){function e(){s(this,e),this.store=(0,r.createStore)(c.default,window.devToolsExtension?window.devToolsExtension():void 0)}return o(e,[{key:"getState",value:function(){return this.store.getState()}},{key:"dispatch",value:function(e){this.store.dispatch(e)}},{key:"subscribe",value:function(e){this.store.subscribe(e)}},{key:"getItems",value:function(){var e=this.store.getState();return e.items}},{key:"getItemsFilteredByActive",value:function(){var e=this.getItems(),t=e.filter(function(e){return e.active===!0},[]);return t}},{key:"getItemsReducedToValues",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getItems(),t=e.reduce(function(e,t){return e.push(t.value),e},[]);return t}},{key:"getChoices",value:function(){var e=this.store.getState();return e.choices}},{key:"getChoicesFilteredByActive",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.active===!0},[]);return t}},{key:"getChoicesFilteredBySelectable",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.disabled!==!0},[]);return t}},{key:"getChoiceById",value:function(e){if(e){var t=this.getChoicesFilteredByActive(),i=t.find(function(t){return t.id===parseInt(e,10)});return i}return!1}},{key:"getGroups",value:function(){var e=this.store.getState();return e.groups}},{key:"getGroupsFilteredByActive",value:function(){var e=this.getGroups(),t=this.getChoices(),i=e.filter(function(e){var i=e.active===!0&&e.disabled===!1,n=t.some(function(e){return e.active===!0&&e.disabled===!1});return i&&n},[]);return i}},{key:"getGroupById",value:function(e){var t=this.getGroups(),i=t.find(function(t){return t.id===e});return i}}]),e}();t.default=l,e.exports=l},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var s=i(5),o=n(s),r=i(20),a=n(r),c=i(22),l=n(c),h=i(23),u=n(h),d=i(24),p=n(d),f=i(21);n(f);t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=l.default,t.applyMiddleware=u.default,t.compose=p.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){function n(){g===m&&(g=m.slice())}function o(){return v}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return n(),g.push(e),function(){if(t){t=!1,n();var i=g.indexOf(e);g.splice(i,1)}}}function h(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,v=f(v,e)}finally{y=!1}for(var t=m=g,i=0;i<t.length;i++)t[i]();return e}function u(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");f=e,h({type:l.INIT})}function d(){var e,t=a;return e={subscribe:function(e){function i(){e.next&&e.next(o())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");i();var n=t(i);return{unsubscribe:n}}},e[c.default]=function(){return this},e}var p;if("function"==typeof t&&"undefined"==typeof i&&(i=t,t=void 0),"undefined"!=typeof i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var f=e,v=t,m=[],g=m,y=!1;return h({type:l.INIT}),p={dispatch:h,subscribe:a,getState:o,replaceReducer:u},p[c.default]=d,p}t.__esModule=!0,t.ActionTypes=void 0,t.default=s;var o=i(6),r=n(o),a=i(16),c=n(a),l=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,i){function n(e){if(!r(e)||s(e)!=a)return!1;var t=o(e);if(null===t)return!0;var i=u.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&h.call(i)==d}var s=i(7),o=i(13),r=i(15),a="[object Object]",c=Function.prototype,l=Object.prototype,h=c.toString,u=l.hasOwnProperty,d=h.call(Object);e.exports=n},function(e,t,i){function n(e){return null==e?void 0===e?c:a:l&&l in Object(e)?o(e):r(e)}var s=i(8),o=i(11),r=i(12),a="[object Null]",c="[object Undefined]",l=s?s.toStringTag:void 0;e.exports=n},function(e,t,i){var n=i(9),s=n.Symbol;e.exports=s},function(e,t,i){var n=i(10),s="object"==typeof self&&self&&self.Object===Object&&self,o=n||s||Function("return this")();e.exports=o},function(e,t){(function(t){var i="object"==typeof t&&t&&t.Object===Object&&t;e.exports=i}).call(t,function(){return this}())},function(e,t,i){function n(e){var t=r.call(e,c),i=e[c];try{e[c]=void 0;var n=!0}catch(e){}var s=a.call(e);return n&&(t?e[c]=i:delete e[c]),s}var s=i(8),o=Object.prototype,r=o.hasOwnProperty,a=o.toString,c=s?s.toStringTag:void 0;e.exports=n},function(e,t){function i(e){return s.call(e)}var n=Object.prototype,s=n.toString;e.exports=i},function(e,t,i){var n=i(14),s=n(Object.getPrototypeOf,Object);e.exports=s},function(e,t){function i(e,t){return function(i){return e(t(i))}}e.exports=i},function(e,t){function i(e){return null!=e&&"object"==typeof e}e.exports=i},function(e,t,i){e.exports=i(17)},function(e,t,i){(function(e,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r=i(19),a=s(r);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:n;var c=(0,a.default)(o);t.default=c}).call(t,function(){return this}(),i(18)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){"use strict";function i(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var i=t&&t.type,n=i&&'"'+i.toString()+'"'||"an action";return"Given action "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var i=e[t],n=i(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof n)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var s="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof i(void 0,{type:s}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function r(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];"function"==typeof e[r]&&(i[r]=e[r])}var a,c=Object.keys(i);try{o(i)}catch(e){a=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var n=!1,o={},r=0;r<c.length;r++){var l=c[r],h=i[l],u=e[l],d=h(u,t);if("undefined"==typeof d){var p=s(l,t);throw new Error(p)}o[l]=d,n=n||d!==u}return n?o:e}}t.__esModule=!0,t.default=r;var a=i(5),c=i(6),l=(n(c),i(21));n(l)},function(e,t){"use strict";function i(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}t.__esModule=!0,t.default=i},function(e,t){"use strict";function i(e,t){return function(){return t(e.apply(void 0,arguments))}}function n(e,t){if("function"==typeof e)return i(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),s={},o=0;o<n.length;o++){var r=n[o],a=e[r];"function"==typeof a&&(s[r]=i(a,t))}return s}t.__esModule=!0,t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(i,n,s){var r=e(i,n,s),c=r.dispatch,l=[],h={getState:r.getState,dispatch:function(e){return c(e)}};return l=t.map(function(e){return e(h)}),c=a.default.apply(void 0,l)(r.dispatch),o({},r,{dispatch:c})}}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=s;var r=i(24),a=n(r)},function(e,t){"use strict";function i(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var n=t[t.length-1],s=t.slice(0,-1);return function(){return s.reduceRight(function(e,t){return t(e)},n.apply(void 0,arguments))}}t.__esModule=!0,t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(4),o=i(26),r=n(o),a=i(27),c=n(a),l=i(28),h=n(l),u=(0,s.combineReducers)({items:r.default,groups:c.default,choices:h.default}),d=function(e,t){var i=e;return"CLEAR_ALL"===t.type&&(i=void 0),u(i,t)};t.default=d},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_ITEM":var n=[].concat(i(e),[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1}]);return n.map(function(e){return e.highlighted&&(e.highlighted=!1),e});case"REMOVE_ITEM":return e.map(function(e){return e.id===t.id&&(e.active=!1),e});case"HIGHLIGHT_ITEM":return e.map(function(e){return e.id===t.id&&(e.highlighted=t.highlighted),e});default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_GROUP":return[].concat(i(e),[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return e.groups=[];default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_CHOICE":return[].concat(i(e),[{id:t.id,groupId:t.groupId,value:t.value,label:t.label,disabled:t.disabled,selected:!1,active:!0,score:9999}]);case"ADD_ITEM":var n=e;return t.activateOptions&&(n=e.map(function(e){return e.active=t.active,e})),t.choiceId>-1&&(n=e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!0),e})),n;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!1),e}):e;case"FILTER_CHOICES":var s=t.results,o=e.map(function(e){return e.active=s.some(function(t){return t.item.id===e.id&&(e.score=t.score,!0)}),e});return o;case"ACTIVATE_CHOICES":return e.map(function(e){return e.active=t.active,e});case"CLEAR_CHOICES":return e.choices=[];default:return e}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addItem=function(e,t,i,n,s){return{type:"ADD_ITEM",value:e,label:t,id:i,choiceId:n,groupId:s}},t.removeItem=function(e,t){return{type:"REMOVE_ITEM",id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:"HIGHLIGHT_ITEM",id:e,highlighted:t}},t.addChoice=function(e,t,i,n,s){return{type:"ADD_CHOICE",value:e,label:t,id:i,groupId:n,disabled:s}},t.filterChoices=function(e){return{type:"FILTER_CHOICES",results:e}},t.activateChoices=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:"ACTIVATE_CHOICES",active:e}},t.clearChoices=function(){return{type:"CLEAR_CHOICES"}},t.addGroup=function(e,t,i,n){return{type:"ADD_GROUP",value:e,id:t,active:i,disabled:n}},t.clearAll=function(){return{type:"CLEAR_ALL"}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(t.capitalise=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)}),s=t.isType=function(e,t){var i=n(t);return void 0!==t&&null!==t&&i===e},o=(t.isNode=function(e){return"object"===("undefined"==typeof Node?"undefined":i(Node))?e instanceof Node:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},t.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":i(HTMLElement))?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},t.extend=function e(){for(var t={},i=arguments.length,n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s("Object",i[n])?t[n]=e(!0,t[n],i[n]):t[n]=i[n])},o=0;o<i;o++){var r=arguments[o];s("Object",r)&&n(r)}return t},t.whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]},t.whichAnimationEvent=function(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}),r=(t.getParentsUntil=function(e,t,i){for(var n=[];e&&e!==document;e=e.parentNode){if(t){var s=t.charAt(0);if("."===s&&e.classList.contains(t.substr(1)))break;if("#"===s&&e.id===t.substr(1))break;if("["===s&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}if(i){var o=i.charAt(0);"."===o&&e.classList.contains(i.substr(1))&&n.push(e),"#"===o&&e.id===i.substr(1)&&n.push(e),"["===o&&e.hasAttribute(i.substr(1,i.length-1))&&n.push(e),e.tagName.toLowerCase()===i&&n.push(e)}else n.push(e)}return 0===n.length?null:n},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.getSiblings=function(e){for(var t=[],i=e.parentNode.firstChild;i;i=i.nextSibling)1===i.nodeType&&i!==e&&t.push(i);return t},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.findAncestorByAttrName=function(e,t){for(var i=e;i;){if(i.hasAttribute(t))return i;i=i.parentElement}return null},t.debounce=function(e,t,i){var n;return function(){var s=this,o=arguments,r=function(){n=null,i||e.apply(s,o)},a=i&&!n;clearTimeout(n),n=setTimeout(r,t),a&&e.apply(s,o)}},t.getElemDistance=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},t.getElementOffset=function(e,t){var i=t;return i>1&&(i=1),i>0&&(i=0),Math.max(e.offsetHeight*i)},t.getAdjacentEl=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e&&t){var n=e.parentNode.parentNode,s=Array.from(n.querySelectorAll(t)),o=s.indexOf(e),r=i>0?1:-1;return s[o+r]}},t.getScrollPosition=function(e){return"bottom"===e?Math.max((window.scrollY||window.pageYOffset)+(window.innerHeight||document.documentElement.clientHeight)):window.scrollY||window.pageYOffset},t.isInView=function(e,t,i){return this.getScrollPosition(t)>this.getElemDistance(e)+this.getElementOffset(e,i)},t.isScrolledIntoView=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){var n=void 0;return n=i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop}},t.stripHTML=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.addAnimation=function(e,t){var i=o(),n=function n(){e.classList.remove(t),e.removeEventListener(i,n,!1)};e.classList.add(t),e.addEventListener(i,n,!1)},t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.strToEl=function(){var e=document.createElement("div");return function(t){var i;for(e.innerHTML=t,i=e.children[0];e.firstChild;)e.removeChild(e.firstChild);return i}}());t.getWidthOfInput=function(e){var t=e.value||e.placeholder,i=e.offsetWidth;if(t){var n=r("<span>"+t+"</span>");n.style.position="absolute",n.style.padding="0",n.style.top="-9999px",n.style.left="-9999px",n.style.width="auto",n.style.whiteSpace="pre",document.body.appendChild(n),t&&n.offsetWidth!==e.offsetWidth&&(i=n.offsetWidth+4),document.body.removeChild(n)}return i+"px"},t.sortByAlpha=function(e,t){var i=(e.label||e.value).toLowerCase(),n=(t.label||t.value).toLowerCase();return i<n?-1:i>n?1:0},t.sortByScore=function(e,t){return e.score-t.score},t.triggerEvent=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)}},function(e,t){"use strict";!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},i=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},n=Math.pow(2,53)-1,s=function(e){var t=i(e);return Math.min(Math.max(t,0),n)};return function(e){var i=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,r=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof r){if(!t(r))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var a,c=s(n.length),l=t(i)?Object(new i(c)):new Array(c),h=0;h<c;)a=n[h],r?l[h]="undefined"==typeof o?r(a,h):r.call(o,a,h):l[h]=a,h+=1;return l.length=c,l}}()),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,i=Object(this),n=i.length>>>0,s=arguments[1],o=0;o<n;o++)if(t=i[o],e.call(s,t,o,i))return t}),e.prototype=window.Event.prototype,window.CustomEvent=e}()}])});

// mask input
(function(a){a.MaskedInput=function(f){if(!f||!f.elm||!f.format){return null}if(!(this instanceof a.MaskedInput)){return new a.MaskedInput(f)}var o=this,d=f.elm,s=f.format,i=f.allowed||"0123456789",h=f.allowedfx||function(){return true},p=f.separator||"/:-",n=f.typeon||"_YMDhms",c=f.onbadkey||function(){},q=f.onfilled||function(){},w=f.badkeywait||0,A=f.hasOwnProperty("preserve")?!!f.preserve:true,l=true,y=false,t=s,j=(function(){if(window.addEventListener){return function(E,C,D,B){E.addEventListener(C,D,(B===undefined)?false:B)}}if(window.attachEvent){return function(D,B,C){D.attachEvent("on"+B,C)}}return function(D,B,C){D["on"+B]=C}}()),u=function(){for(var B=d.value.length-1;B>=0;B--){for(var D=0,C=n.length;D<C;D++){if(d.value[B]===n[D]){return false}}}return true},x=function(C){try{C.focus();if(C.selectionStart>=0){return C.selectionStart}if(document.selection){var B=document.selection.createRange();return -B.moveStart("character",-C.value.length)}return -1}catch(D){return -1}},b=function(C,E){try{if(C.selectionStart){C.focus();C.setSelectionRange(E,E)}else{if(C.createTextRange){var B=C.createTextRange();B.move("character",E);B.select()}}}catch(D){return false}return true},m=function(D){D=D||window.event;var C="",E=D.which,B=D.type;if(E===undefined||E===null){E=D.keyCode}if(E===undefined||E===null){return""}switch(E){case 8:C="bksp";break;case 46:C=(B==="keydown")?"del":".";break;case 16:C="shift";break;case 0:case 9:case 13:C="etc";break;case 37:case 38:case 39:case 40:C=(!D.shiftKey&&(D.charCode!==39&&D.charCode!==undefined))?"etc":String.fromCharCode(E);break;default:C=String.fromCharCode(E);break}return C},v=function(B,C){if(B.preventDefault){B.preventDefault()}B.returnValue=C||false},k=function(B){var D=x(d),F=d.value,E="",C=true;switch(C){case (i.indexOf(B)!==-1):D=D+1;if(D>s.length){return false}while(p.indexOf(F.charAt(D-1))!==-1&&D<=s.length){D=D+1}if(!h(B,D)){c(B);return false}E=F.substr(0,D-1)+B+F.substr(D);if(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1){D=D+1}break;case (B==="bksp"):D=D-1;if(D<0){return false}while(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1&&D>1){D=D-1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);break;case (B==="del"):if(D>=F.length){return false}while(p.indexOf(F.charAt(D))!==-1&&F.charAt(D)!==""){D=D+1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);D=D+1;break;case (B==="etc"):return true;default:return false}d.value="";d.value=E;b(d,D);return false},g=function(B){if(i.indexOf(B)===-1&&B!=="bksp"&&B!=="del"&&B!=="etc"){var C=x(d);y=true;c(B);setTimeout(function(){y=false;b(d,C)},w);return false}return true},z=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if((C.metaKey||C.ctrlKey)&&(B==="X"||B==="V")){v(C);return false}if(C.metaKey||C.ctrlKey){return true}if(d.value===""){d.value=s;b(d,0)}if(B==="bksp"||B==="del"){k(B);v(C);return false}return true},e=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if(B==="etc"||C.metaKey||C.ctrlKey||C.altKey){return true}if(B!=="bksp"&&B!=="del"&&B!=="shift"){if(!g(B)){v(C);return false}if(k(B)){if(u()){q()}v(C,true);return true}if(u()){q()}v(C);return false}return false},r=function(){if(!d.tagName||(d.tagName.toUpperCase()!=="INPUT"&&d.tagName.toUpperCase()!=="TEXTAREA")){return null}if(!A||d.value===""){d.value=s}j(d,"keydown",function(B){z(B)});j(d,"keypress",function(B){e(B)});j(d,"focus",function(){t=d.value});j(d,"blur",function(){if(d.value!==t&&d.onchange){d.onchange()}});return o};o.resetField=function(){d.value=s};o.setAllowed=function(B){i=B;o.resetField()};o.setFormat=function(B){s=B;o.resetField()};o.setSeparator=function(B){p=B;o.resetField()};o.setTypeon=function(B){n=B;o.resetField()};o.setEnabled=function(B){l=B};return r()}}(window));

// Zenscroll
!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";if(!window||!document)return{};var t=function(t,e,n){e=e||999,n||0===n||(n=9);var o,i=document.documentElement,r=function(){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t?t:document.body)["scroll-behavior"]},c=function(){return t?t.scrollTop:window.scrollY||i.scrollTop},u=function(){return t?Math.min(t.offsetHeight,window.innerHeight):window.innerHeight||i.clientHeight},f=function(e){return t?e.offsetTop-t.offsetTop:e.getBoundingClientRect().top+c()-i.offsetTop},l=function(){clearTimeout(o),o=0},a=function(n,f,a){if(l(),r())(t||window).scrollTo(0,n),a&&a();else{var s=c(),d=Math.max(n,0)-s;f=f||Math.min(Math.abs(d),e);var m=(new Date).getTime();!function h(){o=setTimeout(function(){var e=Math.min(((new Date).getTime()-m)/f,1),n=Math.max(Math.floor(s+d*(.5>e?2*e*e:e*(4-2*e)-1)),0);t?t.scrollTop=n:window.scrollTo(0,n),1>e&&u()+n<(t||i).scrollHeight?h():(setTimeout(l,99),a&&a())},9)}()}},s=function(t,e,o){a(f(t)-n,e,o)},d=function(t,e,o){var i=t.getBoundingClientRect().height+2*n,r=u(),l=f(t),d=l+i-n,m=c();n>l-m||i>r?s(t,e,o):0>m+r-d?a(d-r,e,o):o&&o()},m=function(t,e,n,o){a(Math.max(f(t)-u()/2+(n||t.getBoundingClientRect().height/2),0),e,o)},h=function(t,o){t&&(e=t),(0===o||o)&&(n=o)};return{setup:h,to:s,toY:a,intoView:d,center:m,stop:l,moving:function(){return!!o}}},e=t();if("addEventListener"in window&&"smooth"!==document.body.style.scrollBehavior&&!window.noZensmooth){var n=function(t){try{history.replaceState({},"",window.location.href.split("#")[0]+t)}catch(e){}};window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=o.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),e.toY(0),n("");else{var r=o.hash.substring(1),c=document.getElementById(r);c&&(t.preventDefault(),e.to(c),n("#"+r))}}},!1)}return{createScroller:t,setup:e.setup,to:e.to,toY:e.toY,intoView:e.intoView,center:e.center,stop:e.stop,moving:e.moving}});

function findAncestor (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}

(function() {

	// lightbox

	var lb = document.querySelectorAll('.lightbox');
	for (var j = 0; j < lb.length; j++) {
		lb[j].addEventListener('click', function(e){
			if ( e.target.classList.contains('lightbox') ) {
				this.classList.remove('active_mod');
				enableScroll();
			}
		});

	}

	// cars form


	if(document.querySelector('#car_brand')) {
		var carBrandSelect = new Choices('#car_brand', {
			search: true,
			shouldSort: false,
			sortFields: ['label'],
			placeholder: true,
			loadingText: 'Загрузка...',
			noResultsText: 'Результатов не найдено',
			noChoicesText: 'В форме отсутствуют варианты выбора',
			itemSelectText: 'Нажмите для выбора'
		  });

		carBrandSelect.passedElement.addEventListener('change', function(e) {
			if(e.detail.value != undefined) {
				carModelSelect.enable();
			}
		});

		var carModelSelect = new Choices('#car_model', {
			search: true,
			shouldSort: false,
			sortFields: ['label'],
			placeholder: true,
			loadingText: 'Загрузка...',
			noResultsText: 'Результатов не найдено',
			noChoicesText: 'В форме отсутствуют варианты выбора',
			itemSelectText: 'Нажмите для выбора'
		  });

		carModelSelect.disable();

		carModelSelect.passedElement.addEventListener('change', function(e) {
			if(e.detail.value != undefined) {
				carYearSelect.enable();
			}
		});

		var carYearSelect = new Choices('#car_year', {
			search: true,
			shouldSort: false,
			sortFields: ['label'],
			placeholder: true,
			loadingText: 'Загрузка...',
			noResultsText: 'Результатов не найдено',
			noChoicesText: 'В форме отсутствуют варианты выбора',
			itemSelectText: 'Нажмите для выбора'
		  });

		carYearSelect.disable();

		carYearSelect.passedElement.addEventListener('change', function(e) {
			if(e.detail.value != undefined) {
				btnForward.classList.add('active_mod');
				zenscroll.toY((getTopPos(btnForward) - 240), 1500);
			}

		});
		

	}

	if(document.querySelector('#customer_service_center')) {
		var custServCentSelect = new Choices('#customer_service_center', {
			search: true,
			shouldSort: false,
			sortFields: ['label'],
			placeholder: true,
			loadingText: 'Загрузка...',
			noResultsText: 'Результатов не найдено',
			noChoicesText: 'В форме отсутствуют варианты выбора',
			itemSelectText: 'Нажмите для выбора'
		  });

		custServCentSelect.passedElement.addEventListener('change', function(e) {
			if(e.detail.value != undefined) {
				document.querySelector('.form_block.calendar_mod').classList.add('active_mod');
				zenscroll.toY((getTopPos(document.querySelector('.form_block.calendar_mod')) - 80), 2000);
			}
		});
	}



	var reservationDate = document.querySelector('.date_reservation_list');

	if(reservationDate) {
		var sliderCalendar = new Swiper ('.date_reservation_outer', {
			paginationClickable: true,
			mousewheelControl: true,
			simulateTouch: false,
			nextButton: '.swiper_btn_next',
			prevButton: '.swiper_btn_prev',
			slidesPerView: 'auto'
		});
	}

	// window damage form -- 1-2 of 6

	var formBlockInsurance = document.querySelectorAll('.glass_form_l_block.insurance_mod'),
		btnForward = document.querySelector('.btn_forward'),
		hline_1 = document.querySelector('.headline.insurance_mod'),
		showModal = document.querySelector('#showModal'),
		modalContent = document.querySelector('#modalContent');

	if(formBlockInsurance) {
		for (var i = 0; i < formBlockInsurance.length; i++) {
			formBlockInsurance[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockInsurance.length; j++) {
						formBlockInsurance[j].classList.remove('active_mod');
					}
					this.classList.add('active_mod');
					document.querySelector('#formItem_damage_place').classList.remove('active_mod')
					document.querySelector('#formItem_damageNum').classList.remove('active_mod')
					document.querySelector('#formItem_distance').classList.remove('active_mod')
					document.querySelector('#formItem_damage_visibility').classList.remove('active_mod');
					document.querySelector('#formItem_ifFixed').classList.remove('active_mod');
					document.querySelector('#formItem_damage_size').classList.remove('active_mod');
					document.querySelector('#formItem_damage_sizeSplit').classList.remove('active_mod');

					infoMsg.classList.remove('active_mod');

					btnForward.classList.remove('active_mod');

					hline_1.classList.remove('checked_mod');

					for (var m = 0; m < formBlockDamagePlace.length; m++) {
						formBlockDamagePlace[m].classList.remove('active_mod');
					}

					hline_2_1.classList.remove('checked_mod');

					for (var q = 0; q < formBlockDamageNumber.length; q++) {
						formBlockDamageNumber[q].classList.remove('active_mod');
					}

					hline_2_3.classList.remove('checked_mod');
					for(var w = 0; w < ifRepairedBefore.length;w++)
						ifRepairedBefore[w].checked = false;

					hline_2_4.classList.remove('checked_mod');
					for (var e = 0; e < formBlockDamageDistance.length; e++) {
						formBlockDamageDistance[e].classList.remove('active_mod');
					}

					hline_2_5.classList.remove('checked_mod');
					for (var r = 0; r < formBlockDriverZone.length; r++) {
						formBlockDriverZone[r].classList.remove('active_mod');
					}

					hline_2_6.classList.remove('checked_mod');
					for (var t = 0; t < formBlockDamageSize.length; t++) {
						formBlockDamageSize[t].classList.remove('active_mod');
					}

					if(this.classList.contains('kasko_mod')) {
						modalContent.innerHTML = '<div class="modal_text">Нужно направление от страховой и тд. Предлагаем позвонить или ссылка на стандартную форму Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';
						showModal.classList.add('active_mod');
					}
					document.querySelector('#formItem_damage_place').classList.add('active_mod');
					zenscroll.toY((getTopPos(document.querySelector('#formItem_damage_place')) - 80), 2000);

					hline_1.classList.add('checked_mod');
				}
			})
		}
	}

	// window damage form -- 2-2 of 6

	var formBlockDamagePlace = document.querySelectorAll('.glass_form_l_block.damage_place_mod'),
		hline_2_1 = document.querySelector('.headline.damage_place');

	if(formBlockDamagePlace) {
		for (var i = 0; i < formBlockDamagePlace.length; i++) {
			formBlockDamagePlace[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockDamagePlace.length; j++) {
						formBlockDamagePlace[j].classList.remove('active_mod');
					}
					this.classList.add('active_mod');
					document.querySelector('#formItem_damageNum').classList.remove('active_mod')
					document.querySelector('#formItem_ifFixed').classList.remove('active_mod');
					document.querySelector('#formItem_distance').classList.remove('active_mod')
					document.querySelector('#formItem_damage_visibility').classList.remove('active_mod');
					document.querySelector('#formItem_damage_size').classList.remove('active_mod');
					document.querySelector('#formItem_damage_sizeSplit').classList.remove('active_mod');

					infoMsg.classList.remove('active_mod');

					btnForward.classList.remove('active_mod');

					hline_2_2.classList.remove('checked_mod');
					for (var q = 0; q < formBlockDamageNumber.length; q++) {
						formBlockDamageNumber[q].classList.remove('active_mod');
					}

					hline_2_3.classList.remove('checked_mod');
					for(var w = 0; w < ifRepairedBefore.length;w++)
						ifRepairedBefore[w].checked = false;

					hline_2_4.classList.remove('checked_mod');
					for (var e = 0; e < formBlockDamageDistance.length; e++) {
						formBlockDamageDistance[e].classList.remove('active_mod');
					}

					hline_2_5.classList.remove('checked_mod');
					for (var r = 0; r < formBlockDriverZone.length; r++) {
						formBlockDriverZone[r].classList.remove('active_mod');
					}

					hline_2_6.classList.remove('checked_mod');
					for (var t = 0; t < formBlockDamageSize.length; t++) {
						formBlockDamageSize[t].classList.remove('active_mod');
					}
					//
					if(this.classList.contains('proceed_mod')) {
						document.querySelector('#formItem_damageNum').classList.add('active_mod');
						zenscroll.toY((getTopPos(document.querySelector('#formItem_damageNum')) - 80), 2000);
					} else {
						modalContent.innerHTML = '<div class="modal_text">Необходима замена стекла бла бла бла. Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';
						showModal.classList.add('active_mod');
						//document.querySelector('#formItem_damageNum').classList.remove('active_mod');

					}
					hline_2_1.classList.add('checked_mod');
				}
			})
		}
	}

	var formBlockDamageNumber = document.querySelectorAll('.glass_form_l_block.damage_number_mod'),
		hline_2_2 = document.querySelector('.headline.damage_number');


	if(formBlockDamageNumber) {
		for (var i = 0; i < formBlockDamageNumber.length; i++) {
			formBlockDamageNumber[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockDamageNumber.length; j++) {
						formBlockDamageNumber[j].classList.remove('active_mod');
					}

					document.querySelector('#formItem_ifFixed').classList.remove('active_mod');
					document.querySelector('#formItem_distance').classList.remove('active_mod')
					document.querySelector('#formItem_damage_visibility').classList.remove('active_mod');
					document.querySelector('#formItem_damage_size').classList.remove('active_mod');
					document.querySelector('#formItem_damage_sizeSplit').classList.remove('active_mod');
					document.querySelector('#formItem_damage_distanceSplit').classList.remove('active_mod');


					infoMsg.classList.remove('active_mod');

					btnForward.classList.remove('active_mod');

					hline_2_3.classList.remove('checked_mod');
					for(var w = 0; w < ifRepairedBefore.length;w++)
						ifRepairedBefore[w].checked = false;

					hline_2_4.classList.remove('checked_mod');
					for (var e = 0; e < formBlockDamageDistance.length; e++) {
						formBlockDamageDistance[e].classList.remove('active_mod');
					}

					hline_2_5.classList.remove('checked_mod');
					for (var r = 0; r < formBlockDriverZone.length; r++) {
						formBlockDriverZone[r].classList.remove('active_mod');
					}

					hline_2_6.classList.remove('checked_mod');
					for (var t = 0; t < formBlockDamageSize.length; t++) {
						formBlockDamageSize[t].classList.remove('active_mod');
					}

					hline_2_7.classList.remove('checked_mod');
					for (var e = 0; e < formBlockSplitSize.length; e++) {
						formBlockSplitSize[e].classList.remove('active_mod');
					}

					hline_2_8.classList.remove('checked_mod');
					for (var j = 0; j < formBlockSplitDistance.length; j++) {
						formBlockSplitDistance[j].classList.remove('active_mod');
					}
					//
					this.classList.add('active_mod');
					if(this.classList.contains('split_mod')) {
						document.querySelector('#formItem_damage_size').classList.add('active_mod');
						zenscroll.toY((getTopPos(document.querySelector('#formItem_damage_size')) - 80), 2000);
					} else if (this.classList.contains('replace_mod')) {
						modalContent.innerHTML = '<div class="modal_text">Необходима замена стекла бла бла бла. Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';
						showModal.classList.add('active_mod');
					} else {
						document.querySelector('#formItem_damage_sizeSplit').classList.add('active_mod');
						zenscroll.toY((getTopPos(document.querySelector('#formItem_damage_sizeSplit')) - 80), 2000);
					}

					hline_2_2.classList.add('checked_mod');
				}
			})
		}
	}


	var formBlockSplitSize = document.querySelectorAll('.glass_form_l_block.split_size_mod'),
		hline_2_7 = document.querySelector('.headline.split_size_mod');


	if(formBlockSplitSize) {
		for (var i = 0; i < formBlockSplitSize.length; i++) {
			formBlockSplitSize[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockSplitSize.length; j++) {
						formBlockSplitSize[j].classList.remove('active_mod');
					}

					document.querySelector('#formItem_ifFixed').classList.remove('active_mod');
					document.querySelector('#formItem_distance').classList.remove('active_mod')
					document.querySelector('#formItem_damage_visibility').classList.remove('active_mod');
					document.querySelector('#formItem_damage_size').classList.remove('active_mod');
					document.querySelector('#formItem_damage_distanceSplit').classList.remove('active_mod');

					infoMsg.classList.remove('active_mod');

					btnForward.classList.remove('active_mod');

					hline_2_3.classList.remove('checked_mod');
					for(var w = 0; w < ifRepairedBefore.length;w++)
						ifRepairedBefore[w].checked = false;

					hline_2_4.classList.remove('checked_mod');
					for (var e = 0; e < formBlockDamageDistance.length; e++) {
						formBlockDamageDistance[e].classList.remove('active_mod');
					}

					hline_2_5.classList.remove('checked_mod');
					for (var r = 0; r < formBlockDriverZone.length; r++) {
						formBlockDriverZone[r].classList.remove('active_mod');
					}

					hline_2_6.classList.remove('checked_mod');
					for (var t = 0; t < formBlockDamageSize.length; t++) {
						formBlockDamageSize[t].classList.remove('active_mod');
					}

					hline_2_8.classList.remove('checked_mod');
					for (var j = 0; j < formBlockSplitDistance.length; j++) {
						formBlockSplitDistance[j].classList.remove('active_mod');
					}
					//
					this.classList.add('active_mod');
					if(this.classList.contains('size_sm_mod')) {
						document.querySelector('#formItem_damage_distanceSplit').classList.add('active_mod');
						zenscroll.toY((getTopPos(document.querySelector('#formItem_damage_distanceSplit')) - 80), 2000);
					} else if (this.classList.contains('size_lg_mod')) {
						modalContent.innerHTML = '<div class="modal_text">Необходима замена стекла бла бла бла. Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';
						showModal.classList.add('active_mod');
					}

					hline_2_7.classList.add('checked_mod');
				}
			})
		}
	}



	var formBlockSplitDistance = document.querySelectorAll('.glass_form_l_block.split_distance_mod'),
		hline_2_8 = document.querySelector('.headline.split_distance_mod');


	if(formBlockSplitDistance) {
		for (var i = 0; i < formBlockSplitDistance.length; i++) {
			formBlockSplitDistance[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockSplitDistance.length; j++) {
						formBlockSplitDistance[j].classList.remove('active_mod');
					}

					document.querySelector('#formItem_ifFixed').classList.remove('active_mod');
					document.querySelector('#formItem_distance').classList.remove('active_mod')
					document.querySelector('#formItem_damage_visibility').classList.remove('active_mod');
					document.querySelector('#formItem_damage_size').classList.remove('active_mod');

					btnForward.classList.remove('active_mod');

					hline_2_3.classList.remove('checked_mod');
					for(var w = 0; w < ifRepairedBefore.length;w++)
						ifRepairedBefore[w].checked = false;

					hline_2_4.classList.remove('checked_mod');
					for (var e = 0; e < formBlockDamageDistance.length; e++) {
						formBlockDamageDistance[e].classList.remove('active_mod');
					}

					hline_2_5.classList.remove('checked_mod');
					for (var r = 0; r < formBlockDriverZone.length; r++) {
						formBlockDriverZone[r].classList.remove('active_mod');
					}

					hline_2_6.classList.remove('checked_mod');
					for (var t = 0; t < formBlockDamageSize.length; t++) {
						formBlockDamageSize[t].classList.remove('active_mod');
					}

					infoMsg.classList.remove('active_mod');
					//
					this.classList.add('active_mod');

					if(this.classList.contains('less_5_mod')) {
						modalContent.innerHTML = '<div class="modal_text">Необходима замена стекла бла бла бла. Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';
						showModal.classList.add('active_mod');

					} else {
						
						infoMsg.innerHTML = '<div class="p_msg">Поздравляем, ваш скол ремонтопригоден. Ремонт скола займет <span class="bold">30 минут</span> и обойдется в <span class="bold">2990 рублей</span>.</div>'
						infoMsg.classList.add('active_mod');
						zenscroll.toY((getTopPos(infoMsg) - 80), 2000);

						btnForward.classList.add('active_mod');
					}

					hline_2_8.classList.add('checked_mod');

				}
			})
		}
	}



	var ifRepairedBefore = document.querySelectorAll('.if_repaired'),
		hline_2_3 = document.querySelector('.headline.repaired_before');

	for (var i = 0; i < ifRepairedBefore.length; i++) {
		ifRepairedBefore[i].addEventListener('click',function(){
			if(this.classList.contains('radioRepairedBefore')) {

				document.querySelector('#formItem_distance').classList.remove('active_mod');
				document.querySelector('#formItem_damage_visibility').classList.remove('active_mod');
				document.querySelector('#formItem_damage_size').classList.remove('active_mod');


				hline_2_4.classList.remove('checked_mod');
				for (var e = 0; e < formBlockDamageDistance.length; e++) {
					formBlockDamageDistance[e].classList.remove('active_mod');
				}

				hline_2_5.classList.remove('checked_mod');
				/*for (var r = 0; r < formBlockDriverZone.length; r++) {
					formBlockDriverZone[r].classList.remove('active_mod');
				}*/

				hline_2_6.classList.remove('checked_mod');
				/*for (var t = 0; t < formBlockDamageSize.length; t++) {
					formBlockDamageSize[t].classList.remove('active_mod');
				}*/

				btnForward.classList.remove('active_mod');

				modalContent.innerHTML = '<div class="modal_text">засверленные сколы не ремонтируем и тд. You probably dont need a repair<br>A previous repair leaves a round mark that often looks like a chip on the glass. It may also be slightly raised - you can feel it with your fingers.</div>';
				showModal.classList.add('active_mod');
			} else {
				document.querySelector('#formItem_distance').classList.add('active_mod');
				zenscroll.toY((getTopPos(document.querySelector('#formItem_distance')) - 80), 2000);
			}
			hline_2_3.classList.add('checked_mod');
		})
	}

	var formBlockDamageDistance = document.querySelectorAll('.glass_form_l_block.distance_mod'),
		hline_2_4 = document.querySelector('.headline.distance_edge');

	if(formBlockDamageDistance) {
		for (var i = 0; i < formBlockDamageDistance.length; i++) {
			formBlockDamageDistance[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockDamageDistance.length; j++) {
						formBlockDamageDistance[j].classList.remove('active_mod');
					}

					document.querySelector('#formItem_damage_visibility').classList.remove('active_mod');
					document.querySelector('#formItem_damage_size').classList.remove('active_mod');

					hline_2_5.classList.remove('checked_mod');
					for (var r = 0; r < formBlockDriverZone.length; r++) {
						formBlockDriverZone[r].classList.remove('active_mod');
					}

					hline_2_6.classList.remove('checked_mod');
					for (var t = 0; t < formBlockDamageSize.length; t++) {
						formBlockDamageSize[t].classList.remove('active_mod');
					}

					btnForward.classList.remove('active_mod');


					this.classList.add('active_mod');
					if(this.classList.contains('less_than_5')) {
						modalContent.innerHTML = '<div class="modal_text">Необходима замена стекла бла бла бла. Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';
						showModal.classList.add('active_mod');

					} else {
						document.querySelector('#formItem_damage_visibility').classList.add('active_mod');
						zenscroll.toY((getTopPos(document.querySelector('#formItem_damage_visibility')) - 80), 2000);
					}

					hline_2_4.classList.add('checked_mod');
				}
			})
		}
	}

	var formBlockDriverZone = document.querySelectorAll('.glass_form_l_block.driver_zone'),
		infoMsg = document.querySelector('.info_form_block'),
		hline_2_5 = document.querySelector('.headline.driver_zone');

	if(formBlockDriverZone) {
		for (var i = 0; i < formBlockDriverZone.length; i++) {
			formBlockDriverZone[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockDriverZone.length; j++) {
						formBlockDriverZone[j].classList.remove('active_mod');
					}
					this.classList.add('active_mod');

					for (var t = 0; t < formBlockDamageSize.length; t++) {
						formBlockDamageSize[t].classList.remove('active_mod');
					}
					if(this.classList.contains('no_mod')) {
						//document.querySelector('#modalRiftRepairable').classList.add('active_mod');
						infoMsg.innerHTML = '<div class="p_msg">Поздравляем, ваш скол ремонтопригоден. Ремонт скола займет <span class="bold">30 минут</span> и обойдется в <span class="bold">2990 рублей</span>.</div>'
						infoMsg.classList.add('active_mod');
						btnForward.classList.add('active_mod');
						zenscroll.toY((getTopPos(infoMsg) - 80), 2000);
					} else {
						btnForward.classList.remove('active_mod');
						
						modalContent.innerHTML = '<div class="modal_text">Необходима замена стекла бла бла бла. Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';
						showModal.classList.add('active_mod');
						infoMsg.classList.remove('active_mod');
					}

					hline_2_5.classList.add('checked_mod');
				}
			})
		}
	}

	var formBlockDamageSize = document.querySelectorAll('.glass_form_l_block.damage_size'),
		hline_2_6 = document.querySelector('.headline.damage_size');

	if(formBlockDamageSize) {
		for (var i = 0; i < formBlockDamageSize.length; i++) {
			formBlockDamageSize[i].addEventListener('click',function(){
				if (!this.classList.contains('active_mod')) {
					for (var j = 0; j < formBlockDamageSize.length; j++) {
						formBlockDamageSize[j].classList.remove('active_mod');
					}
					btnForward.classList.remove('active_mod');
					this.classList.add('active_mod');
					if(this.classList.contains('match_size')) {
						modalContent.innerHTML = '<div class="modal_text">Скорее всего вам не нужен ремонт скола. Because the chip is very small, it will only affect the surface of the glass, not the deeper structure which keeps your windscreen strong. This means the damage wont spread, even during bad weather or bumpy journeys.</div>';
						showModal.classList.add('active_mod');
						//btnForward.classList.remove('active_mod');
						//zenscroll.toY((getTopPos(btnForward) - 80), 2000);

					} else if (this.classList.contains('big_size')) {
						modalContent.innerHTML = '<div class="modal_text">Необходима замена стекла бла бла бла. Ссылка на стандартную форму <a href="https://www.carglass.ru/stoimost-avtostekla/" class="link v1_mod">тут</a></div>';

						showModal.classList.add('active_mod');
						//btnForward.classList.remove('active_mod');
					} else {
						document.querySelector('#formItem_ifFixed').classList.add('active_mod');
						zenscroll.toY((getTopPos(document.querySelector('#formItem_ifFixed')) - 80), 2000);
						//btnForward.classList.add('active_mod');
						//zenscroll.toY((getTopPos(btnForward) - 80), 2000);
					}

					hline_2_6.classList.add('checked_mod');
				}
			})
		}
	}

	// lightbox

	var modalClose = document.querySelectorAll('.modal_close');

	if(modalClose) {
		for (var i = 0; i < modalClose.length; i++) {
			modalClose[i].addEventListener('click', function(){
				findAncestor(this,'lightbox').classList.remove('active_mod');
				enableScroll();
			})
		}		
	}


	// calendar

	var repairTime = document.querySelectorAll('.date_rsrv_b_time.free_mod'),
		appointFlag = false;

	if(repairTime) {
		for (var i = 0; i < repairTime.length; i++) {
			repairTime[i].addEventListener('click', function(){
				var repairTime = this.innerHTML;
				infoMsg.innerHTML = '<p class="p_msg">Мы забронировали ваш визит к нам на <span class="bold repair_date">3 апреля, пятница</span>, ждём вас в <span class="bold repair_time">09:00 - 13:00</span>.</p><p class="p_msg">Если вы передумали, можете поменять дату и время на другие, выбрав их выше.</p>'
				infoMsg.classList.add('active_mod');
				if (!appointFlag) {
					zenscroll.toY((getTopPos(document.querySelector('.info_form_block')) - 80), 2000);
					appointFlag = true;
				}
				document.querySelector('.headline.calendar_mod').classList.add('checked_mod');
				btnForward.classList.add('active_mod');
				var repairDate = findAncestor(this,'date_reservation_block').querySelector('.date_rsrv_b_title').innerHTML;
				document.querySelector('.repair_date').innerHTML = repairDate;
				document.querySelector('.repair_time').innerHTML = repairTime;
			})
		}
		
	}

	// Tel mask
	var customerTel = document.querySelector('#customer_tel');

	if (customerTel) {
		var formattedInput = MaskedInput({
			elm: customerTel,
			format: '+7 (___) ___-__-__'
		});
		formattedInput.setFormat('+7 (___) ___-__-__');
		formattedInput.setSeparator('+7 ()-');

		customerTel.addEventListener('blur',function(){
			var valInputText = String(customerTel.value);
			if ( valInputText.includes('_') ) {
				formattedInput.resetField();
			}
		});

		customerTel.addEventListener('click', function(){

			customerTel.classList.remove('error_mod')
			if( String(customerTel.value).includes('_') ) {
				formattedInput.resetField();
				setCaretToPos(customerTel, 4);
			}
		})
	}

	// phone sms

	var phoneOnline = document.querySelector('#customer_tel'),
		smsSend = document.querySelector('#linkSendSMS'),
		smsOuter = document.querySelector('#smsOuter'),
		smsInterval,
		smsCounter = 60,
		smsCounterStart = smsCounter - 1;

	if(phoneOnline) {
		phoneOnline.addEventListener('keyup',function(){
			if ( !String(this.value).includes('_') ) {
				var isCollapsed = smsOuter.getAttribute('data-collapsed') === 'true';

				expandSection(smsOuter)
				smsOuter.setAttribute('data-collapsed', 'false')
				smsSend.classList.add('active_mod');
			} else {
				smsSend.classList.remove('active_mod');
			}
		});

		smsSend.addEventListener('click',function(e){
			e.preventDefault();
			if(!this.classList.contains('countdown_mod'))
				this.classList.add('sent_mod');

				smsInterval = setInterval(function() {
					smsCounter--;
					if(smsCounter < 0) {
						smsSend.innerHTML = 'Отправить SMS с кодом подтверждения'
						clearInterval(smsInterval);
						smsSend.classList.remove('sent_mod');
						smsSend.classList.remove('countdown_mod');
						smsCounter = 60;
					} else {
						if (smsCounter == smsCounterStart) {
							smsSend.classList.remove('sent_mod');
							smsSend.classList.add('countdown_mod');
						}
						smsSend.innerHTML = 'Код SMS отправлен на указанный номер.<br>Запросить код повторно можно через ' + smsCounter.toString() + ' с';
					}
				}, 1000);

		})
	}

	// personal data

	var persData = document.querySelector('#customerData'),
		btnProceedPayment = document.querySelector('#btnProceedPayment');

	if(persData) {
		persData.addEventListener('change', function(){
			if(this.checked) {
				btnProceedPayment.disabled = false;;
			} else {
				btnProceedPayment.disabled = true;
			}
		})
	}

})();

// Placing cursor in input

function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
	input.focus();
	input.setSelectionRange(selectionStart, selectionEnd);
  }
  else if (input.createTextRange) {
	var range = input.createTextRange();
	range.collapse(true);
	range.moveEnd('character', selectionEnd);
	range.moveStart('character', selectionStart);
	range.select();
  }
}

function setCaretToPos (input, pos) {
  setSelectionRange(input, pos, pos);
}

// validation
function getTopPos(el) {
	for (var topPos = 0;
		el != null;
		topPos += el.offsetTop, el = el.offsetParent);
	return topPos;
}

function formCheckOnChange(attr, email) {
	var check = document.querySelector(attr);

	check.addEventListener('blur', function() {
		if (this.value.length != 0) {
			this.classList.remove('error_mod');
		}
	})

	if(email) {
		var re = /\S+@\S+\.\S+/;

		check.addEventListener('blur', function() {
			if (re.test(this)) {
				this.classList.remove('error_mod');
			}
		})
	}
}

function formValidateV1(oForm){
	var error = false,
		name = document.querySelector('.f_c_field.name_mod'),
		tel = document.querySelector('.f_c_field.tel_mod'),
		email = document.querySelector('.f_c_field.email_mod'),
		re = /\S+@\S+\.\S+/,
		errorTop = 0;

	if (tel.value.length === 0) {
		error = true;
		tel.classList.add('error_mod');
		tel.nextSibling.innerHTML = "Укажите телефон";
		if( errorTop == 0 || errorTop > getTopPos(tel) ) {
			errorTop = getTopPos(tel);
		}
	} else if ( String(tel.value).includes('_') ) {
		error = true;
		tel.classList.add('error_mod');
		tel.nextSibling.innerHTML = "Укажите телефон";
		if( errorTop == 0 || errorTop > getTopPos(tel) ) {
			errorTop = getTopPos(tel);
		}
	}
	else {
		tel.classList.remove('error_mod');
	}

	// name check

	if (name.value.length === 0) {
		error = true;
		name.classList.add('error_mod');
		name.nextSibling.innerHTML = "Укажите имя";
		if( errorTop == 0 || errorTop > getTopPos(tel) ) {
			errorTop = getTopPos(tel);
		}
	}
	else {
		name.classList.remove('error_mod');
	}

	//formCheckOnChange(email);

	if (email.value.length === 0) {
		error = true;
		email.classList.add('error_mod');
		email.nextSibling.innerHTML = "Укажите e-mail";
		if( errorTop == 0 || errorTop > getTopPos(email) ) {
			errorTop = getTopPos(email);
		}
	}	else if (!re.test(email.value)) {
			error = true;
			email.classList.add('error_mod');
			email.nextSibling.innerHTML = "Ошибка в формате e-mail";
		if( errorTop == 0 || errorTop > getTopPos(email) ) {
			errorTop = getTopPos(email);
		}
	}	else {
		email.classList.remove('error_mod');
	}

	formCheckOnChange('.f_c_field.email_mod', true);
	formCheckOnChange('.f_c_field.name_mod', true);

	if(errorTop != 0) {
		zenscroll.toY((errorTop - 110), 1000);
	}
}

function isNumberKey(evt){
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function formValidateCard(){
	var error = false,
		cardNum = document.querySelectorAll('.f_c_field.card_num'),
		cardDate = document.querySelectorAll('.f_c_field.card_date'),
		cardCVV = document.querySelector('.f_c_field.card_cvv'),
		cardHolder = document.querySelector('.f_c_field.card_holder'),
		regex=/^[0-9]+$/,
		regexLetters=/^[a-zA-Z]+$/,
		errorTop = 0;

	for (var i = 0; i < cardNum.length; i++) {
		if(cardNum[i].value.length < 4 || !regex.test(cardNum[i].value)) {
			cardNum[i].classList.add('error_v2_mod');
			if( errorTop == 0 || errorTop > getTopPos(cardNum[i]) ) {
				errorTop = getTopPos(cardNum[i]);
			}
		}
		else {
			cardNum[i].classList.remove('error_v2_mod');
		}
	}

	for (var i = 0; i < cardDate.length; i++) {
		if(cardDate[i].value.length < 2 || !regex.test(cardDate[i].value)) {
			cardDate[i].classList.add('error_v2_mod');
			if( errorTop == 0 || errorTop > getTopPos(cardDate[i]) ) {
				errorTop = getTopPos(cardDate[i]);
			}
		}
		else {
			cardDate[i].classList.remove('error_v2_mod');
		}
	}

	if(cardCVV.value.length < 3 || !regex.test(cardCVV.value)) {
		cardCVV.classList.add('error_v2_mod');
		if( errorTop == 0 || errorTop > getTopPos(cardCVV) ) {
			errorTop = getTopPos(cardCVV);
		}
	}
	else {
		cardCVV.classList.remove('error_v2_mod');
	}

	if(cardHolder.value.length === 0 || !regexLetters.test(cardHolder.value)) {
		cardHolder.classList.add('error_v2_mod');
		if( errorTop == 0 || errorTop > getTopPos(cardHolder) ) {
			errorTop = getTopPos(cardHolder);
		}
	}
	else {
		cardHolder.classList.remove('error_v2_mod');
	}

	if(errorTop != 0) {
		zenscroll.toY((errorTop - 120), 1000);
	}

}