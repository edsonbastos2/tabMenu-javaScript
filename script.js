function initTab() {
  const tabMenu = document.querySelectorAll('[data-anime="tabMenu"] li');
  const section = document.querySelectorAll('[data-anime="tabSection"] section');
  if (tabMenu.length && section.length) {
    section[0].classList.add('ativo');
    function activTab(index) {
      section.forEach(item => {
        item.classList.remove('ativo');
      })
      section[index].classList.add('ativo');
    }
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => activTab(index))
    })
  }
}
initTab();


function initScrollSuave() {
  const linkInternos = document.querySelectorAll('a[href^="#"]');

  if (linkInternos.length) {
    function scrollSuave(event) {
      event.preventDefault()
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    linkInternos.forEach((link) => {
      link.addEventListener('click', scrollSuave)
    })
  }
}

initScrollSuave();


