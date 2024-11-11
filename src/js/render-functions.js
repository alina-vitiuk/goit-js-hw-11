export const createGalleryCardTemplate = imgInfo => {
  return `<li class="gallery-item">
          <a class="gallery-link" href="${imgInfo.largeImageURL}">
            <img
              class="gallery-image"
              src="${imgInfo.webformatURL}"
              alt="${imgInfo.tags}"
              width="360"
            />
          </a>
          <div class="main-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="info-titel">${imgInfo.likes}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="info-titel">${imgInfo.views}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="info-titel">${imgInfo.comments}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="info-titel">${imgInfo.downloads}</p>
            </div>
          </div>
        </li>`;
};
