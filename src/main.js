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
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const query = formData.get('search-text').trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(result => {
      if (result.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(result.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});
