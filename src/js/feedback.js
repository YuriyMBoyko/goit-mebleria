import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.css';
import { setElementVisible } from './helper.js';
/*import { buildStarRatingMarkup } from './feedback-star.js'*/
import feedbackData, { feedbackEmptyData } from './feedback-data.js';
import spriteUrl from '../img/star-rating.icons.svg';

document.addEventListener('DOMContentLoaded', () => {
  markupFeedbackData('.feedback-data-container', feedbackData.feedbacks);
//  markupFeedbackData('.feedback-data-container', feedbackEmptyData.feedbacks);
  initSwiper();
  updateVisible();
});

function markupFeedbackData(selectorOrElement, data) {

  if (!selectorOrElement || !data || !Array.isArray(data)) return;

  const isString = (typeof selectorOrElement === 'string');
  
  const feedback_container = isString ? document.querySelector(selectorOrElement) : selectorOrElement;

  if (!feedback_container) return;
/*
  const spriteUrl = new URL('../img/icons.svg', import.meta.url).href;
  const iconId = 'star';

  const url = `${spriteUrl}#${iconId}`;
*/
  const markup = data.map(({ _id, name, date, descr, rate }) => {
    return `
      <li class="swiper-slide feedback-item" data_id="${_id}">
        <div class="feedback-rating" data-date="${date}" data-rate="${rate}">${buildStarRatingMarkup(rate)}</div>
        <p class="feedback-text">${descr}</p>
        <p class="feedback-author">${name}</p>
      </li>`;
  }).join('');

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

function updateVisible() {
  const elem = document.querySelector('.feedback-list');
  if (elem) {
    setElementVisible('.feedback-swiper-controls', elem.childElementCount > 0);
  }
}
/*
function buildStarRatingMarkup(rate) {

  const { rateIntValue, rateIsHalf } = rateNormalize(rate);
  const halfClass = rateIsHalf ? 'half' : '';

  const starMarkup = getStarMarkup();
  const starMarkup = getStarMarkupByTemplate(selectorOrElement);

  const starsMarkup = Array.from({ length: 5 }, () => { return starMarkup; }).join('');

  return `
    <div class="rating star-svg value-${rateIntValue} ${halfClass} color-default feedback-star-wrapper">
      <div class="star-container">${starsMarkup}</div>
    </div>`;
}

function buildStarRatingEmptyMarkup(rate) {
  return '';
}

function getStarMarkup() {
  const spriteUrl = new URL('../img/star-rating.icons.svg', import.meta.url).href;

  return `
    <div class="star">
      <svg class="star-empty"><use href="${spriteUrl}#star-empty"></use></svg>
      <svg class="star-half"><use href="${spriteUrl}#star-half"></use></svg>
      <svg class="star-filled"><use href="${spriteUrl}#star-filled"></use></svg>
    </div>`;
}

function rateNormalize(value) {
  let rate = Math.round(10 * Math.max(0, (Math.min(5, Number(value) || 0))));
  rate = (rate >= 33 && rate <= 37) ? 35 : ((rate >= 38 && rate <= 42) ? 40 : rate);
  return {
    rateValue: rate / 10,
    rateIntValue: Math.floor(rate / 10),
    rateIsHalf: (rate % 10) >= 5
  };
}
*/





export function buildStarRatingMarkup(rate) {

  const { rateIntValue, rateIsHalf } = rateNormalize(rate);
  const halfClass = rateIsHalf ? 'half' : '';

  const starMarkup = getStarMarkup();

  const starsMarkup = Array.from({ length: 5 }, () => { return starMarkup; }).join('');

  return `
    <div class="rating star-svg value-${rateIntValue} ${halfClass} color-default feedback-star-wrapper">
      <div class="star-container">${starsMarkup}</div>
    </div>`;
}

export function buildStarRatingEmptyMarkup(rate) {
  return '';
}

function getStarMarkup() {
/*  const spriteUrl = new URL('../img/star-rating.icons.svg', import.meta.url).href;*/

  return `
    <div class="star">
      <svg class="star-empty"><use href="${spriteUrl}#star-empty"></use></svg>
      <svg class="star-half"><use href="${spriteUrl}#star-half"></use></svg>
      <svg class="star-filled"><use href="${spriteUrl}#star-filled"></use></svg>
    </div>`;
}

function rateNormalize(value) {
  let rate = Math.round(10 * Math.max(0, (Math.min(5, Number(value) || 0))));
  rate = (rate >= 33 && rate <= 37) ? 35 : ((rate >= 38 && rate <= 42) ? 40 : rate);
  return {
    rateValue: rate / 10,
    rateIntValue: Math.floor(rate / 10),
    rateIsHalf: (rate % 10) >= 5
  };
}
