import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=s=>`<li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
            <img
              class="gallery-image"
              src="${s.webformatURL}"
              alt="${s.tags}"
              width="360"
            />
          </a>
          <div class="main-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="info-titel">${s.likes}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="info-titel">${s.views}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="info-titel">${s.comments}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="info-titel">${s.downloads}</p>
            </div>
          </div>
        </li>`,c=document.querySelector(".js-search-form"),h=document.querySelector(".js-gallery"),i=document.querySelector(".loader");i.style.display="none";const p=s=>{s.preventDefault();const l=c.elements.user_query.value;i.style.display="block",fetch(`https://pixabay.com/api/?key=47019110-2ca5c662ec937047bff385c25&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{i.style.display="none",r.hits.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),console.log(r);const o=r.hits.map(t=>u(t)).join("");h.innerHTML=o,c.reset(),new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{i.style.display="none",console.log(r)})};c.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
