<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <cart-form></cart-form>
  </div>
</template>

<script>
import CartForm from '@/components/CartForm.vue'

export default {
  name: 'CartView',
  components: {
    CartForm
  },
  data () {
    return {
      title: '購物車'
    }
  }
}
</script>
