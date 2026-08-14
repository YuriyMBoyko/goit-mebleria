import{A as f,S as p,N as m,P as b,K as v,M as g}from"./assets/vendor-oUuVXgl_.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();(()=>{const s={openModalButton:document.querySelector("[data-mobile-menu-open]"),closeModalButtons:document.querySelectorAll("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};s.openModalButton.addEventListener("click",n),s.closeModalButtons.forEach(e=>{e.addEventListener("click",n)});function n(){s.mobileMenu&&(s.mobileMenu.classList.toggle("is-open"),r())}function o(){return s.mobileMenu.classList.contains("is-open")}function r(){o()?document.addEventListener("keydown",t):document.removeEventListener("keydown",t)}function t(e){e.key==="Escape"&&o()&&n()}})();const w={faq:[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}]};document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".accordion-container");if(!s)return;const r=`${new URL("/goit-mebleria/assets/icons-yBS_w1Iq.svg",import.meta.url).href}#chevron-down`,t=w.faq.map(({question:e,answer:a})=>`
    <div class="ac">
      <h3 class="ac-header">
        <button class="ac-trigger" type="button">
          <span>${e}</span>
          <svg class="faq-question-arrow">
            <use href="${r}"></use>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <p class="ac-text">${a}</p>
      </div>
    </div>
    `).join("");s.innerHTML=t,new f(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(e){console.log(e)}})});const k={feedbacks:[],total:0,page:"1",limit:"10"};function y(s,n){const o=h(s);o&&(n?o.classList.remove("hidden"):o.classList.add("hidden"))}function h(s){return document.querySelector(s)}document.addEventListener("DOMContentLoaded",()=>{L(".feedback-data-container",k.feedbacks),q(),M()});function L(s,n){if(!n||!Array.isArray(n))return;const o=document.querySelector(s);if(!o)return;const e=`${new URL("/goit-mebleria/assets/icons-yBS_w1Iq.svg",import.meta.url).href}#star`,a=n.map(({_id:i,name:c,date:l,descr:d,rate:u})=>`
    <li class="feedback-item swiper-slide" data_id="${i}">
  <!--          
      <div class="feedback-rating rating value-3">
        <div class="start-container"></div>
      </div>
    -->
      <div class="feedback-rating" data-date="${l}" data-rate="${u}">
        <div class="feedback-star-wrapper">
          <svg class="feedback-star is-marked">
            <use href="${e}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${e}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${e}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${e}"></use>
          </svg>
          <svg class="feedback-star">
            <use href="${e}"></use>
          </svg>
        </div>
      </div>
      <p class="feedback-text">${d}</p>
      <p class="feedback-author">${c}</p>
    </li>
    `).join("");o.innerHTML=a}function q(){new p(".feedback-swiper",{modules:[m,b,v,g],direction:"horizontal",loop:!1,pagination:{el:".feedback-swiper-pagination",type:"bullets",clickable:!0},navigation:{prevEl:".feedback-swiper-button-prev",nextEl:".feedback-swiper-button-next"},slidePerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},mousewheel:{enabled:!0,forceToAxis:!0,invert:!1}})}function M(){const s=document.querySelector(".feedback-list");s&&y(".feedback-swiper-controls",s.childElementCount>0)}
//# sourceMappingURL=index.js.map
