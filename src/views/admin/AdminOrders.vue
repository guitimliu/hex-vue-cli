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
            <tr v-for="item in orders" :key="item">
                <td>{{ item.id }}</td>
                <td>{{ item.user.name }}</td>
                <td>{{ item.create_at }}</td>
                <td>{{ item.total }}</td>
            <td>
                <button type="button" v-on:click="deliveryProduct({...item})" class="btn btn-secondary"  >
                    編輯訂單
                </button>
                <button type="button" class="btn btn-danger ms-2" @click="temp = {...item}" data-bs-toggle="modal" data-bs-target="#deleteModal">刪除訂單</button>
            </td>
            </tr>
        </tbody>
    </table>
    <deleteOrder :data="temp" @render-orders="getOrders"/>
</template>

<script>
import axios from 'axios'
import deleteOrder from '@/components/DeleteOrder.vue'

export default {
  components: {
    deleteOrder
  },
  data () {
    return {
      orders: null
    }
  },
  methods: {
    getOrders (page = 1) {
      axios.get(`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_API_PATH}/admin/orders?page=${page}`)
        .then(res => {
          this.orders = res.data.orders
        })
        .catch(() => { /* error */ })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
