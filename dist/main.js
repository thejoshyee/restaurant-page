(()=>{"use strict";const e=function(){const e=document.getElementById("tab-content");e.classList.add("flex"),e.innerHTML="";const t=function(){const e=document.createElement("div");e.setAttribute("id","about-container");const t=document.createElement("div");t.setAttribute("class","welcome-container");const n=document.createElement("p");n.innerHTML="<p>Do you love Chinese Food? Then you will love Josh's Chinese Cuisine! It's the best in San Diego, CA!</p>\n    <p>You will get authentic Hong Kong Style food with all your favorite goodies like Chow Fun, General Chicken, Lo Sa Bao, \n    Ham Yu Guy Lop Fan, Scallop Fried Rice, Fried Tofu, Flounder and much much more!</p>\n    <p>So stop on by and say hello! We love meeting new people and sharing our Chinese culture all around San Diego!</p>";const o=document.createElement("h2");o.textContent="Welcome to San Diego's #1 Chinese Restaurant",o.setAttribute("class","welcome-title");const c=document.createElement("img");return c.setAttribute("src","https://www.thespruceeats.com/thmb/noIa6Wr8DKHmRlm9OH6dOHsHEbQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg"),c.setAttribute("class","home-image"),e.appendChild(c),e.appendChild(o),e.appendChild(n),e.appendChild(t),t.append(o),t.append(n),e}();e.appendChild(t)};function t(e,t,n,o,c,i){const d=document.createElement("div");d.classList.add("menu-container");const s=document.createElement("img");s.setAttribute("src",e),s.setAttribute("alt",t),s.setAttribute("class",i);const a=document.createElement("div");a.classList.add("description");const l=document.createElement("div");l.innerHTML=n,l.classList.add("food-name");const r=document.createElement("div");r.innerHTML=o,r.classList.add("about-food");const u=document.createElement("div");return u.innerHTML=c,u.classList.add("cost"),a.appendChild(l),a.appendChild(r),a.appendChild(u),d.appendChild(s),d.appendChild(a),d}const n=function(){const e=document.getElementById("tab-content");e.classList.add("flex"),e.textContent="",[t("https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2014/10/Beef-Chow-Fun_main-2-500x375.jpg","Chow Fun Noodles","Chow Fun Noodles","Flat Stir Fried Noodles with beef or chicken.","- $8.00","chowfun"),t("https://www.dinneratthezoo.com/wp-content/uploads/2019/07/general-tsos-chicken-4.jpg","General Chicken","General Chicken","The best fried chicken dripped in sauce that you'll love forever.","- $9.00","general-chicken")].forEach((t=>{e.append(t)}))},o=function(){const e=document.getElementById("tab-content");e.classList.add("flex"),e.innerHTML="";const t=function(){const e=document.createElement("div");e.classList.add("contact-container");const t=document.createElement("h2");t.textContent="Contact Us",e.appendChild(t);const n=document.createElement("p");return n.innerHTML="<p><i>For questions or concerns please feel free to contact us with one of the methods below!</i></p>\n    <p><b>Email:</b> hello@joshschinesecuisine.com</p>\n    <p><b>Phone:</b> 1-800-ChineseFood</p>",e.appendChild(n),e}();e.appendChild(t)};(function(){const e=document.getElementById("content"),t=document.createElement("header");t.setAttribute("id","header"),e.appendChild(t),t.textContent="JOSH'S CHINESE CUISINE";const n=document.createElement("nav");n.setAttribute("id","nav-bar"),e.appendChild(n);const o=document.createElement("button");o.setAttribute("id","home-btn"),o.innerHTML="Home",n.appendChild(o);const c=document.createElement("button");c.setAttribute("id","menu-btn"),c.innerHTML="Menu",n.appendChild(c);const i=document.createElement("button");i.setAttribute("id","contact-btn"),i.innerHTML="Contact",n.appendChild(i);const d=document.createElement("main");d.setAttribute("id","tab-content"),e.appendChild(d);const s=document.createElement("footer");s.setAttribute("class","footer"),s.innerHTML="Josh's Chinese Food 2022",e.appendChild(s)})(),e(),function(){const t=document.getElementById("home-btn"),c=document.getElementById("menu-btn"),i=document.getElementById("contact-btn");t.addEventListener("click",e),c.addEventListener("click",n),i.addEventListener("click",o)}()})();