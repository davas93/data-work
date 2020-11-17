let filter = document.querySelector('.filter');
let filterMenu  = document.querySelector('.filter-dropdown');
let menu = document.querySelector('.data-list__act-icon');
let actMenu = document.querySelector('.action-menu');
filter.onclick = function() {
  filterMenu.classList.toggle('filter-dropdown--active')
};
menu.onclick = function() {
  actMenu.classList.toggle('action-menu--active')
};