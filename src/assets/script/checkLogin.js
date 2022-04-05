import axios from 'axios'

export default function (that) {
  axios.defaults.headers.common.Authorization = localStorage.getItem('token')

  axios.post(`${process.env.VUE_APP_API_URL}api/user/check`)
    .then(() => { /* success */ })
    .catch(() => {
      that.$router.push('./adminLogin')
    })
}
