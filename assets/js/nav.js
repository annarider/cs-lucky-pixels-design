(()=>{function u(){let t=window.location.pathname,e=t.endsWith("/")?t.slice(0,-1):t;document.querySelectorAll(".cs-li-link").forEach(n=>{n.classList.remove("cs-active");let o=n.getAttribute("href"),i=o.endsWith("/")?o.slice(0,-1):o;(e===i||e===""&&i===""||e===""&&i==="/")&&n.classList.add("cs-active")})}document.addEventListener("DOMContentLoaded",u);window.addEventListener("popstate",u);var f=document.querySelector("body"),c=document.querySelector("#cs-navigation"),s=document.querySelector("#cs-navigation .cs-toggle");function d(t){let e=t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",e==="false"?"true":"false")}function r(){s.classList.toggle("cs-active"),c.classList.toggle("cs-active"),f.classList.toggle("cs-open"),d(s)}s.addEventListener("click",r);c.addEventListener("click",function(t){t.target===c&&c.classList.contains("cs-active")&&r()});function a(t){t.classList.toggle("cs-active");let e=t.querySelector(".cs-dropdown-button");e&&d(e)}var L=document.querySelectorAll(".cs-dropdown");L.forEach(t=>{let e=!1;t.addEventListener("focusout",function(n){if(e){e=!1;return}if(!t.contains(n.relatedTarget)){t.classList.remove("cs-active");let o=t.querySelector(".cs-dropdown-button");o&&d(o)}}),t.addEventListener("keydown",function(n){t.classList.contains("cs-active")&&n.stopPropagation(),(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a(t)),n.key==="Escape"&&(e=!0,a(t))}),window.matchMedia("(max-width: 63.9375rem)").matches&&t.addEventListener("click",()=>a(t))});var g=document.querySelectorAll(".cs-drop-li > .cs-li-link");g.forEach(t=>{t.addEventListener("keydown",function(e){e.key==="Enter"&&(window.location.href=this.href)})});document.addEventListener("keydown",t=>{t.key==="Escape"&&s.classList.contains("cs-active")&&r()});})();
