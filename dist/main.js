!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a=function(){const e=document.createElement("footer");return e.innerHTML="<p>© 2020 Beesley International</p>",e};var o=function(){const e=document.createElement("nav");return e.innerHTML=' <a class="navbar-brand" id="logo-navbar" href="#">\n                        <img src="images/beesley.png" alt="logo">\n                        </a>\n                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n                        <span class="navbar-toggler-icon"></span>\n                        </button>\n                        <div class="collapse navbar-collapse ">\n                            <div class="navbar-nav navbar-sections" >\n                            <a class="nav-item nav-link active" id="menu-navbar" href="#">Menu</a>\n                            <a class="nav-item nav-link" href="#">Locations</a>\n                            <a class="nav-item nav-link" href="#">Our Story</a>\n                            <a class="nav-item nav-link" id= "contact-navbar"href="#">Contact Us</a>\n                            </div>\n                        </div>',e.className="navbar navbar-expand-lg navbar-light bg-light ",e};var r=function(){const e=document.createElement("div");return e.innerHTML=' <div class="image image1" id="image image1">\n                                <p>"My favorite restaurant in all the world"</p>\n                                <p>-Michelle Obama</p>\n                            </div>\n                            <div class="image image2" id="image image2">\n                                <p>"Definitely a must when you\'re in town"</p>\n                                <p>-Elon Musk</p>\n                            </div>\n                            <div class="image image3" id="image image3">\n                                <p>"I had the idea for Star Wars here!"</p>\n                                <p>-George Lucas</p>\n                            </div>\n                            <div class="image image4" id="image image4">\n                                <p>"I wrote my first hit song in a napkin when I was eating a hamburger in this place!</p>\n                                <p>-Lady Gaga</p>\n                            </div>',e.className="images-sections",e};var i=function(){const e=document.createElement("div");return e.innerHTML='<div class="menu-info image" id="menu-info">\n                    </div>',e.className="menu-section",e};var l=function(){const e=document.createElement("div");return e.innerHTML='  <div id= "form-sent" class="form-sent">\n                             </div>\n                            <h3>Drop Us a Message</h3>\n                            <form method="post">\n                              <div class="row">\n                                <div class="col-md-6 section1-form">\n                                    <div class="form-group">\n                                        <input type="text" class="form-control" placeholder="Your Name *"  required/>\n                                    </div>\n                                    <div class="form-group">\n                                        <input type="email" class="form-control" placeholder="Your Email *" required/>\n                                    </div>\n                                    <div class="form-group">\n                                        <input type="tel"  class="form-control" placeholder="Your Phone Number *"/>\n                                    </div>\n                                    <div class="form-group">\n                                        <input type="submit"  class="contact-button" value="Send Message" />\n                                    </div>\n                                </div>\n                                 <div class="col-md-6 section2-form">\n                                    <div class="form-group">\n                                        <textarea name="txtMsg" class="form-control" placeholder="Your Message *" required></textarea>\n                                    </div>\n                            </div>\n                        </div>\n                    </form>',e.className="form-section",e};const s=document.getElementById("content");s.appendChild(o()),s.appendChild(r()),s.insertBefore(i(),s.lastChild),s.insertBefore(l(),s.lastChild),s.appendChild(a());const c={displayImage:()=>{function e(){if(0===document.querySelectorAll(".open-img").length)this.classList.toggle("open-img");else{const e=document.querySelectorAll(".open-img");for(let n=0;n<e.length;n+=1)e[n].classList.remove("open-img")}}document.querySelectorAll(".image").forEach(n=>n.addEventListener("click",e))},displayMenu:()=>{document.getElementById("menu-navbar").addEventListener("click",(function(){document.querySelector(".menu-section").style.display="block",document.querySelector(".images-sections").style.display="none",document.querySelector(".form-section").style.display="none"}))},returnToMainMenu:()=>{document.getElementById("logo-navbar").addEventListener("click",(function(){document.querySelector(".form-section").style.display="none",document.querySelector(".menu-section").style.display="none",document.querySelector(".images-sections").style.display="flex"}))},displayContact:()=>{document.getElementById("contact-navbar").addEventListener("click",(function(){document.querySelector(".form-section").style.display="flex",document.querySelector(".images-sections").style.display="none",document.querySelector(".menu-section").style.display="none"}))}};c.displayImage(),c.displayMenu(),c.returnToMainMenu(),c.displayContact()}]);