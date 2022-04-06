<template>
    <button type="button" v-on:click="showDetail()" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#productDetail">
        新增商品
    </button>
    <table class="table table-hover table-striped table-borderless shadow" data-aos="zoom-in">
        <thead>
            <tr>
                <th class="percenTwenly">產品名稱</th>
                <th class="percenTwenly">原價</th>
                <th class="percenTwenly">售價</th>
                <th class="percenTwenly">是否啟用</th>
                <th class="percenTwenly">查看細節</th>
            </tr>
        </thead>
        <tbody>
            <!-- 商品清單 -->
            <tr v-for="item in products" :key="item">
            <td>{{ item.title }}</td>
            <td><del>{{ item.origin_price }}</del></td>
            <td>{{ item.price }}</td>
            <td>
                <span class="rounded-2 bg-success p-1" v-if="item.is_enabled">啟用</span>
                <span class="rounded-2 bg-danger p-1" v-else>未啟用</span>
            </td>
            <td>
                <button type="button" v-on:click="showDetail(item)" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#productDetail">
                    編輯商品
                </button>
                <button type="button" class="btn btn-danger ms-2" @click="temp = {...item}" data-bs-toggle="modal" data-bs-target="#deleteModal">刪除商品</button>
            </td>
            </tr>
        </tbody>
    </table>
    <Pagination :data="pagination" @return-page="getProducts" />
    <deleteProduct :data="temp" @render-products="getProducts"/>
</template>

<script>
import axios from 'axios'
import checkLogin from '@/assets/script/checkLogin'
import Pagination from '@/components/PaginationButton.vue'
import deleteProduct from '@/components/DeleteProduct.vue'

export default {
  components: {
    Pagination,
    deleteProduct
  },
  data () {
    return {
      products: null,
      pagination: null,
      temp: null
    }
  },
  methods: {
    getProducts (page = 1) {
      axios.get(`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_API_PATH}/admin/products?page=${page}`)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch(() => { /* error */ })
    }
  },
  mounted () {
    checkLogin()
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.percenTwenly {
    width: 20%;
}
</style>
