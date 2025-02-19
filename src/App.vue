<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    RouterLink,
    RouterView,
    AppHeader,
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style lang="scss" scoped>

</style>
