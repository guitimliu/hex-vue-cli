<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <template v-for="menu in adminMenus" :key="menu.name">
                        <router-link class="list-group-item" :to="menu.link">{{ menu.name }}</router-link>
                    </template>
                    <router-link class="list-group-item text-start" to="" @click="logout">登出</router-link>
                </div>
            </div>
            <div class="col-md-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import checkLogin from '@/assets/script/checkLogin'

export default {
  data () {
    return {
      adminMenus: [
        {
          name: '商品列表',
          link: '/admin/products'
        },
        {
          name: '訂單列表',
          link: '/admin/orders'
        }
      ]
    }
  },
  methods: {
    logout () {
      axios.post('https://vue3-course-api.hexschool.io/v2/logout')
        .then((res) => {
          alert(res.data.message)
          location.reload()
        })
        .catch(() => { /* error */ })
    }
  },
  mounted () {
    checkLogin(this)
  }
}
</script>
