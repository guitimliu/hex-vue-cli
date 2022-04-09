<template>
  <div class="modal fade" id="productDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5 v-if="is_edit" class="modal-title" id="exampleModalLabel">編輯商品</h5>
            <h5 v-else class="modal-title" id="exampleModalLabel">新增商品</h5>
            <div class="ms-2">
                <button v-if="newData.is_enabled" @click="newData.is_enabled = !newData.is_enabled" class="btn btn-success">啟用</button>
                <button v-else @click="newData.is_enabled = !newData.is_enabled" class="btn btn-danger">未啟用</button>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <ul class="list-unstyled">
                <li class="py-1">
                    <label for="productName" class="form-label">
                        商品標題
                    </label>
                    <input type="text" class="form-control" id="productName" v-model="newData.title">
                </li>
                <li class="py-1">
                    <label for="productCategory" class="form-label">
                        商品分類
                    </label>
                    <input type="text" id="productCategory" class="form-control" v-model="newData.category">
                </li>
                <li class="py-1">
                    <label for="productDescription" class="form-label">
                        商品描述
                    </label>
                    <input type="text" class="form-control" id="productDescription" v-model="newData.description">
                </li>
                <li class="py-1">
                    <label for="productContent" class="form-label">
                        商品內容
                    </label>
                    <textarea type="text" class="form-control" id="productContent" v-model="newData.content" rows="3"></textarea>
                </li>
                <li class="py-1">
                    <label for="productPrice" class="form-label">
                        商品價格
                    </label>
                    <input type="number" min="0" class="form-control" id="productPrice" v-model="newData.price">
                </li>
                <li class="py-1">
                    <div class="py-1">
                        <input type="checkbox" class="form-check-input" id="setOriginPrice" v-model="setOriginPrice">
                        <label for="setOriginPrice" class="form-check-label ms-1">
                            此價格為特價，輸入商品原價
                        </label>
                    </div>
                    <div class="py-1" v-if="setOriginPrice">
                        <label for="productOriginPrice" class="form-label">
                            商品原價
                        </label>
                        <input type="number" min="0" class="form-control" id="productOriginPrice" v-model="newData.origin_price">
                    </div>
                </li>
                <li v-if="newData.price" class="py-1">
                    <span class="h2 text-danger">{{ newData.price }}</span> <del v-if="setOriginPrice">{{ newData.origin_price }}</del> / 元
                </li>
                <li class="py-1">
                    <label for="productImages">圖片</label>
                    <input type="file" id="productImages" class="productImages" @change="uploadImage">
                    <div class="py-3">
                        <datalate v-for="(img,key) in newData.imagesUrl" :key="key">
                            <img :src="img" alt="圖片" class="w-100">
                        </datalate>
                    </div>
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
      setOriginPrice: true,
      newData: {}
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
      let crud

      this.newData.id ? crud = 'put' : crud = 'post'

      if (!this.setOriginPrice) {
        this.newData.origin_price = this.newData.price
      }

      if (this.newData.id === undefined) {
        this.newData.id = ''
      }

      axios[crud](`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_API_PATH}/admin/product/${this.newData.id}`, {
        data: {
          title: this.newData.title,
          category: this.newData.category,
          origin_price: parseFloat(this.newData.origin_price),
          price: parseFloat(this.newData.price),
          unit: '個',
          description: this.newData.description,
          content: this.newData.content,
          is_enabled: this.newData.is_enabled,
          imageUrl: this.newData.imageUrl,
          imagesUrl: this.newData.imagesUrl
        }
      })
        .then((res) => {
          alert(res.data.message)
          this.$emit('render-products')
        })
        .catch(() => {
          alert('資料有誤')
        })
    },
    uploadImage () {
      const imagesUrl = document.querySelector('#productImages')
      console.log(imagesUrl)
      const imgData = imagesUrl.files

      const formData = new FormData()
      formData.append('file-to-upload', imgData[0])

      axios.post(`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_API_PATH}/admin/upload/`, formData)
        .then((res) => {
          this.newData.imageUrl = res.data.imageUrl
          if (!this.newData.imagesUrl) {
            this.newData.imagesUrl = []
          }
          this.newData.imagesUrl.push(this.newData.imageUrl)
        })
        .catch((err) => { console.dir(err) })
    }
  }
}
</script>
