webpackJsonp([0,2],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 3.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: December 13, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,i){function r(e){return Math.floor(e)}function n(){var e=b.params.autoplay,a=b.slides.eq(b.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||b.params.autoplay),b.autoplayTimeoutId=setTimeout(function(){b.params.loop?(b.fixLoop(),b._slideNext(),b.emit("onAutoplay",b)):b.isEnd?i.autoplayStopOnLast?b.stopAutoplay():(b._slideTo(0),b.emit("onAutoplay",b)):(b._slideNext(),b.emit("onAutoplay",b))},e)}function o(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var i;return s.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==s.length)return s[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){b.onResize(!0),b.emit("onObserverUpdate",b,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes||a.attributes,childList:"undefined"==typeof a.childList||a.childList,characterData:"undefined"==typeof a.characterData||a.characterData}),b.observers.push(s)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!b.params.allowSwipeToNext&&(b.isHorizontal()&&39===a||!b.isHorizontal()&&40===a))return!1;if(!b.params.allowSwipeToPrev&&(b.isHorizontal()&&37===a||!b.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(b.container.parents("."+b.params.slideClass).length>0&&0===b.container.parents("."+b.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,r=window.innerHeight,n=b.container.offset();b.rtl&&(n.left=n.left-b.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+b.width,n.top],[n.left,n.top+b.height],[n.left+b.width,n.top+b.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+r&&(t=!0)}if(!t)return}b.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!b.rtl||37===a&&b.rtl)&&b.slideNext(),(37===a&&!b.rtl||39===a&&b.rtl)&&b.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&b.slideNext(),38===a&&b.slidePrev())}}function d(){var e="onwheel",a=e in document;if(!a){var t=document.createElement("div");t.setAttribute(e,"return;"),a="function"==typeof t[e]}return!a&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(a=document.implementation.hasFeature("Events.wheel","3.0")),a}function u(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=b.rtl?-1:1,s=c(e);if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(b.params.mousewheelInvert&&(a=-a),b.params.freeMode){var i=b.getWrapperTranslate()+a*b.params.mousewheelSensitivity,r=b.isBeginning,n=b.isEnd;if(i>=b.minTranslate()&&(i=b.minTranslate()),i<=b.maxTranslate()&&(i=b.maxTranslate()),b.setWrapperTransition(0),b.setWrapperTranslate(i),b.updateProgress(),b.updateActiveIndex(),(!r&&b.isBeginning||!n&&b.isEnd)&&b.updateClasses(),b.params.freeModeSticky?(clearTimeout(b.mousewheel.timeout),b.mousewheel.timeout=setTimeout(function(){b.slideReset()},300)):b.params.lazyLoading&&b.lazy&&b.lazy.load(),b.emit("onScroll",b,e),b.params.autoplay&&b.params.autoplayDisableOnInteraction&&b.stopAutoplay(),0===i||i===b.maxTranslate())return}else{if((new window.Date).getTime()-b.mousewheel.lastScrollTime>60)if(a<0)if(b.isEnd&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slideNext(),b.emit("onScroll",b,e);else if(b.isBeginning&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slidePrev(),b.emit("onScroll",b,e);b.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function c(e){var a=10,t=40,s=800,i=0,r=0,n=0,o=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(i=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(i=r,r=0),n=i*a,o=r*a,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||o)&&e.deltaMode&&(1===e.deltaMode?(n*=t,o*=t):(n*=s,o*=s)),n&&!i&&(i=n<1?-1:1),o&&!r&&(r=o<1?-1:1),{spinX:i,spinY:r,pixelX:n,pixelY:o}}function m(e,t){e=a(e);var s,i,r,n=b.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",i=e.attr("data-swiper-parallax-x"),r=e.attr("data-swiper-parallax-y"),i||r?(i=i||"0",r=r||"0"):b.isHorizontal()?(i=s,r="0"):(r=s,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",r=r.indexOf("%")>=0?parseInt(r,10)*t+"%":r*t+"px",e.transform("translate3d("+i+", "+r+",0px)")}function h(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,i);var g={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},f=i&&i.virtualTranslate;i=i||{};var v={};for(var w in i)if("object"!=typeof i[w]||null===i[w]||(i[w].nodeType||i[w]===window||i[w]===document||"undefined"!=typeof s&&i[w]instanceof s||"undefined"!=typeof jQuery&&i[w]instanceof jQuery))v[w]=i[w];else{v[w]={};for(var y in i[w])v[w][y]=i[w][y]}for(var x in g)if("undefined"==typeof i[x])i[x]=g[x];else if("object"==typeof i[x])for(var T in g[x])"undefined"==typeof i[x][T]&&(i[x][T]=g[x][T]);var b=this;if(b.params=i,b.originalParams=v,b.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof s&&(a=s),("undefined"!=typeof a||(a="undefined"==typeof s?window.Dom7||window.Zepto||window.jQuery:s))&&(b.$=a,b.currentBreakpoint=void 0,b.getActiveBreakpoint=function(){if(!b.params.breakpoints)return!1;var e,a=!1,t=[];for(e in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},b.setBreakpoint=function(){var e=b.getActiveBreakpoint();if(e&&b.currentBreakpoint!==e){var a=e in b.params.breakpoints?b.params.breakpoints[e]:b.originalParams,t=b.params.loop&&a.slidesPerView!==b.params.slidesPerView;for(var s in a)b.params[s]=a[s];b.currentBreakpoint=e,t&&b.destroyLoop&&b.reLoop(!0)}},b.params.breakpoints&&b.setBreakpoint(),b.container=a(e),0!==b.container.length)){if(b.container.length>1){var S=[];return b.container.each(function(){S.push(new t(this,i))}),S}b.container[0].swiper=b,b.container.data("swiper",b),b.classNames.push(b.params.containerModifierClass+b.params.direction),b.params.freeMode&&b.classNames.push(b.params.containerModifierClass+"free-mode"),b.support.flexbox||(b.classNames.push(b.params.containerModifierClass+"no-flexbox"),b.params.slidesPerColumn=1),b.params.autoHeight&&b.classNames.push(b.params.containerModifierClass+"autoheight"),(b.params.parallax||b.params.watchSlidesVisibility)&&(b.params.watchSlidesProgress=!0),b.params.touchReleaseOnEdges&&(b.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(b.params.effect)>=0&&(b.support.transforms3d?(b.params.watchSlidesProgress=!0,b.classNames.push(b.params.containerModifierClass+"3d")):b.params.effect="slide"),"slide"!==b.params.effect&&b.classNames.push(b.params.containerModifierClass+b.params.effect),"cube"===b.params.effect&&(b.params.resistanceRatio=0,b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.centeredSlides=!1,b.params.spaceBetween=0,b.params.virtualTranslate=!0,b.params.setWrapperSize=!1),"fade"!==b.params.effect&&"flip"!==b.params.effect||(b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.watchSlidesProgress=!0,b.params.spaceBetween=0,b.params.setWrapperSize=!1,"undefined"==typeof f&&(b.params.virtualTranslate=!0)),b.params.grabCursor&&b.support.touch&&(b.params.grabCursor=!1),b.wrapper=b.container.children("."+b.params.wrapperClass),b.params.pagination&&(b.paginationContainer=a(b.params.pagination),b.params.uniqueNavElements&&"string"==typeof b.params.pagination&&b.paginationContainer.length>1&&1===b.container.find(b.params.pagination).length&&(b.paginationContainer=b.container.find(b.params.pagination)),"bullets"===b.params.paginationType&&b.params.paginationClickable?b.paginationContainer.addClass(b.params.paginationModifierClass+"clickable"):b.params.paginationClickable=!1,b.paginationContainer.addClass(b.params.paginationModifierClass+b.params.paginationType)),(b.params.nextButton||b.params.prevButton)&&(b.params.nextButton&&(b.nextButton=a(b.params.nextButton),b.params.uniqueNavElements&&"string"==typeof b.params.nextButton&&b.nextButton.length>1&&1===b.container.find(b.params.nextButton).length&&(b.nextButton=b.container.find(b.params.nextButton))),b.params.prevButton&&(b.prevButton=a(b.params.prevButton),b.params.uniqueNavElements&&"string"==typeof b.params.prevButton&&b.prevButton.length>1&&1===b.container.find(b.params.prevButton).length&&(b.prevButton=b.container.find(b.params.prevButton)))),b.isHorizontal=function(){return"horizontal"===b.params.direction},b.rtl=b.isHorizontal()&&("rtl"===b.container[0].dir.toLowerCase()||"rtl"===b.container.css("direction")),b.rtl&&b.classNames.push(b.params.containerModifierClass+"rtl"),b.rtl&&(b.wrongRTL="-webkit-box"===b.wrapper.css("display")),b.params.slidesPerColumn>1&&b.classNames.push(b.params.containerModifierClass+"multirow"),b.device.android&&b.classNames.push(b.params.containerModifierClass+"android"),b.container.addClass(b.classNames.join(" ")),b.translate=0,b.progress=0,b.velocity=0,b.lockSwipeToNext=function(){b.params.allowSwipeToNext=!1,b.params.allowSwipeToPrev===!1&&b.params.grabCursor&&b.unsetGrabCursor()},b.lockSwipeToPrev=function(){b.params.allowSwipeToPrev=!1,b.params.allowSwipeToNext===!1&&b.params.grabCursor&&b.unsetGrabCursor()},b.lockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!1,b.params.grabCursor&&b.unsetGrabCursor()},b.unlockSwipeToNext=function(){b.params.allowSwipeToNext=!0,b.params.allowSwipeToPrev===!0&&b.params.grabCursor&&b.setGrabCursor()},b.unlockSwipeToPrev=function(){b.params.allowSwipeToPrev=!0,b.params.allowSwipeToNext===!0&&b.params.grabCursor&&b.setGrabCursor()},b.unlockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!0,b.params.grabCursor&&b.setGrabCursor()},b.setGrabCursor=function(e){b.container[0].style.cursor="move",b.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",b.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",b.container[0].style.cursor=e?"grabbing":"grab"},b.unsetGrabCursor=function(){b.container[0].style.cursor=""},b.params.grabCursor&&b.setGrabCursor(),b.imagesToLoad=[],b.imagesLoaded=0,b.loadImage=function(e,a,t,s,i,r){function n(){r&&r()}var o;e.complete&&i?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},b.preloadImages=function(){function e(){"undefined"!=typeof b&&null!==b&&b&&(void 0!==b.imagesLoaded&&b.imagesLoaded++,b.imagesLoaded===b.imagesToLoad.length&&(b.params.updateOnImagesReady&&b.update(),b.emit("onImagesReady",b)))}b.imagesToLoad=b.container.find("img");for(var a=0;a<b.imagesToLoad.length;a++)b.loadImage(b.imagesToLoad[a],b.imagesToLoad[a].currentSrc||b.imagesToLoad[a].getAttribute("src"),b.imagesToLoad[a].srcset||b.imagesToLoad[a].getAttribute("srcset"),b.imagesToLoad[a].sizes||b.imagesToLoad[a].getAttribute("sizes"),!0,e)},b.autoplayTimeoutId=void 0,b.autoplaying=!1,b.autoplayPaused=!1,b.startAutoplay=function(){return"undefined"==typeof b.autoplayTimeoutId&&(!!b.params.autoplay&&(!b.autoplaying&&(b.autoplaying=!0,b.emit("onAutoplayStart",b),void n())))},b.stopAutoplay=function(e){b.autoplayTimeoutId&&(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplaying=!1,b.autoplayTimeoutId=void 0,b.emit("onAutoplayStop",b))},b.pauseAutoplay=function(e){b.autoplayPaused||(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplayPaused=!0,0===e?(b.autoplayPaused=!1,n()):b.wrapper.transitionEnd(function(){b&&(b.autoplayPaused=!1,b.autoplaying?n():b.stopAutoplay())}))},b.minTranslate=function(){return-b.snapGrid[0]},b.maxTranslate=function(){return-b.snapGrid[b.snapGrid.length-1]},b.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==b.params.slidesPerView&&b.params.slidesPerView>1)for(e=0;e<Math.ceil(b.params.slidesPerView);e++){var s=b.activeIndex+e;if(s>b.slides.length)break;a.push(b.slides.eq(s)[0])}else a.push(b.slides.eq(b.activeIndex)[0]);for(e=0;e<a.length;e++)if("undefined"!=typeof a[e]){var i=a[e].offsetHeight;t=i>t?i:t}t&&b.wrapper.css("height",t+"px")},b.updateContainerSize=function(){var e,a;e="undefined"!=typeof b.params.width?b.params.width:b.container[0].clientWidth,a="undefined"!=typeof b.params.height?b.params.height:b.container[0].clientHeight,0===e&&b.isHorizontal()||0===a&&!b.isHorizontal()||(e=e-parseInt(b.container.css("padding-left"),10)-parseInt(b.container.css("padding-right"),10),a=a-parseInt(b.container.css("padding-top"),10)-parseInt(b.container.css("padding-bottom"),10),b.width=e,b.height=a,b.size=b.isHorizontal()?b.width:b.height)},b.updateSlidesSize=function(){b.slides=b.wrapper.children("."+b.params.slideClass),b.snapGrid=[],b.slidesGrid=[],b.slidesSizesGrid=[];var e,a=b.params.spaceBetween,t=-b.params.slidesOffsetBefore,s=0,i=0;if("undefined"!=typeof b.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*b.size),b.virtualSize=-a,b.rtl?b.slides.css({marginLeft:"",marginTop:""}):b.slides.css({marginRight:"",marginBottom:""});var n;b.params.slidesPerColumn>1&&(n=Math.floor(b.slides.length/b.params.slidesPerColumn)===b.slides.length/b.params.slidesPerColumn?b.slides.length:Math.ceil(b.slides.length/b.params.slidesPerColumn)*b.params.slidesPerColumn,"auto"!==b.params.slidesPerView&&"row"===b.params.slidesPerColumnFill&&(n=Math.max(n,b.params.slidesPerView*b.params.slidesPerColumn)));var o,l=b.params.slidesPerColumn,p=n/l,d=p-(b.params.slidesPerColumn*p-b.slides.length);for(e=0;e<b.slides.length;e++){o=0;var u=b.slides.eq(e);if(b.params.slidesPerColumn>1){var c,m,h;"column"===b.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css("margin-"+(b.isHorizontal()?"top":"left"),0!==h&&b.params.spaceBetween&&b.params.spaceBetween+"px").attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===b.params.slidesPerView?(o=b.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),b.params.roundLengths&&(o=r(o))):(o=(b.size-(b.params.slidesPerView-1)*a)/b.params.slidesPerView,b.params.roundLengths&&(o=r(o)),b.isHorizontal()?b.slides[e].style.width=o+"px":b.slides[e].style.height=o+"px"),b.slides[e].swiperSlideSize=o,b.slidesSizesGrid.push(o),b.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-b.size/2-a),Math.abs(t)<.001&&(t=0),i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t)):(i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t),t=t+o+a),b.virtualSize+=o+a,s=o,i++)}b.virtualSize=Math.max(b.virtualSize,b.size)+b.params.slidesOffsetAfter;var g;if(b.rtl&&b.wrongRTL&&("slide"===b.params.effect||"coverflow"===b.params.effect)&&b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),b.support.flexbox&&!b.params.setWrapperSize||(b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"})),b.params.slidesPerColumn>1&&(b.virtualSize=(o+b.params.spaceBetween)*n,b.virtualSize=Math.ceil(b.virtualSize/b.params.slidesPerColumn)-b.params.spaceBetween,b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"}),b.params.centeredSlides)){for(g=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<b.virtualSize+b.snapGrid[0]&&g.push(b.snapGrid[e]);b.snapGrid=g}if(!b.params.centeredSlides){for(g=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<=b.virtualSize-b.size&&g.push(b.snapGrid[e]);b.snapGrid=g,Math.floor(b.virtualSize-b.size)-Math.floor(b.snapGrid[b.snapGrid.length-1])>1&&b.snapGrid.push(b.virtualSize-b.size)}0===b.snapGrid.length&&(b.snapGrid=[0]),0!==b.params.spaceBetween&&(b.isHorizontal()?b.rtl?b.slides.css({marginLeft:a+"px"}):b.slides.css({marginRight:a+"px"}):b.slides.css({marginBottom:a+"px"})),b.params.watchSlidesProgress&&b.updateSlidesOffset()}},b.updateSlidesOffset=function(){for(var e=0;e<b.slides.length;e++)b.slides[e].swiperSlideOffset=b.isHorizontal()?b.slides[e].offsetLeft:b.slides[e].offsetTop},b.currentSlidesPerView=function(){var e,a,t=1;if(b.params.centeredSlides){var s,i=b.slides[b.activeIndex].swiperSlideSize;for(e=b.activeIndex+1;e<b.slides.length;e++)b.slides[e]&&!s&&(i+=b.slides[e].swiperSlideSize,t++,i>b.size&&(s=!0));for(a=b.activeIndex-1;a>=0;a--)b.slides[a]&&!s&&(i+=b.slides[a].swiperSlideSize,t++,i>b.size&&(s=!0))}else for(e=b.activeIndex+1;e<b.slides.length;e++)b.slidesGrid[e]-b.slidesGrid[b.activeIndex]<b.size&&t++;return t},b.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=b.translate||0),0!==b.slides.length){"undefined"==typeof b.slides[0].swiperSlideOffset&&b.updateSlidesOffset();var a=-e;b.rtl&&(a=e),b.slides.removeClass(b.params.slideVisibleClass);for(var t=0;t<b.slides.length;t++){var s=b.slides[t],i=(a+(b.params.centeredSlides?b.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+b.params.spaceBetween);if(b.params.watchSlidesVisibility){var r=-(a-s.swiperSlideOffset),n=r+b.slidesSizesGrid[t],o=r>=0&&r<b.size||n>0&&n<=b.size||r<=0&&n>=b.size;o&&b.slides.eq(t).addClass(b.params.slideVisibleClass)}s.progress=b.rtl?-i:i}}},b.updateProgress=function(e){"undefined"==typeof e&&(e=b.translate||0);var a=b.maxTranslate()-b.minTranslate(),t=b.isBeginning,s=b.isEnd;0===a?(b.progress=0,b.isBeginning=b.isEnd=!0):(b.progress=(e-b.minTranslate())/a,b.isBeginning=b.progress<=0,b.isEnd=b.progress>=1),b.isBeginning&&!t&&b.emit("onReachBeginning",b),b.isEnd&&!s&&b.emit("onReachEnd",b),b.params.watchSlidesProgress&&b.updateSlidesProgress(e),b.emit("onProgress",b,b.progress)},b.updateActiveIndex=function(){var e,a,t,s=b.rtl?b.translate:-b.translate;for(a=0;a<b.slidesGrid.length;a++)"undefined"!=typeof b.slidesGrid[a+1]?s>=b.slidesGrid[a]&&s<b.slidesGrid[a+1]-(b.slidesGrid[a+1]-b.slidesGrid[a])/2?e=a:s>=b.slidesGrid[a]&&s<b.slidesGrid[a+1]&&(e=a+1):s>=b.slidesGrid[a]&&(e=a);b.params.normalizeSlideIndex&&(e<0||"undefined"==typeof e)&&(e=0),t=Math.floor(e/b.params.slidesPerGroup),t>=b.snapGrid.length&&(t=b.snapGrid.length-1),e!==b.activeIndex&&(b.snapIndex=t,b.previousIndex=b.activeIndex,b.activeIndex=e,b.updateClasses(),b.updateRealIndex())},b.updateRealIndex=function(){b.realIndex=parseInt(b.slides.eq(b.activeIndex).attr("data-swiper-slide-index")||b.activeIndex,10)},b.updateClasses=function(){b.slides.removeClass(b.params.slideActiveClass+" "+b.params.slideNextClass+" "+b.params.slidePrevClass+" "+b.params.slideDuplicateActiveClass+" "+b.params.slideDuplicateNextClass+" "+b.params.slideDuplicatePrevClass);var e=b.slides.eq(b.activeIndex);e.addClass(b.params.slideActiveClass),i.loop&&(e.hasClass(b.params.slideDuplicateClass)?b.wrapper.children("."+b.params.slideClass+":not(."+b.params.slideDuplicateClass+')[data-swiper-slide-index="'+b.realIndex+'"]').addClass(b.params.slideDuplicateActiveClass):b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+b.realIndex+'"]').addClass(b.params.slideDuplicateActiveClass));var t=e.next("."+b.params.slideClass).addClass(b.params.slideNextClass);b.params.loop&&0===t.length&&(t=b.slides.eq(0),t.addClass(b.params.slideNextClass));var s=e.prev("."+b.params.slideClass).addClass(b.params.slidePrevClass);if(b.params.loop&&0===s.length&&(s=b.slides.eq(-1),s.addClass(b.params.slidePrevClass)),i.loop&&(t.hasClass(b.params.slideDuplicateClass)?b.wrapper.children("."+b.params.slideClass+":not(."+b.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(b.params.slideDuplicateNextClass):b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(b.params.slideDuplicateNextClass),s.hasClass(b.params.slideDuplicateClass)?b.wrapper.children("."+b.params.slideClass+":not(."+b.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(b.params.slideDuplicatePrevClass):b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(b.params.slideDuplicatePrevClass)),b.paginationContainer&&b.paginationContainer.length>0){var r,n=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length;if(b.params.loop?(r=Math.ceil((b.activeIndex-b.loopedSlides)/b.params.slidesPerGroup),r>b.slides.length-1-2*b.loopedSlides&&(r-=b.slides.length-2*b.loopedSlides),r>n-1&&(r-=n),r<0&&"bullets"!==b.params.paginationType&&(r=n+r)):r="undefined"!=typeof b.snapIndex?b.snapIndex:b.activeIndex||0,"bullets"===b.params.paginationType&&b.bullets&&b.bullets.length>0&&(b.bullets.removeClass(b.params.bulletActiveClass),b.paginationContainer.length>1?b.bullets.each(function(){a(this).index()===r&&a(this).addClass(b.params.bulletActiveClass)}):b.bullets.eq(r).addClass(b.params.bulletActiveClass)),"fraction"===b.params.paginationType&&(b.paginationContainer.find("."+b.params.paginationCurrentClass).text(r+1),b.paginationContainer.find("."+b.params.paginationTotalClass).text(n)),"progress"===b.params.paginationType){var o=(r+1)/n,l=o,p=1;b.isHorizontal()||(p=o,l=1),b.paginationContainer.find("."+b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(b.params.speed)}"custom"===b.params.paginationType&&b.params.paginationCustomRender&&(b.paginationContainer.html(b.params.paginationCustomRender(b,r+1,n)),b.emit("onPaginationRendered",b,b.paginationContainer[0]))}b.params.loop||(b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.isBeginning?(b.prevButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.prevButton)):(b.prevButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.prevButton))),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.isEnd?(b.nextButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.nextButton)):(b.nextButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.nextButton))))},b.updatePagination=function(){if(b.params.pagination&&b.paginationContainer&&b.paginationContainer.length>0){var e="";if("bullets"===b.params.paginationType){for(var a=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length,t=0;t<a;t++)e+=b.params.paginationBulletRender?b.params.paginationBulletRender(b,t,b.params.bulletClass):"<"+b.params.paginationElement+' class="'+b.params.bulletClass+'"></'+b.params.paginationElement+">";b.paginationContainer.html(e),b.bullets=b.paginationContainer.find("."+b.params.bulletClass),b.params.paginationClickable&&b.params.a11y&&b.a11y&&b.a11y.initPagination()}"fraction"===b.params.paginationType&&(e=b.params.paginationFractionRender?b.params.paginationFractionRender(b,b.params.paginationCurrentClass,b.params.paginationTotalClass):'<span class="'+b.params.paginationCurrentClass+'"></span> / <span class="'+b.params.paginationTotalClass+'"></span>',b.paginationContainer.html(e)),"progress"===b.params.paginationType&&(e=b.params.paginationProgressRender?b.params.paginationProgressRender(b,b.params.paginationProgressbarClass):'<span class="'+b.params.paginationProgressbarClass+'"></span>',b.paginationContainer.html(e)),"custom"!==b.params.paginationType&&b.emit("onPaginationRendered",b,b.paginationContainer[0])}},b.update=function(e){function a(){b.rtl?-b.translate:b.translate;s=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate()),b.setWrapperTranslate(s),b.updateActiveIndex(),b.updateClasses()}if(b)if(b.updateContainerSize(),b.updateSlidesSize(),b.updateProgress(),b.updatePagination(),b.updateClasses(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),e){var t,s;b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode?(a(),b.params.autoHeight&&b.updateAutoHeight()):(t=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0),t||a())}else b.params.autoHeight&&b.updateAutoHeight()},b.onResize=function(e){b.params.breakpoints&&b.setBreakpoint();var a=b.params.allowSwipeToPrev,t=b.params.allowSwipeToNext;b.params.allowSwipeToPrev=b.params.allowSwipeToNext=!0,b.updateContainerSize(),b.updateSlidesSize(),("auto"===b.params.slidesPerView||b.params.freeMode||e)&&b.updatePagination(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),b.controller&&b.controller.spline&&(b.controller.spline=void 0);var s=!1;if(b.params.freeMode){var i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate());b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses(),b.params.autoHeight&&b.updateAutoHeight()}else b.updateClasses(),s=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0);b.params.lazyLoading&&!s&&b.lazy&&b.lazy.load(),b.params.allowSwipeToPrev=a,b.params.allowSwipeToNext=t},b.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?b.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(b.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),b.touchEvents={start:b.support.touch||!b.params.simulateTouch?"touchstart":b.touchEventsDesktop.start,move:b.support.touch||!b.params.simulateTouch?"touchmove":b.touchEventsDesktop.move,end:b.support.touch||!b.params.simulateTouch?"touchend":b.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===b.params.touchEventsTarget?b.container:b.wrapper).addClass("swiper-wp8-"+b.params.direction),b.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===b.params.touchEventsTarget?b.container[0]:b.wrapper[0],r=b.support.touch?s:document,n=!!b.params.nested;if(b.browser.ie)s[t](b.touchEvents.start,b.onTouchStart,!1),r[t](b.touchEvents.move,b.onTouchMove,n),r[t](b.touchEvents.end,b.onTouchEnd,!1);else{if(b.support.touch){var o=!("touchstart"!==b.touchEvents.start||!b.support.passiveListener||!b.params.passiveListeners)&&{passive:!0,capture:!1};s[t](b.touchEvents.start,b.onTouchStart,o),s[t](b.touchEvents.move,b.onTouchMove,n),s[t](b.touchEvents.end,b.onTouchEnd,o)}(i.simulateTouch&&!b.device.ios&&!b.device.android||i.simulateTouch&&!b.support.touch&&b.device.ios)&&(s[t]("mousedown",b.onTouchStart,!1),document[t]("mousemove",b.onTouchMove,n),document[t]("mouseup",b.onTouchEnd,!1))}window[t]("resize",b.onResize),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.nextButton[a]("click",b.onClickNext),b.params.a11y&&b.a11y&&b.nextButton[a]("keydown",b.a11y.onEnterKey)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.prevButton[a]("click",b.onClickPrev),b.params.a11y&&b.a11y&&b.prevButton[a]("keydown",b.a11y.onEnterKey)),b.params.pagination&&b.params.paginationClickable&&(b.paginationContainer[a]("click","."+b.params.bulletClass,b.onClickIndex),b.params.a11y&&b.a11y&&b.paginationContainer[a]("keydown","."+b.params.bulletClass,b.a11y.onEnterKey)),(b.params.preventClicks||b.params.preventClicksPropagation)&&s[t]("click",b.preventClicks,!0);
},b.attachEvents=function(){b.initEvents()},b.detachEvents=function(){b.initEvents(!0)},b.allowClick=!0,b.preventClicks=function(e){b.allowClick||(b.params.preventClicks&&e.preventDefault(),b.params.preventClicksPropagation&&b.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},b.onClickNext=function(e){e.preventDefault(),b.isEnd&&!b.params.loop||b.slideNext()},b.onClickPrev=function(e){e.preventDefault(),b.isBeginning&&!b.params.loop||b.slidePrev()},b.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*b.params.slidesPerGroup;b.params.loop&&(t+=b.loopedSlides),b.slideTo(t)},b.updateClickedSlide=function(e){var t=o(e,"."+b.params.slideClass),s=!1;if(t)for(var i=0;i<b.slides.length;i++)b.slides[i]===t&&(s=!0);if(!t||!s)return b.clickedSlide=void 0,void(b.clickedIndex=void 0);if(b.clickedSlide=t,b.clickedIndex=a(t).index(),b.params.slideToClickedSlide&&void 0!==b.clickedIndex&&b.clickedIndex!==b.activeIndex){var r,n=b.clickedIndex,l="auto"===b.params.slidesPerView?b.currentSlidesPerView():b.params.slidesPerView;if(b.params.loop){if(b.animating)return;r=parseInt(a(b.clickedSlide).attr("data-swiper-slide-index"),10),b.params.centeredSlides?n<b.loopedSlides-l/2||n>b.slides.length-b.loopedSlides+l/2?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+b.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n):n>b.slides.length-l?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+b.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n)}else b.slideTo(n)}};var C,z,M,E,P,I,k,L,D,B,H="input, select, textarea, button, video",G=Date.now(),X=[];b.animating=!1,b.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var Y,A;b.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),Y="touchstart"===e.type,Y||!("which"in e)||3!==e.which){if(b.params.noSwiping&&o(e,"."+b.params.noSwipingClass))return void(b.allowClick=!0);if(!b.params.swipeHandler||o(e,b.params.swipeHandler)){var t=b.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=b.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(b.device.ios&&b.params.iOSEdgeSwipeDetection&&t<=b.params.iOSEdgeSwipeThreshold)){if(C=!0,z=!1,M=!0,P=void 0,A=void 0,b.touches.startX=t,b.touches.startY=s,E=Date.now(),b.allowClick=!0,b.updateContainerSize(),b.swipeDirection=void 0,b.params.threshold>0&&(L=!1),"touchstart"!==e.type){var i=!0;a(e.target).is(H)&&(i=!1),document.activeElement&&a(document.activeElement).is(H)&&document.activeElement.blur(),i&&e.preventDefault()}b.emit("onTouchStart",b,e)}}}},b.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!Y||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return b.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(b.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(b.params.onlyExternal)return b.allowClick=!1,void(C&&(b.touches.startX=b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.startY=b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,E=Date.now()));if(Y&&b.params.touchReleaseOnEdges&&!b.params.loop)if(b.isHorizontal()){if(b.touches.currentX<b.touches.startX&&b.translate<=b.maxTranslate()||b.touches.currentX>b.touches.startX&&b.translate>=b.minTranslate())return}else if(b.touches.currentY<b.touches.startY&&b.translate<=b.maxTranslate()||b.touches.currentY>b.touches.startY&&b.translate>=b.minTranslate())return;if(Y&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(H))return z=!0,void(b.allowClick=!1);if(M&&b.emit("onTouchMove",b,e),!(e.targetTouches&&e.targetTouches.length>1)){if(b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof P){var t;b.isHorizontal()&&b.touches.currentY===b.touches.startY||!b.isHorizontal()&&b.touches.currentX===b.touches.startX?P=!1:(t=180*Math.atan2(Math.abs(b.touches.currentY-b.touches.startY),Math.abs(b.touches.currentX-b.touches.startX))/Math.PI,P=b.isHorizontal()?t>b.params.touchAngle:90-t>b.params.touchAngle)}if(P&&b.emit("onTouchMoveOpposite",b,e),"undefined"==typeof A&&b.browser.ieTouch&&(b.touches.currentX===b.touches.startX&&b.touches.currentY===b.touches.startY||(A=!0)),C){if(P)return void(C=!1);if(A||!b.browser.ieTouch){b.allowClick=!1,b.emit("onSliderMove",b,e),e.preventDefault(),b.params.touchMoveStopPropagation&&!b.params.nested&&e.stopPropagation(),z||(i.loop&&b.fixLoop(),k=b.getWrapperTranslate(),b.setWrapperTransition(0),b.animating&&b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),b.params.autoplay&&b.autoplaying&&(b.params.autoplayDisableOnInteraction?b.stopAutoplay():b.pauseAutoplay()),B=!1,!b.params.grabCursor||b.params.allowSwipeToNext!==!0&&b.params.allowSwipeToPrev!==!0||b.setGrabCursor(!0)),z=!0;var s=b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY;s*=b.params.touchRatio,b.rtl&&(s=-s),b.swipeDirection=s>0?"prev":"next",I=s+k;var r=!0;if(s>0&&I>b.minTranslate()?(r=!1,b.params.resistance&&(I=b.minTranslate()-1+Math.pow(-b.minTranslate()+k+s,b.params.resistanceRatio))):s<0&&I<b.maxTranslate()&&(r=!1,b.params.resistance&&(I=b.maxTranslate()+1-Math.pow(b.maxTranslate()-k-s,b.params.resistanceRatio))),r&&(e.preventedByNestedSwiper=!0),!b.params.allowSwipeToNext&&"next"===b.swipeDirection&&I<k&&(I=k),!b.params.allowSwipeToPrev&&"prev"===b.swipeDirection&&I>k&&(I=k),b.params.threshold>0){if(!(Math.abs(s)>b.params.threshold||L))return void(I=k);if(!L)return L=!0,b.touches.startX=b.touches.currentX,b.touches.startY=b.touches.currentY,I=k,void(b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY)}b.params.followFinger&&((b.params.freeMode||b.params.watchSlidesProgress)&&b.updateActiveIndex(),b.params.freeMode&&(0===X.length&&X.push({position:b.touches[b.isHorizontal()?"startX":"startY"],time:E}),X.push({position:b.touches[b.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),b.updateProgress(I),b.setWrapperTranslate(I))}}}}},b.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),M&&b.emit("onTouchEnd",b,e),M=!1,C){b.params.grabCursor&&z&&C&&(b.params.allowSwipeToNext===!0||b.params.allowSwipeToPrev===!0)&&b.setGrabCursor(!1);var t=Date.now(),s=t-E;if(b.allowClick&&(b.updateClickedSlide(e),b.emit("onTap",b,e),s<300&&t-G>300&&(D&&clearTimeout(D),D=setTimeout(function(){b&&(b.params.paginationHide&&b.paginationContainer.length>0&&!a(e.target).hasClass(b.params.bulletClass)&&b.paginationContainer.toggleClass(b.params.paginationHiddenClass),b.emit("onClick",b,e))},300)),s<300&&t-G<300&&(D&&clearTimeout(D),b.emit("onDoubleTap",b,e))),G=Date.now(),setTimeout(function(){b&&(b.allowClick=!0)},0),!C||!z||!b.swipeDirection||0===b.touches.diff||I===k)return void(C=z=!1);C=z=!1;var i;if(i=b.params.followFinger?b.rtl?b.translate:-b.translate:-I,b.params.freeMode){if(i<-b.minTranslate())return void b.slideTo(b.activeIndex);if(i>-b.maxTranslate())return void(b.slides.length<b.snapGrid.length?b.slideTo(b.snapGrid.length-1):b.slideTo(b.slides.length-1));if(b.params.freeModeMomentum){if(X.length>1){var r=X.pop(),n=X.pop(),o=r.position-n.position,l=r.time-n.time;b.velocity=o/l,b.velocity=b.velocity/2,Math.abs(b.velocity)<b.params.freeModeMinimumVelocity&&(b.velocity=0),(l>150||(new window.Date).getTime()-r.time>300)&&(b.velocity=0)}else b.velocity=0;b.velocity=b.velocity*b.params.freeModeMomentumVelocityRatio,X.length=0;var p=1e3*b.params.freeModeMomentumRatio,d=b.velocity*p,u=b.translate+d;b.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(b.velocity)*b.params.freeModeMomentumBounceRatio;if(u<b.maxTranslate())b.params.freeModeMomentumBounce?(u+b.maxTranslate()<-h&&(u=b.maxTranslate()-h),c=b.maxTranslate(),m=!0,B=!0):u=b.maxTranslate();else if(u>b.minTranslate())b.params.freeModeMomentumBounce?(u-b.minTranslate()>h&&(u=b.minTranslate()+h),c=b.minTranslate(),m=!0,B=!0):u=b.minTranslate();else if(b.params.freeModeSticky){var g,f=0;for(f=0;f<b.snapGrid.length;f+=1)if(b.snapGrid[f]>-u){g=f;break}u=Math.abs(b.snapGrid[g]-u)<Math.abs(b.snapGrid[g-1]-u)||"next"===b.swipeDirection?b.snapGrid[g]:b.snapGrid[g-1],b.rtl||(u=-u)}if(0!==b.velocity)p=b.rtl?Math.abs((-u-b.translate)/b.velocity):Math.abs((u-b.translate)/b.velocity);else if(b.params.freeModeSticky)return void b.slideReset();b.params.freeModeMomentumBounce&&m?(b.updateProgress(c),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating=!0,b.wrapper.transitionEnd(function(){b&&B&&(b.emit("onMomentumBounce",b),b.setWrapperTransition(b.params.speed),b.setWrapperTranslate(c),b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))})):b.velocity?(b.updateProgress(u),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))):b.updateProgress(u),b.updateActiveIndex()}return void((!b.params.freeModeMomentum||s>=b.params.longSwipesMs)&&(b.updateProgress(),b.updateActiveIndex()))}var v,w=0,y=b.slidesSizesGrid[0];for(v=0;v<b.slidesGrid.length;v+=b.params.slidesPerGroup)"undefined"!=typeof b.slidesGrid[v+b.params.slidesPerGroup]?i>=b.slidesGrid[v]&&i<b.slidesGrid[v+b.params.slidesPerGroup]&&(w=v,y=b.slidesGrid[v+b.params.slidesPerGroup]-b.slidesGrid[v]):i>=b.slidesGrid[v]&&(w=v,y=b.slidesGrid[b.slidesGrid.length-1]-b.slidesGrid[b.slidesGrid.length-2]);var x=(i-b.slidesGrid[w])/y;if(s>b.params.longSwipesMs){if(!b.params.longSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&(x>=b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w)),"prev"===b.swipeDirection&&(x>1-b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w))}else{if(!b.params.shortSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&b.slideTo(w+b.params.slidesPerGroup),"prev"===b.swipeDirection&&b.slideTo(w)}}},b._slideTo=function(e,a){return b.slideTo(e,a,!0,!0)},b.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),e<0&&(e=0),b.snapIndex=Math.floor(e/b.params.slidesPerGroup),b.snapIndex>=b.snapGrid.length&&(b.snapIndex=b.snapGrid.length-1);var i=-b.snapGrid[b.snapIndex];if(b.params.autoplay&&b.autoplaying&&(s||!b.params.autoplayDisableOnInteraction?b.pauseAutoplay(a):b.stopAutoplay()),b.updateProgress(i),b.params.normalizeSlideIndex)for(var r=0;r<b.slidesGrid.length;r++)-Math.floor(100*i)>=Math.floor(100*b.slidesGrid[r])&&(e=r);return!(!b.params.allowSwipeToNext&&i<b.translate&&i<b.minTranslate())&&(!(!b.params.allowSwipeToPrev&&i>b.translate&&i>b.maxTranslate()&&(b.activeIndex||0)!==e)&&("undefined"==typeof a&&(a=b.params.speed),b.previousIndex=b.activeIndex||0,b.activeIndex=e,b.updateRealIndex(),b.rtl&&-i===b.translate||!b.rtl&&i===b.translate?(b.params.autoHeight&&b.updateAutoHeight(),b.updateClasses(),"slide"!==b.params.effect&&b.setWrapperTranslate(i),!1):(b.updateClasses(),b.onTransitionStart(t),0===a||b.browser.lteIE9?(b.setWrapperTranslate(i),b.setWrapperTransition(0),b.onTransitionEnd(t)):(b.setWrapperTranslate(i),b.setWrapperTransition(a),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd(t)}))),!0)))},b.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),b.params.autoHeight&&b.updateAutoHeight(),b.lazy&&b.lazy.onTransitionStart(),e&&(b.emit("onTransitionStart",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeStart",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextStart",b):b.emit("onSlidePrevStart",b)))},b.onTransitionEnd=function(e){b.animating=!1,b.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),b.lazy&&b.lazy.onTransitionEnd(),e&&(b.emit("onTransitionEnd",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeEnd",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextEnd",b):b.emit("onSlidePrevEnd",b))),b.params.history&&b.history&&b.history.setHistory(b.params.history,b.activeIndex),b.params.hashnav&&b.hashnav&&b.hashnav.setHash()},b.slideNext=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)}return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)},b._slideNext=function(e){return b.slideNext(!0,e,!0)},b.slidePrev=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex-1,a,e,t)}return b.slideTo(b.activeIndex-1,a,e,t)},b._slidePrev=function(e){return b.slidePrev(!0,e,!0)},b.slideReset=function(e,a,t){return b.slideTo(b.activeIndex,a,e)},b.disableTouchControl=function(){return b.params.onlyExternal=!0,!0},b.enableTouchControl=function(){return b.params.onlyExternal=!1,!0},b.setWrapperTransition=function(e,a){b.wrapper.transition(e),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTransition(e),b.params.parallax&&b.parallax&&b.parallax.setTransition(e),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTransition(e),b.params.control&&b.controller&&b.controller.setTransition(e,a),b.emit("onSetTransition",b,e)},b.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;b.isHorizontal()?s=b.rtl?-e:e:i=e,b.params.roundLengths&&(s=r(s),i=r(i)),b.params.virtualTranslate||(b.support.transforms3d?b.wrapper.transform("translate3d("+s+"px, "+i+"px, "+n+"px)"):b.wrapper.transform("translate("+s+"px, "+i+"px)")),b.translate=b.isHorizontal()?s:i;var o,l=b.maxTranslate()-b.minTranslate();o=0===l?0:(e-b.minTranslate())/l,o!==b.progress&&b.updateProgress(e),a&&b.updateActiveIndex(),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTranslate(b.translate),b.params.parallax&&b.parallax&&b.parallax.setTranslate(b.translate),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTranslate(b.translate),b.params.control&&b.controller&&b.controller.setTranslate(b.translate,t),b.emit("onSetTranslate",b,b.translate)},b.getTranslate=function(e,a){var t,s,i,r;return"undefined"==typeof a&&(a="x"),b.params.virtualTranslate?b.rtl?-b.translate:b.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new window.WebKitCSSMatrix("none"===s?"":s)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=r.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?r.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?r.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),b.rtl&&s&&(s=-s),s||0)},b.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=b.isHorizontal()?"x":"y"),b.getTranslate(b.wrapper[0],e)},b.observers=[],b.initObservers=function(){if(b.params.observeParents)for(var e=b.container.parents(),a=0;a<e.length;a++)l(e[a]);l(b.container[0],{childList:!1}),l(b.wrapper[0],{attributes:!1})},b.disconnectObservers=function(){for(var e=0;e<b.observers.length;e++)b.observers[e].disconnect();b.observers=[]},b.createLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove();var e=b.wrapper.children("."+b.params.slideClass);"auto"!==b.params.slidesPerView||b.params.loopedSlides||(b.params.loopedSlides=e.length),b.loopedSlides=parseInt(b.params.loopedSlides||b.params.slidesPerView,10),b.loopedSlides=b.loopedSlides+b.params.loopAdditionalSlides,b.loopedSlides>e.length&&(b.loopedSlides=e.length);var t,s=[],i=[];for(e.each(function(t,r){var n=a(this);t<b.loopedSlides&&i.push(r),t<e.length&&t>=e.length-b.loopedSlides&&s.push(r),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)b.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))},b.destroyLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove(),b.slides.removeAttr("data-swiper-slide-index")},b.reLoop=function(e){var a=b.activeIndex-b.loopedSlides;b.destroyLoop(),b.createLoop(),b.updateSlidesSize(),e&&b.slideTo(a+b.loopedSlides,0,!1)},b.fixLoop=function(){var e;b.activeIndex<b.loopedSlides?(e=b.slides.length-3*b.loopedSlides+b.activeIndex,e+=b.loopedSlides,b.slideTo(e,0,!1,!0)):("auto"===b.params.slidesPerView&&b.activeIndex>=2*b.loopedSlides||b.activeIndex>b.slides.length-2*b.params.slidesPerView)&&(e=-b.slides.length+b.activeIndex+b.loopedSlides,e+=b.loopedSlides,b.slideTo(e,0,!1,!0))},b.appendSlide=function(e){if(b.params.loop&&b.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&b.wrapper.append(e[a]);else b.wrapper.append(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0)},b.prependSlide=function(e){b.params.loop&&b.destroyLoop();var a=b.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&b.wrapper.prepend(e[t]);a=b.activeIndex+e.length}else b.wrapper.prepend(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.slideTo(a,0,!1)},b.removeSlide=function(e){b.params.loop&&(b.destroyLoop(),b.slides=b.wrapper.children("."+b.params.slideClass));var a,t=b.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],b.slides[a]&&b.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,b.slides[a]&&b.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.params.loop?b.slideTo(t+b.loopedSlides,0,!1):b.slideTo(t,0,!1)},b.removeAllSlides=function(){for(var e=[],a=0;a<b.slides.length;a++)e.push(a);b.removeSlide(e)},b.effects={fade:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var a=b.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;b.params.virtualTranslate||(s-=b.translate);var i=0;b.isHorizontal()||(i=s,s=0);var r=b.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:r}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(b.slides.transition(e),b.params.virtualTranslate&&0!==e){var a=!1;b.slides.transitionEnd(function(){if(!a&&b){a=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)b.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var t=b.slides.eq(e),s=t[0].progress;b.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,r=-180*s,n=r,o=0,l=-i,p=0;if(b.isHorizontal()?b.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+b.slides.length,b.params.flip.slideShadows){var d=b.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=b.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.virtualTranslate&&0!==e){var t=!1;b.slides.eq(b.activeIndex).transitionEnd(function(){if(!t&&b&&a(this).hasClass(b.params.slideActiveClass)){t=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)b.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;b.params.cube.shadow&&(b.isHorizontal()?(e=b.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.wrapper.append(e)),e.css({height:b.width+"px"})):(e=b.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.container.append(e))));for(var s=0;s<b.slides.length;s++){var i=b.slides.eq(s),r=90*s,n=Math.floor(r/360);b.rtl&&(r=-r,n=Math.floor(-r/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*b.size,d=0):(s-1)%4===0?(l=0,d=4*-n*b.size):(s-2)%4===0?(l=b.size+4*n*b.size,d=b.size):(s-3)%4===0&&(l=-b.size,d=3*b.size+4*b.size*n),b.rtl&&(l=-l),b.isHorizontal()||(p=l,l=0);var u="rotateX("+(b.isHorizontal()?0:-r)+"deg) rotateY("+(b.isHorizontal()?r:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,b.rtl&&(t=90*-s-90*o)),i.transform(u),b.params.cube.slideShadows){var c=b.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=b.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(b.wrapper.css({"-webkit-transform-origin":"50% 50% -"+b.size/2+"px","-moz-transform-origin":"50% 50% -"+b.size/2+"px","-ms-transform-origin":"50% 50% -"+b.size/2+"px","transform-origin":"50% 50% -"+b.size/2+"px"}),b.params.cube.shadow)if(b.isHorizontal())e.transform("translate3d(0px, "+(b.width/2+b.params.cube.shadowOffset)+"px, "+-b.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+b.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=b.params.cube.shadowScale,v=b.params.cube.shadowScale/g,w=b.params.cube.shadowOffset;e.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(b.height/2+w)+"px, "+-b.height/2/v+"px) rotateX(-90deg)")}var y=b.isSafari||b.isUiWebView?-b.size/2:0;b.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(b.isHorizontal()?0:t)+"deg) rotateY("+(b.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.cube.shadow&&!b.isHorizontal()&&b.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=b.translate,t=b.isHorizontal()?-e+b.width/2:-e+b.height/2,s=b.isHorizontal()?b.params.coverflow.rotate:-b.params.coverflow.rotate,i=b.params.coverflow.depth,r=0,n=b.slides.length;r<n;r++){var o=b.slides.eq(r),l=b.slidesSizesGrid[r],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*b.params.coverflow.modifier,u=b.isHorizontal()?s*d:0,c=b.isHorizontal()?0:s*d,m=-i*Math.abs(d),h=b.isHorizontal()?0:b.params.coverflow.stretch*d,g=b.isHorizontal()?b.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var f="translate3d("+g+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=-Math.abs(Math.round(d))+1,b.params.coverflow.slideShadows){var v=b.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=b.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(b.browser.ie){var y=b.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},b.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==b.slides.length)){var s=b.slides.eq(e),i=s.find("."+b.params.lazyLoadingClass+":not(."+b.params.lazyStatusLoadedClass+"):not(."+b.params.lazyStatusLoadingClass+")");!s.hasClass(b.params.lazyLoadingClass)||s.hasClass(b.params.lazyStatusLoadedClass)||s.hasClass(b.params.lazyStatusLoadingClass)||(i=i.add(s[0])),0!==i.length&&i.each(function(){var e=a(this);e.addClass(b.params.lazyStatusLoadingClass);var i=e.attr("data-background"),r=e.attr("data-src"),n=e.attr("data-srcset"),o=e.attr("data-sizes");b.loadImage(e[0],r||i,n,o,!1,function(){if(i?(e.css("background-image",'url("'+i+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),o&&(e.attr("sizes",o),e.removeAttr("data-sizes")),r&&(e.attr("src",r),e.removeAttr("data-src"))),e.addClass(b.params.lazyStatusLoadedClass).removeClass(b.params.lazyStatusLoadingClass),s.find("."+b.params.lazyPreloaderClass+", ."+b.params.preloaderClass).remove(),b.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(b.params.slideDuplicateClass)){var l=b.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+b.params.slideDuplicateClass+")");b.lazy.loadImageInSlide(l.index(),!1)}else{var p=b.wrapper.children("."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');b.lazy.loadImageInSlide(p.index(),!1)}}b.emit("onLazyImageReady",b,s[0],e[0])}),b.emit("onLazyImageLoad",b,s[0],e[0])})}},load:function(){var e,t=b.params.slidesPerView;if("auto"===t&&(t=0),b.lazy.initialImageLoaded||(b.lazy.initialImageLoaded=!0),b.params.watchSlidesVisibility)b.wrapper.children("."+b.params.slideVisibleClass).each(function(){b.lazy.loadImageInSlide(a(this).index())});else if(t>1)for(e=b.activeIndex;e<b.activeIndex+t;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);else b.lazy.loadImageInSlide(b.activeIndex);if(b.params.lazyLoadingInPrevNext)if(t>1||b.params.lazyLoadingInPrevNextAmount&&b.params.lazyLoadingInPrevNextAmount>1){var s=b.params.lazyLoadingInPrevNextAmount,i=t,r=Math.min(b.activeIndex+i+Math.max(s,i),b.slides.length),n=Math.max(b.activeIndex-Math.max(i,s),0);for(e=b.activeIndex+t;e<r;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);for(e=n;e<b.activeIndex;e++)b.slides[e]&&b.lazy.loadImageInSlide(e)}else{var o=b.wrapper.children("."+b.params.slideNextClass);o.length>0&&b.lazy.loadImageInSlide(o.index());var l=b.wrapper.children("."+b.params.slidePrevClass);l.length>0&&b.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){b.params.lazyLoading&&(b.params.lazyLoadingOnTransitionStart||!b.params.lazyLoadingOnTransitionStart&&!b.lazy.initialImageLoaded)&&b.lazy.load()},onTransitionEnd:function(){b.params.lazyLoading&&!b.params.lazyLoadingOnTransitionStart&&b.lazy.load()}},b.scrollbar={isTouched:!1,setDragPosition:function(e){var a=b.scrollbar,t=b.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[b.isHorizontal()?"left":"top"]-a.dragSize/2,i=-b.minTranslate()*a.moveDivider,r=-b.maxTranslate()*a.moveDivider;s<i?s=i:s>r&&(s=r),s=-s/a.moveDivider,b.updateProgress(s),b.setWrapperTranslate(s,!0)},dragStart:function(e){var a=b.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),b.params.scrollbarHide&&a.track.css("opacity",1),b.wrapper.transition(100),a.drag.transition(100),b.emit("onScrollbarDragStart",b)},dragMove:function(e){var a=b.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),b.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),b.emit("onScrollbarDragMove",b))},dragEnd:function(e){var a=b.scrollbar;a.isTouched&&(a.isTouched=!1,b.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),b.emit("onScrollbarDragEnd",b),b.params.scrollbarSnapOnRelease&&b.slideReset())},draggableEvents:function(){return b.params.simulateTouch!==!1||b.support.touch?b.touchEvents:b.touchEventsDesktop}(),enableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).on(e.draggableEvents.start,e.dragStart),a(t).on(e.draggableEvents.move,e.dragMove),a(t).on(e.draggableEvents.end,e.dragEnd)},disableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).off(e.draggableEvents.start,e.dragStart),a(t).off(e.draggableEvents.move,e.dragMove),a(t).off(e.draggableEvents.end,e.dragEnd)},set:function(){if(b.params.scrollbar){var e=b.scrollbar;e.track=a(b.params.scrollbar),b.params.uniqueNavElements&&"string"==typeof b.params.scrollbar&&e.track.length>1&&1===b.container.find(b.params.scrollbar).length&&(e.track=b.container.find(b.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=b.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=b.size/b.virtualSize,e.moveDivider=e.divider*(e.trackSize/b.size),e.dragSize=e.trackSize*e.divider,b.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",b.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(b.params.scrollbar){var e,a=b.scrollbar,t=(b.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*b.progress,b.rtl&&b.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),b.isHorizontal()?(b.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(b.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),b.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){b.params.scrollbar&&b.scrollbar.drag.transition(e)}},b.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=i(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var i=function(){var e,a,t;return function(s,i){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=i?a=t:e=t;return e}}()},getInterpolateFunction:function(e){b.controller.spline||(b.controller.spline=b.params.loop?new b.controller.LinearSpline(b.slidesGrid,e.slidesGrid):new b.controller.LinearSpline(b.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-b.translate:b.translate,"slide"===b.params.controlBy&&(b.controller.getInterpolateFunction(a),r=-b.controller.spline.interpolate(-e)),r&&"container"!==b.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(b.maxTranslate()-b.minTranslate()),r=(e-b.minTranslate())*i+a.minTranslate()),b.params.controlInverse&&(r=a.maxTranslate()-r),a.updateProgress(r),a.setWrapperTranslate(r,!1,b),a.updateActiveIndex()}var i,r,n=b.params.control;if(b.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){
a.setWrapperTransition(e,b),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){r&&(a.params.loop&&"slide"===b.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,r=b.params.control;if(b.isArray(r))for(i=0;i<r.length;i++)r[i]!==a&&r[i]instanceof t&&s(r[i]);else r instanceof t&&a!==r&&s(r)}},b.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#",""),s=b.slides.eq(b.activeIndex).attr("data-hash");t!==s&&b.slideTo(b.wrapper.children("."+b.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(e){var t=e?"off":"on";a(window)[t]("hashchange",b.hashnav.onHashCange)},setHash:function(){if(b.hashnav.initialized&&b.params.hashnav)if(b.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+b.slides.eq(b.activeIndex).attr("data-hash")||"");else{var e=b.slides.eq(b.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(b.params.hashnav&&!b.params.history){b.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,s=b.slides.length;t<s;t++){var i=b.slides.eq(t),r=i.attr("data-hash")||i.attr("data-history");if(r===e&&!i.hasClass(b.params.slideDuplicateClass)){var n=i.index();b.slideTo(n,a,b.params.runCallbacksOnInit,!0)}}b.params.hashnavWatchState&&b.hashnav.attachEvents()}},destroy:function(){b.params.hashnavWatchState&&b.hashnav.attachEvents(!0)}},b.history={init:function(){if(b.params.history){if(!window.history||!window.history.pushState)return b.params.history=!1,void(b.params.hashnav=!0);b.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,b.params.runCallbacksOnInit),b.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){b.history.paths=b.history.getPathValues(),b.history.scrollToSlide(b.params.speed,b.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length,t=e[a-2],s=e[a-1];return{key:t,value:s}},setHistory:function(e,a){if(b.history.initialized&&b.params.history){var t=b.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),b.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,i=b.slides.length;s<i;s++){var r=b.slides.eq(s),n=this.slugify(r.attr("data-history"));if(n===a&&!r.hasClass(b.params.slideDuplicateClass)){var o=r.index();b.slideTo(o,e,t)}}else b.slideTo(0,e,t)}},b.disableKeyboardControl=function(){b.params.keyboardControl=!1,a(document).off("keydown",p)},b.enableKeyboardControl=function(){b.params.keyboardControl=!0,a(document).on("keydown",p)},b.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},b.params.mousewheelControl&&(b.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":d()?"wheel":"mousewheel"),b.disableMousewheelControl=function(){if(!b.mousewheel.event)return!1;var e=b.container;return"container"!==b.params.mousewheelEventsTarged&&(e=a(b.params.mousewheelEventsTarged)),e.off(b.mousewheel.event,u),!0},b.enableMousewheelControl=function(){if(!b.mousewheel.event)return!1;var e=b.container;return"container"!==b.params.mousewheelEventsTarged&&(e=a(b.params.mousewheelEventsTarged)),e.on(b.mousewheel.event,u),!0},b.parallax={setTranslate:function(){b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,b.progress)}),b.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);m(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=b.params.speed),b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},b.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:b.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY,r=Math.sqrt(Math.pow(s-a,2)+Math.pow(i-t,2));return r},onGestureStart:function(e){var t=b.zoom;if(!b.support.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(e)}return t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=a(this),0===t.gesture.slide.length&&(t.gesture.slide=b.slides.eq(b.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+b.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||b.params.zoomMax,0!==t.gesture.imageWrap.length)?(t.gesture.image.transition(0),void(t.isScaling=!0)):void(t.gesture.image=void 0)},onGestureChange:function(e){var a=b.zoom;if(!b.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(b.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<b.params.zoomMin&&(a.scale=b.params.zoomMin+1-Math.pow(b.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=b.zoom;!b.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),b.params.zoomMin),a.gesture.image.transition(b.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=b.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(b.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=b.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=b.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),b.rtl&&(a.image.startX=-a.image.startX),b.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(b.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!b.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,i=300,r=t.velocity.x*s,n=t.image.currentX+r,o=t.velocity.y*i,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(i=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,i);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(e,t){var s=e.zoom;if(s.gesture.slide||(s.gesture.slide=e.clickedSlide?a(e.clickedSlide):e.slides.eq(e.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+e.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var i,r,n,o,l,p,d,u,c,m,h,g,f,v,w,y,x,T;"undefined"==typeof s.image.touchesStart.x&&t?(i="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,r="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(i=s.image.touchesStart.x,r=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||e.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-i,p=o+T/2-r,c=s.gesture.image[0].offsetWidth,m=s.gesture.image[0].offsetHeight,h=c*s.scale,g=m*s.scale,f=Math.min(x/2-h/2,0),v=Math.min(T/2-g/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(e){var t=e?"off":"on";if(b.params.zoom){var s=(b.slides,!("touchstart"!==b.touchEvents.start||!b.support.passiveListener||!b.params.passiveListeners)&&{passive:!0,capture:!1});b.support.gestures?(b.slides[t]("gesturestart",b.zoom.onGestureStart,s),b.slides[t]("gesturechange",b.zoom.onGestureChange,s),b.slides[t]("gestureend",b.zoom.onGestureEnd,s)):"touchstart"===b.touchEvents.start&&(b.slides[t](b.touchEvents.start,b.zoom.onGestureStart,s),b.slides[t](b.touchEvents.move,b.zoom.onGestureChange,s),b.slides[t](b.touchEvents.end,b.zoom.onGestureEnd,s)),b[t]("touchStart",b.zoom.onTouchStart),b.slides.each(function(e,s){a(s).find("."+b.params.zoomContainerClass).length>0&&a(s)[t](b.touchEvents.move,b.zoom.onTouchMove)}),b[t]("touchEnd",b.zoom.onTouchEnd),b[t]("transitionEnd",b.zoom.onTransitionEnd),b.params.zoomToggle&&b.on("doubleTap",b.zoom.toggleZoom)}},init:function(){b.zoom.attachEvents()},destroy:function(){b.zoom.attachEvents(!0)}},b._plugins=[];for(var O in b.plugins){var N=b.plugins[O](b,b.params[O]);N&&b._plugins.push(N)}return b.callPlugins=function(e){for(var a=0;a<b._plugins.length;a++)e in b._plugins[a]&&b._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.emitterEventListeners={},b.emit=function(e){b.params[e]&&b.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(b.emitterEventListeners[e])for(a=0;a<b.emitterEventListeners[e].length;a++)b.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);b.callPlugins&&b.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.on=function(e,a){return e=h(e),b.emitterEventListeners[e]||(b.emitterEventListeners[e]=[]),b.emitterEventListeners[e].push(a),b},b.off=function(e,a){var t;if(e=h(e),"undefined"==typeof a)return b.emitterEventListeners[e]=[],b;if(b.emitterEventListeners[e]&&0!==b.emitterEventListeners[e].length){for(t=0;t<b.emitterEventListeners[e].length;t++)b.emitterEventListeners[e][t]===a&&b.emitterEventListeners[e].splice(t,1);return b}},b.once=function(e,a){e=h(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),b.off(e,t)};return b.on(e,t),b},b.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(b.params.nextButton)?(b.onClickNext(e),b.isEnd?b.a11y.notify(b.params.lastSlideMessage):b.a11y.notify(b.params.nextSlideMessage)):a(e.target).is(b.params.prevButton)&&(b.onClickPrev(e),b.isBeginning?b.a11y.notify(b.params.firstSlideMessage):b.a11y.notify(b.params.prevSlideMessage)),a(e.target).is("."+b.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="'+b.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=b.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.a11y.makeFocusable(b.nextButton),b.a11y.addRole(b.nextButton,"button"),b.a11y.addLabel(b.nextButton,b.params.nextSlideMessage)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.a11y.makeFocusable(b.prevButton),b.a11y.addRole(b.prevButton,"button"),b.a11y.addLabel(b.prevButton,b.params.prevSlideMessage)),a(b.container).append(b.a11y.liveRegion)},initPagination:function(){b.params.pagination&&b.params.paginationClickable&&b.bullets&&b.bullets.length&&b.bullets.each(function(){var e=a(this);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){b.a11y.liveRegion&&b.a11y.liveRegion.length>0&&b.a11y.liveRegion.remove()}},b.init=function(){b.params.loop&&b.createLoop(),b.updateContainerSize(),b.updateSlidesSize(),b.updatePagination(),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.set(),b.params.scrollbarDraggable&&b.scrollbar.enableDraggable()),"slide"!==b.params.effect&&b.effects[b.params.effect]&&(b.params.loop||b.updateProgress(),b.effects[b.params.effect].setTranslate()),b.params.loop?b.slideTo(b.params.initialSlide+b.loopedSlides,0,b.params.runCallbacksOnInit):(b.slideTo(b.params.initialSlide,0,b.params.runCallbacksOnInit),0===b.params.initialSlide&&(b.parallax&&b.params.parallax&&b.parallax.setTranslate(),b.lazy&&b.params.lazyLoading&&(b.lazy.load(),b.lazy.initialImageLoaded=!0))),b.attachEvents(),b.params.observer&&b.support.observer&&b.initObservers(),b.params.preloadImages&&!b.params.lazyLoading&&b.preloadImages(),b.params.zoom&&b.zoom&&b.zoom.init(),b.params.autoplay&&b.startAutoplay(),b.params.keyboardControl&&b.enableKeyboardControl&&b.enableKeyboardControl(),b.params.mousewheelControl&&b.enableMousewheelControl&&b.enableMousewheelControl(),b.params.hashnavReplaceState&&(b.params.replaceState=b.params.hashnavReplaceState),b.params.history&&b.history&&b.history.init(),b.params.hashnav&&b.hashnav&&b.hashnav.init(),b.params.a11y&&b.a11y&&b.a11y.init(),b.emit("onInit",b)},b.cleanupStyles=function(){b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),b.wrapper.removeAttr("style"),b.slides&&b.slides.length&&b.slides.removeClass([b.params.slideVisibleClass,b.params.slideActiveClass,b.params.slideNextClass,b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),b.paginationContainer&&b.paginationContainer.length&&b.paginationContainer.removeClass(b.params.paginationHiddenClass),b.bullets&&b.bullets.length&&b.bullets.removeClass(b.params.bulletActiveClass),b.params.prevButton&&a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.nextButton&&a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.track&&b.scrollbar.track.length&&b.scrollbar.track.removeAttr("style"),b.scrollbar.drag&&b.scrollbar.drag.length&&b.scrollbar.drag.removeAttr("style"))},b.destroy=function(e,a){b.detachEvents(),b.stopAutoplay(),b.params.scrollbar&&b.scrollbar&&b.params.scrollbarDraggable&&b.scrollbar.disableDraggable(),b.params.loop&&b.destroyLoop(),a&&b.cleanupStyles(),b.disconnectObservers(),b.params.zoom&&b.zoom&&b.zoom.destroy(),b.params.keyboardControl&&b.disableKeyboardControl&&b.disableKeyboardControl(),b.params.mousewheelControl&&b.disableMousewheelControl&&b.disableMousewheelControl(),b.params.a11y&&b.a11y&&b.a11y.destroy(),b.params.history&&!b.params.replaceState&&window.removeEventListener("popstate",b.history.setHistoryPopState),b.params.hashnav&&b.hashnav&&b.hashnav.destroy(),b.emit("onDestroy"),e!==!1&&(b=null)},b.init(),b}};t.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||i||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var s=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var s=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var r,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)s.push(n.childNodes[i])}else for(r=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<r.length;i++)r[i]&&s.push(r[i])}else if(a.nodeType||a===window||a===document)s.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)s.push(a[i]);return new e(s)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.remove(a[t]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var s in e)this[t][s]=e[s],this[t].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var s=this[t];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,s,i){function r(e){var i=e.target;if(a(i).is(t))s.call(i,e);else for(var r=a(i).parents(),n=0;n<r.length;n++)a(r[n]).is(t)&&s.call(r[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(s=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],s,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:s,liveListener:r}),this[n].addEventListener(l[o],r,i);return this},off:function(e,a,t,s){for(var i=e.split(" "),r=0;r<i.length;r++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],s=arguments[2]||!1),this[n].removeEventListener(i[r],t,s);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[r],this[n].dom7LiveListeners[o].liveListener,s);return this},once:function(e,a,t,s){function i(n){t(n),r.off(e,a,i,s)}var r=this;"function"==typeof a&&(a=!1,t=arguments[1],s=arguments[2]),r.on(e,a,i,s)},trigger:function(e,a){for(var t=0;t<this.length;t++){var s;try{s=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(t){s=document.createEvent("Event"),s.initEvent(e,!0,!0),s.detail=a}this[t].dispatchEvent(s)}return this},transitionEnd:function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,s=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,r=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+r-s,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var s in e)this[t].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var s,i;if("string"==typeof t){var r=this[0];if(r===document)return t===document;if(r===window)return t===window;if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector)return r.mozMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(s=a(t),i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(s=t.nodeType?[t]:t,i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,s=this.length;return a>s-1?new e([]):a<0?(t=s+a,new e(t<0?[]:[this[t]])):new e([this[a]])},append:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].appendChild(a[s]);else this[t].appendChild(a);return this},prepend:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,s=i.childNodes.length-1;s>=0;s--)this[t].insertBefore(i.childNodes[s],this[t].childNodes[0])}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].insertBefore(a[s],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var r=i.nextElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var r=i.previousElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},parent:function(e){for(var t=[],s=0;s<this.length;s++)e?a(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].querySelectorAll(a),r=0;r<i.length;r++)t.push(i[r]);return new e(t)},children:function(t){for(var s=[],i=0;i<this.length;i++)for(var r=this[i].childNodes,n=0;n<r.length;n++)t?1===r[n].nodeType&&a(r[n]).is(t)&&s.push(r[n]):1===r[n].nodeType&&s.push(r[n]);return new e(a.unique(s))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,s=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)s[s.length]=i[t],s.length++}return s}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)a.indexOf(e[t])===-1&&a.push(e[t]);return a},a}()),i=["jQuery","Zepto","Dom7"],r=0;r<i.length;r++)window[i[r]]&&e(window[i[r]]);var n;n="undefined"==typeof s?window.Dom7||window.Zepto||window.jQuery:s,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e;
}return this}),"outerWidth"in n.fn||(n.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=t}(), true?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            isShow: true
        };
    },
    methods: {
        showFn: function (value) {
            this.isShow = value;
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
	components: {
		vHeader: __WEBPACK_IMPORTED_MODULE_0__header_header_vue___default.a
	},
	props: {
		Data: {},
		isShow: Boolean,
		title: null
	},
	data() {
		return {
			isShow1: true,
			S: true,
			Y: false,
			carBol: false,
			number: 1,
			okBol: false,
			arr: []
		};
	},
	methods: {
		show: function () {
			this.$emit("onGoodsShow", this.isShow1);
		},
		sFn: function () {
			this.S = true;
			this.Y = false;
		},
		yFn: function () {
			this.S = false;
			this.Y = true;
		},
		buyFn: function () {
			alert("购买功能正在努力完成");
		},
		carShow: function () {
			this.carBol = true;
			this.okBol = true;
		},
		carHide: function () {
			this.carBol = false;
			this.Data.number = this.number;
			this.Data.title = this.title;
			this.Data.bol = false;
			this.arr = JSON.parse(localStorage.getItem("arrs")) || [];
			// if (arr.length==0) {arr.push(obj)}
			//
			for (var i = 0; i < this.arr.length; i++) {
				if (this.arr[i].title == this.Data.title) {
					break;
				}
			}
			if (i == this.arr.length) {
				this.arr.push(this.Data);
			}
			var arrs = JSON.stringify(this.arr);
			localStorage.setItem("arrs", arrs); //存入
			// localStorage.clear();//清除所有
		},
		numberSub: function () {
			this.number -= 1;
			if (this.number <= 1) {
				this.number = 1;
			}
		},
		numberAdd: function () {
			this.number += 1;
		},
		closeFn: function () {
			this.carBol = false;
			this.okBol = false;
		}
	}
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_swiper_3_4_1_min_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_swiper_3_4_1_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_js_swiper_3_4_1_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        imgData: {
            type: Array
        }
    },
    watch: {
        imgData: function () {
            setTimeout(function () {
                //为了让dom加载出来
                new __WEBPACK_IMPORTED_MODULE_0__static_js_swiper_3_4_1_min_js___default.a('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: 2000,
                    speed: 300,
                    pagination: '.swiper-pagination',
                    autoplayDisableOnInteraction: false
                }, 10);
            });
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['title']
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_goods_goods_json__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_goods_goods_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_data_goods_goods_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        vHeader: __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default.a
    },
    data() {
        return {
            goods: [],
            titleArr: [],
            detailsData: [],
            isShow: true,
            title: null
        };
    },
    created() {
        this.goods = __WEBPACK_IMPORTED_MODULE_1__static_data_goods_goods_json___default.a.list.pageList;
        this.titleFn();
    },
    methods: {
        titleFn: function () {
            //处理字体过多
            for (var i = 0; i < this.goods.length; i++) {
                if (this.goods[i].title.length > 18) {
                    this.titleArr[i] = this.goods[i].title.slice(0, 18) + "...";
                }
            }
        },
        detailsFn: function (item, index) {
            this.title = this.titleArr[index];
            this.isShow = false;
            this.detailsData = item;
            this.$router.push({ name: 'details' });
        },
        show: function (value) {
            this.isShow = value;
        }
    },
    watch: {
        "$route": function () {
            //监听返回
            if (this.$route.path == "/goods") {
                this.isShow = true;
            }
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_swiper_3_4_1_min_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_swiper_3_4_1_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_js_swiper_3_4_1_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_figure_figure_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_figure_figure_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_figure_figure_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_details_details_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_details_details_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_details_details_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_data_home_home_json__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_data_home_home_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_data_home_home_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        vHeader: __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue___default.a,
        scrollImg: __WEBPACK_IMPORTED_MODULE_2__components_figure_figure_vue___default.a,
        vDetails: __WEBPACK_IMPORTED_MODULE_3__components_details_details_vue___default.a
    },
    data() {
        return {
            Data: {},
            Figure: [],
            List: [],
            isShow: true,
            title: null,
            Data: null
        };
    },
    methods: {
        showFn: function (value) {
            this.$emit('onShow', this.isShow);
        },
        showFn1: function (value) {
            this.isShow = value;
            this.$emit('onShow', this.isShow);
        },
        showFn2: function (value) {
            this.isShow = value;
        },
        detailsFn: function (Data) {
            this.isShow2 = false;
            this.isShow = this.isShow2;
            this.Data = Data;
            if (Data.title.length > 15) {
                this.title = Data.title.slice(0, 15);
            }
            this.title = Data.title;
        }
    },
    created() {
        this.Data = __WEBPACK_IMPORTED_MODULE_4__static_data_home_home_json___default.a;
        this.Figure = this.Data.param.advertList;
        this.List = this.Data.list.pageList;
    },
    watch: {
        "$route": function () {
            //监听返回
            if (this.$route.path == "/home") {
                this.isShow = true;
                this.$emit('onShow', this.isShow);
            }
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_figure_figure_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_figure_figure_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_figure_figure_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_header_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        scrollImg: __WEBPACK_IMPORTED_MODULE_0__components_figure_figure_vue___default.a,
        vHeader: __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue___default.a
    },
    data() {
        return {
            scrollImg: [], //右边数据
            leftNav: [], //头部和左边导航
            pageList: [],
            CommonUrl: {
                "0": __webpack_require__(71),
                "1": __webpack_require__(58),
                "2": '../../../../static/data/home/food/foodtop.json',
                "3": '../../../../static/data/home/supplies/suppliestop.json'
            },
            RightUrl: {
                "0": { //j精彩生活
                    "0": __webpack_require__(59),
                    "1": __webpack_require__(60),
                    "2": __webpack_require__(61),
                    "3": __webpack_require__(62),
                    "4": __webpack_require__(63),
                    "5": __webpack_require__(64),
                    "6": __webpack_require__(65),
                    "7": __webpack_require__(66),
                    "8": __webpack_require__(67),
                    "9": __webpack_require__(68),
                    "10": __webpack_require__(69),
                    "11": __webpack_require__(70),
                    "12": __webpack_require__(73),
                    "13": __webpack_require__(72),
                    "14": __webpack_require__(74),
                    "15": __webpack_require__(75)
                },
                "1": { //生活家居
                    "0": __webpack_require__(56),
                    "1": __webpack_require__(57)
                },
                "2": { //生活食品
                    "0": __webpack_require__(47),
                    "1": __webpack_require__(48),
                    "2": __webpack_require__(49),
                    "3": __webpack_require__(50),
                    "4": __webpack_require__(51),
                    "5": __webpack_require__(52),
                    "6": __webpack_require__(53),
                    "7": __webpack_require__(54)
                },
                "3": { //生活用品
                    "0": __webpack_require__(76),
                    "1": __webpack_require__(77),
                    "2": __webpack_require__(78),
                    "3": __webpack_require__(79),
                    "4": __webpack_require__(80),
                    "5": __webpack_require__(81),
                    "6": __webpack_require__(82),
                    "7": __webpack_require__(83),
                    "8": __webpack_require__(84),
                    "9": __webpack_require__(85),
                    "10": __webpack_require__(86)
                }
            },
            isShow: false,
            showData: true,
            titleArr: [],
            showLine: false
        };
    },
    methods: {
        get: function (url, DataName, Data) {
            var D = url;
            this[DataName] = D.list[Data];
            this.titleFn();
        },
        backFn: function () {
            window.history.back();
            this.isShow = true;
            this.$emit("onShow1", this.isShow);
        },
        showRight: function (index) {
            if (this.RightUrl[this.$route.params.homeID][index]) {
                this.showData = true;
                this.get(this.RightUrl[this.$route.params.homeID][index], "pageList", "pageList");
            } else {
                this.showData = false;
            }
            for (var i = 0; i < this.leftNav.length; i++) {
                this.leftNav[i].bol = false;
            }
            this.leftNav[index].bol = !this.showLine;
        },
        titleFn: function () {
            //处理字体过多
            for (var i = 0; i < this.pageList.length; i++) {
                if (this.pageList[i].title.length > 18) {
                    this.titleArr[i] = this.pageList[i].title.slice(0, 18);
                }
            }
        }
    },
    created() {
        this.get(this.CommonUrl[this.$route.params.homeID], "scrollImg", "scrollImg"); //一开始加载加载头部轮播图
        this.get(this.CommonUrl[this.$route.params.homeID], "leftNav", "leftNav"); //一开始加载加载左边导航
        this.get(this.RightUrl[this.$route.params.homeID][0], "pageList", "pageList"); //一开始初始化右边内容
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_img_icon_png__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_img_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_img_icon_png__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        vHeader: __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default.a
    },
    data() {
        return {
            icon: __WEBPACK_IMPORTED_MODULE_1__static_img_icon_png___default.a
        };
    },
    methods: {
        ShopPushFn: function () {
            this.$router.push({ name: 'shop' });
        }
    }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_img_gou_png__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_img_gou_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_img_gou_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_img_gou2_png__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_img_gou2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_img_gou2_png__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        vHeader: __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default.a
    },
    data() {
        return {
            arr: [],
            all_bol: false,
            checkTrue: __WEBPACK_IMPORTED_MODULE_1__static_img_gou_png___default.a,
            checkFalse: __WEBPACK_IMPORTED_MODULE_2__static_img_gou2_png___default.a,
            editor_bol: false,
            countSum: 0,
            maidan: false,
            len: 0
        };
    },
    created() {
        if (localStorage.arrs) {
            var str = localStorage.getItem('arrs'); //读取
            var arr = JSON.parse(str); //重新转换为对象
            this.arr = arr;
        }
    },
    methods: {
        subFn: function (item) {
            item.number--;
            if (item.number <= 1) {
                item.number = 1;
            }
            this.countFn();
        },
        addFn: function (item) {
            item.number++;
            this.countFn();
        },
        checkFn: function (item) {
            item.bol = !item.bol;
            if (item.bol) {
                this.len++;
            } else {
                this.len--;
            }
            for (var i = 0; i < this.arr.length; i++) {
                if (!this.arr[i].bol) {
                    break;
                }
            }
            if (i == this.arr.length) {
                this.all_bol = true;
            } else {
                this.all_bol = false;
            }
            this.countFn();
        },
        allCheckFn: function () {
            this.all_bol = !this.all_bol;
            for (var i = 0; i < this.arr.length; i++) {
                this.arr[i].bol = this.all_bol;
            }
            if (this.all_bol) {
                this.len = this.arr.length;
            } else {
                this.len = 0;
            }
            this.countFn();
        },
        editorFn: function () {
            //编辑
            this.editor_bol = !this.editor_bol;
        },
        countFn: function () {
            //计算总金额
            this.countSum = 0;
            for (var i = 0; i < this.arr.length; i++) {
                if (this.arr[i].bol) {
                    this.maidan = true;
                    this.arr[i].sum = this.arr[i].salesPrice * this.arr[i].number;
                } else {
                    this.arr[i].sum = 0;
                }
            }
            for (var i = 0; i < this.arr.length; i++) {
                this.countSum += this.arr[i].sum;
            }
            //去结账
            for (var i = 0; i < this.arr.length; i++) {
                if (this.arr[i].bol) {
                    break;
                }
            }
            if (i == this.arr.length) {
                this.maidan = false;
            } else {
                this.maidan = true;
            }
        },
        del: function () {
            for (var i = 0; i < this.arr.length; i++) {
                if (this.arr[i].bol) {
                    this.arr.splice(i, 1);
                    i--;
                    var arrs = JSON.stringify(this.arr);
                    localStorage.setItem("arrs", arrs); //存入
                    this.countFn();
                }
            }
        },
        maidanFn: function () {
            alert("支付功能暂没实现");
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPxQTFRF//789rZa+MeB8pMK9rFO9rFP+tim9ac38pII85kY+tWh/OTD97li85YR/fDe/vXp+ciD8pEH+tin97pi85gX9aY28pIJ+tWg/vXo/OTC/vXn9rBN///+8pML/fHf+cmE85UQ/fDd8pEG85YS85cV/vbq/e3X/OXF+9+3/fLh9rJR/vnx9rJS+tSe+cuK9KUz97tl//z49KMv+cmG9KAn97hg85kZ8pAF+tOd9atA//369rRW/OXE+ciC850h+cqH++G7+tSf/vjw+MN4+dCU/evS85QO+9qs+c+T9a1G9rJQ+MBx85se9KEr/vTm/OjL/vv1////8pAE////BRbWSwAAAFR0Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/dy0QAAAVJJREFUeNqU1OeSgjAQAOBVpCOIYu96vfd+5/XeNr7/uxxFTALBmds/WZJvIFmSwJSGY1RUXZJ0tWK0mG6YZ6askXm4spkidoEkomDzpDwmqRgrLCkRYZQomZCMOIxJmWRGOSK9YjYp9kJSEI/unXWDdQXkSizUfdwKWtMn70Jxso6PYbIxBUcTCfcWV6Uw0xwwhC/ZwdbnLDWgIhKXnYvzOLdAFYivTfyg8wY9SvJ5phgrqNAnD7phewA4N6cv+PRMiQTRvEmOmge8PyIs8UjCvEGHq7dHpzszN8t4zc29ChbhjPSDayOOWGzpArON9hJfgTo0NM7g7y4vtAZMZcKZ40QZZf9Pm2xH7jVZaXPBloqiHe46e9HGtKPtrWQTJT4k/SzR/89R8781SIOBwh/7YWpd7WHq8mjKLh0fyU3B/eJfQXWrqtdqetW6+2a6/wQYAEwLR/cmAfjfAAAAAElFTkSuQmCC"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEJQTFRF6enp8PDw7e3t5ubm3Nzc7u7u4+Pj+vr65+fn4uLi9vb2/Pz86Ojo3d3d39/f5eXl+/v79/f38fHx3t7e8vLy////lXpQYwAAABZ0Uk5T////////////////////////////AAHSwOQAAADXSURBVHjalJRtD4MgDIRPQBHUubX1///VocaXRcTuPhHyJIW2d5gOdYTAznEAdadr7KdohwamIqoMGmfjBfGWQbKLwNb/IsLtCVigluWMGK7loprNgdSvSjKqXvWGCGeJxCy1EuJzVbZafkFsK7dq7Yx8WArimBCLEgI7oRuohNDQgRopqiEAZQQ9gikjJuCubUf74KiMkNMgikKK5/bPn1a0TjEAxRin+LwM5ZUatYupWO9kozuTmH+spjFszvajz4SHm8MjPeEmPNYI6tcI6ul9uv4KMAA46FJkjcVobgAAAABJRU5ErkJggg=="

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon.e2e33c8.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_c('div', {
    staticClass: "homeDetails"
  }, [_c('v-header', [_c('i', {
    staticClass: "icon iconfont icon-fanhui back",
    on: {
      "click": _vm.backFn
    },
    slot: "back"
  }), _vm._v(" "), _c('div', {
    staticClass: "search",
    slot: "text"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入您想要的商品或者商家"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-sousuo_sousuo"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "homeDetails-content"
  }, [_c('scroll-img', {
    attrs: {
      "imgData": _vm.scrollImg
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', {
    staticClass: "left"
  }, _vm._l((_vm.leftNav), function(leftData, index) {
    return _c('li', {
      class: {
        cahngeBg: leftData.bol
      },
      on: {
        "click": function($event) {
          _vm.showRight(index)
        }
      }
    }, [_vm._v("\n                        " + _vm._s(leftData.title) + "\n                        "), _c('span', {
      class: {
        homeDetailsLine: leftData.bol
      }
    })])
  })), _vm._v(" "), (_vm.showData) ? _c('ul', {
    staticClass: "right"
  }, _vm._l((_vm.pageList), function(pageListData, j) {
    return _c('li', [_c('img', {
      attrs: {
        "src": pageListData.pic
      }
    }), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.titleArr[j]))]), _vm._v(" "), _c('p', {
      staticClass: "text-pri"
    }, [_c('span', [_vm._v("¥" + _vm._s(pageListData.salesPrice))]), _vm._v(" "), _c('span', [_vm._v("¥原价" + _vm._s(pageListData.marketPrice))])])])])
  })) : _vm._e()])], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l((_vm.imgData), function(item, index) {
    return _c('img', {
      staticClass: "swiper-slide",
      attrs: {
        "src": item.pic
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination"
  })])
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "shop"
  }, [_c('v-header', {
    attrs: {
      "title": "购物车"
    }
  }, [_c('div', {
    staticClass: "editor",
    on: {
      "click": _vm.editorFn
    },
    slot: "text"
  }, [_vm._v("编辑")])]), _vm._v(" "), _c('div', {
    staticClass: "shop-content"
  }, [_c('ul', {
    staticClass: "shop-list"
  }, _vm._l((_vm.arr), function(item, index) {
    return _c('li', [_c('div', {
      staticClass: "check",
      on: {
        "click": function($event) {
          _vm.checkFn(item)
        }
      }
    }, [(item.bol) ? _c('img', {
      attrs: {
        "src": _vm.checkTrue
      }
    }) : (!item.bol) ? _c('img', {
      attrs: {
        "src": _vm.checkFalse
      }
    }) : _vm._e()]), _vm._v(" "), _c('img', {
      attrs: {
        "src": item.pic
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "txt"
    }, [_c('p', {
      staticClass: "p1"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
      staticClass: "p2"
    }, [_vm._v("原价:¥" + _vm._s(item.marketPrice))]), _vm._v(" "), _c('p', {
      staticClass: "p3"
    }, [_vm._v("¥" + _vm._s(item.salesPrice))])]), _vm._v(" "), _c('ul', {
      staticClass: "editor-con"
    }, [(!_vm.editor_bol) ? _c('li', {
      staticClass: "editor-count"
    }, [_vm._v("X " + _vm._s(item.number))]) : (_vm.editor_bol) ? _c('li', {
      staticClass: "editor-number"
    }, [_c('span', {
      on: {
        "click": function($event) {
          _vm.subFn(item)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('span', {
      staticClass: "number"
    }, [_vm._v(_vm._s(item.number))]), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          _vm.addFn(item)
        }
      }
    }, [_vm._v("+")])]) : _vm._e()])])
  })), _vm._v(" "), _c('div', {
    staticClass: "shop-footer"
  }, [_c('div', {
    staticClass: "check",
    on: {
      "click": function($event) {
        _vm.allCheckFn()
      }
    }
  }, [_c('p', [_vm._v("全选")]), _vm._v(" "), (_vm.all_bol) ? _c('img', {
    attrs: {
      "src": _vm.checkTrue
    }
  }) : (!_vm.all_bol) ? _c('img', {
    attrs: {
      "src": _vm.checkFalse
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "sum"
  }, [_c('p', {
    staticClass: "sum-p1"
  }, [_vm._v("合计"), _c('span', {
    staticStyle: {
      "color": "rgb(227, 123, 0)",
      "font-size": "18px"
    }
  }, [_vm._v("¥" + _vm._s(_vm.countSum))])]), _vm._v(" "), _c('p', {
    staticClass: "sum-p1"
  }, [_vm._v("不含运费")])]), _vm._v(" "), (this.editor_bol) ? _c('div', {
    staticClass: "del",
    on: {
      "click": _vm.del
    }
  }, [_vm._v("删除" + _vm._s((_vm.len)))]) : _vm._e(), _vm._v(" "), (_vm.maidan) ? _c('div', {
    staticClass: "maidan",
    on: {
      "click": _vm.maidanFn
    }
  }, [_vm._v("去结算" + _vm._s((_vm.len)))]) : _vm._e()])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "home"
  }, [(!_vm.isShow) ? _c('v-details', {
    attrs: {
      "Data": _vm.Data,
      "title": _vm.title,
      "isShow": _vm.isShow
    },
    on: {
      "onGoodsShow": _vm.showFn2
    }
  }) : _vm._e(), _vm._v(" "), _c('router-view', {
    on: {
      "onShow1": _vm.showFn1
    }
  }), _vm._v(" "), _c('v-header', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    attrs: {
      "title": "首页"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "home-content"
  }, [_c('scroll-img', {
    attrs: {
      "imgData": _vm.Figure
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "home-nav"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.showFn()
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'life',
        params: {
          homeID: 0
        }
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-jingcaishenghuo",
    staticStyle: {
      "background": "#EDB4D2"
    }
  }), _vm._v(" "), _c('p', [_vm._v("精彩生活")])])], 1), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.showFn()
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'life',
        params: {
          homeID: 1
        }
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-shenghuojiaju",
    staticStyle: {
      "background": "#EDA09C"
    }
  }), _vm._v(" "), _c('p', [_vm._v("生活家居")])])], 1), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.showFn()
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'life',
        params: {
          homeID: 2
        }
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-shipin",
    staticStyle: {
      "background": "#7CE1ED"
    }
  }), _vm._v(" "), _c('p', [_vm._v("生活食品")])])], 1), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.showFn()
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'life',
        params: {
          homeID: 3
        }
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-shenghuo",
    staticStyle: {
      "background": "#7CED73"
    }
  }), _vm._v(" "), _c('p', [_vm._v("生活用品")])])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "home-msg"
  }, [_c('span', [_vm._v("特卖专区 Sales")])]), _vm._v(" "), _c('ul', {
    staticClass: "home-list"
  }, _vm._l((_vm.List), function(Data, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.detailsFn(Data)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": Data.pic
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(Data.title))])])
  }))], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "goods"
  }, [_c('router-view', {
    attrs: {
      "Data": _vm.detailsData,
      "title": _vm.title,
      "isShow": _vm.isShow
    },
    on: {
      "onGoodsShow": _vm.show
    }
  }), _vm._v(" "), _c('v-header', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }]
  }, [_c('div', {
    staticClass: "search",
    slot: "text"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入您想要的商品或者商家"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-sousuo_sousuo"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "goods-content"
  }, [_c('ul', {
    staticClass: "list"
  }, _vm._l((_vm.goods), function(item, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.detailsFn(item, index)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.pic
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.titleArr[index]))]), _vm._v(" "), _c('h3', [_vm._v("¥" + _vm._s(item.salesPrice))]), _vm._v(" "), _c('span', [_vm._v("原价:" + _vm._s(item.marketPrice))])])
  }))])], 1)])
},staticRenderFns: []}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "wrap"
    }
  }, [_c('router-view', {
    on: {
      "onShow": _vm.showFn
    }
  }), _vm._v(" "), _c('footer', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "app-footer"
  }, [_c('router-link', {
    attrs: {
      "to": "/home"
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-shouye-shouye"
  }), _vm._v(" "), _c('span', [_vm._v("首页")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/goods"
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-shangpin"
  }), _vm._v(" "), _c('span', [_vm._v("商品世界")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/shop"
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-tubiao4"
  }), _vm._v(" "), _c('span', [_vm._v("购物车")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/my"
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-iconfontwohover"
  }), _vm._v(" "), _c('span', [_vm._v("我的")])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "header"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n    "), _vm._t("back"), _vm._v(" "), _vm._t("text")], 2)
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "my"
  }, [_c('v-header', {
    attrs: {
      "title": "我的"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "my-content"
  }, [_c('div', {
    staticClass: "my-header"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon
    }
  }), _vm._v(" "), _c('p', [_vm._v("vip会员")])]), _vm._v(" "), _c('ul', {
    staticClass: "my-list"
  }, [_c('li', [_c('i', {
    staticClass: "icon iconfont icon-jibenziliao1 i"
  }), _vm._v(" "), _c('span', [_vm._v("基本基料")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-wodedingdan i"
  }), _vm._v(" "), _c('span', [_vm._v("我的订单")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-shoucang1 i"
  }), _vm._v(" "), _c('span', [_vm._v("我的收藏")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-qianbao i"
  }), _vm._v(" "), _c('span', [_vm._v("钱包")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.ShopPushFn
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-tubiao4 i"
  }), _vm._v(" "), _c('span', [_vm._v("购物车")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-shouhuodizhi i"
  }), _vm._v(" "), _c('span', [_vm._v("收货地址")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-huiyuan i"
  }), _vm._v(" "), _c('span', [_vm._v("升级会员")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-gengduo i"
  }), _vm._v(" "), _c('span', [_vm._v("更多")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-zhuxiao1 i"
  }), _vm._v(" "), _c('span', [_vm._v("注销")]), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-jiantouyou i1"
  })])])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isShow),
      expression: "!isShow"
    }],
    staticClass: "details"
  }, [_c('div', {
    staticClass: "car",
    class: {
      carChange: _vm.carBol
    }
  }, [_c('span', {
    staticClass: "close",
    on: {
      "click": _vm.closeFn
    }
  }, [_vm._v("X")]), _vm._v(" "), _c('div', {
    staticClass: "car-top"
  }, [_c('img', {
    attrs: {
      "src": _vm.Data.pic
    }
  }), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "car-text-red"
  }, [_vm._v("限时促销¥" + _vm._s(_vm.Data.salesPrice))]), _vm._v(" "), _c('span', [_vm._v("库存665件")])])]), _vm._v(" "), _c('div', {
    staticClass: "car-size"
  }, [_c('p', [_vm._v("尺码")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("S")]), _vm._v(" "), _c('li', [_vm._v("M")]), _vm._v(" "), _c('li', [_vm._v("L")]), _vm._v(" "), _c('li', [_vm._v("XL")]), _vm._v(" "), _c('li', [_vm._v("2XL")]), _vm._v(" "), _c('li', [_vm._v("3XL")])])]), _vm._v(" "), _c('div', {
    staticClass: "car-color"
  }, [_c('p', [_vm._v("颜色")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("红")]), _vm._v(" "), _c('li', [_vm._v("绿")]), _vm._v(" "), _c('li', [_vm._v("蓝")])])]), _vm._v(" "), _c('div', {
    staticClass: "car-number"
  }, [_c('span', {
    staticClass: "number1"
  }, [_vm._v("购买数量")]), _vm._v(" "), _c('span', {
    staticClass: "number2",
    on: {
      "click": _vm.numberSub
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "number3"
  }, [_vm._v(_vm._s(_vm.number))]), _vm._v(" "), _c('span', {
    staticClass: "number4",
    on: {
      "click": _vm.numberAdd
    }
  }, [_vm._v("+")])]), _vm._v(" "), _c('span', {
    staticClass: "car-ok",
    on: {
      "click": function($event) {
        _vm.carHide()
      }
    }
  }, [_vm._v("加入购物车")])]), _vm._v(" "), _c('v-header', {
    attrs: {
      "title": "详情页"
    }
  }, [_c('div', {
    slot: "text"
  }, [_c('i', {
    staticClass: "icon iconfont icon-fanhui",
    on: {
      "click": function($event) {
        _vm.show()
      }
    },
    slot: "back"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-shoucang1"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon iconfont icon-zhuanfa"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "details-content"
  }, [_c('img', {
    attrs: {
      "src": _vm.Data.pic
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', [_c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("¥" + _vm._s(_vm.Data.salesPrice))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_vm._v("原价:" + _vm._s(_vm.Data.marketPrice))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "float": "right",
      "text-decoration": "line-through"
    }
  }, [_vm._v("销量:" + _vm._s(_vm.Data.salesCount))])]), _vm._v(" "), _c('div', [_c('span', {
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v("限时:100天08时00分42秒")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "float": "right"
    }
  }, [_vm._v("限量:500份")])])]), _vm._v(" "), _c('ul', {
    staticClass: "goods-msg"
  }, [_c('li', {
    class: {
      line: _vm.S
    },
    on: {
      "click": function($event) {
        _vm.sFn()
      }
    }
  }, [_vm._v("商品详情")]), _vm._v(" "), _c('li', {
    class: {
      line: _vm.Y
    },
    on: {
      "click": function($event) {
        _vm.yFn()
      }
    }
  }, [_vm._v("用户评价")])]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.S),
      expression: "S"
    }],
    staticClass: "s-page"
  }, [_c('li', {
    domProps: {
      "innerHTML": _vm._s(_vm.Data.content)
    }
  })]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.Y),
      expression: "Y"
    }],
    staticClass: "y-page"
  }, [_c('li', [_c('ul', {
    staticClass: "y-page-con"
  }, [_c('li', [_c('h3', [_vm._v("姓名:小李")]), _vm._v(" "), _c('p', [_vm._v("物流挺快的,质量也不错")])]), _vm._v(" "), _c('li', [_c('h3', [_vm._v("姓名:小李")]), _vm._v(" "), _c('p', [_vm._v("物流挺快的,质量也不错")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "goods-footer"
  }, [_c('i', {
    staticClass: "icon iconfont icon-tubiao4"
  }, [(_vm.okBol) ? _c('span', {
    staticClass: "ok"
  }, [_vm._v(_vm._s(_vm.Data.number))]) : _vm._e()]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.carShow
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('span', [_vm._v("立即购买")])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mproduct!list.action?pageNum=1&priceSort=&salesCountSort=0&bigCategoryId=255",
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": []
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "99.0",
				"salesPrice": "59.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "907",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/78ca7145-4dd1-42e4-9ccb-955e70b564d0.jpg",
				"title": "特卖：新功电热水壶1L进口304不锈钢S5自动断电防干烧",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/0b1723b1-916c-4817-9181-fd9207ed47a2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/84d9ebc9-e18c-4732-89c0-0c75573234e8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/965def56-4d99-4bc9-94a1-34bc84d08fe3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/0ecbfb40-962c-42c5-b1b6-e9d5f0ad5d68.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/02f4ccf2-0180-4135-ab85-9d1466a57cfa.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/52ce202d-4c5d-4af5-b7bf-cb50c6b01a9e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/94dda644-e428-4767-91ee-dda3e5a6758b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/1a7f7a08-fe9d-40a9-b7fa-62c82c7c0d63.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/4cddf88a-5b42-4b32-8b9d-73c6162993e3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/be71ee17-602d-4b37-b4fa-d372a4f2cf01.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/6d08383e-4e02-4891-b3e7-ac7d3e0715c3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/f786c1dc-aabb-4028-be19-4b1cf5f0847b.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "3599.0",
				"salesPrice": "3099.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "908",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/7b55d022-171a-4890-89be-a5407eb722db.jpg",
				"title": "特卖：美的空调大1匹 变频 冷暖 ECO智能节能制冷王KFR-26GW-BP2DN1Y-YA301 B3",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/ffc7667e-9eac-4b63-8ab9-11b0f8270409.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/c7de3817-d211-49ce-80ae-2b7da023efd6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/15538f36-f437-485e-93db-3f79054ee1f3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/fab2a473-93aa-4c73-b2ea-89e22db826df.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/6a40c224-72b5-4080-90ef-044d6b471746.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "259.0",
				"salesPrice": "159.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "903",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/30715fc4-c66d-4a3a-8d12-89e7490c4ec5.jpg",
				"title": "特卖：飞科电动剃须刀全身水洗FS336/FS337",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/9f6f2a95-bc43-449c-ac44-240b6165d9e4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/49ece397-9360-482a-a91b-a37aefc1885f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/75db3f09-651e-477c-97a6-6edd6ce6c2fa.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/136480a9-94cb-4dbf-8812-419d5d3b46ef.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/eca71969-5ef0-4e4c-8230-cfa73f8d9d38.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/fe935bca-08c9-41a5-afcc-6b65fa232a33.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/2b910ce4-7bf7-4419-9f8e-6edb15f2741b.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "329.0",
				"salesPrice": "228.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "905",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/a6b91e04-288b-429f-8c92-f1ecad4f0c62.jpg",
				"title": "特卖：美的电风扇FS40-15FR静音遥控五叶扇",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/d97b9f0f-306c-4837-8df6-97673a2e9e19.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/a3d997f9-6dba-4a0e-879b-d9cb90fa87ee.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/6ce04c59-0065-4f49-bcce-f37df6fb386c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/f21bd7d5-6701-4dd3-88c1-78c009b04da9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/a24a33e8-f356-49e2-9f7e-d8154fdf6ad5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/60fe2b34-353f-4f80-ba7a-4d216ea7d78e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/07ac35a3-b629-45ed-87bb-65f39b458b65.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/0bd9c097-507b-4563-829a-a05aa72b36ee.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "600",
				"marketPrice": "208.0",
				"salesPrice": "138.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "909",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/33d1c661-1828-4e03-aa47-c99b3ed09963.jpg",
				"title": "特卖：英红王有机红茶英红九号鲜茶叶108g",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/d2b343a0-5e1b-40c8-a85d-8145e988b150.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/63fb39c6-82b2-4306-ac78-c746f2cc02b7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/ba2de5a2-ef26-45a5-b021-ed0eb02027cc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/68888fd8-3e78-43c4-a380-e16c778a970e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/82820003-3cf6-49de-ad7e-1d48c848fadb.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/0b525b4d-5d5b-4795-aa7a-f5671b5424c3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/dcb60f09-5761-4724-9da8-5ff969f09e00.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/eda34d59-1af8-40df-b07a-9ccf7c046bc7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/0435e1c0-8140-470e-8311-3b1b232e964b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/f301ebca-34b1-485f-9203-1b37199cd063.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/69fc8f96-7b03-412f-96b6-75d4054db4ae.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/e2682bd6-2461-434e-94cd-9b0eecf2f8b9.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "4980.0",
				"salesPrice": "3899.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "900",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/70d68cbe-8ff7-437e-84e0-9ee711b290f9.jpg",
				"title": "特卖：方太油烟机CXW-200-EM02T欧式顶吸抽油烟机E型",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/3d76cd40-ff7d-4ae5-ba5c-ab0fc1f6bcd8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/2494f1fe-8977-43d3-8ce2-9572f6dca6ed.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/db072c5e-bd7a-4ab0-93f2-41689b3cd5cd.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/7313f9be-cd0b-4563-afcc-765292136410.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/84c60b17-1f23-44be-a878-4cb56fa76c93.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/27fa7e3e-3c91-4cf1-90ec-10055849c396.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/851f8810-a4e4-4e18-9e11-a0ceb765a7b5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/955d249f-885a-4cba-a339-855441e5c469.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/f53c4a43-555f-4435-a432-c7512847a602.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/a48fb4d5-ea49-400d-a6a1-fd054897119f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/8f68c689-1c58-4fab-861d-78bd918e9cb6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/5c47e76e-367e-4336-a87e-af8087ab7a11.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/3a849b99-cd79-435f-a5c2-f0a5735f9440.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/446f77dc-af25-433a-a3c4-796a4bb19304.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/5786a8a1-a3d1-4f1f-b130-9594397e26ad.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/bd8a64d4-21f4-4a32-981e-908a58f88e66.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "250",
				"marketPrice": "4980.0",
				"salesPrice": "3099.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "901",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/a1836b39-3fe8-47ad-bcdd-e5a7cf201870.jpg",
				"title": "特卖：松下电饭煲日本原装进口 SR-HBC104WSQ/SR-HBC184WSQ  3升/5升",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/142299b3-513c-4fae-b323-45a628d8276d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/7bf739f5-eeb6-411e-bb80-6049414a1a0c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/cbf234ad-959c-47bb-b444-8f5f0750f47a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/a224d2a0-82c6-4255-a2de-49b702624b6f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/6fe1adb0-9388-4822-96aa-c809f97b0c65.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/6c00f6ce-e39b-4c81-b66c-6312ef4fe36a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/3e407743-11c0-4a60-a757-156e6f716ca0.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/bda164e6-90ea-418d-865c-9be367e5884b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/1e949894-96bf-416a-8233-1a480892aa1b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/78cb70a9-c0d3-4ee3-99b9-e7477baa6a24.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/b4d30db4-7160-4da8-9a34-b7f080ae0f14.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/71aec14b-242f-4772-9f44-02d1941e31ee.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/61836b46-543c-4810-8dd2-c8e9d1bb485a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/3af231b4-3084-4b11-ad49-97286c37629b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/df709aa8-4917-4824-af69-ce523fe09801.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/230549e8-512d-450f-9112-4d6431718545.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/922df98c-333a-4689-88bd-35f84e351099.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/115c9b84-c88e-4cea-8068-bb6a31f0f5c5.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "498",
				"marketPrice": "3699.0",
				"salesPrice": "2899.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "902",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/42c5cffc-cdac-4d9f-a604-b071124aea7e.jpg",
				"title": "特卖：美的冰箱BCD-302WTZM 多门风冷无霜家用冰箱",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/621ad077-26d9-4eb5-ae43-00bdb526df84.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/49f3170d-7243-483b-b5ba-7ef02af80dc2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/9b7fc845-e2dd-4088-b0a1-9f4d1f9a06b1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/41253f6f-7acb-43cb-906b-8ada89a82ae6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/38d980a8-9a6f-4cff-88a7-204a849a5010.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/10335630-dbc2-4961-b6c9-b9c7d7ee59a8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/5284e669-80fd-48df-926e-0f54324fccea.jpg\" />",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "699.0",
				"salesPrice": "459.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "904",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/4d826f65-b579-4731-9899-5cca9c777e4f.jpg",
				"title": "特卖：格兰仕微波炉G70F23CN2P-BM1 S0光波炉23L",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/b22c7ea6-10d5-437e-b0d7-4d5f41fdc4ad.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/26cedfdb-e96e-4600-8523-749d7399af1e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/a47e61e2-a7f8-41f7-b643-05a13dff37ab.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/b3031ef6-01b4-49fe-94af-9b667a523999.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/656aa93d-9207-4ce8-bbd8-0b6ce58003f8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/888a511e-501d-4b52-a29e-173324d1daf5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/3972cbc9-d803-4172-866d-3af64a564ba5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/38b76653-2873-4802-aec7-747678b5103c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/31c8367e-175a-48bf-aa80-d529b72a4b23.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/dd51d508-6cf9-4e1c-a4a0-ad603f521e3d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/26be27bf-557d-426b-bd6b-63171e7441f7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/d60faa42-082c-49c1-b2a1-e975eb0aef6b.jpg\" /></div>\r\n",
				"createDate": "2016-06-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "598.0",
				"salesPrice": "380.0",
				"sysTime": "2017-02-21 16:32:41",
				"id": "906",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/c7eca65c-dffb-464e-9908-d907a5307ecc.jpg",
				"title": "特卖：新功电热水壶 F92全自动上水玻璃茶艺炉",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/f0aee1e6-d698-4428-8fb6-bbaf4fc1e2dd.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/8ade7203-ba26-4c22-9ff5-a54673873803.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/bae25531-33ee-4ec0-8abb-3033cab80cb6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/7d3dec33-df5d-4950-a25f-73b405b0cf61.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/a2e631c5-5a5b-4109-84c6-50cc7d74b21f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/647aa84c-dfa6-43ce-9997-0c1b490e94c5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/1d5249c6-bb15-4486-be4e-5a3dc3aa540e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/7bdcb6b0-e9a5-4279-8c48-cfb4b347170b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/db50d0b3-ce02-4cfa-81ed-1fd3a3149606.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/af862f2e-fb70-4038-afa6-94fb8603acb2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/369c89da-fe07-4ac9-a506-fa6301b8da1d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/4a8448e8-dd7d-4d62-b094-08c2976818e1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/08f2ac42-8386-407e-9fd6-5a9cc65f6dc6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/20/32500f84-85dc-46da-801f-015b29ae5e21.jpg\" />",
				"createDate": "2016-06-20"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 12,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "228.0",
				"salesPrice": "180.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1615",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/22/82a57e6c-3b36-4f2d-a151-9c800d1d362b.jpg",
				"title": "德国原装进口啤酒 柏龙Paulaner酵母型黑、白小麦啤酒500ml*20瓶",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"color: rgb(255, 0, 0); font-size: 13.3333px; font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\"><span style=\"font-size: 36px;\">特供</span></strong></div>\r\n<div style=\"font-size: 13.3333px; color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; text-align: center;\">\r\n\t<span style=\"font-size: 13.3333px; color: rgb(178, 34, 34);\"><span style=\"font-size: 20px;\"><strong>配送范围：(惠城区)</strong></span></span></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<span style=\"color: rgb(255, 0, 0); font-size: 20px; font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\">其他地区暂不配送，如需请联系客服<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/27/53e1f2a7-c5e4-4bd2-8892-1173cad6c1ce.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/27/609ce69b-15ec-4ffc-87c7-2238db238d21.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/27/07a5e2c5-5cd7-4fad-9bfc-d6701ea5275c.jpg\" /></span></div>\r\n",
				"createDate": "2017-02-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "198.0",
				"salesPrice": "170.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1614",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/22/0d9dde81-1637-44e8-9959-34e1a8f726bd.jpg",
				"title": "墨西哥进口啤酒 CORONA科罗娜啤酒330ml 24支",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"color: rgb(255, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px;\"><span style=\"font-size: 36px;\">特供</span></strong></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<span style=\"font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px; color: rgb(178, 34, 34);\"><span style=\"font-size: 20px;\"><strong>配送范围：(惠城区)</strong></span></span></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<span style=\"font-size: 20px; color: rgb(255, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\">其他地区暂不配送，如需请联系客服<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/de0e192e-76b5-498c-ae23-6840e3347972.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/1ffa331a-449b-49d9-a507-40bb2e0ec92f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/be3961c7-b287-43cd-85c2-98910ed3f7fd.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/172037b1-ea08-40f5-9596-8c1c8b204146.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/eec1653e-86ed-45b9-a585-e13203065de5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/3d1ac768-620f-4a6c-bb58-8e04c46b295c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/e46c9180-d1a9-4f1d-a429-36017074ae81.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/0747eadc-ad48-4920-a3a2-8ab041fa23a7.jpg\" /></span></div>\r\n",
				"createDate": "2017-02-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "199.0",
				"salesPrice": "165.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1613",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/22/b7faa323-7a86-4cde-acca-417759b6e733.jpg",
				"title": "韩国进口啤酒Blue Girl beer 蓝妹啤酒玻璃瓶装 330ml*24瓶",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"font-size: 13.3333px; color: rgb(255, 0, 0);\"><span style=\"font-size: 36px;\">特供</span></strong></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<span style=\"color: rgb(255, 0, 0); font-size: 20px;\">(惠城区包送货)</span></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<span style=\"color: rgb(255, 0, 0); font-size: 20px;\">其他地区暂不配送，如需请联系客服<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/ce991ee6-44cf-4237-aa29-c95f98aa2734.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/4d005ca6-9268-4768-a946-28e90434ca0f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/961a49be-f785-416e-be81-9fd789a0f1f4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/9933f3f8-2860-4d8f-a096-b85bccd66787.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/1c7a680b-1e12-4527-a97b-055fdc6dc5c3.jpg\" /></span></div>\r\n",
				"createDate": "2017-02-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "899.0",
				"salesPrice": "210.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1574",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/10/4eb0e0bc-596b-4554-89ab-d65afd0dada7.jpg",
				"title": "特立尼达庄园佳美娜干红葡萄酒",
				"content": "<div>\r\n\t<span style=\"font-size: 12px;\"><span style=\"font-size:16px;\">特立尼达庄园佳美娜干红葡萄酒</span></span><br />\r\n\t<span style=\"font-size:16px;\">此款特级珍藏佳美娜来自于智利酒皇伊拉苏家族在空加瓜山谷最大的葡萄庄园玛其古！该酒经过9个月法国和美国橡木桶陈酿，丹宁细腻，酸度较小，入口齿颊留香！</span></div>\r\n<div>\r\n\t<span style=\"font-size:16px;\">酒庄拥有者介绍：</span></div>\r\n<div>\r\n\t<span style=\"font-size:16px;\">&nbsp; &nbsp; &nbsp; &nbsp;伊拉苏家族是智利有名的政治家族，智利历史上出现了四任总统、两位圣地亚哥大主教，多位外交官及马球运动员！该酒庄出边的高端葡萄酒曾经在柏林盲品会打败波尔多一级名庄获得盲品冠军！</span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/10/a071bf1c-cd49-4f92-b53c-f7c54805486d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/10/197ec9c8-c2d0-4bbd-8a73-60321c05c8e7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/10/c8b21d91-9f5a-45e1-a0b7-da29f4539d65.jpg\" /></div>\r\n",
				"createDate": "2017-02-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "388.0",
				"salesPrice": "268.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1564",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/6/25d88184-a69a-43e7-91e1-28742cfb7b25.jpg",
				"title": "【张裕先锋国际酒业】法国多名利VSOP 原瓶进口 醇正白兰地1L",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"font-size: 13.3333px;\"><span style=\"font-size: 18px;\">【<span style=\"color: rgb(75, 0, 130);\">一瓶到店自取</span>】</span></strong></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<strong><span style=\"font-size: 18px;\">一箱6瓶包送<br />\r\n\t<span style=\"color: rgb(0, 0, 128);\">茅台集团 白金酒惠州旗舰店</span></span></strong><br />\r\n\t<strong><span style=\"color: rgb(255, 140, 0);\">地址：惠州市惠城区江北文昌一路12号(华贸斜对面)<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/9/60e35ced-69d2-409a-b819-5d6cecc4eef1.jpg\" /></span></strong></div>\r\n",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "500",
				"marketPrice": "199.0",
				"salesPrice": "159.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1563",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/6/3682dbff-8144-4c9e-aa90-24748192c524.jpg",
				"title": "52度茅台集团白金酒公司 白金银如意500ml",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"font-size: 13.3333px;\"><span style=\"font-size: 18px;\">【一瓶到店自取】</span></strong></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<strong><span style=\"font-size: 18px;\">一箱6瓶包送<br />\r\n\t<span style=\"color: rgb(0, 0, 128);\">茅台集团 白金酒惠州旗舰店</span></span></strong><br />\r\n\t<strong><span style=\"color: rgb(255, 140, 0);\">地址：惠州市惠城区江北文昌一路12号(华贸斜对面)<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/9/adcf40df-4491-4b6c-b33f-68755e6a7162.jpg\" /></span></strong></div>\r\n",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "80",
				"marketPrice": "267.0",
				"salesPrice": "108.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1317",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/16/5d527e1e-eeda-4d48-b961-a8497a265254.jpg",
				"title": "St-Christoly 圣克利斯图干红葡萄酒  750ml",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/16/79aabca8-8a7d-4832-b4cb-6a94c25b84c0.jpg\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/16/4b7b6977-d568-4e35-92fb-4e560bcb715c.jpg\" /></div>\r\n",
				"createDate": "2016-11-17"
			},
			{
				"salesCount": "500",
				"marketPrice": "168.0",
				"salesPrice": "98.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1289",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/4/5bbf6d91-e607-4371-8704-6a8c75148cc3.jpg",
				"title": "景鸿原生态竹筒酒 福建客家青竹酒 鲜竹酒桶 活竹酒52度 500ml",
				"content": "<div style=\"text-align: center;\">\r\n\t<div style=\"text-align: left;\">\r\n\t\t<span style=\"font-size:14px;\">温馨提示：</span></div>\r\n\t<div style=\"text-align: left;\">\r\n\t\t<span style=\"font-size:14px;\">1、因为是原生态产品，所以竹筒粗细、高矮会不尽相同。竹筒内会有少量竹沥沉淀，不影响饮用。</span></div>\r\n\t<div style=\"text-align: left;\">\r\n\t\t<span style=\"font-size:14px;\">2、本产品具有挥发的特性，建议趁新鲜饮用。冰箱冷藏后酒的口感更佳。</span></div>\r\n\t<div style=\"text-align: left;\">\r\n\t\t<span style=\"font-size:14px;\">3、酒色为琥珀色，用钝物在竹节处敲个孔即可将酒倒出。</span></div>\r\n\t<div style=\"text-align: left;\">\r\n\t\t<span style=\"font-size:14px;\">一件12筒：景鸿生态酒厂家批发！</span></div>\r\n\t<span style=\"color:#006400;\"><strong><span style=\"font-size:14px;\">竹筒酒98一支，三支包邮。上面文字自选加5元一支，<br />\r\n\t单位，公司送人最佳礼品</span></strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/4/22e46406-1f96-4f12-8ff9-f3c8953775c5.jpg\" /></div>\r\n<br />\r\n",
				"createDate": "2016-11-04"
			},
			{
				"salesCount": "500",
				"marketPrice": "288.0",
				"salesPrice": "100.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "1030",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/24/505f833b-6c59-4101-8bf8-a47b04d9bb5c.jpg",
				"title": "Dionysus帝澜思2013莫斯卡托半甜白葡萄酒Moscato 750ml装*1瓶",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/24/02f8bb37-e2ae-4354-877f-e22fe0fb4d0e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/29/4a542460-48a8-4a1c-93ca-a05ba807af83.jpg\" />",
				"createDate": "2016-11-04"
			},
			{
				"salesCount": "500",
				"marketPrice": "168.0",
				"salesPrice": "70.0",
				"sysTime": "2017-02-22 15:32:21",
				"id": "986",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/20/8e90b6f3-9883-4aa1-9fbb-f78b20df903b.jpg",
				"title": "TheLyrebird琴鸟2014赤霞珠干红葡萄酒 750ml装*1瓶",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/24/8424a6e0-a3ed-471e-b93d-fa18a52686f1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/612c608d-a257-4fd0-ada3-772bbb2b6464.jpg\" />",
				"createDate": "2016-11-04"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 5,
		"totalRecord": 47,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "520.0",
				"salesPrice": "298.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "1600",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/ddd34dff-6852-473e-8021-76ccdf11feef.jpg",
				"title": "古度 梅江一号柑普 礼盒包装 普洱茶熟茶300g",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"font-size: 13.3333px; color: rgb(0, 0, 128); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\"><span style=\"font-size: 22px;\">厂价直供&middot;绝对超值</span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/77988db9-9301-4906-97f8-9f6a76524c3e.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "198.0",
				"salesPrice": "128.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "1562",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/6/f2633fd4-54eb-42a6-8bfd-47f562216976.jpg",
				"title": "福建安溪清香铁观音 竹韵铁观音 500g 礼盒装",
				"content": "<div>\r\n\t<span style=\"font-size: 16px;\">品名：福建安溪清香铁观音</span></div>\r\n<div style=\"font-size: 13.3333px;\">\r\n\t<span style=\"font-size: 16px;\">年份：2016年秋茶</span></div>\r\n<div style=\"font-size: 13.3333px;\">\r\n\t<span style=\"font-size: 16px;\">工艺：半发酵乌龙茶</span></div>\r\n<div style=\"font-size: 13.3333px;\">\r\n\t<span style=\"font-size: 16px;\">原料：正秋安溪铁观音</span></div>\r\n<div style=\"font-size: 13.3333px;\">\r\n\t<span style=\"font-size: 16px;\">规格：500克/盒</span></div>\r\n<div style=\"font-size: 13.3333px; text-align: center;\">\r\n\t<span style=\"font-size: 16px;\">特色：铁观音是乌龙茶的极品，其品质特征是：茶条卷曲，肥壮圆结，沉重匀整，色泽砂绿，整体形状似蜻蜓头、螺旋体、青蛙腿。冲泡后汤色金黄浓艳似琥珀，有天然馥郁的兰花香，滋味醇厚甘鲜，俗称有&ldquo;音韵&rdquo;。<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/9/c9a5e0df-bf79-46f2-9b54-6edae36ff8d2.jpg\" /></span></div>\r\n",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "500",
				"marketPrice": "340.0",
				"salesPrice": "240.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "1501",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/5/d18706bc-2b58-4c4d-bb36-b2be2b14bba1.jpg",
				"title": "新会云尚柑品 新会二红柑&陈勐海普洱熟茶325克",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#000080;\"><strong><span style=\"font-size:24px;\">购买即返30元红包</span></strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/5/d09a63ec-7114-4b76-9443-0ad97bb13b34.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/5/a576048f-43cd-497d-8a75-0727f2d904dc.jpg\" /></div>\r\n",
				"createDate": "2017-01-05"
			},
			{
				"salesCount": "500",
				"marketPrice": "268.0",
				"salesPrice": "268.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "1484",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/28/11c1e641-1b1d-4f24-a265-d9e6fb686d6e.jpg",
				"title": "凸出牌 绿水安溪铁观音（浓香型）500克/盒",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-size:18px;\"><strong><span style=\"color:#0000ff;\">全国统一价268元<br />\r\n\t下单返30元红包</span></strong></span></span><br />\r\n\t&nbsp;</div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">品名：绿水安溪铁观音（浓香型）</span></div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">年份：2016年</span></div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">工艺：碳焙</span></div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">原料：福建安溪铁观音</span></div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">等级：一级</span></div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">规格：500克/盒，8盒/件</span></div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">特色:以传统工艺&ldquo;茶为君，火为臣&rdquo;制作的铁观音茶叶，使用百年独特的烘焙方法，温火慢烘，湿风快速冷却，产品&ldquo;醇、厚、甘、润&rdquo;，条</span><span style=\"font-size: 14px;\">型肥壮紧结、色泽乌润、香气纯正、带甜花香或蜜香、粟香，汤色深金黄色或橙黄色，滋味特别醇厚甘滑，音韵显现，叶底带有余香，可经多次冲泡。茶性温和止渴生津，温胃健脾。</span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/28/e6066f88-87df-4767-8ae3-0b12742b8641.jpg\" style=\"font-size: 12px;\" /></div>\r\n",
				"createDate": "2016-12-28"
			},
			{
				"salesCount": "500",
				"marketPrice": "480.0",
				"salesPrice": "399.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "1479",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/27/d08a7249-a9f8-4d84-83a3-e33e985cbcc2.jpg",
				"title": "小青柑清香型 八方茶园2016新会正宗柑普茶 陈皮普洱茶320克",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/27/182eab23-e30c-4d09-b0f1-30132fec8cde.jpg\" /></div>\r\n",
				"createDate": "2016-12-27"
			},
			{
				"salesCount": "500",
				"marketPrice": "208.0",
				"salesPrice": "168.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "1358",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/2/2f1dae1e-71db-40be-843b-c6aa62ef0ac2.jpg",
				"title": "农绿鲜黄秋葵养生茶礼盒装 果籽茶",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"color:#008080;\"><span style=\"font-size:20px;\">送秋葵汤料一份</span></span><br />\r\n\t<span style=\"color:#ff0000;\"><span style=\"font-size:20px;\">特价活动到12月31日截止</span></span><br />\r\n\t<span style=\"color:#008080;\"><span style=\"font-size:20px;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/60c53da7-4f38-4a9f-b37c-8660d25eab4b.jpg\" /></span></span><br />\r\n\t<span style=\"color:#8b4513;\"><span style=\"font-size:20px;\">一盒25包，一套两盒，一包8克</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/2/94e95034-79da-4751-b13c-80f67c0939f3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/6d720396-38c1-47a1-a0e3-5ac827bee33d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/ed6fa6d1-8027-4acd-946e-a3b3d631311f.jpg\" /></div>\r\n",
				"createDate": "2016-12-07"
			},
			{
				"salesCount": "100",
				"marketPrice": "230.0",
				"salesPrice": "200.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "1237",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/15/55c2a81a-0135-4c0f-9113-8f90cac56385.jpg",
				"title": "仙人迹山茶 ",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/b25216ec-b319-42ac-bafb-8c0c3e772e5f.jpg\" /></div>\r\n",
				"createDate": "2016-10-15"
			},
			{
				"salesCount": "493",
				"marketPrice": "339.0",
				"salesPrice": "266.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "944",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/22/a3188ca2-abaf-47de-b025-e38c09f7c110.jpg",
				"title": "云南高山老古树野生红茶250g*2盒",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/fca70036-f2d5-4b67-9942-7f88e690dd33.jpg\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/6dabe398-41d3-42a8-b9e6-eae0b8cc1ca1.jpg\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/ee82472a-b853-48b3-929a-74d961cfb7e9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/fec64aca-1ada-4db5-aee5-7f14812be7ab.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/436b3214-dce7-4076-b433-baf5a6447473.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/8cb44454-25d1-4b50-b286-46c31359d87d.gif\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/9c7d471c-1f0d-49aa-b663-f06c27ab98cf.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/ae26d547-a82b-4cbd-8d97-6e81edd27044.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/24b08755-1ec4-49fe-8e1e-3918f9f74e94.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/bd453986-daa4-4ed0-9e49-e979a738a5d4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/02f66727-da7d-4b51-8106-5a522647c9f5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/2fc745a1-acbe-4efe-9160-86eef04724d9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/828673d1-7990-468c-945e-0a24dc79534c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/715abeaf-2bb1-4b8b-95e5-70fdb1692959.gif\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/29/21f2d548-2f28-414f-a327-a4b7ebbba252.jpg\" /></div>\r\n",
				"createDate": "2016-09-22"
			},
			{
				"salesCount": "498",
				"marketPrice": "288.0",
				"salesPrice": "200.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "996",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/24/5fd17189-042f-4e1f-884f-760031d064cf.jpg",
				"title": "凤凰单枞 香飘茗茶 250g 浓香型",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/91a421ce-78e9-45bc-a7c2-fb9fbc6edac1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/643a5f08-c0ff-48c4-b0c1-7bbdbee217cb.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/5cc0e01c-d769-46db-8ef0-837bcb0d261f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/12cc3edc-9536-45a9-aae0-ca7fa6dc14a2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/ec83c4f2-53ba-4e02-98ac-92f617d471bf.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/fd2058e0-6acd-4ad7-8396-d89da3963f0c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/4443ed28-1f9d-4959-9bd4-30e6743658fa.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/2bf8862b-b6da-4d78-ad12-fde726cae744.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/08a1b9aa-2137-4230-b09d-34c47d5c702e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/f2d30127-1691-4baa-aa90-c2d3f0eb2b2d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/6c7d90b8-02b4-43e1-aed6-5363b448fbcc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/24/4db1a837-41d3-4d97-9373-d3899827de4d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/bb645bd9-6bd5-4f41-8925-ba3c8255afda.jpg\" /></div>\r\n",
				"createDate": "2016-09-20"
			},
			{
				"salesCount": "496",
				"marketPrice": "65.0",
				"salesPrice": "45.0",
				"sysTime": "2017-02-22 15:32:53",
				"id": "989",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/22/ac31524c-a303-4a7b-a134-54930a2d83de.jpg",
				"title": "八乡绿茶一斤装 清明前春茶 梅州丰顺八乡高山茶",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/22/2cdc7353-4806-4a61-8a94-c32d4610e093.png\" /><span style=\"color:#ff0000;\"><strong><span style=\"font-size:20px;\">八乡绿茶500g/包</span></strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/22/c84266d3-54c7-4f3d-8b69-9be266464718.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/25/13da762d-ab01-49e2-8e33-023711e123ff.jpg\" /></div>\r\n",
				"createDate": "2016-09-20"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 5,
		"totalRecord": 41,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "89.0",
				"salesPrice": "72.0",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1619",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/22/d831e5b8-440f-4356-b5e9-689752fbb202.jpg",
				"title": "德芙Dove醇香摩卡及烤巴旦木巧克力43g*12 整盒装516g",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/22/bf41b31f-274c-499c-9897-270ff49ade55.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/22/451837c5-b7e5-40ba-a305-e8d69462806c.jpg\" /></div>\r\n",
				"createDate": "2017-02-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "69.0",
				"salesPrice": "50.0",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1616",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/22/9e5c4814-5a8e-4c22-9512-afbea8a67fc9.jpg",
				"title": "德芙Dove心语巧克力 150g 98g心型礼盒",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/22/71fae8b8-0ef6-4113-986e-5f3b2bffb692.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/22/82adaecb-5cb3-4cf0-a70b-454d8a6d32d1.jpg\" /></div>\r\n",
				"createDate": "2017-02-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "69.0",
				"salesPrice": "49.0",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1555",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/21/03439572-da80-4222-86c4-d071ade5d80e.jpg",
				"title": "纯手工曲奇 无任何添加 礼盒装400g 550g",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/343c6343-eb92-4578-9c07-047d2fe0abab.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/4d8d5d74-b33e-41d1-b8d3-4bd0e0866821.jpg\" /></div>\r\n",
				"createDate": "2017-01-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "55.0",
				"salesPrice": "35.0",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1141",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/22/561fb1e2-3010-4bee-ac10-ce952e478c27.jpg",
				"title": "枣夹核桃仁 特级 袋装 枣子包核桃仁 孕妇零食",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/22/cf9d3f6d-b3de-4a90-8501-87ca93cfd630.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/22/8f51ff7c-732c-432c-a2c9-3f2913a3b093.jpg\" /></div>\r\n",
				"createDate": "2016-09-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "88.0",
				"salesPrice": "65.0",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1089",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/14/238d5f05-b385-4c0b-b8b1-5296cb23d346.jpg",
				"title": "台湾进口 蔓越莓牛扎饼 夹心饼  纯手工 香葱 原味 台湾牛扎饼 3盒起售",
				"content": "<div>\r\n\t<span style=\"font-size:16px;\"><span style=\"color: rgb(255, 0, 0); font-family: tahoma, arial, 宋体, sans-serif; line-height: 36px;\">原味和蔓越莓的区别就是里面的牛扎夹心，一个夹心是原味牛扎，一个夹心是蔓越莓牛扎，外面饼干都是一样的</span></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/14/4265aa0d-6c0b-496a-bfcf-cbd2012ed867.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/14/4c04acb2-fe69-49be-a7ca-262ba757d636.jpg\" /></div>\r\n",
				"createDate": "2016-09-14"
			},
			{
				"salesCount": "500",
				"marketPrice": "18.0",
				"salesPrice": "13.8",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1060",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/1/0c99e826-7aff-4995-b0a8-65bde7178966.jpg",
				"title": "马来西亚进口Lot100一百份什果味 芒果味 果汁软糖150g",
				"content": "<div>\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: 'microsoft yahei'; font-weight: 700; color: rgb(255, 0, 255); line-height: 1.5;\">宝贝名称：一百份果汁软糖芒果味</span></span></div>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-weight: 700;\"><span style=\"font-family: 'microsoft yahei';\">宝贝净重：150g</span></span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-weight: 700;\"><span style=\"font-family: 'microsoft yahei';\">宝贝产地：马来西亚</span></span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-weight: 700;\"><span style=\"font-family: 'microsoft yahei';\">宝贝介绍：多种水果味果汁软糖采用天然芒果汁及植物果胶精制而成，含有多种天然活性营养成分，富含人体所需的各种维生素,补充体能需要, 香浓的果味，柔软的果心，嚼起来柔韧有嚼劲，很棒哦！！！确是理想的食品.口感柔软，清香爽口，弹力十足，耐咀嚼，香气诱人，百吃不厌。</span></span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px; text-align: center;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-weight: 700;\"><span style=\"font-family: 'microsoft yahei';\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/d103f21d-6138-479b-8482-fd9f6a27073b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/1751de93-0fc8-423b-b1af-9ff40a0d0db3.jpg\" /></span></span></span></span></p>\r\n",
				"createDate": "2016-09-01"
			},
			{
				"salesCount": "500",
				"marketPrice": "33.8",
				"salesPrice": "28.8",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1059",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/1/d35d8a56-72c1-4a96-8586-16a5259c1fdb.jpg",
				"title": "意大利进口 莱家榛子味迷你威化饼干200g",
				"content": "<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px; color: rgb(0, 0, 0);\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: 'microsoft yahei';\"><span style=\"font-weight: 700;\"><span style=\"color: rgb(255, 0, 255);\">宝贝名称：莱家粒粒装威化饼榛子味</span></span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px; color: rgb(0, 0, 0);\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: 'microsoft yahei';\"><span style=\"font-weight: 700;\"><span style=\"color: rgb(255, 0, 255);\">宝贝产地：意大利</span></span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px; color: rgb(0, 0, 0);\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: 'microsoft yahei';\"><span style=\"font-weight: 700;\"><span style=\"color: rgb(255, 0, 255);\">宝贝净重：200g &nbsp;（20g*10小包）</span></span></span></span></p>\r\n<div>\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: 'microsoft yahei'; color: rgb(0, 0, 0); line-height: 1.5; font-weight: 700;\"><span style=\"color: rgb(255, 0, 255);\">宝贝介绍：</span></span><span style=\"font-family: 'microsoft yahei'; color: rgb(0, 0, 0); line-height: 1.5; font-weight: 700;\"><span style=\"color: rgb(255, 0, 255);\">意大利Loacker莱家威化饼品质纯正，口感香浓！不添加防腐剂，是目前为止我吃到过最好吃的威化饼干，强烈推荐！一块小小四四方方的饼居然蕴涵着那么赞叹的美味，真是块块经典，块块美味，绝对不可不尝哦! 包装非常的人性化，一次吃不完没关系，我有保鲜扣，轻轻一粘，任你何时吃都松脆可口！只有你试过了才感受得到那种美味！</span></span></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/7347a830-01aa-4e7a-a776-fb3e9fac45db.jpg\" /></div>\r\n",
				"createDate": "2016-09-01"
			},
			{
				"salesCount": "500",
				"marketPrice": "288.0",
				"salesPrice": "255.0",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1058",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/1/dd816b93-1611-4b5b-86ac-42bb358c97a2.jpg",
				"title": "香港进口 蝴蝶牌烘焙开心果2000g 坚果干果",
				"content": "<div>\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun; color: rgb(255, 0, 255); line-height: 1.5;\">[宝贝名称]: 蝴蝶牌开心果2000g装</span></span></div>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-family: simsun;\">[宝贝产地]：香港</span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-family: simsun;\">[宝贝净重]： 2000g&nbsp; （2公斤约有120小袋迷你装）</span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-family: simsun;\">[宝贝特色]: 不经漂白 原汁原味&nbsp;健康美味</span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-family: simsun;\">[蝴蝶产品系列]：<a href=\"http://item.taobao.com/item.htm?id=2832224906&amp;\" style=\"text-decoration: none; color: rgb(34, 34, 34); transition: color 0.3s ease 0s;\" target=\"_blank\"><span style=\"color: rgb(255, 0, 255);\">烘焙什果仁</span></a>、<a href=\"http://item.taobao.com/item.htm?id=4180735190\" style=\"text-decoration: none; color: rgb(34, 34, 34); transition: color 0.3s ease 0s;\" target=\"_blank\"><span style=\"color: rgb(255, 0, 255);\">开心果</span></a>、<a href=\"http://item.taobao.com/item.htm?id=4025007230&amp;\" style=\"text-decoration: none; color: rgb(34, 34, 34); transition: color 0.3s ease 0s;\" target=\"_blank\"><span style=\"color: rgb(255, 0, 255);\">杏仁</span></a>、<a href=\"http://item.taobao.com/item.htm?id=10229587004&amp;\" style=\"text-decoration: none; color: rgb(34, 34, 34); transition: color 0.3s ease 0s;\" target=\"_blank\"><span style=\"color: rgb(255, 0, 255);\">腰果</span></a>.</span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-family: simsun;\">[宝贝说明]：天然颜色，不经漂白，不含防腐剂,真正享受大自然健康绿色有机食品!采用上等开心果,包装也非常漂亮，是送礼首选。</span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px; text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/935d4265-0991-4292-8af0-9d5c09def357.jpg\" /></p>\r\n",
				"createDate": "2016-09-01"
			},
			{
				"salesCount": "500",
				"marketPrice": "98.0",
				"salesPrice": "62.8",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1057",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/1/8ef2acad-6a99-466e-973e-6d0791c05365.jpg",
				"title": "香港原装进口蝴蝶牌蜜糖花生85g*10包",
				"content": "<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-weight: 700;\"><span style=\"font-family: 'microsoft yahei';\">宝贝名称：香港蝴蝶牌蜜糖花生</span></span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-weight: 700;\"><span style=\"font-family: 'microsoft yahei';\">宝贝净重：85g*10包</span></span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255);\"><span style=\"font-weight: 700;\"><span style=\"font-family: 'microsoft yahei';\">宝贝产地：香港</span></span></span></span></p>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: 'microsoft yahei'; font-weight: 700; color: rgb(255, 0, 255); line-height: 1.5;\">品牌介绍：蝴蝶系列产品是香港资深食品公司制造一直卖得不错,前段时间还曾卖断货。这么畅销主要是源自其松、香、脆及其高档的品味，受到亲们的热棒。精美的包装设计，科学的密封处理方法，使其保鲜更原汁原味.自吃还是送礼都是相当不错的选择。</span></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/3dafc6ce-a33a-47c7-99ea-e079fa8e36ce.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/6e38c09a-0e90-4f50-9eb9-d1148581d9ed.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/94c1ef62-6a6e-46ee-8058-a32baf387a18.jpg\" /></div>\r\n",
				"createDate": "2016-09-01"
			},
			{
				"salesCount": "500",
				"marketPrice": "23.8",
				"salesPrice": "18.8",
				"sysTime": "2017-02-22 15:33:35",
				"id": "1056",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/1/baff9bab-34b9-4743-8fa7-0359df4baec0.jpg",
				"title": "香港进口 蝴蝶牌烘焙金香腰果85g",
				"content": "<div>\r\n\t<span style=\"font-size:14px;\"><span style=\"color: rgb(255, 0, 255); font-family: simsun; line-height: 1.5;\">宝贝名称：香港蝴蝶牌 金香腰果</span></span></div>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun; color: rgb(255, 0, 255);\">宝贝产地：香港</span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun; color: rgb(255, 0, 255);\">宝贝净重：85g</span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun; color: rgb(255, 0, 255);\">整箱规格：整箱10包，整箱销售</span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun; color: rgb(255, 0, 255);\">品牌介绍：香港蝴蝶是制作果仁炒货的老字号了，传统的工艺，加上新颖的口味，在东南亚一带名噪一时，这款腰果选用了颗粒饱满的越南原产腰果，加上地道的中国式口味，有点椒盐味，很香，很好吃!</span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun; color: rgb(255, 0, 255);\">腰果来由：又名树花生,为漆树科长绿乔木腰果树上果仁，因其坚果成肾形而得名。</span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun;\"><span style=\"color: rgb(255, 0, 255);\">制作工艺：腰果经精心炒制，香飘四益，甘甜如蜜，清脆可口，为世界著名的四大干果(核桃，</span><a href=\"http://item.taobao.com/item.htm?id=4025007230&amp;\" style=\"text-decoration: none; color: rgb(34, 34, 34); transition: color 0.3s ease 0s;\" target=\"_blank\"><span style=\"color: rgb(255, 0, 255);\">杏仁</span></a><span style=\"color: rgb(255, 0, 255);\">，</span><a href=\"http://item.taobao.com/item.htm?id=10229587004&amp;\" style=\"text-decoration: none; color: rgb(34, 34, 34); transition: color 0.3s ease 0s;\" target=\"_blank\"><span style=\"color: rgb(255, 0, 255);\">腰果</span></a><span style=\"color: rgb(255, 0, 255);\">，</span><a href=\"http://item.taobao.com/item.htm?id=3061903346&amp;\" style=\"text-decoration: none; color: rgb(34, 34, 34); transition: color 0.3s ease 0s;\" target=\"_blank\"><span style=\"color: rgb(255, 0, 255);\">榛子</span></a><span style=\"color: rgb(255, 0, 255);\">)之一。</span></span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px; text-align: center;\">\r\n\t<span style=\"font-size:14px;\"><span style=\"font-family: simsun;\"><span style=\"color: rgb(255, 0, 255);\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/1/a3486bdc-fb05-49f0-baa0-f3a27d4f8da4.jpg\" /></span></span></span></p>\r\n",
				"createDate": "2016-09-01"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 3,
		"totalRecord": 21,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "69.0",
				"salesPrice": "56.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1569",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/6/bbc0a4ec-4024-453b-a419-7f1cb09f75f8.jpg",
				"title": "美赞臣奶粉 安婴妈妈A+孕妇及授乳妇女配方奶粉 300克(进口奶源)新包装",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/6/7caad172-4493-4189-b88c-c830a28ef4b0.jpg\" /></div>\r\n",
				"createDate": "2017-02-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "279.0",
				"salesPrice": "245.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1590",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/15/7c6c3ff7-4624-43ff-b826-b2c932f2a870.jpg",
				"title": "美赞臣奶粉 安婴儿A+婴儿配方奶粉 1段(0-6月龄婴儿适用) 900克罐装",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/15/2ec2b7a8-55be-4c65-ad48-7cef8f9c9111.jpg\" /></div>\r\n",
				"createDate": "2017-02-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "138.0",
				"salesPrice": "115.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1589",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/15/426d11d7-64ae-445e-9cdc-76e66a322d34.jpg",
				"title": "美赞臣奶粉  安婴儿A+婴儿配方奶粉 1段(0-6月龄婴儿适用) 400克罐装",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/15/cf2ed8b6-570f-4134-bfdf-316ffd0583d4.jpg\" /></div>\r\n",
				"createDate": "2017-02-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "298.0",
				"salesPrice": "266.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1588",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/15/9abad4b8-72e7-410c-8baf-a6e3e7cf165f.jpg",
				"title": "美赞臣奶粉 安婴儿A+荷兰版婴儿配方奶粉 1段(0-12月龄婴儿适用) 850克罐装 原装原罐荷兰进口",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/15/571a02f7-2cf5-4586-b2fb-d9826b8c453f.jpg\" /></div>\r\n",
				"createDate": "2017-02-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "159.0",
				"salesPrice": "132.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1587",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/15/21ec147d-8498-44f3-9e56-a47a2a439c91.jpg",
				"title": "美赞臣奶粉 安婴儿A+荷兰版婴儿配方奶粉 1段(0-12月龄婴儿适用) 400克罐装 原装原罐荷兰进口",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/15/9ea466a0-526c-496e-bded-c37e6aefb6ae.jpg\" /></div>\r\n",
				"createDate": "2017-02-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "299.0",
				"salesPrice": "263.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1586",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/15/52dc6f9d-6a9e-474e-b152-30e929486d7e.jpg",
				"title": "美赞臣奶粉 荷兰版 安婴宝A+ 2段（6-12月适用）850g（荷兰原装进口）",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/15/b9bfa52e-f405-4144-9da5-b36d703e6a60.jpg\" /></div>\r\n",
				"createDate": "2017-02-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "269.0",
				"salesPrice": "239.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1585",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/15/0dc1c473-35f4-4986-9d12-47af7ba6abcf.jpg",
				"title": "美赞臣奶粉 安儿宝A+荷兰版幼儿配方奶粉 3段(12-36月龄幼儿适用) 850克罐装 原装原罐荷兰进口",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/15/06f6d8d5-2238-49d6-aa79-e16f3e571e38.jpg\" /></div>\r\n",
				"createDate": "2017-02-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "99.0",
				"salesPrice": "71.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1584",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/14/00fd3ac3-4478-403f-8f54-f7ec50843896.jpg",
				"title": "美赞臣奶粉 安儿宝A+幼儿配方奶粉 3段(12-36月龄幼儿适用) 400克盒装",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/14/3f9b61d1-fd44-493e-b036-d480a8c8fe75.jpg\" /></div>\r\n",
				"createDate": "2017-02-14"
			},
			{
				"salesCount": "500",
				"marketPrice": "199.0",
				"salesPrice": "178.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1583",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/14/652779c8-c52f-46c1-a94b-96cedac209cd.jpg",
				"title": "美赞臣奶粉 孕妇奶粉 安婴妈妈A+孕妇及授乳妇女配方奶粉 900克罐装",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/14/78732fd3-3362-4b16-af20-d9e7aebf1ac1.jpg\" /></div>\r\n",
				"createDate": "2017-02-14"
			},
			{
				"salesCount": "500",
				"marketPrice": "368.0",
				"salesPrice": "288.0",
				"sysTime": "2017-02-22 15:34:00",
				"id": "1582",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/14/00780cea-e673-4d20-9e6b-88cbb6219a3c.jpg",
				"title": "美赞臣奶粉 安婴儿A+婴儿配方奶粉 1段(0-6月龄婴儿适用) 1200克(400克*3袋)",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/14/0eb13b3a-d230-46dd-9be6-b6ef2ba00e04.jpg\" /></div>\r\n",
				"createDate": "2017-02-14"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 5,
		"totalRecord": 41,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "49.0",
				"salesPrice": "30.0",
				"sysTime": "2017-02-22 15:34:19",
				"id": "1494",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/3/4c43a789-6073-4496-a4eb-2ebc7c465067.jpg",
				"title": "椰正世家 正宗海南生榨椰子汁245ml*12手提装",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:20px;\">惠城区内包邮<br />\r\n\t<span style=\"color:#ff0000;\">其他地区需补邮费15元</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/3/fe5c5ff3-f612-4ade-9731-690a1f12dd14.jpg\" /></div>\r\n",
				"createDate": "2017-01-03"
			},
			{
				"salesCount": "100",
				"marketPrice": "120.0",
				"salesPrice": "88.0",
				"sysTime": "2017-02-22 15:34:19",
				"id": "1212",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/8/07f0cabf-52b6-4bfd-ae5e-f7eb228b3e9b.jpg",
				"title": "香港风顺堂百香果鸡蛋果果汁 245ml*15",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/8/a4ada52c-6420-4d77-bd2d-eb19f443e70b.jpg\" /></div>\r\n",
				"createDate": "2016-11-29"
			},
			{
				"salesCount": "2000",
				"marketPrice": "75.0",
				"salesPrice": "59.0",
				"sysTime": "2017-02-22 15:34:19",
				"id": "1274",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/1/1a767abf-160c-4c4a-933b-f6c3c5220aa3.jpg",
				"title": "丹荔园荔枝果醋饮料 惠州特产果汁饮料300ml*15支",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/1/8e68bddf-fdcf-48b9-8a93-201b30176b88.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/1/c29dcb6e-84c5-4928-878b-5db6aba86d39.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/1/be0440ef-c46e-4a0e-9406-d936008a5082.jpg\" /></div>\r\n",
				"createDate": "2016-11-01"
			},
			{
				"salesCount": "500",
				"marketPrice": "159.0",
				"salesPrice": "119.0",
				"sysTime": "2017-02-22 15:34:19",
				"id": "1048",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/31/9f528827-38d2-4c18-8486-96bbe4d1da39.jpg",
				"title": "台湾进口饮料 绿力水蜜桃芒果葡萄味480ML*24瓶",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/31/772103a5-aa5d-4137-b17f-873f3170b0ee.jpg\" /></div>\r\n",
				"createDate": "2016-08-31"
			},
			{
				"salesCount": "500",
				"marketPrice": "129.0",
				"salesPrice": "98.0",
				"sysTime": "2017-02-22 15:34:19",
				"id": "1047",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/31/639179b5-93ff-41ea-bf4c-72eb83f29b3f.jpg",
				"title": "马来西亚进口100冲劲牌原味 柠檬味100plus运动饮料325ml*24瓶/箱",
				"content": "<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"color: rgb(255, 0, 255); font-size: 16px; line-height: 1.5;\">宝贝名称：100冲劲原味运动、柠檬味</span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:16px;\"><span style=\"color: rgb(255, 0, 255);\">宝贝净重：325ml</span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:16px;\"><span style=\"color: rgb(255, 0, 255);\">宝贝产地：马来西亚</span></span></p>\r\n<p style=\"margin: 0px; padding: 0px; line-height: 1.5; clear: both; color: rgb(51, 51, 51); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; font-size: 12px;\">\r\n\t<span style=\"font-size:16px;\"><span style=\"color: rgb(255, 0, 255);\">宝贝规格：整箱24瓶，整箱销售</span></span></p>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:16px;\"><span style=\"color: rgb(255, 0, 255); font-family: 'Hiragino Sans GB', Tahoma, Arial, 宋体, sans-serif; line-height: 1.5;\">宝贝介绍：100冲劲运动饮料是马来西亚最畅销的饮料，100冲劲饮料是碳酸饮料迅速补充运动后失去的水分和矿物质，令人瞬间恢复冲劲。</span></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/31/cb2b0706-bbc6-4c50-a7ea-0729ea7dc103.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/31/533ce848-ab87-4322-90f2-796326add124.jpg\" /></div>\r\n",
				"createDate": "2016-08-31"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 1,
		"totalRecord": 5,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "39.0",
				"salesPrice": "26.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1519",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/11/96998ec6-0ff2-4784-beca-f14dcb67a23b.jpg",
				"title": "纯手工酸甜辣萝卜干180ml  辣椒酱280ml 无添加",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:18px;\"><span style=\"color:#0000cd;\">纯手工无添加</span><br />\r\n\t<span style=\"color:#4b0082;\">【</span></span></strong><strong style=\"font-size: 13.3333px;\"><span style=\"font-size: 18px;\"><span style=\"color: rgb(75, 0, 130);\">酸甜萝卜干13元/瓶</span></span></strong><strong style=\"font-size: 12px;\"><span style=\"font-size:18px;\"><span style=\"color:#4b0082;\">】</span></span></strong></div>\r\n<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:18px;\"><span style=\"color:#4b0082;\">【</span></span></strong><strong style=\"font-size: 13.3333px;\"><span style=\"font-size: 18px;\"><span style=\"color: rgb(75, 0, 130);\">辣椒酱16元/瓶</span></span></strong><strong><span style=\"font-size:18px;\"><span style=\"color:#4b0082;\">】</span></span><br />\r\n\t<span style=\"font-size:20px;\">2瓶起包邮</span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/11/c2b7a0f7-b7cb-4c89-9080-68cc68f4ef69.jpg\" style=\"font-size: 12px;\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/11/57991be1-dfec-484b-a04d-023f282c1581.jpg\" /></div>\r\n",
				"createDate": "2017-01-11"
			},
			{
				"salesCount": "500",
				"marketPrice": "35.0",
				"salesPrice": "26.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1498",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/4/1fe07106-b0df-440d-a796-80ffe70d981c.jpg",
				"title": "东坡西子酱 东坡盏 梅仙蓉 卧澜香",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/4/f7f28907-bb82-4e6d-9d29-c5e0a4d3940e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/4/f46e9c60-8197-483b-b21c-1c1847bd9ea8.jpg\" /></div>\r\n",
				"createDate": "2017-01-04"
			},
			{
				"salesCount": "500",
				"marketPrice": "128.0",
				"salesPrice": "99.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1480",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/27/0c4840df-f303-40cc-838c-b2a8e202fcad.jpg",
				"title": "私房自制秘方鸡脚 3盒顺丰包邮",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"color:#0000ff;\"><span style=\"font-size:16px;\">3盒起售，顺丰包邮</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/27/e7477fb0-821e-4861-9816-7af11e3123ad.jpg\" /></div>\r\n",
				"createDate": "2016-12-27"
			},
			{
				"salesCount": "500",
				"marketPrice": "158.0",
				"salesPrice": "128.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1365",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/39648229-5a11-4e08-99e9-aae619e4b4b3.jpg",
				"title": "原生态果园走地鸡 黑羽鸡 大阉鸡 生鸡 大黄鸡",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#000080;\"><strong><span style=\"font-size:16px;\">上午11点前下单，下午配送<br />\r\n\t11点后下单的次日下午配送</span></strong></span><br />\r\n\t<strong><span style=\"color:#ff0000;\"><span style=\"font-size:20px;\">抢购热线：13928395808</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/d02a1fe2-2522-4a3f-90b1-d6e897876949.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/6a029067-9352-4cfe-95ce-8a0a3421f102.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/38ae652e-91bc-4d76-b8c3-189a33f53af3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/44a85557-c42a-4efb-8c5b-9d9b27dda5ab.jpg\" /></div>\r\n",
				"createDate": "2016-12-07"
			},
			{
				"salesCount": "500",
				"marketPrice": "109.0",
				"salesPrice": "88.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1238",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/20/c8c411c3-720e-419f-b38c-ad690f1bead8.jpg",
				"title": "石坝鲜土鸡蛋 60枚/2.4kg",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:20px;\"><span style=\"color:#8b4513;\">石坝鲜土鸡蛋</span><br />\r\n\t<span style=\"color:#2f4f4f;\">顺丰快递箱装60个&nbsp; &nbsp;&nbsp;&nbsp; 88元/箱<br />\r\n\t顾客自取礼品装4.8斤 65元/箱</span></span><br />\r\n\t<span style=\"color:#4b0082;\"><span style=\"font-size:16px;\">自取地址：惠城区大湖溪宝安山水龙城<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/20/f0e8172c-f95b-4230-a781-cd6e3ad55882.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/20/adb7c73c-76bd-4c30-a7a2-84ffde23913b.jpg\" /></span></span></strong><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/18/b10a9cdc-f75b-49e8-ba33-31b59bbd13b8.jpg\" /></div>\r\n",
				"createDate": "2016-12-02"
			},
			{
				"salesCount": "500",
				"marketPrice": "42.0",
				"salesPrice": "30.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1039",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/30/4ef8dc8d-22c8-4112-8ea2-e9c4d70d6c83.jpg",
				"title": "潮汕特产惠来肉卷 炸猪肉 无淀粉 手工卷",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/30/14805d9b-f68d-411f-8df6-20ce1b45e82f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/30/8b77cf70-1752-4306-8a9d-e4283398fe38.jpg\" /></div>\r\n",
				"createDate": "2016-11-24"
			},
			{
				"salesCount": "500",
				"marketPrice": "99.0",
				"salesPrice": "75.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1037",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/30/c356f37d-79b1-4fcc-9cd1-05f6dac49d00.jpg",
				"title": "潮汕正宗惠来虾枣 纯手工虾肉不添加色素",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/30/7146e96f-4e09-4947-bcde-22a5a50f653e.jpg\" /><br />\r\n\t<strong style=\"color: rgb(255, 0, 0); font-size: 13.3333px;\"><span style=\"font-size: 18px;\"><span style=\"background-color: rgb(250, 235, 215);\">发顺丰快递&middot;保新鲜快捷</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/30/8c26e327-efe3-451f-939e-97de69ed291d.jpg\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/30/0287dbad-5851-462a-8b04-3609490564f1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/30/8d9c36f6-d103-45fb-a130-2a07f2dd5c61.jpg\" /></div>\r\n",
				"createDate": "2016-11-24"
			},
			{
				"salesCount": "500",
				"marketPrice": "79.0",
				"salesPrice": "55.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1324",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/20/08027d93-046b-4454-86ef-cba34e76e5f6.jpg",
				"title": "正宗潮汕牛肉丸、牛筋丸 3斤包邮",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:16px;\"><span style=\"color:#800000;\">正宗潮汕牛肉丸、牛筋丸</span></span><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/20/1111991e-64d5-49cf-9deb-659764ec9e42.jpg\" /></div>\r\n",
				"createDate": "2016-11-24"
			},
			{
				"salesCount": "5000",
				"marketPrice": "129.0",
				"salesPrice": "88.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1330",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/f521ac6b-3c60-47c1-b6ea-b5e4d49440e1.jpg",
				"title": "10斤装 丹霞皇帝柑 正宗贡柑 柑橘果园新鲜水果礼盒装",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:20px;\">韶关果园发货<br />\r\n\t广东省内包邮<br />\r\n\t正宗丹霞皇帝贡柑10斤礼盒装<br />\r\n\t皇帝桔家乡特产！原生态山区土家贡柑，无加工无公害原味贡柑。营养丰富，口感正宗。为了你们可以直接吃到最新鲜无公害的橘子，我们是现摘现寄的，而不是市场上价格高又有&ldquo;打过蜡，打过保鲜剂&rdquo;的皇帝桔！！</span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/21/d7929617-fc86-4056-a98b-f1677bb81893.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/21/343b6eb8-3973-44cf-b949-649f6a8d451d.jpg\" /></div>\r\n",
				"createDate": "2016-11-21"
			},
			{
				"salesCount": "99",
				"marketPrice": "158.0",
				"salesPrice": "128.0",
				"sysTime": "2017-02-22 15:34:38",
				"id": "1216",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/10/05bb11d9-7130-4bb8-8bc4-6b4938f82b1a.jpg",
				"title": "双11特卖：广东龙门胡须鸡 1.15kg /只 送胡须鸡蛋1斤",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px; color: rgb(0, 0, 255);\"><span style=\"font-size: 16px;\"><span style=\"color: rgb(255, 0, 0);\"><span style=\"font-size: 20px;\">即日起至双11期间购买送1斤胡须鸡蛋</span></span></span></strong><br />\r\n\t<span style=\"color:#0000ff;\"><strong><span style=\"font-size:16px;\">胡须鸡每只折后价128元赠送两个鸡蛋<br />\r\n\t三只以上每只减10元<br />\r\n\t<br />\r\n\t带毛鸡3斤4左右，宰杀后2斤6左右<br />\r\n\t<br />\r\n\t为保证鸡的口感及新鲜度，胡须鸡每天早上人工宰杀，冰袋、密封箱装起<br />\r\n\t<br />\r\n\t每天上午11点顺丰统一发货，下午四五点到达<br />\r\n\t<br />\r\n\t【抢购热线】<br />\r\n\t13413120162邓先生 &nbsp;15016048842钟小姐</span></strong></span><br />\r\n\t<br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/10/f3e06bab-752c-40dc-bdd1-ad543daf3e4d.jpg\" /></div>\r\n",
				"createDate": "2016-11-04"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 20,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "118.0",
				"salesPrice": "88.0",
				"sysTime": "2017-02-22 15:34:59",
				"id": "1303",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/8/4c652911-0746-4337-ba86-82ceee1a230a.jpg",
				"title": "正宗天然野生原木花菇干货农家自产特级纯天然原木蘑菇香菇500g",
				"content": "<div>\r\n\t<span style=\"font-size:16px;\">天然野生、无污染、无任何农药、全自然生长、无任何人工干预造就了特殊的美味！利用自然风干、自然晾晒方式使花菇充份吸收了阳光、极大的保存了花菇的美味！</span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:16px;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/49ea2b3f-06b6-4f92-b79a-6370c9e3b219.jpg\" /></span></div>\r\n<div>\r\n\t<span style=\"font-size:18px;\"><strong style=\"color: rgb(0, 0, 0); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 21px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\"><span style=\"color: rgb(255, 0, 0);\">花香菇,香菇,顾名思义首先就是要天然香气扑鼻,这是它最本质的特性,也是辨别花香菇是否质优的最本质要素！！花菇具有高蛋白、低脂肪、多糖、多种氨基酸和多种维生素的菌类食物.</span></strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:18px;\"><strong style=\"color: rgb(0, 0, 0); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 21px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\"><span style=\"color: rgb(255, 0, 0);\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/1a56c0b1-2f3b-4dbb-8a3e-ce429b58d253.jpg\" /><br />\r\n\t天然风干，绝不添加任何东西，大小中等，精挑细选口感非常棒，根短、朵小肉厚、肥嫩、鲜香浓郁。<br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/d99593ac-f8bc-4eb6-aeba-add866937dc1.jpg\" /><font color=\"#000000\" style=\"font-family: 宋体; font-size: 18px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\"><strong><span>花菇是是一种绿色食品，畅销国内外市场。</span></strong><span><strong>花菇</strong>因菇面有天然花斑纹而得名。由于经受不起寒霜侵蚀而起裂缝形成花斑，在</span></font><b style=\"color: rgb(34, 177, 76); font-family: 宋体; font-size: 18px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 25px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\"><span style=\"color: red;\">每50千克香菇中，只能选出2．5千克的花菇方可食用</span></b><span style=\"font-family: 宋体; font-size: 18px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; color: red; background-color: rgb(255, 255, 255);\">。</span><span style=\"font-family: 宋体; font-size: 18px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; color: black; background-color: rgb(255, 255, 255);\">食用的花菇菇身厚薄、大小均匀适中，菇边稍向内卷曲。</span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/346b8101-be22-4ad6-86c2-7cc7ca9eeb37.jpg\" /><span style=\"color: rgb(34, 177, 76); font-family: 宋体; font-size: 18px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: rgb(255, 255, 255);\">一般袋料香菇的菇型比原木（椴木）香菇的菇型好看一些，袋料的菇型规则，原木的不是太规则，原因很简单就是因为袋料是长在大棚里的，温度湿度可以调节所以生 长所需要的条件好，自然菇型也漂亮一些。而原木的放置在大自然中全靠自然的温度湿度，所以难免生长条件不是太好，菇型相对来说也要次一点</span><strong style=\"color: rgb(34, 177, 76); font-family: 宋体; font-size: 18px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 25px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\">了</strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/e84229ce-b63a-40a7-84ba-a674d0c5a7f5.jpg\" /><span style=\"color: rgb(0, 0, 0); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 21px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: rgb(255, 255, 255);\">野生的花菇生长周期长，必须用温水浸泡4个小时以上<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/7b3751fe-4d56-42d7-b904-b85c74d3fd71.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/608dd7a3-1790-4dfb-b3af-79cc68a34c71.jpg\" /></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/9ec28e87-4ab9-4412-9d8e-3a49c4ce9b6f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/8/57f190e6-9dc5-4bb6-9428-54cce74c283a.jpg\" /><span style=\"color: rgb(0, 0, 0); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 21px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: rgb(255, 255, 255);\">烹调前，先用冷水将香菇，花菇（干货）表面冲洗干净，带柄的花菇（干货）可将根部除去，然后&quot;鳃页&quot;朝下放置于温水盆中浸泡，待香菇，花菇（干货）变 软、&quot;鳃页&quot;张开后，再用手朝一个方向轻轻旋搅，让泥沙徐徐沉入盆底。浸泡香菇，花菇（干货）的水除去泥沙后还可利用。如果在浸泡香菇，花菇（干货）的温 水中加入少许白糖，烹调后的味道更鲜美。</span></span></strong></span><br />\r\n\t&nbsp;</div>\r\n",
				"createDate": "2016-11-08"
			},
			{
				"salesCount": "200",
				"marketPrice": "625.0",
				"salesPrice": "188.0",
				"sysTime": "2017-02-22 15:34:59",
				"id": "1243",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/20/82fab3ca-6ade-4d08-8af4-da0526f3e81c.jpg",
				"title": "云南正品雪莲子 500g",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/20/12a6f42b-91f4-4b44-a114-6adb8969febb.jpg\" /></div>\r\n",
				"createDate": "2016-10-20"
			},
			{
				"salesCount": "100",
				"marketPrice": "193.0",
				"salesPrice": "59.0",
				"sysTime": "2017-02-22 15:34:59",
				"id": "1242",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/20/cddd6263-f915-4279-8a0f-005214870669.jpg",
				"title": "云南野生桃胶  500g",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/20/92cd8522-1779-4d31-8b24-f521c80a9e86.jpg\" /></div>\r\n",
				"createDate": "2016-10-20"
			},
			{
				"salesCount": "100",
				"marketPrice": "363.0",
				"salesPrice": "109.0",
				"sysTime": "2017-02-22 15:34:59",
				"id": "1241",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/20/bc8ace8d-8e90-4e6f-a995-7be4b1fed4d9.jpg",
				"title": "金虫草花特大级孢子头蛹虫草正品  500克",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/20/b380ec5d-5319-4fd8-9772-1008f314152d.jpg\" /></div>\r\n",
				"createDate": "2016-10-20"
			},
			{
				"salesCount": "100",
				"marketPrice": "650.0",
				"salesPrice": "195.0",
				"sysTime": "2017-02-22 15:34:59",
				"id": "1240",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/20/a0f0742e-3da9-4016-9a6c-774cb0d2670b.jpg",
				"title": "新西兰鳕鱼胶 10只/150g",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/20/3966f51e-af31-4de0-8769-f96163865efb.jpg\" /></div>\r\n",
				"createDate": "2016-10-20"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 1,
		"totalRecord": 5,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "8",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d41e65b1-004e-4531-b064-69a3cc5dc2ef.jpg",
				"title": "西藏那曲虫草",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/webappinfo.action?id=951",
				"createDate": "2015-12-30"
			},
			{
				"id": "14",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/01e734a1-ff8f-42d5-b3cf-e891d8d7e853.jpg",
				"title": "奇华月饼 厂价直销",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%A5%87%E5%8D%8E",
				"createDate": "2016-01-07"
			},
			{
				"id": "15",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/23/6b7d96db-6429-4cca-a5f7-ace6609c46ea.jpg",
				"title": "农家散养土鸡蛋",
				"url": "http://www.gdshyj.com/shop/webapp/index/food/shenghuoshipinganddetail.action#shenghuoshiping=1105",
				"createDate": "2016-01-07"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "388.0",
				"salesPrice": "299.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1485",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/28/31760323-3151-4b54-a3a0-7bc0da7f9db4.jpg",
				"title": "纯手工熬制阿胶糕500g",
				"content": "<div>\r\n\t<span style=\"font-size:14px;\">阿胶糕的主要原料是阿胶，阿胶是采用纯正的整张乌头驴皮熬制而成。阿胶具有生血作用，可用于失血贫血、缺铁贫血，再生障碍贫血及年老体弱、儿童、孕妇的滋补。并对儿童、青少年的生长发育具有改善作用。长期服用阿胶糕，还可营养皮肤，使肌肤光洁润滑并具弹性。</span></div>\r\n<div>\r\n\t&nbsp;</div>\r\n<div>\r\n\t<span style=\"font-size:14px;\">纯手工熬制阿胶糕。每一个环节都用心认真坚守。慢火熬制。用最好的（山东）黄酒。用精选宁夏杞子。若羌红枣。薄皮核桃。饱满芝麻仁。长期招收代理。</span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/28/d1d52311-a906-4c49-962e-7df16ad4172f.jpg\" /></div>\r\n",
				"createDate": "2016-12-28"
			},
			{
				"salesCount": "500",
				"marketPrice": "99.0",
				"salesPrice": "68.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1455",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/22/5439e59e-a784-4b19-bf38-3c80c0b1bd11.jpg",
				"title": "享然红枣枸杞黑糖姜母茶沐心国际黑糖姜茶暖宫去湿寒享然姜母茶400g",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:20px;\"><strong style=\"color: rgb(0, 0, 0); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; line-height: 21px;\"><span style=\"color: rgb(0, 0, 255);\">1盒有15小包左右</span></strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/22/3f9f9aaf-8e18-453f-ac72-62c1bc050a46.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/22/600e8b67-f8db-44dc-b576-beaf7fcd6f0c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/22/0a6472d8-0d6a-443a-9054-5802c4ecd3d9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/22/f4f2418c-687a-4df0-adb0-ccf4fe51a693.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "450.0",
				"salesPrice": "330.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1434",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/16/914669ac-3542-4867-88f7-12b1e679d58c.jpg",
				"title": "普洱茶宫廷熟茶 新会小青柑 500g",
				"content": "<div>\r\n\t<span style=\"font-size:14px;\">&nbsp; &nbsp; &nbsp; &nbsp;如今市面上很多广西青柑、湖南青柑冒充新会青柑，但广西青柑偏绿、湖南青柑略扁，都不似新会青柑青色圆润。此外，柑（桔）普茶&ne;橘普茶，柑普茶，冲泡开后唯有新会小青柑，带陈皮韵味，其他只有水果味，非常容易辨别。正宗的新会小青柑皮皮厚质硬、色匀、油包粒密实且清晰可见，稍有白霜者更佳。新会柑的柑皮比较厚，约为2.2mm，冲泡后皮色浅绿，皮质厚实、韧性好、毛孔细腻。若为橘子皮做的，冲泡后皮色偏深绿色，皮质稀软毛孔粗，用手一扯就稀烂。&nbsp;</span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/16/ded29872-ccd5-40b0-836c-fd1d4d221019.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/16/ff909d65-60de-41c4-b82c-4c4c9e3b0e43.jpg\" /></div>\r\n",
				"createDate": "2016-12-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "169.0",
				"salesPrice": "100.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1414",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/13/05beedaa-2f25-4103-ab22-45cfd453a561.jpg",
				"title": "江西土蜂蜜 深山土蜂蜜 野生蜂蜜2斤装",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/79f8f38b-146e-451e-bf6c-d432c6c519a3.jpg\" /></div>\r\n",
				"createDate": "2016-12-13"
			},
			{
				"salesCount": "500",
				"marketPrice": "239.0",
				"salesPrice": "140.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1349",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/30/2db12f1d-4f31-4762-b318-534423fb483c.jpg",
				"title": "蚂蚁农场大麦若叶青汁纯天然嫩苗粉末特级麦草袋装",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:16px;\">送杯子一个</span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/30/c7bc0220-b7c5-4f13-a730-b4eb0fdf763c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/30/56347335-d65a-4a4e-8014-aace9f48de27.jpg\" /></div>\r\n",
				"createDate": "2016-12-13"
			},
			{
				"salesCount": "500",
				"marketPrice": "699.0",
				"salesPrice": "480.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1363",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/b017823d-2082-4a5b-af85-2570271dc7de.jpg",
				"title": "泰洋树阿胶羹 东阿阿胶",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#000080;\"><strong><span style=\"font-size:18px;\">全国统一零售价480元<br />\r\n\t购买即返58元</span></strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/c2a8215a-7f74-4957-83f6-bacd636d6c07.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/a52a6074-4f0d-4b0a-862b-6f617279a1b4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/4fb06bd6-d552-4b3e-a4b2-075eb547b59f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/7/c790fbb3-fd60-43ef-a11a-e0f22d280614.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/7/21934a96-5905-4a52-88a7-d9bab81ba45a.jpg\" /></div>\r\n",
				"createDate": "2016-12-07"
			},
			{
				"salesCount": "500",
				"marketPrice": "480.0",
				"salesPrice": "380.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1360",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/5/83f24deb-615a-42d6-b72e-3b28f8aa145f.jpg",
				"title": "泰洋树益生菌 可以缓解肠易激综合征",
				"content": "<p style=\"text-align: center;\">\r\n\t<strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box;\"><span style=\"color:#000080;\"><span style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; font-size: 18px;\">全国统一零售价380元<br />\r\n\t下单即返45元钱包</span></span><br />\r\n\t<br />\r\n\t<span style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; color: rgb(229, 51, 51); font-size: 18px;\">什么是肠易激综合征</span></strong></p>\r\n<div>\r\n\t<span style=\"line-height: 24px; font-size: 12px;\">&nbsp; &nbsp; &nbsp; 肠易激综合征是一种最常见的胃肠道失调症，主要症状包括腹部绞痛、胀气、膨胀和肠习性的改变。有些患有肠易激综合征的人患有便秘；还有人患有痢疾；还有一些人会交替患有这两种疾病。</span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/75606136-0e73-4a57-944c-eb916101f47e.jpg\" /><strong style=\"font-size: 12px; -webkit-font-smoothing: antialiased; box-sizing: border-box;\"><span style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; color: rgb(229, 51, 51); font-size: 18px;\">什么引起了肠易激综合征</span></strong></div>\r\n<p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; list-style: none; border: 0px; font-stretch: normal; line-height: 24px;\">\r\n\t医生们至今还不能找出引起肠易激综合征的有机病因，尽管病因不详，但它与肠内菌群的失衡却存在一定联系（一种或因或果的关系）。健康人肠内的菌群应当是处于平衡状态的，也就是说，肠内的有益菌应能够有效抑制有害菌，但是现代人由于生活紧张、工作压力、情绪波动等因素导致肠胃功能衰弱，造成肠内菌群异常、老化、习性改变等，也就是所谓的肠易激综合征。</p>\r\n<p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; list-style: none; border: 0px; font-stretch: normal; line-height: 24px; text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/dc6b20f8-d881-4bde-a85a-5412d49ed24a.jpg\" /><strong style=\"font-size: 12px; -webkit-font-smoothing: antialiased; box-sizing: border-box;\"><span style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; color: rgb(229, 51, 51); font-size: 18px;\">益生菌疗法</span></strong></p>\r\n<p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; list-style: none; border: 0px; font-stretch: normal; line-height: 24px;\">\r\n\t当身体出现肠易激综合征这类症状时，使用大量的益生菌能够产生几个方面的作用&mdash;所有的作用都是积极的！首先，好的细菌能够将部分有害细菌赶出体内。其次，益生菌产生的天然抗生素能够杀死部分有害菌。再者，益生菌将刺激身体产生自己的抗生素，这种抗生素不仅能够打败有害菌，还能矫正身体对有害菌产生的过度免疫反应。最后，益生菌还能够创造或改善他们周围的环境，从而稳定胃肠道的PH值，使其保持正常水平。</p>\r\n<p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; list-style: none; border: 0px; font-stretch: normal; line-height: 24px; text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/b52119c6-258b-48d8-ac1b-7744ceaea508.jpg\" /><span style=\"line-height: 24px; font-size: 12px;\">在瑞典进行的一项研究证实：6位肠易激综合征患者通过连续服用4周、每天服用一定量的益生菌（植物乳酸菌）进行治疗后，他们的胀气和腹痛症状明显减弱，胃肠道功能得到改善。</span></p>\r\n<p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; list-style: none; border: 0px; font-stretch: normal; line-height: 24px;\">\r\n\t2003年，一项英国的研究把40例肠易激综合征患者分成两组，治疗组20例服用乳杆菌制剂，对照组20例口服安慰剂，连续4周。</p>\r\n<p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; list-style: none; border: 0px; font-stretch: normal; line-height: 24px;\">\r\n\t<strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box;\"><span style=\"padding: 5px; -webkit-font-smoothing: antialiased; box-sizing: border-box; color: rgb(229, 51, 51);\">结果发现：治疗组20例腹痛消失，6例便秘正常，19例症状改善，而对照组仅有11例腹痛消失。</span></strong></p>\r\n<p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box; list-style: none; border: 0px; font-stretch: normal; line-height: 24px; text-align: center;\">\r\n\t<span style=\"font-size: 24px;\">泰洋树益生菌</span><br />\r\n\t<span style=\"font-size: 24px; line-height: 24px;\">&mdash;&mdash;守护人类健康的最后一道防<br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/c17a9333-84fe-40ef-8170-350c492e93db.jpg\" /></span><br />\r\n\t<strong><span style=\"color: rgb(0, 176, 240);\">泰洋树益生菌的四大优势</span></strong></p>\r\n<p style=\"line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">1、全国唯一的乳酸菌<span style=\"font-family: 'Times New Roman';\">QS</span>生产标准，确保产品的安全性</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">符合国家卫生部颁布的食用菌种名单，并经过权威机构关于毒理、毒力、动物实验、人体实验的权威报告，全国唯一&ldquo;乳酸菌<span style=\"font-family: 'Times New Roman';\">QS</span>&rdquo;高标准生产厂家。 而市场上普通类益生菌产品尽管符合食用菌种名单，但是其相关实验大多缺乏，尤其是没有专利菌株的功能支持，并且产品采用的&ldquo;固体饮料&rdquo;通用标准，其产品标准远远落后于采用&ldquo;乳酸菌<span style=\"font-family: 'Times New Roman';\">QS</span>&rdquo;的泰洋树益生菌产品。</span></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">2、菌种选择适合亚洲人体质，产品具有专业性</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">菌种来源于中国传统的牧区，更符合亚洲人的体质需求。其中菌种的来源和产地具有清晰的文字、图片以及影像记载，并在相关的机构做了备案记录，保证其来源的产地正宗性，专业为亚洲人体质需求设计。而目前市场上其他大多数产品不能明确的说明其菌种的来源，在目前缺乏政府监管的情况下，更是不能保证其菌株是否通过合法的渠道获得，更没有泰洋树益生菌针对亚洲人体质做出的专业性选择。</span></p>\r\n<p style=\"text-indent: 28px; line-height: 24px; text-align: center;\">\r\n\t<span style=\"font-family: 宋体;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/7042b493-7e82-448e-b343-c70ddd7bf04f.jpg\" /></span><strong style=\"line-height: 24px; font-size: 12px;\"><span style=\"font-family: 宋体;\">3、菌株数量多，活性强，构建天然肠道屏障</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px; text-align: center;\">\r\n\t<span style=\"font-family: 宋体;\">泰洋树益生菌每条300亿<span style=\"font-family: 'Times New Roman';\">cfu</span>的优质菌株能顺利通过胃酸、胆盐的层层阻碍，顺利到达肠道，菌队强大，便能抢得先机，占有肠道粘膜上最有利的地形，构建一道天然的生物屏障，阻止有害菌的入侵。</span></p>\r\n<p style=\"text-indent: 28px; line-height: 24px; text-align: center;\">\r\n\t<strong><span style=\"font-family: 宋体;\">4、配方独特合理，协同起效，保障健康</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px; text-align: center;\">\r\n\t<strong><span style=\"font-family: 宋体;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/03f99313-7e49-4321-84d1-01bc69ac2ff8.jpg\" /></span></strong><span style=\"font-family: 宋体; font-size: 12px;\">益生菌、益生元和膳食纤维相辅相成，保证菌株在体内的高效增殖。相对于市场某些产品选用的普通原料和大众化配方相比，泰洋树益生菌充分考虑了如何更有效的发挥产品的有效性，不仅选择了具有确切功效的优质专利菌株，而同时搭配了益生元和膳食纤维，保证了产品的多重有效性。</span></p>\r\n<p style=\"text-indent: 28px; line-height: 24px; text-align: center;\">\r\n\t<span style=\"font-family: 宋体; font-size: 12px;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/b72facce-9fe1-475b-ba80-2ee4e62f7288.jpg\" /></span></p>\r\n<p style=\"text-indent: 28px; line-height: 24px; text-align: center;\">\r\n\t<span style=\"color: rgb(0, 112, 192);\"><strong><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; text-indent: 32px; white-space: pre-wrap;\"><span style=\"font-family: 宋体;\"><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;\"><span style=\"font-family: 宋体;\"><strong><span style=\"line-height: 28.5px; font-size: 19px;\"><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; line-height: 24px; text-align: center; text-indent: 37px;\"><span style=\"font-family: 宋体; line-height: 28.5px;\">泰洋树益生菌五大特色<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/882df6e9-4d1c-4ebf-87b7-596cb29eaf04.jpg\" /></span></strong></span></strong></span></strong></span></strong></strong></span><br />\r\n\t<span style=\"font-family: 宋体;\">●多益元：益生元倍增效应<br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/c83e57f8-7dc3-4c55-a624-dc8400062144.jpg\" /></span><br />\r\n\t<span style=\"font-family: 宋体;\">●专一化：专为亚洲人种使用<br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/c58939a9-2f28-478e-b210-32c7a0641f1e.jpg\" /></span><br />\r\n\t<span style=\"font-family: 宋体;\">●高活量：活菌数多，效果尤佳<br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/d76f2b7c-e639-4f49-9979-176cecfdd8d8.jpg\" /></span><br />\r\n\t<span style=\"font-family: 宋体;\">●安全性：安全性高，无不良作用<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/4f22430a-dbb6-45bc-a29e-b7e459954506.jpg\" /></span><br />\r\n\t<span style=\"color: rgb(0, 112, 192);\"><strong><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; text-indent: 32px; white-space: pre-wrap;\"><span style=\"font-family: 宋体;\"><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;\"><span style=\"font-family: 宋体;\"><strong><span style=\"line-height: 28.5px; font-size: 19px;\"><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; line-height: 24px; text-indent: 37px;\"><span style=\"font-family: 宋体; line-height: 28.5px;\">泰洋树益生菌适用人群</span></strong></span></strong></span></strong></span></strong></strong></span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">1、有慢性肠道疾病或肠易激综合征状：腹痛、腹胀、腹泻、便秘、消化不良的人群</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">2、经常出差旅行，饮食不当造成肠胃不适的人群</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">3、常服抗生素药物体弱多病的人群</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">4、经常应酬喝酒较多，酒后不适的人群</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">5、免疫力低下或有过敏体质的人群</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">6、心血管疾病、肝脏疾病、癌症化疗等疾病患者</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">7、办公室工作人员、电脑工作人员</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">8、<span style=\"font-family: 'Times New Roman';\">3</span>岁以上儿童及糖尿病患者亦可放心食用</span></p>\r\n<p style=\"text-indent: 38px; line-height: 24px; text-align: center;\">\r\n\t<span style=\"font-family: 宋体;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/0aa228dc-5d23-44ab-ad88-8b3c8049dd06.jpg\" /></span><br />\r\n\t<span style=\"color: rgb(0, 112, 192);\"><strong><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; text-indent: 32px; white-space: pre-wrap;\"><span style=\"font-family: 宋体;\"><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;\"><span style=\"font-family: 宋体;\"><strong><span style=\"line-height: 28.5px; font-size: 19px;\"><strong style=\"font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; line-height: 24px; text-indent: 37px;\"><span style=\"font-family: 宋体; line-height: 28.5px;\">益生菌的作用</span></strong></span></strong></span></strong></span></strong></strong></span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">1、改善肠道功能</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">益生菌有耐胃酸及肠道消化液作用，通过其生长及各种代谢作用促进肠内菌群的正常化，抑制肠内腐败物质产生，保持肠道机能的正常。经常服用益生菌，可预防和治疗腹泻，治疗轻度溃疡性结肠炎。除口气、缓解胃痛、胃胀；防治便秘；防治腹泻。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">2、预防阴道感染</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">嗜酸乳杆菌可抑制阴道内白色念珠菌的繁殖。</span><span style=\"font-family: 宋体;\">健康妇女阴道中乳杆菌为优势菌，占95%以上，目前从健康妇女阴道中分离的乳酸菌，数量较多的有嗜酸乳杆菌、唾液乳杆菌、发酵乳杆菌等。这些乳酸菌首先产生抗微生物物质如乳酸、细菌素、过氧化氢等以保持阴道的酸性环境，加强其自净能力；另一方面乳酸菌黏附于黏膜，防止病原微生物的定植；此外乳酸菌还可以通过提高机体免疫功能，刺激巨噬细胞和淋巴细胞活性，增强多形核白细胞的吞噬能力，维持阴道局部的抗感染能力。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">3、增强人体免疫力</span></strong></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">益生菌与肠黏膜共同构成一道保护屏障，阻止细菌、病毒和食物抗原的入侵，同时还可以刺激肠道的免疫器官，发挥更强的免疫功能。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">4、减少乳糖不耐受症状</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">试验表明：益生菌可以将牛乳中的乳糖发酵，生成更有利于人体消化吸收的乳酸，减少乳糖不耐症的发生。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">5、缓解变态反应</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">日本科学家发现，乳酸菌的细胞壁可以诱发T细胞产生大量的IL-12，激发Th1产生大量IFN，因此，能抑制IgE产生，且能通过诱导&ldquo;口服免疫耐受&rdquo;，而起到缓解变态反应症状的作用。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">6、预防高血压</span></strong></p>\r\n<p style=\"line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">&nbsp;&nbsp;&nbsp;&nbsp;一部分益生菌能特异分解奶蛋白（酪蛋白），产生具有抑制引起血压上升酶（ACE）活性的两种多肽（VPP和LPP），从而具有降血压的效果。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">7、预防癌症和抑制肿瘤生长</span></strong></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">益生菌能通过抑制肠内腐败有害细菌的生长和代谢，减少肠内致癌物质的产生或直接抑制癌细胞的生长。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">8、防止骨质丢失</span></strong></p>\r\n<p style=\"text-indent: 28px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">益生菌能防止骨质丢失，预防骨质疏松。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">9、降低血清中的胆固醇</span></strong></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">益生菌能吸附食物中的胆固醇，促使食物中的胆固醇向体外排泄。还能吸附肠内的胆汁酸，强化肝脏中的胆固醇向胆汁酸转化，最终减轻血清中的胆固醇含量。</span></p>\r\n<p style=\"text-indent: 32px; line-height: 24px;\">\r\n\t<strong><span style=\"font-family: 宋体;\">10、抗螺旋杆菌的作用</span></strong></p>\r\n<p style=\"line-height: 24px;\">\r\n\t<span style=\"font-family: 宋体;\">&nbsp;&nbsp;&nbsp;&nbsp;一部分益生菌能抗胃酸，粘附在胃壁上皮细胞表面，通过其他代谢活动抑制螺旋杆菌的生长。</span></p>\r\n<p style=\"line-height: 24px; text-align: center;\">\r\n\t<span style=\"font-family: 宋体;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/7/b0aaf03b-0f58-408d-beb3-c9b9082c25df.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/a7f58be7-9a82-49df-b086-1129c4570d52.jpg\" /></span></p>\r\n",
				"createDate": "2016-12-07"
			},
			{
				"salesCount": "500",
				"marketPrice": "1759.0",
				"salesPrice": "1499.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1357",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/2/ddb2df99-a479-42e5-a7f2-f43e3fd4c6f0.jpg",
				"title": "新西兰鱼胶 精品野生深海鱼原色花胶鱼胶 调理首选500g 25片",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#0000cd;\"><strong><span style=\"font-size:20px;\">一斤25+片RMB1499&nbsp;</span></strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"color:#0000cd;\"><strong><span style=\"font-size:20px;\">一斤12-14片RMB1999</span></strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"color:#0000cd;\"><strong><span style=\"font-size:20px;\">一斤8-9片RMB2299 &nbsp;</span></strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"color:#0000cd;\"><strong><span style=\"font-size:20px;\">一斤6-7片RMB2499&nbsp;</span></strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"color:#0000cd;\"><strong><span style=\"font-size:20px;\">一公斤8片RMB5099</span></strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"color:#0000cd;\"><strong><span style=\"font-size:20px;\">一公斤6片RMB6299</span></strong></span><br />\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">新西兰花胶要选择哪个品种的？</span></div>\r\n\t<div>\r\n\t\t&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 新西兰鱼胶最基本的功效是补充胶原蛋白，美容护肤，调理肠胃和增强抵抗力新西兰花胶只有一个品种，那就是Ling鱼，只要这种Ling鱼的胶原蛋白最多。</div>\r\n\t<div>\r\n\t\t<span style=\"font-size: 12px;\">新西兰红花胶</span></div>\r\n\t<div>\r\n\t\t新西兰白花胶</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">新西兰花胶为什么会有红白之分？</span></div>\r\n\t<div>\r\n\t\t&nbsp; &nbsp;新西兰花胶整片呈现红色是最天然颜色，也有少部分白胶，数量极少。从本质上讲，鱼都是同样的鱼，所以营养价值相同，只是颜色，品相有所差别。消费者没必要在乎它的颜色！</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">鱼胶个头越大厚越厚越好？汤水越粘越好？</span></div>\r\n\t<div>\r\n\t\t1、同个品种的鱼胶，个头越大的当然是越好的，价值越高。2、不同品种的鱼胶，是不能简单的比较的。比如新西兰鳕鳘鱼花胶，一个150克的个头越来越少，白花胶，更是非常的罕见。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">为什么有些鱼胶炖完之后很软，有些却很韧？</span></div>\r\n\t<div>\r\n\t\t新西兰花胶有别于其他国家热带海域的鱼胶，因为新西兰属于冷水海域的鱼而不像其他深水鱼胶，所以他的胶质比较厚，密集度比较强，所以它在煲汤的时候不容易化，而不像一些国内的花胶炖完之后是比较软的，咬在嘴里面非常的软，都薄的像纸一样。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">每次要炖多少的量？水量如何？多久才有效果？</span></div>\r\n\t<div>\r\n\t\t鱼胶因为营养价值比较高，而人体每天吸收的量是一定的，所以每次炖的量大概在30克左右即可。水量的话大概是350ml的样子，就是大概平时吃的那个中碗一碗。至于多久吃一次，这个一般是根据自己的情况来决定的，如果您要效果快点，可以每天都吃（来例假和感冒就不吃），也可以连续吃7-10天然后停3-4天，也可以隔天吃或者一个星期吃3-4次这样子，总之要保持一个延续性，不能断断续续的，这样子效果是不好的。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">鱼胶会发胖么？会不会上火？有没有什么忌讳？</span></div>\r\n\t<div>\r\n\t\t鱼胶脂肪含量只有0.2%，是不会让人发胖的，但是鱼胶有改善肠胃的功效，能提高食欲。 鱼胶性平，本身是不会上火的。但是如果您觉得自己火气比较大的话，最好是先暂时不吃鱼胶呢，喝点凉茶调理一下之后再吃。</div>\r\n\t<div>\r\n\t\t&nbsp;鱼胶基本上是不会跟其他的情况和食物冲突的，正常情况下都可以吃的，但是感冒和来例假的时候是不吃的。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">鱼胶会不会腥？要吃鱼胶肉么？</span></div>\r\n\t<div>\r\n\t\t鱼胶毕竟取自鱼身上的，所以多少都会有点腥味啦（老一点的鱼胶腥味会非常的淡），这个是避免不了的，但是大部分的新西兰鳕鳘鱼鱼胶味道应该绝大多数朋友都能接受的，或者您也可以加点葱，姜片等东西来去腥。</div>\r\n\t<div>\r\n\t\t至于要不要吃鱼胶肉，新西兰鱼胶与其他鱼胶不一样，汤不是越浓越好，因为它炖了不会化，所以一定要吃鱼胶肉，炖新西兰花胶不单是用来喝汤的，跟其他鱼胶完全不一定。</div>\r\n\t<div>\r\n\t\t泡好的新西兰花胶</div>\r\n\t<div>\r\n\t\t炖好的花胶汤</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">鱼胶炖之前要泡水么？泡多久？可以用热水泡不？</span></div>\r\n\t<div>\r\n\t\t新西兰花胶一定要用冷水泡发一夜，和姜葱一起入锅中从冷水煮到水开，至胶身变软，捞起过冷水，放进冰箱保鲜层三天已发更透，厚的鱼胶要泡2~3天，中间要换2~3次水，期间放在冰箱里泡发，因为它很厚，不容易泡软，泡软就可以进炖盅煮</div>\r\n\t<div>\r\n\t\t鱼胶千万不要用热水泡，那些用这种做法的是绝对错误的，会损失营养物质的。这个大家一定要记住。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">鱼胶要用什么锅炖</span></div>\r\n\t<div>\r\n\t\t一般炖鱼胶是建议用电炖锅来炖，因为鱼胶讲究慢火细炖，像高压锅这类的话就不太适合了。用电炖锅来炖比较方便，有隔水炖和直接炖两种方式。基本上功效是差不多的，关键看大家的喜爱来选择。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">鱼胶要怎么存放？放的久会变质么？</span></div>\r\n\t<div>\r\n\t\t一般正常情况密封放在干燥（避免阳光直接照射）的地方，用密封袋储存就可以的。如果是要放很久的话可以用纸包好，放在密封的袋子里面，挂着或者放在干燥的地方。定时拿出来晒一下就可以的。</div>\r\n\t<div>\r\n\t\t鱼胶正常情况下是不会变质的，而且放的越久效果是越好的，所以很多有条件的朋友都会先买一些好的鱼胶在家里面存放，因为现在好的鱼胶越来越少，价格越来越贵。放在家里面以备不时只需，或者留待以后给自己的女儿或者儿媳妇怀孕、坐月子的时候吃的，效果特好。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">什么时候吃鱼胶比较好？</span></div>\r\n\t<div>\r\n\t\t一般情况下，鱼胶在早上或者晚上吃效果都很不错的，要空腹吃，这样子吸收的效果比较好。如果是为了美容和改善睡眠的话，可以在晚上睡觉之前两个小时左右吃，这样子吸收的效果比较好。如果肠胃不好的朋友，可以在早上吃，吃之前可以先喝一点温开水。</div>\r\n\t<div>\r\n\t\t<span style=\"color:#4b0082;\">动完手术之后多久能吃鱼胶？</span></div>\r\n\t<span style=\"font-size: 12px;\">一般情况下动完手术在10-15天之后就可以吃鱼胶的，这个时候吃鱼胶对愈合伤口和补充营养和血气都有非常好的帮助。</span><strong><span style=\"font-size:20px;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/2/bfc3ab18-f5c8-414c-ae62-374bf8cf0afb.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/2/80d5a4c3-d5ca-4de0-9386-2226523eafba.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/2/7bd70743-b040-4871-859e-eb64e3b291e5.jpg\" /></span></strong></div>\r\n<br />\r\n",
				"createDate": "2016-12-02"
			},
			{
				"salesCount": "500",
				"marketPrice": "259.0",
				"salesPrice": "158.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1345",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/28/e58f2290-62c7-425d-922d-6af75782b139.jpg",
				"title": "思林卡胶原蛋白肽3g*30袋",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/2f0ea8a9-7538-4ff3-9ad5-28a98276f87d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/1156494a-083c-4522-9719-9bbec408b575.jpg\" /></div>\r\n",
				"createDate": "2016-11-28"
			},
			{
				"salesCount": "500",
				"marketPrice": "358.0",
				"salesPrice": "258.0",
				"sysTime": "2017-02-22 15:35:19",
				"id": "1261",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/26/b507df7c-e78c-4cf3-b46e-1217dcab403e.jpg",
				"title": "茯甘金颗粒 养肝护胃保健品",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">茯甘金是惠州市力康保健品有限公司专家根据祖传秘方研制出以食养肝的养生产品</span><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/26/267278ed-d8b2-4a6e-bb7f-0f00e41477b8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/26/3a6fab36-5d21-4f31-b05c-a194af4f2983.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/26/a4229dde-44bf-4410-813c-22b27d9c5604.jpg\" /><br />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">茯甘金颗粒之所以不同凡响，一方面是所选配料大部为北回归线附近生长之植物，更重要的是其科学的选料配比和独特的生产工艺。使产品更好地保持和发挥了良好的养肝护胃作用。</span><span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">茯甘金颗粒由20多种植物原料精制而成。根据药典等文献资料记载，茯甘金颗粒中所用植物有非凡的介绍，部分属性如下：</span><br />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">茯甘金 使用实践证明，茯甘金颗粒有如下特点：&nbsp;</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">&nbsp;&nbsp;1、舒肝理气、清热解毒、生津止渴、消食健胃、和胃止痛；健脾宁心、去痰止咳。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">2、本品闻有药香，入口甘甜，无任何不良气味。符合养生物质甘、淡、平的基本属性。男女老少皆宜，是养肝护胃佳品。</span><br />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">茯甘金适宜:</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">肝炎、肝胃气滞、胸胁胀痛、痈肿疮毒、脾虚食少、倦怠无力、心神不安、眼目昏花、食积不消、泄泻毒痢、胃脘痞满、口渴消渴、咳嗽痰多、血压血脂高、颈项强痛、慢性肝不适或饮酒过量等情况者服用。</span><br />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">食用茯甘金的效果体现主要有如下：</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">⑴、可看见的外在表现： 服用一段时间后，相当部分人可以从外表上发现的变化：</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">A、口唇与舌苔：口唇、舌苔黄白或青紫色的人，逐渐转为正常的润红色。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">C 眼神、气色：眼睛逐渐有神，有亮光。有黑眼圈的逐渐变淡或消失。暗斑（肝斑）逐渐变淡或消失。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">B、行为动作：行动比以前利索有劲；</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">⑵、可体会的内在感觉：服用一段时间后，相当部分身体有不舒服感觉的人会有比较明显的改善。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">A、&nbsp; &nbsp; &nbsp; &nbsp; 口腔与食欲：有口苦、口干者，服用后很快就能感受到口腔滋润，唾液增多（生津止渴）。食欲差、吸收功能不好的人，服用1--3个阶段后胃口改善，食欲增强。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">B、&nbsp; &nbsp; &nbsp; &nbsp; 肝区与内分泌：肝病患者或曾经患过肝炎的人食用1&mdash;10个阶段后胸胁隐痛或压迫感消失。有脂肪肝、酒精肝、醉酒或酒后难受症状的人服用1--5个阶段后症状很快改善解甚至消除。内分泌失调问题逐渐消失；</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">C、&nbsp; &nbsp; &nbsp; &nbsp; 情绪与睡眠：工作压力大、心情烦躁压抑，胸口郁闷的人食用1--5个阶段后心情逐步舒畅开朗。失眠多梦的人食用1--3个阶段后症状改善，容易入睡。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">D、&nbsp; &nbsp; &nbsp; &nbsp; 体力与身材：体力改善。身体不易疲劳。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">＊身体偏瘦，软弱无力者食用2--6个阶段后身体逐步健壮，不易疲劳；</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">＊肥胖者服用1--6个阶段后能通过调整机体平衡功能，排除多余脂肪，在保持正常饮食，不暴吃暴饮的情况下，将军肚将逐步变小。体形逐步正常。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">E、&nbsp; &nbsp; &nbsp; &nbsp; 胃肠道与肾水道：经常腹泻或者大便干结，小便黄赤者，服用1--3个阶段后胃肠道动力加强，大便成形，小便正常。有腰酸腿痛，腰膝无力的人食用1&mdash;3个阶段后后，肾功能改善，相当部分阳痿早泄的人恢复明显的晨勃现象。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">服用茯甘金典型案例</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">&nbsp; &nbsp;1、惠州的韩小姐说：茯甘金真的有明显的养生效果，原来晚上想睡睡不着，白天上班打瞌睡，现在想睡就睡，白天不累；以前3天大便一次，现在每天早上都要大便一次。好舒服！我先生也跟着喝茯甘金，那方面表现也很不一般了，养肝连肾也养到了。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">2、四川的刘经理（女）说：几年来我都处在亚健康状态，看见肉就反胃，吃得不多，但人又显得虚胖，经常便秘，肚子经常硬硬的不舒服，吃了不少通便的、减肥的产品。还是不能得到改善，我都失去了信心。而且心情烦躁，休息不好，多梦。后来一个偶然的机会朋友介绍我服用养生食品茯甘金，刚开始我直接将颗粒放进嘴里，感觉跟板蓝根颗粒差不多，甜甜的，心里说这啥就是蒙人的东西。后来回到家按说明书介绍冲水300ml慢慢喝。嘴里逐步有津液渗出，很滋润，后来肚子有点动静，约半个小时上厕所排便一次，有舒服的感觉，我继续看电视约2个多小时，又上厕所排便一次，一下子肚子彻底软下来，哇，那种久违了的轻松让我立马对茯甘金刮目相看。此后我继续服用25小袋，胃口大为改善，看到肉也想吃，两天吃了2个烤鸭。身体从原来的150多斤轻了6斤。而且休息好、心情好，腰腿也不痛了，没想到茯甘金的养生效果这么好。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">3、山东济宁的李先生说：服用茯甘金一是我感觉整个人体力好，不容易累，二是我原来眼底有一个黄斑，服用茯甘金不到30袋检查发现眼底斑点消失了。可见肝脏的排毒功能已经得到改善和增强。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">4、东北辽宁的张先生说：我第一次认识茯甘金是在大连，有两个体会。一是以往喝酒后都是很难受，口干（俗称发酒渴），胃胀胀的很不舒服，那次我们喝酒回到宾馆冲了一包茯甘金。喝下去约15分钟，胃就很舒服，口也不干了，后来喝酒后喝茯甘金，效果都很好。所以对喝酒的人保护肝脏很有作用；二是以往眼睛有点昏花，有时戴眼镜看报纸都不太清楚。容易累。喝了茯甘金以后看字清晰，看电视报纸也不容易累。所以我感觉肝脏好了，酒量增加，应酬轻松，视力也改善了；</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">5、深圳的 王先生说，以前不能喝酒，喝一点啤酒都会睡觉，并且疲劳，服用茯甘金颗粒后白酒也能喝个半斤了，而且不困，还很有精神，跟以前大不一样了。可能真的是肝脏功能增强了。感觉真好！这东西真不错。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">6、江西的李先生说：茯肝金喝了几天，首先是口不干，生津止渴了，再一个是不容易累了；</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">7、惠州管道燃气的邓先生说：喝茯盰金2个多月把我十多年的慢性肠炎养好了，以食养生确实是保养身体的好办法！</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">8、河源的颜先生说，2006年冬，多亏了茯甘金这么一个好产品，把我从一个肝硬化腹水发了病危通知的危险状况在不到半年年的时间里调理成可以正常上班、脸色红润的正常状态，连县医院都认为是奇迹。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">9、浙江的王先生说，我妈2007年秋七十多岁在杭州知名医院因胆结石合并感染住院发烧一个多月退不下来，医院基本认为没有希望了，家中也有无计可施，经服用以茯甘金为主方的中药后第一剂就退烧，然后继续服用八天痊愈出院至今</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">等等。类似的例子还很多，不一一赘述，。。。。。</span><br style=\"word-wrap: break-word; color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft Yahei'; font-size: 14px; line-height: 25.2px;\">喝对了产品就等于拥有了健康的身体！让我们一起以中医中药进行养生保健！共同迈步健康、长寿、快乐的人生历程！</span></div>\r\n",
				"createDate": "2016-10-26"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 5,
		"totalRecord": 43,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mproduct!homepage.action?pageNum=1",
	"msg": "",
	"param": {
		"advertList": [
			{
				"id": "25",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/9744cadc-c7e5-4f46-bae3-b979aedf2c6d.jpg",
				"title": "隆重招商",
				"url": "http://m.zhundao.net/event/6406?from=groupmessage&isappinstalled=0",
				"createDate": "2016-06-02"
			},
			{
				"id": "23",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/22/a0785a5b-a427-4aff-95a3-08ac4f70b50e.jpg",
				"title": "方太系列",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E6%96%B9%E5%A4%AA",
				"createDate": "2016-06-02"
			},
			{
				"id": "24",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/927dfed1-556a-44b1-8b0c-138bf4e430d7.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/house_details.action?id=911",
				"createDate": "2016-06-02"
			},
			{
				"id": "27",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/10/ebb93b84-d835-42d4-925c-5c34a255de56.jpg",
				"title": "苹果发艺·发艺城发型设计连锁",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E5%8F%91%E8%89%BA%E5%9F%8E&lat=23.083564&log=114.408304",
				"createDate": "2016-06-27"
			},
			{
				"id": "33",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/25/e8608ad9-ae57-4d5b-93c8-68947b43ceb6.jpg",
				"title": "娅忒蜜思",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E5%A8%85%E5%BF%92&lat=23.083536&log=114.408209",
				"createDate": "2016-10-19"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "79.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "1571",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/7/a77ecc0f-b7f1-4dc9-bb24-059805dfad6b.jpg",
				"title": "特卖：铁涌野生生蚝 新鲜水产海蛎子 野生大生蚝 牡蛎10斤起",
				"createDate": "2017-02-10"
			},
			{
				"salesCount": "498",
				"marketPrice": "2599.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "1175",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/26/5a5d094a-4fdc-42f3-bd8d-e40d84ad1b24.jpg",
				"title": "抢购价：容声冰箱 BCD-296WRD1DY 风冷无霜超大两双门家用节能",
				"createDate": "2017-02-08"
			},
			{
				"salesCount": "500",
				"marketPrice": "899.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "1572",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/8/fb16c51e-f895-4c61-a0c1-88f836c7c436.jpg",
				"title": "特卖：美的洗衣机 MB55-V3006G 5.5公斤波轮 家用全自动迷你洗衣机",
				"createDate": "2017-02-08"
			},
			{
				"salesCount": "200",
				"marketPrice": "598.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "847",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/17/ab695b00-1f12-48dc-aaa8-a381a757b93b.jpg",
				"title": "特价：新功电热水壶 F92全自动上水玻璃茶艺炉",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "500",
				"marketPrice": "599.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "1325",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/20/72572a1b-cdee-4455-9b27-e98262e47df6.jpg",
				"title": "特卖：美的电饭煲FS4027电饭煲锅4L预约定时家用",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "499",
				"marketPrice": "268.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "1466",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/24/28afd11d-34ea-40a3-8313-5e73cf226aee.jpg",
				"title": "特卖：美的电磁炉 RT2160家用超薄触摸电磁炉",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "198",
				"marketPrice": "4980.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "893",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/14/a23b3f87-fd95-48a4-ae9d-1448b3e97fa9.jpg",
				"title": "团购：方太油烟机CXW-200-EM02T欧式顶吸抽油烟机E型",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "499",
				"marketPrice": "2699.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "1250",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/22/242c4df1-b722-43d6-8f62-af3253fd3d34.jpg",
				"title": "特卖：Canbo/康宝消毒柜ZTP108E-3消毒柜嵌入式低温高温双消毒",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "498",
				"marketPrice": "999.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "1176",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/17/308645e5-8b04-4e58-8bd2-656e51901934.jpg",
				"title": "抢购价：新功鸡翅木茶盘 茶炉套装 F64(F24配F98)实木电热壶组合茶盘 全自动抽水四合一",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "1107",
				"marketPrice": "99.0",
				"salesPrice": "",
				"shortDesc": "",
				"id": "174",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/17/03520c25-a816-435b-8a93-017e7d581479.jpg",
				"title": "特卖：新功电热水壶1L进口304不锈钢S5自动断电防干烧",
				"createDate": "2017-02-06"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 7,
		"totalRecord": 61,
		"updateTime": ""
	},
	"status": 1
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "9",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/7/e7387dad-3e4b-479a-9a2c-6578b725ba7b.jpg",
				"title": "竹天下家具",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E7%AB%B9%E5%A4%A9%E4%B8%8B",
				"createDate": "2015-12-30"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "159.0",
				"salesPrice": "79.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1403",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/12/450807db-c8ab-4a9a-918c-db2e1872b1ae.jpg",
				"title": "三禾奶锅NGS1600-3 304不锈钢加厚复底小锅 小汤锅",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/12/a1bebaa8-239f-45a6-bd65-db960874f1dc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/12/ec2d5a0f-e7d4-4961-966c-afed08154137.jpg\" /></div>\r\n",
				"createDate": "2016-12-12"
			},
			{
				"salesCount": "500",
				"marketPrice": "299.0",
				"salesPrice": "109.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1398",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/12/2c1f6db2-ea7d-49b8-95be-b816fc89a506.jpg",
				"title": "三禾汤锅20cm 22cm 24cm 不锈钢304汤锅 电磁炉通用汤锅TGS2000-3 TGS2200-3 TGS2400-3",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/e98c966b-9c15-4905-8f3d-cff571a20793.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/12/2700b931-d16b-49a9-98eb-a8161b5b518d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/12/f73da002-d870-42a1-953d-1724818ce1a7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/12/7f56e88d-cea6-4277-93e2-346a9472aa13.jpg\" /></div>\r\n",
				"createDate": "2016-12-12"
			},
			{
				"salesCount": "500",
				"marketPrice": "299.0",
				"salesPrice": "119.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1397",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/465ea6e6-848c-42f0-91aa-525c60be5389.jpg",
				"title": "三禾奶锅NLF1800-3不粘平底小奶锅全覆底汤锅18CM立盖",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/eb2c5aa3-1ef2-4a07-84f1-c3f6c51671f8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/2eb6b1fb-e587-456b-b006-37bed4607601.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "339.0",
				"salesPrice": "179.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1396",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/55cda767-920f-4b3c-88e6-f278e7adb55e.jpg",
				"title": "三禾汤锅 24CM汤锅平底不粘锅 电磁炉通用烹饪厨具可立盖TLF2400-3 TLF2000-3",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/5574f0ce-ac61-44ad-9e2f-aaad8bd0f50b.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "599.0",
				"salesPrice": "339.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1395",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/0afc6a06-e958-468a-984d-22b6dc36d9f8.jpg",
				"title": "三禾汤锅TGS2402-1三层复底、磁通、304不锈钢内锅24cm炖锅双耳加厚",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/ff0a1e31-e312-4330-86b4-5cf39d99ff6b.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "299.0",
				"salesPrice": "119.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1394",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/713a07b8-377d-4cb8-9c95-6bf488ba177c.jpg",
				"title": "三禾炒锅华彩CLF3008-3不粘无油烟平底炒锅30cm加厚底带盖",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/b60b32a9-6c83-4b94-bdd3-3bee392975c3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/26a7397a-5072-40d7-ba07-84fa75fd7dc3.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "199.0",
				"salesPrice": "129.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1393",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/7b459753-69ea-41a6-a600-00359be252a3.jpg",
				"title": "三禾炒锅华彩CLF3208-3健康不粘无油烟平底煎炒锅32cm",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/5a972b64-dafa-4449-8817-6b5e5d0f50eb.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/8876499e-2b30-47b9-bec1-0996a926157c.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "399.0",
				"salesPrice": "169.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1392",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/4e9a5206-1f88-4aac-9e8a-e83ed6c02975.jpg",
				"title": "三禾炒锅 华彩CLF3408-3不粘无油烟平底炒锅34cm有盖",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/14f21bfa-8c21-4c23-9e16-5e807aa5b46a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/1801ea9d-515d-496d-a6ac-7b01264ce9e5.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "659.0",
				"salesPrice": "369.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1391",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/01afd367-be82-4d93-a283-88ac23e4b400.jpg",
				"title": "三禾炒锅CLF3215-2不粘锅30/32cm无油烟平底锅炒菜锅",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/85aec824-a908-465b-b037-ae5c31b7ee36.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/9be197be-3fd2-4709-9362-b2998afc703b.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			},
			{
				"salesCount": "500",
				"marketPrice": "699.0",
				"salesPrice": "399.0",
				"sysTime": "2017-02-22 15:29:32",
				"id": "1390",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/10/38903632-2167-464b-9b81-86778b542705.jpg",
				"title": "三禾炒锅304不锈钢CGS3202-3无涂层无油烟32cm平底锅",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/4df9d8a8-0a16-444a-837d-cae978bee42c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/10/7dd425d9-f6a4-4ce6-bd88-cb626f64ea78.jpg\" /></div>\r\n",
				"createDate": "2016-12-10"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 12,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "9",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/7/e7387dad-3e4b-479a-9a2c-6578b725ba7b.jpg",
				"title": "竹天下家具",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E7%AB%B9%E5%A4%A9%E4%B8%8B",
				"createDate": "2015-12-30"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "7299.0",
				"salesPrice": "2199.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1362",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/5/75c5914f-fbb1-466d-93b9-1ac9e5f22887.jpg",
				"title": "竹天下 全竹双人床 W001AL宽1.9米跟W001A宽1.6米2种规格",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:18px;\"><strong>1.6米商品型号:W001A</strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:18px;\"><strong>产品规格:2150*1615*1030mm</strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t&nbsp;</div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:18px;\"><strong>1.9米商品型号:W001AL</strong></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:18px;\"><strong>产品规格:2150*1915*1030mm</strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/7c5fa695-ad35-42c6-9d17-9d3d663b066d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/f68b821d-8ecb-4eaf-9cd4-b9846f765173.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/e8d0abb6-9cd4-488d-a971-48cb4b41330f.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "5580.0",
				"salesPrice": "1689.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1367",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/e42cc1fc-6186-4ec8-9634-9b1350f8102b.jpg",
				"title": "竹天下 拉伸圆桌 1380*750 饭桌 餐桌C007 ",
				"content": "<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<strong><span style=\"font-size:18px;\">商品名：C007拉伸圆桌</span></strong></p>\r\n<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:18px;\"><span style=\"color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; line-height: 21px;\">产品规格：1380mm*750mm</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/f460c364-9adc-4dc0-9bfa-ba03e45400df.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "2200.0",
				"salesPrice": "668.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1368",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/f2f2c2ac-6727-4bed-b8e7-60dcf5ed33e1.jpg",
				"title": "竹天下 餐桌 玻璃餐桌 7年老竹C005  长1.4m*宽0.82m*高0.75m",
				"content": "<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<strong><span style=\"font-size:20px;\">七年老竹<br />\r\n\t商品型号:C005<br />\r\n\t产品规格:1400*820*750mm</span></strong></p>\r\n<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size:20px;\"><span style=\"color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; line-height: 21px;\">产品体积：0.54方</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/764b88b2-afa9-4f50-be5d-1bac11212fa2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/de4033fd-c3fb-477b-a3d8-482f73dc16ae.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "4020.0",
				"salesPrice": "1289.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1369",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/9f4771b0-84e2-4b57-bd6c-fd0c6f8100b3.jpg",
				"title": "竹天下 电视柜 2000*450*407mm 现代简约电视柜储物柜",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/3faa0d1f-bacf-4340-82bf-4f6812cee041.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/468e3604-9e19-4a33-9875-8e710893f082.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "18999.0",
				"salesPrice": "5699.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1370",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/9aa6e7ca-8b14-475e-ab46-6a48ad276c31.jpg",
				"title": "竹天下 竹沙发 竹+黑色真皮 3套 单人+双人+三人位真皮沙发",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color: rgb(255, 0, 0); font-family: simhei; font-size: 18pt; line-height: 21px;\">1.商品型号:K004A</span></div>\r\n<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"font-family: simhei; color: rgb(255, 0, 0); font-size: 18pt;\">商品名:单人位沙发 产品规格:820*909*720mm &nbsp;</span></p>\r\n<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"color:#ff0000;\">+</span></p>\r\n<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"font-family: simhei; color: rgb(255, 0, 0); font-size: 18pt;\">2.商品型号:K004B</span><br />\r\n\t<span style=\"font-family: simhei; color: rgb(255, 0, 0); font-size: 18pt;\">商品名:双人位沙发 产品规格:1520*909*720mm &nbsp;</span></p>\r\n<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"color:#ff0000;\">&nbsp;+</span></p>\r\n<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"font-family: simhei; color: rgb(255, 0, 0); font-size: 18pt;\">3.商品型号:K004C</span><br />\r\n\t<span style=\"font-family: simhei; color: rgb(255, 0, 0); font-size: 18pt;\">商品名:三人位沙发 产品规格:2220*909*720mm<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/d94cc795-e988-4c6d-a716-75978c967916.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/15234a61-427e-4ed3-87fd-15e7c1ea9d71.jpg\" /></span></p>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "2788.0",
				"salesPrice": "839.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1371",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/047ce187-02ad-4ce4-a82c-6e17be7f3735.jpg",
				"title": "竹天下 全竹茶几 7年老竹 1300*680*450mm",
				"content": "<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"font-size:18px;\">商品型号:K202<br />\r\n\t产品规格:1300*680*450mm</span></p>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:18px;\"><span style=\"color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; line-height: 21px;\">产品体积：0.24方</span></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/53136aa6-5265-4381-80d8-cf4c7e145dbe.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/3571ab44-931f-4349-bc4e-fff640224818.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "16720.0",
				"salesPrice": "5016.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1372",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/dfabdd56-041f-45af-b30a-aff6ea0d2f69.jpg",
				"title": "竹天下 转角沙发 多功能沙发床2920*1800*800mm",
				"content": "<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"font-size:18px;\">商品型号：K008</span></p>\r\n<p style=\"padding: 0px; margin: 0px; color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; font-size: 14px; line-height: 21px; text-align: center;\">\r\n\t<span style=\"font-size:18px;\">商品名：转角沙发</span></p>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:18px;\"><span style=\"color: rgb(140, 140, 140); font-family: arial, 'Microsoft Yahei', 'Hiragino Sans GB', sans-serif; line-height: 21px;\">产品规格：2920*1800*800mm</span></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/331b7738-c301-4d6a-8863-709d30a91196.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			},
			{
				"salesCount": "500",
				"marketPrice": "8199.0",
				"salesPrice": "2459.0",
				"sysTime": "2017-02-22 15:30:59",
				"id": "1361",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/5/ac548e24-ac17-4052-b104-a0613ebabb84.jpg",
				"title": "竹天下 全竹双人床 宽1.9米跟1.6米2种规格",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/4a1bba86-8f82-4393-b0f5-1616dec23e7e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/89b84be3-ffa0-4044-b2d5-d61c1c1c4b74.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/5/fe4a3777-933f-491b-a189-42449b04a29e.jpg\" /></div>\r\n",
				"createDate": "2016-12-22"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 1,
		"totalRecord": 8,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "9",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/7/e7387dad-3e4b-479a-9a2c-6578b725ba7b.jpg",
				"title": "竹天下家具",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E7%AB%B9%E5%A4%A9%E4%B8%8B",
				"createDate": "2015-12-30"
			}
		],
		"leftNav": [
			{
				"id": "239",
				"title": "厨具"
			},
			{
				"id": "240",
				"title": "家具"
			},
			{
				"id": "241",
				"title": "灯具"
			},
			{
				"id": "242",
				"title": "五金"
			},
			{
				"id": "243",
				"title": "饰品"
			}
		]
	}
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.35246&lat=23.180516&categoryId=188",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市仲恺区风华丽都北门107号铺",
				"distance": "100.7",
				"phone": "15220673797",
				"log": "114.31030998624334",
				"toPhone": "",
				"companyName": "裕濠地产（仲恺）",
				"shortDesc": "【生活一家会员专享：中介费9.8折优惠】",
				"id": "453",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/28/5a289003-f5c8-4815-bab3-6e58838580b5.jpg",
				"title": "裕濠地产（仲恺）",
				"lat": "22.998680004489376",
				"createDate": "2016-07-28"
			},
			{
				"address": "惠州市紫西岭3巷18号102商铺（龙船街）",
				"distance": "108.9",
				"phone": "15766878134",
				"log": "114.40562214263987",
				"toPhone": "",
				"companyName": " 鑫海川地产（旗舰店）",
				"shortDesc": "【生活一家会员专享：1.租房8.8折优惠，新房免佣金；2.会员优选房屋，买房成交送人头马XO-1.4斤】",
				"id": "1048",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/10/ee2a6d98-0bef-40a5-bd1b-aa31708451f6.jpg",
				"title": " 鑫海川地产（旗舰店）",
				"lat": "23.08483740530092",
				"createDate": "2017-01-10"
			},
			{
				"address": "江北东江二路二号富力国际中心16F",
				"distance": "109.3",
				"phone": "0752-5318999",
				"log": "114.41038908574053",
				"toPhone": "",
				"companyName": "惠州方直集团有限公司",
				"shortDesc": "方直集团初创于1998年，前身为广东方直投资有限公司，2010年正式更名为“广东方直集团有限公司”。一直以来，方直坚持以精益求精与不断创新的卓越品质，为珠三角区域乃至全国的城市居民，实现生活理想，致力于成为中国最受尊崇的高品位生活价值领航者。",
				"id": "47",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/9/1b9f3269-b7e9-480a-8a0f-cd1e6580e5fe.jpg",
				"title": "惠州方直集团有限公司",
				"lat": "23.10118038120604",
				"createDate": "2016-05-18"
			},
			{
				"address": " 惠州市惠城区麦地东一路20-12",
				"distance": "109.6",
				"phone": "13431890147",
				"log": "114.41027967584512",
				"toPhone": "",
				"companyName": "家家顺房产（麦地）",
				"shortDesc": "【生活一家会员专享：成交送礼品】\r\n\r\n家家顺集团成立于2008年5月，总部位于深圳，是全国规模最大的房地产经纪企业之一。曾获“中国最具生命力百强企业”、“全国最秀房地产经纪机构”、“中国十大名牌中介机构”等多项殊荣。 家家顺集团成立两年多以来，以房地产流通为核心，打通房地产开发、按揭、担保、酒店、物业管理、固定资产投资与理财等房地产产业纵深服务链。通过锐意拼搏和不断进取，业务范围稳步拓展，遍及深圳、广州、中山、江门、东莞、惠州、长沙等几十个城市。",
				"id": "651",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/22/db3280ec-ad2d-4647-bff6-383dbc02cecc.png",
				"title": "家家顺房产（麦地）",
				"lat": "23.064670637782957",
				"createDate": "2016-08-22"
			},
			{
				"address": "麦地路60号隆生商业广场隆生",
				"distance": "109.8",
				"phone": "0752-2288998",
				"log": "114.4131799030833",
				"toPhone": "",
				"companyName": "惠州隆生企业集团有限公司",
				"shortDesc": "广东隆生企业投资有限公司（以下简称“隆生企业”）成立于1988年，是惠州市一家以实业投资为基础、房地产开发和市政建设为主导、多元化经营的民营综合性企业。有自己的隆生物业管理。 ",
				"id": "46",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/9/e71f7e79-2b4d-49c5-90d2-3a3ea859b073.jpg",
				"title": "惠州隆生企业集团有限公司",
				"lat": "23.074510252437687",
				"createDate": "2016-05-18"
			},
			{
				"address": "惠州市惠城区虾岗一路2号,江南新村小区斜对面吴隆地产",
				"distance": "110.5",
				"phone": "15018680376 ",
				"log": "114.42024029044475",
				"toPhone": "",
				"companyName": "昊隆地产（河南岸）",
				"shortDesc": "【生活一家会员专享：联系商家真诚服务，成交送礼品】昊隆地房产有限公司是一家集房地产房屋买卖、租赁、权证办理、按揭贷款、商铺租售、写字楼租售、融资担保等于一体的房产中介",
				"id": "398",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/26/4f9e3288-19f5-4f1c-b3a8-c0bd6e6509d5.png",
				"title": "昊隆地产（河南岸）",
				"lat": "23.079309684274804",
				"createDate": "2016-08-11"
			},
			{
				"address": "惠城区河南岸一德商场A栋1105铺",
				"distance": "110.5",
				"phone": "13059553700",
				"log": "114.41996975639347",
				"toPhone": "",
				"companyName": "方信地产（河南岸）",
				"shortDesc": "【生活一家会员专享：成交送礼品】",
				"id": "662",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/24/c7f759cf-69a2-48a2-a7b5-46a0a82efd6c.png",
				"title": "方信地产（河南岸）",
				"lat": "23.075020422860497",
				"createDate": "2016-08-24"
			},
			{
				"address": "惠州市江北新湖一路63号伟豪都市印记名苑128号铺",
				"distance": "110.5",
				"phone": "18318369084",
				"log": "114.42399475000538",
				"toPhone": "",
				"companyName": "天泽地产（江北）",
				"shortDesc": "【生活一家会员专享：购置二手房佣金0.98折优惠，购置一手房免佣金】\r\n主营：一手、二手房源",
				"id": "588",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/5/4f460f01-3201-43da-acf5-0e070337aa68.jpg",
				"title": "天泽地产（江北）",
				"lat": "23.11954894332857",
				"createDate": "2016-08-05"
			},
			{
				"address": "惠州市惠城区渡船头一路14,锦诚地产",
				"distance": "110.7",
				"phone": "15217579017",
				"log": "114.42208063412504",
				"toPhone": "",
				"companyName": "锦诚地产（河南岸）",
				"shortDesc": "【生活一家会员专享：成交送旅游】",
				"id": "461",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/29/a0103167-abe5-4902-820e-a4abe648a4cb.png",
				"title": "锦诚地产（河南岸）",
				"lat": "23.07910751439977",
				"createDate": "2016-08-11"
			},
			{
				"address": "广东省惠州市惠城区银岭路三横街13号",
				"distance": "110.9",
				"phone": "13824239804 ",
				"log": "114.42288002443401",
				"toPhone": "",
				"companyName": "旭辉房地产（河南岸）",
				"shortDesc": "【生活一家会员专享： 优惠免费看房子,中介费打8折】",
				"id": "946",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/3/16a0ad77-f88a-43f6-8996-e87cfd0216b6.jpg",
				"title": "旭辉房地产（河南岸）",
				"lat": "23.069900180265325",
				"createDate": "2016-11-03"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 4,
		"totalRecord": 38,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=189",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "博罗县罗阳镇佳兆业东江新城3期高层9号商铺洪辉装饰",
				"distance": "95.8",
				"phone": "07526928333",
				"log": "114.28145243040909",
				"toPhone": "13126305265",
				"companyName": "洪辉装饰（罗阳）",
				"shortDesc": "【生活一家会员专享： 下订2000抵3000，5000千抵7000送海康科技监控一个（我们是智能装饰，全房可以用手机控制电源）】",
				"id": "243",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/1ecd2b9c-6fe6-46cf-a94a-8eeb42378394.jpg",
				"title": "洪辉装饰（罗阳）",
				"lat": "23.150293890546788",
				"createDate": "2016-07-11"
			},
			{
				"address": "惠州市博罗县商业东街矮岗路68-70号",
				"distance": "97.0",
				"phone": "07526268389",
				"log": "114.29408998507168",
				"toPhone": "13824225758",
				"companyName": "春满人间装饰（罗阳）",
				"shortDesc": "【生活一家会员专享：装修9.5折优惠】\r\n春满人间装饰有限公司：一心一意缔造和谐人居空间，我们一直高举着：“团结拼搏开拓创新务实奉献”的大旗，向着自己宏伟远大的目标前进着，我们尊重每一位员工的个性与特长，\r\n每一个智慧的足迹，在这里都放射着耀眼的光华，这里是创新者的殿堂，这里是装饰文化不断革命的前沿阵地。我们坚信：企业文化能刷新企业的体制和机制，能创造惊人的辉煌。",
				"id": "242",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/1b87259a-a6e3-413c-9084-facbadb38238.jpg",
				"title": "春满人间装饰（罗阳）",
				"lat": "23.166000824300433",
				"createDate": "2016-07-11"
			},
			{
				"address": "惠州市博罗县商业东街菲林格尔地板",
				"distance": "97.2",
				"phone": "15018635130",
				"log": "114.29587984358866",
				"toPhone": "",
				"companyName": "菲林格尔地板（罗阳）",
				"shortDesc": "【生活一家专享优惠9.5折】，德国进口耐磨纸在耐污染、耐灼烧、耐划痕、耐磨性等指标上都有较强的优势。而菲林格尔是一家全部产品耐磨层采用德国进口耐磨纸的公司。对耐磨性能起决定性影响的三氧化二铝分子精密均分布于表面纤维层中间，使地板耐磨性能更显优越。",
				"id": "235",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/9/a46859ef-79fe-4735-9aa9-9d56a8a805d2.jpg",
				"title": "菲林格尔地板（罗阳）",
				"lat": "23.168580566807897",
				"createDate": "2016-08-11"
			},
			{
				"address": "惠州市博罗县罗阳镇博罗县商业东街203号维美布艺",
				"distance": "97.5",
				"phone": "07526263326",
				"log": "114.29878985489073",
				"toPhone": "",
				"companyName": "维美布艺（罗阳）",
				"shortDesc": "【生活一家会员专享：6.8折优惠】",
				"id": "305",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/9d53e24c-d497-4033-ac24-776f6de37526.jpg",
				"title": "维美布艺（罗阳）",
				"lat": "23.171430116579028",
				"createDate": "2016-07-18"
			},
			{
				"address": "博罗县罗阳镇商业东街华桂园一楼兰舍硅藻泥",
				"distance": "97.8",
				"phone": "07526388080",
				"log": "114.3019102555609",
				"toPhone": "",
				"companyName": "兰舍硅藻泥（罗阳）",
				"shortDesc": "【生活一家会员专享：8.5折优惠】兰舍硅藻新材料有限公司成立于2009年，总部位于风景如画的卡伦湖畔，占地70000平方米，是集研发、培训、办公、生产为一体的现代化花园工厂。公司在长白山拥有自己的硅藻土矿山以及遍布全国的销售网络。兰舍是中国建筑材料联合会生态环境建材分会副理事长单位。",
				"id": "189",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/5/9a43549e-62eb-4294-a179-441a395ae49e.jpg",
				"title": "兰舍硅藻泥（罗阳）",
				"lat": "23.17243969155925",
				"createDate": "2016-07-06"
			},
			{
				"address": "惠州博罗县罗阳镇商业东街 华桂园大门旁易天装饰",
				"distance": "97.9",
				"phone": "07526221222",
				"log": "114.30226982219156",
				"toPhone": "",
				"companyName": "易天装饰（罗阳）",
				"shortDesc": "【生活一家会员专享：装修9折，户外广告也有做电梯广告9折】 主要经营“装修 瓷砖 地板”等产品。公司尊崇“踏实、拼搏、责任的企业精神，并以诚信、共赢、开创经营理念，创造良好的企业环境，以全新的管理模式，完善的技术，周到的服务，卓越的品质为生存根本，我们始终坚持用户至上 用心服务于客户，坚持用自己的服务去打动客户。",
				"id": "183",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/e0ca4f18-2f3f-4503-80eb-4d4bcadee639.jpg",
				"title": "易天装饰（罗阳）",
				"lat": "23.173149841854258",
				"createDate": "2016-07-05"
			},
			{
				"address": "惠州市博罗县罗阳镇华桂园华康楼1-2门店罗蔓艺术墙布",
				"distance": "97.9",
				"phone": "07526212928",
				"log": "114.30233993479513",
				"toPhone": "13316397168",
				"companyName": "罗蔓艺术墙布（罗阳）",
				"shortDesc": "【生活一家会员专享：6折优惠】罗蔓艺术墙布：专业承接墙布墙纸等软装工程，大品牌！效果好！品质好！",
				"id": "244",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/b5bd9e65-e386-43c1-a8fc-e49a6163474c.jpg",
				"title": "罗蔓艺术墙布（罗阳）",
				"lat": "23.17304970179923",
				"createDate": "2016-07-11"
			},
			{
				"address": "博罗县商业东街公园路华桂园华兴楼6-11号门店",
				"distance": "97.9",
				"phone": "07526323899",
				"log": "114.30233993479513",
				"toPhone": "",
				"companyName": "如一·家品家具定制（博罗）",
				"shortDesc": "【生活一家会员专享：消费享商家优惠】\r\n如一，您的专属设计！\r\n主营.：厨电、净水器、热水器、软硬装设计；石材背景、吊顶、橱柜、衣柜、酒柜定制。\r\n",
				"id": "747",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/14/18b647e4-8f05-4107-8179-251886e1bc56.jpg",
				"title": "如一·家品家具定制（博罗）",
				"lat": "23.17304970179923",
				"createDate": "2016-09-19"
			},
			{
				"address": "惠州市博罗县商业东街金源建材",
				"distance": "98.3",
				"phone": "07526322233",
				"log": "114.30678034758996",
				"toPhone": "13669568010",
				"companyName": "金源建材-威尔斯陶瓷（罗阳）",
				"shortDesc": "【生活一家会员专享：6.5折优惠】\r\n主营：卫浴、陶瓷、灯饰等建材",
				"id": "640",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/15/04ffb9fc-68e9-4663-a213-0c70e76396d2.jpg",
				"title": "金源建材-威尔斯陶瓷（罗阳）",
				"lat": "23.17360950114746",
				"createDate": "2016-08-15"
			},
			{
				"address": "惠州市仲恺高新区和畅五路金宝城市佳园1号商住楼1单元13层01号房，妙夫人生物科技有限公司",
				"distance": "104.7",
				"phone": " 13516668771",
				"log": "114.35569289145123",
				"toPhone": "",
				"companyName": "妙夫人生物科技有限公司（仲恺）",
				"shortDesc": "【生活一家会员专享：8.8折优惠】\r\n妙夫人：空气污染治理专家（治理范围：居家、车辆、办公室、厂房、学校等）",
				"id": "1003",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/8/cf4d2c02-e4b5-40eb-bc3b-24c9a467be24.jpg",
				"title": "妙夫人生物科技有限公司（仲恺）",
				"lat": "23.02203010522694",
				"createDate": "2016-12-10"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 7,
		"totalRecord": 61,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=258",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠城区仲恺区潼湖镇潼湖大道西",
				"distance": "87.7",
				"phone": "13433416828",
				"log": "114.19682027628168",
				"toPhone": "",
				"companyName": "晓鹏汽车修配（潼湖大道）",
				"shortDesc": "【生活一家会员专享：8.5折优惠】业务范围：维修、保养、洗车、代理车辆保险、年检、过户等",
				"id": "275",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/14/5164a1e5-75cc-48b3-a904-bcf939bf42bd.jpg",
				"title": "晓鹏汽车修配（潼湖大道）",
				"lat": "23.082299072557873",
				"createDate": "2016-07-14"
			},
			{
				"address": "惠州市博罗县罗阳镇联运大厦旁",
				"distance": "94.1",
				"phone": "07526226636",
				"log": "114.26531738368364",
				"toPhone": "13610400267",
				"companyName": "陆风汽车（罗阳店）",
				"shortDesc": "【生活一家会员专享：优惠到店咨询，会员购车成功额外赠送500/1000油卡加电器】陆风SUV系列已经出口中东、北非、中非、南美等海外市场，并且成为国内首个出口欧洲市场的自主汽车品牌，实现了中国汽车出口准入门槛级别最高的突破。未来，江铃控股将继续聚焦SUV，以优良品质为导向，以优质服务为保障，全力打造SUV领域中高端自主品牌的专业化汽车公司。",
				"id": "554",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/4/feaa647f-ed8c-4ace-a169-e5afc032dd29.jpg",
				"title": "陆风汽车（罗阳店）",
				"lat": "23.168499919496615",
				"createDate": "2016-08-04"
			},
			{
				"address": "惠州市博罗县罗阳镇文广路23号聚点专业汽车",
				"distance": "95.5",
				"phone": "07526578869",
				"log": "114.2796999137431",
				"toPhone": "",
				"companyName": "聚点专业汽车用品（罗阳）",
				"shortDesc": "【生活一家会员专享：9.5折优惠】汽车精品、配件、内饰、外饰、装饰、汽车美容保养品等等产品专业生产加工。",
				"id": "265",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/13/907d34e5-87c7-4b17-a1e1-ab08d51d69fc.jpg",
				"title": "聚点专业汽车用品（罗阳）",
				"lat": "23.16627111322201",
				"createDate": "2016-07-13"
			},
			{
				"address": "惠州市博罗县博罗大道505号（交警大队对面）",
				"distance": "96.3",
				"phone": "134-2291-9975",
				"log": "114.28715826347192",
				"toPhone": "",
				"companyName": "粮道车馆（博罗店）",
				"shortDesc": "【生活一家会员专享：到店消费立减500到4000元不等】\r\n丰田、本田、宝马、雪佛兰、大众、起亚、广汽传祺、福特等品牌汽车",
				"id": "641",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/18/e8969555-df00-47b1-9121-ef266fe61128.jpg",
				"title": "粮道车馆（博罗店）",
				"lat": "23.174368312819073",
				"createDate": "2016-08-18"
			},
			{
				"address": "广东省惠州市博罗县博惠路，车仆汽车服务会所",
				"distance": "97.9",
				"phone": "15816369800",
				"log": "114.30238788653934",
				"toPhone": "",
				"companyName": "车仆汽车服务会所（博罗）",
				"shortDesc": "【生活一家会员专享：全场消费享8折】",
				"id": "721",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/6/7c75f08d-7ce3-4d57-a69b-a056ceb4ce91.jpg",
				"title": "车仆汽车服务会所（博罗）",
				"lat": "23.17441037313087",
				"createDate": "2016-09-06"
			},
			{
				"address": "广东省惠州市惠城区G205(仲恺大道)",
				"distance": "106.2",
				"phone": "15816495295",
				"log": "114.37215984411874",
				"toPhone": "",
				"companyName": "辉达精选二手车（仲恺）",
				"shortDesc": "【生活一家会员专享：低利息汽车贷款，买车送油卡保养】\r\n\r\n 辉达精选二手车成立于2008年2月，是惠州首家可按揭的二手车行，隶属于辉达汽车集团，业务包括收购、销售、寄售等，提供车辆过户、延保、保养、金融、保险等相关服务。经过8年的发展，辉达精选二手车目前拥有3家分店，总库存和月销量超300台，总面积约50000平方米，员工达200人，积累客户超30000人，已经成为惠州最大的二手车经销商。",
				"id": "830",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/29/501f5477-8c5c-4f55-869e-ab11c62bac1e.jpg",
				"title": "辉达精选二手车（仲恺）",
				"lat": "23.034649499145743",
				"createDate": "2016-09-29"
			},
			{
				"address": "惠州市惠博大道金山汽车城13号，广汽传祺",
				"distance": "107.7",
				"phone": "13725066612",
				"log": "114.39767038508928",
				"toPhone": "",
				"companyName": "广汽传祺（润杰店）",
				"shortDesc": "【生活一家会员专享：会员到店购车即减500/8000元】\r\n\r\n广汽传祺惠州润杰4S店是在惠州打造集整车销售、零配件供应及售后维修服务、信息反馈为一体的大型4S店，严格按照广汽传祺标准建造，即是惠州广汽传祺品牌的首家售前售后最大规模的标准4S店，公司总占地面积达5600多平方米，本店拥有最先进的机修设备和最为专业的销售、机修团队、不仅可以为广汽传祺提供优质、全面维修、保养服务，还能为客户提供最专业的技术咨询服务。",
				"id": "563",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/4/02bc9e02-b265-42f2-b835-6ee889530de3.jpg",
				"title": "广汽传祺（润杰店）",
				"lat": "23.131700234240768",
				"createDate": "2016-08-16"
			},
			{
				"address": "惠城区金山汽车城三街北汽绅宝",
				"distance": "107.7",
				"phone": "13168616650",
				"log": "114.39779976198461",
				"toPhone": "",
				"companyName": "北汽绅宝4S（金山汽车城）",
				"shortDesc": "【生活一家会员专享：购车直减一千至三千】\r\n让中国爱上中国造：自主品牌轿车销售、服务，目前在售车型是北京汽车旗下自主品牌产品，其中轿车板块包括源自瑞典豪华品牌萨博核心技术的中高级轿车——绅宝",
				"id": "503",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/3/24ac800e-57f8-4972-8688-ce624099b2dc.jpg",
				"title": "北汽绅宝4S（金山汽车城）",
				"lat": "23.133210343452905",
				"createDate": "2016-08-03"
			},
			{
				"address": "惠州市惠城区惠博沿江路金山汽车城三街12号，金山汽车城三街",
				"distance": "107.9",
				"phone": "13824292913",
				"log": "114.39924003958008",
				"toPhone": "",
				"companyName": "永亿行汽车装饰（金山汽车城）",
				"shortDesc": "【生活一家会员专享：8.5折优惠，新车贴膜特价300元】\r\n主营：贴膜、导航、行车记录仪、真皮",
				"id": "1043",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/5/02686fb1-63a2-485b-a69c-75c21debadf3.jpg",
				"title": "永亿行汽车装饰（金山汽车城）",
				"lat": "23.13315976092156",
				"createDate": "2017-01-05"
			},
			{
				"address": "广东省惠州市惠城区金山汽车城二街26号，惠州市（江北）江铃汽车贸易有限公司",
				"distance": "107.9",
				"phone": "13825448492",
				"log": "114.3993996648771",
				"toPhone": "",
				"companyName": "江铃汽车贸易有限公司（江北）",
				"shortDesc": "【生活一家会员专享：购车送行车记录仪】\r\n\r\n惠州市江铃汽车贸易有限公司成立于1999年，是江铃汽车在惠州的一级代理商，也是整车销售，配件供应，维修服务，信息收集、反馈为一体的专业营销服务公司。公司经营江铃全系列品牌：轻卡 、皮卡、SUV 、商务车及各种改装专业作业车。",
				"id": "733",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/7/a9b0674a-e7ef-4014-ae37-acff18aef7b7.jpg",
				"title": "江铃汽车贸易有限公司（江北）",
				"lat": "23.13213032734466",
				"createDate": "2016-09-07"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 6,
		"totalRecord": 60,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=259",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "",
				"distance": "",
				"phone": "95511",
				"log": "",
				"toPhone": "",
				"companyName": "中国平安",
				"shortDesc": "中国平安保险（集团）股份有限公司（以下简称“中国平安”，“公司”，“集团”）于1988年诞生于深圳蛇口，是中国第一家股份制保险企业，至今已发展成为融保险、银行、投资三大主营业务为一体、核心金融与互联网金融业务并行发展的个人金融生活服务集团之一。公司为香港联合交易所主板及上海证券交易所两地上市公司，股票代码分别为2318和601318。",
				"id": "52",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/20/df085f1a-e83b-429d-8b9e-c38019d0ccf3.jpg",
				"title": "中国平安银行、保险",
				"lat": "",
				"createDate": "2016-05-20"
			},
			{
				"address": "惠州市博罗县罗阳镇商业东街205号",
				"distance": "97.5",
				"phone": "18026627311",
				"log": "114.29888981710332",
				"toPhone": "",
				"companyName": "小牛普惠（博罗）",
				"shortDesc": "经营范围，工薪贷，生意贷，精英贷。二十岁即可申请，发现金本地人可申请。",
				"id": "690",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/30/cbbfc7c4-b15e-47e1-b9b0-9a45b8b9fff2.jpg",
				"title": "小牛普惠（博罗）",
				"lat": "23.171450214873943",
				"createDate": "2016-08-30"
			},
			{
				"address": "广东省惠州市惠城区江北东江二路二号富力国际中心1708",
				"distance": "109.2",
				"phone": "13421657924",
				"log": "114.41038808850337",
				"toPhone": "",
				"companyName": "盛启实业（江北）",
				"shortDesc": "公司产品:车贷，房贷，信用贷款\r\n1、全国车\r\n2、惠州本地地皮房子\r\n3、不看征信，不看流水，当天放款\r\n4、额度高，速度快，当天放款\r\n财富热线13421657924\r\n",
				"id": "742",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/8/8b87946f-1807-4247-8bc6-b45590de7d60.jpg",
				"title": "盛启实业（江北）",
				"lat": "23.10118137279262",
				"createDate": "2016-09-08"
			},
			{
				"address": "惠城区云山西路20号双子星国际商务大厦B座21-23层",
				"distance": "109.4",
				"phone": "13928324636",
				"log": "114.41288011104369",
				"toPhone": "",
				"companyName": "中国人民保险（江北）",
				"shortDesc": "【生活一家会员专享：电话咨询 13928324636】\r\n\r\n中国人民保险公司（简称中国人保）于1949年10月20日经中华人民共和国政务院批准在北京西郊民巷108号挂牌成立。作为新中国保险事业的缔造者和开拓者，中国人保在60多年的改革发展征程中，始终秉承“人民保险、服务人民”的使命，积极履行企业社会责任，为服务经济社会发展和保障国计民生，提供了全方位、高质量的保险保障和服务，铸就了新中国民族保险业的辉煌。",
				"id": "633",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/9/b1154356-1e28-4233-80ef-fed42d6ebaab.jpg",
				"title": "中国人民保险（江北）",
				"lat": "23.10808159832735",
				"createDate": "2016-08-10"
			},
			{
				"address": "惠州市惠城区江北文明一路中信广场A座908",
				"distance": "109.6",
				"phone": "15220639671",
				"log": "114.41517950929595",
				"toPhone": "",
				"companyName": "普惠金融（江北）",
				"shortDesc": "才薪贷，公务员，事业单位，国企，学校，医院等等，代发工资2000以上，上班满6个月以上即可申请。\r\n\r\n悦薪贷，上班满6个月以上，能提供社保或公积金即可申请。\r\n\r\n安薪贷，上班满6个月以上，能提供打卡发薪即可申请。\r\n\r\n乐薪贷，本地人或本地有房，上班满半年即可申请。",
				"id": "700",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/31/5b5a874a-a072-4a8d-a9f1-3c592a0866dd.jpg",
				"title": "普惠金融（江北）",
				"lat": "23.116540576176142",
				"createDate": "2016-08-31"
			},
			{
				"address": "惠州市惠城区麦地风尚国际大厦12楼h座",
				"distance": "109.7",
				"phone": "15916416530",
				"log": "114.4125998653976",
				"toPhone": "",
				"companyName": "惠州市致力信息咨询有限公司（麦地）",
				"shortDesc": "【生活一家会员专享：银收宝免费送】\r\n州市致力信息咨询有限公司位于惠州市麦地路58号风尚国际大厦12H房交通便利。惠州市致力信息咨询有限公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。公司拥有一支较强的队伍并和国内多家单位强强联手。热诚欢迎各界朋友前来参观、考察、洽谈业务",
				"id": "1011",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/13/6e58916b-60cb-45de-8d4f-1a3ccda033b1.jpg",
				"title": "惠州市致力信息咨询有限公司（麦地）",
				"lat": "23.075350537112893",
				"createDate": "2016-12-13"
			},
			{
				"address": "惠州市惠城区 麦地路 风尚国际大厦28A",
				"distance": "109.7",
				"phone": "13928313293",
				"log": "114.4125998653976",
				"toPhone": "",
				"companyName": "众鑫经济（麦地）",
				"shortDesc": "1、全款房，一押二押，可以贷\r\n2、按揭房，满3-6个月，可以贷\r\n3、保单，生效12个月，可以贷\r\n4、公积金，满三个月，可以贷\r\n5、全款车、按揭车，可以贷\r\n6、做生意，营业执照满一年+，可以贷\r\n额度2-100万，利息最低低至3厘1免抵押，免担保，低利息，放款快的金融信贷我们不放高利，我们只做银行的转运工！",
				"id": "488",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/1/9e64d4ff-95b1-46f9-b832-efc09fd5999f.jpg",
				"title": "众鑫经济（麦地）",
				"lat": "23.075350537112893",
				"createDate": "2016-09-20"
			},
			{
				"address": "惠城区华贸天地一座1708",
				"distance": "109.7",
				"phone": "18718153196",
				"log": "114.41552934493647",
				"toPhone": "",
				"companyName": "简易贷（江北）",
				"shortDesc": "【生活一家会员专享：按揭车不押车贷款，广佛莞惠有房产(自建房或有证宅基地)可操作，不看征信、不看负责，手续简单当天放款，额度8-9成（最大可放大到1.5倍），新车落地也能做】\r\n\r\n简易贷坚持“小额、分散、抵押”的原则，竭诚为广大中小微企业和个人提供安全、便捷的投融资渠道，降低中小企业融资成本，提升个人财富管理水平。顺应全国互联网金融创新趋势，简易贷以车辆抵押、不动产抵押借贷为核心，创新性推出车易贷、房易贷、赎楼贷等一系列标准化理财产品，并与汇付天下携手，真正实现资金的第三方托管，把保障投资者资金安全落实到实处。\r\n",
				"id": "687",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/29/7fb3d3ea-7b00-4f8f-9fca-7f39d3c2d718.jpg",
				"title": "简易贷（江北）",
				"lat": "23.10407992026537",
				"createDate": "2016-08-29"
			},
			{
				"address": "惠州市惠城区江北华贸大厦4楼",
				"distance": "109.8",
				"phone": "15768342193",
				"log": "114.41582523360876",
				"toPhone": "",
				"companyName": "联合万丰投资（江北）",
				"shortDesc": "惠州市联合万丰投资有限公司，主营 金融服务等。公司秉承\"顾客第一，勇攀高峰\"的经营理念，坚持\"诚实守信\"的原则为广大客户提供优质的服务",
				"id": "403",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/26/d880ac08-c95c-4dd1-8636-9042a7c185f0.jpg",
				"title": "联合万丰投资（江北）",
				"lat": "23.103214924658594",
				"createDate": "2016-07-26"
			},
			{
				"address": "惠州市惠城区江北文昌一路华贸大厦1栋1005室",
				"distance": "109.8",
				"phone": "18218064657",
				"log": "114.41582523360876",
				"toPhone": "",
				"companyName": "汇润集团（江北）",
				"shortDesc": "公司产品：信贷，房贷，押证不押车贷款\r\n1、惠州-广州-东莞-深圳-河源-佛山 \r\n2、按揭车不押车\r\n3、好批，速度快，额度高、手续简单，当天放款\r\n4、不电审，不考察，不看征信，不看银行流水\r\n优惠热线：18218064657 廖园\r\n",
				"id": "575",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/5/5da14d65-4500-44ce-be3e-7c4f0aefcf9f.jpg",
				"title": "汇润集团（江北）",
				"lat": "23.103214924658594",
				"createDate": "2016-08-05"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 3,
		"totalRecord": 25,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=260",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市惠城区陈江街道办事处陈江大道南28号",
				"distance": "100.8",
				"phone": "18933585800",
				"log": "114.31355507785976",
				"toPhone": "",
				"companyName": "维也纳酒店（陈江大道店）",
				"shortDesc": "【生活一家会员专享：198元享豪华单人房/双人房】酒店坐落于惠州市仲恺高新区陈江镇最繁华中心，距陈江镇政府仅一步之遥。酒店地理优势突出,东北距惠州市区12公里，南离深圳66公里，西至东莞樟木头30公里、东莞市区70公里、广州135公里。酒店周边商业配套齐全，拥有人人乐、民乐福、义乌等3家大型商贸广场，集中大型品牌服装，美食广场，文化广场，健身会所，美容美发，时尚商街等丰富业态，是您旅游购物、休闲娱乐、餐饮聚会、艺术欣赏的完美胜地。酒店拥有123间豪华客房，一楼为酒店大堂，二楼三楼为中西餐厅，四到十四楼为酒店客房，十五楼为自助早餐厅。这里有免费独立的停车场，WIFI高速光纤全覆盖，更优质的人性化服务，让您无论是旅游休闲还是商务洽谈，都能感受到温馨与尊贵。维也纳酒店(陈江大道店)真诚期待您的光临！",
				"id": "167",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/22/83670328-782d-42ba-90f2-77c08cfcec9c.jpg",
				"title": "维也纳酒店（陈江大道店）",
				"lat": "23.007198640590268",
				"createDate": "2016-07-23"
			},
			{
				"address": "惠州市仲恺高新区仲恺大道376号时尚公园T1栋大堂左侧,惠州克里斯顿酒店",
				"distance": "104.6",
				"phone": "07522601978",
				"log": "114.35452835186373",
				"toPhone": "13437644490",
				"companyName": "克里斯顿公寓（仲恺）",
				"shortDesc": "【生活一家会员专享：优惠价标单118元，豪单128元.标双148元】",
				"id": "693",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/31/628ba665-daf0-4a61-b4f2-cc3cb515ab72.jpg",
				"title": "克里斯顿公寓（仲恺）",
				"lat": "23.024238184871837",
				"createDate": "2016-09-03"
			},
			{
				"address": "惠城区仲恺大道惠环段243号维也纳酒店（仲恺店）",
				"distance": "105.1",
				"phone": "18933585800",
				"log": "114.35987967181265",
				"toPhone": "",
				"companyName": "维也纳酒店（仲恺店）",
				"shortDesc": "【生活一家会员专享：240元享豪华单人房】\r\n这里有免费独立的停车场，WIFI高速光纤全覆盖，更优质的人性化服务，让您无论是旅游休闲还是商务洽谈，都能感受到温馨与尊贵。维也纳酒店（仲恺店）真诚期待您的光临！",
				"id": "358",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/23/80bdd56b-c757-4044-9dcd-f634df9bbff5.jpg",
				"title": "维也纳酒店（仲恺店）",
				"lat": "23.02501967811565",
				"createDate": "2016-07-23"
			},
			{
				"address": "惠城区鹅岭南路3号4楼（汽车总站旁）",
				"distance": "108.0",
				"phone": "13809667901",
				"log": "114.39659903524424",
				"toPhone": "",
				"companyName": "金叶大酒店（鹅岭）",
				"shortDesc": "【生活一家会员专享：餐饮享9折优惠】金叶大酒店是广东省惠州市规模较大、档次较高、设施完善、服务齐全的豪华酒店，惠州金叶大酒店拥有各类客房，分布于五楼至十六楼。酒店占地面积1700平方米，环境舒适、优美；拥有6个大中型中餐厅、西餐厅；配备设备先进的豪华康体娱乐城，包括健身房、桑拿按摩等专业康体娱乐设施。酒店拥有会议中心，6间可容纳300至800人的大中小型会议室和一应俱全的会议设施。先进的影音和全数字化的设备，配置大屏幕投影。酒店服务设施及项目有商务中心、免费停车场、出租车队、外币兑换服务、前台贵重物品保险柜等，是宾客商务、旅游的理想居所。客房总数300间（套）。",
				"id": "179",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/80f2b227-127b-4c66-94b0-6fe6e9da9ecf.jpg",
				"title": "金叶大酒店（鹅岭）",
				"lat": "23.0812306063826",
				"createDate": "2016-07-20"
			},
			{
				"address": "环城西一路18号康帝国际大酒店2楼",
				"distance": "108.7",
				"phone": "4006886687",
				"log": "114.40450994533653",
				"toPhone": "",
				"companyName": "惠州康帝国际酒店",
				"shortDesc": "惠州康帝国际酒店位于惠州市区，东临广东四大水系之一的东江，西倚国家4A级景区惠州西湖，北靠朝京门古建筑公园，既可欣赏醉人的西湖美景，又可领略迤逦的东江风情。",
				"id": "33",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/4/25563b27-0920-4861-b32d-8842741c21f5.jpg",
				"title": "惠州康帝国际酒店",
				"lat": "23.098090589802155",
				"createDate": "2016-05-18"
			},
			{
				"address": "惠城区麦地南路11号维也纳酒店麦地店",
				"distance": "109.1",
				"phone": "18933585800",
				"log": "114.4060436842364",
				"toPhone": "",
				"companyName": "维也纳酒店（麦地南路店）",
				"shortDesc": "【生活一家会员专享：207元享豪华单人房/双人房】\r\n这里有免费独立的停车场，WIFI高速光纤全覆盖，更优质的人性化服务，让您无论是旅游休闲还是商务洽谈，都能感受到温馨与尊贵。维也纳酒店（麦地南路店）真诚期待您的光临！",
				"id": "311",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/dd0a58d4-5de1-44e5-8e2a-3a12538cace4.jpg",
				"title": "维也纳酒店（麦地南路店）",
				"lat": "23.070110485770893",
				"createDate": "2016-07-23"
			},
			{
				"address": "惠城区江北东江二路惠州富力万丽酒店",
				"distance": "109.2",
				"phone": "07527399999",
				"log": "114.41007961573645",
				"toPhone": "",
				"companyName": "惠州富力万丽五星级酒店",
				"shortDesc": "惠州富力万丽酒店于2012年全新开业，作为万豪集团旗下品牌酒店之一，惠州富力万丽酒店始终给旅客带来意想不到的享受，在这里，尽显豪华荣耀。惠州富力万丽酒店以无以伦比的服务体现您尊荣的人生价值。周围环境：华贸中心、惠州会展中心、惠州西湖、金宝购物江畔店、丽日购物广场江北店、沃尔玛购物广场",
				"id": "78",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/14/8769ecaf-eadb-4d4e-9b62-971feec9d3ea.jpg",
				"title": "惠州富力万丽五星级酒店",
				"lat": "23.101160665917426",
				"createDate": "2016-05-18"
			},
			{
				"address": "惠州市惠城区麦地南路麦地综合市场旁",
				"distance": "109.4",
				"phone": "13829918858",
				"log": "114.40769962050793",
				"toPhone": "",
				"companyName": "金煌酒店（麦地）",
				"shortDesc": "【房价最低最实惠】惠州金煌酒店是惠州知名的一家综合性酒店，酒店位于惠州市中心，地处惠州市的繁华黄金地带，地理位置优越，交通便利。\r\n酒店设施齐全，装修豪华典雅，别俱一格。为满足宾客的多层次需求，酒店设有金煌俱乐部、金煌会所、金煌酒吧SHOW8、量贩式KTV 包厢、金煌豪华客房、金煌老树咖啡、棋牌等娱乐设施，配套项目齐全。\r\n我们以“宾客至上，服务第一”为经营宗旨，采用了科学的经营机制和管理方法，不断追求卓越，得到了社会的认可。无论商务、宴会、休闲、娱乐，都是您的理想之选。",
				"id": "478",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/1/0a2209f3-4b4a-4c8c-87f1-554755686eaa.png",
				"title": "金煌酒店（麦地）",
				"lat": "23.062231648994956",
				"createDate": "2016-08-01"
			},
			{
				"address": "广东省惠州市惠城区G324(惠州大道)，皓雅丽兹公寓酒店",
				"distance": "110.1",
				"phone": "18024824434 ",
				"log": "114.41943998356705",
				"toPhone": "",
				"companyName": "丽兹公寓（佳兆业中心店）",
				"shortDesc": "【生活一家会员专享：标准房108元， 高级房138元， 豪华房178元（ 原价 138元/ 168元/ 238元）】",
				"id": "921",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/31/f491dd07-a552-458a-8ead-3762946a85ca.jpg",
				"title": "丽兹公寓（佳兆业中心店）",
				"lat": "23.114589826224417",
				"createDate": "2016-10-31"
			},
			{
				"address": "惠城区 江北云山西路2号惠州凯宾斯基酒店",
				"distance": "110.1",
				"phone": "07522898888",
				"log": "114.4194260373957",
				"toPhone": "",
				"companyName": "惠州凯宾斯基五星级酒店",
				"shortDesc": "惠州凯宾斯基酒店于2011全新开业，秉承凯宾斯基五星服务品质，惠州凯宾斯基酒店以优越的地理位置和完善的硬件设施，被评为惠州五星级酒店。房间数量（间）：340间房",
				"id": "80",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/14/45dd35d3-7e86-43f6-81f8-f2df94432c8d.jpg",
				"title": "惠州凯宾斯基五星级酒店",
				"lat": "23.11336362766915",
				"createDate": "2016-05-18"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 20,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=261",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市博罗县福田镇福中路31号休闲一刻(福田店)",
				"distance": "64.0",
				"phone": "18675252474",
				"log": "113.96974999589152",
				"toPhone": "",
				"companyName": "休闲一刻（福田店）",
				"shortDesc": "【生活一家会员专享：会员消费赠送水果沙拉一份】",
				"id": "304",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/c0e7cd2f-3fc9-4ec0-8ce7-3174edf3a5c3.jpg",
				"title": "休闲一刻（福田店）",
				"lat": "23.212899881721277",
				"createDate": "2016-07-18"
			},
			{
				"address": "惠州市博罗县罗阳镇文广路135号",
				"distance": "95.2",
				"phone": "18320203330",
				"log": "114.27668781326908",
				"toPhone": "",
				"companyName": "红绿灯餐吧（罗阳）",
				"shortDesc": "【生活一家会员专享：9折优惠】\r\n红绿灯餐吧：全新交友模式红绿灯，红灯，我想静静，别打扰，黄灯，不介意文明搭讪，绿灯，欢迎大家跟我搭讪一起玩",
				"id": "234",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/9/6bd91688-8373-46f8-85cf-cfefb13729f5.jpg",
				"title": "红绿灯餐吧（罗阳）",
				"lat": "23.16630585502551",
				"createDate": "2016-07-09"
			},
			{
				"address": "惠州市博罗县城商业中街127号文化广场对面趣道贡茶",
				"distance": "95.5",
				"phone": "07526737700",
				"log": "114.27971034341144",
				"toPhone": "",
				"companyName": "趣道贡茶（罗阳县城店）",
				"shortDesc": "【生活一家会员专享：8.5折优惠】\r\n趣道贡茶（罗阳县城店）：原味奶盖茶、黑糖乌龙奶盖、双Q珍珠奶茶、奶盖格雷、一颗柠檬茶、蜂蜜柚子茶、仙草蜜",
				"id": "165",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/20/7c7c412d-90d9-4229-8c67-c8df4bf70f36.jpg",
				"title": "趣道贡茶（罗阳县城店）",
				"lat": "23.165800363302687",
				"createDate": "2016-08-18"
			},
			{
				"address": "惠州市博罗县罗阳镇商业中街213号",
				"distance": "95.8",
				"phone": "07526622611",
				"log": "114.28178985839853",
				"toPhone": "",
				"companyName": "蹲点甜品（罗阳）",
				"shortDesc": "【生活一家会员专享：9折优惠】",
				"id": "276",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/14/f08d590c-abfa-4833-8866-0ae4d55bb874.jpg",
				"title": "蹲点甜品（罗阳）",
				"lat": "23.16591095942152",
				"createDate": "2016-07-14"
			},
			{
				"address": "惠州市博罗县罗阳镇光明路16号和风小屋",
				"distance": "96.2",
				"phone": "18620851983",
				"log": "114.28601077549867",
				"toPhone": "",
				"companyName": "和风小屋料理店（罗阳）",
				"shortDesc": "【生活一家会员专享：满35打9折，满70打8.5折】\r\n和风小屋（寿司、小吃、饮品）",
				"id": "282",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/15/1657d2f0-f9f5-4c8f-bd9a-901473ef065d.jpg",
				"title": "和风小屋料理店（罗阳）",
				"lat": "23.16459670100275",
				"createDate": "2016-07-15"
			},
			{
				"address": "罗阳镇东北路60号Hi TEA旗舰店",
				"distance": "96.3",
				"phone": "13112187507",
				"log": "114.28712509888287",
				"toPhone": "",
				"companyName": "Hi TEA旗舰店（罗阳镇）",
				"shortDesc": "【生活一家会员专享：9折优惠】",
				"id": "309",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/9ab33a04-d185-4f7e-a82d-cd0569055e21.jpg",
				"title": "Hi TEA旗舰店（罗阳镇）",
				"lat": "23.16367680324864",
				"createDate": "2016-07-19"
			},
			{
				"address": "惠州市博罗县罗阳镇罗阳一路50号",
				"distance": "96.3",
				"phone": "13927317227",
				"log": "114.28727023873164",
				"toPhone": "",
				"companyName": "随便休闲吧（罗阳）",
				"shortDesc": "【生活一家会员专享：9折优惠】随便休闲吧主营：批发零售进口啤酒、干邑啤酒、进口海产小食、进口秘鲁玛卡、辣木籽",
				"id": "200",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/8/72ce08f8-3a76-47c6-bc45-c2b495d0abb8.jpg",
				"title": "随便休闲吧（罗阳）",
				"lat": "23.16520112739123",
				"createDate": "2016-07-27"
			},
			{
				"address": "广东省惠州市博罗县建设路5栋，酸奶小栈",
				"distance": "96.7",
				"phone": "18819643550",
				"log": "114.29086056744526",
				"toPhone": "",
				"companyName": "酸奶小栈（博罗店）",
				"shortDesc": "【生活一家会员专享：买二送一】\r\n\r\n智然堂纯手工酸奶小栈连锁项目，源于台湾。公司以纯手工为项目工艺宗旨，目前已经在重庆、西安、广州、成都等开设专卖店50余家，加盟势头正呈泉涌发展之势。现已荟萃纯手工酸奶、纯手工酸奶冰淇淋、纯手工鲜榨爆米花三大系列产品，得到社会各界一致好评。",
				"id": "730",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/7/d756ed3c-c058-4152-9223-8c5cd39b7a6b.jpg",
				"title": "酸奶小栈（博罗店）",
				"lat": "23.170090997102317",
				"createDate": "2016-09-07"
			},
			{
				"address": "惠州市博罗县罗阳镇中园一路126号",
				"distance": "96.7",
				"phone": "13825483020",
				"log": "114.29094793415246",
				"toPhone": "",
				"companyName": "这里咖啡馆（罗阳）",
				"shortDesc": "【生活一家会员专享：9折优惠】",
				"id": "310",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/19/48aa9887-5084-413f-ad01-bec822d9e286.jpg",
				"title": "这里咖啡馆（罗阳）",
				"lat": "23.166364392709365",
				"createDate": "2016-07-19"
			},
			{
				"address": "惠州市博罗县罗阳镇商业中街477号葡猪猪",
				"distance": "96.7",
				"phone": "07526736566 ",
				"log": "114.29103014760528",
				"toPhone": "",
				"companyName": "葡猪猪（罗阳）",
				"shortDesc": "【生活一家会员专享：饮料买5杯送1杯】主营：猪扒包、小吃、餐饮",
				"id": "182",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/4afd14b6-f680-44e5-a8b9-53f530fd482e.jpg",
				"title": "葡猪猪（罗阳）",
				"lat": "23.16703393393752",
				"createDate": "2016-07-30"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 24,
		"totalRecord": 236,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=263",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市博罗县桥东二路89号，博罗人民公园大门左侧",
				"distance": "96.1",
				"phone": "15118941322",
				"log": "114.28546463406765",
				"toPhone": "",
				"companyName": "520静吧（博罗）",
				"shortDesc": "【生活一家会员专享：消费享商家优惠】",
				"id": "937",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/2/b4cbc8a8-25cd-4fe2-ba15-e70a58050fa8.png",
				"title": "520静吧（博罗）",
				"lat": "23.168161383500323",
				"createDate": "2016-11-02"
			},
			{
				"address": "广东省惠州市惠城区和畅五路，幻城清吧 ",
				"distance": "104.4",
				"phone": "13728276320 ",
				"log": "114.35291939722164",
				"toPhone": "",
				"companyName": "幻城清吧 （仲恺）",
				"shortDesc": "【生活一家会员专享：酒水享8折优惠】",
				"id": "925",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/1/a783edae-01eb-4e33-bc73-c4799146ce89.jpg",
				"title": "幻城清吧 （仲恺）",
				"lat": "23.024327604753346",
				"createDate": "2016-11-01"
			},
			{
				"address": "惠州市下角东路埔前街润宇广场夜色城市酒吧",
				"distance": "107.8",
				"phone": "13413190735",
				"log": "114.39649024512144",
				"toPhone": "",
				"companyName": "惠州夜色城市酒吧（下角）",
				"shortDesc": "【生活一家会员专享：9.5折优惠】\r\n夜色服务：驻场歌手、DJ、夜色美食、夜色酒水，服务周到，音质劲爆，分贝噪音太高，喜欢各种嗨的赶紧来感受一下哦~",
				"id": "53",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/9/8426130b-1090-4469-94bc-62288e45b439.jpg",
				"title": "惠州夜色城市酒吧（下角）",
				"lat": "23.10150004909472",
				"createDate": "2016-07-06"
			},
			{
				"address": "惠州市惠城区麦地路16号CLUB LV",
				"distance": "108.6",
				"phone": "13413076228",
				"log": "114.4018396736919",
				"toPhone": "",
				"companyName": "惠州LV酒吧（麦地）LV CLUB",
				"shortDesc": "【生活一家会员专享：所有啤酒10点半前买一送一】惠州LV酒吧：气氛很好,玩的很乐,现场DJ打碟很嗨,养眼美女还很多哦~",
				"id": "184",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/5/e1f2ed82-8ce1-4204-baa7-a65b2de175e5.png",
				"title": "惠州LV酒吧（麦地）LV CLUB",
				"lat": "23.07521044111065",
				"createDate": "2016-07-05"
			},
			{
				"address": "惠城区麦兴路19号悦洲广场2层,匣子K-Box惠州店",
				"distance": "109.3",
				"phone": "13530099828",
				"log": "114.40765999357951",
				"toPhone": "",
				"companyName": "匣子k-box连锁ktv（麦地）",
				"shortDesc": "【生活一家会员专享：1.首次预订即可获得免费体验K房一间。2.后期预订可享受（星期二房费1折，平日房费3折，周末房费5折）3.免费布置生日房，会员生日当天可以赠送精美果盘一份/香槟一支】扫描二维码➕微信提前预订：赖总监13530099828\r\n",
				"id": "703",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/2/eab584bc-569f-4f11-8999-b1b904874220.jpg",
				"title": "匣子k-box连锁ktv（麦地）",
				"lat": "23.071210898677748",
				"createDate": "2016-09-02"
			},
			{
				"address": "惠州市惠城区麦地南路麦地综合市场2楼，SHOW8",
				"distance": "109.4",
				"phone": "13553417989",
				"log": "114.40769962050793",
				"toPhone": "",
				"companyName": "SHOW8BAR酒吧（麦地）",
				"shortDesc": "【生活一家会员专享：折扣不定时优惠，送果盘小吃，联系人：吕东合，电话：13553417989】中国最快乐的酒吧：SHOW8BAR",
				"id": "381",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/26/64702983-dedd-4133-bf2c-d282868b8fa8.jpg",
				"title": "SHOW8BAR酒吧（麦地）",
				"lat": "23.062231648994956",
				"createDate": "2016-07-26"
			},
			{
				"address": ":惠城区下埔西堤路滨江大厦11号楼一楼（靠近下埔小学后门）",
				"distance": "109.7",
				"phone": "13751589919",
				"log": "114.41267941056876",
				"toPhone": "",
				"companyName": "佐域NEW LIFE酒吧（下埔）",
				"shortDesc": "【生活一家会员专享：9.5折优惠】这里不算亮堂，没有太多霓虹灯闪烁，你可以来到这里，放下所有忙碌，跟着音乐哼哼。佐域是个有酒有故事的地方，你听说过吗，你到来过吗。如果没有，来坐坐吧。你会爱上它的闲静，它的舒心，和它的一切一切。",
				"id": "108",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/3/f315bd5a-c2c9-4101-8dd9-76bb053649db.jpg",
				"title": "佐域NEW LIFE酒吧（下埔）",
				"lat": "23.083281784458332",
				"createDate": "2016-07-13"
			},
			{
				"address": "惠城区演达大道（曼哈顿广场一楼）热舞派对酒吧",
				"distance": "109.9",
				"phone": "13437641724",
				"log": "114.41403963372498",
				"toPhone": "",
				"companyName": "热舞派对酒吧（惠州曼哈顿店）",
				"shortDesc": "【生活一家会员专享：10点半前2打百威只需380元，两支百龄坛只需500元】免费WiFi，免费停车位！请提前预定哦~",
				"id": "250",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/12/e992bc5d-a1b4-4ba8-ac86-658200a7546f.jpg",
				"title": "热舞派对酒吧（惠州曼哈顿店）",
				"lat": "23.07311221842671",
				"createDate": "2016-07-12"
			},
			{
				"address": "惠州市惠城区下埔二路26号E夜派对",
				"distance": "109.9",
				"phone": "13428069363",
				"log": "114.41503475099007",
				"toPhone": "",
				"companyName": "E夜派对酒吧（南坛下埔）",
				"shortDesc": "【生活一家会员专享：1.散台(十点前200元两打百威，一点后100元一打百威)；2.散台:百威300两打；3.卡座:百威380两打，600四打；4.全场:人头马880元两套,名仕1288元两套】\r\n抢台高压电13428069363",
				"id": "636",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/12/8eb06745-f61e-4c1d-aee8-e1c023a27700.jpg",
				"title": "E夜派对酒吧（南坛下埔）",
				"lat": "23.0797676150564",
				"createDate": "2016-08-12"
			},
			{
				"address": "惠城区下埔滨江西堤路25-6号 ,泡末酒吧",
				"distance": "110.0",
				"phone": "0752–2162088",
				"log": "114.41558960189825",
				"toPhone": "13480557755",
				"companyName": "泡末酒吧（滨江花园）",
				"shortDesc": "【生活一家会员专享：1.全场8.8折优惠；2.易拉罐虎牌啤酒买2打送1打】\r\nPM·泡末CLUB",
				"id": "1030",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/27/1f80b5c1-6ff1-47af-ab9f-f2bd9dac338c.jpg",
				"title": "泡末酒吧（滨江花园）",
				"lat": "23.082230263097312",
				"createDate": "2016-12-27"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 16,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=381",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市惠城区南门路10号，琼芳美容美体",
				"distance": "",
				"phone": "13243806660",
				"log": "",
				"toPhone": "",
				"companyName": "琼芳美容美体（南门路）",
				"shortDesc": "【生活一家会员专享：38元超值体验：丰韵塑胸、纤体塑形、温宫排毒、肩颈舒缓任选2项。\r\n18元超值体验：美颜面部水疗一次、嫩白祛黄一次、另送(修眉+清黑头)任选面部护理1项】\r\n经营项目：面部护理（美白 补水 控油祛痘），身体理疗（经络疏通 艾灸 拔罐 火疗），仪器祛斑，永久脱毛，半永久纹绣，蒸仓理疗（减肥）",
				"id": "1017",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/15/b76fdcca-aa2d-48b8-8219-02ce0a7404b5.jpg",
				"title": "琼芳美容美体（南门路）",
				"lat": "",
				"createDate": "2016-12-15"
			},
			{
				"address": "东莞市南城区鸿福路莱蒙商业中心1041A",
				"distance": "44.5",
				"phone": "0769-27223559",
				"log": "113.74431970081815",
				"toPhone": "",
				"companyName": "苹果发艺·发艺城（鸿福店）",
				"shortDesc": "【生活一家会员专享：消费享9折优惠】\r\n\r\n苹果发艺秉承为时尚白领、成功人士量身定制发型设计、帮顾客塑造时尚、品味、优雅、自信、散发无限魅力自我，将开心、漂亮、时尚带给每一位客人。为人们缔造时尚的美丽殿堂！\r\n",
				"id": "908",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/25/422f593e-af71-48b1-be52-d82931600013.jpg",
				"title": "苹果发艺·发艺城（鸿福店）",
				"lat": "23.0151811268537",
				"createDate": "2016-12-31"
			},
			{
				"address": "惠州市博罗县园洲花园17栋6号铺",
				"distance": "64.6",
				"phone": "07526628827",
				"log": "113.97518808243625",
				"toPhone": "",
				"companyName": "丝域养发馆hair spa（博罗园洲店）",
				"shortDesc": "【生活一家会员专享：55元,享一次价值286元玫瑰专业洗护单人套餐】丝域率先把头皮头发养护的新观念融入美发潮流中，营造真正意义上的头皮头发养疗新概念。\r\n经过十三年的发展，目前丝域已经拥有近1500家门店（惠州有近30家门店），成为全国大型的养发连锁机构，且还在不断发展壮大。",
				"id": "207",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/8/ab491455-66f7-4cb6-aa3e-76a2fe31dcb7.jpg",
				"title": "丝域养发馆hair spa（博罗园洲店）",
				"lat": "23.130277888974373",
				"createDate": "2016-07-09"
			},
			{
				"address": "东莞市黄江镇环城路星光城购物中心2层205号铺",
				"distance": "74.2",
				"phone": "0769-2232934",
				"log": "114.01316015578814",
				"toPhone": "",
				"companyName": "发艺城·发型设计连锁（星光城分店）",
				"shortDesc": "【生活一家会员专享：8.5折优惠】 \r\n公司秉承“品质、服务、环境、形象”的经营方针，缔造美业品牌，把开心和漂亮带给每个人，帮助每一位顾客塑造漂亮、时尚的发型，突现品味、个性的自我",
				"id": "899",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/25/e5609b1e-42bd-4803-855b-65e5e0a2b701.jpg",
				"title": "发艺城·发型设计连锁（星光城分店）",
				"lat": "22.914849336292164",
				"createDate": "2016-12-31"
			},
			{
				"address": "东莞市樟木头镇华富广场一楼68号铺",
				"distance": "79.9",
				"phone": "0769-87792563",
				"log": "114.0678406303295",
				"toPhone": "",
				"companyName": "发艺城·发型设计连锁（华富店）",
				"shortDesc": "【生活一家会员专享：8.5折优惠】 \r\n公司秉承“品质、服务、环境、形象”的经营方针，缔造美业品牌，把开心和漂亮带给每个人，帮助每一位顾客塑造漂亮、时尚的发型，突现品味、个性的自我",
				"id": "897",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/25/e5cbfb3f-4133-436f-8a68-4b67a584f013.jpg",
				"title": "发艺城·发型设计连锁（华富店）",
				"lat": "22.902809553737903",
				"createDate": "2016-12-31"
			},
			{
				"address": "广东省惠州市博罗县商业西街28号",
				"distance": "95.6",
				"phone": "18813487609",
				"log": "114.28047125631166",
				"toPhone": "",
				"companyName": "COMO HAIR 蔻慕造型（博罗广场店）",
				"shortDesc": "【生活一家会员专享：35元享原价68资深发型师洗剪吹；128元享原价648元资深发型师洗剪吹+资深堂；128元享原价648元资深发型师洗剪吹+欧莱雅烫染拉（以上优惠项目3选1）】\r\n\r\nCOMO HAIR蔻慕美容美发造型连锁机构是由惠州知名美发品牌T.ONE造型历经多年蜕变而成！COMO HAIR精选各门店顶尖发型师和总监，并由创始人亲自任职经营,同时引进了国内著名美甲品牌苏三说，致力打造美发美容体验一体化服务，同属于T.ONE造型连锁机构，是服务多元化人群的全新品牌！ COMO HAIR蔻慕造型始终秉承精致美发，极致服务基础下更精益求精，在这里，我们以强大的专业技术团队，和世界顶级品牌合作，以更专注的方式给顾客带来独特的美学感受。 COMO HAIR始于2008年，已经服务您七年，未来，我们竭尽所能为您服务更久！\r\n",
				"id": "972",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/13/af5776fb-e064-41a7-a72e-fe8b558a35b3.jpg",
				"title": "COMO HAIR 蔻慕造型（博罗广场店）",
				"lat": "23.165500240184684",
				"createDate": "2016-11-13"
			},
			{
				"address": "博罗县罗阳镇罗阳二路七十三号",
				"distance": "96.4",
				"phone": "6632321 ",
				"log": "114.28844880539677",
				"toPhone": "",
				"companyName": "Fashion Queen时尚女皇（罗阳）",
				"shortDesc": "【生活一家会员专享9折优惠】，美甲是一种对指(趾)甲进行装饰美化的工作，又称甲艺设计。美甲是根据客人的手形、甲形、肤质、服装的色彩和要求，对指(趾)甲进行消毒、清洁、护理、保养、修饰美化的过程。具有表现形式多样化的特点。",
				"id": "186",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/5/97a42294-9746-4c5f-86af-b8ae0a70b803.jpg",
				"title": "Fashion Queen时尚女皇美甲美容（罗阳）",
				"lat": "23.170365724767642",
				"createDate": "2016-07-06"
			},
			{
				"address": "惠州市博罗县罗阳镇罗阳二路文一书店旁千艺造型",
				"distance": "96.4",
				"phone": "07526215811",
				"log": "114.2884614762109",
				"toPhone": "13169593878",
				"companyName": "千艺造型（名豪店）罗阳",
				"shortDesc": "【生活一家会员专享：做头发8折，剪头发九折】千艺造型：位于罗阳二路繁华的商业中心，是一家旗舰性的美发沙龙，以专业的水准，一流的服务赢得广大顾客的信赖。",
				"id": "181",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/95b762f2-0e43-4d1e-8b67-6504165b698d.jpg",
				"title": "千艺造型（名豪店）罗阳",
				"lat": "23.17070779558908",
				"createDate": "2016-07-04"
			},
			{
				"address": "博罗县罗阳镇公园东路35号",
				"distance": "97.8",
				"phone": "0752-6631338",
				"log": "114.3019302357905",
				"toPhone": "15875236664",
				"companyName": " 权健康富丽养生馆（博罗）",
				"shortDesc": "【生活一家会员专享：消费享8.5折优惠】",
				"id": "783",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/19/36a0b621-8bc7-4d92-b04f-e8f6b55bdbe2.jpg",
				"title": " 权健康富丽养生馆（博罗）",
				"lat": "23.173709444449642",
				"createDate": "2016-09-20"
			},
			{
				"address": "商业东街东森华庭C栋02号商铺美然汗蒸会所 会员折扣9折",
				"distance": "98.0",
				"phone": "6283086",
				"log": "114.30331997812907",
				"toPhone": "",
				"companyName": "美然汗蒸会所（罗阳）",
				"shortDesc": "【生活一家专享优惠9折】汗蒸是一种休闲项目，是能量谷热疗的一种，历史悠久，深受民众喜爱。",
				"id": "245",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/de818aa6-29ae-446a-a4d3-5131c104bf25.jpg",
				"title": "美然汗蒸会所（罗阳）",
				"lat": "23.17366993278238",
				"createDate": "2016-07-13"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 16,
		"totalRecord": 151,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=382",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "广州市荔湾区华林国际C馆B6032",
				"distance": "12.0",
				"phone": "15913113945",
				"log": "113.24681426990466",
				"toPhone": "",
				"companyName": "钟玉一生",
				"shortDesc": "【生活一家会员专享优惠，详情咨询请商家】玉器要避免阳光的暴晒。防止影响到玉的质地和色泽。",
				"id": "240",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/7d255a55-dea0-4bb9-a3a8-4713c6efda73.jpg",
				"title": "钟玉一生",
				"lat": "23.117971708088213",
				"createDate": "2016-07-11"
			},
			{
				"address": "惠城区东湖花园1区江边89-27号",
				"distance": "87.3",
				"phone": "13790779003",
				"log": "114.19215047359089",
				"toPhone": "",
				"companyName": "新节奏（东平）",
				"shortDesc": "【生活一家会员专享：架子鼓八折优惠】",
				"id": "485",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/1/ecb99d1c-1ad6-407d-823d-da7215f20059.png",
				"title": "新节奏（东平）",
				"lat": "23.07805913257078",
				"createDate": "2016-08-01"
			},
			{
				"address": "惠州市博罗县罗阳镇桥东五路光明苑小区旁",
				"distance": "96.2",
				"phone": "13202333760",
				"log": "114.28567962095181",
				"toPhone": "",
				"companyName": "true Love1966服装店（博罗）",
				"shortDesc": "【生活一家会员专享：消费享9折优惠】\r\n\r\n承接各种纯棉校服，班服，工作服，广告衫。",
				"id": "837",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/d98bbde5-24d7-454e-865d-25b1ced561a3.jpg",
				"title": "true Love1966服装店（博罗）",
				"lat": "23.170881558215132",
				"createDate": "2016-10-07"
			},
			{
				"address": "惠州陈江甲子路59号",
				"distance": "101.3",
				"phone": "15820700407",
				"log": "114.31856542934308",
				"toPhone": "",
				"companyName": "Vivo专卖店（陈江）",
				"shortDesc": "【生活一家会员专享：凭会员购买手机优惠100元】",
				"id": "608",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/6/9c22ee59-93f6-4a42-b871-fbf4dd9d05ca.png",
				"title": "Vivo专卖店（陈江）",
				"lat": "23.00664587029995",
				"createDate": "2016-08-06"
			},
			{
				"address": "惠州市惠城区陈江甲子路 民乐福商场陈江店 3楼",
				"distance": "101.4",
				"phone": "13528095270",
				"log": "114.31913015386804",
				"toPhone": "",
				"companyName": "YES女装（陈江）",
				"shortDesc": "【生活一家会员专享：8.8折优惠】\r\nYES Superstore诞生于1993年，以百搭时尚、快时尚为品牌核心，携带着无限青春梦想、时尚元素从香港回归到国内，为中国女性消费者发现和分享香港潮流文化的服饰品牌。",
				"id": "357",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/22/572c7073-ad0e-4ea9-890b-0286acd66478.jpg",
				"title": "YES女装（陈江）",
				"lat": "23.00677843665396",
				"createDate": "2016-07-22"
			},
			{
				"address": "惠城区河南岸银岭路30号",
				"distance": "101.7",
				"phone": "13692843118",
				"log": "114.32295975006348",
				"toPhone": "",
				"companyName": "龙盛水族（河南岸）",
				"shortDesc": "【生活一家会员专享：全场9折优惠】",
				"id": "678",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/26/2dca8f0c-e779-434a-bd75-b7a06eb23cfd.jpg",
				"title": "龙盛水族（河南岸）",
				"lat": "23.010240441885774",
				"createDate": "2016-08-26"
			},
			{
				"address": "惠州市陈江曙光路87号",
				"distance": "102.0",
				"phone": "18026508085",
				"log": "114.32363685764199",
				"toPhone": "",
				"companyName": "小刀电动车（陈江店）",
				"shortDesc": "【生活一家会员专享：9折优惠】\r\n\r\n小刀集团成立于2004年，是一家致力于发展绿色电动出行代步工具的大型生产制造企业，主营产品包括：电动自行车、电动三轮车、电动四轮车及特种车辆。",
				"id": "599",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/5/4dab4d92-b60c-4a4e-a862-76845c6ca436.jpg",
				"title": "小刀电动车（陈江店）",
				"lat": "22.997363142379225",
				"createDate": "2016-08-05"
			},
			{
				"address": "惠州市惠城区大岭路32-3号",
				"distance": "106.8",
				"phone": "13711605545",
				"log": "114.38399964921285",
				"toPhone": "",
				"companyName": "捷豹自行车行（大岭路）",
				"shortDesc": "【生活一家会员专享：租车8折优惠】捷豹自行车行：出售、出租自行车",
				"id": "536",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/4/3c6391cb-f706-42a0-aa02-463e2ec9532f.jpg",
				"title": "捷豹自行车行（大岭路）",
				"lat": "23.075540125670084",
				"createDate": "2016-08-04"
			},
			{
				"address": "惠州市惠城区上排龙丰路园蓬街4-6号",
				"distance": "107.1",
				"phone": "13112096685",
				"log": "114.38719954778351",
				"toPhone": "",
				"companyName": "养生灵芝商行（上排）",
				"shortDesc": "【生活一家会员专享：8折优惠】\r\n厂家自营：灵芝孢子粉",
				"id": "985",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/27/cbc17fda-051f-41b5-9965-66964ca7ac67.jpg",
				"title": "养生灵芝商行（上排）",
				"lat": "23.07628027255163",
				"createDate": "2016-11-27"
			},
			{
				"address": "惠州市惠城区黄塘电脑城五号楼A113铺，文盛科技",
				"distance": "108.0",
				"phone": "13422905832",
				"log": "114.39625749253376",
				"toPhone": "",
				"companyName": "文盛科技（黄塘电脑城）",
				"shortDesc": "【生活一家会员专享：装机送无线鼠标键盘一套，高清摄像头一个】\r\n",
				"id": "1042",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/5/6a0694b0-f2d2-4a3c-9c8a-c8d08b318ddf.jpg",
				"title": "文盛科技（黄塘电脑城）",
				"lat": "23.081719850057997",
				"createDate": "2017-01-05"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 14,
		"totalRecord": 137,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=383",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市惠城区江北三新北路丽格公寓停车场东门16栋",
				"distance": "109.1",
				"phone": "0752-2830017",
				"log": "114.40996869443045",
				"toPhone": "",
				"companyName": "沣缘生活馆（江北）",
				"shortDesc": "【生活一家会员专享：消费享9折优惠】",
				"id": "473",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/29/3260877f-9f17-40e6-b691-283e35ad08ba.jpg",
				"title": "沣缘生活馆（江北）",
				"lat": "23.118169551254617",
				"createDate": "2016-07-29"
			},
			{
				"address": "惠州市惠城区麦地东一路1-2号，安福轩茶业",
				"distance": "109.3",
				"phone": "13809831077",
				"log": "114.40710993974251",
				"toPhone": "",
				"companyName": "安福轩茗茶（麦地）",
				"shortDesc": "【生活一家会员专享：8.5折优惠】\r\n茶叶质量上乘，货真价实",
				"id": "991",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/2/5ae22fb7-7483-482a-961a-a65f4d118f49.jpg",
				"title": "安福轩茗茶（麦地）",
				"lat": "23.065020986037595",
				"createDate": "2016-12-02"
			},
			{
				"address": "惠州市桥东上板塘南面小区随缘茶馆",
				"distance": "109.5",
				"phone": "13531655551",
				"log": "114.41176946570812",
				"toPhone": "",
				"companyName": "随缘茶馆（桥东南面小区）",
				"shortDesc": "【生活一家会员专享：房间优惠8折】随缘茶馆：主营休闲、喝茶、娱乐",
				"id": "301",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/18/d4da4d27-ae84-4551-9bd7-a3f7b064e2ef.jpg",
				"title": "随缘茶馆（桥东南面小区）",
				"lat": "23.08835009168125",
				"createDate": "2016-07-18"
			},
			{
				"address": "惠城区横江四路3号下铺数码街对面和盛興茗茶業",
				"distance": "109.6",
				"phone": "18665255588",
				"log": "114.41139006050348",
				"toPhone": "",
				"companyName": "和盛興茗茶業（横江）",
				"shortDesc": "【生活一家会员专享：茶叶八折优惠，名酒假一赔十，会员价格全市最低】凤凰单枞茗茶、东方红、宋种、乌岽、玉兰香、蜜兰香、杏仁香、贡香、芝兰、大乌叶、抽干茶、冰茶、普洱茶、红茶、大红袍、金骏眉、铁观音、绿茶、毛尖、名式名家手拉壶。以及各种名酒，品质保证！货真价实！",
				"id": "120",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/5/f6be3bbf-8ebf-467c-8a86-a34c6e8a8d7d.jpg",
				"title": "和盛興茗茶業（横江）",
				"lat": "23.0792510368671",
				"createDate": "2016-07-04"
			},
			{
				"address": "惠州市惠城区麦地东二路鸿润花园C栋109号",
				"distance": "109.6",
				"phone": "07522563456",
				"log": "114.40972318227941",
				"toPhone": "",
				"companyName": "茶缘阁（麦地）",
				"shortDesc": "【生活一家会员专享：9折优惠】各种名茶、茶具、茶室、品茗",
				"id": "155",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/11/dcb5df9a-0376-4ea0-8a98-df9c32c9d72c.jpg",
				"title": "茶缘阁（麦地）",
				"lat": "23.063179759733664",
				"createDate": "2016-07-22"
			},
			{
				"address": "惠州市花边南路茶博艺术城126-127号",
				"distance": "109.6",
				"phone": "0752-2213755",
				"log": "114.4109398253318",
				"toPhone": "",
				"companyName": "众意茗茶（麦地）",
				"shortDesc": "【生活一家会员专享：消费享7.8折优惠】\r\n\r\n主营产品：铁观音、红茶、绿茶、普洱茶、茶具等等",
				"id": "567",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/4/2e6bd545-1b22-4928-b33c-9a56090a0639.png",
				"title": "众意茗茶（麦地）",
				"lat": "23.07257106815173",
				"createDate": "2016-08-05"
			},
			{
				"address": "惠城区西堤路北五街1-7",
				"distance": "110.1",
				"phone": "13542714299",
				"log": "114.41707021818225",
				"toPhone": "",
				"companyName": "景德镇陶瓷艺术（下埔）",
				"shortDesc": "【生活一家会员专享：全场6折】",
				"id": "736",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/8/6617dc59-4878-484a-a852-459a575d8cc9.jpg",
				"title": "景德镇陶瓷艺术（下埔）",
				"lat": "23.081580160861744",
				"createDate": "2016-09-08"
			},
			{
				"address": "惠城区斑樟湖二横路一德商品展贸城一楼1075号（河南岸办事处对面）",
				"distance": "110.4",
				"phone": "15916359349",
				"log": "114.41934955840063",
				"toPhone": "",
				"companyName": "金祥茶叶批发部（河南岸）",
				"shortDesc": "【生活一家会员专享：消费享8.8折优惠】",
				"id": "340",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/20/11109c98-9e74-41b3-912b-be3f0187d111.png",
				"title": "金祥茶叶批发部（河南岸）",
				"lat": "23.073980227596216",
				"createDate": "2016-07-20"
			},
			{
				"address": "惠城区斑樟湖二横街2号一德商贸城(一楼1046铺)",
				"distance": "110.5",
				"phone": "13680779049",
				"log": "114.41951966965573",
				"toPhone": "",
				"companyName": "博雅轩（河南岸）",
				"shortDesc": "【生活一家会员专享：消费享9折优惠】\r\n主营：翡翠白玉、古玉、古画、紫砂木雕、竹雕、寿山石等等。",
				"id": "342",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/20/1d6db35a-7655-46b5-aa9b-bd16b7752e9d.jpg",
				"title": "博雅轩（河南岸）",
				"lat": "23.07459033022024",
				"createDate": "2016-07-21"
			},
			{
				"address": "惠城区斑樟湖二横街2号一德商贸城（一楼1107-1059）",
				"distance": "110.5",
				"phone": "13480518873",
				"log": "114.41951966965573",
				"toPhone": "",
				"companyName": "古龙窑壶艺坊（河南岸）",
				"shortDesc": "【生活一家会员专享：紫砂壶8折优惠】\r\n经营范围：宜兴紫砂、宜兴红茶",
				"id": "345",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/20/541eb6c6-0e78-45a2-8d0e-7edf65bb6cdd.png",
				"title": "古龙窑壶艺坊（河南岸）",
				"lat": "23.07459033022024",
				"createDate": "2016-07-21"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 14,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=384",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州罗浮山风景名胜区",
				"distance": "74.2",
				"phone": "07526669915",
				"log": "114.06569457313464",
				"toPhone": "",
				"companyName": "惠州罗浮山风景名胜区",
				"shortDesc": "罗浮山峻拔奇巧峭，是7000万年前中侏罗纪和白垩纪时燕山运动型号层的，常年云雾缭绕，大小432座山峰，峭壁危崖，980多道瀑布流泉，“山山瀑布，处处流泉”。",
				"id": "61",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/12/a1494ad5-841a-4d29-bc57-3f1dcb3eef7e.jpg",
				"title": "惠州罗浮山风景名胜区",
				"lat": "23.25983434837915",
				"createDate": "2016-05-18"
			},
			{
				"address": "惠城区环城西路2号西湖公园",
				"distance": "107.8",
				"phone": "",
				"log": "114.39551949190366",
				"toPhone": "",
				"companyName": "惠州西湖",
				"shortDesc": "惠州西湖是惠州著名的旅游景点",
				"id": "62",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/12/7b75353a-4c4c-4fad-8efd-5c7b51517cb8.jpg",
				"title": "惠州西湖",
				"lat": "23.092420731655817",
				"createDate": "2016-05-23"
			},
			{
				"address": "惠州市下埔路8-9号",
				"distance": "109.6",
				"phone": "18902626288",
				"log": "114.41206986207276",
				"toPhone": "",
				"companyName": "假日风光旅行社（下埔）",
				"shortDesc": "【生活一家会员专享：消费享9.5折,赠送旅游三宝】\r\n\r\n 惠州市假日风光旅行社成立于2006年12月，是一家经国家旅游局批准的国内旅行社。公司注册资本为三十万元。假日风光自成立之日起，就坚持“创旅游服务品牌、树企业良好形象”的发展战略，秉承“游客至上、质量至上、信誉至上、服务至上”的经营服务理念和“以质量树信誉、以信誉促发展”的经营策略，不断通过管理创新和服务创新，提高企业素质和服务质量。努力为市民提供度假旅游、会议旅游、商务考察旅游、线路设计、导游服务、订房订票、旅游包车等专业化服务。假日风光拥有一支“素质优良、团结拼搏、作风过硬、业务娴熟”的管理人员、营销人员、操作人员和导游队伍；客户服务流程、操作控制系统和质量管理体系都日益成熟。\r\n 如今，假日风光已拥有众多长期合作、彼此信任的同行客户，并在游客中树立了自己良好的口碑和品牌形象。假日风光用自己的努力赢得了同行的尊重和大量游客的信赖。",
				"id": "746",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/8/e752aae2-e5d4-47d9-b387-2c5749b3946e.jpg",
				"title": "假日风光旅行社（下埔）",
				"lat": "23.080910287346118",
				"createDate": "2016-09-08"
			},
			{
				"address": "广东省惠州市惠城区东平大道，中国国旅",
				"distance": "111.5",
				"phone": "0752-6666676",
				"log": "114.4312951649248",
				"toPhone": "",
				"companyName": "中国国旅（东平大道店）",
				"shortDesc": " 中国国际旅行社总社成立于1954年，于2008年3月更名为中国国际旅行社总社有限公司(简称中国国旅)。经过几代国旅人的艰苦创业，现已发展为国内规模最大、实力最强的旅行社企业集团，累计招揽、接待海外来华旅游者1000多万人次。“CITS”已成为国内顶级、亚洲一流、世界知名的中国驰名商标，在世界60多个国家和地区通过注册。\r\n 中国国旅的愿景目标是发展成为“中国旅游产业领域中拥有旗舰地位的企业”、“央企中最具市场竞争力的旅行社集团”、“中国最强的跨国旅游运营商”、“全球最为著名的旅游业品牌之一”。",
				"id": "753",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/10/1e0f808b-eaac-43e5-bf03-8eecb8a0cc8a.jpg",
				"title": "中国国旅（东平大道店）",
				"lat": "23.08579555440452",
				"createDate": "2016-09-10"
			},
			{
				"address": "龙门县龙门铁泉",
				"distance": "116.1",
				"phone": "400-807-3338",
				"log": "114.23986481512105",
				"toPhone": "",
				"companyName": "龙门铁泉温泉度假村",
				"shortDesc": "铁泉旅游度假区拥有“三大两独”特色：亚洲最大的温泉康乐中心、全国最大的山水园林温泉、全国独有的天然黄金蒸汽浴、全国独有的珍稀黄金汤泉、广东最大温泉仿海浪冲浪。多年来，铁泉深受广大游客的喜爱，并曾荣获：“中国最佳生态园林温泉、广东十佳温泉度假酒店、广东最具吸引力温泉景区”等多个殊荣。",
				"id": "42",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/7/48c744c6-4a57-44fc-89be-fe4ca5dfe535.jpg",
				"title": "惠州龙门铁泉温泉度假村",
				"lat": "23.820007375453013",
				"createDate": "2016-05-23"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 1,
		"totalRecord": 5,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=385",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市鹅岭北路16号，中心医院对面黄塘电脑城内，叠翠山庄旁",
				"distance": "108.0",
				"phone": "15602657293",
				"log": "114.39583204758041",
				"toPhone": "07522125555",
				"companyName": "惠州铭悦御天健身俱乐部（鹅岭）",
				"shortDesc": "【生活一家会员专享：年卡9折优惠】惠州唯一一家经营品牌最早,规模最大,项目最全面的俱乐部: 03年开业,营业面积超过4000多平方, 环境优雅(背倚叠翠山,滨临丰湖), 培训班, 肚皮舞培训班, 爵士舞培训班... 成人小孩培训班均有;",
				"id": "60",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/5/a5d66aef-e3aa-415f-8bf4-643d7598a5ca.jpg",
				"title": "惠州铭悦御天健身俱乐部（鹅岭）",
				"lat": "23.081856579868628",
				"createDate": "2016-07-05"
			},
			{
				"address": "广东省惠州市惠城区环城西二路5号，西湖丽日购物广场后3楼",
				"distance": "108.4",
				"phone": "13680727235",
				"log": "114.40149933145796",
				"toPhone": "",
				"companyName": "One two one时尚健身会所（西湖店）",
				"shortDesc": "【生活一家会员专享：办理年卡享5折优惠（需提前电话预约）】",
				"id": "832",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/29/eec6dfb5-0607-4071-ac9c-b28831d042f5.jpg",
				"title": "One two one时尚健身会所（西湖店）",
				"lat": "23.089642041822554",
				"createDate": "2016-09-29"
			},
			{
				"address": "惠州江北体育馆B馆",
				"distance": "108.5",
				"phone": "13126328373 ",
				"log": "114.40411872936058",
				"toPhone": "",
				"companyName": "零距离健身连锁（江北店）",
				"shortDesc": "零距离国际健身连锁机构自2003年成立以来，以全民健身为宗旨，促进改善全民体质为己任；全力发展健身事业，倡导科学健身的理念。在全国各省市已发展30多家分店。惠州体育馆华南旗舰店占地近3000平米，是集健身娱乐、商务休闲为一体的综合健身场所。开设项目：有氧健身、自由力量训练、顶级高级瑜伽、宇宙之光超炫动感单车、韩式汗蒸、桌球、乒乓球、国际标准擂台、室内高尔夫球、武道、普拉提、肚皮舞、爵士舞、拉丁舞、民族舞、形体舞、印度舞、韩国热舞、健身操、踏板操、尊巴等各种健身舞蹈课程。",
				"id": "331",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/19/f5826f40-c355-4087-9fdf-f7b7ba518c1e.jpg",
				"title": "零距离健身连锁（江北店）",
				"lat": "23.107773279061924",
				"createDate": "2016-07-26"
			},
			{
				"address": "惠州市惠城区桥西街道麦地路30号印象麦地2楼",
				"distance": "109.2",
				"phone": "0752-2279028",
				"log": "114.40736916843329",
				"toPhone": "",
				"companyName": "乐动健身（麦地）",
				"shortDesc": "乐动健身引进国际先进的健身会所的经营理念和管理模式，致力于打造“科学、健康、快乐”的健身氛围。",
				"id": "442",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/28/9a4540c4-3c9f-498d-87c7-6c2a062422f2.png",
				"title": "乐动健身（麦地）",
				"lat": "23.074871831872482",
				"createDate": "2016-08-01"
			},
			{
				"address": "惠州市惠城区麦地东路3号东江明珠写字楼4层",
				"distance": "109.3",
				"phone": "13413067586",
				"log": "114.40758024637036",
				"toPhone": "",
				"companyName": "利美健身俱乐部LE BEAUTY（麦地）",
				"shortDesc": "【生活一家会员专享：8.7折优惠】利美健身俱乐部：夏天就在健身房健康的流汗吧",
				"id": "420",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/27/8607abc3-db4f-4c7f-8631-c1b054a95b55.jpg",
				"title": "利美健身俱乐部LE BEAUTY（麦地）",
				"lat": "23.068382049943555",
				"createDate": "2016-07-27"
			},
			{
				"address": "惠城区下埔滨江公园城市一号四楼（3B）",
				"distance": "109.5",
				"phone": "13414707439",
				"log": "114.41071850749569",
				"toPhone": "",
				"companyName": "零距离国际健身连锁（下埔）",
				"shortDesc": "【生活一家会员专享：年卡9.5折送精美礼品一份】零距离健身连锁入驻江宁爱涛，打造高品质生活馆\r\n服务项目：瑜伽系列课程：哈达瑜伽、流瑜伽、瘦身瑜伽、热瑜伽、普拉提、养生瑜伽等；有氧操课程有拉丁、踏板、街舞、爵士、肚皮舞、战斗搏击、国标、影视炫舞、动感单车等课程，有氧运动区的所有组合机器及无氧运动区的所有器械，同时配有中、高级私人教练，每天开设各种类型的训练课程，桑拿淋浴，免费体能测试和健身指导。",
				"id": "188",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/5/cfe6b89b-9f70-4001-9c3a-319348b62444.jpg",
				"title": "零距离国际健身连锁（下埔）",
				"lat": "23.083462079147573",
				"createDate": "2016-07-06"
			},
			{
				"address": "惠州市惠城区麦地路与横江三路交汇数码商业街南段三楼儿童世界，金太阳儿童游乐场",
				"distance": "109.5",
				"phone": "15018885782",
				"log": "114.41105921481903",
				"toPhone": "",
				"companyName": "金太阳儿童乐园（数码商业街）",
				"shortDesc": "【生活一家会员专享：9.9元单人单次沙池】\r\n孩子的世界孩子的乐园",
				"id": "1052",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/17/ef3d5be7-1b26-49b6-aa0e-bd3c9ba76eed.jpg",
				"title": "金太阳儿童乐园（数码商业街）",
				"lat": "23.07840034458717",
				"createDate": "2017-01-17"
			},
			{
				"address": "广东惠州丽日银座与天虹交汇处",
				"distance": "109.7",
				"phone": "13502237179",
				"log": "114.41216738596346",
				"toPhone": "",
				"companyName": "零距离健身房（天虹店）",
				"shortDesc": "【生活一家会员专享：办理年卡享9.5折优惠】\r\n会所经营项目：动感单车、高级私家影院、韩式汗蒸、高温瑜珈、台球、兵兵球、篮球、羽毛球、国际标准擂台、武道区、托幼区、室内高尔夫、普拉提、肚皮舞、爵士舞、拉丁舞、民族舞、形体芭蕾、健身操、搏击操、街舞、踏板舞、瑜珈球操、有氧冲击、印度舞、巴西热舞等舞蹈操课。",
				"id": "337",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/20/05ef8c68-fd46-497c-b487-3ac58c665cb8.jpg",
				"title": "零距离健身房（天虹店）",
				"lat": "23.075025528605824",
				"createDate": "2016-07-20"
			},
			{
				"address": "惠州市惠城区麦地路73-1号(安鸿大厦4楼)，天天好健身俱乐部",
				"distance": "110.0",
				"phone": "18200765941",
				"log": "114.41520973705511",
				"toPhone": "",
				"companyName": "天天好国际健身俱乐部（麦地）",
				"shortDesc": "【生活一家会员专享：跆拳道享5折，年卡享3.5折，月卡300元，次卡100次，免费体验24小时】\r\n天天好健身会所结合休闲与运动一体化，设施齐全，舒适宽敞的客服区以及天然火山石的排毒干蒸房，器械均采用顶级品牌健身产品，拥有经验丰富的专业健身教练团队，课程丰富",
				"id": "716",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/6/4aa6c7fd-f093-4ebc-af8f-41342f1457cf.jpg",
				"title": "天天好国际健身俱乐部（麦地）",
				"lat": "23.077810227677606",
				"createDate": "2016-09-06"
			},
			{
				"address": "惠城区佳兆业一期三楼",
				"distance": "110.0",
				"phone": "13531709120",
				"log": "114.41927232479334",
				"toPhone": "",
				"companyName": "one two one健身会所（佳兆业）",
				"shortDesc": "【生活一家专享优惠六折 年卡＋300送一年送游泳，每日前10名送运动套装，美容券等，请致电：13531709120享优惠】ONE TWO ONE是一家集健身、美容、SPA、纤体为一体的健身会所，位于港汇新天地五楼的会所超过4600平米的场所面积在惠州首屈一指，拥有“惠美力健身乐部”和“新懿健身美容会”两大品牌，共有五家大型“Wellness”连锁健康生活方式会所，为客户提供全面专业健康美体解决方案。",
				"id": "236",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/9/33cbaf05-6041-4c5c-82fa-41fb03c4f40a.jpg",
				"title": "one two one健身会所（佳兆业）",
				"lat": "23.115023798232464",
				"createDate": "2016-07-12"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 14,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=382",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		]
	}
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=388",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市惠城区河南岸螺仔湖三路75号施華洛婚纱",
				"distance": "80.4",
				"phone": "07523109088",
				"log": "114.1304094006894",
				"toPhone": "13729331730",
				"companyName": "施华洛婚纱（河南岸）",
				"shortDesc": "【生活一家会员专享：婚纱套系特惠价2988-3288元(原价5976-6576元)送品牌电饭煲、全家福套系688元（原价1398元）、特价套系99元】\r\n这一次邀请你真的无法‘拒绝’历史见证品牌品质铸就辉煌‘施華洛高端婚纱摄影会馆’只为记录您俩的完美爱情到店了解",
				"id": "281",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/14/7be05faf-cd9e-4eff-b695-5bf44ffa147f.jpg",
				"title": "施华洛婚纱（河南岸）",
				"lat": "23.137728129945565",
				"createDate": "2016-12-13"
			},
			{
				"address": "广东省惠州市惠城区惠风三路，俏宝贝摄影旗舰店",
				"distance": "104.4",
				"phone": "13428083302",
				"log": "114.35347972749271",
				"toPhone": "",
				"companyName": "俏宝贝摄影旗舰店",
				"shortDesc": "【生活一家会员专享：消费享9折优惠】",
				"id": "888",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/24/0e9fedad-2e94-4d25-b434-db9e54c7215e.jpg",
				"title": "俏宝贝摄影旗舰店",
				"lat": "23.028630355738457",
				"createDate": "2016-10-24"
			},
			{
				"address": "惠州市惠城区西湖步行街中山西路34号金城大厦9楼（阿依莲楼上）",
				"distance": "108.7",
				"phone": "0752-7385990",
				"log": "114.40384919044685",
				"toPhone": "",
				"companyName": "时光纪摄影（女人日记店）",
				"shortDesc": "【生活一家会员专享；消费享商家优惠】\r\n\r\n时光纪摄影专业定制个性时尚婚纱、婚礼、录像、艺术写真、商业广告等摄影服务，提供个性化、高品质的婚纱摄影服务。当婚纱照在流行被复制、叠加、堆砌的今天，时光纪摄影相信每对新人都是与众不同的，时光纪不断吸纳最新的潮流资讯、趣味的拍摄手法及独特的视角，并加以专业化、细致化，特别是对幸福自然的情绪的捕捉，惹得了众多新人们的青睐！时光纪坚信越纯粹，越唯一，越值得珍惜 ，聆听来自你我心底的声音，做最真实的自己。当浮华褪尽幸福上场，时光纪给你最纯粹的感动！",
				"id": "842",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/10/45bbdcb5-ae70-4264-94e2-b33237174415.jpg",
				"title": "时光纪摄影（女人日记店）",
				"lat": "23.092500797538765",
				"createDate": "2016-10-10"
			},
			{
				"address": "惠城区步行街金城大厦10楼唯一视觉",
				"distance": "108.7",
				"phone": "07522226080",
				"log": "114.40384819409653",
				"toPhone": "",
				"companyName": "唯一视觉摄影会所（桥西）",
				"shortDesc": "【生活一家会员专享：写真套餐享团购价】\r\n\r\n唯一视觉摄影会所，DIY定制式摄影服装、造型 、拍摄、全程定制打造新时尚摄影大片，强调画面意境与感觉。唯一摄影以独特时尚的气质吸引了众多时尚人士的关注。 专业技术、独到的审美视觉为追求生活品味的人士创造了诠释自我的平台。",
				"id": "261",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/13/77a39217-7fbf-413b-82b0-d9cdac1843e4.jpg",
				"title": "唯一视觉摄影会所（桥西）",
				"lat": "23.092501784311256",
				"createDate": "2016-09-02"
			},
			{
				"address": "惠州市西湖步行街中山西路21号凤凰天商场一楼28号档 ",
				"distance": "108.7",
				"phone": "15913855511",
				"log": "114.40427838098604",
				"toPhone": "",
				"companyName": "时光纪摄影（凤凰天店）",
				"shortDesc": "【生活一家会员专享：消费享商家优惠】\r\n\r\n时光纪摄影专业定制个性时尚婚纱、婚礼、录像、艺术写真、商业广告等摄影服务，提供个性化、高品质的婚纱摄影服务。当婚纱照在流行被复制、叠加、堆砌的今天，时光纪摄影相信每对新人都是与众不同的，时光纪不断吸纳最新的潮流资讯、趣味的拍摄手法及独特的视角，并加以专业化、细致化，特别是对幸福自然的情绪的捕捉，惹得了众多新人们的青睐！时光纪坚信越纯粹，越唯一，越值得珍惜 ，聆听来自你我心底的声音，做最真实的自己。当浮华褪尽幸福上场，时光纪给你最纯粹的感动！",
				"id": "841",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/10/84db146c-b9c3-4a70-ac6a-c7b89e212efc.jpg",
				"title": "时光纪摄影（凤凰天店）",
				"lat": "23.0928695781635",
				"createDate": "2016-10-10"
			},
			{
				"address": "惠州市惠城区麦地路59号，惠州吸引力国际婚纱摄影",
				"distance": "109.6",
				"phone": "07527210898",
				"log": "114.41158749118318",
				"toPhone": "13825405046 ",
				"companyName": "吸引力国际婚纱（麦地）",
				"shortDesc": "【生活一家会员专享：全部套餐5折，再送千元大礼包】\r\n惠州吸引力国际婚纱是中国蓝派婚纱摄影的创始者，以天空、海洋、花海为主要基调，以爱的关怀服务每一位新人。13年的积淀，吸引力婚纱始终以“美学、创新、沟通”的经营与服务理念为新人提供极致作品和精品服务。",
				"id": "137",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/6/653d9502-bfce-4944-8d5a-2ee43af4cc99.jpg",
				"title": "吸引力国际婚纱（麦地）",
				"lat": "23.07592230964383",
				"createDate": "2016-09-06"
			},
			{
				"address": "惠州市惠城区下埔路14号,华商大厦,14楼1403室",
				"distance": "109.8",
				"phone": "07522106690",
				"log": "114.41378959608333",
				"toPhone": "13380665600",
				"companyName": "宝宝秀·儿童摄影工作室（下埔）",
				"shortDesc": "【生活一家会员专享：套餐一388元(原价988)；套餐二499元(原价1388)；套餐三268元(原价688)】\r\n专业儿童摄影工作室",
				"id": "634",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/10/0d305f39-d8a3-4e2a-b434-238b6024d890.JPG",
				"title": "宝宝秀·儿童摄影工作室（下埔）",
				"lat": "23.0808603558478",
				"createDate": "2016-08-10"
			},
			{
				"address": "广东省惠州市惠城区下埔南三街8号侨裕楼B栋门店",
				"distance": "109.9",
				"phone": "15113226300",
				"log": "114.41434967061397",
				"toPhone": "",
				"companyName": "非度婚礼摄像馆（下埔）",
				"shortDesc": "【生活一家会员专享：全套餐8折】",
				"id": "951",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/5/47d0f8ef-6872-47ea-9724-4b30334be163.jpg",
				"title": "非度婚礼摄像馆（下埔）",
				"lat": "23.078070135754327",
				"createDate": "2016-11-05"
			},
			{
				"address": "惠城区下埔惠沙堤10-3号",
				"distance": "109.9",
				"phone": "0752-2509716",
				"log": "114.41470566287072",
				"toPhone": "",
				"companyName": "漫摄影Studio（下埔）",
				"shortDesc": "【生活一家会员专享：到店消费享9.5折】\r\n\r\n漫 Studio 定制人像摄影 全球旅拍 婚礼策划 活动统筹。你来了真好，不然我总担心你会错过我们。",
				"id": "966",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/13/328a942c-86ae-4ab2-8eaa-b55c35a18acc.jpg",
				"title": "漫摄影Studio（下埔）",
				"lat": "23.080938186737257",
				"createDate": "2016-11-13"
			},
			{
				"address": "惠州市惠城区东湖西路156号向日葵商业中心,6楼向日葵宝宝摄影",
				"distance": "111.2",
				"phone": "07522257611",
				"log": "114.42809014188177",
				"toPhone": "18825472509",
				"companyName": "向日葵儿童摄影（东平云端店）",
				"shortDesc": "【生活一家会员专享：享8.5折优惠，转发集满18个赞即送188宝宝拍摄套餐】\r\n向日葵的风格：以简单的形式凝固真实的瞬间\r\n在向日葵眼中，孩子没有美丑之分，他们都是可爱至极，看客片，您所看到的，就是我们心中所想的，为每一位宝宝记录下张张珍贵的精彩的瞬间",
				"id": "639",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/13/0cbc0049-0b71-40ed-a5cf-d510abd27444.jpg",
				"title": "向日葵儿童摄影（东平云端店）",
				"lat": "23.08667979121486",
				"createDate": "2016-11-18"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 11,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=386",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市博罗县罗阳镇商业东街271号，玫蘭坊花艺",
				"distance": "97.7",
				"phone": "15916371235",
				"log": "114.30054029247545",
				"toPhone": "",
				"companyName": "玫蘭坊花艺（罗阳）",
				"shortDesc": "【生活一家会员专享：9折优惠】\r\n主营：鲜花、生日花束、情人花束、鲜花速递、鲜花快递、开业花篮、开业花牌、庆典鲜花、婚庆鲜花、会议鲜花、颁奖鲜花品种齐全、价格合理",
				"id": "1009",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/13/abd2af09-0466-4f5d-a24f-326e85f5c1e4.jpg",
				"title": "玫蘭坊花艺（罗阳）",
				"lat": "23.17199044410704",
				"createDate": "2016-12-13"
			},
			{
				"address": "惠州市水门街直街16号",
				"distance": "108.5",
				"phone": "15119004448",
				"log": "114.40411872936058",
				"toPhone": "",
				"companyName": "心悦鲜花礼仪策划（水门）",
				"shortDesc": "【生活一家会员专享：消费享8.8折优惠】",
				"id": "603",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/5/e80f9158-28d1-4b6a-a799-3f4af67eee95.jpg",
				"title": "心悦鲜花礼仪策划（水门）",
				"lat": "23.107773279061924",
				"createDate": "2016-08-05"
			},
			{
				"address": "惠城区桥西街道后所街23号",
				"distance": "108.6",
				"phone": "18316406858",
				"log": "114.40283012007694",
				"toPhone": "",
				"companyName": "原野花坊 （桥西）",
				"shortDesc": "【生活一家会员专享：消费享8.8折优惠】",
				"id": "427",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/27/e737d4ec-36f3-492f-a2db-88d348200ed6.png",
				"title": "原野花坊 （桥西）",
				"lat": "23.084145471410324",
				"createDate": "2016-07-27"
			},
			{
				"address": "惠州市惠城区水门路167号，花雨轩花艺",
				"distance": "108.8",
				"phone": "13414576699",
				"log": "114.40477994835709",
				"toPhone": "",
				"companyName": "花雨轩花艺（水门路）",
				"shortDesc": "【生活一家会员专享：预定9折优惠，市区内包送】\r\n花雨轩花艺：开业花篮、送人花束、绿化盆栽、婚礼彩车、艺术插花、庆典拱门",
				"id": "987",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/30/a5dd4313-495c-465d-a607-d832c33c2fa4.jpg",
				"title": "花雨轩花艺（水门路）",
				"lat": "23.08705114068707",
				"createDate": "2016-11-30"
			},
			{
				"address": "惠州市惠城区横江四路6号，百花轩花店",
				"distance": "109.6",
				"phone": "13669552606",
				"log": "114.41184893261524",
				"toPhone": "",
				"companyName": "百花轩·花店（数码街）",
				"shortDesc": "【生活一家会员专享：满50减10，满100减20，以此类推，节假日除外】\r\n经营范围：开业花篮，送人花束，绿化盆栽，婚礼彩车，艺术插花，庆典拱门 ",
				"id": "1051",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/14/e8c12053-52b1-4616-8735-c3ea8ff6f758.jpg",
				"title": "百花轩·花店（数码街）",
				"lat": "23.078280432478657",
				"createDate": "2017-01-14"
			},
			{
				"address": "惠城区桥东路11号华侨中学对面",
				"distance": "109.6",
				"phone": "1348058604",
				"log": "114.41297914397278",
				"toPhone": "",
				"companyName": "晶晶花店（桥东）",
				"shortDesc": "【生活一家会员专享：全场8折优惠】",
				"id": "614",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/6/953840cb-f916-4d3f-802d-6975e5d9b66b.png",
				"title": "晶晶花店（桥东）",
				"lat": "23.088800550237696",
				"createDate": "2016-08-06"
			},
			{
				"address": "广东省惠州市惠城区下埔一路7-6号",
				"distance": "109.7",
				"phone": "15875245272 ",
				"log": "114.41269996136623",
				"toPhone": "",
				"companyName": "花满楼花店（下埔）",
				"shortDesc": "【生活一家会员专享：消费享8.5折优惠】\r\n\r\n主营：花篮花牌 结婚插花 会议布置 丝印条幅\r\n不干胶 广告气球 彩球装饰 开业典礼 有机工艺 格式印刷 \r\n【联系电话】 15875245272 / 15627369361\r\n",
				"id": "817",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/26/11ce2e52-bfbb-4448-9fed-345c5cc23ac6.jpg",
				"title": "花满楼花店（下埔）",
				"lat": "23.078830447546757",
				"createDate": "2016-10-17"
			},
			{
				"address": "惠州市麦地路58号风尚国际大厦11F ",
				"distance": "109.7",
				"phone": "0752-2508937",
				"log": "114.4125998653976",
				"toPhone": "18320458484",
				"companyName": "品创策划（麦地）",
				"shortDesc": "惠州市品创实业有限公司成立于2005年，座落在惠州市麦科特大道，我们是一家集广告、财税、保洁服务的综合性实业公司。 自2005年成立至今，经过公司全体员工共同的努力，并执着于“专业成就价值，品质创造未来，诚信共赢天下”的企业理念，以及众多客户的支持，品创得到了长足的发展。 我们公司长期坚持“团结、求实、创新、进取、诚信、高效”的经营理念，以创新和服务为宗旨。我们视自己的客户经营合作者，专心专注为客户提供超值服务，为推动客户的整体增值而不懈努力。\r\n",
				"id": "661",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/24/d1887562-1fdf-4ddf-9376-49038aba71a0.jpg",
				"title": "品创策划（麦地）",
				"lat": "23.075350537112893",
				"createDate": "2016-08-24"
			},
			{
				"address": "广东省惠州市惠城区下埔路12-17号(笃记楼旁)",
				"distance": "109.7",
				"phone": "13202338817",
				"log": "114.41329009622513",
				"toPhone": "",
				"companyName": "温馨花店（下埔）",
				"shortDesc": "【生活一家会员专享：提前预定享受9折优惠】\r\n\r\n主营：志庆花篮、礼仪用品、结婚花车、花球襟花、生日礼花、礼物包装、艺术插花、新娘花饰、各类志庆宣传标语，宾馆酒楼公司摆设租花。",
				"id": "869",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/19/8177c35c-e559-4db0-b10f-9406af338d8b.jpg",
				"title": "温馨花店（下埔）",
				"lat": "23.08068039003269",
				"createDate": "2016-10-19"
			},
			{
				"address": "惠州市惠城区河南岸公安新村北门1-3号，新创意印刷广告",
				"distance": "109.8",
				"phone": "13360848598",
				"log": "114.41244041916895",
				"toPhone": "",
				"companyName": "新创意印刷广告（河南岸）",
				"shortDesc": "【生活一家会员专享：自有工厂 价格最低 欢迎比价】\r\n主营：印刷、喷绘、招牌、灯箱、水晶字、发光字、显示屏、LED灯等",
				"id": "1025",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/19/ad0531b1-0fd4-4637-8aca-b1d9c49b92e9.jpg",
				"title": "新创意印刷广告（河南岸）",
				"lat": "23.070342321624025",
				"createDate": "2017-01-19"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 3,
		"totalRecord": 24,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=389",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "",
				"distance": "",
				"phone": "4008903333",
				"log": "",
				"toPhone": "",
				"companyName": "互联网100教育",
				"shortDesc": "100教育是一家专注于初高中一对一辅导的互联网教育机构，是美国纳斯达克上市公司欢聚时代旗下教育品牌，董事长是小米公司的雷军，欢聚时代副总裁刘豫军任负责人",
				"id": "58",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/12/95c1ef9f-cbf2-407f-92ee-6ffc18946786.jpg,http://www.gdshyj.com/shoppic/2016/5/12/a3646737-f31c-4d5f-9bf9-3660f47f4ab2.jpg",
				"title": "100教育",
				"lat": "",
				"createDate": "2016-05-18"
			},
			{
				"address": "博罗县罗阳镇东森华庭公园东路20-22号（华桂园正门对面）",
				"distance": "97.9",
				"phone": "0752-6668819",
				"log": "114.30233993479513",
				"toPhone": "13068201200",
				"companyName": "舞音国际艺术培训中心（博罗）",
				"shortDesc": "【生活一家会员专享：一人报名8.8折、两人报名7.8折。全部项目均可折扣（具体项目有民族少儿舞蹈、钢琴、吉他、友克里里、瑜伽、美术）】",
				"id": "814",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/26/92195c65-97b0-4f71-a3b6-eb7d218a3c09.jpg",
				"title": "舞音国际艺术培训中心（博罗）",
				"lat": "23.17304970179923",
				"createDate": "2016-11-11"
			},
			{
				"address": "惠州市仲恺高新区和畅五路（西）7号",
				"distance": "104.6",
				"phone": "13928301257",
				"log": "114.35439849082033",
				"toPhone": "",
				"companyName": "源诚驾校（仲恺康城四季时尚招生点）",
				"shortDesc": "【生活一家会员专享：驾驶证业务9折优惠】\r\n\r\n专业：大、小汽车驾驶员、摩托车驾驶员技术培训\r\n业务范围：驾驶业务、换证、迁证、补证、车辆年审、车辆过户、回收二手车等业务\r\n本公司训练主场：陈江大光头村（内设一万平方综合标准模拟考试训练基地）\r\n辅场：小金口高依村、古塘坳训练场\r\n",
				"id": "816",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/26/90a18018-3bfb-4813-97ce-c5410fe51b5d.jpg",
				"title": "源诚驾校（仲恺康城四季时尚招生点）",
				"lat": "23.02384491776831",
				"createDate": "2016-11-11"
			},
			{
				"address": "惠城区万林湖别墅区碧林苑B10-102室",
				"distance": "107.0",
				"phone": "18688300761",
				"log": "114.38391998107122",
				"toPhone": "",
				"companyName": "精鹰书画培训馆（万林湖）",
				"shortDesc": "【生活一家会员专享：9折优惠】 开设课程：美术、书法、陶艺、艺术创想",
				"id": "939",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/3/acb05009-bf39-4d67-80fb-2083dbb94a6a.jpg",
				"title": "精鹰书画培训馆（万林湖）",
				"lat": "23.06136995991687",
				"createDate": "2016-11-11"
			},
			{
				"address": "惠城区鹅岭南路104号金辉新苑乐新居1楼13-14号铺",
				"distance": "108.1",
				"phone": "18688300761",
				"log": "114.39460038983621",
				"toPhone": "",
				"companyName": "精鹰书画培训馆（鹅岭）",
				"shortDesc": "【生活一家会员专享：9折优惠】 开设课程：美术、书法、陶艺、艺术创想",
				"id": "944",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/3/71c4faf8-af36-493a-8875-3b4f8d4a1132.jpg",
				"title": "精鹰书画培训馆（鹅岭）",
				"lat": "23.058300212774242",
				"createDate": "2016-11-11"
			},
			{
				"address": "惠州市仲恺大道惠环段303号富川瑞园7栋113-114商铺和音琴行",
				"distance": "108.2",
				"phone": "18688300761",
				"log": "114.39520044092515",
				"toPhone": "",
				"companyName": "精鹰书画培训馆（仲恺）",
				"shortDesc": "【生活一家会员专享：9折优惠】 开设课程：美术、书法、陶艺、艺术创想",
				"id": "941",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/3/4478cc78-b3fc-421a-be1a-217592bc4f43.jpg",
				"title": "精鹰书画培训馆（仲恺）",
				"lat": "23.058045703300664",
				"createDate": "2016-11-11"
			},
			{
				"address": "惠城区三新北路6号法律服务创意园广东达伦律师事务",
				"distance": "108.8",
				"phone": "07522635619",
				"log": "114.40681982489635",
				"toPhone": "2635629 ",
				"companyName": "广东达伦律师事务",
				"shortDesc": "广东达伦律师事务所是惠州地区首家以“公司化管理、团队式运作”为经营模式，以“求真务实，开拓创新、锐意进取”为工作作风，以“战略合作、资源整合、实现共赢”为价值取向，致力于打造为专业的法务外包“供应商”，从而优化企业管理，使企业专注于主营业务，以增强竞争实力。",
				"id": "71",
				"pic": "http://www.gdshyj.com/shoppic/2016/5/13/46bf1447-f949-4312-9db3-045a142d2988.jpg",
				"title": "广东达伦律师事务",
				"lat": "23.114632847965694",
				"createDate": "2016-06-07"
			},
			{
				"address": "惠城区小金口金宝山庄南苑商铺39号铺彩虹培训中心",
				"distance": "108.8",
				"phone": "18688300761",
				"log": "114.40918956225053",
				"toPhone": "",
				"companyName": "精鹰书画培训馆（小金口）",
				"shortDesc": "【生活一家会员专享：9折优惠】 开设课程：美术、书法、陶艺、艺术创想",
				"id": "943",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/3/c4b322fd-9cdc-41ed-9a1e-f0214534ef77.jpg",
				"title": "精鹰书画培训馆（小金口）",
				"lat": "23.18917048355733",
				"createDate": "2016-11-11"
			},
			{
				"address": "惠州市惠城区水门路26号精鹰书画培训馆",
				"distance": "108.8",
				"phone": "18688300761",
				"log": "114.40515007250248",
				"toPhone": "",
				"companyName": "精鹰书画培训馆（水门路）",
				"shortDesc": "【生活一家会员专享：9折优惠】\r\n开设课程：美术、书法、陶艺、艺术创想",
				"id": "718",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/3/56ba7046-73c5-48ba-9fcd-85f4b2a2a352.jpg",
				"title": "精鹰书画培训馆（水门路）",
				"lat": "23.089550242495992",
				"createDate": "2016-11-11"
			},
			{
				"address": "惠城区江北金裕碧水湾金辉苑206号铺智慧谷教育",
				"distance": "109.0",
				"phone": "18688300761",
				"log": "114.40794010673277",
				"toPhone": "",
				"companyName": "精鹰书画培训馆（江北）",
				"shortDesc": "【生活一家会员专享：9折优惠】 开设课程：美术、书法、陶艺、艺术创想",
				"id": "942",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/3/e81fa79d-6b82-4155-bd83-0e732a13a17e.jpg",
				"title": "精鹰书画培训馆（江北）",
				"lat": "23.105370621982505",
				"createDate": "2016-11-11"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 3,
		"totalRecord": 21,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mbussinfo!list.action?pageNum=1&log=113.3526&lat=23.180556&categoryId=392",
	"leftNavUrl": "http://www.gdshyj.com/shop/mcategory!list.action?type=7",
	"scrollImg": "http://www.gdshyj.com/shop/mproduct!list.action?productType=7&type=7&advertType=2",
	"msg": "",
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"scrollImg": [
			{
				"id": "26",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/25/f1ddcdf8-cfa5-4fa5-8587-2e36b6f6f1af.jpg",
				"title": "趣道贡茶",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E8%B6%A3%E9%81%93&lat=23.083464&log=114.408328",
				"createDate": "2016-06-25"
			},
			{
				"id": "30",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/e231c3ae-0280-4533-b5b6-d02ec6db35e7.jpg",
				"title": "丝域",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E4%B8%9D%E5%9F%9F&lat=23.083739&log=114.408386",
				"createDate": "2016-07-16"
			},
			{
				"id": "34",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/27/4d2ed21a-78a6-4168-a384-3287b6e8612b.jpg",
				"title": "香港祥兴茶餐厅",
				"url": "http://www.gdshyj.com/shop/webapp/index/house/search_result.action?searchKey=%E9%A6%99%E6%B8%AF%E7%A5%A5%E5%85%B4&lat=23.083563&log=114.408341",
				"createDate": "2016-10-27"
			}
		],
		"leftNav": [
			{
				"id": "188",
				"title": "地产"
			},
			{
				"id": "189",
				"title": "装饰家居"
			},
			{
				"id": "258",
				"title": "汽车"
			},
			{
				"id": "259",
				"title": "金融财税"
			},
			{
				"id": "260",
				"title": "酒店"
			},
			{
				"id": "261",
				"title": "餐饮"
			},
			{
				"id": "263",
				"title": "夜生活"
			},
			{
				"id": "381",
				"title": "美体休闲"
			},
			{
				"id": "382",
				"title": "专卖"
			},
			{
				"id": "383",
				"title": "茶艺收藏"
			},
			{
				"id": "384",
				"title": "旅游"
			},
			{
				"id": "385",
				"title": "体育保健"
			},
			{
				"id": "386",
				"title": "广告花木"
			},
			{
				"id": "388",
				"title": "婚纱摄影"
			},
			{
				"id": "389",
				"title": "教育培训"
			},
			{
				"id": "392",
				"title": "其它"
			}
		],
		"pageList": [
			{
				"address": "惠州市惠城区红花湖路34号",
				"distance": "106.7",
				"phone": "13680868705",
				"log": "114.38276974255925",
				"toPhone": "",
				"companyName": "德兴自行车（红花湖）",
				"shortDesc": "【生活一家会员专享：四人同行一人免费(车只限普通山地车)】\r\n主营：自行车租售",
				"id": "1018",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/15/13e6c070-6dba-4d7c-ab3d-d115c7ef7eef.jpg",
				"title": "德兴自行车（红花湖）",
				"lat": "23.07795943820223",
				"createDate": "2016-12-15"
			},
			{
				"address": "惠州市惠城区红花湖路70号，广兴车行",
				"distance": "106.7",
				"phone": " 13516663389",
				"log": "114.38276930633104",
				"toPhone": "",
				"companyName": "广兴车行（红花湖）",
				"shortDesc": "【生活一家会员专享：四人同行一人免费(车只限普通山地车)】\r\n主营：自行车租售",
				"id": "1019",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/15/39e2aec4-a305-49e2-971a-c62d9662e5de.jpg",
				"title": "广兴车行（红花湖）",
				"lat": "23.07685735061164",
				"createDate": "2016-12-15"
			},
			{
				"address": "惠州市惠城区下角新更塘小区",
				"distance": "106.9",
				"phone": "13692802237",
				"log": "114.38774210688052",
				"toPhone": "",
				"companyName": "惠州微哆客（下角）",
				"shortDesc": "【生活一家会员专享：微信公众号搭建9折优惠】惠州市微哆客科技服务有限公司是惠州本地一家专业从事个人微信号和微信公众平台的服务商，我们秉承“真诚、专业、认真、双赢”的理念与各企事业单位合作，主营业务范围包括微信公众号注册、认证、开发及运营推广的新型企业，同时业务范围包括微店、商城的搭建运营、U盘等存储介质的数据恢复、广告制作宣传、产品/宣传片/婚礼拍摄、资源整合（惠州百事通平台）等电商化服务......真诚的服务、实惠的价格、专业的技术期待与广大客户合作、交流",
				"id": "400",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/26/2a2e6df0-74e9-4afa-ac88-098e7d274a83.png",
				"title": "惠州微哆客（下角）",
				"lat": "23.1078528275827",
				"createDate": "2016-07-26"
			},
			{
				"address": "惠州市惠城区鹅岭西路31号百利通广场幸福魔方一层3、10号铺(上排沃尔玛旁)，派托宠物",
				"distance": "107.1",
				"phone": "0752-2115118",
				"log": "114.38680002953201",
				"toPhone": "13531733711",
				"companyName": "派托宠物（鹅岭）",
				"shortDesc": "派托宠物养护中心是一群热爱宠物、追求生活品质的年轻人自立创下的品牌，用心打造惠州专业美容、健康食品及用品、放心寄养、优质宠品、宠物知识平台以及休闲娱乐于一体的宠物场所。专业宠物护理人员定时为爱宠们进行健康及心理评估，为爱宠及爱宠的主人提供健康、舒适、优质的高端宠物场所。\r\n邮箱：1114637@qq.com\r\n营业时间：10:00-20:00\r\nQQ&微信：1114637",
				"id": "741",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/8/14e24056-198a-4262-be4e-cc1950f1d0fa.jpg",
				"title": "派托宠物（鹅岭）",
				"lat": "23.078880347932817",
				"createDate": "2016-09-08"
			},
			{
				"address": "惠州市博罗县罗阳镇四角楼鹏泰购物广场一楼",
				"distance": "107.3",
				"phone": "13138349178",
				"log": "114.39217607372763",
				"toPhone": "",
				"companyName": "VIVO专卖店（四角楼）",
				"shortDesc": "【生活一家会员专享：购手机返300钱包】",
				"id": "836",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/30/76aab5ec-2c72-4c55-ae96-1e3945756f80.jpg",
				"title": "VIVO专卖店（四角楼）",
				"lat": "23.10697043873037",
				"createDate": "2016-09-30"
			},
			{
				"address": "惠城区江北街道海伦堡一期快迪便利店",
				"distance": "109.3",
				"phone": "15219981688",
				"log": "114.41280920750847",
				"toPhone": "",
				"companyName": "快迪便利店（江北）",
				"shortDesc": "【生活一家会员专享：满一百元免费做摇摇车，满两百元打九折】",
				"id": "618",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/6/73bcfa5c-8e73-4759-952b-6b4c4b9efb5b.jpg",
				"title": "快迪便利店（江北）",
				"lat": "23.119929899957672",
				"createDate": "2016-08-08"
			},
			{
				"address": "惠州市海燕玉兰花园北门，悠游婴童游泳馆",
				"distance": "109.8",
				"phone": "0752-2283998",
				"log": "114.41233158809189",
				"toPhone": "15913868508",
				"companyName": "悠游婴童游泳馆（麦地）",
				"shortDesc": "【生活一家会员专享：婴儿池33元（原价68元）、大童池28元（原价58元），现开卡或续卡游泳套餐即可领价值168元的摄影抵用券。\r\n抵用券用途：免费帮制作8*10的油画框摆台或在摄影馆当作套餐现金券使用。】\r\n悠游婴童恒温游泳馆优惠专场，这里有最实惠最优惠的价格，优惠一网打尽！同时，还有多种团购套餐供您比较、挑选，折扣超低，性价比高，帮您省钱省心。【生活一家】精心打造众多独特精品优惠产品的同时，以最优价格回馈用户，让您用最少的钱体验最好玩、最新鲜的生活方式。",
				"id": "726",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/19/5db61f0a-16bc-4744-8ee9-241f3b025c76.jpg",
				"title": "悠游婴童游泳馆（麦地）",
				"lat": "23.06956357194249",
				"createDate": "2016-12-04"
			},
			{
				"address": "惠州市惠城区下埔南二街4-11号，JJ数码",
				"distance": "109.9",
				"phone": "13414630061",
				"log": "114.41452460446625",
				"toPhone": "",
				"companyName": "JJ数码·爆屏维修（下埔）",
				"shortDesc": "【生活一家会员专享：维修9折优惠】\r\n专业爆屏修复，苹果，华为，小米，魅族，oppo，乐视等等，专业性、价格实惠已经毋容置疑",
				"id": "715",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/6/166258fc-3bf0-4d3d-8119-2fab6110c7be.jpg",
				"title": "JJ数码·爆屏维修（下埔）",
				"lat": "23.0804862465322",
				"createDate": "2016-09-06"
			},
			{
				"address": "惠州市惠城区江北佳兆业广场一楼北门",
				"distance": "110.0",
				"phone": "15018097374",
				"log": "114.41887248161963",
				"toPhone": "",
				"companyName": "战界9DVR虚拟现实体验馆（江北佳兆业）",
				"shortDesc": "【生活一家会员专享：7折优惠】9DVR体验馆核心结构部分：9DVR技术（显示技术:3D立体画面、125°仿生视场角，1080P双眼独立高清分辨率，特定制9DVR头盔，360°头部跟踪。、多人互动、3轴6轴数控机械设备、仿真动漫制作等技术巧妙结合于一体的创新型项目）观众可以将自己“沉浸”到各种梦境之中，仿佛拥有了哆啦A梦的任意门，随意进入到另一个从未到过的世界，享受身临其境般的体验，如虚拟大摆锤过山车、死亡扳机、模拟飞行、太空漫游、侏罗纪历险等。近几年全球流行3D/5D/7D影院，9D虚拟技术可以说又进入了一个新的世界。",
				"id": "526",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/3/6c32d2a6-c2d9-4de7-9193-1eb656a91a6a.jpg",
				"title": "战界9DVR虚拟现实体验馆（江北佳兆业）",
				"lat": "23.116569689315362",
				"createDate": "2016-08-03"
			},
			{
				"address": "广东省惠州市惠城区北四街5-16号",
				"distance": "110.0",
				"phone": "18688339068",
				"log": "114.41583923830717",
				"toPhone": "",
				"companyName": "阿旺达宠物（下埔）",
				"shortDesc": "阿旺达宠物，精致宠生活！",
				"id": "739",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/8/f5e5d265-b805-4835-a9b2-af46cb89216e.jpg",
				"title": "阿旺达宠物（下埔）",
				"lat": "23.081950210858192",
				"createDate": "2016-09-08"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 18,
		"updateTime": ""
	},
	"status": "0"
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = {
	"url": "http://www.gdshyj.com/shop/mproduct!list.action?pageNum=1&productType=2&advertType=5&type=2&bigCategoryId=232",
	"msg": "",
	"param": {
		"tagList": {},
		"parentTagList": [],
		"advertList": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		]
	},
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "269.0",
				"salesPrice": "199.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1608",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/cb0ab44f-8551-494e-976b-2ff85f95452a.jpg",
				"title": "苏泊尔豆浆机 DJ11B-W10豆浆机家用多功能全自动无网不锈钢",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/4f59a32b-ca3c-49cc-8f06-6c76c6476619.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/b4ac5978-800e-4ccd-9f89-cbb287cce4d6.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "259.0",
				"salesPrice": "199.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1607",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/faf6907c-53e7-4309-8c11-fb7133fbee20.jpg",
				"title": "苏泊尔电水壶 SWF17S10A电热水壶 304不锈钢电水壶保温烧水壶家用1.7L",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/7abaa808-ff00-45f4-988f-bec8303a9dab.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/e33e0d5d-c118-4e6e-b416-f622977a4c9c.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "159.0",
				"salesPrice": "119.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1606",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/927f4e03-50e9-4213-a2ce-1fdf30d53ca5.jpg",
				"title": "苏泊尔电水壶 SWF17S20A电热水壶304不锈钢保温双层烧水壶器家用",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/5cd98f16-6043-4c32-b5e4-d5de209c24ca.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/f74057f7-d1d1-4238-bde8-d9a628ffcae9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/00709c85-d225-46a3-b4f9-bdd1e44a9201.gif\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "179.0",
				"salesPrice": "99.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1605",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/b75ce1d8-d478-44ad-8f03-53c651f9d380.jpg",
				"title": "苏泊尔电水壶 SWF15S19A 双层防烫保温电水壶304不锈钢1.5升",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/def8eb40-b520-47d8-8049-84ed0d862946.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "399.0",
				"salesPrice": "299.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1604",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/71fdf70b-e4f7-4888-bf84-92fd6d439d0e.jpg",
				"title": "苏泊尔电磁炉SDHCB88T-210密集火 火力一键控制LTE抛光面板电磁炉",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/0d717da2-c41e-4d26-b897-d760cd8efb34.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "339.0",
				"salesPrice": "239.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1603",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/31697d22-4eec-46ba-b3cb-53a8d768c09c.jpg",
				"title": "苏泊尔电磁炉 SDHCB12T-210家用触摸大火力火锅电磁炉",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/804b66c7-e00d-43d8-a8c9-306a06bb77ca.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "259.0",
				"salesPrice": "179.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1602",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/9c4b1620-c813-4fee-a2b0-f27cd4c9b37d.jpg",
				"title": "苏泊尔电磁炉SDHCB11T-210触摸屏火锅特价正品全国联保村淘",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/8be0b662-98d6-45bb-a8b5-190f89643e7d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/ac4c45b5-38d7-4771-a86d-e5df88020b07.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "459.0",
				"salesPrice": "319.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1601",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/21/26e93a44-aa3b-4b73-bae2-d16ad3a44ba5.jpg",
				"title": "苏泊尔电饭煲 CFXB40FC533T-75全自动智能型电饭煲球釜内胆4L CFXB50FC533T-75 5L",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/21/7b773392-1d81-4574-986d-e62226e6c1e3.jpg\" /></div>\r\n",
				"createDate": "2017-02-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "368.0",
				"salesPrice": "268.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1581",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/14/e533767e-4cd4-4c28-a38d-888a62c74be4.jpg",
				"title": "美的电压力锅智能版PCS6028P电压力锅6L高压锅6-7人",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/14/baaae631-94b2-4125-ac5e-6c4ee5f9d590.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/14/e0dc1c1f-08fd-4b43-a8a2-fc8eb152013b.jpg\" /></div>\r\n",
				"createDate": "2017-02-14"
			},
			{
				"salesCount": "500",
				"marketPrice": "339.0",
				"salesPrice": "238.0",
				"sysTime": "2017-02-21 16:39:54",
				"id": "1580",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/14/f4c5b986-e18b-4418-8ccc-06bbb9547337.jpg",
				"title": "美的电压力锅 PCS5030 5升 高压锅 预约功能电脑版智能",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/14/a86309f9-46e3-456f-aa60-633df040b849.jpg\" /></div>\r\n",
				"createDate": "2017-02-14"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 22,
		"totalRecord": 220,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "5698.0",
				"salesPrice": "3859.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1561",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/21/5c6b7a0d-5c76-46df-92a3-308bb0482cf1.jpg",
				"title": "松下洗衣机 XQG90-E9055 9公斤变频全自动滚筒洗衣机大容量",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/07a8c435-7d6d-4de1-82b3-46e838472988.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "4799.0",
				"salesPrice": "3659.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1559",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/21/798cb85a-967b-4073-a5c0-13f55fe1ac91.jpg",
				"title": "松下洗衣机 XQG90-E9025  9KG变频滚筒洗衣机",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/707cea99-d8d7-4ee2-ac99-9fa11e078ec7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/904f4060-01ea-4fda-806a-ff66ac2a283f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/62327d4f-7aa3-4cef-9582-3759ab80e553.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "4399.0",
				"salesPrice": "3259.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1557",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/21/bccf0f4e-0783-4c8f-904f-60d566c38369.jpg",
				"title": "松下洗衣机XQG80-E8325滚筒变频全自动洗衣机8kg家用洗衣机",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/4502598d-8c13-48e7-86c3-ed49e5440f30.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "3999.0",
				"salesPrice": "3359.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1556",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/21/346bf573-3118-485d-8617-4e3cb919fda6.jpg",
				"title": "松下洗衣机 XQG80-E8225 8kg滚筒变频全自动",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/15f55937-e749-4a16-b54c-c41281a5b847.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/21/2919e3e8-5b40-44f9-84c2-8b836d22c806.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "3199.0",
				"salesPrice": "2759.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1553",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/20/8b13dd06-90c2-4f50-bced-e62a08b9025f.jpg",
				"title": "松下洗衣机XQG80-E8122 8公斤滚筒洗衣机全自动家用",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/20/34ba45c2-be43-423d-a512-5f15a7d2dd6e.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "1699.0",
				"salesPrice": "1369.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1552",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/19/e4a1347b-2d35-4302-9d89-f05fc0f419f3.jpg",
				"title": "松下洗衣机 XQB28-P200W儿童全自动洗衣机小洗衣机迷你家用",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/1bfac7f4-4f87-4a28-aebd-cfe413c1cfb7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/3dca8fba-e640-45c9-a6f3-a7d3975ce9a6.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "1699.0",
				"salesPrice": "1269.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1551",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/19/a5855f6b-6a87-4451-a1fa-261e07704379.jpg",
				"title": "松下洗衣机XQB65-TW6321  6.5公斤家用波轮洗衣机全自动大容量",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/6142b593-410f-4d39-9007-2c1e2eead344.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/2217c366-722a-4752-b13f-c263f6f8ff42.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "499",
				"marketPrice": "1999.0",
				"salesPrice": "1469.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1550",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/19/7c57d277-0adc-4878-817f-f03e479b6aa8.jpg",
				"title": "松下洗衣机 XQB75-Q7321 XQB75-TW7321全自动波轮洗衣机7.5KG家用",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/956212b0-2485-473f-a06f-c69f5cd6adc8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/3124e67e-b447-4e1e-b780-0fabe19ac223.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "2698.0",
				"salesPrice": "1969.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1549",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/19/56f111c4-21c1-4a5d-80ac-519faaebe760.jpg",
				"title": "松下洗衣机 XQB85-QA8122 大容量家用全自动波轮洗衣机8.5kg",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/470bfe66-56a8-4654-99f8-697024be1bfc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/d8cc407d-7098-4945-b5ec-0798c65471ed.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			},
			{
				"salesCount": "500",
				"marketPrice": "2698.0",
				"salesPrice": "1959.0",
				"sysTime": "2017-02-21 16:44:10",
				"id": "1547",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/19/7afa12e0-18fe-437b-8c06-2276b273cf38.jpg",
				"title": "松下洗衣机 XQB90-Q9041 9KG 波轮洗衣机 全自动大容量 家用",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/a937bb56-2d49-4800-8d1b-955c8abb45ee.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/cd41ea8e-c2ac-4609-b945-d357e34aaa64.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/19/1f73ebd7-4f35-498a-aeb0-e15500cb1c93.jpg\" /></div>\r\n",
				"createDate": "2017-02-20"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 22,
		"totalRecord": 211,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "3499.0",
				"salesPrice": "2798.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1354",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/6/767fabe9-1d53-415f-974b-715f93e7084d.jpg",
				"title": "vivo x7 plus全网通4G+64G自拍美颜拍照5.7寸智能手机指纹vivox7plus",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px; text-align: center;\"><span style=\"font-size: 28px;\"><span style=\"color: rgb(255, 0, 0);\">生活一家购机优惠</span><br />\r\n\t返<span style=\"color: rgb(255, 0, 0);\">258元</span>现金红包</span></strong></div>\r\n<div style=\"text-align: center;\">\r\n\t<strong style=\"font-size: 13.3333px; color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\"><span style=\"font-size: 28px;\">送钢化膜、保护套<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/6/ebbecda9-b9e9-42da-89cc-12145694dfe0.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/6/338d62f5-1000-42f8-bedc-6cd995acaeef.jpg\" /></span></strong></div>\r\n",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "500",
				"marketPrice": "149.0",
				"salesPrice": "109.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1565",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/6/dda07e3e-648c-47bc-84d3-a055a4e754d2.jpg",
				"title": "狐狸极致UR20入耳式重低音发烧HIFI耳机线控带麦手机通用金属耳塞",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/29/147c8cf1-61b2-4c3e-8f90-b4928c032009.jpg\" /></div>\r\n",
				"createDate": "2017-02-06"
			},
			{
				"salesCount": "0",
				"marketPrice": "49.0",
				"salesPrice": "29.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1124",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/20/17633b32-4f3e-4d4e-9167-c758331d6857.jpg",
				"title": "罗马仕快充适配器 高通快充电头AC10 大功率智能变压电源适配器",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/20/d6c174a3-777d-4653-b271-7c863a007921.jpg\" /></div>\r\n",
				"createDate": "2016-12-13"
			},
			{
				"salesCount": "500",
				"marketPrice": "2799.0",
				"salesPrice": "2499.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1353",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/30/1c6343f5-c549-4c6e-9ca8-225489f05ad0.jpg",
				"title": "OPPO R9手机4g+64g全网通5.5寸 oppor9手机 ",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px; text-align: center;\"><span style=\"font-size: 28px;\"><span style=\"color: rgb(255, 0, 0);\">生活一家购机优惠</span><br />\r\n\t返<span style=\"color: rgb(255, 0, 0);\">258元</span>现金红包</span></strong></div>\r\n<div style=\"text-align: center;\">\r\n\t<strong style=\"font-size: 13.3333px; color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\"><span style=\"font-size: 28px;\">送钢化膜、保护套</span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/30/a4685f4b-ae78-451c-a0d7-ec1909ec7b97.jpg\" /></div>\r\n",
				"createDate": "2016-11-30"
			},
			{
				"salesCount": "50",
				"marketPrice": "1899.0",
				"salesPrice": "1899.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1271",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/31/b82c77d6-bb41-4c95-a293-77f749c290de.jpg",
				"title": "【新品首发】乐视手机 乐Pro3 全网通4G+32G智能手机",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 22px;\"><strong><span style=\"color: rgb(51, 153, 204);\">即日起至双11期间购买</span></strong></span><br style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px;\" />\r\n\t<strong style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px;\"><span style=\"color: rgb(255, 0, 0);\">多赠送一套乐视原装的充电器(线+充电头)价值98元</span></strong><br />\r\n\t<strong><span style=\"font-size:26px;\">现货当天发货</span></strong><br />\r\n\t<strong style=\"font-size: 13.3333px; color: rgb(51, 153, 255); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\"><span style=\"font-size: 18px;\">送自拍神器+钢化膜+专用保护壳<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/31/6ce41f92-a4e1-49c0-a866-c5aa612cac82.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/31/002ec326-a01a-4b20-a845-29a0c58cdca3.jpg\" /></span></strong></div>\r\n",
				"createDate": "2016-11-05"
			},
			{
				"salesCount": "500",
				"marketPrice": "1399.0",
				"salesPrice": "1299.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1270",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/31/a29e96ab-85b9-45b9-be11-182d6b4ed904.jpg",
				"title": "乐视手机 乐2 爵迹定制版4G+32G 全网通智能手机 5.5寸",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 22px;\"><strong><span style=\"color: rgb(51, 153, 204);\">即日起至双11期间购买</span></strong></span><br style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px;\" />\r\n\t<strong style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px;\"><span style=\"color: rgb(255, 0, 0);\">多赠送一套乐视原装的充电器(线+充电头)价值98元</span></strong><br />\r\n\t<strong style=\"font-size: 13.3333px; color: rgb(51, 153, 255); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;\"><span style=\"font-size: 18px;\">送自拍神器+钢化膜+专用保护壳</span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/31/8ef18bbe-ce81-459d-be12-5f1fda278619.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/31/d535cbee-a6e5-4e1f-a2b2-9363db8ef732.jpg\" /></div>\r\n",
				"createDate": "2016-11-05"
			},
			{
				"salesCount": "500",
				"marketPrice": "2599.0",
				"salesPrice": "2355.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1279",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/2/64e14516-e391-4cc9-b9b1-b7c90976f07d.jpg",
				"title": "小米5s 4G+128G大屏5.15寸智能超声波指纹解锁金属拍照小米手机5S",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/4de1762e-babc-4047-81f2-04defba6db0a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/eddacb80-79d5-4765-8c33-5c7a1aeb646b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/015a06d6-3797-464f-9f17-da046ac46859.jpg\" /></div>\r\n",
				"createDate": "2016-11-02"
			},
			{
				"salesCount": "150",
				"marketPrice": "2399.0",
				"salesPrice": "2265.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1277",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/2/a8b78b0b-fe19-4d7a-b039-45bc8a359b9a.jpg",
				"title": "小米5尊享版 4G+128G  全网通4G智能5.1寸大屏小米手机5",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#ff0000;\"><strong><span style=\"font-size:24px;\">正品全国联保</span></strong></span><br />\r\n\t<span style=\"font-size:18px;\"><strong>白色尊享版4G+128G 3D玻璃 2265元<br />\r\n\t黑色尊享版4G+128G 3D陶瓷 2670元<br />\r\n\t白色尊享版4G+128G 3D陶瓷 2520元</strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/edfe64e6-ddcb-4ecc-b2f3-f07d3c247958.jpg\" style=\"font-size: 12px;\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/0ee64e0a-47e0-4ea9-862f-c1ca05509831.jpg\" style=\"font-size: 12px;\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/fcb1e599-aea8-4f59-9e84-902e7eddda4a.jpg\" style=\"font-size: 12px;\" /></div>\r\n",
				"createDate": "2016-11-02"
			},
			{
				"salesCount": "150",
				"marketPrice": "2999.0",
				"salesPrice": "2805.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1278",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/2/352744e7-3671-49d2-8f47-fff99420014a.jpg",
				"title": "小米5S plus 高配6G+128GB版 全网通5.7寸 小米手机5splus金属机身",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:20px;\"><span style=\"color:#ff0000;\"><strong><span style=\"font-size:28px;\">正品全国联保</span></strong></span><br />\r\n\t<strong>银白 高配6G+128G &nbsp;2805元<br />\r\n\t金色 高配6G+128G &nbsp;2770元<br />\r\n\t深灰 高配6G+128G &nbsp;2785元</strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/02386417-e3a8-4596-a7ec-0bdebc8f807a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/2/4369387f-7cea-4d22-9615-d59ec561091e.jpg\" /></div>\r\n",
				"createDate": "2016-11-02"
			},
			{
				"salesCount": "500",
				"marketPrice": "2798.0",
				"salesPrice": "2498.0",
				"sysTime": "2017-02-21 16:45:22",
				"id": "1195",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/28/0bf96125-9828-46fa-81c5-89c663cf6500.jpg",
				"title": "vivo X7全网通4G自拍美颜拍照智能手机指纹超薄大屏双卡vivox7",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color: rgb(0, 0, 0); font-size: 20px; text-align: center; font-family: 'courier new', courier, monospace;\"><span style=\"color: rgb(178, 34, 34);\"><strong><span style=\"font-size: 24px;\">全国联保</span></strong></span></span></div>\r\n<div style=\"text-align: center;\">\r\n\t<strong style=\"color: rgb(128, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 20px;\"><span style=\"background-color: rgb(255, 160, 122);\">购机送充电宝、再返200红包</span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/28/160a27e6-19fc-4ffd-a357-1eb7ead9ef6b.jpg\" /></div>\r\n",
				"createDate": "2016-09-28"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 5,
		"totalRecord": 41,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 0,
		"totalRecord": 0,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "50",
				"marketPrice": "258.0",
				"salesPrice": "230.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "1286",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/4/43dbee8f-3f2c-4ae8-9144-1a997f51ad0e.jpg",
				"title": "天然黑曜石长链",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/4/14c5a9b2-c472-4148-aa39-6340281a4aa0.jpg\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/4/4dd8efa3-f08c-492c-819a-57ae3aee3258.jpg\" /></div>\r\n",
				"createDate": "2016-11-04"
			},
			{
				"salesCount": "50",
				"marketPrice": "3099.0",
				"salesPrice": "2799.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "869",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/3/39bd5f14-682f-4815-add1-b016fb493c9d.jpg",
				"title": "天梭(TISSOT)手表 海星系列全自动手表男士机械表 钢带双日历镀金男表 ",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/0afec00a-db40-4502-9e3b-9bcd3d70619c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/7677ffbc-ec87-47c8-bf6f-00504d610bc5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/6de7030f-d391-40c5-bed7-55f1e1813b1e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/8275722b-263f-42a8-936c-3c63d22018e9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/f6740eea-e501-48d5-8d12-a975a663f7e7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/99e833a5-a798-4875-a3d9-ac8d21e6e453.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/fa5334e0-0cb0-408e-a983-21f6970e6846.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/905a46d6-77e7-4555-8514-676cfba7a88b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/b8e6d496-5ecb-4f24-9aea-bf2f8a29bb15.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/c1edc923-41e7-4813-9e35-c03ef5baee89.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/351b8ea0-02f9-4863-99f5-5720e1677330.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/8cb5741a-e471-484a-ad86-6ae731e7b988.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/77798a79-f83a-491b-a3d1-8661524e21e0.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/fd7162a1-a414-4d30-8567-3a82bc17fefa.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/e7e5b959-ff63-4080-ab8b-8d42d3d7d1f5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/d3844655-9af7-40d5-bff7-5216b91add4d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/94e9ae4c-569a-449f-a380-ef150b7cc38f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/cfeaee60-1fab-44ef-a5cd-0f2d0b2e8106.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/cc058d8a-9024-4218-9860-630bd0229bcb.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/bd52d6e7-6cf9-40cf-b175-bd9f78a314e5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/58827596-e4f7-4b70-86ec-201a929084cf.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/2e6330ab-e757-46c0-8ea8-4893ec0323ce.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/700f2622-ed0e-4283-9b5e-1569ecb6a193.jpg\" />",
				"createDate": "2016-07-08"
			},
			{
				"salesCount": "50",
				"marketPrice": "2599.0",
				"salesPrice": "1999.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "876",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/4/427a6736-e8bb-4d9b-9840-5eb19463083c.jpg",
				"title": "天梭(TISSOT)手表 运动系列石英男表",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/fb4d97ca-e8ba-4686-8828-095fc373ba63.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/ca7c3b5e-9c18-4671-b166-5e0050bfee0e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/30a95f09-fe4c-4b76-acd2-bf65f376038e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/fcea02b3-3a97-42af-bbc8-9a385ff684e5.jpg\" /><br />\r\n<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/0182aa60-2f9a-4bfe-b3e5-864e1ad63332.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/ebc9a690-4991-4973-9bb2-51579cd83105.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/7623f24a-bc30-4388-bed8-80a7f05da7e7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/e0b0bb87-2f71-4ac9-8911-67f228c2d004.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/4/a810a99a-570a-4f58-981c-06ae54d9dd1b.jpg\" /><br />\r\n",
				"createDate": "2016-07-08"
			},
			{
				"salesCount": "50",
				"marketPrice": "3499.0",
				"salesPrice": "3199.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "865",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/3/5bff79fc-d8f9-43bb-9572-0ce73f78cd72.jpg",
				"title": "天梭手表(TISSOT) 宝环III系列机械情侣表女表",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/50ad3d36-d2e9-461d-82ab-30b2e11115a0.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/155c024d-64f9-44e3-8b22-7e581fef1aa4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/05d6d6e8-8c62-4086-a13e-0311b2398890.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/90d8dbb0-10d1-463c-87c2-c3d0ca8dd286.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/d0e6cefb-9bab-4048-bb16-05bf715a40df.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/20121b06-5cab-4fe5-9e0a-7f6f6e32cfe6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/659c3575-655b-4bfd-94cd-be4b8dad9eb1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/13748a5a-0efe-4ca3-8246-f2d861d1f521.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/0b6e7a7a-8dee-4259-95df-4828c42525e7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/270d7264-89dc-4920-a206-5256a984957e.jpg\" />",
				"createDate": "2016-07-08"
			},
			{
				"salesCount": "50",
				"marketPrice": "3199.0",
				"salesPrice": "2599.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "849",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/2/35ca01b7-849f-400a-9544-b66eb9286f9f.jpg",
				"title": "天梭 男表( TISSOT ) 机械表力洛克系列自动手表男 T41.1.423.33",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/2/88674b53-18f6-440c-9fec-a2b1db601f51.jpg\" />",
				"createDate": "2016-07-08"
			},
			{
				"salesCount": "50",
				"marketPrice": "2688.0",
				"salesPrice": "2199.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "864",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/3/fb41cf32-cf95-480a-8ee5-9009e54de838.jpg",
				"title": "天梭手表(TISSOT) 时尚系列女表石英表 陶瓷防水女士手表 白色",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/ecb712a2-fdeb-450c-9b4b-5b467275e889.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/2beef52f-fe2a-4021-aa32-0bc0dda1c541.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/d9a18b9c-ae90-4d80-88ba-e6fcda56ce06.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/152cda79-e1cc-4b68-8113-47dd2180681d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/d1eaddfb-8682-49be-bc3a-a47a8b37f161.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/7a92825e-a277-443b-a436-3b54a52dc68c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/a3fc2e59-8581-477a-9777-77363bfdd57c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/51344821-7f96-4427-ac8a-1e36404cdfc4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/0b2e61d4-28ff-4249-bfd3-bb5c5e621077.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/3bf49ee8-3ad8-412f-94dd-6c06f547c82a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/0b879c0d-ba78-44dc-b466-6b69adc34b68.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/62ab5f29-3dc5-4e65-bb9a-507d994405a2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/63cbddc4-8908-4cef-a54f-2379f9f4d9b1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/7ddcbc8b-9482-4d8e-b659-efe92efb0805.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/4ecaf8ad-7054-4ce9-9e3a-8499b9f1ec73.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/af09ae8e-4393-4cdf-b8fe-1252de2de76d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/d5255be9-aec4-428a-8782-e24758347f5c.jpg\" />",
				"createDate": "2016-07-07"
			},
			{
				"salesCount": "50",
				"marketPrice": "1899.0",
				"salesPrice": "1599.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "855",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/3/7638e77c-b008-47f0-9b72-b6556d6b777d.jpg",
				"title": "天梭手表 (TISSOT)骏驰系列石英简约型男皮带男表",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/52fdd067-e843-4e1a-95ee-baaa21d6a1a8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/fa9c2441-f31e-4545-9826-a9c633a719f3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/7cc5f692-9604-42c9-8abd-61fd042bce2e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/79dd6846-8e07-49bd-b682-2b57e2b8ba7b.jpg\" /><br />\r\n<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/7755f3b9-5fa9-4425-aa91-ce0d7c873cc3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/36b25010-d474-4869-99b6-cc4caca7bd33.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/4d0726a0-5a8f-49b8-96f8-cbf2b121c49e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/dbd7e6cb-0bac-4259-9c05-2105af096245.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/281fb192-9971-4d8e-b467-286dc5887368.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/3dc8b75b-d296-4e7e-8760-af7934c62b7e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/ae08c289-655d-4084-aa21-773eb3b744cc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/127948e7-9873-45d2-ba1f-85c3ca686222.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/c15ffb0b-212e-4481-a8f1-d52a17056c7c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/ea9cf651-0c60-463d-a8a2-d68357229f80.jpg\" /><br />\r\n",
				"createDate": "2016-07-07"
			},
			{
				"salesCount": "50",
				"marketPrice": "2519.0",
				"salesPrice": "1999.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "851",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/3/3ee1fbc4-d675-42f4-a36c-f174677caa96.jpg",
				"title": "天梭手表(Tissot)韵驰系列时尚休闲女士手表石英女表",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/6b6d6e05-971b-46b1-bc9c-0b04df157648.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/0706953c-19e0-43b1-8024-14cf70c512f3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/ddc5c788-8c9f-4fb2-bf3c-d40a317cd1c8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/f74c920c-6d74-46d6-ac06-a5c8da11e239.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/40d75be6-fbc4-4b3a-9cbc-6e01cedd6c1a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/30391c88-2e29-4554-b241-1fe3ea23bc73.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/e7ae44e3-f82e-4aee-acf3-167db04d5771.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/f08ad28a-3e25-4fea-bdee-a64ea8ff5556.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/1658bba7-f53f-4f22-8655-388cd70a75a4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/b0608ba5-9a49-4664-b98a-7250e3dcb476.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/4278fff4-dbe9-49f4-a282-712e73d5ee7e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/737ad274-fd49-4bb7-9559-64db1ab431f3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/876846a9-1d67-48b9-a689-01bf2140ec27.jpg\" />",
				"createDate": "2016-07-07"
			},
			{
				"salesCount": "50",
				"marketPrice": "2199.0",
				"salesPrice": "1799.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "866",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/3/81d34b3a-16ad-497a-b005-ec62567e01dd.jpg",
				"title": "天梭男表(TISSOT) 俊雅系列男表石英表 多功能手表男士",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/17bb06b1-eef9-47de-9190-0ffff53ef81f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/4aea0291-334b-482a-815f-0dcf0ab4a5e4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/aa432098-3abd-4f73-b12b-b3b2557a025e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/6f4e4f51-7f6d-4ddb-842d-37fd2f467c8b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/50ee4672-8c70-4198-8e6c-98e4657a64df.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/fe572fcd-52f0-496c-a06a-edee52074833.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/37c44a46-115e-44ca-9539-f658ab17b2b5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/39d4d59e-85ca-43df-9b67-8d3915d845d0.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/98ac750b-07e9-473f-aa68-4ea1df815e98.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/00e1c6fa-1173-428e-b5a2-014b1fd62ed6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/27b4d575-f456-40d7-8c04-b2bc50b77350.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/fe533fe8-3953-4138-b454-c567a99a450b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/49b61686-39d3-4f3b-b234-2f77d181172a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/0093caa1-5686-488d-a26a-9b9e640eb40e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/dc0927e1-e6d1-4851-9cd3-32fde1ae8916.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/878c54ab-3e36-40cd-a6ff-1ca9925d561a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/5c729ef0-c055-44c8-9693-bea11cd17524.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/f35ca8ee-d91c-44d4-84e2-5761cb3fdef3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/e7ad2cc4-a76a-4372-a382-a7b279adc893.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/b519a114-c7c0-49dc-8a7f-c6b6b75757d2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/c3331003-5d9f-4713-a397-ec2635a9ad9b.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/4ab61c9a-f3a2-4360-9f68-18dd1e8c53e0.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/f253f0f8-f769-4968-8700-f447b28d1db2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/5d3b4be7-5ba6-433b-bce7-531324acf3bf.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/3/411a7ece-4943-4de7-aa3d-b9405f027dd7.jpg\" />",
				"createDate": "2016-07-07"
			},
			{
				"salesCount": "50",
				"marketPrice": "3099.0",
				"salesPrice": "2699.0",
				"sysTime": "2017-02-21 16:46:05",
				"id": "897",
				"pic": "http://www.gdshyj.com/shoppic/2016/6/13/deb511bb-edde-4e5a-bfdf-7435d40bf238.jpg",
				"title": "天梭TISSOT手表 唯意系列时尚休闲机械男士手表",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/396764e0-0b84-4730-b0ef-e6dd6629318a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/bc99c9a8-7a74-46ca-a058-490bc36b1566.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/2f86a5b1-6480-4018-8957-6dbd17f30135.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/d0d89131-aca2-416f-9d5a-e394e83cb7af.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/4d3ea463-5da0-4802-ad0a-b4585aa8d775.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/6644463e-b9eb-4c20-9290-b2fb1a6fe4dd.jpg\" /><br />\r\n<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/f5224513-5a6b-4814-9fd0-b8cd67ce16a7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/6/13/5e9d522a-67c1-407d-849c-b679d75eb145.jpg\" /><br />\r\n",
				"createDate": "2016-07-07"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 3,
		"totalRecord": 24,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "128.0",
				"salesPrice": "78.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1495",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/3/075138ce-c5c3-4646-9d6a-51f8ffdb5c54.jpg",
				"title": "WIS水润面膜套装24片 祛痘控油补水保湿淡痘印收缩毛孔面膜贴",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/3/7ece6413-ae05-4b2c-9e6c-1e40aad981a7.jpg\" /></div>\r\n",
				"createDate": "2017-01-03"
			},
			{
				"salesCount": "50",
				"marketPrice": "98.0",
				"salesPrice": "88.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1235",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/15/e9194151-d2bc-4611-b40d-ae9b90402bb8.jpg",
				"title": "dvz朵色新版Color Fever丝绒光感眼影 8色",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/cf9b6650-c3d4-4185-936f-3a67b886f5b1.jpg\" /></div>\r\n",
				"createDate": "2016-10-15"
			},
			{
				"salesCount": "50",
				"marketPrice": "78.0",
				"salesPrice": "69.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1234",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/15/665c80ab-4d0e-4c93-8c38-5c6aed1af234.jpg",
				"title": "正品DVZ朵色新版持久液态眼线笔",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/005e6fe8-3738-4d0e-be0e-c7320b213e12.jpg\" /></div>\r\n",
				"createDate": "2016-10-15"
			},
			{
				"salesCount": "50",
				"marketPrice": "68.0",
				"salesPrice": "60.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1233",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/15/5e561121-2a98-4422-b9f8-ce04be1982b3.jpg",
				"title": "dvz朵色皙肤洁净卸妆棉",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/5ae92f6a-965e-40e2-a11c-65f8a7bc33f9.jpg\" /></div>\r\n",
				"createDate": "2016-10-15"
			},
			{
				"salesCount": "50",
				"marketPrice": "78.0",
				"salesPrice": "69.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1232",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/15/af2621aa-564b-47f2-9b15-ef8e9f31057c.jpg",
				"title": "DVZ朵色嫁接浓密睫毛膏",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/c13c13f2-966c-4e83-a26e-628ea7242382.jpg\" />",
				"createDate": "2016-10-15"
			},
			{
				"salesCount": "50",
				"marketPrice": "128.0",
				"salesPrice": "109.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1231",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/15/ee6218f2-34bf-4343-8a47-473713730ae0.jpg",
				"title": "朵色眉膏 DVZ新款眉膏套盒 双头修容笔+眉刷+刷头+眉膏+网袋5件套",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/09ad29bc-56c0-4481-bd85-4492569980b2.jpg\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/589149dc-2c09-4fc6-9dbb-7c7c9dc40c50.jpg\" /></div>\r\n",
				"createDate": "2016-10-15"
			},
			{
				"salesCount": "100",
				"marketPrice": "108.0",
				"salesPrice": "99.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1230",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/15/547f8d8f-aeec-4c20-a818-70ee4934aef8.jpg",
				"title": "Dvz朵色山羊奶醒肤素颜霜 50g/ml",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/15/b675069c-f68c-470e-8f07-6af1f769da28.jpg\" /></div>\r\n",
				"createDate": "2016-10-15"
			},
			{
				"salesCount": "500",
				"marketPrice": "299.0",
				"salesPrice": "199.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1205",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/29/e549c08b-f4f5-46ed-98a9-841208308b3c.jpg",
				"title": "溪秀小绿盒 超薄补水保湿美白蚕丝修复控油孕妇面膜男女祛痘",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"color:#008080;\"><span style=\"font-size:16px;\">5盒199再送价值98元补水喷雾一支</span></span></strong><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/29/52d82bd4-4830-4011-81d3-2dc017cde6e1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/29/fe72bed3-bd8c-457a-82b7-10d42c9a06d7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/29/36b9aefc-af9e-4695-867e-3cfdecb22b98.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/29/f19017e0-1838-428b-82a5-15a36dc310f6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/29/aeb561d2-e47e-4a78-8d17-6cb8d74feabe.jpg\" /></div>\r\n",
				"createDate": "2016-09-29"
			},
			{
				"salesCount": "100",
				"marketPrice": "128.0",
				"salesPrice": "119.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1145",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/22/b1cc2d2f-dc57-47ab-b9a7-910cdbbcac48.jpg",
				"title": "DVZ朵色水光气垫CC霜 象牙白&自然色",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/23/0cffe074-56cd-4421-9c08-fda04c618256.jpg\" /></div>\r\n",
				"createDate": "2016-09-23"
			},
			{
				"salesCount": "100",
				"marketPrice": "98.0",
				"salesPrice": "89.0",
				"sysTime": "2017-02-21 16:46:25",
				"id": "1144",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/22/42f1300b-04a1-48e8-abcf-1aacaee481c0.png",
				"title": "DVZ朵色双色BB霜 双色V脸润泽BB霜",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/22/08c4af6b-07aa-4b9e-bb61-d0e55fa5f8f8.jpg\" />",
				"createDate": "2016-09-22"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 16,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "288.0",
				"salesPrice": "158.0",
				"sysTime": "2017-02-21 16:46:50",
				"id": "1364",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/6/c27a807a-0636-42e6-98c8-6ff63a0f09a1.jpg",
				"title": "香港迪茉内衣 8807横拉丝一片式无钢圈无痕内衣薄款调整型文胸",
				"content": "<div style=\"text-align: center;\">\r\n\t<strong><span style=\"color:#800080;\"><span style=\"font-size:18px;\">全国统一零售价158元<br />\r\n\t购买即返30元钱包</span></span><br />\r\n\t<span style=\"color:#000080;\"><span style=\"font-size:18px;\">购买后尺寸大小请自行备注留言<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/9dd016c1-cacc-4ae0-8840-cf095b8be589.jpg\" /></span></span></strong><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/5ff3f11a-b488-41e3-998c-f2086e29ccad.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/6361c7dc-4648-4754-9b1f-2e03b2fcecf7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/6/3deded97-677c-438d-b315-456337560aa9.jpg\" /></div>\r\n<body id=\"cke_pastebin\" style=\"position: absolute; top: 50.2083px; width: 1px; height: 1px; overflow: hidden; left: -1000px;\">\r\n\t<ul>\r\n\t\t<li data-value=\"122508275:29994\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.8\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">70A</a></li>\r\n\t\t<li data-value=\"122508275:29995\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.9\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">70B</a></li>\r\n\t\t<li data-value=\"122508275:29996\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.10\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">70C</a></li>\r\n\t\t<li data-value=\"122508275:29998\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.11\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">75A</a></li>\r\n\t\t<li data-value=\"122508275:29999\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.12\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">75B</a></li>\r\n\t\t<li data-value=\"122508275:30000\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.13\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">75C</a></li>\r\n\t\t<li data-value=\"122508275:30002\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.14\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">80A</a></li>\r\n\t\t<li data-value=\"122508275:30003\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.15\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">80B</a></li>\r\n\t\t<li data-value=\"122508275:30004\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.16\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">80C</a></li>\r\n\t\t<li data-value=\"122508275:30006\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.17\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">85A</a></li>\r\n\t\t<li data-value=\"122508275:30008\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.18\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">85B</a></li>\r\n\t\t<li data-value=\"122508275:30007\" style=\"margin: 0px 5px 10px 0px; padding: 0px; float: left; position: relative; vertical-align: middle; line-height: 20px; color: rgb(60, 60, 60); font-family: tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif; font-size: 12px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">\r\n\t\t\t<a data-spm-anchor-id=\"2013.1.iteminfo.19\" style=\"outline: 0px; display: inline-block; white-space: nowrap; padding: 3px 6px; min-width: 10px; text-align: center; border: 1px solid rgb(220, 220, 220); transition-property: border-color, background; transition-duration: 0.2s; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\">85C</a></li>\r\n\t</ul>\r\n</body>\r\n",
				"createDate": "2016-12-06"
			},
			{
				"salesCount": "500",
				"marketPrice": "288.0",
				"salesPrice": "178.0",
				"sysTime": "2017-02-21 16:46:50",
				"id": "1344",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/28/5c86f84c-6297-4fc4-b20d-37aae4b7c619.jpg",
				"title": "香港幸福狐狸内衣至尊款 无钢圈聚拢性感深V一片式呼吸无痕文胸",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#008080;\"><strong><span style=\"font-size:22px;\">需要的尺寸拍下留言备注一下</span></strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/861ffca1-5fa2-4507-b757-691eaa8a4044.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/7f2be902-87fa-48bd-aa87-001778154ed5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/88c59268-79f2-4bcc-a0b6-ddc18f7cbef5.jpg\" /></div>\r\n",
				"createDate": "2016-11-28"
			},
			{
				"salesCount": "500",
				"marketPrice": "59.0",
				"salesPrice": "25.0",
				"sysTime": "2017-02-21 16:46:50",
				"id": "1343",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/27/038cd99d-f024-4a81-8968-cd02af295900.jpg",
				"title": "韩国lets slim瘦腿袜美腿塑形袜加厚春秋冬压力裤200M",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/27/7577f8a6-d3d3-432a-bde5-47165711dc3a.jpg\" /></div>\r\n",
				"createDate": "2016-11-27"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 1,
		"totalRecord": 3,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "96.0",
				"salesPrice": "60.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1599",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/17/5449d9f1-4c2e-416c-8e4b-d272b202135c.jpg",
				"title": "迪士尼(Disney)萌萌米奇不锈钢儿童餐具 饮水杯 宝宝水杯（韩国进口）",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/17/01ca175f-5491-4ac7-96b5-43cbae555094.jpg\" /></div>\r\n",
				"createDate": "2017-02-17"
			},
			{
				"salesCount": "500",
				"marketPrice": "286.0",
				"salesPrice": "180.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1598",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/b2d5e7e7-d629-4077-ba65-904592fa1528.jpg",
				"title": "迪士尼(Disney)维尼不锈钢儿童餐具套装 活力4件套礼盒装（韩国进口）",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/3af80b9f-a84b-4a7f-8dfb-bef00046d647.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "138.0",
				"salesPrice": "85.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1597",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/f4944ed7-01a7-46c9-8439-79e2bb3c63d3.jpg",
				"title": "哆啦A梦（Doraemon）不锈钢儿餐具 婴儿碗 宝宝双手柄防滑碗童（韩国进口）",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/6ae1b698-512f-47ca-882b-7193667b8ca3.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "108.0",
				"salesPrice": "68.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1596",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/7cc87577-9ca5-45bc-8e93-62268328f718.jpg",
				"title": "迪士尼(Disney)萌萌米奇不锈钢儿童餐具 婴儿碗 宝宝双耳防滑碗",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/05ef34ac-1aba-41b2-87cd-563824dd4018.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/1b1a816f-37ba-47d0-82e5-e878865ff29b.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "39.0",
				"salesPrice": "25.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1595",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/58ee21bb-b89a-478f-891b-78257c867540.jpg",
				"title": "迪士尼宝宝水杯吸管杯婴儿学饮杯防漏带手柄水杯 240ml5823",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/bfa40a8d-10da-4ec8-96d3-32c7a5ad0105.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "158.0",
				"salesPrice": "92.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1594",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/b698262d-5ca9-44d8-8b5a-a5eb757fdedd.jpg",
				"title": "乐儿宝 金彩系列 玻璃奶瓶宽口径 吸管带手柄 240ml ILP550-R ILP550-Y  ILP550-G ILP550-B",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/1fd52c7f-08ae-4187-b49a-f162292961e2.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "199.0",
				"salesPrice": "108.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1593",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/41d0ce61-9de5-4317-af52-4ee8307b18c7.jpg",
				"title": "乐儿宝吸奶器 仿真手动吸奶器",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/2cacc4d8-c205-4507-b811-02dd9bd83358.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "69.0",
				"salesPrice": "24.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1592",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/d828f777-7c91-4daf-9150-a03c57f4245f.jpg",
				"title": "乐儿宝（bobo）儿童吸管杯 宝宝学饮杯防漏喝水杯240m",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/d8c25b32-2794-494a-9f09-d05a6cc81d6e.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "99.0",
				"salesPrice": "77.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1591",
				"pic": "http://www.gdshyj.com/shoppic/2017/2/16/d82abd5f-04df-498a-9df9-8238fe755f0a.jpg",
				"title": "好奇尿裤 Huggies 金装 婴儿纸尿裤 中号尿不湿M50+4片【7-11kg】 大号L40+6片",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/a3677911-ce08-4bb0-8501-32bf08a515d2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/9e644e7b-0b14-48c7-8517-b466dc443547.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/09f601a0-9adf-4526-b542-6c55f8d59312.gif\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/2/16/a140724c-dda1-4eb7-8af4-b1a0762912ad.jpg\" /></div>\r\n",
				"createDate": "2017-02-16"
			},
			{
				"salesCount": "500",
				"marketPrice": "188.0",
				"salesPrice": "150.0",
				"sysTime": "2017-02-21 16:47:17",
				"id": "1093",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/14/507431a9-aae5-4b5e-8a8b-ea4e9de571b0.jpg",
				"title": "美赞臣明星版奶粉1~2~3段990克婴儿奶粉罐装安儿宝a+",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color: rgb(105, 105, 105); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 16px;\">本产品由惠州(爱婴宝贝)孕婴儿童用品商场提供</span></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; text-align: center; font-size: 16px;\"><span style=\"color: rgb(128, 0, 0);\">惠城区5公里内可免费送货，也可到店自提<br />\r\n\t联系电话：0752-3104899</span><br />\r\n\t地址：</span><u style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px; text-align: center;\">惠城区河南岸新岸路8号(人人乐后面)</u><br style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; font-size: 13.3333px; text-align: center;\" />\r\n\t<span style=\"color: rgb(0, 0, 0); font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif; text-align: center; font-size: 16px;\"><span style=\"color: rgb(0, 0, 128);\">市区外发快递需加快递费用<strong>10元</strong>，请自行拍下<br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/14/92ef70d2-38ba-4b20-9ee3-79e13a1933a1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/14/b552ace9-e7b0-440c-a804-11a5d2033dae.jpg\" /></span></span></div>\r\n",
				"createDate": "2016-09-14"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 2,
		"totalRecord": 15,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"columnIcon": "",
		"msgCount": 0,
		"pageList": [
			{
				"salesCount": "498",
				"marketPrice": "138.0",
				"salesPrice": "98.0",
				"sysTime": "2017-02-21 16:47:37",
				"id": "1256",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/24/4fa13a01-85f4-4092-b111-1f467225a121.jpg",
				"title": "大时代7天防臭袜6双一盒",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/30/30069b82-b31a-41de-b480-2bc18c399a15.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/27bb0eec-8945-4f49-972b-f77578cb62fa.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/0c9bcf76-233e-4c3b-8a71-bb4f9bf6df71.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/ed68a5b5-e149-44e5-afcb-6814baf032d7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/457c49e8-f408-4f4c-bdac-1c076c4b9a2f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/42cc5d38-51a6-42ba-9223-83c3f52aa55a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/0a558bed-1a0d-4ce0-a70c-d8b7f971813c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/2b162233-0e29-4fce-a73e-a46d6c2ce5eb.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/391d258f-7629-42ca-a611-cc565ce112d4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/a8b84741-a652-4999-977c-8cfe1292021a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/a9a8f463-1913-4f0b-bf4a-87a439773dbc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/a7c6dc10-4210-4d34-8577-3ffa0b2dafee.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/24/81f6ad05-d02b-4e0a-921d-a5eabb759cfe.jpg\" /></div>\r\n",
				"createDate": "2016-11-30"
			},
			{
				"salesCount": "500",
				"marketPrice": "79.9",
				"salesPrice": "49.9",
				"sysTime": "2017-02-21 16:47:37",
				"id": "1347",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/28/cd0d8a43-7117-4b11-aca5-819ee49ac87d.jpg",
				"title": "防震防水单肩电脑包13.3寸 14寸",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/e26785d7-6a2c-4829-817f-3393ec1be9fe.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/5fd010ea-821b-4049-942a-c42c321a1b3f.jpg\" /></div>\r\n",
				"createDate": "2016-11-28"
			},
			{
				"salesCount": "500",
				"marketPrice": "99.0",
				"salesPrice": "69.9",
				"sysTime": "2017-02-21 16:47:37",
				"id": "1346",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/28/40c7ea06-182b-4c56-8c0e-d83101dc1b26.jpg",
				"title": "韩版手提式包 13.3寸 14寸电脑包 男女通用",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/9b05cc14-c6e9-4d83-8440-cdeb944f1dc8.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/28/73bd3885-46ad-4dbc-b6ec-fa88c3e97fa2.jpg\" /></div>\r\n",
				"createDate": "2016-11-28"
			},
			{
				"salesCount": "500",
				"marketPrice": "299.0",
				"salesPrice": "189.0",
				"sysTime": "2017-02-21 16:47:37",
				"id": "1337",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/25/9630f33b-ff7f-4747-a80b-f4f04444e628.jpg",
				"title": "电脑包air13.3寸pro单肩笔记本包包",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/25/fcfc0416-0edb-4ee7-87e3-7560ccdeea31.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/25/44338af9-37a7-47e9-8cdd-ec173cb3f64f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/25/d4c32210-914a-4364-b8d4-54ceb99d666d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/25/1f11babe-fb19-4e59-90d8-a45aa3fd6969.jpg\" /></div>\r\n",
				"createDate": "2016-11-25"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 1,
		"totalRecord": 4,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "998.0",
				"salesPrice": "568.0",
				"sysTime": "2017-02-21 16:48:09",
				"id": "1331",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/50c0fc87-052c-46fd-89a4-9a1dbf383fdf.jpg",
				"title": "京华5寸行车记录仪前后双镜头高清1080P索尼镜头停车监控夜视 包安装",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:20px;\"><strong><span style=\"color:#008080;\">价格优惠，购买后直接到店取货安装</span></strong></span><br />\r\n\t<strong style=\"font-size: 13.3333px;\"><span style=\"font-size: 16px;\">联系电话：</span><span style=\"font-size: 14px;\">15976147027</span></strong></div>\r\n<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:14px;\">地址：惠城区麦地雍逸园音乐时代汽车音响旗舰店</span></div>\r\n<div style=\"text-align: center;\">\r\n\t<strong><span style=\"font-size: 12px;\"><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/21/170126df-b914-485c-8dc9-b621b210ae2f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/11/21/d83c2f7d-577a-4e71-a6d2-a66cb86a064c.jpg\" /></span></strong></div>\r\n<div style=\"text-align: center;\">\r\n\t&nbsp;</div>\r\n",
				"createDate": "2016-11-21"
			},
			{
				"salesCount": "500",
				"marketPrice": "699.0",
				"salesPrice": "480.0",
				"sysTime": "2017-02-21 16:48:09",
				"id": "1229",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/14/f04d9024-3a22-477a-82ae-45409e7e2a9b.jpg",
				"title": "小狼传说 X60 高清星光夜视前后双镜头行车记录仪",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#8b4513;\"><strong><span style=\"font-size:16px;\">480元包安装<br />\r\n\t联系电话：13360898030 &nbsp; &nbsp;13751583978<br />\r\n\t<u>安装地址：惠州下埔南二街凝华苑B栋1楼<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/14/96d16a56-ca2a-4f5e-bd51-c55b52eca5fc.jpg\" /></u><br />\r\n\t<span style=\"font-size:18px;\">实拍效果</span><u><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/14/c3b8ba37-e756-4511-b24d-f1b8f8e2fba2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/10/14/9414bce9-e191-4813-9fbf-5688d7ba45aa.jpg\" /></u></span></strong></span></div>\r\n",
				"createDate": "2016-10-14"
			},
			{
				"salesCount": "500",
				"marketPrice": "39.0",
				"salesPrice": "28.0",
				"sysTime": "2017-02-21 16:48:09",
				"id": "1123",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/20/d890d991-8135-402f-bcbd-1106538fad06.jpg",
				"title": "罗马仕车载充电器 手机平板 QC2.0快充点烟器汽车充 15W",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/20/ac03997b-e85d-48e5-a79d-591bc958043b.jpg\" /></div>\r\n",
				"createDate": "2016-09-20"
			},
			{
				"salesCount": "5000",
				"marketPrice": "39.0",
				"salesPrice": "22.0",
				"sysTime": "2017-02-21 16:48:09",
				"id": "1116",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/19/53e7009a-9e77-4b6a-bc31-d959c07c8089.jpg",
				"title": "罗马仕车载充电器 双USB输出点烟器汽车充 12W",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/19/2d20e080-5081-420a-abce-4ff11c71041c.jpg\" /></div>\r\n",
				"createDate": "2016-09-19"
			},
			{
				"salesCount": "500",
				"marketPrice": "380.0",
				"salesPrice": "269.0",
				"sysTime": "2017-02-21 16:48:09",
				"id": "945",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/1/3be0180e-849f-4566-8108-f9942c677072.jpg",
				"title": "博观按摩枕车用腰部颈肩部按摩器车载家居按摩枕腿部按摩器多功能",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/6a09981a-998e-4c1e-9bf3-068d4ca45bd6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/234f373c-d766-4375-92a2-1e32df1728e6.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/0f2cd372-e846-426a-bacd-31b7468c0ff5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/ec7dd4da-5d71-45e5-8c04-f0c3cbf9bc21.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/2fc432bb-dbb4-4ea2-96e8-f7d1b8be0a94.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/68c6819a-92d5-4a2e-ae67-2c410195f314.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/66633a0d-a432-4807-9925-908870fedd3f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/154a7e18-9081-4215-b4f2-18b475320db5.jpg\" /><br />\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/04665e55-6ad4-4b6b-9213-f27b8ce4c7e7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/bed5f1f7-9789-43ad-8a87-90c3c74d54a3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/c6351ae0-f95d-4173-a114-bdb795a6e315.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/01b53ca3-2355-48e8-b33e-1deeacb9b485.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/7c7716fe-70be-4e5e-a648-b9a0d030db6d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/84fc0d0c-239b-4ef9-b135-3819d476116c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/fb9b3f2f-7278-4a41-9a4a-28c32b055dca.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/56a39bd4-cfef-4a53-b519-00921079b272.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/019c2651-6284-4a4c-a49a-9a8b820e5a11.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/2715556a-4b62-464f-a53f-88e5b2523d34.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/be4ed5b1-1347-4aab-833b-5f8e4988f2d3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/5ded0443-75fa-4c24-86ab-06f0954a378a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/456ed16b-2695-45a3-b1aa-c41c02a7db62.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/40cdcf72-24b9-4ab5-ba39-b59a804f7586.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/13efd7f3-a2e5-4741-b526-f05009f71960.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/1d9fcc76-8aa1-4bc6-ae1a-9c38ecc7ded9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/af115508-d3e3-43e2-a904-8b4947bf42d3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/aeacbfd7-c412-485b-b278-50a6171d6115.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/7/1/aaf9bed2-8007-4a12-bc25-d108c97fe288.jpg\" /></div>\r\n",
				"createDate": "2016-07-01"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 1,
		"totalRecord": 5,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {
	"list": {
		"scrollImg": [
			{
				"id": "10",
				"pic": "http://www.gdshyj.com/shoppic/2016/11/21/0ee58831-74d7-4e04-9b78-3fef9e21bd62.jpg",
				"title": "先锋暖风机",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E5%85%88%E9%94%8B%E6%9A%96%E9%A3%8E%E6%9C%BA",
				"createDate": "2015-12-30"
			},
			{
				"id": "32",
				"pic": "http://www.gdshyj.com/shoppic/2016/10/7/4457b6be-21fd-4c16-a8c8-200633069944.jpg",
				"title": "",
				"url": "http://www.gdshyj.com/shop/webapp/assortment/info.action?id=1143",
				"createDate": "2016-10-07"
			},
			{
				"id": "19",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/4/756e198b-05f8-4335-8473-14a79733ec06.jpg",
				"title": "飞科 带你走进科技的世界",
				"url": "http://www.gdshyj.com/webapp/index/search_result.action?searchKey=%E9%A3%9E%E7%A7%91",
				"createDate": "2016-02-20"
			},
			{
				"id": "29",
				"pic": "http://www.gdshyj.com/shoppic/2016/7/11/44bbf26c-d3c7-44a7-90f2-a4f5f9e2c045.jpg",
				"title": "苏泊尔",
				"url": "http://www.gdshyj.com/shop/webapp/index/search_result.action?searchKey=%E8%8B%8F%E6%B3%8A%E5%B0%94",
				"createDate": "2016-07-11"
			}
		],
		"leftNav": [
			{
				"id": "232",
				"title": "小家电"
			},
			{
				"id": "233",
				"title": "大家电"
			},
			{
				"id": "234",
				"title": "手机数码"
			},
			{
				"id": "336",
				"title": "电脑办公"
			},
			{
				"id": "337",
				"title": "名表首饰"
			},
			{
				"id": "365",
				"title": "化妆品"
			},
			{
				"id": "370",
				"title": "服装"
			},
			{
				"id": "371",
				"title": "女装"
			},
			{
				"id": "372",
				"title": "母婴"
			},
			{
				"id": "373",
				"title": "鞋靴箱包"
			},
			{
				"id": "374",
				"title": "运动户外"
			},
			{
				"id": "375",
				"title": "汽车用品"
			},
			{
				"id": "380",
				"title": "日常用品"
			},
			{
				"id": "395",
				"title": "床上用品"
			}
		],
		"pageList": [
			{
				"salesCount": "500",
				"marketPrice": "498.0",
				"salesPrice": "398.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "1500",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/5/27f4f5f4-bed0-4352-a844-ca5b8735d723.jpg",
				"title": "洗牙器 唯爱冷光牙齿美白仪 速效四环素牙氟斑牙黄牙洁牙美牙仪神器",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"color:#000080;\"><strong><span style=\"font-size:22px;\">购买后返40红包</span></strong></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/5/e94d0921-95bc-4cb8-8f04-521f001e8fe4.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/5/ecbac906-335c-41a8-a9e6-2b89e9badcb4.jpg\" /></div>\r\n",
				"createDate": "2017-01-05"
			},
			{
				"salesCount": "500",
				"marketPrice": "79.0",
				"salesPrice": "45.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "1499",
				"pic": "http://www.gdshyj.com/shoppic/2017/1/4/b6089a4c-405e-4a9b-ac32-db6eed89592f.jpg",
				"title": "目目蒸汽眼罩 预防近视 安神安眠  去除眼袋黑眼圈",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/4/1e27c09d-fab5-4853-bfda-1a67de9f46cc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2017/1/4/28354aef-a182-43f7-bc90-63bbc65d465a.jpg\" /></div>\r\n",
				"createDate": "2017-01-04"
			},
			{
				"salesCount": "500",
				"marketPrice": "138.0",
				"salesPrice": "99.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "1481",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/27/2db0d6a9-c29a-409d-83ac-93b35cbcfe69.jpg",
				"title": "黛诗洗发水洗护套装新版黛诗洗发露玛思卡华控油去屑360ml",
				"content": "<div style=\"text-align: center;\">\r\n\t<span style=\"font-size:16px;\"><span style=\"color: rgb(102, 102, 102); font-family: tahoma, arial, 微软雅黑, sans-serif; line-height: 18px; white-space: nowrap;\">功效:&nbsp;柔软顺滑&nbsp;深层修复&nbsp;滋润营养</span></span><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/27/a57f4053-7dd9-4ab5-a385-dcecaa0a0f4f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/27/8d3038aa-cfad-4c0d-88b3-b2e3e5cd0379.jpg\" /></div>\r\n",
				"createDate": "2016-12-27"
			},
			{
				"salesCount": "500",
				"marketPrice": "338.0",
				"salesPrice": "138.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "1409",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/13/6d587b3b-7291-40be-a157-f450b5d2f222.jpg",
				"title": "最印冷光美牙仪 口腔护理 除臭杀菌 美白牙齿 新技术",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/ecdbf2bf-b151-4d55-871c-dabb6512eebd.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/281cd0af-addc-4cbc-8335-4909f6367905.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/44944c25-50fb-4580-b7e7-e00c70fa958f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/6f5f060d-38aa-4d92-810a-ec76c4826f29.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/47e5be0a-d2d1-4566-bf8e-c92a6ed5656f.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/c42417ef-0b96-4ae1-8e70-e7c56d4d8001.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/1dba6ea2-b577-4676-95b8-daac7a3ab18c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/9195c691-d48a-4e47-b503-be0b03fc5b00.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/13/29e09875-1aab-4d5c-8915-b0aef8e72a72.jpg\" /></div>\r\n",
				"createDate": "2016-12-13"
			},
			{
				"salesCount": "500",
				"marketPrice": "368.0",
				"salesPrice": "255.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "1382",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/7/ec7ace96-deba-4fd9-b091-c0eca6c8ea46.jpg",
				"title": "李时珍黄金视力好眼贴膜 缓解疲劳预防近视去眼袋黑眼圈100袋",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/7/f0151a16-daac-412c-b399-400b52651e49.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/7/acabd171-a1c1-40a0-b1d9-38024bdc3cdc.jpg\" /></div>\r\n",
				"createDate": "2016-12-07"
			},
			{
				"salesCount": "500",
				"marketPrice": "399.0",
				"salesPrice": "279.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "1359",
				"pic": "http://www.gdshyj.com/shoppic/2016/12/4/bb430f59-8fc4-442f-b7fd-54f233f69d16.jpg",
				"title": "碧缇福美牙仪冷光牙齿美白仪去牙渍大黄牙速效洗牙神器",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/4/c9d603d7-fa11-4275-8688-1b729c858ae7.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/12/4/64c5abc3-889d-416a-930f-56381be99ac5.jpg\" /></div>\r\n",
				"createDate": "2016-12-04"
			},
			{
				"salesCount": "100",
				"marketPrice": "55.0",
				"salesPrice": "45.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "1143",
				"pic": "http://www.gdshyj.com/shoppic/2016/9/22/de9ec420-8b7c-4511-bca7-ce5bd74a12bc.jpg",
				"title": "红瑶淘米水洗发水正品 ",
				"content": "<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/22/6971e78e-30f6-4781-a201-5c865a7fb7c2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/9/22/88623c9e-e9c4-4be9-bc36-0ad30a3a8392.jpg\" />",
				"createDate": "2016-09-22"
			},
			{
				"salesCount": "300",
				"marketPrice": "480.0",
				"salesPrice": "380.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "969",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/5/3cec351c-5ef2-4e5e-b7d8-1655a65e026f.jpg",
				"title": "royal latex泰国皇家进口纯天然乳胶枕头橡胶颈椎枕 美容颗粒枕 代购",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/797bb7c5-0c95-46aa-b185-95598df90ace.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/073af77d-0f39-4976-a531-96625da79ac5.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/e95ec783-0209-4e86-8f54-8a5df44611d1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/e5d378e6-73e5-402e-a097-cb59d7b91cb1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/4e7a5e6e-34d5-4f85-aa1e-d721e2b4701d.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/ba3cfeb3-90fa-4521-8b60-0c27b0016e29.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/af307842-c78a-4240-ac78-7593f74943d1.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/ab265f4d-29dd-4116-9248-414c19943b4e.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/5238e5a8-632d-41c2-ae1a-0830adb782a9.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/dfe43221-8553-4f88-afb8-672a74cf2642.jpg\" /></div>\r\n",
				"createDate": "2016-08-05"
			},
			{
				"salesCount": "300",
				"marketPrice": "480.0",
				"salesPrice": "380.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "968",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/5/d09c529c-c5d4-46e1-8fa6-98157a3505e0.jpg",
				"title": "royal latex泰国皇家进口纯天然乳胶枕头橡胶颈椎枕 高低平面枕 代购",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/52ed15f4-2894-4571-8330-25708b053820.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/62bab66d-85b8-4b5e-94d8-62d82f175fad.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/c4af9ad3-d2dc-4965-9a09-745d7928830a.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/c9f6b279-7442-420f-930d-1693b615defc.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/d6fe9b77-b5f3-4c92-9add-5a1403795268.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/c9920fb5-1a0c-45cc-8cf1-613c1554c3e3.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/eeb3e476-4cb5-40f8-b080-2c4947258b30.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/08ebf7fe-b2e8-43d8-a4f9-b7bdf398c210.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/30e4cfd2-0eca-4efb-a2c1-5b22e3c49982.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/865b9350-4327-421c-b1cc-26dc71a0ee47.jpg\" /></div>\r\n",
				"createDate": "2016-08-05"
			},
			{
				"salesCount": "300",
				"marketPrice": "480.0",
				"salesPrice": "380.0",
				"sysTime": "2017-02-21 16:48:31",
				"id": "967",
				"pic": "http://www.gdshyj.com/shoppic/2016/8/5/83a4d76b-e3fa-4276-aa6a-30ec43ac7329.jpg",
				"title": "royal latex泰国皇家进口纯天然乳胶高低颗粒枕头代购",
				"content": "<div style=\"text-align: center;\">\r\n\t<img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/08ce69f1-241e-464d-a82f-80ab512a4f49.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/43e366bc-3e08-4fcc-9cb2-68ec0c928d2c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/b97b05c4-8caa-4230-bca3-4860d47d070c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/b7f8a39a-e4a0-432c-9e4f-7f82bac183d2.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/13cefa72-5274-4a9d-91ab-cb010bd9dcfd.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/9e7f0e5c-7ea6-4117-a35d-a0d115bdf360.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/195653e3-3300-4c4e-82a4-9bf3b761284c.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/205da091-d4d0-4354-bce4-4a738a614171.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/03c336fb-ec46-4a37-9b93-23f9146a68ab.jpg\" /><img alt=\"\" src=\"http://www.gdshyj.com/shoppic/2016/8/5/66e6ed8a-eb9f-43e7-b682-74c698c48e7a.jpg\" /></div>\r\n",
				"createDate": "2016-08-05"
			}
		],
		"pageNum": 1,
		"pageSize": 10,
		"totalPage": 3,
		"totalRecord": 24,
		"updateTime": ""
	},
	"status": 0
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_resource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_home_home_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_home_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_home_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_goods_goods_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_goods_goods_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_goods_goods_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_shop_shop_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_shop_shop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_shop_shop_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_my_my_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_my_my_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_my_my_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_home_usbPages_homeDetails_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_home_usbPages_homeDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_home_usbPages_homeDetails_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_details_details_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_details_details_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_details_details_vue__);











__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_resource___default.a);
const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    linkActiveClass: 'active', //显示当前的类名
    routes: [{
        path: '/home',
        component: __WEBPACK_IMPORTED_MODULE_4__views_home_home_vue___default.a,
        children: [{
            name: 'life',
            path: '/life/:homeID',
            component: __WEBPACK_IMPORTED_MODULE_8__views_home_usbPages_homeDetails_vue___default.a
        }]
    }, {
        name: 'goods',
        path: '/goods',
        component: __WEBPACK_IMPORTED_MODULE_5__views_goods_goods_vue___default.a,
        children: [{
            name: 'details',
            path: '/details',
            component: __WEBPACK_IMPORTED_MODULE_9__components_details_details_vue___default.a
        }]
    }, {
        name: 'shop',
        path: '/shop',
        component: __WEBPACK_IMPORTED_MODULE_6__views_shop_shop_vue___default.a
    }, {
        path: '/my',
        component: __WEBPACK_IMPORTED_MODULE_7__views_my_my_vue___default.a
    }]
});
router.push('/home'); //默认一开始显示home页

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    router: router,
    render: h => h(__WEBPACK_IMPORTED_MODULE_3__App_vue___default.a)
}).$mount("#app");

/***/ })
],[88]);
//# sourceMappingURL=app.84d0ffc6fa9ac8aba395.js.map