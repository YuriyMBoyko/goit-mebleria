import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqData = [
  {
    question: 'Як здійснюється доставка меблів?',
    answer: 'Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону.'
  },
  {
    question: 'Чи є можливість вибрати колір або матеріал?',
    answer: 'Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару.'
  },
  {
    question: 'Чи можна повернути товар, якщо він не підійшов?',
    answer: 'Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді.'
  },
  {
    question: 'Чи надаєте ви послугу збирання меблів?',
    answer: 'Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час.'
  },
  {
    question: 'Як здійснити оплату?',
    answer: 'Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні.'
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const markup = faqData.map(({ question, answer }) => `
    <div class="ac">
      <h3 class="ac-header">
        <button class="ac-trigger" type="button">
          <span>${question}</span>
          <svg class="faq-question-arrow">
            <use href="./img/icons.svg#chevron-down"></use>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <p class="ac-text">${answer}</p>
      </div>
    </div>
    `
  ).join('');

  const ac_container = document.querySelector('.accordion-container');

  if (ac_container) {
    ac_container.innerHTML = markup;

    new Accordion('.accordion-container', {
      duration: 400,
      showMultiple: false,
      onOpen: function (element) {
        console.log(element);
      }
    });
  }
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
