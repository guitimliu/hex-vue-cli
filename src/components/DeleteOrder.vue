<template>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">刪除訂單</h5>
                </div>
                <div class="modal-body">
                    <p>確定刪除 <span class="text-danger">{{ data?.id }}</span> 訂單？</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
                    <button @click="deleteOrder" data-bs-dismiss="modal" type="button" class="btn btn-danger">刪除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    renderOrders () {
      this.$emit('render-orders')
    },
    deleteOrder () {
      axios.delete(`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_API_PATH}/admin/order/${this.data.id}`)
        .then(() => {
          alert('已成功刪除訂單')
          this.renderOrders()
        })
        .catch(() => { /* error */ })
    }
  },
  props: ['data']
}
</script>
