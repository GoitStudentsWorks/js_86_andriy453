var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n.register("eW3A3",function(e,t){function o(){let e=document.documentElement.getAttribute("data-theme"),t="light"===e?"dark":"light";document.documentElement.setAttribute("data-theme",t);let o=document.querySelectorAll(".input-switcher");o.forEach(function(e){e.checked="dark"===t}),localStorage.setItem("theme",t)}let n=document.querySelectorAll(".input-switcher");n.forEach(function(e){e.addEventListener("change",o)}),function(){let e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",o=e||t;document.documentElement.setAttribute("data-theme",o);let n=document.querySelectorAll(".input-switcher");n.forEach(function(e){e.checked="dark"===o})}()}),n.register("1WbVH",function(e,t){var o=n("2klPp");(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{let n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),n?(o.enableBodyScroll,document.body.classList.remove("no-scroll")):(o.disableBodyScroll,document.body.classList.add("no-scroll"))};t.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),(0,o.enableBodyScroll)(e),document.body.classList.remove("no-scroll"))})})()}),n.register("2klPp",function(e,t){e.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}}),n.register("6h8HX",function(e,t){let o=document.getElementById("myModal"),n=document.getElementById("openModal"),i=document.querySelector(".btnOrderNow"),l=document.getElementsByClassName("close")[0],s=document.querySelector(".modal-form-stl"),r=document.getElementById("messageBox");document.getElementById("messageText");let c=document.getElementById("okButton"),a=document.getElementById("thanksBox"),d=document.getElementById("closeThanksButton");function u(e){e.target===o&&(o.style.display="none",r.style.display="none",a.style.display="none",window.removeEventListener("click",u))}n.addEventListener("click",()=>{o.style.display="block",window.addEventListener("click",u)}),i&&i.addEventListener("click",()=>{o.style.display="block",window.addEventListener("click",u)}),l.onclick=function(){o.style.display="none",r.style.display="none",a.style.display="none"},window.addEventListener("click",u),s.addEventListener("submit",function(e){e.preventDefault(),o.style.display="none",a.style.display="block"}),c.onclick=function(){r.style.display="none"},d.onclick=function(){a.style.display="none",s.reset()}}),n.register("2XlBD",function(e,t){var o=n("3qmVP");async function i(e){return fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()})}let l=document.querySelector(".backdrop-see"),s=document.querySelector(".modal_see"),r=document.querySelector(".gallery");r.addEventListener("click",function(e){if("BUTTON"===e.target.tagName&&"See recipe"===e.target.innerText){let t=e.target.id;i(t).then(e=>{s.innerHTML=u(e);let n=document.querySelector(".close-modal");l.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),n.addEventListener("click",a),document.addEventListener("keydown",d);let i=document.querySelector(".js-favorite"),r=document.querySelector(".js-rating");JSON.parse(localStorage.getItem("favorite")&&JSON.parse(localStorage.getItem("favorite")).includes(t))&&(i.textContent="Remove from favorites"),i.addEventListener("click",p),(0,o.modalRatingOpCl)(r)})}});let c=document.querySelector(".popular");function a(){l.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",d),document.getElementById("v1").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")}function d(e){"Escape"===e.code&&a()}function u({_id:e,title:t,rating:o,time:n,instructions:i,youtube:l,tags:s,ingredients:r}){return`
      <button type="button" class="close-modal">
      <svg class="close-sv_g" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#eea10c">
      <path d="M15 5L5 15" stroke="#050505" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 5L15 15" stroke="#050505" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
              </button>
              <div class="modal__video">
              <iframe poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" class="frame-video" width="100%" height="100%" src="https://www.youtube.com/embed/${l.slice(l.lastIndexOf("=")+1)}?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='v1'></iframe></div>
              <h2 class="modal__title">${t}</h2>
              <div class="rating-modal-re">
              <p class="rating-value">${o}</p>
              <div class="rating-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#EEA10C"/>
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#EEA10C"/>
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#EEA10C"/>
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#EEA10C"/>
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#F8F8F8" fill-opacity="0.1"/>
            </svg>
              </div>
              <p class="time">${n} min</p>
          </div>
              <ul class="ingredient-list">
              ${r.map(({name:e,measure:t})=>`<li class="ingredient-item">
            <p class="ingredient-name">${e}</p>
            <p class="ingredient-value">${t}</p>
          </li>`).join("")}
              </ul>
              <div class="info-bar">
                  <ul class="tag-list">
                  ${function(e){if(e.length)return e.map(e=>`<li class="tag-item">#${e}</li>`).join("")}(s)}
                  </ul>
              </div>
              <div class="recipe">
                  <p class="instructions">
                  ${i}
                  </p>
              </div>
              <div class="modal-buttons">
                  <button type="button" class="modal-button color js-favorite " id=${e}>Add to favorite</button>
                  <button type="button" class="modal-button js-rating" id=${e}>Give a rating</button>
              </div>`}c&&c.addEventListener("click",e=>{let t=e.target.closest(".photo-card_recipes");t&&i(t.id).then(e=>{s.innerHTML=u(e);let n=document.querySelector(".close-modal");l.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),n.addEventListener("click",a),document.addEventListener("keydown",d);let i=document.querySelector(".js-favorite"),r=document.querySelector(".js-rating");i.addEventListener("click",p),r.addEventListener("click",()=>{document.querySelector(".rating-backdrop").classList.remove("visible"),(0,o.modalRatingOpCl)(r)}),JSON.parse(localStorage.getItem("favorite")&&JSON.parse(localStorage.getItem("favorite")).includes(t.id))&&console.log("gggg")})}),window.onclick=function(e){e.target===l&&(l.classList.add("is-hidden"),document.body.classList.remove("no-scroll"))};let m="favorite",g=JSON.parse(localStorage.getItem(m))??[];async function p(e){e.target.textContent="Remove from favorites";let t=e.target.id,o=g.some(({_id:e})=>e===t);if(o){g=g.filter(({_id:e})=>e!==t),e.target.classList.remove("heart-icon-active"),e.target.textContent="Add to favorite",localStorage.setItem(m,JSON.stringify(g));return}try{let o=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${t}`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).catch(e=>console.error("Error:",e));g.push(o),localStorage.setItem(m,JSON.stringify(g)),e.target.classList.add("heart-icon-active")}catch(e){console.error("Error:",e)}}}),n.register("3qmVP",function(e,t){}),n.register("i4q0v",function(e,t){let o=document.querySelector(".scroll-top-btn");window.onscroll=()=>{window.scrollY>700?o.classList.remove("show-btn_hide"):window.scrollY<700&&o.classList.add("show-btn_hide")},o.onclick=()=>{window.scrollTo(0,0)}});
//# sourceMappingURL=favorites.248fa1f2.js.map