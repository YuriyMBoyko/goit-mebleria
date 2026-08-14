/*
export function buildStarRatingMarkup(rate) {
  return '';
}
*/
export function buildStarRatingMarkup(rate) {
  const { rateIntValue, rateIsHalf } = rateNormalize(rate);
  const halfClass = rateIsHalf ? 'half' : '';

  const starsMarkup = Array.from({ length: 5 }, getStarMarkup).join('');

  return `
    <div class="rating star-svg value-${rateIntValue} ${halfClass} color-default feedback-star-wrapper">
      <div class="star-container">${starsMarkup}</div>
    </div>`;
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
