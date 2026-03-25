import{a as d,S as u,i as f}from"./assets/vendor-1EDrP4NX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){return d.get("https://pixabay.com/api/",{params:{key:"55130808-0237c91bd8603b9007a67866c",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const y=new u(".gallery a"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function h(s){const o=s.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <div>likes${r.likes}</div>
        <div>views${r.views}</div>
        <div>comments${r.comments}</div>
        <div>downloads${r.downloads}</div>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function p(){c.innerHTML=""}function g(){l.classList.remove("is-hidden")}function v(){l.classList.add("is-hidden")}const n=document.querySelector(".js-form");n.addEventListener("submit",async s=>{s.preventDefault();const r=new FormData(n).get("search-text").trim();p(),g(),m(r).then(i=>{h(i.hits)}).catch(i=>{f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{v()}),n.reset()});
//# sourceMappingURL=index.js.map
