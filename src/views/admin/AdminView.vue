<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="list-group">
                    <template v-for="menu in adminMenus" :key="menu.name">
                        <router-link class="list-group-item" :to="menu.link">{{ menu.name }}</router-link>
                    </template>
                </div>
            </div>
            <div class="col-md-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
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
  mounted () {
    checkLogin(this)
  }
}
</script>
