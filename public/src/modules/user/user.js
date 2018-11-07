import './user.styl'
import yunAxios from '../../components/yunAxios/yunAxios'

$(() => {
  
})

$(document).on('click', '.btn-login', () => {
  let account = $('input[name="account"]').val();
  let password = $('input[name="password"]').val();
  yunAxios({
    method: 'post',
    url: '/login',
    data: {
      account,
      password
    }
  }).then(res => {
    if (res.code > 0) {
      setTimeout(() => {
        location.href = '/sentence';
      }, 1500);
    } else {
      alert(res.message);
    }
  }).catch(err => {
    console.log(err);
  })
})