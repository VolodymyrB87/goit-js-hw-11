import{a as u,S as f,i as n}from"./assets/vendor-1EDrP4NX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){return u.get("https://pixabay.com/api/",{params:{key:"55130808-0237c91bd8603b9007a67866c",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const y=new f(".gallery a"),c=document.querySelector(".gallery"),d=document.querySelector(".loader");function g(s){const o=s.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <div>likes${r.likes}</div>
        <div>views${r.views}</div>
        <div>comments${r.comments}</div>
        <div>downloads${r.downloads}</div>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){c.innerHTML=""}function p(){d.classList.remove("is-hidden")}function v(){d.classList.add("is-hidden")}const l=document.querySelector(".js-form");l.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(l).get("search-text").trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query!"});return}h(),p(),m(r).then(i=>{if(i.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(i.hits)}).catch(i=>{n.error({title:"Error",message:"Something went wrong. Please try again later!"})}).finally(()=>{v()}),l.reset()});
//# sourceMappingURL=index.js.map
