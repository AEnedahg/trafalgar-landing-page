const more_services_grid = document.getElementsByClassName('more-services')[0];
const more_services_btn = document.getElementsByClassName('more-services-btn')[0];

more_services_btn.addEventListener('click', ()=> {
  more_services_grid.classList.remove('hidden');
  more_services_grid.classList.add('grid');
  more_services_btn.classList.add('hidden');
  more_services_btn.classList.remove('block');
})

const more_articles_grid = document.getElementsByClassName('more-articles-grid')[0];
const more_articles_btn = document.getElementsByClassName('more-articles-btn')[0];

more_articles_btn.addEventListener('click', ()=> {
  more_articles_grid.classList.remove('hidden');
  more_articles_grid.classList.add('grid');
  more_articles_btn.classList.remove('block');
  more_articles_btn.classList.add('hidden');
})