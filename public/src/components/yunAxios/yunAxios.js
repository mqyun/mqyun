import axios from 'axios'
import yunLoading from '../yunLoading/yunLoading'

let loading = '';

axios.interceptors.request.use(config => {
  let parentDom = config.loadingDom;
  loading = new yunLoading(parentDom);
  loading.init();
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers.common['Authorization'] = 'Bearer ' + token
  // }
  return config;
}, error => {
  loading.remove();
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  loading.remove();
  return response.data;
}, error => {
  loading.remove();
  return Promise.reject(error.response);
})

export default axios

/**
 * yunAxios
 * config.loadingDom : loading图标加载的父级DOM
 */