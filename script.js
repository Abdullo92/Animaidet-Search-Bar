const searchBarConEl = document.querySelector('.search-bar-container')
const magnifierEl = document.querySelector('.magnifier');


magnifierEl.addEventListener('click', () => {
    searchBarConEl.classList.toggle('active');
});