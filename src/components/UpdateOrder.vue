<template>
  <div class="modal fade" id="orderDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5>訂單細項</h5>
            <div class="ms-2">
                <button v-if="newData.is_paid" @click="newData.is_paid = !newData.is_paid" class="btn btn-success">啟用</button>
                <button v-else @click="newData.is_paid = !newData.is_paid" class="btn btn-danger">未啟用</button>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <ul class="list-unstyled">
                <li class="py-1">
                    <label for="purchaserName" class="form-label">
                        購買人姓名
                    </label>
                    <input type="text" class="form-control" id="purchaserName" v-model="newData.user.name">
                </li>
                <li class="py-1">
                    <label for="purchaserTel" class="form-label">
                        購買人電話
                    </label>
                    <input type="tel" class="form-control" id="purchaserTel" v-model="newData.user.tel">
                </li>
                <li class="py-1">
                    <label for="purchaserEmail" class="form-label">
                        購買人信箱
                    </label>
                    <input type="tel" class="form-control" id="purchaserEmail" v-model="newData.user.email">
                </li>
                <li class="py-1">
                    <label for="purchaserAddress" class="form-label">
                        購買人地址
                    </label>
                    <input type="tel" class="form-control" id="purchaserAddress" v-model="newData.user.address">
                </li>
                <li class="py-1">
                  <table class="table table-hover table-striped table-borderless shadow" data-aos="zoom-in">
                    <thead>
                      <tr>
                          <th class="percenTwenly">商品名稱</th>
                          <th class="percenTwenly">商品分類</th>
                          <th class="percenTwenly">商品單價</th>
                          <th class="percenTwenly">購買數量</th>
                          <th class="percenTwenly">商品總價</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, key) in newData.products" :key="key">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.product.category }}</td>
                        <td>{{ item.product.price }}</td>
                        <td>{{ item.qty }}</td>
                        <td>{{ item.total }}</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li class="text-end py-1">
                    總金額：{{ newData.total }}
                </li>
                <li class="py-1">
                    <label for="orderMessage" class="form-label">
                        留言
                    </label>
                    <textarea type="text" class="form-control" id="orderMessage" v-model="newData.message" rows="3"></textarea>
                </li>
                <li class="text-end py-3">
                    <button @click="pushData" data-bs-dismiss="modal" type="button" class="btn btn-success rounded-2 w-25 ms-2">送出</button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      newData: {
        user: {}
      }
    }
  },
  props: ['data'],
  watch: {
    data () {
      this.newData = this.data
      this.setOriginPrice = this.newData.origin_price !== this.newData.price
    }
  },
  methods: {
    pushData () {
      console.log(this.newData.id)
      axios.put(`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_API_PATH}/admin/order/${this.newData.id}`, {
        data: this.newData
      })
        .then((res) => {
          alert(res.data.message)
          this.$emit('render-products')
        })
        .catch(() => {
          alert('資料有誤')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.percenTwenly {
    width: 20%;
}
</style>
