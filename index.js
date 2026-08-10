import{A as i}from"./assets/vendor-Cb7VvBBu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();(()=>{const r={openModalButton:document.querySelector("[data-mobile-menu-open]"),closeModalButtons:document.querySelectorAll("[data-mobile-menu-close]"),modal:document.querySelector("[data-mobile-menu]")};r.openModalButton.addEventListener("click",t),r.closeModalButtons.forEach(n=>{n.addEventListener("click",t)});function t(){r.modal.classList.toggle("is-open")}})();const a=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}];document.addEventListener("DOMContentLoaded",()=>{const r=a.map(({question:n,answer:s})=>`
    <div class="ac">
      <h3 class="ac-header">
        <button class="ac-trigger" type="button">
          <span>${n}</span>
          <svg class="faq-question-arrow">
            <use href="./img/icons.svg#chevron-down"></use>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <p class="ac-text">${s}</p>
      </div>
    </div>
    `).join(""),t=document.querySelector(".accordion-container");t&&(t.innerHTML=r,new i(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(n){console.log(n)}}))});
//# sourceMappingURL=index.js.map
