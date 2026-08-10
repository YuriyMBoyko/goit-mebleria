(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu-open]'),
    closeModalBtns: document.querySelectorAll('[data-mobile-menu-close]'),
    modal: document.querySelector('[data-mobile-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
