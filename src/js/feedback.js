import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import feedbackData from './feedback-data.js';

document.addEventListener('DOMContentLoaded', () => {
  markupFeedbackData('.feedback-data-container', feedbackData.feedbacks);
  initSwiper();
/*
  const feedback_container = document.querySelector('.feedback-data-container');

  if (!feedback_container) return;

  const spriteUrl = new URL('../img/icons.svg', import.meta.url).href;
  const iconId = 'star';

  const url = `${spriteUrl}#${iconId}`;

  const markup = feedbackData.feedbacks.map(({ _id, name, date, descr, rate }) => `
    <li class="feedback-item" data_id="${_id}">
  <!--          
      <div class="feedback-rating rating value-3">
        <div class="start-container"></div>
      </div>
    -->
      <div class="feedback-rating" data-date="${date}" data-rate="${rate}">
        <div class="feedback-star-wrapper">
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star">
            <use href="${url}"></use>
          </svg>
        </div>
      </div>
      <p class="feedback-text">${descr}</p>
      <p class="feedback-author">${name}</p>
    </li>
    `
  ).join('');

  feedback_container.innerHTML = markup;
*/
});

function markupFeedbackData(selectorOrElement, data) {

  if (!selectorOrElement || !data || !Array.isArray(data)) return;

  const isString = (typeof selectorOrElement === 'string');
  
  const feedback_container = isString ? document.querySelector(selectorOrElement) : selectorOrElement;

  if (!feedback_container) return;

  const spriteUrl = new URL('../img/icons.svg', import.meta.url).href;
  const iconId = 'star';

  const url = `${spriteUrl}#${iconId}`;

  const markup = feedbackData.feedbacks.map(({ _id, name, date, descr, rate }) => `
    <li class="feedback-item swiper-slide" data_id="${_id}">
  <!--          
      <div class="feedback-rating rating value-3">
        <div class="start-container"></div>
      </div>
    -->
      <div class="feedback-rating" data-date="${date}" data-rate="${rate}">
        <div class="feedback-star-wrapper">
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star is-marked">
            <use href="${url}"></use>
          </svg>
          <svg class="feedback-star">
            <use href="${url}"></use>
          </svg>
        </div>
      </div>
      <p class="feedback-text">${descr}</p>
      <p class="feedback-author">${name}</p>
    </li>
    `
  ).join('');

  feedback_container.innerHTML = markup;
}

function initSwiper() {
  const swiper = new Swiper('.feedback-swiper', {
    modules: [Navigation, Pagination, Keyboard, Mousewheel],
    direction: 'horizontal',
    loop: false,

    pagination: {
      el: '.feedback-swiper-pagination',
      type: 'bullets',
      clickable: true,
/*      
      dynamicBullets: true,
      dynamicMainBullets: 3,
*/
    },

    navigation: {
      prevEl: '.feedback-swiper-button-prev',
      nextEl: '.feedback-swiper-button-next',
    },

    slidePerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: false,
    },

    mousewheel: {
      enabled: true,
      forceToAxis: true,
      invert: false,
    }
  });
}