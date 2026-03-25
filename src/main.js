import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-form');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(form);
  const qury = formData.get('search-text').trim();
  clearGallery();
  showLoader();
  getImagesByQuery(qury)
    .then(result => {
      createGallery(result.hits);
    })
    .catch(erro => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});
