!function(e){var n={};function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=0)}([function(e,n,a){"use strict";a.r(n);var t=function(){const e=document.createElement("footer");return e.innerHTML="<p>© 2020 Beesley International</p>",e};var i=function(){const e=document.createElement("nav");return e.innerHTML=' <a class="navbar-brand" id="logo-navbar" href="#">\n                        <img src="images/beesley.png" alt="logo">\n                        </a>\n                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n                        <span class="navbar-toggler-icon"></span>\n                        </button>\n                        <div class="collapse navbar-collapse ">\n                            <div class="navbar-nav navbar-sections" >\n                            <a class="nav-item nav-link active" id="menu-navbar" href="#">Menu</a>\n                            <a class="nav-item nav-link" href="#">Locations</a>\n                            <a class="nav-item nav-link" href="#">Our Story</a>\n                            <a class="nav-item nav-link" href="#">Contact Us</a>\n                            </div>\n                        </div>',e.className="navbar navbar-expand-lg navbar-light bg-light ",e};var r=function(){const e=document.createElement("div");return e.innerHTML=' <div class="image image1" id="image image1">\n                                <p>"My favorite restaurant in all the world"</p>\n                                <p>-Michelle Obama</p>\n                            </div>\n                            <div class="image image2" id="image image2">\n                                <p>"Definitely a must when you\'re in town"</p>\n                                <p>-Elon Musk</p>\n                            </div>\n                            <div class="image image3" id="image image3">\n                                <p>"I had the idea for Star Wars here!"</p>\n                                <p>-George Lucas</p>\n                            </div>\n                            <div class="image image4" id="image image4">\n                                <p>"I wrote my first hit song in a napkin when I was eating a hamburger in this place!</p>\n                                <p>-Lady Gaga</p>\n                            </div>',e.className="images-sections",e};var o=function(){const e=document.createElement("div");return e.innerHTML='<div class="menu-info image" id="menu-info">\n                    </div>',e.className="menu-section",e};const l=document.getElementById("content");function s(){if(0===document.querySelectorAll(".open-img").length)this.classList.toggle("open-img");else{const e=document.querySelectorAll(".open-img");for(let n=0;n<e.length;n+=1)e[n].classList.remove("open-img")}}l.appendChild(i()),l.appendChild(r()),l.insertBefore(o(),l.lastChild),l.appendChild(t()),document.querySelectorAll(".image").forEach(e=>e.addEventListener("click",s)),document.getElementById("menu-navbar").addEventListener("click",(function(){document.querySelector(".menu-section").style.display="block",document.querySelector(".images-sections").style.display="none"})),document.getElementById("logo-navbar").addEventListener("click",(function(){document.querySelector(".menu-section").style.display="none",document.querySelector(".images-sections").style.display="flex"}))}]);