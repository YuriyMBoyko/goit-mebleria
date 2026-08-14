import{A as f}from"./assets/vendor-Cb7VvBBu.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const a={openModalButton:document.querySelector("[data-mobile-menu-open]"),closeModalButtons:document.querySelectorAll("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};a.openModalButton.addEventListener("click",n),a.closeModalButtons.forEach(t=>{t.addEventListener("click",n)});function n(){a.mobileMenu&&(a.mobileMenu.classList.toggle("is-open"),s())}function c(){return a.mobileMenu.classList.contains("is-open")}function s(){c()?document.addEventListener("keydown",e):document.removeEventListener("keydown",e)}function e(t){t.key==="Escape"&&c()&&n()}})();const l={faq:[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}]};document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".accordion-container");if(!a)return;const s=`${new URL("/goit-mebleria/assets/icons-yBS_w1Iq.svg",import.meta.url).href}#chevron-down`,e=l.faq.map(({question:t,answer:r})=>`
    <div class="ac">
      <h3 class="ac-header">
        <button class="ac-trigger" type="button">
          <span>${t}</span>
          <svg class="faq-question-arrow">
            <use href="${s}"></use>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <p class="ac-text">${r}</p>
      </div>
    </div>
    `).join("");a.innerHTML=e,new f(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(t){console.log(t)}})});const u={feedbacks:[{_id:"682fbbdf8acbdf505592acdf",name:"Анна К.",date:"2024-12-01",descr:"Сайт дуже зручний, легко знайшла все, що потрібно. Обслуговування на висоті, меблі чудові!",rate:5},{_id:"682fbbdf8acbdf505592acf5",name:"Ірина Д.",date:"2025-01-15",descr:"Меблі для дитячої кімнати безпечні та яскраві. Дитина в захваті!",rate:4.5},{_id:"682fbbdf8acbdf505592acf8",name:"Людмила А.",date:"2025-01-21",descr:"Гардеробна система – це мрія. Тепер у нас повний порядок в речах.",rate:4.5},{_id:"682fbbdf8acbdf505592acfd",name:"Софія Г.",date:"2025-01-31",descr:"Крісло-кокон – ідеальне місце для релаксу. Дуже задоволена!",rate:4},{_id:"682fbbdf8acbdf505592ad17",name:"Дарія З.",date:"2025-03-24",descr:"Тумба для ванної кімнати дуже містка, все помістилося.",rate:5},{_id:"682fbbdf8acbdf505592ad24",name:"Роман Г.",date:"2025-04-19",descr:"Картина 'Абстракція Модерн' прикрасила нашу вітальню. Дуже задоволені.",rate:5},{_id:"682fbbdf8acbdf505592ad25",name:"Олена Л.",date:"2025-04-21",descr:"Менеджер допоміг з вибором, врахувавши всі наші побажання.",rate:5},{_id:"682fbbdf8acbdf505592ad32",name:"Ірина Г.",date:"2025-05-17",descr:"Вибір дитячих меблів дуже великий. Знайшли саме те, що шукали.",rate:4},{_id:"682fbbdf8acbdf505592ace3",name:"Наталія Л.",date:"2024-12-09",descr:"Замовляли кухню. Консультант допоміг з вибором, дизайн-проект безкоштовний. Дуже задоволені результатом!",rate:4.5},{_id:"682fbbdf8acbdf505592ace8",name:"Павло Р.",date:"2024-12-19",descr:"Шафа-купе ідеально вписалася в інтер'єр. Збірка зайняла небагато часу.",rate:5}],total:88,page:"1",limit:"10"};document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".feedback-data-container");if(!a)return;const s=`${new URL("/goit-mebleria/assets/icons-yBS_w1Iq.svg",import.meta.url).href}#star`,e=u.feedbacks.map(({_id:t,name:r,date:o,descr:d,rate:i})=>`
    <li class="feedback-item" data_id="${t}">
  <!--          
      <div class="feedback-rating rating value-3">
        <div class="start-container"></div>
      </div>
    -->
      <div class="feedback-rating" data-date="${o}" data-rate="${i}">
        <div class="feedback-star-wrapper">
          <svg class="feedback-star is-marked">
            <use href="${s}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${s}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${s}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${s}"></use>
          </svg>
          <svg class="feedback-star">
            <use href="${s}"></use>
          </svg>
        </div>
      </div>
      <p class="feedback-text">${d}</p>
      <p class="feedback-author">${r}</p>
    </li>
    `).join("");a.innerHTML=e});
//# sourceMappingURL=index.js.map
