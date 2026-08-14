import{A as b,S as p,N as m,P as v,K as g,M as w}from"./assets/vendor-oUuVXgl_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();(()=>{const a={openModalButton:document.querySelector("[data-mobile-menu-open]"),closeModalButtons:document.querySelectorAll("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};a.openModalButton.addEventListener("click",s),a.closeModalButtons.forEach(e=>{e.addEventListener("click",s)});function s(){a.mobileMenu&&(a.mobileMenu.classList.toggle("is-open"),r())}function n(){return a.mobileMenu.classList.contains("is-open")}function r(){n()?document.addEventListener("keydown",t):document.removeEventListener("keydown",t)}function t(e){e.key==="Escape"&&n()&&s()}})();const k={faq:[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}]};document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".accordion-container");if(!a)return;const r=`${new URL("/goit-mebleria/assets/icons-yBS_w1Iq.svg",import.meta.url).href}#chevron-down`,t=k.faq.map(({question:e,answer:o})=>`
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
        <p class="ac-text">${o}</p>
      </div>
    </div>
    `).join("");a.innerHTML=t,new b(".accordion-container",{duration:400,showMultiple:!1,onOpen:function(e){console.log(e)}})});const i={feedbacks:[{_id:"682fbbdf8acbdf505592acdf",name:"Анна К.",date:"2024-12-01",descr:"Сайт дуже зручний, легко знайшла все, що потрібно. Обслуговування на висоті, меблі чудові!",rate:5},{_id:"682fbbdf8acbdf505592acf5",name:"Ірина Д.",date:"2025-01-15",descr:"Меблі для дитячої кімнати безпечні та яскраві. Дитина в захваті!",rate:4.5},{_id:"682fbbdf8acbdf505592acf8",name:"Людмила А.",date:"2025-01-21",descr:"Гардеробна система – це мрія. Тепер у нас повний порядок в речах.",rate:4.5},{_id:"682fbbdf8acbdf505592acfd",name:"Софія Г.",date:"2025-01-31",descr:"Крісло-кокон – ідеальне місце для релаксу. Дуже задоволена!",rate:4},{_id:"682fbbdf8acbdf505592ad17",name:"Дарія З.",date:"2025-03-24",descr:"Тумба для ванної кімнати дуже містка, все помістилося.",rate:5},{_id:"682fbbdf8acbdf505592ad24",name:"Роман Г.",date:"2025-04-19",descr:"Картина 'Абстракція Модерн' прикрасила нашу вітальню. Дуже задоволені.",rate:5},{_id:"682fbbdf8acbdf505592ad25",name:"Олена Л.",date:"2025-04-21",descr:"Менеджер допоміг з вибором, врахувавши всі наші побажання.",rate:5},{_id:"682fbbdf8acbdf505592ad32",name:"Ірина Г.",date:"2025-05-17",descr:"Вибір дитячих меблів дуже великий. Знайшли саме те, що шукали.",rate:4},{_id:"682fbbdf8acbdf505592ace3",name:"Наталія Л.",date:"2024-12-09",descr:"Замовляли кухню. Консультант допоміг з вибором, дизайн-проект безкоштовний. Дуже задоволені результатом!",rate:4.5},{_id:"682fbbdf8acbdf505592ace8",name:"Павло Р.",date:"2024-12-19",descr:"Шафа-купе ідеально вписалася в інтер'єр. Збірка зайняла небагато часу.",rate:5}],total:88,page:"1",limit:"10"};document.addEventListener("DOMContentLoaded",()=>{y(".feedback-data-container",i.feedbacks),h()});function y(a,s){if(!s||!Array.isArray(s))return;const n=document.querySelector(a);if(!n)return;const e=`${new URL("/goit-mebleria/assets/icons-yBS_w1Iq.svg",import.meta.url).href}#star`,o=i.feedbacks.map(({_id:c,name:d,date:l,descr:f,rate:u})=>`
    <li class="feedback-item swiper-slide" data_id="${c}">
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
      <p class="feedback-text">${f}</p>
      <p class="feedback-author">${d}</p>
    </li>
    `).join("");n.innerHTML=o}function h(){new p(".feedback-swiper",{modules:[m,v,g,w],direction:"horizontal",loop:!1,pagination:{el:".feedback-swiper-pagination",type:"bullets",clickable:!0},navigation:{prevEl:".feedback-swiper-button-prev",nextEl:".feedback-swiper-button-next"},slidePerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},mousewheel:{enabled:!0,forceToAxis:!0,invert:!1}})}
//# sourceMappingURL=index.js.map
