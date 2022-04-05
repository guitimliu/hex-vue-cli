<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" v-if="data?.has_pre">
                <button type="button" class="page-link" @click="changePage(data?.current_page-1)">
                    上一頁
                </button>
            </li>
            <template v-for="page in data?.total_pages" :key="page">
                <li v-if="page != data?.current_page" class="page-item">
                    <button type="button" class="page-link" @click="changePage(page)">
                        {{ page }}
                    </button>
                </li>
                <li v-else class="page-item disabled">
                    <button type="button" class="page-link" @click="changePage(page)">
                        {{ page }}
                    </button>
                </li>
            </template>
            <li class="page-item" v-if="data?.has_next">
                <button type="button" class="page-link" @click="changePage(data?.current_page+1)">
                    下一頁
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  methods: {
    changePage (page) {
      this.$emit('return-page', page)
    }
  },
  props: ['data']
}
</script>
