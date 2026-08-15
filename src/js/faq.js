import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import faqIconsUrl from '../img/icons.svg';
import faqData from './faq-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const ac_container = document.querySelector('.accordion-container');

  if (!ac_container) return;

/*  const spriteUrl = new URL('../img/icons.svg', import.meta.url).href;*/
  const iconId = 'chevron-down';

  const url = `${faqIconsUrl}#${iconId}`;

  const markup = faqData.faq.map(({ question, answer }) => `
    <div class="ac">
      <h3 class="ac-header">
        <button class="ac-trigger" type="button">
          <span>${question}</span>
          <svg class="faq-question-arrow">
            <use href="${url}"></use>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <p class="ac-text">${answer}</p>
      </div>
    </div>
    `
  ).join('');

  ac_container.innerHTML = markup;

  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
  });
});

/* Second method
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-trigger-button').forEach(button => {
    button.addEventListener('click', toggleButtonClick);
  });
});

function toggleButtonClick(event) {
  const clickedButton = event.currentTarget;

  if (clickedButton) {
    const faq_item = clickedButton.closest('.faq-item');

    if (faq_item) {
      const is_open = faq_item.classList.contains('is-active');

      document.querySelectorAll('.faq-item').forEach(element => {
        element.classList.remove('is-active');
      });

      if (!is_open) {
        faq_item.classList.add('is-active');
      }
    }
  }
}
*/
