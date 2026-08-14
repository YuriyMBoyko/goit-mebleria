import feedbackData from './feedback-data.js';

document.addEventListener('DOMContentLoaded', () => {
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
});
