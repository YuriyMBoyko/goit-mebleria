import{A as c}from"./assets/vendor-Cb7VvBBu.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();(()=>{const t={openModalButton:document.querySelector("[data-mobile-menu-open]"),closeModalButtons:document.querySelectorAll("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};t.openModalButton.addEventListener("click",n),t.closeModalButtons.forEach(o=>{o.addEventListener("click",n)});function n(){t.mobileMenu&&(t.mobileMenu.classList.toggle("is-open"),s())}function r(){return t.mobileMenu.classList.contains("is-open")}function s(){r()?document.addEventListener("keydown",e):document.removeEventListener("keydown",e)}function e(o){o.key==="Escape"&&r()&&n()}})();const a=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}];document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".accordion-container");if(!t)return;const n=new URL("/goit-mebleria/assets/icons-yBS_w1Iq.svg",import.meta.url).href,r="chevron-down",s=a.map(({question:e,answer:o})=>`
    <div class="ac">
      <h3 class="ac-header">
        <button class="ac-trigger" type="button">
          <span>${e}</span>
          <svg class="faq-question-arrow">
            <use href="${n}#${r}"></use>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <p class="ac-text">${o}</p>
      </div>
    </div>
    `).join("");t.innerHTML=s,new c(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(e){console.log(e)}})});
//# sourceMappingURL=index.js.map
