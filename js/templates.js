export const getCardTemplate = (gif) => `
  <div class="card" style="width: 18rem;">
    <img src="${gif.images['downsized'].url}" class="card-img-top card-img" alt="${gif.title}">
    <div class="card-body">
        <h5 class="card-title">${gif.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button id="${gif.id}" class="btn btn-primary">Go Detail</button>
    </div>
  </div>`;

export const getDetail = (gif) => {
  return `
    <div class="container detail-container">
        <h1>${gif.title}</h1>
        <div class="detail-row">
            <img src="${gif.images['original'].url}" class="img-detail" alt="${gif.title}">
            <div class="detail-actions">
                <button class="btn btn-warning" type="button" id="${gif.id}-back">Back to list</button>
            </div>
        </div>  
    </div>
    `;
};
