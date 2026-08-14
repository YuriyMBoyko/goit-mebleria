import spriteUrl from '../img/star-rating.icons.svg';

export function buildStarRatingMarkup(selectorOrElement, rate) {

  const { rateIntValue, rateIsHalf } = rateNormalize(rate);
  const halfClass = rateIsHalf ? 'half' : '';

  const starMarkup = getStarMarkup();
/*  const starMarkup = getStarMarkupByTemplate(selectorOrElement);*/

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
/*
export function buildStarRatingMarkupByTemplate(selectorOrElement, rate) {

  const { rateIntValue, rateIsHalf } = rateNormalize(rate);
  const halfClass = rateIsHalf ? 'half' : '';

  const starsMarkup = Array.from({ length: 5 }, getStarMarkup).join('');

}
*/
function getStarMarkupByTemplate(selectorOrElement) {
  console.log(selectorOrElement)
  if (!selectorOrElement) return '';

  const isString = (typeof selectorOrElement === 'string');
  
  const template = isString ? document.querySelector(selectorOrElement) : selectorOrElement;
  console.log(template);

  if (template) {
/*
    const s = template.innerHtml;
    console.log(s);

    const wrapper = document.createElement('div');
    console.log(wrapper.outerHtml);

    const clone = template.content.cloneNode(true);
    console.log(clone.outerHtml);

    wrapper.appendChild(clone);
    console.log(wrapper);
    console.log('wrapper innerHtml');
    console.log(wrapper.childNodes[1].innerHtml);
*/
    return template.innerHtml;
  }
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
