// import { Promise } from 'es6-promise';
// import 'whatwg-fetch';

const store = {};
const APPLICATION_ID = 'f447f032c85fe4767100f8ee9b88f75dc8000ef73d35bc21486e3be535fd9862';

export default store;

store.fetchById = (id) => {
    return fetch(`https://api.unsplash.com/photos/${id}?client_id=${APPLICATION_ID}`);
}

store.fetchByPage = (page = 1) => {
    return fetch(`https://api.unsplash.com/photos?page=${page}&client_id=${APPLICATION_ID}`)
        .then((response) => response.json());
}
