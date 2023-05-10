const allSkeletons = document.querySelectorAll('.skeleton');

window.addEventListener('load', () => {
  allSkeletons.forEach(item => {
    item.classList.remove('skeleton');
  })
})

/* btn-airbnb */
const buttons = document.querySelectorAll('.btn-airbnb');

buttons.forEach(element => {
  element.addEventListener('mousemove', e => {
    const rect = element.getBoundingClientRect();

    const x = (e.clientX - rect.left) * 100 / element.clientWidth;
    const y = (e.clientY - rect.top) * 100 / element.clientHeight;

    element.style.setProperty('--mouse-x', x);
    element.style.setProperty('--mouse-y', y);
  })
})


/* dropdown */
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown__menu');

// открытие/закрытие списка
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle("dropdown-show"); // adds/removes the class dropdown-show
});

// клик вне пунктов меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown__menu') && !event.target.closest('.dropdown__button')) {
    dropdownMenu.classList.remove('dropdown-show');
  }
});

// закрытие меню по клику на пункт
const dropdownMenuItems = document.querySelectorAll('.dropdown__menu-item');
dropdownMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('dropdown-show');
  });
});


/* tabs */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', e => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = path => {
    tabsContent.forEach(el => el.classList.remove('tabs__content--active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  }
})


/* popup */
const searchTarget = document.querySelector('.help-search');
const searchPopup = document.querySelector('#search-popup');

/* открытие/закрытие списка */
searchTarget.addEventListener('click', () => {
  searchPopup.classList.toggle('popup-show');
})

// закрытие меню по клику на пункт
const popupOptions = document.querySelectorAll('.popup-options');

popupOptions.forEach(option => {
  option.addEventListener('click', () => {
    searchPopup.classList.remove('popup-show');
  })
})


// клик вне пунктов меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('#search-popup') && !event.target.closest('.help-search')) {
    searchPopup.classList.remove('popup-show');
  }
});


// обводка при фокусе формы
const formSearch = document.querySelector('#form');

formSearch.addEventListener("focusin", () => formSearch.classList.add('focused'));
formSearch.addEventListener("focusout", () => formSearch.classList.remove('focused'));


/* модалка ask question */
const modal = document.querySelector('#modal-question');
const openModal = document.querySelector('.btn-ask');
const closeModal = document.querySelector('#close-button');

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
