<template>
    <h1 class="h3">訂單列表</h1>
    <table class="table table-hover table-striped table-borderless shadow" data-aos="zoom-in">
        <thead>
            <tr>
                <th class="percenTwenly">訂單 ID</th>
                <th class="percenTwenly">訂購人</th>
                <th class="percenTwenly">訂單時間</th>
                <th class="percenTwenly">價格</th>
                <th class="percenTwenly">查看細節</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in orders" :key="item" >
                <td>
                  <button
                    type="button"
                    class="btn"
                    :class="{'btn-success': item.is_paid, 'btn-danger': !item.is_paid}">
                      {{ item.id }}
                  </button>
                </td>
                <td>{{ item.user.name }}</td>
                <td>{{ item.create_at }}</td>
                <td>{{ item.total }}</td>
            <td>
                <button type="button" v-on:click="temp = {...item}" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#orderDetail">
                    查看
                </button>
                <button type="button" class="btn btn-danger ms-2" @click="temp = {...item}" data-bs-toggle="modal" data-bs-target="#deleteModal">刪除</button>
            </td>
            </tr>
        </tbody>
    </table>
    <Pagination :data="pagination" @return-page="getOrders" />
    <deleteOrder :data="temp" @render-orders="getOrders"/>
    <updateOrder :data="temp" @render-products="getOrders" />
</template>

<script>
import axios from 'axios'
import checkLogin from '@/assets/script/checkLogin'
import Pagination from '@/components/PaginationButton.vue'
import deleteOrder from '@/components/DeleteOrder.vue'
import updateOrder from '@/components/UpdateOrder.vue'

export default {
  components: {
    Pagination,
    deleteOrder,
    updateOrder
  },
  data () {
    return {
      orders: null,
      pagination: null,
      temp: null
    }
  },
  methods: {
    getOrders (page = 1) {
      axios.get(`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_API_PATH}/admin/orders?page=${page}`)
        .then(res => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch((err) => { console.dir(err) })
    }
  },
  mounted () {
    checkLogin()
    this.getOrders()
  }
}
</script>

<style lang="scss" scoped>
.percenTwenly {
    width: 20%;
}
</style>
