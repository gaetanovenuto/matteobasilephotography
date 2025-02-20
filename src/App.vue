<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    RouterLink,
    RouterView,
    AppHeader,
    AppFooter,
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
  <AppFooter />
</template>

<style lang="scss" scoped>

</style>
