import { getCardTemplate, getDetail } from './templates.js';

const detailSection = document.getElementById('gifs-detail');
const gifContainer = document.getElementById('gifs-container');

function callApi(q) {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=x1yhuk9hyH8pRDIyOJhg6nRedXPmp96y&q=${q}&limit=20`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log('data', data);
      renderGifs(data.data);
    });
}

function renderGifs(gifs) {
  const gifContainer = document.getElementById('gifs-container');
  gifs.forEach((gif) => {
    const card = document.createElement('div');
    card.innerHTML = renderCard(gif);
    gifContainer.appendChild(card);
    addListenerDetailButton(document.getElementById(gif.id), gif);
  });
}

function renderCard(gif) {
  const template = getCardTemplate(gif);
  return template;
}

function addListenerDetailButton(node, gif) {
  node.addEventListener('click', () => {
    const detailSection = document.getElementById('gifs-detail');
    const gifContainer = document.getElementById('gifs-container');
    gifContainer.style.display = 'none';
    detailSection.style.display = 'flex';
    detailSection.innerHTML = renderDetail(gif);
    const buttonBack = document.getElementById(`${gif.id}-back`);
    buttonBack.addEventListener('click', () => {
      goback();
    });
  });
}

function renderDetail(gif) {
  const template = getDetail(gif);
  return template;
}

function goback() {
  gifContainer.style.display = 'flex';
  detailSection.style.display = 'none';
}

(function init() {
  callApi('naruto');
})();
