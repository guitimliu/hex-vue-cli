<template>
  <div class="home">
    <div class="container">
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
      <form class="w-50 mx-auto">
        <div class="my-2">
          <label for="username" class="form-label">管理員帳號</label>
          <input type="text" id="username" name="username" v-model="user.username" class="form-control">
        </div>
        <div class="my-2">
          <label for="password" class="form-label">管理員密碼</label>
          <input type="password" id="password" name="password" v-model="user.password" class="form-control">
        </div>
        <div class="my-2">
          <input type="submit" class="btn btn-primary w-100" @click.prevent="sendLogin" value="登入">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'loginAdmin',
  data () {
    return {
      title: '管理員後台',
      desc: '請先登入',
      user: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    sendLogin () {
      axios.post(`${process.env.VUE_APP_API_URL}admin/signin`, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `vueLogin=${token}; expired=${new Date(expired)}`
          // 驗證是否登入
          this.checkLogin(token)
        })
        .catch(() => {
          alert('登入失敗，請確認帳號密碼是否正確。')
        })
    },
    checkLogin (token) {
      axios.defaults.headers.common.Authorization = token

      axios.post(`${process.env.VUE_APP_API_URL}api/user/check`)
        .then(() => {
          alert('登入成功')
          this.$router.push('https://www.google.com/')
        })
        .catch(() => {
          alert('登入失敗，請確認帳號密碼是否正確。')
        })
    }
  }
}
</script>
