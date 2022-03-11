<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
  data () {
    return {
      title: '管理員後台',
      desc: '請先登入'
    }
  }
}
</script>
