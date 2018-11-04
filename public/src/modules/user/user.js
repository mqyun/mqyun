import './user.styl'
import yunAxios from '../../components/yunAxios/yunAxios'

$(function () {
  yunAxios({
    url: '/test',
    loadingDom: false
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
})